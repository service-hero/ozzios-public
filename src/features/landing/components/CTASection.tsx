import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useAudience, audienceContent } from '../contexts/AudienceContext';

export function CTASection() {
  const { audience } = useAudience();
  const content = audienceContent[audience].cta;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight mb-6">
            {content.headline[0]}
            <br />
            <span className="text-foreground">{content.headline[1]}</span>
          </h2>

          {/* Subtext */}
          <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
            {content.subtext}
          </p>

          {/* CTA Button */}
          <a
            href="https://app.ozzios.com/sign-up"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
          >
            {content.primaryButton}
            <ArrowRight className="w-5 h-5" />
          </a>

          {/* Secondary link */}
          <div className="mt-6">
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground/80 transition-colors"
            >
              {content.secondaryButton}
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <span>SOC 2 Compliant</span>
            <span className="hidden sm:inline text-border">|</span>
            <span>GDPR Ready</span>
            <span className="hidden sm:inline text-border">|</span>
            <span>99.9% Uptime SLA</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
