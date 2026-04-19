import { motion, type Variants } from 'framer-motion';
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Briefcase,
  Layers,
  Megaphone,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { cn } from '@/lib/utils';
import { audienceContent, useAudience } from '../contexts/AudienceContext';
import {
  BackgroundField,
  EASE_OUT,
  Kbd,
  SectionHeader,
  SectionHeading,
} from './_landing-primitives';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

const platformAgents = [
  { name: 'SEO Specialist', status: 'active' as const },
  { name: 'Content Writer', status: 'active' as const },
  { name: 'Data Analyst', status: 'idle' as const },
  { name: 'Social Manager', status: 'active' as const },
];

const workflowMetrics = [
  { value: '22', label: 'Triggers' },
  { value: '8', label: 'Node types' },
  { value: '99.9%', label: 'Uptime' },
];

const marketingPlatforms = [
  { name: 'Facebook', logo: '/images/facebook-icon.svg' },
  { name: 'Google', logo: '/images/google-logo.svg' },
  { name: 'TikTok', logo: '/images/tiktok-logo.svg' },
  { name: 'YouTube', logo: '/images/youtube-logo.webp' },
];

export function BentoSection() {
  const { audience } = useAudience();
  const content = audienceContent[audience].bento;

  return (
    <section id="features" className="relative isolate overflow-hidden py-28 lg:py-36">
      <BackgroundField variant="top-right" />

      <div className="relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-16 lg:mb-20">
            <SectionHeader
              eyebrow={content.sectionLabel}
              headlineLines={[content.headline[0], content.headline[1]]}
              sub={content.subheadline}
            />
          </motion.div>

          {/* Bento grid — 12-col with grid-flow-dense, no empty cells */}
          <div className="grid grid-cols-12 gap-4 lg:gap-5" style={{ gridAutoFlow: 'dense' }}>
            {/* Featured: AI Agents (col-span-8) */}
            <motion.div variants={itemVariants} className="col-span-12 lg:col-span-8">
              <BentoCard featured>
                <div className="grid h-full min-h-[340px] grid-cols-1 lg:grid-cols-[2fr_3fr]">
                  {/* Image plate */}
                  <div className="relative h-48 overflow-hidden lg:h-auto">
                    <img
                      src="/images/Gemini_Generated_Image_1vp39x1vp39x1vp3.webp"
                      alt="AI marketing team collaborating"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-[1.04]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/95"
                    />
                  </div>

                  {/* Body */}
                  <div className="flex flex-col p-7 lg:p-9">
                    <div className="mb-5 inline-flex items-center gap-1.5 self-start rounded-[5px] border border-signature/25 bg-signature/10 px-2 py-0.5 font-mono text-[9.5px] font-semibold uppercase tracking-wider text-signature">
                      <Bot className="h-3 w-3" />
                      {content.cards.aiWorkforce.badge}
                    </div>

                    <h3 className="font-display text-[1.6rem] font-semibold leading-[1.05] tracking-[-0.025em] text-foreground sm:text-[1.85rem]">
                      {content.cards.aiWorkforce.title}
                    </h3>
                    <p className="mt-3 max-w-[42ch] text-[13.5px] leading-[1.55] text-muted-foreground">
                      {content.cards.aiWorkforce.description}
                    </p>

                    {/* Mini agent grid */}
                    <div className="mt-auto pt-6">
                      <div className="mb-3">
                        <SectionHeading label="On duty" />
                      </div>
                      <div className="grid grid-cols-2 gap-1.5">
                        {platformAgents.map((agent) => (
                          <div
                            key={agent.name}
                            className="flex items-center gap-2 rounded-md border border-border/60 bg-background/60 px-2.5 py-2"
                          >
                            <span
                              className={cn(
                                'h-1.5 w-1.5 shrink-0 rounded-full',
                                agent.status === 'active' ? 'bg-mint' : 'bg-foreground/20',
                              )}
                            />
                            <span className="truncate text-[12px] font-medium text-foreground/85">
                              {agent.name}
                            </span>
                            <span className="ml-auto font-mono text-[8.5px] uppercase tracking-wider text-foreground/40">
                              {agent.status}
                            </span>
                          </div>
                        ))}
                      </div>
                      <BentoLink href="/features/ai-agents" label="Explore AI Agents" />
                    </div>
                  </div>
                </div>
              </BentoCard>
            </motion.div>

            {/* All-in-one tools (col-span-4) */}
            <motion.div variants={itemVariants} className="col-span-12 sm:col-span-6 lg:col-span-4">
              <BentoCard className="h-full">
                <div className="flex h-full flex-col p-6">
                  <BentoIcon Icon={Layers} />
                  <h3 className="mt-5 text-[17px] font-semibold leading-tight text-foreground">
                    {content.cards.tools.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.55] text-muted-foreground">
                    {content.cards.tools.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {['Tasks', 'Reports', 'Memory', 'Search'].map((tool) => (
                      <Kbd key={tool} className="h-[20px] px-1.5 text-[10px] uppercase tracking-wider">
                        {tool}
                      </Kbd>
                    ))}
                  </div>
                  <BentoLink href="/features/dashboard" label="See all tools" className="mt-auto pt-5" />
                </div>
              </BentoCard>
            </motion.div>

            {/* Communities (col-span-4) */}
            <motion.div variants={itemVariants} className="col-span-12 sm:col-span-6 lg:col-span-4">
              <BentoCard className="h-full">
                <div className="flex h-full flex-col p-6">
                  <BentoIcon Icon={Users} />
                  <h3 className="mt-5 text-[17px] font-semibold leading-tight text-foreground">
                    {content.cards.communication.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.55] text-muted-foreground">
                    {content.cards.communication.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {['Channels', 'Forums', 'Voice', 'Roles'].map((feature) => (
                      <Kbd key={feature} className="h-[20px] px-1.5 text-[10px] uppercase tracking-wider">
                        {feature}
                      </Kbd>
                    ))}
                  </div>
                  <BentoLink href="/features/channels" label="Explore channels" className="mt-auto pt-5" />
                </div>
              </BentoCard>
            </motion.div>

            {/* Workflows wide (col-span-8) */}
            <motion.div variants={itemVariants} className="col-span-12 lg:col-span-8">
              <BentoCard className="h-full">
                <div className="grid h-full min-h-[300px] grid-cols-1 lg:grid-cols-[3fr_2fr]">
                  <div className="flex flex-col p-7 lg:p-9">
                    <BentoIcon Icon={Workflow} />
                    <h3 className="mt-5 font-display text-[1.5rem] font-semibold leading-[1.05] tracking-[-0.025em] text-foreground sm:text-[1.7rem]">
                      {content.cards.workflows.title}
                    </h3>
                    <p className="mt-2 max-w-[42ch] text-[13.5px] leading-[1.55] text-muted-foreground">
                      {content.cards.workflows.description}
                    </p>

                    <div className="mt-auto pt-6">
                      <div className="overflow-hidden rounded-md border border-border/60 bg-background/60">
                        <div className="grid grid-cols-3 divide-x divide-border/60">
                          {workflowMetrics.map((m) => (
                            <div key={m.label} className="px-3 py-3">
                              <div className="font-display text-[1.3rem] font-semibold leading-none tabular-nums tracking-[-0.02em] text-foreground">
                                {m.value}
                              </div>
                              <div className="mt-1.5 font-mono text-[9.5px] uppercase tracking-[0.18em] text-foreground/45">
                                {m.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <BentoLink href="/features/workflows" label="Explore workflows" />
                    </div>
                  </div>

                  <div className="relative h-48 overflow-hidden order-first lg:order-last lg:h-auto">
                    <img
                      src="/images/Gemini_Generated_Image_yam1khyam1khyam1.webp"
                      alt="Automated marketing workflow"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-[1.04]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/95"
                    />
                  </div>
                </div>
              </BentoCard>
            </motion.div>

            {/* CRM (col-span-4) */}
            <motion.div variants={itemVariants} className="col-span-12 sm:col-span-6 lg:col-span-4">
              <BentoCard className="h-full">
                <div className="flex h-full flex-col p-6">
                  <BentoIcon Icon={Briefcase} />
                  <h3 className="mt-5 text-[17px] font-semibold leading-tight text-foreground">
                    {content.cards.crm.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.55] text-muted-foreground">
                    {content.cards.crm.description}
                  </p>
                  <div className="mt-auto pt-5 flex items-baseline gap-2">
                    <span className="font-display text-[2rem] font-semibold leading-none tabular-nums tracking-[-0.025em] text-foreground">
                      31
                    </span>
                    <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-foreground/45">
                      Contact fields
                    </span>
                  </div>
                  <BentoLink href="/features/crm" label="Explore CRM" />
                </div>
              </BentoCard>
            </motion.div>

            {/* Marketing suite (col-span-4) */}
            <motion.div variants={itemVariants} className="col-span-12 sm:col-span-6 lg:col-span-4">
              <BentoCard className="h-full">
                <div className="flex h-full flex-col p-6">
                  <BentoIcon Icon={Megaphone} />
                  <h3 className="mt-5 text-[17px] font-semibold leading-tight text-foreground">
                    {content.cards.marketing.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.55] text-muted-foreground">
                    {content.cards.marketing.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {marketingPlatforms.map((p) => (
                      <span
                        key={p.name}
                        className="inline-flex items-center gap-1.5 rounded-[5px] border border-border/60 bg-background px-2 py-1 text-[11px] font-medium text-foreground/75"
                      >
                        <img src={p.logo} alt={p.name} className="h-3 w-3 rounded-sm object-contain" />
                        {p.name}
                      </span>
                    ))}
                  </div>
                  <BentoLink href="/features/email-campaigns" label="Explore marketing" className="mt-auto pt-5" />
                </div>
              </BentoCard>
            </motion.div>

            {/* Multi-tenant (col-span-4) */}
            <motion.div variants={itemVariants} className="col-span-12 sm:col-span-6 lg:col-span-4">
              <BentoCard className="h-full">
                <div className="flex h-full flex-col p-6">
                  <BentoIcon Icon={BarChart3} />
                  <h3 className="mt-5 text-[17px] font-semibold leading-tight text-foreground">
                    {content.cards.multiTenant.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.55] text-muted-foreground">
                    {content.cards.multiTenant.description}
                  </p>
                  <div className="mt-auto pt-5 flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-foreground/55">
                    <span className="tabular-nums text-foreground/85">650+</span>
                    indexes
                    <span className="h-3 w-px bg-border/60" />
                    Workspace isolation
                  </div>
                  <BentoLink href="/features/dashboard" label="Explore dashboard" />
                </div>
              </BentoCard>
            </motion.div>

          </div>

          {/* Feature ledger callout */}
          <motion.div
            variants={itemVariants}
            className="mt-6 overflow-hidden rounded-md border border-border/60 bg-background/60 backdrop-blur"
          >
            <div className="flex flex-col items-stretch divide-y divide-border/60 sm:flex-row sm:items-center sm:divide-x sm:divide-y-0">
              <div className="flex flex-1 items-center gap-4 px-5 py-4">
                <span className="font-display text-[1.6rem] font-semibold leading-none tabular-nums tracking-[-0.025em] text-foreground">
                  17
                </span>
                <div>
                  <p className="text-[13px] font-medium text-foreground">
                    Features across 4 categories
                  </p>
                  <p className="mt-0.5 text-[12px] leading-[1.5] text-muted-foreground">
                    Email, SMS, social, forms, voice agents, dashboards, coding, and more.
                  </p>
                </div>
              </div>
              <a
                href="#showcase"
                className={cn(
                  'group/cta relative inline-flex shrink-0 items-center justify-center gap-2 overflow-hidden bg-foreground px-5 py-3 text-[13px] font-medium text-background transition-colors hover:bg-[#1a1410] sm:m-2 sm:rounded-md',
                )}
              >
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                See all features
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Internals
// ────────────────────────────────────────────────────────────────────────────

function BentoCard({
  children,
  className,
  featured = false,
}: {
  children: React.ReactNode;
  className?: string;
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        'group/card relative h-full overflow-hidden rounded-xl border bg-background/85 transition-all duration-300',
        featured
          ? 'border-border/70 shadow-[0_18px_50px_-26px_rgba(34,27,22,0.30)] hover:-translate-y-0.5 hover:border-border hover:shadow-[0_22px_60px_-22px_rgba(34,27,22,0.40)]'
          : 'border-border/60 shadow-[0_8px_30px_-18px_rgba(34,27,22,0.18)] hover:-translate-y-0.5 hover:border-border hover:shadow-[0_14px_40px_-18px_rgba(34,27,22,0.30)]',
        className,
      )}
    >
      {children}
    </div>
  );
}

function BentoIcon({ Icon }: { Icon: LucideIcon }) {
  return (
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/60 bg-background text-foreground/70 transition-colors duration-200 group-hover/card:border-foreground/25 group-hover/card:bg-foreground group-hover/card:text-background">
      <Icon className="h-4 w-4" />
    </span>
  );
}

function BentoLink({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <Link
      to={href}
      className={cn(
        'group/lnk mt-4 inline-flex items-center gap-1.5 self-start text-[12.5px] font-medium text-foreground/70 transition-colors hover:text-signature',
        className,
      )}
    >
      <span className="relative">
        {label}
        <span className="absolute -bottom-px left-0 h-px w-0 bg-signature transition-all duration-200 group-hover/lnk:w-full" />
      </span>
      <ArrowUpRight className="h-3 w-3 transition-transform duration-200 group-hover/lnk:-translate-y-0.5 group-hover/lnk:translate-x-0.5" />
    </Link>
  );
}
