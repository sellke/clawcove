# Phase 0: Landing Page + Waitlist (Lite)

> Source: .writ/specs/2026-02-24-phase0-landing-page/spec.md
> Purpose: Efficient AI context for development tasks

## What We're Building
A landing page + waitlist + minimal blog for ClawCove — a managed OpenClaw hosting platform. Phase 0 validates demand before building infrastructure. Target: 500 waitlist signups.

## Design
Clean & modern. Light backgrounds, generous whitespace, ocean blue palette (#2563eb primary). Approachable to non-technical users. Inspiration: Notion, Stripe, Cal.com. Geist font. shadcn/ui components. Subtle scroll animations.

## Page Sections
1. **Nav** — Logo, section anchors (How it Works, Pricing, Blog, FAQ), "Join Waitlist" CTA. Sticky.
2. **Hero** — Headline + subline positioning OpenClaw. Inline email signup. Abstract illustration.
3. **Pain points** — 3 cards: server provisioning, ongoing maintenance, channel configuration.
4. **How it works** — 3 steps: Sign Up → Deploy → Connect. Visual flow. "Under 5 minutes."
5. **Features** — 4-6 cards: one-click deploy, channel wizards, managed reliability, dashboard, skill marketplace (coming soon), always-on.
6. **Pricing** — 3 tiers: Free ($0), Pro ($29), Team ($99). "Coming soon" badges. Pro highlighted.
7. **OpenClaw-native** — Purpose-built positioning, link to OpenClaw, trust signals.
8. **FAQ** — 5-7 collapsible items.
9. **Final CTA** — Repeated waitlist form. Email only — channel survey via follow-up email.
10. **Footer** — Logo, blog link, social links, legal placeholders.

## Blog
Minimal MDX blog. `/blog` list + `/blog/[slug]` posts. No categories/tags/search. RSS feed. Initial post: founder story.

## Tech Stack
- Next.js 15 (App Router) + Tailwind CSS v4 + shadcn/ui
- Brevo for email (transactional confirmation + marketing automation sequences)
- Neon PostgreSQL + Drizzle ORM for waitlist entries
- PostHog for analytics (event tracking, funnels, session replay)
- MDX for blog content
- Vercel for deployment

## Waitlist Flow
1. User submits email → stored in DB → Brevo contact created → confirmation email sent
2. User clicks confirmation link → `confirmed_at` set → Brevo attribute updated
3. Brevo automation: welcome email with channel preference survey link → follow-up sequence

## Key API Routes
- `POST /api/waitlist` — email submission + validation + Brevo sync
- `GET /api/waitlist/confirm?token=xxx` — email confirmation
- `GET /api/waitlist/count` — confirmed signup count

## Database
Single `waitlist_entries` table: id (uuid), email (unique), channels (text[]), referral_source, created_at, confirmed_at, ip_address, brevo_contact_id, metadata (jsonb).

## Analytics Events
page_view, waitlist_form_viewed, waitlist_signup_started/completed/error, waitlist_email_confirmed, pricing_section_viewed, faq_item_opened, cta_clicked, blog_post_viewed.

## Performance
Lighthouse >95. FCP <1.2s. LCP <2.0s. CLS <0.1. Primarily SSG.

## Spam Prevention
Rate limiting (3/IP/hour), honeypot field, email validation, confirmation required.
