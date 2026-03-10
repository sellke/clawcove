"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, TriangleAlert, X } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { AnalyticsEvents, trackEvent } from "@/lib/analytics/events";

type ToastVariant = "confirmed" | "error" | null;

const AUTO_DISMISS_MS = 8000;

const CONTENT: Record<
  NonNullable<ToastVariant>,
  { icon: typeof CheckCircle; title: string; body: string }
> = {
  confirmed: {
    icon: CheckCircle,
    title: "You're confirmed!",
    body: "Your spot on the ClawCove waitlist is locked in. We'll let you know as soon as it's your turn.",
  },
  error: {
    icon: TriangleAlert,
    title: "Confirmation failed",
    body: "That link is invalid or has expired. Please check your email for a valid confirmation link.",
  },
};

function deriveVariant(params: URLSearchParams): ToastVariant {
  if (params.get("confirmed") === "true") return "confirmed";
  if (params.get("error") === "invalid-token") return "error";
  return null;
}

function cleanUrl() {
  const url = new URL(window.location.href);
  url.searchParams.delete("confirmed");
  url.searchParams.delete("error");
  window.history.replaceState({}, "", url.pathname);
}

export function ConfirmationToast() {
  const searchParams = useSearchParams();
  const [variant, setVariant] = useState<ToastVariant>(null);

  useEffect(() => {
    const v = deriveVariant(searchParams);
    if (!v) return;

    setVariant(v);
    cleanUrl();

    if (v === "confirmed") {
      trackEvent(AnalyticsEvents.WAITLIST_EMAIL_CONFIRMED);
    }

    const timer = setTimeout(() => setVariant(null), AUTO_DISMISS_MS);
    return () => clearTimeout(timer);
  }, [searchParams]);

  const dismiss = useCallback(() => setVariant(null), []);

  const content = variant ? CONTENT[variant] : null;

  return (
    <AnimatePresence>
      {variant && content && (
        <motion.div
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: -48 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -32 }}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
          className={`fixed inset-x-0 top-0 z-50 flex items-start justify-center px-4 pt-4 ${
            variant === "confirmed" ? "pointer-events-none" : ""
          }`}
        >
          <div
            className={`pointer-events-auto flex w-full max-w-lg items-start gap-3 rounded-xl border px-5 py-4 shadow-elevated backdrop-blur-sm ${
              variant === "confirmed"
                ? "border-success/20 bg-[#f0fdf4]/95 text-green-900"
                : "border-destructive/20 bg-[#fef2f2]/95 text-red-900"
            }`}
          >
            <content.icon
              className={`mt-0.5 size-5 shrink-0 ${
                variant === "confirmed" ? "text-success" : "text-destructive"
              }`}
            />
            <div className="min-w-0 flex-1">
              <p className="font-semibold leading-snug">{content.title}</p>
              <p className="mt-0.5 text-sm leading-relaxed opacity-80">
                {content.body}
              </p>
            </div>
            <button
              type="button"
              onClick={dismiss}
              aria-label="Dismiss notification"
              className="-mr-1 -mt-1 shrink-0 rounded-lg p-1.5 opacity-50 transition-opacity hover:opacity-100"
            >
              <X className="size-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
