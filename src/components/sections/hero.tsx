"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { EASE_OUT_EXPO } from "@/lib/utils";
import { SITE } from "@/content/site";
import { GridOverlay } from "@/components/ui/grid-overlay";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden pb-10 pt-32 md:pt-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-full md:w-[68%] lg:w-[58%]"
      >
        <Image
          src="/images/ai-human-collaboration.png"
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 100vw, 58vw"
          className="object-contain object-bottom opacity-[0.14] grayscale md:object-right-bottom dark:opacity-[0.22]"
          style={{
            maskImage:
              "linear-gradient(to left, black 35%, transparent 95%)",
            WebkitMaskImage:
              "linear-gradient(to left, black 35%, transparent 95%)",
          }}
        />
      </div>

      <GridOverlay />

      <div className="relative mx-auto w-full max-w-[1600px] flex-1 px-6 md:px-12 lg:px-24">
        <motion.p
          initial={reduce ? undefined : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-[46ch] font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/40 md:text-xs"
        >
          {SITE.eyebrow}
        </motion.p>

        <h1 className="mt-10 md:mt-16">
          <span className="mb-2 block font-mono text-sm uppercase tracking-[0.25em] text-foreground/40 md:mb-4 md:text-base">
            {SITE.disciplineA}
          </span>
          <span className="block font-sans font-black uppercase leading-[0.85] tracking-[-0.05em] text-foreground [font-size:clamp(3rem,12vw,14rem)]">
            {SITE.headlineLines.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={reduce ? undefined : { y: "110%" }}
                  animate={reduce ? undefined : { y: 0 }}
                  transition={{
                    duration: 0.9,
                    ease: EASE_OUT_EXPO,
                    delay: 0.3 + i * 0.08,
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: EASE_OUT_EXPO }}
          className="mt-8 font-mono text-sm text-foreground/50 md:text-base"
        >
          {SITE.manifesto}
        </motion.p>
      </div>

      <div className="relative mx-auto w-full max-w-[1600px] px-6 md:px-12 lg:px-24">
        <div className="flex flex-col gap-4 border-t border-border pt-6 font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <span>
            {SITE.location} — {SITE.year}
          </span>
          <a
            href={SITE.resumeUrl}
            className="group inline-flex items-center gap-2 text-foreground/70 transition-colors hover:text-foreground"
          >
            View Resume
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </a>
          <span className="flex items-center gap-3">
            <span className="relative block h-8 w-px overflow-hidden bg-border">
              <motion.span
                className="absolute inset-x-0 top-0 h-full origin-top bg-foreground"
                initial={{ scaleY: 0 }}
                animate={reduce ? { scaleY: 1 } : { scaleY: [0, 1, 0] }}
                transition={{
                  duration: 2,
                  repeat: reduce ? 0 : Infinity,
                  ease: "easeInOut",
                }}
              />
            </span>
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
}
