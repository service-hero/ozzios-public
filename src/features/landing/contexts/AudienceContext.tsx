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
      headline: ['What if you never had to', 'worry about marketing again?'],
      subheadline: 'Your own AI marketing team. No overhead. No mystery. No middlemen.',
      subtext: 'Finally see exactly what your marketing team is doing, 24/7.',
      stats: [
        { value: '30+', label: 'AI Agents' },
        { value: '24/7', label: 'Coverage' },
        { value: '$0', label: 'Overhead' },
        { value: '100%', label: 'Transparency' },
      ],
    },
    bento: {
      sectionLabel: 'Your Marketing Team',
      headline: ['Stop overpaying for marketing.', 'Keep the results.'],
      subheadline: 'Stop paying for a black box. Your AI team shows you exactly what they\'re doing.',
      cards: {
        aiWorkforce: {
          badge: 'Your Team',
          title: 'A team that works for you',
          description: 'Not an outsourced team that treats you like a line item. AI employees who actually show you the work.',
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
      socialProof: 'Join 500+ home service companies',
    },
    calculator: {
      defaultTab: 'overhead',
      tabs: [
        { id: 'overhead', label: 'Marketing Overhead', description: 'See what you\'re really paying for marketing that doesn\'t deliver' },
        { id: 'tools', label: 'Tool Costs', description: 'Cancel subscriptions and consolidate' },
      ],
    },
    agents: {
      sectionLabel: 'Your AI Team',
      headline: ['Meet your new team.', 'They actually show you their work.'],
      subheadline: 'You see exactly what each team member does--every task, every decision.',
    },
    memory: {
      sectionLabel: 'Self-Learning Memory',
      headline: ['They remember everything.', 'And they never forget.'],
      subheadline: 'Your AI team builds on every interaction. They learn your brand, remember your preferences, and get smarter over time.',
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
        question: 'Is this really cheaper than hiring a marketing team?',
        answer: 'Significantly. Traditional marketing costs $3-15K/month in overhead for work you can\'t always see. With OzziOS, you get a full AI marketing team--SEO, content, social, ads--for a fraction of that. And you see exactly what they do.',
      },
      {
        question: 'Can AI really handle marketing for a home service company?',
        answer: 'For the repetitive, process-driven work? Yes--and often better. Site audits, content drafts, social scheduling, Google Business Profile management, performance reports. Your AI team handles these 24/7 without the back-and-forth.',
      },
      {
        question: 'Will I finally understand what\'s happening with my marketing?',
        answer: 'That\'s the whole point. Every action, every piece of content, every decision is logged and visible. No more mystery reports. No more wondering what you\'re paying for.',
      },
      {
        question: 'What if I need human help?',
        answer: 'Your AI team handles the heavy lifting, but you\'re always in control. Set up approval workflows for important decisions. Our support team is here when you need guidance.',
      },
      {
        question: 'How do I train the AI on my business?',
        answer: 'Share examples, provide feedback, and your AI team learns. They maintain persistent memory of your preferences, service details, and business details. The more you work with them, the better they get.',
      },
      {
        question: 'Can I try it before committing?',
        answer: 'Early access is $490/month -- no annual lock-in, cancel anytime. You get the full platform from day one. If you don\'t see the value, just walk away.',
      },
    ],
    cta: {
      badge: 'Early Access',
      headline: ['Stop overpaying for marketing.', 'Meet your AI team.'],
      subtext: 'Get early access today. No long-term contracts. Start building a marketing team that actually works for you.',
      primaryButton: 'Get Early Access',
      secondaryButton: 'See how it works',
    },
    howItWorks: {
      sectionLabel: 'How it works',
      headline: ['The marketing headache', 'ends here.'],
      subheadline: 'Stop paying for mystery overhead. Stop waiting for callbacks. Start seeing exactly what your marketing team does.',
      steps: [
        {
          number: '01',
          title: 'Get started today',
          description: 'Set up your AI marketing team in minutes. Email campaigns, social media scheduling, and SEO audits start running from day one.',
          benefits: ['5-minute setup', 'Email, social & SEO included'],
        },
        {
          number: '02',
          title: 'Meet your new team',
          description: '30+ AI agents learn your brand voice and handle content writing, blog posts, presentations, and ad optimization--showing you every step.',
          benefits: ['Blog & SEO', 'Presentations & reports'],
        },
        {
          number: '03',
          title: 'Marketing runs while you sleep',
          description: 'Automated workflows trigger email campaigns, SMS follow-ups, and social posts. Voice agents answer calls. Dashboards update in real time.',
          benefits: ['Workflows & voice agents', 'Real-time dashboards'],
        },
        {
          number: '04',
          title: 'Grow without the overhead',
          description: 'Manage your pipeline in the built-in CRM, track tasks on kanban boards, and store knowledge in your wiki--all without scaling your monthly costs.',
          benefits: ['CRM & task management', 'Knowledge base included'],
        },
      ],
    },
    testimonials: {
      sectionLabel: 'Testimonials',
      headline: ['They automated their marketing.', 'Here\'s why.'],
      subheadline: 'Real stories from home service business owners who took back control of their marketing.',
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
