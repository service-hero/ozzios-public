import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 sm:p-12 lg:p-16 text-center"
        >
          {/* Background gradient */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              background: 'radial-gradient(ellipse at center, hsl(var(--primary)) 0%, transparent 70%)',
            }}
          />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                                linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
              backgroundSize: '32px 32px',
            }}
          />

          <div className="relative z-10">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-semibold tracking-tight text-foreground leading-tight">
              Ready to hire your first<br />AI employee?
            </h2>
            <p className="mt-4 text-[15px] sm:text-[16px] text-muted-foreground max-w-xl mx-auto">
              Start with 50 free credits. No credit card required.
              See why forward-thinking agencies are making the switch.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                asChild
                className="h-12 px-8 text-[14px] font-medium gap-2 bg-foreground text-background hover:bg-foreground/90"
              >
                <a href="https://app.ozzios.com/sign-up">
                  Get started for free
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                asChild
                className="h-12 px-8 text-[14px] font-medium text-muted-foreground hover:text-foreground"
              >
                <a href="/pricing">
                  View pricing
                </a>
              </Button>
            </div>

            {/* Pricing teaser */}
            <div className="mt-10 pt-8 border-t border-border/40">
              <div className="grid gap-6 sm:grid-cols-3 max-w-2xl mx-auto">
                {[
                  { tier: 'Free', price: '$0', credits: '50 credits/mo' },
                  { tier: 'Starter', price: '$29', credits: '500 credits/mo' },
                  { tier: 'Professional', price: '$49', credits: '2,000 credits/mo' },
                ].map((plan) => (
                  <div key={plan.tier} className="text-center">
                    <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-1">
                      {plan.tier}
                    </div>
                    <div className="text-[20px] font-semibold text-foreground">
                      {plan.price}
                      <span className="text-[13px] font-normal text-muted-foreground">/seat</span>
                    </div>
                    <div className="text-[11px] text-muted-foreground">
                      {plan.credits}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
