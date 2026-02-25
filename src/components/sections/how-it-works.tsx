import { Plug, Rocket, UserPlus } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { Badge } from "@/components/ui/badge";

const STEPS = [
  {
    number: "1",
    icon: UserPlus,
    title: "Sign Up",
    description:
      "Create your account in seconds. No credit card, no commitment — just your email.",
  },
  {
    number: "2",
    icon: Rocket,
    title: "Deploy",
    description:
      "Choose your agent and deploy with one click. We handle the servers, the setup, and the scaling.",
  },
  {
    number: "3",
    icon: Plug,
    title: "Connect",
    description:
      "Add your channels — Discord, Slack, Telegram, and more. Your agent goes live instantly.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <FadeIn>
          <div className="text-center">
            <Badge
              variant="secondary"
              className="mb-4 border-primary-100 bg-primary-50 px-3 py-1 text-sm font-medium text-primary-600"
            >
              Under 5 minutes
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Up and running in minutes
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-foreground-muted">
              Three simple steps. That&apos;s it.
            </p>
          </div>
        </FadeIn>

        <div className="relative mt-20">
          {/* Connecting flow line between step circles (desktop) */}
          <div
            className="absolute top-7 right-[16.67%] left-[16.67%] hidden h-px bg-border md:block"
            aria-hidden="true"
          />

          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {STEPS.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.15}>
                <div className="relative text-center">
                  <div className="relative z-10 mx-auto flex size-14 items-center justify-center rounded-full bg-primary-500 text-lg font-bold text-white shadow-md">
                    {step.number}
                  </div>
                  <div className="mx-auto mt-5 inline-flex items-center justify-center rounded-xl bg-surface-alt p-3 text-primary-600">
                    <step.icon className="size-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-foreground-muted">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
