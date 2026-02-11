import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, X, ChevronDown, ArrowRight, Zap, Shield, Users, Headphones } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CTASection } from '../components/CTASection';

const pricingTiers = [
  {
    name: 'Starter',
    tagline: 'Fire your freelancers',
    price: 497,
    description: 'Perfect for small businesses ready to automate their marketing basics.',
    features: [
      '5 AI Agents',
      '10,000 AI credits/month',
      'Email marketing automation',
      'Social media scheduling',
      'Basic SEO tools',
      'Google Calendar & Gmail sync',
      'Standard support',
    ],
    cta: 'Start free trial',
    href: 'https://app.ozzios.com/sign-up?plan=starter',
    recommended: false,
  },
  {
    name: 'Pro',
    tagline: 'Replace your agency',
    price: 997,
    description: 'Everything you need to run marketing like a full-service agency.',
    features: [
      '14 AI Agents',
      '50,000 AI credits/month',
      'Everything in Starter, plus:',
      'Advanced workflow automation',
      'CRM & pipeline management',
      'Meta & Google Ads integration',
      'Content creation at scale',
      'Client reporting dashboards',
      'Priority support',
    ],
    cta: 'Start free trial',
    href: 'https://app.ozzios.com/sign-up?plan=pro',
    recommended: true,
  },
  {
    name: 'Scale',
    tagline: 'Full marketing department',
    price: 1997,
    description: 'For growing businesses that need enterprise-level marketing power.',
    features: [
      'Unlimited AI Agents',
      '200,000 AI credits/month',
      'Everything in Pro, plus:',
      'White-label client portals',
      'Multi-workspace management',
      'Custom integrations',
      'Advanced analytics & attribution',
      'Dedicated success manager',
      'SLA & phone support',
    ],
    cta: 'Contact sales',
    href: 'https://app.ozzios.com/sign-up?plan=scale',
    recommended: false,
  },
];

const comparisonFeatures = [
  {
    category: 'AI Agents',
    features: [
      { name: 'AI Agents included', starter: '5', pro: '14', scale: 'Unlimited' },
      { name: 'AI credits/month', starter: '10,000', pro: '50,000', scale: '200,000' },
      { name: 'Custom agent workflows', starter: false, pro: true, scale: true },
      { name: 'Multi-agent delegation', starter: false, pro: true, scale: true },
    ],
  },
  {
    category: 'Marketing',
    features: [
      { name: 'Email marketing automation', starter: true, pro: true, scale: true },
      { name: 'Social media scheduling', starter: true, pro: true, scale: true },
      { name: 'Basic SEO tools', starter: true, pro: true, scale: true },
      { name: 'Content creation at scale', starter: false, pro: true, scale: true },
      { name: 'Meta & Google Ads', starter: false, pro: true, scale: true },
      { name: 'Advanced analytics & attribution', starter: false, pro: false, scale: true },
    ],
  },
  {
    category: 'Integrations',
    features: [
      { name: 'Google Calendar & Gmail', starter: true, pro: true, scale: true },
      { name: 'CRM & pipeline management', starter: false, pro: true, scale: true },
      { name: 'Client reporting dashboards', starter: false, pro: true, scale: true },
      { name: 'Custom integrations', starter: false, pro: false, scale: true },
    ],
  },
  {
    category: 'Platform',
    features: [
      { name: 'White-label client portals', starter: false, pro: false, scale: true },
      { name: 'Multi-workspace management', starter: false, pro: false, scale: true },
      { name: 'Dedicated success manager', starter: false, pro: false, scale: true },
      { name: 'SLA guarantee', starter: false, pro: false, scale: true },
    ],
  },
  {
    category: 'Support',
    features: [
      { name: 'Email support', starter: true, pro: true, scale: true },
      { name: 'Priority support', starter: false, pro: true, scale: true },
      { name: 'Phone support', starter: false, pro: false, scale: true },
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
    answer: 'Yes! All plans include a 14-day free trial with full access to all features. No credit card required to start. If you decide OzziOS isn\'t right for you, simply cancel before the trial ends.',
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
    title: '14-day free trial',
    description: 'Try any plan risk-free. No credit card required to get started.',
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
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
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
        {/* Pricing cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className={cn(
                'relative rounded-2xl p-8 transition-all duration-300',
                tier.recommended
                  ? 'border-2 border-signature bg-white'
                  : 'border border-gray-200 bg-white hover:border-gray-300'
              )}
            >
              {tier.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-signature text-white">
                    Most popular
                  </span>
                </div>
              )}

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
                    ${tier.price.toLocaleString()}
                  </span>
                  <span className="text-base text-gray-400">/month</span>
                </div>
                <p className="text-sm text-gray-500 mt-3">{tier.description}</p>
              </div>

              {/* CTA Button */}
              <a
                href={tier.href}
                className={cn(
                  'flex items-center justify-center gap-2 w-full h-12 rounded-lg font-medium text-sm transition-all duration-200 mb-8',
                  tier.recommended
                    ? 'bg-signature text-white hover:bg-signature/90'
                    : 'bg-white text-black border border-gray-300 hover:bg-gray-50'
                )}
              >
                {tier.cta}
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Features */}
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
            All plans include a 14-day free trial. No credit card required.
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
                <th className="text-left py-4 pr-4 text-sm font-medium text-gray-500 w-[40%]">
                  Features
                </th>
                <th className="text-center py-4 px-4 text-sm font-semibold text-black w-[20%]">
                  Starter
                </th>
                <th className="text-center py-4 px-4 text-sm font-semibold text-signature w-[20%]">
                  Pro
                </th>
                <th className="text-center py-4 px-4 text-sm font-semibold text-black w-[20%]">
                  Scale
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
                      <td className="py-3.5 px-4 text-center">
                        <FeatureValue value={feature.starter} />
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <FeatureValue value={feature.pro} />
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <FeatureValue value={feature.scale} />
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
