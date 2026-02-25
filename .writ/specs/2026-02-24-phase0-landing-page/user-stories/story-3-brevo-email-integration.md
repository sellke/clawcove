# Story 3: Brevo Email Integration

> **Status:** Complete
> **Priority:** High
> **Dependencies:** Story 2 (Database & Waitlist API)

## User Story

**As a** waitlist signup
**I want to** receive a confirmation email and follow-up sequence after joining
**So that** I know my signup was received and I stay engaged with ClawCove updates

## Acceptance Criteria

- [x] Given a successful waitlist signup, when the entry is created, then a Brevo contact is created and a transactional confirmation email is sent
- [x] Given a confirmation email, when I click the confirmation link, then my Brevo contact is updated with `confirmed: true`
- [x] Given a confirmed signup, when the welcome automation triggers, then I receive a welcome email with a channel preference survey link
- [x] Given the confirmation email, when I view it on mobile and desktop, then it renders correctly with ClawCove branding

## Implementation Tasks

- [x] 3.1 Write tests for Brevo service layer (contact creation, email sending, attribute updates — mock Brevo API)
- [x] 3.2 Set up Brevo SDK (`@getbrevo/brevo`) and configure API key in environment variables
- [x] 3.3 Create `src/lib/email/brevo.ts` service — contact creation, transactional email sending, contact attribute updates
- [x] 3.4 Build confirmation email template (React Email or HTML) — ClawCove branding, confirmation link, clean design matching the light/modern aesthetic
- [x] 3.5 Integrate Brevo contact creation into `POST /api/waitlist` endpoint (store `brevo_contact_id` in DB)
- [x] 3.6 Integrate Brevo contact update into `GET /api/waitlist/confirm` endpoint
- [x] 3.7 Document Brevo automation setup: welcome sequence (welcome email with channel survey link → day 3 founder story → day 7 progress update). Automation is configured in Brevo dashboard, not in code.

## Notes

- Brevo transactional emails use their SMTP or API — the API approach (`@getbrevo/brevo` SDK) is cleaner
- The welcome automation sequence is set up in Brevo's UI, not programmatically. Story deliverable is documentation for configuring it.
- Channel preference survey: a simple Brevo-hosted form or Google Form link. Responses can be synced back to DB later.
- Keep the email template simple — logo, headline, CTA button, footer. No complex layouts.

## Definition of Done

- [x] All tasks completed
- [x] All acceptance criteria met
- [x] Tests passing (with mocked Brevo API)
- [x] Confirmation email renders correctly
- [x] Brevo automation sequence documented
