# Story 5: Landing Page — Features, Pricing & Trust

> **Status:** Complete
> **Priority:** High
> **Dependencies:** Story 1 (Project Scaffolding)

## User Story

**As a** visitor who understands what ClawCove does (from scrolling past the hero)
**I want to** see specific features, transparent pricing, and trust signals
**So that** I feel confident enough to join the waitlist

## Acceptance Criteria

- [x] Given the features section, when I view it, then I see 4-6 feature cards with icons, titles, and one-sentence descriptions
- [x] Given the pricing section, when I view it, then I see 3 tiers (Free, Pro, Team) with the Pro tier visually highlighted as recommended
- [x] Given the pricing section, when I read the prices, then I see "coming soon" badges and a note about planned launch pricing
- [x] Given the OpenClaw-native section, when I view it, then I understand ClawCove is purpose-built for OpenClaw (not generic hosting) with a link to OpenClaw
- [x] Given any viewport width, when I view these sections, then they are fully responsive

## Implementation Tasks

- [x] 5.1 Build `Features` section — responsive grid of 4-6 cards: one-click deploy, guided channel wizards, managed reliability, web dashboard, skill marketplace (coming soon badge), always-on 24/7. Each card: icon + title + description.
- [x] 5.2 Build `Pricing` section — 3-tier table/cards: Free ($0/mo), Pro ($29/mo, highlighted), Team ($99/mo). Include feature lists per tier, "Coming Soon" badges, "Planned launch pricing" note.
- [x] 5.3 Build `OpenClawNative` section — explains the purpose-built relationship, differentiator messaging, link to OpenClaw project, open-source trust signals
- [x] 5.4 Build `FAQ` section — collapsible accordion (5-7 items): What is OpenClaw?, Do I need technical skills?, Which channels are supported?, What happens to my data?, When will ClawCove launch?, Can I self-host instead? Use shadcn/ui Accordion component.
- [x] 5.5 Build `FinalCTA` section — full-width waitlist form (reuse shared form component from Story 4), compelling headline, privacy note
- [x] 5.6 Build `Footer` component — ClawCove logo + tagline, links (Blog, Twitter/X, OpenClaw), legal placeholders (Privacy Policy, Terms), copyright
- [x] 5.7 Verify responsive behavior and visual consistency across all sections and breakpoints

## Notes

- Pricing section: all three tiers are aspirational — no payment processing exists yet. Make this clear visually.
- Pro tier highlighting: use a slightly elevated card, different border/background color, or "Recommended" badge
- FAQ content should be empathetic to non-technical users. Avoid jargon.
- The FinalCTA section reuses the same waitlist form component as the Hero — keep it DRY
- Footer legal links can point to placeholder pages for now

## Definition of Done

- [x] All tasks completed
- [x] All acceptance criteria met
- [x] All sections render correctly and are responsive
- [x] FAQ accordion opens/closes correctly
- [x] Footer links are present (even if placeholder)
