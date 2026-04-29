'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight,
  Users,
  Clock,
  AlertTriangle,
  Repeat,
  Brain,
  Zap,
  BarChart3,
  Mail,
  Search,
  Share2,
  CheckCircle2,
  MessageSquare,
  GitBranch,
  Shield,
  UserPlus,
  Target,
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
    icon: Repeat,
    title: 'Turnover drains your team',
    description:
      'You spend 3 months training a technician, they leave for a better offer, and their customer knowledge walks out the door. You are always in hiring mode.',
  },
  {
    icon: AlertTriangle,
    title: 'Your team is stretched too thin',
    description:
      'Five people doing the work of fifteen. Everyone is juggling too many jobs, cutting corners on service quality, and callbacks are starting to pile up.',
  },
  {
    icon: Clock,
    title: 'Onboarding never ends',
    description:
      'By the time a new hire is productive, someone else has left. Your senior people spend half their time training instead of doing high-value work.',
  },
  {
    icon: GitBranch,
    title: 'Silos kill coordination',
    description:
      'Your dispatcher does not talk to your marketing person. Your office staff does not know what the field techs are dealing with. Work gets duplicated or dropped.',
  },
];

const features = [
  {
    icon: Brain,
    title: 'AI employees that augment your team',
    description: '30+ specialists that handle back-office execution while your human team focuses on service delivery, customer relationships, and growing the business. Plus build custom agents for your workflows.',
    link: '/features/ai-agents',
  },
  {
    icon: GitBranch,
    title: 'Workflows that connect everything',
    description: 'Automated processes that ensure nothing falls through the cracks. One trigger can kick off work across scheduling, follow-ups, invoicing, and marketing.',
    link: '/features/workflows',
  },
  {
    icon: MessageSquare,
    title: 'Channels for real-time coordination',
    description: 'Internal team channels for dispatchers, technicians, and office staff. Everyone stays aligned, approvals happen fast, context never gets lost.',
    link: '/features/channels',
  },
  {
    icon: Target,
    title: 'CRM that enriches itself',
    description: 'AI-powered lead scoring, contact enrichment, and pipeline management. Your sales process runs while your team is out in the field.',
    link: '/features/crm',
  },
  {
    icon: BarChart3,
    title: 'Dashboard for full visibility',
    description: 'See every customer, every job, every metric in one place. Know exactly what your team (human and AI) is working on.',
    link: '/features/dashboard',
  },
  {
    icon: Zap,
    title: 'Task management with AI escalation',
    description: 'AI handles routine tasks automatically and escalates to the right team member when human judgment is needed.',
    link: '/features/tasks',
  },
];

const stats = [
  { value: '3x', label: 'More output', detail: 'Same team, triple the jobs completed' },
  { value: '60%', label: 'Less admin', detail: 'AI handles reporting, scheduling, follow-ups' },
  { value: '0', label: 'Knowledge lost', detail: 'AI retains everything, even when people leave' },
  { value: '50+', label: 'Customers managed', detail: 'Scale without proportional headcount' },
];

const workflowSteps = [
  {
    step: '01',
    title: 'New customer onboarded',
    description: 'AI creates the job record, imports contact details, schedules the initial visit, and sets up follow-up reminders -- in minutes.',
  },
  {
    step: '02',
    title: 'AI handles the back office',
    description: 'Follow-up emails drafted, review requests sent, invoices generated, marketing content queued. Your team reviews instead of creating from scratch.',
  },
  {
    step: '03',
    title: 'Human team delivers the service',
    description: 'Your technicians do the hands-on work, your office staff handles customer relationships, your dispatchers keep things moving. The work humans do best.',
  },
  {
    step: '04',
    title: 'Results delivered automatically',
    description: 'AI compiles job reports, sends customer satisfaction surveys, identifies upsell opportunities. Your team gets credit for flawless execution.',
  },
];

// ---------------------------------------------------------------------------
// Components
// ---------------------------------------------------------------------------

