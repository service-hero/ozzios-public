'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight,
  Target,
  UserPlus,
  TrendingUp,
  Clock,
  AlertTriangle,
  Shuffle,
  Brain,
  Mail,
  Search,
  BarChart3,
  Zap,
  CheckCircle2,
  Filter,
  Users,
  MessageSquare,
  Shield,
} from 'lucide-react';

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
    icon: Clock,
    title: 'Leads go cold while you sleep',
    description:
      'A prospect fills out your form at 11pm. By the time you respond the next morning, they have already talked to two competitors. Speed-to-lead is everything, and you are always behind.',
  },
  {
    icon: AlertTriangle,
    title: 'You waste time on unqualified leads',
    description:
      'Your sales team spends hours on calls with people who were never going to buy. Without proper scoring and qualification, every lead gets the same treatment -- and your close rate suffers.',
  },
  {
    icon: Shuffle,
    title: 'Your follow-up is inconsistent',
    description:
      'Some leads get three emails and a call. Others fall through the cracks entirely. Manual follow-up means some prospects get the VIP treatment and others get ghosted.',
  },
  {
    icon: TrendingUp,
    title: 'You can not track what is working',
    description:
      'Which channel drives your best leads? Which campaign converts? You are spending money on ads, content, and outreach with no clear picture of what actually fills your pipeline.',
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
    title: 'Capture',
    description: 'Multi-channel lead capture that works 24/7. Forms, landing pages, chat widgets, and integrations bring leads into one unified pipeline.',
    features: ['Smart forms with conditional logic', 'Website chat widget', 'Landing page builder', 'Third-party integrations'],
    color: 'text-signature',
    bgColor: 'bg-signature/10',
  },
  {
    step: '02',
    title: 'Enrich',
    description: 'AI automatically researches every new lead -- pulling in company data, social profiles, and intent signals to build a complete picture.',
    features: ['Automatic company lookup', 'Social profile matching', 'Intent signal detection', 'Contact data enrichment'],
    color: 'text-electric',
    bgColor: 'bg-electric/10',
  },
  {
    step: '03',
    title: 'Score',
    description: 'Machine learning scores every lead based on fit, engagement, and intent. Your team focuses on the leads most likely to close.',
    features: ['AI-powered lead scoring', 'Behavioral tracking', 'Fit scoring against ICP', 'Dynamic score updates'],
    color: 'text-mint',
    bgColor: 'bg-mint/10',
  },
  {
    step: '04',
    title: 'Nurture',
    description: 'Automated, personalized sequences that move leads through your funnel. Email, SMS, and content -- all triggered by behavior.',
    features: ['Multi-channel sequences', 'Behavior-triggered workflows', 'Personalized content delivery', 'A/B tested messaging'],
    color: 'text-signature',
    bgColor: 'bg-signature/10',
  },
  {
    step: '05',
    title: 'Convert',
    description: 'When a lead is ready, OzziOS alerts your team with full context. Every interaction, every signal, every touchpoint -- right there in the handoff.',
    features: ['Sales-ready notifications', 'Full lead timeline', 'Meeting scheduler', 'Pipeline analytics'],
    color: 'text-electric',
    bgColor: 'bg-electric/10',
  },
];

const featureHighlights = [
  {
    icon: Brain,
    title: 'AI Lead Scoring',
    description: 'Machine learning evaluates every lead against your ideal customer profile. Scores update in real-time as leads interact with your content.',
    link: '/features/ai-agents',
  },
  {
    icon: Mail,
    title: 'Email Campaigns',
    description: 'Automated drip sequences with AI-written copy. Personalized at scale, triggered by lead behavior, and optimized by performance data.',
    link: '/features/campaigns',
  },
  {
    icon: Search,
    title: 'SEO & Content',
    description: 'Attract organic leads with AI-optimized content. Blog posts, landing pages, and keyword strategies that bring the right people to your site.',
    link: '/features/seo',
  },
  {
    icon: Users,
    title: 'CRM & Contacts',
    description: 'Every lead, every interaction, every note -- organized and searchable. Your single source of truth for all prospect relationships.',
    link: '/features/contacts',
  },
  {
    icon: Zap,
    title: 'Workflow Automation',
    description: 'If-this-then-that logic on autopilot. Route leads, trigger sequences, assign tasks, and update records without lifting a finger.',
    link: '/features/workflows',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Attribution',
    description: 'See exactly which channels, campaigns, and content drive your best leads. ROI tracking from first touch to closed deal.',
    link: '/features/analytics',
  },
];

const results = [
  { value: '3x', label: 'Pipeline velocity', description: 'Leads move through your funnel 3x faster with automated nurture sequences' },
  { value: '< 5min', label: 'Response time', description: 'AI responds to every new lead in under 5 minutes, 24/7/365' },
  { value: '40%', label: 'More qualified leads', description: 'AI scoring filters out tire-kickers so your team only talks to real prospects' },
  { value: '60%', label: 'Less manual work', description: 'Automation handles follow-up, enrichment, and routing while you focus on closing' },
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
              <Target className="w-3.5 h-3.5" />
              Lead Generation
            </span>
            <h1 className="text-display font-display text-foreground mb-6">
              Lead generation shouldn't be a{' '}
              <span className="text-signature">full-time job</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Capture, enrich, score, nurture, and convert -- all on autopilot.
              OzziOS turns your entire lead generation process into an AI-powered
              pipeline that works while you sleep.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.ozzios.com/sign-up"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
              >
                Start generating leads
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Hero stat */}
          <motion.div variants={itemVariants} className="mt-16 max-w-2xl mx-auto">
            <div className="card-neo rounded-xl p-6 text-center">
              <div className="font-display text-4xl md:text-5xl text-signature mb-2">78%</div>
              <p className="text-muted-foreground text-sm">
                of leads go to the first company that responds. OzziOS makes sure that's you.
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
            Your pipeline has holes
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Most businesses lose leads before they ever get a chance to sell. Here's where things break down.
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
          <span className="tag-neo rounded-full text-signature mb-6 inline-block">The Pipeline</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            From stranger to customer, automated
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            OzziOS connects every stage of lead generation into one seamless pipeline.
            Each stage is powered by AI and works without manual intervention.
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
            <Zap className="w-4 h-4 text-signature" />
            <span className="text-sm text-muted-foreground">
              Every stage runs automatically. You only step in when a lead is ready to close.
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

      {/* Connector arrow */}
      {!isLast && (
        <div className="flex justify-center py-2">
          <div className="w-px h-6 bg-border" />
        </div>
      )}
    </motion.div>
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
            Everything you need to fill your pipeline
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Six core capabilities that work together to generate, qualify, and convert leads automatically.
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
            More leads, less work
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Agencies using OzziOS for lead generation see measurable improvements across the entire funnel.
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
            Stop chasing leads.
            <br />
            <span className="text-signature">Start closing them.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
            Set up your AI-powered lead pipeline in minutes. No contracts, no credit card required.
          </p>
          <a
            href="https://app.ozzios.com/sign-up"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
          >
            Start generating leads
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
// Main View
// ---------------------------------------------------------------------------

export function LeadGenerationView() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <PipelineSection />
      <FeatureHighlightsSection />
      <ResultsSection />
      <CTASection />
    </div>
  );
}
