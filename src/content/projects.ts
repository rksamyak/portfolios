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
    title: "Hospital AI Automation",
    category: "AI Agents · Cure Hospital",
    year: "2025",
    summary: "three ai automation projects and whatsapp agents for cure hospital.",
    slug: "hospital-ai-automation",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    index: "02",
    title: "Mytechz Job Platform",
    category: "Supabase · n8n · Vercel",
    year: "2025",
    summary: "job platform for indian freshers with 120+ verified listings.",
    slug: "mytechz-job-platform",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1600&q=80",
  },
  {
    index: "03",
    title: "Leo Digital Website Rebuild",
    category: "HTML · CSS · JS · Supabase",
    year: "2025",
    summary: "five-page agency website rebuilt with a supabase backend.",
    slug: "leo-digital-website",
    image:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1600&q=80",
  },
  {
    index: "04",
    title: "Quantum-Resistant Cybersecurity",
    category: "Final Year Project",
    year: "2026",
    summary: "post-quantum cryptography to protect digital communication.",
    slug: "quantum-resistant-cybersecurity",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80",
  },
  {
    index: "05",
    title: "Car Rental Management System",
    category: "3rd Year Project · SQL",
    year: "2025",
    summary: "bookings, fleet, customer records, availability and billing.",
    slug: "car-rental-management",
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1600&q=80",
  },
];
