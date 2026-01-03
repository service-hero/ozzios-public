import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Rocket,
  Bot,
  Users,
  TrendingUp,
  CheckCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  {
    number: '01',
    icon: Rocket,
    title: 'Fire your agency today',
    description: 'Stop paying for black-box retainers. Set up your AI workforce in minutes and own the results.',
    color: 'amber',
    benefits: ['5-minute setup', 'See everything your AI does'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&auto=format',
  },
  {
    number: '02',
    icon: Bot,
    title: 'Hire employees who never leave',
    description: '14 AI employees join your team. They learn your brand, remember everything, and never take clients when they go.',
    color: 'indigo',
    benefits: ['$0 turnover cost', 'Infinite institutional memory'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&auto=format',
  },
  {
    number: '03',
    icon: Users,
    title: 'Work runs while you sleep',
    description: 'Campaigns launch at 3am. Reports generate overnight. You wake up to results, not to-do lists.',
    color: 'emerald',
    benefits: ['24/7 automation', 'No night shifts'],
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&auto=format',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Grow without the hiring pain',
    description: 'Scale revenue without scaling headcount. Add clients, not overhead.',
    color: 'violet',
    benefits: ['Revenue not capped by seats', '65% fewer hires'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format',
  },
];

const colorConfig = {
  amber: {
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    text: 'text-amber-400',
    number: 'text-amber-500/20',
  },
  indigo: {
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
    text: 'text-indigo-400',
    number: 'text-indigo-500/20',
  },
  emerald: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    text: 'text-emerald-400',
    number: 'text-emerald-500/20',
  },
  violet: {
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    text: 'text-violet-400',
    number: 'text-violet-500/20',
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="how-it-works" className="relative py-32 lg:py-40 bg-background">
      {/* Subtle divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-3xl"
        >
          <p className="text-[11px] font-semibold text-amber-400/80 uppercase tracking-[0.2em] mb-4">
            How it works
          </p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-display leading-[1.1] tracking-[-0.02em] text-foreground mb-6">
            The hiring treadmill
            <br />
            <span className="text-foreground/30">stops here.</span>
          </h2>
          <p className="text-lg text-foreground/40 leading-relaxed max-w-xl">
            Stop paying $15-25K per hire. Stop losing institutional knowledge. Start building a team that stays forever.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-4"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            const colors = colorConfig[step.color as keyof typeof colorConfig];
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.01] overflow-hidden transition-all duration-500 hover:border-white/[0.1] hover:bg-white/[0.02]"
              >
                <div className={cn(
                  'flex flex-col lg:flex-row',
                  !isEven && 'lg:flex-row-reverse'
                )}>
                  {/* Image side */}
                  <div className="relative lg:w-2/5 h-48 lg:h-auto min-h-[200px]">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity"
                    />
                    <div className={cn(
                      'absolute inset-0',
                      isEven
                        ? 'bg-gradient-to-r from-transparent via-transparent to-background'
                        : 'bg-gradient-to-l from-transparent via-transparent to-background',
                      'hidden lg:block'
                    )} />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent lg:hidden" />

                    {/* Step number overlay */}
                    <div className={cn(
                      'absolute top-6 font-bold text-[64px] leading-none opacity-30',
                      isEven ? 'left-6' : 'right-6',
                      colors.number
                    )}>
                      {step.number}
                    </div>
                  </div>

                  {/* Content side */}
                  <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-start gap-4">
                      <div className={cn(
                        'shrink-0 h-12 w-12 rounded-xl flex items-center justify-center border',
                        colors.bg,
                        colors.border
                      )}>
                        <Icon className={cn('h-5 w-5', colors.text)} />
                      </div>
                      <div className="flex-1">
                        <div className={cn('text-[12px] font-semibold mb-2', colors.text)}>
                          Step {step.number}
                        </div>
                        <h3 className="text-xl lg:text-2xl font-display text-foreground mb-3">
                          {step.title}
                        </h3>
                        <p className="text-[15px] leading-relaxed text-foreground/40 mb-4">
                          {step.description}
                        </p>

                        {/* Benefits */}
                        <div className="flex flex-wrap gap-4">
                          {step.benefits.map((benefit) => (
                            <span
                              key={benefit}
                              className="inline-flex items-center gap-1.5 text-[12px] text-foreground/40"
                            >
                              <CheckCircle className="h-3.5 w-3.5 text-emerald-400/60" />
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="https://app.ozzios.com/sign-up"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#0A0A0B] font-medium text-[15px] hover:bg-white/90 transition-colors btn-enterprise group"
          >
            Get started free
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
