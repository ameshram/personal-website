export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const companyLogos = {
  'Amazon Web Services (AWS)': '/logos/aws.svg',
  'Netspend': '/logos/ouro.svg',
  'NBC Universal': '/logos/nbc.svg',
  'SS&C GlobeOp': null,
};

export const highlightedSkills = [
  'Agentic AI Systems',
  'Generative AI',
  'LLM Engineering',
  'RAG Systems',
  'Enterprise AI Strategy',
  'Agentic Systems',
];

export const hero = {
  name: "Anup Meshram",
  title: "AI & Data Science Leader",
  subheadline: "12+ years building production AI systems that operate at scale — from agentic platforms that investigate financial crime to GenAI engines that remediate cloud infrastructure and recommendation systems serving 20M+ users.",
  primaryCTA: { text: "View Experience", href: "#experience" },
  secondaryCTA: { text: "Explore Projects", href: "#projects" },
};

export const about = {
  paragraph: "I build AI systems that reason, decide, and act on their own. I also lead the teams that bring them to production at scale. Over 12+ years, I've designed autonomous AI platforms, partnered with C-suite executives on enterprise AI strategy, and shipped intelligent systems generating $100M+ in measurable business impact across Fintech, Cloud, and Media.",
  highlights: [
    "Designed and shipped production AI platforms at enterprise scale — agentic reasoning engines, GenAI remediation systems, and deep learning recommendation systems",
    "Impact measured by what ships: revenue generated, costs eliminated, risks mitigated. Cumulative value exceeds $100M across three industries",
    "Scaled AI and data science organizations from the ground up, establishing MLOps pipelines that cut model-to-production time by 60%",
    "Partner with C-suite leadership to define multi-year AI roadmaps — translating frontier research into production systems that transform operations",
  ],
  photoPlaceholder: true,
};

