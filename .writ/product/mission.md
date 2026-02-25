# Product Mission

> Created: 2026-02-24
> Last Updated: 2026-02-25
> Status: Planning (Pre-validation)
> Contract Locked: ✅

## Pitch

**ClawCove** gives anyone their own personal AI assistant — powered by OpenClaw, running 24/7 on your own private machine, managed entirely for you. No SSH. No DevOps. No tears.

Your assistant can draft emails, review code, manage your calendar, browse the web, automate workflows, and more — all accessible through Telegram, Discord, or wherever you work. ClawCove handles the infrastructure so you can focus on what your AI can do for you.

## The Opportunity

OpenClaw is the world's fastest-growing open-source AI agent framework — a personal AI assistant that can see your screen, use your apps, and do real work for you. It's not a chatbot. It's a digital coworker.

But running it requires a server, SSH access, Docker, TLS certificates, dependency management, and ongoing maintenance. That locks out the vast majority of people who'd benefit from a persistent AI assistant. The people who are *most excited* about OpenClaw — sharing it on social media, driving community growth — are the *least likely* to successfully run it.

ClawCove removes the entire infrastructure layer. Sign up, tell us what you want help with, and your assistant is live. The experience is SaaS; the power is OpenClaw.

### Competitive Landscape

**MyClaw** (myclaw.ai) is an existing managed OpenClaw hosting provider. They're live, accepting payments ($19-$79/mo), and claim 10,000+ reservations. Their approach: container-based isolation, dark/techy aesthetic, hardware-spec differentiation (vCPU/RAM/storage), broad feature marketing. No free tier. No model transparency. No community features.

MyClaw validates the market — demand is real. ClawCove differentiates on four pillars where MyClaw is weak: true VM isolation, model transparency, community-powered experience, and a warmer, more approachable design for non-technical users.

## Users

### Primary Customers

**Non-technical AI enthusiasts** — People who've heard about AI agents (through social media, YouTube, word-of-mouth), are excited about having their own, but can't or won't self-host. They don't know what EC2 is, and they shouldn't have to.

### User Persona

**Alex** (25–45)
- **Role:** Content creator / small business owner / hobbyist
- **Context:** Heard about OpenClaw through a YouTube video or social post. Tried to self-host, hit a wall at "SSH into your server." Wants an AI assistant that works around the clock — drafting emails, managing their calendar, monitoring their website, or creating social media content.
- **Pain Points:**
  - Can't navigate server setup, DNS, TLS, or CLI tools
  - Doesn't want to babysit a server (updates, restarts, monitoring)
  - Tried generic chatbot builders but wants OpenClaw's power and flexibility
  - Existing managed options feel opaque — unclear what models are used, what you're actually getting
- **Goals:**
  - A personal AI assistant running 24/7 that actually *does things* for them
  - Set it up once and forget about the infrastructure
  - Customize what the assistant focuses on without writing code
  - Understand and trust what's running under the hood

## The Problem

### Self-hosting is a dealbreaker for most people

Running OpenClaw requires provisioning a server, installing dependencies, configuring networking, setting up TLS, connecting channels via API tokens, and maintaining everything indefinitely. For non-technical users, this process is inaccessible. For technical users, it's tedious.

**Our Solution:** ClawCove deploys your personal AI assistant on a dedicated virtual machine, guides you through a personalized setup that matches your use case, and provides a web dashboard for ongoing management. Users get OpenClaw's full power without touching a terminal.

## Differentiators

### 1. Your own private machine

Every ClawCove assistant runs on its own isolated virtual machine — not a shared container, not a slice of someone else's server. Full hypervisor-level isolation means your data, your processes, and your assistant's memory are completely private. No noisy neighbors, no shared kernels, no compromises.

*For users:* "Your assistant runs on its own private computer in the cloud. Nobody else can access it."

### 2. Transparent by default

ClawCove tells you what's under the hood. Which AI models power your assistant. What your uptime looks like. Where your data lives. And your data is always exportable — no lock-in, ever.

- **Model visibility:** See which models your assistant uses (Claude, GPT-4, etc.). Choose or switch models as OpenClaw supports them.
- **Public status page:** Real uptime numbers, not just promises.
- **Data portability:** Export your assistant's configuration, memory, and data at any time. Migrate to self-hosting if you want.

### 3. Community-powered

ClawCove isn't just hosting — it's a community of personal AI assistants and the people who use them.

- **Skill sharing:** "My assistant can track crypto prices and summarize daily. Here's the config." One-click install for other ClawCove users.
- **Agent showcase:** See what other assistants are doing. Get inspired. Share your setups.
- **Templates:** Pre-configured assistant personalities — "The Content Creator," "The Developer's Sidekick," "The Small Business Manager."
- **Network effects:** The more people on ClawCove, the more skills and templates exist, the more valuable every assistant becomes.

### 4. Designed for humans, not developers

The target audience isn't comfortable with dark terminal UIs. ClawCove's design is warm, approachable, and friendly — the kind of experience that makes non-technical users feel welcome, not intimidated. Think Notion, not Vercel.

- Clean, light aesthetic with warm accent colors
- Friendly illustrations showing people interacting with their AI
- Conversational copy — "meet your assistant" not "deploy your agent"
- Guided, personalized onboarding — "What do you want help with?" configures your assistant for your use case

