import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAudience, audienceContent } from '../contexts/AudienceContext';

export function FAQSection() {
  const { audience } = useAudience();
  const faqs = audienceContent[audience].faq;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-5xl lg:mb-20"
        >
          <p className="mb-6 text-[0.72rem] font-medium uppercase tracking-[0.26em] text-foreground/45">
            Common questions
          </p>
          <h2 className="mb-6 text-[clamp(3rem,5vw,5rem)] font-display font-medium text-foreground leading-[0.92] tracking-[-0.06em]">
            Everything people ask before they switch.
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            Pricing, rollout, implementation, and what the platform replaces.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-5xl"
        >
          <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 shadow-[0_20px_60px_rgba(56,40,29,0.08)] backdrop-blur-xl">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => toggleFAQ(index)}
                isFirst={index === 0}
              />
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 max-w-5xl text-left"
        >
          <p className="mb-3 text-muted-foreground">
            Still have questions?
          </p>
          <a
            href="mailto:support@ozzios.com"
            className="inline-flex items-center gap-2 text-[15px] font-medium text-foreground hover:text-signature transition-colors duration-200"
          >
            Contact our team
            <span className="text-signature">&rarr;</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  isFirst,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  isFirst: boolean;
}) {
  return (
    <div
      className={cn(
        'border-b border-border/50',
        isFirst && 'border-t'
      )}
    >
      <button
        onClick={onToggle}
        className="group flex w-full items-center justify-between gap-4 px-6 py-6 text-left transition-colors hover:bg-muted/10"
      >
        <span className={cn(
          'text-base md:text-lg font-medium transition-colors duration-200',
          isOpen ? 'text-foreground' : 'text-foreground/80 group-hover:text-foreground'
        )}>
          {question}
        </span>
        <div className={cn(
          'shrink-0 h-8 w-8 rounded-full border border-border/80 flex items-center justify-center transition-all duration-200',
          isOpen ? 'rotate-180 bg-signature/5 border-signature/30' : 'group-hover:border-foreground/20 group-hover:bg-muted/50'
        )}>
          <ChevronDown className={cn(
            'h-4 w-4 transition-colors duration-200',
            isOpen ? 'text-signature' : 'text-muted-foreground group-hover:text-foreground'
          )} />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden px-6"
          >
            <div className="pb-8 pt-2">
              <div className="pl-0 border-l-2 border-signature/30 pl-4 ml-1">
                <p className="text-base leading-relaxed text-muted-foreground/90 font-light max-w-3xl">
                  {answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
