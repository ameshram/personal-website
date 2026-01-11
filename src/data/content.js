export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const companyLogos = {
  'Amazon Web Services (AWS)': '/logos/aws.svg',
  'Ouro Inc.': '/logos/ouro.svg',
  'NBC Universal': '/logos/nbc.svg',
  'SS&C GlobeOp': null,
};

export const highlightedSkills = [
  'Generative AI',
  'Agentic AI Systems',
  'AI/ML Strategy & Roadmap',
  'Team Leadership & Mentorship',
  'LLMs',
  'RAG',
];

export const hero = {
  name: "Anup Meshram",
  title: "Data Science Leader",
  subheadline: "11+ years shipping production AI/ML systems. Built cloud management products at AWS, autonomous AI agents in Fintech, and recommendation engines serving 20M+ users in Media.",
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
  photoPlaceholder: true,
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
