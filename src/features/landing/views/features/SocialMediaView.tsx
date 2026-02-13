'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight,
  CalendarDays,
  Share2,
  Eye,
  BarChart3,
  Clock,
  Image,
  CheckCircle2,
  Megaphone,
  Users,
  TrendingUp,
  Target,
  Layers,
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

const platforms = [
  'Facebook',
  'Instagram',
  'LinkedIn',
  'TikTok',
  'X (Twitter)',
  'Threads',
];

const painPoints = [
  {
    icon: Clock,
    title: 'You\'re managing 6 platforms manually',
    description:
      'Logging into Facebook, Instagram, LinkedIn, TikTok, X, and Threads separately. Copy-pasting content. Adjusting formats. One person can\'t keep up with 6 posting cadences.',
  },
  {
    icon: CalendarDays,
    title: 'Your content calendar is a spreadsheet',
    description:
      'Tracking what\'s posted, what\'s scheduled, and what\'s still a draft across multiple platforms in a Google Sheet. No visual timeline. No status tracking. Just chaos.',
  },
  {
    icon: BarChart3,
    title: 'You can\'t see what\'s working',
    description:
      'Engagement data lives in 6 different dashboards. Comparing performance across platforms means exporting CSVs and building reports manually. Every. Single. Week.',
  },
  {
    icon: Megaphone,
    title: 'Ad campaigns are disconnected',
    description:
      'Organic content in one tool. Meta Ads in Business Suite. TikTok Ads in their dashboard. LinkedIn campaigns somewhere else. No unified view of paid + organic together.',
  },
];

