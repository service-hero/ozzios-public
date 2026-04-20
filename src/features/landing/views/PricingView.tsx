import { AnimatePresence, motion, useInView } from 'framer-motion';
import { ArrowRight, Check, Headphones, Plus, Users, X, Zap, type LucideIcon } from 'lucide-react';
import { useRef, useState } from 'react';
import { FeatureTooltip } from '@/components/ui/feature-tooltip';
import { cn } from '@/lib/utils';
import { CTASection } from '../components/CTASection';
import {
  BackgroundField,
  EASE_OUT,
  Kbd,
  SectionHeader,
  SectionHeading,
} from '../components/_landing-primitives';

// ────────────────────────────────────────────────────────────────────────────
// Types
// ────────────────────────────────────────────────────────────────────────────

interface PricingFeature {
  label: string;
  description: string;
}

interface PricingTier {
  name: string;
  /** Numeric monthly price, or null for custom/contact-sales pricing */
  price: number | null;
  usage: string;
  description: string;
  features: PricingFeature[];
  cta: string;
  href: string;
  recommended: boolean;
  /** Renders as Enterprise card with "Custom" price */
  custom?: boolean;
}

// ────────────────────────────────────────────────────────────────────────────
// Data
// ────────────────────────────────────────────────────────────────────────────

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
    description: 'Workflows, voice ops, and premium AI tools',
    features: [
      { label: 'Up to 2 team members', description: 'Everything you need to run your business — with room for one extra hand when you need it.' },
      { label: '2 workspaces', description: 'Separate your projects or service areas into dedicated workspaces, each with its own settings.' },
      { label: '5,000 AI credits', description: 'Plenty of AI capacity for content creation, workflows, and daily marketing automation.' },
      { label: 'Social planner & email builder', description: 'AI-assisted social planning + a visual email builder so you can ship campaigns without designers.' },
      { label: 'All integrations & forms', description: 'Connect 40+ tools — Google, Meta, Shopify, WordPress. Build smart forms with workflow triggers.' },
      { label: 'Workflow builder & advanced CRM', description: 'Set up automations that run forever and know exactly where every lead stands.' },
      { label: 'Chat widget', description: 'AI-powered chat widget on your site that answers questions, qualifies visitors, and books meetings 24 / 7.' },
      { label: 'Email / SMS campaigns', description: 'Send professional email and text campaigns. Track opens, clicks, and conversions in one dashboard.' },
      { label: 'Call center & voice ops · 25 min / mo', description: 'AI voice agents that answer, qualify, and route calls. 25 free minutes / month, then $0.25 / min overage.' },
      { label: 'Outbound call tooling', description: 'Let your AI agent make outbound calls for follow-ups, appointment reminders, and lead outreach.' },
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
      { label: 'Everything in Pro', description: 'Every Pro feature — campaigns, voice ops, workflows, integrations, and more.' },
      { label: 'Unlimited team members', description: 'Bring your entire organization. No per-seat limits, no surprises.' },
      { label: 'Unlimited workspaces', description: 'As many locations, brands, or business units as you need — each fully isolated.' },
      { label: 'Custom AI credit allocation', description: 'Negotiated capacity tailored to your workload. Burst credits for peak seasons.' },
      { label: 'High-volume voice operations', description: 'Higher monthly minute pools and lower per-minute overage rates for call-center scale.' },
      { label: 'SSO, SAML & SCIM', description: 'Enterprise SSO with SAML 2.0 and automated user provisioning via SCIM.' },
      { label: 'Custom integrations & API access', description: 'Dedicated engineering builds the connectors your stack needs. Direct API access.' },
      { label: 'Dedicated success manager', description: 'A named OzziOS expert running quarterly reviews and optimizations.' },
      { label: '24 / 7 priority support & SLA', description: 'Round-the-clock priority support with a contractual response-time SLA.' },
      { label: 'Custom contracts & invoicing', description: 'Annual contracts, NET-30 / NET-60 invoicing, security questionnaires, custom DPAs.' },
    ],
    cta: 'Talk to sales',
    href: 'mailto:sales@ozzios.com?subject=Enterprise%20pricing',
    recommended: false,
  },
];

