import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Sparkles, Zap, Bot, Workflow, Users, CheckCircle2, PlayCircle, HelpCircle } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { cn } from '@/lib/utils';

// Animation variants for staggered reveals
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

// Feature cards data - user-friendly for business owners
const quickStartCards = [
  {
    title: "Get Started",
    description: "Set up your account and add your first client in minutes.",
    icon: Zap,
    href: "/docs/installation",
    gradient: "from-amber-500/20 via-orange-500/10 to-rose-500/20",
    iconColor: "text-amber-500",
  },
  {
    title: "AI Assistants",
    description: "Learn how AI can help you save time on everyday tasks.",
    icon: Bot,
    href: "/docs/concepts/agents",
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
    iconColor: "text-emerald-500",
  },
  {
    title: "Automations",
    description: "Set up automatic follow-ups, reminders, and more.",
    icon: Workflow,
    href: "/docs/concepts/workflows",
    gradient: "from-blue-500/20 via-indigo-500/10 to-violet-500/20",
    iconColor: "text-blue-500",
  },
  {
    title: "How-To Guides",
    description: "Step-by-step instructions for common tasks.",
    icon: BookOpen,
    href: "/docs/guides/first-agent",
    gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/20",
    iconColor: "text-violet-500",
  },
];

const highlights = [
  "Keep all your clients organized in one place",
  "AI assistants that help with emails, research, and more",
  "Automatic follow-ups so you never miss an opportunity",
  "Work together with your team in real-time",
];

export function DocsHomeView() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full min-w-0 px-6 py-10 md:px-8 lg:py-12"
    >
      {/* Hero section */}
      <motion.div variants={itemVariants} className="mb-12">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/30 px-3 py-1">
          <Sparkles className="h-3.5 w-3.5 text-amber-500" />
          <span className="text-[12px] font-medium text-muted-foreground">
            Help Center
          </span>
        </div>
        
        <h1 className="text-[32px] font-semibold tracking-tight text-foreground lg:text-[40px]">
          Welcome to Ozzios
        </h1>
        <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-muted-foreground">
          Learn how to manage your clients, save time with AI assistants, and grow your business—all in one place.
        </p>
      </motion.div>

      {/* Quick start cards */}
      <motion.div variants={itemVariants} className="mb-12">
        <div className="grid gap-4 sm:grid-cols-2">
          {quickStartCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <Link
                key={card.title}
                to={card.href}
                className="group relative"
              >
                <div className={cn(
                  "relative overflow-hidden rounded-xl border border-border/50 bg-card p-5 transition-all duration-200",
                  "hover:border-border hover:shadow-sm"
                )}>
                  {/* Gradient background on hover */}
                  <div className={cn(
                    "absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                    `bg-gradient-to-br ${card.gradient}`
                  )} />
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className={cn(
                      "mb-3 flex h-10 w-10 items-center justify-center rounded-lg",
                      "bg-muted/50 transition-colors group-hover:bg-background/80"
                    )}>
                      <IconComponent className={cn("h-5 w-5", card.iconColor)} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-[15px] font-semibold text-foreground">
                          {card.title}
                        </h3>
                        <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                          {card.description}
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </motion.div>

      {/* Why Ozzios section */}
      <motion.div variants={itemVariants} className="mb-12">
        <div className="rounded-xl border border-border/50 bg-card/50 p-6">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/images/dark-theme-logo.svg"
              alt="Ozzios"
              className="h-6 w-auto dark:invert-0 invert"
            />
            <h2 className="text-[18px] font-semibold text-foreground">
              What Ozzios Does For You
            </h2>
          </div>
          
          <p className="mb-5 text-[14px] leading-relaxed text-muted-foreground">
            Ozzios is your all-in-one business management platform. It helps you stay organized, 
            communicate with clients, and automate repetitive tasks—so you can focus on what you do best.
          </p>
          
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                className="flex items-start gap-2.5 text-[13px] text-foreground"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-emerald-500" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Popular topics section */}
      <motion.div variants={itemVariants} className="mb-12">
        <h2 className="mb-4 text-[16px] font-semibold text-foreground">
          Popular Topics
        </h2>
        
        <div className="grid gap-3 sm:grid-cols-3">
          <ExploreCard
            icon={Bot}
            title="AI Assistants"
            description="How to use AI help"
            href="/docs/concepts/agents"
          />
          <ExploreCard
            icon={Workflow}
            title="Automations"
            description="Set up auto follow-ups"
            href="/docs/concepts/workflows"
          />
          <ExploreCard
            icon={Users}
            title="Team & Clients"
            description="Manage your workspace"
            href="/docs/concepts/workspaces"
          />
        </div>
      </motion.div>

      {/* Quick actions */}
      <motion.div variants={itemVariants}>
        <h2 className="mb-4 text-[16px] font-semibold text-foreground">
          Quick Guides
        </h2>
        
        <div className="space-y-2">
          <QuickLink
            icon={PlayCircle}
            title="Add your first AI assistant"
            description="Get a specialist agent working for you in 2 minutes"
            href="/docs/guides/first-agent"
          />
          <QuickLink
            icon={Workflow}
            title="Create your first automation"
            description="Set up automatic follow-ups for new leads"
            href="/docs/guides/workflows"
          />
          <QuickLink
            icon={HelpCircle}
            title="How Ozzios works"
            description="A simple overview of the platform"
            href="/docs/architecture"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function ExploreCard({
  icon: IconComponent,
  title,
  description,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      to={href}
      className={cn(
        "group flex items-center gap-3 rounded-lg border border-border/50 bg-card p-3",
        "transition-all hover:border-border hover:bg-muted/30"
      )}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-md bg-muted/50">
        <IconComponent className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
      </div>
      <div className="min-w-0">
        <p className="text-[13px] font-medium text-foreground">{title}</p>
        <p className="text-[11px] text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
}

function QuickLink({
  icon: IconComponent,
  title,
  description,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      to={href}
      className={cn(
        "group flex items-center gap-3 rounded-lg border border-border/50 bg-card/50 p-4",
        "transition-all hover:border-border hover:bg-card"
      )}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
        <IconComponent className="h-5 w-5 text-primary" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[14px] font-medium text-foreground group-hover:text-primary transition-colors">{title}</p>
        <p className="text-[12px] text-muted-foreground">{description}</p>
      </div>
      <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 shrink-0" />
    </Link>
  );
}
