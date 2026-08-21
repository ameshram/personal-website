# CLAUDE.md — anupmeshram.com Redesign Instructions

## Objective

Transform anupmeshram.com from its current generic dark portfolio template into the **"Neural Intelligence"** design system — a professional-modern AI-themed portfolio with animated wave backgrounds, cursor-tracking glowing card borders, scroll reveal animations, and distinctive typography. **Do NOT change any content** — only visual presentation, layout, motion, and component architecture.

---

## Current Stack

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v4 (using `@theme inline` and CSS custom properties)
- **Fonts:** Inter (via Google Fonts)
- **Deployment:** Static site (likely S3/CloudFront)
- **Structure:** Single-page app with components: Navbar, Hero, About, Experience, Projects, Skills, Education, Contact, Footer

---

## Target Design System

### Color Tokens (replace existing CSS variables)

```css
/* Replace in your Tailwind config / CSS variables */
--color-background: #060810;        /* was #0d0d0d */
--color-surface: rgba(10, 16, 24, 0.7);    /* was #1f1f1f */
--color-surface-light: rgba(14, 20, 30, 0.8); /* was #262626 */
--color-text-primary: #e8eeef;      /* was #f5f5f5 */
--color-text-secondary: rgba(180, 205, 210, 0.6); /* was #a3a3a3 */
--color-text-muted: rgba(140, 170, 178, 0.4);     /* NEW */
--color-accent: #00d2be;            /* was #3b82f6 — cyan/teal, NOT blue */
--color-accent-secondary: #00b4d8;  /* NEW — sky blue for gradients */
--color-accent-hover: #00e6cf;      /* was #2563eb */
--color-border: rgba(0, 210, 190, 0.08);   /* was rgba(255,255,255,0.1) */
```

### Typography (replace Inter)

Install two Google Fonts:
```
Sora (weights: 300, 400, 600, 700) — for headings, name, section titles
IBM Plex Sans (weights: 300, 400, 500, 600, 700) — for body text, nav, labels
```

Update the font import in `index.html` or your CSS:
```html
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=Sora:wght@300;400;600;700&display=swap" rel="stylesheet" />
```

Update CSS variables:
```css
--font-family-display: 'Sora', sans-serif;
--font-family-body: 'IBM Plex Sans', sans-serif;
```

### Typography Rules
- **Your name (h1):** Sora, 700 weight for first name, 300 weight for last name, clamp(46px, 5.5vw, 70px), letter-spacing: -0.045em
- **Last name** gets a gradient: `background: linear-gradient(135deg, #00d2be 0%, #00b4d8 60%, #7dd3fc 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;`
- **Section headings (h2):** Sora, 700 weight, clamp(30px, 4vw, 42px), letter-spacing: -0.03em
- **Body text:** IBM Plex Sans, 400 weight, 15px, line-height: 1.8
- **Labels/nav:** IBM Plex Sans, 500 weight, 11-12px, letter-spacing: 0.05em, uppercase
- **Metrics/numbers:** Sora, 700 weight

---

## New Components to Create

### 1. `DottedWaveSurface.jsx` — Animated background for Hero

A Canvas-based animated dot grid that undulates with sine waves. Place as absolute-positioned background in the Hero section.

```
Specs:
- COLS: 50, ROWS: 28, SEP: 26px
- Sine wave: Math.sin((ix + count) * 0.25) * 14 + Math.sin((iy + count) * 0.4) * 10
- Dot color: rgba(0, 210, 190, alpha) where alpha = 0.08 + waveAmplitude * 0.2
- Dot size: 1 + waveAmplitude * 1.3
- Animation speed: count += 0.035 per frame
- Canvas opacity: 0.55
- Uses requestAnimationFrame loop
- Handles window resize (retina: canvas.width = offsetWidth * 2)
- Cleanup: cancelAnimationFrame + removeEventListener on unmount
```

### 2. `Spotlight.jsx` — SVG light cone for Hero

An SVG element that creates a large gaussian-blurred ellipse casting a light cone.

```
Specs:
- Positioned absolute, top: -30%, left: -10%, width: 130%, height: 160%
- Uses an ellipse with fill="rgba(0,210,190,0.1)" and feGaussianBlur stdDeviation=151
- Fades in with CSS animation: opacity 0 → 1 over 1.5s ease, delayed 0.4s
```

### 3. `GlowCard.jsx` — Cursor-tracking glowing border card

