import { MessageSquare, Server, Wrench } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

const PAIN_POINTS = [
  {
    icon: Server,
    title: "Complicated Setup",
    description:
      "Most AI agents require servers, Docker, and command-line tools before you can even try them. That's a lot just to say hello.",
  },
  {
    icon: Wrench,
    title: "Constant Upkeep",
    description:
      "Security patches, uptime monitoring, scaling — the maintenance never ends. And it's never what you signed up for.",
  },
  {
    icon: MessageSquare,
    title: "Confusing Configuration",
    description:
      "Connecting an AI to your Discord or Slack should be as easy as adding a friend. It usually isn't.",
  },
];

export function PainPoints() {
  return (
    <section className="bg-surface-alt py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <FadeIn>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              AI power.{" "}
              <span className="text-foreground-muted">No pain.</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground-muted">
              Skip the technical hoops and hurdles. Get an assistant that works
              for you — not the other way around.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PAIN_POINTS.map((point, i) => (
            <FadeIn key={point.title} delay={i * 0.1}>
              <div className="group rounded-xl border border-border bg-surface p-8 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elevated">
                <div className="inline-flex items-center justify-center rounded-lg bg-primary-50 p-3 text-primary-500 transition-colors group-hover:bg-primary-100">
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
