# Wire Up OpenClaw and X.com Footer Links

> **Type:** Improvement
> **Priority:** Normal
> **Effort:** Small
> **Created:** 2026-03-10

## TL;DR

Replace the placeholder `#` hrefs on the OpenClaw and Twitter/X footer links with their real URLs.

## Current State

- "OpenClaw" link in the Product footer group points to `#`
- "Twitter / X" link in the Product footer group points to `#`

## Expected Outcome

- "OpenClaw" links to `https://openclaw.ai/`
- "Twitter / X" links to `https://x.com/ClawCove`
- Both open in a new tab (`target="_blank"`, `rel="noopener noreferrer"`)

## Relevant Files

- `src/components/layout/footer.tsx` - Contains the `linkGroups` config with the placeholder hrefs

## Related Issues

- [2026-03-10-privacy-policy-terms-of-service](../features/2026-03-10-privacy-policy-terms-of-service.md) - Same pattern: dead `#` footer links needing real destinations
