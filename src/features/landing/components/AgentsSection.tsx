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
  Sparkles
} from 'lucide-react';

const channelAgents = [
  { name: 'Ozzi', role: 'Onboarding Wizard', icon: Sparkles, description: 'Workspace setup, team building, feature education' },
  { name: 'Supervisor', role: 'Project Coordinator', icon: Users, description: 'Task oversight, team coordination, sub-agent delegation' },
  { name: 'SEO Specialist', role: 'Search Optimization', icon: Search, description: 'Keyword research, technical SEO, competitor analysis' },
  { name: 'Content Writer', role: 'Content Creation', icon: PenTool, description: 'Blog writing, email copy, marketing copy, brand voice' },
  { name: 'Data Analyst', role: 'Performance Insights', icon: BarChart2, description: 'Analytics deep-dives, ROI tracking, engagement metrics' },
  { name: 'Research Assistant', role: 'Information Specialist', icon: Lightbulb, description: 'Market research, competitor analysis, synthesis' },
  { name: 'Graphic Designer', role: 'Creative Director', icon: Palette, description: 'Visual concepts, design briefs, art direction' },
  { name: 'GBP Expert', role: 'Local SEO', icon: MapPin, description: 'Google Business Profile optimization, review management' },
  { name: 'Organic SEO Blogger', role: 'Content Strategy', icon: FileText, description: 'SEO-optimized writing, keyword clustering' },
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
    <section id="agents" className="relative py-20 lg:py-28 bg-muted/20 border-y border-border/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[12px] font-medium uppercase tracking-wider text-amber-500 mb-4">
            AI Agents
          </span>
          <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-tight text-foreground leading-tight">
            14 specialized employees<br />ready to work
          </h2>
          <p className="mt-4 text-[16px] text-muted-foreground max-w-2xl mx-auto">
            Each agent has access to 77+ native tools, extended thinking up to 128K tokens, and persistent memory for context continuity.
          </p>
        </motion.div>

        <div ref={ref} className="space-y-12">
          {/* Channel Agents */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-border/60" />
              <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                Channel Agents
              </span>
              <div className="h-px flex-1 bg-border/60" />
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
                      'group relative rounded-lg border bg-card p-4 transition-all duration-200 cursor-pointer',
                      isActive
                        ? 'border-amber-500/40 bg-amber-500/5'
                        : 'border-border/50 hover:border-border hover:bg-muted/30'
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <div className={cn(
                        'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors',
                        isActive ? 'bg-amber-500/20 text-amber-500' : 'bg-muted/50 text-muted-foreground group-hover:text-foreground'
                      )}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="text-[13px] font-semibold text-foreground truncate">
                            {agent.name}
                          </h3>
                        </div>
                        <p className="text-[11px] text-muted-foreground mb-1">
                          {agent.role}
                        </p>
                        <p className={cn(
                          'text-[11px] leading-relaxed transition-all duration-200',
                          isActive ? 'text-foreground/80' : 'text-muted-foreground/70'
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
              <div className="h-px flex-1 bg-border/60" />
              <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                Executive Agents
              </span>
              <div className="h-px flex-1 bg-border/60" />
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
                      'group relative rounded-lg border bg-card p-4 transition-all duration-200 cursor-pointer',
                      isActive
                        ? 'border-blue-500/40 bg-blue-500/5'
                        : 'border-border/50 hover:border-border hover:bg-muted/30'
                    )}
                  >
                    <div className={cn(
                      'mb-3 flex h-9 w-9 items-center justify-center rounded-lg transition-colors',
                      isActive ? 'bg-blue-500/20 text-blue-500' : 'bg-muted/50 text-muted-foreground group-hover:text-foreground'
                    )}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-[13px] font-semibold text-foreground mb-0.5">
                      {agent.name}
                    </h3>
                    <p className="text-[11px] text-amber-500/80 mb-1">
                      {agent.scope}
                    </p>
                    <p className="text-[11px] text-muted-foreground">
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
              className="rounded-lg border border-border/50 bg-card/50 p-4 text-center"
            >
              <div className="text-[13px] font-medium text-foreground">{item.value}</div>
              <div className="text-[11px] text-muted-foreground mt-0.5">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
