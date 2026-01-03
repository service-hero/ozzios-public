import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'Can AI really replace my employees?',
    answer: 'Not entirely—but it can replace the repetitive, time-consuming work that burns out your best people. Our AI employees handle SEO audits, content drafts, data analysis, and campaign management 24/7. Your human team focuses on strategy, relationships, and the creative work that actually needs a human touch.',
  },
  {
    question: 'What happens to institutional knowledge when employees leave?',
    answer: 'That\'s exactly the problem we solve. When your best people leave, they take years of knowledge with them. AI employees have infinite memory—they remember every client conversation, every brand guideline, every campaign that worked. Knowledge stays in your business forever.',
  },
  {
    question: 'How do I train the AI on my brand voice?',
    answer: 'Each AI agent learns your brand through usage. Share examples, provide feedback, and the agents adapt. They maintain persistent memory of your preferences, writing style, and client-specific details. The more you work with them, the better they get.',
  },
  {
    question: 'Is this cheaper than hiring an agency?',
    answer: 'Significantly. Agencies charge $5-15K/month for work you can\'t see. With OzziOS, you own the AI workforce—no retainers, no black boxes. You see exactly what your AI is doing, and you only pay for what you use.',
  },
  {
    question: 'Can I see what the AI is doing?',
    answer: 'Complete transparency. Every action, every decision, every piece of content is logged and visible. Unlike agencies that send monthly reports, you see work happening in real-time. Approve actions before they execute, or let AI run autonomously—your choice.',
  },
  {
    question: 'What if I need human help?',
    answer: 'AI handles the heavy lifting, but you\'re always in control. Set up approval workflows for critical actions. The AI flags when it needs human input. And our support team is here when you need guidance on getting the most from your AI workforce.',
  },
  {
    question: 'How many tools can I cancel?',
    answer: 'Most clients cancel 8+ subscriptions after switching. OzziOS replaces your CRM, email marketing, social scheduling, project management, SEO tools, analytics platforms, and more. One login, one invoice, one platform.',
  },
  {
    question: 'What\'s the catch with the free trial?',
    answer: 'No catch. Start with 50 free credits—enough to test real workflows. No credit card required. No automatic billing. If you don\'t love it, just walk away. We\'re confident you\'ll stay.',
  },
];

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-32 lg:py-40 bg-background">
      {/* Subtle divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 mx-auto max-w-[900px] px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[11px] font-semibold text-amber-400/80 uppercase tracking-[0.2em] mb-4">
            FAQ
          </p>
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-display leading-[1.1] tracking-[-0.02em] text-foreground mb-6">
            Frequently asked
            <span className="text-foreground/30"> questions</span>
          </h2>
          <p className="text-lg text-foreground/40 max-w-lg mx-auto">
            Everything you need to know about OzziOS.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-3"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
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
          <p className="text-[15px] text-foreground/40 mb-4">
            Still have questions?
          </p>
          <a
            href="mailto:support@ozzios.com"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-foreground hover:text-amber-400 transition-colors"
          >
            Contact our team
            <span className="text-amber-400">→</span>
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
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={cn(
        'rounded-xl border transition-all duration-300',
        isOpen
          ? 'border-border bg-muted/20'
          : 'border-border bg-transparent hover:border-border/80'
      )}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
      >
        <span className="text-[15px] font-medium text-foreground">
          {question}
        </span>
        <div className={cn(
          'shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors',
          isOpen ? 'bg-amber-500/10' : 'bg-white/[0.04]'
        )}>
          {isOpen ? (
            <Minus className="h-4 w-4 text-amber-400" />
          ) : (
            <Plus className="h-4 w-4 text-foreground/40" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6">
              <p className="text-[14px] leading-relaxed text-foreground/40">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
