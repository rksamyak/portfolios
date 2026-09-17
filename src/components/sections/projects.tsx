"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, type Project } from "@/content/projects";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";

function Slide({
  project,
  progress,
  range,
}: {
  project: Project;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const scale = useTransform(progress, range, [1.1, 1]);

  return (
    <div className="relative flex h-screen w-screen shrink-0 flex-col justify-center overflow-hidden px-6 md:px-12 lg:px-24">
      <motion.div style={{ scale }} className="absolute inset-0 -z-10">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="100vw"
          className="object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-background/40" />
      </motion.div>

      <div className="mx-auto w-full max-w-[1400px]">
        <div className="flex items-start justify-between gap-6 border-b border-border pb-6">
          <span className="font-mono text-2xl font-black tabular-nums text-foreground md:text-4xl">
            {project.index}
          </span>
          <h3 className="max-w-[45%] text-right text-2xl font-black uppercase leading-[0.95] tracking-tight text-foreground md:text-5xl lg:text-7xl">
            {project.title}
          </h3>
        </div>
        <div className="flex items-center justify-between border-b border-border py-5 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
          <span>{project.category}</span>
          <span className="tabular-nums">{project.year}</span>
        </div>
        <div className="flex items-center justify-between py-5">
          <p className="text-[11px] lowercase tracking-wide text-foreground/80 md:text-sm">
            {project.summary}
          </p>
          <a
            href={`#work`}
            className="group inline-flex items-center gap-1 whitespace-nowrap text-[11px] uppercase tracking-[0.2em] text-foreground/80 transition-colors hover:text-foreground md:text-xs"
          >
            View More
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      <span className="absolute bottom-8 right-6 font-mono text-xs uppercase tracking-[0.2em] text-foreground/40 md:right-12 lg:right-24">
        Page {project.index} / {String(PROJECTS.length).padStart(2, "0")}
      </span>
    </div>
  );
}

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const n = PROJECTS.length;
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(n - 1) * 100}%`]);

  return (
    <section id="work" className="relative">
      <div className="mx-auto max-w-[1600px] px-6 pb-12 pt-24 md:px-12 md:pt-32 lg:px-24 lg:pt-40">
        <SectionLabel>Selected Work</SectionLabel>
        <Reveal>
          <h2 className="mt-4 text-4xl font-black uppercase tracking-tight text-foreground md:text-6xl">
            Five Projects,
            <br />
            One Obsession.
          </h2>
        </Reveal>
      </div>

      {/* Desktop: horizontal scroll-jacked gallery */}
      <div
        ref={ref}
        className="relative hidden lg:block"
        style={{ height: `${n * 100}vh` }}
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            {PROJECTS.map((project, i) => (
              <Slide
                key={project.slug}
                project={project}
                progress={scrollYProgress}
                range={[i / n, (i + 1) / n]}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile / tablet: vertical stack, no scroll-jack */}
      <div className="lg:hidden">
        {PROJECTS.map((project) => (
          <article
            key={project.slug}
            className="relative overflow-hidden border-t border-border px-6 py-16 md:px-12"
          >
            <div className="absolute inset-0 -z-10">
              <Image
                src={project.image}
                alt=""
                fill
                sizes="100vw"
                className="object-cover opacity-20 grayscale"
              />
            </div>
            <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
              <span className="font-mono text-xl font-black tabular-nums">
                {project.index}
              </span>
              <h3 className="max-w-[60%] text-right text-2xl font-black uppercase leading-[0.95] tracking-tight text-foreground md:text-4xl">
                {project.title}
              </h3>
            </div>
            <div className="flex items-center justify-between py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
              <span>{project.category}</span>
              <span className="tabular-nums">{project.year}</span>
            </div>
            <p className="text-[11px] lowercase tracking-wide text-foreground/80">
              {project.summary}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
