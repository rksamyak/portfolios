"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { DashboardConfig } from "@/content/dashboards";
import { SectionLabel } from "@/components/ui/section-label";
import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const ACCENT: Record<DashboardConfig["accent"], string> = {
  green: "hsl(var(--signal-green))",
  orange: "hsl(var(--signal-orange))",
  mono: "hsl(var(--foreground))",
};

function Heatmap({ weeks, accent }: { weeks: number[][]; accent: string }) {
  const reduce = useReducedMotion();
  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex gap-[3px]">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-[3px]">
            {week.map((level, di) => (
              <motion.span
                key={di}
                initial={reduce ? undefined : { opacity: 0, scale: 0.6 }}
                whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (wi * 7 + di) * 0.001 }}
                className="size-[11px] rounded-[2px]"
                style={{
                  backgroundColor:
                    level === 0
                      ? "hsl(var(--muted))"
                      : accent,
                  opacity: level === 0 ? 1 : 0.25 + level * 0.19,
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Bars({
  languages,
  accent,
}: {
  languages: { name: string; hours: number }[];
  accent: string;
}) {
  const reduce = useReducedMotion();
  const max = Math.max(...languages.map((l) => l.hours), 1);
  return (
    <div className="space-y-3">
      {languages.map((lang) => (
        <div key={lang.name} className="flex items-center gap-4">
          <span className="w-28 shrink-0 font-mono text-xs uppercase tracking-[0.15em] text-foreground/50">
            {lang.name}
          </span>
          <div className="h-3 flex-1 overflow-hidden rounded-full bg-muted">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: accent }}
              initial={reduce ? undefined : { width: 0 }}
              whileInView={
                reduce ? undefined : { width: `${(lang.hours / max) * 100}%` }
              }
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
          <span className="w-12 shrink-0 text-right font-mono text-xs tabular-nums text-foreground/50">
            {lang.hours}h
          </span>
        </div>
      ))}
    </div>
  );
}

export function DashboardSection({
  config,
  weeks,
  languages,
}: {
  config: DashboardConfig;
  weeks?: number[][];
  languages?: { name: string; hours: number }[];
}) {
  const accent = ACCENT[config.accent];

  return (
    <section
      id={config.id}
      className="mx-auto max-w-[1700px] px-6 pb-24 pt-10 md:px-12 md:pb-32 md:pt-14 lg:px-24"
    >
      <div className="flex items-center gap-3">
        <SectionLabel>{config.label}</SectionLabel>
        <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/40">
          <span
            className="relative flex size-1.5"
            aria-hidden
          >
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
              style={{ backgroundColor: accent }}
            />
            <span
              className="relative inline-flex size-1.5 rounded-full"
              style={{ backgroundColor: accent }}
            />
          </span>
          Live Authenticated Stream
        </span>
      </div>

      <Reveal>
        <h2 className="mt-4 max-w-[18ch] text-3xl font-black uppercase tracking-tight text-foreground md:text-5xl">
          {config.headline}
        </h2>
      </Reveal>

      <div
        className={cn(
          "mt-12 grid gap-8 border-t border-border pt-10",
          config.counters.length === 3
            ? "sm:grid-cols-3"
            : "sm:grid-cols-2 lg:grid-cols-4",
        )}
      >
        {config.counters.map((c) => (
          <div key={c.label}>
            <SectionLabel as="h3">{c.label}</SectionLabel>
            <p className="mt-3 font-sans text-4xl font-black tracking-tight text-foreground md:text-6xl">
              <Counter
                value={c.value}
                decimals={c.suffix === "h" ? 1 : 0}
                suffix={c.suffix}
              />
            </p>
          </div>
        ))}
      </div>

      <p className="mt-8 max-w-[60ch] text-sm leading-relaxed text-foreground/50">
        {config.caption}
      </p>

      {config.visual === "heatmap" && weeks && (
        <div className="mt-10">
          <Heatmap weeks={weeks} accent={accent} />
        </div>
      )}
      {config.visual === "bars" && languages && (
        <div className="mt-10 max-w-2xl">
          <Bars languages={languages} accent={accent} />
        </div>
      )}
    </section>
  );
}
