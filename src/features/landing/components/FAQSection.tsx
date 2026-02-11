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
          className="text-center mb-16"
        >
          <p className="text-xs font-medium text-signature uppercase tracking-[0.15em] mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight tracking-tight mb-4">
            Frequently asked
            <br />
            <span className="text-muted-foreground">questions</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-md mx-auto">
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
        className="w-full flex items-center justify-between gap-4 py-6 text-left group"
      >
        <span className={cn(
          'text-base font-medium transition-colors duration-200',
          isOpen ? 'text-foreground' : 'text-foreground/80 group-hover:text-foreground'
        )}>
          {question}
        </span>
        <div className={cn(
          'shrink-0 transition-transform duration-200',
          isOpen && 'rotate-180'
        )}>
          <ChevronDown className={cn(
            'h-5 w-5 transition-colors duration-200',
            isOpen ? 'text-signature' : 'text-muted-foreground'
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
            className="overflow-hidden"
          >
            <div className="pb-6">
              <div className="pl-0">
                <div className="h-px w-8 bg-signature mb-4" />
                <p className="text-[15px] leading-relaxed text-muted-foreground">
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
