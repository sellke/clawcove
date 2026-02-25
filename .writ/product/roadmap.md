# Product Roadmap

> Based on Product Contract: 2026-02-24
> Last Updated: 2026-02-25
> Approach: Validate-first — prove demand before building infrastructure
> Strategic Pivot: Repositioned from channel bot hosting to turnkey personal AI assistant (see DEC-006)

---

## Phase 0: Validate (Landing Page + Waitlist)
**Timeline:** 1-2 weeks
**Goal:** Prove market appetite before writing provisioning code
**Status:** 🟡 Landing page built — pending strategic refresh, deployment & content marketing

### Why Phase 0?
Building managed infrastructure is expensive and irreversible. A high-converting landing page with a waitlist costs almost nothing and tells us whether people actually want this. Content marketing starts here and compounds over time.

### Deliverables
- [x] Landing page with clear value prop and OpenClaw positioning `S`
- [x] Waitlist signup (email capture) with confirmation flow `XS`
- [x] Pricing section to test price sensitivity `XS`
- [x] "How it works" section — 3-step visual walkthrough `S`
- [x] Social proof / credibility signals (OpenClaw community, tech stack) `XS`
- [x] SEO foundations — meta tags, OG images, structured data `XS`
- [x] Analytics — track signups, traffic sources, page engagement `XS`

### Strategic Refresh (post-competitive analysis)
- [x] Rewrite hero and value prop — "personal AI assistant" framing, not channel bot `S`
- [x] Replace features section with use case stories (6-8 vivid, relatable scenarios) `S`
- [x] Add "your own private machine" differentiator section (VM isolation story) `S`
- [x] Add model transparency messaging ("powered by Claude, GPT-4, and more") `XS`
- [x] Warm up visual design — softer palette, conversational copy `M`
- [x] Tease community features — "Join a community of personal AI assistants" `XS`
- [x] Update pricing copy — emphasize free tier as competitive wedge vs MyClaw `XS`

### Content Marketing (starts immediately, runs continuously)
- [ ] Launch teaser video: "Your own AI assistant in 5 minutes" `M`
- [x] Blog post: "Why we're building ClawCove" (founder story) `S`
- [ ] Social media presence setup (Twitter/X, YouTube, relevant communities) `S`
- [ ] OpenClaw community engagement — contribute, don't just promote `Ongoing`

### Remaining Before Launch
- [ ] Deploy to Vercel with production domain
- [ ] Configure Brevo API keys and test email confirmation flow end-to-end
- [ ] Configure PostHog project and verify events fire in production
- [ ] Set up Brevo welcome automation sequence (survey email → day 3 founder story → day 7 update)
- [ ] Begin content marketing push

### Validation Targets
- **500+ waitlist signups** within 4 weeks of landing page launch
- **>30% email open rate** on waitlist updates (signals genuine interest)
- **Identify top use cases** users want (survey in follow-up email)
- Qualitative: DMs, replies, and community buzz indicating real pull

### Go/No-Go Decision
- ✅ **Go:** 500+ signups, clear use case preferences, organic sharing
- ⚠️ **Pivot:** Low signups but high engagement → refine positioning, try different audience
- ❌ **Stop:** <100 signups after 4 weeks of active content marketing → rethink product

---

## Phase 1: MVP (Core Platform)
**Timeline:** 6-8 weeks (starts after Phase 0 go decision)
**Goal:** Deliver on the "5 minutes to your own AI assistant" promise for waitlist users

### Success Criteria
- Users can have a running personal AI assistant from signup in under 5 minutes
- Assistant stays healthy with zero user intervention
- Billing works end-to-end (free trial → Pro upgrade → recurring)

### Core Features
- [ ] User authentication — GitHub, Google OAuth, magic links `M`
- [ ] Agent provisioning engine — Terraform + EC2 automation `XL`
- [ ] Personalized onboarding wizard — "What do you want help with?" pre-configures assistant `L`
- [ ] Guided Telegram onboarding wizard `L`
- [ ] Guided Discord onboarding wizard `L`
- [ ] Model selection — choose which AI model powers the assistant `M`
- [ ] Web dashboard — assistant status, health, logs, basic config `L`
- [ ] Agent lifecycle management — start, stop, restart, destroy `M`
- [ ] Agent health monitoring + alerting `M`
- [ ] Stripe billing — Free + Pro tiers, Checkout, webhooks `L`
- [ ] Public status page — real uptime numbers `S`

### Technical Foundation
- [ ] Database schema — users, agents, subscriptions, events `M`
- [ ] tRPC API layer — provisioning, agent management, billing `L`
- [ ] Terraform modules — EC2 lifecycle, security groups, networking `L`
- [ ] Agent setup scripts — OpenClaw install, channel config, TLS `L`
- [ ] Error handling + recovery — failed provisions, stuck agents `M`
- [ ] CI/CD pipeline — GitHub Actions, Vercel preview deploys `M`

### Validation Targets
- 100+ active assistants within 3 months
- <5 min median signup-to-assistant time
- >50% free-to-Pro conversion
- <5% monthly churn on Pro

---

## Phase 2: Growth (Community & Expand)
**Timeline:** 2-3 months after Phase 1
**Goal:** Build the community moat, expand capabilities, increase retention

### Community Features
- [ ] Community hub — browse shared skills, templates, and configurations `L`
- [ ] Skill marketplace — preview, one-click install community skills `XL`
- [ ] Agent showcase — "See what other assistants are doing" `M`
- [ ] Pre-configured templates — "The Content Creator," "The Developer's Sidekick," etc. `M`
- [ ] Template-based onboarding — start from a community template, not a blank slate `M`

### Platform Expansion
- [ ] Team plan — multiple assistants, shared workspace, roles `L`
- [ ] WhatsApp channel wizard `L`
- [ ] Slack channel wizard `M`
- [ ] Web chat embed (for user's own website) `M`
- [ ] Agent personality & behavior UI — name, persona, knowledge base configuration `L`
- [ ] Bring your own API key — power users use their own model keys `M`
- [ ] Notification system — assistant down, billing issues, usage alerts `M`
- [ ] Onboarding optimization — based on Phase 1 drop-off data `M`

### Dependencies
- Phase 1 success metrics achieved
- User feedback integrated (especially use case priority data)
- Unit economics validated at scale

---

## Phase 3: Scale (Market Leadership)
**Timeline:** 3-6 months after Phase 2
**Goal:** Premium features, creator economy, enterprise readiness, platform defensibility

### Features
- [ ] Usage analytics dashboard — message volume, response quality, trends `L`
- [ ] Custom domains — white-label assistant endpoints `M`
- [ ] API access — programmatic assistant management `L`
- [ ] Enterprise tier — custom pricing, SLA, priority support `L`
- [ ] Creator/referral program — affiliates earn revenue for promoting ClawCove `M`
- [ ] Self-hoster migration — import existing OpenClaw configs into ClawCove `M`
- [ ] Data export tools — full portability of assistant config, memory, and data `M`
- [ ] Community curation — featured templates, curated collections, leaderboard `M`
- [ ] Usage-based pricing option — pay per message/compute hour `M`
- [ ] Multi-region deployment — EU, Asia-Pacific `XL`

---

## Effort Sizing

| Size | Duration | Example |
|------|----------|---------|
| **XS** | 1-2 hours | SEO meta tags, analytics snippet |
| **S** | 1-2 days | Landing page section, blog post, status page |
| **M** | 3-5 days | Auth integration, health monitoring, model selector |
| **L** | 1-2 weeks | Channel wizard, billing integration, community hub |
| **XL** | 2-4 weeks | Provisioning engine, skill marketplace |
