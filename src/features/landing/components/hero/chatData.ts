import type { SiriOrbState } from '@/shared/components/ui/smoothui/ui/SiriOrb';

// Type for messages
export type ChatMessage = {
  id: number;
  user: string;
  avatar: string | null;
  isAgent: boolean;
  agentColor?: string;
  time: string;
  content: Array<{ type: string; text?: string; items?: any; content?: string }>;
  typing?: boolean;
  reactions?: Array<{ emoji: string; count: number }>;
};

// Helper function to get orb state based on agent activity and message context
export const getAgentOrbState = (message: ChatMessage, isStreaming?: boolean, isStreamingComplete?: boolean): SiriOrbState => {
  if (message.typing || (isStreaming && !isStreamingComplete)) return 'thinking';
  if (message.reactions && message.reactions.length > 0) {
    return 'happy';
  }
  if (message.content.some(part => part.type === 'text' && typeof part.text === 'string' && part.text.includes('✅'))) {
    return 'happy';
  }
  return 'idle';
};

// Helper function to map agent names to SiriOrb variants
export const getAgentVariant = (agentName: string): string => {
  const variantMap: Record<string, string> = {
    'Data Analyst': 'tech',
    'Graphic Designer': 'social',
    'Content Writer': 'creative',
    'SEO Specialist': 'seo',
  };
  return variantMap[agentName] || 'default';
};

export const sidebarChannels = [
  { name: 'general', starred: true, hasMessages: false },
  { name: 'marketing-strategy', starred: true, hasMessages: true },
  { name: 'seo-campaigns', starred: false, hasMessages: true },
  { name: 'reports', starred: true, hasMessages: true },
  { name: 'content-calendar', starred: false, hasMessages: false },
];

