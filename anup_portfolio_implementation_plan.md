# Anup Meshram Portfolio – Claude Code Implementation Plan

## Project Overview

Build a single-page, dark-themed portfolio website for Anup Meshram, a Data Science Leader with 11+ years of experience.

**Tech Stack:**
- React + Vite
- Tailwind CSS
- Hosting: AWS S3 + CloudFront
- Domain: anupmeshram.com

---

## Step 1: Project Setup

```bash
npm create vite@latest anup-portfolio -- --template react
cd anup-portfolio
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Tailwind Config (tailwind.config.js)

```js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: '#0D0D0D',
        surface: '#1F1F1F',
        'surface-light': '#262626',
        'text-primary': '#F5F5F5',
        'text-secondary': '#A3A3A3',
        accent: '#3B82F6',
        'accent-hover': '#2563EB',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        'content': '1200px',
      },
    },
  },
  plugins: [],
}
```

### Global CSS (src/index.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

html {
  scroll-behavior: smooth;
}

body {
  @apply bg-background text-text-primary font-sans;
}
```

---

## Step 2: Project Structure

```
src/
├── components/
│   ├── Nav.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/
│   └── content.js
├── App.jsx
├── index.css
└── main.jsx
```

---

## Step 3: Content Data (src/data/content.js)

