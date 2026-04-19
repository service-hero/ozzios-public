import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check, Plus } from 'lucide-react';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { FeatureTooltip } from '@/components/ui/feature-tooltip';
import { BackgroundField, EASE_OUT, Kbd, SectionHeader } from './_landing-primitives';

interface PricingFeature {
  label: string;
  description: string;
}

interface PricingTier {
  name: string;
  /** Numeric monthly price, or null for custom/contact-sales pricing */
  price: number | null;
  usage: string;
  description?: string;
  features: PricingFeature[];
  cta: string;
  href: string;
  recommended: boolean;
  /** Renders as Enterprise dark card with "Custom" price */
  custom?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Basic',
    price: 49,
    usage: '1,000 AI credits / mo',
    description: 'For lean teams getting started',
    features: [
      { label: '1 workspace member', description: 'Everything you need to run your business solo — focused and streamlined for one operator.' },
      { label: '1 workspace', description: 'A dedicated workspace with its own settings, channels, and inbox.' },
      { label: '1,000 AI credits', description: 'Enough AI capacity to get started with automation, content creation, and daily marketing tasks.' },
      { label: 'Workspace, channels & inbox', description: 'Your central hub for team communication, customer messages, and task management — all in one place.' },
      { label: 'Tasks', description: 'Organize your work with task management built right into your workspace.' },
      { label: 'Basic CRM', description: 'Track your contacts and deals without the complexity of expensive CRM tools.' },
      { label: 'Basic integrations', description: 'Connect the essential tools you use every day to keep your workflow moving.' },
      { label: 'Email support', description: 'Our team is here when you need help. Reach out anytime and get a real response within one business day.' },
    ],
    cta: 'Get started',
    href: 'https://app.ozzios.com/sign-up?plan=basic',
    recommended: false,
  },
  {
    name: 'Pro',
    price: 295,
    usage: '5,000 AI credits / mo',
    description: 'Workflows and premium AI tools',
    features: [
      { label: 'Up to 2 team members', description: 'Everything you need to run your business — with room for one extra hand when you need it.' },
      { label: '2 workspaces', description: 'Separate your projects or service areas into dedicated workspaces, each with its own settings.' },
      { label: '5,000 AI credits', description: 'Plenty of AI capacity for content creation, workflows, and daily marketing automation.' },
      { label: 'Social content planner', description: 'Stay consistent on social with AI-assisted planning and scheduling — without living in multiple tools.' },
      { label: 'Email builder & all integrations', description: 'Send professional emails and connect 40+ tools — Google, Meta, Shopify, WordPress, and more.' },
      { label: 'Forms & lead capture', description: 'Build smart lead forms and route every submission into the right follow-up workflow automatically.' },
      { label: 'Workflow builder & advanced CRM', description: 'Set up automations that run forever and know exactly where every lead stands.' },
      { label: 'Chat widget', description: 'Capture leads with an AI-powered chat widget on your site that answers questions and qualifies visitors 24/7.' },
      { label: 'App builder & dashboards', description: 'Let Ozzi build custom apps, dashboards, and internal tools — no developer needed.' },
      { label: 'Local rank & Claude Opus', description: 'Track your Google Maps rankings and access the most powerful AI model for complex tasks.' },
    ],
    cta: 'Get started',
    href: 'https://app.ozzios.com/sign-up?plan=solo',
    recommended: true,
  },
  {
    name: 'Enterprise',
    price: null,
    usage: 'Custom AI credits',
    description: 'Multi-location teams and high-volume operations',
    custom: true,
    features: [
      { label: 'Everything in Pro', description: 'Every Pro feature — workflows, video, integrations, and more.' },
      { label: 'Unlimited team members', description: 'Bring your entire organization. No per-seat limits, no surprises.' },
      { label: 'Unlimited workspaces', description: 'As many locations, brands, or business units as you need — each fully isolated.' },
      { label: 'Custom AI credit allocation', description: 'Negotiated capacity tailored to your workload. Burst credits for peak seasons.' },
      { label: 'Email / SMS campaigns', description: 'Enterprise-volume sends with deliverability guarantees.' },
      { label: 'Call center & voice ops', description: 'AI voice agents with recording, scoring, and outbound tooling.' },
      { label: 'SSO, SAML & SCIM', description: 'Enterprise SSO with automated user provisioning.' },
      { label: 'Custom integrations', description: 'Dedicated engineering builds the connectors your stack needs.' },
      { label: 'Dedicated success manager', description: 'A named OzziOS expert running quarterly reviews and optimizations.' },
      { label: 'Priority support & SLA', description: '24 / 7 priority support with a contractual response-time SLA.' },
    ],
    cta: 'Talk to sales',
    href: 'mailto:sales@ozzios.com?subject=Enterprise%20pricing',
    recommended: false,
  },
];

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pricing" className="relative isolate overflow-hidden py-28 lg:py-36">
      <BackgroundField variant="top-center" />

      <div className="relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-14 lg:mb-20"
        >
          <SectionHeader
            eyebrow="Pricing"
            headlineLines={['Simple,', 'transparent pricing']}
            sub="Stop overpaying for outsourced services. Get professional-grade automation at a fraction of the cost."
          />
        </motion.div>

        {/* Pricing tiers */}
        <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease: EASE_OUT }}
              className="relative flex"
            >
              <PricingCard tier={tier} />
            </motion.div>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12"
        >
          <div className="flex flex-col items-center justify-between gap-4 rounded-md border border-border/60 bg-background/60 px-5 py-4 backdrop-blur sm:flex-row">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border/60 bg-background text-foreground/65">
                <Plus className="h-3.5 w-3.5" />
              </span>
              <div>
                <p className="text-[13px] font-medium text-foreground">
                  Need a custom plan for a larger team?
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/45">
                  Multi-location, white-label, and enterprise terms available
                </p>
              </div>
            </div>
            <a
              href="mailto:sales@ozzios.com"
              className="group/c inline-flex h-9 items-center gap-1.5 rounded-md border border-border/70 bg-background px-4 text-[12.5px] font-medium text-foreground transition-colors hover:bg-muted/40"
            >
              Contact sales
              <ArrowRight className="h-3 w-3 transition-transform group-hover/c:translate-x-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Pricing card
