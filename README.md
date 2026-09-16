# Personal Website - anupmeshram.com

![ci](https://github.com/ameshram/personal-website/actions/workflows/ci.yml/badge.svg)

Source for my personal portfolio site: a single-page React app presenting my
background, experience, projects, and contact details.

## Tech stack

- **React 19** + **Vite 7**
- **Tailwind CSS v4** (design tokens) alongside component-scoped inline styles
- **lucide-react** icons
- **Vitest** for unit tests, **ESLint** for linting, **GitHub Actions** for CI

## Getting started

```bash
npm install
npm run dev        # local dev server (Vite, HMR)
```

## Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Start the Vite dev server. |
| `npm run build` | Production build to `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | ESLint. |
| `npm test` | Vitest unit tests (run once). |
| `npm run test:watch` | Vitest in watch mode. |

CI runs lint, tests, and build on every push and pull request
(`.github/workflows/ci.yml`).

## Structure

```
src/
  components/        # page sections (Hero, About, Experience, Projects, …)
    ui/              # reusable UI primitives (Button, Counter, Icons, …)
  data/content.js    # all site text, links, and structured data (single source of truth)
  utils/             # small pure helpers (+ their *.test.js)
  hooks/             # custom React hooks
  App.jsx            # assembles the sections
index.html           # document shell + meta/OG tags
```

All copy and structured data live in `src/data/content.js` - edit content there
rather than hardcoding it into components.

## License

Content (text, résumé data) © Anup Meshram. Code is provided as-is for
reference.