const comparisonFeatures = [
  {
    category: 'Limits',
    features: [
      { name: 'Team members', basic: '1', pro: '2', enterprise: 'Unlimited' },
      { name: 'Workspaces', basic: '1', pro: '2', enterprise: 'Unlimited' },
      { name: 'Monthly AI credits', basic: '1,000', pro: '5,000', enterprise: 'Custom' },
    ],
  },
  {
    category: 'Core',
    features: [
      { name: 'Workspace, channels & inbox', basic: true, pro: true, enterprise: true },
      { name: 'Tasks', basic: true, pro: true, enterprise: true },
      { name: 'Basic CRM', basic: true, pro: true, enterprise: true },
      { name: 'Basic integrations', basic: true, pro: true, enterprise: true },
    ],
  },
  {
    category: 'Pro',
    features: [
      { name: 'Social planner', basic: false, pro: true, enterprise: true },
      { name: 'Email builder', basic: false, pro: true, enterprise: true },
      { name: 'All integrations', basic: false, pro: true, enterprise: true },
      { name: 'Forms builder', basic: false, pro: true, enterprise: true },
      { name: 'Workflow builder', basic: false, pro: true, enterprise: true },
      { name: 'Advanced CRM', basic: false, pro: true, enterprise: true },
      { name: 'Chat widget', basic: false, pro: true, enterprise: true },
      { name: 'Huddles', basic: false, pro: true, enterprise: true },
      { name: 'App builder & dashboards', basic: false, pro: true, enterprise: true },
      { name: 'Documents & e-sign', basic: false, pro: true, enterprise: true },
      { name: 'Video kit', basic: false, pro: true, enterprise: true },
      { name: 'Coding sandbox', basic: false, pro: true, enterprise: true },
      { name: 'Local rank', basic: false, pro: true, enterprise: true },
      { name: 'Claude Opus', basic: false, pro: true, enterprise: true },
      { name: 'Advanced automation nodes', basic: false, pro: true, enterprise: true },
    ],
  },
  {
    category: 'Communication & voice',
    features: [
      { name: 'Email / SMS campaigns', basic: false, pro: true, enterprise: true },
      { name: 'Call center & voice ops', basic: false, pro: true, enterprise: true },
      { name: 'Outbound call tooling', basic: false, pro: true, enterprise: true },
      { name: 'Voice minutes included', basic: '0', pro: '25 / mo', enterprise: 'Custom' },
      { name: 'Voice overage rate', basic: '—', pro: '$0.25 / min', enterprise: 'Negotiated' },
    ],
  },
  {
    category: 'Enterprise',
    features: [
      { name: 'SSO & SAML', basic: false, pro: false, enterprise: true },
      { name: 'SCIM provisioning', basic: false, pro: false, enterprise: true },
      { name: 'Custom integrations & API access', basic: false, pro: false, enterprise: true },
      { name: 'Dedicated success manager', basic: false, pro: false, enterprise: true },
      { name: 'Custom contracts & invoicing', basic: false, pro: false, enterprise: true },
      { name: 'High-volume voice ops', basic: false, pro: false, enterprise: true },
    ],
  },
  {
    category: 'Support',
    features: [
      { name: 'Email support', basic: true, pro: true, enterprise: true },
      { name: '24 / 7 priority support', basic: false, pro: false, enterprise: true },
      { name: 'Contractual SLA', basic: false, pro: false, enterprise: true },
    ],
  },
];

