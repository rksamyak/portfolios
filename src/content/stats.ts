export interface Stat {
  label: string;
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

export const STATS: Stat[] = [
  { label: "GPA", value: 3.8, decimals: 1, suffix: "/4.0" },
  { label: "Projects Shipped", value: 42, suffix: "+" },
  { label: "Years Building", value: 6, suffix: " Years" },
  { label: "Tools & Frameworks", value: 30, suffix: "+" },
];
