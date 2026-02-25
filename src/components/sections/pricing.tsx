import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

const tiers: PricingTier[] = [
  {
    name: "Free",
    price: "$0",
    description: "Try your own AI assistant — no strings attached",
    features: [
      "1 personal assistant",
      "Secure, isolated cloud environment",
      "1,000 messages/month",
      "Single channel (Telegram or Discord)",
      "Community support",
    ],
    cta: "Start Free",
  },
  {
    name: "Pro",
    price: "$29",
    description: "Your full-time AI, fully unlocked",
    features: [
      "1 personal assistant",
      "Secure, isolated cloud environment",
      "Unlimited messages",
      "All channels (Telegram, Discord, Slack & more)",
      "Choose your AI model",
      "Community skills & templates",
      "Daily backups",
      "Priority support",
    ],
    highlighted: true,
    cta: "Join the Waitlist",
  },
  {
    name: "Team",
    price: "$99",
    description: "Multiple assistants, one workspace",
    features: [
      "Up to 5 assistants",
      "Isolated environment per assistant",
      "Unlimited messages",
      "All channels + custom integrations",
      "Shared team workspace",
      "Admin dashboard & roles",
      "Priority support",
    ],
    cta: "Join the Waitlist",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-foreground-muted">
            Start free — no credit card, no catch. Upgrade when your assistant
            becomes indispensable.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-200 ${
                tier.highlighted
                  ? "border-primary-500 bg-surface shadow-elevated lg:scale-105"
                  : "border-border bg-surface shadow-soft hover:shadow-card"
              }`}
            >
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                {tier.highlighted && (
                  <Badge className="bg-primary-500 text-white">
                    Most Popular
                  </Badge>
                )}
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
                  className="w-full cursor-pointer"
                  variant={tier.highlighted ? "default" : "outline"}
                  size="lg"
                >
                  {tier.cta}
                </Button>
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-foreground-subtle">
          Planned launch pricing · Every plan runs in a secure, isolated
          environment
        </p>
      </div>
    </section>
  );
}
