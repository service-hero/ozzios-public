import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  Bot,
  Layers,
  Users,
  Workflow,
  Briefcase,
  Megaphone,
  BarChart3,
  Shield,
  ArrowRight,
} from 'lucide-react';
import { useAudience, audienceContent } from '../contexts/AudienceContext';

// Coral accent color - now using Tailwind's signature color from design system

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
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function BentoSection() {
  const { audience } = useAudience();
  const content = audienceContent[audience].bento;

  return (
    <section
      id="features"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="mb-16 max-w-2xl">
            <p className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-3">
              {content.sectionLabel}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-neutral-900 mb-4">
              {content.headline[0]}
              <br />
              <span className="text-neutral-400">{content.headline[1]}</span>
            </h2>
            <p className="text-lg text-neutral-500 leading-relaxed">
              {content.subheadline}
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-12 gap-5">
            {/* Card 1: AI Agents - Featured hero card */}
            <motion.div variants={itemVariants} className="col-span-12 lg:col-span-8">
              <BentoCard featured>
                <div className="flex flex-col lg:flex-row h-full min-h-[320px]">
                  {/* Image side */}
                  <div className="relative lg:w-2/5 h-48 lg:h-auto">
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=800&fit=crop&auto=format"
                      alt="Team collaboration"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  {/* Content side */}
                  <div className="flex-1 p-8 lg:p-10 flex flex-col">
                    <div className="flex items-center gap-2 mb-6">
                      <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider text-white bg-signature"
                      >
                        <Bot className="h-3.5 w-3.5" />
                        {content.cards.aiWorkforce.badge}
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-semibold text-neutral-900 mb-3">
                      {content.cards.aiWorkforce.title}
                    </h3>
                    <p className="text-base text-neutral-500 leading-relaxed mb-8">
                      {content.cards.aiWorkforce.description}
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
                          className="p-3 rounded-xl bg-neutral-50 border border-neutral-100 hover:border-neutral-200 transition-colors"
                        >
                          <div className="flex items-center gap-2 mb-1.5">
                            <div
                              className={cn(
                                'h-2 w-2 rounded-full',
                                agent.status === 'active'
                                  ? 'bg-neutral-900'
                                  : 'bg-neutral-300'
                              )}
                            />
                            <span className="text-[10px] text-neutral-400 uppercase tracking-wider">
                              {agent.status}
                            </span>
                          </div>
                          <p className="text-sm font-medium text-neutral-700">
                            {agent.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </BentoCard>
            </motion.div>

            {/* Card 2: 77+ Tools */}
            <motion.div variants={itemVariants} className="col-span-12 sm:col-span-6 lg:col-span-4">
              <BentoCard className="h-full">
                <div className="p-7 flex flex-col h-full">
                  <div className="h-11 w-11 rounded-xl bg-neutral-100 flex items-center justify-center mb-5">
                    <Layers className="h-5 w-5 text-neutral-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {content.cards.tools.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-5">
                    {content.cards.tools.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {['Tasks', 'Reports', 'Memory', 'Search'].map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 text-xs font-medium text-neutral-600 bg-neutral-100 rounded-md"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </BentoCard>
            </motion.div>

            {/* Card 3: Communities */}
            <motion.div variants={itemVariants} className="col-span-12 sm:col-span-6 lg:col-span-4">
              <BentoCard className="h-full">
                <div className="p-7 flex flex-col h-full">
                  <div className="h-11 w-11 rounded-xl bg-neutral-100 flex items-center justify-center mb-5">
                    <Users className="h-5 w-5 text-neutral-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {content.cards.communication.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-5">
                    {content.cards.communication.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {['Channels', 'Forums', 'Voice', 'Roles'].map((feature) => (
                      <span
                        key={feature}
                        className="px-2.5 py-1 text-xs font-medium text-neutral-600 bg-neutral-100 rounded-md"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </BentoCard>
            </motion.div>

            {/* Card 4: Workflows - Wide card */}
            <motion.div variants={itemVariants} className="col-span-12 lg:col-span-8">
              <BentoCard className="h-full">
                <div className="flex flex-col lg:flex-row h-full min-h-[280px]">
                  {/* Content side */}
                  <div className="flex-1 p-8 lg:p-10">
                    <div className="h-11 w-11 rounded-xl bg-neutral-100 flex items-center justify-center mb-5">
                      <Workflow className="h-5 w-5 text-neutral-700" />
                    </div>
                    <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                      {content.cards.workflows.title}
                    </h3>
                    <p className="text-base text-neutral-500 leading-relaxed mb-8">
                      {content.cards.workflows.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-6">
                      {[
                        { value: '22', label: 'Triggers' },
                        { value: '8', label: 'Node Types' },
                        { value: '99.9%', label: 'Uptime' },
                      ].map((metric) => (
                        <div key={metric.label}>
                          <div className="text-2xl font-semibold text-neutral-900">
                            {metric.value}
                          </div>
                          <div className="text-xs text-neutral-400 uppercase tracking-wider mt-1">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image side */}
                  <div className="relative lg:w-2/5 h-48 lg:h-auto">
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop&auto=format"
                      alt="Analytics dashboard"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </BentoCard>
            </motion.div>

            {/* Card 5: CRM */}
            <motion.div variants={itemVariants} className="col-span-12 sm:col-span-6 lg:col-span-4">
              <BentoCard className="h-full">
                <div className="p-7 flex flex-col h-full">
                  <div className="h-11 w-11 rounded-xl bg-neutral-100 flex items-center justify-center mb-5">
                    <Briefcase className="h-5 w-5 text-neutral-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {content.cards.crm.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-5">
                    {content.cards.crm.description}
                  </p>
                  <div className="mt-auto flex items-baseline gap-2">
                    <span className="text-3xl font-semibold text-neutral-900">31</span>
                    <span className="text-sm text-neutral-400">contact fields</span>
                  </div>
                </div>
              </BentoCard>
            </motion.div>

            {/* Card 6: Marketing Suite */}
            <motion.div variants={itemVariants} className="col-span-12 sm:col-span-6 lg:col-span-4">
              <BentoCard className="h-full">
                <div className="p-7 flex flex-col h-full">
                  <div className="h-11 w-11 rounded-xl bg-neutral-100 flex items-center justify-center mb-5">
                    <Megaphone className="h-5 w-5 text-neutral-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {content.cards.marketing.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-5">
                    {content.cards.marketing.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {['Meta', 'Google', 'LinkedIn', 'TikTok'].map((platform) => (
                      <span
                        key={platform}
                        className="px-2.5 py-1 text-xs font-medium text-neutral-600 bg-neutral-100 rounded-md"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </BentoCard>
            </motion.div>

            {/* Card 7: Multi-tenant */}
            <motion.div variants={itemVariants} className="col-span-12 sm:col-span-6 lg:col-span-4">
              <BentoCard className="h-full">
                <div className="p-7 flex flex-col h-full">
                  <div className="h-11 w-11 rounded-xl bg-neutral-100 flex items-center justify-center mb-5">
                    <BarChart3 className="h-5 w-5 text-neutral-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {content.cards.multiTenant.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-5">
                    {content.cards.multiTenant.description}
                  </p>
                  <div className="mt-auto text-sm text-neutral-400">
                    650+ indexes / Workspace isolation
                  </div>
                </div>
              </BentoCard>
            </motion.div>

            {/* Card 8: Enterprise Security */}
            <motion.div variants={itemVariants} className="col-span-12 sm:col-span-6 lg:col-span-4">
              <BentoCard className="h-full">
                <div className="p-7 flex flex-col h-full">
                  <div className="h-11 w-11 rounded-xl bg-neutral-100 flex items-center justify-center mb-5">
                    <Shield className="h-5 w-5 text-neutral-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {content.cards.security.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-5">
                    {content.cards.security.description}
                  </p>
                  <div className="mt-auto flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-signature" />
                    <span className="text-sm font-medium text-signature">
                      SOC 2 Ready
                    </span>
                  </div>
                </div>
              </BentoCard>
            </motion.div>
          </div>

          {/* Bottom CTA link */}
          <motion.div variants={itemVariants} className="mt-14 text-center">
            <a
              href="#all-features"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors group"
            >
              Explore all features
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
  featured = false,
}: {
  children: React.ReactNode;
  className?: string;
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        'relative rounded-2xl bg-white overflow-hidden transition-shadow duration-300',
        featured
          ? 'border-2 border-neutral-200 shadow-sm hover:shadow-md'
          : 'border border-neutral-200 hover:shadow-sm',
        className
      )}
    >
      {children}
    </div>
  );
}
