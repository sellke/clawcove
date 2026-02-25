# Story 2: Database & Waitlist API

> **Status:** Complete
> **Priority:** High
> **Dependencies:** Story 1 (Project Scaffolding)

## User Story

**As a** visitor to the ClawCove landing page
**I want to** submit my email to join the waitlist
**So that** I'm notified when ClawCove launches and my interest is recorded

## Acceptance Criteria

- [x] Given a valid email, when I submit the waitlist form, then my email is stored in the database and I receive a 200 response
- [x] Given a duplicate email, when I submit, then I receive a friendly message (not an error) saying I'm already on the list
- [x] Given an invalid email format, when I submit, then I receive a validation error before the request is sent
- [x] Given more than 3 submissions from the same IP in an hour, when I submit again, then I receive a rate limit response
- [x] Given a confirmation token URL, when I visit it, then my waitlist entry is marked as confirmed

## Implementation Tasks

- [x] 2.1 Write tests for waitlist API endpoints (happy path, duplicate, invalid email, rate limiting, confirmation)
- [x] 2.2 Create Drizzle schema for `waitlist_entries` table (id uuid, email text unique, channels text[], referral_source text, created_at timestamp, confirmed_at timestamp, ip_address text, brevo_contact_id text, metadata jsonb)
- [x] 2.3 Configure Neon database connection in src/lib/db with Drizzle and connection pooling
- [x] 2.4 Create `POST /api/waitlist` endpoint — validate email, check duplicates, generate confirmation token, store entry, return success
- [x] 2.5 Create `GET /api/waitlist/confirm` endpoint — validate token, mark entry as confirmed, redirect to success page
- [x] 2.6 Create `GET /api/waitlist/count` endpoint — return count of confirmed entries
- [x] 2.7 Implement rate limiting middleware (IP-based, 3 requests/hour) and honeypot field validation

## Notes

- Confirmation token: use a signed JWT or HMAC of the email — no need for a separate tokens table
- Rate limiting can use a simple in-memory store for Phase 0 (no Redis needed at this scale)
- The honeypot field is a hidden form field — if filled, the submission is silently rejected (bots fill all fields)
- Brevo integration happens in Story 3 — this story stores locally and returns success

## Definition of Done

- [x] All tasks completed
- [x] All acceptance criteria met
- [x] Tests passing
- [x] Database migration runs successfully
- [x] API endpoints return correct responses for all scenarios
