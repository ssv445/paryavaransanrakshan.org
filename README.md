# paryavaransanrakshan.org

The official website for **Paryavaran Sanrakshan Gatividhi** (पर्यावरण संरक्षण गतिविधि) — an all-India environmental movement focused on plantation, water conservation, polythene-free drives, and green homes. Migrated from a legacy WordPress site.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + [React 19](https://react.dev)
- TypeScript · [Tailwind CSS 4](https://tailwindcss.com) · [Framer Motion](https://www.framer.com/motion/)
- Content: Markdown files in `/content/**` parsed with `gray-matter`
- Contact form: [Resend](https://resend.com) (`src/app/api/contact/route.ts`)
- Translation: Google's native Translate widget (client-side, 12 Indian languages)
- Sitemap/robots: `next-sitemap` + `src/app/sitemap.ts` + `src/app/robots.ts`
- Static export on Cloudflare Workers Static Assets (see `docs/hosting.md`)

## Quick start

```bash
npm i -g portless      # one-time global install (used by the dev script)
npm install
npm run dev            # http://psg.localhost:1355
```

The `dev` script is `portless psg next dev`. Portless assigns a random free port to Next.js and routes `http://psg.localhost:1355` to it — no port collisions, stable URL across restarts. To bypass, run `PORTLESS=0 npm run dev` (plain `next dev` on `:3000`).

Other scripts:

```bash
npm run build          # production build
npm start              # serve the production build locally on :3000
npm run lint           # ESLint (flat config)
```

## Environment variables

None. The site is a static export; the contact page links to `mailto:`.

## Project layout

```
content/              Markdown content (events, karyavibhag, programs, stories)
public/               Static assets (brand/, images/)
src/
  app/                Next.js App Router routes + api/
  components/         React components (Header, Footer, illustrations, motion)
  lib/
    content.ts        Reads /content/** at build time via gray-matter
    nav.ts            Primary nav, Join URL, org contact/socials
public/_redirects     Legacy WordPress → new IA redirects (308)
```

### Adding content

Drop a new `.md` file into the matching folder; the route picks it up on next build.

```
content/programs/<slug>.md
content/karyavibhag/<slug>.md
content/events/<slug>.md
content/stories/<slug>.md
```

Frontmatter fields are typed in `src/lib/content.ts` (`Entry`, `EventEntry`, `StoryEntry`). The Markdown body becomes the `intro` prose.

### URL redirects

All legacy WordPress URLs (date-slug permalinks, old section paths, `/feeds`, `/gallery`, `/success-stories`, `/latest-news`, `/join`, etc.) are 308-redirected in `public/_redirects`. When renaming routes, add a redirect there.

## Design system

Indian folk-art visual language — see `/about/design` (the colophon page) for the live reference.

- **Warli** — SVG icons for Programs and Karyavibhag tiles
- **Madhubani** — "Tree of Life" hero panel with scroll-triggered stroke animation
- **Kolam** — footer divider and card corner ornament
- Palette: `cream` `ink` `vana` `indigo` `haldi` `terracotta` `muted` (natural-dye inspired)
- Fonts (via `next/font/google`): IBM Plex Sans (body), Yatra One (display, latin+devanagari), Tiro Devanagari Hindi (mantra/Hindi labels)
- Dark mode ("evening lamp") via `.dark` class on `<html>`, persisted in localStorage, FOUC-free

## Deployment

Push to main; GitHub Actions builds the static export and runs `wrangler deploy` (see `docs/hosting.md`).

## Links

- EcoMitram (volunteer portal, "Join" CTA): https://ecomitram.org/
- Contact: [email protected] · +91 8369-837-609
