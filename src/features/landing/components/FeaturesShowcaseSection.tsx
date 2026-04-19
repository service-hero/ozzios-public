import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import {
  ArrowUpRight,
  Bot,
  BookOpen,
  CheckSquare,
  Code,
  Command,
  FileInput,
  FileText,
  LayoutDashboard,
  Mail,
  MessageCircle,
  MessageSquare,
  MessageSquareText,
  Phone,
  Send,
  Share2,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  BackgroundField,
  EASE_OUT,
  Kbd,
  SectionHeader,
  SectionHeading,
} from './_landing-primitives';

// ────────────────────────────────────────────────────────────────────────────
// Data
// ────────────────────────────────────────────────────────────────────────────

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
  { id: 'email-campaigns', name: 'Email Campaigns', description: 'Send targeted campaigns with AI-optimized subject lines and send times.', icon: Send, href: '/features/email-campaigns', category: 'marketing' },
  { id: 'sms-campaigns', name: 'SMS Campaigns', description: 'Reach customers directly with personalized text message campaigns.', icon: MessageSquare, href: '/features/sms-campaigns', category: 'marketing' },
  { id: 'social-media', name: 'Social Media', description: 'Schedule and publish across all platforms from one dashboard.', icon: Share2, href: '/features/social-media', category: 'marketing' },
  { id: 'email-builder', name: 'Email Builder', description: 'Drag-and-drop email editor with AI content generation.', icon: Mail, href: '/features/email-builder', category: 'marketing' },
  { id: 'forms', name: 'Forms', description: 'Build smart forms that capture leads and trigger automations.', icon: FileInput, href: '/features/forms', category: 'marketing' },
  { id: 'coding', name: 'Reports & Code', description: 'AI generates custom dashboards, reports, and applications.', icon: Code, href: '/features/coding', category: 'content' },
  { id: 'knowledge-base', name: 'Knowledge Base', description: 'Build searchable help centers and internal documentation wikis.', icon: BookOpen, href: '/features/knowledge-base', category: 'content' },
  { id: 'tasks', name: 'Task Management', description: 'Kanban boards, assignments, and project tracking for your team.', icon: CheckSquare, href: '/features/tasks', category: 'productivity' },
  { id: 'crm', name: 'CRM & Deals', description: 'Manage contacts, pipeline stages, and deal flow in one place.', icon: Users, href: '/features/crm', category: 'productivity' },
  { id: 'dashboard', name: 'Dashboard', description: '18 widget types for real-time business analytics and reporting.', icon: LayoutDashboard, href: '/features/dashboard', category: 'productivity' },
  { id: 'ai-agents', name: 'AI Agents', description: '30+ AI team members that learn your business and work around the clock.', icon: Bot, href: '/features/ai-agents', category: 'ai' },
  { id: 'voice-agents', name: 'Voice Agents', description: 'AI phone agents that handle calls and book appointments.', icon: Phone, href: '/features/voice-agents', category: 'ai' },
  { id: 'workflows', name: 'Workflows', description: 'Visual automation builder with 22 triggers and 8 node types.', icon: Workflow, href: '/features/workflows', category: 'ai' },
  { id: 'channels', name: 'Channels', description: 'Real-time community spaces for your team and customer collaboration.', icon: MessageCircle, href: '/features/channels', category: 'ai' },
  { id: 'chat-widget', name: 'Chat Widget', description: 'AI-powered website chat with lead capture and human handoff.', icon: MessageSquareText, href: '/features/chat-widget', category: 'ai' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

// ────────────────────────────────────────────────────────────────────────────
// FeaturesShowcaseSection
// ────────────────────────────────────────────────────────────────────────────

export function FeaturesShowcaseSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('marketing');
  const [activeFeatureId, setActiveFeatureId] = useState<string>('email-campaigns');
  const [isPaused, setIsPaused] = useState(false);

  const categoryFeatures = features.filter((f) => f.category === activeCategory);
  const activeFeature = features.find((f) => f.id === activeFeatureId) ?? categoryFeatures[0];

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

  useEffect(() => {
    const firstFeature = features.find((f) => f.category === activeCategory);
    if (firstFeature) setActiveFeatureId(firstFeature.id);
  }, [activeCategory]);

  return (
    <section id="showcase" className="relative isolate overflow-hidden py-28 lg:py-36">
      <BackgroundField variant="top-left" />

      <div className="relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-12 lg:mb-16">
            <SectionHeader
              eyebrow="Platform capabilities"
              headlineLines={['Everything your team needs.', 'One unified system.']}
              sub="17 product surfaces replacing the patchwork stack most service businesses bolt together."
            />
          </motion.div>

          {/* Category tabs */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="scrollbar-hidden -mx-1 flex gap-1.5 overflow-x-auto px-1 pb-2">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      'relative inline-flex h-9 shrink-0 items-center gap-2 whitespace-nowrap rounded-md border px-3.5 text-[12.5px] font-medium transition-all duration-200',
                      isActive
                        ? 'border-foreground/15 bg-foreground text-background shadow-[0_8px_22px_-10px_rgba(34,27,22,0.4)]'
                        : 'border-border/60 bg-background/60 text-foreground/65 hover:border-border hover:bg-background hover:text-foreground',
                    )}
                  >
                    {isActive ? <span className="h-1 w-1 rounded-full bg-signature" /> : null}
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Feature list + preview */}
          <motion.div variants={itemVariants}>
            <div
              className="grid gap-5 lg:grid-cols-12"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Left: feature list */}
              <div className="lg:col-span-5 xl:col-span-4">
                <SectionHeading label={`${categoryFeatures.length} features`} />
                <div className="mt-4 space-y-1.5">
                  {categoryFeatures.map((feature) => {
                    const Icon = feature.icon;
                    const isActive = feature.id === activeFeature.id;
                    return (
                      <button
                        key={feature.id}
                        type="button"
                        onClick={() => setActiveFeatureId(feature.id)}
                        className={cn(
                          'group/feat relative flex w-full items-start gap-3 rounded-md border px-3 py-3 text-left transition-all duration-200',
                          isActive
                            ? 'border-border bg-background shadow-[0_8px_22px_-12px_rgba(34,27,22,0.18)]'
                            : 'border-transparent bg-transparent hover:border-border/60 hover:bg-background/60',
                        )}
                      >
                        {/* Active rail */}
                        {isActive ? (
                          <span className="absolute -left-px top-2 h-[calc(100%-1rem)] w-[2px] rounded-full bg-signature" />
                        ) : null}
                        <span
                          className={cn(
                            'mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border transition-all duration-200',
                            isActive
                              ? 'border-foreground/25 bg-foreground text-background'
                              : 'border-border/60 bg-background text-foreground/55',
                          )}
                        >
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <h3
                              className={cn(
                                'text-[13.5px] font-semibold transition-colors',
                                isActive ? 'text-foreground' : 'text-foreground/80',
                              )}
                            >
                              {feature.name}
                            </h3>
                            <ArrowUpRight
                              className={cn(
                                'h-3 w-3 shrink-0 transition-all duration-150',
                                isActive
                                  ? 'translate-x-0 -translate-y-0 text-signature opacity-100'
                                  : 'translate-x-1 translate-y-0.5 text-foreground/30 opacity-0 group-hover/feat:translate-x-0 group-hover/feat:-translate-y-0 group-hover/feat:opacity-100',
                              )}
                            />
                          </div>
                          <p className="mt-0.5 text-[12px] leading-[1.5] text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {activeFeature ? (
                  <div className="mt-4 pl-3">
                    <Link
                      to={activeFeature.href}
                      className="group/learn inline-flex items-center gap-1.5 text-[12.5px] font-medium text-foreground/70 transition-colors hover:text-signature"
                    >
                      <span className="relative">
                        Learn more about {activeFeature.name}
                        <span className="absolute -bottom-px left-0 h-px w-0 bg-signature transition-all duration-200 group-hover/learn:w-full" />
                      </span>
                      <ArrowUpRight className="h-3 w-3 transition-transform duration-200 group-hover/learn:-translate-y-0.5 group-hover/learn:translate-x-0.5" />
                    </Link>
                  </div>
                ) : null}
              </div>

              {/* Right: preview */}
              <div className="lg:col-span-7 xl:col-span-8">
                <div className="sticky top-24">
                  <BrowserChrome url={`app.ozzios.com/${activeFeature.id}`}>
                    <div className="relative h-[440px] overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeFeature.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="absolute inset-0 overflow-y-auto p-5"
                        >
                          <FeaturePreview featureId={activeFeature.id} />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </BrowserChrome>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Footer ledger */}
          <motion.div variants={itemVariants} className="mt-12">
            <div className="flex items-center gap-3">
              <span className="h-px flex-1 bg-border/50" />
              <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-foreground/45">
                <span className="text-foreground/85 tabular-nums">14</span> features ·{' '}
                <span className="text-foreground/85 tabular-nums">4</span> categories ·{' '}
                included in every plan
              </span>
              <span className="h-px flex-1 bg-border/50" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Browser chrome wrapper — Linear/Cursor style
// ────────────────────────────────────────────────────────────────────────────

function BrowserChrome({ children, url }: { children: React.ReactNode; url: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border/70 bg-background shadow-[0_24px_60px_-30px_rgba(34,27,22,0.30),0_2px_0_rgba(255,255,255,0.6)_inset] ring-1 ring-foreground/5">
      <div className="flex h-9 items-center gap-3 border-b border-border/60 bg-muted/30 px-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28CA41]" />
        </div>
        <div className="mx-auto flex h-6 w-full max-w-[360px] items-center gap-2 rounded-md border border-border/60 bg-background px-2 text-[11px]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint/60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint" />
          </span>
          <span className="truncate font-mono text-foreground/55">{url}</span>
          <span className="ml-auto inline-flex items-center gap-1 text-foreground/40">
            <Command className="h-3 w-3" />
            <Kbd className="h-[16px] min-w-[16px] text-[9px]">K</Kbd>
          </span>
        </div>
        <div className="hidden h-2.5 w-12 sm:block" />
      </div>
      {children}
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Feature preview renderer (preserved 1:1 from previous implementation)
// ────────────────────────────────────────────────────────────────────────────

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

// ── Preview Components — preserved with minor chrome tightening ────────────

function StatusBadge({ children, tone = 'live' }: { children: React.ReactNode; tone?: 'live' | 'draft' | 'ai' }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-[5px] border px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider',
        tone === 'live'
          ? 'border-mint/30 bg-mint/10 text-mint'
          : tone === 'draft'
            ? 'border-border/60 bg-muted text-muted-foreground'
            : 'border-signature/30 bg-signature/10 text-signature',
      )}
    >
      {tone === 'live' ? <span className="h-1 w-1 rounded-full bg-mint" /> : null}
      {children}
    </span>
  );
}

