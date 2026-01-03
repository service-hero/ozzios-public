import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Shield, Zap, Hash, ChevronDown, Search, Settings, Users, Star, MessageSquare, FileText, GitBranch, Sparkles, CheckCircle2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';
import { SiriOrbAvatar } from '@/shared/components/ui/SiriOrbAvatar';
import { SiriOrbState } from '@/shared/components/ui/smoothui/ui/SiriOrb';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const enterpriseLogos = [
  { name: 'Deloitte', width: 'w-24' },
  { name: 'McKinsey', width: 'w-20' },
  { name: 'Accenture', width: 'w-24' },
  { name: 'BCG', width: 'w-16' },
  { name: 'Bain', width: 'w-16' },
  { name: 'PwC', width: 'w-14' },
  { name: 'EY', width: 'w-12' },
  { name: 'KPMG', width: 'w-16' },
];

const sidebarChannels = [
  { name: 'general', starred: true, hasMessages: false },
  { name: 'marketing-strategy', starred: true, hasMessages: true },
  { name: 'seo-campaigns', starred: false, hasMessages: true },
  { name: 'content-calendar', starred: false, hasMessages: false },
];

const sidebarTeam = [
  { name: 'Sarah Mitchell', isAgent: false, status: 'online', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&auto=format' },
  { name: 'SEO Specialist', isAgent: true, status: 'online', variant: 'seo' },
  { name: 'Data Analyst', isAgent: true, status: 'online', variant: 'tech' },
  { name: 'Graphic Designer', isAgent: true, status: 'online', variant: 'social' },
  { name: 'Content Writer', isAgent: true, status: 'online', variant: 'creative' },
];

// Helper function to map agent names to SiriOrb variants
const getAgentVariant = (agentName: string): string => {
  const variantMap: Record<string, string> = {
    'Data Analyst': 'tech',
    'Graphic Designer': 'social',
    'Content Writer': 'creative',
    'SEO Specialist': 'seo',
  };
  return variantMap[agentName] || 'default';
};

// Type for messages
type ChatMessage = {
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
const getAgentOrbState = (message: ChatMessage): SiriOrbState => {
  if (message.typing) return 'thinking';
  if (message.reactions && message.reactions.length > 0) {
    return 'happy';
  }
  if (message.content.some(part => part.type === 'text' && typeof part.text === 'string' && part.text.includes('✅'))) {
    return 'happy';
  }
  return 'idle';
};

// SEO Campaign Messages
const seoMessages: ChatMessage[] = [
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
const marketingMessages: ChatMessage[] = [
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

// Channel to messages map
const channelMessages: Record<string, ChatMessage[]> = {
  'marketing-strategy': marketingMessages,
  'seo-campaigns': seoMessages,
};

const messageVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
  },
};

export function HeroSection() {
  const [activeChannel, setActiveChannel] = useState('marketing-strategy');
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<{ cancelled: boolean }>({ cancelled: false });

  const currentMessages = channelMessages[activeChannel] || marketingMessages;

  // Handle channel change
  const handleChannelChange = (channelName: string) => {
    if (!channelMessages[channelName]) return; // Only switch to channels with messages
    if (channelName === activeChannel) return;

    // Cancel current animation
    animationRef.current.cancelled = true;

    // Reset and switch channel
    setVisibleMessages([]);
    setIsTyping(false);
    setActiveChannel(channelName);

    // Reset the scroll position
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = 0;
    }
  };

  // Auto-scroll to bottom when new messages appear
  useEffect(() => {
    if (messagesEndRef.current && messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [visibleMessages, isTyping]);

  // Animate messages for current channel
  useEffect(() => {
    const controller = { cancelled: false };
    animationRef.current = controller;

    const showMessages = async () => {
      const messages = channelMessages[activeChannel] || marketingMessages;

      for (let i = 0; i < messages.length; i++) {
        if (controller.cancelled) return;

        await new Promise((resolve) => setTimeout(resolve, i === 0 ? 800 : 1200));
        if (controller.cancelled) return;

        const message = messages[i];
        if (message.typing) {
          setIsTyping(true);
          await new Promise((resolve) => setTimeout(resolve, 800));
          setIsTyping(false);
        }

        if (controller.cancelled) return;
        setVisibleMessages((prev) => [...prev, message.id]);
      }
    };

    const timer = setTimeout(showMessages, 600);
    return () => {
      controller.cancelled = true;
      clearTimeout(timer);
    };
  }, [activeChannel]);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#0A0A0B]"
    >
      {/* Premium gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary warm glow - top center */}
        <div
          className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full blur-[120px] opacity-20"
          style={{
            background: 'radial-gradient(ellipse, rgba(251, 146, 60, 0.4) 0%, rgba(234, 88, 12, 0.1) 50%, transparent 70%)',
          }}
        />
        {/* Secondary cool accent - left */}
        <div
          className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.5) 0%, transparent 60%)',
          }}
        />
        {/* Tertiary accent - right */}
        <div
          className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] rounded-full blur-[80px] opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full mx-auto max-w-[1400px] px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          {/* Trust badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <div className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[11px] font-medium text-emerald-400 uppercase tracking-wider">
                  SOC 2 Compliant
                </span>
              </div>
              <div className="w-px h-3 bg-white/10" />
              <div className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[11px] font-medium text-white/50 uppercase tracking-wider">
                  Enterprise Ready
                </span>
              </div>
            </div>
          </motion.div>

          {/* Main headline - Editorial serif typography */}
          <motion.div variants={itemVariants} className="text-center max-w-5xl">
            <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-display leading-[0.95] tracking-[-0.02em] text-white">
              The operating system
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-amber-200 via-orange-300 to-amber-200 bg-clip-text text-transparent">
                  for modern agencies
                </span>
                {/* Underline accent */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-amber-500/30"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 7 Q50 0, 100 4 T200 3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="mt-8 text-lg sm:text-xl text-white/40 leading-relaxed max-w-2xl text-center font-light"
          >
            Replace your entire marketing team with 14 specialized AI agents.
            <br className="hidden sm:block" />
            Unified workflows, CRM, and communication in one platform.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col sm:flex-row items-center gap-4"
          >
            <Button
              size="lg"
              asChild
              className="h-14 px-8 text-[15px] font-medium gap-3 bg-white text-[#0A0A0B] hover:bg-white/90 rounded-full btn-enterprise group"
            >
              <a href="https://app.ozzios.com/sign-up">
                Start free trial
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="h-14 px-8 text-[15px] font-medium gap-3 text-white/70 hover:text-white hover:bg-white/5 rounded-full group"
            >
              <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/15 transition-colors">
                <Play className="h-3 w-3 fill-current ml-0.5" />
              </div>
              Watch demo
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="mt-20 flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
          >
            {[
              { value: '14', label: 'AI Agents' },
              { value: '77+', label: 'Native Tools' },
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '<200ms', label: 'Latency' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-white/30 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Product visualization - Animated Chat Interface */}
          <motion.div
            variants={itemVariants}
            className="mt-20 w-full max-w-5xl"
          >
            <div className="relative">
              {/* Glow effect */}
              <div
                className="absolute inset-0 blur-[60px] opacity-30 -z-10"
                style={{
                  background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.3) 0%, rgba(168, 85, 247, 0.15) 100%)',
                }}
              />

              {/* Browser chrome */}
              <div className="relative rounded-2xl border border-white/[0.08] bg-[#111113] overflow-hidden shadow-2xl shadow-black/50">
                {/* Window controls */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#0D0D0F]">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                      <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                      <span className="text-[11px] text-white/30 font-mono">app.ozzios.com</span>
                    </div>
                  </div>
                  <div className="w-16" />
                </div>

                {/* Slack-like Chat Interface */}
                <div className="relative aspect-[16/9] bg-[#0D0D0F] flex">
                  {/* Sidebar */}
                  <div className="hidden md:flex w-56 flex-col border-r border-white/[0.06] bg-[#0A0A0B]">
                    {/* Workspace header */}
                    <div className="p-3 border-b border-white/[0.06]">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                          <span className="text-[10px] font-bold text-white">AC</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[12px] font-semibold text-white truncate">Acme Agency</div>
                          <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            <span className="text-[10px] text-white/40">Online</span>
                          </div>
                        </div>
                        <ChevronDown className="w-3.5 h-3.5 text-white/30" />
                      </div>
                    </div>

                    {/* Channels */}
                    <div className="flex-1 overflow-hidden py-3">
                      <div className="px-3 mb-2">
                        <div className="flex items-center gap-1.5 text-[10px] font-semibold text-white/30 uppercase tracking-wider">
                          <ChevronDown className="w-3 h-3" />
                          Channels
                        </div>
                      </div>
                      <div className="space-y-0.5 px-2">
                        {sidebarChannels.map((channel) => (
                          <div
                            key={channel.name}
                            onClick={() => channel.hasMessages && handleChannelChange(channel.name)}
                            className={`flex items-center gap-2 px-2 py-1 rounded text-[11px] transition-all duration-200 ${
                              channel.name === activeChannel
                                ? 'bg-amber-500/10 text-white'
                                : channel.hasMessages
                                ? 'text-white/40 hover:bg-white/[0.06] hover:text-white/60 cursor-pointer'
                                : 'text-white/25'
                            }`}
                          >
                            {channel.starred && <Star className="w-3 h-3 text-amber-400 fill-amber-400" />}
                            <Hash className="w-3 h-3" />
                            <span className="truncate">{channel.name}</span>
                            {channel.hasMessages && channel.name !== activeChannel && (
                              <span className="ml-auto w-1.5 h-1.5 rounded-full bg-amber-400/60" />
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Team members */}
                      <div className="px-3 mt-4 mb-2">
                        <div className="flex items-center gap-1.5 text-[10px] font-semibold text-white/30 uppercase tracking-wider">
                          <ChevronDown className="w-3 h-3" />
                          Team
                        </div>
                      </div>
                      <div className="space-y-0.5 px-2">
                        {sidebarTeam.map((member) => (
                          <div
                            key={member.name}
                            className="flex items-center gap-2 px-2 py-1 rounded text-[11px] text-white/40 hover:bg-white/[0.03]"
                          >
                            <div className="relative">
                              {member.isAgent ? (
                                <SiriOrbAvatar
                                  size={20}
                                  variant={getAgentVariant(member.name)}
                                  orbState="idle"
                                  disableFloating={true}
                                  className="rounded-md"
                                />
                              ) : (
                                <img
                                  src={member.image}
                                  alt={member.name}
                                  className="w-5 h-5 rounded-md object-cover"
                                />
                              )}
                              <div
                                className={`absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border-2 border-[#0A0A0B] ${
                                  member.status === 'online' ? 'bg-emerald-400' : 'bg-amber-400'
                                }`}
                              />
                            </div>
                            <span className="truncate">{member.name}</span>
                            {member.isAgent && (
                              <span className="ml-auto text-[9px] px-1 py-0.5 rounded bg-indigo-500/20 text-indigo-400">AI</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Main chat area */}
                  <div className="flex-1 flex flex-col">
                    {/* Channel header */}
                    <div className="flex items-center justify-between px-4 py-2 border-b border-white/[0.06]">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                        <Hash className="w-4 h-4 text-white/40" />
                        <span className="text-[13px] font-semibold text-white">{activeChannel}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="hidden sm:flex items-center -space-x-2">
                          {sidebarTeam.slice(0, 3).map((member, i) => (
                            <div
                              key={member.name}
                              className="rounded-full overflow-visible"
                              style={{ zIndex: 3 - i }}
                            >
                              {member.isAgent ? (
                                <SiriOrbAvatar
                                  size={24}
                                  variant={getAgentVariant(member.name)}
                                  orbState="idle"
                                  disableFloating={true}
                                  className="rounded-full"
                                />
                              ) : (
                                <img src={member.image} alt="" className="w-6 h-6 rounded-full object-cover" />
                              )}
                            </div>
                          ))}
                          <div className="w-6 h-6 rounded-full border-2 border-[#0D0D0F] bg-white/10 flex items-center justify-center">
                            <span className="text-[9px] text-white/50">+4</span>
                          </div>
                        </div>
                        <Search className="w-4 h-4 text-white/30" />
                        <Settings className="w-4 h-4 text-white/30" />
                      </div>
                    </div>

                    {/* Chat tabs */}
                    <div className="flex items-center gap-1 px-4 py-2 border-b border-white/[0.06]">
                      {[
                        { icon: MessageSquare, label: 'Messages', active: true },
                        { icon: CheckCircle2, label: 'Tasks', active: false },
                        { icon: FileText, label: 'Files', active: false },
                        { icon: GitBranch, label: 'Branches', active: false },
                        { icon: Sparkles, label: 'Agent Creations', active: false },
                      ].map((tab) => (
                        <div
                          key={tab.label}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] ${
                            tab.active
                              ? 'bg-white/[0.06] text-white'
                              : 'text-white/30 hover:text-white/50'
                          }`}
                        >
                          <tab.icon className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">{tab.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Messages */}
                    <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hidden">
                      <AnimatePresence mode="popLayout">
                        {currentMessages
                          .filter((msg) => visibleMessages.includes(msg.id))
                          .map((message) => (
                            <motion.div
                              key={message.id}
                              variants={messageVariants}
                              initial="hidden"
                              animate="visible"
                              className="flex gap-3"
                            >
                              {/* Avatar */}
                              <div className="shrink-0">
                                {message.isAgent ? (
                                  <SiriOrbAvatar
                                    size={36}
                                    variant={getAgentVariant(message.user)}
                                    orbState={getAgentOrbState(message)}
                                    disableFloating={true}
                                    className="rounded-lg"
                                  />
                                ) : (
                                  <img
                                    src={message.avatar!}
                                    alt={message.user}
                                    className="w-9 h-9 rounded-lg object-cover"
                                  />
                                )}
                              </div>

                              {/* Content */}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-[12px] font-semibold text-white">
                                    {message.user}
                                  </span>
                                  {message.isAgent && (
                                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-400 font-medium">
                                      AI Agent
                                    </span>
                                  )}
                                  <span className="text-[10px] text-white/30">{message.time}</span>
                                </div>

                                <div className="text-[12px] text-white/60 leading-relaxed">
                                  {message.content.map((part, i) => {
                                    if (part.type === 'mention') {
                                      return (
                                        <span
                                          key={i}
                                          className="inline-flex items-center px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-medium"
                                        >
                                          {part.text}
                                        </span>
                                      );
                                    }
                                    if (part.type === 'list' && 'items' in part) {
                                      return (
                                        <ul key={i} className="my-2 space-y-1 ml-1">
                                          {(part.items as string[]).map((item, j) => (
                                            <li key={j} className="flex items-start gap-2">
                                              <span className="text-amber-400 mt-1">•</span>
                                              <span className="text-white/70">{item}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      );
                                    }
                                    if (part.type === 'metrics' && 'items' in part) {
                                      const items = part.items as Array<{label: string; value: string; change: string}>;
                                      return (
                                        <div key={i} className={`my-2 grid gap-2 ${items.length === 4 ? 'grid-cols-4' : 'grid-cols-5'}`}>
                                          {items.map((item, j) => (
                                            <div
                                              key={j}
                                              className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-center"
                                            >
                                              <div className="text-[10px] text-white/40 mb-1">{item.label}</div>
                                              <div className="text-[13px] text-white font-semibold">{item.value}</div>
                                              {item.change && (
                                                <div
                                                  className={`text-[9px] mt-0.5 ${
                                                    item.change.startsWith('+')
                                                      ? 'text-emerald-400'
                                                      : item.change.startsWith('-')
                                                      ? 'text-emerald-400'
                                                      : 'text-white/30'
                                                  }`}
                                                >
                                                  {item.change}
                                                </div>
                                              )}
                                            </div>
                                          ))}
                                        </div>
                                      );
                                    }
                                    if (part.type === 'images' && 'items' in part) {
                                      return (
                                        <div key={i} className="my-2 flex gap-2">
                                          {(part.items as Array<{image?: string; placeholder?: string; color?: string; wide?: boolean}>).map((item, j) => (
                                            <div
                                              key={j}
                                              className={`relative ${item.wide ? 'w-48 h-24' : 'w-20 h-20'} rounded-lg overflow-hidden group`}
                                            >
                                              {item.image ? (
                                                <img src={item.image} alt="Generated" className="absolute inset-0 w-full h-full object-cover" />
                                              ) : (
                                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />
                                              )}
                                              <div className="absolute inset-0 bg-black/20" />
                                              {item.placeholder && (
                                                <span className="absolute inset-0 flex items-center justify-center text-[10px] font-medium text-white/90">{item.placeholder}</span>
                                              )}
                                              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                          ))}
                                        </div>
                                      );
                                    }
                                    if (part.type === 'videos' && 'items' in part) {
                                      return (
                                        <div key={i} className="my-2 flex gap-2">
                                          {(part.items as Array<{image?: string; placeholder?: string; color?: string; duration: string}>).map((item, j) => (
                                            <div
                                              key={j}
                                              className="relative w-20 h-20 rounded-lg overflow-hidden group cursor-pointer"
                                            >
                                              {item.image ? (
                                                <img src={item.image} alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover" />
                                              ) : (
                                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />
                                              )}
                                              <div className="absolute inset-0 bg-black/40" />
                                              <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                <div className="w-7 h-7 rounded-full bg-white/90 flex items-center justify-center mb-1 shadow-lg">
                                                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-[#0A0A0B] border-b-[6px] border-b-transparent ml-1" />
                                                </div>
                                                <span className="text-[9px] font-medium text-white/90">{item.duration}</span>
                                              </div>
                                              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                          ))}
                                        </div>
                                      );
                                    }
                                    if (part.type === 'actions' && 'items' in part) {
                                      return (
                                        <div key={i} className="my-2 space-y-1.5">
                                          {(part.items as Array<{icon: string; action: string; status: string; detail: string}>).map((item, j) => (
                                            <div
                                              key={j}
                                              className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]"
                                            >
                                              <span className="text-[12px]">{item.icon}</span>
                                              <span className="text-white/80 font-medium text-[11px]">{item.action}</span>
                                              <span className="text-white/40 text-[10px]">•</span>
                                              <span className="text-white/40 text-[10px] truncate">{item.detail}</span>
                                              <span className={`ml-auto text-[9px] px-1.5 py-0.5 rounded ${
                                                item.status === 'success' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/20 text-blue-400'
                                              }`}>
                                                {item.status === 'success' ? '✓ Done' : 'Info'}
                                              </span>
                                            </div>
                                          ))}
                                        </div>
                                      );
                                    }
                                    if (part.type === 'keywords' && 'items' in part) {
                                      return (
                                        <div key={i} className="my-2 space-y-1.5">
                                          {(part.items as Array<{keyword: string; volume: string; difficulty: string; intent: string}>).map((item, j) => (
                                            <div
                                              key={j}
                                              className="flex items-center gap-3 p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]"
                                            >
                                              <span className="flex-1 text-white/80 text-[11px] font-medium truncate">{item.keyword}</span>
                                              <div className="flex items-center gap-2 shrink-0">
                                                <span className="text-[10px] text-white/40">{item.volume}/mo</span>
                                                <span className={`text-[9px] px-1.5 py-0.5 rounded ${
                                                  parseInt(item.difficulty) < 25 ? 'bg-emerald-500/20 text-emerald-400' :
                                                  parseInt(item.difficulty) < 40 ? 'bg-amber-500/20 text-amber-400' :
                                                  'bg-red-500/20 text-red-400'
                                                }`}>
                                                  KD: {item.difficulty}
                                                </span>
                                                <span className="text-[9px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-400">
                                                  {item.intent}
                                                </span>
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      );
                                    }
                                    if (part.type === 'code' && 'content' in part) {
                                      return (
                                        <div key={i} className="my-2 p-3 rounded-lg bg-black/40 border border-white/[0.06] font-mono text-[10px] text-emerald-400/90 whitespace-pre-line">
                                          {part.content}
                                        </div>
                                      );
                                    }
                                    return <span key={i}>{part.text}</span>;
                                  })}
                                </div>

                                {/* Reactions */}
                                {message.reactions && (
                                  <div className="flex gap-1.5 mt-2">
                                    {message.reactions.map((reaction, i) => (
                                      <div
                                        key={i}
                                        className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08]"
                                      >
                                        <span className="text-[11px]">{reaction.emoji}</span>
                                        <span className="text-[10px] text-white/50">{reaction.count}</span>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          ))}
                      </AnimatePresence>

                      {/* Typing indicator */}
                      <AnimatePresence>
                        {isTyping && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-2 text-[11px] text-white/40"
                          >
                            <div className="flex gap-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '0ms' }} />
                              <div className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '150ms' }} />
                              <div className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '300ms' }} />
                            </div>
                            <span>AI Agent is typing...</span>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Scroll anchor */}
                      <div ref={messagesEndRef} />
                    </div>

                    {/* Message input */}
                    <div className="p-3 border-t border-white/[0.06]">
                      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                        <span className="text-[11px] text-white/30">Message #{activeChannel}</span>
                        <div className="ml-auto flex items-center gap-2">
                          <div className="w-5 h-5 rounded bg-white/[0.05] flex items-center justify-center">
                            <span className="text-[10px] text-white/30">@</span>
                          </div>
                          <Send className="w-4 h-4 text-white/20" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enterprise logos */}
          <motion.div
            variants={itemVariants}
            className="mt-24 w-full"
          >
            <p className="text-center text-[11px] font-medium text-white/20 uppercase tracking-[0.2em] mb-8">
              Trusted by leading agencies worldwide
            </p>

            {/* Logo marquee */}
            <div className="relative overflow-hidden">
              {/* Gradient masks */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0B] to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0B] to-transparent z-10" />

              <motion.div
                className="flex items-center gap-16"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 30,
                    ease: 'linear',
                  },
                }}
              >
                {/* Double the logos for seamless loop */}
                {[...enterpriseLogos, ...enterpriseLogos].map((logo, i) => (
                  <div
                    key={`${logo.name}-${i}`}
                    className={`${logo.width} shrink-0 flex items-center justify-center`}
                  >
                    <span className="text-sm font-semibold text-white/15 tracking-wide whitespace-nowrap">
                      {logo.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0B] to-transparent pointer-events-none" />
    </section>
  );
}
