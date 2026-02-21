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
  price: number;
  usage: string;
  description: string;
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
    description: 'Everything you need to replace your agency and run marketing on autopilot.',
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
    description: 'Everything you need to run marketing like a full-service agency.',
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
    description: 'For growing businesses that need enterprise-level marketing power.',
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

const comparisonFeatures = [
  {
    category: 'Limits',
    features: [
      { name: 'Team members', starter: '5', professional: '15', business: '50' },
      { name: 'Workspaces', starter: '1', professional: '10', business: 'Unlimited' },
      { name: 'Monthly AI usage', starter: '30M', professional: '60M', business: '120M' },
    ],
  },
  {
    category: 'Core',
    features: [
      { name: 'Workspace, channels & inbox', starter: true, professional: true, business: true },
      { name: 'Tasks', starter: true, professional: true, business: true },
      { name: 'Social planner', starter: true, professional: true, business: true },
      { name: 'Blog tools', starter: true, professional: true, business: true },
      { name: 'Email builder', starter: true, professional: true, business: true },
      { name: 'All integrations', starter: true, professional: true, business: true },
    ],
  },
  {
    category: 'Starter',
    features: [
      { name: 'Email/SMS campaigns', starter: true, professional: true, business: true },
      { name: 'Forms builder', starter: true, professional: true, business: true },
      { name: 'Documents & e-sign', starter: true, professional: true, business: true },
      { name: 'Workflow builder', starter: true, professional: true, business: true },
      { name: 'Advanced CRM', starter: true, professional: true, business: true },
    ],
  },
  {
    category: 'Professional',
    features: [
      { name: 'Client portal & chat widget', starter: false, professional: true, business: true },
      { name: 'Portal AI agent', starter: false, professional: true, business: true },
      { name: 'Huddles', starter: false, professional: true, business: true },
      { name: 'Video kit', starter: false, professional: true, business: true },
      { name: 'Code sandbox', starter: false, professional: true, business: true },
      { name: 'Local rank', starter: false, professional: true, business: true },
      { name: 'Advanced automation nodes', starter: false, professional: true, business: true },
    ],
  },
  {
    category: 'Business',
    features: [
      { name: 'Call center & voice ops', starter: false, professional: false, business: true },
      { name: 'Outbound call tooling', starter: false, professional: false, business: true },
      { name: 'High-volume operations', starter: false, professional: false, business: true },
    ],
  },
  {
    category: 'Support',
    features: [
      { name: 'Email support', starter: true, professional: true, business: true },
      { name: 'Dedicated success manager', starter: false, professional: false, business: true },
      { name: 'SLA & phone support', starter: false, professional: false, business: true },
    ],
  },
];

const pricingFaqs = [
  {
    question: 'How does usage-based pricing work?',
    answer: 'Each plan includes a monthly usage quota that covers all AI operations — writing content, analyzing data, scheduling posts, running workflows, and more. Usage is tracked automatically and resets at the start of each billing cycle. You can monitor your usage in real time from your account dashboard.',
  },
  {
    question: 'Can I change plans at any time?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. When upgrading, you\'ll get immediate access to the new plan\'s features and your billing will be prorated. When downgrading, the change takes effect at the start of your next billing cycle.',
  },
  {
    question: 'What happens if I hit my usage limit?',
    answer: 'If you reach your monthly usage limit before your billing cycle renews, your AI agents will pause until the quota resets. You can upgrade to a higher plan at any time to get more capacity immediately.',
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
    answer: 'Yes, for organizations with specific needs, we offer custom enterprise plans with unlimited usage, custom integrations, dedicated infrastructure, and hands-on onboarding. Contact our sales team to discuss your requirements.',
  },
];

const valueProps = [
  {
    icon: Zap,
    title: 'Save 70%+ vs agencies',
    description: 'Replace expensive agency retainers with AI agents that work 24/7.',
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
      <div className="mx-auto max-w-7xl px-6 lg:px-8" ref={ref}>
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
                  ? 'border-2 border-signature bg-white'
                  : 'border border-gray-200 bg-white hover:border-gray-300'
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
                <h3 className="text-lg font-semibold text-black">
                  {tier.name}
                </h3>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-black tracking-tight">
                    {tier.price === 0 ? 'Free' : `$${tier.price.toLocaleString()}`}
                  </span>
                  {tier.price > 0 && (
                    <span className="text-sm text-gray-400">/mo</span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-1">{tier.usage}</p>
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
                        <span className="w-4 h-4 shrink-0 flex items-center justify-center text-[11px] font-bold text-gray-400">+</span>
                      )}
                      <span className={`text-sm ${isEverything ? 'text-black font-medium' : 'text-gray-600'}`}>
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
                  'flex items-center justify-center gap-2 w-full h-11 rounded-lg font-medium text-sm transition-all duration-200',
                  tier.recommended
                    ? 'bg-signature text-white hover:bg-signature/90'
                    : 'bg-white text-black border border-gray-300 hover:bg-gray-50'
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
          <table className="w-full min-w-[500px]">
            {/* Header */}
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 pr-4 text-sm font-medium text-gray-500 w-[40%]">
                  Features
                </th>
                <th className="text-center py-4 px-3 text-sm font-semibold text-black w-[20%]">
                  Starter
                </th>
                <th className="text-center py-4 px-3 text-sm font-semibold text-signature w-[20%]">
                  Professional
                </th>
                <th className="text-center py-4 px-3 text-sm font-semibold text-black w-[20%]">
                  Business
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
