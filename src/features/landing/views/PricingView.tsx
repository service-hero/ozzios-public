import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, X, ChevronDown, ArrowRight, Zap, Users, Headphones } from 'lucide-react';
import { FeatureTooltip } from '@/components/ui/feature-tooltip';
import { cn } from '@/lib/utils';
import { CTASection } from '../components/CTASection';

interface PricingFeature {
  label: string;
  description: string;
}

interface PricingTier {
  name: string;
  /** Numeric monthly price, or null for custom/contact-sales pricing */
  price: number | null;
  /** Display string for usage line (or "Custom" for enterprise) */
  usage: string;
  description: string;
  features: PricingFeature[];
  cta: string;
  href: string;
  recommended: boolean;
  /** Renders the price slot as "Custom" / "Talk to sales" rather than $X/mo */
  custom?: boolean;
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
    name: 'Enterprise',
    price: null,
    usage: 'Custom AI credits',
    description: 'Multi-location teams and high-volume operations',
    custom: true,
    features: [
      { label: 'Everything in Pro', description: 'Includes every feature from the Pro plan — workflows, video, integrations, and more.' },
      { label: 'Unlimited team members', description: 'Bring your entire organization into one workspace. No per-seat limits, no surprises.' },
      { label: 'Unlimited workspaces', description: 'Run as many locations, brands, or business units as you need — each fully isolated.' },
      { label: 'Custom AI credit allocation', description: 'Negotiated capacity tailored to your workload. Burst credits available for peak seasons.' },
      { label: 'Email / SMS campaigns', description: 'Professional email and text campaigns at enterprise volume with deliverability guarantees.' },
      { label: 'Call center & voice ops', description: 'AI voice agents that answer, qualify, and route — with recording, scoring, and outbound tooling.' },
      { label: 'SSO & SAML', description: 'Enterprise-grade single sign-on with SAML 2.0. Provision users automatically via SCIM.' },
      { label: 'Custom integrations & API access', description: 'Dedicated integration engineering. We build the connectors your stack needs.' },
      { label: 'Dedicated success manager', description: 'A named OzziOS expert who knows your business, runs quarterly reviews, and optimizes your workflows.' },
      { label: 'Priority support & SLA', description: '24 / 7 priority support with a contractual response-time SLA. Talk to a human, not a queue.' },
      { label: 'Custom contracts & invoicing', description: 'Annual contracts, NET-30 / NET-60 invoicing, security questionnaires, and custom DPAs welcome.' },
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
      { name: 'App builder', basic: false, pro: true, enterprise: true },
      { name: 'Local rank', basic: false, pro: true, enterprise: true },
      { name: 'Claude Opus', basic: false, pro: true, enterprise: true },
      { name: 'Advanced automation nodes', basic: false, pro: true, enterprise: true },
    ],
  },
  {
    category: 'Communication',
    features: [
      { name: 'Email / SMS campaigns', basic: false, pro: false, enterprise: true },
      { name: 'Call center & voice ops', basic: false, pro: false, enterprise: true },
      { name: 'Outbound call tooling', basic: false, pro: false, enterprise: true },
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
    answer: 'Each plan includes a monthly AI credit allocation that covers all AI operations — writing content, analyzing data, scheduling posts, running workflows, and more. Credits are tracked automatically and reset at the start of each billing cycle. You can monitor your usage in real time from your account dashboard, and purchase additional credit packs anytime.',
  },
  {
    question: 'Can I change plans at any time?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. When upgrading, you\'ll get immediate access to the new plan\'s features and your billing will be prorated. When downgrading, the change takes effect at the start of your next billing cycle.',
  },
  {
    question: 'What happens if I run out of credits?',
    answer: 'If you use all your monthly AI credits before your billing cycle renews, your AI agents will pause until credits reset. You can purchase additional credit packs anytime or upgrade to a higher plan for more monthly credits.',
  },
  {
    question: 'Do you offer annual billing?',
    answer: 'Yes, we offer annual billing with a 17% discount on all plans. You can switch to annual billing during checkout or in your account settings.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Absolutely. There are no long-term contracts or cancellation fees. You can cancel your subscription at any time from your account settings. Your access continues until the end of your current billing period.',
  },
  {
    question: 'What\'s included in priority support?',
    answer: 'Priority support includes faster response times (under 4 hours), dedicated support channels, and access to our team of marketing automation specialists who can help optimize your workflows and agent configurations.',
  },
  {
    question: 'Do you offer custom plans for larger teams?',
    answer: 'Yes, for businesses with specific needs, we offer custom plans for larger teams with unlimited usage, custom integrations, dedicated infrastructure, and hands-on onboarding. Contact our sales team to discuss your requirements.',
  },
];

