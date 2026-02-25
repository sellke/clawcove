# Phase 0: Landing Page + Waitlist Specification

> Created: 2026-02-24
> Status: Planning
> Contract Locked: ✅

## Contract Summary

**Deliverable:** A high-converting Phase 0 landing page with waitlist capture and minimal blog that validates demand for ClawCove before building infrastructure.

**Must Include:** Email capture via Brevo with follow-up email for channel preference survey (Telegram/Discord/WhatsApp/Slack/Other), clear OpenClaw-first positioning, pricing transparency, and a minimal MDX blog for content marketing — the signals needed for the go/no-go decision at 500 signups.

**Hardest Constraint:** Selling a product that doesn't exist yet to a non-technical audience. The page must generate genuine excitement and trust without a working demo, screenshots, or social proof from real users.

**Success Criteria:**
- Page converts cold traffic into waitlist signups at >5% rate
- Channel preference data collected via follow-up email survey
- SEO foundations in place for long-term content marketing compounding
- Blog supports founder story and early SEO content
- Page loads fast (<2s), looks polished on mobile, and ranks for "OpenClaw hosting" searches

**Scope Boundaries:**
- Included: Hero + value prop, "How it works" 3-step section, pricing table, waitlist form, SEO meta/OG tags, PostHog analytics, Brevo email integration with confirmation + survey follow-up, minimal MDX blog, responsive design
- Excluded: User auth, dashboard, agent provisioning, payment processing, full CMS

---

## Detailed Requirements

### Page Sections (top to bottom)

#### 1. Navigation Bar
- ClawCove logo (left)
- Section anchors: How it Works, Pricing, Blog, FAQ
- Primary CTA button: "Join the Waitlist" (scrolls to signup)
- Sticky on scroll, transparent background that fills on scroll
- Mobile: hamburger menu

#### 2. Hero Section
- **Headline:** Communicates the core promise — your own AI agent, always on, no DevOps
- **Subheadline:** Positions OpenClaw front and center — "The easiest way to run OpenClaw"
- **Primary CTA:** Waitlist signup (email input + submit, inline on desktop)
- **Visual:** Abstract/illustrated graphic suggesting AI agent deployment — NOT a screenshot of a product that doesn't exist. Clean, airy illustration style consistent with light aesthetic.
- **Social proof hint:** "Join N others on the waitlist" (hidden until count is meaningful, e.g. >50)

#### 3. Pain Point / Problem Section
- 3 pain cards highlighting why self-hosting OpenClaw is hard:
  1. Server provisioning (SSH, DNS, TLS)
  2. Ongoing maintenance (updates, restarts, monitoring)
  3. Channel configuration (API tokens, webhooks, bot setup)
- Tone: empathetic, not condescending. "You shouldn't need to be a DevOps engineer to have an AI assistant."

#### 4. "How It Works" — 3-Step Walkthrough
- Step 1: **Sign Up** — Create your account in seconds
- Step 2: **Deploy** — One click to launch your OpenClaw agent
- Step 3: **Connect** — Guided wizard connects your Telegram, Discord, or other channels
- Visual treatment: numbered steps with icons/illustrations, connected by a visual flow line
- Emphasis: "Under 5 minutes from signup to running agent"

#### 5. Features Section
- Grid of 4-6 feature cards with icons:
  - One-click deploy
  - Guided channel wizards
  - Managed reliability (TLS, backups, monitoring)
  - Web dashboard
  - Skill marketplace (coming soon)
  - Always-on 24/7
- Each card: icon + title + 1-sentence description

#### 6. Pricing Section
- 3-tier pricing table matching mission.md:
  - **Free:** $0/mo — Try it out, limited messages/day, single channel
  - **Pro:** $29/mo — Full agent, all channels, custom skills, daily backups
  - **Team:** $99/mo — Multiple agents, shared workspace, priority support
