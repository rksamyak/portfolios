export interface DashCounter {
  label: string;
  value: number;
  suffix?: string;
}

export interface DashboardConfig {
  id: string;
  label: string;
  headline: string;
  caption: string;
  counters: DashCounter[];
  accent: "green" | "orange" | "mono";
  visual: "heatmap" | "bars" | "none";
}

export const GITHUB_FALLBACK = {
  totalContributions: 3184,
  followers: 412,
  repositories: 58,
  // 53 weeks x 7 days of contribution levels 0..4, deterministic pseudo-random
  weeks: Array.from({ length: 53 }, (_, w) =>
    Array.from({ length: 7 }, (_, d) => {
      const n = (w * 7 + d) * 2654435761;
      const x = (n ^ (n >>> 15)) >>> 0;
      const r = x % 100;
      if (r < 45) return 0;
      if (r < 70) return 1;
      if (r < 86) return 2;
      if (r < 96) return 3;
      return 4;
    }),
  ),
};

export const KAGGLE_FALLBACK = {
  competitionsEntered: 19,
  medals: 7,
  highestRank: 214,
};

export const WAKATIME_FALLBACK = {
  hoursLast30: 187,
  dailyAverageHours: 6.2,
  languages: [
    { name: "TypeScript", hours: 71 },
    { name: "Python", hours: 52 },
    { name: "Rust", hours: 18 },
    { name: "SQL", hours: 14 },
    { name: "Markdown", hours: 9 },
    { name: "Shell", hours: 6 },
  ],
};

export const DASHBOARDS: DashboardConfig[] = [
  {
    id: "github-stats",
    label: "GitHub Ecosystem",
    headline: "Creative Engineering, now Open Source.",
    caption:
      "Contribution data pulled live from the GitHub GraphQL API and cached hourly. Falls back to a recent snapshot when the API is unreachable.",
    counters: [
      { label: "Total Contributions", value: GITHUB_FALLBACK.totalContributions },
      { label: "Followers", value: GITHUB_FALLBACK.followers },
      { label: "Public Repositories", value: GITHUB_FALLBACK.repositories },
    ],
    accent: "green",
    visual: "heatmap",
  },
  {
    id: "kaggle-stats",
    label: "Kaggle Competitions",
    headline: "Stubborn problems, measured against the field.",
    caption:
      "Competition history across tabular, NLP and time-series tracks. I enter when a problem looks hard enough to teach me something.",
    counters: [
      { label: "Competitions Entered", value: KAGGLE_FALLBACK.competitionsEntered },
      { label: "Medals", value: KAGGLE_FALLBACK.medals },
      { label: "Highest Rank", value: KAGGLE_FALLBACK.highestRank, suffix: "th" },
    ],
    accent: "orange",
    visual: "none",
  },
  {
    id: "wakatime-stats",
    label: "WakaTime Activity",
    headline: "Where the hours actually go.",
    caption:
      "Editor-tracked coding time over the last 30 days, by language. Automatically recorded, never rounded up.",
    counters: [
      { label: "Hours, Last 30 Days", value: WAKATIME_FALLBACK.hoursLast30 },
      { label: "Daily Average", value: WAKATIME_FALLBACK.dailyAverageHours, suffix: "h" },
      { label: "Languages Touched", value: WAKATIME_FALLBACK.languages.length },
    ],
    accent: "mono",
    visual: "bars",
  },
];
