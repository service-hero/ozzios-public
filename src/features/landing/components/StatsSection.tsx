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
      {suffix}
    </span>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function StatsSection() {
  const { audience } = useAudience();
  const content = audienceContent[audience].stats;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="metrics" className="relative py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3">
              {content.sectionLabel}
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
              {content.headline[0]}
              <span className="text-muted-foreground/50"> {content.headline[1]}</span>
            </h2>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {content.stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-semibold text-foreground tracking-tight mb-2">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-medium text-foreground/80 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social proof */}
          <motion.div
            variants={itemVariants}
            className="mt-20 text-center"
          >
            <p className="text-sm text-muted-foreground">
              {content.socialProof}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