// ────────────────────────────────────────────────────────────────────────────

function PricingCard({ tier }: { tier: PricingTier }) {
  // Three distinct visual treatments — Pro is the clear hero
  //   - Basic       : light hairline card (neutral)
  //   - Pro (★)     : dark filled ink card (the conversion target)
  //   - Enterprise  : premium light card with signature radial wash + bordered CTA
  const isPro = tier.recommended;
  const isEnterprise = tier.custom;

  return (
    <div
      className={cn(
        'relative flex w-full flex-col rounded-xl border transition-all duration-300',
        isPro
          ? 'border-foreground/85 bg-foreground text-background shadow-[0_28px_70px_-26px_rgba(34,27,22,0.55)] lg:scale-[1.02]'
          : isEnterprise
            ? 'border-signature/30 bg-[radial-gradient(circle_at_18%_12%,rgba(196,88,63,0.10),transparent_42%),linear-gradient(180deg,rgba(255,253,250,1),rgba(247,240,232,1))] shadow-[0_20px_60px_-26px_rgba(196,88,63,0.40)] hover:-translate-y-0.5'
            : 'border-border/60 bg-background shadow-[0_12px_40px_-22px_rgba(34,27,22,0.20)] hover:-translate-y-0.5 hover:border-border hover:shadow-[0_22px_50px_-22px_rgba(34,27,22,0.32)]',
      )}
    >
      {/* Top badge */}
      {isPro ? (
        <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 rounded-[5px] border border-signature/30 bg-signature px-2 py-0.5 font-mono text-[9.5px] font-semibold uppercase tracking-wider text-white shadow-[0_8px_22px_-10px_rgba(196,88,63,0.6)]">
            <span className="h-1 w-1 rounded-full bg-white" />
            Most popular
          </span>
        </div>
      ) : null}
      {isEnterprise ? (
        <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 rounded-[5px] border border-foreground/15 bg-background px-2 py-0.5 font-mono text-[9.5px] font-semibold uppercase tracking-wider text-foreground/80 shadow-[0_4px_12px_-4px_rgba(34,27,22,0.18)]">
            <span className="h-1 w-1 rounded-full bg-signature" />
            Enterprise
          </span>
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-6 lg:p-7">
        {/* Tier header */}
        <div className="mb-4">
          <h3
            className={cn(
              'text-[15px] font-semibold',
              isPro ? 'text-background' : 'text-foreground',
            )}
          >
            {tier.name}
          </h3>
          {tier.description ? (
            <p
              className={cn(
                'mt-1 text-[12.5px] leading-[1.5]',
                isPro ? 'text-background/65' : 'text-muted-foreground',
              )}
            >
              {tier.description}
            </p>
          ) : null}
        </div>

        {/* Price */}
        <div className="mb-4 flex items-baseline gap-2">
          {isEnterprise || tier.price === null ? (
            <>
              <span className="font-display text-[2.5rem] font-semibold leading-none tracking-[-0.04em] text-foreground">
                Custom
              </span>
              <span className="font-mono text-[10.5px] uppercase tracking-wider text-foreground/55">
                tailored to you
              </span>
            </>
          ) : (
            <>
              <span
                className={cn(
                  'font-display text-[2.5rem] font-semibold leading-none tabular-nums tracking-[-0.04em]',
                  isPro ? 'text-background' : 'text-foreground',
                )}
              >
                {tier.price === 0 ? 'Free' : `$${tier.price.toLocaleString()}`}
              </span>
              {tier.price && tier.price > 0 ? (
                <span
                  className={cn(
                    'font-mono text-[11px] uppercase tracking-wider',
                    isPro ? 'text-background/55' : 'text-foreground/45',
                  )}
                >
                  /mo
                </span>
              ) : null}
            </>
          )}
        </div>

        {/* Credit badge */}
        <div className="mb-5">
          <span
            className={cn(
              'inline-flex items-center gap-1.5 rounded-[5px] border px-2 py-0.5 font-mono text-[9.5px] font-semibold uppercase tracking-wider',
              isPro
                ? 'border-white/15 bg-white/10 text-background/85'
                : isEnterprise
                  ? 'border-signature/25 bg-signature/10 text-signature'
                  : 'border-border/60 bg-muted text-foreground/70',
            )}
          >
            <span
              className={cn(
                'h-1 w-1 rounded-full',
                isPro ? 'bg-signature' : isEnterprise ? 'bg-signature' : 'bg-foreground/40',
              )}
            />
            {tier.usage}
          </span>
        </div>

        {/* Features header */}
        <div className="mb-3">
          <div className="flex items-center gap-2">
            <span
              className={cn(
                'font-mono text-[10px] uppercase tracking-[0.22em]',
                isPro ? 'text-background/55' : 'text-foreground/40',
              )}
            >
              Included
            </span>
            <span
              className={cn(
                'h-px flex-1',
                isPro ? 'bg-white/15' : isEnterprise ? 'bg-signature/20' : 'bg-border/50',
              )}
            />
          </div>
        </div>

        {/* Features */}
        <div className="space-y-2">
          {tier.features.map((feature, i) => {
            const isEverything = feature.label.startsWith('Everything in');
            return (
              <div key={i} className="flex items-center gap-2.5">
                <span
                  className={cn(
                    'flex h-4 w-4 shrink-0 items-center justify-center rounded-full border',
                    isEverything
                      ? isPro
                        ? 'border-signature/50 bg-signature/20'
                        : 'border-signature/30 bg-signature/10'
                      : isPro
                        ? 'border-white/15 bg-white/5'
                        : 'border-border/60 bg-background',
                  )}
                >
                  {isEverything ? (
                    <Check className="h-2.5 w-2.5 text-signature" strokeWidth={3} />
                  ) : (
                    <Plus
                      className={cn(
                        'h-2 w-2',
                        isPro ? 'text-background/55' : 'text-foreground/45',
                      )}
                      strokeWidth={3}
                    />
                  )}
                </span>
                <span
                  className={cn(
                    'text-[12.5px] leading-[1.45]',
                    isEverything
                      ? isPro
                        ? 'font-medium text-background'
                        : 'font-medium text-foreground'
                      : isPro
                        ? 'text-background/80'
                        : 'text-muted-foreground',
                  )}
                >
                  {feature.label}
                </span>
                <FeatureTooltip description={feature.description} />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-auto pt-6">
          <a
            href={tier.href}
            className={cn(
              'group/cta relative flex h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-md text-[13px] font-medium transition-all duration-200 active:translate-y-px',
              isPro
                ? 'bg-background text-foreground hover:bg-background/92 shadow-[0_14px_30px_-12px_rgba(0,0,0,0.4)]'
                : isEnterprise
                  ? 'bg-foreground text-background hover:bg-[#1a1410] shadow-[0_14px_30px_-12px_rgba(34,27,22,0.4)]'
                  : 'border border-border/70 bg-background text-foreground hover:border-border hover:bg-muted/40',
            )}
          >
            {tier.cta}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-0.5" />
            {isPro ? <Kbd className="ml-1 h-[18px] min-w-[18px]">S</Kbd> : null}
          </a>
        </div>
      </div>
    </div>
  );
}
