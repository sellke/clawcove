# Product Mission (Lite)

> Source: .writ/product/mission.md
> Last Updated: 2026-02-25
> Purpose: Efficient AI context for development tasks

## Core Value
ClawCove gives anyone their own personal AI assistant — powered by OpenClaw, running 24/7 on a dedicated virtual machine, fully managed. Not a chatbot. A digital coworker that drafts emails, manages calendars, browses the web, automates workflows, reviews code, and more. No SSH, no DevOps.

## Target Users
Non-technical AI enthusiasts (25-45, content creators, small business owners, hobbyists) who want a personal AI but can't self-host. They want to understand and trust what's under the hood.

## Product Positioning
"Your own personal AI — powered by OpenClaw, managed by ClawCove." OpenClaw is front and center. The competition is self-hosting (too hard), MyClaw (containers, opaque, no free tier, developer aesthetic), and generic chatbot builders (not OpenClaw).

## Four Differentiators
1. **Your own machine** — Dedicated VM per assistant (hypervisor isolation, not shared containers). "Your own private computer in the cloud."
2. **Transparent** — Model visibility (choose Claude, GPT-4, etc.), public status page, data portability, no lock-in.
3. **Community-powered** — Skill sharing, agent showcase, pre-configured templates, network effects.
4. **Approachable design** — Warm, friendly, human-centered. Light aesthetic, illustrations, conversational copy. Designed for non-technical users, not developers.

## Competitive Context
MyClaw (myclaw.ai) is live with 10k+ reservations at $19-$79/mo. Container-based, dark/techy design, no free tier, no model transparency, no community. ClawCove differentiates on VM isolation, transparency, community, and approachable design. Free tier is a competitive wedge.

## Use Cases (Highlighted)
- Daily briefings, email drafts, calendar management
- Social media content, research reports, price tracking
- Website monitoring, workflow automation, API integrations
- Code review, automated testing, PR management (power users)

## Success Metrics
- 500+ waitlist signups (Phase 0)
- 100+ active assistants within 3 months of launch
- <5 min signup-to-assistant time
- >50% free-to-Pro conversion

## Current Phase
**Phase 0: Validate** — Landing page + waitlist + blog + content marketing. Landing page built, pending deployment + strategic refresh to reflect repositioned vision.

## Pricing
- Free: $0/mo (limited messages, single channel) — competitive wedge vs MyClaw
- Pro: $29/mo (full assistant, all channels, community skills, backups)
- Team: $99/mo (multiple assistants, shared workspace)

## Tech Stack
Next.js 15 + tRPC + Neon PostgreSQL + Terraform/AWS EC2 + Stripe + NextAuth.js. Monolith-first on Vercel. One EC2 VM per assistant.

## Brand Values
Approachable. Transparent. Community-first. Trustworthy.

## Key Decisions
- Turnkey personal AI assistant, not just channel bot hosting
- VM isolation per assistant (not containers) as a trust differentiator
- Model transparency — users see and choose which AI models power their assistant
- Community-powered skill sharing and templates as a network-effect moat
- Warm, approachable design — Notion/Cal.com aesthetic, not dark/techy
- Validate before building (waitlist-first)
- Non-technical audience (not developers)
- OpenClaw-native (not generic hosting)
- Content marketing + creator/referral program for acquisition
