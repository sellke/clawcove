import { FadeIn } from "@/components/animations/fade-in";
import { WaitlistForm } from "@/components/forms/waitlist-form";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
    >
      {/* Warm gradient mesh */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary-100/40 blur-[128px]" />
        <div className="absolute top-0 -left-40 h-[500px] w-[500px] rounded-full bg-warm-50/60 blur-[100px]" />
        <div className="absolute -bottom-20 right-1/3 h-[400px] w-[400px] rounded-full bg-primary-50/50 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <div className="mb-6 flex justify-center">
              <img
                src="/mascot.png"
                alt="ClawCove hermit crab mascot"
                width={180}
                className="drop-shadow-lg"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Meet your personal AI.{" "}
              <span className="text-primary-500">Always on. Always yours.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-foreground-muted md:text-xl">
              A secure, always-on AI assistant in the cloud — drafting
              emails, managing your calendar, automating tasks, and more.
              No setup. No servers. Just tell it what you need.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mx-auto mt-10 max-w-md">
              <WaitlistForm variant="hero" />
              <p className="mt-3 text-sm text-foreground-subtle">
                Free to start · No credit card required
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-foreground-muted">
              <span className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-success" />
                Safe &amp; secure in the cloud
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-success" />
                Choose your AI model
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-success" />
                Telegram, Discord &amp; more
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="mt-6 text-sm text-foreground-subtle">
              🦞 Powered by{" "}
              <a
                href="https://github.com/openclaw"
                className="underline underline-offset-2 transition-colors hover:text-foreground-muted"
              >
                OpenClaw
              </a>{" "}
              — the open-source AI everyone&apos;s talking about
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
