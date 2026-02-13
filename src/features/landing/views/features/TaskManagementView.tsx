'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ListTodo,
  Clock,
  AlertTriangle,
  GitBranch,
  Repeat,
  LayoutGrid,
  Tag,
  Users,
  Bot,
  CalendarClock,
  Zap,
  Shield,
} from 'lucide-react';

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

const painPoints = [
  {
    icon: AlertTriangle,
    title: 'Tasks fall through the cracks',
    description:
      'Spreadsheets, sticky notes, and scattered tools mean deadlines get missed and clients notice. You need a single source of truth.',
  },
  {
    icon: Clock,
    title: 'Manual follow-ups eat your day',
    description:
      'You spend hours chasing status updates, reminding teammates about deadlines, and escalating overdue work. It should happen automatically.',
  },
  {
    icon: Users,
    title: 'No visibility across the team',
    description:
      'Who is working on what? What is blocking whom? Without real-time visibility, coordination is guesswork.',
  },
  {
    icon: Repeat,
    title: 'Repetitive work stays manual',
    description:
      'Client onboarding, campaign launches, monthly reports -- the same task lists get recreated from scratch every time.',
  },
];

const capabilities = [
  {
    icon: LayoutGrid,
    title: 'Kanban + List Views',
    description:
      'Drag-and-drop kanban boards for visual workflows. Switch to list view for bulk operations. Your team picks the view that fits.',
  },
  {
    icon: GitBranch,
    title: 'Task Dependencies',
    description:
      'Define what blocks what. Tasks auto-update when dependencies resolve. No more starting work that is not ready yet.',
  },
  {
    icon: CalendarClock,
    title: 'Auto-Escalation',
    description:
      'Priority automatically increases as deadlines approach. 3 days out becomes high priority. Past due becomes urgent. No manual triage.',
  },
  {
    icon: Repeat,
    title: 'Recurring Tasks',
    description:
      'Set tasks to repeat daily, weekly, or monthly. Client reporting, status calls, content calendars -- create once, run forever.',
  },
  {
    icon: Bot,
    title: 'AI Agent Integration',
    description:
      'AI agents create, update, and complete tasks autonomously. Your campaign manager agent can spawn a full task list from a single brief.',
  },
  {
    icon: Tag,
    title: 'Templates & Tags',
    description:
      'Save reusable task templates for campaigns, onboarding, and reporting. Tag and filter to find anything in seconds.',
  },
];

const workflowSteps = [
  {
    step: '01',
    title: 'Create from anywhere',
    description:
      'Tasks are created by your team, from channel conversations, from leads and contacts, or by AI agents autonomously. Every task tracks its source.',
  },
  {
    step: '02',
    title: 'Organize automatically',
    description:
      'Custom statuses, priorities, tags, and assignees keep your board clean. Drag between columns or let the system auto-assign based on rules.',
  },
  {
    step: '03',
    title: 'Escalate intelligently',
    description:
      'Configurable escalation rules bump priority as deadlines approach. Your team focuses on what matters most, not what they remembered to check.',
  },
  {
    step: '04',
    title: 'Complete and repeat',
    description:
      'Mark tasks done, trigger dependent tasks, and let recurring schedules regenerate the next cycle. The system remembers so you don\'t have to.',
  },
];

function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative z-10 mx-auto max-w-[900px] px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <motion.div variants={itemVariants} className="text-center mb-8">
            <div className="tag-neo rounded-full bg-signature/10 border-signature mb-6">
              <ListTodo className="w-4 h-4 text-signature" />
              <span className="text-[11px] font-semibold text-signature uppercase tracking-wider">
                Task Management
              </span>
            </div>
            <h1 className="text-display font-display text-foreground mb-6">
              Stop losing work to{' '}
              <span className="text-signature">broken processes</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Kanban boards, auto-escalation, dependencies, and AI-powered task creation.
              Every task tracked, every deadline enforced, every handoff automatic.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-signature" />
                37% fewer missed deadlines
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-signature" />
                5hrs/week saved on follow-ups
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-signature" />
                100% task visibility
              </span>
            </div>
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
          <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-tight mb-4">
            Your task management is costing you clients
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Agencies lose an average of 12% of revenue to missed deliverables and poor
            coordination. Here is why.
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
                <h3 className="font-display text-xl text-foreground mb-3">{point.title}</h3>
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

