import Image from "next/image";
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
          <SectionLabel>Certifications</SectionLabel>
          <Reveal>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-tight text-foreground md:text-6xl">
              Certifications
              <br />
              &amp; Workshops.
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-3">
        {POSTS.map((post, i) => (
          <Reveal
            key={post.title}
            delay={i * 0.08}
            className="group bg-background p-8 md:p-10"
          >
            <a
              href={post.href}
              {...(post.href.endsWith(".pdf")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="flex h-full flex-col"
            >
              {post.image && (
                <div className="relative mb-8 aspect-[1.414/1] w-full overflow-hidden border border-border bg-white">
                  <Image
                    src={post.image}
                    alt={`${post.title} certificate`}
                    fill
                    sizes="(max-width: 640px) 90vw, 30vw"
                    className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              )}
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40">
                {post.category} — {post.year}
              </p>
              <h3 className="mt-6 text-2xl font-bold leading-snug text-foreground">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/60">
                {post.excerpt}
              </p>
              {post.href.endsWith(".pdf") && (
                <span className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/70 group-hover:text-foreground">
                  View Certificate ↗
                </span>
              )}
              <span className="mt-8 block h-px w-full origin-left scale-x-0 bg-foreground transition-transform duration-500 group-hover:scale-x-100" />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
