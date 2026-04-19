import { motion } from 'framer-motion';
import {
  BarChart3,
  Bot,
  Brain,
  Clock,
  Eye,
  GitBranch,
  MessageSquare,
  Shield,
  Sparkles,
  Users,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { DeferredSection } from '@/components/ui/lazy-section';
import {
  CapabilitiesBlock,
  ComparisonBlock,
  FeatureCTABlock,
  FeatureHero,
  Kbd,
  PainPointsBlock,
  type Capability,
  type PainPoint,
} from '../../components/_landing-primitives';

// ────────────────────────────────────────────────────────────────────────────
// Data
// ────────────────────────────────────────────────────────────────────────────

const painPoints: PainPoint[] = [
  {
    icon: Users,
    title: 'Turnover is killing you',
    description:
      'You spend months training a technician, they leave, and their job knowledge walks out the door with them. You start from scratch. Again.',
  },
  {
    icon: Clock,
    title: "You can't scale without hiring",
    description:
      'Every new job means another hire, another salary, another truck. Your margins shrink as you grow. The math never works.',
  },
  {
    icon: BarChart3,
    title: 'Work disappears into a black box',
    description:
      "You're paying for office staff, dispatchers, and managers but can't see what's being done. Reports show numbers but never the work behind them.",
  },
  {
    icon: MessageSquare,
    title: 'Context gets lost between handoffs',
    description:
      "Your dispatcher doesn't talk to your bookkeeper. Your field techs don't know what's been promised. Silos everywhere.",
  },
];

interface AgentEntry {
  name: string;
  role: string;
  description: string;
  mp4: string;
  icon: LucideIcon;
}

const agents: AgentEntry[] = [
  { name: 'Ozzi', role: 'Supervisor', description: 'Delegates, prioritizes, orchestrates. Your AI chief of staff.', mp4: '/images/avatars/ozzi-avatar.mp4', icon: Sparkles },
  { name: 'SEO Specialist', role: 'Search', description: 'Local SEO, keyword research, Google Business Profile.', mp4: '/images/avatars/google-ozzi.mp4', icon: Bot },
  { name: 'Content Writer', role: 'Content', description: 'Blog posts, service pages, email copy. On-brand, always.', mp4: '/images/avatars/wordpress-ozzi.mp4', icon: Bot },
  { name: 'Social Manager', role: 'Social', description: 'Scheduling, engagement, trend analysis across platforms.', mp4: '/images/avatars/facebook-ozzi.mp4', icon: Bot },
  { name: 'Data Analyst', role: 'Analytics', description: 'Business performance, ROI tracking, actionable insights.', mp4: '/images/avatars/firecrawl-ozzi.mp4', icon: Bot },
  { name: 'Email Specialist', role: 'Email', description: 'Campaigns, sequences, A/B testing, deliverability.', mp4: '/images/avatars/gmail-ozzi.mp4', icon: Bot },
  { name: 'Ad Manager', role: 'Paid media', description: 'Google Ads, Meta Ads, budget optimization, ROAS.', mp4: '/images/avatars/generic-ozzi-1.mp4', icon: Bot },
  { name: 'CRM Manager', role: 'CRM', description: 'Lead scoring, pipeline management, contact enrichment.', mp4: '/images/avatars/generic-ozzi-2.mp4', icon: Bot },
  { name: 'Reputation', role: 'Reviews', description: 'Review monitoring, response drafting, sentiment analysis.', mp4: '/images/avatars/housecall-pro-ozzi.mp4', icon: Bot },
  { name: 'Web Developer', role: 'Development', description: 'Landing pages, forms, embeds. Code in a secure sandbox.', mp4: '/images/avatars/generic-ozzi-3.mp4', icon: Bot },
  { name: 'Video Producer', role: 'Video', description: 'Scripting, editing, rendering. AI-powered video creation.', mp4: '/images/avatars/youtube-ozzi.mp4', icon: Bot },
  { name: 'Voice Agent', role: 'Voice', description: 'Inbound/outbound calls, appointment setting, qualification.', mp4: '/images/avatars/generic-ozzi-1.mp4', icon: Bot },
  { name: 'Research Analyst', role: 'Research', description: 'Market research, competitive analysis, trend reports.', mp4: '/images/avatars/generic-ozzi-2.mp4', icon: Bot },
  { name: 'Task Manager', role: 'Operations', description: 'Scheduling, follow-ups, deadline tracking, escalation.', mp4: '/images/avatars/nano-banana-ozzi.mp4', icon: Bot },
];

const capabilities: Capability[] = [
  {
    icon: Brain,
    title: 'Complete business memory',
    benefit: 'Never lose customer knowledge again',
    description:
      'Every conversation, every preference, every piece of context is remembered. Your AI team knows your customers, services, and history — forever.',
  },
  {
    icon: Wrench,
    title: 'Built-in tools for everything',
    benefit: 'One team, every channel',
    description:
      'Answering calls, managing reviews, scheduling jobs, sending follow-ups, running ads — all built in. Plus 35+ integrations with the tools you already use.',
  },
  {
    icon: GitBranch,
    title: 'Parallel delegation',
    benefit: 'Work that happens simultaneously',
    description:
      'Ozzi breaks complex tasks into sub-tasks and delegates to up to 5 specialists at once. Review responses, follow-up emails, and estimates run in parallel.',
  },
  {
    icon: Eye,
    title: 'Full transparency',
    benefit: 'See every action, every decision',
    description:
      'Every tool call is logged. Every decision is traceable. Real-time streaming shows you exactly what your agents are doing as they do it.',
  },
  {
    icon: Shield,
    title: 'Human-in-the-loop controls',
    benefit: 'You stay in control',
    description:
      'Configure approval requirements for sensitive actions. Agents ask before publishing, spending budget, or contacting customers.',
  },
  {
    icon: Sparkles,
    title: 'Multi-model intelligence',
    benefit: 'The right brain for every task',
    description:
      'Claude for reasoning, Gemini for speed, Groq for real-time. Each agent uses the optimal AI model for its specialty.',
  },
];

// ────────────────────────────────────────────────────────────────────────────
// Right-side hero slot — agent stack
// ────────────────────────────────────────────────────────────────────────────

function AgentStack() {
  const stackAgents = [
    { name: 'Ozzi', role: 'Supervisor', mp4: '/images/avatars/ozzi-avatar.mp4', state: 'orchestrating' as const },
    { name: 'SEO Specialist', role: 'Search · Local rank', mp4: '/images/avatars/google-ozzi.mp4', state: 'active' as const },
    { name: 'Content Writer', role: 'Drafting blog post', mp4: '/images/avatars/wordpress-ozzi.mp4', state: 'active' as const },
    { name: 'Data Analyst', role: 'Building report', mp4: '/images/avatars/firecrawl-ozzi.mp4', state: 'active' as const },
    { name: 'Social Manager', role: 'Idle · ready', mp4: '/images/avatars/facebook-ozzi.mp4', state: 'idle' as const },
  ];

  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-4 -bottom-10 top-10 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_50%_100%,rgba(196,88,63,0.18),transparent_70%)] blur-3xl"
      />
      <div className="overflow-hidden rounded-xl border border-border/70 bg-background shadow-[0_30px_80px_-30px_rgba(34,27,22,0.35)]">
        <div className="flex items-center justify-between border-b border-border/60 bg-muted/30 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint/60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/55">
              Active workforce
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/45">
            <span className="tabular-nums text-foreground/85">5</span> agents
          </span>
        </div>

        <div className="divide-y divide-border/60">
          {stackAgents.map((agent, i) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.08 }}
              className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-muted/30"
            >
              <div className="h-9 w-9 shrink-0 overflow-hidden rounded-md ring-1 ring-signature/15">
                <video
                  src={agent.mp4}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controlsList="nodownload"
                  disablePictureInPicture
                  onContextMenu={(e) => e.preventDefault()}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-[12.5px] font-semibold text-foreground">{agent.name}</span>
                  {i === 0 ? (
                    <span className="rounded-[5px] border border-signature/25 bg-signature/10 px-1 font-mono text-[8.5px] font-semibold uppercase tracking-wider text-signature">
                      Lead
                    </span>
                  ) : null}
                </div>
                <div className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-foreground/45">
                  {agent.role}
                </div>
              </div>
              <span
                className={cn(
                  'inline-flex items-center gap-1 rounded-[5px] border px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider',
                  agent.state === 'orchestrating'
                    ? 'border-signature/25 bg-signature/10 text-signature'
                    : agent.state === 'active'
                      ? 'border-mint/30 bg-mint/10 text-mint'
                      : 'border-border/60 bg-muted text-muted-foreground',
                )}
              >
                <span
                  className={cn(
                    'h-1 w-1 rounded-full',
                    agent.state === 'orchestrating'
                      ? 'bg-signature'
                      : agent.state === 'active'
                        ? 'bg-mint'
                        : 'bg-muted-foreground/40',
                  )}
                />
                {agent.state}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-border/60 bg-muted/20 px-4 py-2.5">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/45">
            +25 more available
          </span>
          <div className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/45">
            <Kbd className="h-[16px] min-w-[16px] text-[9px]">⌘</Kbd>
            <Kbd className="h-[16px] min-w-[16px] text-[9px]">K</Kbd>
            invoke any
          </div>
        </div>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Page-specific sections
