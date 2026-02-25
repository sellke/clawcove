# User Stories Overview

> **Specification:** Phase 0 — Landing Page + Waitlist
> **Created:** 2026-02-24
> **Status:** Complete

## Stories Summary

| Story | Title                                | Status      | Tasks | Progress |
| ----- | ------------------------------------ | ----------- | ----- | -------- |
| 1     | Project Scaffolding & Design System  | Complete | 7     | 7/7      |
| 2     | Database & Waitlist API              | Complete | 7     | 7/7      |
| 3     | Brevo Email Integration              | Complete | 7     | 7/7      |
| 4     | Landing Page — Hero & Value Prop     | Complete | 7     | 7/7      |
| 5     | Landing Page — Features, Pricing     | Complete | 7     | 7/7      |
| 6     | MDX Blog                             | Complete | 7     | 7/7      |
| 7     | Analytics, SEO & Launch Polish       | Complete | 7     | 7/7      |

**Total Progress:** 49/49 tasks (100%)

## Story Dependencies

```
Story 1 (Scaffolding)
  ├── Story 2 (Database & API)
  │     └── Story 3 (Brevo Email)
  ├── Story 4 (Hero & Value Prop)      ← can parallel with 5, 6
  ├── Story 5 (Features & Pricing)     ← can parallel with 4, 6
  └── Story 6 (MDX Blog)              ← can parallel with 4, 5
        └── Story 7 (Analytics, SEO & Polish) ← depends on 2-6
```

**Recommended execution order:**
1. Story 1 first (foundation)
2. Stories 2, 4, 5, 6 in parallel (backend + frontend sections + blog)
3. Story 3 after Story 2 (email depends on API)
4. Story 7 last (integration, polish, and QA across everything)

## Quick Links

- [Story 1: Project Scaffolding & Design System](./story-1-project-scaffolding.md)
- [Story 2: Database & Waitlist API](./story-2-database-waitlist-api.md)
- [Story 3: Brevo Email Integration](./story-3-brevo-email-integration.md)
- [Story 4: Landing Page — Hero & Value Proposition](./story-4-hero-value-proposition.md)
- [Story 5: Landing Page — Features, Pricing & Trust](./story-5-features-pricing-trust.md)
- [Story 6: MDX Blog](./story-6-mdx-blog.md)
- [Story 7: Analytics, SEO & Launch Polish](./story-7-analytics-seo-polish.md)

## Related Documents

- [Main Specification](../spec.md)
- [Specification (Lite)](../spec-lite.md)
- [Technical Specification](../sub-specs/technical-spec.md)
