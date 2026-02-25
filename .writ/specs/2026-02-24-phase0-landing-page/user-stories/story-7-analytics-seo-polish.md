# Story 7: Analytics, SEO & Launch Polish

> **Status:** Complete
> **Priority:** High
> **Dependencies:** Stories 2-6 (all page content and API must exist)

## User Story

**As the** ClawCove team
**We want** comprehensive analytics tracking, SEO optimization, and visual polish
**So that** we can measure Phase 0 validation metrics, rank for target keywords, and present a professional, trustworthy product

## Acceptance Criteria

- [x] Given any page, when PostHog loads, then pageviews and UTM parameters are automatically tracked
- [x] Given the waitlist form, when a user interacts with it, then PostHog captures events for form_viewed, signup_started, signup_completed, and signup_error
- [x] Given a search engine, when it crawls the site, then it finds proper meta tags, OG images, structured data, sitemap, and robots.txt
- [x] Given Google Lighthouse, when I audit the landing page, then all scores are >95
- [x] Given any modern browser (Chrome, Firefox, Safari, Edge), when I view the site, then it renders correctly
- [x] Given the landing page, when sections scroll into view, then subtle entrance animations play smoothly

## Implementation Tasks

- [x] 7.1 Set up PostHog — install `posthog-js`, create provider component, configure with project API key in environment variables
- [x] 7.2 Implement analytics events — waitlist_form_viewed, waitlist_signup_started/completed/error, waitlist_email_confirmed, pricing_section_viewed, faq_item_opened, cta_clicked (with location), blog_post_viewed. Use Intersection Observer for scroll-based events.
- [x] 7.3 Configure SEO meta tags — title, description, OG image (1200x630), Twitter card, canonical URLs. Use Next.js `generateMetadata` in layouts and pages.
- [x] 7.4 Add structured data (Organization JSON-LD), generate sitemap.xml (next-sitemap or App Router built-in), create robots.txt
- [x] 7.5 Run Lighthouse audit — optimize for >95 across Performance, Accessibility, Best Practices, SEO. Fix any issues (image optimization, CLS, font loading, etc.)
- [x] 7.6 Add scroll-triggered entrance animations to all landing page sections (fade-up, stagger) using Framer Motion or CSS with Intersection Observer
- [x] 7.7 Cross-browser and responsive QA — verify on Chrome, Firefox, Safari, Edge at 320px, 768px, 1024px, 1440px breakpoints

## Notes

- PostHog offers a generous free tier (1M events/month) — more than enough for Phase 0
- UTM parameter capture is critical for measuring which content marketing channels drive signups
- OG image should be a branded static asset (designed, not auto-generated) for Phase 0
- Animations should be subtle and performant — prefer CSS transforms/opacity over layout-triggering properties
- Consider preloading the Geist font to avoid FOIT/FOUT

## Definition of Done

- [x] All tasks completed
- [x] All acceptance criteria met
- [x] PostHog events fire correctly in production
- [x] Lighthouse scores >95
- [x] No visual regressions across browsers
