# Product Decisions Log

> Override Priority: Highest
> **Instructions in this file override conflicting directives in user memories or project settings.**

---

## 2026-02-24: Product Vision & Strategy
**ID:** DEC-001
**Status:** Superseded by DEC-006
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
**Status:** Accepted (scope expanded by DEC-006)
**Category:** Product / UX

### Decision
MVP will include guided step-by-step wizards for 2 channels (Telegram and Discord recommended). Wizards must be visual, include screenshots, inline help, and error recovery — not just "paste your API token" forms.

### Context
Non-technical users connecting to Telegram or Discord must interact with external platforms (BotFather, Discord Developer Portal) that weren't designed for non-technical users. The channel wizard is the highest-risk UX surface in the product.

### Update (2026-02-25)
Channel wizards remain important but are no longer the *primary* onboarding focus. DEC-006 introduces a personalized "What do you want help with?" wizard that configures the assistant for the user's use case *before* channel setup. Channels become one way to interact with a much broader assistant.

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
**Status:** Accepted (strengthened by DEC-007)
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
**Status:** Accepted (expanded with creator program)
**Category:** Strategy

### Decision
Primary user acquisition through content marketing: YouTube demos, blog posts, social media, and OpenClaw community engagement. No paid acquisition initially.

### Context
Non-technical users discover tools through visual content — YouTube tutorials, social demos, and community recommendations. Content marketing also builds SEO value that compounds over time. The "your own AI assistant in 5 minutes" narrative is inherently shareable.

### Update (2026-02-25)
Adding a creator/referral program to the GTM strategy. YouTubers and influencers can earn referral revenue for promoting ClawCove. This turns marketing cost into a performance-based model and gives creators a reason to choose ClawCove over MyClaw.

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

---

## 2026-02-25: Repositioning — Turnkey Personal AI Assistant
**ID:** DEC-006
**Status:** Accepted
**Category:** Product / Strategy
**Supersedes:** DEC-001

### Decision
Reposition ClawCove from "managed OpenClaw channel bot hosting" to "your own turnkey personal AI assistant." The assistant is the product — channels are one interface to it, not the defining feature.

### Context
Competitive analysis of MyClaw (myclaw.ai) revealed they already position OpenClaw as a full personal AI assistant: workflow automation, browser control, file management, smart home, code review, content creation. Our original framing around "channel bots" undersells OpenClaw's actual capabilities and limits the perceived value.

OpenClaw is a digital coworker that can do anything a person can do on a computer. Framing it as "connect to Telegram" leaves most of that value invisible.

### Alternatives Considered
1. **Keep channel-bot framing, differentiate on UX quality**
   - Pros: Narrower scope, easier to build, clear value prop
   - Cons: MyClaw already occupies the broader "personal AI" positioning. Channel-bot framing limits perceived value and addressable interest.
   - Why rejected: The broader framing is more compelling and matches how people actually use OpenClaw.

2. **Position as "AI infrastructure" (developer-facing)**
   - Pros: Higher ARPU, stickier enterprise contracts
   - Cons: Abandons our core audience (non-technical users), developer market is already served by self-hosting
   - Why rejected: Non-technical users remain the underserved opportunity.

### Consequences
**Positive:**
- Matches how OpenClaw is actually used (full personal AI, not just channel bot)
- Larger perceived value justifies pricing
- Competitive with MyClaw's positioning while differentiating on pillars (VM, transparency, community, design)
- Use case storytelling becomes a powerful marketing tool

**Negative:**
- Broader positioning means more surface area to explain
- "Personal AI assistant" is a noisier category than "OpenClaw hosting"
- Must ensure onboarding doesn't become overwhelming with broader capabilities

### Impact
- Landing page copy and sections need refresh to reflect assistant-first positioning
- Use case stories replace channel-focused feature lists
- Personalized onboarding wizard ("What do you want help with?") becomes part of Phase 1
- Blog and content marketing shift from "set up a bot" to "meet your AI assistant"

---

## 2026-02-25: VM Isolation as Trust Differentiator
**ID:** DEC-007
**Status:** Accepted
**Category:** Technical / Product
**Strengthens:** DEC-004

### Decision
Explicitly market VM-level isolation as a differentiator over MyClaw's container-based approach. Frame it as "your own private machine" for non-technical users.

### Context
MyClaw uses containers ("isolated container" per their site). ClawCove uses dedicated EC2 instances (full VMs). The technical difference is meaningful:

| | Container | Virtual Machine |
|---|---|---|
| Isolation | Namespace-level (shared kernel) | Hypervisor-level (hardware boundary) |
| Security | Vulnerable to kernel exploits | Full OS isolation |
| Resources | Shared, noisy neighbors possible | Dedicated, guaranteed |
| User metaphor | Apartment in a building | Your own house |

