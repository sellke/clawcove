# Technical Specification: Phase 0 Landing Page

> Created: 2026-02-24
> Relates to: .writ/specs/2026-02-24-phase0-landing-page/spec.md

## Architecture Overview

Single Next.js 15 application deployed on Vercel. No microservices, no separate backend. The app serves the landing page (SSG), blog (SSG), and API routes (serverless functions). Database is Neon PostgreSQL accessed via Drizzle ORM. Email handled by Brevo API. Analytics by PostHog client-side SDK.

```
Browser → Vercel (Next.js)
             ├── Static pages (landing, blog) → CDN
             ├── API routes (/api/waitlist/*) → Serverless Functions
             │     ├── Neon PostgreSQL (Drizzle ORM)
             │     └── Brevo API (email)
             └── PostHog (client-side analytics)
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (font, metadata, PostHog provider)
│   ├── page.tsx                # Landing page (composed of section components)
│   ├── blog/
│   │   ├── page.tsx            # Blog list
│   │   └── [slug]/page.tsx     # Blog post
│   └── api/
│       └── waitlist/
│           ├── route.ts        # POST (signup) + GET (count)
│           └── confirm/route.ts # GET (email confirmation)
├── components/
│   ├── ui/                     # shadcn/ui components
│   ├── sections/               # Landing page sections (Hero, PainPoints, HowItWorks, Features, Pricing, FAQ, FinalCTA, OpenClawNative)
│   ├── layout/                 # Navigation, Footer
│   └── forms/                  # WaitlistForm (shared between Hero and FinalCTA)
├── content/
│   └── blog/                   # MDX blog posts
├── lib/
│   ├── db/
│   │   ├── index.ts            # Drizzle client + Neon connection
│   │   └── schema.ts           # Database schema
│   ├── email/
│   │   └── brevo.ts            # Brevo SDK wrapper
│   ├── analytics/
│   │   └── posthog.ts          # PostHog provider + helpers
│   └── utils.ts                # Shared utilities (cn, rate-limit, token generation)
└── styles/
    └── globals.css             # Tailwind directives + custom design tokens
```

## Dependencies (to install)

- next (already configured)
- tailwindcss@next, @tailwindcss/postcss, @tailwindcss/typography (Tailwind v4 + typography plugin)
- drizzle-orm, drizzle-kit, @neondatabase/serverless (database)
- @getbrevo/brevo (email)
- posthog-js (analytics)
- next-mdx-remote (blog MDX rendering)
- framer-motion (animations)
- geist (font)
- zod (validation)
- class-variance-authority, clsx, tailwind-merge (styling utilities for shadcn)
- lucide-react (icons)
- jose (JWT for confirmation tokens)

## Database Schema (Drizzle)

```typescript
import { pgTable, uuid, text, timestamp, jsonb } from "drizzle-orm/pg-core";

export const waitlistEntries = pgTable("waitlist_entries", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").unique().notNull(),
  channels: text("channels").array(),
  referralSource: text("referral_source"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  confirmedAt: timestamp("confirmed_at"),
  ipAddress: text("ip_address"),
  brevoContactId: text("brevo_contact_id"),
  metadata: jsonb("metadata"),
});
```

## API Design

### POST /api/waitlist

- **Request:** `{ email: string, honeypot?: string }`
- **Validation:** Zod schema, email format, honeypot empty check
- **Rate limit:** 3 per IP per hour (in-memory Map with TTL)
- **Flow:** validate → check duplicate → store in DB → create Brevo contact → send confirmation email → return success
- **Response:** `{ success: true, message: "Check your email!" }` or `{ success: false, error: string }`

### GET /api/waitlist/confirm?token=xxx

- **Token:** JWT containing email, signed with app secret, 24h expiry
- **Flow:** verify token → find entry by email → set confirmedAt → update Brevo → redirect to `/?confirmed=true`
- **Error:** invalid/expired token → redirect to `/?error=invalid-token`

### GET /api/waitlist/count

- **Response:** `{ count: number }` (confirmed entries only)
- **Cache:** 60s cache header to reduce DB queries

## Environment Variables

- `DATABASE_URL` — Neon connection string
- `BREVO_API_KEY`
- `NEXT_PUBLIC_POSTHOG_KEY`
- `NEXT_PUBLIC_POSTHOG_HOST`
- `WAITLIST_TOKEN_SECRET` — for signing confirmation JWTs
- `NEXT_PUBLIC_SITE_URL` — for confirmation links and OG URLs

## Security Considerations

- Rate limiting on signup endpoint
- Honeypot field for bot detection
- Email confirmation prevents fake signups
- JWT confirmation tokens with 24h expiry
- Input sanitization via Zod
- No sensitive data in client-side code
- Environment variables for all secrets

## Performance Strategy

- **Landing page:** Static generation (SSG) — no server rendering needed
- **Blog:** Static generation with generateStaticParams
- **API routes:** Serverless functions on Vercel
- **Images:** next/image for optimization
- **Font:** preloaded Geist via next/font
- **Animations:** GPU-accelerated transforms only
- **PostHog:** loaded asynchronously, non-blocking
