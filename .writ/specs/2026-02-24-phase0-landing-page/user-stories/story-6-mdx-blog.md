# Story 6: MDX Blog

> **Status:** Complete
> **Priority:** Medium
> **Dependencies:** Story 1 (Project Scaffolding)

## User Story

**As a** visitor or search engine
**I want to** read blog posts about ClawCove's mission and journey
**So that** I build trust in the product and the team, and discover ClawCove through organic search

## Acceptance Criteria

- [x] Given the `/blog` route, when I visit it, then I see a chronological list of blog posts with title, date, author, and reading time
- [x] Given a blog post slug, when I visit `/blog/[slug]`, then I see the full MDX-rendered post with proper typography and formatting
- [x] Given a blog post, when I share the URL, then the correct OG title, description, and image are shown in social previews
- [x] Given the blog, when a search engine crawls it, then an RSS feed is available at `/blog/rss.xml` or `/feed.xml`
- [x] Given the first blog post, when I read it, then it's the "Why we're building ClawCove" founder story

## Implementation Tasks

- [x] 6.1 Set up MDX processing — configure `next-mdx-remote` or `@next/mdx` with Next.js App Router
- [x] 6.2 Create blog content directory (`src/content/blog/`) with frontmatter schema (title, date, author, description, image)
- [x] 6.3 Build `/blog` list page — fetch all posts, sort by date descending, render cards with title, date, author, estimated reading time
- [x] 6.4 Build `/blog/[slug]` post page — load MDX content, render with prose typography (Tailwind Typography plugin), support images, code blocks, callouts
- [x] 6.5 Generate RSS feed at `/feed.xml` — standard RSS 2.0 with all published posts
- [x] 6.6 Write initial blog post: "Why We're Building ClawCove" — founder story, the OpenClaw hosting gap, the ClawCove vision, call to join the waitlist
- [x] 6.7 Add per-post OG meta tags and social sharing metadata using Next.js generateMetadata

## Notes

- MDX content lives in the repo (not a CMS) — this is intentionally minimal for Phase 0
- Use `@tailwindcss/typography` (prose classes) for blog post body styling
- Reading time calculation: ~200 words per minute, round up
- Frontmatter should be validated with a schema (Zod or similar) to catch errors early
- The blog design should feel like a natural extension of the landing page — same nav, footer, color palette

## Definition of Done

- [x] All tasks completed
- [x] All acceptance criteria met
- [x] Blog list page and post page render correctly
- [x] RSS feed validates
- [x] Initial founder story post is published
- [x] OG tags work correctly for social sharing
