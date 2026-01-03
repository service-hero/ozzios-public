import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'How do the AI agents actually work?',
    answer: 'Each AI agent is powered by Claude and specialized for a specific marketing role. They have access to 77+ native tools, can execute workflows, and maintain persistent memory across conversations. Agents can collaborate with each other, delegate tasks, and work 24/7 without supervision.',
  },
  {
    question: 'How fast can I get set up?',
    answer: 'Most agencies are up and running within a day. Our onboarding wizard, Ozzi, guides you through workspace setup, team configuration, and connecting your existing tools. You can import contacts, set up workflows, and start using AI agents immediately.',
  },
  {
    question: 'What integrations are supported?',
    answer: 'OzziOS connects to 14+ platforms via MCP integrations including Meta Ads, Google Ads, LinkedIn Ads, TikTok Ads, Gmail, Google Calendar, WordPress, Wix, and more. We also support webhooks for custom integrations.',
  },
  {
    question: 'Are there any hidden fees?',
    answer: 'No hidden fees. You pay for your subscription tier and AI credits. Credit usage is transparent—you can see exactly how many credits each action costs before it runs. Unused credits roll over, and you can purchase additional credit packs anytime.',
  },
  {
    question: 'Can I customize the AI agents?',
    answer: 'Yes. Each agent can be configured with custom instructions, personality, and tool access. You can control which tools require approval before execution, set up guardrails, and fine-tune agent behavior for your specific workflows.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. OzziOS uses enterprise-grade security with workspace isolation, 4-category AI guardrails (PII detection, content moderation, jailbreak prevention, hallucination detection), and encrypted data transmission. Each workspace is completely isolated.',
  },
  {
    question: 'Can I manage multiple clients?',
    answer: 'Yes—OzziOS is built for agencies. Create unlimited sub-accounts for clients with full workspace isolation. Parent workspace admins automatically inherit access to child workspaces, making client management seamless.',
  },
  {
    question: 'What happens if a workflow fails?',
    answer: 'Our durable workflow engine automatically checkpoints after every step and retries failed operations with exponential backoff. Workflows survive server restarts and infrastructure issues. You can also add human-approval nodes for critical decisions.',
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
    <section id="faq" className="relative py-32 lg:py-40 bg-[#0A0A0B]">
      {/* Subtle divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

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
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-display leading-[1.1] tracking-[-0.02em] text-white mb-6">
            Frequently asked
            <span className="text-white/30"> questions</span>
          </h2>
          <p className="text-lg text-white/40 max-w-lg mx-auto">
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
          <p className="text-[15px] text-white/40 mb-4">
            Still have questions?
          </p>
          <a
            href="mailto:support@ozzios.com"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-white hover:text-amber-400 transition-colors"
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
          ? 'border-white/[0.1] bg-white/[0.02]'
          : 'border-white/[0.06] bg-transparent hover:border-white/[0.08]'
      )}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
      >
        <span className="text-[15px] font-medium text-white">
          {question}
        </span>
        <div className={cn(
          'shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors',
          isOpen ? 'bg-amber-500/10' : 'bg-white/[0.04]'
        )}>
          {isOpen ? (
            <Minus className="h-4 w-4 text-amber-400" />
          ) : (
            <Plus className="h-4 w-4 text-white/40" />
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
              <p className="text-[14px] leading-relaxed text-white/40">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
