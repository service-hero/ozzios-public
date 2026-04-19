import { motion, useInView } from 'framer-motion';
import {
  AlertTriangle,
  CalendarClock,
  Clock,
  GitBranch,
  Layers,
  Mail,
  MousePointerClick,
  Play,
  Repeat,
  RotateCcw,
  Shield,
  SplitSquareVertical,
  Timer,
  Webhook,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
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
    icon: MousePointerClick,
    title: 'Manual processes drain your team',
    description:
      'Every new lead means a manual email, a CRM update, a Slack notification, and a follow-up reminder. Multiply that by 100 leads a week.',
  },
  {
    icon: AlertTriangle,
    title: 'Balls get dropped constantly',
    description:
      'A lead comes in at 11pm and nobody follows up until Monday. A customer goes quiet for 3 weeks and nobody notices. Leads go cold because humans forget.',
  },
  {
    icon: Clock,
    title: 'Duct-taped automations break',
    description:
      "You've connected 6 different tools with Zapier and Make. One API changes and the whole chain breaks silently. You find out when a customer complains.",
  },
  {
    icon: Layers,
    title: 'No visibility into what is running',
    description:
      'Your automations are scattered across platforms. Nobody knows what triggers what. When something breaks, you spend hours debugging across 4 dashboards.',
  },
];

interface NodeType {
  icon: LucideIcon;
  name: string;
  description: string;
}

const nodeTypes: NodeType[] = [
  { icon: Zap, name: 'Action', description: 'Execute agent responses, API calls, or Convex functions. Full access to 127+ tools.' },
  { icon: Clock, name: 'Wait', description: 'Delay by duration or until a specific timestamp. "Wait 3 days, then follow up."' },
  { icon: Shield, name: 'Approval', description: 'Pause for human decision. Get a push notification, approve or deny from anywhere.' },
  { icon: SplitSquareVertical, name: 'Condition', description: 'Branch logic. If lead score > 80, fast-track to sales. Otherwise, nurture sequence.' },
  { icon: Repeat, name: 'Loop', description: 'Repeat until a condition is met. Check status every hour until the deal closes.' },
  { icon: GitBranch, name: 'Parallel', description: 'Execute multiple branches at once. Send email, update CRM, notify Slack simultaneously.' },
  { icon: Webhook, name: 'Webhook', description: 'Trigger workflows from any external service. Stripe payment, form submission, API call.' },
  { icon: Mail, name: 'Delivery', description: 'Send email, SMS, or push notifications. Personalized with contact data from your CRM.' },
];

const triggers = [
  { event: 'Lead created', source: 'CRM', description: 'Instantly engage new leads before they go cold' },
  { event: 'Form submitted', source: 'Website', description: 'Route submissions to the right team or workflow' },
  { event: 'Payment received', source: 'Stripe', description: 'Trigger onboarding, upsell, or thank-you sequences' },
  { event: 'Customer inactive', source: 'Activity', description: 'Re-engage customers before they churn' },
  { event: 'Task overdue', source: 'Tasks', description: 'Escalate automatically when deadlines are missed' },
  { event: 'Email received', source: 'Inbox', description: 'Auto-route, classify, and respond to inbound email' },
];

const capabilities: Capability[] = [
  {
    icon: RotateCcw,
    title: 'Durable execution',
    benefit: 'Workflows that never fail silently',
    description:
      'Every step is checkpointed. If a server restarts, your workflow resumes exactly where it left off. Failed steps retry automatically.',
  },
  {
    icon: Play,
    title: 'Visual builder',
    benefit: 'Build without code',
    description:
      'Drag-and-drop workflow editor built on React Flow. Connect nodes, set conditions, and deploy in minutes. See your entire automation as a clear diagram.',
  },
  {
    icon: Timer,
    title: 'Timezone-aware scheduling',
    benefit: 'Reach people at the right time',
    description:
      "Schedule workflows in any timezone. Send that follow-up email at 9am in the recipient's local time, not yours.",
  },
  {
    icon: Shield,
    title: 'Built-in safety rails',
    benefit: 'Automation you can trust',
    description:
      'Watchdog auto-cancels stuck workflows. Dead letter queue captures failures for review. Rate limiting prevents runaway executions.',
  },
];

// ────────────────────────────────────────────────────────────────────────────
// Node types section
// ────────────────────────────────────────────────────────────────────────────