const capabilities = [
  {
    icon: CalendarDays,
    title: 'Visual content calendar',
    description:
      'Week and month views with drag-and-drop scheduling. See every post across every platform in one timeline. Filter by platform, status, or post type.',
  },
  {
    icon: Share2,
    title: '6-platform publishing',
    description:
      'Schedule and publish to Facebook, Instagram, LinkedIn, TikTok, X, and Threads from one place. Auto-format content for each platform\'s requirements.',
  },
  {
    icon: Target,
    title: 'Meta Ads dashboard',
    description:
      'Manage Facebook and Instagram ad campaigns with full drill-down: campaigns, ad sets, and individual ads. Targeting details, spend tracking, CTR, CPC, and CPL.',
  },
  {
    icon: TrendingUp,
    title: 'TikTok & LinkedIn Ads',
    description:
      'Same campaign management for TikTok and LinkedIn. Ad groups with targeting breakdowns, performance metrics, and date range presets from today to lifetime.',
  },
  {
    icon: BarChart3,
    title: 'Engagement analytics',
    description:
      'Likes, comments, shares, and impressions -- all in one view. Track performance by platform, by post, by campaign. No more dashboard hopping.',
  },
  {
    icon: Users,
    title: 'AI-powered ad analysis',
    description:
      'Select any campaign and attach it to AI chat for instant analysis. Get recommendations on budget allocation, targeting refinements, and creative improvements.',
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
              <Share2 className="w-4 h-4 text-signature" />
              <span className="text-[11px] font-semibold text-signature uppercase tracking-wider">
                Social Media
              </span>
            </div>
            <h1 className="text-display font-display text-foreground mb-6">
              6 platforms.
              <br />
              <span className="text-signature">One command center.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Schedule, publish, and analyze content across Facebook, Instagram, LinkedIn,
              TikTok, X, and Threads. Manage organic posts and paid campaigns from a
              single content calendar.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.ozzios.com/sign-up"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
              >
                Unify your social media
                <ArrowRight className="w-5 h-5" />
              </a>
              <span className="text-sm text-muted-foreground">
                Organic + paid -- all platforms -- one calendar
              </span>
            </div>
          </motion.div>

          {/* Platform badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mt-4">
            {platforms.map((platform) => (
              <span
                key={platform}
                className="px-4 py-2 bg-card border-2 border-border rounded-lg text-sm font-medium text-foreground"
              >
                {platform}
              </span>
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
            Social media at scale is unsustainable
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            More platforms, more content, more ads -- but the same team. Something has to break.
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
              Plan. Schedule.
              <br />
              Publish. Measure.
            </h2>
            <div className="space-y-6 text-muted-foreground text-base leading-relaxed">
              <p>
                The content planner gives you a bird's-eye view of your entire social
                presence. Week view for tactical planning, month view for strategic
                overview. Every post, every platform, every status -- visible at a glance.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-mint mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-foreground">Week & month views</strong> -- calendar
                    grid with post cards showing platform, type, and status
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-mint mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-foreground">Multi-page Facebook</strong> -- manage
                    multiple pages, fetch feeds, schedule posts, track engagement
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-mint mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-foreground">Post types</strong> -- image, video,
                    and article support with platform-specific formatting
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-mint mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-foreground">Activity sidebar</strong> -- upcoming
                    posts, drafts, and real-time page activity feed
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
              <h3 className="font-display text-lg text-foreground mb-6">
                Ad campaign metrics
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Impressions', value: '847,293', change: '+12.4%' },
                  { label: 'Clicks', value: '23,847', change: '+8.7%' },
                  { label: 'CTR', value: '2.81%', change: '+0.3%' },
                  { label: 'Cost per Click', value: '$0.42', change: '-$0.08' },
                  { label: 'Cost per Lead', value: '$3.18', change: '-$0.52' },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="flex items-center justify-between py-3 border-b border-border last:border-0"
                  >
                    <span className="text-sm text-muted-foreground">{metric.label}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-display text-foreground">{metric.value}</span>
                      <span className="text-xs text-mint font-medium">{metric.change}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-xs text-muted-foreground text-center">
                Meta + TikTok + LinkedIn combined -- last 30 days
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
            Organic and paid, finally unified
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Content scheduling, ad management, and analytics in one place.
            No more juggling 6 dashboards.
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

function AdPlatformsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const adPlatforms = [
    {
      name: 'Meta Ads',
      description: 'Facebook & Instagram campaigns',
      features: [
        'Campaign, ad set, and ad-level management',
        'Targeting: age, gender, locations, interests, behaviors',
        'Metrics: spend, impressions, clicks, CTR, CPC, CPM, leads, CPL',
        '16 date presets from today to lifetime',
      ],
    },
    {
      name: 'TikTok Ads',
      description: 'TikTok campaign management',
      features: [
        'Campaign and ad group structure',
        'TikTok-specific targeting and creatives',
        'Performance metrics with date range filtering',
        'Budget and spend tracking',
      ],
    },
    {
      name: 'LinkedIn Ads',
      description: 'LinkedIn campaign management',
      features: [
        'Job titles, company names, industries targeting',
        'Company sizes, skills, seniorities, degrees',
        'Schools, member groups targeting',
        'Full campaign performance analytics',
      ],
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
          <span className="tag-neo text-signature mb-6 inline-block">
            <Layers className="w-4 h-4" />
            Paid Advertising
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Three ad platforms. One dashboard.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Manage Meta, TikTok, and LinkedIn ad campaigns without switching tabs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6"
        >
          {adPlatforms.map((platform) => (
            <motion.div
              key={platform.name}
              variants={itemVariants}
              className="card-neo rounded-xl p-8"
            >
              <h3 className="font-display text-xl text-foreground mb-2">
                {platform.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">{platform.description}</p>
              <ul className="space-y-3">
                {platform.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-mint mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
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
            Your social media,
            <br />
            under control.
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
            Stop logging into 6 platforms. Start managing your entire social presence --
            organic and paid -- from one calendar.
          </p>
          <a
            href="https://app.ozzios.com/sign-up"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
          >
            Get started free
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

export function SocialMediaView() {
  return (
    <>
      <HeroSection />
      <PainPointsSection />
      <SolutionShowcaseSection />
      <CapabilitiesSection />
      <AdPlatformsSection />
      <CTASection />
    </>
  );
}
