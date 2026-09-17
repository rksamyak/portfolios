"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { FEATURES, type Feature } from "@/content/features";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

function FloatingTags({ tags, flip }: { tags: string[]; flip: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [40, reduce ? 40 : -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-20, reduce ? -20 : -100]);
  const positions = [
    "left-[2%] top-[8%]",
    "right-[6%] top-[22%]",
    "left-[12%] bottom-[10%]",
  ];

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0">
      {tags.map((tag, i) => (
        <motion.span
          key={tag}
          style={{ y: i % 2 === 0 ? y1 : y2 }}
          className={cn(
            "absolute font-mono text-xs uppercase tracking-[0.3em] text-foreground/20",
            positions[i % positions.length],
            flip && "hidden lg:block",
          )}
        >
          {tag}
        </motion.span>
      ))}
    </div>
  );
}

function FeatureBlock({ feature, index }: { feature: Feature; index: number }) {
  const flip = index % 2 === 1;
  return (
    <div className="relative border-t border-border py-20 md:py-28">
      <FloatingTags tags={feature.tags} flip={flip} />
      <div className="relative mx-auto grid max-w-[1600px] gap-8 px-6 md:px-12 lg:grid-cols-2 lg:gap-24 lg:px-24">
        <div className={cn(flip && "lg:order-2")}>
          <SectionLabel>Feature — {feature.index}</SectionLabel>
          <Reveal>
            <h3 className="mt-4 text-4xl font-black uppercase tracking-tight text-foreground md:text-6xl">
              {feature.title}
            </h3>
          </Reveal>
        </div>
        <div className={cn("lg:pt-10", flip && "lg:order-1")}>
          <Reveal>
            <p className="max-w-[52ch] text-base leading-relaxed text-foreground/70 md:text-lg">
              {feature.body}
            </p>
          </Reveal>
          <div className="mt-6 flex flex-wrap gap-2">
            {feature.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-border px-4 py-2 text-xs font-medium text-foreground/70"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="overflow-hidden">
      {FEATURES.map((feature, i) => (
        <FeatureBlock key={feature.index} feature={feature} index={i} />
      ))}
    </section>
  );
}
