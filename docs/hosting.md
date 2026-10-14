# Hosting

paryavaransanrakshan.org is a **static export**. `npm run build` writes the
whole site to `out/`: HTML, the RSC `.txt` payloads client-side navigation
fetches, JS, images, icons and the sitemap. There is no server.

## Where it runs

Cloudflare Workers Static Assets, Worker `paryavaran`, configured in
`wrangler.jsonc`. The Worker has no script, so requests are free and unmetered.

```bash
npm run build && npx wrangler deploy
```

`wrangler deploy` needs `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`.
`.github/workflows/deploy.yml` runs it on every green push to `main`.

The apex `paryavaransanrakshan.org` is canonical. `www` redirecting to the apex
is a zone-level rule, not part of this Worker.

## Host-level behaviour lives in two files

A static export can't run `redirects()` or `headers()` from `next.config.ts`,
so they live in `public/` and are copied into `out/`:

- `public/_redirects`: permanent (308) redirects from the legacy WordPress URLs.
- `public/_headers`: one-year immutable cache for `/_next/static/*`.

Both use the format Cloudflare and Netlify share. Unknown paths get
`out/404.html` with a 404 status (`not_found_handling` in `wrangler.jsonc`).

## Contact page

There is no form backend. `/contact` shows the organisation's email and a
`mailto:` button. The address is `orgContact.email` in `src/lib/nav.ts`.

## Moving to another host

Nothing in the app depends on Cloudflare. To move:

1. Upload `out/` to the new host.
2. Port `_redirects` and `_headers` if the host doesn't read them. Netlify
   reads both as-is. On Vercel, write them as `redirects`/`headers` in
   `vercel.json`. On nginx, use `return 308` and `add_header`, plus
   `try_files $uri $uri.html $uri/ =404` and `error_page 404 /404.html`.
3. Point DNS at the new host.
