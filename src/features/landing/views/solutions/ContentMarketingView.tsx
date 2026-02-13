'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight,
  PenTool,
  Clock,
  Users,
  TrendingDown,
  Layers,
  Brain,
  Search,
  Share2,
  BarChart3,
  Mail,
  FileText,
  CheckCircle2,
  Zap,
  Shield,
  Palette,
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
    title: 'Content takes forever to produce',
    description:
      'A single blog post takes 4-6 hours. A full content calendar takes weeks of planning. By the time you publish, the topic is old news and your competitors already own the SERP.',
  },
  {
    icon: Users,
    title: 'Writers are expensive and inconsistent',
    description:
      'Freelancers miss deadlines. In-house writers cost $60K+/year. And neither can cover every topic your clients need. Quality swings wildly from piece to piece.',
  },
  {
    icon: TrendingDown,
    title: 'Content gets published and forgotten',
    description:
      'You spend hours creating a piece, hit publish, share it once on social, and move on. No optimization, no repurposing, no distribution strategy. Most content dies the day it goes live.',
  },
  {
    icon: Layers,
    title: 'No system connects creation to results',
    description:
      'Your content calendar lives in one tool, SEO data in another, social scheduling in a third. Nobody knows which content drives leads, and proving ROI to clients is a guessing game.',
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
    title: 'Research',
    description: 'AI analyzes competitor content, keyword gaps, trending topics, and audience intent to build a data-driven content strategy. No more guessing what to write about.',
    features: ['Keyword gap analysis', 'Competitor content audit', 'Topic clustering', 'Audience intent mapping'],
    color: 'text-signature',
    bgColor: 'bg-signature/10',
  },
  {
    step: '02',
    title: 'Create',
    description: 'AI drafts blog posts, social content, email copy, and landing pages in your brand voice. Human-quality writing produced in minutes, not days.',
    features: ['Blog post generation', 'Social media copy', 'Email campaign content', 'Landing page copy'],
    color: 'text-electric',
    bgColor: 'bg-electric/10',
  },
  {
    step: '03',
    title: 'Optimize',
    description: 'Every piece is automatically optimized for search engines, readability, and conversion. Meta tags, internal links, and structured data -- all handled.',
    features: ['On-page SEO optimization', 'Readability scoring', 'Internal link suggestions', 'Schema markup generation'],
    color: 'text-mint',
    bgColor: 'bg-mint/10',
  },
  {
    step: '04',
    title: 'Distribute',
    description: 'Content is automatically repurposed and distributed across channels. One blog post becomes social posts, email snippets, and community content.',
    features: ['Multi-channel distribution', 'Content repurposing', 'Social media scheduling', 'Email newsletter inclusion'],
    color: 'text-signature',
    bgColor: 'bg-signature/10',
  },
  {
    step: '05',
    title: 'Measure',
    description: 'Track every piece from publish to conversion. See which content drives traffic, generates leads, and contributes to revenue -- then feed those insights back into research.',
    features: ['Content performance tracking', 'Lead attribution', 'SEO rank monitoring', 'ROI reporting'],
    color: 'text-electric',
    bgColor: 'bg-electric/10',
  },
];

const featureHighlights = [
  {
    icon: Brain,
    title: 'AI Content Writer',
    description: 'Generates blog posts, social content, and marketing copy in your brand voice. Trained on your style, audience, and industry.',
    link: '/features/ai-agents',
  },
  {
    icon: Search,
    title: 'SEO Engine',
    description: 'Keyword research, on-page optimization, rank tracking, and technical audits. Every piece of content is built to rank.',
    link: '/features/seo',
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Schedule, publish, and analyze social content across every platform. AI writes the posts, you approve and publish.',
    link: '/features/social-media',
  },
  {
    icon: Mail,
    title: 'Email Campaigns',
    description: 'Turn content into email sequences. AI writes subject lines, personalizes copy, and optimizes send times for maximum engagement.',
    link: '/features/campaigns',
  },
  {
    icon: FileText,
    title: 'Blog & Content Hub',
    description: 'Built-in publishing platform with templates, scheduling, and version control. Your entire content operation in one place.',
    link: '/features/blog',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'See exactly which content drives traffic, leads, and revenue. Attribution modeling shows the full journey from first read to closed deal.',
    link: '/features/analytics',
  },
];

const results = [
  { value: '10x', label: 'Content output', description: 'Produce 10x more content with the same team size using AI-assisted creation' },
  { value: '60%', label: 'Faster production', description: 'Cut content creation time from hours to minutes with AI drafting and optimization' },
  { value: '3x', label: 'Organic traffic', description: 'SEO-optimized content that ranks higher and drives more qualified organic traffic' },
  { value: '45%', label: 'Better engagement', description: 'Data-driven content strategy means every piece resonates with your audience' },
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
              <PenTool className="w-3.5 h-3.5" />
              Content Marketing
            </span>
            <h1 className="text-display font-display text-foreground mb-6">
              Content at scale without{' '}
              <span className="text-signature">the headcount</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Research, create, optimize, distribute, and measure -- all powered by AI.
              OzziOS turns your content operation into a production engine that never
              misses a deadline.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.ozzios.com/sign-up"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
              >
                Scale your content
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Hero stat */}
          <motion.div variants={itemVariants} className="mt-16 max-w-2xl mx-auto">
            <div className="card-neo rounded-xl p-6 text-center">
              <div className="font-display text-4xl md:text-5xl text-signature mb-2">4.2hrs</div>
              <p className="text-muted-foreground text-sm">
                Average time to produce a single blog post manually. OzziOS does it in under 15 minutes.
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
            Content is a treadmill
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Every agency knows content is king. But producing enough quality content consistently is a battle most lose.
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
            From idea to impact, end-to-end
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            OzziOS manages the entire content lifecycle. Each stage feeds into the next,
            creating a flywheel that gets smarter with every piece you publish.
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
              Measurement feeds back into research. Your content strategy improves with every cycle.
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
            Your content team, automated
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Six capabilities that replace a full content team -- from research to reporting.
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
            More content, better results
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Agencies using OzziOS for content marketing produce more, rank higher, and prove ROI to clients.
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
            Stop hiring writers.
            <br />
            <span className="text-signature">Start scaling content.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
            Launch your AI content engine in minutes. Research, create, optimize, and distribute -- all on autopilot.
          </p>
          <a
            href="https://app.ozzios.com/sign-up"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
          >
            Scale your content
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

export function ContentMarketingView() {
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
