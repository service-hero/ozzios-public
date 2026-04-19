import { AnimatePresence, motion, useInView, type Variants } from 'framer-motion';
import { ArrowRight, Building2, Check, Layers, Sparkles, Users, type LucideIcon } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { useAudience } from '../contexts/AudienceContext';
import {
  BackgroundField,
  EASE_OUT,
  Kbd,
  SectionHeader,
  SectionHeading,
} from './_landing-primitives';

// ────────────────────────────────────────────────────────────────────────────
// Data
// ────────────────────────────────────────────────────────────────────────────

const tools = [
  { id: 'slack', name: 'Slack', cost: 15, icon: 'SL' },
  { id: 'hubspot', name: 'HubSpot', cost: 800, icon: 'HB' },
  { id: 'mailchimp', name: 'Mailchimp', cost: 100, icon: 'MC' },
  { id: 'hootsuite', name: 'Hootsuite', cost: 99, icon: 'HS' },
  { id: 'semrush', name: 'SEMrush', cost: 130, icon: 'SR' },
  { id: 'asana', name: 'Asana', cost: 25, icon: 'AS' },
  { id: 'zapier', name: 'Zapier', cost: 50, icon: 'ZP' },
  { id: 'chatgpt', name: 'ChatGPT/Claude', cost: 20, icon: 'AI' },
];

type TabType = 'agency' | 'employees' | 'tools';

const tabs: { id: TabType; label: string; icon: LucideIcon; description: string }[] = [
  {
    id: 'agency',
    label: 'Marketing spend',
    icon: Building2,
    description: 'See what you are really paying your marketing company or freelancers.',
  },
  {
    id: 'employees',
    label: 'Employee costs',
    icon: Users,
    description: 'Stop the hiring treadmill — let agents handle the repeatable work.',
  },
  {
    id: 'tools',
    label: 'Tool consolidation',
    icon: Layers,
    description: 'Cancel 8+ subscriptions and consolidate into one operating layer.',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT } },
};

// ────────────────────────────────────────────────────────────────────────────
// Animated value
// ────────────────────────────────────────────────────────────────────────────

