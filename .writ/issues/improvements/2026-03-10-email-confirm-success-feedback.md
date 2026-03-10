# Email Confirmation Lacks Visual Success Feedback

> **Type:** Improvement
> **Priority:** High
> **Effort:** Small
> **Created:** 2026-03-10

## TL;DR

After clicking the email confirmation link, users land on the homepage with no indication their sign-up was confirmed — the `?confirmed=true` query param is ignored by the UI.

## Current State

- The `/api/waitlist/confirm` route verifies the token and redirects to `/?confirmed=true`
- The homepage renders identically regardless of query params — no toast, banner, or confirmation page exists
- Users have no way to know their confirmation succeeded unless they check their email again or inspect the URL

## Expected Outcome

- When the homepage loads with `?confirmed=true`, display a clear success message (toast/modal/banner or dedicated confirmation page)
- The message should confirm the user's waitlist spot and set expectations for what happens next
- Error states (`?error=invalid-token`) should also surface user-friendly feedback
- Query params should be cleaned from the URL after displaying the message (to prevent stale state on refresh)

## Relevant Files

- `src/app/api/waitlist/confirm/route.ts` - Redirect source, appends `?confirmed=true` or `?error=invalid-token`
- `src/app/page.tsx` - Homepage that receives the redirect but doesn't react to query params
- `src/lib/db/schema.ts` - Waitlist schema with `confirmedAt` field