```js
export const hero = {
  name: "Anup Meshram",
  title: "Data Science Leader",
  subheadline: "11+ years driving multimillion-dollar impact across Fintech, Cloud, and Media. Building Generative AI, Agentic AI, and ML applications that transform businesses.",
  primaryCTA: { text: "View Experience", href: "#experience" },
  secondaryCTA: { text: "Explore Projects", href: "#projects" },
};

export const about = {
  paragraph: "I lead data science teams that deliver production-grade AI/ML systems driving real business impact. Over 11+ years, I've built and scaled teams, partnered with C-suite executives on AI/ML strategy, and shipped solutions—from Agentic AI platforms to recommendation engines—that have generated measurable revenue and operational efficiency gains across Fintech, Cloud, and Media industries.",
  highlights: [
    "Built and scaled data science teams from 1 to 5+ members with MLOps best practices",
    "Drove $100M+ in cumulative business impact through AI/ML initiatives",
    "Partnered with C-suite to define 3-year AI/ML roadmaps and strategy",
    "Expertise spanning Generative AI, Agentic AI, and traditional ML applications",
  ],
  photoPlaceholder: true, // Set to image URL when ready
};

export const experience = [
  {
    company: "Ouro Inc.",
    companyNote: "Previously NetSpend",
    role: "Data Science Leader, Innovation",
    dates: "Aug 2024 – Present",
    location: "Austin, TX",
    bullets: [
      "Lead, mentor, and scale a 5-member data science org; partner strategically with C-suite on 3-year AI/ML roadmap",
      "Launched AI-driven customer-profiling engine for 350M users; increased retention by 23% and uncovered $28M incremental revenue",
      "Built Agentic-AI Anti-Money Laundering platform: automated 95% of alerts, cut MTTR to <10 min, saved $5M+/yr",
      "Deployed agentic RAG assistant (lifted CSAT 18 pts) and automated 99% CTR filings (saving $92K+/mo & mitigating $25M risk)",
    ],
  },
  {
    company: "Amazon Web Services (AWS)",
    role: "Data Science Lead",
    dates: "Mar 2020 – Aug 2024",
    location: "Austin, TX",
    bullets: [
      "Owned ML strategy and product roadmap for AWS Cloud Management & CloudTrail, core services driving $1.5B annual revenue",
      "Developed GenAI auto-remediation platform, resolving 65% of cloud issues in <15 min, averting $87M potential annual spend",
      "Implemented time-series forecasting (1.2T daily data points): cut error rate from 15% to 5.8%, adding $55M ARR",
      "Built ML anomaly detection pipeline analyzing >100Bn CloudTrail logs/day, achieving 97.96% precision",
      "Grew data science team from 1 to 4 scientists; reduced model-to-production lifecycle by 60%",
    ],
  },
  {
    company: "NBC Universal",
    role: "Senior Data Scientist",
    dates: "Nov 2015 – Mar 2020",
    location: "New York City",
    bullets: [
      "Developed ML-powered viewer ratings forecasting, improving accuracy by 65% and reducing delivery from 90 days to <1 hour",
      "Engineered audience segmentation models, improving ad targeting precision by 20% and delivering $32M incremental revenue in 6 months",
      "Co-designed two-tower recommendation engine for Peacock Streaming; lifted content consumption up to 33% across 20M streams",
    ],
  },
  {
    company: "SS&C GlobeOp",
    role: "Associate Fund Analytics",
    dates: "Jun 2011 – May 2013",
    location: "",
    bullets: [
      "Developed quantitative models for hedge fund analytics including NAV validation",
      "Built custom security screening algorithms using Bloomberg API",
    ],
  },
];

export const projects = [
  {
    title: "Agentic AI Anti-Money Laundering Platform",
    company: "Ouro Inc.",
    problem: "Manual AML alert processing was slow, expensive, and couldn't scale for a fintech serving underbanked consumers.",
    approach: "Built an Agentic AI platform that autonomously investigates and triages AML alerts using LLMs and reasoning chains.",
    metrics: [
      { value: "95%", label: "alerts automated" },
      { value: "<10 min", label: "MTTR" },
      { value: "$5M+", label: "annual savings" },
    ],
  },
  {
    title: "GenAI Auto-Remediation Platform",
    company: "AWS",
    problem: "Cloud issues required manual investigation and resolution, causing delays and potential revenue loss.",
    approach: "Developed a GenAI-based platform that automatically diagnoses and remediates cloud infrastructure issues.",
    metrics: [
      { value: "65%", label: "issues auto-resolved" },
      { value: "<15 min", label: "resolution time" },
      { value: "$87M", label: "spend averted annually" },
    ],
  },
  {
    title: "AI-Driven Customer Profiling Engine",
    company: "Ouro Inc.",
    problem: "Needed deeper understanding of 350M users to improve retention and identify revenue opportunities.",
    approach: "Launched AI-driven profiling engine combining behavioral analytics, transaction patterns, and predictive modeling.",
    metrics: [
      { value: "350M", label: "users profiled" },
      { value: "23%", label: "retention increase" },
      { value: "$28M", label: "incremental revenue" },
    ],
  },
  {
    title: "Two-Tower Recommendation Engine",
    company: "NBC Universal (Peacock)",
    problem: "Legacy recommendations couldn't personalize content effectively for streaming viewers.",
    approach: "Co-designed two-tower neural network architecture for personalized content recommendations at scale.",
    metrics: [
      { value: "33%", label: "consumption lift" },
      { value: "20M", label: "streams served" },
    ],
  },
  {
    title: "Time-Series Forecasting at Scale",
    company: "AWS",
    problem: "Cloud resource forecasting had 15% error rate, impacting customer planning and AWS revenue.",
    approach: "Implemented advanced time-series forecasting models processing 1.2 trillion daily data points.",
    metrics: [
      { value: "1.2T", label: "daily data points" },
      { value: "61%", label: "error reduction" },
      { value: "$55M", label: "ARR added" },
    ],
  },
  {
    title: "Anomaly Detection Pipeline",
    company: "AWS CloudTrail",
    problem: "Detecting security and operational anomalies across massive log volumes was challenging.",
    approach: "Built ML-based anomaly detection pipeline to analyze CloudTrail logs at scale.",
    metrics: [
      { value: "100Bn+", label: "logs analyzed daily" },
      { value: "97.96%", label: "precision" },
    ],
  },
];

export const skills = {
  "Leadership & Strategy": [
    "AI/ML Strategy & Roadmap",
    "Team Leadership & Mentorship",
    "Stakeholder Management",
    "Cross-functional Collaboration",
  ],
  "Generative & Agentic AI": [
    "Generative AI",
    "Agentic AI Systems",
    "RAG",
    "LLMs",
    "LangGraph",
  ],
  "Data Science & ML": [
    "Predictive Analytics",
    "Time-Series Forecasting",
    "Anomaly Detection",
    "Recommendation Engines",
    "Customer Segmentation",
    "Churn Prediction",
  ],
  "Engineering & MLOps": [
    "MLOps",
    "MLFlow",
    "CI/CD",
    "Python",
    "SQL",
    "Scalable AI Solutions",
  ],
  "Cloud & Industry": [
    "AWS",
    "Fintech",
    "Media & Entertainment",
  ],
};

export const contact = {
  headline: "Let's Connect",
  context: "Interested in discussing data science, AI/ML strategy, or potential collaborations.",
  linkedin: "https://linkedin.com/in/anupmeshram",
  email: "anup.meshram@gmail.com",
};
```

---

## Step 4: Component Specifications

### Nav.jsx
- Sticky header with blur backdrop
- Logo/Name on left: "AM" or "Anup Meshram"
- 5 nav links on right: About · Experience · Projects · Skills · Contact
- Mobile: Hamburger menu → full-screen overlay
- Active section highlight via scroll spy (optional for V1)

### Hero.jsx
- Centered content, max-width 800px
- Name: 56px, font-weight 700
- Title: 22px, text-secondary color
- Subheadline: 18px, max-width 600px, text-secondary
- Two buttons: Primary (accent bg) + Secondary (ghost/outline)
- Padding: 140px top/bottom
- Subtle scroll indicator at bottom (optional)

### About.jsx
- Section heading: "About" (36px, font-weight 600)
- Two-column layout on desktop: Photo placeholder (left) + Text (right)
- Photo placeholder: 280x280px rounded square, surface background, icon or initials
- Paragraph: 17px, max-width for readability
- Bullet highlights: 4 items with subtle accent marker
- Mobile: Stack vertically, photo on top

