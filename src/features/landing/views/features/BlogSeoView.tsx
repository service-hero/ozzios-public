'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight,
  FileText,
  Search,
  Globe,
  TrendingUp,
  Pen,
  FolderOpen,
  Tag,
  Gauge,
  CheckCircle2,
  BarChart3,
  Keyboard,
  Eye,
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
    icon: Pen,
    title: 'Writing blog posts is a full-time job',
    description:
      'Research, write, edit, optimize for SEO, add images, format, publish. One post can take an entire day -- and you need to ship multiple per week to rank.',
  },
  {
    icon: Search,
    title: 'SEO is a guessing game',
    description:
      'You publish content and hope it ranks. No audit data, no keyword targeting, no technical SEO checks. You\'re flying blind against competitors with dedicated SEO teams.',
  },
  {
    icon: Globe,
    title: 'WordPress publishing is disconnected',
    description:
      'Write in one tool, format in another, publish in WordPress, track in Google Analytics. The workflow is fragmented across 4+ tools with no single source of truth.',
  },
  {
    icon: BarChart3,
    title: 'No visibility into what\'s working',
    description:
      'Core Web Vitals, PageSpeed scores, broken meta tags, missing alt text -- problems accumulate silently until your rankings tank and you don\'t know why.',
  },
];

const capabilities = [
  {
    icon: FileText,
    title: 'Full-page blog editor',
    description:
      'Write in Markdown or HTML with live preview, split-pane editing, featured images, excerpts, and auto-calculated read time. A proper writing environment.',
  },
  {
    icon: Search,
    title: 'Built-in SEO toolkit',
    description:
      'Target keywords, meta descriptions (160-char limit), alt text audits, and slug optimization -- all in the editor sidebar. SEO is part of writing, not an afterthought.',
  },
  {
    icon: Gauge,
    title: 'Full website SEO audit',
    description:
      'Scan your entire site for SEO issues. Get an A-F grade across title tags, descriptions, Open Graph, Twitter Cards, and technical SEO. Fix problems before they cost you rankings.',
  },
  {
    icon: TrendingUp,
    title: 'Core Web Vitals monitoring',
    description:
      'Track LCP, FID, CLS, FCP, and TTFB. See PageSpeed scores for performance, accessibility, best practices, and SEO -- all in one dashboard.',
  },
  {
    icon: Globe,
    title: 'WordPress integration',
    description:
      'Publish directly to WordPress or save as draft. Full CRUD for posts, pages, categories, tags, and media. Sync status tracking keeps everything aligned.',
  },
  {
    icon: FolderOpen,
    title: 'Editorial workflow',
    description:
      'Draft, ready for review, published, archived -- a clear status pipeline with folder organization, tagging, and Cmd+K command palette for power users.',
  },
];

const seoFeatures = [
  { label: 'Title tag analysis', category: 'On-Page' },
  { label: 'Meta description audit', category: 'On-Page' },
  { label: 'Open Graph validation', category: 'Social' },
  { label: 'Twitter Card validation', category: 'Social' },
  { label: 'Core Web Vitals', category: 'Performance' },
  { label: 'PageSpeed scores', category: 'Performance' },
  { label: 'Heading structure', category: 'Content' },
  { label: 'Image alt text audit', category: 'Content' },
  { label: 'Link analysis', category: 'Content' },
  { label: 'Site tree visualization', category: 'Technical' },
  { label: 'A-F grading system', category: 'Technical' },
  { label: 'Word count analysis', category: 'Content' },
];

