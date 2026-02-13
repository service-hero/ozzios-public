'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight,
  Smartphone,
  MessageCircle,
  Clock,
  Zap,
  Target,
  BarChart3,
  Users,
  ShieldCheck,
  Pause,
  Send,
  CheckCircle2,
  TrendingUp,
  AlertTriangle,
  Timer,
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
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

const painPoints = [
  {
    icon: AlertTriangle,
    title: 'Compliance is a minefield',
    description:
      'TCPA violations cost $500-$1,500 per text. Most SMS tools leave compliance to you -- one mistake with opt-outs and you are facing a class action.',
  },
  {
    icon: Users,
    title: 'Separate tool, separate data',
    description:
      'Your SMS platform does not talk to your CRM. You are manually exporting contacts, managing opt-outs in spreadsheets, and praying nothing falls out of sync.',
  },
  {
    icon: Timer,
    title: 'No rate limiting or safety nets',
    description:
      'Hit send and 10,000 messages blast instantly. Carrier throttling kicks in, messages get flagged as spam, and your deliverability tanks.',
  },
  {
    icon: BarChart3,
    title: 'Zero visibility into performance',
    description:
      'Did the message deliver? Did they click? Did they reply? Most SMS tools give you a sent count and nothing else. You are flying blind.',
  },
];

const capabilities = [
  {
    icon: Target,
    title: 'CRM-native targeting',
    description:
      'Build SMS audiences directly from your contact database. Filter by lead score, last activity, tags, or any custom field. No list exports needed.',
  },
  {
    icon: Send,
    title: 'Intelligent batch orchestration',
    description:
      'Messages send in controlled batches with Twilio rate limiting built in. Carrier-friendly sending that protects your deliverability and sender reputation.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance built in',
    description:
      'Automatic opt-out handling, consent tracking, and quiet hours enforcement. A2P 10DLC registration support keeps you compliant with carrier requirements.',
  },
  {
    icon: Pause,
    title: 'Mid-campaign control',
    description:
      'Pause, resume, or cancel campaigns mid-send. Spot a problem? Stop the campaign before it reaches your entire list. No more irreversible sends.',
  },
  {
    icon: BarChart3,
    title: 'Delivery status tracking',
    description:
      'Real-time delivery confirmations via Twilio webhooks. Know exactly which messages delivered, failed, or are still queued.',
  },
  {
    icon: Zap,
    title: 'Workflow integration',
    description:
      'Trigger SMS campaigns from workflows, or trigger workflows from SMS replies. Two-way communication that feeds into your entire marketing automation.',
  },
];

