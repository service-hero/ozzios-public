'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Globe,
  DollarSign,
  Heart,
  Cpu,
  Rocket,
  Calendar,
} from 'lucide-react';
import { CTASection } from '../components/CTASection';

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
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const benefits = [
  {
    icon: Globe,
    title: 'Remote-first',
    description:
      'Work from anywhere in the world. We believe great work happens where you are most productive.',
  },
  {
    icon: DollarSign,
    title: 'Competitive pay',
    description:
      'Top-of-market compensation with equity options. We pay well because we hire the best.',
  },
  {
    icon: Heart,
    title: 'Health & wellness',
    description:
      'Comprehensive health, dental, and vision coverage for you and your family.',
  },
  {
    icon: Cpu,
    title: 'Best-in-class tools',
    description:
      'Latest hardware, any software you need, and a generous home office stipend to set up your workspace.',
  },
  {
    icon: Rocket,
    title: 'Growth-oriented',
    description:
      'Learning budget, conference attendance, and mentorship from experienced leaders in the industry.',
  },
  {
    icon: Calendar,
    title: 'Flexible time off',
    description:
      'Unlimited PTO with a minimum of 3 weeks encouraged. Recharge when you need to.',
  },
];

const values = [
  {
    title: 'Ship with conviction',
    description: 'We move fast, make decisions with incomplete information, and iterate based on real feedback.',
  },
  {
    title: 'Think from first principles',
    description: 'We question assumptions and build solutions grounded in what actually matters, not industry convention.',
  },
  {
    title: 'Own the outcome',
    description: 'Every person has full ownership over their work. No hand-offs, no finger-pointing.',
  },
  {
    title: 'Stay curious',
    description: 'AI is evolving fast. We expect everyone to keep learning, experimenting, and pushing boundaries.',
  },
];

export function CareersView() {
  const heroRef = useRef(null);
  const benefitsRef = useRef(null);
  const valuesRef = useRef(null);
  const positionsRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: '-100px' });
  const valuesInView = useInView(valuesRef, { once: true, margin: '-100px' });
  const positionsInView = useInView(positionsRef, { once: true, margin: '-100px' });

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-sm font-medium text-signature mb-4 tracking-wide uppercase">
              Careers
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Join the team
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We&apos;re building the future of marketing automation. Our AI agents
              replace entire agency workflows -- and we need exceptional people
              to make it happen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative py-24 lg:py-32 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            ref={benefitsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Why work at OzziOs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We take care of our team so they can focus on building extraordinary products.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={benefitsInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                className="rounded-xl border-2 border-border bg-card p-8 transition-all duration-150 hover:shadow-[4px_4px_0_0_hsl(var(--border))] hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-signature/10 mb-5">
                  <benefit.icon className="h-6 w-6 text-signature" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            ref={valuesRef}
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Our values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide how we build, collaborate, and make decisions.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={valuesInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="flex gap-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground text-background font-display text-sm">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-1">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="relative py-24 lg:py-32 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            ref={positionsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={positionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Open positions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              We&apos;re always looking for talented people. Check back soon for new openings.
            </p>

            <div className="rounded-xl border-2 border-dashed border-border bg-card/50 p-16 max-w-2xl mx-auto">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <Rocket className="h-7 w-7 text-muted-foreground" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">
                No open positions right now
              </h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                We&apos;re not actively hiring at the moment, but we&apos;re always
                interested in hearing from exceptional people. Follow us to stay updated.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://x.com/ozzios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg border-2 border-border bg-background text-foreground font-medium text-sm hover:bg-muted transition-colors duration-150"
                >
                  Follow on X
                </a>
                <a
                  href="https://linkedin.com/company/ozzios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg border-2 border-border bg-background text-foreground font-medium text-sm hover:bg-muted transition-colors duration-150"
                >
                  Follow on LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
