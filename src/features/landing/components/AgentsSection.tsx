import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import {
  Search,
  PenTool,
  BarChart2,
  Lightbulb,
  Palette,
  MapPin,
  Users,
  TrendingUp,
  Settings,
  Sparkles,
  Share2,
  Brain,
} from 'lucide-react';
import { SiriOrbAvatar } from '@/shared/components/ui/SiriOrbAvatar';
import { SiriOrbState } from '@/shared/components/ui/smoothui/ui/SiriOrb';

const channelAgents = [
  { name: 'Ozzi', role: 'Onboarding Wizard', icon: Sparkles, description: 'Workspace setup, team building, feature education', variant: 'onboarding' },
  { name: 'Supervisor', role: 'Project Coordinator', icon: Users, description: 'Task oversight, team coordination, sub-agent delegation', variant: 'supervisor' },
  { name: 'SEO Specialist', role: 'Search Optimization', icon: Search, description: 'Keyword research, technical SEO, competitor analysis', variant: 'seo' },
  { name: 'Content Writer', role: 'Content Creation', icon: PenTool, description: 'Blog writing, email copy, marketing copy, brand voice', variant: 'creative' },
  { name: 'Data Analyst', role: 'Performance Insights', icon: BarChart2, description: 'Analytics deep-dives, ROI tracking, engagement metrics', variant: 'tech' },
  { name: 'Social Manager', role: 'Community Manager', icon: Share2, description: 'Content planning, platform strategy, engagement', variant: 'social' },
  { name: 'Research Assistant', role: 'Information Specialist', icon: Lightbulb, description: 'Market research, competitor analysis, synthesis', variant: 'tech' },
  { name: 'Graphic Designer', role: 'Creative Director', icon: Palette, description: 'Visual concepts, design briefs, art direction', variant: 'creative' },
  { name: 'GBP Expert', role: 'Local SEO', icon: MapPin, description: 'Google Business Profile optimization, review management', variant: 'seo' },
];

const executiveAgents = [
  { name: 'CEO Agent', scope: 'Portfolio-wide', icon: TrendingUp, description: 'Revenue insights, strategic planning', variant: 'supervisor' },
  { name: 'General Manager', scope: 'Cross-client', icon: Users, description: 'Team coordination, resource allocation', variant: 'supervisor' },
  { name: 'Analytics Director', scope: 'All clients', icon: BarChart2, description: 'ROI comparison, trend analysis', variant: 'tech' },
  { name: 'Operations Manager', scope: 'Workflows', icon: Settings, description: 'Task management, capacity planning', variant: 'tech' },
];

