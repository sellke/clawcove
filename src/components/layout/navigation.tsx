"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "#faq" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-surface/80 shadow-soft backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <a
          href="/"
          className="group flex items-center gap-2"
          aria-label="ClawCove home"
        >
          <span className="text-2xl transition-transform group-hover:rotate-12">
            🦀
          </span>
          <span className="text-xl font-bold tracking-tight text-foreground">
            ClawCove
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) =>
            link.href.startsWith("/") ? (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ) : (
              <button
                key={link.href}
                type="button"
                onClick={() => scrollTo(link.href.slice(1))}
                className="cursor-pointer text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </button>
            ),
          )}
        </div>

        <div className="hidden md:block">
          <Button
            onClick={() => scrollTo("hero")}
            size="sm"
            className="cursor-pointer"
          >
            Join the Waitlist
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="-mr-2 cursor-pointer p-2 text-foreground-muted transition-colors hover:text-foreground md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden border-b border-border bg-surface/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) =>
                link.href.startsWith("/") ? (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-2.5 text-left text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ) : (
                  <button
                    key={link.href}
                    type="button"
                    onClick={() => scrollTo(link.href.slice(1))}
                    className="cursor-pointer py-2.5 text-left text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </button>
                ),
              )}
              <div className="pt-2">
                <Button
                  onClick={() => scrollTo("hero")}
                  className="w-full cursor-pointer"
                >
                  Join the Waitlist
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
