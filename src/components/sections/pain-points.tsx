import { Server, Terminal, Wrench } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

const PAIN_POINTS = [
  {
    icon: Terminal,
    title: "Servers & setup",
    description:
      "SSH, Docker, TLS certificates, port forwarding — before you even get to the AI part. That's a lot of work just to say hello.",
  },
  {
    icon: Wrench,
    title: "Never-ending maintenance",
    description:
      "Security patches, dependency updates, uptime monitoring. Your AI assistant shouldn't come with a sysadmin job.",
  },
  {
    icon: Server,
    title: "Privacy concerns",
    description:
      "Most hosting shares resources between users. Your conversations, your data, your assistant's memory — sitting alongside strangers. You deserve better.",
  },
];

export function PainPoints() {
  return (
    <section className="bg-surface-alt py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Running your own AI{" "}
              <span className="text-foreground-muted">should be easy</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground-muted">
              OpenClaw is incredible — but self-hosting it means becoming a
              DevOps engineer. You have better things to do.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PAIN_POINTS.map((point, i) => (
            <FadeIn key={point.title} delay={i * 0.1}>
              <div className="group rounded-2xl border border-border bg-surface p-8 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card">
                <div className="inline-flex items-center justify-center rounded-xl bg-warm-50 p-3 text-warm-500 transition-colors group-hover:bg-warm-100">
                  <point.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {point.title}
                </h3>
                <p className="mt-2 leading-relaxed text-foreground-muted">
                  {point.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
