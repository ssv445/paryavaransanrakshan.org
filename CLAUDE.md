@AGENTS.md

# Paryavaran Sanrakshan Gatividhi — Project Guide

## What is this?

A Next.js static website for **Paryavaran Sanrakshan Gatividhi** (पर्यावरण संरक्षण गतिविधि), an all-India environmental movement. Migrated from a legacy WordPress site at paryavaransanrakshan.org.

## Architecture Decisions

### Stack
- **Next.js 16** (App Router, Turbopack) + **TypeScript** + **Tailwind CSS 4** + **Framer Motion**
- Hosted on **Vercel** (default SSG build — not `output: 'export'`, so we keep `next/image` optimization and API routes)
- Contact form backend: **Resend** via `/api/contact/route.ts`

### No multi-language i18n
We do NOT implement Next.js i18n routing. Instead, the free **GTranslate** widget (client-side) handles translation for visitors. All routes and content are English-slug only. The GTranslate widget is loaded in `src/components/GTranslate.tsx` via `next/script`.

### No Join form — redirect to EcoMitram
The "Join" CTA throughout the site is an **external link** to `https://ecomitram.app/`. There is no `/join` route — it 301-redirects to EcoMitram in `next.config.ts`. The only form on the site is `/contact`.

### Content model — in-code registry (not MDX yet)
All content lives in `src/lib/content.ts` as typed objects (Entry, EventEntry, StoryEntry). This was chosen for speed of migration. Future: move to MDX files in `/content/**` with gray-matter frontmatter.

### Stories = unified content hub
News, Gallery, Feeds, and Success Stories from the old WP site are **merged into a single `/stories` section**. Each story has a `type` field: `impact`, `dispatch`, or `photo-essay`. The old `/feeds`, `/gallery`, `/success-stories`, `/latest-news` URLs all 301-redirect to `/stories`.

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
│   └─ /about/panch-parivartan
├─ /programs/              Programs (hub)
│   ├─ /programs/plantation
│   ├─ /programs/polythene-free
│   ├─ /programs/save-water
│   └─ /programs/harit-ghar
├─ /karyavibhag/           Karyavibhag (hub)
│   ├─ /karyavibhag/religious-institutes
│   ├─ /karyavibhag/nari-shakti
│   ├─ /karyavibhag/ngo-coordination
│   └─ /karyavibhag/educational-institutes
├─ /events/                Events (index + [slug])
├─ /stories/               Stories (unified: impact/dispatch/photo-essay)
├─ /resources/             Resources (external links hub)
└─ /contact/               Contact (form + info)
```

### Primary navigation
```
[Logo + mantra]  About  Programs  Karyavibhag  Events  Stories  Contact  [GTranslate]  [Theme]  [ Join → ecomitram.app ]
```

## URL Redirects (SEO preservation)

All legacy WordPress URLs are 301-redirected in `next.config.ts`:
- `/about-us` → `/about`
- `/mission`, `/our-story`, `/our-logo`, `/our-presence` → `/about/*`
- WP date-slug URLs (`/2024/02/28/plantation/`) → `/programs/*` or `/karyavibhag/*`
- Event root-slug URLs (`/eco-bricks/`, `/jal-samwad/`) → `/events/*`
- `/feeds`, `/gallery`, `/success-stories`, `/latest-news` → `/stories`
- `/join` → `https://ecomitram.app/` (external)

## Environment Variables (Vercel)

| Variable | Required | Default | Purpose |
|---|---|---|---|
| `RESEND_API_KEY` | For prod | — | Sends contact form emails |
| `CONTACT_TO_EMAIL` | No | `[email protected]` | Recipient of contact form |
| `CONTACT_FROM_EMAIL` | No | `Paryavaran Sanrakshan <noreply@...>` | Sender (must be verified domain in Resend) |

Without `RESEND_API_KEY`, the contact form logs submissions to console (safe for dev/preview).

## Key Commands

```bash
npm run dev        # Start dev server (Turbopack)
npm run build      # Production build (42 static pages)
npm run lint       # ESLint
npm start          # Serve production build locally
```

## External Services & Links

| Service | URL | Purpose |
|---|---|---|
| EcoMitram App | https://ecomitram.app/ | Join/volunteer portal |
| E-Magazine | https://paryavaranperspective.com/ | Quarterly magazine |
| Media Center | https://paryavaranbharat.org/ | Press & media |
| Sankalp Portal | https://sankalp.paryavaransanrakshan.org/ | Pledge tracking |

## Contact
- Phone: +91 8369-837-609
- Email: [email protected]
- Facebook: https://www.facebook.com/psg.paryavaran.sanrakshan/
- Twitter/X: https://twitter.com/rsspsg
