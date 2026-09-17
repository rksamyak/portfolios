"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn, EASE_OUT_EXPO } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay }}
    >
      {children}
    </motion.div>
  );
}

export function LineReveal({
  lines,
  className,
  lineClassName,
  stagger = 0.08,
}: {
  lines: readonly string[];
  className?: string;
  lineClassName?: string;
  stagger?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <span className={cn("block", className)}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className={cn("block", lineClassName)}
            initial={reduce ? undefined : { y: "110%" }}
            whileInView={reduce ? undefined : { y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: 0.9,
              ease: EASE_OUT_EXPO,
              delay: i * stagger,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
