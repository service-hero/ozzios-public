import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, X, ChevronDown, ArrowRight, Zap, Shield, Users, Headphones } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CTASection } from '../components/CTASection';

const pricingTiers = [
  {
    name: 'Free',
    tagline: 'Try the basics',
    price: 0,
    description: 'Explore core features with no commitment.',
    features: [
      '1 workspace member',
      '50 AI credits/month',
      'Workspace, channels & inbox',
      'Tasks',
      'Basic CRM',
      'Basic integrations',
    ],
    cta: 'Get started free',
    href: 'https://app.ozzios.com/sign-up?plan=free',
    recommended: false,
  },
  {
    name: 'Solo',
    tagline: 'Get started solo',
    price: 197,
    description: 'For solo operators ready to automate their marketing.',
    features: [
      'Up to 2 team members',
      '500 AI credits/month',
      'Social planner',
      'Blog tools',
      'Email builder',
      'All integrations',
      'Email support',
    ],
    cta: 'Start free trial',
    href: 'https://app.ozzios.com/sign-up?plan=solo',
    recommended: false,
  },
  {
    name: 'Starter',
    tagline: 'Fire your freelancers',
    price: 490,
    description: 'Perfect for small teams ready to automate their marketing basics.',
    features: [
      'Up to 5 team members',
      '1,000 AI credits/month',
      'Everything in Solo, plus:',
      'Email/SMS campaigns',
      'Forms builder',
      'Documents & e-sign',
      'Workflow builder',
      'Advanced CRM',
    ],
    cta: 'Get started',
    href: 'https://app.ozzios.com/sign-up?plan=starter',
    recommended: false,
  },
  {
    name: 'Professional',
    tagline: 'Replace your agency',
    price: 990,
    description: 'Everything you need to run marketing like a full-service agency.',
    features: [
      'Up to 15 team members',
      '2,000 AI credits/month',
      'Everything in Starter, plus:',
      'Client portal & chat widget',
      'Video kit',
      'Code sandbox',
      'Local rank',
      'Advanced automation nodes',
      'Priority support',
    ],
    cta: 'Get started',
    href: 'https://app.ozzios.com/sign-up?plan=professional',
    recommended: true,
  },
  {
    name: 'Business',
    tagline: 'Full marketing department',
    price: 1995,
    description: 'For growing businesses that need enterprise-level marketing power.',
    features: [
      'Up to 50 team members',
      '10,000 AI credits/month',
      'Everything in Professional, plus:',
      'Call center & voice ops',
      'Outbound call tooling',
      'High-volume operations',
      'Dedicated success manager',
      'SLA & phone support',
    ],
    cta: 'Get started',
    href: 'https://app.ozzios.com/sign-up?plan=business',
    recommended: false,
  },
];

const comparisonFeatures = [
  {
    category: 'Limits',
    features: [
      { name: 'Team members', free: '1', solo: '2', starter: '5', professional: '15', business: '50' },
      { name: 'Workspaces', free: '1', solo: '1', starter: '1', professional: '5', business: '15' },
      { name: 'AI credits/month', free: '50', solo: '500', starter: '1,000', professional: '2,000', business: '10,000' },
    ],
  },
  {
    category: 'Core (Free)',
    features: [
      { name: 'Workspace, channels & inbox', free: true, solo: true, starter: true, professional: true, business: true },
      { name: 'Tasks', free: true, solo: true, starter: true, professional: true, business: true },
      { name: 'Basic CRM', free: true, solo: true, starter: true, professional: true, business: true },
      { name: 'Basic integrations', free: true, solo: true, starter: true, professional: true, business: true },
    ],
  },
  {
    category: 'Solo',
    features: [
      { name: 'Social planner', free: false, solo: true, starter: true, professional: true, business: true },
      { name: 'Blog tools', free: false, solo: true, starter: true, professional: true, business: true },
      { name: 'Email builder', free: false, solo: true, starter: true, professional: true, business: true },
      { name: 'All integrations', free: false, solo: true, starter: true, professional: true, business: true },
    ],
  },
  {
    category: 'Starter',
    features: [
      { name: 'Email/SMS campaigns', free: false, solo: false, starter: true, professional: true, business: true },
      { name: 'Forms builder', free: false, solo: false, starter: true, professional: true, business: true },
      { name: 'Documents & e-sign', free: false, solo: false, starter: true, professional: true, business: true },
      { name: 'Workflow builder', free: false, solo: false, starter: true, professional: true, business: true },
      { name: 'Advanced CRM', free: false, solo: false, starter: true, professional: true, business: true },
    ],
  },
  {
    category: 'Professional',
    features: [
      { name: 'Client portal & chat widget', free: false, solo: false, starter: false, professional: true, business: true },
      { name: 'Video kit', free: false, solo: false, starter: false, professional: true, business: true },
      { name: 'Code sandbox', free: false, solo: false, starter: false, professional: true, business: true },
      { name: 'Local rank', free: false, solo: false, starter: false, professional: true, business: true },
      { name: 'Advanced automation nodes', free: false, solo: false, starter: false, professional: true, business: true },
    ],
  },
  {
    category: 'Business',
    features: [
      { name: 'Call center & voice ops', free: false, solo: false, starter: false, professional: false, business: true },
      { name: 'Outbound call tooling', free: false, solo: false, starter: false, professional: false, business: true },
      { name: 'High-volume operations', free: false, solo: false, starter: false, professional: false, business: true },
    ],
  },
  {
    category: 'Support',
    features: [
      { name: 'Email support', free: false, solo: true, starter: true, professional: true, business: true },
      { name: 'Priority support', free: false, solo: false, starter: false, professional: true, business: true },
      { name: 'Dedicated success manager', free: false, solo: false, starter: false, professional: false, business: true },
      { name: 'SLA & phone support', free: false, solo: false, starter: false, professional: false, business: true },
    ],
  },
];

