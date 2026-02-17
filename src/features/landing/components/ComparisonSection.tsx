import { motion } from 'framer-motion';
import {
  Check,
  X,
  Server,
  Cloud,
  Users,
  Bot,
  Wrench,
  Package,
  Code,
  Sparkles,
  Clock,
  Shield,
  ArrowRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';

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
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const comparisonRows = [
  {
    label: 'Setup',
    icon: Wrench,
    openclaw: 'Self-hosted on VPS or Cloudflare. Requires CLI, Docker, and config files.',
    ozzios: 'Sign up and start. No servers, no config, no DevOps.',
    openclawShort: 'DIY infrastructure',
    ozziosShort: 'Instant — zero setup',
  },
  {
    label: 'AI Agents',
    icon: Users,
    openclaw: 'One general-purpose agent you configure yourself with prompts and tools.',
    ozzios: '30+ specialized agents — SEO, content, social, ads, analytics — working as a team.',
    openclawShort: '1 general agent',
    ozziosShort: '30+ specialist agents',
  },
  {
    label: 'Built-in Tools',
    icon: Package,
    openclaw: 'Bring your own. Connect external APIs, tools, and services manually.',
    ozzios: '77+ tools included — CRM, email, social scheduling, SEO, forms, and more.',
    openclawShort: 'BYOT (bring your own)',
    ozziosShort: '77+ tools included',
  },
  {
    label: 'Technical Skill',
    icon: Code,
    openclaw: 'Developers and technical users. Requires command line and server management.',
    ozzios: 'Built for business owners and agencies. No code required.',
    openclawShort: 'Developer required',
    ozziosShort: 'No code needed',
  },
  {
    label: 'Infrastructure',
    icon: Server,
    openclaw: 'You manage servers, updates, uptime, and security patches.',
    ozzios: 'Fully managed. Enterprise-grade security. 99.9% uptime SLA.',
    openclawShort: 'You manage it',
    ozziosShort: 'Fully managed',
  },
  {
    label: 'Time to Value',
    icon: Clock,
    openclaw: 'Hours to days of setup before your first automated workflow runs.',
    ozzios: 'First AI employee working within 5 minutes of signup.',
    openclawShort: 'Hours to days',
    ozziosShort: '5 minutes',
  },
];

export function ComparisonSection() {
  return (
    <section id="comparison" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16 lg:mb-20 max-w-2xl mx-auto">
            <p className="text-sm font-medium text-signature uppercase tracking-wide mb-3">
              How We're Different
            </p>
            <h2 className="text-4xl lg:text-5xl font-display tracking-tight text-foreground mb-6">
              Open-source agent
              <br />
              <span className="text-muted-foreground">vs. your AI team</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              OpenClaw is a powerful open-source tool for developers. OzziOS is a complete AI marketing team for businesses. Different tools, different jobs.
            </p>
          </motion.div>

          {/* Comparison Cards — Mobile */}
          <div className="lg:hidden space-y-3">
            {comparisonRows.map((row) => {
              const Icon = row.icon;
              return (
                <motion.div
                  key={row.label}
                  variants={itemVariants}
                  className="rounded-2xl border border-border bg-card p-5"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-8 rounded-lg bg-signature/10 flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4 text-signature" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">{row.label}</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 mt-0.5 h-5 w-5 rounded-full bg-muted flex items-center justify-center">
                        <Bot className="h-3 w-3 text-muted-foreground" />
                      </div>
                      <div>
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">OpenClaw</span>
                        <p className="text-sm text-muted-foreground mt-0.5">{row.openclawShort}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 mt-0.5 h-5 w-5 rounded-full bg-signature/10 flex items-center justify-center">
                        <Sparkles className="h-3 w-3 text-signature" />
                      </div>
                      <div>
                        <span className="text-xs font-medium text-signature uppercase tracking-wide">OzziOS</span>
                        <p className="text-sm text-foreground font-medium mt-0.5">{row.ozziosShort}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Comparison Table — Desktop */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:block rounded-2xl border border-border bg-card overflow-hidden"
          >
            {/* Table header */}
            <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-border">
              <div className="p-6" />
              <div className="p-6 border-l border-border">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-muted flex items-center justify-center">
                    <Bot className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">OpenClaw</h3>
                    <p className="text-xs text-muted-foreground">Open-source AI agent</p>
                  </div>
                </div>
              </div>
              <div className="p-6 border-l border-signature/20 bg-signature/[0.03]">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-signature/10 flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-signature" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">OzziOS</h3>
                    <p className="text-xs text-muted-foreground">Your AI marketing team</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Table rows */}
            {comparisonRows.map((row, index) => {
              const Icon = row.icon;
              const isLast = index === comparisonRows.length - 1;

              return (
                <div
                  key={row.label}
                  className={cn(
                    'grid grid-cols-[1fr_1fr_1fr]',
                    !isLast && 'border-b border-border/50'
                  )}
                >
                  <div className="p-6 flex items-start gap-3">
                    <div className="shrink-0 h-8 w-8 rounded-lg bg-muted/50 flex items-center justify-center mt-0.5">
                      <Icon className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <span className="text-sm font-semibold text-foreground pt-1">{row.label}</span>
                  </div>
                  <div className="p-6 border-l border-border">
                    <p className="text-sm text-muted-foreground leading-relaxed">{row.openclaw}</p>
                  </div>
                  <div className="p-6 border-l border-signature/20 bg-signature/[0.03]">
                    <p className="text-sm text-foreground leading-relaxed font-medium">{row.ozzios}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Bottom callout */}
          <motion.div
            variants={itemVariants}
            className="mt-12 p-8 lg:p-10 rounded-2xl bg-muted/50 border border-border/50"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-card border border-border flex items-center justify-center shrink-0">
                  <Cloud className="h-5 w-5 text-signature" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Both are great. Pick the right one.
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-xl">
                    If you're a developer who wants full control and loves tinkering — OpenClaw is fantastic. If you want a marketing team that works out of the box without managing infrastructure — that's OzziOS.
                  </p>
                </div>
              </div>
              <a
                href="/waitlist"
                className="inline-flex items-center gap-2 shrink-0 rounded-xl bg-signature px-6 py-3 text-sm font-medium text-white hover:bg-signature/90 transition-colors duration-200"
              >
                Try OzziOS free
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
