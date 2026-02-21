'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight,
  MessageSquareText,
  Bot,
  Shield,
  Clock,
  Users,
  DollarSign,
  AlertTriangle,
  Paintbrush,
  Fingerprint,
  Calendar,
  UserPlus,
  PhoneForwarded,
  Lock,
  FileDown,
  Trash2,
  CheckCircle2,
  Zap,
  Eye,
  Code2,
  Globe,
  Sparkles,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const painPoints = [
  {
    icon: DollarSign,
    title: 'Live chat tools cost too much',
    description:
      'Intercom starts at $39/seat/month and scales to $139+. Drift charges per contact. You\'re paying thousands a year just to talk to website visitors — and you still need humans behind it.',
  },
  {
    icon: Clock,
    title: 'Visitors leave before you reply',
    description:
      'The average response time for live chat is 2 minutes and 40 seconds. By then, 53% of visitors have already bounced. Every delayed reply is a lost lead.',
  },
  {
    icon: Users,
    title: 'You can\'t staff chat 24/7',
    description:
      'Your team works 9-5 but your website gets traffic around the clock. Nights, weekends, holidays — visitors arrive and nobody\'s home. Chatbots with canned responses make it worse.',
  },
  {
    icon: AlertTriangle,
    title: 'Chat data lives in a silo',
    description:
      'Conversations in Intercom never reach your CRM. Leads captured in Drift don\'t trigger your workflows. You\'re manually copying data between systems.',
  },
];

const capabilities = [
  {
    icon: Bot,
    title: 'AI-powered conversations',
    benefit: 'Instant, intelligent responses',
    description:
      'Your widget connects to an embedded AI agent with access to your knowledge base. It answers questions, resolves issues, and captures leads — all in natural language, 24/7.',
  },
  {
    icon: PhoneForwarded,
    title: 'Seamless human handoff',
    benefit: 'AI to human in one click',
    description:
      'When the AI detects frustration, hits its limits, or a visitor requests a person — it transfers the conversation to your team with full context. No repeating information.',
  },
  {
    icon: UserPlus,
    title: 'Built-in lead capture',
    benefit: 'Chat to CRM automatically',
    description:
      'The AI conversationally collects contact info and creates leads directly in your CRM. Source tracked as "chat_widget" with full conversation history attached.',
  },
  {
    icon: Calendar,
    title: 'Calendar booking',
    benefit: 'Book meetings mid-conversation',
    description:
      'Visitors can check availability and book meetings through the chat. Working hours, buffer times, and timezone are all enforced. Connected to Google Calendar.',
  },
  {
    icon: Paintbrush,
    title: '5-step setup wizard',
    benefit: 'Live in under 5 minutes',
    description:
      'Configure appearance, behavior, AI agent, and capabilities with a guided wizard. Live preview updates as you customize. Test in a production-like playground before deploying.',
  },
  {
    icon: Lock,
    title: 'GDPR compliant by default',
    benefit: 'Privacy without the paperwork',
    description:
      'Configurable consent requirements, data retention policies, Right to Access exports, and Right to Erasure deletion. IP addresses stored as SHA-256 hashes.',
  },
];

const identificationModes = [
  {
    mode: 'Anonymous First',
    description: 'Let visitors chat freely, then prompt for email after N messages. Lowest friction, highest engagement.',
    tag: 'Recommended',
  },
  {
    mode: 'Email Required',
    description: 'Collect email before the first message. Best for high-intent pages like pricing and demo requests.',
    tag: 'High quality',
  },
  {
    mode: 'Email Optional',
    description: 'Show an email prompt that visitors can skip. Balanced approach for general website traffic.',
    tag: 'Flexible',
  },
];

const securityFeatures = [
  { icon: Shield, label: 'Cryptographic widget keys with rotation' },
  { icon: Fingerprint, label: 'IP-based rate limiting on sessions' },
  { icon: Lock, label: 'Token-based rate limiting on messages' },
  { icon: Eye, label: 'Tool allow-list (only safe, curated tools)' },
  { icon: Globe, label: 'Multi-tenant isolation by workspace' },
  { icon: FileDown, label: 'GDPR data export and deletion endpoints' },
  { icon: Trash2, label: 'Configurable visitor data retention' },
  { icon: Code2, label: 'CORS headers and origin validation' },
];

const differentiators = [
  {
    label: 'Intercom / Drift / Zendesk',
    items: [
      '$39-$139+/seat/month',
      'Canned bot responses',
      'Separate CRM integration needed',
      'No built-in AI agent',
      'GDPR compliance add-on',
      'Complex pricing tiers',
    ],
  },
  {
    label: 'OzziOS Chat Widget',
    items: [
      'Included in your plan',
      'AI-powered conversations',
      'Native CRM + lead pipeline',
      'Embedded AI with knowledge base',
      'GDPR compliant by default',
      'One script tag to deploy',
    ],
    highlight: true,
  },
];

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

// ---------------------------------------------------------------------------
// Sections
// ---------------------------------------------------------------------------

