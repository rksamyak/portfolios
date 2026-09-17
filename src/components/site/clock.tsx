"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/content/site";

export function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: SITE.timezone,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <a
      href="#home"
      className="group inline-flex items-center font-mono text-xl font-black tracking-widest transition-all duration-300 hover:tracking-[0.2em] md:text-2xl"
      aria-label="Back to top, local time"
    >
      <span className="bg-gradient-to-r from-foreground to-foreground/40 bg-clip-text text-transparent">
        {time || "  :  :  "}
      </span>
    </a>
  );
}
