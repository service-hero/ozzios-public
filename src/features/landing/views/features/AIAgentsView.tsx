'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight,
  Bot,
  Brain,
  Users,
  Shield,
  Clock,
  MessageSquare,
  GitBranch,
  Eye,
  Sparkles,
  CheckCircle2,
  BarChart3,
  Wrench,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const painPoints = [
  {
    icon: Users,
    title: 'Turnover is killing you',
    description:
      'You spend months training a specialist, they leave, and their client knowledge walks out the door with them. You start from scratch. Again.',
  },
  {
    icon: Clock,
    title: 'You can\'t scale without hiring',
    description:
      'Every new client means another hire, another salary, another desk. Your margins shrink as you grow. The math never works.',
  },
  {
    icon: BarChart3,
    title: 'Work disappears into a black box',
    description:
      'You\'re paying $5K-$15K per month for marketing and you can\'t see what\'s being done. Reports show results but never the work behind them.',
  },
  {
    icon: MessageSquare,
    title: 'Context gets lost between handoffs',
    description:
      'Your SEO specialist doesn\'t talk to your social media manager. Your content writer doesn\'t know what campaigns are running. Silos everywhere.',
  },
];

const agents = [
  { name: 'Ozzi', role: 'Supervisor', description: 'Delegates, prioritizes, orchestrates. Your AI chief of staff.' },
  { name: 'SEO Specialist', role: 'Search', description: 'Technical audits, keyword research, content optimization.' },
  { name: 'Content Writer', role: 'Content', description: 'Blog posts, landing pages, email copy. On-brand, always.' },
  { name: 'Social Media Manager', role: 'Social', description: 'Scheduling, engagement, trend analysis across platforms.' },
  { name: 'Data Analyst', role: 'Analytics', description: 'Campaign performance, ROI tracking, actionable insights.' },
  { name: 'Email Specialist', role: 'Email', description: 'Campaigns, sequences, A/B testing, deliverability.' },
  { name: 'Ad Manager', role: 'Paid Media', description: 'Google Ads, Meta Ads, budget optimization, ROAS.' },
  { name: 'CRM Manager', role: 'CRM', description: 'Lead scoring, pipeline management, contact enrichment.' },
  { name: 'Reputation Manager', role: 'Reviews', description: 'Review monitoring, response drafting, sentiment analysis.' },
  { name: 'Web Developer', role: 'Development', description: 'Landing pages, forms, embeds. Code in a sandbox.' },
  { name: 'Video Producer', role: 'Video', description: 'Scripting, editing, rendering. AI-powered video creation.' },
  { name: 'Voice Agent', role: 'Voice', description: 'Inbound/outbound calls, appointment setting, lead qualification.' },
  { name: 'Research Analyst', role: 'Research', description: 'Market research, competitive analysis, trend reports.' },
  { name: 'Task Manager', role: 'Operations', description: 'Scheduling, follow-ups, deadline tracking, escalation.' },
];

const capabilities = [
  {
    icon: Brain,
    title: '7-layer memory system',
    benefit: 'Never lose client knowledge again',
    description:
      'Every conversation, every preference, every piece of context is stored across 7 memory layers. Your AI team remembers everything, forever.',
  },
  {
    icon: Wrench,
    title: '127+ native tools',
    benefit: 'One team, every channel',
    description:
      'From writing blog posts to managing ad campaigns to answering phone calls. 127 built-in tools plus 35+ integrations. No switching between platforms.',
  },
  {
    icon: GitBranch,
    title: 'Parallel delegation',
    benefit: 'Work that happens simultaneously',
    description:
      'Ozzi breaks complex tasks into sub-tasks and delegates to up to 5 specialists at once. A content audit, keyword analysis, and competitive review all run in parallel.',
  },
  {
    icon: Eye,
    title: 'Full transparency',
    benefit: 'See every action, every decision',
    description:
      'Every tool call is logged. Every decision is traceable. Real-time streaming shows you exactly what your agents are doing as they do it.',
  },
  {
    icon: Shield,
    title: 'Human-in-the-loop controls',
    benefit: 'You stay in control',
    description:
      'Configure approval requirements for sensitive actions. Agents ask before publishing, spending budget, or contacting clients.',
  },
  {
    icon: Sparkles,
    title: 'Multi-model intelligence',
    benefit: 'The right brain for every task',
    description:
      'Claude for reasoning, Gemini for speed, Groq for real-time. Each agent uses the optimal AI model for its specialty.',
  },
];

