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
    question: "What can my AI assistant actually do?",
    answer:
      "Your assistant can draft emails, manage your calendar, automate repetitive tasks, monitor websites, write social media content, review code, track prices, compile research reports, and much more. It's powered by OpenClaw — a full AI agent that can do real work, not just answer questions.",
  },
  {
    question: "Do I need any technical skills?",
    answer:
      "Not at all. If you can fill out a form and click a button, you can have a personal AI assistant. We ask what you want help with, configure everything for you, and connect it to your favorite channels. No coding, no command line, no servers.",
  },
  {
    question: "What does \"your own private machine\" mean?",
    answer:
      "Unlike most hosting services that put you on shared infrastructure, every ClawCove assistant runs on its own dedicated virtual machine. That means complete privacy — your data, your processes, and your assistant's memory are fully isolated. Think of it as your own computer in the cloud.",
  },
  {
    question: "Which AI models does it use?",
    answer:
      "ClawCove is powered by OpenClaw, which supports multiple AI models including Claude, GPT-4, and more. You'll be able to see and choose which model powers your assistant. We keep everything updated so you always have access to the latest capabilities.",
  },
  {
    question: "What is OpenClaw?",
    answer:
      "OpenClaw is the world's fastest-growing open-source AI agent framework. It's a personal AI that can see your screen, use your apps, browse the web, and do real work. ClawCove makes it effortless to use — we handle all the hosting, setup, and maintenance so you don't have to.",
  },
  {
    question: "How is this different from ChatGPT or other chatbots?",
    answer:
      "ChatGPT and similar tools are conversational — you ask, they answer. Your ClawCove assistant is an agent — it can take action. It runs 24/7, remembers your preferences, connects to your tools, and proactively does things for you even when you're not there.",
  },
  {
    question: "What happens to my data?",
    answer:
      "Your data stays yours. It lives on your dedicated virtual machine, encrypted and isolated. We never train on your data or share it. And you can export everything at any time — no lock-in, ever.",
  },
  {
    question: "When will ClawCove launch?",
    answer:
      "We're targeting Q2 2026 for our public beta. Join the waitlist to be first in line and get early access pricing.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-20 bg-surface-alt py-24">
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
                <AccordionContent className="leading-relaxed text-foreground-muted">
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