// ────────────────────────────────────────────────────────────────────────────

function AgentShowcaseSection() {
  return (
    <section className="relative isolate overflow-hidden border-t border-border/50 py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10">
        <div className="mb-12 lg:mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-signature">
              Meet the team
            </span>
            <span className="h-px flex-1 bg-border/50" />
          </div>
          <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-foreground [text-wrap:balance]">
            30+ specialists. Zero drama.
          </h2>
          <p className="mt-4 max-w-[560px] text-[15.5px] leading-[1.6] text-muted-foreground sm:text-[16.5px]">
            Each agent is purpose-built for a specific business function. They collaborate, share
            context, and never compete for credit.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {agents.map((agent) => (
            <div
              key={agent.name}
              className="group/agent relative cursor-pointer rounded-xl border border-border/60 bg-background p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:shadow-[0_14px_30px_-18px_rgba(34,27,22,0.25)]"
            >
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 shrink-0 overflow-hidden rounded-md ring-1 ring-signature/15">
                  <video
                    src={agent.mp4}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controlsList="nodownload"
                    disablePictureInPicture
                    onContextMenu={(e) => e.preventDefault()}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-[12.5px] font-semibold text-foreground">
                    {agent.name}
                  </h3>
                  <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-foreground/45">
                    {agent.role}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-[11.5px] leading-[1.5] text-muted-foreground">
                {agent.description}
              </p>
            </div>
          ))}

          <div className="group/m relative flex flex-col items-center justify-center rounded-xl border border-dashed border-border/70 bg-background/60 p-4 text-center transition-all duration-300 hover:border-signature/35 hover:bg-signature/[0.04]">
            <div className="mb-3 flex -space-x-2">
              {['/images/avatars/youtube-ozzi.mp4', '/images/avatars/google-ozzi.mp4', '/images/avatars/wordpress-ozzi.mp4'].map(
                (src) => (
                  <div
                    key={src}
                    className="h-7 w-7 shrink-0 overflow-hidden rounded-full border-2 border-background"
                  >
                    <video
                      src={src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controlsList="nodownload"
                      disablePictureInPicture
                      onContextMenu={(e) => e.preventDefault()}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ),
              )}
            </div>
            <span className="text-[12.5px] font-semibold text-foreground">+16 more agents</span>
            <span className="mt-1 text-[11px] leading-[1.4] text-muted-foreground">
              Trade-specific specialists rolling out monthly
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Main export
// ────────────────────────────────────────────────────────────────────────────

export function AIAgentsView() {
  return (
    <>
      <FeatureHero
        pillIcon={Bot}
        pillLabel="AI Agent Platform"
        pillSubtitle="Inside the OzziOS workforce"
        headlineLines={['Stop hiring.', 'Start deploying.']}
        sub="An unlimited AI workforce that works 24/7, remembers everything, and shows you every action they take. Your entire back office, for a fraction of the cost."
        primaryCta={{ label: 'Deploy your AI team', href: 'https://app.ozzios.com/sign-up', shortcut: 'S' }}
        secondaryCta={{ label: 'See pricing', href: '/pricing' }}
        stats={[
          { value: '30+', label: 'AI agents' },
          { value: '127+', label: 'Built-in tools' },
          { value: '24 / 7', label: 'Always working' },
          { value: '0%', label: 'Turnover rate' },
        ]}
        rightSlot={<AgentStack />}
      />

      <DeferredSection>
        <PainPointsBlock
          eyebrow="The problem"
          headlineLines={['Running a service business', 'is broken.']}
          sub="The way home service companies operate hasn't changed in 30 years. It's expensive, manual, and fragile."
          points={painPoints}
        />
      </DeferredSection>

      <DeferredSection>
        <AgentShowcaseSection />
      </DeferredSection>

      <DeferredSection>
        <CapabilitiesBlock
          eyebrow="Capabilities"
          headlineLines={['Not just chatbots.', 'Real employees.']}
          sub="Built with professional-grade infrastructure that makes these agents actually useful — not just impressive demos."
          capabilities={capabilities}
        />
      </DeferredSection>

      <DeferredSection>
        <ComparisonBlock
          eyebrow="Why switch"
          headlineLines={['The old way', 'vs. the OzziOS way']}
          legacyLabel="Traditional staffing"
          legacyItems={[
            { label: '$5K–15K / month per employee' },
            { label: '9 – 5 availability' },
            { label: '2 – 4 week onboarding' },
            { label: 'Staff turnover' },
            { label: 'No visibility into output' },
          ]}
          modernLabel="OzziOS AI team"
          modernItems={[
            { label: 'Fraction of the cost' },
            { label: '24 / 7 / 365 availability' },
            { label: 'Instant deployment' },
            { label: '0% turnover' },
            { label: 'Full transparency' },
          ]}
        />
      </DeferredSection>

      <DeferredSection>
        <FeatureCTABlock
          eyebrow="Deploy in minutes"
          headlineLines={['Your AI team is ready.', 'Are you?']}
          sub="Deploy your AI workforce in minutes. No hiring, no training, no turnover. Just results, 24/7."
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