const valueProps = [
  {
    icon: Zap,
    title: 'Save 70%+ vs outsourcing',
    description: 'Replace expensive outsourcing and overhead with AI agents that work 24/7.',
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

export function PricingView() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ValuePropsBar />
      <PricingCards />
      <ComparisonTable />
      <PricingFAQ />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-medium text-signature uppercase tracking-[0.15em] mb-4">
            Pricing
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black tracking-tight mb-6">
            Simple, transparent
            <br />
            <span className="text-gray-400">pricing</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Stop overpaying for outsourced services. Get professional-grade
            automation at a fraction of the cost. No hidden fees, no surprises.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ValuePropsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {valueProps.map((prop) => (
            <div key={prop.title} className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-gray-200 mb-3">
                <prop.icon className="w-5 h-5 text-signature" />
              </div>
              <h3 className="text-sm font-semibold text-black mb-1">{prop.title}</h3>
              <p className="text-xs text-gray-500">{prop.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PricingCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8" ref={ref}>
        {/* Pricing cards */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className={cn(
                'relative flex h-full flex-col rounded-2xl p-6 transition-all duration-300',
                tier.recommended
                  ? 'border-2 border-signature bg-white'
                  : tier.custom
                    ? 'border-2 border-black bg-black text-white'
                    : 'border border-gray-200 bg-white hover:border-gray-300',
              )}
            >
              {tier.recommended ? (
                <div className="absolute -top-3 left-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-signature text-white">
                    Most Popular
                  </span>
                </div>
              ) : null}
              {tier.custom ? (
                <div className="absolute -top-3 left-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-signature/30 bg-signature px-3 py-1 text-xs font-medium text-white">
                    <span className="h-1 w-1 rounded-full bg-white" />
                    Enterprise
                  </span>
                </div>
              ) : null}

              {/* Tier header */}
              <div className="mb-4">
                <h3
                  className={cn(
                    'text-lg font-semibold',
                    tier.custom ? 'text-white' : 'text-black',
                  )}
                >
                  {tier.name}
                </h3>
                <p
                  className={cn(
                    'text-sm',
                    tier.custom ? 'text-white/65' : 'text-gray-500',
                  )}
                >
                  {tier.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-4">
                {tier.custom || tier.price === null ? (
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold tracking-tight text-white">
                      Custom
                    </span>
                    <span className="text-sm text-white/55">tailored to your stack</span>
                  </div>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-black tracking-tight">
                      {tier.price === 0 ? 'Free' : `$${tier.price.toLocaleString()}`}
                    </span>
                    {tier.price > 0 && (
                      <span className="text-sm text-gray-400">/mo</span>
                    )}
                  </div>
                )}
              </div>

              {/* Credit badge */}
              <div className="mb-6">
                <span
                  className={cn(
                    'inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border',
                    tier.custom
                      ? 'border-white/15 bg-white/10 text-white/85'
                      : 'border-gray-200 bg-gray-100 text-gray-700',
                  )}
                >
                  {tier.usage}
                </span>
              </div>

              {/* Features */}
              <div className="mb-6 space-y-2.5">
                {tier.features.map((feature, featureIndex) => {
                  const isEverything = feature.label.startsWith('Everything in');
                  return (
                    <div key={featureIndex} className="flex items-center gap-2.5">
                      {isEverything ? (
                        <Check
                          className={cn(
                            'w-4 h-4 shrink-0',
                            tier.custom ? 'text-signature' : 'text-signature',
                          )}
                        />
                      ) : (
                        <span
                          className={cn(
                            'w-4 h-4 shrink-0 flex items-center justify-center text-[11px] font-bold',
                            tier.custom ? 'text-white/45' : 'text-gray-400',
                          )}
                        >
                          +
                        </span>
                      )}
                      <span
                        className={cn(
                          'text-sm',
                          isEverything
                            ? tier.custom
                              ? 'font-medium text-white'
                              : 'font-medium text-black'
                            : tier.custom
                              ? 'text-white/80'
                              : 'text-gray-600',
                        )}
                      >
                        {feature.label}
                      </span>
                      <FeatureTooltip description={feature.description} />
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <a
                href={tier.href}
                className={cn(
                  'mt-auto flex items-center justify-center gap-2 w-full h-11 rounded-lg font-medium text-sm transition-all duration-200',
                  tier.recommended
                    ? 'bg-signature text-white hover:bg-signature/90'
                    : tier.custom
                      ? 'bg-white text-black hover:bg-white/92'
                      : 'bg-white text-black border border-gray-300 hover:bg-gray-50',
                )}
              >
                {tier.cta}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
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
          <p className="text-sm text-gray-400">
            Procurement, security review, or DPAs?{' '}
            <a
              href="mailto:sales@ozzios.com"
              className="text-signature hover:underline"
            >
              Talk to our enterprise team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ComparisonTable() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 bg-gray-50">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-black tracking-tight mb-4">
            Compare plans
          </h2>
          <p className="text-base text-gray-500 max-w-lg mx-auto">
            Find the perfect plan for your business. Every feature, side by side.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[640px]">
            {/* Header */}
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 pr-4 text-sm font-medium text-gray-500 w-[34%]">
                  Features
                </th>
                <th className="text-center py-4 px-3 text-sm font-semibold text-black w-[22%]">
                  Basic
                </th>
                <th className="text-center py-4 px-3 text-sm font-semibold text-signature w-[22%]">
                  Pro
                </th>
                <th className="text-center py-4 px-3 text-sm font-semibold text-black w-[22%]">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((category) => (
                <>
                  <tr key={`cat-${category.category}`}>
                    <td
                      colSpan={4}
                      className="pt-8 pb-3 text-xs font-medium text-gray-400 uppercase tracking-widest"
                    >
                      {category.category}
                    </td>
                  </tr>
                  {category.features.map((feature) => (
                    <tr
                      key={feature.name}
                      className="border-b border-gray-100"
                    >
                      <td className="py-3.5 pr-4 text-sm text-gray-700">
                        {feature.name}
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        <FeatureValue value={(feature as Record<string, boolean | string>).basic} />
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        <FeatureValue value={(feature as Record<string, boolean | string>).pro} />
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        <FeatureValue value={(feature as Record<string, boolean | string>).enterprise} />
                      </td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureValue({ value }: { value: boolean | string }) {
  if (typeof value === 'string') {
    return <span className="text-sm font-medium text-black">{value}</span>;
  }
  if (value) {
    return (
      <Check className="w-5 h-5 text-signature mx-auto" />
    );
  }
  return (
    <X className="w-5 h-5 text-gray-300 mx-auto" />
  );
}

function PricingFAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium text-signature uppercase tracking-[0.15em] mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black leading-tight tracking-tight mb-4">
            Pricing
            <br />
            <span className="text-gray-400">questions</span>
          </h2>
          <p className="text-base text-gray-500 max-w-md mx-auto">
            Everything you need to know about our plans and billing.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-0"
        >
          {pricingFaqs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                'border-b border-gray-100',
                index === 0 && 'border-t'
              )}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-4 py-6 text-left group"
              >
                <span
                  className={cn(
                    'text-base font-medium transition-colors duration-200',
                    openIndex === index
                      ? 'text-black'
                      : 'text-gray-700 group-hover:text-black'
                  )}
                >
                  {faq.question}
                </span>
                <div
                  className={cn(
                    'shrink-0 transition-transform duration-200',
                    openIndex === index && 'rotate-180'
                  )}
                >
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 transition-colors duration-200',
                      openIndex === index ? 'text-signature' : 'text-gray-400'
                    )}
                  />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6">
                      <div className="pl-0">
                        <div className="h-px w-8 bg-signature mb-4" />
                        <p className="text-[15px] leading-relaxed text-gray-500">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-3">Still have questions?</p>
          <a
            href="mailto:sales@ozzios.com"
            className="inline-flex items-center gap-2 text-[15px] font-medium text-black hover:text-signature transition-colors duration-200"
          >
            Contact our sales team
            <span className="text-signature">&rarr;</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