function EmailCampaignsPreview() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-foreground">Campaign Dashboard</div>
        <StatusBadge tone="live">Live</StatusBadge>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: 'Sent', value: '12,847' },
          { label: 'Opened', value: '68.2%' },
          { label: 'Clicked', value: '24.1%' },
        ].map((m) => (
          <div key={m.label} className="rounded-md border border-border/60 bg-muted/30 p-2.5">
            <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
              {m.label}
            </div>
            <div className="mt-1 text-[15px] font-semibold tabular-nums text-foreground">
              {m.value}
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <SectionHeading label="Performance by campaign" />
        {[
          { name: 'Welcome Series', pct: 85 },
          { name: 'Product Launch', pct: 72 },
          { name: 'Weekly Newsletter', pct: 61 },
          { name: 'Re-engagement', pct: 48 },
        ].map((c) => (
          <div key={c.name} className="flex items-center gap-3">
            <span className="w-28 truncate text-[12px] text-muted-foreground">{c.name}</span>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${c.pct}%` }}
                transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                className="h-full rounded-full bg-signature"
              />
            </div>
            <span className="w-9 text-right text-[12px] font-medium tabular-nums text-foreground">
              {c.pct}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SmsCampaignsPreview() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-56 space-y-3 rounded-[1.4rem] border border-border/60 bg-background p-4">
        <div className="mx-auto mb-2 h-1 w-16 rounded-full bg-muted" />
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
                'max-w-[85%] rounded-2xl px-3 py-2 text-[12px]',
                msg.sent
                  ? 'ml-auto rounded-br-sm bg-signature text-white'
                  : 'mr-auto rounded-bl-sm bg-muted text-foreground',
              )}
            >
              {msg.text}
            </motion.div>
          ))}
        </div>
        <div className="flex items-center gap-2 pt-2">
          <div className="flex h-7 flex-1 items-center rounded-full border border-border/60 bg-muted/40 px-3">
            <span className="text-[10px] text-muted-foreground">Type a message…</span>
          </div>
        </div>
      </div>
      <div className="mt-4 inline-flex items-center gap-3 rounded-md border border-border/60 bg-background/60 px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-foreground/55">
        Delivered <span className="tabular-nums text-foreground/85">2,847</span>
        <span className="h-3 w-px bg-border/60" />
        Response <span className="tabular-nums text-foreground/85">34%</span>
      </div>
    </div>
  );
}

function SocialMediaPreview() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-foreground">Social Scheduler</div>
        <div className="flex items-center gap-1.5">
          {[
            { name: 'Facebook', logo: '/images/facebook-icon.svg' },
            { name: 'X', logo: '/images/x-logo.jpg' },
            { name: 'TikTok', logo: '/images/tiktok-logo.svg' },
            { name: 'YouTube', logo: '/images/youtube-logo.webp' },
          ].map((p) => (
            <img
              key={p.name}
              src={p.logo}
              alt={p.name}
              className="h-5 w-5 rounded-full border border-border/60 object-cover"
            />
          ))}
        </div>
      </div>
      <div className="space-y-1.5">
        {[
          { time: '9:00 AM', platform: 'Facebook', title: '5 Marketing Trends for 2025', status: 'Scheduled' as const },
          { time: '12:30 PM', platform: 'YouTube', title: 'New product feature announcement', status: 'Scheduled' as const },
          { time: '3:00 PM', platform: 'X', title: 'Customer success story thread', status: 'Draft' as const },
          { time: '5:30 PM', platform: 'TikTok', title: 'Behind the scenes video', status: 'AI' as const },
        ].map((post, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 + 0.2 }}
            className="flex min-w-0 items-center gap-2 rounded-md border border-border/60 bg-muted/30 p-2 sm:gap-3 sm:p-2.5"
          >
            <span className="hidden w-14 shrink-0 font-mono text-[10px] tabular-nums text-muted-foreground sm:inline">
              {post.time}
            </span>
            <span className="hidden w-14 shrink-0 text-[11px] font-medium text-foreground/65 sm:inline">
              {post.platform}
            </span>
            <span className="min-w-0 flex-1 truncate text-[12px] text-foreground">{post.title}</span>
            <StatusBadge tone={post.status === 'Scheduled' ? 'live' : post.status === 'AI' ? 'ai' : 'draft'}>
              {post.status === 'AI' ? 'AI gen' : post.status}
            </StatusBadge>
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
        <div className="flex gap-1">
          <Kbd className="h-[20px] px-1.5 text-[10px] uppercase tracking-wider">Desktop</Kbd>
          <Kbd className="h-[20px] px-1.5 text-[10px] uppercase tracking-wider">Mobile</Kbd>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="w-20 space-y-1.5">
          {['Header', 'Text', 'Image', 'Button', 'Divider', 'Footer'].map((block) => (
            <div
              key={block}
              className="cursor-grab rounded-md border border-dashed border-border/60 bg-muted/30 p-1.5 text-center text-[10px] text-muted-foreground transition-colors hover:border-signature/30 hover:text-foreground"
            >
              {block}
            </div>
          ))}
        </div>
        <div className="flex-1 space-y-3 rounded-md border border-border/60 bg-background p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex h-12 items-center justify-center rounded-md bg-signature/10"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-signature">LOGO</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex h-24 items-center justify-center rounded-md bg-muted/40"
          >
            <span className="text-[10px] text-muted-foreground">Hero image</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-1.5"
          >
            <div className="h-3 w-3/4 rounded bg-muted" />
            <div className="h-2 w-full rounded bg-muted/60" />
            <div className="h-2 w-5/6 rounded bg-muted/60" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="flex h-9 items-center justify-center rounded-md bg-foreground"
          >
            <span className="text-[12px] font-medium text-background">Shop now</span>
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
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          47 responses
        </span>
      </div>
      <div className="space-y-3 rounded-md border border-border/60 bg-background p-5">
        <div className="font-display text-[15px] font-semibold text-foreground">Contact us</div>
        {[
          { label: 'Full name', placeholder: 'John Smith' },
          { label: 'Email', placeholder: 'john@example.com' },
          { label: 'Company', placeholder: 'Acme Inc.' },
        ].map((field, i) => (
          <motion.div
            key={field.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.18 + 0.2 }}
            className="space-y-1"
          >
            <label className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-foreground/55">
              {field.label}
            </label>
            <div className="flex h-9 items-center rounded-md border border-border/60 bg-muted/30 px-3">
              <span className="text-[12px] text-muted-foreground">{field.placeholder}</span>
            </div>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="space-y-1"
        >
          <label className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-foreground/55">
            Message
          </label>
          <div className="h-16 rounded-md border border-border/60 bg-muted/30" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex h-9 items-center justify-center rounded-md bg-foreground"
        >
          <span className="text-[12px] font-medium text-background">Submit</span>
        </motion.div>
      </div>
    </div>
  );
}

function CodingPreview() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-foreground">App Builder</div>
        <StatusBadge tone="live">Live</StatusBadge>
      </div>
      <div className="flex min-h-[240px] gap-3">
        <div className="flex-1 overflow-hidden rounded-md border border-foreground/15 bg-foreground p-3 font-mono text-[10px] leading-relaxed">
          <div className="mb-2 flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF5F57]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#FFBD2E]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#28CA41]" />
          </div>
          {[
            { text: 'import', color: 'text-[#c792ea]', rest: ' { BarChart }', restColor: 'text-[#82aaff]' },
            { text: 'const', color: 'text-[#c792ea]', rest: ' data = fetchMetrics()', restColor: 'text-[#c3e88d]' },
            { text: '', color: '', rest: '', restColor: '' },
            { text: 'export default', color: 'text-[#c792ea]', rest: ' function Report() {', restColor: 'text-[#82aaff]' },
            { text: '  return', color: 'text-[#c792ea]', rest: ' (', restColor: 'text-white/85' },
            { text: '    <Dashboard', color: 'text-[#82aaff]', rest: '>', restColor: 'text-white/85' },
            { text: '      <MetricCards', color: 'text-[#82aaff]', rest: ' data={data} />', restColor: 'text-[#c3e88d]' },
            { text: '      <BarChart', color: 'text-[#82aaff]', rest: ' data={data} />', restColor: 'text-[#c3e88d]' },
            { text: '    </Dashboard>', color: 'text-[#82aaff]', rest: '', restColor: '' },
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
        <div className="w-36 space-y-2 rounded-md border border-border/60 bg-background p-3">
          <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
            Preview
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {['$48K', '2.4K', '+18%', '94%'].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="rounded-[5px] border border-border/60 bg-muted/30 p-1.5 text-center"
              >
                <div className="text-[11px] font-bold tabular-nums text-foreground">{v}</div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="flex h-16 items-end gap-1"
          >
            {[40, 65, 50, 80, 60, 75].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.5, delay: 1.4 + i * 0.08 }}
                className="flex-1 rounded-t-sm bg-signature/60"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function KnowledgeBasePreview() {
  const cats = [
    { title: 'Getting started', articles: 12, Icon: BookOpen },
    { title: 'Account settings', articles: 8, Icon: Users },
    { title: 'Billing & plans', articles: 6, Icon: FileText },
    { title: 'API reference', articles: 24, Icon: Code },
  ];
  return (
    <div className="space-y-4">
      <div className="text-sm font-semibold text-foreground">Knowledge Base</div>
      <div className="flex items-center gap-2 rounded-md border border-border/60 bg-muted/30 p-2.5">
        <Command className="h-3 w-3 text-foreground/40" />
        <span className="text-[12px] text-muted-foreground">Search articles…</span>
        <Kbd className="ml-auto h-[16px] min-w-[16px] text-[9px]">⌘K</Kbd>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {cats.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 + 0.3 }}
            className="rounded-md border border-border/60 bg-background p-3 transition-all hover:-translate-y-0.5 hover:border-signature/30"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border/60 bg-background text-foreground/60">
              <cat.Icon className="h-3.5 w-3.5" />
            </span>
            <div className="mt-2 text-[12px] font-semibold text-foreground">{cat.title}</div>
            <div className="font-mono text-[9.5px] uppercase tracking-wider text-muted-foreground">
              {cat.articles} articles
            </div>
          </motion.div>
        ))}
      </div>
      <div className="space-y-1.5">
        <SectionHeading label="Popular" />
        {['How to set up your first campaign', 'Connecting your domain', 'Understanding analytics'].map((article, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-md bg-muted/30 p-2 text-[12px] text-foreground/80"
          >
            <FileText className="h-3 w-3 text-muted-foreground" />
            {article}
          </div>
        ))}
      </div>
    </div>
  );
}

function TasksPreview() {
  return (
    <div className="space-y-3">
      <div className="text-sm font-semibold text-foreground">Task Board</div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {[
          { title: 'To do', count: 5, cards: ['Design landing page', 'Write blog post', 'Review monthly report'] },
          { title: 'In progress', count: 3, cards: ['Email campaign setup', 'Social media calendar'] },
          { title: 'Done', count: 12, cards: ['CRM migration', 'Brand guidelines'] },
        ].map((col, ci) => (
          <div
            key={col.title}
            className={cn(
              'rounded-md border border-border/60 bg-muted/30 p-2.5',
              ci === 2 && 'col-span-2 sm:col-span-1',
            )}
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="font-mono text-[9.5px] uppercase tracking-wider text-foreground/55">
                {col.title}
              </span>
              <span className="text-[10px] tabular-nums text-muted-foreground">{col.count}</span>
            </div>
            <div className="space-y-1.5">
              {col.cards.map((card, i) => (
                <motion.div
                  key={card}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: ci * 0.15 + i * 0.1 + 0.3 }}
                  className="rounded border border-border/60 bg-background p-2"
                >
                  <div className="text-[10.5px] text-foreground">{card}</div>
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
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          $284K in pipeline
        </span>
      </div>
      <div className="flex gap-1">
        {[
          { stage: 'Lead', count: 24 },
          { stage: 'Qualified', count: 18 },
          { stage: 'Proposal', count: 8 },
          { stage: 'Closed', count: 5 },
        ].map((s) => (
          <div key={s.stage} className="flex-1 text-center">
            <div
              className="flex h-9 items-center justify-center rounded-t-md bg-signature/20"
              style={{ opacity: 0.4 + (s.count / 24) * 0.6 }}
            >
              <span className="text-[12px] font-bold tabular-nums text-signature">{s.count}</span>
            </div>
            <div className="mt-1 font-mono text-[9.5px] uppercase tracking-wider text-foreground/55">
              {s.stage}
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-1.5">
        <SectionHeading label="Recent contacts" />
        {[
          { name: 'Sarah Johnson', company: 'TechCorp', deal: '$45K' },
          { name: 'Mike Chen', company: 'StartupXYZ', deal: '$28K' },
          { name: 'Lisa Park', company: 'GrowthCo', deal: '$62K' },
        ].map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 + 0.4 }}
            className="flex items-center gap-3 rounded-md border border-border/60 bg-background p-2"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-md border border-signature/25 bg-signature/10">
              <span className="text-[11px] font-bold text-signature">{c.name[0]}</span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[12px] font-medium text-foreground">{c.name}</div>
              <div className="text-[10.5px] text-muted-foreground">{c.company}</div>
            </div>
            <div className="text-[12px] font-semibold tabular-nums text-foreground">{c.deal}</div>
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
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
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
            className="rounded-md border border-border/60 bg-background p-2.5"
          >
            <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
              {m.label}
            </div>
            <div className="mt-0.5 text-[14px] font-bold tabular-nums text-foreground">
              {m.value}
            </div>
            <div className="text-[10px] font-medium tabular-nums text-mint">{m.trend}</div>
          </motion.div>
        ))}
      </div>
      <div className="rounded-md border border-border/60 bg-background p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[11px] font-semibold text-foreground">Revenue over time</span>
          <span className="font-mono text-[9.5px] uppercase tracking-wider text-muted-foreground">
            30d
          </span>
        </div>
        <div className="flex h-24 items-end gap-1">
          {[30, 45, 35, 60, 50, 70, 55, 80, 65, 75, 85, 90].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.5, delay: i * 0.05 + 0.4 }}
              className="flex-1 rounded-t-sm bg-signature/55 transition-colors hover:bg-signature/75"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AIAgentsPreview() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-foreground">AI Workforce</div>
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          30+ available
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { name: 'SEO Specialist', task: 'Tracking ranking changes…', status: 'active' },
          { name: 'Content Writer', task: 'Drafting blog post…', status: 'active' },
          { name: 'Social Manager', task: 'Scheduling posts…', status: 'active' },
          { name: 'Data Analyst', task: 'Generating report…', status: 'active' },
          { name: 'Email Marketer', task: 'A/B testing subject lines', status: 'idle' },
          { name: 'Ad Optimizer', task: 'Waiting for next cycle', status: 'idle' },
        ].map((agent, i) => (
          <motion.div
            key={agent.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 + 0.2 }}
            className="rounded-md border border-border/60 bg-background p-2.5"
          >
            <div className="mb-1 flex items-center gap-1.5">
              <span
                className={cn(
                  'h-1.5 w-1.5 rounded-full',
                  agent.status === 'active' ? 'bg-mint' : 'bg-foreground/20',
                )}
              />
              <span className="text-[11px] font-semibold text-foreground">{agent.name}</span>
            </div>
            <div className="truncate text-[10px] text-muted-foreground">{agent.task}</div>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-between rounded-md border border-signature/25 bg-signature/[0.06] px-3 py-2.5">
        <span className="text-[12px] font-medium text-foreground">4 agents working now</span>
        <Link to="/features/ai-agents" className="inline-flex items-center gap-1 text-[11px] font-medium text-signature hover:text-signature/80">
          View activity
          <ArrowUpRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}

function VoiceAgentsPreview() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-foreground">Voice Agent</div>
        <StatusBadge tone="live">On call</StatusBadge>
      </div>
      <div className="space-y-4 rounded-md border border-border/60 bg-background p-5 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-signature/25 bg-signature/10">
          <Phone className="h-5 w-5 text-signature" />
        </div>
        <div>
          <div className="text-[14px] font-semibold text-foreground">Sarah Johnson</div>
          <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            Appointment booking · 02:34
          </div>
        </div>
        <div className="flex h-8 items-center justify-center gap-0.5">
          {Array.from({ length: 24 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{ height: [4, Math.random() * 24 + 4, 4] }}
              transition={{ duration: 0.6 + Math.random() * 0.4, repeat: Infinity, delay: i * 0.05 }}
              className="w-1 rounded-full bg-signature/60"
            />
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <SectionHeading label="Live transcript" />
        {[
          { speaker: 'AI', text: "Hi Sarah! I'd be happy to help you schedule an appointment." },
          { speaker: 'Caller', text: 'I need a consultation next week, preferably Tuesday.' },
          { speaker: 'AI', text: 'I have Tuesday at 10am or 2pm. Which works better?' },
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
                'w-10 shrink-0 font-mono text-[9.5px] font-semibold uppercase tracking-wider',
                line.speaker === 'AI' ? 'text-signature' : 'text-muted-foreground',
              )}
            >
              {line.speaker}
            </span>
            <span className="text-[11px] text-foreground/85">{line.text}</span>
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
        <StatusBadge tone="live">Active</StatusBadge>
      </div>
      <div className="flex flex-col items-center gap-1">
        {[
          { label: 'New form submission', type: 'trigger' as const },
          { label: 'Add to CRM', type: 'action' as const },
          { label: 'Score > 80?', type: 'condition' as const },
          { label: 'Send welcome email', type: 'action' as const },
          { label: 'Assign to sales rep', type: 'action' as const },
        ].map((node, i) => (
          <motion.div
            key={node.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 + 0.2 }}
            className="w-full"
          >
            {i > 0 ? (
              <div className="flex justify-center">
                <div className="h-3 w-px bg-border" />
              </div>
            ) : null}
            <div
              className={cn(
                'flex items-center gap-3 rounded-md border bg-background p-2.5',
                node.type === 'trigger'
                  ? 'border-foreground/15'
                  : node.type === 'condition'
                    ? 'border-sun/30'
                    : 'border-signature/25',
              )}
            >
              <span
                className={cn(
                  'inline-flex items-center rounded-[5px] border px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider',
                  node.type === 'trigger'
                    ? 'border-foreground/20 bg-foreground/5 text-foreground/70'
                    : node.type === 'condition'
                      ? 'border-sun/30 bg-sun/10 text-sun'
                      : 'border-signature/25 bg-signature/10 text-signature',
                )}
              >
                {node.type}
              </span>
              <span className="text-[12px] font-medium text-foreground">{node.label}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-3 pt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/45">
        <span>22 triggers</span>
        <span className="h-3 w-px bg-border/60" />
        <span>8 nodes</span>
        <span className="h-3 w-px bg-border/60" />
        <span>99.9% uptime</span>
      </div>
    </div>
  );
}

function ChannelsPreview() {
  return (
    <div className="space-y-3">
      <div className="text-sm font-semibold text-foreground">Community Channels</div>
      <div className="flex min-h-[260px] gap-3">
        <div className="w-32 space-y-1 rounded-md border border-border/60 bg-muted/30 p-2">
          {[
            { name: '# general', unread: 3 },
            { name: '# marketing', unread: 0 },
            { name: '# support', unread: 7 },
            { name: '# announcements', unread: 1 },
          ].map((ch, i) => (
            <div
              key={ch.name}
              className={cn(
                'flex items-center justify-between rounded-md px-2 py-1.5 text-[10.5px]',
                i === 0
                  ? 'border border-border/60 bg-background font-medium text-foreground'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              <span className="truncate">{ch.name}</span>
              {ch.unread > 0 ? (
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-signature text-[8px] font-bold text-white">
                  {ch.unread}
                </span>
              ) : null}
            </div>
          ))}
        </div>
        <div className="flex flex-1 flex-col">
          <div className="flex-1 space-y-3 py-1">
            {[
              { name: 'Alex', msg: 'Just finished the Q4 campaign deck. Looks great!', time: '2:34 PM' },
              { name: 'Sarah', msg: 'Can someone review the new landing page copy?', time: '2:36 PM' },
              { name: 'Ozzi', msg: 'Weekly report ready. 3 trends flagged.', time: '2:38 PM', isBot: true },
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
                    'flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[9px] font-bold',
                    m.isBot
                      ? 'border border-signature/25 bg-signature/10 text-signature'
                      : 'border border-border/60 bg-muted text-muted-foreground',
                  )}
                >
                  {m.name[0]}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10.5px] font-semibold text-foreground">{m.name}</span>
                    {m.isBot ? (
                      <span className="rounded-[5px] border border-signature/25 bg-signature/10 px-1 font-mono text-[8.5px] font-semibold uppercase tracking-wider text-signature">
                        AI
                      </span>
                    ) : null}
                    <span className="text-[9.5px] text-muted-foreground">{m.time}</span>
                  </div>
                  <div className="mt-0.5 text-[10.5px] text-foreground/85">{m.msg}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex h-7 items-center rounded-md border border-border/60 bg-muted/30 px-3">
            <span className="text-[10px] text-muted-foreground">Message #general…</span>
          </div>
        </div>
      </div>
    </div>
  );
}
