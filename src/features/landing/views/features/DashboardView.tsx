'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight,
  LayoutDashboard,
  GripVertical,
  BarChart3,
  Activity,
  Bot,
  Users,
  Palette,
  Save,
  Inbox,
  Search,
  Bell,
  Eye,
  Clock,
  Gauge,
  Blocks,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const painPoints = [
  {
    icon: BarChart3,
    title: 'You check 6 dashboards before coffee',
    description:
      'Google Analytics, Meta Ads, email platform, CRM, project tool, and a spreadsheet. By the time you know what\'s happening, the morning is gone.',
  },
  {
    icon: Eye,
    title: 'Your team operates blind',
    description:
      'Nobody knows which agents are running, which tasks are overdue, or which clients need attention until someone manually asks. Reactive, not proactive.',
  },
  {
    icon: Clock,
    title: 'Reports take hours to build',
    description:
      'Every Monday you spend 2 hours pulling data into slides for your team meeting. By the time the deck is done, the data is already stale.',
  },
  {
    icon: Palette,
    title: 'One-size-fits-all views',
    description:
      'Your CEO needs high-level metrics. Your ad manager needs campaign ROAS. Your ops lead needs task status. But everyone gets the same dashboard.',
  },
];

const widgetCategories = [
  {
    category: 'Core Metrics',
    widgets: [
      { name: 'KPI Metric', description: 'Workspace-wide KPIs with trend indicators' },
      { name: 'Ad Performance', description: 'Google & Meta ad platform metrics' },
      { name: 'Status Breakdown', description: 'Pie and bar charts for pipeline stages' },
      { name: 'Health Monitor', description: 'Healthy/warning/critical system status' },
    ],
  },
  {
    category: 'Agent Monitoring',
    widgets: [
      { name: 'Agent Metrics', description: 'Active count, credits used, efficiency' },
      { name: 'Agent List', description: 'Live status for every AI employee' },
      { name: 'MCP Health', description: 'Integration connection monitoring' },
      { name: 'Scheduled Tasks', description: 'Pending agent tasks and completions' },
    ],
  },
  {
    category: 'Lists & Activity',
    widgets: [
      { name: 'Sub Accounts', description: 'Client list with quick-access actions' },
      { name: 'Tasks Overview', description: 'Summary by status, priority, assignee' },
      { name: 'Activity Feed', description: 'Real-time timeline of all workspace activity' },
      { name: 'Custom Tabs', description: 'Embed Looker, Notion, or any external tool' },
    ],
  },
];

const capabilities = [
  {
    icon: GripVertical,
    title: 'Drag-and-drop layout',
    benefit: 'Build it exactly how you think',
    description:
      'A 4-column grid with resizable widgets. Drag from the library, reorder freely, resize from 1x1 to 4x3. Your dashboard, your layout.',
  },
  {
    icon: Save,
    title: 'Templates & auto-save',
    benefit: 'Switch contexts in one click',
    description:
      'Save named templates for different roles or meetings. CEO view, ops view, client review view. Auto-saves on every change.',
  },
  {
    icon: Activity,
    title: 'Real-time data',
    benefit: 'Always current, never stale',
    description:
      'Powered by Convex real-time subscriptions. When a task completes or an agent finishes a tool call, your dashboard updates instantly. No refresh needed.',
  },
  {
    icon: Gauge,
    title: 'Dashboard hero',
    benefit: 'Key health at a glance',
    description:
      'A fixed hero section shows agent activity metrics, system health, and task completion sparklines. The vital signs of your workspace, always visible.',
  },
];

