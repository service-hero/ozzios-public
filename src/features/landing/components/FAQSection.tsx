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
    <section id="faq" className="relative py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20 flex flex-col items-center"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-signature" />
            <p className="text-[11px] font-semibold text-signature uppercase tracking-[0.2em]">
              FAQ
            </p>
            <div className="w-8 h-px bg-signature" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground leading-[1.1] tracking-tight mb-6">
            Frequently asked
            <br />
            <span className="text-muted-foreground/80">questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl font-light leading-relaxed">
            Everything you need to know about OzziOS.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-0"
        >
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
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-3">
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
        className="w-full flex items-center justify-between gap-4 py-6 text-left group hover:bg-muted/10 transition-colors px-2"
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
            className="overflow-hidden px-2"
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
