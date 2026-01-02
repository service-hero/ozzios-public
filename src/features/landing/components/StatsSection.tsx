import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stats = [
  { value: '14', suffix: '', label: 'AI Agents', description: 'Specialized for marketing' },
  { value: '77', suffix: '+', label: 'Native Tools', description: 'Built into every agent' },
  { value: '500', suffix: 'K+', label: 'Tasks Completed', description: 'By AI employees' },
  { value: '99.9', suffix: '%', label: 'Uptime', description: 'Enterprise reliability' },
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
    <section id="metrics" className="relative py-24 lg:py-32 bg-[rgb(20,20,20)]">
      <div className="mx-auto max-w-[1100px] px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-8 sm:p-12 lg:p-16"
        >
          {/* Grid background */}
          <div
            className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none"
            style={{ opacity: 0.4 }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse at center, transparent 0%, rgb(20, 20, 20) 70%)',
              }}
            />
          </div>

          <div className="relative z-10">
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-semibold tracking-tight text-white leading-tight">
                Performance You Can{' '}
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Measure
                </span>
              </h2>
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12 mb-12">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="text-[40px] sm:text-[52px] lg:text-[64px] font-semibold tracking-tight text-white leading-none">
                    {stat.value}
                    <span className="text-orange-400">{stat.suffix}</span>
                  </div>
                  <div className="mt-2 text-[14px] font-medium text-white">
                    {stat.label}
                  </div>
                  <div className="mt-1 text-[12px] text-white/40">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="text-center">
              <Button
                size="lg"
                asChild
                className="h-14 px-8 text-[15px] font-medium gap-2 bg-white text-[rgb(23,23,23)] hover:bg-white/90 rounded-full"
              >
                <a href="https://app.ozzios.com/sign-up">
                  Start free trial
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
