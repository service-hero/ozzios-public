import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import {
  Search,
  PenTool,
  BarChart2,
  Palette,
  MapPin,
  Share2,
  FileText,
  Video,
  Target,
  MessageSquare,
  TrendingUp,
  Star,
} from 'lucide-react';
import { SiriOrbAvatar } from '@/shared/components/ui/SiriOrbAvatar';
import { SiriOrbState } from '@/shared/components/ui/smoothui/ui/SiriOrb';
import { useAudience, audienceContent } from '../contexts/AudienceContext';

const showcaseAgents = [
  { name: 'SEO Specialist', role: 'Search Optimization', icon: Search, description: 'Keyword research, competitor analysis, content optimization, performance tracking', variant: 'seo' },
  { name: 'Content Writer', role: 'Content Creation', icon: PenTool, description: 'Blog writing, email campaigns, marketing copy, content strategy', variant: 'creative' },
  { name: 'Social Media Manager', role: 'Community & Growth', icon: Share2, description: 'Content planning, social copywriting, community engagement, trend analysis', variant: 'social' },
  { name: 'Graphic Designer', role: 'Visual Design', icon: Palette, description: 'Visual concepts, design briefs, art direction, brand design', variant: 'creative' },
  { name: 'Data Analyst', role: 'Performance Insights', icon: BarChart2, description: 'Performance analysis, trend identification, strategic insights, custom reports', variant: 'tech' },
  { name: 'Organic SEO Blogger', role: 'SEO Content', icon: FileText, description: 'SEO blog writing, keyword clustering, on-page optimization, content calendars', variant: 'seo' },
  { name: 'Performance Marketing Specialist', role: 'Paid Media', icon: Target, description: 'ROAS optimization, audience strategy, performance analysis, budget allocation', variant: 'tech' },
  { name: 'Video Editor AI', role: 'Video Production', icon: Video, description: 'Video creation and editing using natural language, powered by Remotion AI', variant: 'creative' },
  { name: 'GBP Expert', role: 'Local SEO', icon: MapPin, description: 'Google Business Profile optimization, GBP posts, review management, local SEO', variant: 'seo' },
  { name: 'Client Portal Agent', role: 'Client Support', icon: MessageSquare, description: 'Instant responses, project updates, meeting scheduling, smart escalation', variant: 'supervisor' },
  { name: 'CRO Specialist', role: 'Conversion Optimization', icon: TrendingUp, description: 'Landing page optimization, funnel analysis, A/B testing, form optimization', variant: 'tech' },
  { name: 'Review & Reputation Manager', role: 'Online Reputation', icon: Star, description: 'Review generation, response drafting, reputation monitoring, reputation growth', variant: 'social' },
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
    <section id="agents" className="py-24 lg:py-32 bg-background">
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
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight text-foreground mb-6">
            {content.headline[0]}
            <br />
            <span className="text-muted-foreground">{content.headline[1]}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {content.subheadline}
          </p>
        </motion.div>

        <div ref={ref} className="space-y-16">
          {/* Channel Agents */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                Community Agents
              </span>
              <div className="h-px flex-1 bg-border" />
              <span className="text-[11px] text-muted-foreground">34 agents available</span>
            </div>

            <motion.div
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={containerVariants}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {showcaseAgents.map((agent) => {
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
                        : 'border-border bg-card hover:border-border hover:shadow-sm'
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
                          <h3 className="text-[14px] font-semibold text-foreground">
                            {agent.name}
                          </h3>
                          {isActive && (
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                          )}
                        </div>
                        <p className="text-[12px] text-muted-foreground mb-2">
                          {agent.role}
                        </p>
                        <p className={cn(
                          'text-[12px] leading-relaxed transition-all duration-300',
                          isActive ? 'text-muted-foreground' : 'text-muted-foreground'
                        )}>
                          {agent.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
              {/* +22 more card */}
              <motion.div
                variants={itemVariants}
                className="group relative rounded-2xl border border-dashed border-border p-5 flex flex-col items-center justify-center text-center cursor-pointer hover:border-signature/30 hover:bg-signature/[0.02] transition-all duration-300"
              >
                <div className="flex -space-x-2 mb-3">
                  {['seo', 'creative', 'tech', 'social'].map((v, i) => (
                    <SiriOrbAvatar
                      key={v}
                      size={28}
                      variant={v}
                      orbState="idle"
                      disableFloating={true}
                      className="rounded-full border-2 border-background"
                    />
                  ))}
                </div>
                <span className="text-[14px] font-semibold text-foreground mb-1">+22 more agents</span>
                <span className="text-[12px] text-muted-foreground">Real estate, home services, video, email, ads & more</span>
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* Feature callouts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-border/50 flex flex-wrap items-center justify-center gap-6 lg:gap-12"
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
                <span className="text-[13px] font-medium text-foreground/80">{item.value}</span>
                <span className="text-[13px] text-muted-foreground ml-2">{item.label}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
