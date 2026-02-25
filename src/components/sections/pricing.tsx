import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const tiers: PricingTier[] = [
  {
    name: "Free",
    price: "$0",
    description: "Get started at no cost",
    features: [
      "1 AI agent",
      "Community channels only",
      "1,000 messages/month",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    description: "For serious builders",
    features: [
      "3 AI agents",
      "All channels (Discord, Slack, Telegram)",
      "Unlimited messages",
      "Priority support",
      "Custom skills",
    ],
    highlighted: true,
  },
  {
    name: "Team",
    price: "$99",
    description: "For teams and organizations",
    features: [
      "10 AI agents",
      "All channels + custom integrations",
      "Unlimited messages",
      "Dedicated support",
      "Team management dashboard",
      "SSO & audit logs",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-surface-alt py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-foreground-muted">
            Start free. Scale when you&apos;re ready.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-xl border bg-card p-8 transition-all duration-200 ${
                tier.highlighted
                  ? "border-primary-500 shadow-elevated lg:scale-105"
                  : "border-border shadow-soft hover:shadow-card"
              }`}
            >
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                {tier.highlighted && (
                  <Badge className="bg-primary-500 text-white">
                    Most Popular
                  </Badge>
                )}
                <Badge variant="secondary" className="text-xs">
                  Coming Soon
                </Badge>
              </div>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">
                  {tier.price}
                </span>
                <span className="text-foreground-muted">/mo</span>
              </div>

              <p className="mt-2 text-sm text-foreground-muted">
                {tier.description}
              </p>

              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#waitlist" className="mt-8 block">
                <Button
                  className="w-full"
                  variant={tier.highlighted ? "default" : "outline"}
                  size="lg"
                >
                  Join the Waitlist
                </Button>
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-foreground-subtle">
          Planned launch pricing — subject to change
        </p>
      </div>
    </section>
  );
}
