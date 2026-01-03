import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useAudience, audienceContent } from '../contexts/AudienceContext';

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(value, increment * step);
      setDisplayValue(current);

      if (step >= steps) {
        clearInterval(timer);
        setDisplayValue(value);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  const formattedValue = value % 1 === 0 ? Math.round(displayValue) : displayValue.toFixed(1);

  return (
    <span ref={ref}>
      {formattedValue}
      <span className="text-amber-400">{suffix}</span>
    </span>
  );
}

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

export function StatsSection() {
  const { audience } = useAudience();
  const content = audienceContent[audience].stats;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="metrics" className="relative py-32 lg:py-40 bg-background">
      {/* Subtle divider line at top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="relative"
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <p className="text-[11px] font-semibold text-amber-400/80 uppercase tracking-[0.2em] mb-4">
              {content.sectionLabel}
            </p>
            <h2 className="text-[clamp(2rem,5vw,3rem)] font-display leading-[1.1] tracking-[-0.02em] text-foreground">
              {content.headline[0]}
              <span className="text-foreground/30"> {content.headline[1]}</span>
            </h2>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {content.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="relative text-center group"
              >
                {/* Vertical divider between stats (except first) */}
                {index > 0 && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/[0.06] hidden lg:block" />
                )}

                <div className="text-[clamp(2.5rem,6vw,4rem)] font-semibold tracking-tight text-foreground leading-none mb-3">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[14px] font-medium text-foreground/60 mb-1">
                  {stat.label}
                </div>
                <div className="text-[12px] text-foreground/30">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Optional decorative element */}
          <motion.div
            variants={itemVariants}
            className="mt-20 flex justify-center"
          >
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-muted/20 border border-white/[0.06]">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-white/10 to-white/5 border-2 border-background flex items-center justify-center"
                  >
                    <span className="text-[10px] font-medium text-foreground/40">
                      {['S', 'M', 'A', 'J'][i]}
                    </span>
                  </div>
                ))}
              </div>
              <div className="h-4 w-px bg-white/10" />
              <span className="text-[13px] text-foreground/40">
                {content.socialProof}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle divider line at bottom */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