const pricingFaqs = [
  {
    question: 'How does usage-based pricing work?',
    answer:
      'Each plan includes a monthly AI credit allocation that covers all AI operations — writing content, analyzing data, scheduling posts, running workflows, and more. Credits are tracked automatically and reset at the start of each billing cycle. You can monitor your usage in real time from your account dashboard, and purchase additional credit packs anytime.',
  },
  {
    question: 'Can I change plans at any time?',
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to the new plan's features and your billing will be prorated. When downgrading, the change takes effect at the start of your next billing cycle.",
  },
  {
    question: 'What happens if I run out of credits?',
    answer:
      'If you use all your monthly AI credits before your billing cycle renews, your AI agents will pause until credits reset. You can purchase additional credit packs anytime or upgrade to a higher plan for more monthly credits.',
  },
  {
    question: 'Do you offer annual billing?',
    answer:
      'Yes, we offer annual billing with a 17% discount on all plans. You can switch to annual billing during checkout or in your account settings.',
  },
  {
    question: 'Can I cancel anytime?',
    answer:
      'Absolutely. There are no long-term contracts or cancellation fees. You can cancel your subscription at any time from your account settings. Your access continues until the end of your current billing period.',
  },
  {
    question: "What's included in priority support?",
    answer:
      '24 / 7 priority support is included with Enterprise plans. You get faster response times (under 4 hours), dedicated support channels, and access to our team of marketing automation specialists who can help optimize your workflows and agent configurations.',
  },
  {
    question: 'Do you offer custom plans for larger teams?',
    answer:
      'Yes — Enterprise plans cover unlimited team members and workspaces with custom AI credit allocations, dedicated infrastructure, SSO, custom integrations, and hands-on onboarding. Contact our sales team to discuss your requirements.',
  },
];

const valueProps: Array<{ icon: LucideIcon; title: string; description: string }> = [
  {
    icon: Zap,
    title: 'Save 70%+ vs outsourcing',
    description: 'Replace expensive outsourcing and overhead with AI agents that work 24 / 7.',
  },
  {
    icon: Users,
    title: 'Scale without hiring',
    description: 'Add AI agents instead of employees. No training or onboarding needed.',
  },
  {
    icon: Headphones,
    title: 'Expert support',
    description: 'Our team helps you get the most out of every AI agent and workflow.',
  },
];

// ────────────────────────────────────────────────────────────────────────────
// Main view
// ────────────────────────────────────────────────────────────────────────────

