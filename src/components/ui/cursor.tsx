"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export function Cursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const dot = { ...target };
    const ring = { ...target };
    let hovering = false;
    let visible = false;

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      visible = true;
      const el = e.target as HTMLElement | null;
      hovering = !!el?.closest(
        'a, button, [data-cursor="hover"], input, textarea, select',
      );
    };
    const onLeave = () => {
      visible = false;
    };
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    let raf = 0;
    const render = () => {
      dot.x += (target.x - dot.x) * 0.35;
      dot.y += (target.y - dot.y) * 0.35;
      ring.x += (target.x - ring.x) * 0.15;
      ring.y += (target.y - ring.y) * 0.15;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      if (visible) {
        ctx.globalCompositeOperation = "difference";

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, hovering ? 2 : 3, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(ring.x, ring.y, hovering ? 28 : 16, 0, Math.PI * 2);
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.globalCompositeOperation = "source-over";
      }

      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [reduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999] hidden md:block"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}
