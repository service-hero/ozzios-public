'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight,
  GitBranch,
  Zap,
  Clock,
  Shield,
  Play,
  RotateCcw,
  Webhook,
  CalendarClock,
  SplitSquareVertical,
  Repeat,
  Mail,
  AlertTriangle,
  Layers,
  Timer,
  MousePointerClick,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const painPoints = [
  {
    icon: MousePointerClick,
    title: 'Manual processes drain your team',
    description:
      'Every new lead means a manual email, a CRM update, a Slack notification, and a follow-up reminder. Multiply that by 100 leads a week and your team is drowning in busywork.',
  },
  {
    icon: AlertTriangle,
    title: 'Balls get dropped constantly',
    description:
      'A lead comes in at 11pm and nobody follows up until Monday. A client goes quiet for 3 weeks and nobody notices. Leads go cold because humans forget.',
  },
  {
    icon: Clock,
    title: 'Duct-taped automations break',
    description:
      'You\'ve connected 6 different tools with Zapier and Make. One API changes and the whole chain breaks silently. You find out when a client complains.',
  },
  {
    icon: Layers,
    title: 'No visibility into what\'s running',
    description:
      'Your automations are scattered across platforms. Nobody knows what triggers what. When something breaks, you spend hours debugging across 4 dashboards.',
  },
];

const nodeTypes = [
  {
    icon: Zap,
    name: 'Action',
    description: 'Execute agent responses, API calls, or Convex functions. Full access to your 127+ AI tools.',
  },
  {
    icon: Clock,
    name: 'Wait',
    description: 'Delay by duration or until a specific timestamp. "Wait 3 days, then follow up."',
  },
  {
    icon: Shield,
    name: 'Approval',
    description: 'Pause for human decision. Get a push notification, approve or deny from anywhere.',
  },
  {
    icon: SplitSquareVertical,
    name: 'Condition',
    description: 'Branch logic. If lead score > 80, fast-track to sales. Otherwise, nurture sequence.',
  },
  {
    icon: Repeat,
    name: 'Loop',
    description: 'Repeat until a condition is met. Check status every hour until the deal closes.',
  },
  {
    icon: GitBranch,
    name: 'Parallel',
    description: 'Execute multiple branches at once. Send email, update CRM, and notify Slack simultaneously.',
  },
  {
    icon: Webhook,
    name: 'Webhook',
    description: 'Trigger workflows from any external service. Stripe payment, form submission, API call.',
  },
  {
    icon: Mail,
    name: 'Delivery',
    description: 'Send email, SMS, or push notifications. Personalized with contact data from your CRM.',
  },
];

const triggers = [
  { event: 'Lead created', source: 'CRM', description: 'Instantly engage new leads before they go cold' },
  { event: 'Form submitted', source: 'Website', description: 'Route submissions to the right team or workflow' },
  { event: 'Payment received', source: 'Stripe', description: 'Trigger onboarding, upsell, or thank-you sequences' },
  { event: 'Client inactive', source: 'Activity', description: 'Re-engage clients before they churn' },
  { event: 'Task overdue', source: 'Tasks', description: 'Escalate automatically when deadlines are missed' },
  { event: 'Email received', source: 'Inbox', description: 'Auto-route, classify, and respond to inbound email' },
];

const capabilities = [
  {
    icon: RotateCcw,
    title: 'Durable execution',
    benefit: 'Workflows that never fail silently',
    description:
      'Every step is checkpointed. If a server restarts, your workflow resumes exactly where it left off. Failed steps retry automatically with exponential backoff.',
  },
  {
    icon: Play,
    title: 'Visual builder',
    benefit: 'Build without code',
    description:
      'Drag-and-drop workflow editor built on React Flow. Connect nodes, set conditions, and deploy in minutes. See your automation logic as a clear, visual DAG.',
  },
  {
    icon: Timer,
    title: 'Timezone-aware scheduling',
    benefit: 'Reach people at the right time',
    description:
      'Schedule workflows in any timezone. Send that follow-up email at 9am in the recipient\'s local time, not yours.',
  },
  {
    icon: Shield,
    title: 'Built-in safety rails',
    benefit: 'Automation you can trust',
    description:
      'Watchdog auto-cancels stuck workflows. Dead letter queue captures failures for review. Rate limiting prevents runaway executions.',
  },
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
              <GitBranch className="w-4 h-4 text-signature" />
              <span className="text-[11px] font-semibold text-signature uppercase tracking-wider">
                Workflow Automation
              </span>
            </div>
            <h1 className="text-display font-display text-foreground mb-6">
              Automate the work{' '}
              <span className="text-signature">that burns you out.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Durable, visual workflows that connect your AI agents, triggers, and actions into
              automations that run 24/7 and never break silently.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="https://app.ozzios.com/sign-up"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
              >
                Build your first workflow
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
              { value: '10', label: 'Node Types' },
              { value: '20+', label: 'Event Triggers' },
              { value: '24/7', label: 'Always Running' },
              { value: '3x', label: 'Auto-Retry' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl text-foreground mb-1">{stat.value}</div>
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
            Your automations are held together with tape
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Zapier chains, manual follow-ups, and "I'll remember to do that" -- until you don't.
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

function NodeTypesSection() {
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
          <span className="tag-neo text-signature mb-6 inline-block">Building Blocks</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            8 node types. Infinite combinations.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Drag, connect, deploy. Each node is a building block for automations that match
            exactly how your business works.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {nodeTypes.map((node) => {
            const Icon = node.icon;
            return (
              <motion.div
                key={node.name}
                variants={itemVariants}
                className="bg-card border-2 border-border rounded-lg p-6 hover:border-signature/30 transition-colors duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-signature/10 flex items-center justify-center mb-4 group-hover:bg-signature/20 transition-colors">
                  <Icon className="w-5 h-5 text-signature" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-2">{node.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{node.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function TriggersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
          >
            <span className="tag-neo text-signature mb-6 inline-block">Triggers</span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-tight mb-6">
              React to anything, instantly
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              Event-based, time-based, and webhook triggers mean your workflows fire the moment
              something happens -- not hours later when someone checks.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Stale entity detection catches leads that haven't progressed, clients that went quiet,
              and tasks that are overdue. Automatically.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-3">
              {triggers.map((trigger, i) => (
                <motion.div
                  key={trigger.event}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                  className="flex items-start gap-4 bg-card border-2 border-border rounded-lg p-4 hover:border-signature/30 transition-colors"
                >
                  <div className="w-8 h-8 rounded bg-signature/10 flex items-center justify-center shrink-0">
                    <CalendarClock className="w-4 h-4 text-signature" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-semibold text-foreground text-sm">{trigger.event}</span>
                      <span className="text-[10px] text-muted-foreground uppercase tracking-wider bg-muted px-1.5 py-0.5 rounded">
                        {trigger.source}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">{trigger.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
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
          <span className="tag-neo text-signature mb-6 inline-block">Enterprise-Grade</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Automation that takes itself seriously
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Built on durable execution, not fragile webhooks. These workflows survive server
            restarts, retry on failure, and never lose state.
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
            Stop doing manually
            <br />
            what should run on autopilot.
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
            Build your first workflow in minutes. No code, no fragile integrations, no babysitting.
          </p>
          <a
            href="https://app.ozzios.com/sign-up"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
          >
            Start automating
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

export function WorkflowsView() {
  return (
    <>
      <HeroSection />
      <PainPointsSection />
      <NodeTypesSection />
      <TriggersSection />
      <CapabilitiesSection />
      <CTASection />
    </>
  );
}
