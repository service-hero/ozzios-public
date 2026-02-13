'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight,
  Hash,
  MessageSquare,
  Lock,
  Users,
  Bot,
  Search,
  Bell,
  Pin,
  AtSign,
  Layers,
  Globe,
  CheckCircle2,
  Shield,
  Clock,
  Zap,
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
    icon: Layers,
    title: 'Too many tools, zero context',
    description:
      'Your team juggles Slack, email, and 5 other apps. Client context gets lost between tools, and nobody knows where the latest conversation lives.',
  },
  {
    icon: Users,
    title: 'Clients stuck in email threads',
    description:
      'Client communication buried in endless email chains. No visibility for your team, no real-time updates, and critical approvals take days instead of minutes.',
  },
  {
    icon: Bot,
    title: 'AI agents siloed from your team',
    description:
      'Your AI tools run in separate dashboards. Your team can\'t see what agents are doing, and agents can\'t participate in the conversations that matter.',
  },
  {
    icon: Search,
    title: 'Impossible to find anything',
    description:
      'Search across 6 different platforms to find one client conversation. Onboarding new team members takes weeks because knowledge is scattered everywhere.',
  },
];

const capabilities = [
  {
    icon: Hash,
    title: 'Organized channel hierarchy',
    description:
      'Sections, parent channels, and sub-channels keep every project organized. Public, private, and portal channels for every use case.',
  },
  {
    icon: Bot,
    title: 'AI agents in every channel',
    description:
      'Assign AI agents to channels and they participate in real-time. They read context, respond to questions, and execute tasks -- all visible to your team.',
  },
  {
    icon: Globe,
    title: 'Client portal channels',
    description:
      'Give clients their own channels with controlled access. Real-time messaging replaces email threads. Approvals happen in minutes, not days.',
  },
  {
    icon: MessageSquare,
    title: 'Threaded conversations',
    description:
      'Keep discussions focused with threads. Reply counts, read receipts, and @mentions ensure nothing falls through the cracks.',
  },
  {
    icon: Lock,
    title: 'Role-based access control',
    description:
      'Fine-grained permissions per channel. Control who sees what with workspace-scoped security that prevents cross-tenant data leaks.',
  },
  {
    icon: Search,
    title: 'Unified search across everything',
    description:
      'Full-text search across all messages, channels, files, and contacts. Find any conversation in seconds, not hours.',
  },
];

const features = [
  { icon: Pin, label: 'Pinned messages' },
  { icon: AtSign, label: '@mentions & @channel' },
  { icon: Bell, label: 'Thread subscriptions' },
  { icon: Clock, label: 'Scheduled messages' },
  { icon: Zap, label: 'Real-time streaming' },
  { icon: Lock, label: 'DMs & private channels' },
];

function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative z-10 mx-auto max-w-[900px] px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <motion.div variants={itemVariants} className="text-center mb-8">
            <div className="tag-neo rounded-full bg-signature/10 border-signature mb-6">
              <Hash className="w-4 h-4 text-signature" />
              <span className="text-[11px] font-semibold text-signature uppercase tracking-wider">
                Channels & Messaging
              </span>
            </div>
            <h1 className="text-display font-display text-foreground mb-6">
              One hub for your team,{' '}
              <span className="text-signature">clients, and AI</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Stop juggling Slack, email, and 5 other tools. OzziOS Channels brings your
              team, clients, and AI agents into one real-time workspace -- with full
              context on every conversation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.ozzios.com/sign-up"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
              >
                Start for free
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-12">
            {[
              { value: '5', label: 'Channel types' },
              { value: '<50ms', label: 'Message latency' },
              { value: '100%', label: 'Context preserved' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl md:text-3xl text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
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
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-neo text-signature mb-6 inline-block">The Problem</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Your communication is broken
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Fragmented tools create fragmented teams. Here is what that costs you.
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

function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
          >
            <span className="tag-neo text-signature mb-6 inline-block">The Solution</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-6">
              Everything in one place. Everyone on the same page.
            </h2>
            <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
              <p>
                OzziOS Channels replaces your scattered communication stack with a single,
                organized hub. Your team collaborates in channels. Your clients communicate
                through portals. Your AI agents participate in real-time.
              </p>
              <p>
                Every message, file, and conversation is searchable and contextual.
                No more digging through email threads or switching between apps to find
                what you need.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.label}
                    className="inline-flex items-center gap-2 px-3 py-2 bg-muted rounded-lg text-sm text-foreground/80"
                  >
                    <Icon className="w-4 h-4 text-signature" />
                    {feature.label}
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="card-neo rounded-xl p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-signature/10 flex items-center justify-center flex-shrink-0">
                    <Hash className="w-5 h-5 text-signature" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">#design-reviews</h3>
                    <p className="text-sm text-muted-foreground">
                      Team discusses creative assets. AI agent summarizes feedback, flags action items, and updates the task board automatically.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-electric" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">#client-acme-portal</h3>
                    <p className="text-sm text-muted-foreground">
                      Client approves campaign assets in real-time. No more email chains -- just instant, contextual communication.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-mint/10 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-mint" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">AI Agent Response</h3>
                    <p className="text-sm text-muted-foreground">
                      "I've analyzed the campaign metrics. CTR is up 23% this week. I've updated the report and pinned it to the channel."
                    </p>
                  </div>
                </div>
              </div>
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
    <section className="relative py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-neo text-signature mb-6 inline-block">Capabilities</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Built for how agencies actually work
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Every feature designed to eliminate the friction between your team, your clients, and your AI workforce.
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
                <h3 className="font-display text-lg text-foreground mb-3">
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

function DifferentiatorSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const comparisons = [
    {
      category: 'AI agent participation',
      ozzios: 'Agents live in channels, respond in real-time with tool call visibility',
      others: 'Separate AI dashboard, no team integration',
    },
    {
      category: 'Client communication',
      ozzios: 'Dedicated portal channels with controlled access',
      others: 'Shared Slack channels or email forwarding',
    },
    {
      category: 'Channel hierarchy',
      ozzios: 'Sections, parent channels, sub-channels for organized projects',
      others: 'Flat channel list that grows unwieldy',
    },
    {
      category: 'Search & context',
      ozzios: 'Unified search across messages, files, contacts, and channels',
      others: 'Per-tool search with no cross-platform context',
    },
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
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Not just another chat tool
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            The only workspace where your team, clients, and AI agents communicate in one place.
          </p>
        </motion.div>

        <div className="space-y-4">
          {comparisons.map((item, index) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-card border-2 border-border rounded-lg p-6"
            >
              <h3 className="font-display text-sm text-foreground mb-4 uppercase tracking-wider">
                {item.category}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-mint mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-mint mb-1 uppercase tracking-wider">OzziOS</div>
                    <p className="text-sm text-foreground/80">{item.ozzios}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-border mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider">Others</div>
                    <p className="text-sm text-muted-foreground">{item.others}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
            Unify your team.
            <br />
            <span className="text-foreground">Unify your clients.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
            Replace your scattered communication tools with one intelligent workspace.
            Get started in minutes.
          </p>
          <a
            href="https://app.ozzios.com/sign-up"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
          >
            Start for free
            <ArrowRight className="w-5 h-5" />
          </a>
          <div className="mt-6">
            <a
              href="/contact"
              className="text-sm text-muted-foreground hover:text-foreground/80 transition-colors"
            >
              Or talk to our team
            </a>
          </div>
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

export function ChannelsView() {
  return (
    <>
      <HeroSection />
      <PainPointsSection />
      <SolutionSection />
      <CapabilitiesSection />
      <DifferentiatorSection />
      <CTASection />
    </>
  );
}
