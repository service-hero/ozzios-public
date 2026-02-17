import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

interface ComparisonRow {
  feature: string;
  ozzi: string | boolean;
  openclaw: string | boolean;
}

const comparisonData: ComparisonRow[] = [
  { feature: 'Setup time', ozzi: '5 minutes', openclaw: 'Days–weeks (self-host)' },
  { feature: 'Marketing-specific agents', ozzi: '30+ built-in', openclaw: 'Build your own' },
  { feature: 'SEO, ads, social, email tools', ozzi: true, openclaw: false },
  { feature: 'Built-in CRM & pipeline', ozzi: true, openclaw: false },
  { feature: 'Persistent agent memory', ozzi: true, openclaw: false },
  { feature: 'Workflows & automation', ozzi: 'Visual builder', openclaw: 'Code required' },
  { feature: 'Client dashboards & reports', ozzi: true, openclaw: false },
  { feature: 'Community & client portals', ozzi: true, openclaw: false },
  { feature: 'Hosting & infrastructure', ozzi: 'Fully managed', openclaw: 'You manage it' },
  { feature: 'Target user', ozzi: 'Businesses & agencies', openclaw: 'Developers' },
];

function CellValue({ value }: { value: string | boolean }) {
  if (value === true) {
    return (
      <div className="flex items-center justify-center">
        <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
          <Check className="w-3 h-3 text-green-500" />
        </div>
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex items-center justify-center">
        <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center">
          <X className="w-3 h-3 text-red-400" />
        </div>
      </div>
    );
  }
  return <span className="text-[12px] sm:text-[13px] text-foreground">{value}</span>;
}

export function ComparisonSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="comparison"
      className="relative py-24 lg:py-32 bg-background overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">
              Not the same thing
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-foreground">
              OzziOS vs open-source
              <br />
              <span className="text-muted-foreground">AI agents</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Open-source AI agents are developer toolkits. OzziOS is a ready-to-use marketing
              platform with agents that already know how to do the job.
            </p>
          </motion.div>

          {/* Comparison table */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl border border-border bg-card overflow-hidden shadow-lg shadow-black/5"
          >
            {/* Table header */}
            <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-border bg-muted/50">
              <div className="px-4 sm:px-6 py-4" />
              <div className="px-4 sm:px-6 py-4 text-center border-l border-border">
                <div className="text-[13px] sm:text-sm font-semibold text-signature">OzziOS</div>
                <div className="text-[10px] text-muted-foreground mt-0.5">Managed platform</div>
              </div>
              <div className="px-4 sm:px-6 py-4 text-center border-l border-border">
                <div className="text-[13px] sm:text-sm font-semibold text-muted-foreground">OpenClaw & others</div>
                <div className="text-[10px] text-muted-foreground mt-0.5">Open-source agents</div>
              </div>
            </div>

            {/* Table rows */}
            {comparisonData.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-[1fr_1fr_1fr] ${
                  i < comparisonData.length - 1 ? 'border-b border-border' : ''
                } ${i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}`}
              >
                <div className="px-4 sm:px-6 py-3 flex items-center">
                  <span className="text-[12px] sm:text-[13px] text-muted-foreground font-medium">
                    {row.feature}
                  </span>
                </div>
                <div className="px-4 sm:px-6 py-3 flex items-center justify-center text-center border-l border-border bg-signature/[0.02]">
                  <CellValue value={row.ozzi} />
                </div>
                <div className="px-4 sm:px-6 py-3 flex items-center justify-center text-center border-l border-border">
                  <CellValue value={row.openclaw} />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="mt-10 text-center">
            <p className="text-sm text-muted-foreground mb-5">
              Ready to use — no engineering team required.
            </p>
            <Button
              size="lg"
              asChild
              className="h-12 px-8 text-[14px] font-medium gap-2 bg-signature text-white hover:bg-signature/90 rounded-full group"
            >
              <a href="https://app.ozzios.com/sign-up">
                Start free trial
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
