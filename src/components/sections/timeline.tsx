"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { EXPERIENCE, type ExperienceEntry } from "@/content/experience";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

function Entry({ entry, index }: { entry: ExperienceEntry; index: number }) {
  const reduce = useReducedMotion();
  const left = index % 2 === 0;

  return (
    <div
      className={cn(
        "relative pl-12 md:w-1/2 md:pl-0",
        left ? "md:pr-16 md:text-right" : "md:ml-auto md:pl-16",
      )}
    >
      <motion.span
        aria-hidden
        initial={reduce ? undefined : { scale: 0 }}
        whileInView={reduce ? undefined : { scale: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.4 }}
        className={cn(
          "absolute top-1.5 size-3 rounded-full bg-foreground",
          "left-[-5px] md:left-auto",
          left ? "md:right-[-6px]" : "md:left-[-6px]",
        )}
      />
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/40">
          {entry.range}
        </p>
        <h3 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
          {entry.role}
        </h3>
        <p className="mt-1 text-foreground/50">{entry.org}</p>
        <p
          className={cn(
            "mt-4 text-base leading-relaxed text-foreground/70",
            left ? "md:ml-auto" : "",
            "max-w-[52ch]",
          )}
        >
          {entry.body}
        </p>
        {entry.href && (
          <a
            href={entry.href}
            className={cn(
              "group mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground/70 transition-colors hover:text-foreground",
              left && "md:flex-row-reverse",
            )}
          >
            View Details
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        )}
      </Reveal>
    </div>
  );
}

export function Timeline() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? EXPERIENCE : EXPERIENCE.slice(0, 5);
  const rest = EXPERIENCE.slice(5);

  return (
    <section
      id="experience"
      className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-32 lg:px-24 lg:py-40"
    >
      <SectionLabel>Experience</SectionLabel>
      <Reveal>
        <h2 className="mt-4 max-w-[16ch] text-4xl font-black uppercase tracking-tight text-foreground md:text-6xl">
          A Decade Of Shipping.
        </h2>
      </Reveal>

      <div className="relative mt-16 md:mt-24">
        <span
          aria-hidden
          className="absolute left-0 top-0 h-full w-px bg-border md:left-1/2"
        />
        <div className="space-y-16 md:space-y-24">
          {visible.map((entry, i) => (
            <Entry key={entry.range} entry={entry} index={i} />
          ))}
          <AnimatePresence initial={false}>
            {expanded &&
              rest.map((entry, i) => (
                <motion.div
                  key={entry.range}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-visible"
                >
                  <Entry entry={entry} index={i + 5} />
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>

      {rest.length > 0 && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-16 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-foreground/70 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        >
          {expanded ? "Show less" : `View ${rest.length} more`}
        </button>
      )}
    </section>
  );
}
