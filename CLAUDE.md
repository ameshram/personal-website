# Anup Meshram — Portfolio Website

React 19 + Vite 7 + Tailwind CSS v4 dark-theme personal portfolio site.

See @README.md for Vite defaults and @package.json for dependencies.

## Commands

- `npm run dev` — Start local dev server (Vite)
- `npm run build` — Production build to `dist/`
- `npm run lint` — Run ESLint
- `npm run preview` — Preview production build locally

## Project Structure

```
src/
  components/          # Page-level section components (Hero, About, Experience, etc.)
    ui/                # Reusable UI primitives (Button, Section, SectionTitle, Icons)
  data/
    content.js         # All site text, links, and structured data — single source of truth
  utils/
    highlightMetrics.jsx  # Auto-highlights numerical values (e.g. $28M, 95%) in accent color
  App.jsx              # Root component — assembles all sections
  main.jsx             # React entry point
  index.css            # Global styles, CSS variables, Tailwind import, Inter font

public/
  logos/               # Company logo SVGs (aws.svg, ouro.svg, nbc.svg)
  favicon.svg
```

## Architecture

- **Content is centralized**: All text, links, metrics, and structured data live in `src/data/content.js`. Never hardcode text directly in components.
- **Component per section**: Each website section (Hero, About, Experience, Projects, Skills, Education, Contact) is its own component in `src/components/`.
- **UI primitives**: Shared components live in `src/components/ui/` — use `Button` (primary/secondary), `Section` (layout wrapper), `SectionTitle`, and icon components from `Icons.jsx`.
- **Metric highlighting**: Use `highlightMetrics()` from `src/utils/highlightMetrics.jsx` to auto-style numbers/percentages in accent color. It uses regex to match patterns like `$28M`, `95%`, `<10 min`.
- **No external state management**: Plain React hooks (useState) only. No Redux, Zustand, or Context API.
- **No animation libraries**: CSS transitions and Tailwind utilities only.

## Styling

- **Tailwind CSS v4** utility classes — no inline styles, no CSS modules, no styled-components.
- **Dark theme** with CSS custom properties defined in `src/index.css`:
  - `--color-background`: `#0D0D0D`
  - `--color-surface`: `#1F1F1F`
  - `--color-surface-light`: `#262626`
  - `--color-text-primary`: `#F5F5F5`
  - `--color-text-secondary`: `#A3A3A3`
  - `--color-accent`: `#3B82F6`
  - `--color-accent-hover`: `#2563EB`
- **Font**: Inter (400, 500, 600, 700) loaded via Google Fonts in `index.css`.
- **Responsive**: Mobile-first. Use `md:` for tablet/desktop and `lg:` for large screens.
- **Borders**: Use `border-white/10` for subtle dividers on dark backgrounds.

## Component Conventions

- Functional components with hooks only — no class components.
- Wrap page sections in `<Section id="section-name">` for consistent layout and scroll targets.
- Use `<Button variant="primary">` or `<Button variant="secondary">` — supports `href` for links and `external` for new-tab links.
- Add new SVG icons as named exports in `src/components/ui/Icons.jsx`.
- Company logos go in `public/logos/` and are mapped in `content.js` via `companyLogos`.

## How to Update Content

1. Edit `src/data/content.js` — update the relevant exported object.
2. If the change requires new data fields, update the corresponding component to consume them.
3. Run `npm run dev` and verify the change in the browser.
4. For new sections: create a component in `src/components/`, add it to `App.jsx`, and add a nav link in `content.js`.

## Code Style

- 2-space indentation.
- JSX uses double quotes for attributes.
- Named exports for data, default exports for components.
- Keep components focused — extract reusable parts into `ui/` when used in 2+ places.
