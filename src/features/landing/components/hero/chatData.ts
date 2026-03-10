// Type for messages
export type ChatMessage = {
  id: number;
  user: string;
  avatar: string | null;
  isAgent: boolean;
  agentColor?: string;
  time: string;
  content: Array<{
    type: string;
    text?: string;
    items?: any;
    content?: string;
    url?: string;
    title?: string;
    description?: string;
    wide?: boolean;
    color?: string;
    duration?: string;
  }>;
  typing?: boolean;
  reactions?: Array<{ emoji: string; count: number }>;
};

// Helper function to map agent names to Ozzi mp4 paths
export const getAgentMp4 = (agentName: string): string => {
  const mp4Map: Record<string, string> = {
    'SEO Specialist': '/images/avatars/google-ozzi.mp4',
    'Data Analyst': '/images/avatars/firecrawl-ozzi.mp4',
    'Graphic Designer': '/images/avatars/openai-imagegen-ozzi.mp4',
    'Content Writer': '/images/avatars/wordpress-ozzi.mp4',
  };
  return mp4Map[agentName] || '/images/avatars/generic-ozzi-1.mp4';
};

export const sidebarChannels = [
  { name: 'general', starred: true, hasMessages: false },
  { name: 'lead-follow-up', starred: true, hasMessages: true },
  { name: 'reviews-seo', starred: false, hasMessages: true },
  { name: 'reports', starred: true, hasMessages: true },
  { name: 'scheduling', starred: false, hasMessages: false },
];

export const sidebarTeam = [
  { name: 'Jodi Elmore', isAgent: false, status: 'online', image: '/images/generation-d33b25da-6a41-40c4-90f9-45ee86a2360e.png' },
  { name: 'SEO Specialist', isAgent: true, status: 'online', mp4: '/images/avatars/google-ozzi.mp4' },
  { name: 'Data Analyst', isAgent: true, status: 'online', mp4: '/images/avatars/firecrawl-ozzi.mp4' },
  { name: 'Graphic Designer', isAgent: true, status: 'online', mp4: '/images/avatars/openai-imagegen-ozzi.mp4' },
  { name: 'Content Writer', isAgent: true, status: 'online', mp4: '/images/avatars/wordpress-ozzi.mp4' },
];

