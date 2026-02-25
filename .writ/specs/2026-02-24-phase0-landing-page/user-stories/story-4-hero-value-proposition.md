# Story 4: Landing Page — Hero & Value Proposition

> **Status:** Complete
> **Priority:** High
> **Dependencies:** Story 1 (Project Scaffolding)

## User Story

**As a** visitor arriving at ClawCove for the first time
**I want to** immediately understand what ClawCove does and why I should care
**So that** I'm compelled to scroll further or join the waitlist right away

## Acceptance Criteria

- [x] Given I land on the page, when the hero loads, then I see a clear headline, subheadline, email input CTA, and a visual element — all above the fold on desktop
- [x] Given the hero, when I read the headline and subheadline, then I understand ClawCove is the easiest way to run an OpenClaw AI agent
- [x] Given the navigation bar, when I scroll down, then it becomes sticky with a filled background
- [x] Given any viewport width (320px to 1920px+), when I view the hero and pain points sections, then they are fully responsive and visually polished
- [x] Given the pain points section, when I read the 3 cards, then I understand why self-hosting OpenClaw is hard and why ClawCove solves it

## Implementation Tasks

- [x] 4.1 Build `Navigation` component — logo, section anchors (How it Works, Pricing, Blog, FAQ), "Join the Waitlist" CTA button, sticky behavior with transparent→filled transition, mobile hamburger menu
- [x] 4.2 Build `Hero` section — headline, subheadline, inline email input + submit button (desktop), stacked on mobile. Abstract/illustrated visual placeholder.
- [x] 4.3 Build `PainPoints` section — 3 cards layout (server provisioning, ongoing maintenance, channel configuration) with icons and empathetic copy
- [x] 4.4 Build `HowItWorks` section — 3-step visual walkthrough (Sign Up → Deploy → Connect) with numbered steps, icons, connecting visual flow line, "Under 5 minutes" emphasis
- [x] 4.5 Wire hero email input to waitlist API endpoint (POST /api/waitlist) with client-side validation, loading state, success/error feedback
- [x] 4.6 Add subtle entrance animations (fade-up on scroll) using Framer Motion or CSS Intersection Observer
- [x] 4.7 Verify responsive behavior across breakpoints (320px, 768px, 1024px, 1440px) — all sections render correctly

## Notes

- The hero illustration should be abstract/conceptual — do NOT mock up a dashboard or product that doesn't exist yet. Gradient shapes, flowing lines, or agent/bot iconography work well.
- Navigation "Join the Waitlist" button should smooth-scroll to the hero email input or the final CTA section
- The hero email input is the same waitlist form used throughout — share the form component
- Pain points section tone: empathetic, not condescending. "You shouldn't need to be a DevOps engineer to have an AI assistant."

## Definition of Done

- [x] All tasks completed
- [x] All acceptance criteria met
- [x] Navigation, Hero, Pain Points, and How It Works sections render correctly
- [x] Responsive on all target breakpoints
- [x] Hero email form submits to API successfully
