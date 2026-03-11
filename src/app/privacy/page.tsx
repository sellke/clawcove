import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How ClawCove collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <Link
        href="/"
        className="mb-10 inline-flex items-center gap-1.5 text-sm text-foreground-muted transition-colors hover:text-foreground"
      >
        <span aria-hidden="true">&larr;</span> Back to Home
      </Link>

      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-3 text-sm text-foreground-muted">
          Last updated: March 10, 2026
        </p>
      </header>

      <div className="prose prose-lg max-w-none prose-headings:tracking-tight prose-a:text-primary-500 prose-a:transition-colors hover:prose-a:text-primary-600">
        <p>
          ClawCove (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates
          the ClawCove platform at{" "}
          <a href="https://clawcove.ai">clawcove.ai</a>. This Privacy Policy
          explains how we collect, use, and protect your information when you use
          our service.
        </p>

        <h2>Information We Collect</h2>
        <p>We collect the following types of information:</p>
        <ul>
          <li>
            <strong>Account information</strong> — your email address and any
            profile details you choose to provide.
          </li>
          <li>
            <strong>Usage data</strong> — how you interact with ClawCove,
            including features used, session duration, and general activity
            patterns.
          </li>
          <li>
            <strong>AI interaction data</strong> — prompts and instructions you
            send to your personal AI agent, which are necessary to provide the
            service.
          </li>
          <li>
            <strong>Technical data</strong> — browser type, device information,
            IP address, and similar technical identifiers collected automatically
            via cookies and analytics tools.
          </li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Operate, maintain, and improve the ClawCove service.</li>
          <li>
            Process your AI agent&apos;s tasks and deliver results back to you.
          </li>
          <li>
            Send transactional emails (account confirmation, service updates).
          </li>
          <li>
            Analyze aggregate usage patterns to improve performance and
            reliability.
          </li>
          <li>Detect and prevent fraud, abuse, or security incidents.</li>
        </ul>

        <h2>Data Sharing</h2>
        <p>
          We do not sell your personal information. We may share data with third
          parties only in these circumstances:
        </p>
        <ul>
          <li>
            <strong>Service providers</strong> — trusted partners who help us
            operate (e.g., hosting, email delivery, analytics), bound by
            confidentiality agreements.
          </li>
          <li>
            <strong>AI infrastructure</strong> — your agent instructions are
            processed through OpenClaw&apos;s infrastructure. We share only what
            is necessary to execute your tasks.
          </li>
          <li>
            <strong>Legal requirements</strong> — when required by law, court
            order, or to protect the rights and safety of ClawCove and its
            users.
          </li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your data,
          including encryption in transit and at rest, access controls, and
          regular security reviews. No system is perfectly secure, but we work
          continuously to protect your information.
        </p>

        <h2>Cookies &amp; Analytics</h2>
        <p>
          We use cookies and similar technologies to maintain sessions, remember
          preferences, and understand how the service is used. You can control
          cookie settings through your browser. We use privacy-respecting
          analytics to understand usage patterns without building detailed
          personal profiles.
        </p>

        <h2>Your Rights</h2>
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you.</li>
          <li>Request correction of inaccurate data.</li>
          <li>Request deletion of your data.</li>
          <li>Export your data in a portable format.</li>
          <li>Withdraw consent for optional data processing.</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{" "}
          <a href="mailto:privacy@clawcove.ai">privacy@clawcove.ai</a>.
        </p>

        <h2>Data Retention</h2>
        <p>
          We retain your data for as long as your account is active or as needed
          to provide the service. If you delete your account, we will remove
          your personal data within 30 days, except where retention is required
          by law.
        </p>

        <h2>Children&apos;s Privacy</h2>
        <p>
          ClawCove is not intended for users under the age of 13. We do not
          knowingly collect personal information from children. If you believe a
          child has provided us with personal data, please contact us so we can
          remove it.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. Material changes will be
          communicated via email or a prominent notice on our website. Your
          continued use of ClawCove after changes take effect constitutes
          acceptance of the updated policy.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please reach out at{" "}
          <a href="mailto:privacy@clawcove.ai">privacy@clawcove.ai</a>.
        </p>
      </div>
    </main>
  );
}
