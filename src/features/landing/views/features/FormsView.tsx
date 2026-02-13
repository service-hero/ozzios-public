'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight,
  ClipboardList,
  Code2,
  Zap,
  UserPlus,
  Shield,
  MousePointerClick,
  CheckCircle2,
  FormInput,
  Globe,
  RefreshCw,
  BarChart3,
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
    icon: Code2,
    title: 'Forms require a developer',
    description:
      'Every new lead form, contact form, or survey needs someone to code it, style it, embed it, and connect it to your CRM. A 5-minute task becomes a 5-day ticket.',
  },
  {
    icon: RefreshCw,
    title: 'Submissions go nowhere',
    description:
      'Form data lands in an inbox or spreadsheet. No automatic contact creation, no workflow trigger, no follow-up. Leads go cold while you manually copy-paste into your CRM.',
  },
  {
    icon: Shield,
    title: 'Spam floods your inbox',
    description:
      'Without proper rate limiting and validation, bots fill your forms with junk. You waste time sorting real submissions from garbage, or worse -- you miss real leads entirely.',
  },
  {
    icon: Globe,
    title: 'Embedding is fragile',
    description:
      'iframes that break on mobile. Scripts that conflict with your site. Styling that doesn\'t match your brand. Every embed is a gamble that something will look wrong.',
  },
];

