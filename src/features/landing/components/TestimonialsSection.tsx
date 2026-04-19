import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star } from 'lucide-react';
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
      className="relative py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-5xl lg:mb-24"
        >
          <p className="mb-6 text-[0.72rem] font-medium uppercase tracking-[0.26em] text-foreground/45">
            {content.sectionLabel}
          </p>
          <h2 className="max-w-5xl text-[clamp(3rem,5.6vw,5.6rem)] font-display font-medium text-foreground leading-[0.92] tracking-[-0.06em] mb-6">
            {content.headline[0]}
            <br />
            <span className="text-muted-foreground/78">{content.headline[1]}</span>
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            {content.subheadline}
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="grid gap-6 lg:grid-cols-[1.2fr_1fr_1fr]"
        >
          {content.items.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="rounded-[2rem] border border-white/80 bg-white/80 p-8 shadow-[0_20px_60px_rgba(56,40,29,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_90px_rgba(56,40,29,0.12)]"
            >
              {/* Quote content */}
              <p className="mb-8 text-[15px] leading-8 text-muted-foreground">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-2xl object-cover"
                />
                <div>
                  <p className="text-[15px] font-medium text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ''}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* More reviews card */}
          <motion.div
            variants={cardVariants}
            className="flex h-full flex-col justify-between rounded-[2rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,249,244,0.98),rgba(239,226,214,0.98))] p-8 shadow-[0_24px_70px_rgba(56,40,29,0.1)]"
          >
            <div>
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-signature text-signature" />
                ))}
              </div>
              <p className="mb-3 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-foreground/45">
                Operator sentiment
              </p>
              <h3 className="max-w-[11ch] font-display text-[2.3rem] leading-[0.94] tracking-[-0.05em] text-foreground">
                Early teams are sticking with it.
              </h3>
              <p className="mt-4 max-w-sm text-[15px] leading-7 text-muted-foreground">
                We are still onboarding beta customers, so the public quote wall is intentionally tight.
                The usage signal is already strong.
              </p>
            </div>

            <div className="mt-10">
              <div className="mb-6 flex items-center">
                {content.items.map((testimonial, index) => (
                  <img
                    key={testimonial.name}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="relative -ml-3 h-11 w-11 rounded-2xl border border-white/80 object-cover first:ml-0"
                    style={{ zIndex: content.items.length - index }}
                  />
                ))}
                <div className="relative -ml-3 flex h-11 w-11 items-center justify-center rounded-2xl border border-border/70 bg-white/70 text-[11px] font-semibold tracking-[0.12em] text-foreground/68">
                  +498
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {content.trustStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.35rem] border border-border/60 bg-white/60 px-4 py-4"
                  >
                    <div className="text-xl font-semibold tracking-tight text-foreground">{stat.value}</div>
                    <div className="mt-1 text-[0.64rem] uppercase tracking-[0.18em] text-foreground/45">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
