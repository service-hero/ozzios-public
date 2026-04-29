import { motion, useInView } from 'framer-motion';
import {
  BarChart3,
  CalendarDays,
  Clock,
  Megaphone,
  Share2,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';
import { useRef } from 'react';
import { DeferredSection } from '@/components/ui/lazy-section';
import {
  CapabilitiesBlock,
  FeatureCTABlock,
  FeatureHero,
  Kbd,
  PainPointsBlock,
  SectionHeader,
  SectionHeading,
  innerContainerVariants,
  innerItemVariants,
  type Capability,
  type PainPoint,
} from '../../components/_landing-primitives';
import { DEMO_CTA_HREF } from '../../components/book-demo';

const platforms = ['Facebook', 'Instagram', 'LinkedIn', 'TikTok', 'X (Twitter)', 'Threads'];

const painPoints: PainPoint[] = [
  {
    icon: Clock,
    title: "You're managing 6 platforms manually",
    description:
      "Logging into Facebook, Instagram, LinkedIn, TikTok, X, and Threads separately. Copy-pasting content. One person can't keep up with 6 posting cadences.",
  },
  {
    icon: CalendarDays,
    title: 'Your content calendar is a spreadsheet',
    description:
      "Tracking what's posted, what's scheduled, and what's still a draft across multiple platforms in a Google Sheet. Just chaos.",
  },
  {
    icon: BarChart3,
    title: "You can't see what's working",
    description:
      'Engagement data lives in 6 different dashboards. Comparing performance across platforms means exporting CSVs every single week.',
  },
  {
    icon: Megaphone,
    title: 'Ad campaigns are disconnected',
    description:
      'Organic content in one tool. Meta Ads in Business Suite. TikTok Ads in their dashboard. No unified view of paid + organic together.',
  },
];

const capabilities: Capability[] = [
  {
    icon: CalendarDays,
    title: 'Visual content calendar',
    benefit: 'Week & month views',
    description: 'Drag-and-drop scheduling. See every post across every platform in one timeline.',
  },
  {
    icon: Share2,
    title: '6-platform publishing',
    benefit: 'Auto-format per platform',
    description: 'Schedule and publish to Facebook, Instagram, LinkedIn, TikTok, X, and Threads from one place.',
  },
  {
    icon: Target,
    title: 'Meta Ads dashboard',
    benefit: 'Full drill-down control',
    description: 'Manage Facebook and Instagram ad campaigns. Targeting, spend, CTR, CPC, CPL — all in one view.',
  },
  {
    icon: TrendingUp,
    title: 'TikTok & LinkedIn Ads',
    benefit: '16 date presets',
    description: 'Same campaign management for TikTok and LinkedIn. Ad groups, targeting, and performance metrics.',
  },
  {
    icon: BarChart3,
    title: 'Engagement analytics',
    benefit: 'No more dashboard hopping',
    description: 'Likes, comments, shares, and impressions in one view. Track by platform, post, and campaign.',
  },
  {
    icon: Users,
    title: 'AI-powered ad analysis',
    benefit: 'Instant recommendations',
    description: 'Attach any campaign to AI chat for instant analysis on budget, targeting, and creative.',
  },
];

// ────────────────────────────────────────────────────────────────────────────
// Ad metrics showcase
// ────────────────────────────────────────────────────────────────────────────

function AdMetricsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const metrics = [
    { label: 'Impressions', value: '847,293', change: '+12.4%' },
    { label: 'Clicks', value: '23,847', change: '+8.7%' },
    { label: 'CTR', value: '2.81%', change: '+0.3%' },
    { label: 'Cost / click', value: '$0.42', change: '-$0.08' },
    { label: 'Cost / lead', value: '$3.18', change: '-$0.52' },
  ];

  return (
    <section className="relative isolate overflow-hidden border-t border-border/50 py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeader
              eyebrow="How it works"
              headlineLines={['Plan. Schedule.', 'Publish. Measure.']}
              sub="Week view for tactical planning, month view for strategic overview. Every post, every platform, every status — visible at a glance."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="overflow-hidden rounded-xl border border-border/70 bg-background"
          >
            <div className="border-b border-border/60 bg-muted/30 px-5 py-3">
              <div className="flex items-center justify-between">
                <SectionHeading label="Ad campaign metrics" />
                <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-foreground/45">
                  Last 30 days
                </span>
              </div>
            </div>
            <div className="divide-y divide-border/60">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="flex items-center justify-between px-5 py-3.5 transition-colors hover:bg-muted/30"
                >
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-foreground/55">
                    {m.label}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="font-display text-[15px] font-semibold tabular-nums text-foreground">
                      {m.value}
                    </span>
                    <span className="rounded-[5px] border border-mint/30 bg-mint/10 px-1.5 py-0.5 font-mono text-[9.5px] font-semibold tabular-nums text-mint">
                      {m.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-border/60 bg-muted/20 px-5 py-2.5 text-center">
              <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-foreground/45">
                Meta + TikTok + LinkedIn combined
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Ad platforms section
// ────────────────────────────────────────────────────────────────────────────

function AdPlatformsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const adPlatforms = [
    { name: 'Meta Ads', description: 'Facebook & Instagram', features: ['Campaign, ad set, ad-level management', 'Age, gender, locations, interests, behaviors', 'Spend, impressions, clicks, CTR, CPC, CPL', '16 date presets'] },
    { name: 'TikTok Ads', description: 'TikTok campaign mgmt', features: ['Campaign and ad group structure', 'TikTok-specific targeting', 'Performance with date filtering', 'Budget and spend tracking'] },
    { name: 'LinkedIn Ads', description: 'LinkedIn campaign mgmt', features: ['Job titles, companies, industries', 'Company size, skills, seniority', 'Schools, member groups', 'Full campaign analytics'] },
  ];

  return (
    <section className="relative isolate overflow-hidden border-t border-border/50 py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-14"
        >
          <SectionHeader
            eyebrow="Paid advertising"
            headlineLines={['Three ad platforms.', 'One dashboard.']}
            sub="Manage Meta, TikTok, and LinkedIn ad campaigns without switching tabs."
          />
        </motion.div>

        <motion.div
          variants={innerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-4 md:grid-cols-3 lg:gap-5"
        >
          {adPlatforms.map((platform) => (
            <motion.div
              key={platform.name}
              variants={innerItemVariants}
              className="overflow-hidden rounded-xl border border-border/60 bg-background"
            >
              <div className="border-b border-border/60 bg-muted/30 px-5 py-3">
                <h3 className="text-[15px] font-semibold text-foreground">{platform.name}</h3>
                <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-foreground/45">
                  {platform.description}
                </p>
              </div>
              <ul className="divide-y divide-border/60">
                {platform.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 px-5 py-3 text-[12.5px] text-foreground/80">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-signature" />
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

// ────────────────────────────────────────────────────────────────────────────
// Hero right slot — platform pills
// ────────────────────────────────────────────────────────────────────────────

function PlatformGrid() {
  return (
    <div className="overflow-hidden rounded-xl border border-border/70 bg-background shadow-[0_18px_50px_-26px_rgba(34,27,22,0.30)]">
      <div className="border-b border-border/60 bg-muted/30 px-4 py-2.5">
        <SectionHeading label="Connected platforms" />
      </div>
      <div className="divide-y divide-border/60">
        {platforms.map((p) => (
          <div key={p} className="flex items-center justify-between px-4 py-3 transition-colors hover:bg-muted/30">
            <span className="text-[13px] font-medium text-foreground">{p}</span>
            <span className="inline-flex items-center gap-1 rounded-[5px] border border-mint/30 bg-mint/10 px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-mint">
              <span className="h-1 w-1 rounded-full bg-mint" />
              Connected
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-border/60 bg-muted/20 px-4 py-2.5">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/45">
          All platforms in one calendar
        </span>
        <Kbd className="h-[16px] min-w-[16px] text-[9px]">⌘</Kbd>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Main export
// ────────────────────────────────────────────────────────────────────────────

export function SocialMediaView() {
  return (
    <>
      <FeatureHero
        pillIcon={Share2}
        pillLabel="Social Media"
        pillSubtitle="Organic + paid in one calendar"
        headlineLines={['6 platforms.', 'One command center.']}
        sub="Schedule, publish, and analyze content across Facebook, Instagram, LinkedIn, TikTok, X, and Threads. Manage organic posts and paid campaigns from a single content calendar."
        primaryCta={{ label: 'Setup a demo', href: DEMO_CTA_HREF, shortcut: 'D' }}
        secondaryCta={{ label: 'Talk to sales', href: '/contact' }}
        rightSlot={<PlatformGrid />}
      />

      <DeferredSection>
        <PainPointsBlock
          eyebrow="The problem"
          headlineLines={['Social media at scale', 'is unsustainable.']}
          sub="More platforms, more content, more ads — but the same team. Something has to break."
          points={painPoints}
        />
      </DeferredSection>

      <DeferredSection>
        <AdMetricsSection />
      </DeferredSection>

      <DeferredSection>
        <CapabilitiesBlock
          eyebrow="Capabilities"
          headlineLines={['Organic and paid,', 'finally unified.']}
          sub="Content scheduling, ad management, and analytics in one place. No more juggling 6 dashboards."
          capabilities={capabilities}
        />
      </DeferredSection>

      <DeferredSection>
        <AdPlatformsSection />
      </DeferredSection>

      <DeferredSection>
        <FeatureCTABlock
          eyebrow="Get started"
          headlineLines={['Your social media,', 'under control.']}
          sub="Stop logging into 6 platforms. Manage your entire social presence — organic and paid — from one calendar."
          primaryCta={{ label: 'Setup a demo', href: DEMO_CTA_HREF, shortcut: 'D' }}
          secondaryCta={{ label: 'Talk to sales', href: '/contact' }}
          trust={[
            { value: '256-bit', label: 'Encryption' },
            { value: 'GDPR ready', label: 'Compliance' },
            { value: '99.9%', label: 'Uptime SLA' },
          ]}
        />
      </DeferredSection>
    </>
  );
}