A card wrapper that renders an Aceternity-style conic-gradient border that rotates to track the mouse cursor.

```
Specs:
- Outer wrapper: padding 1.5px, border-radius 20px
- Background: conic-gradient(from var(--angle), transparent 40%, rgba(accent, calc(0.5 * var(--active))) 50%, transparent 60%)
- --angle: updated via pointermove event listener on document (calculates Math.atan2 from mouse to card center)
- --active: 1 when mouse is within 80px proximity, 0 otherwise
- Inner card: border-radius 19px, background rgba(8, 12, 20, 0.92), backdrop-filter blur(20px)
- Cursor glow overlay: radial-gradient(500px circle at var(--gx) var(--gy), rgba(accent, 0.06), transparent 45%), opacity tied to --active
- Hover: translateY(-3px) + box-shadow rgba(accent, 0.06)
- Accepts `accent` prop (boolean) — true uses cyan, false uses muted gray
- Event listener attached to document.pointermove (passive), cleaned up on unmount
```

### 4. `SectionHeader.jsx` — Reusable section title with node indicator

```
Specs:
- Flex row: [10px cyan glowing dot] + [h2 title] + [gradient line to transparent]
- Dot: background #00d2be, box-shadow 0 0 12px rgba(0,210,190,0.3)
- Line: linear-gradient(90deg, border-color, transparent), height 1px, flex: 1
- Uses scroll reveal (fade up 24px, 0.7s ease)
- margin-bottom: 48px
```

### 5. `useReveal.js` — Scroll reveal hook

```
Specs:
- Uses IntersectionObserver with configurable threshold (default 0.12)
- Returns { ref, visible }
- Once visible, disconnects observer (one-time reveal)
- Used by wrapping elements: opacity 0→1, translateY(20-28px → 0), transition 0.6-0.7s cubic-bezier(0.16,1,0.3,1)
```

### 6. `Counter.jsx` — Animated number counter

```
Specs:
- Props: end (number), prefix (string), suffix (string), duration (ms, default 1500)
- Uses useReveal(0.3) to trigger on scroll
- requestAnimationFrame loop with easeOutQuart: 1 - Math.pow(1 - progress, 4)
- Displays: prefix + currentValue + suffix
```

### 7. SVG Icon components (replace ALL emojis)

Create icon components or use Lucide React icons:
```
- Strategy icon: BookOpen (open book with pages)
- Impact icon: Activity (pulse/heartbeat line)
- Team icon: Users (multiple people silhouettes)
- Full Stack icon: Zap (lightning bolt)
```

Each icon sits in a container:
```
width: 40px, height: 40px, border-radius: 10px
background: rgba(0, 210, 190, 0.06)
border: 1px solid rgba(0, 210, 190, 0.12)
Icon color: var(--color-accent)
Icon size: 20px
```

---

## Section-by-Section Modifications

### NAVBAR → Floating Glass Pill (centered)

**Remove:** Full-width fixed bar with `bg-background/80`
**Replace with:**
- Centered floating pill, position fixed, border-radius 60px
- Background: `rgba(8,12,20, scrolled ? 0.88 : 0.5)` — darkens on scroll
- `backdrop-filter: blur(24px) saturate(1.5)`
- Border: `1px solid rgba(0,210,190, scrolled ? 0.1 : 0.04)`
- On scroll: shrinks padding (16px → 8px), gains box-shadow
- Logo "AM": Sora, 15px, 700 weight, color accent
- Vertical divider: 1px × 14px, border color
- Nav links: IBM Plex Sans, 11.5px, 500 weight, uppercase, letter-spacing 0.05em, muted color
- Hover: color → accent, background → rgba(accent, 0.06), border-radius 50px
- Transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1)
- Remove hamburger mobile menu (for now) — nav pill handles responsiveness with gap reduction

### HERO → Split Layout with Impact Dashboard

**Remove:** Centered text-only layout
**Replace with:**
- `display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 56px; align-items: center`
- **Left column:**
  - Status badge (glass pill): pulsing green dot + "Building Intelligent Systems" text
  - Eyebrow: "Data Science Leader · AI/ML Architect" — uppercase, muted, IBM Plex Sans 12px
  - Name: "Anup" (Sora 700, white) + "Meshram" (Sora 300, gradient text)
  - Subtitle paragraph (unchanged content, new styling)
  - CTA buttons: primary = gradient background (accent → accent2), secondary = glass with border
  - **Staggered entrance animation:** Each element delays 130ms more than previous, translateY(28px) → 0, opacity 0→1, 0.85s cubic-bezier(0.16,1,0.3,1)
