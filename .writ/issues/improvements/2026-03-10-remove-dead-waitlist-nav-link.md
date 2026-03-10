# Remove Dead "Join the Waitlist" Navigation Link

> **Type:** Improvement
> **Priority:** Low
> **Effort:** Small
> **Created:** 2026-03-10

## TL;DR

The "Join the Waitlist" button in the header navigation is a dead link that just scrolls to the hero section — remove it from both desktop and mobile nav.

## Current State

- Desktop nav has a "Join the Waitlist" `<Button>` (scrolls to `#hero`)
- Mobile nav has an identical "Join the Waitlist" `<Button>` in the slide-out menu
- Neither links to a dedicated page or meaningful target — they just scroll up

## Expected Outcome

- Both "Join the Waitlist" buttons removed from the navigation
- Desktop nav shows only the four content links (Use Cases, Why ClawCove, Pricing, Blog)
- Mobile nav shows the same four links without the extra CTA at the bottom

## Relevant Files

- `src/components/layout/navigation.tsx` - Contains both desktop (lines 84–92) and mobile (lines 135–142) "Join the Waitlist" buttons
