import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAudience, audienceContent } from '../contexts/AudienceContext';

export function CTASection() {
  const { audience } = useAudience();
  const content = audienceContent[audience].cta;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32 lg:py-40 bg-[#0A0A0B] overflow-hidden">
      {/* Subtle divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full blur-[150px] opacity-[0.06] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(251, 146, 60, 1) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Main CTA card */}
          <div className="relative rounded-3xl border border-border bg-card/50 overflow-hidden">
            {/* Inner glow effect */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at top center, rgba(251, 146, 60, 0.08) 0%, transparent 60%)',
              }}
            />

            {/* Grid overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                                 linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
                backgroundSize: '60px 60px',
              }}
            />

            <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-24 lg:px-24 lg:py-32">
              <div className="text-center max-w-3xl mx-auto">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8"
                >
                  <Sparkles className="h-4 w-4 text-amber-400" />
                  <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider">
                    {content.badge}
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="text-[clamp(2rem,6vw,4rem)] font-display leading-[1.05] tracking-[-0.02em] text-foreground mb-6"
                >
                  {content.headline[0]}
                  <br />
                  <span className="bg-gradient-to-r from-amber-200 via-orange-300 to-amber-200 bg-clip-text text-transparent">
                    {content.headline[1]}
                  </span>
                </motion.h2>

                {/* Subtext */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg text-foreground/40 mb-10 max-w-lg mx-auto"
                >
                  {content.subtext}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  <Button
                    size="lg"
                    asChild
                    className="h-14 px-8 text-[15px] font-medium gap-3 dark:bg-white dark:text-[#0A0A0B] bg-[#0A0A0B] text-white hover:opacity-90 rounded-full btn-enterprise group"
                  >
                    <a href="https://app.ozzios.com/sign-up">
                      {content.primaryButton}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    asChild
                    className="h-14 px-8 text-[15px] font-medium text-foreground/60 hover:text-foreground hover:bg-muted rounded-full"
                  >
                    <a href="#contact">
                      {content.secondaryButton}
                    </a>
                  </Button>
                </motion.div>

                {/* Trust indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-12 flex flex-wrap items-center justify-center gap-6 text-[12px] text-foreground/30"
                >
                  <span className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    SOC 2 Compliant
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    GDPR Ready
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    99.9% Uptime SLA
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
