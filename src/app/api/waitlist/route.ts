import { eq, isNotNull, count as sqlCount } from "drizzle-orm";
import { SignJWT } from "jose";
import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { waitlistEntries } from "@/lib/db/schema";
import { createBrevoContact, sendConfirmationEmail } from "@/lib/email/brevo";
import { checkRateLimit } from "@/lib/rate-limit";

const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 60 * 60 * 1000;

const waitlistSchema = z.object({
  email: z.email("Please enter a valid email address"),
  channels: z.array(z.string()).optional(),
  referralSource: z.string().optional(),
  website: z.string().optional(), // honeypot
});

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown"
  );
}

function getTokenSecret(): Uint8Array {
  const secret = process.env.WAITLIST_TOKEN_SECRET;
  if (!secret) throw new Error("WAITLIST_TOKEN_SECRET is not configured");
  return new TextEncoder().encode(secret);
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);

    const { success: withinLimit } = checkRateLimit(
      ip,
      RATE_LIMIT,
      RATE_WINDOW_MS,
    );
    if (!withinLimit) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many requests. Please try again later.",
        },
        { status: 429 },
      );
    }

    const body = await request.json();
    const parsed = waitlistSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const { email, channels, referralSource, website } = parsed.data;

    // Honeypot — bots fill hidden fields; silently accept to not tip them off
    if (website) {
      return NextResponse.json({
        success: true,
        message: "Check your email to confirm your spot!",
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    const existing = await db
      .select({ id: waitlistEntries.id })
      .from(waitlistEntries)
      .where(eq(waitlistEntries.email, normalizedEmail))
      .limit(1);

    if (existing.length > 0) {
      return NextResponse.json({
        success: true,
        message: "You're already on the list! We'll be in touch soon.",
      });
    }

    const token = await new SignJWT({
      email: normalizedEmail,
      purpose: "waitlist-confirm",
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("24h")
      .sign(getTokenSecret());

    await db.insert(waitlistEntries).values({
      email: normalizedEmail,
      channels: channels ?? [],
      referralSource: referralSource ?? null,
      ipAddress: ip,
      metadata: { confirmToken: token },
    });

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
    const confirmUrl = `${siteUrl}/api/waitlist/confirm?token=${token}`;

    try {
      const [brevoContactId] = await Promise.all([
        createBrevoContact(normalizedEmail),
        sendConfirmationEmail(normalizedEmail, confirmUrl),
      ]);

      if (brevoContactId) {
        await db
          .update(waitlistEntries)
          .set({ brevoContactId })
          .where(eq(waitlistEntries.email, normalizedEmail));
      }
    } catch (emailError) {
      console.error(
        "Brevo integration error (signup still saved):",
        emailError,
      );
    }

    return NextResponse.json({
      success: true,
      message: "Check your email to confirm your spot!",
    });
  } catch (error) {
    console.error("Waitlist signup error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const result = await db
      .select({ value: sqlCount() })
      .from(waitlistEntries)
      .where(isNotNull(waitlistEntries.confirmedAt));

    return NextResponse.json(
      { count: result[0]?.value ?? 0 },
      { headers: { "Cache-Control": "public, s-maxage=60" } },
    );
  } catch (error) {
    console.error("Waitlist count error:", error);
    return NextResponse.json({ count: 0 });
  }
}
