# Nuxt 4 Editorial Starter

A **forkable Nuxt 4 starter** with TypeScript, Tailwind CSS 4, and a presentation-first editorial architecture for question-led content sites.

Built on [Maxime Bignolet's nuxt-starter-template](https://github.com/MaximeBignolet/nuxt-starter-template) for its simplicity, then extended into a reusable base for new projects. Each fork owns its code independently — not a monorepo, shared layer, or npm package.

---

## Quick start

```bash
pnpm install   # or npm install
pnpm dev       # http://localhost:3000
```

| Command | Description |
|---------|-------------|
| `pnpm dev` | Development server with HMR |
| `pnpm build` | Production build |
| `pnpm preview` | Preview production build |
| `pnpm generate` | Static site generation |
| `pnpm lint` | Run ESLint |

**Demo article:** [`/what/is-an-editorial-system`](http://localhost:3000/what/is-an-editorial-system)

---

## Tech stack

| Technology | Purpose |
|------------|---------|
| [Nuxt 4](https://nuxt.com) | SSR, file-based routing, auto-imports |
| [Vue 3](https://vuejs.org) | Composition API |
| [TypeScript](https://www.typescriptlang.org) | Strict type safety |
| [Tailwind CSS 4](https://tailwindcss.com) | Utility-first styling via Vite plugin |
| [ESLint](https://eslint.org) | Linting (`@nuxt/eslint`) |

---

## Project structure

```
app/
├── app.vue / app.config.ts        # App shell and site metadata
├── assets/css/
│   ├── tokens.css                 # Design tokens (--color-*, --radius-*, etc.)
│   ├── base.css                   # Global resets and typography
│   ├── components.css             # Imports all component CSS (layer order matters)
│   └── components/
│       ├── primitives/            # One CSS file per primitive
│       ├── blocks/                # One CSS file per block
│       └── templates/             # One CSS file per template section
├── components/
│   ├── primitives/                # UI atoms (Button, Input, Card, …)
│   └── blocks/                    # Composed UI (SiteHeader, Prose, …)
├── features/                      # ← Primary customization zone
│   ├── route-groups.ts            # Ten question prefixes (can, is, what, …)
│   ├── {routeGroup}/              # Per-group config stubs
│   └── templates/
│       ├── components/            # Editorial sections and QuestionPage shell
│       ├── template.types.ts      # Article and section TypeScript types
│       ├── template.seo.ts        # JSON-LD helpers
│       └── template.example.ts    # Example article data (replace per project)
├── layouts/default.vue            # SkipLink, SiteHeader, main, SiteFooter
├── pages/
│   ├── index.vue                  # Homepage (blocks)
│   └── [routeGroup]/[slug].vue    # Question articles (templates)
└── composables/                   # Auto-imported composables
```

---

## Editorial architecture

The codebase separates UI into four layers. Know which layer to work in before making changes.

```
┌──────────────────────────────────────────────────────────────┐
│  app/features/              Primary project customization     │
│    routing, types, content wiring, SEO                        │
│    templates/components/    Article sections & page shell     │
├──────────────────────────────────────────────────────────────┤
│  app/components/blocks/     Site chrome, listings, patterns   │
├──────────────────────────────────────────────────────────────┤
│  app/components/primitives/ Foundational UI atoms             │
└──────────────────────────────────────────────────────────────┘
```

### Primitives — `app/components/primitives/`

Accessible, reusable UI atoms. Rarely project-specific.

| | |
|---|---|
| **Examples** | `Button`, `Input`, `Card`, `Container`, `Disclosure`, `Badge`, `Field`, `Select`, `Checkbox`, `Divider`, `Skeleton`, `VisuallyHidden` |
| **When to touch** | Adding a foundational control or fixing shared accessibility/behavior |
| **Types** | `primitive.types.ts` |
| **CSS** | `app/assets/css/components/primitives/{name}.css` |

Compose other primitives only. No business or editorial logic.

### Blocks — `app/components/blocks/`

Composed, presentational UI for site chrome, discovery, listings, and shared page patterns. Fed by **props only** — no content-source coupling.

| Category | Components |
|----------|------------|
| Chrome | `SiteHeader`, `SiteFooter`, `SkipLink`, `Breadcrumbs` |
| Discovery | `PopularQuestions`, `Collections`, `ReadingPaths`, `RecentlyUpdated`, `SearchBox`, `Pagination` |
| Content | `Prose`, `ContentCard`, `SectionHeading`, `ResponsiveTable`, `Figure` |
| States | `EmptyState`, `LoadingState`, `ErrorState` |

| | |
|---|---|
| **When to touch** | Homepage sections, navigation, card grids, tables, filters — anything reusable across pages that is not tied to a single article |
| **Types** | `block.types.ts` |
| **CSS** | `app/assets/css/components/blocks/{name}.css` |

Use primitives internally. Keep blocks data-agnostic — the parent passes items and labels.

### Templates — `app/features/templates/components/`

Editorial sections and the article page shell. Most article UX work happens here.

**Page shell:** `QuestionPage` exposes slots for `header`, `summary`, `tableOfContents`, main content (default), `supporting`, and `related`.

**Section components** (compose per article): `Hero`, `Definition`, `HowItWorks`, `Benefits`, `PracticalTips`, `FAQs`, `SourcesList`, `AuthorBox`, `TableOfContents`, `RelatedQuestions`, `KeyTakeaways`, `RedFlags`, `ScientificEvidence`, and others.

**Base pattern:** Most sections use `EditorialSection` (`id`, `title`, `variant`; optional `headingLevel`). Wrap body copy in `<Prose>`.

| | |
|---|---|
| **Types** | `app/features/templates/template.types.ts` |
| **SEO** | `template.seo.ts` (JSON-LD) |
| **Example data** | `template.example.ts` — replace with your content layer |
| **CSS** | `app/assets/css/components/templates/{name}.css` |

**Rule:** `TableOfContents` is the **only scroll-spy** on the site. Do not add duplicate TOC or scroll-spy components.

### Features — `app/features/`

Project-specific logic, routing, types, and wiring — not generic UI. This is where most new-project work lives.

```
app/features/
├── index.ts                 # Barrel: route groups and re-exports
├── route-groups.ts          # can · is · does · did · why · what · when · where · how · will
├── route-group.types.ts
├── {routeGroup}/            # Per-group config (e.g. what/what.config.ts)
└── templates/               # Types, utils, SEO, example data, and template components
```

**Typical customization tasks:**

1. **Content layer** — replace `getExampleArticle()` with a CMS, API, or file-based source
2. **Route group config** — labels, question starters, group-specific behavior
3. **Article types** — extend `QuestionArticle` and section shapes in `template.types.ts`
4. **Pages** — compose templates in `[routeGroup]/[slug].vue`; compose blocks on `index.vue`
5. **Project policy** — section selection per article, disclaimers, evidence rules, taxonomy

**Routing:** Articles live at `/{routeGroup}/{slug}`. Validate with `isRouteGroup()`; invalid groups return 404.

**TypeScript imports** (explicit — components auto-import):

```ts
import { isRouteGroup, type RouteGroup } from '~/features';
import { getExampleArticle } from '~/features/templates/template.example';
```

Barrel files export logic and types only. Vue components are **not** exported from barrels.

---

## Conventions

### Styling

- **No `<style>` blocks** in Vue files
- One CSS file per component, imported once in `components.css`
- Import order: **primitives → blocks → templates**
- Use semantic tokens from `tokens.css`; do not put visual tokens in `app.config.ts`
- CSS entry chain: `main.css` → `tokens.css` → `base.css` → `components.css`

### Adding a component

1. Create `ComponentName.vue` in the correct layer folder
2. Add matching CSS at `app/assets/css/components/{primitives|blocks|templates}/component-name.css`
3. Import the CSS in `components.css` (respect layer order)
4. Do not create component barrel files

### Auto-imports

Components resolve from `~/features/*/components/**/*.vue` (first) and `~/components/**` (second), with `pathPrefix: false`. Use `<Button />` and `<Hero />` directly — no manual imports.

Composables auto-import from `app/composables/**`.

### Pages

Only two pages by design:

| Page | Role |
|------|------|
| `app/pages/index.vue` | Homepage — blocks (+ optional `Hero`) |
| `app/pages/[routeGroup]/[slug].vue` | Question articles — `QuestionPage` + template sections |

Add more pages only when real requirements justify them.

---

## What to customize vs. what to keep stable

| Customize per project | Usually stable in the base |
|-----------------------|----------------------------|
| `app/features/` — data, configs, article wiring | Primitives (unless adding shared atoms) |
| `app/pages/` — composition and SEO meta | Core primitive and block APIs |
| Which template sections each article uses | `QuestionPage` shell structure |
| Extensions to `template.types.ts` | Token and CSS architecture |
| `app.config.ts` — site name and description | Auto-import and Nuxt config patterns |
| Homepage block data in `index.vue` | Single-TOC scroll-spy rule |

**Default approach:** extend **templates** and **features** first. Touch primitives and blocks only when the change is genuinely shared infrastructure.

---

## AI assistant context

Use this section when prompting an AI coding assistant on a fork of this repository.

> You are working in a forkable **Nuxt 4 + TypeScript + Tailwind CSS 4** editorial starter. It is presentation-first: reusable UI layers (primitives → blocks → templates) with project-specific logic in `app/features/`. Each project forks independently and owns its content source, types, and section selection.

**Task routing:**

| Task | Where to work |
|------|---------------|
| Add a homepage section | Existing or new **block** → wire in `index.vue` |
| Add an article section (e.g. Side Effects) | New **template** component → optional type in `template.types.ts` → use in `[slug].vue` |
| Wire CMS / API / markdown | **`app/features/`** — data fetching, types, replace `template.example.ts` |
| New button, input, or form control | **Primitive** + CSS |
| Site header, footer, or nav | **Blocks** (`SiteHeader`, `SiteFooter`) |
| SEO structured data | `template.seo.ts` and page-level `useHead` in `[slug].vue` |

**Reference implementation:** demo route `/what/is-an-editorial-system` and `app/features/templates/template.example.ts`.

**Hard rules:**

- No `<style>` in Vue files; one external CSS file per component
- `TableOfContents` is the only scroll-spy — do not add alternatives
- Vue components auto-import; TypeScript logic imports from `~/features` barrels
- Visual tokens in `tokens.css`, not `app.config.ts`

When starting a new fork, add project-specific notes below this section: content source, domain, planned template sections, and any disclaimers or compliance requirements.

---

## Customization

### Site metadata

Edit `app/app.config.ts`:

```ts
export default defineAppConfig({
  site: {
    name: `Your Site Name`,
    description: `Your site description.`,
    defaultLocale: `en`,
  },
});
```

### Environment variables

```bash
# .env
API_BASE_URL=https://api.example.com
```

Available via `useRuntimeConfig().public.apiBaseUrl`.

### Tailwind theme extensions

Add tokens in `app/assets/css/tokens.css` or extend via `@theme` in `main.css`.

---

## License

MIT — see [LICENSE](LICENSE).

Based on [nuxt-starter-template](https://github.com/MaximeBignolet/nuxt-starter-template) by Maxime Bignolet.
