import { motion, useInView, type Variants } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { audienceContent, useAudience } from '../contexts/AudienceContext';
import {
  BackgroundField,
  EASE_OUT,
  SectionHeader,
  SectionHeading,
} from './_landing-primitives';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

export function TestimonialsSection() {
  const { audience } = useAudience();
  const content = audienceContent[audience].testimonials;
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-50px' });

  return (
    <section id="testimonials" className="relative isolate overflow-hidden py-28 lg:py-36">
      <BackgroundField variant="top-left" />

      <div className="relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-14 lg:mb-20"
        >
          <SectionHeader
            eyebrow={content.sectionLabel}
            headlineLines={[content.headline[0], content.headline[1]]}
            sub={content.subheadline}
          />
        </motion.div>

        {/* Testimonials grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="grid gap-4 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-5"
        >
          {content.items.map((testimonial, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              className="group/q flex flex-col rounded-xl border border-border/60 bg-background p-7 shadow-[0_12px_40px_-22px_rgba(34,27,22,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:shadow-[0_22px_50px_-22px_rgba(34,27,22,0.32)]"
            >
              {/* Top row */}
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-signature text-signature" />
                  ))}
                </div>
                <Quote className="h-4 w-4 text-foreground/15" />
              </div>

              {/* Content */}
              <p className="flex-1 text-[14.5px] leading-[1.65] text-foreground/85">
                {testimonial.content}
              </p>

              {/* Author */}
              <div className="mt-7 flex items-center gap-3 border-t border-border/50 pt-5">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-10 w-10 rounded-md object-cover ring-1 ring-border/60"
                />
                <div className="min-w-0">
                  <p className="text-[13.5px] font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/50">
                    {testimonial.role}
                    {testimonial.company ? ` · ${testimonial.company}` : ''}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}

          {/* Trust panel */}
          <motion.div
            variants={cardVariants}
            className="flex h-full flex-col rounded-xl border border-signature/30 bg-[radial-gradient(circle_at_18%_12%,rgba(196,88,63,0.10),transparent_42%),linear-gradient(180deg,rgba(255,253,250,1),rgba(247,240,232,1))] p-7"
          >
            <div>
              <SectionHeading label="Operator sentiment" />

              <div className="mt-5 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-signature text-signature" />
                ))}
                <span className="ml-2 font-mono text-[11px] tabular-nums text-foreground/65">
                  4.9 / 5
                </span>
              </div>

              <h3 className="mt-5 max-w-[14ch] font-display text-[1.7rem] font-semibold leading-[1.05] tracking-[-0.025em] text-foreground sm:text-[1.9rem]">
                Early teams are sticking with it.
              </h3>
              <p className="mt-3 max-w-[36ch] text-[13.5px] leading-[1.6] text-muted-foreground">
                Still onboarding beta customers, so the public quote wall is intentionally tight.
                The usage signal is already strong.
              </p>
            </div>

            <div className="mt-8">
              {/* Avatar row */}
              <div className="mb-5 flex items-center">
                {content.items.map((t, index) => (
                  <img
                    key={t.name}
                    src={t.image}
                    alt={t.name}
                    className={cn(
                      'relative -ml-2 h-9 w-9 rounded-md border border-border/60 object-cover ring-1 ring-background first:ml-0',
                    )}
                    style={{ zIndex: content.items.length - index }}
                  />
                ))}
                <div className="relative -ml-2 inline-flex h-9 items-center gap-1.5 rounded-md border border-border/60 bg-background px-3 font-mono text-[10px] uppercase tracking-wider text-foreground/65">
                  <span className="tabular-nums text-foreground/85">+498</span>
                  in beta
                </div>
              </div>

              {/* Trust ledger */}
              <div className="overflow-hidden rounded-md border border-border/60 bg-background/60">
                <div className="grid grid-cols-3 divide-x divide-border/60">
                  {content.trustStats.map((stat) => (
                    <div key={stat.label} className="px-3 py-3 text-center">
                      <div className="font-display text-[1.2rem] font-semibold leading-none tabular-nums tracking-[-0.025em] text-foreground">
                        {stat.value}
                      </div>
                      <div className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-foreground/45">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