// Lead Follow-Up Messages — missed calls, estimate recovery, dead lead reactivation
export const leadFollowUpMessages: ChatMessage[] = [
  {
    id: 1,
    user: 'Jodi Elmore',
    avatar: '/images/generation-d33b25da-6a41-40c4-90f9-45ee86a2360e.png',
    isAgent: false,
    time: '8:15 AM',
    content: [
      { type: 'mention', text: '@Data Analyst' },
      { type: 'text', text: ' pull all missed calls and unsold estimates from the last 7 days — I want to see what we\'re leaving on the table' },
    ],
  },
  {
    id: 2,
    user: 'Data Analyst',
    avatar: null,
    isAgent: true,
    agentColor: 'emerald',
    time: '8:15 AM',
    content: [
      { type: 'text', text: 'Pulling data from your CRM and phone system...' },
    ],
    typing: true,
  },
  {
    id: 3,
    user: 'Data Analyst',
    avatar: null,
    isAgent: true,
    agentColor: 'emerald',
    time: '8:16 AM',
    content: [
      { type: 'text', text: '⚠️ Here\'s what slipped through the cracks this week:' },
      { type: 'metrics', items: [
        { label: 'Missed Calls', value: '23', change: '' },
        { label: 'Unsold Estimates', value: '14', change: '' },
        { label: 'No-Shows', value: '6', change: '' },
        { label: 'Est. Lost Revenue', value: '$18.4K', change: '' },
      ]},
      { type: 'text', text: '🔥 Top missed opportunities:' },
      { type: 'list', items: ['$4,200 HVAC install — estimate sent, no follow-up in 5 days', '$2,800 water heater replacement — missed call, never called back', '$1,900 duct cleaning — customer asked for callback, still waiting', '8 missed calls from Google Ads — zero follow-up'] },
    ],
    reactions: [{ emoji: '😬', count: 2 }],
  },
  {
    id: 4,
    user: 'Jodi Elmore',
    avatar: '/images/generation-d33b25da-6a41-40c4-90f9-45ee86a2360e.png',
    isAgent: false,
    time: '8:17 AM',
    content: [
      { type: 'text', text: 'That\'s brutal. ' },
      { type: 'mention', text: '@Content Writer' },
      { type: 'text', text: ' send follow-up texts to every missed call and unsold estimate. Personalize each one based on the service they needed' },
    ],
  },
  {
    id: 5,
    user: 'Content Writer',
    avatar: null,
    isAgent: true,
    agentColor: 'amber',
    time: '8:17 AM',
    content: [
      { type: 'text', text: 'Drafting personalized follow-ups...' },
    ],
    typing: true,
  },
  {
    id: 6,
    user: 'Content Writer',
    avatar: null,
    isAgent: true,
    agentColor: 'amber',
    time: '8:18 AM',
    content: [
      { type: 'text', text: '✅ Follow-ups sent to 37 contacts:' },
      { type: 'actions', items: [
        { icon: '📱', action: '23 missed call texts sent', status: 'success', detail: '"Hi [name], sorry we missed you..."' },
        { icon: '💰', action: '14 estimate follow-ups sent', status: 'success', detail: 'Personalized per service type' },
        { icon: '📋', action: 'Auto-scheduled callbacks', status: 'success', detail: '6 no-shows rebooked for this week' },
      ]},
      { type: 'code', content: 'Example text sent:\n"Hi Mike, this is Service Hero. We missed your call about the AC repair yesterday. We have a tech available tomorrow morning — want us to come take a look? Reply YES to confirm."' },
    ],
    reactions: [{ emoji: '🚀', count: 3 }, { emoji: '💪', count: 2 }],
  },
  {
    id: 7,
    user: 'Jodi Elmore',
    avatar: '/images/generation-d33b25da-6a41-40c4-90f9-45ee86a2360e.png',
    isAgent: false,
    time: '8:19 AM',
    content: [
      { type: 'text', text: 'Set this up to run automatically every morning at 8am — I never want to miss another lead again' },
    ],
  },
  {
    id: 8,
    user: 'Content Writer',
    avatar: null,
    isAgent: true,
    agentColor: 'amber',
    time: '8:19 AM',
    content: [
      { type: 'text', text: '✅ Automated workflow created:' },
      { type: 'actions', items: [
        { icon: '⏰', action: 'Daily 8:00 AM trigger set', status: 'success', detail: 'Runs every morning automatically' },
        { icon: '📱', action: 'Auto-text missed calls', status: 'success', detail: 'Within 5 min of missed call' },
        { icon: '💰', action: 'Estimate follow-up at 48hrs', status: 'success', detail: 'Then again at 5 days' },
        { icon: '📊', action: 'Weekly summary to you', status: 'success', detail: 'Every Monday at 7 AM' },
      ]},
      { type: 'text', text: '→ You\'ll never manually chase a lead again. I\'ll handle it.' },
    ],
    reactions: [{ emoji: '🔥', count: 4 }, { emoji: '🤖', count: 2 }],
  },
];

