# Paryavaran Sanrakshan Gatividhi — Project Guide

## What is this?

A Next.js static website for **Paryavaran Sanrakshan Gatividhi** (पर्यावरण संरक्षण गतिविधि), an all-India environmental movement. Migrated from a legacy WordPress site at paryavaransanrakshan.org.

## Architecture Decisions

### Stack
- **Next.js 16** (App Router) + **React 19** + **TypeScript** + **Tailwind CSS 4** + **Framer Motion**
- Static export (`output: 'export'`) served by Cloudflare Workers Static Assets, see `docs/hosting.md`. No server, no API routes, no image optimization.
- Contact page: a `mailto:` button (`src/components/ContactMailto.tsx`), no form backend
- Sitemap: `next-sitemap` + `src/app/sitemap.ts` + `src/app/robots.ts`

### No multi-language i18n
We do NOT implement Next.js i18n routing. Instead, **Google's native Translate widget** (`translate.google.com/translate_a/element.js`) handles translation client-side. It runs with `multilanguagePage: true` so Hindi-native sections (marked `lang="hi"`) translate correctly even when the visitor picks English. Loaded in `src/components/GTranslate.tsx` via `next/script`. All route slugs are English.

### No Join form — redirect to EcoMitram
The "Join" CTA throughout the site is an **external link** to `https://ecomitram.org/` (`JOIN_URL` in `src/lib/nav.ts`). There is no `/join` route — it redirects (308) to EcoMitram in `public/_redirects`. The only form on the site is `/contact`.

### Content model — Markdown files with frontmatter
Content lives as `.md` files in `/content/<kind>/` (kinds: `events`, `karyavibhag`, `programs`, `stories`). `src/lib/content.ts` reads them at build time with `gray-matter` — frontmatter carries structured fields (title, date, type, etc.); body becomes the `intro` prose. To add content: drop a new `.md` file in the right folder. Typed as `Entry`, `EventEntry`, `StoryEntry`.

### Stories = unified content hub
News, Gallery, Feeds, and Success Stories from the old WP site are **merged into a single `/stories` section**. Each story has a `type` field: `impact`, `dispatch`, or `photo-essay`. The old `/feeds`, `/gallery`, `/success-stories`, `/latest-news` URLs all 308-redirect to `/stories`.

## Design System

### Visual identity: Indian folk art
- **Warli** — 8 SVG icons for Programs and Karyavibhag tiles (monochrome line art)
- **Madhubani** — "Tree of Life" hero panel with stroke-draw animation on scroll
- **Kolam** — divider pattern (footer) and corner ornament (cards)
- All illustrations are in-repo SVGs in `src/components/illustrations/`

### Color palette (natural dyes / handloom inspired)
```
cream     #FAF3E3   (page background)
ink       #1A1A1A   (text, warli strokes)
vana      #3E6B4A   (forest green — primary brand)
indigo    #2E4057   (deep blue accent)
haldi     #E8B923   (turmeric CTA yellow)
terracotta #B8442F  (hover, highlights)
muted     #8C7B63   (secondary text)
```

### Dark mode ("evening lamp")
Toggled via `ThemeToggle` component (moon/sun icon in header). Uses `.dark` class on `<html>`. Persists to localStorage, respects `prefers-color-scheme`. FOUC prevented by inline `<script>` in `<head>`.

### Typography
- **IBM Plex Sans** — body text (latin)
- **Yatra One** — display / headings (latin + devanagari)
- **Tiro Devanagari Hindi** — Sanskrit mantra and Hindi labels
- All loaded via `next/font/google` with `display: 'swap'`

## Information Architecture

