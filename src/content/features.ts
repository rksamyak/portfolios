export interface Feature {
  index: string;
  title: string;
  body: string;
  chips: string[];
  tags: string[];
}

export const FEATURES: Feature[] = [
  {
    index: "01",
    title: "AI Agents & Automation",
    body: "WhatsApp AI agents, Claude-based agents and n8n automation flows that handle routine communication and follow-ups — already running for Cure Hospital.",
    chips: ["AI Agent Creation", "WhatsApp AI Agents", "Claude Agents", "Claude Artifacts", "n8n Workflows"],
    tags: ["AI", "AGENT", "AUTO"],
  },
  {
    index: "02",
    title: "Backend, Database & APIs",
    body: "Supabase backends with PostgreSQL and Auth, clean data management, and systems connected through REST and web application APIs with proper documentation.",
    chips: ["Supabase", "PostgreSQL", "Supabase Auth", "REST APIs", "API Documentation"],
    tags: ["DATA", "API", "SQL"],
  },
  {
    index: "03",
    title: "Web Development & Deployment",
    body: "Websites and web apps in HTML, CSS, JavaScript and Python — from design to a live deployment on Vercel or Docker, versioned with Git and GitHub.",
    chips: ["HTML", "CSS", "JavaScript", "Python", "Docker", "Vercel", "Git & GitHub"],
    tags: ["WEB", "APP", "OPS"],
  },
];
