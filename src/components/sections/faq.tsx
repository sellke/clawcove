"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnalyticsEvents, trackEvent } from "@/lib/analytics/events";

const faqs = [
  {
    question: "What is OpenClaw?",
    answer:
      "OpenClaw is an open-source AI agent framework that lets you build conversational agents for Discord, Slack, Telegram, and other platforms. It's powerful, but running it requires server infrastructure — that's where ClawCove comes in.",
  },
  {
    question: "Do I need technical skills to use ClawCove?",
    answer:
      "Not at all. ClawCove handles all the technical complexity. If you can fill out a form and click a button, you can deploy an AI agent.",
  },
  {
    question: "Which messaging channels are supported?",
    answer:
      "At launch, we'll support Discord, Slack, and Telegram. More channels (WhatsApp, Teams, etc.) are on our roadmap.",
  },
  {
    question: "What happens to my data?",
    answer:
      "Your data stays yours. We encrypt everything in transit and at rest. We never train on your data or share it with third parties.",
  },
  {
    question: "When will ClawCove launch?",
    answer:
      "We're targeting Q2 2026 for our public beta. Join the waitlist to be first in line and get early access.",
  },
  {
    question: "Can I self-host OpenClaw instead?",
    answer:
      "Absolutely! OpenClaw is open source and always will be. ClawCove is for people who want the power of OpenClaw without the infrastructure headaches.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-surface-alt py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>

          <Accordion
            type="single"
            collapsible
            className="mt-12"
            onValueChange={(value) => {
              if (!value) return;
              const idx = Number.parseInt(value.replace("faq-", ""), 10);
              const faq = faqs[idx];
              if (faq) {
                trackEvent(AnalyticsEvents.FAQ_ITEM_OPENED, {
                  question: faq.question,
                  index: idx,
                });
              }
            }}
          >
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`}>
                <AccordionTrigger className="text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground-muted leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
