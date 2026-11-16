export interface Post {
  category: string;
  year: string;
  title: string;
  excerpt: string;
  href: string;
  /** optional preview image of the certificate */
  image?: string;
}

/** Rendered in the "Certifications" section. */
export const POSTS: Post[] = [
  {
    category: "Datathon",
    year: "2025",
    title: "IBM Z Datathon 2025",
    excerpt:
      "Certificate of Participation for successfully submitting a project in the IBM Z Datathon 2025, a global datathon hosted by Shooting Stars Foundation and powered by IBM.",
    href: "/certificates/ibm-z-datathon-2025.pdf",
    image: "/certificates/ibm-z-datathon-2025.jpg",
  },
  {
    category: "Workshop",
    year: "Sep 2025",
    title: "Power BI Workshop",
    excerpt:
      "Certificate of Completion from OfficeMaster (28 Sep 2025) — building AI-powered interactive dashboards in Power BI.",
    href: "/certificates/power-bi-workshop.pdf",
    image: "/certificates/power-bi-workshop.jpg",
  },
  {
    category: "Workshop",
    year: "Amazon",
    title: "Distributed SQL Databases",
    excerpt: "Workshop on distributed SQL databases by Amazon.",
    href: "#journal",
  },
];
