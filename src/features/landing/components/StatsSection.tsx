import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '77+', label: 'Native AI Tools', description: 'Across 12 categories' },
  { value: '14', label: 'AI Agents', description: 'Specialized employees' },
  { value: '22', label: 'Trigger Types', description: 'Workflow automation' },
  { value: '156', label: 'Database Tables', description: 'Enterprise-grade' },
];

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
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-20 lg:py-28 border-y border-border/40 bg-muted/20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center"
            >
              <div className="text-[40px] sm:text-[48px] lg:text-[56px] font-semibold tracking-tight text-foreground leading-none">
                {stat.value}
              </div>
              <div className="mt-2 text-[14px] font-medium text-foreground">
                {stat.label}
              </div>
              <div className="mt-1 text-[12px] text-muted-foreground">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