export function PricingView() {
  return (
    <>
      <HeroSection />
      <ValuePropsBar />
      <PricingCards />
      <ComparisonTable />
      <PricingFAQ />
      <CTASection />
    </>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Hero
// ────────────────────────────────────────────────────────────────────────────

function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative isolate overflow-hidden pb-12 pt-28 sm:pt-32 lg:pb-16 lg:pt-36">
      <BackgroundField variant="top-center" />
      <div className="relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="mx-auto max-w-[820px]"
        >
          <SectionHeader
            eyebrow="Pricing"
            headlineLines={['Simple,', 'transparent pricing']}
            sub="Stop overpaying for outsourced services. Get professional-grade automation at a fraction of the cost. No hidden fees, no surprises."
            align="center"
          />
        </motion.div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Value props ledger
// ────────────────────────────────────────────────────────────────────────────

function ValuePropsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-8 lg:py-12">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="overflow-hidden rounded-xl border border-border/60 bg-background/60 backdrop-blur"
        >
          <div className="grid grid-cols-1 divide-y divide-border/60 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {valueProps.map((prop) => {
              const Icon = prop.icon;
              return (
                <div key={prop.title} className="flex items-start gap-3 px-5 py-5">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border/60 bg-background text-foreground/70">
                    <Icon className="h-4 w-4 text-signature" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[13.5px] font-semibold text-foreground">{prop.title}</h3>
                    <p className="mt-1 text-[12px] leading-[1.5] text-muted-foreground">
                      {prop.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Pricing cards (matches homepage PricingSection 1:1)
// ────────────────────────────────────────────────────────────────────────────

function PricingCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10" ref={ref}>
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
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
          <div className="mx-auto flex max-w-[1180px] flex-col items-center justify-between gap-4 rounded-md border border-border/60 bg-background/60 px-5 py-4 backdrop-blur sm:flex-row">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border/60 bg-background text-foreground/65">
                <Plus className="h-3.5 w-3.5" />
              </span>
              <div>
                <p className="text-[13px] font-medium text-foreground">
                  Procurement, security review, or DPAs?
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
              Talk to enterprise team
              <ArrowRight className="h-3 w-3 transition-transform group-hover/c:translate-x-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Pricing card (identical to homepage PricingSection card)
// ────────────────────────────────────────────────────────────────────────────

function PricingCard({ tier }: { tier: PricingTier }) {
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
          <p
            className={cn(
              'mt-1 text-[12.5px] leading-[1.5]',
              isPro ? 'text-background/65' : 'text-muted-foreground',
            )}
          >
            {tier.description}
          </p>
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

// ────────────────────────────────────────────────────────────────────────────
// Comparison table — restyled in warm tokens
// ────────────────────────────────────────────────────────────────────────────

function ComparisonTable() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative isolate overflow-hidden border-t border-border/50 py-24 lg:py-32">
      <BackgroundField variant="top-right" />
      <div className="relative z-10 mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="mb-12 lg:mb-14"
        >
          <SectionHeader
            eyebrow="Compare plans"
            headlineLines={['Every feature,', 'side by side.']}
            sub="Find the perfect plan for your business."
            align="center"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE_OUT }}
          className="overflow-hidden rounded-xl border border-border/60 bg-background"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              {/* Header */}
              <thead>
                <tr className="border-b border-border/60 bg-muted/30">
                  <th className="w-[34%] px-5 py-4 text-left">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/45">
                      Features
                    </span>
                  </th>
                  <th className="w-[22%] px-3 py-4 text-center">
                    <span className="text-[13px] font-semibold text-foreground">Basic</span>
                  </th>
                  <th className="w-[22%] px-3 py-4 text-center">
                    <span className="inline-flex items-center gap-1.5 rounded-[5px] bg-signature/10 px-2 py-0.5 text-[13px] font-semibold text-signature">
                      <span className="h-1 w-1 rounded-full bg-signature" />
                      Pro
                    </span>
                  </th>
                  <th className="w-[22%] px-3 py-4 text-center">
                    <span className="text-[13px] font-semibold text-foreground">Enterprise</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((category) => (
                  <ComparisonGroup key={category.category} group={category} />
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ComparisonGroup({ group }: { group: (typeof comparisonFeatures)[number] }) {
  return (
    <>
      <tr>
        <td colSpan={4} className="border-t border-border/60 bg-muted/15 px-5 py-3">
          <SectionHeading label={group.category} />
        </td>
      </tr>
      {group.features.map((feature) => (
        <tr key={feature.name} className="border-t border-border/40 transition-colors hover:bg-muted/15">
          <td className="px-5 py-3.5 text-[13px] text-foreground/85">{feature.name}</td>
          <td className="px-3 py-3.5 text-center">
            <FeatureValue value={(feature as Record<string, boolean | string>).basic} />
          </td>
          <td className="bg-signature/[0.04] px-3 py-3.5 text-center">
            <FeatureValue value={(feature as Record<string, boolean | string>).pro} highlight />
          </td>
          <td className="px-3 py-3.5 text-center">
            <FeatureValue value={(feature as Record<string, boolean | string>).enterprise} />
          </td>
        </tr>
      ))}
    </>
  );
}

function FeatureValue({ value, highlight = false }: { value: boolean | string; highlight?: boolean }) {
  if (typeof value === 'string') {
    return (
      <span
        className={cn(
          'font-mono text-[11.5px] font-semibold tabular-nums',
          highlight ? 'text-signature' : 'text-foreground/85',
        )}
      >
        {value}
      </span>
    );
  }
  if (value) {
    return (
      <span
        className={cn(
          'inline-flex h-5 w-5 items-center justify-center rounded-full border',
          highlight
            ? 'border-signature/40 bg-signature/15 text-signature'
            : 'border-mint/30 bg-mint/10 text-mint',
        )}
      >
        <Check className="h-2.5 w-2.5" strokeWidth={3} />
      </span>
    );
  }
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-border/60 bg-background text-foreground/30">
      <X className="h-2.5 w-2.5" strokeWidth={2.5} />
    </span>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// FAQ — matches homepage FAQSection design
// ────────────────────────────────────────────────────────────────────────────

function PricingFAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative isolate overflow-hidden border-t border-border/50 py-24 lg:py-32">
      <BackgroundField variant="top-left" />
      <div className="relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* Left: header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
            className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start"
          >
            <SectionHeader
              eyebrow="Common questions"
              headlineLines={['Pricing', 'questions, answered.']}
              sub="Everything you need to know about our plans, billing, and contracts."
            />

            <div className="mt-8 inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-foreground/45">
              <Kbd className="h-[18px] min-w-[18px] text-[10px]">/</Kbd>
              Press to search the docs
            </div>
          </motion.div>

          {/* Right: FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE_OUT }}
            className="lg:col-span-7"
          >
            <div className="overflow-hidden rounded-xl border border-border/60 bg-background/85 shadow-[0_18px_50px_-26px_rgba(34,27,22,0.30)]">
              {pricingFaqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  index={index + 1}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                  isLast={index === pricingFaqs.length - 1}
                />
              ))}
            </div>

            {/* Contact callout */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 flex items-center justify-between gap-4 rounded-md border border-border/60 bg-background/60 px-5 py-4"
            >
              <p className="text-[13px] text-muted-foreground">
                Still have questions?
              </p>
              <a
                href="mailto:sales@ozzios.com"
                className="group/c inline-flex items-center gap-1.5 text-[13px] font-medium text-foreground transition-colors hover:text-signature"
              >
                <span className="relative">
                  Contact our sales team
                  <span className="absolute -bottom-px left-0 h-px w-0 bg-signature transition-all duration-200 group-hover/c:w-full" />
                </span>
                <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover/c:translate-x-0.5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  index,
  question,
  answer,
  isOpen,
  onToggle,
  isLast,
}: {
  index: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  isLast: boolean;
}) {
  return (
    <div
      className={cn(
        'group/q border-b border-border/60 transition-colors',
        isLast && 'border-b-0',
        isOpen && 'bg-muted/20',
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-start gap-4 px-5 py-5 text-left transition-colors hover:bg-muted/15 sm:px-6 sm:py-6"
      >
        <span
          className={cn(
            'mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border font-mono text-[10px] font-semibold tabular-nums transition-colors',
            isOpen
              ? 'border-signature/30 bg-signature/10 text-signature'
              : 'border-border/60 bg-background text-foreground/55',
          )}
        >
          {String(index).padStart(2, '0')}
        </span>

        <span
          className={cn(
            'flex-1 text-[14.5px] font-medium leading-[1.5] transition-colors sm:text-[15.5px]',
            isOpen ? 'text-foreground' : 'text-foreground/85 group-hover/q:text-foreground',
          )}
        >
          {question}
        </span>

        <span
          className={cn(
            'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border transition-all duration-200',
            isOpen
              ? 'rotate-45 border-signature/30 bg-signature/10 text-signature'
              : 'border-border/60 text-foreground/55 group-hover/q:border-foreground/25 group-hover/q:text-foreground',
          )}
        >
          <Plus className="h-3.5 w-3.5" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-6 pl-[3.5rem] sm:px-6 sm:pl-[4rem]">
              <p className="max-w-[68ch] text-[14px] leading-[1.65] text-muted-foreground">
                {answer}
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