// Reviews & SEO Messages — Google review responses, GBP optimization, local rankings
export const reviewsSeoMessages: ChatMessage[] = [
  {
    id: 1,
    user: 'Jodi Elmore',
    avatar: '/images/generation-d33b25da-6a41-40c4-90f9-45ee86a2360e.png',
    isAgent: false,
    time: '9:30 AM',
    content: [
      { type: 'mention', text: '@SEO Specialist' },
      { type: 'text', text: ' check our Google reviews — any new ones that need responses? Also how are we ranking locally?' },
    ],
  },
  {
    id: 2,
    user: 'SEO Specialist',
    avatar: null,
    isAgent: true,
    agentColor: 'emerald',
    time: '9:30 AM',
    content: [
      { type: 'text', text: 'Checking Google Business Profile...' },
    ],
    typing: true,
  },
  {
    id: 3,
    user: 'SEO Specialist',
    avatar: null,
    isAgent: true,
    agentColor: 'emerald',
    time: '9:31 AM',
    content: [
      { type: 'text', text: '📊 Google Business Profile Summary:' },
      { type: 'metrics', items: [
        { label: 'Rating', value: '4.7★', change: '+0.1' },
        { label: 'New Reviews', value: '8', change: 'This week' },
        { label: 'Unanswered', value: '5', change: '' },
        { label: 'Map Pack Rank', value: '#2', change: '+1 spot' },
      ]},
      { type: 'text', text: '⚠️ 5 reviews need responses (3 are 5-star, 1 is 4-star, 1 is 2-star):' },
      { type: 'list', items: ['⭐⭐⭐⭐⭐ "Best HVAC service in town. Mike was amazing!" — Sarah T.', '⭐⭐⭐⭐⭐ "Fixed our AC same day. Very professional." — James R.', '⭐⭐⭐⭐⭐ "Fair price, great work on our furnace." — Linda M.', '⭐⭐⭐⭐ "Good service but arrived 30 min late." — Dave K.', '⭐⭐ "Quoted $800 for a simple repair. Too expensive." — Chris P.'] },
    ],
    reactions: [{ emoji: '👀', count: 1 }],
  },
  {
    id: 4,
    user: 'Jodi Elmore',
    avatar: '/images/generation-d33b25da-6a41-40c4-90f9-45ee86a2360e.png',
    isAgent: false,
    time: '9:32 AM',
    content: [
      { type: 'text', text: 'Draft responses for all 5. Be professional on the negative one — acknowledge the concern and offer to make it right' },
    ],
  },
  {
    id: 5,
    user: 'SEO Specialist',
    avatar: null,
    isAgent: true,
    agentColor: 'emerald',
    time: '9:32 AM',
    content: [
      { type: 'text', text: 'Writing personalized responses...' },
    ],
    typing: true,
  },
  {
    id: 6,
    user: 'SEO Specialist',
    avatar: null,
    isAgent: true,
    agentColor: 'emerald',
    time: '9:33 AM',
    content: [
      { type: 'text', text: '✅ All 5 review responses drafted and posted:' },
      { type: 'actions', items: [
        { icon: '⭐', action: '3 five-star responses posted', status: 'success', detail: 'Thanked by name, mentioned service' },
        { icon: '👍', action: '1 four-star response posted', status: 'success', detail: 'Apologized for delay, offered priority next time' },
        { icon: '🤝', action: '1 two-star response posted', status: 'success', detail: 'Offered free re-evaluation' },
      ]},
      { type: 'code', content: '2-star response posted:\n"Hi Chris, thank you for your feedback. We understand pricing concerns — our quotes include a 2-year warranty on all parts and labor. We\'d love to offer you a free second look. Please call us at (555) 123-4567 and ask for Jodi. — Service Hero Team"' },
    ],
    reactions: [{ emoji: '✅', count: 2 }, { emoji: '👏', count: 3 }],
  },
  {
    id: 7,
    user: 'Jodi Elmore',
    avatar: '/images/generation-d33b25da-6a41-40c4-90f9-45ee86a2360e.png',
    isAgent: false,
    time: '9:34 AM',
    content: [
      { type: 'text', text: 'Now send review request texts to last week\'s completed jobs — the ones that haven\'t left a review yet' },
    ],
  },
  {
    id: 8,
    user: 'SEO Specialist',
    avatar: null,
    isAgent: true,
    agentColor: 'emerald',
    time: '9:34 AM',
    content: [
      { type: 'text', text: '✅ Review requests sent:' },
      { type: 'actions', items: [
        { icon: '📱', action: '18 review request texts sent', status: 'success', detail: 'Completed jobs with no review' },
        { icon: '🔗', action: 'Direct Google review link', status: 'success', detail: 'One-tap to leave review' },
        { icon: '📊', action: 'Avg response rate: 34%', status: 'info', detail: 'Expect ~6 new reviews' },
      ]},
      { type: 'text', text: '→ At this rate, you\'ll hit 200 reviews by end of month. That\'ll push you to #1 in the Map Pack.' },
    ],
    reactions: [{ emoji: '🚀', count: 3 }, { emoji: '⭐', count: 2 }],
  },
];

