import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import {
  Search,
  Mail,
  BarChart2,
  Palette,
  MapPin,
  Share2,
  FileText,
  Video,
  Globe,
  Wrench,
  Wand2,
  Zap,
} from 'lucide-react';
import { useAudience, audienceContent } from '../contexts/AudienceContext';

const showcaseAgents = [
  { name: 'Google Ozzi', role: 'Google Marketing', icon: Search, description: 'Search campaigns, SEO audits, Google Ads management, Analytics reporting, GBP optimization', mp4: '/images/avatars/google-ozzi.mp4' },
  { name: 'Facebook Ozzi', role: 'Facebook & Instagram', icon: Share2, description: 'Ad creation, audience targeting, page management, content scheduling, campaign optimization', mp4: '/images/avatars/facebook-ozzi.mp4' },
  { name: 'Gmail Ozzi', role: 'Email Marketing', icon: Mail, description: 'Campaign writing, drip sequences, cold outreach, inbox management, follow-up automation', mp4: '/images/avatars/gmail-ozzi.mp4' },
  { name: 'YouTube Ozzi', role: 'YouTube Growth', icon: Video, description: 'Video SEO, title & description writing, thumbnail briefs, channel strategy, analytics', mp4: '/images/avatars/youtube-ozzi.mp4' },
  { name: 'WordPress Ozzi', role: 'WordPress Content', icon: FileText, description: 'Blog writing, on-page SEO, content publishing, keyword clustering, content calendars', mp4: '/images/avatars/wordpress-ozzi.mp4' },
  { name: 'Firecrawl Ozzi', role: 'Web Intelligence', icon: Globe, description: 'Competitor research, web data extraction, market analysis, trend monitoring, SERP tracking', mp4: '/images/avatars/firecrawl-ozzi.mp4' },
  { name: 'Housecall Pro Ozzi', role: 'Field Service Marketing', icon: Wrench, description: 'Review generation, job follow-ups, local SEO, client re-engagement, booking optimization', mp4: '/images/avatars/housecall-pro-ozzi.mp4' },
  { name: 'ImageGen Ozzi', role: 'AI Visual Creation', icon: Palette, description: 'AI image prompting, ad creatives, social graphics, brand visuals, product imagery', mp4: '/images/avatars/openai-imagegen-ozzi.mp4' },
  { name: 'Nano Banana Ozzi', role: 'Micro-Task Automation', icon: Zap, description: 'Rapid task execution, lightweight workflows, quick-turn content, instant responses', mp4: '/images/avatars/nano-banana-ozzi.mp4' },
  { name: 'Ozzi', role: 'General Purpose', icon: Wand2, description: 'Versatile AI agent for any marketing task — copy, research, strategy, reporting, and more', mp4: '/images/avatars/generic-ozzi-1.mp4' },
  { name: 'Ozzi', role: 'General Purpose', icon: Wand2, description: 'Versatile AI agent for any marketing task — copy, research, strategy, reporting, and more', mp4: '/images/avatars/generic-ozzi-2.mp4' },
  { name: 'Ozzi', role: 'General Purpose', icon: Wand2, description: 'Versatile AI agent for any marketing task — copy, research, strategy, reporting, and more', mp4: '/images/avatars/generic-ozzi-3.mp4' },
];

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
          className="mb-16 lg:mb-20 max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-signature" />
            <p className="text-[11px] font-semibold text-signature uppercase tracking-[0.2em]">
              {content.sectionLabel}
            </p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-medium leading-[1.1] tracking-tight text-foreground mb-6">
            {content.headline[0]}
            <br />
            <span className="text-muted-foreground/80">{content.headline[1]}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            {content.subheadline}
          </p>
        </motion.div>

        <div ref={ref} className="space-y-16">
          {/* Ozzi Supervisor Featured Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-border/80 bg-card overflow-hidden shadow-sm"
          >
            <div className="flex flex-col lg:flex-row min-h-[320px]">
              {/* Video side */}
              <div className="relative lg:w-2/5 bg-black flex items-center justify-center min-h-[240px] lg:min-h-0">
                <video
                  src="/images/ozzi-avatar.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controlsList="nodownload"
                  disablePictureInPicture
                  onContextMenu={(e) => e.preventDefault()}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content side */}
              <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-semibold tracking-widest uppercase text-signature bg-signature/10 border border-signature/20">
                    Team Supervisor
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-display font-medium text-foreground mb-4">
                  Meet Ozzi — the one who runs the team.
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-8 font-light max-w-lg">
                  Ozzi is your AI marketing supervisor. He coordinates every agent on your team — assigning tasks, reviewing outputs, catching errors, and making sure the work gets done. While your specialists handle execution, Ozzi handles oversight so you never have to.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  {[
                    { label: 'Delegates tasks', description: 'Assigns the right agent to every job' },
                    { label: 'Reviews outputs', description: 'Quality checks before anything goes live' },
                    { label: 'Runs 24/7', description: 'Never off the clock, never misses a beat' },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-signature shrink-0" />
                        <span className="text-[13px] font-semibold text-foreground">{item.label}</span>
                      </div>
                      <p className="text-[12px] text-muted-foreground pl-3.5">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

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
                    key={agent.mp4}
                    variants={itemVariants}
                    onMouseEnter={() => setActiveAgent(agent.name)}
                    onMouseLeave={() => setActiveAgent(null)}
                    className={cn(
                      'group relative rounded-xl border p-5 transition-all duration-300 cursor-pointer shadow-sm',
                      isActive
                        ? 'border-signature/40 bg-signature/[0.02] shadow-md'
                        : 'border-border/80 bg-card hover:border-signature/30'
                    )}
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 rounded-xl overflow-hidden">
                        <video
                          src={agent.mp4}
                          autoPlay
                          loop
                          muted
                          playsInline
                          controlsList="nodownload"
                          disablePictureInPicture
                          onContextMenu={(e) => e.preventDefault()}
                          className="w-full h-full object-cover"
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
                className="group relative rounded-xl border border-dashed border-border/80 p-5 flex flex-col items-center justify-center text-center cursor-pointer hover:border-signature/40 hover:bg-signature/[0.02] transition-all duration-300 shadow-sm"
              >
                <div className="flex -space-x-2 mb-3">
                  {[
                    '/images/avatars/facebook-ozzi-v2.mp4',
                    '/images/avatars/youtube-ozzi.mp4',
                    '/images/avatars/google-ozzi.mp4',
                    '/images/avatars/wordpress-ozzi.mp4',
                  ].map((src) => (
                    <div key={src} className="w-7 h-7 rounded-full overflow-hidden border-2 border-background shrink-0">
                      <video
                        src={src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        controlsList="nodownload"
                        disablePictureInPicture
                        onContextMenu={(e) => e.preventDefault()}
                        className="w-full h-full object-cover"
                      />
                    </div>
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
