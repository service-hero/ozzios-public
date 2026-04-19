import { motion, type Variants } from 'framer-motion';
import {
  Brain,
  Check,
  History,
  Layers,
  RefreshCcw,
  Shield,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { audienceContent, useAudience } from '../contexts/AudienceContext';
import {
  BackgroundField,
  EASE_OUT,
  SectionHeader,
  SectionHeading,
} from './_landing-primitives';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

const memoryLayers = [
  { id: 'L1', name: 'Brand Identity', kind: 'stable' as const },
  { id: 'L2', name: 'Business Rules', kind: 'stable' as const },
  { id: 'L3', name: 'Learnings', kind: 'stable' as const },
  { id: 'L4', name: 'Knowledge Base', kind: 'stable' as const },
  { id: 'L5', name: 'Error Patterns', kind: 'dynamic' as const },
  { id: 'L6', name: 'Context', kind: 'dynamic' as const },
];

const featureIcons: LucideIcon[] = [Brain, RefreshCcw, Zap, Shield];

export function MemorySection() {
  const { audience } = useAudience();
  const content = audienceContent[audience].memory;

  return (
    <section id="memory" className="relative isolate overflow-hidden py-28 lg:py-36">
      <BackgroundField variant="top-right" />

      <div className="relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-14 lg:mb-20">
            <SectionHeader
              eyebrow={content.sectionLabel}
              headlineLines={[content.headline[0], content.headline[1]]}
              sub={content.subheadline}
            />
          </motion.div>

          {/* Main grid */}
          <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">
            {/* Memory architecture */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <div className="overflow-hidden rounded-xl border border-border/70 bg-background shadow-[0_18px_50px_-26px_rgba(34,27,22,0.30)]">
                <div className="border-b border-border/60 bg-muted/30 px-5 py-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border/60 bg-background text-foreground/70">
                        <Layers className="h-3.5 w-3.5" />
                      </span>
                      <div>
                        <h3 className="text-[13px] font-semibold text-foreground">
                          Memory architecture
                        </h3>
                        <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-foreground/45">
                          7 layers of persistent context
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-[5px] border border-mint/30 bg-mint/10 px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-mint">
                      <span className="h-1 w-1 rounded-full bg-mint" />
                      Live
                    </span>
                  </div>
                </div>

                <div className="divide-y divide-border/60">
                  {memoryLayers.map((layer) => (
                    <div
                      key={layer.id}
                      className="flex items-center gap-4 px-5 py-3 transition-colors hover:bg-muted/30"
                    >
                      <span className="w-8 font-mono text-[11px] font-semibold tabular-nums text-foreground/40">
                        {layer.id}
                      </span>
                      <span className="flex-1 text-[13px] font-medium text-foreground">
                        {layer.name}
                      </span>
                      <span
                        className={cn(
                          'inline-flex items-center gap-1 rounded-[5px] border px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider',
                          layer.kind === 'stable'
                            ? 'border-foreground/15 bg-foreground/5 text-foreground/70'
                            : 'border-signature/25 bg-signature/10 text-signature',
                        )}
                      >
                        <span
                          className={cn(
                            'h-1 w-1 rounded-full',
                            layer.kind === 'stable' ? 'bg-foreground/60' : 'bg-signature',
                          )}
                        />
                        {layer.kind}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 divide-x divide-border/60 border-t border-border/60 bg-muted/20">
                  {[
                    { value: '∞', label: 'Retention' },
                    { value: '7', label: 'Layers' },
                    { value: '<50ms', label: 'Recall' },
                  ].map((stat) => (
                    <div key={stat.label} className="px-3 py-3 text-center">
                      <div className="font-display text-[1.4rem] font-semibold leading-none tabular-nums tracking-[-0.02em] text-foreground">
                        {stat.value}
                      </div>
                      <div className="mt-1.5 font-mono text-[9.5px] uppercase tracking-[0.18em] text-foreground/45">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Feature cards */}
            <motion.div variants={itemVariants} className="space-y-3 lg:col-span-7">
              {content.features.map((feature, index) => {
                const Icon = featureIcons[index % featureIcons.length];
                return (
                  <div
                    key={feature.title}
                    className="group/m rounded-xl border border-border/60 bg-background p-5 shadow-[0_8px_30px_-18px_rgba(34,27,22,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:shadow-[0_14px_40px_-18px_rgba(34,27,22,0.30)]"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border/60 bg-background text-foreground/70 transition-colors group-hover/m:border-foreground/25 group-hover/m:bg-foreground group-hover/m:text-background">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-[15px] font-semibold text-foreground">
                          {feature.title}
                        </h3>
                        <p className="mt-1.5 text-[13px] leading-[1.55] text-muted-foreground">
                          {feature.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
                          {feature.bullets.map((bullet) => (
                            <span
                              key={bullet}
                              className="inline-flex items-center gap-1.5 text-[11.5px] text-muted-foreground"
                            >
                              <span className="flex h-3 w-3 items-center justify-center rounded-full border border-signature/30 bg-signature/10">
                                <Check className="h-1.5 w-1.5 text-signature" strokeWidth={3} />
                              </span>
                              {bullet}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Comparison callout */}
          <motion.div variants={itemVariants} className="mt-12">
            <div className="overflow-hidden rounded-xl border border-border/70 bg-background/85">
              <div className="flex flex-col gap-6 p-6 lg:flex-row lg:items-center lg:justify-between lg:p-8">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border/60 bg-muted/40 text-foreground/70">
                    <History className="h-4 w-4" />
                  </span>
                  <div>
                    <SectionHeading label="Versus traditional marketing" />
                    <h3 className="mt-2 font-display text-[1.3rem] font-semibold leading-[1.15] tracking-[-0.02em] text-foreground sm:text-[1.5rem]">
                      {content.comparisonTitle}
                    </h3>
                    <p className="mt-2 max-w-[60ch] text-[13px] leading-[1.55] text-muted-foreground">
                      {content.comparisonDescription}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 divide-x divide-border/60 overflow-hidden rounded-md border border-border/60">
                  {content.comparisonStats.map((stat) => (
                    <div key={stat.label} className="px-5 py-3 text-center">
                      <div className="font-display text-[1.6rem] font-semibold leading-none tabular-nums tracking-[-0.025em] text-foreground">
                        {stat.value}
                      </div>
                      <div className="mt-1.5 font-mono text-[9.5px] uppercase tracking-[0.18em] text-foreground/45">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
