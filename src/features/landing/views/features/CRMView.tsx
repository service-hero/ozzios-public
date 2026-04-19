import { motion, useInView } from 'framer-motion';
import {
  Activity,
  ArrowRight,
  Brain,
  FileText,
  Filter,
  Mail,
  MessageSquare,
  Phone,
  Shield,
  Sparkles,
  Tag,
  TrendingUp,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { DeferredSection } from '@/components/ui/lazy-section';
import {
  CapabilitiesBlock,
  ChecklistBlock,
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

const painPoints: PainPoint[] = [
  {
    icon: FileText,
    title: 'Your CRM is a graveyard of stale data',
    description:
      "Contacts are missing phone numbers. Lead scores haven't been updated in months. Half your records are duplicates. Your team stopped trusting the data a long time ago.",
  },
  {
    icon: Users,
    title: 'Nobody knows where a lead stands',
    description:
      'Sales says they called. Marketing says they emailed. Support says they filed a ticket. Nobody has the full picture because the data lives in 5 different tools.',
  },
  {
    icon: TrendingUp,
    title: 'Lead scoring is a guess',
    description:
      'Your team assigns "hot" and "cold" labels based on gut feel. There is no system, no consistency, and no way to know which leads actually deserve attention.',
  },
  {
    icon: Shield,
    title: 'Compliance is an afterthought',
    description:
      "GDPR requires consent tracking. You're storing it in a spreadsheet. Or not at all. One audit could cost you more than your entire annual revenue.",
  },
];

const capabilities: Capability[] = [
  {
    icon: Brain,
    title: 'AI-powered lead scoring',
    benefit: 'Know exactly who to call next',
    description:
      'Three AI-computed scores — lead, engagement, and close probability — updated automatically. Stop guessing and start closing.',
  },
  {
    icon: Activity,
    title: '25+ activity types',
    benefit: 'The complete picture, always',
    description:
      'Every email, call, meeting, form submission, and document signing tracked on a unified timeline. Know exactly what happened, when.',
  },
  {
    icon: Sparkles,
    title: 'Contact enrichment',
    benefit: 'Fill in the blanks automatically',
    description:
      'Apollo.io integration enriches contacts with B2B data — company, title, revenue, tech stack. Single or bulk with one click.',
  },
  {
    icon: Filter,
    title: 'Smart lists & segmentation',
    benefit: 'The right message, right people',
    description:
      'Static and dynamic lists with filters on lifecycle stage, lead source, tags, activity, and custom fields. Segments that update themselves.',
  },
  {
    icon: Tag,
    title: 'Custom fields & tags',
    benefit: 'Your CRM, your way',
    description:
      'Text, number, date, select, checkbox fields organized in folders. Plus workspace-scoped tags for flexible categorization.',
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
  { stage: 'Subscriber', description: 'Opted in but not yet engaged', tone: 'neutral' as const },
  { stage: 'Lead', description: 'Showing interest and activity', tone: 'electric' as const },
  { stage: 'Opportunity', description: 'Qualified and in your pipeline', tone: 'signature' as const },
  { stage: 'Customer', description: 'Closed and generating revenue', tone: 'mint' as const },
  { stage: 'Evangelist', description: 'Referring and advocating', tone: 'signature' as const },
];

const activityTypes: Array<{ icon: LucideIcon; label: string; count: string }> = [
  { icon: Mail, label: 'Email', count: '5 types' },
  { icon: MessageSquare, label: 'SMS', count: '3 types' },
  { icon: Phone, label: 'Calls', count: '4 types' },
  { icon: Users, label: 'Meetings', count: '3 types' },
  { icon: FileText, label: 'Documents', count: '3 types' },
  { icon: Activity, label: 'CRM events', count: '4 types' },
];

// ────────────────────────────────────────────────────────────────────────────
// Lifecycle section — page-specific
// ────────────────────────────────────────────────────────────────────────────

function LifecycleSection() {
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
              eyebrow="Lifecycle tracking"
              headlineLines={['From subscriber', 'to evangelist.']}
              sub="Every contact moves through a clear lifecycle. AI agents track progression automatically, flag stalled leads, and surface your best opportunities."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="overflow-hidden rounded-xl border border-border/60 bg-background">
              <div className="border-b border-border/60 bg-muted/30 px-5 py-3">
                <SectionHeading label="Pipeline stages" />
              </div>
              <div className="divide-y divide-border/60">
                {lifecycleStages.map((stage, i) => (
                  <motion.div
                    key={stage.stage}
                    initial={{ opacity: 0, x: 12 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 12 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                    className="flex items-center gap-4 px-5 py-3.5 transition-colors hover:bg-muted/30"
                  >
                    <span
                      className={cn(
                        'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border font-mono text-[10px] font-semibold tabular-nums',
                        stage.tone === 'signature'
                          ? 'border-signature/30 bg-signature/10 text-signature'
                          : stage.tone === 'mint'
                            ? 'border-mint/30 bg-mint/10 text-mint'
                            : stage.tone === 'electric'
                              ? 'border-foreground/15 bg-foreground/5 text-foreground/80'
                              : 'border-border/60 bg-background text-foreground/55',
                      )}
                    >
                      0{i + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[13.5px] font-semibold text-foreground">{stage.stage}</h3>
                      <p className="text-[12px] leading-[1.5] text-muted-foreground">
                        {stage.description}
                      </p>
                    </div>
                    {i < lifecycleStages.length - 1 ? (
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-foreground/30" />
                    ) : null}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Activity types ledger */}
            <div className="mt-4 overflow-hidden rounded-xl border border-border/60 bg-background/60 backdrop-blur">
              <div className="border-b border-border/60 bg-muted/30 px-5 py-3">
                <SectionHeading label="Tracked activity types" />
              </div>
              <div className="grid grid-cols-3 divide-x divide-y divide-border/60">
                {activityTypes.map((type, i) => {
                  const Icon = type.icon;
                  return (
                    <div
                      key={type.label}
                      className={cn('flex items-center gap-2.5 px-3 py-3', i < 3 && 'border-t-0')}
                    >
                      <Icon className="h-3.5 w-3.5 shrink-0 text-signature" />
                      <div className="min-w-0">
                        <p className="text-[11.5px] font-semibold text-foreground">{type.label}</p>
                        <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                          {type.count}
                        </p>
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
// Main export
// ────────────────────────────────────────────────────────────────────────────

export function CRMView() {
  return (
    <>
      <FeatureHero
        pillIcon={Users}
        pillLabel="CRM & Contacts"
        pillSubtitle="Built around lead scoring + activity"
        headlineLines={['A CRM that actually', 'knows your contacts.']}
        sub="AI-scored leads, unified activity timelines, and automatic enrichment. Every interaction tracked, every contact scored, every opportunity surfaced."
        primaryCta={{ label: 'Try the CRM free', href: 'https://app.ozzios.com/sign-up', shortcut: 'S' }}
        secondaryCta={{ label: 'See pricing', href: '/pricing' }}
        stats={[
          { value: '25+', label: 'Activity types' },
          { value: '3', label: 'AI scores' },
          { value: '10+', label: 'Lead sources' },
          { value: '5', label: 'Lifecycle stages' },
        ]}
      />

      <DeferredSection>
        <PainPointsBlock
          eyebrow="The problem"
          headlineLines={['Your CRM is', 'working against you.']}
          sub="Most CRMs are data entry tools, not growth engines. You spend more time updating them than using them."
          points={painPoints}
        />
      </DeferredSection>

      <DeferredSection>
        <LifecycleSection />
      </DeferredSection>

      <DeferredSection>
        <CapabilitiesBlock
          eyebrow="Capabilities"
          headlineLines={['A CRM that works', 'for you, not the other way.']}
          sub="AI scoring, automatic enrichment, and built-in compliance. This is what a modern CRM should be."
          capabilities={capabilities}
        />
      </DeferredSection>

      <DeferredSection>
        <ChecklistBlock
          eyebrow="Built in"
          headlineLines={["Everything you'd expect.", 'And then some.']}
          features={[
            'Full-text search by name, email, or phone',
            'CSV import with automatic field mapping',
            'Bulk actions: tag, assign, delete, enrich',
            'Soft-delete with archive and restore',
            'Contact notes and unstructured data',
            'Dynamic smart lists with auto-updating filters',
            'Custom field folders for organization',
            'Workspace-scoped data isolation',
          ]}
        />
      </DeferredSection>

      <DeferredSection>
        <FeatureCTABlock
          eyebrow="Get started"
          headlineLines={['Stop guessing.', 'Start knowing.']}
          sub="A CRM that scores leads automatically, enriches contacts instantly, and shows you every interaction in one place."
          primaryCta={{ label: 'Get early access', href: 'https://app.ozzios.com/sign-up', shortcut: 'S' }}
          secondaryCta={{ label: 'See pricing', href: '/pricing' }}
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