### OpenClaw-native

ClawCove isn't a generic hosting platform. Every feature — onboarding, dashboard, monitoring, community — is purpose-built for OpenClaw. This lets us optimize the experience in ways a general hosting provider never would.

### Managed reliability

Automated TLS, daily backups, health monitoring, seamless updates, and a public status page. Users don't worry about uptime — we do.

## Product Positioning

**OpenClaw is front and center.** Users come to ClawCove *because* of OpenClaw. The brand positioning is "Your own personal AI — powered by OpenClaw, managed by ClawCove."

**Why us over MyClaw?** Your own machine (not shared containers), transparent about models and infrastructure, community-powered skill sharing, and a warmer design that doesn't feel like a developer tool.

**Why us over self-hosting?** Zero infrastructure work, always-on reliability, guided onboarding, and a community of assistants to learn from.

## What Your Assistant Can Do

### Highlighted Use Cases

**Daily life:**
- Wake up to a personalized daily briefing
- Draft and send email replies while you're away
- Manage your calendar and prep you for meetings
- Track prices and notify you when something drops
- Never forget a follow-up, birthday, or deadline

**Content & business:**
- Write social media posts from your notes
- Research a topic and compile a report by morning
- Monitor your website and alert you if anything breaks
- Automate repetitive workflows across your tools

**Technical (for power users):**
- Review pull requests and catch bugs overnight
- Run automated tests and open fix PRs while you sleep
- Connect to Slack, Discord, GitHub, and any API

The landing page should showcase 6-8 of these as vivid, relatable stories — not a feature list.

## Key Features

### Core Features (MVP — Phase 1)
- **One-click deploy:** Fully automated OpenClaw assistant provisioning on a dedicated VM
- **Personalized onboarding:** "What do you want help with?" wizard that pre-configures your assistant for your use case
- **Channel connections:** Guided setup for Telegram and Discord
- **Model selection:** Choose which AI model powers your assistant
- **Web dashboard:** Assistant status, health monitoring, configuration, conversation logs
- **Stripe billing:** Free tier (limited) and Pro tier ($29/mo)

### Growth Features (Phase 2)
- **Community & skill marketplace:** Browse, share, and install community-created skills and templates
- **Agent showcase:** See what other ClawCove assistants are doing
- **Team plan:** Multiple assistants, shared workspace, collaboration ($99/mo)
- **Additional channels:** WhatsApp, Slack, web chat embed
- **Agent personality UI:** Name, persona, behavior, knowledge base configuration
- **Onboarding refinement:** Based on Phase 1 user feedback and drop-off analysis

### Scale Features (Phase 3)
- **Usage analytics:** Message volume, response quality, trends
- **Custom domains:** White-label assistant endpoints
- **API access:** Programmatic assistant management for power users
- **Enterprise tier:** Custom pricing, SLA, priority support
- **Creator/referral program:** Affiliates earn revenue for promoting ClawCove
- **Self-hoster migration:** Import existing OpenClaw configs into ClawCove

## Success Metrics

| Metric | Target | Timeframe |
|--------|--------|-----------|
| Waitlist signups | 500+ | Phase 0 (pre-launch) |
| Active assistants | 100+ | 3 months post-launch |
| Signup-to-assistant time | < 5 minutes | Phase 1 |
| Free → Pro conversion | > 50% | Phase 1 |
| Net Promoter Score | > 50 | Phase 1 |
| Monthly churn (Pro) | < 5% | Ongoing |
| Community skills shared | 50+ | 6 months post-launch |

## Go-to-Market Strategy

**Primary channel: Content marketing**
- YouTube tutorials and demo videos ("Your own AI assistant in 5 minutes")
- Blog posts and guides targeting "AI agent" and "OpenClaw" search traffic
- Social media presence showcasing what ClawCove assistants can do for real people
- Cross-promotion with OpenClaw community
- Creator/referral program for YouTubers and influencers

**Validation first:** Phase 0 is a landing page + waitlist to gauge demand before building infrastructure. Content marketing starts immediately to drive waitlist signups and build audience.

## Pricing

| Plan | Price | What You Get |
|------|-------|-------------|
| **Free** | $0/mo | Try it out — limited messages/day, single channel |
| **Pro** | $29/mo | Full assistant, all channels, community skills, daily backups |
| **Team** | $99/mo | Multiple assistants, shared workspace, priority support |

**Free tier is a competitive wedge** — MyClaw's cheapest plan is $19/mo. A genuine free tier (even severely limited) lowers the barrier to trying a personal AI for the first time.

### Unit Economics (Pro tier)
- EC2 t4g.small (ARM): ~$12/mo
- Stripe fees (2.9% + $0.30): ~$1.14/mo
- Neon, Vercel, monitoring overhead: ~$2-3/mo
- **Estimated gross margin: ~45-50%**
- Margin improves with reserved instances and scale

## Brand Values

1. **Approachable** — Warm, friendly, human-centered. Not a developer tool. Not intimidating.
2. **Transparent** — Open about models, infrastructure, pricing, and uptime. No black boxes.
3. **Community-first** — Skills, templates, and knowledge shared openly. Network effects as a moat.
4. **Trustworthy** — Your own machine. Your data. Always exportable. No lock-in.
