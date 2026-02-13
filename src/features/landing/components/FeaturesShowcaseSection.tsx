import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { Link } from '@tanstack/react-router';
import { cn } from '@/lib/utils';
import {
  Mail,
  Send,
  MessageSquare,
  Share2,
  FileInput,
  Phone,
  FileText,
  Monitor,
  Code,
  CheckSquare,
  Users,
  LayoutDashboard,
  FileCheck,
  BookOpen,
  MessageCircle,
  Workflow,
  Bot,
  ArrowRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const categories = [
  { id: 'marketing', label: 'Marketing & Campaigns' },
  { id: 'content', label: 'Content & Creative' },
  { id: 'productivity', label: 'Productivity & Ops' },
  { id: 'ai', label: 'AI & Communication' },
] as const;

type CategoryId = (typeof categories)[number]['id'];

interface Feature {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  href: string;
  category: CategoryId;
}

const features: Feature[] = [
  // Marketing & Campaigns
  {
    id: 'email-campaigns',
    name: 'Email Campaigns',
    description: 'Send targeted campaigns with AI-optimized subject lines and send times.',
    icon: Send,
    href: '/features/email-campaigns',
    category: 'marketing',
  },
  {
    id: 'sms-campaigns',
    name: 'SMS Campaigns',
    description: 'Reach customers directly with personalized text message campaigns.',
    icon: MessageSquare,
    href: '/features/sms-campaigns',
    category: 'marketing',
  },
  {
    id: 'social-media',
    name: 'Social Media',
    description: 'Schedule and publish across all platforms from one dashboard.',
    icon: Share2,
    href: '/features/social-media',
    category: 'marketing',
  },
  {
    id: 'email-builder',
    name: 'Email Builder',
    description: 'Drag-and-drop email editor with AI content generation.',
    icon: Mail,
    href: '/features/email-builder',
    category: 'marketing',
  },
  {
    id: 'forms',
    name: 'Forms',
    description: 'Build smart forms that capture leads and trigger automations.',
    icon: FileInput,
    href: '/features/forms',
    category: 'marketing',
  },
  // Content & Creative
  {
    id: 'blog-seo',
    name: 'Blog & SEO',
    description: 'AI-written articles optimized for search with built-in SEO scoring.',
    icon: FileText,
    href: '/features/blog-seo',
    category: 'content',
  },
  {
    id: 'presentations',
    name: 'Presentations',
    description: 'Generate professional slide decks from a single prompt.',
    icon: Monitor,
    href: '/features/presentations',
    category: 'content',
  },
  {
    id: 'coding',
    name: 'Reports & Code',
    description: 'AI generates custom dashboards, reports, and applications.',
    icon: Code,
    href: '/features/coding',
    category: 'content',
  },
  {
    id: 'knowledge-base',
    name: 'Knowledge Base',
    description: 'Build searchable help centers and internal documentation wikis.',
    icon: BookOpen,
    href: '/features/knowledge-base',
    category: 'content',
  },
  // Productivity & Ops
  {
    id: 'tasks',
    name: 'Task Management',
    description: 'Kanban boards, assignments, and project tracking for your team.',
    icon: CheckSquare,
    href: '/features/tasks',
    category: 'productivity',
  },
  {
    id: 'crm',
    name: 'CRM & Deals',
    description: 'Manage contacts, pipeline stages, and deal flow in one place.',
    icon: Users,
    href: '/features/crm',
    category: 'productivity',
  },
  {
    id: 'dashboard',
    name: 'Dashboard',
    description: '18 widget types for real-time business analytics and reporting.',
    icon: LayoutDashboard,
    href: '/features/dashboard',
    category: 'productivity',
  },
  {
    id: 'documents',
    name: 'Documents & E-Sign',
    description: 'Create, share, and collect digital signatures on documents.',
    icon: FileCheck,
    href: '/features/documents',
    category: 'productivity',
  },
  // AI & Communication
  {
    id: 'ai-agents',
    name: 'AI Agents',
    description: '30+ specialized agents that learn your brand and work 24/7.',
    icon: Bot,
    href: '/features/ai-agents',
    category: 'ai',
  },
  {
    id: 'voice-agents',
    name: 'Voice Agents',
    description: 'AI phone agents that handle calls and book appointments.',
    icon: Phone,
    href: '/features/voice-agents',
    category: 'ai',
  },
  {
    id: 'workflows',
    name: 'Workflows',
    description: 'Visual automation builder with 22 triggers and 8 node types.',
    icon: Workflow,
    href: '/features/workflows',
    category: 'ai',
  },
  {
    id: 'channels',
    name: 'Channels',
    description: 'Real-time community spaces for team and client collaboration.',
    icon: MessageCircle,
    href: '/features/channels',
    category: 'ai',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
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

export function FeaturesShowcaseSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('marketing');
  const [activeFeatureId, setActiveFeatureId] = useState<string>('email-campaigns');
  const [isPaused, setIsPaused] = useState(false);

  const categoryFeatures = features.filter((f) => f.category === activeCategory);
  const activeFeature = features.find((f) => f.id === activeFeatureId) ?? categoryFeatures[0];

  // Auto-rotate through features
  const advanceFeature = useCallback(() => {
    if (isPaused) return;
    const currentIndex = categoryFeatures.findIndex((f) => f.id === activeFeatureId);
    const nextIndex = (currentIndex + 1) % categoryFeatures.length;
    setActiveFeatureId(categoryFeatures[nextIndex].id);
  }, [activeFeatureId, categoryFeatures, isPaused]);

  useEffect(() => {
    const timer = setInterval(advanceFeature, 4000);
    return () => clearInterval(timer);
  }, [advanceFeature]);

  // When category changes, select first feature
  useEffect(() => {
    const firstFeature = features.find((f) => f.category === activeCategory);
    if (firstFeature) setActiveFeatureId(firstFeature.id);
  }, [activeCategory]);

  return (
    <section id="showcase" className="py-24 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="mb-12 lg:mb-16 max-w-2xl">
            <p className="text-xs font-medium text-signature uppercase tracking-[0.15em] mb-3">
              Features
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-foreground mb-4">
              Everything your team needs.
              <br />
              <span className="text-muted-foreground">One platform.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              17 features that replace your entire marketing stack. Explore each one.
            </p>
          </motion.div>

          {/* Category tabs */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200',
                    activeCategory === cat.id
                      ? 'bg-foreground text-background'
                      : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20'
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Main content: Feature list + Preview */}
          <motion.div variants={itemVariants}>
            <div
              className="grid lg:grid-cols-5 gap-6"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Left: Feature list */}
              <div className="lg:col-span-2 space-y-2">
                {categoryFeatures.map((feature) => {
                  const Icon = feature.icon;
                  const isActive = feature.id === activeFeature.id;

                  return (
                    <button
                      key={feature.id}
                      onClick={() => setActiveFeatureId(feature.id)}
                      className={cn(
                        'w-full text-left p-4 rounded-xl transition-all duration-200 group',
                        isActive
                          ? 'bg-card border-2 border-signature/30 shadow-sm'
                          : 'bg-transparent border-2 border-transparent hover:bg-card hover:border-border'
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={cn(
                            'shrink-0 h-10 w-10 rounded-lg flex items-center justify-center transition-colors',
                            isActive
                              ? 'bg-signature/10'
                              : 'bg-muted group-hover:bg-muted'
                          )}
                        >
                          <Icon
                            className={cn(
                              'h-5 w-5 transition-colors',
                              isActive ? 'text-signature' : 'text-muted-foreground'
                            )}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <h3
                              className={cn(
                                'text-sm font-semibold transition-colors',
                                isActive ? 'text-foreground' : 'text-foreground/80'
                              )}
                            >
                              {feature.name}
                            </h3>
                            <ArrowRight
                              className={cn(
                                'h-4 w-4 shrink-0 transition-all',
                                isActive
                                  ? 'text-signature opacity-100 translate-x-0'
                                  : 'text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0'
                              )}
                            />
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}

                {/* Learn more link */}
                {activeFeature && (
                  <div className="pt-2 pl-4">
                    <Link
                      to={activeFeature.href}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-signature hover:text-signature/80 transition-colors"
                    >
                      Learn more about {activeFeature.name}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                )}
              </div>

              {/* Right: Preview */}
              <div className="lg:col-span-3">
                <div className="sticky top-8">
                  <BrowserChrome url={`app.ozzios.com/${activeFeature.id}`}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeFeature.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3 }}
                        className="min-h-[340px] p-5"
                      >
                        <FeaturePreview featureId={activeFeature.id} />
                      </motion.div>
                    </AnimatePresence>
                  </BrowserChrome>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom: All features link */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">17 features</span> across 4
              categories.{' '}
              <span className="text-muted-foreground">All included in every plan.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Browser chrome wrapper
function BrowserChrome({ children, url }: { children: React.ReactNode; url: string }) {
  return (
    <div className="rounded-2xl border border-border bg-background overflow-hidden shadow-2xl shadow-black/10">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
        </div>
        <div className="flex-1 mx-3">
          <div className="bg-muted rounded-md px-3 py-1.5 text-xs text-muted-foreground font-mono">
            {url}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

// Feature preview renderer
function FeaturePreview({ featureId }: { featureId: string }) {
  switch (featureId) {
    case 'email-campaigns':
      return <EmailCampaignsPreview />;
    case 'sms-campaigns':
      return <SmsCampaignsPreview />;
    case 'social-media':
      return <SocialMediaPreview />;
    case 'email-builder':
      return <EmailBuilderPreview />;
    case 'forms':
      return <FormsPreview />;
    case 'blog-seo':
      return <BlogSeoPreview />;
    case 'presentations':
      return <PresentationsPreview />;
    case 'coding':
      return <CodingPreview />;
    case 'knowledge-base':
      return <KnowledgeBasePreview />;
    case 'tasks':
      return <TasksPreview />;
    case 'crm':
      return <CrmPreview />;
    case 'dashboard':
      return <DashboardPreview />;
    case 'documents':
      return <DocumentsPreview />;
    case 'ai-agents':
      return <AIAgentsPreview />;
    case 'voice-agents':
      return <VoiceAgentsPreview />;
    case 'workflows':
      return <WorkflowsPreview />;
    case 'channels':
      return <ChannelsPreview />;
    default:
      return null;
  }
}

// ── Preview Components ──────────────────────────────────────────────

function EmailCampaignsPreview() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-foreground">Campaign Dashboard</div>
        <span className="px-2 py-0.5 text-[10px] font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full">
          Live
        </span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Sent', value: '12,847', color: 'text-foreground' },
          { label: 'Opened', value: '68.2%', color: 'text-signature' },
          { label: 'Clicked', value: '24.1%', color: 'text-foreground' },
        ].map((m) => (
          <div key={m.label} className="bg-muted/50 rounded-lg p-3">
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{m.label}</div>
            <div className={cn('text-lg font-semibold', m.color)}>{m.value}</div>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <div className="text-xs text-muted-foreground">Performance by Campaign</div>
        {[
          { name: 'Welcome Series', pct: 85 },
          { name: 'Product Launch', pct: 72 },
          { name: 'Weekly Newsletter', pct: 61 },
          { name: 'Re-engagement', pct: 48 },
        ].map((c) => (
          <div key={c.name} className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground w-28 truncate">{c.name}</span>
            <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${c.pct}%` }}
                transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                className="h-full bg-signature rounded-full"
              />
            </div>
            <span className="text-xs font-medium text-foreground w-8 text-right">{c.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SmsCampaignsPreview() {
  return (
    <div className="flex flex-col items-center">
      {/* Phone mockup */}
      <div className="w-56 bg-card border-2 border-border rounded-[2rem] p-4 space-y-3">
        <div className="w-16 h-1 bg-muted rounded-full mx-auto mb-2" />
        <div className="space-y-2">
          {[
            { text: 'Hi Sarah! Your appointment is confirmed for tomorrow at 2pm.', sent: true },
            { text: 'Can I reschedule to 3pm?', sent: false },
            { text: "Done! Moved to 3pm. We'll send a reminder 1hr before.", sent: true },
          ].map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.4 + 0.3 }}
              className={cn(
                'px-3 py-2 rounded-2xl text-xs max-w-[85%]',
                msg.sent
                  ? 'bg-signature text-white ml-auto rounded-br-sm'
                  : 'bg-muted text-foreground mr-auto rounded-bl-sm'
              )}
            >
              {msg.text}
            </motion.div>
          ))}
        </div>
        <div className="pt-2 flex items-center gap-2">
          <div className="flex-1 h-8 bg-muted rounded-full px-3 flex items-center">
            <span className="text-[10px] text-muted-foreground">Type a message...</span>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
        <span>Delivered: <span className="font-semibold text-foreground">2,847</span></span>
        <span>Response rate: <span className="font-semibold text-foreground">34%</span></span>
      </div>
    </div>
  );
}

function SocialMediaPreview() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-foreground">Social Scheduler</div>
        <div className="flex gap-1.5">
          {[
            { name: 'Meta', color: 'bg-blue-500' },
            { name: 'X', color: 'bg-foreground' },
            { name: 'LinkedIn', color: 'bg-blue-700' },
            { name: 'TikTok', color: 'bg-pink-500' },
          ].map((p) => (
            <div key={p.name} className={cn('w-5 h-5 rounded-full flex items-center justify-center', p.color)}>
              <span className="text-[8px] font-bold text-white">{p.name[0]}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        {[
          { time: '9:00 AM', platform: 'LinkedIn', title: '5 Marketing Trends for 2025', status: 'Scheduled' },
          { time: '12:30 PM', platform: 'Meta', title: 'New product feature announcement', status: 'Scheduled' },
          { time: '3:00 PM', platform: 'X', title: 'Customer success story thread', status: 'Draft' },
          { time: '5:30 PM', platform: 'TikTok', title: 'Behind the scenes video', status: 'AI Generating' },
        ].map((post, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 + 0.2 }}
            className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border/50"
          >
            <span className="text-[10px] text-muted-foreground font-mono w-14">{post.time}</span>
            <span className="text-xs font-medium text-foreground/60 w-14">{post.platform}</span>
            <span className="text-xs text-foreground flex-1 truncate">{post.title}</span>
            <span
              className={cn(
                'text-[10px] px-2 py-0.5 rounded-full font-medium',
                post.status === 'Scheduled'
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                  : post.status === 'AI Generating'
                    ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
                    : 'bg-muted text-muted-foreground'
              )}
            >
              {post.status}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function EmailBuilderPreview() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-foreground">Email Editor</div>
        <div className="flex gap-2">
          <span className="px-2 py-0.5 text-[10px] font-medium bg-muted text-muted-foreground rounded">Desktop</span>
          <span className="px-2 py-0.5 text-[10px] font-medium bg-muted text-muted-foreground rounded">Mobile</span>
        </div>
      </div>
      <div className="flex gap-3">
        {/* Sidebar blocks */}
        <div className="w-20 space-y-2">
          {['Header', 'Text', 'Image', 'Button', 'Divider', 'Footer'].map((block) => (
            <div
              key={block}
              className="p-2 text-[10px] text-center text-muted-foreground bg-muted/50 border border-dashed border-border rounded-lg cursor-grab"
            >
              {block}
            </div>
          ))}
        </div>
        {/* Email preview */}
        <div className="flex-1 bg-white dark:bg-muted/20 rounded-lg border border-border p-4 space-y-3">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="h-12 bg-signature/10 rounded-lg flex items-center justify-center"
          >
            <span className="text-xs font-semibold text-signature">LOGO</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="h-24 bg-muted/50 rounded-lg flex items-center justify-center"
          >
            <span className="text-[10px] text-muted-foreground">Hero Image</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-1.5"
          >
            <div className="h-3 bg-muted rounded w-3/4" />
            <div className="h-2 bg-muted/60 rounded w-full" />
            <div className="h-2 bg-muted/60 rounded w-5/6" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="h-9 bg-signature rounded-lg flex items-center justify-center"
          >
            <span className="text-xs font-medium text-white">Shop Now</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function FormsPreview() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-foreground">Form Builder</div>
        <span className="text-[10px] text-muted-foreground">47 responses</span>
      </div>
      <div className="bg-card border border-border rounded-xl p-5 space-y-4">
        <div className="text-base font-semibold text-foreground">Contact Us</div>
        {[
          { label: 'Full Name', placeholder: 'John Smith', type: 'text' },
          { label: 'Email', placeholder: 'john@example.com', type: 'email' },
          { label: 'Company', placeholder: 'Acme Inc.', type: 'text' },
        ].map((field, i) => (
          <motion.div
            key={field.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 + 0.2 }}
            className="space-y-1"
          >
            <label className="text-xs font-medium text-foreground">{field.label}</label>
            <div className="h-9 bg-muted/50 border border-border rounded-lg px-3 flex items-center">
              <span className="text-xs text-muted-foreground">{field.placeholder}</span>
            </div>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="space-y-1"
        >
          <label className="text-xs font-medium text-foreground">Message</label>
          <div className="h-16 bg-muted/50 border border-border rounded-lg" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="h-9 bg-signature rounded-lg flex items-center justify-center"
        >
          <span className="text-xs font-medium text-white">Submit</span>
        </motion.div>
      </div>
    </div>
  );
}

function BlogSeoPreview() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-foreground">Blog Editor</div>
        <span className="px-2 py-0.5 text-[10px] font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full">
          SEO Score: 92
        </span>
      </div>
      <div className="flex gap-4">
        {/* Article content */}
        <div className="flex-1 space-y-3">
          <div className="h-4 bg-foreground/80 rounded w-3/4" />
          <div className="space-y-1.5">
            <div className="h-2 bg-muted rounded w-full" />
            <div className="h-2 bg-muted rounded w-5/6" />
            <div className="h-2 bg-muted rounded w-full" />
            <div className="h-2 bg-muted rounded w-4/5" />
          </div>
          <div className="h-28 bg-muted/50 rounded-lg flex items-center justify-center">
            <span className="text-[10px] text-muted-foreground">Featured Image</span>
          </div>
          <div className="space-y-1.5">
            <div className="h-3 bg-foreground/60 rounded w-1/2" />
            <div className="h-2 bg-muted rounded w-full" />
            <div className="h-2 bg-muted rounded w-5/6" />
          </div>
        </div>
        {/* SEO sidebar */}
        <div className="w-32 space-y-3">
          <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
            SEO Analysis
          </div>
          {[
            { label: 'Readability', score: 94, color: 'bg-green-500' },
            { label: 'Keywords', score: 88, color: 'bg-green-500' },
            { label: 'Meta Tags', score: 100, color: 'bg-green-500' },
            { label: 'Links', score: 75, color: 'bg-yellow-500' },
          ].map((item) => (
            <div key={item.label} className="space-y-1">
              <div className="flex justify-between">
                <span className="text-[10px] text-muted-foreground">{item.label}</span>
                <span className="text-[10px] font-medium text-foreground">{item.score}</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.score}%` }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className={cn('h-full rounded-full', item.color)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PresentationsPreview() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-foreground">Presentation Builder</div>
        <div className="flex gap-2 items-center">
          <span className="px-2 py-0.5 text-[10px] font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 rounded-full">
            AI Generated
          </span>
        </div>
      </div>
      {/* Main slide */}
      <div className="aspect-[16/9] bg-gradient-to-br from-muted/50 to-muted rounded-lg border border-border p-6 flex flex-col justify-between relative overflow-hidden">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-base font-semibold text-foreground"
          >
            Q4 Marketing Strategy
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xs text-muted-foreground mt-1"
          >
            Growth Plan & Revenue Targets
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex gap-3"
        >
          {[65, 82, 45, 91].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col justify-end">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                className="bg-signature/60 rounded-t-sm min-h-[4px]"
                style={{ maxHeight: 60 }}
              />
            </div>
          ))}
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-signature" />
      </div>
      {/* Slide thumbnails */}
      <div className="flex gap-2">
        {['Title Slide', 'Overview', 'Charts', 'Strategy', 'Timeline'].map((s, i) => (
          <div
            key={s}
            className={cn(
              'flex-1 h-12 rounded-md border flex items-center justify-center',
              i === 2
                ? 'border-signature bg-signature/5'
                : 'border-border bg-muted/30'
            )}
          >
            <span className="text-[8px] text-muted-foreground">{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CodingPreview() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-sm font-semibold text-foreground">Code Sandbox</div>
          <span className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            Live
          </span>
        </div>
      </div>
      <div className="flex gap-3 min-h-[240px]">
        {/* Code editor */}
        <div className="flex-1 bg-[#1e1e2e] rounded-lg p-3 font-mono text-[10px] leading-relaxed overflow-hidden">
          {[
            { text: 'import', color: 'text-purple-400', rest: ' { BarChart }', restColor: 'text-blue-300' },
            { text: 'const', color: 'text-purple-400', rest: ' data = fetchMetrics()', restColor: 'text-green-300' },
            { text: '', color: '', rest: '', restColor: '' },
            { text: 'export default', color: 'text-purple-400', rest: ' function Report() {', restColor: 'text-blue-300' },
            { text: '  return', color: 'text-purple-400', rest: ' (', restColor: 'text-white' },
            { text: '    <Dashboard', color: 'text-blue-300', rest: '>', restColor: 'text-white' },
            { text: '      <MetricCards', color: 'text-blue-300', rest: ' data={data} />', restColor: 'text-green-300' },
            { text: '      <BarChart', color: 'text-blue-300', rest: ' data={data} />', restColor: 'text-green-300' },
            { text: '    </Dashboard>', color: 'text-blue-300', rest: '', restColor: '' },
          ].map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.12 + 0.2 }}
            >
              <span className={line.color}>{line.text}</span>
              <span className={line.restColor}>{line.rest}</span>
            </motion.div>
          ))}
        </div>
        {/* Preview pane */}
        <div className="w-36 bg-muted/50 rounded-lg border border-border p-3 space-y-2">
          <div className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider">Preview</div>
          <div className="grid grid-cols-2 gap-1.5">
            {['$48K', '2.4K', '+18%', '94%'].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="bg-card border border-border rounded p-1.5 text-center"
              >
                <div className="text-[10px] font-bold text-foreground">{v}</div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="flex gap-1 items-end h-16"
          >
            {[40, 65, 50, 80, 60, 75].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.5, delay: 1.4 + i * 0.08 }}
                className="flex-1 bg-signature/60 rounded-t-sm"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function KnowledgeBasePreview() {
  return (
    <div className="space-y-4">
      <div className="text-sm font-semibold text-foreground">Knowledge Base</div>
      <div className="bg-muted/30 rounded-lg p-3 flex items-center gap-2 border border-border">
        <span className="text-muted-foreground text-xs">Search articles...</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { title: 'Getting Started', articles: 12, icon: '🚀' },
          { title: 'Account Settings', articles: 8, icon: '⚙️' },
          { title: 'Billing & Plans', articles: 6, icon: '💳' },
          { title: 'API Reference', articles: 24, icon: '📖' },
        ].map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 + 0.3 }}
            className="bg-card border border-border rounded-lg p-4 hover:border-signature/30 transition-colors"
          >
            <div className="text-lg mb-2">{cat.icon}</div>
            <div className="text-xs font-semibold text-foreground">{cat.title}</div>
            <div className="text-[10px] text-muted-foreground mt-0.5">{cat.articles} articles</div>
          </motion.div>
        ))}
      </div>
      <div className="space-y-2">
        <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Popular Articles</div>
        {['How to set up your first campaign', 'Connecting your domain', 'Understanding analytics'].map(
          (article, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-foreground/80 p-2 rounded bg-muted/30">
              <FileText className="h-3 w-3 text-muted-foreground" />
              {article}
            </div>
          )
        )}
      </div>
    </div>
  );
}

function TasksPreview() {
  return (
    <div className="space-y-3">
      <div className="text-sm font-semibold text-foreground">Task Board</div>
      <div className="grid grid-cols-3 gap-3">
        {[
          {
            title: 'To Do',
            count: 5,
            cards: ['Design landing page', 'Write blog post', 'Review SEO audit'],
          },
          {
            title: 'In Progress',
            count: 3,
            cards: ['Email campaign setup', 'Social media calendar'],
          },
          {
            title: 'Done',
            count: 12,
            cards: ['CRM migration', 'Brand guidelines'],
          },
        ].map((col, colIndex) => (
          <div key={col.title} className="bg-muted/50 rounded-lg p-2.5">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-[10px] font-semibold text-foreground uppercase tracking-wider">
                {col.title}
              </span>
              <span className="text-[10px] text-muted-foreground">{col.count}</span>
            </div>
            <div className="space-y-1.5">
              {col.cards.map((card, i) => (
                <motion.div
                  key={card}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: colIndex * 0.15 + i * 0.1 + 0.3 }}
                  className="bg-card border border-border rounded-md p-2"
                >
                  <div className="text-[10px] text-foreground">{card}</div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CrmPreview() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-foreground">CRM Pipeline</div>
        <span className="text-xs text-muted-foreground">$284K in pipeline</span>
      </div>
      {/* Pipeline stages */}
      <div className="flex gap-1">
        {[
          { stage: 'Lead', count: 24, width: 'w-full' },
          { stage: 'Qualified', count: 18, width: 'w-5/6' },
          { stage: 'Proposal', count: 8, width: 'w-3/5' },
          { stage: 'Closed', count: 5, width: 'w-2/5' },
        ].map((s) => (
          <div key={s.stage} className="flex-1 text-center">
            <div className="h-8 bg-signature/20 rounded-t flex items-center justify-center" style={{ opacity: 0.4 + (s.count / 24) * 0.6 }}>
              <span className="text-xs font-bold text-signature">{s.count}</span>
            </div>
            <div className="text-[9px] text-muted-foreground mt-1">{s.stage}</div>
          </div>
        ))}
      </div>
      {/* Recent contacts */}
      <div className="space-y-2">
        <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Recent Contacts</div>
        {[
          { name: 'Sarah Johnson', company: 'TechCorp', deal: '$45K', status: 'Qualified' },
          { name: 'Mike Chen', company: 'StartupXYZ', deal: '$28K', status: 'Proposal' },
          { name: 'Lisa Park', company: 'GrowthCo', deal: '$62K', status: 'Lead' },
        ].map((contact, i) => (
          <motion.div
            key={contact.name}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 + 0.4 }}
            className="flex items-center gap-3 p-2 rounded-lg bg-muted/30"
          >
            <div className="w-7 h-7 rounded-full bg-signature/10 flex items-center justify-center">
              <span className="text-[10px] font-bold text-signature">{contact.name[0]}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-medium text-foreground">{contact.name}</div>
              <div className="text-[10px] text-muted-foreground">{contact.company}</div>
            </div>
            <div className="text-xs font-semibold text-foreground">{contact.deal}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function DashboardPreview() {
  return (
    <div className="space-y-3">
      <div className="text-sm font-semibold text-foreground">Dashboard</div>
      <div className="grid grid-cols-4 gap-2">
        {[
          { label: 'Revenue', value: '$48.2K', trend: '+12%' },
          { label: 'Visitors', value: '24.1K', trend: '+8%' },
          { label: 'Leads', value: '847', trend: '+24%' },
          { label: 'Conversion', value: '3.2%', trend: '+0.4%' },
        ].map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 + 0.2 }}
            className="bg-card border border-border rounded-lg p-2.5"
          >
            <div className="text-[9px] text-muted-foreground uppercase tracking-wider">{m.label}</div>
            <div className="text-sm font-bold text-foreground mt-0.5">{m.value}</div>
            <div className="text-[10px] text-green-600 dark:text-green-400 font-medium">{m.trend}</div>
          </motion.div>
        ))}
      </div>
      {/* Chart area */}
      <div className="bg-card border border-border rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-semibold text-foreground">Revenue Over Time</span>
          <span className="text-[9px] text-muted-foreground">Last 30 days</span>
        </div>
        <div className="flex items-end gap-1 h-24">
          {[30, 45, 35, 60, 50, 70, 55, 80, 65, 75, 85, 90].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.5, delay: i * 0.05 + 0.4 }}
              className="flex-1 bg-signature/50 rounded-t-sm hover:bg-signature/70 transition-colors"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function DocumentsPreview() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-foreground">Document Editor</div>
        <span className="px-2 py-0.5 text-[10px] font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full">
          Signed
        </span>
      </div>
      <div className="bg-white dark:bg-muted/20 border border-border rounded-lg p-6 space-y-4">
        <div className="text-center">
          <div className="text-sm font-bold text-foreground">Service Agreement</div>
          <div className="text-[10px] text-muted-foreground">Effective Date: Feb 1, 2025</div>
        </div>
        <div className="space-y-2">
          <div className="h-2 bg-muted rounded w-full" />
          <div className="h-2 bg-muted rounded w-5/6" />
          <div className="h-2 bg-muted rounded w-full" />
          <div className="h-2 bg-muted rounded w-3/4" />
        </div>
        <div className="h-px bg-border" />
        <div className="space-y-2">
          <div className="h-2 bg-muted rounded w-full" />
          <div className="h-2 bg-muted rounded w-4/5" />
        </div>
        {/* Signature area */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="pt-4 border-t border-dashed border-border"
        >
          <div className="flex justify-between items-end">
            <div>
              <div className="text-xs text-muted-foreground mb-1">Signature</div>
              <div className="text-base font-script italic text-signature">John Smith</div>
              <div className="h-px w-32 bg-border mt-1" />
            </div>
            <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
              <CheckSquare className="h-3.5 w-3.5" />
              <span className="text-[10px] font-medium">Verified</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function AIAgentsPreview() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-foreground">AI Workforce</div>
        <span className="text-[10px] text-muted-foreground">30+ agents available</span>
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {[
          { name: 'SEO Specialist', task: 'Running site audit...', status: 'active' },
          { name: 'Content Writer', task: 'Drafting blog post...', status: 'active' },
          { name: 'Social Manager', task: 'Scheduling posts...', status: 'active' },
          { name: 'Data Analyst', task: 'Generating report...', status: 'active' },
          { name: 'Email Marketer', task: 'A/B testing subject lines', status: 'idle' },
          { name: 'Ad Optimizer', task: 'Waiting for next cycle', status: 'idle' },
        ].map((agent, i) => (
          <motion.div
            key={agent.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 + 0.2 }}
            className="bg-card border border-border rounded-lg p-3"
          >
            <div className="flex items-center gap-1.5 mb-1.5">
              <div
                className={cn(
                  'w-2 h-2 rounded-full',
                  agent.status === 'active' ? 'bg-green-500' : 'bg-muted-foreground/30'
                )}
              />
              <span className="text-[10px] font-semibold text-foreground">{agent.name}</span>
            </div>
            <div className="text-[9px] text-muted-foreground truncate">{agent.task}</div>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-between p-3 bg-signature/5 border border-signature/20 rounded-lg">
        <span className="text-xs text-foreground font-medium">4 agents working now</span>
        <span className="text-[10px] text-signature font-medium">View all activity →</span>
      </div>
    </div>
  );
}

function VoiceAgentsPreview() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-foreground">Voice Agent</div>
        <span className="flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          On Call
        </span>
      </div>
      {/* Call interface */}
      <div className="bg-card border border-border rounded-xl p-5 text-center space-y-4">
        <div className="w-14 h-14 rounded-full bg-signature/10 mx-auto flex items-center justify-center">
          <Phone className="h-6 w-6 text-signature" />
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">Sarah Johnson</div>
          <div className="text-xs text-muted-foreground">Appointment booking · 2:34</div>
        </div>
        {/* Waveform */}
        <div className="flex items-center justify-center gap-0.5 h-8">
          {Array.from({ length: 24 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{
                height: [4, Math.random() * 24 + 4, 4],
              }}
              transition={{
                duration: 0.6 + Math.random() * 0.4,
                repeat: Infinity,
                delay: i * 0.05,
              }}
              className="w-1 bg-signature/60 rounded-full"
            />
          ))}
        </div>
      </div>
      {/* Transcript */}
      <div className="space-y-2">
        <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Live Transcript</div>
        {[
          { speaker: 'AI', text: "Hi Sarah! I'd be happy to help you schedule an appointment." },
          { speaker: 'Caller', text: "I need a consultation next week, preferably Tuesday." },
          { speaker: 'AI', text: 'I have Tuesday at 10am or 2pm available. Which works better?' },
        ].map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3 + 0.5 }}
            className="flex gap-2"
          >
            <span
              className={cn(
                'text-[10px] font-semibold w-8 shrink-0',
                line.speaker === 'AI' ? 'text-signature' : 'text-muted-foreground'
              )}
            >
              {line.speaker}
            </span>
            <span className="text-[10px] text-foreground/80">{line.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function WorkflowsPreview() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-foreground">Workflow Builder</div>
        <span className="px-2 py-0.5 text-[10px] font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full">
          Active
        </span>
      </div>
      {/* Flow diagram */}
      <div className="flex flex-col items-center gap-2">
        {[
          { label: 'New Form Submission', type: 'trigger', color: 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' },
          { label: 'Add to CRM', type: 'action', color: 'border-signature bg-signature/5' },
          { label: 'Score > 80?', type: 'condition', color: 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20' },
          { label: 'Send Welcome Email', type: 'action', color: 'border-signature bg-signature/5' },
          { label: 'Assign to Sales Rep', type: 'action', color: 'border-signature bg-signature/5' },
        ].map((node, i) => (
          <motion.div
            key={node.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 + 0.2 }}
            className="w-full"
          >
            {i > 0 && (
              <div className="flex justify-center mb-2">
                <div className="w-px h-4 bg-border" />
              </div>
            )}
            <div
              className={cn(
                'border-2 rounded-lg p-3 flex items-center gap-3',
                node.color
              )}
            >
              <span
                className={cn(
                  'text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded',
                  node.type === 'trigger'
                    ? 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/40'
                    : node.type === 'condition'
                      ? 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/40'
                      : 'text-signature bg-signature/10'
                )}
              >
                {node.type}
              </span>
              <span className="text-xs font-medium text-foreground">{node.label}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center gap-4 text-[10px] text-muted-foreground justify-center pt-1">
        <span>22 triggers</span>
        <span>·</span>
        <span>8 node types</span>
        <span>·</span>
        <span>99.9% uptime</span>
      </div>
    </div>
  );
}

function ChannelsPreview() {
  return (
    <div className="space-y-3">
      <div className="text-sm font-semibold text-foreground">Community Channels</div>
      <div className="flex gap-3 min-h-[260px]">
        {/* Channel sidebar */}
        <div className="w-32 bg-muted/50 rounded-lg p-2.5 space-y-1">
          {[
            { name: '# general', unread: 3 },
            { name: '# marketing', unread: 0 },
            { name: '# support', unread: 7 },
            { name: '# announcements', unread: 1 },
          ].map((ch, i) => (
            <div
              key={ch.name}
              className={cn(
                'px-2 py-1.5 rounded text-[10px] flex items-center justify-between',
                i === 0 ? 'bg-card border border-border font-medium text-foreground' : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <span className="truncate">{ch.name}</span>
              {ch.unread > 0 && (
                <span className="w-4 h-4 rounded-full bg-signature text-[8px] text-white flex items-center justify-center font-bold">
                  {ch.unread}
                </span>
              )}
            </div>
          ))}
        </div>
        {/* Chat area */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 space-y-3 py-1">
            {[
              { name: 'Alex', msg: 'Just finished the Q4 campaign deck. Looks great!', time: '2:34 PM' },
              { name: 'Sarah', msg: 'Can someone review the new landing page copy?', time: '2:36 PM' },
              { name: 'AI Bot', msg: 'SEO audit complete. 12 issues found, 3 critical. See report →', time: '2:38 PM', isBot: true },
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 + 0.3 }}
                className="flex gap-2"
              >
                <div
                  className={cn(
                    'w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0',
                    m.isBot
                      ? 'bg-signature/20 text-signature'
                      : 'bg-muted text-muted-foreground'
                  )}
                >
                  {m.isBot ? '🤖' : m.name[0]}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-semibold text-foreground">{m.name}</span>
                    <span className="text-[9px] text-muted-foreground">{m.time}</span>
                  </div>
                  <div className="text-[10px] text-foreground/80 mt-0.5">{m.msg}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="h-8 bg-muted/50 border border-border rounded-lg flex items-center px-3">
            <span className="text-[10px] text-muted-foreground">Message #general...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
