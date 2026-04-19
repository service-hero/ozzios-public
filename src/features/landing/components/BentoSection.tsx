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
import { Link } from '@tanstack/react-router';
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
      className="relative overflow-hidden py-32 lg:py-40"
    >
      <div className="pointer-events-none absolute inset-x-0 top-24 h-72 bg-[radial-gradient(circle_at_top,rgba(196,88,63,0.12),transparent_58%)] blur-3xl" />
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-20 max-w-5xl">
            <p className="mb-6 text-[0.72rem] font-medium uppercase tracking-[0.26em] text-foreground/45">
              {content.sectionLabel}
            </p>
            <h2 className="max-w-5xl text-[clamp(3rem,5.8vw,5.8rem)] font-display font-medium leading-[0.92] tracking-[-0.06em] text-foreground mb-6">
              {content.headline[0]}
              <br />
              <span className="text-muted-foreground/78">{content.headline[1]}</span>
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              {content.subheadline}
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-flow-dense grid-cols-12 gap-5 lg:gap-6">
            {/* Card 1: AI Agents - Featured hero card */}
            <motion.div variants={itemVariants} className="col-span-12 lg:col-span-8">
              <BentoCard featured>
                <div className="flex flex-col lg:flex-row h-full min-h-[320px]">
                  {/* Image side */}
                  <div className="relative lg:w-2/5 h-48 lg:h-auto">
                    <img
                      src="/images/Gemini_Generated_Image_1vp39x1vp39x1vp3.webp"
                      alt="AI marketing team collaborating"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  {/* Content side */}
                  <div className="flex-1 p-8 lg:p-10 flex flex-col">
                    <div className="flex items-center gap-2 mb-8">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-signature/20 bg-signature/10 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-signature">
                        <Bot className="h-3.5 w-3.5" />
                        {content.cards.aiWorkforce.badge}
                      </span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-display font-medium text-foreground mb-4">
                      {content.cards.aiWorkforce.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed mb-10 font-light">
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
                          className="p-3 rounded-xl bg-muted/50 border border-border/50 hover:border-border transition-colors"
                        >
                          <div className="flex items-center gap-2 mb-1.5">
                            <div
                              className={cn(
                                'h-2 w-2 rounded-full',
                                agent.status === 'active'
                                  ? 'bg-foreground'
                                  : 'bg-border'
                              )}
                            />
                            <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                              {agent.status}
                            </span>
                          </div>
                          <p className="text-sm font-medium text-foreground/80">
                            {agent.name}
                          </p>
                        </div>
                      ))}
                    </div>
                    <Link
                      to="/features/ai-agents"
                      className="inline-flex items-center gap-1.5 mt-6 text-sm font-medium text-signature hover:text-signature/80 transition-colors"
                    >
                      Explore AI Agents
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </BentoCard>
            </motion.div>

            {/* Card 2: 77+ Tools */}
            <motion.div variants={itemVariants} className="col-span-12 sm:col-span-6 lg:col-span-4">
              <BentoCard className="h-full">
                <div className="p-7 flex flex-col h-full">
                  <div className="h-11 w-11 rounded-xl bg-signature/10 flex items-center justify-center mb-5">
                    <Layers className="h-5 w-5 text-signature" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {content.cards.tools.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {content.cards.tools.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {['Tasks', 'Reports', 'Memory', 'Search'].map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 text-xs font-medium text-muted-foreground bg-muted rounded-md"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/features/dashboard"
                    className="inline-flex items-center gap-1.5 mt-4 text-xs font-medium text-signature hover:text-signature/80 transition-colors"
                  >
                    See all tools
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </BentoCard>
            </motion.div>

            {/* Card 3: Communities */}
            <motion.div variants={itemVariants} className="col-span-12 sm:col-span-6 lg:col-span-4">
              <BentoCard className="h-full">
                <div className="p-7 flex flex-col h-full">
                  <div className="h-11 w-11 rounded-xl bg-signature/10 flex items-center justify-center mb-5">
                    <Users className="h-5 w-5 text-signature" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {content.cards.communication.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {content.cards.communication.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {['Channels', 'Forums', 'Voice', 'Roles'].map((feature) => (
                      <span
                        key={feature}
                        className="px-2.5 py-1 text-xs font-medium text-muted-foreground bg-muted rounded-md"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/features/channels"
                    className="inline-flex items-center gap-1.5 mt-4 text-xs font-medium text-signature hover:text-signature/80 transition-colors"
                  >
                    Explore channels
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </BentoCard>
            </motion.div>

            {/* Card 4: Workflows - Wide card */}
            <motion.div variants={itemVariants} className="col-span-12 lg:col-span-8">
              <BentoCard className="h-full">
                <div className="flex flex-col lg:flex-row h-full min-h-[280px]">
                  {/* Content side */}
                  <div className="flex-1 p-8 lg:p-10">
                    <div className="h-11 w-11 rounded-xl bg-signature/10 flex items-center justify-center mb-5">
                      <Workflow className="h-5 w-5 text-signature" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      {content.cards.workflows.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed mb-8">
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
                          <div className="text-2xl font-semibold text-foreground">
                            {metric.value}
                          </div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    <Link
                      to="/features/workflows"
                      className="inline-flex items-center gap-1.5 mt-6 text-sm font-medium text-signature hover:text-signature/80 transition-colors"
                    >
                      Explore workflows
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>

                  {/* Image side */}
                  <div className="relative lg:w-2/5 h-48 lg:h-auto">
                    <img
                      src="/images/Gemini_Generated_Image_yam1khyam1khyam1.webp"
                      alt="Automated marketing workflow"
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
                  <div className="h-11 w-11 rounded-xl bg-signature/10 flex items-center justify-center mb-5">
                    <Briefcase className="h-5 w-5 text-signature" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {content.cards.crm.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {content.cards.crm.description}
                  </p>
                  <div className="mt-auto flex items-baseline gap-2">
                    <span className="text-3xl font-semibold text-foreground">31</span>
                    <span className="text-sm text-muted-foreground">contact fields</span>
                  </div>
                  <Link
                    to="/features/crm"
                    className="inline-flex items-center gap-1.5 mt-4 text-xs font-medium text-signature hover:text-signature/80 transition-colors"
                  >
                    Explore CRM
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </BentoCard>
            </motion.div>

            {/* Card 6: Marketing Suite */}
            <motion.div variants={itemVariants} className="col-span-12 sm:col-span-6 lg:col-span-4">
              <BentoCard className="h-full">
                <div className="p-7 flex flex-col h-full">
                  <div className="h-11 w-11 rounded-xl bg-signature/10 flex items-center justify-center mb-5">
                    <Megaphone className="h-5 w-5 text-signature" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {content.cards.marketing.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {content.cards.marketing.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {[
                      { name: 'Facebook', logo: '/images/facebook-icon.svg' },
                      { name: 'Google', logo: '/images/google-logo.svg' },
                      { name: 'TikTok', logo: '/images/tiktok-logo.svg' },
                      { name: 'YouTube', logo: '/images/youtube-logo.webp' },
                    ].map((platform) => (
                      <span
                        key={platform.name}
                        className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-muted-foreground bg-muted rounded-md"
                      >
                        <img src={platform.logo} alt={platform.name} className="w-3.5 h-3.5 rounded-sm object-cover" />
                        {platform.name}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/features/email-campaigns"
                    className="inline-flex items-center gap-1.5 mt-4 text-xs font-medium text-signature hover:text-signature/80 transition-colors"
                  >
                    Explore marketing
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </BentoCard>
            </motion.div>

            {/* Card 7: Multi-tenant */}
            <motion.div variants={itemVariants} className="col-span-12 sm:col-span-6 lg:col-span-4">
              <BentoCard className="h-full">
                <div className="p-7 flex flex-col h-full">
                  <div className="h-11 w-11 rounded-xl bg-signature/10 flex items-center justify-center mb-5">
                    <BarChart3 className="h-5 w-5 text-signature" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {content.cards.multiTenant.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {content.cards.multiTenant.description}
                  </p>
                  <div className="mt-auto text-sm text-muted-foreground">
                    650+ indexes / Workspace isolation
                  </div>
                  <Link
                    to="/features/dashboard"
                    className="inline-flex items-center gap-1.5 mt-4 text-xs font-medium text-signature hover:text-signature/80 transition-colors"
                  >
                    Explore dashboard
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </BentoCard>
            </motion.div>

            {/* Card 8: Built-in Security */}
            <motion.div variants={itemVariants} className="col-span-12 sm:col-span-6 lg:col-span-4">
              <BentoCard className="h-full">
                <div className="p-7 flex flex-col h-full">
                  <div className="h-11 w-11 rounded-xl bg-signature/10 flex items-center justify-center mb-5">
                    <Shield className="h-5 w-5 text-signature" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {content.cards.security.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {content.cards.security.description}
                  </p>
                  <div className="mt-auto flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-signature" />
                    <span className="text-sm font-medium text-signature">
                      Built-in Security
                    </span>
                  </div>
                </div>
              </BentoCard>
            </motion.div>
          </div>

          {/* Feature count callout */}
          <motion.div variants={itemVariants} className="mt-8 rounded-[2rem] border border-white/80 bg-white/70 p-6 shadow-[0_20px_60px_rgba(56,40,29,0.08)] backdrop-blur-xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  17 features across 4 categories
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Email campaigns, SMS, social media, forms, voice agents, dashboards, coding, and more.
                </p>
              </div>
              <a
                href="#showcase"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
              >
                See all features
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
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
        'group relative overflow-hidden rounded-[2rem] bg-white/80 transition-all duration-500 ease-out',
        featured
          ? 'border border-white/80 shadow-[0_24px_70px_rgba(56,40,29,0.08)] hover:-translate-y-1 hover:shadow-[0_34px_90px_rgba(56,40,29,0.12)]'
          : 'border border-white/70 shadow-[0_16px_48px_rgba(56,40,29,0.06)] hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(56,40,29,0.1)]',
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(233,222,214,0.28)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      {children}
    </div>
  );
}
