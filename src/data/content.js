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
  subheadline: "12+ years building production AI systems that operate at scale — from agentic platforms that investigate financial crime to GenAI engines that remediate cloud infrastructure and recommendation systems serving millions of users.",
  primaryCTA: { text: "View Experience", href: "#experience" },
  secondaryCTA: { text: "Explore Projects", href: "#projects" },
};

export const about = {
  paragraph: "I build AI systems that reason, decide, and act on their own. I also lead the teams that bring them to production at scale. Over 12+ years, I've designed autonomous AI platforms, partnered with C-suite executives on enterprise AI strategy, and shipped intelligent systems that delivered multimillion-dollar measurable business impact across Fintech, Cloud, and Media.",
  highlights: [
    "Designed and shipped production AI platforms at enterprise scale — agentic reasoning engines, GenAI remediation systems, and deep learning recommendation systems",
    "Impact measured by what ships: revenue generated, costs eliminated, and risk mitigated — multimillion-dollar cumulative value across three industries",
    "Scaled AI and data science organizations from the ground up, establishing MLOps pipelines that more than halved model-to-production time",
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
      "Lead a team of AI & data science professionals; partner with C-suite to define and execute a multi-year enterprise AI strategy",
      "Built an AI customer-profiling engine that segments and scores the customer base in real time, driving a double-digit retention lift and multimillion-dollar incremental revenue",
      "Built an Agentic AI platform for AML investigations that uses multi-step reasoning to triage most alerts independently in minutes, cutting investigation cost and turnaround substantially",
      "Deployed a RAG-powered internal assistant that measurably improved support quality, and a compliance-automation system that handles the bulk of regulatory filings without manual intervention — eliminating substantial manual effort and compliance risk",
    ],
  },
  {
    company: "Amazon Web Services (AWS)",
    role: "AI & Data Science Lead",
    dates: "Mar 2020 – Aug 2024",
    location: "Austin, TX",
    bullets: [
      "Defined the AI/ML strategy and product roadmap for AWS Cloud Management & CloudTrail — services used by enterprises worldwide",
      "Built a GenAI auto-remediation platform that diagnoses and resolves a majority of common cloud-infrastructure issues in minutes, averting significant operational spend",
      "Built predictive forecasting systems over very large-scale telemetry, more than halving forecast error and driving significant ARR",
      "Architected an AI-powered anomaly-detection system operating over tens of billions of events per day at high precision",
      "Scaled the AI & data science team from 1 to 4; established MLOps practices that more than halved model-to-production time",
    ],
  },
  {
    company: "NBC Universal",
    role: "Senior Data Scientist",
    dates: "Nov 2015 – Mar 2020",
    location: "New York City",
    bullets: [
      "Built an ML-powered predictive system for viewer ratings — substantially improving accuracy and compressing delivery from months to under an hour",
      "Engineered an intelligent audience-segmentation system, improving ad-targeting precision by double digits and delivering multimillion-dollar incremental revenue",
      "Co-architected a two-tower neural recommendation engine for Peacock Streaming — lifting content consumption by roughly a third across millions of streams",
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
      { value: "Most", label: "alerts auto-triaged" },
      { value: "Minutes", label: "resolution time" },
      { value: "7-figure", label: "annual savings" },
    ],
  },
  {
    title: "GenAI Auto-Remediation Platform",
    company: "AWS",
    problem: "Cloud infrastructure failures required manual diagnosis by engineers — every minute of downtime risked customer revenue and SLA breaches.",
    approach: "Built a GenAI auto-remediation system that diagnoses root causes, generates fix plans, and executes repairs end-to-end, reducing human intervention from hours to zero for the majority of incidents.",
    metrics: [
      { value: "Majority", label: "issues auto-resolved" },
      { value: "Minutes", label: "resolution time" },
      { value: "8-figure", label: "annual spend averted" },
    ],
  },
  {
    title: "AI-Driven Customer Profiling Engine",
    company: "Netspend",
    problem: "Across a large customer base generating billions of transactions, static segmentation couldn't capture evolving customer behavior or surface revenue opportunities in real time.",
    approach: "Designed an AI profiling engine that adapts to evolving behavioral signals, transaction patterns, and contextual indicators, scoring and segmenting customers at scale in real time.",
    metrics: [
      { value: "Real-time", label: "behavioral scoring" },
      { value: "Double-digit", label: "retention lift" },
      { value: "8-figure", label: "incremental revenue" },
    ],
  },
  {
    title: "Two-Tower Recommendation Engine",
    company: "NBC Universal (Peacock)",
    problem: "Legacy recommendations couldn't personalize content effectively for streaming viewers.",
    approach: "Co-architected a two-tower neural network that independently encodes user preferences and content features, enabling real-time personalized recommendations across Peacock's large streaming catalog.",
    metrics: [
      { value: "~⅓", label: "consumption lift" },
      { value: "Millions", label: "streams served" },
    ],
  },
  {
    title: "Time-Series Forecasting at Scale",
    company: "AWS",
    problem: "Cloud resource forecasting carried a high error rate, impacting customer planning and platform efficiency.",
    approach: "Built a forecasting pipeline ingesting very large-scale daily telemetry to predict cloud resource demand with production-grade reliability.",
    metrics: [
      { value: "Trillions", label: "daily data points" },
      { value: "Halved+", label: "forecast error" },
      { value: "8-figure", label: "ARR added" },
    ],
  },
  {
    title: "Anomaly Detection Pipeline",
    company: "AWS CloudTrail",
    problem: "Detecting security and operational anomalies across massive log volumes was challenging.",
    approach: "Architected an AI-powered anomaly detection system that continuously monitors tens of billions of CloudTrail events per day, identifying security and operational threats at high precision.",
    metrics: [
      { value: "Billions", label: "events analyzed daily" },
      { value: "~98%", label: "precision" },
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