function NodeTypesSection() {
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
            eyebrow="Building blocks"
            headlineLines={['8 node types.', 'Infinite combinations.']}
            sub="Drag, connect, deploy. Each node is a building block for automations that match exactly how your business works."
          />
        </motion.div>

        <motion.div
          variants={innerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {nodeTypes.map((node) => {
            const Icon = node.icon;
            return (
              <motion.div
                key={node.name}
                variants={innerItemVariants}
                className="group/n rounded-xl border border-border/60 bg-background p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:shadow-[0_14px_30px_-18px_rgba(34,27,22,0.25)]"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/60 bg-background text-foreground/70 transition-colors duration-200 group-hover/n:border-foreground/25 group-hover/n:bg-foreground group-hover/n:text-background">
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="mt-4 text-[13.5px] font-semibold text-foreground">{node.name}</h3>
                <p className="mt-1.5 text-[11.5px] leading-[1.5] text-muted-foreground">
                  {node.description}
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
// Triggers section
// ────────────────────────────────────────────────────────────────────────────

function TriggersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative isolate overflow-hidden border-t border-border/50 py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeader
              eyebrow="Triggers"
              headlineLines={['React to anything,', 'instantly.']}
              sub="Event-based, time-based, and webhook triggers mean your workflows fire the moment something happens — not hours later when someone checks. Stale entity detection catches leads that haven't progressed and customers that went quiet. Automatically."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="overflow-hidden rounded-xl border border-border/60 bg-background">
              <div className="border-b border-border/60 bg-muted/30 px-5 py-3">
                <SectionHeading label="Event triggers" />
              </div>
              <div className="divide-y divide-border/60">
                {triggers.map((trigger, i) => (
                  <motion.div
                    key={trigger.event}
                    initial={{ opacity: 0, y: 8 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                    className="flex items-start gap-4 px-5 py-3.5 transition-colors hover:bg-muted/30"
                  >
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border/60 bg-background text-signature">
                      <CalendarClock className="h-3.5 w-3.5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[13px] font-semibold text-foreground">
                          {trigger.event}
                        </span>
                        <span
                          className={cn(
                            'inline-flex items-center rounded-[5px] border border-border/60 bg-muted px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-muted-foreground',
                          )}
                        >
                          {trigger.source}
                        </span>
                      </div>
                      <p className="mt-0.5 text-[11.5px] leading-[1.5] text-muted-foreground">
                        {trigger.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Main export
// ────────────────────────────────────────────────────────────────────────────

export function WorkflowsView() {
  return (
    <>
      <FeatureHero
        pillIcon={GitBranch}
        pillLabel="Workflow Automation"
        pillSubtitle="Durable execution, visual builder"
        headlineLines={['Automate the work', 'that burns you out.']}
        sub="Durable, visual workflows that connect your AI agents, triggers, and actions into automations that run 24/7 and never break silently."
        primaryCta={{ label: 'Build your first workflow', href: 'https://app.ozzios.com/sign-up', shortcut: 'S' }}
        secondaryCta={{ label: 'See pricing', href: '/pricing' }}
        stats={[
          { value: '10', label: 'Node types' },
          { value: '20+', label: 'Event triggers' },
          { value: '24 / 7', label: 'Always running' },
          { value: '3×', label: 'Auto-retry' },
        ]}
      />

      <DeferredSection>
        <PainPointsBlock
          eyebrow="The problem"
          headlineLines={['Your automations', 'are held together with tape.']}
          sub="Zapier chains, manual follow-ups, and 'I'll remember to do that' — until you don't."
          points={painPoints}
        />
      </DeferredSection>

      <DeferredSection>
        <NodeTypesSection />
      </DeferredSection>

      <DeferredSection>
        <TriggersSection />
      </DeferredSection>

      <DeferredSection>
        <CapabilitiesBlock
          eyebrow="Professional-grade"
          headlineLines={['Automation that takes', 'itself seriously.']}
          sub="Reliable automation that never drops the ball. Your workflows keep running through outages, retry automatically when something fails, and never lose track."
          capabilities={capabilities}
        />
      </DeferredSection>

      <DeferredSection>
        <FeatureCTABlock
          eyebrow="Get automating"
          headlineLines={['Stop doing manually', 'what should run on autopilot.']}
          sub="Build your first workflow in minutes. No code, no fragile integrations, no babysitting."
          primaryCta={{ label: 'Start automating', href: 'https://app.ozzios.com/sign-up', shortcut: 'S' }}
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
