'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight,
  Users,
  Brain,
  Tag,
  FileText,
  Shield,
  Activity,
  TrendingUp,
  Filter,
  Sparkles,
  CheckCircle2,
  Mail,
  Phone,
  MessageSquare,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const painPoints = [
  {
    icon: FileText,
    title: 'Your CRM is a graveyard of stale data',
    description:
      'Contacts are missing phone numbers. Lead scores haven\'t been updated in months. Half your records are duplicates. Your team stopped trusting the data a long time ago.',
  },
  {
    icon: Users,
    title: 'Nobody knows where a lead stands',
    description:
      'Sales says they called. Marketing says they emailed. Support says they filed a ticket. But nobody has the full picture because the data lives in 5 different tools.',
  },
  {
    icon: TrendingUp,
    title: 'Lead scoring is a guess',
    description:
      'Your team assigns "hot" and "cold" labels based on gut feel. There\'s no system, no consistency, and no way to know which leads actually deserve attention.',
  },
  {
    icon: Shield,
    title: 'Compliance is an afterthought',
    description:
      'GDPR requires consent tracking. You\'re storing it in a spreadsheet. Or not at all. One audit could cost you more than your entire marketing budget.',
  },
];

const activityTypes = [
  { icon: Mail, label: 'Email', count: '5 types' },
  { icon: MessageSquare, label: 'SMS', count: '3 types' },
  { icon: Phone, label: 'Calls', count: '4 types' },
  { icon: Users, label: 'Meetings', count: '3 types' },
  { icon: FileText, label: 'Documents', count: '3 types' },
  { icon: Activity, label: 'CRM Events', count: '4 types' },
];

const capabilities = [
  {
    icon: Brain,
    title: 'AI-powered lead scoring',
    benefit: 'Know exactly who to call next',
    description:
      'Three AI-computed scores -- lead score, engagement score, and close probability -- updated automatically. Stop guessing and start closing.',
  },
  {
    icon: Activity,
    title: '25+ activity types',
    benefit: 'The complete picture, always',
    description:
      'Every email, call, meeting, form submission, and document signing is tracked on a unified timeline. Know exactly what happened and when.',
  },
  {
    icon: Sparkles,
    title: 'Contact enrichment',
    benefit: 'Fill in the blanks automatically',
    description:
      'Apollo.io integration enriches contacts with B2B data -- company, title, revenue, tech stack. Single or bulk enrichment with one click.',
  },
  {
    icon: Filter,
    title: 'Smart lists & segmentation',
    benefit: 'The right message to the right people',
    description:
      'Static and dynamic lists with filters on lifecycle stage, lead source, tags, activity, and custom fields. Segments that update themselves.',
  },
  {
    icon: Tag,
    title: 'Custom fields & tags',
    benefit: 'Your CRM, your way',
    description:
      'Text, number, date, select, checkbox fields organized in folders. Plus workspace-scoped tags for flexible categorization that matches your process.',
  },
  {
    icon: Shield,
    title: 'GDPR consent tracking',
    benefit: 'Compliance built in, not bolted on',
    description:
      'Per-contact consent flags for email, SMS, and phone with grant dates. Do-not-contact overrides. Pass any audit with confidence.',
  },
];

const lifecycleStages = [
  { stage: 'Subscriber', description: 'Opted in but not yet engaged', color: 'bg-muted-foreground' },
  { stage: 'Lead', description: 'Showing interest and activity', color: 'bg-electric' },
  { stage: 'Opportunity', description: 'Qualified and in your pipeline', color: 'bg-signature' },
  { stage: 'Customer', description: 'Closed and generating revenue', color: 'bg-mint' },
  { stage: 'Evangelist', description: 'Referring and advocating', color: 'bg-signature' },
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
              <Users className="w-4 h-4 text-signature" />
              <span className="text-[11px] font-semibold text-signature uppercase tracking-wider">
                CRM & Contacts
              </span>
            </div>
            <h1 className="text-display font-display text-foreground mb-6">
              A CRM that actually{' '}
              <span className="text-signature">knows your contacts.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              AI-scored leads, unified activity timelines, and automatic enrichment. Every interaction
              tracked, every contact scored, every opportunity surfaced.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="https://app.ozzios.com/sign-up"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
              >
                Try the CRM free
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
              { value: '25+', label: 'Activity Types' },
              { value: '3', label: 'AI Scores' },
              { value: '10+', label: 'Lead Sources' },
              { value: '5', label: 'Lifecycle Stages' },
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
            Your CRM is working against you
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Most CRMs are data entry tools, not growth engines. You spend more time updating them than using them.
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

function LifecycleSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
          >
            <span className="tag-neo text-signature mb-6 inline-block">Lifecycle Tracking</span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-tight mb-6">
              From subscriber to evangelist
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              Every contact moves through a clear lifecycle. AI agents track progression
              automatically, flag stalled leads, and surface your best opportunities.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Combined with 25+ tracked activity types, you always know where a contact stands
              and what happened last -- without asking your team.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-4">
              {lifecycleStages.map((stage, i) => (
                <motion.div
                  key={stage.stage}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-4 bg-card border-2 border-border rounded-lg p-4 hover:border-signature/30 transition-colors"
                >
                  <div className={`w-3 h-3 rounded-full ${stage.color} shrink-0`} />
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground text-sm">{stage.stage}</h3>
                    <p className="text-xs text-muted-foreground">{stage.description}</p>
                  </div>
                  {i < lifecycleStages.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-muted-foreground/40 ml-auto shrink-0" />
                  )}
                </motion.div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {activityTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <div
                    key={type.label}
                    className="flex items-center gap-2 bg-muted/50 rounded-lg p-3"
                  >
                    <Icon className="w-4 h-4 text-signature shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-foreground">{type.label}</p>
                      <p className="text-[10px] text-muted-foreground">{type.count}</p>
                    </div>
                  </div>
                );
              })}
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
            A CRM that works for you, not the other way around
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            AI scoring, automatic enrichment, and built-in compliance. This is what a modern CRM should be.
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

function FeaturesListSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    'Full-text search by name, email, or phone',
    'CSV import with automatic field mapping',
    'Bulk actions: tag, assign, delete, enrich',
    'Soft-delete with archive and restore',
    'Contact notes and unstructured data',
    'Dynamic smart lists with auto-updating filters',
    'Custom field folders for organization',
    'Workspace-scoped data isolation',
  ];

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[900px] px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-tight mb-4">
            Everything you'd expect, and more
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 gap-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature}
              variants={itemVariants}
              className="flex items-start gap-3 p-3"
            >
              <CheckCircle2 className="w-5 h-5 text-mint shrink-0 mt-0.5" />
              <span className="text-sm text-foreground">{feature}</span>
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
            Stop guessing.
            <br />
            Start knowing.
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
            A CRM that scores leads automatically, enriches contacts instantly, and shows you
            every interaction in one place.
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

export function CRMView() {
  return (
    <>
      <HeroSection />
      <PainPointsSection />
      <LifecycleSection />
      <CapabilitiesSection />
      <FeaturesListSection />
      <CTASection />
    </>
  );
}
