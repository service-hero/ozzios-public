import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useAudience, audienceContent } from '../contexts/AudienceContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
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
      className="relative py-24 lg:py-32 bg-background"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24 flex flex-col items-center"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-signature" />
            <p className="text-[11px] font-semibold text-signature uppercase tracking-[0.2em]">
              {content.sectionLabel}
            </p>
            <div className="w-8 h-px bg-signature" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground leading-[1.1] tracking-tight mb-6">
            {content.headline[0]}
            <br />
            <span className="text-muted-foreground/80">{content.headline[1]}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl font-light leading-relaxed">
            {content.subheadline}
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {content.items.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-card rounded-xl border border-border/80 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] hover:border-signature/30 transition-all duration-300"
            >
              {/* Quote content */}
              <p className="text-muted-foreground text-[15px] leading-relaxed mb-8">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-[15px] font-medium text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
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
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 lg:mt-20 pt-12 border-t border-border/50"
        >
          <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20">
            {content.trustStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-semibold text-foreground mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
