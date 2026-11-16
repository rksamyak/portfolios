export interface ExperienceEntry {
  range: string;
  role: string;
  org: string;
  body: string;
  href?: string;
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    range: "MAY 2026 — PRESENT",
    role: "Client Onboarding – Operations & Presales",
    org: "Info Edge (India) Ltd. – JobHai",
    body: "Onboard recruiters and hiring partners from first call to first job posting. Keep recruiter records and onboarding status updated, follow up and escalate issues to closure. Identified onboarding drop-off points and wrote a problem statement for leadership proposing direct recruiter links and stage-based WhatsApp message templates.",
  },
  {
    range: "2025 — PRESENT",
    role: "Founder",
    org: "Mytechz.com",
    body: "AI automation for hospitals and a job platform for Indian freshers. Delivered three AI automation projects for Cure Hospital, built WhatsApp AI agents for routine hospital communication and follow-ups, and meet hospital owners and management to understand their problems.",
    href: "https://mytechz.com",
  },
  {
    range: "2025 — PRESENT",
    role: "Job Platform Builder",
    org: "Mytechz.com",
    body: "Built the job platform with JavaScript, Supabase (PostgreSQL, Auth with Google OAuth and Magic Link), n8n and Vercel. Verified and loaded 120+ real job listings across government, private and internship categories, merged duplicate company records, built company directory pages and redesigned the UI.",
    href: "https://mytechz.com",
  },
  {
    range: "2022 — 2026",
    role: "B.E. Computer Science and Engineering",
    org: "MS Engineering College, Bengaluru",
    body: "Built a Car Rental Management System (3rd year) and a Quantum-Resistant Cybersecurity Apparatus using post-quantum cryptography (final year).",
  },
  {
    range: "2020 — 2022",
    role: "PUC (PCMC)",
    org: "MDRPU College, Teguru, Chikmagalur",
    body: "Pre-university course in Physics, Chemistry, Mathematics and Computer Science.",
  },
];
