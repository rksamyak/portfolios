export interface Tech {
  name: string;
  slug: string;
}

/** slugs resolve against https://cdn.simpleicons.org/{slug} */
export const STACK_ROW_A: Tech[] = [
  { name: "HTML", slug: "html5" },
  { name: "CSS", slug: "css" },
  { name: "JavaScript", slug: "javascript" },
];

export const STACK_ROW_B: Tech[] = [
  { name: "Python", slug: "python" },
  { name: "Supabase", slug: "supabase" },
];
