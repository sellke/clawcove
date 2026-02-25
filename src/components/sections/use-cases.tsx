import {
  Brain,
  Calendar,
  Code2,
  Globe,
  Mail,
  TrendingUp,
} from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

const USE_CASES = [
  {
    icon: Mail,
    title: "Handle your inbox",
    story:
      "Your assistant drafts replies, flags what's urgent, and archives the noise — so you open your email to decisions, not chaos.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Calendar,
    title: "Run your schedule",
    story:
      "It preps you for meetings, blocks focus time, and sends gentle reminders. Wake up to a daily briefing tailored to your day.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: TrendingUp,
    title: "Track what matters",
    story:
      "Monitor prices, watch for competitor changes, track your analytics — your assistant notices things before you do.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Globe,
    title: "Automate the repetitive",
    story:
      "Social media posts from your notes. Reports compiled overnight. Follow-ups that never slip through the cracks.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: Code2,
    title: "Ship while you sleep",
    story:
      "Review pull requests, run tests, catch bugs, and open fix PRs — all while you're away from the keyboard.",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: Brain,
    title: "Remember everything",
    story:
      "Your assistant learns your preferences, remembers past conversations, and gets better the more you use it.",
    color: "bg-cyan-50 text-cyan-600",
  },
] as const;

export function UseCases() {
  return (
    <section id="use-cases" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              What your assistant{" "}
              <span className="text-primary-500">does for you</span>
            </h2>
            <p className="mt-4 text-lg text-foreground-muted">
              Not a chatbot. A digital coworker that works around the clock.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((useCase, i) => (
            <FadeIn key={useCase.title} delay={i * 0.08}>
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-7 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card">
                <div
                  className={`inline-flex size-11 items-center justify-center rounded-xl ${useCase.color} transition-transform duration-300 group-hover:scale-110`}
                >
                  <useCase.icon className="size-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {useCase.title}
                </h3>
                <p className="mt-2 flex-1 leading-relaxed text-foreground-muted">
                  {useCase.story}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
