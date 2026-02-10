'use client';

import { motion } from 'framer-motion';
import { Search, Check, ArrowRight, Clock, Plug2, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

type IntegrationStatus = 'available' | 'coming-soon' | 'included';

type Integration = {
  id: string;
  name: string;
  description: string;
  icon: string;
  status: IntegrationStatus;
};

type IntegrationCategory = {
  id: string;
  title: string;
  integrations: Integration[];
};

const categories: IntegrationCategory[] = [
  {
    id: 'google',
    title: 'Google Workspace',
    integrations: [
      { id: 'google-calendar', name: 'Google Calendar', description: 'Calendar events and scheduling', icon: '📅', status: 'available' },
      { id: 'gmail', name: 'Gmail', description: 'Email access and sync', icon: '✉️', status: 'available' },
      { id: 'google-drive', name: 'Google Drive', description: 'Drive files and Google Docs', icon: '📁', status: 'available' },
      { id: 'google-ads', name: 'Google Ads', description: 'Ad campaigns and performance', icon: '📊', status: 'coming-soon' },
      { id: 'google-business', name: 'Google Business Profile', description: 'Business listings and reviews', icon: '🏢', status: 'available' },
    ],
  },
  {
    id: 'advertising',
    title: 'Advertising',
    integrations: [
      { id: 'meta-ads', name: 'Meta Ads', description: 'Facebook & Instagram advertising', icon: '📱', status: 'available' },
    ],
  },
  {
    id: 'social-media',
    title: 'Social Media',
    integrations: [
      { id: 'facebook', name: 'Facebook Pages', description: 'Page management and posts', icon: '👤', status: 'available' },
      { id: 'facebook-leads', name: 'Facebook Lead Forms', description: 'Capture leads from Facebook ads', icon: '📋', status: 'available' },
      { id: 'linkedin', name: 'LinkedIn', description: 'Professional network and posts', icon: '💼', status: 'coming-soon' },
      { id: 'twitter', name: 'X / Twitter', description: 'Social posts and engagement', icon: '🐦', status: 'coming-soon' },
      { id: 'tiktok', name: 'TikTok', description: 'Short-form video content', icon: '🎵', status: 'coming-soon' },
      { id: 'youtube', name: 'YouTube', description: 'Video content and analytics', icon: '▶️', status: 'available' },
    ],
  },
  {
    id: 'content',
    title: 'Content Publishing',
    integrations: [
      { id: 'wordpress', name: 'WordPress', description: 'Blog and website publishing', icon: '📝', status: 'available' },
      { id: 'wix', name: 'Wix', description: 'Publish content to Wix sites', icon: '🌐', status: 'available' },
      { id: 'shopify', name: 'Shopify', description: 'E-commerce store management', icon: '🛒', status: 'available' },
    ],
  },
  {
    id: 'communication',
    title: 'Communication',
    integrations: [
      { id: 'resend', name: 'Resend', description: 'Transactional email delivery', icon: '📧', status: 'available' },
      { id: 'twilio', name: 'Twilio', description: 'SMS and WhatsApp messaging', icon: '💬', status: 'available' },
    ],
  },
  {
    id: 'payments',
    title: 'Payments & Billing',
    integrations: [
      { id: 'stripe', name: 'Stripe', description: 'Payment processing', icon: '💳', status: 'available' },
    ],
  },
  {
    id: 'crm',
    title: 'CRM & Field Service',
    integrations: [
      { id: 'housecall-pro', name: 'HouseCall Pro', description: 'Field service management', icon: '🔧', status: 'available' },
      { id: 'servicetitan', name: 'ServiceTitan', description: 'Enterprise field service management', icon: '⚡', status: 'available' },
      { id: 'gohighlevel', name: 'GoHighLevel', description: 'All-in-one CRM & marketing automation', icon: '🚀', status: 'available' },
    ],
  },
  {
    id: 'ai-creative',
    title: 'AI & Creative',
    integrations: [
      { id: 'firecrawl', name: 'Firecrawl', description: 'Web scraping and crawling', icon: '🔥', status: 'included' },
      { id: 'tavily', name: 'Tavily', description: 'AI-powered web search', icon: '🔍', status: 'included' },
      { id: 'exa', name: 'Exa Search', description: 'Neural semantic search', icon: '🧠', status: 'included' },
      { id: 'nanobanana', name: 'Nano Banana', description: 'Gemini image generation', icon: '🍌', status: 'included' },
      { id: 'veo', name: 'Veo 3', description: 'AI video generation', icon: '🎬', status: 'included' },
      { id: 'elevenlabs', name: 'ElevenLabs', description: 'AI text-to-speech', icon: '🎙️', status: 'included' },
      { id: 'openai-image', name: 'GPT-Image-1.5', description: 'OpenAI image generation', icon: '🎨', status: 'included' },
    ],
  },
  {
    id: 'ai-models',
    title: 'AI Models (Bring Your Own Key)',
    integrations: [
      { id: 'ollama', name: 'Ollama', description: 'Local or cloud LLM inference (Kimi K2.5)', icon: '🦙', status: 'available' },
      { id: 'groq', name: 'Groq', description: 'Ultra-fast LPU inference (Kimi K2)', icon: '⚡', status: 'available' },
      { id: 'gemini', name: 'Google Gemini', description: 'Gemini 3 Flash & Pro models', icon: '✨', status: 'available' },
      { id: 'minimax', name: 'MiniMax', description: 'Multi-language coding (M2.1)', icon: '🤖', status: 'available' },
    ],
  },
  {
    id: 'data-research',
    title: 'Data & Research',
    integrations: [
      { id: 'zillow', name: 'Zillow', description: 'Real estate data and listings', icon: '🏠', status: 'coming-soon' },
      { id: 'semrush', name: 'SEMrush', description: 'PPC keyword research and forecasting', icon: '📈', status: 'coming-soon' },
    ],
  },
];

const filterOptions = [
  { id: 'all', label: 'All Integrations' },
  { id: 'available', label: 'Available' },
  { id: 'included', label: 'Included' },
  { id: 'coming-soon', label: 'Coming Soon' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

function StatusBadge({ status }: { status: IntegrationStatus }) {
  switch (status) {
    case 'available':
      return (
        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <Check className="w-3 h-3 text-emerald-400" />
          <span className="text-[11px] font-medium text-emerald-400">Available</span>
        </span>
      );
    case 'coming-soon':
      return (
        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-foreground/5 border border-foreground/10">
          <Clock className="w-3 h-3 text-foreground/40" />
          <span className="text-[11px] font-medium text-foreground/40">Coming Soon</span>
        </span>
      );
    case 'included':
      return (
        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
          <Sparkles className="w-3 h-3 text-indigo-400" />
          <span className="text-[11px] font-medium text-indigo-400">Included Free</span>
        </span>
      );
    default:
      return null;
  }
}

export function IntegrationsView() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = categories.map((category) => ({
    ...category,
    integrations: category.integrations.filter((integration) => {
      const matchesSearch =
        integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        integration.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesFilter =
        activeFilter === 'all' ||
        integration.status === activeFilter;

      return matchesSearch && matchesFilter;
    }),
  })).filter((category) => category.integrations.length > 0);

  const totalIntegrations = categories.reduce((acc, cat) => acc + cat.integrations.length, 0);
  const availableCount = categories.reduce(
    (acc, cat) => acc + cat.integrations.filter((i) => i.status === 'available' || i.status === 'included').length,
    0
  );
  const includedCount = categories.reduce(
    (acc, cat) => acc + cat.integrations.filter((i) => i.status === 'included').length,
    0
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        {/* Background effects */}
        <div
          className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full blur-[120px] opacity-15 pointer-events-none glow-amber-hero"
        />

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
                <Plug2 className="w-4 h-4 text-amber-400" />
                <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider">
                  {totalIntegrations}+ Integrations
                </span>
              </div>
              <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-display leading-[1.05] tracking-[-0.02em] text-foreground mb-6">
                Connect your
                <br />
                <span className="bg-gradient-to-r from-amber-200 via-orange-300 to-amber-200 bg-clip-text text-transparent">
                  entire stack
                </span>
              </h1>
              <p className="text-lg text-foreground/40 max-w-xl mx-auto">
                OzziOS connects with the tools you already use. From CRMs to social media, advertising to AI—everything works together seamlessly.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex items-center justify-center gap-8 mb-12">
              <div className="text-center">
                <p className="text-3xl font-display text-foreground">{availableCount}</p>
                <p className="text-[13px] text-foreground/40">Available Now</p>
              </div>
              <div className="w-px h-10 bg-foreground/10" />
              <div className="text-center">
                <p className="text-3xl font-display text-foreground">{includedCount}</p>
                <p className="text-[13px] text-foreground/40">Included Free</p>
              </div>
              <div className="w-px h-10 bg-foreground/10" />
              <div className="text-center">
                <p className="text-3xl font-display text-foreground">10</p>
                <p className="text-[13px] text-foreground/40">Categories</p>
              </div>
            </motion.div>

            {/* Search and Filters */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
              {/* Search */}
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
                <input
                  type="text"
                  placeholder="Search integrations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-12 pl-11 pr-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[14px] text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-amber-500/40 focus:bg-white/[0.05] transition-all"
                />
              </div>

              {/* Filter buttons */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto">
                {filterOptions.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={cn(
                      'px-4 py-2 rounded-full text-[13px] font-medium whitespace-nowrap transition-all duration-300',
                      activeFilter === filter.id
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                        : 'text-foreground/50 hover:text-foreground/70 hover:bg-white/[0.05] border border-transparent'
                    )}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-12"
          >
            {filteredCategories.map((category) => (
              <motion.div key={category.id} variants={itemVariants}>
                <h2 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-3">
                  {category.title}
                  <span className="text-[12px] font-normal text-foreground/30">
                    {category.integrations.length} integration{category.integrations.length !== 1 ? 's' : ''}
                  </span>
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {category.integrations.map((integration) => (
                    <div
                      key={integration.id}
                      className={cn(
                        'group relative p-5 rounded-xl border transition-all duration-300',
                        integration.status === 'coming-soon'
                          ? 'bg-white/[0.01] border-white/[0.04] opacity-60'
                          : 'bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.04]'
                      )}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-2xl shrink-0">
                          {integration.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-[15px] font-medium text-foreground mb-1">
                            {integration.name}
                          </h3>
                          <p className="text-[13px] text-foreground/40 leading-relaxed mb-3">
                            {integration.description}
                          </p>
                          <StatusBadge status={integration.status} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Empty state */}
            {filteredCategories.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-foreground/40 text-lg mb-2">No integrations found</p>
                <p className="text-foreground/30 text-[14px]">
                  Try adjusting your search or filter
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="mx-auto max-w-[600px] px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display text-foreground mb-4">
              Need a custom integration?
            </h3>
            <p className="text-[15px] text-foreground/40 mb-8">
              Our team can build custom integrations for your specific workflow. Let us know what you need.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.ozzios.com/sign-up"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#0A0A0B] font-medium text-[15px] hover:bg-white/90 transition-colors"
              >
                Get started free
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/[0.1] text-[14px] font-medium text-foreground/60 hover:text-foreground hover:bg-white/[0.05] hover:border-white/[0.15] transition-all"
              >
                Request integration
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
