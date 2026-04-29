import { motion, useInView } from 'framer-motion';
import {
  AtSign,
  Bell,
  Bot,
  Check,
  Clock,
  Globe,
  Hash,
  Layers,
  Lock,
  MessageSquare,
  Pin,
  Search,
  Users,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { DeferredSection } from '@/components/ui/lazy-section';
import {
  CapabilitiesBlock,
  FeatureCTABlock,
  FeatureHero,
  PainPointsBlock,
  SectionHeader,
  SectionHeading,
  innerContainerVariants,
  innerItemVariants,
  type Capability,
  type PainPoint,
} from '../../components/_landing-primitives';
import { DEMO_CTA_HREF } from '../../components/book-demo';

const painPoints: PainPoint[] = [
  {
    icon: Layers,
    title: 'Too many tools, zero context',
    description:
      'Your team juggles Slack, email, and 5 other apps. Customer context gets lost between tools, and nobody knows where the latest conversation lives.',
  },
  {
    icon: Users,
    title: 'Customers stuck in email threads',
    description:
      'Customer communication buried in endless email chains. No visibility for your team, no real-time updates, and critical approvals take days instead of minutes.',
  },
  {
    icon: Bot,
    title: 'AI agents siloed from your team',
    description:
      "Your AI tools run in separate dashboards. Your team can't see what agents are doing, and agents can't participate in the conversations that matter.",
  },
  {
    icon: Search,
    title: 'Impossible to find anything',
    description:
      'Search across 6 different platforms to find one customer conversation. Onboarding new team members takes weeks because knowledge is scattered everywhere.',
  },
];

const capabilities: Capability[] = [
  {
    icon: Hash,
    title: 'Organized channel hierarchy',
    benefit: 'Clear by default',
    description:
      'Sections, parent channels, and sub-channels keep every project organized. Public and private channels for every use case.',
  },
  {
    icon: Bot,
    title: 'AI agents in every channel',
    benefit: 'Real-time team participation',
    description:
      'Assign AI agents to channels and they participate in real-time. They read context, respond to questions, and execute tasks — all visible to your team.',
  },
  {
    icon: Globe,
    title: 'Customer-facing channels',
    benefit: 'Approvals in minutes, not days',
    description:
      'Give customers their own channels with controlled access. Real-time messaging replaces email threads.',
  },
  {
    icon: MessageSquare,
    title: 'Threaded conversations',
    benefit: 'Nothing falls through the cracks',
    description:
      'Keep discussions focused with threads. Reply counts, read receipts, and @mentions ensure every action is captured.',
  },
  {
    icon: Lock,
    title: 'Role-based access control',
    benefit: 'Workspace-scoped security',
    description:
      'Fine-grained permissions per channel. Control who sees what with workspace isolation that prevents cross-tenant data leaks.',
  },
  {
    icon: Search,
    title: 'Unified search across everything',
    benefit: 'Find any conversation in seconds',
    description:
      'Full-text search across all messages, channels, files, and contacts. No more digging through email threads.',
  },
];

interface FeaturePill {
  icon: LucideIcon;
  label: string;
}

const featurePills: FeaturePill[] = [
  { icon: Pin, label: 'Pinned messages' },
  { icon: AtSign, label: '@mentions & @channel' },
  { icon: Bell, label: 'Thread subscriptions' },
  { icon: Clock, label: 'Scheduled messages' },
  { icon: Zap, label: 'Real-time streaming' },
  { icon: Lock, label: 'DMs & private channels' },
];

interface CompareRow {
  category: string;
  ozzios: string;
  others: string;
}

const compareRows: CompareRow[] = [
  {
    category: 'AI agent participation',
    ozzios: 'Agents live in channels, respond in real-time with tool-call visibility',
    others: 'Separate AI dashboard, no team integration',
  },
  {
    category: 'Customer communication',
    ozzios: 'Dedicated customer channels with controlled access',
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

// ────────────────────────────────────────────────────────────────────────────
// Solution section — page-specific (split with channel mock)
// ────────────────────────────────────────────────────────────────────────────

function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
              eyebrow="The solution"
              headlineLines={['Everything in one place.', 'Everyone on the same page.']}
              sub="OzziOS Channels replaces your scattered communication stack with a single, organized hub. Your team collaborates in channels. Customers communicate through dedicated channels. AI agents participate in real-time."
            />

            <div className="mt-6 flex flex-wrap gap-1.5">
              {featurePills.map((feature) => {
                const Icon = feature.icon;
                return (
                  <span
                    key={feature.label}
                    className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-background px-2.5 py-1.5 text-[11.5px] font-medium text-foreground/75"
                  >
                    <Icon className="h-3 w-3 text-signature" />
                    {feature.label}
                  </span>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="overflow-hidden rounded-xl border border-border/70 bg-background shadow-[0_18px_50px_-26px_rgba(34,27,22,0.30)]">
              <div className="border-b border-border/60 bg-muted/30 px-5 py-3">
                <SectionHeading label="Inside a workspace" />
              </div>
              <div className="divide-y divide-border/60">
                {[
                  { sym: Hash, name: '#design-reviews', body: 'Team discusses creative assets. AI agent summarizes feedback, flags action items, and updates the task board automatically.', tone: 'signature' as const },
                  { sym: Globe, name: '#customer-johnson', body: 'Customer approves job details in real-time. No more email chains — just instant, contextual communication.', tone: 'electric' as const },
                  { sym: Bot, name: 'AI agent response', body: "I've analyzed this week's job completions. Revenue is up 23% this week. Report updated and pinned.", tone: 'mint' as const },
                ].map((row) => {
                  const Sym = row.sym;
                  return (
                    <div key={row.name} className="flex items-start gap-4 px-5 py-4">
                      <span
                        className={cn(
                          'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border',
                          row.tone === 'signature'
                            ? 'border-signature/25 bg-signature/10 text-signature'
                            : row.tone === 'mint'
                              ? 'border-mint/30 bg-mint/10 text-mint'
                              : 'border-border/60 bg-background text-foreground/65',
                        )}
                      >
                        <Sym className="h-3.5 w-3.5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-[13px] font-semibold text-foreground">{row.name}</h3>
                        <p className="mt-1 text-[12px] leading-[1.55] text-muted-foreground">{row.body}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Differentiator — page-specific compare table
// ────────────────────────────────────────────────────────────────────────────

function DifferentiatorSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative isolate overflow-hidden border-t border-border/50 py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-14"
        >
          <SectionHeader
            eyebrow="Why OzziOS"
            headlineLines={['Not just', 'another chat tool.']}
            sub="The only workspace where your team, customers, and AI agents communicate in one place."
            align="center"
          />
        </motion.div>

        <motion.div
          variants={innerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="overflow-hidden rounded-xl border border-border/60 bg-background"
        >
          <div className="divide-y divide-border/60">
            {compareRows.map((row) => (
              <motion.div key={row.category} variants={innerItemVariants} className="px-6 py-6">
                <div className="mb-4">
                  <SectionHeading label={row.category} />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-md border border-signature/25 bg-signature/[0.05] p-4">
                    <div className="mb-1.5 inline-flex items-center gap-1.5 font-mono text-[9.5px] font-semibold uppercase tracking-wider text-signature">
                      <Check className="h-3 w-3" strokeWidth={3} />
                      OzziOS
                    </div>
                    <p className="text-[13px] leading-[1.55] text-foreground/85">{row.ozzios}</p>
                  </div>
                  <div className="rounded-md border border-border/60 bg-muted/30 p-4">
                    <div className="mb-1.5 inline-flex items-center gap-1.5 font-mono text-[9.5px] font-semibold uppercase tracking-wider text-muted-foreground">
                      <span className="h-1 w-1 rounded-full bg-foreground/30" />
                      Others
                    </div>
                    <p className="text-[13px] leading-[1.55] text-muted-foreground">{row.others}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Main export
// ────────────────────────────────────────────────────────────────────────────

export function ChannelsView() {
  return (
    <>
      <FeatureHero
        pillIcon={Hash}
        pillLabel="Channels & Messaging"
        pillSubtitle="Team + customers + AI in one hub"
        headlineLines={['One hub for your team,', 'customers, and AI.']}
        sub="Stop juggling Slack, email, and 5 other tools. OzziOS Channels brings your team, customers, and AI agents into one real-time workspace — with full context on every conversation."
        primaryCta={{ label: 'Setup a demo', href: DEMO_CTA_HREF, shortcut: 'D' }}
        secondaryCta={{ label: 'Talk to sales', href: '/contact' }}
        stats={[
          { value: '5', label: 'Channel types' },
          { value: '<50ms', label: 'Message latency' },
          { value: '100%', label: 'Context preserved' },
        ]}
      />

      <DeferredSection>
        <PainPointsBlock
          eyebrow="The problem"
          headlineLines={['Your communication', 'is broken.']}
          sub="Fragmented tools create fragmented teams. Here is what that costs you."
          points={painPoints}
        />
      </DeferredSection>

      <DeferredSection>
        <SolutionSection />
      </DeferredSection>

      <DeferredSection>
        <CapabilitiesBlock
          eyebrow="Capabilities"
          headlineLines={['Built for how service', 'businesses actually work.']}
          sub="Every feature designed to eliminate friction between your team, your customers, and your AI workforce."
          capabilities={capabilities}
        />
      </DeferredSection>

      <DeferredSection>
        <DifferentiatorSection />
      </DeferredSection>

      <DeferredSection>
        <FeatureCTABlock
          eyebrow="Get started"
          headlineLines={['Unify your team.', 'Unify your customers.']}
          sub="Replace your scattered communication tools with one intelligent workspace. Get started in minutes."
          primaryCta={{ label: 'Setup a demo', href: DEMO_CTA_HREF, shortcut: 'D' }}
          secondaryCta={{ label: 'Talk to our team', href: '/contact' }}
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
