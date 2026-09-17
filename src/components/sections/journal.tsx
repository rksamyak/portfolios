import { ArrowRight, ArrowUpRight } from "lucide-react";
import { POSTS } from "@/content/posts";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";

export function Journal() {
  return (
    <section
      id="journal"
      className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-32 lg:px-24 lg:py-40"
    >
      <div className="flex items-end justify-between">
        <div>
          <SectionLabel>Journal</SectionLabel>
          <Reveal>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-tight text-foreground md:text-6xl">
              Notes From
              <br />
              The Work.
            </h2>
          </Reveal>
        </div>
        <a
          href="#journal"
          className="hidden items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground/70 transition-colors hover:text-foreground sm:inline-flex"
        >
          View Gallery
          <ArrowUpRight className="size-3.5" />
        </a>
      </div>

      <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-3">
        {POSTS.map((post, i) => (
          <Reveal
            key={post.title}
            delay={i * 0.08}
            className="group bg-background p-8 md:p-10"
          >
            <a href={post.href} className="flex h-full flex-col">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40">
                {post.category} — {post.year}
              </p>
              <h3 className="mt-6 text-2xl font-bold leading-snug text-foreground">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/60">
                {post.excerpt}
              </p>
              <span className="mt-8 block h-px w-full origin-left scale-x-0 bg-foreground transition-transform duration-500 group-hover:scale-x-100" />
            </a>
          </Reveal>
        ))}
      </div>

      <a
        href="#journal"
        className="group mt-12 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground/70 transition-colors hover:text-foreground"
      >
        Browse Full Archive
        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
      </a>
    </section>
  );
}
