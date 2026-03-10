"use client";

import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnalyticsEvents, trackEvent } from "@/lib/analytics/events";
import { cn } from "@/lib/utils";

type FormState = "idle" | "loading" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function WaitlistForm({
  variant = "hero",
}: {
  variant?: "hero" | "cta";
}) {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!EMAIL_RE.test(email)) {
      setState("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setState("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, honeypot }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          data.message || "Something went wrong. Please try again.",
        );
      }

      setState("success");
      trackEvent(AnalyticsEvents.WAITLIST_SIGNUP_COMPLETED, { variant });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong.";
      setState("error");
      setErrorMessage(message);
      trackEvent(AnalyticsEvents.WAITLIST_SIGNUP_ERROR, {
        variant,
        error: message,
      });
    }
  }

  if (state === "success") {
    return (
      <div
        className={cn(
          "flex items-center gap-2 font-medium text-success",
          variant === "hero" ? "text-lg" : "justify-center text-base",
        )}
      >
        <Check className="size-5" />
        <span>You&apos;re on the list! Check your email.</span>
      </div>
    );
  }

  const isHero = variant === "hero";

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex gap-3",
        isHero
          ? "flex-col sm:flex-row sm:items-start"
          : "mx-auto w-full max-w-md flex-col sm:flex-row sm:items-start",
      )}
    >
      <div className="relative flex-1 space-y-1.5">
        <Input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state === "error") setState("idle");
          }}
          className={cn(
            isHero ? "h-12 px-4 text-base" : "h-10",
            state === "error" && "border-destructive",
          )}
          required
        />

        {/* Honeypot — invisible to real users */}
        <input
          type="text"
          name="company_url"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0"
        />

        {state === "error" && errorMessage && (
          <p className="text-sm text-destructive">{errorMessage}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={state === "loading"}
        size={isHero ? "lg" : "default"}
        className={cn(isHero && "h-12 px-6 text-base", "cursor-pointer")}
      >
        {state === "loading" ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <>
            Join the Waitlist
            <ArrowRight className="size-4" />
          </>
        )}
      </Button>
    </form>
  );
}
