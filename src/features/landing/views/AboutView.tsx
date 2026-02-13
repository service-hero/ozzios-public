'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Shield, Brain, Users, ArrowRight } from 'lucide-react';
import { CTASection } from '../components/CTASection';

const values = [
  {
    icon: Zap,
    title: 'Relentless Innovation',
    description:
      'We ship fast and iterate faster. Every week, OzziOS gets smarter, more capable, and more connected. Our AI agents improve with every interaction.',
  },
  {
    icon: Shield,
    title: 'Radical Transparency',
    description:
      'No black boxes. Every action your AI team takes is logged, visible, and auditable. You see exactly what your marketing is doing, 24/7.',
  },
  {
    icon: Brain,
    title: 'Agency-First Design',
    description:
      'Built by people who ran agencies. We know the pain of turnover, tool sprawl, and client churn. OzziOS is the platform we wished we had.',
  },
  {
    icon: Users,
    title: 'Customer Obsession',
    description:
      'Your success is our success. We measure ourselves by your results, not our features. Every decision starts with "does this help the customer win?"',
  },
];

const stats = [
  { value: '30+', label: 'AI Agents' },
  { value: '77+', label: 'Built-in Tools' },
  { value: '24/7', label: 'Always On' },
  { value: '0%', label: 'Turnover' },
];

const teamMembers = [
  {
    name: 'Garrett Elmore',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format',
  },
  {
    name: 'Engineering',
    role: 'AI & Platform',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&h=200&fit=crop&auto=format',
  },
  {
    name: 'Product',
    role: 'Design & UX',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=200&h=200&fit=crop&auto=format',
  },
  {
    name: 'Growth',
    role: 'Marketing & Sales',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=200&h=200&fit=crop&auto=format',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="tag-neo text-signature mb-8 inline-block">Our Mission</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight mb-6">
            Replacing entire marketing
            <br />
            <span className="text-signature">departments with AI</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            We're building a future where every business has access to a full marketing
            team -- powered by AI agents that work 24/7, never quit, and get smarter
            every day.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-3xl md:text-4xl text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
          >
            <span className="tag-neo text-signature mb-6 inline-block">Our Story</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-6">
              Born from the frustration of running an agency
            </h2>
            <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
              <p>
                We spent years running marketing agencies. We know what it's like to hire,
                train, and lose talented people. We know the pain of explaining the same
                processes to every new hire. We know what it costs when your best account
                manager leaves and takes years of client knowledge with them.
              </p>
              <p>
                So we asked a simple question: what if AI could do the repetitive,
                process-driven work that burns out your team -- and do it better, faster,
                and 24/7?
              </p>
              <p>
                OzziOS is the answer. We built an unlimited AI workforce — 30+ specialized
                agents out of the box, plus the ability to create your own. They work together,
                share knowledge, and never take your clients when they leave. Because they never leave.
              </p>
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
                    <h3 className="font-semibold text-foreground mb-1">The Problem</h3>
                    <p className="text-sm text-muted-foreground">
                      Marketing agencies are expensive black boxes. Businesses pay thousands
                      monthly and never see the work being done.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-signature/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-signature text-sm">02</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">The Insight</h3>
                    <p className="text-sm text-muted-foreground">
                      80% of agency work is repeatable process. AI can handle it -- with
                      total transparency and zero turnover.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-signature/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-signature text-sm">03</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">The Solution</h3>
                    <p className="text-sm text-muted-foreground">
                      An unlimited AI workforce that works 24/7, remembers everything, and shows you
                      every action they take. Your marketing, fully visible.
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

function ValuesSection() {
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
          <span className="tag-neo text-signature mb-6 inline-block">What We Believe</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Our principles
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            The values that guide every decision we make and every feature we build.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="card-neo rounded-xl p-8 group"
              >
                <div className="w-12 h-12 rounded-xl bg-signature/10 flex items-center justify-center mb-5 group-hover:bg-signature/20 transition-colors">
                  <Icon className="w-6 h-6 text-signature" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function TeamSection() {
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
          <span className="tag-neo text-signature mb-6 inline-block">Our Team</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            The humans behind the AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            A small, focused team building the future of marketing automation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="text-center group"
            >
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-xl overflow-hidden border-2 border-border group-hover:border-signature transition-colors">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-semibold text-foreground text-sm">{member.name}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Hiring callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 card-neo rounded-full px-6 py-3">
            <span className="text-sm text-muted-foreground">
              We're hiring. Join us and build the future of marketing.
            </span>
            <a
              href="/careers"
              className="inline-flex items-center gap-1 text-sm font-medium text-signature hover:underline"
            >
              View openings
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function AboutView() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <ValuesSection />
      <TeamSection />
      <CTASection />
    </>
  );
}
