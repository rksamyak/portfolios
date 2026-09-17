import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
  as: Tag = "p",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "h2" | "h3" | "h4" | "div";
}) {
  return (
    <Tag
      className={cn(
        "font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/40 md:text-xs",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
