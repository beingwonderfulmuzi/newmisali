# Cloudflare Pages deployment

Nuxt uses Nitro's `cloudflare_pages` SSR preset. The installed Nitro 2.13.4 preset produces `dist/`, containing `_worker.js/` and `_routes.json`. Use the worker build, not `nuxt generate`, so theme cookies, server metadata, robots/sitemap routes and news 404 responses continue to work.

For a Pages project connected to this Git repository:

- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: repository root
- Node version: `24` (set `NODE_VERSION=24` in Pages build variables)
- Production: set `NUXT_PUBLIC_SITE_URL` to the real HTTPS site origin. Enable `NUXT_PUBLIC_INDEXABLE=true` only after the content checklist is resolved.
- Preview: keep `NUXT_PUBLIC_INDEXABLE=false`. Do not copy production indexing settings into preview environments.

The project uses web APIs and Nitro polyfills; `nodeCompat: false` means no Node compatibility flag is required. Dashboard settings remain authoritative (`deployConfig: false`); no Cloudflare project ID or account name has been invented.

The three unused videos exceeding Pages' 25 MiB per-file limit and the invalid HTML file named `Students-playing.mp4` are excluded by `nitro.ignore` and `.gitignore`. Originals remain locally in `public/videos/`; the largest unused original also exceeds GitHub's normal file limit. All four published videos remain in the build output. Move any future oversized published video to a suitable media host or generate a smaller approved derivative before adding it to the manifest.

Local application preview: `npm run dev`.
Cloudflare runtime preview after building: `npx wrangler pages dev dist`.

References: [Nitro Cloudflare Pages preset](https://nitro.build/deploy/providers/cloudflare#cloudflare-pages), [Cloudflare Nuxt guide](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nuxt-site/), [Pages asset limits](https://developers.cloudflare.com/pages/platform/limits/#file-size).
