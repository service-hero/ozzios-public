import { motion, useInView, type Variants } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { audienceContent, useAudience } from '../contexts/AudienceContext';
import {
  BackgroundField,
  EASE_OUT,
  Kbd,
  SectionHeader,
  SectionHeading,
} from './_landing-primitives';

const stepImages = [
  '/images/Gemini_Generated_Image_u6mqxnu6mqxnu6mq.webp',
  '/images/Gemini_Generated_Image_2eqehs2eqehs2eqe.webp',
  '/images/Gemini_Generated_Image_rbkrybrbkrybrbkr.webp',
  '/images/Gemini_Generated_Image_bj78nibj78nibj78.webp',
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};

export function FeaturesSection() {
  const { audience } = useAudience();
  const content = audienceContent[audience].howItWorks;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="how-it-works" className="relative isolate overflow-hidden py-28 lg:py-36">
      <BackgroundField variant="top-right" />

      <div className="relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          className="mb-14 lg:mb-20"
        >
          <SectionHeader
            eyebrow={content.sectionLabel}
            headlineLines={[content.headline[0], content.headline[1]]}
            sub={content.subheadline}
          />
        </motion.div>

        {/* Steps */}
        <div className="relative mt-8">
          {/* Vertical rail (desktop only) */}
          <div className="absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 overflow-hidden lg:block">
            <div className="h-full w-full bg-border/50" />
            <motion.div
              initial={{ top: '-100%' }}
              animate={{ top: '100%' }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              className="absolute left-0 h-[28%] w-full bg-gradient-to-b from-transparent via-signature to-transparent opacity-60"
            />
          </div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="relative z-10 space-y-8 lg:space-y-20"
          >
            {content.steps.map((step, index) => {
              const image = stepImages[index];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className={cn(
                    'group/step relative',
                    isEven ? 'lg:mr-[50%] lg:pr-10' : 'lg:ml-[50%] lg:pl-10',
                  )}
                >
                  {/* Node dot */}
                  <span
                    aria-hidden
                    className={cn(
                      'absolute top-1/2 z-20 hidden h-3 w-3 -translate-y-1/2 rounded-full border-2 border-background bg-foreground/20 transition-colors duration-300 group-hover/step:bg-signature lg:block',
                      isEven ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2',
                    )}
                  />

                  <div className="overflow-hidden rounded-xl border border-border/70 bg-background shadow-[0_18px_50px_-26px_rgba(34,27,22,0.30)] transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:shadow-[0_24px_60px_-22px_rgba(34,27,22,0.40)]">
                    <div className={cn('flex flex-col lg:flex-row', !isEven && 'lg:flex-row-reverse')}>
                      {/* Image */}
                      <div className="relative h-48 min-h-[200px] overflow-hidden lg:h-auto lg:w-2/5">
                        <img
                          src={image}
                          alt={step.title}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover/step:scale-[1.04]"
                        />
                        <div
                          aria-hidden
                          className={cn(
                            'absolute inset-0 hidden lg:block',
                            isEven
                              ? 'bg-gradient-to-r from-transparent via-transparent to-background/95'
                              : 'bg-gradient-to-l from-transparent via-transparent to-background/95',
                          )}
                        />
                        <div
                          aria-hidden
                          className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-transparent lg:hidden"
                        />

                        {/* Step number */}
                        <div
                          className={cn(
                            'absolute top-4 font-display text-[3rem] font-semibold leading-none tracking-[-0.04em] text-foreground/[0.10]',
                            isEven ? 'left-5' : 'right-5',
                          )}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>

                      {/* Body */}
                      <div className="flex flex-1 flex-col justify-center p-7 lg:p-9">
                        <div className="mb-4">
                          <SectionHeading label={`Step ${String(index + 1).padStart(2, '0')}`} />
                        </div>
                        <h3 className="font-display text-[1.5rem] font-semibold leading-[1.05] tracking-[-0.025em] text-foreground sm:text-[1.7rem]">
                          {step.title}
                        </h3>
                        <p className="mt-3 max-w-[42ch] text-[14px] leading-[1.6] text-muted-foreground">
                          {step.description}
                        </p>

                        {/* Benefits */}
                        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5">
                          {step.benefits.map((benefit) => (
                            <span
                              key={benefit}
                              className="inline-flex items-center gap-1.5 text-[12px] text-muted-foreground"
                            >
                              <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-signature/30 bg-signature/10">
                                <Check className="h-2 w-2 text-signature" strokeWidth={3} />
                              </span>
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="https://app.ozzios.com/sign-up"
            className={cn(
              'group/cta relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-md bg-foreground pl-5 pr-3 text-[14px] font-medium text-background',
              'shadow-[0_1px_0_rgba(255,255,255,0.18)_inset,0_14px_30px_-12px_rgba(34,27,22,0.45)]',
              'transition-all duration-200 hover:bg-[#1a1410] active:translate-y-px',
            )}
          >
            <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
            Get early access
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-0.5" />
            <Kbd tone="dark">S</Kbd>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
