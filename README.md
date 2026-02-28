This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## Project structure (shadcn + Tailwind + TypeScript)

- **Components:** `components/ui/` — shadcn-style UI components (Card, Spotlight, SplineScene, etc.). Keeping UI in `components/ui` matches the shadcn convention and keeps primitives in one place.
- **Utilities:** `lib/utils.ts` — `cn()` for merging Tailwind classes (used by all UI components).
- **Styles:** Tailwind v4 with theme in `app/globals.css`; spotlight and loader animations are defined there.

### Spline 3D integration

The homepage uses `SplineSceneBasic` from `components/ui/spline-scene-basic.tsx`, which combines:

- `SplineScene` (`components/ui/splite.tsx`) — lazy-loaded Spline 3D via `@splinetool/react-spline`
- `Spotlight` (aceternity-style) in `components/ui/spotlight.tsx`
- `SpotlightFollow` (mouse-follow) in `components/ui/spotlight-follow.tsx`
- `Card` from `components/ui/card.tsx`

**Dependencies:** `@splinetool/runtime`, `@splinetool/react-spline`, `framer-motion` (for SpotlightFollow).

### Adding your project details

1. **Copy & branding:** Edit `lib/portfolio-data.ts` to set your site name, tagline, profile (bio, experience, highlights), team, and contact email.
2. **Recent projects:** In `lib/portfolio-data.ts`, update the `projects` array. Each project can have:
   - `title`, `description`, `tags` (e.g. `["React", "Azure"]`), `link` (URL), `image` (e.g. Unsplash or your own image URL).
3. **Images:** For external images (e.g. Unsplash), add the hostname to `next.config.ts` under `images.remotePatterns` if needed. `images.unsplash.com` is already allowed.
