import { eq } from "drizzle-orm";
import { jwtVerify } from "jose";
import { type NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { waitlistEntries } from "@/lib/db/schema";
import { updateBrevoContact } from "@/lib/email/brevo";

function getTokenSecret(): Uint8Array {
  const secret = process.env.WAITLIST_TOKEN_SECRET;
  if (!secret) throw new Error("WAITLIST_TOKEN_SECRET is not configured");
  return new TextEncoder().encode(secret);
}

function siteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/?error=invalid-token", siteUrl()));
  }

  try {
    const { payload } = await jwtVerify(token, getTokenSecret());

    if (
      payload.purpose !== "waitlist-confirm" ||
      typeof payload.email !== "string"
    ) {
      return NextResponse.redirect(new URL("/?error=invalid-token", siteUrl()));
    }

    const email = payload.email;

    const existing = await db
      .select({
        id: waitlistEntries.id,
        confirmedAt: waitlistEntries.confirmedAt,
      })
      .from(waitlistEntries)
      .where(eq(waitlistEntries.email, email))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.redirect(new URL("/?error=invalid-token", siteUrl()));
    }

    if (!existing[0].confirmedAt) {
      await db
        .update(waitlistEntries)
        .set({ confirmedAt: new Date() })
        .where(eq(waitlistEntries.email, email));

      updateBrevoContact(email, {
        WAITLIST_CONFIRMED: true,
        WAITLIST_CONFIRMED_AT: new Date().toISOString(),
      }).catch((err) =>
        console.error("Brevo contact update failed (confirmation saved):", err),
      );
    }

    return NextResponse.redirect(new URL("/?confirmed=true", siteUrl()));
  } catch {
    return NextResponse.redirect(new URL("/?error=invalid-token", siteUrl()));
  }
}