const differentiators = [
  { label: 'Traditional Agency', items: ['$5K-15K/month', '9-5 availability', '2-4 week onboarding', 'Staff turnover', 'Opaque reporting'] },
  { label: 'OzziOS AI Team', items: ['Fraction of the cost', '24/7/365 availability', 'Instant deployment', '0% turnover', 'Full transparency'], highlight: true },
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
              <Bot className="w-4 h-4 text-signature" />
              <span className="text-[11px] font-semibold text-signature uppercase tracking-wider">
                AI Agent Platform
              </span>
            </div>
            <h1 className="text-display font-display text-foreground mb-6">
              Stop hiring.{' '}
              <span className="text-signature">Start deploying.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              An unlimited AI workforce that works 24/7, remembers everything, and shows you
              every action they take. Your entire marketing department, for a fraction of the cost.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="https://app.ozzios.com/sign-up"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
              >
                Deploy your AI team
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

          {/* Stats row */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { value: '30+', label: 'AI Agents' },
              { value: '127+', label: 'Built-in Tools' },
              { value: '24/7', label: 'Always Working' },
              { value: '0%', label: 'Turnover Rate' },
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
            Marketing teams are broken
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            The agency model hasn't changed in 30 years. It's expensive, opaque, and fragile.
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

function AgentShowcaseSection() {
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
          <span className="tag-neo text-signature mb-6 inline-block">Meet Your Team</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            30+ specialists. Zero drama.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Each agent is purpose-built for a specific marketing function. They collaborate, share
            context, and never compete for credit.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          {agents.map((agent, index) => (
            <motion.div
              key={agent.name}
              variants={itemVariants}
              className="bg-card border-2 border-border rounded-lg p-4 hover:border-signature/30 transition-colors duration-200 group"
            >
              <div className="w-10 h-10 rounded-lg bg-signature/10 flex items-center justify-center mb-3 group-hover:bg-signature/20 transition-colors">
                <Bot className="w-5 h-5 text-signature" />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-0.5">{agent.name}</h3>
              <p className="text-[11px] text-signature font-medium uppercase tracking-wider mb-2">{agent.role}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{agent.description}</p>
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
          <span className="tag-neo text-signature mb-6 inline-block">Capabilities</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Not just chatbots. Real employees.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Built with enterprise-grade infrastructure that makes these agents actually useful, not just impressive demos.
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

function ComparisonSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
          <span className="tag-neo text-signature mb-6 inline-block">Why Switch</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            The old way vs. the OzziOS way
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {differentiators.map((col) => (
            <div
              key={col.label}
              className={`rounded-xl p-8 border-2 ${
                col.highlight
                  ? 'border-signature bg-signature/5'
                  : 'border-border bg-card'
              }`}
            >
              <h3 className={`font-display text-lg mb-6 ${col.highlight ? 'text-signature' : 'text-muted-foreground'}`}>
                {col.label}
              </h3>
              <ul className="space-y-4">
                {col.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <CheckCircle2
                      className={`w-4 h-4 shrink-0 ${col.highlight ? 'text-mint' : 'text-muted-foreground/40'}`}
                    />
                    <span className={col.highlight ? 'text-foreground font-medium' : 'text-muted-foreground'}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
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
            Your AI team is ready.
            <br />
            <span className="text-foreground">Are you?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
            Deploy your AI workforce in minutes. No hiring, no training, no turnover.
            Just results, 24/7.
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

export function AIAgentsView() {
  return (
    <>
      <HeroSection />
      <PainPointsSection />
      <AgentShowcaseSection />
      <CapabilitiesSection />
      <ComparisonSection />
      <CTASection />
    </>
  );
}
