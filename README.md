# ⚡ Nuxt 4 Starter Template

<p align="center">
  <strong>Production-ready Nuxt 4 starter with TypeScript, TailwindCSS 4 & ESLint</strong>
</p>

<p align="center">
  <a href="https://nuxt-starter-template-seven.vercel.app/">🌐 Live Demo</a> •
  <a href="#-quick-start">Quick Start</a> •
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a>
</p>

<p align="center">
  <a href="https://nuxt.com"><img src="https://img.shields.io/badge/Nuxt-4-00DC82?logo=nuxt.js&logoColor=white" alt="Nuxt 4"></a>
  <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript"></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css&logoColor=white" alt="TailwindCSS"></a>
  <a href="/LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a>
  <img src="https://img.shields.io/github/stars/MaximeBignolet/nuxt-starter-template?style=social" alt="GitHub stars">
</p>

---

## 🎯 Why This Template?

A clean, modern, and **production-tested** Nuxt 4 starter that saves you hours of initial setup. Built with best practices and the latest versions of your favorite tools.

✅ **Nuxt 4** – Latest stable release with all new features  
✅ **TypeScript** – Full type safety configured out of the box  
✅ **TailwindCSS 4** – Bleeding-edge styling with modern features  
✅ **Zero Config** – ESLint, Vite, and auto-imports ready to go  
✅ **Clean Architecture** – Organized folder structure for scalability  
✅ **Battle-Tested** – Used in real production projects

---

## 🚀 Quick Start

### [🎯 Use This Template](https://github.com/MaximeBignolet/nuxt-starter-template/generate)
**Get started in 30 seconds** ← Click to create your own repository

### Or clone manually:

```bash
# Clone the repository
git clone https://github.com/MaximeBignolet/nuxt-starter-template.git
cd nuxt-starter-template

# Install dependencies
npm install

# Start development server
npm run dev
```

Server runs on `http://localhost:3000` 🚀

### Build for Production

```bash
# Build the application
npm run build

# Preview production build
npm run preview
```

> 💡 **Tip:** Use either `npm` or `yarn` consistently to avoid lockfile conflicts.

---

## 📦 What's Included

