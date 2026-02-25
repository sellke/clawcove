# Product Roadmap

> Based on Product Contract: 2026-02-24
> Approach: Validate-first — prove demand before building infrastructure

---

## Phase 0: Validate (Landing Page + Waitlist)
**Timeline:** 1-2 weeks
**Goal:** Prove market appetite before writing provisioning code

### Why Phase 0?
Building managed infrastructure is expensive and irreversible. A high-converting landing page with a waitlist costs almost nothing and tells us whether people actually want this. Content marketing starts here and compounds over time.

### Deliverables
- [ ] Landing page with clear value prop and OpenClaw positioning `S`
- [ ] Waitlist signup (email capture) with confirmation flow `XS`
- [ ] Pricing section to test price sensitivity `XS`
- [ ] "How it works" section — 3-step visual walkthrough `S`
- [ ] Social proof / credibility signals (OpenClaw community, tech stack) `XS`
- [ ] SEO foundations — meta tags, OG images, structured data `XS`
- [ ] Analytics — track signups, traffic sources, page engagement `XS`

### Content Marketing (starts immediately, runs continuously)
- [ ] Launch teaser video: "Your own AI agent in 5 minutes" `M`
- [ ] Blog post: "Why we're building ClawCove" (founder story) `S`
- [ ] Social media presence setup (Twitter/X, YouTube, relevant communities) `S`
- [ ] OpenClaw community engagement — contribute, don't just promote `Ongoing`

### Validation Targets
- **500+ waitlist signups** within 4 weeks of landing page launch
- **>30% email open rate** on waitlist updates (signals genuine interest)
- **Identify top 2 channels** users want (survey in signup confirmation)
- Qualitative: DMs, replies, and community buzz indicating real pull

### Go/No-Go Decision
- ✅ **Go:** 500+ signups, clear channel preference, organic sharing
- ⚠️ **Pivot:** Low signups but high engagement → refine positioning, try different audience
- ❌ **Stop:** <100 signups after 4 weeks of active content marketing → rethink product

---

## Phase 1: MVP (Core Platform)
**Timeline:** 6-8 weeks (starts after Phase 0 go decision)
**Goal:** Deliver on the "5 minutes to running agent" promise for waitlist users

### Success Criteria
- Users can deploy an OpenClaw agent from signup in under 5 minutes
- Agent stays healthy with zero user intervention
- Billing works end-to-end (free trial → Pro upgrade → recurring)

### Core Features
- [ ] User authentication — GitHub, Google OAuth, magic links `M`
- [ ] Agent provisioning engine — Terraform + EC2 automation `XL`
- [ ] Guided Telegram onboarding wizard `L`
- [ ] Guided Discord onboarding wizard `L`
- [ ] Web dashboard — agent status, health, logs, basic config `L`
- [ ] Agent lifecycle management — start, stop, restart, destroy `M`
- [ ] Agent health monitoring + alerting `M`
- [ ] Stripe billing — Free + Pro tiers, Checkout, webhooks `L`

### Technical Foundation
- [ ] Database schema — users, agents, subscriptions, events `M`
- [ ] tRPC API layer — provisioning, agent management, billing `L`
- [ ] Terraform modules — EC2 lifecycle, security groups, networking `L`
- [ ] Agent setup scripts — OpenClaw install, channel config, TLS `L`
- [ ] Error handling + recovery — failed provisions, stuck agents `M`
- [ ] CI/CD pipeline — GitHub Actions, Vercel preview deploys `M`

### Validation Targets
- 100+ active agents within 3 months
- <5 min median signup-to-agent time
- >50% free-to-Pro conversion
- <5% monthly churn on Pro

---

## Phase 2: Growth (Expand & Retain)
**Timeline:** 2-3 months after Phase 1
**Goal:** Increase retention, expand channel reach, introduce marketplace

### Features
- [ ] Skill marketplace — browse, preview, one-click install `XL`
- [ ] Team plan — multiple agents, shared workspace, roles `L`
- [ ] WhatsApp channel wizard `L`
- [ ] Slack channel wizard `M`
- [ ] Web chat embed (for user's own website) `M`
- [ ] Onboarding optimization — based on Phase 1 drop-off data `M`
- [ ] Agent configuration UI — personality, behavior, knowledge base `L`
- [ ] Notification system — agent down, billing issues, usage alerts `M`

### Dependencies
- Phase 1 success metrics achieved
- User feedback integrated (especially channel priority data)
- Unit economics validated at scale

---

## Phase 3: Scale (Market Leadership)
**Timeline:** 3-6 months after Phase 2
**Goal:** Premium features, enterprise readiness, platform defensibility

### Features
- [ ] Usage analytics dashboard — message volume, response quality, trends `L`
- [ ] Custom domains — white-label agent endpoints `M`
- [ ] API access — programmatic agent management `L`
- [ ] Enterprise tier — custom pricing, SLA, priority support `L`
- [ ] Usage-based pricing option — pay per message/compute hour `M`
- [ ] Agent templates — pre-configured agents for common use cases `M`
- [ ] Multi-region deployment — EU, Asia-Pacific `XL`

---

## Effort Sizing

| Size | Duration | Example |
|------|----------|---------|
| **XS** | 1-2 hours | SEO meta tags, analytics snippet |
| **S** | 1-2 days | Landing page section, blog post |
| **M** | 3-5 days | Auth integration, health monitoring |
| **L** | 1-2 weeks | Channel wizard, billing integration |
| **XL** | 2-4 weeks | Provisioning engine, skill marketplace |
