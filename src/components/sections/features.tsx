import {
  Clock,
  LayoutDashboard,
  MessageSquare,
  Rocket,
  Shield,
  Store,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Rocket,
    title: "One-Click Deploy",
    description:
      "Launch your AI agent with a single click. No servers, no Docker, no config files.",
  },
  {
    icon: MessageSquare,
    title: "Channel Wizards",
    description:
      "Connect Discord, Slack, Telegram, and more with guided setup — no code required.",
  },
  {
    icon: Shield,
    title: "Managed Reliability",
    description:
      "We handle uptime, scaling, and failover so your agent never misses a message.",
  },
  {
    icon: LayoutDashboard,
    title: "Web Dashboard",
    description:
      "Monitor your agent's activity, manage settings, and view analytics from one place.",
  },
  {
    icon: Store,
    title: "Skill Marketplace",
    description:
      "Browse and install community-built skills to extend what your agent can do.",
    badge: "Coming Soon",
  },
  {
    icon: Clock,
    title: "Always On, 24/7",
    description:
      "Your agent runs around the clock. No cron jobs, no wake-up delays.",
  },
] as const;

export function Features() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to run your AI agent
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:shadow-elevated hover:-translate-y-0.5"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                  <feature.icon className="size-5" />
                </div>
                {"badge" in feature && feature.badge && (
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                )}
              </div>

              <h3 className="font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
