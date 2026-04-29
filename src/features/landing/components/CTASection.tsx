import { AnimatePresence, motion, useInView, type Variants } from 'framer-motion';
import { ArrowRight, Check, ChevronRight, Play, Terminal } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { audienceContent, useAudience } from '../contexts/AudienceContext';
import {
  BackgroundField,
  EASE_OUT,
  Kbd,
  SectionHeader,
  SectionHeading,
} from './_landing-primitives';
import { bookDemoTriggerProps, useCalDemoInit } from './book-demo';

// ────────────────────────────────────────────────────────────────────────────
// Motion
// ────────────────────────────────────────────────────────────────────────────

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
  { value: '24 / 7', label: 'Coverage window' },
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
// Command bar tease — Linear/Cursor style
// ────────────────────────────────────────────────────────────────────────────

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
    <div className="w-full max-w-[520px]">
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
      <p className="mt-2 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/40">
        Or just press <Kbd className="ml-0.5">S</Kbd> to start
      </p>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// CTASection
// ────────────────────────────────────────────────────────────────────────────

export function CTASection() {
  useCalDemoInit();
  const { audience } = useAudience();
  const content = audienceContent[audience].cta;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative isolate overflow-hidden py-28 lg:py-36">
      <BackgroundField variant="top-right" />

      <div
        ref={ref}
        className="relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10"
      >
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid w-full min-w-0 items-start gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-16"
        >
          {/* ── Left column: header + CTAs ────────────────────────── */}
          <motion.div variants={itemVariants} className="lg:col-span-7 xl:col-span-7">
            <SectionHeader
              eyebrow="Final step"
              headlineLines={[content.headline[0], content.headline[1]]}
              sub={content.subtext}
            />

            {/* CTA cluster — left-aligned with headline */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center gap-2.5"
            >
              <button
                type="button"
                {...bookDemoTriggerProps}
                className={cn(
                  'group/cta relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-md bg-foreground pl-5 pr-3 text-[14px] font-medium text-background',
                  'shadow-[0_1px_0_rgba(255,255,255,0.18)_inset,0_1px_2px_rgba(34,27,22,0.18),0_18px_38px_-14px_rgba(34,27,22,0.5)]',
                  'transition-all duration-200 hover:bg-[#1a1410] active:translate-y-px',
                )}
              >
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                Setup a demo
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/cta:translate-x-0.5" />
                <Kbd tone="dark">D</Kbd>
              </button>

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

            {/* Setup flow — left-aligned chip row */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-2"
            >
              <SectionHeading label="The path" />
              <div className="flex flex-wrap items-center gap-2 sm:ml-2">
                {setupFlow.map((step, i) => (
                  <div key={step.id} className="flex items-center gap-2">
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
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right column: command tease + trust ledger ────────── */}
          <motion.div
            variants={itemVariants}
            className="flex w-full min-w-0 flex-col gap-5 lg:col-span-5 xl:col-span-5"
          >
            {/* Command palette tease */}
            <CommandTease />

            {/* Trust ledger — full-width on mobile, contained on the right column */}
            <div className="overflow-hidden rounded-md border border-border/60 bg-background/60 backdrop-blur">
              <div className="border-b border-border/60 bg-muted/30 px-4 py-2.5">
                <SectionHeading label="What you get" />
              </div>
              <div className="grid grid-cols-2 divide-x divide-y divide-border/60 sm:grid-cols-4 sm:divide-y-0">
                {trustMetrics.map((m) => (
                  <div key={m.label} className="px-4 py-4 text-left">
                    <div className="font-display text-[1.5rem] font-semibold leading-none tabular-nums tracking-[-0.025em] text-foreground">
                      {m.value}
                    </div>
                    <div className="mt-2 font-mono text-[9.5px] uppercase tracking-[0.2em] text-foreground/45">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Proof marquee — full width below the grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.7, delay: 0.55, ease: EASE_OUT }}
          className="mt-16 lg:mt-20"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/40">
              What you get on day one
            </span>
            <span className="h-px flex-1 bg-border/50" />
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
