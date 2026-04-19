'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight,
  Briefcase,
  Clock,
  AlertTriangle,
  MessageSquare,
  Eye,
  UserCheck,
  Brain,
  BarChart3,
  Mail,
  CheckCircle2,
  Zap,
  Users,
  ClipboardList,
  Shield,
  HeartHandshake,
  Bot,
  Plug,
  Reply,
  BellRing,
} from 'lucide-react';
import { DeferredSection } from '@/components/ui/lazy-section';

// ---------------------------------------------------------------------------
// Animation Variants
// ---------------------------------------------------------------------------

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
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const painPoints = [
  {
    icon: AlertTriangle,
    title: 'Things fall through the cracks',
    description:
      'A customer mentioned a deadline in an email last Tuesday. A job was supposed to start Friday. Nobody remembered, and now you are scrambling to explain the miss.',
  },
  {
    icon: MessageSquare,
    title: 'Communication is scattered',
    description:
      'Customer feedback lives in texts, job updates in spreadsheets, files in Google Drive, and invoices in QuickBooks. Finding the full picture on any customer requires opening five different tools.',
  },
  {
    icon: Eye,
    title: 'Customers have no visibility',
    description:
      'Your customers call "just checking in" every week because they have no idea when their job is scheduled. You spend hours on the phone instead of doing the actual work.',
  },
  {
    icon: Clock,
    title: 'Onboarding takes too long',
    description:
      'Every new customer means a new intake process, new estimate, new scheduling setup, and a dozen back-and-forth calls. By the time you start, they are already frustrated.',
  },
];

type PipelineStage = {
  step: string;
  title: string;
  description: string;
  features: string[];
  color: string;
  bgColor: string;
};

const pipelineStages: PipelineStage[] = [
  {
    step: '01',
    title: 'Onboard',
    description: 'Automated onboarding workflows collect customer information, set up job records, assign technicians, and kick off initial scheduling -- all in one smooth process.',
    features: ['Automated intake forms', 'Job record creation', 'Technician assignment workflows', 'Welcome sequence automation'],
    color: 'text-signature',
    bgColor: 'bg-signature/10',
  },
  {
    step: '02',
    title: 'Communicate',
    description: 'Every customer gets a unified communication hub with an AI agent handling responses, follow-ups, and status updates automatically -- your customers get instant replies while your team focuses on getting the job done.',
    features: ['AI agent for every customer', 'Instant automated responses', 'File sharing & approvals', 'Smart escalation to humans'],
    color: 'text-electric',
    bgColor: 'bg-electric/10',
  },
  {
    step: '03',
    title: 'Execute',
    description: 'AI agents handle the day-to-day operations. Scheduling, dispatching, follow-ups, and reporting run on autopilot with human oversight.',
    features: ['AI-powered task execution', 'Deadline tracking', 'Dependency management', 'Automated quality checks'],
    color: 'text-mint',
    bgColor: 'bg-mint/10',
  },
  {
    step: '04',
    title: 'Report',
    description: 'Customers see real-time updates showing exactly what is happening and when their job will be completed. No more daily phone calls -- it is all live.',
    features: ['Real-time customer updates', 'Automated reporting', 'Custom KPI tracking', 'Branded reporting'],
    color: 'text-signature',
    bgColor: 'bg-signature/10',
  },
  {
    step: '05',
    title: 'Retain',
    description: 'AI monitors customer health signals -- engagement drops, missed appointments, declining satisfaction -- and alerts you before a customer churns. Proactive, not reactive.',
    features: ['Customer health scoring', 'Churn risk detection', 'Upsell opportunity flagging', 'Satisfaction tracking'],
    color: 'text-electric',
    bgColor: 'bg-electric/10',
  },
];

const featureHighlights = [
  {
    icon: Users,
    title: 'CRM & Contacts',
    description: 'Complete customer profiles with every interaction, file, and note. Your single source of truth for all customer relationships.',
    link: '/features/crm',
  },
  {
    icon: ClipboardList,
    title: 'Task Management',
    description: 'Assign, track, and automate tasks across customers. Dependencies, deadlines, and escalation rules keep everything on schedule.',
    link: '/features/tasks',
  },
  {
    icon: MessageSquare,
    title: 'Channels & Messaging',
    description: 'Dedicated communication channels for your team with an AI agent installed to handle day-to-day comms. Threaded conversations, file sharing, and smart escalation.',
    link: '/features/channels',
  },
  {
    icon: Brain,
    title: 'Knowledge Base',
    description: 'Searchable SOPs, customer context, and internal playbooks keep your team and AI agents aligned on every account.',
    link: '/features/knowledge-base',
  },
  {
    icon: Bot,
    title: 'AI Agents',
    description: '30+ specialist AI agents handle execution across scheduling, communications, follow-ups, and more -- plus create your own. Your team focuses on delivering great service.',
    link: '/features/ai-agents',
  },
  {
    icon: BarChart3,
    title: 'Customer Reporting',
    description: 'Branded dashboards with live metrics. Customers see progress in real-time, and you never write another status update.',
    link: '/features/dashboard',
  },
];

