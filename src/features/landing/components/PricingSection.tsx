import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PricingTier {
  name: string;
  price: number;
  usage: string;
  features: string[];
  cta: string;
  href: string;
  recommended: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    price: 0,
    usage: '500K ops/month',
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
    usage: '12M ops/month',
    features: [
      'Up to 2 team members',
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
    usage: '30M ops/month',
    features: [
      'Up to 5 team members',
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
    usage: '60M ops/month',
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
    usage: '120M ops/month',
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
          className="text-center mb-20 flex flex-col items-center"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-signature" />
            <p className="text-[11px] font-semibold text-signature uppercase tracking-[0.2em]">
              Pricing
            </p>
            <div className="w-8 h-px bg-signature" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground tracking-tight mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl font-light leading-relaxed">
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
                'relative rounded-xl p-8 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col',
                tier.recommended
                  ? 'border border-signature/60 bg-card ring-1 ring-signature/10'
                  : 'border border-border/80 bg-card hover:border-border'
              )}
            >
              {tier.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest bg-signature text-white shadow-sm">
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
                <p className="text-sm text-muted-foreground mt-1">{tier.usage}</p>
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
              <div className="mt-auto pt-6">
                <a
                  href={tier.href}
                  className={cn(
                    'flex items-center justify-center gap-2 w-full h-12 rounded-md font-medium text-[13px] transition-all duration-200 group',
                    tier.recommended
                      ? 'bg-signature text-white hover:bg-signature/90 shadow-sm'
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