const platformFeatures = [
  { icon: Inbox, title: 'Unified Inbox', description: 'Email, SMS, chat, calls, forms, and mentions in one view. Filter, assign, and respond without switching tools.' },
  { icon: Search, title: 'Global Search', description: 'Find any message, contact, file, or channel instantly. Full-text search with filters and keyboard navigation.' },
  { icon: Bell, title: 'Smart Notifications', description: 'Desktop notifications, in-app center, and browser tab badges. Configurable per-user preferences.' },
  { icon: Bot, title: 'Action History', description: 'A semantic audit trail of every AI action. See what happened, when, and why -- in plain English, not function names.' },
  { icon: Users, title: 'Client Portal', description: 'A white-labeled portal where clients see progress, files, tasks, and billing. 9 tabs of transparency.' },
  { icon: Blocks, title: 'Knowledge Base', description: 'Upload text, URLs, and PDFs. AI agents use it for context-aware responses via RAG search.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

// ---------------------------------------------------------------------------
// Sections
// ---------------------------------------------------------------------------

function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="tag-neo rounded-full bg-signature/10 border-signature mb-6 inline-flex items-center gap-2">
              <LayoutDashboard className="w-4 h-4 text-signature" />
              <span className="text-[11px] font-semibold text-signature uppercase tracking-wider">
                Command Center
              </span>
            </div>
            <h1 className="text-display font-display text-foreground mb-6">
              One dashboard.{' '}
              <span className="text-signature">Everything you need.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              A customizable, real-time dashboard with 18 widget types that puts your entire
              operation -- AI agents, clients, campaigns, and tasks -- in one view.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="https://app.ozzios.com/sign-up"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
              >
                See it in action
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-card border-2 border-border text-foreground font-medium text-base rounded-lg hover:border-signature/30 transition-colors duration-200"
              >
                See pricing
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { value: '18', label: 'Widget Types' },
              { value: '4-col', label: 'Responsive Grid' },
              { value: 'Real-time', label: 'Live Updates' },
              { value: '1-click', label: 'Template Switch' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl md:text-3xl text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function PainPointsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-neo text-signature mb-6 inline-block">The Problem</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            You're drowning in dashboards
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Every tool has its own dashboard. None of them talk to each other. You spend more time
            gathering data than acting on it.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {painPoints.map((point) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                variants={itemVariants}
                className="card-neo rounded-xl p-8 group"
              >
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-5 group-hover:bg-destructive/20 transition-colors">
                  <Icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{point.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function WidgetShowcaseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-neo text-signature mb-6 inline-block">18 Widget Types</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Every metric, every view, one place
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            From ad performance to agent health to task status. Drag the widgets you need, hide
            the ones you don't.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-3 gap-8"
        >
          {widgetCategories.map((cat) => (
            <motion.div key={cat.category} variants={itemVariants}>
              <h3 className="font-display text-lg text-foreground mb-4">{cat.category}</h3>
              <div className="space-y-3">
                {cat.widgets.map((widget) => (
                  <div
                    key={widget.name}
                    className="bg-card border-2 border-border rounded-lg p-4 hover:border-signature/30 transition-colors duration-200"
                  >
                    <h4 className="font-semibold text-foreground text-sm mb-1">{widget.name}</h4>
                    <p className="text-xs text-muted-foreground">{widget.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-neo text-signature mb-6 inline-block">Built Different</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Not another analytics tool
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            This isn't a read-only reporting dashboard. It's a live command center for your entire AI-powered operation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                variants={itemVariants}
                className="card-neo rounded-xl p-8 group"
              >
                <div className="w-12 h-12 rounded-xl bg-signature/10 flex items-center justify-center mb-5 group-hover:bg-signature/20 transition-colors">
                  <Icon className="w-6 h-6 text-signature" />
                </div>
                <p className="text-signature text-xs font-semibold uppercase tracking-wider mb-2">{cap.benefit}</p>
                <h3 className="font-display text-xl text-foreground mb-3">{cap.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{cap.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function PlatformSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-neo text-signature mb-6 inline-block">Beyond the Dashboard</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            The complete workspace
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Your dashboard is the front door. Behind it is a full platform -- inbox, search,
            notifications, client portal, and knowledge base.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {platformFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="bg-card border-2 border-border rounded-lg p-6 hover:border-signature/30 transition-colors duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-signature/10 flex items-center justify-center mb-4 group-hover:bg-signature/20 transition-colors">
                  <Icon className="w-5 h-5 text-signature" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-2">{feature.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight mb-6">
            See everything.
            <br />
            Control everything.
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
            One dashboard for your AI agents, clients, campaigns, and operations. Customizable,
            real-time, and built for the way you work.
          </p>
          <a
            href="https://app.ozzios.com/sign-up"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
          >
            Start free trial
            <ArrowRight className="w-5 h-5" />
          </a>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <span>SOC 2 Compliant</span>
            <span className="hidden sm:inline text-border">|</span>
            <span>GDPR Ready</span>
            <span className="hidden sm:inline text-border">|</span>
            <span>99.9% Uptime SLA</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Main Export
// ---------------------------------------------------------------------------

export function DashboardView() {
  return (
    <>
      <HeroSection />
      <PainPointsSection />
      <WidgetShowcaseSection />
      <CapabilitiesSection />
      <PlatformSection />
      <CTASection />
    </>
  );
}