export const sidebarTeam = [
  { name: 'Sarah Mitchell', isAgent: false, status: 'online', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&auto=format' },
  { name: 'SEO Specialist', isAgent: true, status: 'online', variant: 'seo' },
  { name: 'Data Analyst', isAgent: true, status: 'online', variant: 'tech' },
  { name: 'Graphic Designer', isAgent: true, status: 'online', variant: 'social' },
  { name: 'Content Writer', isAgent: true, status: 'online', variant: 'creative' },
];

// SEO Campaign Messages
export const seoMessages: ChatMessage[] = [
  {
    id: 1,
    user: 'Sarah Mitchell',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&auto=format',
    isAgent: false,
    time: '9:15 AM',
    content: [
      { type: 'mention', text: '@SEO Specialist' },
      { type: 'text', text: ' run a full site audit on clientsite.com and identify critical issues' },
    ],
  },
  {
    id: 2,
    user: 'SEO Specialist',
    avatar: null,
    isAgent: true,
    agentColor: 'emerald',
    time: '9:15 AM',
    content: [
      { type: 'text', text: 'Running technical SEO audit...' },
    ],
    typing: true,
  },
  {
    id: 3,
    user: 'SEO Specialist',
    avatar: null,
    isAgent: true,
    agentColor: 'emerald',
    time: '9:16 AM',
    content: [
      { type: 'text', text: '✅ Site Audit Complete — clientsite.com (847 pages crawled):' },
      { type: 'metrics', items: [
        { label: 'Health Score', value: '64/100', change: '' },
        { label: 'Critical', value: '12', change: '' },
        { label: 'Warnings', value: '47', change: '' },
        { label: 'Indexed', value: '723', change: '' },
      ]},
      { type: 'text', text: '🚨 Critical Issues Found:' },
      { type: 'list', items: ['23 pages with duplicate title tags', '12 broken internal links (404s)', '8 pages missing meta descriptions', '3 redirect chains over 3 hops'] },
    ],
    reactions: [{ emoji: '👀', count: 2 }],
  },
  {
    id: 4,
    user: 'Sarah Mitchell',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&auto=format',
    isAgent: false,
    time: '9:17 AM',
    content: [
      { type: 'text', text: 'Fix the broken links and redirect chains automatically. Also ' },
      { type: 'mention', text: '@SEO Specialist' },
      { type: 'text', text: ' generate optimized meta descriptions for those 8 pages' },
    ],
  },
  {
    id: 5,
    user: 'SEO Specialist',
    avatar: null,
    isAgent: true,
    agentColor: 'emerald',
    time: '9:17 AM',
    content: [
      { type: 'text', text: 'Connecting to WordPress...' },
    ],
    typing: true,
  },
  {
    id: 6,
    user: 'SEO Specialist',
    avatar: null,
    isAgent: true,
    agentColor: 'emerald',
    time: '9:18 AM',
    content: [
      { type: 'text', text: '✅ Fixes Applied to WordPress:' },
      { type: 'actions', items: [
        { icon: '🔗', action: 'Fixed 12 broken links', status: 'success', detail: 'Redirected to valid pages' },
        { icon: '↪️', action: 'Simplified 3 redirect chains', status: 'success', detail: 'Now direct 301s' },
        { icon: '📝', action: 'Generated 8 meta descriptions', status: 'success', detail: 'AI-optimized for CTR' },
      ]},
      { type: 'code', content: 'Example meta generated:\n"Discover premium marketing solutions that drive 3x ROI. Trusted by 500+ agencies worldwide. Start free today."' },
    ],
    reactions: [{ emoji: '🚀', count: 3 }, { emoji: '✅', count: 2 }],
  },
  {
    id: 7,
    user: 'Sarah Mitchell',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&auto=format',
    isAgent: false,
    time: '9:19 AM',
    content: [
      { type: 'text', text: 'Now do keyword research for "AI marketing tools" and find low competition opportunities' },
    ],
  },
  {
    id: 8,
    user: 'SEO Specialist',
    avatar: null,
    isAgent: true,
    agentColor: 'emerald',
    time: '9:19 AM',
    content: [
      { type: 'text', text: '✅ Keyword Opportunities Found (low KD, high intent):' },
      { type: 'keywords', items: [
        { keyword: 'ai marketing automation for agencies', volume: '1.2K', difficulty: '23', intent: 'Commercial' },
        { keyword: 'best ai tools for digital marketing', volume: '2.4K', difficulty: '31', intent: 'Commercial' },
        { keyword: 'marketing ai assistant software', volume: '880', difficulty: '18', intent: 'Transactional' },
        { keyword: 'automated marketing campaign tools', volume: '1.8K', difficulty: '27', intent: 'Commercial' },
      ]},
      { type: 'text', text: '💡 Recommendation: Target "marketing ai assistant software" first — lowest difficulty with strong buyer intent.' },
    ],
    reactions: [{ emoji: '💎', count: 2 }, { emoji: '🎯', count: 1 }],
  },
];

// Marketing Strategy Messages
export const marketingMessages: ChatMessage[] = [
  {
    id: 1,
    user: 'Sarah Mitchell',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&auto=format',
    isAgent: false,
    time: '10:42 AM',
    content: [
      { type: 'mention', text: '@Data Analyst' },
      { type: 'text', text: ' pull our Facebook Ads performance for Q4 campaigns' },
    ],
  },
  {
    id: 2,
    user: 'Data Analyst',
    avatar: null,
    isAgent: true,
    agentColor: 'emerald',
    time: '10:42 AM',
    content: [
      { type: 'text', text: 'Connected to Facebook Ads API. Here\'s your Q4 performance:' },
      { type: 'metrics', items: [
        { label: 'Spend', value: '$12.4K', change: '' },
        { label: 'ROAS', value: '4.2x', change: '+18%' },
        { label: 'Conversions', value: '847', change: '+32%' },
        { label: 'CPA', value: '$14.63', change: '-22%' },
      ]},
      { type: 'text', text: '⚠️ Ad Set "Retargeting - Cart Abandoners" underperforming (1.8x ROAS)' },
    ],
    reactions: [{ emoji: '📊', count: 1 }],
  },
  {
    id: 3,
    user: 'Sarah Mitchell',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&auto=format',
    isAgent: false,
    time: '10:43 AM',
    content: [
      { type: 'mention', text: '@Graphic Designer' },
      { type: 'text', text: ' generate 3 new video ads for the retargeting campaign - use testimonial style with motion graphics' },
    ],
  },
  {
    id: 4,
    user: 'Graphic Designer',
    avatar: null,
    isAgent: true,
    agentColor: 'violet',
    time: '10:43 AM',
    content: [
      { type: 'text', text: 'Generating video ads with AI...' },
    ],
    typing: true,
  },
  {
    id: 5,
    user: 'Graphic Designer',
    avatar: null,
    isAgent: true,
    agentColor: 'violet',
    time: '10:44 AM',
    content: [
      { type: 'text', text: '✅ Created 3 video variations (1080x1080, 15s each):' },
      { type: 'videos', items: [
        { image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop&auto=format', duration: '0:15' },
        { image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop&auto=format', duration: '0:15' },
        { image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=200&h=200&fit=crop&auto=format', duration: '0:15' },
      ]},
    ],
    reactions: [{ emoji: '🎬', count: 2 }],
  },
  {
    id: 6,
    user: 'Sarah Mitchell',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&auto=format',
    isAgent: false,
    time: '10:44 AM',
    content: [
      { type: 'text', text: 'Perfect! ' },
      { type: 'mention', text: '@Data Analyst' },
      { type: 'text', text: ' push these to Facebook - replace creatives in the retargeting ad set & update targeting to exclude purchasers from last 30 days' },
    ],
  },
  {
    id: 7,
    user: 'Data Analyst',
    avatar: null,
    isAgent: true,
    agentColor: 'emerald',
    time: '10:44 AM',
    content: [
      { type: 'text', text: 'Updating Facebook Ads Manager...' },
    ],
    typing: true,
  },
  {
    id: 8,
    user: 'Data Analyst',
    avatar: null,
    isAgent: true,
    agentColor: 'emerald',
    time: '10:45 AM',
    content: [
      { type: 'text', text: '✅ Facebook Ads Updated Live:' },
      { type: 'actions', items: [
        { icon: '🎨', action: 'Replaced 3 creatives', status: 'success', detail: 'Ad Set: Retargeting - Cart Abandoners' },
        { icon: '🎯', action: 'Updated targeting', status: 'success', detail: 'Excluded: Purchasers (30 days)' },
        { icon: '💰', action: 'Budget unchanged', status: 'info', detail: '$150/day' },
      ]},
      { type: 'text', text: '→ Changes are now live in Ads Manager' },
    ],
    reactions: [{ emoji: '🚀', count: 3 }, { emoji: '🔥', count: 2 }],
  },
  {
    id: 9,
    user: 'Sarah Mitchell',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&auto=format',
    isAgent: false,
    time: '10:45 AM',
    content: [
      { type: 'text', text: 'Now ' },
      { type: 'mention', text: '@Content Writer' },
      { type: 'text', text: ' update our WordPress landing page headline to match the new campaign messaging. Also ' },
      { type: 'mention', text: '@Graphic Designer' },
      { type: 'text', text: ' generate a new hero image' },
    ],
  },
  {
    id: 10,
    user: 'Content Writer',
    avatar: null,
    isAgent: true,
    agentColor: 'amber',
    time: '10:46 AM',
    content: [
      { type: 'text', text: '✅ WordPress Updated:' },
      { type: 'code', content: 'Page: /landing-page\n- Headline: "Transform Your Marketing with AI"\n- Subhead: "Join 2,000+ agencies saving 20hrs/week"\n- Status: Published' },
      { type: 'text', text: '→ Live at yoursite.com/landing-page' },
    ],
    reactions: [{ emoji: '✅', count: 1 }],
  },
  {
    id: 11,
    user: 'Graphic Designer',
    avatar: null,
    isAgent: true,
    agentColor: 'violet',
    time: '10:46 AM',
    content: [
      { type: 'text', text: '✅ Hero image generated & uploaded to WordPress media library. Applied to landing page.' },
      { type: 'images', items: [
        { image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop&auto=format', wide: true },
      ]},
    ],
    reactions: [{ emoji: '😍', count: 4 }, { emoji: '🎨', count: 2 }],
  },
];

// Reports Channel Messages - AI generates full React report websites
export const reportsMessages: ChatMessage[] = [
  {
    id: 1,
    user: 'Sarah Mitchell',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&auto=format',
    isAgent: false,
    time: '2:30 PM',
    content: [
      { type: 'mention', text: '@Data Analyst' },
      { type: 'text', text: ' generate a full monthly performance report for the client - include all channels, ROI breakdown, and recommendations' },
    ],
  },
  {
    id: 2,
    user: 'Data Analyst',
    avatar: null,
    isAgent: true,
    agentColor: 'emerald',
    time: '2:30 PM',
    content: [
      { type: 'text', text: 'Collecting data from connected platforms...' },
    ],
    typing: true,
  },
  {
    id: 3,
    user: 'Data Analyst',
    avatar: null,
    isAgent: true,
    agentColor: 'emerald',
    time: '2:31 PM',
    content: [
      { type: 'text', text: '✅ Data collected from 6 sources:' },
      { type: 'actions', items: [
        { icon: '📊', action: 'Google Analytics', status: 'success', detail: '47K sessions' },
        { icon: '📈', action: 'Facebook Ads', status: 'success', detail: '$8.2K spend' },
        { icon: '🔍', action: 'Google Ads', status: 'success', detail: '$4.1K spend' },
        { icon: '📧', action: 'Mailchimp', status: 'success', detail: '12 campaigns' },
        { icon: '🛒', action: 'Shopify', status: 'success', detail: '$124K revenue' },
        { icon: '📱', action: 'Instagram', status: 'success', detail: '89K reach' },
      ]},
    ],
  },
  {
    id: 4,
    user: 'Data Analyst',
    avatar: null,
    isAgent: true,
    agentColor: 'emerald',
    time: '2:31 PM',
    content: [
      { type: 'text', text: 'Generating interactive React report...' },
    ],
    typing: true,
  },
  {
    id: 5,
    user: 'Data Analyst',
    avatar: null,
    isAgent: true,
    agentColor: 'emerald',
    time: '2:32 PM',
    content: [
      { type: 'text', text: '🚀 Building report website with React + Tailwind...' },
      { type: 'code', content: 'Creating components:\n→ ExecutiveSummary.tsx\n→ ChannelBreakdown.tsx\n→ ROIAnalysis.tsx\n→ RecommendationsPanel.tsx\n→ InteractiveCharts.tsx' },
    ],
  },
  {
    id: 6,
    user: 'Data Analyst',
    avatar: null,
    isAgent: true,
    agentColor: 'emerald',
    time: '2:33 PM',
    content: [
      { type: 'text', text: 'Deploying to E2B sandbox...' },
    ],
    typing: true,
  },
  {
    id: 7,
    user: 'Data Analyst',
    avatar: null,
    isAgent: true,
    agentColor: 'emerald',
    time: '2:34 PM',
    content: [
      { type: 'text', text: '✅ Monthly Performance Report Generated & Deployed!' },
      { type: 'metrics', items: [
        { label: 'Total Revenue', value: '$124,847', change: '+23%' },
        { label: 'ROAS', value: '4.8x', change: '+31%' },
        { label: 'New Customers', value: '1,247', change: '+18%' },
        { label: 'CAC', value: '$9.87', change: '-15%' },
      ]},
      { type: 'preview', url: 'https://report-acme-dec2024.e2b.dev', title: 'Acme Agency - December 2024 Report', description: 'Interactive performance dashboard with real-time analytics' },
      { type: 'text', text: '⏱️ Time saved: ~40 hours of manual report building' },
    ],
    reactions: [{ emoji: '🤯', count: 5 }, { emoji: '🚀', count: 3 }, { emoji: '💰', count: 2 }],
  },
  {
    id: 8,
    user: 'Sarah Mitchell',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&auto=format',
    isAgent: false,
    time: '2:35 PM',
    content: [
      { type: 'text', text: 'This is incredible! Can you add a competitor comparison section?' },
    ],
  },
  {
    id: 9,
    user: 'Data Analyst',
    avatar: null,
    isAgent: true,
    agentColor: 'emerald',
    time: '2:35 PM',
    content: [
      { type: 'text', text: '✅ Added competitor analysis section to the report:' },
      { type: 'actions', items: [
        { icon: '📊', action: 'Competitor benchmarks added', status: 'success', detail: '5 competitors analyzed' },
        { icon: '📈', action: 'Market share chart', status: 'success', detail: 'Interactive visualization' },
        { icon: '🎯', action: 'Gap analysis', status: 'success', detail: 'Opportunity highlights' },
      ]},
      { type: 'text', text: '→ Report auto-updated at same URL' },
    ],
    reactions: [{ emoji: '⚡', count: 3 }],
  },
];

// Channel to messages map
export const channelMessages: Record<string, ChatMessage[]> = {
  'marketing-strategy': marketingMessages,
  'seo-campaigns': seoMessages,
  'reports': reportsMessages,
};

export const enterpriseLogos = [
  { name: 'Deloitte', width: 'w-24' },
  { name: 'McKinsey', width: 'w-20' },
  { name: 'Accenture', width: 'w-24' },
  { name: 'BCG', width: 'w-16' },
  { name: 'Bain', width: 'w-16' },
  { name: 'PwC', width: 'w-14' },
  { name: 'EY', width: 'w-12' },
  { name: 'KPMG', width: 'w-16' },
];