export const experience = [
  {
    company: "Netspend",
    role: "AI & Data Science Leader, Innovation",
    dates: "Aug 2024 – Present",
    location: "Austin, TX",
    bullets: [
      "Lead a team of AI & data science professionals; partner with C-suite to define and execute a 3-year enterprise AI strategy",
      "Built an AI profiling engine that segments and scores 350M users in real time, driving 23% retention lift and $28M incremental revenue",
      "Built an Agentic AI platform for AML investigations. The system uses multi-step reasoning to triage 95% of alerts independently, with under 10 min resolution, saving $5M+/yr",
      "Deployed a RAG-powered intelligent assistant (CSAT +18 pts) and a compliance automation system that handles 99% of CTR filings without manual intervention ($92K+/mo saved, $25M risk mitigated)",
    ],
  },
  {
    company: "Amazon Web Services (AWS)",
    role: "AI & Data Science Lead",
    dates: "Mar 2020 – Aug 2024",
    location: "Austin, TX",
    bullets: [
      "Defined the AI/ML strategy and product roadmap for AWS Cloud Management & CloudTrail — core services driving $1.5B annual revenue",
      "Built a GenAI auto-remediation platform that diagnoses and fixes 65% of cloud infrastructure issues in under 15 minutes, averting $87M/yr in potential spend",
      "Built predictive forecasting systems processing 1.2T daily data points, cutting error rate from 15% to 5.8% and adding $55M ARR",
      "Architected an AI-powered anomaly detection system analyzing >100Bn CloudTrail events/day at 97.96% precision",
      "Scaled the AI & data science team from 1 to 4; established MLOps practices that cut model-to-production time by 60%",
    ],
  },
  {
    company: "NBC Universal",
    role: "Senior Data Scientist",
    dates: "Nov 2015 – Mar 2020",
    location: "New York City",
    bullets: [
      "Built an ML-powered predictive system for viewer ratings — improving accuracy by 65% and compressing delivery from 90 days to under 1 hour",
      "Engineered an intelligent audience segmentation system, improving ad targeting precision by 20% and delivering $32M incremental revenue in 6 months",
      "Co-architected a two-tower neural recommendation engine for Peacock Streaming — lifting content consumption 33% across 20M+ streams",
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
    company: "Netspend",
    problem: "Manual AML investigations required human analysts to review every alert — creating bottlenecks, high costs, and compliance exposure at scale.",
    approach: "Built an Agentic AI system that investigates, triages, and escalates AML alerts without human intervention, using LLM-driven reasoning and multi-step analysis.",
    metrics: [
      { value: "95%", label: "alerts automated" },
      { value: "<10 min", label: "MTTR" },
      { value: "$5M+", label: "annual savings" },
    ],
  },
  {
    title: "GenAI Auto-Remediation Platform",
    company: "AWS",
    problem: "Cloud infrastructure failures required manual diagnosis by engineers — every minute of downtime risked customer revenue and SLA breaches.",
    approach: "Built a GenAI auto-remediation system that diagnoses root causes, generates fix plans, and executes repairs end-to-end, reducing human intervention from hours to zero for 65% of incidents.",
    metrics: [
      { value: "65%", label: "issues auto-resolved" },
      { value: "<15 min", label: "resolution time" },
      { value: "$87M", label: "spend averted annually" },
    ],
  },
  {
    title: "AI-Driven Customer Profiling Engine",
    company: "Netspend",
    problem: "With 350M users generating billions of transactions, static segmentation couldn't capture evolving customer behavior or surface revenue opportunities in real time.",
    approach: "Designed an AI profiling engine that adapts to evolving behavioral signals, transaction patterns, and contextual indicators, scoring and segmenting users at scale in real time.",
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
    approach: "Co-architected a two-tower neural network that independently encodes user preferences and content features, enabling real-time personalized recommendations across Peacock's 20M+ stream catalog.",
    metrics: [
      { value: "33%", label: "consumption lift" },
      { value: "20M", label: "streams served" },
    ],
  },
  {
    title: "Time-Series Forecasting at Scale",
    company: "AWS",
    problem: "Cloud resource forecasting had 15% error rate, impacting customer planning and AWS revenue.",
    approach: "Built a forecasting pipeline ingesting 1.2 trillion daily data points to predict cloud resource demand with production-grade reliability.",
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
    approach: "Architected an AI-powered anomaly detection system that continuously monitors >100Bn CloudTrail events per day, identifying security and operational threats with 97.96% precision.",
    metrics: [
      { value: "100Bn+", label: "logs analyzed daily" },
      { value: "97.96%", label: "precision" },
    ],
  },
];

export const skills = {
  "AI Leadership & Strategy": [
    "Enterprise AI Strategy",
    "Team Leadership & Mentorship",
    "Stakeholder Management",
    "Cross-functional Collaboration",
  ],
  "Generative & Agentic AI Systems": [
    "Generative AI",
    "Agentic AI Systems",
    "RAG Systems",
    "LLM Engineering",
    "LangGraph",
  ],
  "Applied AI & Machine Learning": [
    "Predictive Analytics",
    "Time-Series Forecasting",
    "Anomaly Detection",
    "Recommendation Engines",
    "Customer Segmentation",
    "Churn Prediction",
  ],
  "AI Engineering & MLOps": [
    "MLOps",
    "MLFlow",
    "CI/CD",
    "Python",
    "SQL",
    "Scalable AI Solutions",
  ],
  "Cloud & Domain Expertise": [
    "AWS",
    "Fintech",
    "Media & Entertainment",
  ],
};

export const education = [
  {
    degree: "MS Economics",
    university: "Texas A&M University",
    location: "College Station, TX",
  },
  {
    degree: "MBA Finance",
    university: "University of Mumbai",
    location: "Mumbai, India",
  },
  {
    degree: "BE Computer Engineering",
    university: "University of Mumbai",
    location: "Mumbai, India",
  },
];

export const certifications = [
  {
    name: "AWS Certified Machine Learning – Specialty",
    issuer: "Amazon Web Services",
    year: "2024",
  },
  {
    name: "Generative AI with Large Language Models",
    issuer: "DeepLearning.AI",
    year: "2024",
  },
];

export const contact = {
  headline: "Let's build the future",
  context: "Open to conversations about AI leadership, enterprise AI strategy, and building the next generation of intelligent systems.",
  linkedin: "https://linkedin.com/in/anupmeshram",
  email: "anup.meshram@gmail.com",
};