function SolutionSection() {
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
          <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-tight mb-4">
            From chaos to clarity in four steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            A task system that thinks ahead so your team can focus on doing the work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {workflowSteps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-5"
            >
              <div className="w-14 h-14 rounded-lg bg-signature/10 flex items-center justify-center shrink-0">
                <span className="font-display text-signature text-lg">{item.step}</span>
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
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
          <span className="tag-neo text-signature mb-6 inline-block">Capabilities</span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-tight mb-4">
            Everything your team needs to ship on time
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Built for agencies that juggle dozens of clients and hundreds of deliverables.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                variants={itemVariants}
                className="bg-card border-2 border-border rounded-lg p-8 hover:border-signature/30 transition-colors duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-signature/10 flex items-center justify-center mb-5 group-hover:bg-signature/20 transition-colors">
                  <Icon className="w-6 h-6 text-signature" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-3">{cap.title}</h3>
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

function DifferentiatorSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const comparisons = [
    { feature: 'AI-powered task creation', ozzios: true, others: false },
    { feature: 'Auto-priority escalation', ozzios: true, others: false },
    { feature: 'Task dependency graph', ozzios: true, others: true },
    { feature: 'Recurring task templates', ozzios: true, others: true },
    { feature: 'Agent-to-task automation', ozzios: true, others: false },
    { feature: 'Source tracking (leads, messages)', ozzios: true, others: false },
    { feature: 'Built-in team collaboration', ozzios: true, others: true },
    { feature: 'Real-time kanban + list views', ozzios: true, others: true },
  ];

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[900px] px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-neo text-signature mb-6 inline-block">Why OzziOS</span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-tight mb-4">
            Not just another project board
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Most task tools are passive lists. OzziOS actively manages your workload with
            AI agents, auto-escalation, and intelligent dependencies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card border-2 border-border rounded-lg overflow-hidden"
        >
          <div className="grid grid-cols-3 gap-0 border-b-2 border-border bg-muted/50 px-6 py-4">
            <span className="text-sm font-semibold text-foreground">Feature</span>
            <span className="text-sm font-semibold text-foreground text-center">OzziOS</span>
            <span className="text-sm font-semibold text-muted-foreground text-center">
              Generic Tools
            </span>
          </div>
          {comparisons.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 gap-0 px-6 py-4 ${i < comparisons.length - 1 ? 'border-b border-border' : ''}`}
            >
              <span className="text-sm text-foreground">{row.feature}</span>
              <div className="flex justify-center">
                <CheckCircle2 className="w-5 h-5 text-mint" />
              </div>
              <div className="flex justify-center">
                {row.others ? (
                  <CheckCircle2 className="w-5 h-5 text-muted-foreground/40" />
                ) : (
                  <span className="text-muted-foreground/40 text-sm">--</span>
                )}
              </div>
            </div>
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
            Never miss a deadline
            <br />
            <span className="text-signature">again</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
            Start managing tasks with AI-powered automation, smart escalation, and
            real-time visibility across your entire team.
          </p>
          <a
            href="https://app.ozzios.com/sign-up"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
          >
            Start free trial
            <ArrowRight className="w-5 h-5" />
          </a>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              SOC 2 Compliant
            </span>
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

export function TaskManagementView() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PainPointsSection />
      <SolutionSection />
      <CapabilitiesSection />
      <DifferentiatorSection />
      <CTASection />
    </div>
  );
}
