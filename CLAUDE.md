# Anup Meshram — Portfolio Website

React 19 + Vite 7 single-page personal portfolio site, dark theme.

See @package.json for dependencies.

## Commands

- `npm run dev` — Start local dev server (Vite)
- `npm run build` — Production build to `dist/`
- `npm run lint` — Run ESLint
- `npm test` — Run Vitest unit tests once (`npm run test:watch` for watch mode)
- `npm run preview` — Preview production build locally

## Project Structure

```
src/
  components/          # Page-level section components (Hero, About, Experience, etc.)
    ui/                # Reusable UI primitives (Button, Counter, GlowCard,
                       #   Spotlight, DottedWaveSurface, SectionHeader, Icons)
  data/
    content.js         # All site text, links, and structured data — single source of truth
  utils/
    parseMetricValue.js  # Parse "$10M"/"95%"-style metric strings for <Counter> (+ test)
  hooks/               # Custom React hooks (e.g. useReveal)
  App.jsx              # Root component — assembles all sections
  main.jsx             # React entry point
  index.css            # Global styles, CSS variables, font imports

public/
  logos/               # Company logo SVGs
  favicon.svg
```

## Architecture

- **Content is centralized**: All text, links, metrics, and structured data live in `src/data/content.js`. Never hardcode display text directly in components.
- **Component per section**: Each website section (Hero, About, Experience, Projects, Skills, Education, Contact) is its own component in `src/components/`, assembled in `App.jsx`.
- **UI primitives**: Shared components live in `src/components/ui/` — e.g. `Button` (primary/secondary, supports `href`/`external`), `SectionHeader` (section title block), `Counter` (animated number), `GlowCard`, `Spotlight`, and icon components from `Icons.jsx`.
- **Section headings**: Sections render their title with `<SectionHeader title="…" />`; there is no `<Section>` layout-wrapper primitive.
- **Metrics**: `parseMetricValue()` (`src/utils/parseMetricValue.js`) turns a numeric metric string into parts for `<Counter>`. Qualitative values in `content.js` (e.g. "Most", "8-figure") intentionally do not parse and render verbatim.
- **No external state management**: Plain React hooks (useState/useEffect + custom hooks) only. No Redux, Zustand, or Context API.
- **No animation libraries**: CSS transitions and small custom hooks (`useReveal`) only.

## Styling

- **Design tokens** are CSS custom properties defined on `:root` in `src/index.css` and applied **predominantly via inline `style={{ ... }}`** referencing `var(--…)`. Tailwind CSS v4 is installed and available, but section components lean on inline styles + tokens rather than utility classes — match the surrounding file when editing.
- **Dark theme** tokens (see `src/index.css` for the authoritative list):
  - `--color-background`: `#060810`
  - `--color-surface`: `rgba(10, 16, 24, 0.7)`
  - `--color-text-primary`: `#e8eeef`
  - `--color-text-secondary`: `rgba(180, 205, 210, 0.6)`
  - `--color-accent`: `#00d2be` (teal), `--color-accent-hover`: `#00e6cf`
- **Fonts**: `Sora` for display (`--font-family-display`), `IBM Plex Sans` for body (`--font-family-body`), imported in `index.css`.
- **Responsive**: Mobile-first; sizes/spacing are set inline or via `md:`/`lg:` where Tailwind is used.

## Component Conventions

- Functional components with hooks only — no class components.
- Render a section's heading with `<SectionHeader title="…" />`.
- Use `<Button variant="primary">` / `<Button variant="secondary">` — supports `href` and `external` for new-tab links.
- Add new SVG icons as named exports in `src/components/ui/Icons.jsx`.
- Company logos go in `public/logos/` and are referenced from `content.js`.

## How to Update Content

1. Edit `src/data/content.js` — update the relevant exported object.
2. If the change needs new data fields, update the consuming component.
3. Run `npm run dev` and verify in the browser.
4. For a new section: create a component in `src/components/`, add it to `App.jsx`, and add a nav link in `content.js`.

## Code Style

- 2-space indentation.
- Named exports for data/utilities, default exports for components.
- Keep components focused — extract reusable parts into `ui/` when used in 2+ places.
- Add a `*.test.js` next to any new pure helper in `utils/`.
