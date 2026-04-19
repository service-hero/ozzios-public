import { motion } from 'framer-motion';
import {
  Brain,
  Layers,
  Zap,
  History,
  RefreshCcw,
  Shield,
  Check,
} from 'lucide-react';
import { useAudience, audienceContent } from '../contexts/AudienceContext';

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
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const memoryLayers = [
  { id: 'L1', name: 'Brand Identity' },
  { id: 'L2', name: 'Business Rules' },
  { id: 'L3', name: 'Learnings' },
  { id: 'L4', name: 'Knowledge Base' },
  { id: 'L5', name: 'Error Patterns' },
  { id: 'L6', name: 'Context' },
];

const featureIcons = [Brain, RefreshCcw, Zap, Shield];

export function MemorySection() {
  const { audience } = useAudience();
  const content = audienceContent[audience].memory;

  return (
    <section id="memory" className="relative overflow-hidden py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-x-0 top-24 h-72 bg-[radial-gradient(circle_at_top,rgba(196,88,63,0.1),transparent_58%)] blur-3xl" />
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="mb-16 max-w-5xl lg:mb-20">
            <p className="mb-6 text-[0.72rem] font-medium uppercase tracking-[0.26em] text-foreground/45">
              {content.sectionLabel}
            </p>
            <h2 className="mb-6 text-[clamp(3rem,5.2vw,5.3rem)] font-display font-medium tracking-[-0.06em] text-foreground leading-[0.92]">
              {content.headline[0]}
              <br />
              <span className="text-muted-foreground/78">{content.headline[1]}</span>
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              {content.subheadline}
            </p>
          </motion.div>

          {/* Main content grid */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left: Memory Layers Visualization */}
            <motion.div variants={itemVariants}>
              <div className="rounded-[2rem] border border-white/80 bg-white/80 p-8 shadow-[0_24px_70px_rgba(56,40,29,0.08)] lg:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-10 w-10 rounded-xl bg-card border border-border flex items-center justify-center">
                    <Layers className="h-5 w-5 text-signature" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">Memory Architecture</h3>
                    <p className="text-sm text-muted-foreground">7 layers of persistent context</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {memoryLayers.map((layer, index) => (
                    <div
                      key={layer.id}
                      className="flex items-center gap-4 rounded-[1.2rem] border border-border/70 bg-[rgba(247,241,235,0.86)] p-3"
                    >
                      <span className="text-xs font-mono font-bold text-muted-foreground w-6">
                        {layer.id}
                      </span>
                      <span className="text-sm font-medium text-foreground flex-1">
                        {layer.name}
                      </span>
                      <span className="text-xs text-muted-foreground uppercase tracking-wide">
                        {index < 4 ? 'Stable' : 'Dynamic'}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border/60 pt-6">
                  {[
                    { value: '∞', label: 'Retention' },
                    { value: '7', label: 'Layers' },
                    { value: '<50ms', label: 'Recall' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl font-semibold text-foreground">{stat.value}</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Feature cards */}
            <motion.div variants={itemVariants} className="space-y-4">
              {content.features.map((feature, index) => {
                const Icon = featureIcons[index % featureIcons.length];

                return (
                  <div
                    key={feature.title}
                    className="group rounded-[1.75rem] border border-white/80 bg-white/78 p-6 shadow-[0_18px_50px_rgba(56,40,29,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(56,40,29,0.1)]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 h-10 w-10 rounded-xl bg-signature/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-signature" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-semibold text-foreground mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                          {feature.description}
                        </p>
                        <div className="flex flex-wrap gap-x-4 gap-y-1">
                          {feature.bullets.map((bullet) => (
                            <span
                              key={bullet}
                              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"
                            >
                              <Check className="h-3 w-3 text-signature" />
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

          {/* Bottom comparison callout */}
          <motion.div
            variants={itemVariants}
            className="mt-16 rounded-[2rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(244,238,232,0.98))] p-8 shadow-[0_20px_60px_rgba(56,40,29,0.08)] lg:p-10"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-card border border-border flex items-center justify-center shrink-0">
                  <History className="h-5 w-5 text-signature" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {content.comparisonTitle}
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-xl">
                    {content.comparisonDescription}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-8 lg:gap-12">
                {content.comparisonStats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-semibold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
