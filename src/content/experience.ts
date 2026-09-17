export interface ExperienceEntry {
  range: string;
  role: string;
  org: string;
  body: string;
  href?: string;
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    range: "2024 — PRESENT",
    role: "Founding Engineer",
    org: "Larkspur AI",
    body: "Built the agent runtime and eval platform from an empty repo to a system running thousands of automated workflows a day. Owned inference cost, latency and the on-call rotation.",
    href: "#",
  },
  {
    range: "2022 — 2024",
    role: "Senior Software Engineer",
    org: "Meridian Labs",
    body: "Led the retrieval team. Shipped hybrid search and citation-grounded generation that cut hallucinated answers by roughly 70% on our internal benchmark.",
    href: "#",
  },
  {
    range: "2020 — 2022",
    role: "Software Engineer",
    org: "Northwind Systems",
    body: "Full-stack product work on a data platform — Next.js front end, Python services, a lot of PostgreSQL. Introduced the design system that's still in use.",
  },
  {
    range: "2019 — 2020",
    role: "ML Engineer, Contract",
    org: "Independent",
    body: "Forecasting and anomaly-detection models for logistics and retail clients. Learned that the model is 10% of the work and the data pipeline is the other 90%.",
  },
  {
    range: "2018 — 2019",
    role: "Engineering Intern",
    org: "Cobalt Interactive",
    body: "First real codebase. Wrote internal tooling, broke production once, wrote the runbook that stopped it happening again.",
  },
  {
    range: "2016 — 2018",
    role: "Freelance Web Developer",
    org: "Self-employed",
    body: "Marketing sites and small web apps for local businesses while studying. Where the obsession with typography and whitespace started.",
  },
];
