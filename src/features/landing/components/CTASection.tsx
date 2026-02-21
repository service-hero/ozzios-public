import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useAudience, audienceContent } from '../contexts/AudienceContext';

import { AnimatedBackground } from './ui/AnimatedBackground';

export function CTASection() {
  const { audience } = useAudience();
  const content = audienceContent[audience].cta;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2rem] sm:rounded-[3rem] bg-gradient-to-br from-[#FF7545] via-signature to-[#D83F0D] overflow-hidden"
        >
          {/* Background image */}
          <img
            src="/images/Gemini_Generated_Image_2cfeqt2cfeqt2cfe.webp"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
            aria-hidden="true"
          />
          {/* Overlay to keep text readable */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF7545]/70 via-signature/60 to-[#D83F0D]/70 pointer-events-none" />
          
          <div className="relative z-10 px-6 py-20 sm:px-12 sm:py-24 md:py-32 flex flex-col items-center text-center max-w-4xl mx-auto">
            
            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white leading-[1.1] tracking-tight mb-6">
              {content.headline[0]}
              <br />
              <span className="text-white/90">{content.headline[1]}</span>
            </h2>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              {content.subtext}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <a
                href="https://app.ozzios.com/sign-up"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-14 px-10 bg-white text-signature font-semibold text-base rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 group"
              >
                {content.primaryButton}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              {content.secondaryButton && (
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-10 text-base font-medium text-white bg-transparent border-2 border-white/30 rounded-full hover:bg-white/10 transition-colors"
                >
                  {content.secondaryButton}
                </a>
              )}
            </div>

            {/* Trust indicators */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[11px] font-medium tracking-wide uppercase text-white/70">
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/50" /> 256-bit Encryption</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/50" /> 99.9% Uptime SLA</span>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
