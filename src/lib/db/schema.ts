import { jsonb, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const waitlistEntries = pgTable("waitlist_entries", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: text("email").unique().notNull(),
  channels: text("channels").array(),
  referralSource: text("referral_source"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  confirmedAt: timestamp("confirmed_at", { withTimezone: true }),
  ipAddress: text("ip_address"),
  brevoContactId: text("brevo_contact_id"),
  metadata: jsonb("metadata"),
});

export type WaitlistEntry = typeof waitlistEntries.$inferSelect;
export type NewWaitlistEntry = typeof waitlistEntries.$inferInsert;
