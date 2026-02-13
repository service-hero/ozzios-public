'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight,
  Building2,
  Shield,
  Lock,
  Users,
  Globe,
  BarChart3,
  Brain,
  Zap,
  CheckCircle2,
  MessageSquare,
  GitBranch,
  FileCheck,
  Layers,
  Target,
  Clock,
  Eye,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Animation Variants
// ---------------------------------------------------------------------------

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
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

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const painPoints = [
  {
    icon: Users,
    title: 'Managing 50+ clients is chaos',
    description:
      'Every client has different needs, different timelines, different expectations. Your team cannot keep it all straight without things falling through the cracks.',
  },
  {
    icon: Layers,
    title: 'Tool sprawl is costing you',
    description:
      'You are paying for 10-15 different marketing tools. Your data lives in silos. Your team wastes hours switching between platforms and reconciling reports.',
  },
  {
    icon: Globe,
    title: 'Consistency across accounts is impossible',
    description:
      'Different team members, different processes, different quality levels. Your enterprise clients expect uniform excellence. You struggle to deliver it at scale.',
  },
  {
    icon: Shield,
    title: 'Security and compliance are non-negotiable',
    description:
      'Your enterprise clients require SOC 2, GDPR, and strict data isolation. One breach could end relationships worth millions in annual revenue.',
  },
];

const features = [
  {
    icon: Layers,
    title: 'Multi-workspace management',
    description: 'Isolated workspaces per client with centralized billing, reporting, and team management. True multi-tenancy built for scale.',
    link: '/features/dashboard',
  },
  {
    icon: Brain,
    title: 'AI workforce at scale',
    description: 'Unlimited AI agents per workspace, each with client-specific memory and context. Consistent execution across every account.',
    link: '/features/ai-agents',
  },
  {
    icon: GitBranch,
    title: 'Enterprise workflow engine',
    description: 'Build standardized processes with approval gates, conditional logic, and cross-channel orchestration. Codify your best practices.',
    link: '/features/workflows',
  },
  {
    icon: Shield,
    title: 'Enterprise-grade security',
    description: 'SOC 2 Type II, GDPR-compliant, AES-256 encryption, RBAC, audit logging, and workspace-scoped data isolation.',
    link: '/security',
  },
  {
    icon: Eye,
    title: 'Full visibility and audit trails',
    description: 'Every AI action logged and auditable. Every tool call traced. Complete transparency for your clients and your compliance team.',
    link: '/features/ai-agents',
  },
  {
    icon: Target,
    title: 'Advanced CRM and lead scoring',
    description: 'AI-powered contact enrichment, predictive lead scoring, and multi-touch attribution across all your client accounts.',
    link: '/features/crm',
  },
];

const stats = [
  { value: '100+', label: 'Clients managed', detail: 'Per enterprise account on average' },
  { value: '70%', label: 'Cost reduction', detail: 'vs. equivalent human headcount' },
  { value: '99.9%', label: 'Uptime SLA', detail: 'Enterprise-grade reliability' },
  { value: '0', label: 'Data breaches', detail: 'SOC 2 compliant infrastructure' },
];

const securityFeatures = [
  {
    icon: Lock,
    title: 'End-to-end encryption',
    description: 'AES-256 at rest, TLS 1.3 in transit. Credentials stored in isolated encrypted vaults.',
  },
  {
    icon: Users,
    title: 'Role-based access control',
    description: 'Granular permissions per workspace. Team members only see what they need to see.',
  },
  {
    icon: FileCheck,
    title: 'Compliance ready',
    description: 'SOC 2 Type II audited. GDPR data processing agreements. Right to deletion.',
  },
  {
    icon: Eye,
    title: 'Complete audit logging',
    description: 'Every action logged. Every AI tool call traced. Full accountability across all workspaces.',
  },
];

const enterpriseBenefits = [
  'Dedicated account manager and onboarding',
  'Custom workflow templates for your vertical',
  'Priority support with guaranteed SLAs',
  'Custom integrations and API access',
  'Volume-based pricing for 50+ client accounts',
  'Quarterly business reviews and optimization',
];

// ---------------------------------------------------------------------------
// Components
// ---------------------------------------------------------------------------

function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="tag-neo rounded-full text-signature bg-signature/10 border-signature mb-6">
              <Building2 className="w-4 h-4" />
              <span className="text-[11px] font-semibold uppercase tracking-wider ml-1.5">For Enterprise Agencies</span>
            </span>
            <h1 className="text-display font-display text-foreground mb-6">
              Scale to 100+ clients{' '}
              <span className="text-signature">without scaling headcount</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              You manage dozens of clients, each expecting white-glove service. OzziOS
              gives you the infrastructure to deliver enterprise-grade marketing at
              scale -- with AI doing the heavy lifting across every account.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.ozzios.com/sign-up"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
              >
                Request a demo
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 border-2 border-border text-foreground font-medium text-base rounded-lg hover:border-signature/30 transition-colors duration-200"
              >
                See enterprise pricing
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function PainSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-neo text-signature mb-6 inline-block">The Challenge</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Scale breaks everything
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            What worked at 10 clients does not work at 50. The processes that got you here will not get you there.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {painPoints.map((point) => {
            const Icon = point.icon;
            return (
              <motion.div key={point.title} variants={itemVariants} className="card-neo rounded-xl p-8">
                <div className="w-12 h-12 rounded-xl bg-signature/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-signature" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{point.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-neo text-signature mb-6 inline-block">Enterprise Platform</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Built for enterprise-scale operations
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Every feature designed for agencies managing 50+ client accounts.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.a
                key={feature.title}
                href={feature.link}
                variants={itemVariants}
                className="card-neo rounded-xl p-8 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-signature/10 flex items-center justify-center mb-5 group-hover:bg-signature/20 transition-colors">
                  <Icon className="w-6 h-6 text-signature" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-signature transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{feature.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-signature">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function SecuritySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-neo text-signature mb-6 inline-block">Security & Compliance</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Enterprise security, not an afterthought
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Your clients trust you with their data. We take that responsibility seriously.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {securityFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} variants={itemVariants} className="card-neo rounded-xl p-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-signature/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-signature" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-neo text-signature mb-6 inline-block">By the Numbers</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Enterprise results at a fraction of the cost
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="card-neo rounded-xl p-8 text-center"
            >
              <div className="font-display text-4xl md:text-5xl text-signature mb-2">{stat.value}</div>
              <div className="font-semibold text-foreground text-sm mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.detail}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enterprise benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="card-neo rounded-xl p-8 md:p-10">
            <h3 className="font-display text-xl text-foreground mb-6 text-center">
              Enterprise plan includes
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {enterpriseBenefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-mint mt-0.5 shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight mb-6">
            Ready to scale without limits?
            <br />
            <span className="text-signature">Let's talk.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
            See how OzziOS can transform your agency operations. Get a personalized
            demo from our enterprise team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.ozzios.com/sign-up"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
            >
              Request a demo
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 border-2 border-border text-foreground font-medium text-base rounded-lg hover:border-signature/30 transition-colors duration-200"
            >
              Contact sales
            </a>
          </div>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> SOC 2 Type II</span>
            <span className="hidden sm:inline text-border">|</span>
            <span>GDPR Compliant</span>
            <span className="hidden sm:inline text-border">|</span>
            <span>99.9% Uptime SLA</span>
            <span className="hidden sm:inline text-border">|</span>
            <span>Dedicated Support</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Main View
// ---------------------------------------------------------------------------

export function EnterpriseView() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PainSection />
      <FeaturesSection />
      <SecuritySection />
      <StatsSection />
      <CTASection />
    </div>
  );
}
