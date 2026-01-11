import { useState } from 'react';
import { projects } from '../data/content';
import { Section, SectionTitle } from './ui/Section';

const independentProjects = [
  {
    title: "Project Coming Soon",
    tag: "Independent · 2024",
    description: "Details coming soon.",
    tech: ["Python", "LangChain", "FastAPI"],
    demoUrl: null,
    githubUrl: null,
  },
  {
    title: "Project Coming Soon",
    tag: "Exploration · 2024",
    description: "Details coming soon.",
    tech: ["LangGraph", "GPT-4", "React"],
    demoUrl: null,
    githubUrl: null,
  },
  {
    title: "Project Coming Soon",
    tag: "Independent · 2024",
    description: "Details coming soon.",
    tech: ["Python", "AWS", "Streamlit"],
    demoUrl: null,
    githubUrl: null,
  },
];

function ExternalLinkIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function GitHubIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function ProfessionalCard({ project }) {
  return (
    <div className="bg-surface border border-white/10 rounded-xl p-6 hover:border-accent/50 transition-colors">
      <div className="mb-4">
        <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-1">
          {project.title}
        </h3>
        <span className="text-sm text-text-secondary">
          {project.company}
        </span>
      </div>

      <div className="space-y-3 mb-6">
        <div>
          <span className="text-sm font-medium text-accent">Problem: </span>
          <span className="text-text-secondary text-sm">{project.problem}</span>
        </div>
        <div>
          <span className="text-sm font-medium text-accent">Approach: </span>
          <span className="text-text-secondary text-sm">{project.approach}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
        {project.metrics.map((metric, metricIndex) => (
          <div key={metricIndex} className="bg-accent/10 border border-accent/20 rounded-lg px-4 py-3 text-center min-w-[100px]">
            <div className="text-2xl md:text-3xl font-bold text-accent">
              {metric.value}
            </div>
            <div className="text-xs text-text-secondary mt-1">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function IndependentCard({ project }) {
  const isDisabled = !project.demoUrl && !project.githubUrl;

  return (
    <div className="bg-surface border border-white/10 rounded-xl p-6 hover:border-accent/50 transition-colors">
      <h3 className="text-[22px] font-semibold text-text-primary mb-1">
        {project.title}
      </h3>
      <p className="text-sm text-text-secondary mb-3">
        {project.tag}
      </p>
      <p className="text-base text-text-secondary mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-surface-light text-text-secondary text-xs rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 pt-4 border-t border-white/10">
        <button
          disabled={isDisabled}
          className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
            isDisabled
              ? 'text-text-secondary/50 cursor-not-allowed'
              : 'text-accent hover:underline cursor-pointer'
          }`}
        >
          <ExternalLinkIcon className="w-4 h-4" />
          Live Demo
        </button>
        <button
          disabled={isDisabled}
          className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
            isDisabled
              ? 'text-text-secondary/50 cursor-not-allowed'
              : 'text-accent hover:underline cursor-pointer'
          }`}
        >
          <GitHubIcon className="w-4 h-4" />
          GitHub
        </button>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState('professional');

  const tabs = [
    { id: 'professional', label: 'Professional' },
    { id: 'independent', label: 'Independent Work & Explorations' },
  ];

  return (
    <Section id="projects">
      <SectionTitle>Projects & Impact</SectionTitle>

      {/* Tabs */}
      <div className="flex gap-8 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-base font-medium pb-2 transition-colors cursor-pointer ${
              activeTab === tab.id
                ? 'text-text-primary border-b-2 border-accent'
                : 'text-text-secondary hover:text-text-primary/80'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="transition-opacity duration-200">
        {activeTab === 'professional' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {projects.map((project, index) => (
              <ProfessionalCard key={index} project={project} />
            ))}
          </div>
        )}

        {activeTab === 'independent' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {independentProjects.map((project, index) => (
              <IndependentCard key={index} project={project} />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