const results = [
  { value: '0', label: 'Dropped jobs', description: 'Automated tracking and reminders mean nothing slips through the cracks. Ever.' },
  { value: '75%', label: 'Fewer status calls', description: 'Real-time customer updates eliminate the daily "when are you coming?" phone calls' },
  { value: '2x', label: 'Customer capacity', description: 'Manage twice as many customers per team member with AI-powered execution and automation' },
  { value: '35%', label: 'Lower churn', description: 'Proactive health monitoring catches at-risk customers before they start looking elsewhere' },
];

// ---------------------------------------------------------------------------
// Sections
// ---------------------------------------------------------------------------

function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <span className="tag-neo rounded-full text-signature mb-6 inline-flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5" />
              Customer Management
            </span>
            <h1 className="text-display font-display text-foreground mb-6">
              Never drop a customer ball{' '}
              <span className="text-signature">again</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Onboard, communicate, execute, report, and retain -- all in one platform.
              OzziOS replaces your patchwork of tools with an end-to-end customer
              management system powered by AI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.ozzios.com/sign-up"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
              >
                Manage customers better
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Hero stat */}
          <motion.div variants={itemVariants} className="mt-16 max-w-2xl mx-auto">
            <div className="card-neo rounded-xl p-6 text-center">
              <div className="font-display text-4xl md:text-5xl text-signature mb-2">68%</div>
              <p className="text-muted-foreground text-sm">
                of customers leave service companies due to poor communication, not poor work. OzziOS fixes that.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ProblemSection() {
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
          <span className="tag-neo rounded-full text-signature mb-6 inline-block">The Problem</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Customer management is a mess
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            More customers should mean more revenue. Instead, it means more chaos, more dropped balls, and more churn.
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
                <div className="w-12 h-12 rounded-xl bg-signature/10 flex items-center justify-center mb-5 group-hover:bg-signature/20 transition-colors">
                  <Icon className="w-6 h-6 text-signature" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">
                  {point.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function PipelineSection() {
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
          <span className="tag-neo rounded-full text-signature mb-6 inline-block">The Lifecycle</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Every customer, perfectly managed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            OzziOS manages the complete customer lifecycle. From first contact to long-term retention,
            every stage is systematized and powered by AI.
          </p>
        </motion.div>

        {/* Pipeline visualization */}
        <div className="space-y-6">
          {pipelineStages.map((stage, index) => (
            <PipelineStageCard key={stage.step} stage={stage} index={index} isLast={index === pipelineStages.length - 1} />
          ))}
        </div>

        {/* Pipeline connector text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 card-neo rounded-full px-6 py-3">
            <HeartHandshake className="w-4 h-4 text-signature" />
            <span className="text-sm text-muted-foreground">
              Happy customers stay longer, spend more, and refer others. OzziOS makes that the default.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PipelineStageCard({ stage, index, isLast }: { stage: PipelineStage; index: number; isLast: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="relative"
    >
      <div className="card-neo rounded-xl p-8 md:p-10">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          {/* Step number */}
          <div className={`w-14 h-14 rounded-xl ${stage.bgColor} flex items-center justify-center shrink-0`}>
            <span className={`font-display text-lg ${stage.color}`}>{stage.step}</span>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3">
              {stage.title}
            </h3>
            <p className="text-muted-foreground text-[15px] leading-relaxed mb-6">
              {stage.description}
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2">
              {stage.features.map((feature) => (
                <span
                  key={feature}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-foreground/70 bg-muted border border-border rounded-full"
                >
                  <CheckCircle2 className="w-3 h-3 text-mint" />
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Connector */}
      {!isLast && (
        <div className="flex justify-center py-2">
          <div className="w-px h-6 bg-border" />
        </div>
      )}
    </motion.div>
  );
}

const aiCommsCapabilities = [
  {
    icon: Reply,
    title: 'Instant customer responses',
    description:
      'Customer asks a question at 11 PM? The AI agent responds immediately with accurate, context-aware answers pulled from your knowledge base and job history.',
  },
  {
    icon: BellRing,
    title: 'Proactive status updates',
    description:
      'The agent automatically sends progress updates, appointment reminders, and job completion summaries to customers -- without anyone on your team lifting a finger.',
  },
  {
    icon: UserCheck,
    title: 'Smart human escalation',
    description:
      'When a customer request needs human judgment -- a scheduling change, a sensitive conversation, a pricing question -- the agent flags it and routes to the right team member.',
  },
  {
    icon: Brain,
    title: 'Learns your voice and context',
    description:
      'The agent uses your knowledge base, past conversations, and customer-specific context to respond in your brand voice. Customers cannot tell the difference.',
  },
];

function AICommsSection() {
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
          <span className="tag-neo rounded-full text-signature mb-6 inline-flex items-center gap-2">
            <Bot className="w-3.5 h-3.5" />
            AI Customer Comms
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Install an AI agent into every team channel
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each team channel gets its own AI agent that handles communication 24/7.
            It responds to questions, shares updates, and escalates to your team only when it matters.
          </p>
        </motion.div>

        {/* How it works visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="card-neo rounded-xl p-8 md:p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-signature/10 flex items-center justify-center">
                <Plug className="w-6 h-6 text-signature" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground">How it works</h3>
                <p className="text-sm text-muted-foreground">Three steps to always-on customer communication</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-lg bg-signature/10 flex items-center justify-center shrink-0">
                  <span className="font-display text-signature text-sm">01</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Create a team channel</h4>
                  <p className="text-sm text-muted-foreground">
                    Set up a dedicated channel for your team -- or use one you already have. This becomes the single hub for all customer communication.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center shrink-0">
                  <span className="font-display text-electric text-sm">02</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Install an AI agent</h4>
                  <p className="text-sm text-muted-foreground">
                    Assign an AI agent to the channel. It instantly has access to your knowledge base, the customer's history, job status, and your brand voice.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-lg bg-mint/10 flex items-center justify-center shrink-0">
                  <span className="font-display text-mint text-sm">03</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Let it handle the conversation</h4>
                  <p className="text-sm text-muted-foreground">
                    The agent responds to customer messages, shares proactive updates, and only pulls in your team when human judgment is needed. Your customers get 24/7 responsiveness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Capabilities grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {aiCommsCapabilities.map((cap) => {
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
                <h3 className="font-display text-xl text-foreground mb-3">
                  {cap.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function FeatureHighlightsSection() {
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
          <span className="tag-neo rounded-full text-signature mb-6 inline-block">Features That Power It</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            One platform for every customer need
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Replace your stack of disconnected tools with one unified system that handles communication, execution, and reporting.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featureHighlights.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.a
                key={feature.title}
                href={feature.link}
                variants={itemVariants}
                className="card-neo rounded-xl p-8 group block"
              >
                <div className="w-12 h-12 rounded-xl bg-signature/10 flex items-center justify-center mb-5 group-hover:bg-signature/20 transition-colors">
                  <Icon className="w-6 h-6 text-signature" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-3 group-hover:text-signature transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-signature">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function ResultsSection() {
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
          <span className="tag-neo rounded-full text-mint mb-6 inline-block">Results</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Better customers, better retention
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Service companies using OzziOS for customer management deliver better work, communicate more effectively, and keep customers longer.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {results.map((result) => (
            <motion.div
              key={result.label}
              variants={itemVariants}
              className="card-neo rounded-xl p-6 text-center"
            >
              <div className="font-display text-3xl md:text-4xl text-signature mb-2">
                {result.value}
              </div>
              <div className="font-semibold text-foreground text-sm mb-2">
                {result.label}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {result.description}
              </p>
            </motion.div>
          ))}
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
            Stop managing chaos.
            <br />
            <span className="text-signature">Start managing customers.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
            One platform for onboarding, communication, execution, and reporting. Your customers will thank you.
          </p>
          <a
            href="https://app.ozzios.com/sign-up"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
          >
            Manage customers better
            <ArrowRight className="w-5 h-5" />
          </a>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <span>256-bit Encryption</span>
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
// Main View
// ---------------------------------------------------------------------------

export function ClientManagementView() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <DeferredSection>
        <ProblemSection />
      </DeferredSection>
      <DeferredSection>
        <PipelineSection />
      </DeferredSection>
      <DeferredSection>
        <AICommsSection />
      </DeferredSection>
      <DeferredSection>
        <FeatureHighlightsSection />
      </DeferredSection>
      <DeferredSection>
        <ResultsSection />
      </DeferredSection>
      <DeferredSection>
        <CTASection />
      </DeferredSection>
    </div>
  );
}
