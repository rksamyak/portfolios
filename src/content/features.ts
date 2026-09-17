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
    title: "Agentic Automation",
    body: "I design browser and tool-using agents that hold a goal across dozens of steps without losing the plot. The hard part is never the model call — it's recovery, memory and knowing when to stop.",
    chips: ["Planning loops", "Tool schemas", "Playwright", "State machines", "Self-repair"],
    tags: ["AI", "NN", "LLM"],
  },
  {
    index: "02",
    title: "Retrieval & Knowledge",
    body: "Retrieval systems that stay accurate as the corpus grows: hybrid search, reranking, citation-grounded generation, and evals that actually predict production quality.",
    chips: ["Hybrid search", "Reranking", "Embeddings", "Chunking", "RAG evals"],
    tags: ["DATA", "VISION", "ML"],
  },
  {
    index: "03",
    title: "Product Engineering",
    body: "The full path from Figma to a deployed, observable service. Typed end to end, fast on a mid-range phone, and boring to operate — which is the highest compliment infrastructure can earn.",
    chips: ["Next.js", "Edge runtime", "Design systems", "Observability", "CI/CD"],
    tags: ["WEB", "APP", "SYS"],
  },
];
