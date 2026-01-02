import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Bot,
  GitBranch,
  MessageSquare,
  Users,
  BarChart3,
  Mail,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Bot,
    title: 'AI Agents',
    description: '14 specialized agents from SEO specialists to content writers. Each with 77+ native tools and extended thinking capabilities.',
    color: 'amber',
    href: '#agents',
  },
  {
    icon: GitBranch,
    title: 'Durable Workflows',
    description: 'Enterprise-grade automation with 22 trigger types. Survives failures with automatic checkpointing and retry strategies.',
    color: 'blue',
    href: '#workflows',
  },
  {
    icon: MessageSquare,
    title: 'Slack-Class Channels',
    description: 'Real-time communication with threads, reactions, huddles, and AI-powered responses. Built for agency collaboration.',
    color: 'emerald',
    href: '#channels',
  },
  {
    icon: Users,
    title: 'Multi-Tenant CRM',
    description: 'Full lead pipeline with 31 contact fields, smart lists, duplicate detection, and automatic follow-up reminders.',
    color: 'violet',
    href: '#crm',
  },
  {
    icon: BarChart3,
    title: 'Marketing Suite',
    description: 'Meta, Google, LinkedIn, and TikTok ads. Email builder with 14 block types. Social scheduling across 6 platforms.',
    color: 'rose',
    href: '#marketing',
  },
  {
    icon: Mail,
    title: 'Gmail & Calendar',
    description: 'Two-way sync with push notifications. Automatic email categorization and 4-tier contact photo resolution.',
    color: 'cyan',
    href: '#integrations',
  },
];

const colorClasses = {
  amber: {
    bg: 'bg-amber-500/10',
    text: 'text-amber-500',
    border: 'group-hover:border-amber-500/30',
  },
  blue: {
    bg: 'bg-blue-500/10',
    text: 'text-blue-500',
    border: 'group-hover:border-blue-500/30',
  },
  emerald: {
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-500',
    border: 'group-hover:border-emerald-500/30',
  },
  violet: {
    bg: 'bg-violet-500/10',
    text: 'text-violet-500',
    border: 'group-hover:border-violet-500/30',
  },
  rose: {
    bg: 'bg-rose-500/10',
    text: 'text-rose-500',
    border: 'group-hover:border-rose-500/30',
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-500',
    border: 'group-hover:border-cyan-500/30',
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="product" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[12px] font-medium uppercase tracking-wider text-amber-500 mb-4">
            Platform
          </span>
          <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-tight text-foreground leading-tight">
            Everything you need to run<br />a modern agency
          </h2>
          <p className="mt-4 text-[16px] text-muted-foreground max-w-2xl mx-auto">
            A unified platform that replaces your entire tech stack. Communication, CRM, marketing, and AI agents—all working together.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            const colors = colorClasses[feature.color as keyof typeof colorClasses];

            return (
              <motion.a
                key={feature.title}
                href={feature.href}
                variants={itemVariants}
                className={cn(
                  'group relative rounded-xl border border-border/50 bg-card p-6 transition-all duration-300',
                  'hover:bg-muted/30 hover:shadow-sm',
                  colors.border
                )}
              >
                {/* Icon */}
                <div className={cn(
                  'mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors',
                  colors.bg
                )}>
                  <Icon className={cn('h-5 w-5', colors.text)} />
                </div>

                {/* Content */}
                <h3 className="text-[15px] font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>

                {/* Arrow */}
                <ArrowRight className="absolute right-6 top-6 h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