- **Right column:**
  - GlowCard containing "Impact Dashboard"
  - Large "$100M+" Counter with gradient text
  - 3-column sub-metrics grid (350M Users Profiled, 95% AML Automated, $87M Spend Averted) — each with Counter
  - Mini bar chart (12 bars, heights representing impact trajectory 2015-2026)
  - Floating chip "Currently at Ouro Inc." positioned absolute top-right
- **Background layers (absolute positioned, behind content):**
  - DottedWaveSurface (z-index 0)
  - Spotlight SVG (z-index 0)
  - Radial gradient orb: 50vw circle, top-right, rgba(accent, 0.05), blur 60px

### ABOUT → Description + 2×2 Glowing Bento Grid

**Remove:** Centered paragraph + bullet list with accent dots
**Replace with:**
- SectionHeader "About"
- Shorter paragraph (keep content, restyle)
- 2×2 grid of GlowCards, each containing:
  - SVG icon in styled container (40×40, rounded, tinted background)
  - Title (Sora, 18px, 700)
  - Description (IBM Plex Sans, 13.5px, muted)
  - minHeight: 200px, padding: 28px 26px
  - Each card uses scroll reveal with 100ms stagger

Content for 4 cards:
1. **AI/ML Strategy** — "3-year roadmaps with C-suite, transforming operations through GenAI & Agentic AI systems across Fintech, Cloud, and Media."
2. **$100M+ Impact** — "Cumulative business value driven through production AI/ML initiatives — from anomaly detection to customer profiling at scale."
3. **Team Builder** — "Scaled data science organizations from 1 to 5+ members with MLOps best practices and 60% faster model-to-production cycles."
4. **Full Stack AI** — "End-to-end: anomaly detection on 100Bn logs/day, time-series forecasting 1.2T data points, rec engines serving 20M+ users."

### EXPERIENCE → GlowCard Timeline

**Remove:** Vertical timeline with dot markers and uniform cards
**Replace with:**
- SectionHeader "Experience"
- Vertical stack of GlowCards (gap: 16px)
- Each card uses: `display: grid; grid-template-columns: 180px 1fr; gap: 28px`
- **Left column:** dates (12px, accent color for current), "Current" badge for current role
- **Right column:** company name (Sora 20px, 700) + subtitle + role + bullets
- **Current role:** GlowCard with `accent={true}`, left edge gradient bar (2.5px, accent → transparent), dates in accent color
- **Past roles:** GlowCard with `accent={false}` (muted gray glow)
- Metrics in bullets highlighted: `color: var(--color-accent); font-weight: 600`
- Each card: scroll reveal with 100ms stagger per card

### PROJECTS → Keep existing tab structure, wrap cards in GlowCard

- Replace flat cards with GlowCards
- Metric values should use Counter component
- Tab switcher: replace underline tabs with sliding-pill indicator (active tab gets background rgba(accent, 0.06), border 1px solid rgba(accent, 0.15), border-radius 50px)

### SKILLS → Dual-direction Marquee Ribbons

**Remove:** 3-column grid with static pill badges
**Replace with:**
- Section bordered top/bottom with border-color
- Two rows of horizontally scrolling badges
- Row 1: scrolls left (animation: 36s linear infinite)
- Row 2: scrolls right (animation: 41s linear infinite)
- Each badge: padding 9px 20px, border-radius 50px, IBM Plex Sans 12px
- **Highlighted skills** (Generative AI, Agentic AI, LLMs, RAG): color accent, background rgba(accent, 0.06), border 1px solid rgba(accent, 0.15), font-weight 600
- **Other skills:** muted color, nearly transparent background/border
- Triple the items in each row ([...items, ...items, ...items]) for seamless loop
- CSS keyframes: `translateX(0) → translateX(-33.33%)` and reverse

### EDUCATION → Keep existing structure, apply GlowCard + scroll reveal

- Wrap each education/cert card in GlowCard
- Apply scroll reveal with stagger

### CONTACT → Clean CTA with node indicator

- SectionHeader "Contact" (but omit the gradient line, center-aligned)
- Center: 48×48 glass container with pulsing cyan dot
- Heading: "Let's build the **future**" where "future" is gradient text
- Subtitle paragraph
- Two CTA buttons matching hero style (primary gradient, secondary glass)
- Scroll reveal

