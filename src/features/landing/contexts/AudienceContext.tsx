'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

export type AudienceType = 'business';

interface AudienceContextValue {
  audience: AudienceType;
  setAudience: (audience: AudienceType) => void;
  isBusinessOwner: boolean;
}

const AudienceContext = createContext<AudienceContextValue | null>(null);

interface AudienceProviderProps {
  children: ReactNode;
  defaultAudience?: AudienceType;
}

export function AudienceProvider({ children, defaultAudience = 'business' }: AudienceProviderProps) {
  const [audience, setAudience] = useState<AudienceType>(defaultAudience);

  const value: AudienceContextValue = {
    audience,
    setAudience,
    isBusinessOwner: audience === 'business',
  };

  return (
    <AudienceContext.Provider value={value}>
      {children}
    </AudienceContext.Provider>
  );
}

export function useAudience() {
  const context = useContext(AudienceContext);
  if (!context) {
    throw new Error('useAudience must be used within an AudienceProvider');
  }
  return context;
}

// Content data for the business audience
export const audienceContent = {
  business: {
    hero: {
      headline: ['The first AI agent platform', 'built for the trades.'],
      subheadline: 'Manus-level AI agents that actually know your business. HVAC, plumbing, roofing, electrical--purpose-built, not generic.',
      subtext: 'The agent revolution is here. OzziOS brings it to home services first.',
      stats: [
        { value: '30+', label: 'AI Agents' },
        { value: '24/7', label: 'Coverage' },
        { value: '$0', label: 'Overhead' },
        { value: '100%', label: 'Transparency' },
      ],
    },
    bento: {
      sectionLabel: 'Your AI Agent Team',
      headline: ['General-purpose AI fails 75% of the time.', 'Ours is built for your trade.'],
      subheadline: 'Generic agents don\'t know a service call from a sales call. Ozzi agents are trained on home services from day one.',
      cards: {
        aiWorkforce: {
          badge: 'Purpose-Built',
          title: 'Agents that know your trade',
          description: 'Not a generic chatbot with a logo slapped on it. AI agents trained on home service workflows, terminology, and customers.',
        },
        tools: {
          title: 'All your tools in one place',
          description: 'Everything you need--SEO, content, social, ads--now yours to see and control.',
        },
        communication: {
          title: 'Community & Channels',
          description: 'Host communities, forums, and private channels. Engage your customers directly in one place.',
        },
        workflows: {
          title: 'Marketing on autopilot',
          description: 'Set it and forget it. Campaigns run while you sleep. Reports arrive automatically.',
        },
        crm: {
          title: 'Deal Flow & CRM',
          description: 'Manage your pipeline and customer data. All contacts and deals in one unified view.',
        },
        marketing: {
          title: 'Every channel covered',
          description: 'Email, social, ads, SEO--all in one place. No more juggling vendors.',
        },
        multiTenant: {
          title: 'One dashboard, total control',
          description: 'See everything your marketing is doing in one place. Finally.',
        },
        security: {
          title: 'Your data stays yours',
          description: 'Your data is always yours. Always.',
        },
      },
    },
    stats: {
      sectionLabel: 'The bottom line',
      headline: ['Real savings', 'you can measure'],
      stats: [
        { value: 85, suffix: '%', label: 'Less Spent', description: 'vs. traditional marketing overhead' },
        { value: 24, suffix: '/7', label: 'Availability', description: 'No business hours' },
        { value: 100, suffix: '%', label: 'Transparency', description: 'See all the work' },
        { value: 0, suffix: '', label: 'Surprises', description: 'No hidden fees' },
      ],
      socialProof: 'Join 500+ home service companies using AI agents',
    },
    calculator: {
      defaultTab: 'overhead',
      tabs: [
        { id: 'overhead', label: 'Marketing Overhead', description: 'See what you\'re really paying for marketing that doesn\'t deliver' },
        { id: 'tools', label: 'Tool Costs', description: 'Cancel subscriptions and consolidate' },
      ],
    },
    agents: {
      sectionLabel: 'Your AI Agent Team',
      headline: ['The AI agents everyone\'s talking about.', 'Now built for home services.'],
      subheadline: 'Platforms like Manus proved agents could run entire workflows. Ozzi brings that power to the trades--with agents that know your industry inside and out.',
    },
    memory: {
      sectionLabel: 'Institutional Memory',
      headline: ['Generic AI forgets you exist.', 'Ozzi never does.'],
      subheadline: 'General-purpose agents start from zero every time. Your Ozzi team remembers your brand, your services, your customers--and gets sharper with every interaction.',
      features: [
        {
          title: 'Total Brand Recall',
          description: 'Your AI team knows your brand voice, services, competitors, and preferences. Every detail, instantly accessible.',
          bullets: ['Brand guidelines always applied', 'Service details at their fingertips', 'Competitor awareness built-in'],
        },
        {
          title: 'Learns From Mistakes',
          description: 'When something goes wrong, they learn. Error patterns are captured automatically so the same mistake never happens twice.',
          bullets: ['Automatic error detection', 'Pattern recognition', 'Continuous improvement'],
        },
        {
          title: 'Gets Smarter Over Time',
          description: 'Every interaction teaches them. Feedback you give today improves their work tomorrow--and forever after.',
          bullets: ['Feedback becomes learning', 'Preferences remembered', 'Quality improves weekly'],
        },
        {
          title: 'Knowledge Never Leaves',
          description: 'Unlike employees who take knowledge when they quit, everything your AI learns stays in your business forever.',
          bullets: ['Institutional memory preserved', 'No knowledge loss', 'Always available'],
        },
      ],
      comparisonTitle: 'The problem with traditional marketing',
      comparisonDescription: 'Every time a marketing person leaves, they take years of knowledge with them. Your AI team\'s memory is permanent--and it only gets better.',
      comparisonStats: [
        { value: '0%', label: 'Knowledge Loss' },
        { value: '\u221E', label: 'Memory Retention' },
      ],
    },
    faq: [
      {
        question: 'How is this different from Manus or ChatGPT?',
        answer: 'Manus and ChatGPT are general-purpose--they can do a little of everything but aren\'t built for anything specific. OzziOS is a vertical AI agent platform purpose-built for home services. Our agents understand service calls, seasonal demand, local SEO, and trade-specific marketing out of the box. General AI fails 75% of the time in business. Specialists win.',
      },
      {
        question: 'Is this really cheaper than hiring a marketing team?',
        answer: 'Significantly. Traditional marketing costs $3-15K/month in overhead for work you can\'t always see. With OzziOS, you get a full AI agent team--SEO, content, social, ads--for a fraction of that. And you see exactly what they do.',
      },
      {
        question: 'Can AI really handle marketing for a home service company?',
        answer: 'For the repetitive, process-driven work? Yes--and often better. Site audits, content drafts, social scheduling, Google Business Profile management, performance reports. Your AI agents handle these 24/7 without the back-and-forth.',
      },
      {
        question: 'Will I finally understand what\'s happening with my marketing?',
        answer: 'That\'s the whole point. Every action, every piece of content, every decision is logged and visible. No more mystery reports. No more wondering what you\'re paying for.',
      },
      {
        question: 'What if I need human help?',
        answer: 'Your AI agents handle the heavy lifting, but you\'re always in control. Set up approval workflows for important decisions. Our support team is here when you need guidance.',
      },
      {
        question: 'Can I try it before committing?',
        answer: 'Early access is $795/month -- no annual lock-in, cancel anytime. You get the full platform from day one. If you don\'t see the value, just walk away.',
      },
    ],
    cta: {
      badge: 'Early Access',
      headline: ['The trades deserve better than generic AI.', 'Meet your Ozzi team.'],
      subtext: 'The first AI agent platform built for home services. No long-term contracts. Your agents start working today.',
      primaryButton: 'Get Early Access',
      secondaryButton: 'See how it works',
    },
    howItWorks: {
      sectionLabel: 'How it works',
      headline: ['From sign-up to running', 'in under 5 minutes.'],
      subheadline: 'No consultants. No onboarding calls. Tell Ozzi your trade, and your AI agent team gets to work.',
      steps: [
        {
          number: '01',
          title: 'Tell Ozzi your trade',
          description: 'HVAC, plumbing, roofing, electrical--Ozzi knows the industry. Your agents configure themselves around your services, service area, and customers.',
          benefits: ['5-minute setup', 'Trade-specific from day one'],
        },
        {
          number: '02',
          title: 'Your agents get to work',
          description: '30+ AI agents handle SEO, content, social, ads, and Google Business Profile--trained on home service marketing, not generic templates.',
          benefits: ['Blog & SEO', 'Presentations & reports'],
        },
        {
          number: '03',
          title: 'Everything runs while you\'re on the job',
          description: 'Automated workflows trigger email campaigns, SMS follow-ups, and social posts. Voice agents answer calls. You\'re on a roof, not behind a desk.',
          benefits: ['Workflows & voice agents', 'Real-time dashboards'],
        },
        {
          number: '04',
          title: 'Scale without hiring',
          description: 'CRM, task management, knowledge base, call center--all built in. Grow from 1 truck to 10 without adding marketing headcount.',
          benefits: ['CRM & task management', 'Knowledge base included'],
        },
      ],
    },
    testimonials: {
      sectionLabel: 'From the Field',
      headline: ['Don\'t take our word for it.', 'Ask the contractors.'],
      subheadline: 'Real home service business owners running AI agents on their marketing. Here\'s what happened.',
      items: [
        {
          name: 'Anthony Cass',
          role: 'Owner',
          company: 'Roof Experts',
          content: 'Ozzi is insane. You just tell it what you want to do and it builds a custom workflow--pulling in the right agents automatically. In the first 20 minutes it found and fixed a sitemap issue on my website I didn\'t even know existed. Two days later, I\'m already seeing more traffic.',
          image: '/images/anthony-profile.jpg',
        },
        {
          name: 'Gregory Underwood',
          role: 'Owner',
          company: 'Extreme Carpet',
          content: 'In my first day using it, Ozzi set up a full 12-week posting schedule for my Google Business Profile and built out a complete service page for my website that looked really professional. Only needed a quick manual fix for some meta tags because of Yoast SEO--minor thing. Impressive for less than 24 hours in.',
          image: '/images/greg-profile-image.jpg',
        },
      ],
      trustStats: [
        { value: '4.9/5', label: 'Average rating' },
        { value: '500+', label: 'Home service companies' },
        { value: '98%', label: 'Would recommend' },
      ],
    },
  },
} as const;