const pricingFaqs = [
  {
    question: 'What are AI credits?',
    answer: 'AI credits are used every time an AI agent performs a task -- writing content, analyzing data, scheduling posts, or running workflows. Different tasks use different amounts of credits based on complexity. Most simple tasks use 1-5 credits, while more complex operations like full content creation may use 10-25 credits.',
  },
  {
    question: 'Can I change plans at any time?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. When upgrading, you\'ll get immediate access to the new plan\'s features and your billing will be prorated. When downgrading, the change takes effect at the start of your next billing cycle.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! All plans include a 7-day free trial with full access to all features. A credit card is required to start your trial, but you won\'t be charged until the trial ends. Cancel anytime before the trial is over.',
  },
  {
    question: 'What happens if I run out of AI credits?',
    answer: 'If you run out of credits before your monthly renewal, your agents will pause until your credits refresh. You can also purchase additional credit packs at any time, or upgrade to a higher plan for more credits.',
  },
  {
    question: 'Do you offer annual billing?',
    answer: 'Yes, we offer annual billing with a 20% discount on all plans. Contact our sales team or switch to annual billing in your account settings.',
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
    question: 'Do you offer custom enterprise plans?',
    answer: 'Yes, for organizations with specific needs, we offer custom enterprise plans with tailored AI credit allocations, custom integrations, dedicated infrastructure, and hands-on onboarding. Contact our sales team to discuss your requirements.',
  },
];

const valueProps = [
  {
    icon: Zap,
    title: 'Save 70%+ vs agencies',
    description: 'Replace expensive agency retainers with AI agents that work 24/7.',
  },
  {
    icon: Shield,
    title: '7-day free trial',
    description: 'Try any plan risk-free. Cancel anytime before your trial ends.',
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
            Stop overpaying for agencies. Get enterprise-level marketing
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
          className="grid grid-cols-2 lg:grid-cols-5 gap-8"
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
      <div className="mx-auto max-w-6xl px-6 lg:px-8" ref={ref}>
        {/* Pricing cards - Bento grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className={cn(
                'relative rounded-2xl p-8 transition-all duration-300',
                tier.recommended
                  ? 'border-2 border-signature bg-white lg:col-span-2'
                  : 'border border-gray-200 bg-white hover:border-gray-300'
              )}
            >
              {tier.recommended && (
                <div className="absolute -top-3 left-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-signature text-white">
                    Most popular
                  </span>
                </div>
              )}

              <div className={cn(tier.recommended && 'lg:flex lg:gap-10')}>
                <div className={cn(tier.recommended && 'lg:flex-1 lg:min-w-0')}>
                  {/* Tier header */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-black mb-1">
                      {tier.name}
                    </h3>
                    <p className="text-sm text-gray-500">{tier.tagline}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-semibold text-black tracking-tight">
                        {tier.price === 0 ? 'Free' : `$${tier.price.toLocaleString()}`}
                      </span>
                      {tier.price > 0 && <span className="text-base text-gray-400">/month</span>}
                    </div>
                    <p className="text-sm text-gray-500 mt-3">{tier.description}</p>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={tier.href}
                    className={cn(
                      'flex items-center justify-center gap-2 w-full h-12 rounded-lg font-medium text-sm transition-all duration-200',
                      tier.recommended
                        ? 'bg-signature text-white hover:bg-signature/90 mb-6 lg:mb-0'
                        : 'bg-white text-black border border-gray-300 hover:bg-gray-50 mb-8'
                    )}
                  >
                    {tier.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Features */}
                <div className={cn(tier.recommended && 'lg:flex-1 lg:min-w-0')}>
                  <div className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        {!feature.includes('Everything in') && (
                          <Check className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                        )}
                        <span
                          className={cn(
                            'text-sm',
                            feature.includes('Everything in')
                              ? 'text-gray-600 font-medium'
                              : 'text-gray-600'
                          )}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
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
          <p className="text-sm text-gray-500">
            All plans include a 7-day free trial. Cancel anytime.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Need a custom plan for your enterprise?{' '}
            <a
              href="mailto:sales@ozzios.com"
              className="text-signature hover:underline"
            >
              Contact sales
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
          <table className="w-full min-w-[600px]">
            {/* Header */}
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 pr-4 text-sm font-medium text-gray-500 w-[20%]">
                  Features
                </th>
                <th className="text-center py-4 px-3 text-sm font-semibold text-black w-[16%]">
                  Free
                </th>
                <th className="text-center py-4 px-3 text-sm font-semibold text-black w-[16%]">
                  Solo
                </th>
                <th className="text-center py-4 px-3 text-sm font-semibold text-black w-[16%]">
                  Starter
                </th>
                <th className="text-center py-4 px-3 text-sm font-semibold text-signature w-[16%]">
                  Professional
                </th>
                <th className="text-center py-4 px-3 text-sm font-semibold text-black w-[16%]">
                  Business
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((category) => (
                <>
                  <tr key={`cat-${category.category}`}>
                    <td
                      colSpan={6}
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
                        <FeatureValue value={feature.free} />
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        <FeatureValue value={feature.solo} />
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        <FeatureValue value={feature.starter} />
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        <FeatureValue value={feature.professional} />
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        <FeatureValue value={feature.business} />
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
