"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { EASE_OUT_EXPO } from "@/lib/utils";
import { SITE } from "@/content/site";
import { Clock } from "./clock";
import { ThemeToggle } from "./theme-toggle";

const DROPDOWNS: Record<string, { label: string; href: string }[]> = {
  About: [
    { label: "Bio & Background", href: "#about" },
    { label: "Core Focus", href: "#core-focus" },
    { label: "Experience", href: "#experience" },
  ],
  Work: [
    { label: "Selected Projects", href: "#work" },
    { label: "Feature Breakdown", href: "#features" },
    { label: "GitHub Stats", href: "#github-stats" },
  ],
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = SITE.nav.map((n) => n.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={reduce ? undefined : { opacity: 0, y: -100 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
        className={cn(
          "fixed inset-x-0 top-0 z-[100] transition-colors duration-300",
          scrolled &&
            "border-b border-border bg-background/60 backdrop-blur-xl",
        )}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-12 md:py-6 lg:px-24">
          <Clock />

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 rounded-full border border-border bg-background/40 p-1 lg:flex"
            onMouseLeave={() => setOpen(null)}
          >
            {SITE.nav.map((item) => {
              const hasPanel = item.label in DROPDOWNS;
              const isActive = active === item.href;
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setOpen(hasPanel ? item.label : null)}
                >
                  <a
                    href={item.href}
                    className={cn(
                      "group relative inline-flex items-center gap-1 rounded-full px-5 py-2 text-sm font-bold transition-colors",
                      isActive
                        ? "bg-muted text-foreground"
                        : "text-foreground/70 hover:text-foreground",
                    )}
                  >
                    <span
                      className={cn(
                        "absolute inset-0 -z-10 rounded-full bg-foreground/5 opacity-0 transition-opacity",
                        !isActive && "group-hover:opacity-100",
                      )}
                    />
                    {item.label}
                    {hasPanel && (
                      <ChevronDown
                        className={cn(
                          "size-3.5 transition-transform",
                          open === item.label && "rotate-180",
                        )}
                      />
                    )}
                  </a>

                  <AnimatePresence>
                    {hasPanel && open === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2 rounded-2xl border border-border bg-background/95 p-2 backdrop-blur-xl"
                      >
                        {DROPDOWNS[item.label].map((sub) => (
                          <a
                            key={sub.href}
                            href={sub.href}
                            className="block rounded-xl px-4 py-2.5 text-sm font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden rounded-full bg-foreground px-5 py-2 text-sm font-bold text-background transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 sm:inline-flex"
            >
              Let&apos;s Talk
            </a>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
              className="inline-flex size-9 items-center justify-center rounded-full border border-border lg:hidden"
            >
              <Menu className="size-4" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[110] flex flex-col bg-background px-6 py-6 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Clock />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="inline-flex size-9 items-center justify-center rounded-full border border-border"
              >
                <X className="size-4" />
              </button>
            </div>
            <nav
              aria-label="Mobile"
              className="flex flex-1 flex-col justify-center gap-2"
            >
              {SITE.nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={reduce ? undefined : { opacity: 0, y: 30 }}
                  animate={reduce ? undefined : { opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, ease: EASE_OUT_EXPO }}
                  className="text-4xl font-black uppercase tracking-tight text-foreground"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="rounded-full bg-foreground px-5 py-3 text-center text-sm font-bold text-background"
            >
              Let&apos;s Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
