# Technology Stack

## Overview

ClawCove is a managed hosting platform. The stack is chosen for rapid iteration, type safety, and seamless AWS integration.

## Languages

- **TypeScript** — Primary language throughout (frontend, backend, infrastructure-as-code)

## Frontend

- **Next.js 15** (App Router) — React framework with SSR, API routes, and edge functions
- **React 19** — UI library
- **Tailwind CSS v4** — Utility-first styling
- **shadcn/ui** — Component library built on Radix primitives

### Rationale
Next.js gives us a single deployable that handles both the marketing site and the authenticated dashboard. App Router for modern patterns, React Server Components to minimize client JS.

## Backend

- **Next.js API Routes** — REST endpoints for simple operations
- **tRPC** — Type-safe API layer between frontend and backend
- **Drizzle ORM** — Type-safe database queries, lightweight

### Rationale
tRPC eliminates the API contract problem — frontend and backend share types. Drizzle over Prisma for lighter footprint and better SQL control.

## Database

- **PostgreSQL** (Neon) — Serverless Postgres for user data, subscriptions, agent metadata
- **Drizzle** for migrations and queries

### Rationale
Neon gives us serverless scale-to-zero for dev, branching for previews, and solid production performance. Familiar PostgreSQL means no learning curve.

## Infrastructure Provisioning

- **Terraform** — AWS EC2 instance lifecycle management
- **AWS EC2** — Agent hosting (t3.small/medium based on tier)
- **AWS CloudWatch** — Monitoring and alerting
- **Let's Encrypt / Caddy** — Automated TLS on agent instances

### Rationale
Terraform over CloudFormation for multi-cloud optionality and better state management. EC2 over ECS/Fargate because OpenClaw needs persistent filesystem and long-running processes.

## Billing

- **Stripe** — Subscriptions, usage metering, customer portal
- **Stripe Checkout** — Hosted payment pages
- **Stripe Webhooks** — Subscription lifecycle events

## Authentication

- **NextAuth.js v5** — OAuth providers (GitHub, Google) + email magic links

## Development Tools

- **Bun** — Package manager and runtime
- **Biome** — Linting and formatting (replaces ESLint + Prettier)
- **Vitest** — Unit and integration testing
- **Playwright** — E2E testing

## Deployment

- **Vercel** — Dashboard and API (Next.js native)
- **Terraform Cloud** — Infrastructure state management
- **GitHub Actions** — CI/CD pipeline

## Architecture Pattern

**Monolith-first** with clear module boundaries. The web app (Vercel) orchestrates, the provisioning layer (Terraform + AWS) executes. Agent instances are independent — each user gets their own EC2 instance running OpenClaw.

```
Vercel (Dashboard + API)
    ├── Auth (NextAuth)
    ├── Billing (Stripe)
    ├── Database (Neon PostgreSQL)
    └── Provisioning Engine
        ├── Terraform (EC2 lifecycle)
        └── Setup Scripts (OpenClaw install + config)
```
