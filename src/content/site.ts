export const SITE = {
  name: "Ravi Anand",
  firstName: "Ravi",
  role: "AI & Software Engineer",
  disciplineA: "AI Systems",
  location: "Bangalore, IN",
  year: "2026",
  timezone: "Asia/Kolkata",
  thesis: "tools that think alongside people",
  eyebrow:
    "HI, I'M RAVI ANAND. I BUILD TOOLS THAT THINK ALONGSIDE PEOPLE.",
  manifesto:
    "// designing the seam between human intent and machine execution",
  resumeUrl: "/resume.pdf",
  headlineLines: ["SOFT", "WARE", "EN", "GINEER"],
  socials: {
    github: "https://github.com/ravianand",
    linkedin: "https://linkedin.com/in/ravianand",
    email: "mailto:hello@ravianand.dev",
    x: "https://x.com/ravianand",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Journal", href: "#journal" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export const CORE_FOCUS = {
  quote:
    "Software is only interesting where it disappears — where the interface stops being a thing you operate and becomes a thing that operates with you.",
  columns: [
    {
      label: "Scope & Platform",
      body: "End-to-end product engineering across web, edge and inference runtimes. TypeScript and Python as first languages, with a bias toward systems that stay legible under load.",
    },
    {
      label: "Integration",
      body: "LLM orchestration, retrieval pipelines, browser-automation agents and the unglamorous glue — queues, evals, observability — that turns a demo into something people trust in production.",
    },
  ],
  signature: "Ravi Anand",
} as const;
