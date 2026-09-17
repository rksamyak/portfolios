import { DASHBOARDS } from "@/content/dashboards";
import {
  getGithubStats,
  getKaggleStats,
  getWakatimeStats,
} from "@/lib/stats-data";
import { DashboardSection } from "./dashboard-section";
import { SectionLabel } from "@/components/ui/section-label";

export async function Dashboards() {
  const [github, kaggle, wakatime] = await Promise.all([
    getGithubStats(),
    getKaggleStats(),
    getWakatimeStats(),
  ]);

  const resolved = DASHBOARDS.map((config) => {
    if (config.id === "github-stats") {
      return {
        ...config,
        counters: [
          { label: "Total Contributions", value: github.totalContributions },
          { label: "Followers", value: github.followers },
          { label: "Public Repositories", value: github.repositories },
        ],
      };
    }
    if (config.id === "kaggle-stats") {
      return {
        ...config,
        counters: [
          { label: "Competitions Entered", value: kaggle.competitionsEntered },
          { label: "Medals", value: kaggle.medals },
          { label: "Highest Rank", value: kaggle.highestRank, suffix: "th" },
        ],
      };
    }
    return {
      ...config,
      counters: [
        { label: "Hours, Last 30 Days", value: wakatime.hoursLast30 },
        { label: "Daily Average", value: wakatime.dailyAverageHours, suffix: "h" },
        { label: "Languages Touched", value: wakatime.languages.length },
      ],
    };
  });

  return (
    <div className="border-t border-border pt-16 md:pt-24">
      <div className="mx-auto max-w-[1700px] px-6 md:px-12 lg:px-24">
        <SectionLabel>Live Data</SectionLabel>
      </div>
      {resolved.map((config) => (
        <DashboardSection
          key={config.id}
          config={config}
          weeks={config.id === "github-stats" ? github.weeks : undefined}
          languages={
            config.id === "wakatime-stats" ? wakatime.languages : undefined
          }
        />
      ))}
    </div>
  );
}
