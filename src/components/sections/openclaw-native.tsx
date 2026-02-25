import { ArrowRight, Code2, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const differentiators = [
  {
    icon: Code2,
    title: "Open Source at the Core",
    description:
      "ClawCove is built on OpenClaw, a transparent, open-source AI agent framework. No black boxes — you can see exactly how your agent works.",
  },
  {
    icon: Sparkles,
    title: "Purpose-Built, Not Duct-Taped",
    description:
      "This isn't generic cloud hosting with an AI wrapper. Every feature is designed around how conversational agents actually work.",
  },
  {
    icon: Heart,
    title: "Community-Driven",
    description:
      "Shaped by real users building real agents. Your feedback directly influences what we build next.",
  },
];

const trustSignals = [
  "Open source",
  "No vendor lock-in",
  "Transparent roadmap",
];

export function OpenClawNative() {
  return (
    <section id="openclaw" className="py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built on open source you can trust
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground-muted">
            ClawCove runs on{" "}
            <span className="font-medium text-foreground">OpenClaw</span>, an
            open-source framework for building AI agents. That means no
            proprietary lock-in, full transparency, and a growing community of
            builders behind it.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {differentiators.map((item) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                <item.icon className="size-6" />
              </div>
              <h3 className="mt-4 font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-3">
            {trustSignals.map((signal) => (
              <span
                key={signal}
                className="rounded-full border border-border bg-surface-alt px-4 py-1.5 text-sm font-medium text-foreground-muted"
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
      </div>
    </section>
  );
}