function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative z-10 mx-auto max-w-[900px] px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <motion.div variants={itemVariants} className="text-center mb-8">
            <div className="tag-neo rounded-full bg-signature/10 border-signature mb-6">
              <MessageCircle className="w-4 h-4 text-signature" />
              <span className="text-[11px] font-semibold text-signature uppercase tracking-wider">
                SMS Campaigns
              </span>
            </div>
            <h1 className="text-display font-display text-foreground mb-6">
              SMS campaigns that{' '}
              <span className="text-signature">respect the rules</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              98% open rate. 45% response rate. SMS is the most powerful channel in
              marketing -- if you do it right. OzziOS handles compliance, rate limiting,
              and delivery so you focus on the message.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.ozzios.com/sign-up"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
              >
                Start SMS campaigns
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-12">
            {[
              { value: '98%', label: 'Open rate' },
              { value: '45%', label: 'Response rate' },
              { value: '<3s', label: 'Delivery time' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl md:text-3xl text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function PainPointsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-neo text-signature mb-6 inline-block">The Problem</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            SMS marketing is high-risk, high-reward
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            The most powerful marketing channel is also the most regulated. Here is where most tools fail.
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
              <motion.div
                key={point.title}
                variants={itemVariants}
                className="card-neo rounded-xl p-8 group"
              >
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-5 group-hover:bg-destructive/20 transition-colors">
                  <Icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">
                  {point.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
          >
            <span className="tag-neo text-signature mb-6 inline-block">The Solution</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-6">
              Compliant SMS at scale. No headaches.
            </h2>
            <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
              <p>
                OzziOS SMS campaigns are built on Twilio's infrastructure with intelligent
                rate limiting, batch orchestration, and compliance guardrails baked in from
                day one.
              </p>
              <p>
                Your campaigns send at carrier-friendly rates, respect opt-outs
                automatically, and give you full control to pause or cancel mid-flight.
                Combined with CRM-native targeting, you reach the right people with the
                right message every time.
              </p>
            </div>
            <ul className="mt-8 space-y-3">
              {[
                'Twilio-powered delivery with 99.9% uptime',
                'Automatic opt-out and consent management',
                'Rate limiting protects sender reputation',
                'Real-time delivery status via webhooks',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-mint mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="card-neo rounded-xl p-8">
              <div className="space-y-5">
                <div className="flex items-center gap-3 mb-6">
                  <Smartphone className="w-5 h-5 text-signature" />
                  <span className="font-display text-foreground">Campaign Preview</span>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-signature/20 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4 text-signature" />
                    </div>
                    <div className="bg-card border border-border rounded-xl rounded-tl-sm p-3 max-w-[280px]">
                      <p className="text-sm text-foreground">
                        Hey Sarah! Your quarterly SEO report is ready. Open rates are up 34% this month.
                        View your dashboard: app.ozzios.com/r/abc123
                      </p>
                      <p className="text-[10px] text-muted-foreground mt-2">Reply STOP to opt out</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <div className="font-display text-lg text-foreground">2,847</div>
                    <div className="text-[10px] text-muted-foreground">Delivered</div>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <div className="font-display text-lg text-mint">98.2%</div>
                    <div className="text-[10px] text-muted-foreground">Delivery rate</div>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <div className="font-display text-lg text-electric">412</div>
                    <div className="text-[10px] text-muted-foreground">Link clicks</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-neo text-signature mb-6 inline-block">Capabilities</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Enterprise SMS without enterprise complexity
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Every feature designed for agencies who need to send at scale without losing sleep over compliance.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                variants={itemVariants}
                className="card-neo rounded-xl p-8 group"
              >
                <div className="w-12 h-12 rounded-xl bg-signature/10 flex items-center justify-center mb-5 group-hover:bg-signature/20 transition-colors">
                  <Icon className="w-6 h-6 text-signature" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-3">
                  {cap.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function DifferentiatorSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const comparisons = [
    {
      category: 'Compliance',
      ozzios: 'Built-in opt-out handling, consent tracking, and A2P registration',
      others: 'Compliance is your problem -- good luck',
    },
    {
      category: 'Rate limiting',
      ozzios: 'Intelligent per-user and per-workspace rate limits protect deliverability',
      others: 'Blast your entire list instantly, get flagged as spam',
    },
    {
      category: 'Campaign control',
      ozzios: 'Pause, resume, and cancel mid-send with batch orchestration',
      others: 'Hit send and hope for the best',
    },
    {
      category: 'Data integration',
      ozzios: 'CRM-native targeting, workflow triggers, and AI agent coordination',
      others: 'Standalone tool with CSV imports',
    },
  ];

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[900px] px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-neo text-signature mb-6 inline-block">Why OzziOS</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            SMS done right
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            The only SMS platform built for agencies with compliance and CRM integration from day one.
          </p>
        </motion.div>

        <div className="space-y-4">
          {comparisons.map((item, index) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-card border-2 border-border rounded-lg p-6"
            >
              <h3 className="font-display text-sm text-foreground mb-4 uppercase tracking-wider">
                {item.category}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-mint mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-mint mb-1 uppercase tracking-wider">OzziOS</div>
                    <p className="text-sm text-foreground/80">{item.ozzios}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-border mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider">Others</div>
                    <p className="text-sm text-muted-foreground">{item.others}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
            Reach every phone.
            <br />
            <span className="text-foreground">Stay compliant.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
            SMS campaigns with built-in compliance, intelligent rate limiting, and
            CRM-native targeting. Start sending today.
          </p>
          <a
            href="https://app.ozzios.com/sign-up"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
          >
            Start SMS campaigns
            <ArrowRight className="w-5 h-5" />
          </a>
          <div className="mt-6">
            <a
              href="/contact"
              className="text-sm text-muted-foreground hover:text-foreground/80 transition-colors"
            >
              Or talk to our team
            </a>
          </div>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <span>SOC 2 Compliant</span>
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

export function SmsCampaignsView() {
  return (
    <>
      <HeroSection />
      <PainPointsSection />
      <SolutionSection />
      <CapabilitiesSection />
      <DifferentiatorSection />
      <CTASection />
    </>
  );
}
