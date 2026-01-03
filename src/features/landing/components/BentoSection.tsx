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
  ArrowUpRight,
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function BentoSection() {
  return (
    <section
      id="features"
      className="relative py-32 lg:py-40 bg-background overflow-hidden"
    >
      {/* Subtle ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-[150px] opacity-[0.03] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(251, 146, 60, 1) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="mb-20 max-w-3xl">
            <p className="text-[11px] font-semibold text-amber-400/80 uppercase tracking-[0.2em] mb-4">
              Platform
            </p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-display leading-[1.1] tracking-[-0.02em] text-foreground mb-6">
              Cancel 8+ subscriptions.
              <br />
              <span className="text-foreground/30">One platform does it all.</span>
            </h2>
            <p className="text-lg text-foreground/40 leading-relaxed max-w-xl">
              Stop paying for tools that don't talk to each other. Your AI team works in one unified workspace.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-12 gap-4">
            {/* Card 1: AI Agents - Hero card with image */}
            <motion.div variants={itemVariants} className="col-span-12 lg:col-span-8">
              <BentoCard className="h-full overflow-hidden">
                <div className="flex flex-col lg:flex-row h-full">
                  {/* Image side */}
                  <div className="relative lg:w-2/5 h-48 lg:h-auto min-h-[200px]">
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=800&fit=crop&auto=format"
                      alt="Team collaboration"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background hidden lg:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent lg:hidden" />
                  </div>

                  {/* Content side */}
                  <div className="flex-1 p-8 lg:p-10 flex flex-col">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6 w-fit">
                      <Bot className="h-4 w-4 text-amber-400" />
                      <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider">
                        AI Workforce
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-display text-foreground mb-3">
                      Employees who never quit
                    </h3>
                    <p className="text-[15px] text-foreground/40 leading-relaxed mb-6">
                      14 AI employees working 24/7. They remember everything, never call in sick, and never take your best clients when they leave.
                    </p>

                    {/* Agent visualization */}
                    <div className="mt-auto grid grid-cols-2 gap-3">
                      {[
                        { name: 'SEO Specialist', status: 'active' },
                        { name: 'Content Writer', status: 'active' },
                        { name: 'Data Analyst', status: 'idle' },
                        { name: 'Social Manager', status: 'active' },
                      ].map((agent) => (
                        <div
                          key={agent.name}
                          className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-colors group"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div className={cn(
                              'h-2 w-2 rounded-full',
                              agent.status === 'active' ? 'bg-emerald-400 animate-pulse' : 'bg-white/20'
                            )} />
                            <span className="text-[10px] text-foreground/30 uppercase tracking-wider">
                              {agent.status}
                            </span>
                          </div>
                          <p className="text-[12px] font-medium text-foreground/70 group-hover:text-foreground transition-colors">
                            {agent.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </BentoCard>
            </motion.div>

            {/* Card 2: 77+ Tools with image */}
            <motion.div variants={itemVariants} className="col-span-12 sm:col-span-6 lg:col-span-4">
              <BentoCard className="h-full overflow-hidden">
                <div className="relative h-32">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop&auto=format"
                    alt="Developer workspace"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                </div>
                <div className="p-6 lg:p-8 -mt-8 relative z-10">
                  <div className="h-12 w-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                    <Layers className="h-5 w-5 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-display text-foreground mb-2">
                    No more tool switching
                  </h3>
                  <p className="text-[14px] text-foreground/40 leading-relaxed mb-4">
                    77+ tools built in. Tasks, scheduling, reports, memory—one platform, zero tab switching.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Tasks', 'Reports', 'Memory', 'Search'].map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 text-[11px] font-medium text-foreground/40 bg-white/[0.03] rounded-md border border-white/[0.06]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </BentoCard>
            </motion.div>

            {/* Card 3: Communication with image */}
            <motion.div variants={itemVariants} className="col-span-12 sm:col-span-6 lg:col-span-4">
              <BentoCard className="h-full overflow-hidden">
                <div className="relative h-28">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=200&fit=crop&auto=format"
                    alt="Team communication"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                </div>
                <div className="p-6 lg:p-8 -mt-6 relative z-10">
                  <div className="h-12 w-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-6">
                    <MessageSquare className="h-5 w-5 text-violet-400" />
                  </div>
                  <h3 className="text-xl font-display text-foreground mb-2">
                    Your AI team, always online
                  </h3>
                  <p className="text-[14px] text-foreground/40 leading-relaxed mb-4">
                    Chat with AI employees like Slack. They respond instantly, 24/7, 365.
                  </p>
                  <div className="flex items-center gap-4 text-[12px]">
                    <span className="flex items-center gap-1.5 text-foreground/30">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Real-time
                    </span>
                    <span className="text-foreground/30">&lt;200ms latency</span>
                  </div>
                </div>
              </BentoCard>
            </motion.div>

            {/* Card 4: Workflows - Wide card with image */}
            <motion.div variants={itemVariants} className="col-span-12 lg:col-span-8">
              <BentoCard className="h-full overflow-hidden">
                <div className="flex flex-col lg:flex-row-reverse h-full">
                  {/* Image side */}
                  <div className="relative lg:w-2/5 h-48 lg:h-auto min-h-[200px]">
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop&auto=format"
                      alt="Analytics dashboard"
                      className="absolute inset-0 w-full h-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background hidden lg:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent lg:hidden" />
                  </div>

                  {/* Content side */}
                  <div className="flex-1 p-8 lg:p-10">
                    <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                      <Workflow className="h-5 w-5 text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-display text-foreground mb-3">
                      Work that happens while you sleep
                    </h3>
                    <p className="text-[15px] text-foreground/40 leading-relaxed mb-6">
                      Automate anything. Campaigns run at 3am. Reports generate overnight. You wake up to results.
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { value: '22', label: 'Triggers' },
                        { value: '8', label: 'Node Types' },
                        { value: '99.9%', label: 'Uptime' },
                      ].map((metric) => (
                        <div key={metric.label}>
                          <div className="text-2xl font-semibold text-foreground">{metric.value}</div>
                          <div className="text-[11px] text-foreground/30 uppercase tracking-wider">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </BentoCard>
            </motion.div>

            {/* Card 5: CRM with image */}
            <motion.div variants={itemVariants} className="col-span-12 sm:col-span-6 lg:col-span-4">
              <BentoCard className="h-full overflow-hidden">
                <div className="relative h-28">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=200&fit=crop&auto=format"
                    alt="Business meeting"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                </div>
                <div className="p-6 lg:p-8 -mt-6 relative z-10">
                  <div className="h-12 w-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6">
                    <Users className="h-5 w-5 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-display text-foreground mb-2">
                    Never lose a lead again
                  </h3>
                  <p className="text-[14px] text-foreground/40 leading-relaxed mb-4">
                    AI remembers every conversation, every preference, every detail. Institutional memory that never walks out.
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-semibold text-foreground">31</span>
                    <span className="text-[12px] text-foreground/30">contact fields</span>
                  </div>
                </div>
              </BentoCard>
            </motion.div>

            {/* Card 6: Marketing Suite */}
            <motion.div variants={itemVariants} className="col-span-12 sm:col-span-6 lg:col-span-4">
              <BentoCard className="h-full p-6 lg:p-8">
                <div className="flex flex-col h-full">
                  <div className="h-12 w-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-6">
                    <Megaphone className="h-5 w-5 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-display text-foreground mb-2">
                    Cancel 4 subscriptions
                  </h3>
                  <p className="text-[14px] text-foreground/40 leading-relaxed mb-4">
                    Email, social, ads—all in one. Stop paying for Mailchimp, Hootsuite, and the rest.
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {['Meta', 'Google', 'LinkedIn', 'TikTok'].map((platform) => (
                      <span key={platform} className="px-2 py-1 text-[10px] text-foreground/40 bg-white/[0.03] rounded border border-white/[0.06]">
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </BentoCard>
            </motion.div>

            {/* Card 7: Multi-tenant */}
            <motion.div variants={itemVariants} className="col-span-12 sm:col-span-6 lg:col-span-4">
              <BentoCard className="h-full p-6 lg:p-8">
                <div className="flex flex-col h-full">
                  <div className="h-12 w-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
                    <BarChart3 className="h-5 w-5 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-display text-foreground mb-2">
                    One dashboard, all clients
                  </h3>
                  <p className="text-[14px] text-foreground/40 leading-relaxed mb-4">
                    Unlimited sub-accounts. See everything in one place. No more juggling logins.
                  </p>
                  <div className="mt-auto text-[12px] text-foreground/30">
                    650+ indexes • Workspace isolation
                  </div>
                </div>
              </BentoCard>
            </motion.div>

            {/* Card 8: Enterprise Security */}
            <motion.div variants={itemVariants} className="col-span-12 sm:col-span-6 lg:col-span-4">
              <BentoCard className="h-full p-6 lg:p-8 group">
                <div className="flex flex-col h-full">
                  <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                    <Shield className="h-5 w-5 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-display text-foreground mb-2">
                    AI you can trust
                  </h3>
                  <p className="text-[14px] text-foreground/40 leading-relaxed mb-4">
                    Enterprise-grade safety. Your data stays yours. SOC 2 compliant.
                  </p>
                  <div className="mt-auto flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span className="text-[12px] text-emerald-400 font-medium">SOC 2 Ready</span>
                  </div>
                </div>
              </BentoCard>
            </motion.div>
          </div>

          {/* Bottom CTA link */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <a
              href="#all-features"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-foreground/40 hover:text-foreground transition-colors group"
            >
              Explore all features
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function BentoCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'relative rounded-2xl border border-white/[0.06] bg-white/[0.02]',
        'overflow-hidden transition-all duration-500',
        'hover:border-white/[0.1] hover:bg-white/[0.03]',
        className
      )}
    >
      {/* Subtle top gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50 bg-gradient-to-b from-foreground/[0.02] to-transparent"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
