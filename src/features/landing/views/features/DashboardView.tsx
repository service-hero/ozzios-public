import { motion, useInView } from 'framer-motion';
import {
  Activity,
  BarChart3,
  Bell,
  Blocks,
  Bot,
  Clock,
  Eye,
  Gauge,
  GripVertical,
  Inbox,
  LayoutDashboard,
  Palette,
  Save,
  Search,
  type LucideIcon,
} from 'lucide-react';
import { useRef } from 'react';
import { DeferredSection } from '@/components/ui/lazy-section';
import {
  CapabilitiesBlock,
  FeatureCTABlock,
  FeatureHero,
  PainPointsBlock,
  SectionHeader,
  SectionHeading,
  innerContainerVariants,
  innerItemVariants,
  type Capability,
  type PainPoint,
} from '../../components/_landing-primitives';

const painPoints: PainPoint[] = [
  {
    icon: BarChart3,
    title: 'You check 6 dashboards before coffee',
    description:
      'Google Analytics, Meta Ads, email platform, CRM, project tool, and a spreadsheet. By the time you know what is happening, the morning is gone.',
  },
  {
    icon: Eye,
    title: 'Your team operates blind',
    description:
      'Nobody knows which agents are running, which tasks are overdue, or which customers need attention until someone manually asks. Reactive, not proactive.',
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
    category: 'Core metrics',
    widgets: [
      { name: 'KPI Metric', description: 'Workspace-wide KPIs with trend indicators' },
      { name: 'Ad Performance', description: 'Google & Meta ad platform metrics' },
      { name: 'Status Breakdown', description: 'Pie and bar charts for pipeline stages' },
      { name: 'Health Monitor', description: 'Healthy / warning / critical system status' },
    ],
  },
  {
    category: 'Agent monitoring',
    widgets: [
      { name: 'Agent Metrics', description: 'Active count, credits used, efficiency' },
      { name: 'Agent List', description: 'Live status for every AI employee' },
      { name: 'MCP Health', description: 'Integration connection monitoring' },
      { name: 'Scheduled Tasks', description: 'Pending agent tasks and completions' },
    ],
  },
  {
    category: 'Lists & activity',
    widgets: [
      { name: 'Sub Accounts', description: 'Customer list with quick-access actions' },
      { name: 'Tasks Overview', description: 'Summary by status, priority, assignee' },
      { name: 'Activity Feed', description: 'Real-time timeline of all workspace activity' },
      { name: 'Custom Tabs', description: 'Embed Looker, Notion, or any external tool' },
    ],
  },
];

const capabilities: Capability[] = [
  {
    icon: GripVertical,
    title: 'Drag-and-drop layout',
    benefit: 'Build it how you think',
    description:
      'A 4-column grid with resizable widgets. Drag from the library, reorder freely, resize from 1×1 to 4×3. Your dashboard, your layout.',
  },
  {
    icon: Save,
    title: 'Templates & auto-save',
    benefit: 'Switch contexts in one click',
    description:
      'Save named templates for different roles or meetings. Owner view, ops view, job review view. Auto-saves on every change.',
  },
  {
    icon: Activity,
    title: 'Real-time data',
    benefit: 'Always current, never stale',
    description:
      'Powered by Convex real-time subscriptions. When a task completes or an agent finishes a tool call, your dashboard updates instantly.',
  },
  {
    icon: Gauge,
    title: 'Dashboard hero',
    benefit: 'Key health at a glance',
    description:
      'A fixed hero section shows agent activity, system health, and task completion sparklines. The vital signs of your workspace, always visible.',
  },
];

const platformFeatures: Array<{ icon: LucideIcon; title: string; description: string }> = [
  { icon: Inbox, title: 'Unified Inbox', description: 'Email, SMS, chat, calls, forms, and mentions in one view. Filter, assign, respond.' },
  { icon: Search, title: 'Global Search', description: 'Find any message, contact, file, or channel instantly with filters and keyboard nav.' },
  { icon: Bell, title: 'Smart Notifications', description: 'Desktop notifications, in-app center, and browser tab badges. Per-user preferences.' },
  { icon: Bot, title: 'Action History', description: 'Semantic audit trail of every AI action. See what happened in plain English.' },
  { icon: Blocks, title: 'Knowledge Base', description: 'Upload text, URLs, and PDFs. Agents use it for context-aware responses via RAG.' },
];

// ────────────────────────────────────────────────────────────────────────────
// Widget categories block — page-specific
// ────────────────────────────────────────────────────────────────────────────

function WidgetShowcaseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative isolate overflow-hidden border-t border-border/50 py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-14"
        >
          <SectionHeader
            eyebrow="18 widget types"
            headlineLines={['Every metric, every view,', 'one place.']}
            sub="From ad performance to agent health to task status. Drag the widgets you need, hide the ones you don't."
          />
        </motion.div>

        <motion.div
          variants={innerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-4 lg:grid-cols-3 lg:gap-5"
        >
          {widgetCategories.map((cat) => (
            <motion.div
              key={cat.category}
              variants={innerItemVariants}
              className="overflow-hidden rounded-xl border border-border/60 bg-background"
            >
              <div className="border-b border-border/60 bg-muted/30 px-5 py-3">
                <SectionHeading label={cat.category} />
              </div>
              <div className="divide-y divide-border/60">
                {cat.widgets.map((widget) => (
                  <div
                    key={widget.name}
                    className="px-5 py-3.5 transition-colors hover:bg-muted/30"
                  >
                    <h4 className="text-[13px] font-semibold text-foreground">{widget.name}</h4>
                    <p className="mt-0.5 text-[11.5px] leading-[1.5] text-muted-foreground">
                      {widget.description}
                    </p>
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

// ────────────────────────────────────────────────────────────────────────────
// Platform features section
// ────────────────────────────────────────────────────────────────────────────

function PlatformSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative isolate overflow-hidden border-t border-border/50 py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-14"
        >
          <SectionHeader
            eyebrow="Beyond the dashboard"
            headlineLines={['The complete', 'workspace.']}
            sub="Your dashboard is the front door. Behind it is a full platform — inbox, search, notifications, and knowledge base."
          />
        </motion.div>

        <motion.div
          variants={innerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {platformFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={innerItemVariants}
                className="group/p rounded-xl border border-border/60 bg-background p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:shadow-[0_14px_30px_-18px_rgba(34,27,22,0.25)]"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/60 bg-background text-foreground/70 transition-colors duration-200 group-hover/p:border-foreground/25 group-hover/p:bg-foreground group-hover/p:text-background">
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="mt-4 text-[13.5px] font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-1.5 text-[11.5px] leading-[1.5] text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Main export
// ────────────────────────────────────────────────────────────────────────────

export function DashboardView() {
  return (
    <>
      <FeatureHero
        pillIcon={LayoutDashboard}
        pillLabel="Command Center"
        pillSubtitle="One pane of glass for the workspace"
        headlineLines={['One dashboard.', 'Everything you need.']}
        sub="A customizable, real-time dashboard with 18 widget types that puts your entire operation — AI agents, customers, campaigns, and tasks — in one view."
        primaryCta={{ label: 'See it in action', href: 'https://app.ozzios.com/sign-up', shortcut: 'S' }}
        secondaryCta={{ label: 'See pricing', href: '/pricing' }}
        stats={[
          { value: '18', label: 'Widget types' },
          { value: '4-col', label: 'Responsive grid' },
          { value: 'Real-time', label: 'Live updates' },
          { value: '1-click', label: 'Template switch' },
        ]}
      />

      <DeferredSection>
        <PainPointsBlock
          eyebrow="The problem"
          headlineLines={["You're drowning", 'in dashboards.']}
          sub="Every tool has its own dashboard. None of them talk to each other. You spend more time gathering data than acting on it."
          points={painPoints}
        />
      </DeferredSection>

      <DeferredSection>
        <WidgetShowcaseSection />
      </DeferredSection>

      <DeferredSection>
        <CapabilitiesBlock
          eyebrow="Built different"
          headlineLines={['Not another', 'analytics tool.']}
          sub="This isn't a read-only reporting dashboard. It's a live command center for your entire AI-powered operation."
          capabilities={capabilities}
        />
      </DeferredSection>

      <DeferredSection>
        <PlatformSection />
      </DeferredSection>

      <DeferredSection>
        <FeatureCTABlock
          eyebrow="See everything"
          headlineLines={['See everything.', 'Control everything.']}
          sub="One dashboard for your AI agents, customers, campaigns, and operations. Customizable, real-time, and built for the way you work."
          primaryCta={{ label: 'Get early access', href: 'https://app.ozzios.com/sign-up', shortcut: 'S' }}
          secondaryCta={{ label: 'See pricing', href: '/pricing' }}
          trust={[
            { value: '256-bit', label: 'Encryption' },
            { value: 'GDPR ready', label: 'Compliance' },
            { value: '99.9%', label: 'Uptime SLA' },
          ]}
        />
      </DeferredSection>
    </>
  );
}