```
/                          Home
├─ /about/                 About (hub)
│   ├─ /about/mission
│   ├─ /about/story
│   ├─ /about/logo
│   ├─ /about/presence
│   ├─ /about/panch-parivartan
│   └─ /about/design         (colophon — design system, typography, palette)
├─ /programs/              Programs (hub + [slug] route reading content/programs/*.md)
│   ├─ /programs/plantation
│   ├─ /programs/polythene-free
│   ├─ /programs/save-water
│   └─ /programs/harit-ghar
├─ /karyavibhag/           Karyavibhag (hub + [slug] route reading content/karyavibhag/*.md)
│   ├─ /karyavibhag/religious-institutes
│   ├─ /karyavibhag/nari-shakti
│   ├─ /karyavibhag/samajik-sansthan       (was "ngo-coordination" — renamed)
│   ├─ /karyavibhag/educational-institutes
│   ├─ /karyavibhag/jan-sampark
│   ├─ /karyavibhag/jan-samwad
│   └─ /karyavibhag/yuvashakti
├─ /events/                Events (index + [slug])
├─ /stories/               Stories (unified: impact/dispatch/photo-essay)
├─ /resources/             Resources (external links hub)
└─ /contact/               Contact (form + info)
```

**Dynamic routes**: `programs/[slug]`, `karyavibhag/[slug]`, `events/[slug]`, `stories/[slug]` — all source from `/content/<kind>/<slug>.md`. The hub pages (`programs/page.tsx`, etc.) list entries.

### Primary navigation
```
[Logo + mantra]  About  Programs  Karyavibhag  Events  Stories  Contact  [GTranslate]  [Theme]  [ Join → ecomitram.org ]
```

## URL Redirects (SEO preservation)

All legacy WordPress URLs are 308-redirected in `public/_redirects`:
- `/about-us` → `/about`
- `/mission`, `/our-story`, `/our-logo`, `/our-presence` → `/about/*`
- WP date-slug URLs (`/2024/02/28/plantation/`) → `/programs/*` or `/karyavibhag/*`
- Event root-slug URLs (`/eco-bricks/`, `/jal-samwad/`) → `/events/*`
- `/feeds`, `/gallery`, `/success-stories`, `/latest-news` → `/stories`
- `/join` → `https://ecomitram.org/` (external)

## Environment Variables

None. The site is a static export with no server code.

## Key Commands

```bash
npm run dev        # Start dev server → http://psg.localhost:1355  (via portless)
npm run build      # Production build (static pages + route handlers)
npm run lint       # ESLint (flat config, eslint-config-next)
npm start          # Serve production build locally (port 3000)
```

### Dev server uses portless — always

`npm run dev` is wired to [`portless`](https://www.npmjs.com/package/portless): `portless psg next dev`. Portless assigns a random free port to Next.js and routes `http://psg.localhost:1355` to it via a reverse-proxy daemon. Benefits: no `EADDRINUSE`, stable URL across restarts, no collision with other local projects.

**Prereq**: `npm i -g portless` (one-time, globally). Proxy auto-starts on first `npm run dev`.

**Preview URL for everything**: `http://psg.localhost:1355` — use this (not `localhost:3000`) when testing, screenshotting, sharing with teammates, or configuring OAuth/CORS.

**Bypass**: `PORTLESS=0 npm run dev` runs plain `next dev` on `:3000` if you ever need to.

## External Services & Links

| Service | URL | Purpose |
|---|---|---|
| EcoMitram App | https://ecomitram.org/ | Join/volunteer portal (primary CTA) |

Retired 2026-04 (no longer maintained, do not re-add): paryavaranperspective.com (E-Magazine), paryavaranbharat.org (Media Center), sankalp.paryavaransanrakshan.org (Sankalp Portal). See comment in `src/lib/nav.ts`.

## Contact & Socials (source of truth: `src/lib/nav.ts` → `orgContact`)
- Phone: +91 8369-837-609
- Email: [email protected]
- WhatsApp: wa.me link via `orgContact.whatsapp`
- Facebook: https://www.facebook.com/psg.paryavaran.sanrakshan/
- Twitter/X: https://x.com/psgbharat
- Instagram: https://www.instagram.com/ecomitram
- YouTube: https://www.youtube.com/@paryavaransanrakshan6731
