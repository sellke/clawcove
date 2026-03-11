# Add Privacy Policy and Terms of Service Content

> **Type:** Feature
> **Priority:** Normal
> **Effort:** Medium
> **Created:** 2026-03-10

## TL;DR

Create dedicated Privacy Policy and Terms of Service pages and wire up the existing dead footer links.

## Current State

- Footer has "Legal" section with "Privacy Policy" and "Terms of Service" links pointing to `#`
- No `/privacy` or `/terms` routes exist
- No legal content has been drafted

## Expected Outcome

- `/privacy` route with Privacy Policy content
- `/terms` route with Terms of Service content
- Footer links updated to point to the real routes
- Pages styled consistently with the rest of the site

## Relevant Files

- `src/components/layout/footer.tsx` - Contains the dead `#` links that need updating
- `src/app/` - Where new route directories (`privacy/`, `terms/`) will be created