// Helper function to get orb state based on hover state
const getAgentOrbState = (isActive: boolean): SiriOrbState => {
  return isActive ? 'happy' : 'idle';
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
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

export function AgentsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeAgent, setActiveAgent] = useState<string | null>(null);

  return (
    <section id="agents" className="relative py-32 lg:py-40 bg-background">
      {/* Subtle ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] rounded-full blur-[150px] opacity-[0.04] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(99, 102, 241, 1) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
            <Brain className="h-4 w-4 text-indigo-400" />
            <span className="text-[11px] font-semibold text-indigo-400 uppercase tracking-wider">
              AI Workforce
            </span>
          </div>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-display leading-[1.1] tracking-[-0.02em] text-foreground mb-6">
            Meet your new team.
            <br />
            <span className="text-foreground/30">They never ask for a raise.</span>
          </h2>
          <p className="text-lg text-foreground/40 leading-relaxed max-w-xl">
            They learn your brand, remember every conversation, and work around the clock without overtime.
          </p>
        </motion.div>

        <div ref={ref} className="space-y-16">
          {/* Channel Agents */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[11px] font-semibold text-foreground/30 uppercase tracking-[0.15em]">
                Channel Agents
              </span>
              <div className="h-px flex-1 bg-white/[0.06]" />
              <span className="text-[11px] text-foreground/20">10 agents</span>
            </div>

            <motion.div
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={containerVariants}
              className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
            >
              {channelAgents.map((agent) => {
                const Icon = agent.icon;
                const isActive = activeAgent === agent.name;

                return (
                  <motion.div
                    key={agent.name}
                    variants={itemVariants}
                    onMouseEnter={() => setActiveAgent(agent.name)}
                    onMouseLeave={() => setActiveAgent(null)}
                    className={cn(
                      'group relative rounded-xl border p-5 transition-all duration-300 cursor-pointer',
                      isActive
                        ? 'border-amber-500/30 bg-amber-500/[0.03]'
                        : 'border-white/[0.06] bg-white/[0.01] hover:border-white/[0.1] hover:bg-white/[0.02]'
                    )}
                  >
                    <div className="flex items-start gap-4">
                      <div className="relative shrink-0">
                        <SiriOrbAvatar
                          size={48}
                          variant={agent.variant}
                          orbState={getAgentOrbState(isActive)}
                          disableFloating={true}
                          className="rounded-xl transition-all duration-300"
                        />
                        <div className={cn(
                          'absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-lg transition-all duration-300',
                          isActive
                            ? 'bg-amber-500/20 text-amber-400'
                            : 'bg-background border border-border text-foreground/40'
                        )}>
                          <Icon className="h-3 w-3" />
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-[14px] font-medium text-foreground">
                            {agent.name}
                          </h3>
                          {isActive && (
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          )}
                        </div>
                        <p className="text-[12px] text-foreground/30 mb-2">
                          {agent.role}
                        </p>
                        <p className={cn(
                          'text-[12px] leading-relaxed transition-all duration-300',
                          isActive ? 'text-foreground/50' : 'text-foreground/25'
                        )}>
                          {agent.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Executive Agents */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[11px] font-semibold text-foreground/30 uppercase tracking-[0.15em]">
                Executive Agents
              </span>
              <div className="h-px flex-1 bg-white/[0.06]" />
              <span className="text-[11px] text-foreground/20">4 agents</span>
            </div>

            <motion.div
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={containerVariants}
              className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
            >
              {executiveAgents.map((agent) => {
                const Icon = agent.icon;
                const isActive = activeAgent === agent.name;

                return (
                  <motion.div
                    key={agent.name}
                    variants={itemVariants}
                    onMouseEnter={() => setActiveAgent(agent.name)}
                    onMouseLeave={() => setActiveAgent(null)}
                    className={cn(
                      'group relative rounded-xl border p-5 transition-all duration-300 cursor-pointer',
                      isActive
                        ? 'border-indigo-500/30 bg-indigo-500/[0.03]'
                        : 'border-white/[0.06] bg-white/[0.01] hover:border-white/[0.1] hover:bg-white/[0.02]'
                    )}
                  >
                    <div className="relative mb-4 inline-block">
                      <SiriOrbAvatar
                        size={56}
                        variant={agent.variant}
                        orbState={getAgentOrbState(isActive)}
                        disableFloating={true}
                        className="rounded-xl transition-all duration-300"
                      />
                      <div className={cn(
                        'absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-lg transition-all duration-300',
                        isActive
                          ? 'bg-indigo-500/20 text-indigo-400'
                          : 'bg-background border border-border text-foreground/40'
                      )}>
                        <Icon className="h-3 w-3" />
                      </div>
                    </div>
                    <h3 className="text-[14px] font-medium text-foreground mb-1">
                      {agent.name}
                    </h3>
                    <p className="text-[11px] text-amber-400/70 mb-2">
                      {agent.scope}
                    </p>
                    <p className="text-[12px] text-foreground/30">
                      {agent.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Feature callouts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-6 lg:gap-12"
        >
          {[
            { label: 'Deep reasoning', value: 'Thinks through complex problems' },
            { label: 'You\'re in control', value: 'Approve actions before they happen' },
            { label: 'Enterprise-safe', value: 'Built-in content protection' },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3"
            >
              <div className="h-2 w-2 rounded-full bg-emerald-400/50" />
              <div>
                <span className="text-[13px] font-medium text-foreground/70">{item.value}</span>
                <span className="text-[13px] text-foreground/30 ml-2">{item.label}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
