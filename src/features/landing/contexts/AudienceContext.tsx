'use client';

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';

export type AudienceType = 'business' | 'agency';

interface AudienceContextValue {
  audience: AudienceType;
  setAudience: (audience: AudienceType) => void;
  toggleAudience: () => void;
  isBusinessOwner: boolean;
  isAgency: boolean;
}

const AudienceContext = createContext<AudienceContextValue | null>(null);

interface AudienceProviderProps {
  children: ReactNode;
  defaultAudience?: AudienceType;
}

export function AudienceProvider({ children, defaultAudience = 'business' }: AudienceProviderProps) {
  const [audience, setAudienceState] = useState<AudienceType>(defaultAudience);

  // Read URL parameter on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    const urlAudience = params.get('audience');

    if (urlAudience === 'business' || urlAudience === 'agency') {
      setAudienceState(urlAudience);
    }
  }, []);

  // Update URL when audience changes
  const setAudience = useCallback((newAudience: AudienceType) => {
    setAudienceState(newAudience);

    if (typeof window === 'undefined') return;

    const url = new URL(window.location.href);
    url.searchParams.set('audience', newAudience);
    window.history.replaceState({}, '', url.toString());
  }, []);

  const toggleAudience = useCallback(() => {
    setAudience(audience === 'business' ? 'agency' : 'business');
  }, [audience, setAudience]);

  const value: AudienceContextValue = {
    audience,
    setAudience,
    toggleAudience,
    isBusinessOwner: audience === 'business',
    isAgency: audience === 'agency',
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

// Content data for each audience type
export const audienceContent = {
  business: {
    hero: {
      headline: ['What if you never had to', 'hire an agency again?'],
      subheadline: 'Your own AI marketing team. No retainers. No mystery. No middlemen.',
      subtext: 'Finally see exactly what your marketing team is doing, 24/7.',
      stats: [
        { value: '30+', label: 'AI Agents' },
        { value: '24/7', label: 'Coverage' },
        { value: '$0', label: 'Retainers' },
        { value: '100%', label: 'Transparency' },
      ],
    },
    bento: {
      sectionLabel: 'Your Marketing Team',
      headline: ['Cancel your agency.', 'Keep the results.'],
      subheadline: 'Stop paying for a black box. Your AI team shows you exactly what they\'re doing.',
      cards: {
        aiWorkforce: {
          badge: 'Your Team',
          title: 'A team that works for you',
          description: 'Not an agency that treats you like a line item. AI employees who actually show you the work.',
        },
        tools: {
          title: 'No more agency tools',
          description: 'Everything an agency uses—SEO, content, social, ads—now yours to see and control.',
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
          description: 'Email, social, ads, SEO—all in one place. No more juggling vendors.',
        },
        multiTenant: {
          title: 'One dashboard, total control',
          description: 'See everything your marketing is doing in one place. Finally.',
        },
        security: {
          title: 'Your data stays yours',
          description: 'Unlike agencies, we don\'t own your data. You do. Always.',
        },
      },
    },
    stats: {
      sectionLabel: 'The bottom line',
      headline: ['Real savings', 'you can measure'],
      stats: [
        { value: 85, suffix: '%', label: 'Less Spent', description: 'vs. agency retainers' },
        { value: 24, suffix: '/7', label: 'Availability', description: 'No business hours' },
        { value: 100, suffix: '%', label: 'Transparency', description: 'See all the work' },
        { value: 0, suffix: '', label: 'Surprises', description: 'No hidden fees' },
      ],
      socialProof: 'Join 500+ business owners',
    },
    calculator: {
      defaultTab: 'agency',
      tabs: [
        { id: 'agency', label: 'Agency Costs', description: 'See what you\'re really paying for black-box retainers' },
        { id: 'tools', label: 'Tool Costs', description: 'Cancel subscriptions and consolidate' },
      ],
    },
    agents: {
      sectionLabel: 'Your AI Team',
      headline: ['Meet your new team.', 'They actually show you their work.'],
      subheadline: 'Unlike agencies, you see exactly what each team member does—every task, every decision.',
    },
    memory: {
      sectionLabel: 'Self-Learning Memory',
      headline: ['They remember everything.', 'And they never forget.'],
      subheadline: 'Unlike agencies that lose knowledge when people leave, your AI team builds on every interaction. They learn your brand, remember your preferences, and get smarter over time.',
      features: [
        {
          title: 'Total Brand Recall',
          description: 'Your AI team knows your brand voice, products, competitors, and preferences. Every detail, instantly accessible.',
          bullets: ['Brand guidelines always applied', 'Product details at their fingertips', 'Competitor awareness built-in'],
        },
        {
          title: 'Learns From Mistakes',
          description: 'When something goes wrong, they learn. Error patterns are captured automatically so the same mistake never happens twice.',
          bullets: ['Automatic error detection', 'Pattern recognition', 'Continuous improvement'],
        },
        {
          title: 'Gets Smarter Over Time',
          description: 'Every interaction teaches them. Feedback you give today improves their work tomorrow—and forever after.',
          bullets: ['Feedback becomes learning', 'Preferences remembered', 'Quality improves weekly'],
        },
        {
          title: 'Knowledge Never Leaves',
          description: 'Unlike employees who take knowledge when they quit, everything your AI learns stays in your business forever.',
          bullets: ['Institutional memory preserved', 'No knowledge loss', 'Always available'],
        },
      ],
      comparisonTitle: 'The problem with agencies',
      comparisonDescription: 'Every time an account manager leaves, they take years of knowledge with them. Your AI team\'s memory is permanent—and it only gets better.',
      comparisonStats: [
        { value: '0%', label: 'Knowledge Loss' },
        { value: '∞', label: 'Memory Retention' },
      ],
    },
    faq: [
      {
        question: 'Is this really cheaper than an agency?',
        answer: 'Significantly. Agencies charge $3-15K/month for work you can\'t see. With OzziOS, you get a full AI marketing team—SEO, content, social, ads—for a fraction of that. And you see exactly what they do.',
      },
      {
        question: 'Can AI really do what an agency does?',
        answer: 'For the repetitive, process-driven work? Yes—and often better. Site audits, content drafts, social scheduling, performance reports. Your AI team handles these 24/7 without the back-and-forth.',
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
        question: 'How do I train the AI on my brand?',
        answer: 'Share examples, provide feedback, and your AI team learns. They maintain persistent memory of your preferences, writing style, and business details. The more you work with them, the better they get.',
      },
      {
        question: 'Can I try it before committing?',
        answer: 'Absolutely. Start with 50 free credits—enough to test real workflows. No credit card required. If you don\'t love it, just walk away.',
      },
    ],
    cta: {
      badge: '50 Free Credits',
      headline: ['Fire your agency.', 'Hire your team.'],
      subtext: 'Your first AI employee is free. No credit card. Start building a marketing team that actually works for you.',
      primaryButton: 'Get started for free',
      secondaryButton: 'See how it works',
    },
    howItWorks: {
      sectionLabel: 'How it works',
      headline: ['The agency runaround', 'ends here.'],
      subheadline: 'Stop paying for mystery retainers. Stop waiting for callbacks. Start seeing exactly what your marketing team does.',
      steps: [
        {
          number: '01',
          title: 'Fire your agency today',
          description: 'Stop paying for black-box retainers. Set up your AI marketing team in minutes and own the results.',
          benefits: ['5-minute setup', 'See everything your AI does'],
        },
        {
          number: '02',
          title: 'Meet your new team',
          description: 'An AI workforce joins your business. 30+ agents learn your brand, handle your marketing, and show you every step.',
          benefits: ['Full transparency', 'No hidden work'],
        },
        {
          number: '03',
          title: 'Marketing runs while you sleep',
          description: 'Campaigns launch automatically. Reports arrive in your inbox. You focus on running your business.',
          benefits: ['24/7 marketing', 'No more waiting'],
        },
        {
          number: '04',
          title: 'Grow without the agency tax',
          description: 'Scale your marketing without scaling your retainer. More results, less overhead.',
          benefits: ['Flat pricing', 'No surprise invoices'],
        },
      ],
    },
    testimonials: {
      sectionLabel: 'Testimonials',
      headline: ['They fired their agencies.', 'Here\'s why.'],
      subheadline: 'Real stories from business owners who took back control of their marketing.',
      items: [
        {
          name: 'Marcus Chen',
          role: 'Owner',
          company: 'Chen\'s Auto Group',
          content: 'I fired my agency after 2 weeks on OzziOS. Not because the AI is better—but because I can finally see what\'s actually happening. No more black-box retainers. I own my marketing now.',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format',
        },
        {
          name: 'Sarah Mitchell',
          role: 'Owner',
          company: 'Mitchell Dental',
          content: 'My agency charged $5K/month and I never knew what they were doing. Now I see every blog post, every social update, every SEO fix. Same results, fraction of the cost.',
          image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&auto=format',
        },
        {
          name: 'David Park',
          role: 'Founder',
          company: 'Park Home Services',
          content: 'I used to wait days for my agency to respond. Now I ask my AI team a question and get an answer in seconds. It\'s like having employees who actually care about my business.',
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&auto=format',
        },
        {
          name: 'Emily Rodriguez',
          role: 'Owner',
          company: 'Rodriguez Real Estate',
          content: 'The agency never understood my market. My AI team learned my brand voice in a day and now writes better listing descriptions than I do. Complete game changer.',
          image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&auto=format',
        },
        {
          name: 'Jessica Williams',
          role: 'Owner',
          company: 'Williams Fitness',
          content: 'I used to spend Sunday nights approving content for Monday. Now my AI team has everything ready before I wake up. I actually have weekends again.',
          image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&auto=format',
        },
        {
          name: 'Alex Thompson',
          role: 'Owner',
          company: 'Thompson Legal',
          content: 'Cancelled my agency and 4 marketing tools. One platform does it all. The cost savings paid for OzziOS in the first week—and the results are better.',
          image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&auto=format',
        },
      ],
      trustStats: [
        { value: '4.9/5', label: 'Average rating' },
        { value: '500+', label: 'Business owners' },
        { value: '98%', label: 'Would recommend' },
      ],
    },
  },
  agency: {
    hero: {
      headline: ['What if you never', 'had to hire again?'],
      subheadline: 'Unlimited AI agents. Working 24/7. They never quit, never call in sick, and never take your best clients when they leave.',
      subtext: 'Run a 100-person agency with 35 people.',
      stats: [
        { value: '65%', label: 'Fewer Hires' },
        { value: '24/7', label: 'Coverage' },
        { value: '$0', label: 'Turnover Cost' },
        { value: '∞', label: 'Memory' },
      ],
    },
    bento: {
      sectionLabel: 'Platform',
      headline: ['Cancel 8+ subscriptions.', 'One platform does it all.'],
      subheadline: 'Stop paying for tools that don\'t talk to each other. Your AI team works in one unified workspace.',
      cards: {
        aiWorkforce: {
          badge: 'AI Workforce',
          title: 'Employees who never quit',
          description: 'Unlimited AI agents working 24/7. They remember everything, never call in sick, and never take your best clients when they leave.',
        },
        tools: {
          title: 'No more tool switching',
          description: '77+ tools built in. Tasks, scheduling, reports, memory—one platform, zero tab switching.',
        },
        communication: {
          title: 'Client Communities',
          description: 'Create private community spaces for every client. Replace email threads with real-time collaboration.',
        },
        workflows: {
          title: 'Work that happens while you sleep',
          description: 'Automate anything. Campaigns run at 3am. Reports generate overnight. You wake up to results.',
        },
        crm: {
          title: 'Client CRM & Deals',
          description: 'Manage all client relationships and sales pipelines in one place. Never lose track of a deal.',
        },
        marketing: {
          title: 'Cancel 4 subscriptions',
          description: 'Email, social, ads—all in one. Stop paying for Mailchimp, Hootsuite, and the rest.',
        },
        multiTenant: {
          title: 'One dashboard, all clients',
          description: 'Unlimited sub-accounts. See everything in one place. No more juggling logins.',
        },
        security: {
          title: 'AI you can trust',
          description: 'Enterprise-grade safety. Your data stays yours. SOC 2 compliant.',
        },
      },
    },
    stats: {
      sectionLabel: 'The bottom line',
      headline: ['Real impact you can', 'measure'],
      stats: [
        { value: 40, suffix: '+', label: 'Hours Saved', description: 'Every single week' },
        { value: 15, suffix: '-25K', label: 'Saved Per Hire', description: 'You don\'t have to make' },
        { value: 8, suffix: '+', label: 'Tools Replaced', description: 'Cancel them all' },
        { value: 0, suffix: '%', label: 'Turnover', description: 'They never quit' },
      ],
      socialProof: 'Join 500+ agencies',
    },
    calculator: {
      defaultTab: 'employees',
      tabs: [
        { id: 'employees', label: 'Employee Costs', description: 'Stop the hiring treadmill' },
        { id: 'agency', label: 'Agency Alternative', description: 'Compare to outsourcing' },
        { id: 'tools', label: 'Tool Consolidation', description: 'Cancel 8+ subscriptions' },
      ],
    },
    agents: {
      sectionLabel: 'AI Workforce',
      headline: ['Meet your new team.', 'They never ask for a raise.'],
      subheadline: 'They learn your brand, remember every conversation, and work around the clock without overtime.',
    },
    memory: {
      sectionLabel: 'Infinite Memory',
      headline: ['Knowledge that stays.', 'Forever.'],
      subheadline: 'When employees leave, they take years of client knowledge with them. Your AI workforce remembers everything—every conversation, every preference, every lesson learned.',
      features: [
        {
          title: 'Infinite Institutional Memory',
          description: 'Every client conversation, brand guideline, and campaign insight is preserved forever. No more knowledge walking out the door.',
          bullets: ['Client history never lost', 'Campaign learnings preserved', 'Brand details permanent'],
        },
        {
          title: 'Self-Correcting Intelligence',
          description: 'When your AI makes a mistake, it learns. Error patterns are captured automatically—the same mistake never happens twice.',
          bullets: ['Automatic error capture', 'Pattern learning', 'Continuous improvement'],
        },
        {
          title: 'Compounds Over Time',
          description: 'Every piece of feedback makes them better. Unlike new hires who start from zero, your AI workforce builds on everything it\'s learned.',
          bullets: ['Feedback becomes permanent', 'Quality improves weekly', 'No retraining needed'],
        },
        {
          title: 'Zero Knowledge Turnover',
          description: 'The average employee leaves after 2 years, taking everything they learned. Your AI workforce has 0% turnover—and 100% knowledge retention.',
          bullets: ['No exit interviews needed', 'Client relationships preserved', 'Processes documented automatically'],
        },
      ],
      comparisonTitle: 'The real cost of turnover',
      comparisonDescription: 'Replacing an employee costs $15-25K. But the hidden cost is the knowledge they take with them—client relationships, campaign history, lessons learned. Gone.',
      comparisonStats: [
        { value: '$0', label: 'Turnover Cost' },
        { value: '100%', label: 'Retention' },
      ],
    },
    faq: [
      {
        question: 'Can AI really replace my employees?',
        answer: 'Not entirely—but it can replace the repetitive, time-consuming work that burns out your best people. Our AI employees handle SEO audits, content drafts, data analysis, and campaign management 24/7. Your human team focuses on strategy, relationships, and the creative work that actually needs a human touch.',
      },
      {
        question: 'What happens to institutional knowledge when employees leave?',
        answer: 'That\'s exactly the problem we solve. When your best people leave, they take years of knowledge with them. AI employees have infinite memory—they remember every client conversation, every brand guideline, every campaign that worked. Knowledge stays in your business forever.',
      },
      {
        question: 'How do I train the AI on my brand voice?',
        answer: 'Each AI agent learns your brand through usage. Share examples, provide feedback, and the agents adapt. They maintain persistent memory of your preferences, writing style, and client-specific details. The more you work with them, the better they get.',
      },
      {
        question: 'Is this cheaper than hiring an agency?',
        answer: 'Significantly. Agencies charge $5-15K/month for work you can\'t see. With OzziOS, you own the AI workforce—no retainers, no black boxes. You see exactly what your AI is doing, and you only pay for what you use.',
      },
      {
        question: 'Can I see what the AI is doing?',
        answer: 'Complete transparency. Every action, every decision, every piece of content is logged and visible. Unlike agencies that send monthly reports, you see work happening in real-time. Approve actions before they execute, or let AI run autonomously—your choice.',
      },
      {
        question: 'What if I need human help?',
        answer: 'AI handles the heavy lifting, but you\'re always in control. Set up approval workflows for critical actions. The AI flags when it needs human input. And our support team is here when you need guidance on getting the most from your AI workforce.',
      },
      {
        question: 'How many tools can I cancel?',
        answer: 'Most clients cancel 8+ subscriptions after switching. OzziOS replaces your CRM, email marketing, social scheduling, project management, SEO tools, analytics platforms, and more. One login, one invoice, one platform.',
      },
      {
        question: 'What\'s the catch with the free trial?',
        answer: 'No catch. Start with 50 free credits—enough to test real workflows. No credit card required. No automatic billing. If you don\'t love it, just walk away. We\'re confident you\'ll stay.',
      },
    ],
    cta: {
      badge: '50 Free Credits',
      headline: ['Stop paying for humans', 'who leave.'],
      subtext: 'Your first AI employee is free. No credit card. Start building a team that stays forever.',
      primaryButton: 'Get started for free',
      secondaryButton: 'Talk to sales',
    },
    howItWorks: {
      sectionLabel: 'How it works',
      headline: ['The hiring treadmill', 'stops here.'],
      subheadline: 'Stop paying $15-25K per hire. Stop losing institutional knowledge. Start building a team that stays forever.',
      steps: [
        {
          number: '01',
          title: 'Fire your agency today',
          description: 'Stop paying for black-box retainers. Set up your AI workforce in minutes and own the results.',
          benefits: ['5-minute setup', 'See everything your AI does'],
        },
        {
          number: '02',
          title: 'Hire employees who never leave',
          description: 'An unlimited AI workforce joins your team. They learn your brand, remember everything, and never take clients when they go.',
          benefits: ['$0 turnover cost', 'Infinite institutional memory'],
        },
        {
          number: '03',
          title: 'Work runs while you sleep',
          description: 'Campaigns launch at 3am. Reports generate overnight. You wake up to results, not to-do lists.',
          benefits: ['24/7 automation', 'No night shifts'],
        },
        {
          number: '04',
          title: 'Grow without the hiring pain',
          description: 'Scale revenue without scaling headcount. Add clients, not overhead.',
          benefits: ['Revenue not capped by seats', '65% fewer hires'],
        },
      ],
    },
    testimonials: {
      sectionLabel: 'Testimonials',
      headline: ['They stopped hiring.', 'Here\'s why.'],
      subheadline: 'Real stories from agencies who broke free from the hiring treadmill.',
      items: [
        {
          name: 'Sarah Mitchell',
          role: 'CEO',
          company: 'GrowthLab Agency',
          content: 'We stopped hiring 6 months ago. Our AI team handles everything our junior staff used to do—and they never call in sick or quit for a competitor. We\'re doing 3x the work with the same headcount.',
          image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&auto=format',
        },
        {
          name: 'Marcus Chen',
          role: 'Founder',
          company: 'Digital Edge',
          content: 'I fired my agency after 2 weeks on OzziOS. Not because the AI is better—but because I can finally see what\'s actually happening. No more black-box retainers. I own my marketing now.',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format',
        },
        {
          name: 'Emily Rodriguez',
          role: 'Operations Director',
          company: 'Spark Creative',
          content: 'Our best account manager left last year and took years of client knowledge with her. Never again. Every conversation, every preference, every brand detail—it all stays in OzziOS forever.',
          image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&auto=format',
        },
        {
          name: 'David Park',
          role: 'Co-Founder',
          company: 'Velocity Marketing',
          content: 'Hiring costs us $20K+ per employee. Training takes months. Then they leave. Our AI employees cost a fraction of that, learn in days, and the only "turnover" is version updates that make them better.',
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&auto=format',
        },
        {
          name: 'Jessica Williams',
          role: 'Managing Partner',
          company: 'Apex Digital',
          content: 'I used to spend Sunday nights reviewing reports for Monday meetings. Now I wake up to finished dashboards, campaign analyses, and content drafts. Work actually happens while I sleep.',
          image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&auto=format',
        },
        {
          name: 'Alex Thompson',
          role: 'CEO',
          company: 'NorthStar Agency',
          content: 'Cancelled Mailchimp, Hootsuite, SEMrush, Airtable, and 4 other tools. One platform, one invoice. The cost savings alone paid for OzziOS in the first month—and that\'s before the AI even did anything.',
          image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&auto=format',
        },
      ],
      trustStats: [
        { value: '4.9/5', label: 'Average rating' },
        { value: '500+', label: 'Agencies' },
        { value: '98%', label: 'Would recommend' },
      ],
    },
  },
} as const;
