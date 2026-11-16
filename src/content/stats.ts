export interface Stat {
  label: string;
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

export const STATS: Stat[] = [
  { label: "Hospital AI Projects Delivered", value: 3 },
  { label: "Real Job Listings Loaded", value: 120, suffix: "+" },
  { label: "Projects Built", value: 5, suffix: "+" },
  { label: "Certifications & Workshops", value: 3 },
];
