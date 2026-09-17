"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

export function Counter({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
  duration = 2,
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const reduce = useReducedMotion();
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState(() =>
    reduce ? value.toFixed(decimals) : (0).toFixed(decimals),
  );

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(mv, value, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(latest.toFixed(decimals)),
    });
    return controls.stop;
  }, [inView, reduce, value, decimals, duration, mv]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