// Reports Channel Messages — job performance, revenue tracking, contractor-specific metrics
export const reportsMessages: ChatMessage[] = [
  {
    id: 1,
    user: 'Jodi Elmore',
    avatar: '/images/generation-d33b25da-6a41-40c4-90f9-45ee86a2360e.png',
    isAgent: false,
    time: '2:30 PM',
    content: [
      { type: 'mention', text: '@Data Analyst' },
      { type: 'text', text: ' build me a monthly performance report — I need to see revenue by service type, close rates, and where our leads are coming from' },
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
      { type: 'text', text: 'Pulling data from your CRM, Google Ads, and phone system...' },
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
      { type: 'text', text: '✅ Data collected from all sources:' },
      { type: 'actions', items: [
        { icon: '📊', action: 'CRM & job history', status: 'success', detail: '142 jobs completed' },
        { icon: '📞', action: 'Call tracking', status: 'success', detail: '287 inbound calls' },
        { icon: '📈', action: 'Google Ads', status: 'success', detail: '$3.2K spend' },
        { icon: '🔍', action: 'Google Business Profile', status: 'success', detail: '4,200 profile views' },
        { icon: '📱', action: 'Facebook Ads', status: 'success', detail: '$1.8K spend' },
        { icon: '🌐', action: 'Website analytics', status: 'success', detail: '2,100 visitors' },
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
      { type: 'text', text: 'Building your interactive dashboard...' },
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
      { type: 'text', text: '🚀 Building report with React + Tailwind...' },
      { type: 'code', content: 'Creating components:\n→ RevenueByService.tsx\n→ LeadSourceBreakdown.tsx\n→ CloseRateTracker.tsx\n→ TechPerformance.tsx\n→ AdSpendROI.tsx' },
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
      { type: 'text', text: 'Building your app...' },
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
      { type: 'text', text: '✅ Monthly Performance Report Ready!' },
      { type: 'metrics', items: [
        { label: 'Revenue', value: '$87,400', change: '+18%' },
        { label: 'Jobs Completed', value: '142', change: '+12%' },
        { label: 'Avg Ticket', value: '$615', change: '+8%' },
        { label: 'Close Rate', value: '64%', change: '+5%' },
      ]},
      { type: 'preview', url: 'https://report-servicehero-jan2025.e2b.dev', title: 'Service Hero — January 2025 Report', description: 'Revenue by service, lead sources, tech performance & ad ROI' },
      { type: 'text', text: '💡 Key insight: Google Ads drove 47% of booked jobs at $38/lead. Facebook was $67/lead — consider shifting $500/mo from FB to Google.' },
    ],
    reactions: [{ emoji: '🤯', count: 5 }, { emoji: '🚀', count: 3 }, { emoji: '💰', count: 2 }],
  },
  {
    id: 8,
    user: 'Jodi Elmore',
    avatar: '/images/generation-d33b25da-6a41-40c4-90f9-45ee86a2360e.png',
    isAgent: false,
    time: '2:35 PM',
    content: [
      { type: 'text', text: 'Add a section showing revenue by tech — I want to see who\'s selling the most maintenance agreements' },
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
      { type: 'text', text: '✅ Tech performance section added:' },
      { type: 'actions', items: [
        { icon: '👨‍🔧', action: 'Revenue per technician', status: 'success', detail: 'Mike leads at $24.2K' },
        { icon: '📋', action: 'Maintenance agreements sold', status: 'success', detail: '28 new this month' },
        { icon: '📊', action: 'Upsell rate by tech', status: 'success', detail: 'Range: 18% to 42%' },
      ]},
      { type: 'text', text: '→ Report updated. Mike sold 12 agreements, Tony sold 9. Consider having Mike train the team on his approach.' },
    ],
    reactions: [{ emoji: '⚡', count: 3 }],
  },
];

// Channel to messages map
export const channelMessages: Record<string, ChatMessage[]> = {
  'lead-follow-up': leadFollowUpMessages,
  'reviews-seo': reviewsSeoMessages,
  'reports': reportsMessages,
};

export const enterpriseLogos = [
  { name: 'Housecall Pro', width: 'w-28', logo: '/images/logos/housecall-pro-logo.webp' },
  { name: 'ServiceTitan', width: 'w-28', logo: '/images/logos/servicetitan-logo.webp' },
  { name: 'Jobber', width: 'w-24', logo: '/images/logos/jobber-logo.png' },
  { name: 'Google', width: 'w-24', logo: '/images/logos/google-logo.svg' },
  { name: 'Google Ads', width: 'w-24', logo: '/images/logos/google-ads-logo.webp' },
  { name: 'Facebook', width: 'w-24', logo: '/images/logos/facebook-icon.svg' },
  { name: 'Stripe', width: 'w-20', logo: '/images/logos/stripe-logo.svg' },
  { name: 'WordPress', width: 'w-24', logo: '/images/logos/wordpress.webp' },
  { name: 'Shopify', width: 'w-24', logo: '/images/logos/shopify-logo.webp' },
  { name: 'YouTube', width: 'w-24', logo: '/images/logos/youtube-logo.webp' },
  { name: 'Zapier', width: 'w-20', logo: '/images/logos/zapier-logo.svg' },
  { name: 'Gmail', width: 'w-20', logo: '/images/logos/gmail-logo.webp' },
  { name: 'HubSpot', width: 'w-24', logo: '/images/logos/hubspot-logo.png' },
  { name: 'Twilio', width: 'w-24', logo: '/images/logos/twilio-logo.webp' },
  { name: 'Anthropic', width: 'w-24', logo: '/images/logos/anthropic-logo.svg' },
  { name: 'OpenAI', width: 'w-20', logo: '/images/logos/openai-logo.webp' },
  { name: 'ElevenLabs', width: 'w-24', logo: '/images/logos/elevenlabs-logo.webp' },
  { name: 'TikTok', width: 'w-20', logo: '/images/logos/tiktok-logo.svg' },
  { name: 'Thumbtack', width: 'w-24', logo: '/images/logos/thumbtack-logo.png' },
  { name: 'Yelp', width: 'w-20', logo: '/images/logos/yelp-logo.webp' },
  { name: 'Angi', width: 'w-20', logo: '/images/logos/angieslist-logo.png' },
  { name: 'CallRail', width: 'w-24', logo: '/images/logos/callrail-logo.webp' },
  { name: 'Modernize', width: 'w-24', logo: '/images/logos/modernize-logo.webp' },
  { name: 'FieldPulse', width: 'w-24', logo: '/images/logos/fieldpulse-logo.avif' },
  { name: 'Klaviyo', width: 'w-20', logo: '/images/logos/klaviyo-logo.png' },
  { name: 'Mailchimp', width: 'w-24', logo: '/images/logos/mailchimp-logo.jpeg' },
  { name: 'Resend', width: 'w-20', logo: '/images/logos/resend-logo.svg' },
  { name: 'Wix', width: 'w-16', logo: '/images/logos/wix-logo.webp' },
];
