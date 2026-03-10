import { posthog } from "./posthog";

export function trackEvent(
  name: string,
  properties?: Record<string, unknown>,
): void {
  try {
    if (typeof window !== "undefined" && posthog?.capture) {
      posthog.capture(name, properties);
    }
  } catch {
    // Silent fail — analytics should never break the app
  }
}

export const AnalyticsEvents = {
  WAITLIST_FORM_VIEWED: "waitlist_form_viewed",
  WAITLIST_SIGNUP_STARTED: "waitlist_signup_started",
  WAITLIST_SIGNUP_COMPLETED: "waitlist_signup_completed",
  WAITLIST_SIGNUP_ERROR: "waitlist_signup_error",
  PRICING_SECTION_VIEWED: "pricing_section_viewed",
  FAQ_ITEM_OPENED: "faq_item_opened",
  CTA_CLICKED: "cta_clicked",
  WAITLIST_EMAIL_CONFIRMED: "waitlist_email_confirmed",
  BLOG_POST_VIEWED: "blog_post_viewed",
} as const;