function AnimatedValue({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const [display, setDisplay] = useState(value);
  const prev = useRef(value);

  useEffect(() => {
    const start = prev.current;
    const end = value;
    const dur = 600;
    const t0 = Date.now();

    const step = () => {
      const elapsed = Date.now() - t0;
      const p = Math.min(elapsed / dur, 1);
      const eased = 1 - Math.pow(2, -10 * p);
      setDisplay(start + (end - start) * eased);
      if (p < 1) requestAnimationFrame(step);
      else {
        setDisplay(end);
        prev.current = end;
      }
    };
    requestAnimationFrame(step);
  }, [value]);

  const formatted = decimals > 0 ? display.toFixed(decimals) : Math.round(display).toLocaleString();
  return (
    <span className="tabular-nums">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Slider — Linear/Cursor minimal
// ────────────────────────────────────────────────────────────────────────────

function PremiumSlider({
  value,
  onChange,
  min,
  max,
  step = 1,
  formatValue,
}: {
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step?: number;
  formatValue: (v: number) => string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="relative pb-6 pt-3">
      <div className="relative h-1.5">
        <div className="absolute inset-0 rounded-full bg-muted" />
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-foreground transition-all duration-150"
          style={{ width: `${pct}%` }}
        />
        <div
          className="pointer-events-none absolute top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${pct}%` }}
        >
          <div className="h-4 w-4 rounded-full border border-foreground/20 bg-background shadow-[0_2px_6px_rgba(34,27,22,0.18)] transition-transform" />
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="absolute left-0 top-3 z-20 h-1.5 w-full cursor-pointer opacity-0"
      />
      <div className="absolute left-0 top-7 font-mono text-[10px] text-foreground/40">
        {formatValue(min)}
      </div>
      <div className="absolute right-0 top-7 font-mono text-[10px] text-foreground/40">
        {formatValue(max)}
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Tool checkbox
// ────────────────────────────────────────────────────────────────────────────

function ToolCheckbox({
  tool,
  checked,
  onChange,
}: {
  tool: (typeof tools)[number];
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={cn(
        'group/tool relative flex items-center gap-3 rounded-md border p-3 text-left transition-all duration-200',
        checked
          ? 'border-signature/35 bg-signature/[0.04]'
          : 'border-border/60 bg-background hover:border-border',
      )}
    >
      <div
        className={cn(
          'flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] border transition-all duration-150',
          checked ? 'border-signature bg-signature' : 'border-border/70 bg-transparent',
        )}
      >
        {checked ? <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} /> : null}
      </div>
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border/60 bg-background font-mono text-[10px] font-semibold tracking-wider text-foreground/65">
        {tool.icon}
      </span>
      <div className="min-w-0 flex-1">
        <p
          className={cn(
            'truncate text-[13px] font-medium transition-colors',
            checked ? 'text-foreground' : 'text-foreground/80',
          )}
        >
          {tool.name}
        </p>
        <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/45">
          ~${tool.cost}/mo
        </p>
      </div>
    </button>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// SavingsCalculatorSection
// ────────────────────────────────────────────────────────────────────────────

export function SavingsCalculatorSection() {
  const { isBusinessOwner } = useAudience();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const defaultTab: TabType = isBusinessOwner ? 'agency' : 'employees';
  const [activeTab, setActiveTab] = useState<TabType>(defaultTab);

  useEffect(() => {
    setActiveTab(isBusinessOwner ? 'agency' : 'employees');
  }, [isBusinessOwner]);

  const [agencySpend, setAgencySpend] = useState(5000);
  const [teamSize, setTeamSize] = useState(3);
  const [avgSalary, setAvgSalary] = useState(65000);
  const [selectedTools, setSelectedTools] = useState<string[]>([
    'hubspot',
    'mailchimp',
    'semrush',
    'asana',
  ]);

  const calculateAgencySavings = useCallback(() => {
    const annual = agencySpend * 12;
    const ours = 299 * 12;
    const savings = annual - ours;
    const pct = Math.round((savings / annual) * 100);
    return { annual: savings, percentage: pct, monthly: agencySpend - 299 };
  }, [agencySpend]);

  const calculateEmployeeSavings = useCallback(() => {
    const reduction = 0.65;
    const totalSalary = teamSize * avgSalary;
    const salarySavings = Math.round(totalSalary * reduction);
    const reduced = Math.round(teamSize * reduction);
    const remaining = teamSize - reduced;
    return {
      salarySavings,
      employeesReduced: reduced,
      employeesRemaining: remaining,
      currentCost: totalSalary,
      newCost: Math.round(totalSalary * (1 - reduction)),
    };
  }, [teamSize, avgSalary]);

  const calculateToolSavings = useCallback(() => {
    const monthly = selectedTools.reduce((acc, id) => {
      const t = tools.find((x) => x.id === id);
      return acc + (t?.cost || 0);
    }, 0);
    return { monthly, annual: monthly * 12, count: selectedTools.length };
  }, [selectedTools]);

  const agencySavings = calculateAgencySavings();
  const employeeSavings = calculateEmployeeSavings();
  const toolSavings = calculateToolSavings();

  const totalSavings =
    activeTab === 'agency'
      ? agencySavings.annual
      : activeTab === 'employees'
        ? employeeSavings.salarySavings
        : toolSavings.annual;

  return (
    <section id="calculator" className="relative isolate overflow-hidden py-28 lg:py-36">
      <BackgroundField variant="top-center" />

      <div className="relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-12 lg:mb-16">
            <SectionHeader
              eyebrow="ROI calculator"
              headlineLines={['See exactly', 'what you save.']}
              sub="Calculate your potential savings across marketing services, employees, and tools."
            />
          </motion.div>

          {/* Calculator */}
          <motion.div variants={itemVariants}>
            <div className="overflow-hidden rounded-xl border border-border/70 bg-background/85 shadow-[0_18px_50px_-26px_rgba(34,27,22,0.30)]">
              {/* Tab header */}
              <div className="flex items-stretch border-b border-border/60 bg-muted/30">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        'group/tab relative flex flex-1 items-center justify-center gap-2 px-4 py-3.5 text-[12.5px] font-medium transition-all duration-200',
                        isActive
                          ? 'bg-background text-foreground'
                          : 'text-muted-foreground hover:bg-background/40 hover:text-foreground',
                      )}
                    >
                      <Icon
                        className={cn(
                          'h-3.5 w-3.5 transition-colors',
                          isActive ? 'text-signature' : 'text-foreground/40',
                        )}
                      />
                      <span className="hidden sm:inline">{tab.label}</span>
                      {isActive ? (
                        <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-t-full bg-signature" />
                      ) : null}
                    </button>
                  );
                })}
              </div>

              {/* Content */}
              <div className="grid gap-6 p-5 lg:grid-cols-2 lg:gap-8 lg:p-8">
                {/* Inputs */}
                <div className="space-y-6">
                  <p className="text-[13px] leading-[1.55] text-muted-foreground">
                    {tabs.find((t) => t.id === activeTab)?.description}
                  </p>

                  <AnimatePresence mode="wait">
                    {activeTab === 'agency' ? (
                      <motion.div
                        key="agency"
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 16 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-7"
                      >
                        <SliderField
                          label="Monthly marketing spend"
                          value={`$${agencySpend.toLocaleString()}`}
                        >
                          <PremiumSlider
                            value={agencySpend}
                            onChange={setAgencySpend}
                            min={1000}
                            max={25000}
                            step={500}
                            formatValue={(v) => `$${(v / 1000).toFixed(0)}K`}
                          />
                        </SliderField>

                        <div className="rounded-md border border-border/60 bg-muted/30 p-4">
                          <SectionHeading label="What you're paying for" />
                          <div className="mt-3 space-y-2">
                            {[
                              "Cookie-cutter campaigns that don't fit your market",
                              "Freelancers who don't understand your trade",
                              "Zero visibility into what's actually getting done",
                              'Generic strategy calls that waste your time',
                            ].map((item) => (
                              <div key={item} className="flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                                <span className="text-[12.5px] leading-[1.55] text-muted-foreground">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ) : null}

                    {activeTab === 'employees' ? (
                      <motion.div
                        key="employees"
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 16 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-7"
                      >
                        <SliderField
                          label="Marketing team size"
                          value={`${teamSize} ${teamSize === 1 ? 'person' : 'people'}`}
                        >
                          <PremiumSlider
                            value={teamSize}
                            onChange={setTeamSize}
                            min={1}
                            max={20}
                            step={1}
                            formatValue={(v) => `${v}`}
                          />
                        </SliderField>

                        <SliderField label="Average salary" value={`$${(avgSalary / 1000).toFixed(0)}K`}>
                          <PremiumSlider
                            value={avgSalary}
                            onChange={setAvgSalary}
                            min={40000}
                            max={120000}
                            step={5000}
                            formatValue={(v) => `$${(v / 1000).toFixed(0)}K`}
                          />
                        </SliderField>

                        <div className="rounded-md border border-signature/25 bg-signature/[0.06] p-4">
                          <div className="flex items-start gap-3">
                            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-signature" />
                            <div>
                              <p className="text-[12.5px] font-semibold text-signature">
                                65% headcount reduction
                              </p>
                              <p className="mt-1 text-[12px] leading-[1.55] text-muted-foreground">
                                Run a 20-person operation with 7 people. AI handles the repetitive
                                work — your team focuses on strategy and relationships.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ) : null}

                    {activeTab === 'tools' ? (
                      <motion.div
                        key="tools"
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 16 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-5"
                      >
                        <SectionHeading label="Tools you currently pay for" />
                        <div className="grid grid-cols-2 gap-2">
                          {tools.map((tool) => (
                            <ToolCheckbox
                              key={tool.id}
                              tool={tool}
                              checked={selectedTools.includes(tool.id)}
                              onChange={(checked) => {
                                setSelectedTools(
                                  checked
                                    ? [...selectedTools, tool.id]
                                    : selectedTools.filter((id) => id !== tool.id),
                                );
                              }}
                            />
                          ))}
                        </div>
                        <div className="rounded-md border border-mint/30 bg-mint/[0.06] p-4">
                          <div className="flex items-start gap-3">
                            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                            <div>
                              <p className="text-[12.5px] font-semibold text-mint">
                                OzziOS replaces all of these
                              </p>
                              <p className="mt-1 text-[12px] leading-[1.55] text-muted-foreground">
                                One platform, one login, one invoice. All the features you need.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>

                {/* Results */}
                <div className="lg:sticky lg:top-24">
                  <div className="overflow-hidden rounded-xl border border-border/70 bg-background">
                    <div className="border-b border-border/60 bg-muted/30 px-5 py-3">
                      <SectionHeading label="Estimated annual savings" />
                    </div>

                    <div className="px-5 py-6">
                      <div className="mb-6 flex items-baseline gap-1.5">
                        <span className="font-display text-[clamp(2.6rem,6.5vw,4.4rem)] font-semibold leading-none tracking-[-0.04em] text-foreground">
                          <AnimatedValue value={totalSavings} prefix="$" />
                        </span>
                        <span className="font-mono text-[11px] uppercase tracking-wider text-foreground/45">
                          /yr
                        </span>
                      </div>

                      <AnimatePresence mode="wait">
                        {activeTab === 'agency' ? (
                          <motion.div
                            key="r-agency"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            className="divide-y divide-border/60"
                          >
                            <ResultRow label="Current annual marketing cost" value={`$${(agencySpend * 12).toLocaleString()}`} />
                            <ResultRow label="OzziOS annual cost" value="~$3,588" tone="mint" />
                            <ResultRow
                              label="Savings percentage"
                              value={<AnimatedValue value={agencySavings.percentage} suffix="%" />}
                              tone="signature"
                            />
                          </motion.div>
                        ) : null}

                        {activeTab === 'employees' ? (
                          <motion.div
                            key="r-emp"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            className="divide-y divide-border/60"
                          >
                            <ResultRow
                              label="Current salary cost"
                              value={<AnimatedValue value={employeeSavings.currentCost} prefix="$" />}
                            />
                            <ResultRow
                              label="Team after AI"
                              value={
                                <>
                                  <AnimatedValue value={employeeSavings.employeesRemaining} /> people
                                </>
                              }
                              tone="mint"
                            />
                            <ResultRow
                              label="Headcount reduction"
                              value={
                                <>
                                  {teamSize} → <AnimatedValue value={employeeSavings.employeesRemaining} /> (65%)
                                </>
                              }
                              tone="signature"
                            />
                          </motion.div>
                        ) : null}

                        {activeTab === 'tools' ? (
                          <motion.div
                            key="r-tools"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            className="divide-y divide-border/60"
                          >
                            <ResultRow
                              label="Tools to cancel"
                              value={
                                <>
                                  <AnimatedValue value={toolSavings.count} /> subscriptions
                                </>
                              }
                            />
                            <ResultRow
                              label="Monthly savings"
                              value={
                                <>
                                  <AnimatedValue value={toolSavings.monthly} prefix="$" />/mo
                                </>
                              }
                              tone="mint"
                            />
                            <ResultRow
                              label="Fewer logins"
                              value={
                                <>
                                  <AnimatedValue value={toolSavings.count} /> → 1
                                </>
                              }
                              tone="signature"
                            />
                          </motion.div>
                        ) : null}
                      </AnimatePresence>

                      {/* CTA */}
                      <div className="mt-7">
                        <a
                          href="https://app.ozzios.com/sign-up"
                          className={cn(
                            'group/cta relative flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-md bg-foreground text-[13.5px] font-medium text-background',
                            'shadow-[0_1px_0_rgba(255,255,255,0.18)_inset,0_14px_30px_-12px_rgba(34,27,22,0.45)]',
                            'transition-all duration-200 hover:bg-[#1a1410] active:translate-y-px',
                          )}
                        >
                          <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                          Start saving today
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-0.5" />
                          <Kbd tone="dark">S</Kbd>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-6 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/40">
              Estimates based on industry averages — actual savings vary
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Internals
// ────────────────────────────────────────────────────────────────────────────

function SliderField({
  label,
  value,
  children,
}: {
  label: string;
  value: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-foreground/55">
          {label}
        </span>
        <span className="text-[15px] font-semibold tabular-nums text-foreground">{value}</span>
      </div>
      {children}
    </div>
  );
}

function ResultRow({
  label,
  value,
  tone = 'neutral',
}: {
  label: string;
  value: React.ReactNode;
  tone?: 'neutral' | 'mint' | 'signature';
}) {
  return (
    <div className="flex items-center justify-between py-3">
      <span className="text-[13px] text-muted-foreground">{label}</span>
      <span
        className={cn(
          'text-[13px] font-semibold tabular-nums',
          tone === 'mint' ? 'text-mint' : tone === 'signature' ? 'text-signature' : 'text-foreground',
        )}
      >
        {value}
      </span>
    </div>
  );
}
