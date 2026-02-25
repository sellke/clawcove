# Product Mission (Lite)

> Source: .writ/product/mission.md
> Purpose: Efficient AI context for development tasks

## Core Value
ClawCove is a managed hosting platform for OpenClaw AI agents. Non-technical users deploy their own always-on AI agent in under 5 minutes, connect it to Telegram or Discord via guided wizards, and manage it from a web dashboard. No SSH, no DevOps.

## Target Users
Non-technical AI enthusiasts who've heard about OpenClaw and want their own agent, but can't self-host. They don't know what EC2 is and shouldn't have to.

## Product Positioning
OpenClaw is front and center — ClawCove is "the easiest way to run OpenClaw." Think Vercel for Next.js, but for OpenClaw agents.

## Key Differentiator
Consumer-grade UX on top of OpenClaw's power. Guided channel wizards, one-click deploy, managed reliability. The competition is self-hosting (too hard) and generic chatbot builders (not OpenClaw).

## Success Metrics
- 500+ waitlist signups (Phase 0)
- 100+ active agents within 3 months of launch
- <5 min signup-to-agent time
- >50% free-to-Pro conversion

## Current Phase
**Phase 0: Validate** — Landing page + waitlist + content marketing to prove demand before building infrastructure.

## Pricing
- Free: $0/mo (limited messages, single channel)
- Pro: $29/mo (full agent, all channels, backups)
- Team: $99/mo (multiple agents, shared workspace)

## Tech Stack
Next.js 15 + tRPC + Neon PostgreSQL + Terraform/AWS EC2 + Stripe + NextAuth.js. Monolith-first on Vercel. One EC2 instance per agent.

## Key Decisions
- Validate before building (waitlist-first)
- Non-technical audience (not developers)
- OpenClaw-native (not generic hosting)
- 2 channel wizards at MVP (Telegram + Discord)
- Content marketing for acquisition (YouTube, blog, social)