- Visual emphasis on Pro tier (recommended)
- "Coming soon" badges — these are launch prices, not active billing
- Small note: "Prices shown are planned launch pricing"

#### 7. OpenClaw-Native Section
- Explains the relationship: ClawCove is purpose-built for OpenClaw
- Differentiator: not generic hosting, every feature optimized for OpenClaw
- Link to OpenClaw project/docs
- Trust signals: open-source foundation, community-driven

#### 8. FAQ Section
- Collapsible accordion, 5-7 questions:
  - What is OpenClaw?
  - Do I need technical skills?
  - Which channels are supported?
  - What happens to my data?
  - When will ClawCove launch?
  - Can I self-host instead?
  - How much does the infrastructure cost you? (transparency builds trust)

#### 9. Final CTA / Waitlist Section
- Full-width section with waitlist form (repeated from hero)
- Email input only — minimal friction, no survey at signup
- Channel preference collected via Brevo follow-up email (see Email Flow below)
- Confirmation: inline success message + confirmation email via Brevo
- Privacy note: "We'll only email you about ClawCove. No spam."

#### 10. Footer
- ClawCove logo + tagline
- Links: Blog, Twitter/X, GitHub (if public), OpenClaw project
- Legal: Privacy Policy, Terms of Service (placeholder pages)
- Copyright

### Blog Section

#### Scope (Phase 0 — Minimal)
- MDX-powered blog with Next.js App Router
- Simple layout: post list page (`/blog`) + individual post pages (`/blog/[slug]`)
- No categories, tags, or search — just a chronological list
- Clean reading experience consistent with landing page design
- RSS feed for SEO and syndication
- Initial content: "Why we're building ClawCove" founder story

#### Blog Post Template
- Title, date, author, estimated reading time
- MDX content with support for images, code blocks, callouts
- Social sharing meta tags (OG image per post)
- Back link to blog index

### Design Direction

