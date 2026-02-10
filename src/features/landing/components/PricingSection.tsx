import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

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

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Stop overpaying for agencies. Get enterprise-level marketing automation at a fraction of the cost.
          </p>
        </motion.div>

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
              {/* Tier header */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-1">
                  {tier.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {tier.tagline}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-semibold text-black tracking-tight">
                    ${tier.price.toLocaleString()}
                  </span>
                  <span className="text-base text-gray-400">/month</span>
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  {tier.description}
                </p>
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
                    <span className={cn(
                      'text-sm',
                      feature.includes('Everything in')
                        ? 'text-gray-600 font-medium'
                        : 'text-gray-600'
                    )}>
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
            <a href="mailto:sales@ozzios.com" className="text-signature hover:underline">
              Contact sales
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
