"use client";

import { cn } from "@/lib/utils";

export function Marquee({
  items,
  direction = "left",
  speed = 30,
  className,
  itemClassName,
  separator = "•",
  renderItem,
}: {
  items: React.ReactNode[];
  direction?: "left" | "right";
  speed?: number;
  className?: string;
  itemClassName?: string;
  separator?: React.ReactNode;
  renderItem?: (item: React.ReactNode, key: number) => React.ReactNode;
}) {
  const track = (offset: number) => (
    <div
      className={cn(
        "flex shrink-0 items-center",
        direction === "left" ? "animate-marquee-left" : "animate-marquee-right",
      )}
      style={{ animationDuration: `${speed}s` }}
      aria-hidden={offset > 0 ? true : undefined}
    >
      {items.map((item, i) => (
        <span
          key={`${offset}-${i}`}
          className={cn("flex shrink-0 items-center", itemClassName)}
        >
          {renderItem ? renderItem(item, i) : item}
          {separator ? (
            <span className="mx-6 select-none opacity-30 md:mx-10">
              {separator}
            </span>
          ) : null}
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={cn(
        "group flex w-full overflow-hidden [--gap:0px] hover:[&_*]:[animation-play-state:paused]",
        className,
      )}
      aria-hidden
    >
      {track(0)}
      {track(1)}
    </div>
  );
}
