'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight,
  User,
  Clock,
  DollarSign,
  Brain,
  Zap,
  BarChart3,
  Mail,
  Search,
  Share2,
  CheckCircle2,
  MessageSquare,
  FileText,
  Shield,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Animation Variants
// ---------------------------------------------------------------------------

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const painPoints = [
  {
    icon: Clock,
    title: 'You wear every hat',
    description:
      'Client calls at 9am, writing blog posts at noon, sending email campaigns at 3pm, reviewing analytics at midnight. You are the agency -- and you are burning out.',
  },
  {
    icon: DollarSign,
    title: 'Hiring is out of reach',
    description:
      'A single marketing specialist costs $50K-$80K/year. A full team? $200K+. Your margins can not support that, so you keep doing it all yourself.',
  },
  {
    icon: Brain,
    title: 'Knowledge lives in your head',
    description:
      'Every client preference, every campaign detail, every login credential -- it is all in your memory. If you get sick or take a vacation, everything stops.',
  },
  {
    icon: BarChart3,
    title: 'You can not grow past 5-10 clients',
    description:
      'There are only so many hours in a day. You hit a ceiling where adding one more client means dropping the ball on another. Growth means breakdown.',
  },
];

const features = [
  {
    icon: Brain,
    title: '30+ AI agents',
    description: 'SEO, content, social, email, CRM, analytics, and more -- all working together under one roof. Plus create your own custom agents.',
    link: '/features/ai-agents',
  },
  {
    icon: Zap,
    title: 'Automated workflows',
    description: 'Set up your client processes once and let AI handle the execution. Onboarding, reporting, campaigns -- on autopilot.',
    link: '/features/workflows',
  },
  {
    icon: Mail,
    title: 'Email & SMS campaigns',
    description: 'Create, schedule, and send campaigns with AI-written copy personalized to each client audience.',
    link: '/features/email-campaigns',
  },
  {
    icon: Search,
    title: 'SEO & blog content',
    description: 'AI-powered keyword research, content briefs, and full blog posts optimized for search. Published automatically.',
    link: '/features/blog-seo',
  },
  {
    icon: Share2,
    title: 'Social media management',
    description: 'Schedule posts, track engagement, and respond to comments across every platform from one place.',
    link: '/features/social-media',
  },
  {
    icon: MessageSquare,
    title: 'Client portal & channels',
    description: 'Give clients a branded portal with real-time updates, approvals, and messaging. No more email chains.',
    link: '/features/channels',
  },
];

const stats = [
  { value: '5x', label: 'Client capacity', detail: 'Handle 25-50 clients instead of 5-10' },
  { value: '80%', label: 'Less manual work', detail: 'AI handles repetitive tasks for you' },
  { value: '$150K+', label: 'Saved per year', detail: 'vs. hiring a team of 3' },
  { value: '24/7', label: 'Always working', detail: 'Your AI team never sleeps' },
];

const dayComparison = [
  {
    time: '8:00 AM',
    without: 'Check email, respond to 12 client messages',
    with: 'AI already triaged and responded overnight',
  },
  {
    time: '10:00 AM',
    without: 'Write blog post for Client A',
    with: 'Review AI-drafted blog post, approve in 2 min',
  },
  {
    time: '12:00 PM',
    without: 'Build email campaign for Client B',
    with: 'AI built and scheduled the campaign at 6 AM',
  },
  {
    time: '2:00 PM',
    without: 'Pull analytics reports for 3 clients',
    with: 'Reports auto-generated and sent to client portals',
  },
  {
    time: '4:00 PM',
    without: 'Schedule social media posts',
    with: 'AI scheduled a week of posts across all clients',
  },
  {
    time: '6:00 PM',
    without: 'Still working -- behind on deliverables',
    with: 'Done for the day. Focusing on strategy and growth.',
  },
];

// ---------------------------------------------------------------------------
// Components
// ---------------------------------------------------------------------------

