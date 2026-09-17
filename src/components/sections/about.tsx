"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ABOUT } from "@/content/about";
import { STACK_ROW_A, STACK_ROW_B, type Tech } from "@/content/stack";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { Marquee } from "@/components/ui/marquee";

function TechPill({ tech }: { tech: Tech }) {
  return (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground/80">
      <Image
        src={`https://cdn.simpleicons.org/${tech.slug}`}
        alt=""
        width={18}
        height={18}
        className="opacity-70 dark:invert dark:opacity-60"
        unoptimized
      />
      {tech.name}
    </span>
  );
}

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -80]);

  return (
    <section id="about" className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-32 lg:px-24 lg:py-40">
      <div ref={ref} className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_1.1fr] lg:gap-24">
        <div className="relative">
          <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden">
            <motion.div style={{ y }} className="absolute inset-0 -top-20 h-[calc(100%+5rem)]">
              <Image
                src={ABOUT.portrait.src}
                alt={ABOUT.portrait.alt}
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
              />
            </motion.div>
          </div>
        </div>

        <div>
          <div aria-hidden className="flex flex-col leading-[0.9]">
            <span className="text-4xl font-black uppercase tracking-tight text-foreground md:text-6xl">
              {ABOUT.kineticLabel}
            </span>
            <span className="text-stroke text-4xl font-black uppercase tracking-tight md:text-6xl">
              {ABOUT.kineticLabel}
            </span>
          </div>

          <Reveal className="mt-10">
            <h2 className="max-w-[20ch] text-2xl font-bold leading-snug text-foreground md:text-4xl">
              {ABOUT.heading}
            </h2>
          </Reveal>

          <div className="mt-8 space-y-5">
            {ABOUT.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="max-w-[62ch] text-base leading-relaxed text-foreground/70 md:text-lg">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-24 border-t border-border pt-12 md:mt-32">
        <SectionLabel>Tech Stack &amp; Ecosystem</SectionLabel>
        <div className="mt-8 space-y-4">
          <Marquee
            items={STACK_ROW_A.map((t) => (
              <TechPill key={t.slug} tech={t} />
            ))}
            direction="left"
            speed={38}
            separator={null}
            itemClassName="mr-4"
          />
          <Marquee
            items={STACK_ROW_B.map((t) => (
              <TechPill key={t.slug} tech={t} />
            ))}
            direction="right"
            speed={44}
            separator={null}
            itemClassName="mr-4"
          />
        </div>
      </div>
    </section>
  );
}
