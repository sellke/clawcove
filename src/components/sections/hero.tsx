import { FadeIn } from "@/components/animations/fade-in";
import { WaitlistForm } from "@/components/forms/waitlist-form";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32"
    >
      {/* Abstract gradient mesh — three soft orbs evoking ocean light */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary-200/30 blur-[128px]" />
        <div className="absolute top-0 -left-40 h-[500px] w-[500px] rounded-full bg-primary-100/40 blur-[100px]" />
        <div className="absolute -bottom-20 right-1/3 h-[400px] w-[400px] rounded-full bg-accent-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="max-w-2xl">
          <FadeIn>
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Your Own AI Agent,{" "}
              <span className="text-primary-500">Always On</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-foreground-muted md:text-xl">
              Deploy a personal AI assistant that lives in your Discord, Slack,
              or Telegram — running 24/7, no technical skills required. Powered
              by the open-source{" "}
              <span className="font-medium text-foreground">OpenClaw</span>{" "}
              framework.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-10">
              <WaitlistForm variant="hero" />
              <p className="mt-3 text-sm text-foreground-subtle">
                Free during beta · No credit card required
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
