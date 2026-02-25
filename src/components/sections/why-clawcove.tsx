import {
  ArrowRight,
  Eye,
  HardDrive,
  Sparkles,
  Users,
} from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";

const PILLARS = [
  {
    icon: HardDrive,
    title: "Safe, secure, and yours",
    description:
      "Your assistant runs in its own fully isolated environment in the cloud — not shared with anyone else. Your data, your conversations, your memory, completely private and encrypted.",
    highlight: "Fully isolated & encrypted",
  },
  {
    icon: Eye,
    title: "Transparent by default",
    description:
      "See which AI models power your assistant. Choose between Claude, GPT-4, and more. Your data is always exportable — no lock-in, ever.",
    highlight: "Choose your AI model",
  },
  {
    icon: Users,
    title: "Community-powered",
    description:
      "Share skills, browse templates, and learn from what other assistants are doing. The more people in the Cove, the more powerful every assistant becomes.",
    highlight: "Coming soon",
  },
  {
    icon: Sparkles,
    title: "Built for humans, not developers",
    description:
      "No terminals. No config files. Tell us what you need help with and we'll set up your assistant. Designed to feel welcoming, not intimidating.",
    highlight: "Under 5 minutes to set up",
  },
];

const TRUST_SIGNALS = [
  "Open source at the core",
  "No vendor lock-in",
  "Data always exportable",
  "Public status page",
];

export function WhyClawCove() {
  return (
    <section id="why-clawcove" className="scroll-mt-20 bg-surface-alt py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Why ClawCove?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground-muted">
              Powered by{" "}
              <span className="font-medium text-foreground">OpenClaw</span>, the
              open-source AI framework everyone&apos;s talking about.
              We make it effortless to use.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {PILLARS.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={i * 0.1}>
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-8 shadow-soft transition-all duration-300 hover:shadow-card">
                <div className="flex items-start justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-100">
                    <pillar.icon className="size-6" />
                  </div>
                  <span className="rounded-full border border-border bg-surface-alt px-3 py-1 text-xs font-medium text-foreground-muted">
                    {pillar.highlight}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2 flex-1 leading-relaxed text-foreground-muted">
                  {pillar.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-12 flex flex-col items-center gap-6">
            <div className="flex flex-wrap justify-center gap-3">
              {TRUST_SIGNALS.map((signal) => (
                <span
                  key={signal}
                  className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-foreground-muted"
                >
                  {signal}
                </span>
              ))}
            </div>

            <Button variant="link" asChild>
              <a href="https://github.com/openclaw" className="group gap-2">
                Explore the OpenClaw project
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
