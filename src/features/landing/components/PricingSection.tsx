import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FeatureTooltip } from '@/components/ui/feature-tooltip';

interface PricingFeature {
  label: string;
  description: string;
}

interface PricingTier {
  name: string;
  price: number;
  usage: string;
  description?: string;
  features: PricingFeature[];
  cta: string;
  href: string;
  recommended: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Basic',
    price: 49,
    usage: '1,000 AI credits/mo',
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
    usage: '5,000 AI credits/mo',
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
    name: 'Scale',
    price: 795,
    usage: '15,000 AI credits/mo',
    description: 'Messaging and voice ops for scaling teams',
    features: [
      { label: 'Everything in Pro', description: 'Includes every feature from the Pro plan — workflows, video, integrations, and more.' },
      { label: 'Up to 5 team members', description: 'Bring your whole team into one place — no more scattered tools or missed handoffs.' },
      { label: '5 workspaces', description: 'Run multiple locations or projects from one login — each fully separate with its own team and settings.' },
      { label: '15,000 AI credits', description: 'High-capacity AI for teams running campaigns, workflows, and automations at scale every day.' },
      { label: 'Email/SMS campaigns', description: 'Send professional email and text campaigns. Track opens, clicks, and conversions so you know what\'s working.' },
      { label: 'Call center & voice ops', description: 'Handle inbound calls with AI voice agents that answer, qualify, and route — then review recordings and AI-scored call quality.' },
      { label: 'Outbound call tooling', description: 'Let your AI agent make outbound calls on your behalf — for follow-ups, appointment reminders, and lead outreach at scale.' },
    ],
    cta: 'Get started',
    href: 'https://app.ozzios.com/sign-up?plan=starter',
    recommended: false,
  },
];

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pricing" className="relative overflow-hidden py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-x-0 top-24 h-80 bg-[radial-gradient(circle_at_top,rgba(196,88,63,0.1),transparent_58%)] blur-3xl" />
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-5xl"
        >
          <p className="mb-6 text-[0.72rem] font-medium uppercase tracking-[0.26em] text-foreground/45">
            Pricing
          </p>
          <h2 className="mb-6 text-[clamp(3rem,5.2vw,5.2rem)] font-display font-medium text-foreground tracking-[-0.06em] leading-[0.92]">
            Simple, transparent pricing
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            Stop overpaying for outsourced services. Get professional-grade automation at a fraction of the cost.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className={cn(
                'relative flex flex-col rounded-[2rem] p-8 transition-all duration-300',
                tier.recommended
                  ? 'border border-signature/40 bg-[linear-gradient(180deg,rgba(255,250,247,0.96),rgba(243,232,224,0.98))] shadow-[0_28px_80px_rgba(56,40,29,0.12)]'
                  : 'border border-white/80 bg-white/80 shadow-[0_20px_60px_rgba(56,40,29,0.08)] hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(56,40,29,0.12)]'
              )}
            >
              {tier.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-foreground px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-sm">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier header */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {tier.name}
                </h3>
                {tier.description && (
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                )}
              </div>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground tracking-tight">
                    {tier.price === 0 ? 'Free' : `$${tier.price.toLocaleString()}`}
                  </span>
                  {tier.price > 0 && (
                    <span className="text-sm text-muted-foreground">/mo</span>
                  )}
                </div>
              </div>

              {/* Credit badge */}
              <div className="mb-6">
                <span className="inline-flex items-center rounded-full border border-border/70 bg-[rgba(247,241,235,0.9)] px-3 py-1 text-xs font-medium text-muted-foreground">
                  {tier.usage}
                </span>
              </div>

              {/* Features */}
              <div className="space-y-2.5 mb-6">
                {tier.features.map((feature, featureIndex) => {
                  const isEverything = feature.label.startsWith('Everything in');
                  return (
                    <div key={featureIndex} className="flex items-center gap-2.5">
                      {isEverything ? (
                        <Check className="w-4 h-4 text-signature shrink-0" />
                      ) : (
                        <span className="w-4 h-4 shrink-0 flex items-center justify-center text-[11px] font-bold text-muted-foreground">+</span>
                      )}
                      <span className={`text-sm ${isEverything ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                        {feature.label}
                      </span>
                      <FeatureTooltip description={feature.description} />
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <div className="mt-auto pt-6">
                <a
                  href={tier.href}
                  className={cn(
                    'group flex h-12 w-full items-center justify-center gap-2 rounded-full font-medium text-[13px] transition-all duration-200',
                    tier.recommended
                      ? 'bg-foreground text-white hover:bg-foreground/92 shadow-[0_16px_40px_rgba(41,30,23,0.14)]'
                      : 'bg-transparent text-foreground border border-border/80 hover:bg-muted/50'
                  )}
                >
                  {tier.cta}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Need a custom plan for your larger team?{' '}
            <a href="mailto:sales@ozzios.com" className="text-signature hover:underline">
              Contact sales
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
