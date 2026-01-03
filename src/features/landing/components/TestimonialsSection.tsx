import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';
import { useAudience, audienceContent } from '../contexts/AudienceContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function TestimonialsSection() {
  const { audience } = useAudience();
  const content = audienceContent[audience].testimonials;
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-50px' });

  return (
    <section
      id="testimonials"
      className="relative py-32 lg:py-40 bg-background overflow-hidden"
    >
      {/* Subtle divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-[11px] font-semibold text-amber-400/80 uppercase tracking-[0.2em] mb-4">
            {content.sectionLabel}
          </p>
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-display leading-[1.1] tracking-[-0.02em] text-foreground mb-6">
            {content.headline[0]}
            <span className="text-foreground/30"> {content.headline[1]}</span>
          </h2>
          <p className="text-lg text-foreground/40 max-w-lg mx-auto">
            {content.subheadline}
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {content.items.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={cn(
                'group relative rounded-2xl border border-white/[0.06] bg-white/[0.01] p-6 lg:p-8',
                'transition-all duration-500 hover:border-white/[0.1] hover:bg-white/[0.02]',
                index === 0 && 'md:col-span-2 lg:col-span-1'
              )}
            >
              {/* Quote icon */}
              <div className="mb-6">
                <Quote className="h-8 w-8 text-amber-500/20" />
              </div>

              {/* Content */}
              <p className="text-[15px] leading-relaxed text-foreground/50 mb-8">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10"
                />
                <div>
                  <p className="text-[14px] font-medium text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-[12px] text-foreground/30">
                    {testimonial.role} <span className="text-amber-400/50">@{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-8 lg:gap-16"
        >
          {content.trustStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-semibold text-foreground mb-1">{stat.value}</div>
              <div className="text-[12px] text-foreground/30 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