function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="tag-neo rounded-full text-signature bg-signature/10 border-signature mb-6">
              <Users className="w-4 h-4" />
              <span className="text-[11px] font-semibold uppercase tracking-wider ml-1.5">For Service Company Teams</span>
            </span>
            <h1 className="text-display font-display text-foreground mb-6">
              Give your team{' '}
              <span className="text-signature">superpowers</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Your team is talented but stretched thin. OzziOS adds an unlimited AI workforce to your
              roster -- handling back-office execution so your dispatchers, technicians, and office staff can focus on the work that
              actually moves the needle.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
              >
                Setup a demo
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function PainSection() {
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
            Growing pains are real
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            You have 5-15 people but the workload of 30. Something has to give.
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
              <motion.div key={point.title} variants={itemVariants} className="card-neo rounded-xl p-8">
                <div className="w-12 h-12 rounded-xl bg-signature/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-signature" />
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

function WorkflowSection() {
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
          <span className="tag-neo text-signature mb-6 inline-block">How It Works</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Humans + AI, working together
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Your team stays in control. AI handles the heavy lifting.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-3xl mx-auto space-y-6"
        >
          {workflowSteps.map((step) => (
            <motion.div key={step.step} variants={itemVariants} className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-lg bg-signature/10 flex items-center justify-center shrink-0">
                <span className="font-display text-signature text-sm">{step.step}</span>
              </div>
              <div className="flex-1 min-w-0 pt-1">
                <h3 className="font-display text-lg text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FeaturesSection() {
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
          <span className="tag-neo text-signature mb-6 inline-block">What Your Team Gets</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Built for teams that want to scale
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Every feature designed to multiply what your team can deliver.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.a
                key={feature.title}
                href={feature.link}
                variants={itemVariants}
                className="card-neo rounded-xl p-8 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-signature/10 flex items-center justify-center mb-5 group-hover:bg-signature/20 transition-colors">
                  <Icon className="w-6 h-6 text-signature" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-signature transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{feature.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-signature">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
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
          <span className="tag-neo text-signature mb-6 inline-block">By the Numbers</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Your team of 5 performs like a team of 15
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="card-neo rounded-xl p-8 text-center"
            >
              <div className="font-display text-4xl md:text-5xl text-signature mb-2">{stat.value}</div>
              <div className="font-semibold text-foreground text-sm mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.detail}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team structure comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="card-neo rounded-xl p-8 md:p-10">
            <h3 className="font-display text-xl text-foreground mb-6 text-center">
              Scale without scaling headcount
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Traditional service company (50 customers)
                </div>
                <ul className="space-y-3">
                  <li className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Office Staff</span>
                    <span className="text-foreground font-medium">3 hires</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Dispatchers</span>
                    <span className="text-foreground font-medium">2 hires</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Field Technicians</span>
                    <span className="text-foreground font-medium">8 hires</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Admin & Marketing</span>
                    <span className="text-foreground font-medium">2 hires</span>
                  </li>
                  <li className="flex justify-between text-sm border-t border-border pt-3 mt-3">
                    <span className="text-foreground font-semibold">Total headcount</span>
                    <span className="text-foreground font-semibold">15 people</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="text-sm font-semibold text-signature uppercase tracking-wider mb-4">
                  Service company + OzziOS (50 customers)
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-mint mt-0.5 shrink-0" />
                    <span className="text-foreground">1 Office Manager (oversight)</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-mint mt-0.5 shrink-0" />
                    <span className="text-foreground">1 Dispatcher (scheduling focus)</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-mint mt-0.5 shrink-0" />
                    <span className="text-foreground">3 Field Technicians (service delivery)</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-mint mt-0.5 shrink-0" />
                    <span className="text-foreground">Unlimited AI agents (all back-office)</span>
                  </li>
                  <li className="flex justify-between text-sm border-t border-border pt-3 mt-3">
                    <span className="text-signature font-semibold">Total headcount</span>
                    <span className="text-signature font-semibold">5 people + AI</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
            Stop hiring to keep up.
            <br />
            <span className="text-signature">Start scaling with AI.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
            Give your team the backup they have been asking for -- without the overhead of
            more headcount.
          </p>
          <a
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
          >
            Setup a demo
            <ArrowRight className="w-5 h-5" />
          </a>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> 256-bit Encryption</span>
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

export function TeamsView() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <DeferredSection>
        <PainSection />
      </DeferredSection>
      <DeferredSection>
        <WorkflowSection />
      </DeferredSection>
      <DeferredSection>
        <FeaturesSection />
      </DeferredSection>
      <DeferredSection>
        <StatsSection />
      </DeferredSection>
      <DeferredSection>
        <CTASection />
      </DeferredSection>
    </div>
  );
}
