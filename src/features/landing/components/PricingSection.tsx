import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PricingTier {
  name: string;
  price: number;
  credits: string;
  features: string[];
  cta: string;
  href: string;
  recommended: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    price: 0,
    credits: '50 credits/mo',
    features: [
      '1 workspace member',
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
    price: 197,
    credits: '500 credits/mo',
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
    price: 490,
    credits: '1,000 credits/mo',
    features: [
      'Up to 5 team members',
      '1,000 AI credits/month',
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
    price: 990,
    credits: '2,000 credits/mo',
    features: [
      'Up to 15 team members',
      '5 workspaces',
      'Client portal & chat widget',
      'Portal AI agent',
      'Huddles',
      'Video kit',
      'Code sandbox',
      'Local rank',
      'Advanced automation nodes',
    ],
    cta: 'Get started',
    href: 'https://app.ozzios.com/sign-up?plan=professional',
    recommended: true,
  },
  {
    name: 'Business',
    price: 1995,
    credits: '10,000 credits/mo',
    features: [
      'Everything in Professional',
      'Up to 50 team members',
      '15 workspaces',
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

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Stop overpaying for agencies. Get enterprise-level marketing automation at a fraction of the cost.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className={cn(
                'relative rounded-2xl p-6 transition-all duration-300',
                tier.recommended
                  ? 'border-2 border-signature bg-card'
                  : 'border border-border bg-card hover:border-border'
              )}
            >
              {tier.recommended && (
                <div className="absolute -top-3 left-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-signature text-white">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier header */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {tier.name}
                </h3>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground tracking-tight">
                    {tier.price === 0 ? 'Free' : `$${tier.price.toLocaleString()}`}
                  </span>
                  {tier.price > 0 && (
                    <span className="text-sm text-muted-foreground">/mo</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-1">{tier.credits}</p>
              </div>

              {/* Features */}
              <div className="space-y-2.5 mb-6">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href={tier.href}
                className={cn(
                  'flex items-center justify-center gap-2 w-full h-11 rounded-lg font-medium text-sm transition-all duration-200',
                  tier.recommended
                    ? 'bg-signature text-white hover:bg-signature/90'
                    : 'bg-card text-foreground border border-border hover:bg-muted/50'
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
          <p className="text-sm text-muted-foreground">
            All plans include a 7-day free trial. Cancel anytime.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
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