function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="tag-neo rounded-full text-signature bg-signature/10 border-signature mb-6">
              <User className="w-4 h-4" />
              <span className="text-[11px] font-semibold uppercase tracking-wider ml-1.5">For Solo Agencies</span>
            </span>
            <h1 className="text-display font-display text-foreground mb-6">
              You + OzziOS = a{' '}
              <span className="text-signature">full marketing team</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              You started your agency to do great work, not to drown in admin. OzziOS gives
              you an unlimited AI workforce that handles the execution so you can focus on
              strategy, clients, and growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.ozzios.com/sign-up"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
              >
                Start free trial
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 border-2 border-border text-foreground font-medium text-base rounded-lg hover:border-signature/30 transition-colors duration-200"
              >
                See pricing
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function PainSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-neo text-signature mb-6 inline-block">The Problem</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Running solo means doing everything
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            You did not start your agency to work 60-hour weeks. But that is where you are.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {painPoints.map((point) => {
            const Icon = point.icon;
            return (
              <motion.div key={point.title} variants={itemVariants} className="card-neo rounded-xl p-8">
                <div className="w-12 h-12 rounded-xl bg-signature/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-signature" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{point.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function DayComparisonSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-neo text-signature mb-6 inline-block">Your Day, Transformed</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            See the difference
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            A typical day running your agency -- before and after OzziOS.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="grid grid-cols-[100px_1fr_1fr] md:grid-cols-[120px_1fr_1fr] gap-4 mb-4 px-4">
            <div className="text-sm font-semibold text-muted-foreground">Time</div>
            <div className="text-sm font-semibold text-foreground">Without OzziOS</div>
            <div className="text-sm font-semibold text-signature">With OzziOS</div>
          </motion.div>

          {/* Rows */}
          {dayComparison.map((row) => (
            <motion.div
              key={row.time}
              variants={itemVariants}
              className="grid grid-cols-[100px_1fr_1fr] md:grid-cols-[120px_1fr_1fr] gap-4 p-4 border-t border-border"
            >
              <div className="text-sm font-medium text-muted-foreground">{row.time}</div>
              <div className="text-sm text-muted-foreground">{row.without}</div>
              <div className="text-sm text-foreground font-medium">{row.with}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-neo text-signature mb-6 inline-block">What You Get</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Everything a solo agency needs
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Every tool, every channel, every workflow -- in one platform.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.a
                key={feature.title}
                href={feature.link}
                variants={itemVariants}
                className="card-neo rounded-xl p-8 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-signature/10 flex items-center justify-center mb-5 group-hover:bg-signature/20 transition-colors">
                  <Icon className="w-6 h-6 text-signature" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-signature transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{feature.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-signature">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-neo text-signature mb-6 inline-block">By the Numbers</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Solo agency + OzziOS = capacity of a 5-person team
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="card-neo rounded-xl p-8 text-center"
            >
              <div className="font-display text-4xl md:text-5xl text-signature mb-2">{stat.value}</div>
              <div className="font-semibold text-foreground text-sm mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.detail}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Cost comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="card-neo rounded-xl p-8 md:p-10">
            <h3 className="font-display text-xl text-foreground mb-6 text-center">
              The math is simple
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Hiring a team of 3
                </div>
                <ul className="space-y-3">
                  <li className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Content Writer</span>
                    <span className="text-foreground font-medium">$55,000/yr</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Social Media Manager</span>
                    <span className="text-foreground font-medium">$50,000/yr</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-muted-foreground">SEO Specialist</span>
                    <span className="text-foreground font-medium">$60,000/yr</span>
                  </li>
                  <li className="flex justify-between text-sm border-t border-border pt-3 mt-3">
                    <span className="text-foreground font-semibold">Total</span>
                    <span className="text-foreground font-semibold">$165,000/yr</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="text-sm font-semibold text-signature uppercase tracking-wider mb-4">
                  OzziOS
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-mint mt-0.5 shrink-0" />
                    <span className="text-foreground">Unlimited AI agents, all included</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-mint mt-0.5 shrink-0" />
                    <span className="text-foreground">Works 24/7, no PTO or sick days</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-mint mt-0.5 shrink-0" />
                    <span className="text-foreground">Zero turnover, zero knowledge loss</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm border-t border-border pt-3 mt-3">
                    <span className="text-signature font-semibold">Starting at a fraction of one hire</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight mb-6">
            Stop being the bottleneck.
            <br />
            <span className="text-signature">Start being the strategist.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
            Join hundreds of solo agencies that use OzziOS to deliver more for
            their clients without working more hours.
          </p>
          <a
            href="https://app.ozzios.com/sign-up"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
          >
            Start your free trial
            <ArrowRight className="w-5 h-5" />
          </a>
          <div className="mt-6">
            <a
              href="/pricing"
              className="text-sm text-muted-foreground hover:text-foreground/80 transition-colors"
            >
              View pricing plans
            </a>
          </div>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> SOC 2 Compliant</span>
            <span className="hidden sm:inline text-border">|</span>
            <span>GDPR Ready</span>
            <span className="hidden sm:inline text-border">|</span>
            <span>99.9% Uptime SLA</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Main View
// ---------------------------------------------------------------------------

export function SoloAgenciesView() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PainSection />
      <DayComparisonSection />
      <FeaturesSection />
      <StatsSection />
      <CTASection />
    </div>
  );
}
