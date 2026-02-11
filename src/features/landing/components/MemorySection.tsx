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
    <section id="memory" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="mb-16 lg:mb-20 max-w-2xl">
            <p className="text-sm font-medium text-signature uppercase tracking-wide mb-3">
              {content.sectionLabel}
            </p>
            <h2 className="text-4xl lg:text-5xl font-display tracking-tight text-foreground mb-6">
              {content.headline[0]}
              <br />
              <span className="text-muted-foreground">{content.headline[1]}</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {content.subheadline}
            </p>
          </motion.div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Memory Layers Visualization */}
            <motion.div variants={itemVariants}>
              <div className="bg-muted/50 rounded-2xl p-8 lg:p-10">
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
                      className="flex items-center gap-4 p-3 rounded-xl bg-card border border-border"
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

                <div className="mt-8 pt-6 border-t border-border grid grid-cols-3 gap-4">
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
                    className="group p-6 rounded-2xl border border-border bg-card hover:border-border hover:shadow-sm transition-all duration-200"
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
                              <Check className="h-3 w-3 text-muted-foreground" />
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
            className="mt-12 p-8 lg:p-10 rounded-2xl bg-muted/50 border border-border/50"
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
