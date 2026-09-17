import { Marquee } from "@/components/ui/marquee";

const TECH = [
  "TypeScript",
  "Python",
  "Next.js",
  "PyTorch",
  "PostgreSQL",
  "Redis",
  "Docker",
  "LangChain",
];

const TITLES = [
  "Software Engineer",
  "AI Engineer",
  "Systems Thinker",
  "Product Builder",
  "Open Source Maintainer",
];

export function MarqueeBands() {
  return (
    <div className="border-y border-border">
      <div className="border-b border-border py-6">
        <Marquee
          items={TECH}
          direction="left"
          speed={30}
          itemClassName="text-4xl font-black uppercase tracking-tight text-foreground md:text-6xl"
        />
      </div>
      <div className="py-6">
        <Marquee
          items={TITLES}
          direction="right"
          speed={40}
          itemClassName="text-4xl font-black uppercase tracking-tight text-foreground/30 md:text-6xl"
        />
      </div>
    </div>
  );
}
