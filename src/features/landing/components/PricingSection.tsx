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
  features: PricingFeature[];
  cta: string;
  href: string;
  recommended: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: 490,
    usage: '30M ops/month',
    features: [
      { label: 'Up to 5 team members', description: 'Bring your whole team into one place — no more scattered tools or missed handoffs.' },
      { label: 'Workspace, channels & inbox', description: 'Stop juggling tabs. Every message, email, SMS, and lead comes into one place so nothing slips through the cracks.' },
      { label: 'Social planner & blog tools', description: 'Stay consistent on social and keep your blog active — without spending hours every week doing it manually. Ozzi handles the scheduling and publishing for you.' },
      { label: 'Email builder & campaigns', description: 'Send professional email campaigns that actually look good — without a designer. Track opens, clicks, and conversions so you know what\'s working.' },
      { label: 'SMS campaigns', description: 'Reach your customers where they actually read messages. Text campaigns get far higher open rates than email alone.' },
      { label: 'Forms builder', description: 'Capture leads from your website and automatically add them to your pipeline. No manual data entry, no leads falling through the cracks.' },
      { label: 'Documents & e-sign', description: 'Send proposals and contracts and get them signed without the back-and-forth. Automatic reminders follow up for you so deals don\'t stall.' },
      { label: 'Workflow builder', description: 'Set up automations once and let them run forever. Follow-ups, notifications, task assignments — all happen automatically while you focus on growing your business.' },
      { label: 'Advanced CRM', description: 'Know exactly where every lead and customer stands. See who\'s ready to buy, who needs a nudge, and how likely each deal is to close — all in one view.' },
      { label: 'All integrations', description: 'Connect the tools you already use — Google, Meta, Shopify, WordPress, and 40+ more. Everything talks to each other so you\'re not re-entering data across platforms.' },
      { label: 'Email support', description: 'Our team is here when you need help. Reach out anytime and get a real response within one business day.' },
    ],
    cta: 'Get started',
    href: 'https://app.ozzios.com/sign-up',
    recommended: false,
  },
  {
    name: 'Professional',
    price: 990,
    usage: '60M ops/month',
    features: [
      { label: 'Everything in Starter', description: 'Includes every feature from the Starter plan.' },
      { label: 'Up to 15 team members', description: 'Room to grow your team without switching plans.' },
      { label: '10 workspaces', description: 'Run multiple brands, locations, or client accounts from one login — each fully separate with its own team and settings.' },
      { label: 'Client portal & chat widget', description: 'Give clients their own login to see progress, approve work, and ask questions — so they stop emailing you for updates. Add a chat widget to your site and capture leads automatically.' },
      { label: 'Portal AI agent', description: 'Your AI agent answers client questions 24/7 inside the portal — so clients feel taken care of even when you\'re not available.' },
      { label: 'Huddles & video kit', description: 'Hop on a quick call with your team or record professional videos without needing extra software. Great for client updates, walkthroughs, and marketing content.' },
      { label: 'Code sandbox', description: 'Ozzi can build custom dashboards, calculators, and interactive tools for your business — no developer needed.' },
      { label: 'Local rank', description: 'See exactly where you rank on Google Maps for the keywords that bring in local customers — and track whether your SEO efforts are actually moving the needle.' },
      { label: 'Advanced automation nodes', description: 'Build more sophisticated automations — run multiple workflows in parallel, loop through lists, or pause for human approval before taking action.' },
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
      { label: 'Everything in Professional', description: 'Includes every feature from the Professional plan.' },
      { label: 'Up to 50 team members', description: 'Scale your operation without needing a new platform. Everyone on your team in one place.' },
      { label: 'Unlimited workspaces', description: 'No limits on how many brands, locations, or clients you manage. Scale as big as your business grows.' },
      { label: 'Call center & voice ops', description: 'Handle inbound calls with AI voice agents that answer, qualify, and route — then review recordings and AI-scored call quality without listening to every call.' },
      { label: 'Outbound call tooling', description: 'Let your AI agent make outbound calls on your behalf — for follow-ups, appointment reminders, and lead outreach — at a scale one person could never match.' },
      { label: 'High-volume operations', description: 'Built for businesses running large campaigns or managing lots of contacts. Higher limits so you\'re never throttled at the worst time.' },
      { label: 'Dedicated success manager', description: 'A real person on our team who knows your business, helps you get set up, and meets with you regularly to make sure you\'re getting results.' },
      { label: 'SLA & phone support', description: 'Call us directly. Guaranteed response times so you\'re never left waiting when something urgent comes up.' },
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
