import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 bg-[rgb(23,23,23)] overflow-hidden">
      {/* Section grid background */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.5 }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1100px] px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-[rgb(20,20,20)] p-10 sm:p-16 lg:p-20"
        >
          {/* Grid overlay - Framer style at 60% opacity */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ opacity: 0.6 }}
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
            {/* Radial fade for the grid */}
            <div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse at center, transparent 0%, rgb(20, 20, 20) 70%)',
              }}
            />
          </div>

          {/* Ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center top, rgba(251, 146, 60, 0.12) 0%, transparent 50%)',
            }}
          />

          <div className="relative z-10 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[32px] sm:text-[44px] lg:text-[56px] font-semibold tracking-tight text-white leading-[1.1]"
            >
              Ready to hire your first
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
                AI employee?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-[17px] sm:text-[19px] text-white/50 max-w-lg mx-auto leading-relaxed"
            >
              Start with 50 free credits. No credit card required.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                asChild
                className="h-14 px-8 text-[15px] font-medium gap-2 bg-white text-[rgb(23,23,23)] hover:bg-white/90 rounded-full"
              >
                <a href="https://app.ozzios.com/sign-up">
                  Get started for free
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="h-14 px-8 text-[15px] font-medium rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                <a href="#contact">
                  Talk to sales
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
