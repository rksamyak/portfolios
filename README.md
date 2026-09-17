# Editorial Dark Engineer — Portfolio

Single-page, scroll-driven personal portfolio. Swiss/editorial print aesthetic
rendered in a dark terminal: huge black uppercase Inter, near-monochrome palette,
generous negative space, everything animates on scroll.

## Stack

- **Next.js 15** (App Router) + **TypeScript** (strict)
- **Tailwind CSS v4** — HSL design tokens, `class` dark strategy, dark by default
- **framer-motion** — line reveals, fade-ups, counters, scroll-linked transforms
- **lenis** — RAF smooth scroll (disabled under `prefers-reduced-motion`)
- **next-themes**, **lucide-react**
- Tech logos via `cdn.simpleicons.org`, fonts via `next/font/google`
  (Inter, JetBrains Mono, Playfair Display, Alex Brush)

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (passes clean)
```

## Content

All copy lives in `src/content/*.ts` as typed constants — no hardcoded strings
in JSX. Edit those files to make the site yours:

| File | What |
|---|---|
| `site.ts` | name, role, location, socials, nav, hero headline, core-focus |
| `about.ts` | bio paragraphs, portrait |
| `stats.ts` | the four hero counters |
| `features.ts` | the three feature blocks |
| `projects.ts` | the five gallery projects |
| `experience.ts` | timeline entries |
| `posts.ts` | journal cards |
| `dashboards.ts` | live-data section config + **offline fallback data** |

Replace `public/resume.pdf` with your résumé and the Unsplash placeholder image
URLs in `about.ts` / `projects.ts` with your own assets.

## Live data (optional)

The GitHub / Kaggle / WakaTime dashboards fetch **server-side** with
`revalidate: 3600` and fall back to the static snapshot in
`content/dashboards.ts` when unauthenticated or offline. To go live, copy
`.env.example` to `.env.local` and fill in:

- `GITHUB_TOKEN` (PAT, `read:user` scope) + `GITHUB_USERNAME`
- `WAKATIME_API_KEY`

Kaggle has no public stats API — edit `KAGGLE_FALLBACK` by hand.

## Accessibility / performance

- All motion gated on `useReducedMotion()` — page is fully readable static
- No scroll-jacking below `lg` (projects gallery degrades to a vertical stack)
- Live clock and all `Date` usage hydration-safe (empty on server, filled in effect)
- Skip-to-content link, semantic landmarks, `focus-visible` rings, `aria-hidden`
  paused-on-hover marquees
- Every image has `fill` + an aspect-ratio box → CLS ≈ 0
