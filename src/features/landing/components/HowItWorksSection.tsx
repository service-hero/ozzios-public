import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Rocket,
  Bot,
  Users,
  TrendingUp,
  Check,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAudience, audienceContent } from '../contexts/AudienceContext';

const stepIcons = [Rocket, Bot, Users, TrendingUp];
const stepImages = [
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format',
];

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
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function FeaturesSection() {
  const { audience } = useAudience();
  const content = audienceContent[audience].howItWorks;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="mb-16 lg:mb-20 max-w-2xl"
        >
          <p className="text-sm font-medium text-signature uppercase tracking-wide mb-3">
            {content.sectionLabel}
          </p>
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight text-foreground mb-6">
            {content.headline[0]}
            <br />
            <span className="text-muted-foreground">{content.headline[1]}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {content.subheadline}
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
          {content.steps.map((step, index) => {
            const Icon = stepIcons[index];
            const image = stepImages[index];
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-border hover:shadow-sm transition-all duration-300"
              >
                <div className={cn(
                  'flex flex-col lg:flex-row',
                  !isEven && 'lg:flex-row-reverse'
                )}>
                  {/* Image side */}
                  <div className="relative lg:w-2/5 h-48 lg:h-auto min-h-[200px]">
                    <img
                      src={image}
                      alt={step.title}
                      className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className={cn(
                      'absolute inset-0',
                      isEven
                        ? 'bg-gradient-to-r from-transparent via-transparent to-card'
                        : 'bg-gradient-to-l from-transparent via-transparent to-card',
                      'hidden lg:block'
                    )} />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent lg:hidden" />

                    {/* Step number overlay */}
                    <div className={cn(
                      'absolute top-6 font-bold text-[64px] leading-none text-border',
                      isEven ? 'left-6' : 'right-6'
                    )}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Content side */}
                  <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 h-12 w-12 rounded-xl bg-signature/10 flex items-center justify-center border border-border">
                        <Icon className="h-5 w-5 text-signature" />
                      </div>
                      <div className="flex-1">
                        <div className="text-[12px] font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                          Step {String(index + 1).padStart(2, '0')}
                        </div>
                        <h3 className="text-xl lg:text-2xl font-display text-foreground mb-3">
                          {step.title}
                        </h3>
                        <p className="text-[15px] leading-relaxed text-muted-foreground mb-4">
                          {step.description}
                        </p>

                        {/* Benefits */}
                        <div className="flex flex-wrap gap-4">
                          {step.benefits.map((benefit) => (
                            <span
                              key={benefit}
                              className="inline-flex items-center gap-1.5 text-[12px] text-muted-foreground"
                            >
                              <Check className="h-3.5 w-3.5 text-muted-foreground" />
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
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-signature text-white font-medium text-[15px] hover:bg-signature/90 transition-colors group"
          >
            Get started free
            <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
