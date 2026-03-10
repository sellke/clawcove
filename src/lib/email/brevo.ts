import { BrevoClient } from "@getbrevo/brevo";

function getClient(): BrevoClient | null {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) return null;
  return new BrevoClient({ apiKey });
}

const SENDER = {
  name: "ClawCove",
  email: "shell@clawcove.ai",
} as const;

export async function createBrevoContact(
  email: string,
): Promise<string | null> {
  const client = getClient();
  if (!client) {
    console.warn("[brevo] BREVO_API_KEY not set — skipping contact creation");
    return null;
  }

  try {
    const response = await client.contacts.createContact({
      email,
      updateEnabled: true,
      attributes: { WAITLIST_SIGNUP: new Date().toISOString() },
    });
    const id = response.id?.toString() ?? null;
    return id;
  } catch (error) {
    console.error("[brevo] Failed to create contact:", error);
    return null;
  }
}

export async function sendConfirmationEmail(
  email: string,
  confirmUrl: string,
): Promise<void> {
  const client = getClient();
  if (!client) {
    console.warn("[brevo] BREVO_API_KEY not set — skipping confirmation email");
    return;
  }

  try {
    await client.transactionalEmails.sendTransacEmail({
      sender: SENDER,
      to: [{ email }],
      subject: "Confirm your spot on the ClawCove waitlist",
      htmlContent: buildConfirmationHtml(confirmUrl),
      tags: ["waitlist", "confirmation"],
    });
  } catch (error) {
    console.error("[brevo] Failed to send confirmation email:", error);
  }
}

export async function updateBrevoContact(
  email: string,
  attributes: Record<string, string | number | boolean>,
): Promise<void> {
  const client = getClient();
  if (!client) {
    console.warn("[brevo] BREVO_API_KEY not set — skipping contact update");
    return;
  }

  try {
    await client.contacts.updateContact({ identifier: email, attributes });
  } catch (error) {
    console.error("[brevo] Failed to update contact:", error);
  }
}

// ---------------------------------------------------------------------------
// Email template
// ---------------------------------------------------------------------------

function buildConfirmationHtml(confirmUrl: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Confirm your ClawCove waitlist spot</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f7fa;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f7fa;padding:40px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0369a1,#0ea5e9);padding:32px 40px;text-align:center;">
              <h1 style="margin:0;font-size:24px;font-weight:700;color:#ffffff;letter-spacing:-0.3px;">
                🦀 ClawCove
              </h1>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <h2 style="margin:0 0 16px;font-size:22px;font-weight:700;color:#0f172a;line-height:1.3;">
                Confirm your spot on the waitlist
              </h2>
              <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#475569;">
                Thanks for signing up! We're building the simplest way to host your own OpenClaw AI agent — running 24/7, fully managed, zero DevOps.
              </p>
              <p style="margin:0 0 32px;font-size:16px;line-height:1.6;color:#475569;">
                Tap the button below to confirm your email and lock in your early-access spot.
              </p>
              <!-- CTA -->
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
                <tr>
                  <td align="center" style="background-color:#0369a1;border-radius:8px;">
                    <a href="${confirmUrl}" target="_blank" style="display:inline-block;padding:14px 36px;font-size:16px;font-weight:600;color:#ffffff;text-decoration:none;border-radius:8px;">
                      Confirm My Email
                    </a>
                  </td>
                </tr>
              </table>
              <!-- Fallback link -->
              <p style="margin:28px 0 0;font-size:13px;line-height:1.5;color:#94a3b8;word-break:break-all;">
                Or copy this link into your browser:<br/>
                <a href="${confirmUrl}" style="color:#0369a1;text-decoration:underline;">${confirmUrl}</a>
              </p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;border-top:1px solid #e2e8f0;text-align:center;">
              <p style="margin:0;font-size:13px;line-height:1.5;color:#94a3b8;">
                If you didn't sign up for ClawCove, you can safely ignore this email.
              </p>
              <p style="margin:8px 0 0;font-size:12px;color:#cbd5e1;">
                &copy; ${new Date().getFullYear()} ClawCove. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