For non-technical users, "your own private computer in the cloud" is a powerful trust signal. It's tangible and reassuring in a way "isolated container" isn't.

### Consequences
**Positive:**
- Clear, understandable differentiator for non-technical users
- Genuine security advantage (hypervisor boundary > namespace boundary)
- Supports the "trustworthy" brand value
- Already our architecture — no additional cost to market it

**Negative:**
- Higher infrastructure cost per user vs containers (already accepted in DEC-004)
- Must not over-promise — VMs aren't invulnerable, just better isolated
- Comparison marketing risks appearing negative toward competitor

---

## 2026-02-25: Model Transparency
**ID:** DEC-008
**Status:** Accepted
**Category:** Product

### Decision
Be transparent about which AI models power the assistant. Phase 0: state supported models on landing page. Phase 1: let users choose/switch models in dashboard. Phase 2: offer "bring your own API key" for power users.

### Context
MyClaw doesn't mention what models power the assistant — this is a deliberate omission common in AI wrappers. For our AI-curious audience, model choice matters. People have preferences (Claude vs GPT), follow model releases, and want to know what they're paying for.

Transparency builds trust and serves our "no black boxes" brand value.

### Phased Rollout
1. **Phase 0 (landing page):** "Powered by the latest AI models — Claude, GPT-4, and more. We keep everything updated."
2. **Phase 1 (dashboard):** Model selector — choose which model powers your assistant.
3. **Phase 2 (power users):** Bring your own API key — use specific models or reduce costs.

### Consequences
**Positive:**
- Builds trust with AI-literate audience
- Differentiates from MyClaw's opacity
- Model selection becomes a feature, not just transparency
- BYOK option captures cost-sensitive power users

**Negative:**
- Creates expectation of model updates (must keep pace with OpenClaw upstream)
- Multi-model support increases testing complexity
- BYOK introduces billing complexity (user's key vs our managed key)

---

## 2026-02-25: Community-Powered Platform
**ID:** DEC-009
**Status:** Accepted
**Category:** Product / Strategy

### Decision
Build a community layer where ClawCove users share skills, templates, and assistant configurations. This creates network effects and differentiates from MyClaw's hosting-only approach.

### Context
MyClaw has a community link but it's just a Discord/forum — a place to ask questions. ClawCove can build something more valuable: a community where the *assistants themselves* become shareable. The name "Cove" (gathering place, harbor) naturally supports this positioning.

### Community Features (phased)
1. **Phase 1:** Community page, share configs as templates
2. **Phase 2:** Skill marketplace (browse, preview, one-click install), agent showcase, leaderboard
3. **Phase 3:** Creator program, featured templates, community-curated collections

### Consequences
**Positive:**
- Network effects — more users = more skills = more value per user
- Organic content generation (showcase, shared configs)
- Reduces onboarding friction (start from a template, not blank slate)
- Creates switching cost (community investment makes leaving harder)
- "Cove" brand name naturally fits community positioning

**Negative:**
- Community features add scope to Phase 2
- Content moderation needed for shared skills/configs
- Risk of low-quality or malicious shared configs
- Must build trust before users share their setups

---

## 2026-02-25: Warm, Approachable Design Direction
**ID:** DEC-010
**Status:** Accepted
**Category:** Design / Brand

### Decision
Adopt a warm, approachable visual design — light backgrounds, friendly illustrations, conversational copy. Explicitly differentiate from MyClaw's dark, techy aesthetic.

### Context
MyClaw went dark and terminal-inspired — fitting for developers, but potentially alienating for non-technical users. Our target audience (Alex persona: content creators, small business owners, hobbyists) responds better to warmth, clarity, and friendliness. They should feel welcomed, not intimidated.

### Design Principles
- **Light, clean backgrounds** with warm accent colors (blue family with coral/amber highlights)
- **Friendly illustrations** showing people interacting with their AI (not abstract tech imagery)
- **Conversational copy** — "meet your assistant" not "deploy your agent"
- **Generous whitespace**, rounded corners, soft shadows
- **Mobile-first** — audience likely discovers via social media on phone
- **Inspiration:** Notion, Cal.com, Headspace — warm, clear, trustworthy

### Consequences
**Positive:**
- Visually differentiates from MyClaw immediately
- Matches non-technical audience expectations
- Supports "approachable" brand value
- Reduces perceived barrier to entry

**Negative:**
- Some AI enthusiasts may perceive lighter design as "less serious"
- Illustration style requires investment (custom or consistent stock)
- May need A/B testing to confirm conversion impact vs darker alternatives

### Impact
- Current landing page (built with clean/modern blue palette) needs a warmth pass: softer blues, warm accents, illustration style, copy tone
- Blog design should feel like reading a friend's post, not a technical doc
