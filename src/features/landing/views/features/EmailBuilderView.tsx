'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight,
  Mail,
  Paintbrush,
  MousePointerClick,
  Smartphone,
  Layers,
  Variable,
  Image,
  CheckCircle2,
  Zap,
  Clock,
  Code2,
  LayoutGrid,
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
    title: 'HTML email is a nightmare',
    description:
      'You spend hours wrestling with inline styles, broken tables, and rendering bugs across 90+ email clients. Every email is a mini engineering project.',
  },
  {
    icon: Clock,
    title: 'Templates take days, not minutes',
    description:
      'Designing, coding, and testing a single email template eats 4-8 hours. Multiply that across every campaign, every client, every week.',
  },
  {
    icon: Smartphone,
    title: 'Mobile rendering is a gamble',
    description:
      'You preview on desktop, hit send, then discover it looks broken on half your audience\'s phones. Gmail, Outlook, Apple Mail -- all render differently.',
  },
  {
    icon: Variable,
    title: 'Personalization is manual copy-paste',
    description:
      'Swapping in client names, company details, and custom fields means duplicate templates and human error. One wrong merge tag, one embarrassing send.',
  },
];

const capabilities = [
  {
    icon: Paintbrush,
    title: 'Drag-and-drop visual editor',
    description:
      '16 block types -- text, images, buttons, columns, social links, FAQs, sliders -- compose like building with Lego. Zero code required.',
  },
  {
    icon: Smartphone,
    title: 'Live device preview',
    description:
      'See exactly how your email renders on desktop, tablet, and mobile in real time. Pixel-accurate device frames, not approximations.',
  },
  {
    icon: Variable,
    title: 'Dynamic merge tags',
    description:
      'Insert {{client.name}}, {{lead.service}}, or any custom field. Preview with real contact data before sending. No more placeholder mistakes.',
  },
  {
    icon: Image,
    title: 'Built-in image editor',
    description:
      'Upload, crop (1:1, 4:3, 16:9, 9:16), and zoom -- all inline. Images upload to CDN automatically. No switching to Photoshop.',
  },
  {
    icon: Layers,
    title: 'Starter templates included',
    description:
      'Welcome emails, newsletters, notifications -- start from proven layouts and customize. Ship your first email in under 5 minutes.',
  },
  {
    icon: Zap,
    title: 'Server-side rendering',
    description:
      'Templates render to bulletproof HTML via React Email at send time. Consistent rendering across every client, every time.',
  },
];

const blockTypes = [
  'Text',
  'Heading',
  'Button',
  'Image',
  'Video',
  'Divider',
  'Spacer',
  'Row',
  'Column',
  'Container',
  'Section',
  'Social',
  'Footer',
  'Code',
  'FAQ',
  'Slider',
];

function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative z-10 mx-auto max-w-[900px] px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <motion.div variants={itemVariants} className="text-center mb-8">
            <div className="tag-neo rounded-full bg-signature/10 border-signature mb-6">
              <Mail className="w-4 h-4 text-signature" />
              <span className="text-[11px] font-semibold text-signature uppercase tracking-wider">
                Email Builder
              </span>
            </div>
            <h1 className="text-display font-display text-foreground mb-6">
              Stop coding emails.
              <br />
              <span className="text-signature">Start designing them.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              A visual drag-and-drop email builder with 16 block types, live device preview,
              and dynamic personalization. Build emails that render perfectly everywhere --
              in minutes, not hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.ozzios.com/sign-up"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
              >
                Build your first email
                <ArrowRight className="w-5 h-5" />
              </a>
              <span className="text-sm text-muted-foreground">
                16 block types -- 3 starter templates -- zero code
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
            Email design shouldn't require a developer
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Yet most teams still hand-code emails or fight clunky editors that produce
            broken layouts.
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
              Three panels.
              <br />
              Total control.
            </h2>
            <div className="space-y-6 text-muted-foreground text-base leading-relaxed">
              <p>
                The email builder uses a Notion-style three-panel layout. Pick blocks from the
                left, arrange them in the center canvas, and fine-tune properties on the right.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-mint mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-foreground">Block palette</strong> -- 16 block types
                    from text and buttons to image sliders and FAQ accordions
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-mint mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-foreground">Live canvas</strong> -- Drag, drop, nest,
                    and reorder blocks with real-time preview
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-mint mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-foreground">Properties panel</strong> -- Edit colors,
                    spacing, alignment, links, and variables per block
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
                    <h3 className="font-semibold text-foreground mb-1">Pick your blocks</h3>
                    <p className="text-sm text-muted-foreground">
                      Choose from text, headings, buttons, images, videos, social links,
                      columns, sections, FAQs, sliders, and more.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-signature/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-signature text-sm">02</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Design visually</h3>
                    <p className="text-sm text-muted-foreground">
                      Drag blocks into position, nest them inside rows and columns,
                      and preview across devices -- all without writing a line of code.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-signature/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-signature text-sm">03</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Send with confidence</h3>
                    <p className="text-sm text-muted-foreground">
                      React Email renders bulletproof HTML on send. Your template looks
                      identical in Gmail, Outlook, Apple Mail, and every other client.
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
            Everything you need to build great emails
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Professional-grade tools without the professional-grade complexity.
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

function BlockTypesSection() {
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
            <LayoutGrid className="w-4 h-4" />
            16 Block Types
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            A block for every need
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            From simple text to interactive sliders and FAQ accordions.
            Compose them however you want.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-wrap justify-center gap-3"
        >
          {blockTypes.map((block) => (
            <motion.div
              key={block}
              variants={itemVariants}
              className="px-4 py-2 bg-card border-2 border-border rounded-lg text-sm font-medium text-foreground hover:border-signature/30 transition-colors"
            >
              {block}
            </motion.div>
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
            Your next email,
            <br />
            built in minutes.
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
            Stop fighting HTML tables. Start building beautiful, responsive emails
            with a visual editor that just works.
          </p>
          <a
            href="https://app.ozzios.com/sign-up"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
          >
            Start building for free
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

export function EmailBuilderView() {
  return (
    <>
      <HeroSection />
      <PainPointsSection />
      <SolutionShowcaseSection />
      <CapabilitiesSection />
      <BlockTypesSection />
      <CTASection />
    </>
  );
}
