# New Misali Cadet School website

## Foundation audit and decisions

Inspected the existing application, public assets, package files, Nuxt configuration, global import order, component implementations and CSS. No applicable AGENTS.md was present. Installed versions are Nuxt 4.5.0, Tailwind 4.3.3 and Vue 3.5.40; package.json ranges began at Nuxt 4.2.0 and Tailwind 4.1.16. No project dependency or lockfile was upgraded.

Both npm and pnpm lockfiles exist; npm scripts run against the supplied node_modules. PowerShell requires `npm.cmd`. A temporary, ignored Vue type checker is isolated under `.audit/tools`; it uses the project's TypeScript 5.9.3 and does not change project dependencies.

The import order remains Tailwind → tokens → base → existing component CSS → school compositions. No local fonts were present. Georgia display headings and Segoe UI/system body text avoid extra font downloads. The old self-referencing `:root` aliases were removed; they caused cyclic custom-property definitions.

The existing semantic theme now uses forest `#123C32`, ivory `#F7F4EC`, antique gold `#AE8745`, charcoal `#202A25`, quiet borders and a muted alternate surface. The navbar switch adds a dark forest theme with warm light text and sage links, using the same semantic tokens. Brand surfaces and action colors are separate from link colors so dark-theme links stay readable without turning forest panels pale. A preference cookie persists light/dark choices for one year and the server renders the chosen theme. Gold is decoration, not small body copy. A darker gold focus ring, fluid display scale, responsive gutters, 82rem container, shared section spacing and 3rem control height establish hierarchy. Existing reduced-motion rules are retained. Header, dropdowns and dialogs have an explicit stacking hierarchy.

## Existing pieces evaluated and reused

- Direct composition: Container, SkipLink, Breadcrumbs, Figure, Prose, EmptyState, FAQs and Disclosure.
- Token-based restyling: these components inherit the institutional palette and type; Figure corners are squared for editorial photography.
- Extended: Button has an optional internal `to` link, preserving button types, variants, disabled/loading behavior for existing button consumers. Primary hover text contrast was corrected.
- Extended: SiteHeader retains navigation/site-name props, adds optional child links, accessible dropdown state and a native-dialog mobile menu. SiteFooter retains its props and adds the school address/directions composition.
- New components address real gaps: PageIntro centralizes school introductions; PrincipalPortrait preserves the supplied image frame; AdmissionCallout shares the closing invitation; VideoPlayer implements poster-first click-to-play native media; SchoolGallery combines existing InteractiveFilters with a native-dialog image viewer, arrow-key navigation and focus restoration.
- Existing editorial templates and unrelated component demonstrations remain available. A pre-existing route-group type import and widened JSON-LD literal types were corrected during type verification.

## Updated app/assets files

- `css/tokens.css`: semantic institutional theme and shared measurements.
- `css/base.css`: fluid, editorial heading hierarchy.
- `css/main.css`: imports the school compositions after existing styles.
- `css/components/primitives/button.css`: control height and hover contrast.
- `css/components/blocks/site-header.css`: school identity, desktop navigation and mobile dialog.
- `css/components/blocks/site-footer.css`: institutional footer.
- New `css/school.css`: page compositions, media layouts and responsive behavior.

Geometry specific to compositions (grid ratios, image aspects, portrait bars and lightbox sizing) lives in school.css. Transparent dark overlays and white media controls are intentional readability treatments. Unrelated component CSS retains its existing variants and local values.

## Routes and content

Completed `/`, `/about`, `/principal`, `/academics`, `/admissions`, `/school-life`, `/campus`, `/gallery`, `/news`, `/downloads`, `/contact`, `/privacy`, plus `/news/[slug]` for verified records. News uses `news/index.vue` so the article route renders independently. The existing trailing-slash middleware remains; canonical and sitemap URLs follow that convention.

Typed school identity/navigation/collections are in `app/data/school.ts`; media metadata, categories, dimensions, placement and video posters are in `app/data/media.ts`. Original assets are preserved. All selected images were already WebP, at modest file sizes; no destructive image conversion was needed. Video posters are generated derivatives. Videos do not request their MP4 before interaction and vertical videos keep portrait proportions.

School page metadata is centralized. Structured data uses only confirmed identity and address. Production URLs are never invented. Empty collections are excluded from the sitemap and primary navigation; preview indexing is disabled by default. There is no simulated form or analytics integration. Only the appearance preference is persisted; no enquiry or student information is stored.

The homepage text wraps naturally; forced line breaks were removed and no balanced wrapping is applied. On mobile, the principal's photograph and name precede the headline so both appear in the first viewport. The desktop portrait column is larger. Image rendering preserves the complete supplied frame with contain fitting and its original aspect ratio; it cannot recover the head area missing from the original file.

Cloudflare Pages deployment is configured in nuxt.config.ts using `cloudflare_pages`, with build output in `dist/`. See `CLOUDFLARE_PAGES.md` for dashboard settings and the policy excluding unpublished oversized/invalid video originals from deployment and Git uploads.

All school content photographs, including both principal portraits, now share ImageLightbox through ZoomImage and the root image-viewer provider. Clicking opens the complete image in a native dialog; optional 2× zoom uses a scrollable image stage. Close, Escape and backdrop clicks restore the page and keyboard focus. Gallery next/previous navigation retains the currently filtered photograph collection. Video posters continue to play videos; the school logo remains a home link.

## Verification

- ESLint passed across the repository.
- Vue/TypeScript app and server checks passed using project TypeScript 5.9.3. The temporary checker resolves Nuxt's installed Vue Router language plugin from its pnpm location.
- Production build passed. Existing dependency export deprecation and build-performance warnings remain non-blocking.
- All 12 core routes were checked at 360, 390, 768, 1024 and 1440 pixels: successful responses, one H1 per route, no horizontal overflow or broken loaded images, and no browser errors.
- Production browser checks repeated all 12 routes at 390 and 1440 pixels and passed.
- Final production smoke checks verified all 21 selected media/poster URLs, the news 404 response, and ivory keyboard-focus outlines on dark surfaces. Desktop and mobile first-screen captures are in `.audit/desktop-preview.png` and `.audit/mobile-preview.png`.
- Verified desktop dropdown Escape behavior, mobile menu opening/closing/navigation and focus restoration, category filters, lightbox arrow keys and focus restoration, FAQs and real video playback with native controls.
- Unknown news slugs and unknown routes return 404. Staging robots disallows indexing; staging sitemap contains no invented URLs.
- Body/ivory contrast is 13.46:1; secondary text 7.31:1; muted text 5.04:1; ivory/forest 11.12:1. Focus rings use darker gold on ivory and ivory on dark surfaces.

Local screenshots and automated route/interaction reports are ignored under `.audit/`.

The content and media issues remaining before launch are in `CONTENT_CHECKLIST.md`. This work implements the requested existing local Nuxt repository; it does not register or deploy a hosted Site.
