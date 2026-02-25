# Brevo Automation Setup Guide

How to configure the post-confirmation welcome sequence in the Brevo dashboard.

---

## Prerequisites

1. **Brevo account** with transactional email enabled
2. **Verified sender domain** — `clawcove.com` must be authenticated (SPF + DKIM)
3. **Custom contact attributes** created in Brevo → Contacts → Settings → Contact attributes:

| Attribute Name | Type | Description |
|---|---|---|
| `WAITLIST_SIGNUP` | Text | ISO timestamp of signup |
| `WAITLIST_CONFIRMED` | Boolean | Set to `true` when email is confirmed |
| `WAITLIST_CONFIRMED_AT` | Text | ISO timestamp of confirmation |

---

## Automation: Welcome Sequence

**Trigger:** Contact attribute `WAITLIST_CONFIRMED` changes to `true`

### Email 1 — Welcome (immediate)

- **Subject:** "You're in! Welcome to the ClawCove early-access list"
- **Content:**
  - Thank them for confirming
  - Brief recap of what ClawCove is (host your own AI agent in 5 minutes)
  - Channel preference survey link (which updates they want: product, engineering, community)
  - Social proof: "You're one of the first N people to join"
- **Delay after trigger:** None (send immediately)

### Email 2 — Founder Story (Day 3)

- **Subject:** "Why we're building ClawCove"
- **Content:**
  - Personal story from the founder
  - The problem we experienced first-hand
  - Our opinionated approach to solving it
  - Invite to reply — "What would you use an always-on AI agent for?"
- **Delay after trigger:** 3 days

### Email 3 — Progress Update (Day 7)

- **Subject:** "ClawCove week 1: what we've shipped"
- **Content:**
  - Summary of recent progress / shipped features
  - Waitlist position or rough ETA for access
  - Call to action: share with a friend (referral program tease)
  - Link to the blog for deeper technical content
- **Delay after trigger:** 7 days

---

## Setup Steps in Brevo Dashboard

1. Go to **Automation → Create a workflow**
2. Choose **Custom workflow** (blank)
3. Set **Entry point:** "A contact attribute is updated"
   - Attribute: `WAITLIST_CONFIRMED`
   - Condition: `equals true`
4. Add **Send an email** action for Email 1
5. Add a **Wait** step → 3 days
6. Add **Send an email** action for Email 2
7. Add a **Wait** step → 4 days (7 days total from trigger)
8. Add **Send an email** action for Email 3
9. **Activate** the workflow

---

## Environment Variables

```env
BREVO_API_KEY=xkeysib-...   # API key with transactional + contacts scope
```

The app degrades gracefully: if `BREVO_API_KEY` is not set, all Brevo calls are skipped with a console warning. This lets local development work without a Brevo account.

---

## Testing

1. Sign up on the waitlist with a real email
2. Check Brevo dashboard → Contacts to verify the contact was created
3. Click the confirmation link in the email
4. Verify the `WAITLIST_CONFIRMED` attribute flipped to `true` in Brevo
5. Confirm the automation workflow triggered and Email 1 was sent
