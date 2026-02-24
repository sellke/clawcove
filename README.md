# 🦞 ClawCove

**OpenClaw hosting, simplified.** Your own AI agent, running 24/7, in 5 minutes.

No SSH. No DevOps. No tears.

## What is ClawCove?

ClawCove is a managed hosting platform for [OpenClaw](https://github.com/openclaw/openclaw) agents. We handle the infrastructure so you can focus on what matters — having a powerful AI assistant that's always on.

## Features

- **One-click deploy** — Spin up a fully configured OpenClaw agent on AWS
- **Guided onboarding** — Connect Telegram, Discord, WhatsApp, or any channel in minutes
- **Managed infrastructure** — TLS, backups, updates, monitoring — all handled
- **Skill marketplace** — Browse and install pre-built agent skills
- **Web dashboard** — Monitor, configure, and manage your agent from anywhere

## Pricing

| Plan | Price | What You Get |
|------|-------|-------------|
| **Free** | $0/mo | Try it out — limited messages/day, single channel |
| **Pro** | $29/mo | Full agent, all channels, custom skills, daily backups |
| **Team** | $99/mo | Multiple agents, shared workspace, priority support |

## Tech Stack

- **Frontend:** Next.js 15, TypeScript, Tailwind CSS
- **Backend:** Next.js API routes + tRPC
- **Database:** PostgreSQL (Neon)
- **Infrastructure:** Terraform (AWS EC2 provisioning)
- **Billing:** Stripe
- **Auth:** NextAuth.js

## Getting Started (Development)

```bash
# Install dependencies
bun install

# Set up environment
cp .env.example .env.local

# Run development server
bun dev
```

## Project Structure

```
clawcove/
├── src/
│   ├── app/          # Next.js app router pages
│   ├── components/   # React components
│   └── lib/          # Core logic, API clients, utilities
├── infra/            # Terraform modules for EC2 provisioning
├── public/           # Static assets
└── .writ/            # Writ development workflow
    ├── docs/         # Technical documentation
    ├── specs/        # Feature specifications
    └── product/      # Product planning
```

## Architecture

```
User → ClawCove Dashboard → Provisioning API → AWS EC2
                ↓                    ↓
           Stripe Billing    OpenClaw Install + Config
                                     ↓
                              User's AI Agent (24/7)
```

## License

MIT

---

Built with ⚡ by [ClawCove](https://clawcove.com)
