import { STATS } from "@/content/stats";
import { Counter } from "@/components/ui/counter";
import { SectionLabel } from "@/components/ui/section-label";
import { cn } from "@/lib/utils";

export function Stats() {
  return (
    <section className="border-y border-border">
      <div className="mx-auto grid max-w-[1700px] grid-cols-2 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={cn(
              "px-6 py-14 md:px-10 md:py-20",
              i % 2 !== 0 && "border-l border-border",
              i >= 2 && "border-t border-border md:border-t-0",
              i % 4 !== 0 && "md:border-l",
            )}
          >
            <SectionLabel>{stat.label}</SectionLabel>
            <p className="mt-4 font-sans text-5xl font-black tracking-tight text-foreground md:text-7xl">
              <Counter
                value={stat.value}
                decimals={stat.decimals}
                suffix={stat.suffix}
              />
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
