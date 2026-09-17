"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/utils";
import { CORE_FOCUS } from "@/content/site";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";

export function CoreFocus() {
  const reduce = useReducedMotion();

  return (
    <section
      id="core-focus"
      className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-32 lg:px-24 lg:py-40"
    >
      <div className="grid gap-12 md:grid-cols-[200px_1fr] md:gap-16 lg:gap-24">
        <div>
          <SectionLabel className="md:sticky md:top-32">Core Focus</SectionLabel>
        </div>

        <div className="max-w-4xl">
          <Reveal>
            <p className="font-serif text-3xl italic leading-tight text-foreground md:text-5xl">
              {CORE_FOCUS.quote}
            </p>
          </Reveal>

          <div className="mt-16 grid gap-10 border-t border-border pt-10 sm:grid-cols-2 md:mt-24">
            {CORE_FOCUS.columns.map((col, i) => (
              <Reveal key={col.label} delay={i * 0.1}>
                <SectionLabel as="h3">{col.label}</SectionLabel>
                <p className="mt-4 max-w-[45ch] text-base leading-relaxed text-foreground/70 md:text-lg">
                  {col.body}
                </p>
              </Reveal>
            ))}
          </div>

          <motion.p
            initial={reduce ? undefined : { opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            whileInView={
              reduce ? undefined : { opacity: 1, clipPath: "inset(0 0% 0 0)" }
            }
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1.4, ease: EASE_OUT_EXPO }}
            className="mt-16 font-script text-5xl text-foreground md:mt-24 md:text-7xl"
          >
            {CORE_FOCUS.signature}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
