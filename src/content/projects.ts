export interface Project {
  index: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  slug: string;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    index: "01",
    title: "Browser Automation Agent",
    category: "AI & Automation",
    year: "2026",
    summary: "ai-driven browser interaction & testing engine.",
    slug: "browser-automation-agent",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80",
  },
  {
    index: "02",
    title: "Retrieval Knowledge Base",
    category: "Search & RAG",
    year: "2025",
    summary: "citation-grounded answers over a million-document corpus.",
    slug: "retrieval-knowledge-base",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
  },
  {
    index: "03",
    title: "Edge Inference Gateway",
    category: "Infrastructure",
    year: "2025",
    summary: "sub-100ms model routing at the network edge.",
    slug: "edge-inference-gateway",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
  },
  {
    index: "04",
    title: "Design System Kernel",
    category: "Frontend Platform",
    year: "2024",
    summary: "one token pipeline feeding web, ios and figma.",
    slug: "design-system-kernel",
    image:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1600&q=80",
  },
  {
    index: "05",
    title: "Forecasting Playground",
    category: "Machine Learning",
    year: "2024",
    summary: "interactive time-series modelling for non-experts.",
    slug: "forecasting-playground",
    image:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1600&q=80",
  },
];
