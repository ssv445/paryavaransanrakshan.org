# paryavaransanrakshan.org

The official website for **Paryavaran Sanrakshan Gatividhi** (पर्यावरण संरक्षण गतिविधि) — an all-India environmental movement focused on plantation, water conservation, polythene-free drives, and green homes. Migrated from a legacy WordPress site.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + [React 19](https://react.dev)
- TypeScript · [Tailwind CSS 4](https://tailwindcss.com) · [Framer Motion](https://www.framer.com/motion/)
- Content: Markdown files in `/content/**` parsed with `gray-matter`
- Contact form: [Resend](https://resend.com) (`src/app/api/contact/route.ts`)
- Translation: Google's native Translate widget (client-side, 12 Indian languages)
- Sitemap/robots: `next-sitemap` + `src/app/sitemap.ts` + `src/app/robots.ts`
- Hosted on [Vercel](https://vercel.com)

## Quick start

```bash
npm install
npm run dev            # http://localhost:3000
```

Other scripts:

```bash
npm run build          # production build
npm start              # serve the production build locally
npm run lint           # ESLint (flat config)
```

## Environment variables

Only the contact form needs env vars. Create `.env.local`:

| Variable | Required | Default | Purpose |
|---|---|---|---|
| `RESEND_API_KEY` | Production | — | Send contact form emails via Resend |
| `CONTACT_TO_EMAIL` | No | `[email protected]` | Recipient |
| `CONTACT_FROM_EMAIL` | No | `Paryavaran Sanrakshan <noreply@…>` | Sender (must be a verified Resend domain) |

Without `RESEND_API_KEY`, the contact endpoint logs submissions to the console instead of sending — safe for dev/preview.

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
next.config.ts        Legacy WordPress → new IA 301 redirects
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

All legacy WordPress URLs (date-slug permalinks, old section paths, `/feeds`, `/gallery`, `/success-stories`, `/latest-news`, `/join`, etc.) are 301-redirected in `next.config.ts`. When renaming routes, add a redirect there.

## Design system

Indian folk-art visual language — see `/about/design` (the colophon page) for the live reference.

- **Warli** — SVG icons for Programs and Karyavibhag tiles
- **Madhubani** — "Tree of Life" hero panel with scroll-triggered stroke animation
- **Kolam** — footer divider and card corner ornament
- Palette: `cream` `ink` `vana` `indigo` `haldi` `terracotta` `muted` (natural-dye inspired)
- Fonts (via `next/font/google`): IBM Plex Sans (body), Yatra One (display, latin+devanagari), Tiro Devanagari Hindi (mantra/Hindi labels)
- Dark mode ("evening lamp") via `.dark` class on `<html>`, persisted in localStorage, FOUC-free

## Deployment

Push to the main branch; Vercel builds automatically. No `output: 'export'` — we want `next/image` optimization and the `/api/contact` route handler. Set the env vars above in the Vercel dashboard.

## Links

- EcoMitram (volunteer portal, "Join" CTA): https://ecomitram.app/
- Contact: [email protected] · +91 8369-837-609
