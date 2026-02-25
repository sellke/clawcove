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
    question: "What exactly does ClawCove do?",
    answer:
      "ClawCove gives you your own AI agent that lives in your Discord, Slack, or Telegram — available 24/7 to answer questions, moderate, assist your community, or automate tasks. We handle all the hosting and infrastructure so you don't have to.",
  },
  {
    question: "Do I need technical skills?",
    answer:
      "Not at all. If you can fill out a form and click a button, you can deploy an AI agent. ClawCove is designed for everyone — community managers, small business owners, creators, and teams who want AI without the complexity.",
  },
  {
    question: "Which messaging platforms are supported?",
    answer:
      "At launch, we'll support Discord, Slack, and Telegram. More platforms — including WhatsApp and Microsoft Teams — are on our roadmap.",
  },
  {
    question: "What happens to my data?",
    answer:
      "Your data stays yours. We encrypt everything in transit and at rest. We never train on your data or share it with third parties.",
  },
  {
    question: "What is OpenClaw?",
    answer:
      "OpenClaw is the open-source AI agent framework that powers ClawCove. Think of it as the engine under the hood — it's powerful, transparent, and community-driven. ClawCove makes it easy to use without needing to manage the technical parts yourself.",
  },
  {
    question: "When will ClawCove launch?",
    answer:
      "We're targeting Q2 2026 for our public beta. Join the waitlist to be first in line and get early access pricing.",
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