```
nuxt-starter-template/
├─ 🎨 TailwindCSS 4 with optimized config
├─ 🔒 TypeScript strict mode enabled
├─ ⚡ Vite for lightning-fast HMR
├─ 🧹 ESLint + formatting rules configured
├─ 📁 Clean folder structure ready to scale
├─ 🔄 Auto-imports (composables)
├─ 🛣️ File-based routing configured
├─ 📝 Example app config and composables
└─ 🚀 Vercel/Netlify deployment ready
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Nuxt 4](https://nuxt.com) | Latest | Hybrid rendering & SSR |
| [TypeScript](https://www.typescriptlang.org) | 5.x | Type safety |
| [TailwindCSS](https://tailwindcss.com) | 4.x | Utility-first styling |
| [Vite](https://vitejs.dev) | Latest | Fast bundling & HMR |
| [ESLint](https://eslint.org) | Latest | Code quality & formatting |

---

## 📁 Project Structure

```
tinymaster/
├─ app/
│  ├─ app.vue                      # App shell (layout + page)
│  ├─ app.config.ts                # Site name, description, locale
│  ├─ assets/css/
│  │  ├─ tokens.css                # Design tokens (--color-*, --radius-*, etc.)
│  │  ├─ base.css                  # Global resets and typography
│  │  ├─ components.css            # Imports all component CSS (primitives → blocks → templates)
│  │  └─ components/               # One CSS file per component (no <style> in .vue files)
│  ├─ components/
│  │  ├─ primitives/               # Button, Input, Disclosure, etc.
│  │  └─ blocks/                   # SiteHeader, Prose, ContentCard, etc.
│  ├─ features/
│  │  ├─ route-groups.ts           # Ten search-led route groups (can, is, does, …)
│  │  ├─ templates/
│  │  │  ├─ components/            # Hero, QuestionPage, Definition, FAQs, etc.
│  │  │  ├─ template.types.ts      # Shared article and section types
│  │  │  └─ template.seo.ts        # JSON-LD helpers
│  │  └─ {routeGroup}/             # Per-group config stubs
│  ├─ layouts/default.vue          # SkipLink, SiteHeader, main#main-content, SiteFooter
│  ├─ pages/
│  │  ├─ index.vue                 # Home (Hero + listing blocks)
│  │  └─ [routeGroup]/[slug].vue   # Question article shell
│  └─ error.vue                    # ErrorState wrapper
├─ public/
├─ nuxt.config.ts
└─ tsconfig.json
```

---

## 🏗️ Editorial Architecture

This project is a **presentation-first editorial base** for question-led content. It separates three layers:

| Layer | Location | Role |
|-------|----------|------|
| **Primitives** | `app/components/primitives/` | Accessible UI building blocks (Button, Disclosure, Input, …) |
| **Blocks** | `app/components/blocks/` | Composed UI for listings, navigation, and page chrome (SiteHeader, Prose, PopularQuestions, …) |
| **Templates** | `app/features/templates/components/` | Editorial sections and article shells (Hero, Definition, QuestionPage, TableOfContents, …) |

**Styling:** Vue components have no `<style>` blocks. Each component has a matching CSS file under `app/assets/css/components/{primitives|blocks|templates}/`, imported once via `components.css` in order: primitives → blocks → templates. Use semantic tokens from `tokens.css`.

**Routing:** Articles live at `/{routeGroup}/{slug}` (e.g. `/what/is-an-editorial-system`). Route groups map to common search question prefixes (`can`, `is`, `does`, `why`, `what`, `when`, `where`, `how`, `will`).

**Question pages:** `QuestionPage` provides slots for header, summary, table of contents (sidebar on desktop), main content, supporting sections, and related questions. `TableOfContents` is the only scroll-spy on the page (IntersectionObserver, hash updates, reduced-motion aware).

**Content:** This base does not include a CMS. Projects supply their own data layer and wire it into templates. See `template.example.ts` for a fully typed example article.

---

## ✨ Features

### Core Features
- ✅ **Nuxt 4** with latest features and performance improvements
- ✅ **TypeScript** with strict mode for maximum type safety
- ✅ **TailwindCSS 4** with JIT compiler and modern utilities
- ✅ **ESLint** configured for Nuxt, Vue, and TypeScript
- ✅ **Auto-imports** for components, composables, and utilities
- ✅ **Path aliases** using `@` for clean imports

### Developer Experience
- 🔥 **Hot Module Replacement** for instant updates
- 📝 **Code examples** included to get you started
- 🎨 **Responsive design** patterns ready to use
- 🔧 **Extensible** architecture for easy customization
- 📦 **Production-optimized** build configuration

### Deployment Ready
- ☁️ **Vercel** deployment configured
- 🌐 **Netlify** compatible
- 🐳 **Docker** ready (add Dockerfile if needed)
- 🚀 **SSR** and **SSG** modes available

---

## 🆚 Comparison

| Feature | This Template | Official Nuxt Starter | Other Templates |
|---------|---------------|----------------------|-----------------|
| Nuxt 4 | ✅ | ❌ (v3) | ❌ |
| TailwindCSS 4 | ✅ | ❌ | Partial |
| TypeScript Strict | ✅ | Partial | ❌ |
| ESLint Configured | ✅ | ❌ | Partial |
| Production Examples | ✅ | ❌ | ❌ |
| Clean Architecture | ✅ | Basic | Varies |

---

## 🎨 Customization

### Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

### TailwindCSS

Tailwind is loaded from `app/assets/css/main.css` and configured through Nuxt/Vite in `nuxt.config.ts`.
Add your custom tokens/utilities directly in `main.css`:

```css
@import "tailwindcss";

