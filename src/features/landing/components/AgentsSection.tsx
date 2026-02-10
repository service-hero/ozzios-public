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
} from 'lucide-react';
import { SiriOrbAvatar } from '@/shared/components/ui/SiriOrbAvatar';
import { SiriOrbState } from '@/shared/components/ui/smoothui/ui/SiriOrb';
import { useAudience, audienceContent } from '../contexts/AudienceContext';

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
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function AgentsSection() {
  const { audience } = useAudience();
  const content = audienceContent[audience].agents;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeAgent, setActiveAgent] = useState<string | null>(null);

  return (
    <section id="agents" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="mb-16 lg:mb-20 max-w-2xl"
        >
          <p className="text-sm font-medium text-signature uppercase tracking-wide mb-3">
            {content.sectionLabel}
          </p>
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight text-black mb-6">
            {content.headline[0]}
            <br />
            <span className="text-gray-400">{content.headline[1]}</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            {content.subheadline}
          </p>
        </motion.div>

        <div ref={ref} className="space-y-16">
          {/* Channel Agents */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                Channel Agents
              </span>
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-[11px] text-gray-400">10 agents</span>
            </div>

            <motion.div
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={containerVariants}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
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
                      'group relative rounded-2xl border p-5 transition-all duration-300 cursor-pointer',
                      isActive
                        ? 'border-signature/30 bg-signature/[0.02] shadow-sm'
                        : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                    )}
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0">
                        <SiriOrbAvatar
                          size={48}
                          variant={agent.variant}
                          orbState={getAgentOrbState(isActive)}
                          disableFloating={true}
                          className="rounded-xl transition-all duration-300"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-[14px] font-semibold text-black">
                            {agent.name}
                          </h3>
                          {isActive && (
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                          )}
                        </div>
                        <p className="text-[12px] text-gray-400 mb-2">
                          {agent.role}
                        </p>
                        <p className={cn(
                          'text-[12px] leading-relaxed transition-all duration-300',
                          isActive ? 'text-gray-600' : 'text-gray-500'
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
              <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                Executive Agents
              </span>
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-[11px] text-gray-400">4 agents</span>
            </div>

            <motion.div
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={containerVariants}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
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
                      'group relative rounded-2xl border p-5 transition-all duration-300 cursor-pointer',
                      isActive
                        ? 'border-signature/30 bg-signature/[0.02] shadow-sm'
                        : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                    )}
                  >
                    <div className="mb-4 inline-block">
                      <SiriOrbAvatar
                        size={56}
                        variant={agent.variant}
                        orbState={getAgentOrbState(isActive)}
                        disableFloating={true}
                        className="rounded-xl transition-all duration-300"
                      />
                    </div>
                    <h3 className="text-[14px] font-semibold text-black mb-1">
                      {agent.name}
                    </h3>
                    <p className={cn(
                      'text-[11px] mb-2 transition-colors',
                      isActive ? 'text-signature' : 'text-gray-400'
                    )}>
                      {agent.scope}
                    </p>
                    <p className="text-[12px] text-gray-500">
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
          className="mt-16 pt-12 border-t border-gray-100 flex flex-wrap items-center justify-center gap-6 lg:gap-12"
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
              <div className="h-1.5 w-1.5 rounded-full bg-signature" />
              <div>
                <span className="text-[13px] font-medium text-gray-700">{item.value}</span>
                <span className="text-[13px] text-gray-400 ml-2">{item.label}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
