import {
  GITHUB_FALLBACK,
  KAGGLE_FALLBACK,
  WAKATIME_FALLBACK,
} from "@/content/dashboards";

export type GithubStats = typeof GITHUB_FALLBACK;
export type KaggleStats = typeof KAGGLE_FALLBACK;
export type WakatimeStats = typeof WAKATIME_FALLBACK;

const GITHUB_USER = process.env.GITHUB_USERNAME ?? "rksamyak";

/**
 * Fetches contribution data from the GitHub GraphQL API.
 * Requires GITHUB_TOKEN in the environment. Falls back to a static
 * snapshot so the section always renders — offline or unauthenticated.
 */
export async function getGithubStats(): Promise<GithubStats> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return GITHUB_FALLBACK;

  const query = `
    query($login: String!) {
      user(login: $login) {
        followers { totalCount }
        repositories(privacy: PUBLIC) { totalCount }
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays { contributionCount }
            }
          }
        }
      }
    }`;

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables: { login: GITHUB_USER } }),
      next: { revalidate: 3600 },
    });
    if (!res.ok) return GITHUB_FALLBACK;

    const json = await res.json();
    const user = json?.data?.user;
    if (!user) return GITHUB_FALLBACK;

    const cal = user.contributionsCollection.contributionCalendar;
    const counts: number[] = cal.weeks.flatMap(
      (w: { contributionDays: { contributionCount: number }[] }) =>
        w.contributionDays.map((d) => d.contributionCount),
    );
    const max = Math.max(1, ...counts);
    const level = (c: number) =>
      c === 0 ? 0 : Math.min(4, Math.ceil((c / max) * 4));

    return {
      totalContributions: cal.totalContributions,
      followers: user.followers.totalCount,
      repositories: user.repositories.totalCount,
      weeks: cal.weeks.map(
        (w: { contributionDays: { contributionCount: number }[] }) =>
          w.contributionDays.map((d) => level(d.contributionCount)),
      ),
    };
  } catch {
    return GITHUB_FALLBACK;
  }
}

export async function getKaggleStats(): Promise<KaggleStats> {
  return KAGGLE_FALLBACK;
}

export async function getWakatimeStats(): Promise<WakatimeStats> {
  const key = process.env.WAKATIME_API_KEY;
  if (!key) return WAKATIME_FALLBACK;
  try {
    const res = await fetch(
      "https://wakatime.com/api/v1/users/current/stats/last_30_days",
      {
        headers: {
          Authorization: `Basic ${Buffer.from(key).toString("base64")}`,
        },
        next: { revalidate: 3600 },
      },
    );
    if (!res.ok) return WAKATIME_FALLBACK;
    const json = await res.json();
    const data = json?.data;
    if (!data) return WAKATIME_FALLBACK;
    return {
      hoursLast30: Math.round(data.total_seconds / 3600),
      dailyAverageHours:
        Math.round((data.daily_average / 3600) * 10) / 10,
      languages: (data.languages ?? [])
        .slice(0, 6)
        .map((l: { name: string; total_seconds: number }) => ({
          name: l.name,
          hours: Math.round(l.total_seconds / 3600),
        })),
    };
  } catch {
    return WAKATIME_FALLBACK;
  }
}
