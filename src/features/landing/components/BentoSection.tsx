import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  Bot,
  MessageSquare,
  Workflow,
  Users,
  BarChart3,
  Megaphone,
  Layers,
  Shield,
} from 'lucide-react';

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
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export function BentoSection() {
  return (
    <section
      id="features"
      className="relative py-24 lg:py-32 bg-[rgb(23,23,23)] overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.3 }}>
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

      <div className="relative z-10 mx-auto max-w-[1100px] px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <p className="text-[13px] font-medium text-orange-400/80 uppercase tracking-wider mb-4">
              Everything you need
            </p>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold text-white leading-tight max-w-3xl mx-auto">
              One platform to run your{' '}
              <span className="text-white/40">entire agency</span>
            </h2>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Card 1: AI Agents - Large */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <BentoCard size="lg">
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="h-12 w-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4">
                        <Bot className="h-6 w-6 text-orange-400" />
                      </div>
                      <h3 className="text-[24px] font-semibold text-white">
                        14 Specialized AI Agents
                      </h3>
                      <p className="text-[15px] text-white/50 mt-2 max-w-md">
                        From SEO specialists to content writers, each agent is trained for a specific marketing role.
                      </p>
                    </div>
                  </div>

                  {/* Agent grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-auto">
                    {[
                      { name: 'SEO Specialist', status: 'active' },
                      { name: 'Content Writer', status: 'active' },
                      { name: 'Data Analyst', status: 'idle' },
                      { name: 'Social Manager', status: 'active' },
                    ].map((agent) => (
                      <div
                        key={agent.name}
                        className="p-3 rounded-xl bg-white/5 border border-white/10"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div className={cn(
                            'h-2 w-2 rounded-full',
                            agent.status === 'active' ? 'bg-emerald-400 animate-pulse' : 'bg-white/30'
                          )} />
                          <span className="text-[11px] text-white/40 uppercase">
                            {agent.status}
                          </span>
                        </div>
                        <p className="text-[13px] font-medium text-white truncate">
                          {agent.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </BentoCard>
            </motion.div>

            {/* Card 2: 77+ Tools */}
            <motion.div variants={itemVariants}>
              <BentoCard>
                <div className="h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-[20px] font-semibold text-white mb-2">
                  77+ Native Tools
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed mb-4">
                  Tasks, scheduling, reports, memory, and more—built into every agent.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {['Tasks', 'Reports', 'Memory', 'Search'].map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 text-[11px] font-medium text-white/60 bg-white/5 rounded-full border border-white/10"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </BentoCard>
            </motion.div>

            {/* Card 3: Slack-class Communication - with image */}
            <motion.div variants={itemVariants}>
              <BentoCard className="p-0 overflow-hidden">
                <div className="relative h-32 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=300&fit=crop&auto=format"
                    alt="Team collaboration"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgb(23,23,23)] to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="h-10 w-10 rounded-xl bg-violet-500/20 flex items-center justify-center backdrop-blur-sm border border-white/10">
                      <MessageSquare className="h-5 w-5 text-violet-400" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-[18px] font-semibold text-white mb-2">
                    Slack-class Communication
                  </h3>
                  <p className="text-[13px] text-white/50 leading-relaxed mb-3">
                    Channels, DMs, threads, huddles—with AI agents as team members.
                  </p>
                  <div className="flex items-center gap-2 text-[11px] text-white/40">
                    <span className="flex items-center gap-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Real-time
                    </span>
                    <span>•</span>
                    <span>&lt;200ms</span>
                  </div>
                </div>
              </BentoCard>
            </motion.div>

            {/* Card 4: Durable Workflows - Large */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <BentoCard size="lg">
                <div className="flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="h-12 w-12 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                      <Workflow className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-[24px] font-semibold text-white">
                        Durable Workflow Engine
                      </h3>
                      <p className="text-[15px] text-white/50 mt-2">
                        22 triggers, 8 node types. Survives failures, supports human-in-the-loop.
                      </p>
                    </div>
                  </div>

                  {/* Workflow visualization */}
                  <div className="grid grid-cols-4 gap-3 mt-auto">
                    {[
                      { name: 'Lead Created', type: 'trigger' },
                      { name: 'AI Agent', type: 'agent' },
                      { name: 'Approval', type: 'approval' },
                      { name: 'Send Email', type: 'delivery' },
                    ].map((node, i) => (
                      <div key={node.name} className="relative">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                          <p className="text-[11px] text-white/40 uppercase mb-1">{node.type}</p>
                          <p className="text-[12px] font-medium text-white truncate">{node.name}</p>
                        </div>
                        {i < 3 && (
                          <div className="absolute top-1/2 -right-2 w-4 h-px bg-white/20 hidden sm:block" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </BentoCard>
            </motion.div>

            {/* Card 5: CRM - with image */}
            <motion.div variants={itemVariants}>
              <BentoCard className="p-0 overflow-hidden">
                <div className="relative h-32 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop&auto=format"
                    alt="CRM Dashboard"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgb(23,23,23)] to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="h-10 w-10 rounded-xl bg-amber-500/20 flex items-center justify-center backdrop-blur-sm border border-white/10">
                      <Users className="h-5 w-5 text-amber-400" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-[18px] font-semibold text-white mb-2">
                    Full CRM & Lead Management
                  </h3>
                  <p className="text-[13px] text-white/50 leading-relaxed mb-3">
                    Pipeline, contacts, smart lists, duplicate detection—all built in.
                  </p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-[28px] font-semibold text-white">31</p>
                    <p className="text-[12px] text-white/40">contact fields</p>
                  </div>
                </div>
              </BentoCard>
            </motion.div>

            {/* Card 6: Marketing Suite - with image */}
            <motion.div variants={itemVariants}>
              <BentoCard className="p-0 overflow-hidden">
                <div className="relative h-32 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=300&fit=crop&auto=format"
                    alt="Marketing Analytics"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgb(23,23,23)] to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="h-10 w-10 rounded-xl bg-pink-500/20 flex items-center justify-center backdrop-blur-sm border border-white/10">
                      <Megaphone className="h-5 w-5 text-pink-400" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-[18px] font-semibold text-white mb-2">
                    Complete Marketing Suite
                  </h3>
                  <p className="text-[13px] text-white/50 leading-relaxed mb-3">
                    Email builder, social scheduling, ad management across 4 platforms.
                  </p>
                  <div className="flex items-center gap-2">
                    {['Meta', 'Google', 'LinkedIn', 'TikTok'].map((platform) => (
                      <span key={platform} className="px-2 py-0.5 text-[10px] text-white/50 bg-white/5 rounded border border-white/10">
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </BentoCard>
            </motion.div>

            {/* Card 7: Multi-tenant */}
            <motion.div variants={itemVariants}>
              <BentoCard>
                <div className="h-12 w-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-[20px] font-semibold text-white mb-2">
                  Multi-Tenant Architecture
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed mb-4">
                  Unlimited sub-accounts for clients. Perfect for agency-client model.
                </p>
                <p className="text-[12px] text-white/40 mt-auto">
                  650+ indexes • Workspace isolation
                </p>
              </BentoCard>
            </motion.div>

            {/* Card 8: Enterprise Security */}
            <motion.div variants={itemVariants}>
              <BentoCard>
                <div className="h-12 w-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-[20px] font-semibold text-white mb-2">
                  Enterprise-Grade Security
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed mb-4">
                  4-category guardrails: PII detection, content moderation, jailbreak prevention.
                </p>
                <div className="flex items-center gap-2 mt-auto">
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-[12px] text-emerald-400">SOC 2 Ready</span>
                </div>
              </BentoCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BentoCard({
  children,
  className,
  size = 'md',
}: {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}) {
  return (
    <div
      className={cn(
        'relative h-full rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm',
        'overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]',
        size === 'lg' ? 'p-6 lg:p-8' : size === 'sm' ? 'p-4 lg:p-5' : 'p-5 lg:p-6',
        className
      )}
    >
      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background: 'radial-gradient(ellipse at top right, rgba(251, 146, 60, 0.03) 0%, transparent 50%)',
        }}
      />
      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </div>
  );
}
