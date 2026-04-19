import { motion, useInView, type Variants } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Check, type LucideIcon } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { useRef, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

// ────────────────────────────────────────────────────────────────────────────
// Shared motion easing — framer-motion v12 strict tuple
// ────────────────────────────────────────────────────────────────────────────

export const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

// ────────────────────────────────────────────────────────────────────────────
// Kbd badge — light & dark tones (matches Navigation/Hero/CTA)
// ────────────────────────────────────────────────────────────────────────────

export function Kbd({
  children,
  tone = 'light',
  className,
}: {
  children: React.ReactNode;
  tone?: 'light' | 'dark';
  className?: string;
}) {
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

// ────────────────────────────────────────────────────────────────────────────
// HeadlineMark — signature-tinted accent inside display headlines
// ────────────────────────────────────────────────────────────────────────────

export function HeadlineMark({ children }: { children: React.ReactNode }) {
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

// ────────────────────────────────────────────────────────────────────────────
// LedgerEyebrow — print-style framed micro-label with optional ping
// ────────────────────────────────────────────────────────────────────────────

export function LedgerEyebrow({
  label,
  centered = false,
  ping = false,
  tone = 'signature',
}: {
  label: string;
  centered?: boolean;
  ping?: boolean;
  tone?: 'signature' | 'neutral';
}) {
  const isSignature = tone === 'signature';
  return (
    <div className={cn('inline-flex items-center gap-3', centered && 'mx-auto')}>
      {/* Leading rule only when centered — left-aligned eyebrows stay flush with the headline */}
      {centered ? <span className="h-px w-10 bg-border/60" /> : null}
      <span className="inline-flex items-center gap-1.5">
        {ping ? (
          <span className="relative flex h-1.5 w-1.5">
            <span
              className={cn(
                'absolute inline-flex h-full w-full animate-ping rounded-full',
                isSignature ? 'bg-signature/60' : 'bg-foreground/40',
              )}
            />
            <span
              className={cn(
                'relative inline-flex h-1.5 w-1.5 rounded-full',
                isSignature ? 'bg-signature' : 'bg-foreground/70',
              )}
            />
          </span>
        ) : (
          <span
            className={cn(
              'inline-flex h-1.5 w-1.5 rounded-full',
              isSignature ? 'bg-signature' : 'bg-foreground/70',
            )}
          />
        )}
        <span
          className={cn(
            'font-mono text-[10.5px] uppercase tracking-[0.22em]',
            isSignature ? 'text-signature' : 'text-foreground/55',
          )}
        >
          {label}
        </span>
      </span>
      <span className="h-px w-10 bg-border/60" />
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// SectionHeading — mono uppercase + ledger rule (left-aligned section header)
// ────────────────────────────────────────────────────────────────────────────

export function SectionHeading({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-foreground/40">
        {label}
      </span>
      <span className="h-px flex-1 bg-border/50" />
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// SectionHeader — eyebrow + display headline + sub
// Used by every section to enforce identical hierarchy
// ────────────────────────────────────────────────────────────────────────────

export function SectionHeader({
  eyebrow,
  headlineLines,
  sub,
  align = 'left',
  ping = true,
  className,
}: {
  eyebrow: string;
  headlineLines: [string, string] | [string];
  sub?: string;
  align?: 'left' | 'center';
  ping?: boolean;
  className?: string;
}) {
  const centered = align === 'center';
  return (
    <div
      className={cn(
        'flex flex-col gap-6',
        centered ? 'mx-auto items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      <LedgerEyebrow label={eyebrow} centered={centered} ping={ping} />
      <h2
        className={cn(
          'max-w-[26ch] font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-foreground [text-wrap:balance]',
          centered && 'mx-auto',
        )}
      >
        {headlineLines[0]}
        {headlineLines[1] ? (
          <>
            <br className="hidden sm:block" />{' '}
            <HeadlineMark>{headlineLines[1]}</HeadlineMark>
          </>
        ) : null}
      </h2>
      {sub ? (
        <p
          className={cn(
            'max-w-[560px] text-[15.5px] leading-[1.6] text-muted-foreground sm:text-[16.5px]',
            centered && 'mx-auto',
          )}
        >
          {sub}
        </p>
      ) : null}
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// BackgroundField — the quiet ambient field used across sections
// ────────────────────────────────────────────────────────────────────────────

export function BackgroundField({
  variant = 'top-right',
  className,
}: {
  variant?: 'top-right' | 'top-center' | 'top-left' | 'none';
  className?: string;
}) {
  return (
    <>
      {variant !== 'none' ? (
        <div
          aria-hidden
          className={cn(
            'pointer-events-none absolute z-0 h-[520px] w-[720px] rounded-full bg-[radial-gradient(circle,rgba(196,88,63,0.12),transparent_60%)] blur-3xl',
            variant === 'top-right' && '-right-32 -top-20',
            variant === 'top-left' && '-left-32 -top-20',
            variant === 'top-center' && 'left-1/2 -top-32 -translate-x-1/2 w-[920px]',
            className,
          )}
        />
      ) : null}
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute inset-0 z-0 opacity-[0.45] [mask-image:radial-gradient(ellipse_at_top,black_15%,transparent_75%)]',
          className,
        )}
        style={{
          backgroundImage: 'radial-gradient(rgba(64, 45, 34, 0.10) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
    </>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// PrimaryCTA — solid foreground button matching Navigation/Hero/CTA exactly
// ────────────────────────────────────────────────────────────────────────────

export function PrimaryCTA({
  children,
  href,
  shortcut,
  className,
  size = 'md',
}: {
  children: React.ReactNode;
  href: string;
  shortcut?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}) {
  const sizing =
    size === 'lg'
      ? 'h-12 pl-5 pr-3 text-[14px]'
      : size === 'sm'
        ? 'h-9 pl-3.5 pr-2 text-[13px]'
        : 'h-11 pl-4 pr-2.5 text-[13.5px]';

  const isInternal = href.startsWith('/');
  const inner = (
    <>
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
      {children}
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
      {shortcut ? (
        <Kbd tone="dark" className="ml-0.5">
          {shortcut}
        </Kbd>
      ) : null}
    </>
  );

  const classes = cn(
    'group/cta relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-foreground font-medium text-background',
    'shadow-[0_1px_0_rgba(255,255,255,0.18)_inset,0_1px_2px_rgba(34,27,22,0.18),0_14px_30px_-12px_rgba(34,27,22,0.45)]',
    'transition-all duration-200 hover:bg-[#1a1410] active:translate-y-px',
    sizing,
    className,
  );

  if (isInternal) {
    return (
      <Link to={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {inner}
    </a>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// SecondaryCTA — outlined ghost button
// ────────────────────────────────────────────────────────────────────────────

export function SecondaryCTA({
  children,
  href,
  className,
  size = 'md',
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}) {
  const sizing =
    size === 'lg' ? 'h-12 px-5 text-[14px]' : size === 'sm' ? 'h-9 px-3 text-[13px]' : 'h-11 px-4 text-[13.5px]';

  const isInternal = href.startsWith('/') && !href.startsWith('//');
  const classes = cn(
    'group/sec inline-flex items-center gap-2 rounded-md border border-border/70 bg-background/80 font-medium text-foreground backdrop-blur transition-all duration-200 hover:border-border hover:bg-background',
    sizing,
    className,
  );

  const inner = (
    <>
      {children}
      <ArrowUpRight className="h-3 w-3 text-foreground/40 transition-transform duration-200 group-hover/sec:-translate-y-0.5 group-hover/sec:translate-x-0.5 group-hover/sec:text-foreground/70" />
    </>
  );

  if (isInternal) {
    return (
      <Link to={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={classes}
    >
      {inner}
    </a>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Shared motion variants for inner-page sections
// ────────────────────────────────────────────────────────────────────────────

export const innerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

export const innerItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT } },
};

// ────────────────────────────────────────────────────────────────────────────
// FeatureHero — hero block for inner feature/solution pages
// ────────────────────────────────────────────────────────────────────────────

export interface FeatureHeroProps {
  /** Pill icon */
  pillIcon: LucideIcon;
  /** Pill label (left side, signature tinted) */
  pillLabel: string;
  /** Pill subtitle (right side, plain text) */
  pillSubtitle?: string;
  /** Headline split into two lines (line 2 gets signature accent) */
  headlineLines: [string, string];
  /** Subheadline body */
  sub: string;
  /** Primary CTA */
  primaryCta?: { label: string; href: string; shortcut?: string };
  /** Secondary CTA */
  secondaryCta?: { label: string; href: string };
  /** Optional 4-up trust ledger */
  stats?: Array<{ value: string; label: string }>;
  /** Optional right-side render slot (replaces the centered layout with a 7/5 grid) */
  rightSlot?: ReactNode;
  /** Background variant */
  bgVariant?: 'top-right' | 'top-left' | 'top-center';
}

export function FeatureHero({
  pillIcon: PillIcon,
  pillLabel,
  pillSubtitle,
  headlineLines,
  sub,
  primaryCta,
  secondaryCta,
  stats,
  rightSlot,
  bgVariant = 'top-right',
}: FeatureHeroProps) {
  const hasRightSlot = Boolean(rightSlot);
  return (
    <section className="relative isolate overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-20 lg:pt-36">
      <BackgroundField variant={bgVariant} />
      <div className="relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10">
        <motion.div initial="hidden" animate="visible" variants={innerContainerVariants}>
          <div
            className={cn(
              'grid items-center gap-12',
              hasRightSlot ? 'lg:grid-cols-12 lg:gap-10 xl:gap-16' : '',
            )}
          >
            {/* Copy column */}
            <motion.div
              variants={innerItemVariants}
              className={hasRightSlot ? 'lg:col-span-7 xl:col-span-7' : 'max-w-[860px]'}
            >
              <span className="group inline-flex h-7 items-center gap-2 rounded-full border border-border/60 bg-background/80 pl-1.5 pr-3 text-[11px] font-medium text-foreground/65 backdrop-blur">
                <span className="inline-flex h-[18px] items-center gap-1.5 rounded-full bg-signature/10 px-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-signature">
                  <PillIcon className="h-3 w-3" />
                  {pillLabel}
                </span>
                {pillSubtitle ? <span className="text-foreground/55">{pillSubtitle}</span> : null}
              </span>

              <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-foreground [text-wrap:balance]">
                {headlineLines[0]}
                <br className="hidden sm:block" />{' '}
                <HeadlineMark>{headlineLines[1]}</HeadlineMark>
              </h1>

              <p className="mt-5 max-w-[520px] text-[16px] leading-[1.6] text-muted-foreground sm:text-[17px]">
                {sub}
              </p>

              {(primaryCta || secondaryCta) && (
                <div className="mt-7 flex flex-wrap items-center gap-2.5">
                  {primaryCta ? (
                    <PrimaryCTA href={primaryCta.href} size="md" shortcut={primaryCta.shortcut}>
                      {primaryCta.label}
                    </PrimaryCTA>
                  ) : null}
                  {secondaryCta ? (
                    <SecondaryCTA href={secondaryCta.href} size="md">
                      {secondaryCta.label}
                    </SecondaryCTA>
                  ) : null}
                </div>
              )}

              {stats && stats.length > 0 ? (
                <div className="mt-10 max-w-[640px] overflow-hidden rounded-md border border-border/60 bg-background/60 backdrop-blur">
                  <div
                    className={cn(
                      'grid divide-x divide-y divide-border/60 sm:divide-y-0',
                      stats.length === 4 ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-3',
                    )}
                  >
                    {stats.map((stat) => (
                      <div key={stat.label} className="px-4 py-3.5">
                        <div className="font-display text-[1.45rem] font-semibold leading-none tabular-nums tracking-[-0.025em] text-foreground">
                          {stat.value}
                        </div>
                        <div className="mt-1.5 font-mono text-[9.5px] uppercase tracking-[0.2em] text-foreground/45">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </motion.div>

            {/* Optional right slot */}
            {hasRightSlot ? (
              <motion.div variants={innerItemVariants} className="lg:col-span-5 xl:col-span-5">
                {rightSlot}
              </motion.div>
            ) : null}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// PainPointsBlock — section header + 2x2 pain card grid (destructive icon tile)
// ────────────────────────────────────────────────────────────────────────────

export interface PainPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function PainPointsBlock({
  eyebrow,
  headlineLines,
  sub,
  points,
  bgVariant = 'top-left',
}: {
  eyebrow: string;
  headlineLines: [string, string] | [string];
  sub?: string;
  points: PainPoint[];
  bgVariant?: 'top-right' | 'top-left' | 'top-center' | 'none';
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative isolate overflow-hidden border-t border-border/50 py-24 lg:py-32">
      <BackgroundField variant={bgVariant} />
      <div className="relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <SectionHeader eyebrow={eyebrow} headlineLines={headlineLines} sub={sub} />
        </motion.div>

        <motion.div
          variants={innerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-4 md:grid-cols-2 lg:gap-5"
        >
          {points.map((point) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                variants={innerItemVariants}
                className="group/p rounded-xl border border-border/60 bg-background p-7 shadow-[0_8px_30px_-18px_rgba(34,27,22,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:shadow-[0_14px_40px_-18px_rgba(34,27,22,0.30)]"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-destructive/25 bg-destructive/10 text-destructive transition-colors duration-200 group-hover/p:border-destructive/40">
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="mt-5 text-[16px] font-semibold leading-tight text-foreground">
                  {point.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-[1.6] text-muted-foreground">
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

// ────────────────────────────────────────────────────────────────────────────
// CapabilitiesBlock — section header + 3-col capability cards (signature benefit eyebrow)
// ────────────────────────────────────────────────────────────────────────────

export interface Capability {
  icon: LucideIcon;
  title: string;
  benefit: string;
  description: string;
}

export function CapabilitiesBlock({
  eyebrow,
  headlineLines,
  sub,
  capabilities,
  bgVariant = 'top-left',
}: {
  eyebrow: string;
  headlineLines: [string, string] | [string];
  sub?: string;
  capabilities: Capability[];
  bgVariant?: 'top-right' | 'top-left' | 'top-center' | 'none';
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative isolate overflow-hidden border-t border-border/50 py-24 lg:py-32">
      <BackgroundField variant={bgVariant} />
      <div className="relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <SectionHeader eyebrow={eyebrow} headlineLines={headlineLines} sub={sub} />
        </motion.div>

        <motion.div
          variants={innerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5"
        >
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                variants={innerItemVariants}
                className="group/c relative rounded-xl border border-border/60 bg-background p-7 shadow-[0_8px_30px_-18px_rgba(34,27,22,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:shadow-[0_14px_40px_-18px_rgba(34,27,22,0.30)]"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/60 bg-background text-foreground/70 transition-colors duration-200 group-hover/c:border-foreground/25 group-hover/c:bg-foreground group-hover/c:text-background">
                  <Icon className="h-4 w-4" />
                </span>
                <p className="mt-5 font-mono text-[9.5px] uppercase tracking-[0.22em] text-signature">
                  {cap.benefit}
                </p>
                <h3 className="mt-2 text-[17px] font-semibold leading-tight text-foreground">
                  {cap.title}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.6] text-muted-foreground">
                  {cap.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// ChecklistBlock — title + 2-col list of features with mint-tinted check glyphs
// ────────────────────────────────────────────────────────────────────────────

export function ChecklistBlock({
  eyebrow,
  headlineLines,
  features,
}: {
  eyebrow?: string;
  headlineLines: [string, string] | [string];
  features: string[];
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative isolate overflow-hidden py-24 lg:py-32">
      <BackgroundField variant="top-center" />
      <div className="relative z-10 mx-auto max-w-[960px] px-4 sm:px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-14"
        >
          <SectionHeader
            eyebrow={eyebrow ?? 'Built in'}
            headlineLines={headlineLines}
            align="center"
          />
        </motion.div>

        <motion.div
          variants={innerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="overflow-hidden rounded-xl border border-border/60 bg-background/85"
        >
          <div className="grid divide-y divide-border/60 sm:grid-cols-2 sm:divide-x">
            {features.map((feature, i) => (
              <motion.div
                key={feature}
                variants={innerItemVariants}
                className={cn(
                  'flex items-start gap-3 px-5 py-4',
                  i >= 2 && 'sm:border-t sm:border-border/60',
                )}
              >
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-mint/30 bg-mint/10 text-mint">
                  <Check className="h-2.5 w-2.5" strokeWidth={3} />
                </span>
                <span className="text-[13.5px] leading-[1.55] text-foreground/85">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// FeatureCTABlock — final CTA on inner pages (centered, with optional trust ledger)
// ────────────────────────────────────────────────────────────────────────────

export function FeatureCTABlock({
  eyebrow,
  headlineLines,
  sub,
  primaryCta,
  secondaryCta,
  trust,
}: {
  eyebrow: string;
  headlineLines: [string, string];
  sub?: string;
  primaryCta: { label: string; href: string; shortcut?: string };
  secondaryCta?: { label: string; href: string };
  trust?: Array<{ value: string; label: string }>;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative isolate overflow-hidden py-24 lg:py-32">
      <BackgroundField variant="top-center" />
      <div className="relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[820px]"
        >
          <SectionHeader
            eyebrow={eyebrow}
            headlineLines={headlineLines}
            sub={sub}
            align="center"
          />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            <PrimaryCTA href={primaryCta.href} size="lg" shortcut={primaryCta.shortcut}>
              {primaryCta.label}
            </PrimaryCTA>
            {secondaryCta ? (
              <SecondaryCTA href={secondaryCta.href} size="lg">
                {secondaryCta.label}
              </SecondaryCTA>
            ) : null}
          </div>

          {trust && trust.length > 0 ? (
            <div className="mx-auto mt-10 w-full max-w-[680px] overflow-hidden rounded-md border border-border/60 bg-background/60 backdrop-blur">
              <div
                className={cn(
                  'grid divide-x divide-border/60',
                  trust.length === 4 ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-3',
                )}
              >
                {trust.map((item) => (
                  <div key={item.label} className="px-3 py-3 text-center">
                    <div className="font-display text-[1.05rem] font-semibold leading-none text-foreground">
                      {item.value}
                    </div>
                    <div className="mt-1.5 font-mono text-[9.5px] uppercase tracking-[0.18em] text-foreground/45">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// ComparisonBlock — Old way vs OzziOS way (centered)
// ────────────────────────────────────────────────────────────────────────────

export interface ComparisonItem {
  label: string;
}

export function ComparisonBlock({
  eyebrow,
  headlineLines,
  legacyLabel,
  legacyItems,
  modernLabel,
  modernItems,
}: {
  eyebrow: string;
  headlineLines: [string, string];
  legacyLabel: string;
  legacyItems: ComparisonItem[];
  modernLabel: string;
  modernItems: ComparisonItem[];
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative isolate overflow-hidden py-24 lg:py-32">
      <BackgroundField variant="top-center" />
      <div className="relative z-10 mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <SectionHeader eyebrow={eyebrow} headlineLines={headlineLines} align="center" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-4 md:grid-cols-2 lg:gap-5"
        >
          {/* Legacy column */}
          <div className="overflow-hidden rounded-xl border border-border/60 bg-background/85">
            <div className="border-b border-border/60 bg-muted/30 px-5 py-3">
              <SectionHeading label={legacyLabel} />
            </div>
            <ul className="divide-y divide-border/60">
              {legacyItems.map((item) => (
                <li key={item.label} className="flex items-center gap-3 px-5 py-3.5">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-destructive/30 bg-destructive/10 text-destructive">
                    <svg
                      className="h-2.5 w-2.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <line x1="6" y1="6" x2="18" y2="18" />
                      <line x1="18" y1="6" x2="6" y2="18" />
                    </svg>
                  </span>
                  <span className="text-[13px] text-muted-foreground">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Modern column */}
          <div className="overflow-hidden rounded-xl border border-signature/30 bg-[radial-gradient(circle_at_18%_12%,rgba(196,88,63,0.10),transparent_42%),linear-gradient(180deg,rgba(255,253,250,1),rgba(247,240,232,1))] shadow-[0_18px_50px_-26px_rgba(196,88,63,0.40)]">
            <div className="border-b border-signature/15 bg-signature/[0.06] px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-signature">
                  {modernLabel}
                </span>
                <span className="h-px flex-1 bg-signature/20" />
                <span className="inline-flex items-center gap-1 rounded-[5px] border border-signature/30 bg-signature/15 px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-signature">
                  <span className="h-1 w-1 rounded-full bg-signature" />
                  Recommended
                </span>
              </div>
            </div>
            <ul className="divide-y divide-signature/15">
              {modernItems.map((item) => (
                <li key={item.label} className="flex items-center gap-3 px-5 py-3.5">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-signature/30 bg-signature/15 text-signature">
                    <Check className="h-2.5 w-2.5" strokeWidth={3} />
                  </span>
                  <span className="text-[13px] font-medium text-foreground">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Re-export ArrowRight for convenience in pages that import from this file
export { ArrowRight };
