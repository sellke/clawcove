# Set Up Vercel Environment & Brevo Domain

> **Type:** Feature
> **Priority:** High
> **Effort:** Small
> **Created:** 2026-02-25

## TL;DR

Configure Vercel project with environment variables and custom domain, and authenticate the sender domain in Brevo so transactional emails deliver from `hello@clawcove.com`.

## Current State

- Vercel project exists but environment variables (`DATABASE_URL`, `BREVO_API_KEY`, `WAITLIST_TOKEN_SECRET`, `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_POSTHOG_KEY`, `NEXT_PUBLIC_POSTHOG_HOST`) are not configured for production/preview
- Custom domain (`clawcove.com`) not yet attached to Vercel project
- Brevo sender domain (`clawcove.ai`) not authenticated — emails from `shell@clawcove.ai` will fail or land in spam
- `.env.example` documents required vars but no production values are set

## Expected Outcome

- All environment variables from `.env.example` configured in Vercel for **Production** and **Preview** environments
- `clawcove.com` (and `www.clawcove.com`) added as custom domains in Vercel with DNS records verified
- `NEXT_PUBLIC_SITE_URL` set to `https://clawcove.com` in production
- Brevo sender domain (`clawcove.ai`) authenticated via DKIM, SPF, and DMARC DNS records
- `shell@clawcove.ai` verified as sender — confirmation emails deliver to inbox

## Relevant Files

- `.env.example` - Documents all required environment variables
- `src/lib/email/brevo.ts` - Brevo client using `BREVO_API_KEY`, sends from `hello@clawcove.com`
- `src/app/api/waitlist/route.ts` - Waitlist API using Brevo + DB env vars

## Notes

- DNS changes (domain verification, DKIM/SPF) may take up to 48 hours to propagate
- Brevo free tier supports 300 emails/day — sufficient for waitlist phase
- Consider setting `WAITLIST_TOKEN_SECRET` to a strong random value (e.g., `openssl rand -base64 32`)
