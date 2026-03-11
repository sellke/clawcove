# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/),
and this project adheres to [Semantic Versioning](https://semver.org/).

## [0.1.0] - 2026-03-10

### Added
- Landing page with hero section, value proposition, feature breakdowns, and pricing tiers.
- Waitlist signup with email collection and Supabase-backed database storage.
- Brevo email integration for double opt-in confirmation flow.
- Email confirmation toast with success/error feedback and automatic URL cleanup.
- MDX-powered blog with content pages.
- Privacy Policy page at `/privacy` with full legal content.
- Terms of Service page at `/terms` with full legal content.
- Analytics via PostHog and SEO metadata across all pages.
- Hermit crab mascot and branded visual identity.

### Fixed
- Waitlist API 500 error caused by missing DB schema push and unhandled client errors.
- Dead "Join the Waitlist" buttons removed from desktop and mobile navigation.
- Footer links wired up: OpenClaw, Twitter/X, Privacy Policy, and Terms of Service now point to real destinations.
- Confirmation URL cleanup preserves unrelated query parameters.
