export interface Tech {
  name: string;
  slug: string;
}

/** slugs resolve against https://cdn.simpleicons.org/{slug} */
export const STACK_ROW_A: Tech[] = [
  { name: "HTML", slug: "html5" },
  { name: "CSS", slug: "css" },
  { name: "JavaScript", slug: "javascript" },
  { name: "Python", slug: "python" },
  { name: "SQL", slug: "mysql" },
  { name: "Supabase", slug: "supabase" },
  { name: "PostgreSQL", slug: "postgresql" },
];

export const STACK_ROW_B: Tech[] = [
  { name: "Docker", slug: "docker" },
  { name: "Vercel", slug: "vercel" },
  { name: "Git", slug: "git" },
  { name: "GitHub", slug: "github" },
  { name: "n8n", slug: "n8n" },
  { name: "WhatsApp", slug: "whatsapp" },
  { name: "Claude", slug: "claude" },
];
