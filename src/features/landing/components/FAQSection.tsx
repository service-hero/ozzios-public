import { AnimatePresence, motion, useInView } from 'framer-motion';
import { ArrowUpRight, MessageCircle, Plus } from 'lucide-react';
import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { audienceContent, useAudience } from '../contexts/AudienceContext';
import { BackgroundField, EASE_OUT, Kbd, SectionHeader } from './_landing-primitives';

export function FAQSection() {
  const { audience } = useAudience();
  const faqs = audienceContent[audience].faq;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative isolate overflow-hidden py-28 lg:py-36">
      <BackgroundField variant="top-right" />

      <div className="relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* Left: header + contact */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start"
          >
            <SectionHeader
              eyebrow="Common questions"
              headlineLines={['Everything people ask', 'before they switch.']}
              sub="Pricing, rollout, implementation, and what the platform replaces."
            />

            <div className="mt-8 rounded-xl border border-border/60 bg-background p-5">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border/60 bg-muted/40 text-foreground/70">
                  <MessageCircle className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[13.5px] font-semibold text-foreground">
                    Still have questions?
                  </p>
                  <p className="mt-1 text-[12.5px] leading-[1.55] text-muted-foreground">
                    Real human responses within one business day.
                  </p>
                  <a
                    href="mailto:support@ozzios.com"
                    className="group/c mt-3 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-foreground/80 transition-colors hover:text-signature"
                  >
                    <span className="relative">
                      support@ozzios.com
                      <span className="absolute -bottom-px left-0 h-px w-0 bg-signature transition-all duration-200 group-hover/c:w-full" />
                    </span>
                    <ArrowUpRight className="h-3 w-3 transition-transform duration-200 group-hover/c:-translate-y-0.5 group-hover/c:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-4 inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-foreground/45">
              <Kbd className="h-[18px] min-w-[18px] text-[10px]">/</Kbd>
              Press to search the docs
            </p>
          </motion.div>

          {/* Right: FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE_OUT }}
            className="lg:col-span-7"
          >
            <div className="overflow-hidden rounded-xl border border-border/60 bg-background/85 shadow-[0_18px_50px_-26px_rgba(34,27,22,0.30)]">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  index={index + 1}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                  isFirst={index === 0}
                  isLast={index === faqs.length - 1}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// FAQ row
// ────────────────────────────────────────────────────────────────────────────

function FAQItem({
  index,
  question,
  answer,
  isOpen,
  onToggle,
  isFirst,
  isLast,
}: {
  index: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  isFirst: boolean;
  isLast: boolean;
}) {
  return (
    <div
      className={cn(
        'group/q border-b border-border/60 transition-colors',
        isLast && 'border-b-0',
        isOpen && 'bg-muted/20',
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-start gap-4 px-5 py-5 text-left transition-colors hover:bg-muted/15 sm:px-6 sm:py-6"
      >
        <span
          className={cn(
            'mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border font-mono text-[10px] font-semibold tabular-nums transition-colors',
            isOpen
              ? 'border-signature/30 bg-signature/10 text-signature'
              : 'border-border/60 bg-background text-foreground/55',
          )}
        >
          {String(index).padStart(2, '0')}
        </span>

        <span
          className={cn(
            'flex-1 text-[14.5px] font-medium leading-[1.5] transition-colors sm:text-[15.5px]',
            isOpen ? 'text-foreground' : 'text-foreground/85 group-hover/q:text-foreground',
          )}
        >
          {question}
        </span>

        <span
          className={cn(
            'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border transition-all duration-200',
            isOpen
              ? 'rotate-45 border-signature/30 bg-signature/10 text-signature'
              : 'border-border/60 text-foreground/55 group-hover/q:border-foreground/25 group-hover/q:text-foreground',
          )}
        >
          <Plus className="h-3.5 w-3.5" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-6 pl-[3.5rem] sm:px-6 sm:pl-[4rem]">
              <p className="max-w-[68ch] text-[14px] leading-[1.65] text-muted-foreground">
                {answer}
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
