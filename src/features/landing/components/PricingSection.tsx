import { motion, useInView } from 'framer-motion';
import { CalendarCheck, MessageSquare, Sparkles, type LucideIcon } from 'lucide-react';
import { useRef } from 'react';
import { BackgroundField, EASE_OUT, PrimaryCTA, SectionHeader, SecondaryCTA } from './_landing-primitives';
import { DEMO_CTA_HREF } from './book-demo';

// Why this section exists:
// Conversion path on the home page. Every new customer starts with a guided
// demo, so this section is a focused "Setup a demo" call to action.

interface DemoStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

const demoSteps: DemoStep[] = [
  {
    icon: CalendarCheck,
    title: 'Pick a time',
    description:
      'A 30-minute working session with our team. No slide-deck pitch — we open the product and tailor it to your business.',
  },
  {
    icon: Sparkles,
    title: 'See it on your data',
    description:
      'We configure agents, workflows, and integrations against a real workflow from your business so you see the lift, not a sandbox.',
  },
  {
    icon: MessageSquare,
    title: 'Get a tailored plan',
    description:
      'You leave with a written rollout plan and a transparent quote sized to your team, locations, and AI volume.',
  },
];

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pricing" className="relative isolate overflow-hidden py-28 lg:py-36">
      <BackgroundField variant="top-center" />

      <div className="relative z-10 mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="mb-14 lg:mb-16"
        >
          <SectionHeader
            eyebrow="Setup a demo"
            headlineLines={['See OzziOS', 'on your business.']}
            sub="A 30-minute working session where we configure agents, workflows, and integrations against a real workflow from your business — and quote it on the spot."
            align="center"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE_OUT }}
          className="mx-auto grid max-w-[980px] grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4"
        >
          {demoSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="relative flex flex-col gap-3 rounded-xl border border-border/60 bg-background/80 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:shadow-[0_18px_50px_-26px_rgba(34,27,22,0.30)]"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/60 bg-background text-foreground/70">
                    <Icon className="h-4 w-4 text-signature" />
                  </span>
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/40">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-[15px] font-semibold text-foreground">{step.title}</h3>
                <p className="text-[12.5px] leading-[1.55] text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.25, ease: EASE_OUT }}
          className="mx-auto mt-10 flex max-w-[980px] flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <PrimaryCTA href={DEMO_CTA_HREF} size="lg" shortcut="D">
            Setup a demo
          </PrimaryCTA>
          <SecondaryCTA href="/contact" size="lg">
            Talk to sales
          </SecondaryCTA>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 text-center font-mono text-[10.5px] uppercase tracking-[0.22em] text-foreground/45"
        >
          30 minutes · Real product, real data · Quote at the end
        </motion.p>
      </div>
    </section>
  );
}
