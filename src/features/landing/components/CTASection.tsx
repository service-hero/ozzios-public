import { AnimatePresence, motion, useInView, type Variants } from 'framer-motion';
import { ArrowRight, Check, ChevronRight, Play, Terminal } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { audienceContent, useAudience } from '../contexts/AudienceContext';

// ────────────────────────────────────────────────────────────────────────────
// Motion
// ────────────────────────────────────────────────────────────────────────────

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE_OUT } },
};

// ────────────────────────────────────────────────────────────────────────────
// Data
// ────────────────────────────────────────────────────────────────────────────

const setupFlow = [
  { id: '01', title: 'Connect your stack' },
  { id: '02', title: 'Deploy your agents' },
  { id: '03', title: 'Review the output' },
] as const;

const trustMetrics = [
  { value: '5 min', label: 'Setup time' },
  { value: '30+', label: 'Specialist agents' },
  { value: '24/7', label: 'Coverage window' },
  { value: '$0', label: 'Extra headcount' },
] as const;

const proofPoints = [
  'Setup in under 5 minutes',
  'No annual contract',
  'Built for HVAC, plumbing, roofing, electrical',
  'CRM, workflows, voice, reporting in one system',
  'See every action your agents take',
  'Cancel anytime',
];

// Cycles through realistic command suggestions to give the bar life
const commandCycle = [
  'deploy hvac-team@servicehero',
  'agents.start --trade roofing',
  'campaigns:launch summer-tune-up',
  'workflow.run missed-call-recovery',
] as const;

// ────────────────────────────────────────────────────────────────────────────
// Primitives
// ────────────────────────────────────────────────────────────────────────────

function Kbd({ children, tone = 'light', className }: { children: React.ReactNode; tone?: 'light' | 'dark'; className?: string }) {
  return (
    <kbd
      className={cn(
        'inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-[5px] border px-1 font-sans text-[10px] font-medium leading-none tabular-nums',
        tone === 'light'
          ? 'border-border/70 bg-white/80 text-foreground/55 shadow-[0_1px_0_rgba(0,0,0,0.04)]'
          : 'border-white/15 bg-white/10 text-white/85 shadow-[inset_0_-1px_0_rgba(0,0,0,0.18)]',
        className,
      )}
    >
      {children}
    </kbd>
  );
}

function LedgerEyebrow({ label }: { label: string }) {
  return (
    <div className="mx-auto mb-7 inline-flex items-center gap-3">
      <span className="h-px w-10 bg-border/60" />
      <span className="inline-flex items-center gap-1.5">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signature/60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signature" />
        </span>
        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-signature">
          {label}
        </span>
      </span>
      <span className="h-px w-10 bg-border/60" />
    </div>
  );
}

function HeadlineMark({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10 text-signature">{children}</span>
      <span
        aria-hidden
        className="absolute -bottom-1 left-0 right-0 h-[6px] rounded-full bg-signature/15 blur-[2px]"
      />
    </span>
  );
}