- **Aesthetic:** Clean & modern — light backgrounds, generous whitespace, approachable. Think Notion, Stripe, or Linear's marketing pages. The audience is non-technical; the design should feel welcoming, not intimidating.
- **Color palette:** Blue family as the primary accent. "Cove" evokes ocean/water. Blues build trust and feel professional.
  - Primary: Ocean blue (#2563eb or similar)
  - Background: White (#ffffff) with soft gray sections (#f8fafc)
  - Text: Near-black (#0f172a) for body, lighter (#64748b) for secondary
  - Accent: A brighter blue or teal for CTAs and highlights
- **Typography:** Clean sans-serif (Geist or Inter). Large hero text, readable body (16-18px base).
- **Spacing:** Generous whitespace between sections. Let the content breathe.
- **Motion:** Subtle entrance animations on scroll (fade-up, stagger). CSS transitions or Framer Motion. Nothing heavy.
- **Mobile-first:** Responsive from 320px up. All sections must work beautifully on mobile.
- **Inspiration:** Notion.so, Stripe.com, Cal.com — clean, light, trustworthy, approachable

### Technical Implementation

#### Stack
- **Framework:** Next.js 15 (App Router) — already in package.json
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui as a base component library
- **Email:** Brevo (formerly Sendinblue) — transactional API for confirmation emails + marketing automation for waitlist sequences and channel preference survey
- **Database:** Neon PostgreSQL via Drizzle ORM for waitlist entries
- **Analytics:** PostHog (event tracking, signup funnel, source attribution, session replay)
- **Blog:** MDX with Next.js (`next-mdx-remote` or `@next/mdx`)
- **Deployment:** Vercel (zero-config with Next.js)
- **Font:** Geist (Vercel's open-source font)

#### Database Schema
```
waitlist_entries:
  id: uuid (primary key)
  email: text (unique, not null)
  channels: text[] (nullable — populated when user responds to follow-up survey)
  referral_source: text (nullable — utm_source or referrer)
  created_at: timestamp (default now)
  confirmed_at: timestamp (nullable — set when email confirmed)
  ip_address: text (nullable — for rate limiting)
  brevo_contact_id: text (nullable — Brevo contact reference)
  metadata: jsonb (nullable — extensibility)
```

#### API Endpoints
- `POST /api/waitlist` — Submit email. Validates format, checks duplicates, stores in DB, creates Brevo contact, triggers confirmation email via Brevo, fires PostHog event.
- `GET /api/waitlist/confirm?token=xxx` — Email confirmation handler. Marks entry as confirmed in DB + updates Brevo contact attribute.
- `GET /api/waitlist/count` — Returns total confirmed signups (for dynamic counter, if used).

#### Brevo Integration
1. **On signup:** Create contact in Brevo with `waitlist` list. Trigger transactional confirmation email.
2. **On confirmation:** Update contact attribute `confirmed: true`. Trigger welcome automation sequence.
3. **Welcome sequence (Brevo automation):**
   - Email 1 (immediate): Welcome + "What channels do you want?" survey link
   - Email 2 (day 3): "Here's why we're building ClawCove" — link to founder blog post
   - Email 3 (day 7): Progress update / community link
4. **Channel survey:** Simple hosted form or link in welcome email. Responses update Brevo contact attributes + DB `channels` field via webhook or manual sync.

#### SEO
- Meta title: "ClawCove — Your Own AI Agent, Running 24/7"
- Meta description: "Deploy your own OpenClaw AI agent in minutes. No SSH, no DevOps. Connect Telegram, Discord, and more. Join the waitlist."
- Open Graph image: branded OG image (1200x630) with headline + logo
- Blog posts get individual OG images
- Structured data: Organization schema
- Semantic HTML: proper heading hierarchy, landmark elements
- Sitemap + robots.txt
- RSS feed for blog

#### Analytics Events (PostHog)
- `page_view` — with UTM parameters captured
- `waitlist_form_viewed` — user scrolled to form
- `waitlist_signup_started` — user focused email input
- `waitlist_signup_completed` — successful submission
- `waitlist_signup_error` — submission failed (with error type)
- `waitlist_email_confirmed` — user clicked confirmation link
- `pricing_section_viewed` — user scrolled to pricing
- `faq_item_opened` — with question ID
- `cta_clicked` — with location (hero, nav, footer)
- `blog_post_viewed` — with slug

#### Performance Targets
- Lighthouse score: >95 across all categories
- First Contentful Paint: <1.2s
- Largest Contentful Paint: <2.0s
- Cumulative Layout Shift: <0.1
- Landing page is primarily static/SSG — minimal client JS

#### Security & Spam Prevention
- Rate limiting on waitlist API (3 submissions per IP per hour)
- Email format validation (client + server)
- Honeypot field for bot detection (no CAPTCHAs — friction kills conversion)
- Email confirmation prevents fake signups from inflating count

---

## Implementation Approach

This is a greenfield Next.js 15 project. The codebase currently has only a `package.json` with build tooling configured. Implementation follows a bottom-up approach:

1. **Project scaffolding** — Install dependencies, configure Tailwind, set up project structure, shadcn/ui
2. **Database layer** — Drizzle schema, Neon connection, migration
3. **Brevo + API layer** — Waitlist endpoints with validation, rate limiting, Brevo contact creation, confirmation flow
4. **Landing page components** — Build each section as an isolated component, compose into the page
5. **Blog** — MDX setup, blog layout, initial founder story post
6. **Analytics & SEO** — PostHog integration, meta tags, OG images, sitemap, RSS feed
7. **Polish & testing** — Responsive refinement, animation, Lighthouse audit, cross-browser testing

---

## References

- Product Mission: `.writ/product/mission.md`
- Product Roadmap: `.writ/product/roadmap.md` (Phase 0 section)
- Tech Stack: `.writ/docs/tech-stack.md`
- Decisions Log: `.writ/product/decisions.md`
