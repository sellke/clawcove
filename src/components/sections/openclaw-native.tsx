import { ArrowRight, Code2, Cpu, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const differentiators = [
  {
    icon: Code2,
    title: "Deep Integration",
    description:
      "Built from the ground up around OpenClaw's architecture, not bolted on as an afterthought.",
  },
  {
    icon: Cpu,
    title: "Optimized Runtime",
    description:
      "Fine-tuned infrastructure that understands OpenClaw's resource patterns and scaling needs.",
  },
  {
    icon: Heart,
    title: "Community-Driven",
    description:
      "Shaped by the OpenClaw community. Your feedback directly influences what we build next.",
  },
];

const trustSignals = ["Open source", "Community backed", "Transparent roadmap"];

export function OpenClawNative() {
  return (
    <section id="openclaw" className="py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Purpose-built for OpenClaw
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground-muted">
            ClawCove isn&apos;t generic cloud hosting with a template slapped on
            top. Every feature is designed specifically for the way OpenClaw
            agents work — so you get a faster, more reliable, and more intuitive
            experience out of the box.
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
              Learn more about OpenClaw
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