const capabilities = [
  {
    icon: MousePointerClick,
    title: 'Visual drag-and-drop builder',
    description:
      'Build forms visually with drag-and-drop field arrangement. Text inputs, dropdowns, checkboxes, file uploads -- add fields in seconds, no code required.',
  },
  {
    icon: Globe,
    title: 'One-line embed system',
    description:
      'Embed any form with a single script tag. The Cloudflare Worker generates inline HTML, CSS, and JS -- no iframes, no style conflicts, works on any site.',
  },
  {
    icon: UserPlus,
    title: 'Automatic contact creation',
    description:
      'Every submission automatically creates or updates a contact in your CRM. Name, email, phone, custom fields -- mapped and saved without manual data entry.',
  },
  {
    icon: Zap,
    title: 'Workflow triggers',
    description:
      'Form submissions trigger automated workflows. Send a confirmation email, assign a task, notify your team, start a nurture sequence -- all without lifting a finger.',
  },
  {
    icon: Shield,
    title: 'Built-in spam protection',
    description:
      'Per-email rate limiting stops bot floods. Validation rules catch garbage submissions before they reach you. Only real leads make it through.',
  },
  {
    icon: BarChart3,
    title: 'Submission analytics',
    description:
      'Track form views, submissions, and conversion rates. See which forms perform, which fields cause drop-off, and where your leads are coming from.',
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
              <ClipboardList className="w-4 h-4 text-signature" />
              <span className="text-[11px] font-semibold text-signature uppercase tracking-wider">
                Forms
              </span>
            </div>
            <h1 className="text-display font-display text-foreground mb-6">
              Capture leads.
              <br />
              <span className="text-signature">Not just form data.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Build forms visually, embed them anywhere with one line of code, and
              automatically create contacts, trigger workflows, and block spam.
              Forms that work for you, not just collect data.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.ozzios.com/sign-up"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
              >
                Build your first form
                <ArrowRight className="w-5 h-5" />
              </a>
              <span className="text-sm text-muted-foreground">
                Drag-and-drop -- one-line embed -- auto CRM sync
              </span>
            </div>
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
            Forms shouldn't be this hard
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Building a form is the easy part. Getting submissions into your CRM, triggering
            follow-ups, and filtering spam -- that's where everything breaks.
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
                <div className="w-12 h-12 rounded-xl bg-signature/10 flex items-center justify-center mb-5 group-hover:bg-signature/20 transition-colors">
                  <Icon className="w-6 h-6 text-signature" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{point.title}</h3>
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

function SolutionShowcaseSection() {
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
            <span className="tag-neo text-signature mb-6 inline-block">How It Works</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-6">
              Build. Embed.
              <br />
              Automate.
            </h2>
            <div className="space-y-6 text-muted-foreground text-base leading-relaxed">
              <p>
                Design your form visually, grab the embed code, and drop it on any website.
                When someone submits, the data flows directly into your CRM and triggers
                whatever workflow you've configured. The entire pipeline is automated.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-mint mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-foreground">Drag-and-drop builder</strong> -- add
                    fields, configure validation, set required fields, arrange layout visually
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-mint mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-foreground">Edge-deployed embed</strong> --
                    Cloudflare Worker serves forms at the edge, no iframe needed, fast everywhere
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-mint mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-foreground">Auto contact sync</strong> -- submissions
                    create or update contacts in your CRM with all fields mapped
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-mint mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-foreground">Workflow triggers</strong> -- kick off
                    emails, tasks, notifications, or any automated sequence on submit
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="card-neo rounded-xl p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-signature/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-signature text-sm">01</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Design your form</h3>
                    <p className="text-sm text-muted-foreground">
                      Drag fields into place, set validation rules, customize labels and
                      placeholder text. Preview live as you build.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-signature/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-signature text-sm">02</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Embed anywhere</h3>
                    <p className="text-sm text-muted-foreground">
                      Copy one script tag and paste it on your website. The form renders
                      inline with your page styling -- no iframe, no conflicts.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-signature/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-signature text-sm">03</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Leads flow in automatically</h3>
                    <p className="text-sm text-muted-foreground">
                      Submissions create contacts, trigger workflows, and send notifications.
                      Your team follows up in minutes, not days.
                    </p>
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
            Forms that close the loop
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Not just data collection. A complete lead capture pipeline from form
            submission to CRM to automated follow-up.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={capability.title}
                variants={itemVariants}
                className="card-neo rounded-xl p-8 group"
              >
                <div className="w-12 h-12 rounded-xl bg-signature/10 flex items-center justify-center mb-5 group-hover:bg-signature/20 transition-colors">
                  <Icon className="w-6 h-6 text-signature" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-3">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {capability.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function EmbedSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-neo text-signature mb-6 inline-block">
            <FormInput className="w-4 h-4" />
            Embed System
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            One script tag. Any website.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Edge-deployed on Cloudflare Workers for instant loading worldwide.
            No iframes. No style conflicts. Just works.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="card-neo rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-6 py-3 bg-muted/50 border-b-2 border-border">
              <div className="w-3 h-3 rounded-full bg-border" />
              <div className="w-3 h-3 rounded-full bg-border" />
              <div className="w-3 h-3 rounded-full bg-border" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">embed code</span>
            </div>
            <div className="p-6">
              <code className="text-sm text-foreground/80 font-mono leading-relaxed block">
                <span className="text-muted-foreground">{'<!-- Add to your website -->'}</span>
                <br />
                <span className="text-electric">{'<script'}</span>
                {' '}
                <span className="text-signature">src</span>
                <span className="text-muted-foreground">=</span>
                <span className="text-mint">"https://forms.ozzios.com/loader.js?key=your-form-key"</span>
                <span className="text-electric">{'>'}</span>
                <br />
                <span className="text-electric">{'</script>'}</span>
              </code>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[
              { label: 'No iframe', detail: 'Renders inline' },
              { label: 'Edge CDN', detail: 'Global speed' },
              { label: 'Auto-styled', detail: 'Matches your site' },
            ].map((item) => (
              <div key={item.label} className="p-4">
                <div className="font-display text-foreground text-sm mb-1">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.detail}</div>
              </div>
            ))}
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
            Every form submission,
            <br />
            a new opportunity.
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
            Stop losing leads between form submission and follow-up.
            Build forms that feed directly into your pipeline.
          </p>
          <a
            href="https://app.ozzios.com/sign-up"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
          >
            Start capturing leads
            <ArrowRight className="w-5 h-5" />
          </a>
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

export function FormsView() {
  return (
    <>
      <HeroSection />
      <PainPointsSection />
      <SolutionShowcaseSection />
      <CapabilitiesSection />
      <EmbedSection />
      <CTASection />
    </>
  );
}
