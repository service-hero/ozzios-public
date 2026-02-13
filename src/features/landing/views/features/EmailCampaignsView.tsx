'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight,
  Mail,
  BarChart3,
  Users,
  Clock,
  Zap,
  Target,
  MousePointerClick,
  Eye,
  Send,
  Pause,
  CheckCircle2,
  Shield,
  SlidersHorizontal,
  TrendingUp,
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
    icon: SlidersHorizontal,
    title: 'Campaigns take hours to build',
    description:
      'Between designing, writing copy, segmenting lists, and scheduling sends -- a single campaign eats half your day. And you need to send dozens a month.',
  },
  {
    icon: BarChart3,
    title: 'Analytics scattered across tools',
    description:
      'Open rates in one dashboard, click data in another, revenue attribution somewhere else. You never get the full picture of what is actually working.',
  },
  {
    icon: Users,
    title: 'Segmentation is a nightmare',
    description:
      'Export from CRM, import to email tool, manually filter lists, pray you do not send to the wrong segment. One mistake and you lose client trust.',
  },
  {
    icon: Clock,
    title: 'No way to pause or recover',
    description:
      'Spot a typo after hitting send? Too late. Most email tools blast your entire list with no pause button, no mid-flight corrections, and no safety net.',
  },
];

const capabilities = [
  {
    icon: Target,
    title: 'Smart segmentation',
    description:
      'Build segments directly from your CRM data. No exports, no imports -- just real-time audience targeting based on contact properties, engagement history, and lead scores.',
  },
  {
    icon: Send,
    title: 'Batch sending with control',
    description:
      'Campaigns send in batches of 500 recipients. Pause, resume, or cancel mid-flight. Spot an issue? Stop the campaign before it reaches your entire list.',
  },
  {
    icon: Eye,
    title: 'Real-time event tracking',
    description:
      'Opens, clicks, bounces, replies, and unsubscribes tracked via webhooks in real-time. Know exactly how every recipient engages with your campaign.',
  },
  {
    icon: Zap,
    title: 'Template-powered or custom',
    description:
      'Use the visual email builder for pixel-perfect templates or paste custom HTML. Every email is responsive and tested across 90+ email clients.',
  },
  {
    icon: Pause,
    title: 'Draft, schedule, or send now',
    description:
      'Full campaign lifecycle management. Draft campaigns, schedule for optimal send times, or fire immediately -- with status tracking at every stage.',
  },
  {
    icon: BarChart3,
    title: 'Campaign analytics dashboard',
    description:
      'Delivery rate, open rate, click-through rate, bounce rate, and reply tracking in one unified view. Compare campaigns side by side to find what works.',
  },
];

const campaignFlow = [
  { step: '01', label: 'Draft', description: 'Build your campaign with templates or custom HTML' },
  { step: '02', label: 'Segment', description: 'Target the right audience from your CRM' },
  { step: '03', label: 'Schedule', description: 'Set the perfect send time or send now' },
  { step: '04', label: 'Send', description: 'Batched delivery with pause/resume control' },
  { step: '05', label: 'Track', description: 'Real-time opens, clicks, bounces, and replies' },
];

function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative z-10 mx-auto max-w-[900px] px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <motion.div variants={itemVariants} className="text-center mb-8">
            <div className="tag-neo rounded-full bg-signature/10 border-signature mb-6">
              <Mail className="w-4 h-4 text-signature" />
              <span className="text-[11px] font-semibold text-signature uppercase tracking-wider">
                Email Campaigns
              </span>
            </div>
            <h1 className="text-display font-display text-foreground mb-6">
              Email campaigns that{' '}
              <span className="text-signature">actually convert</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Build, segment, send, and track email campaigns from the same platform where
              your CRM, AI agents, and team live. No more juggling Mailchimp on the side.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.ozzios.com/sign-up"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
              >
                Start sending campaigns
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-12">
            {[
              { value: '500', label: 'Per batch send' },
              { value: '5', label: 'Event types tracked' },
              { value: '90+', label: 'Email clients tested' },
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
            Email marketing is painful
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            You are spending too much time on campaigns and not enough time on strategy.
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
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-neo text-signature mb-6 inline-block">How It Works</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            From draft to delivery in 5 steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            A campaign workflow built for speed and safety. Every step gives you control.
          </p>
        </motion.div>

        <div className="max-w-[700px] mx-auto">
          {campaignFlow.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-6 mb-8 last:mb-0"
            >
              <div className="w-12 h-12 rounded-lg bg-signature/10 flex items-center justify-center flex-shrink-0">
                <span className="font-display text-signature text-sm">{item.step}</span>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="font-display text-lg text-foreground mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
              {index < campaignFlow.length - 1 && (
                <div className="absolute left-[29px] top-12 w-px h-8 bg-border" />
              )}
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
            Everything you need to send with confidence
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Professional email campaigns without the professional email tool price tag.
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

  const advantages = [
    {
      icon: TrendingUp,
      title: 'CRM-native segmentation',
      description: 'Segments built from live CRM data. No CSV exports, no list imports, no stale data. Your audience is always up to date.',
    },
    {
      icon: Pause,
      title: 'Mid-flight campaign control',
      description: 'Pause a campaign mid-send. Fix the issue. Resume. Most email tools give you a send button and a prayer.',
    },
    {
      icon: MousePointerClick,
      title: 'Webhook-powered analytics',
      description: 'Every open, click, bounce, and reply tracked in real-time via Resend webhooks. No delayed reporting or sampling.',
    },
    {
      icon: Zap,
      title: 'One platform, zero context switching',
      description: 'Your campaigns, CRM, AI agents, and team chat live in OzziOS. Campaign performance feeds directly into lead scores and workflows.',
    },
  ];

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-neo text-signature mb-6 inline-block">Why OzziOS</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Not just another email tool
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Email campaigns connected to your entire marketing operation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {advantages.map((adv) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={adv.title}
                variants={itemVariants}
                className="bg-card border-2 border-border rounded-lg p-8 hover:border-signature/30 transition-colors duration-200"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-lg bg-signature/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-signature" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-2">{adv.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{adv.description}</p>
                  </div>
                </div>
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
            Send smarter campaigns.
            <br />
            <span className="text-foreground">Close more deals.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
            Email campaigns that integrate with your CRM, your AI agents, and your entire
            marketing workflow. Start in minutes.
          </p>
          <a
            href="https://app.ozzios.com/sign-up"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
          >
            Start sending campaigns
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

export function EmailCampaignsView() {
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
