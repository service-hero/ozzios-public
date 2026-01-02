import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
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
    <section id="faq" className="relative py-24 lg:py-32 bg-[rgb(23,23,23)]">
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.2 }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[800px] px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[12px] font-medium uppercase tracking-wider text-orange-400 mb-4">
            FAQ
          </span>
          <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-tight text-white leading-tight">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-[16px] text-white/50 max-w-lg mx-auto">
            Everything you need to know about OzziOS and how it can transform your agency.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-white/10 overflow-hidden"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
              isLast={index === faqs.length - 1}
            />
          ))}
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
  isLast,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  isLast: boolean;
}) {
  return (
    <div
      className={cn(
        'transition-colors',
        !isLast && 'border-b border-[rgb(46,46,46)]'
      )}
    >
      <button
        onClick={onToggle}
        className={cn(
          'w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors',
          'hover:bg-white/[0.02]',
          isOpen && 'bg-white/[0.02]'
        )}
      >
        <span className="text-[15px] sm:text-[16px] font-medium text-white pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown className="h-5 w-5 text-white/40" />
        </motion.div>
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
              <p className="text-[14px] sm:text-[15px] leading-relaxed text-white/50">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