// Linear/Cursor-style command bar that connects to product vocabulary
function CommandTease() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [typed, setTyped] = useState('');
  const cancelRef = useRef({ cancelled: false });

  useEffect(() => {
    cancelRef.current.cancelled = true;
    cancelRef.current = { cancelled: false };
    const ctrl = cancelRef.current;
    const target = commandCycle[phraseIdx];

    let i = 0;
    let dwellTimer: ReturnType<typeof setTimeout> | null = null;
    let typeTimer: ReturnType<typeof setTimeout> | null = null;

    const type = () => {
      if (ctrl.cancelled) return;
      i += 1;
      setTyped(target.slice(0, i));
      if (i >= target.length) {
        dwellTimer = setTimeout(() => {
          if (ctrl.cancelled) return;
          setPhraseIdx((p) => (p + 1) % commandCycle.length);
        }, 2200);
        return;
      }
      const ch = target[i - 1];
      const delay = ch === ' ' ? 50 : ch === '-' || ch === '@' ? 90 : 28 + Math.random() * 30;
      typeTimer = setTimeout(type, delay);
    };

    setTyped('');
    typeTimer = setTimeout(type, 200);

    return () => {
      ctrl.cancelled = true;
      if (dwellTimer) clearTimeout(dwellTimer);
      if (typeTimer) clearTimeout(typeTimer);
    };
  }, [phraseIdx]);

  return (
    <div className="mx-auto mt-6 w-full max-w-[520px]">
      <div className="group/cmd flex h-11 items-center gap-2.5 rounded-md border border-border/60 bg-background/80 pl-3 pr-1.5 backdrop-blur-sm transition-colors hover:border-border">
        <Terminal className="h-3.5 w-3.5 shrink-0 text-foreground/40" />
        <span className="font-mono text-[12px] tabular-nums text-foreground/40">$</span>
        <div className="flex-1 truncate font-mono text-[12.5px] text-foreground">
          <span className="text-foreground/50">ozzi </span>
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={phraseIdx}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
              className="inline"
            >
              {typed}
            </motion.span>
          </AnimatePresence>
          <span
            className="ml-0.5 inline-block h-[12px] w-[7px] -translate-y-px translate-x-0.5 align-middle bg-signature/80"
            style={{ animation: 'blink 1s steps(2) infinite' }}
            aria-hidden
          />
        </div>
        <span className="ml-1 inline-flex items-center gap-1.5 text-[10.5px] font-medium text-foreground/45">
          <Kbd>↵</Kbd>
          <span className="hidden sm:inline">run</span>
        </span>
      </div>
      <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/40">
        Or just press <Kbd className="ml-0.5">S</Kbd> to start
      </p>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// CTASection
// ────────────────────────────────────────────────────────────────────────────

export function CTASection() {
  const { audience } = useAudience();
  const content = audienceContent[audience].cta;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative isolate overflow-hidden py-28 lg:py-36">
      {/* Background field — quiet, mirrors Hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 z-0 h-[640px] w-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(196,88,63,0.18),transparent_60%)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.45] [mask-image:radial-gradient(ellipse_at_top,black_15%,transparent_75%)]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(64, 45, 34, 0.10) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div
        ref={ref}
        className="relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10"
      >
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="mx-auto flex max-w-[920px] flex-col items-center text-center"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants}>
            <LedgerEyebrow label="Final step" />
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="font-display text-[clamp(2.5rem,5.6vw,5.4rem)] font-semibold leading-[0.96] tracking-[-0.04em] text-foreground"
          >
            {content.headline[0]}
            <br className="hidden sm:block" />{' '}
            <HeadlineMark>{content.headline[1]}</HeadlineMark>
          </motion.h2>

          {/* Subhead */}
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-[580px] text-[16px] leading-[1.6] text-muted-foreground sm:text-[17px]"
          >
            {content.subtext}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-9 flex flex-wrap items-center justify-center gap-2.5"
          >
            <a
              href="https://app.ozzios.com/sign-up"
              className={cn(
                'group/cta relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-md bg-foreground pl-5 pr-3 text-[14px] font-medium text-background',
                'shadow-[0_1px_0_rgba(255,255,255,0.18)_inset,0_1px_2px_rgba(34,27,22,0.18),0_18px_38px_-14px_rgba(34,27,22,0.5)]',
                'transition-all duration-200 hover:bg-[#1a1410] active:translate-y-px',
              )}
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
              {content.primaryButton}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/cta:translate-x-0.5" />
              <Kbd tone="dark">S</Kbd>
            </a>

            {content.secondaryButton ? (
              <a
                href="#how-it-works"
                className="group/play inline-flex h-12 items-center gap-2.5 rounded-md border border-border/70 bg-background/80 pl-1.5 pr-5 text-[14px] font-medium text-foreground backdrop-blur transition-all duration-200 hover:border-border hover:bg-background"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-[5px] bg-foreground text-background transition-transform duration-200 group-hover/play:scale-105">
                  <Play className="ml-[1px] h-3.5 w-3.5 fill-current" />
                </span>
                {content.secondaryButton}
              </a>
            ) : null}
          </motion.div>

          {/* Command palette tease */}
          <motion.div variants={itemVariants} className="w-full">
            <CommandTease />
          </motion.div>

          {/* Setup flow — horizontal */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex w-full max-w-[820px] flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-2"
          >
            {setupFlow.map((step, i) => (
              <div key={step.id} className="flex items-center gap-2 sm:gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1.5 backdrop-blur">
                  <span className="font-mono text-[10.5px] tabular-nums text-foreground/40">
                    {step.id}
                  </span>
                  <span className="text-[12.5px] font-medium text-foreground">
                    {step.title}
                  </span>
                </span>
                {i < setupFlow.length - 1 ? (
                  <ChevronRight className="hidden h-3.5 w-3.5 text-foreground/30 sm:inline-block" />
                ) : null}
              </div>
            ))}
          </motion.div>

          {/* Trust ledger */}
          <motion.div
            variants={itemVariants}
            className="mt-12 w-full max-w-[820px] overflow-hidden rounded-md border border-border/60 bg-background/60 backdrop-blur"
          >
            <div className="grid grid-cols-2 divide-x divide-y divide-border/60 sm:grid-cols-4 sm:divide-y-0">
              {trustMetrics.map((m) => (
                <div key={m.label} className="px-4 py-4 text-left">
                  <div className="font-display text-[1.6rem] font-semibold leading-none tabular-nums tracking-[-0.025em] text-foreground">
                    {m.value}
                  </div>
                  <div className="mt-2 font-mono text-[9.5px] uppercase tracking-[0.2em] text-foreground/45">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Proof marquee */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.7, delay: 0.55, ease: EASE_OUT }}
          className="mt-16 lg:mt-20"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-border/50" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/40">
              What you get on day one
            </span>
            <span className="h-px w-10 bg-border/50" />
          </div>

          <div className="relative overflow-hidden rounded-md border border-border/60 bg-background/50 py-3 backdrop-blur">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 32, ease: 'linear', repeat: Infinity }}
              className="flex min-w-max items-center gap-10 px-6"
            >
              {[...proofPoints, ...proofPoints].map((point, i) => (
                <span
                  key={`${point}-${i}`}
                  className="inline-flex items-center gap-2 whitespace-nowrap text-[12px] font-medium text-foreground/65"
                >
                  <span className="flex h-4 w-4 items-center justify-center rounded-full border border-signature/30 bg-signature/10 text-signature">
                    <Check className="h-2.5 w-2.5" strokeWidth={3} />
                  </span>
                  {point}
                  <span className="ml-2 h-1 w-1 rounded-full bg-foreground/15" />
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
