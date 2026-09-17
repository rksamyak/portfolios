export interface Post {
  category: string;
  year: string;
  title: string;
  excerpt: string;
  href: string;
}

export const POSTS: Post[] = [
  {
    category: "Agents",
    year: "2026",
    title: "The recovery loop is the product",
    excerpt:
      "Why most agent demos fall apart in week two, and the small set of patterns that keep them upright.",
    href: "#",
  },
  {
    category: "Retrieval",
    year: "2025",
    title: "Evals that predict production",
    excerpt:
      "Offline retrieval metrics lie constantly. Here is the harness I use instead.",
    href: "#",
  },
  {
    category: "Craft",
    year: "2025",
    title: "Type systems as documentation",
    excerpt:
      "A defense of spending an afternoon on a generic signature nobody asked for.",
    href: "#",
  },
];