function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative z-10 mx-auto max-w-[900px] px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <motion.div variants={itemVariants} className="text-center mb-8">
            <div className="tag-neo rounded-full bg-signature/10 border-signature mb-6">
              <MessageSquareText className="w-4 h-4 text-signature" />
              <span className="text-[11px] font-semibold text-signature uppercase tracking-wider">
                Chat Widget
              </span>
            </div>
            <h1 className="text-display font-display text-foreground mb-6">
              Your website talks back.{' '}
              <span className="text-signature">Intelligently.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              An embeddable AI chat widget that answers questions from your knowledge base,
              captures leads, books meetings, and hands off to humans — all from a single
              script tag. Replace Intercom and Drift with something that actually knows your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.ozzios.com/sign-up"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
              >
                Add chat to your site
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-12">
            {[
              { value: '24/7', label: 'Always online' },
              { value: '<1s', label: 'First response' },
              { value: '1 tag', label: 'To deploy' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
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
            Website chat is broken
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Expensive tools, slow responses, and data that never reaches your CRM. Sound familiar?
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

function CapabilitiesSection() {
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
          <span className="tag-neo text-signature mb-6 inline-block">Capabilities</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Not a chatbot. An AI employee.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Powered by your knowledge base, connected to your CRM, and smart enough to know when to hand off to a human.
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
                <p className="text-signature text-xs font-semibold uppercase tracking-wider mb-2">{cap.benefit}</p>
                <h3 className="font-display text-xl text-foreground mb-3">{cap.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{cap.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function IdentificationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-[900px] px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-neo text-signature mb-6 inline-block">Visitor Identification</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Three modes. Your rules.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Control how and when you collect visitor information. Each mode is tuned for a different conversion strategy.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-6"
        >
          {identificationModes.map((mode) => (
            <motion.div
              key={mode.mode}
              variants={itemVariants}
              className="card-neo rounded-xl p-8 flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-display text-xl text-foreground">{mode.mode}</h3>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-signature bg-signature/10 px-2 py-0.5 rounded-full">
                    {mode.tag}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{mode.description}</p>
              </div>
              <Fingerprint className="w-8 h-8 text-muted-foreground/20 shrink-0 hidden sm:block" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SecuritySection() {
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
          <span className="tag-neo text-signature mb-6 inline-block">Security & Compliance</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Enterprise-grade from day one
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Public-facing endpoints protected by multiple security layers. GDPR compliant without bolt-on add-ons.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {securityFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.label}
                variants={itemVariants}
                className="card-neo rounded-xl p-6 group"
              >
                <div className="w-10 h-10 rounded-lg bg-signature/10 flex items-center justify-center mb-4 group-hover:bg-signature/20 transition-colors">
                  <Icon className="w-5 h-5 text-signature" />
                </div>
                <p className="text-sm text-foreground font-medium leading-snug">{feature.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function DeploySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-[900px] px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-neo text-signature mb-6 inline-block">Deploy</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            One script tag. That's it.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            The widget is served via Cloudflare Worker for sub-50ms global delivery. Paste the embed code and your chat widget is live.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Embed code preview */}
          <div className="rounded-xl border-2 border-border bg-card overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
              <div className="w-3 h-3 rounded-full bg-destructive/40" />
              <div className="w-3 h-3 rounded-full bg-sun/40" />
              <div className="w-3 h-3 rounded-full bg-mint/40" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">index.html</span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed">
              <span className="text-muted-foreground">&lt;!-- Add before &lt;/body&gt; --&gt;</span>
              <br />
              <span className="text-electric">&lt;script</span>
              <br />
              <span className="text-muted-foreground ml-4">src</span>
              <span className="text-foreground">=</span>
              <span className="text-mint">"https://widget.ozzios.com/loader.js"</span>
              <br />
              <span className="text-muted-foreground ml-4">data-widget-id</span>
              <span className="text-foreground">=</span>
              <span className="text-mint">"your-widget-id"</span>
              <br />
              <span className="text-electric">&gt;&lt;/script&gt;</span>
            </div>
          </div>

          {/* Steps */}
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            {[
              { step: '1', title: 'Configure', description: 'Set up appearance, behavior, and AI agent in the 5-step wizard.' },
              { step: '2', title: 'Test', description: 'Try it in the built-in playground with real AI responses.' },
              { step: '3', title: 'Deploy', description: 'Paste the script tag on your site. Live in seconds.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-10 h-10 rounded-full bg-signature/10 text-signature font-display text-lg flex items-center justify-center mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-display text-lg text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
          <span className="tag-neo text-signature mb-6 inline-block">Why Switch</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Stop paying per seat for chat
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {differentiators.map((col) => (
            <div
              key={col.label}
              className={`rounded-xl p-8 border-2 ${
                col.highlight
                  ? 'border-signature bg-signature/5'
                  : 'border-border bg-card'
              }`}
            >
              <h3 className={`font-display text-lg mb-6 ${col.highlight ? 'text-signature' : 'text-muted-foreground'}`}>
                {col.label}
              </h3>
              <ul className="space-y-4">
                {col.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <CheckCircle2
                      className={`w-4 h-4 shrink-0 ${col.highlight ? 'text-mint' : 'text-muted-foreground/40'}`}
                    />
                    <span className={col.highlight ? 'text-foreground font-medium' : 'text-muted-foreground'}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
            Turn visitors into leads.
            <br />
            <span className="text-foreground">Automatically.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
            Add AI-powered chat to your website in under 5 minutes. No code changes, no per-seat pricing, no canned responses.
          </p>
          <a
            href="https://app.ozzios.com/sign-up"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
          >
            Get Early Access
            <ArrowRight className="w-5 h-5" />
          </a>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <span>GDPR Compliant</span>
            <span className="hidden sm:inline text-border">|</span>
            <span>Cloudflare Edge Delivery</span>
            <span className="hidden sm:inline text-border">|</span>
            <span>No Per-Seat Pricing</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Main Export
// ---------------------------------------------------------------------------

export function ChatWidgetView() {
  return (
    <>
      <HeroSection />
      <PainPointsSection />
      <CapabilitiesSection />
      <IdentificationSection />
      <SecuritySection />
      <DeploySection />
      <ComparisonSection />
      <CTASection />
    </>
  );
}
