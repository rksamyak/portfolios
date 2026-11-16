import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/sections/hero";
import { CoreFocus } from "@/components/sections/core-focus";
import { Stats } from "@/components/sections/stats";
import { About } from "@/components/sections/about";
import { Features } from "@/components/sections/features";
import { Projects } from "@/components/sections/projects";
import { Timeline } from "@/components/sections/timeline";
import { Journal } from "@/components/sections/journal";
import { MarqueeBands } from "@/components/sections/marquee-bands";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <CoreFocus />
        <Stats />
        <About />
        <Features />
        <Projects />
        <Timeline />
        <Journal />
        <MarqueeBands />
        <CTA />
      </main>
    </>
  );
}
