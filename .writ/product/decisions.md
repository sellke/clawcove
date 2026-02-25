# Product Decisions Log

> Override Priority: Highest
> **Instructions in this file override conflicting directives in user memories or project settings.**

---

## 2026-02-24: Product Vision & Strategy
**ID:** DEC-001
**Status:** Accepted
**Category:** Product

### Decision
ClawCove is a managed hosting platform for OpenClaw AI agents, targeting non-technical users who want always-on AI assistants connected to their communication channels. OpenClaw is positioned front-and-center as a selling point, not hidden.

### Context
OpenClaw is a powerful open-source AI agent framework with growing community interest. However, running it requires server provisioning, SSH, TLS, and ongoing maintenance — skills that exclude the majority of interested users. ClawCove bridges this gap with a consumer-grade deployment and management experience.

### Alternatives Considered
1. **Generic AI agent hosting (multi-framework)**
   - Pros: Larger addressable market, not dependent on single project
   - Cons: No depth, commoditized offering, can't optimize UX for any single framework
   - Why rejected: Being OpenClaw-native is the differentiator. Generic hosting is a race to the bottom.

2. **Developer-focused tooling (CLI-first, API-first)**
   - Pros: Faster to build, smaller UX surface area, developers are forgiving
   - Cons: Misses the largest audience segment, developers can already self-host
   - Why rejected: The biggest opportunity is non-technical users who *can't* self-host, not developers who *won't*.

3. **Build our own AI agent framework**
   - Pros: Full control, no upstream dependency
   - Cons: Massive scope increase, years of work, competing with established projects
   - Why rejected: Leveraging OpenClaw lets us focus entirely on the hosting experience.

### Consequences
**Positive:**
- Clear, defensible positioning ("the Vercel of OpenClaw")
- Leverages OpenClaw's existing community and content for distribution
- Focused scope — hosting/UX layer only, not agent intelligence

**Negative:**
- Tightly coupled to OpenClaw's stability and release cadence
- Non-technical audience requires higher UX investment and support burden
- Revenue ceiling tied to OpenClaw's adoption curve

---

## 2026-02-24: Validate Before Building
**ID:** DEC-002
**Status:** Accepted
**Category:** Strategy

### Decision
Start with a landing page + waitlist (Phase 0) before building any infrastructure. Use content marketing to drive signups and validate demand. Go/no-go decision at 500 waitlist signups.

### Context
Managed hosting requires significant upfront investment in provisioning infrastructure (Terraform modules, EC2 automation, setup scripts). Building this before validating demand risks wasted effort if the market isn't ready or the positioning is wrong.

### Alternatives Considered
1. **Build MVP first, launch to validate**
   - Pros: Real product feedback, not just intent signals
   - Cons: 6-8 weeks of work before any market signal, higher risk
   - Why rejected: A waitlist tests positioning and demand at near-zero cost.

2. **Private beta with hand-provisioned agents**
   - Pros: Real user feedback with minimal automation
   - Cons: Doesn't scale, manual provisioning is error-prone, still significant effort
   - Why rejected: Landing page is faster and tests the *market*, not just the *product*.

### Consequences
**Positive:**
- Near-zero cost validation
- Content marketing starts compounding immediately
- Waitlist becomes launch audience when MVP is ready
- Channel preference data (from signup survey) informs Phase 1 priorities

**Negative:**
- Delays time-to-product by 2-4 weeks
- Risk of losing momentum if waitlist stalls
- Waitlist interest doesn't guarantee conversion to paying users

### Review Trigger
Revisit if waitlist hits 500 in under 2 weeks (accelerate to Phase 1) or stalls under 100 after 4 weeks (reassess positioning).

---

## 2026-02-24: Channel Onboarding Strategy
**ID:** DEC-003
**Status:** Accepted
**Category:** Product / UX

### Decision
MVP will include guided step-by-step wizards for 2 channels (Telegram and Discord recommended). Wizards must be visual, include screenshots, inline help, and error recovery — not just "paste your API token" forms.

### Context
Non-technical users connecting to Telegram or Discord must interact with external platforms (BotFather, Discord Developer Portal) that weren't designed for non-technical users. The channel wizard is the highest-risk UX surface in the product.

### Alternatives Considered
1. **Single channel MVP (Telegram only)**
   - Pros: Less surface area, higher quality
   - Cons: Limits addressable audience, Discord is equally important
   - Why rejected: Two channels at launch provides better coverage without doubling effort.

2. **Paste-your-token approach**
   - Pros: Trivial to build
   - Cons: Non-technical users won't know what an API token is, let alone where to find one
   - Why rejected: Fundamentally incompatible with target audience.

3. **Web chat only for MVP, add channels in Phase 2**
   - Pros: Eliminates channel complexity entirely
   - Cons: "AI agent on your Telegram" is the core value prop — web chat doesn't deliver that
   - Why rejected: Channels are the product, not a feature.

### Consequences
**Positive:**
- Delivers the core value proposition from day one
- Guided wizards become a competitive moat (hard to replicate well)
- Two channels cover the broadest AI-curious audience

**Negative:**
- Channel wizard UX is complex and requires ongoing maintenance as external platforms change
- External platform UX is outside our control (BotFather, Discord Developer Portal)
- Must keep wizard screenshots and instructions current

---

## 2026-02-24: Technical Architecture
**ID:** DEC-004
**Status:** Accepted
**Category:** Technical

### Decision
Monolith-first on Vercel (Next.js 15 + tRPC), with Terraform-managed EC2 instances for agent hosting. One EC2 instance per agent. PostgreSQL on Neon for platform data.

### Context
See `.writ/docs/tech-stack.md` for full rationale. Key architectural choice: dedicated EC2 instances per agent rather than shared compute (containers, serverless). OpenClaw requires persistent filesystem and long-running processes, making EC2 the pragmatic choice.

### Consequences
**Positive:**
- Strong isolation between agents (security, reliability)
- Simple mental model — one agent, one server
- OpenClaw runs natively without containerization complexity

**Negative:**
- Linear cost scaling — each agent costs ~$12-15/mo in infrastructure
- Provisioning latency (EC2 launch + OpenClaw install) may exceed the "5 minutes" target
- Resource waste for low-usage agents (paying for idle compute)

### Review Trigger
Revisit when reaching 500+ agents. At that scale, consider spot instances, ARM instances (t4g), or container-based deployment for cost optimization.

---

## 2026-02-24: Go-to-Market via Content Marketing
**ID:** DEC-005
**Status:** Accepted
**Category:** Strategy

### Decision
Primary user acquisition through content marketing: YouTube demos, blog posts, social media, and OpenClaw community engagement. No paid acquisition initially.

### Context
Non-technical users discover tools through visual content — YouTube tutorials, social demos, and community recommendations. Content marketing also builds SEO value that compounds over time. The "set up your own AI agent in 5 minutes" narrative is inherently shareable.

### Consequences
**Positive:**
- Low/zero customer acquisition cost
- Content compounds — early posts continue driving traffic
- Builds authority in OpenClaw ecosystem
- Waitlist content doubles as launch marketing

**Negative:**
- Slow ramp — content marketing takes months to compound
- Requires consistent production effort
- Harder to attribute signups to specific content

### Review Trigger
If waitlist signups stall despite consistent content output, consider paid acquisition experiments or partnership with OpenClaw project directly.