### FOOTER → Minimal

- Flex row: "© 2026 Anup Meshram" left, "Designed with intelligence." right
- IBM Plex Sans, 11px, muted color
- Border top: border-color

---

## Global Animation Patterns

### Scroll Reveal (apply to ALL sections)
```css
/* Default hidden state */
opacity: 0;
transform: translateY(20-28px);

/* Revealed state */
opacity: 1;
transform: translateY(0);
transition: all 0.6-0.7s cubic-bezier(0.16, 1, 0.3, 1);
```

### Hero Entrance (staggered)
```
Each element delays 130ms more than previous.
Starting delay: 250ms.
Duration: 0.85s
Easing: cubic-bezier(0.16, 1, 0.3, 1)
```

### Hover States (cards)
```css
transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease;
/* on hover: */
transform: translateY(-3px);
box-shadow: 0 12px 40px rgba(0, 210, 190, 0.06);
```

### Hover States (buttons)
```css
transform: translateY(-2px);
box-shadow: 0 8px 30px rgba(0, 210, 190, 0.3); /* primary */
border-color: rgba(0, 210, 190, 0.25); /* secondary */
```

### Pulsing Dot
```css
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.8); }
}
animation: pulse 2.5s ease-in-out infinite;
```

---

## Dependency Changes

### Add:
- `lucide-react` — for SVG icons (BookOpen, Activity, Users, Zap, etc.)

### No new heavy dependencies needed
- DottedWaveSurface uses native Canvas API
- GlowCard uses native CSS conic-gradient + pointermove events
- Counter uses native requestAnimationFrame
- Scroll reveals use native IntersectionObserver

---

## File Changes Summary

| File | Action |
|------|--------|
| `index.html` | Update Google Fonts link to Sora + IBM Plex Sans |
| `src/index.css` or Tailwind config | Update all CSS custom property values per new color/font tokens |
| `src/components/Navbar.jsx` | Complete rewrite → floating glass pill |
| `src/components/Hero.jsx` | Complete rewrite → split layout with DottedWaveSurface + Impact Dashboard |
| `src/components/About.jsx` | Rewrite → paragraph + 2×2 GlowCard bento grid |
| `src/components/Experience.jsx` | Rewrite → GlowCard stack with grid layout per card |
| `src/components/Skills.jsx` | Rewrite → dual marquee ribbons |
| `src/components/Projects.jsx` | Modify → wrap cards in GlowCard, add Counter to metrics, update tab style |
| `src/components/Education.jsx` | Modify → wrap in GlowCard, add scroll reveal |
| `src/components/Contact.jsx` | Rewrite → centered CTA with node indicator + gradient heading |
| `src/components/Footer.jsx` | Simplify → two-line minimal footer |
| `src/components/ui/DottedWaveSurface.jsx` | **NEW** — animated canvas dot wave |
| `src/components/ui/Spotlight.jsx` | **NEW** — SVG spotlight effect |
| `src/components/ui/GlowCard.jsx` | **NEW** — cursor-tracking glowing border card |
| `src/components/ui/SectionHeader.jsx` | **NEW** — section title with node dot |
| `src/components/ui/Counter.jsx` | **NEW** — animated number counter |
| `src/hooks/useReveal.js` | **NEW** — IntersectionObserver scroll reveal hook |

---

## Critical Constraints

1. **NO CONTENT CHANGES** — All text, metrics, company names, bullet points, project descriptions remain identical
2. **NO PURPLE** — The accent color is cyan/teal (#00d2be), NOT purple, NOT stock Tailwind blue
3. **NO EMOJIS** — Use Lucide React SVG icons exclusively
4. **NO HEAVY DEPENDENCIES** — No Three.js, no Framer Motion, no Spline. Everything is native Canvas/CSS/IntersectionObserver
5. **MOBILE RESPONSIVE** — Grid layouts should collapse to single column on mobile. Marquee ribbons work at any width. Nav pill reduces gap on small screens.
6. **PERFORMANCE** — Canvas animation uses requestAnimationFrame with cleanup. GlowCard pointermove listener is passive. IntersectionObserver disconnects after trigger.

---

## Reference

The complete working prototype is available as `anupmeshram-v4.jsx` in the project. Use it as the source of truth for exact spacing values, color codes, animation timings, and component behavior. Every pixel-level decision is encoded there.
