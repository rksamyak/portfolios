"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { EASE_OUT_EXPO } from "@/lib/utils";
import { SITE } from "@/content/site";
import { GridOverlay } from "@/components/ui/grid-overlay";

const CTA_LINES = [
  { text: "Let's Build Something", serif: false },
  { text: "Amazing", serif: true },
  { text: "Together", serif: false },
];

export function CTA() {
  const reduce = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border py-28 md:py-40"
    >
      <GridOverlay />
      <div className="relative mx-auto max-w-[1600px] px-6 text-center md:px-12 lg:px-24">
        <h2 className="mx-auto flex flex-col items-center text-5xl font-black uppercase leading-[0.9] tracking-tight text-foreground md:text-8xl">
          {CTA_LINES.map((line, i) => (
            <span key={line.text} className="block overflow-hidden">
              <motion.span
                className={line.serif ? "block font-serif italic lowercase" : "block"}
                initial={reduce ? undefined : { y: "110%" }}
                whileInView={reduce ? undefined : { y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{
                  duration: 0.9,
                  ease: EASE_OUT_EXPO,
                  delay: i * 0.08,
                }}
              >
                {line.text}
              </motion.span>
            </span>
          ))}
        </h2>

        <p className="mx-auto mt-8 max-w-[48ch] text-base leading-relaxed text-foreground/60 md:text-lg">
          I&apos;m taking on new engagements for {SITE.year}. If you&apos;re
          building something at the edge of what models can do, let&apos;s talk.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={SITE.socials.email}
            className="rounded-full bg-foreground px-8 py-4 text-sm font-bold text-background transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            Hire Me
          </a>
          <a
            href={SITE.resumeUrl}
            className="rounded-full border border-border px-8 py-4 text-sm font-bold text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            View My Resume
          </a>
        </div>
      </div>

      <footer className="relative mx-auto mt-28 flex max-w-[1600px] flex-col items-center gap-6 border-t border-border px-6 pt-10 font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 md:flex-row md:justify-between md:px-12 lg:px-24">
        <nav aria-label="Social" className="flex gap-6">
          <a href={SITE.socials.github} className="hover:text-foreground">
            GitHub
          </a>
          <a href={SITE.socials.linkedin} className="hover:text-foreground">
            LinkedIn
          </a>
          <a href={SITE.socials.x} className="hover:text-foreground">
            X
          </a>
          <a href={SITE.socials.email} className="hover:text-foreground">
            Email
          </a>
        </nav>
        <p>
          © {SITE.year} {SITE.name}
        </p>
        <a
          href="#home"
          className="group inline-flex items-center gap-2 hover:text-foreground"
        >
          Back to top
          <ArrowUp className="size-3.5 transition-transform group-hover:-translate-y-1" />
        </a>
      </footer>
    </section>
  );
}
