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
  FileText,
  Users,
  TrendingUp,
  Settings,
  Sparkles,
  Share2
} from 'lucide-react';

const channelAgents = [
  { name: 'Ozzi', role: 'Onboarding Wizard', icon: Sparkles, description: 'Workspace setup, team building, feature education' },
  { name: 'Supervisor', role: 'Project Coordinator', icon: Users, description: 'Task oversight, team coordination, sub-agent delegation' },
  { name: 'SEO Specialist', role: 'Search Optimization', icon: Search, description: 'Keyword research, technical SEO, competitor analysis' },
  { name: 'Content Writer', role: 'Content Creation', icon: PenTool, description: 'Blog writing, email copy, marketing copy, brand voice' },
  { name: 'Data Analyst', role: 'Performance Insights', icon: BarChart2, description: 'Analytics deep-dives, ROI tracking, engagement metrics' },
  { name: 'Social Manager', role: 'Community Manager', icon: Share2, description: 'Content planning, platform strategy, engagement' },
  { name: 'Research Assistant', role: 'Information Specialist', icon: Lightbulb, description: 'Market research, competitor analysis, synthesis' },
  { name: 'Graphic Designer', role: 'Creative Director', icon: Palette, description: 'Visual concepts, design briefs, art direction' },
  { name: 'GBP Expert', role: 'Local SEO', icon: MapPin, description: 'Google Business Profile optimization, review management' },
];

const executiveAgents = [
  { name: 'CEO Agent', scope: 'Portfolio-wide', icon: TrendingUp, description: 'Revenue insights, strategic planning' },
  { name: 'General Manager', scope: 'Cross-client', icon: Users, description: 'Team coordination, resource allocation' },
  { name: 'Analytics Director', scope: 'All clients', icon: BarChart2, description: 'ROI comparison, trend analysis' },
  { name: 'Operations Manager', scope: 'Workflows', icon: Settings, description: 'Task management, capacity planning' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export function AgentsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeAgent, setActiveAgent] = useState<string | null>(null);

  return (
    <section id="agents" className="relative py-24 lg:py-32 bg-[rgb(20,20,20)] border-y border-white/10">
      <div className="mx-auto max-w-[1100px] px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[12px] font-medium uppercase tracking-wider text-orange-400 mb-4">
            AI Agents
          </span>
          <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-tight text-white leading-tight">
            14 specialized employees<br />
            <span className="text-white/40">ready to work</span>
          </h2>
          <p className="mt-4 text-[16px] text-white/50 max-w-2xl mx-auto">
            Each agent has access to 77+ native tools, extended thinking up to 128K tokens, and persistent memory for context continuity.
          </p>
        </motion.div>

        <div ref={ref} className="space-y-12">
          {/* Channel Agents */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[11px] font-medium uppercase tracking-wider text-white/40">
                Channel Agents
              </span>
              <div className="h-px flex-1 bg-white/10" />
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
                      'group relative rounded-xl border bg-white/[0.02] p-4 transition-all duration-200 cursor-pointer',
                      isActive
                        ? 'border-orange-500/40 bg-orange-500/5'
                        : 'border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <div className={cn(
                        'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors',
                        isActive ? 'bg-orange-500/20 text-orange-400' : 'bg-white/5 text-white/40 group-hover:text-white/60'
                      )}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="text-[14px] font-semibold text-white truncate">
                            {agent.name}
                          </h3>
                        </div>
                        <p className="text-[12px] text-white/40 mb-1">
                          {agent.role}
                        </p>
                        <p className={cn(
                          'text-[12px] leading-relaxed transition-all duration-200',
                          isActive ? 'text-white/70' : 'text-white/30'
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
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[11px] font-medium uppercase tracking-wider text-white/40">
                Executive Agents
              </span>
              <div className="h-px flex-1 bg-white/10" />
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
                      'group relative rounded-xl border bg-white/[0.02] p-4 transition-all duration-200 cursor-pointer',
                      isActive
                        ? 'border-blue-500/40 bg-blue-500/5'
                        : 'border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
                    )}
                  >
                    <div className={cn(
                      'mb-3 flex h-10 w-10 items-center justify-center rounded-xl transition-colors',
                      isActive ? 'bg-blue-500/20 text-blue-400' : 'bg-white/5 text-white/40 group-hover:text-white/60'
                    )}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-[14px] font-semibold text-white mb-0.5">
                      {agent.name}
                    </h3>
                    <p className="text-[12px] text-orange-400/80 mb-1">
                      {agent.scope}
                    </p>
                    <p className="text-[12px] text-white/40">
                      {agent.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Bottom features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 grid gap-4 sm:grid-cols-3"
        >
          {[
            { label: 'Extended Thinking', value: 'Up to 128K tokens' },
            { label: 'Tool Approval', value: 'Auto / Approval / Blocked' },
            { label: 'Safety Controls', value: '4-category guardrails' },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-center"
            >
              <div className="text-[14px] font-medium text-white">{item.value}</div>
              <div className="text-[12px] text-white/40 mt-0.5">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