@theme {
	--color-primary: #00dc82;
}
```

### ESLint

Adjust linting rules in `eslint.config.mjs` to match your preferences.

---

## Editorial system architecture

This repository is a **minimal editorial base** for question-led content. Each project forks it and owns its code independently — not a monorepo, layer, or npm package.

### Component locations

| Layer | Path | Role |
|-------|------|------|
| Primitives | `app/components/primitives/` | Buttons, inputs, cards, disclosure — foundational UI building blocks |
| Blocks | `app/components/blocks/` | Site chrome, discovery patterns, prose, tables — presentational sections fed by props |
| Templates | `app/features/templates/components/` | Article shell, editorial sections, trust components — question-page composition |

Components auto-import from `~/features/*/components/**/*.vue` (first) and `~/components/**` (second) with `pathPrefix: false`, so `<Button />` and `<Hero />` work without manual imports.

### Token customization

Visual tokens live in `app/assets/css/tokens.css` — colors, typography, radii, shadows, layout widths, motion. Override `:root` or `@theme` values there. Do not put visual tokens in `app.config.ts`.

CSS entry chain: `main.css` → `tokens.css` → `base.css` → `components.css`.

### Adding a new component

1. Create `ComponentName.vue` under the appropriate folder (`primitives`, `blocks`, or `features/templates/components`).
2. Add matching CSS at `app/assets/css/components/{primitives|blocks|templates}/component-name.css` using semantic tokens and a stable kebab-case root class.
3. Import the CSS once in `app/assets/css/components.css` (primitives → blocks → templates order).
4. Do **not** add `<style>` blocks inside Vue files or create component barrel files.

### Feature TypeScript barrels

Feature logic uses explicit imports from `~/features`:

```ts
import { isRouteGroup, type RouteGroup } from '~/features';
```

Barrel files: `app/features/index.ts`, each route-group `index.ts`, and `app/features/templates/index.ts`. Vue components are **not** exported from barrels.

### Route groups

Ten allowed question prefixes, each with a config in `app/features/{group}/`:

`can` · `is` · `does` · `did` · `why` · `what` · `when` · `where` · `how` · `will`

Routes: `/{routeGroup}/{slug}` via a single dynamic page at `app/pages/[routeGroup]/[slug].vue`. Validate with `isRouteGroup()`; invalid groups return 404.

### Minimal page strategy

Only two pages: `index.vue` (starter homepage) and `[routeGroup]/[slug].vue` (question articles). Add more pages only when a project’s real requirements justify them.

### Replacing the starter example

Example article data lives in `app/features/templates/template.example.ts`. The working demo is `/what/is-an-editorial-system`. Replace `getExampleArticle()` with your content source; other valid routes return 404 until content is added.

### Single scroll-spy rule

`TableOfContents` is the **only** scroll-spy in the system. Do not add `ArticleToc`, `MobileToc`, or `DesktopToc`. One instance adapts responsively (sticky sidebar on desktop, collapsible on mobile).

### Project-specific decisions

Each fork owns: content sources, CMS choice, domain types, section selection per article, disclaimers, evidence claims, and topic taxonomy emerging from real SERP analysis.

---

## 🧩 Roadmap

### Coming Soon
- [ ] Authentication module (optional)
- [ ] Dashboard layout examples
- [ ] Dark mode toggle component
- [ ] SEO meta module integration
- [ ] i18n configuration example
- [ ] Unit testing setup (Vitest)
- [ ] E2E testing setup (Playwright)

### Premium Version (Optional)
- 🔐 Auth flow with session management
- 📊 Dashboard with charts and analytics
- 🎨 Extended UI components library
- 🌙 Advanced dark mode with persistence
- 📱 Mobile-optimized layouts
- 🔌 CMS integration examples

---

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md).

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

**Free to use, modify, and distribute.** If you use this commercially, a attribution or link back is appreciated but not required.

---

## 🙏 Acknowledgments

- [Nuxt Team](https://nuxt.com) for the amazing framework
- [TailwindCSS Team](https://tailwindcss.com) for the utility-first CSS
- [TypeScript Team](https://www.typescriptlang.org) for type safety

---

## 👨‍💻 Author

**Maxime Bignolet**  
Front-End Developer – La Rochelle, France

[![GitHub](https://img.shields.io/badge/GitHub-MaximeBignolet-181717?logo=github)](https://github.com/MaximeBignolet)
[![Portfolio](https://img.shields.io/badge/Portfolio-maximedev.fr-00DC82)](https://maximedev.fr)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Maxime_Bignolet-0A66C2?logo=linkedin)](https://www.linkedin.com/in/maxime-bignolet-8228bb219/)

---

<p align="center">
  <strong>⭐ If this template helped you, consider giving it a star!</strong>
</p>

<p align="center">
  <a href="https://nuxt-starter-template-seven.vercel.app/">🌐 View Live Demo</a>
</p>