function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative z-10 mx-auto max-w-[900px] px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <motion.div variants={itemVariants} className="text-center mb-8">
            <div className="tag-neo rounded-full bg-signature/10 border-signature mb-6">
              <FileText className="w-4 h-4 text-signature" />
              <span className="text-[11px] font-semibold text-signature uppercase tracking-wider">
                Blog & SEO
              </span>
            </div>
            <h1 className="text-display font-display text-foreground mb-6">
              Write content that ranks.
              <br />
              <span className="text-signature">Not content that sits.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              A full editorial suite with built-in SEO tools, WordPress publishing, and
              site-wide audits. Every blog post is optimized before it goes live. Every page
              is monitored after.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.ozzios.com/sign-up"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
              >
                Start writing & ranking
                <ArrowRight className="w-5 h-5" />
              </a>
              <span className="text-sm text-muted-foreground">
                SEO audit -- WordPress sync -- editorial workflow
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
            Content without SEO is just noise
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Publishing more doesn't mean ranking higher. Most teams lack the tools to
            know if their content will perform.
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

function SolutionShowcaseSection() {
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
            <span className="tag-neo text-signature mb-6 inline-block">How It Works</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-6">
              Write. Optimize.
              <br />
              Publish. Monitor.
            </h2>
            <div className="space-y-6 text-muted-foreground text-base leading-relaxed">
              <p>
                The blog editor and SEO suite work together. Write your content with
                real-time SEO guidance, publish to WordPress in one click, then monitor
                your entire site's health from a single dashboard.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-mint mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-foreground">Edit, preview, split</strong> -- three
                    editor modes for writing, reviewing, and side-by-side comparison
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-mint mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-foreground">SEO sidebar</strong> -- target keyword,
                    meta description, slug, alt text -- all visible while you write
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-mint mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-foreground">One-click publish</strong> -- push to
                    WordPress as live post or draft, with sync status tracking
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-mint mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-foreground">Cmd+K command palette</strong> -- power
                    user keyboard shortcuts for every action
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="card-neo rounded-xl p-8">
              <h3 className="font-display text-lg text-foreground mb-6">SEO audit grades</h3>
              <div className="space-y-4">
                {[
                  { label: 'Title Tags', grade: 'A', color: 'text-mint' },
                  { label: 'Meta Descriptions', grade: 'B+', color: 'text-mint' },
                  { label: 'Open Graph', grade: 'A', color: 'text-mint' },
                  { label: 'Twitter Cards', grade: 'C', color: 'text-signature' },
                  { label: 'Technical SEO', grade: 'A-', color: 'text-mint' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between py-3 border-b border-border last:border-0"
                  >
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                    <span className={`font-display text-lg ${item.color}`}>{item.grade}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">Overall Score</span>
                <span className="font-display text-2xl text-mint">A-</span>
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
            Write better. Rank higher. Ship faster.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Everything an editorial team needs -- from first draft to first-page ranking.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={capability.title}
                variants={itemVariants}
                className="card-neo rounded-xl p-8 group"
              >
                <div className="w-12 h-12 rounded-xl bg-signature/10 flex items-center justify-center mb-5 group-hover:bg-signature/20 transition-colors">
                  <Icon className="w-6 h-6 text-signature" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-3">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {capability.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function SEOFeaturesSection() {
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
          <span className="tag-neo text-signature mb-6 inline-block">
            <Eye className="w-4 h-4" />
            SEO Audit Coverage
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Comprehensive site health checks
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Every page scanned. Every issue surfaced. No blind spots.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {seoFeatures.map((feature) => (
            <motion.div
              key={feature.label}
              variants={itemVariants}
              className="flex items-center gap-3 p-4 bg-card border-2 border-border rounded-lg"
            >
              <CheckCircle2 className="w-4 h-4 text-mint shrink-0" />
              <div>
                <span className="text-sm font-medium text-foreground">{feature.label}</span>
                <span className="block text-xs text-muted-foreground">{feature.category}</span>
              </div>
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
            Rank on page one.
            <br />
            Not page ten.
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
            Stop guessing what Google wants. Start publishing content with built-in SEO
            intelligence and site-wide health monitoring.
          </p>
          <a
            href="https://app.ozzios.com/sign-up"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
          >
            Start your free trial
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

export function BlogSeoView() {
  return (
    <>
      <HeroSection />
      <PainPointsSection />
      <SolutionShowcaseSection />
      <CapabilitiesSection />
      <SEOFeaturesSection />
      <CTASection />
    </>
  );
}