### Experience.jsx
- Section heading: "Experience"
- Vertical timeline with line on left (desktop)
- Each entry: Company (22px bold) · Role · Dates (muted) · Location · Bullets
- Bullets with subtle left border or dot marker
- Mobile: No timeline line, simplified cards

### Projects.jsx
- Section heading: "Projects & Impact"
- 2-column grid (desktop), 1-column (mobile)
- Card structure:
  - Title (22px bold)
  - Company tag (14px, muted)
  - Problem + Approach (16px)
  - Metrics row: Bold accent-colored values + labels
- Card: surface background, subtle border, 24px padding, 10px radius
- Hover: Slight elevation or border color shift

### Skills.jsx
- Section heading: "Skills"
- 5 cluster groups
- Each cluster: Heading (18px, semi-bold) + row of chips
- Chips: surface-light background, 10px horizontal padding, 6px vertical, rounded-full, 14px text

### Contact.jsx
- Section heading: "Let's Connect"
- Context line (text-secondary)
- Two buttons/links: LinkedIn (primary) + Email (secondary/ghost)
- Centered layout
- Icons for LinkedIn and Email

### Footer.jsx
- Simple: Name + year + icon links (LinkedIn, Email)
- Muted text, small font
- Max-width content, centered

---

## Step 5: Visual Specifications

### Colors (Tailwind classes)
- bg-background: #0D0D0D
- bg-surface: #1F1F1F
- bg-surface-light: #262626
- text-text-primary: #F5F5F5
- text-text-secondary: #A3A3A3
- bg-accent / text-accent: #3B82F6
- hover:bg-accent-hover: #2563EB

### Typography
| Element | Class |
|---------|-------|
| Hero Name | text-5xl md:text-6xl font-bold |
| Hero Title | text-xl md:text-2xl text-text-secondary |
| Section Heading | text-3xl md:text-4xl font-semibold |
| Card Title | text-xl md:text-2xl font-semibold |
| Body | text-base md:text-lg |
| Caption | text-sm text-text-secondary |

### Spacing
- Section padding: py-20 md:py-28
- Content max-width: max-w-content (1200px)
- Horizontal padding: px-6 md:px-20
- Card padding: p-6
- Gap between cards: gap-6

### Components
- Primary Button: `bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-medium transition`
- Ghost Button: `border border-accent text-accent hover:bg-accent/10 px-6 py-3 rounded-lg font-medium transition`
- Card: `bg-surface border border-white/10 rounded-xl p-6 hover:border-accent/50 transition`
- Chip: `bg-surface-light px-3 py-1.5 rounded-full text-sm`

---

## Step 6: Responsive Breakpoints

- Mobile: < 768px (default)
- Tablet: md (768px+)
- Desktop: lg (1024px+)

Key responsive changes:
- Nav: Hamburger on mobile
- Hero: Reduce font sizes
- About: Stack photo + text vertically
- Experience: Remove timeline line on mobile
- Projects: 1-column on mobile, 2-column on md+
- Skills: Chips wrap naturally

---

## Step 7: Build Order

1. Setup project + Tailwind config
2. Create content.js with all data
3. Build App.jsx shell with section containers
4. Nav component (with mobile menu)
5. Hero component
6. About component (with photo placeholder)
7. Experience component (timeline)
8. Projects component (cards grid)
9. Skills component (chip clusters)
10. Contact component
11. Footer component
12. Polish: Smooth scroll, hover states, transitions
13. Test responsive breakpoints
14. Build for production
15. Deploy to AWS S3 + CloudFront

---

## Step 8: AWS Deployment

### S3 Setup
```bash
# Build production
npm run build

# Create S3 bucket (if not exists)
aws s3 mb s3://anupmeshram.com

# Configure for static website hosting
aws s3 website s3://anupmeshram.com --index-document index.html --error-document index.html

# Upload build files
aws s3 sync dist/ s3://anupmeshram.com --delete
```

### CloudFront Setup
1. Create CloudFront distribution
2. Origin: S3 bucket
3. Enable HTTPS with ACM certificate for anupmeshram.com
4. Set default root object: index.html
5. Configure error pages to redirect to index.html (for SPA routing)

### Route 53
1. Create A record for anupmeshram.com
2. Alias to CloudFront distribution
3. Create www subdomain redirect (optional)

---

## Acceptance Criteria

- [ ] All 6 sections render correctly
- [ ] Navigation smooth-scrolls to sections
- [ ] Mobile hamburger menu works
- [ ] All content from resume is displayed
- [ ] Metrics are visually prominent (accent color, bold)
- [ ] Photo placeholder shows in About section
- [ ] Responsive on mobile, tablet, desktop
- [ ] Color contrast meets WCAG AA
- [ ] Deploys successfully to anupmeshram.com
