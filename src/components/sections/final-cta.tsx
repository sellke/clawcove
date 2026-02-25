import { WaitlistForm } from "@/components/forms/waitlist-form";

export function FinalCTA() {
  return (
    <section id="waitlist" className="scroll-mt-20 bg-primary-50 py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to meet your AI?
          </h2>
          <p className="mt-4 text-lg text-foreground-muted">
            Join the waitlist and be the first to get your own personal
            assistant — safe, secure, and running 24/7 in the cloud.
          </p>

          <div className="mt-8">
            <WaitlistForm variant="cta" />
          </div>

          <p className="mt-4 text-xs text-foreground-subtle">
            We&apos;ll only email you about ClawCove. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
