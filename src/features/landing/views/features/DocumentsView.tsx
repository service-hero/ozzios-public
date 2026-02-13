'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  FileSignature,
  Shield,
  Clock,
  AlertTriangle,
  Users,
  Lock,
  FileCheck,
  History,
  Bell,
  Workflow,
  Webhook,
  Zap,
  PenTool,
  Eye,
} from 'lucide-react';

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
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const painPoints = [
  {
    icon: Clock,
    title: 'Chasing signatures for days',
    description:
      'You send a contract and then wait. And follow up. And wait. Meanwhile the deal cools off and competitors move in.',
  },
  {
    icon: AlertTriangle,
    title: 'No audit trail when it matters',
    description:
      'When a client disputes what they agreed to, you need timestamped proof of every view, sign, and decline. Most tools give you nothing.',
  },
  {
    icon: Users,
    title: 'Multi-signer workflows are painful',
    description:
      'Sequential approvals, different roles, CC parties -- coordinating three signers across two companies should not require a spreadsheet.',
  },
  {
    icon: Lock,
    title: 'Security is an afterthought',
    description:
      'Sensitive client agreements sent via email with no verification. No OTP, no identity checks, no encrypted storage.',
  },
];

const capabilities = [
  {
    icon: FileSignature,
    title: 'Drag-and-Drop Template Builder',
    description:
      'Build document templates with heading, paragraph, signature, name, and date blocks. Add merge tags for automatic personalization.',
  },
  {
    icon: Users,
    title: 'Multi-Recipient Workflows',
    description:
      'Sequential or parallel signing. Assign roles -- signer, approver, CC. Each recipient gets a secure link and clear instructions.',
  },
  {
    icon: Lock,
    title: 'OTP Identity Verification',
    description:
      'Every signer verifies their identity via email or SMS one-time password before accessing the document. No unsigned access.',
  },
  {
    icon: History,
    title: 'Complete Audit Trail',
    description:
      'Every view, sign, and decline is timestamped and recorded with metadata snapshots. Court-admissible evidence, built in.',
  },
  {
    icon: Bell,
    title: 'Auto-Reminders & Expiry',
    description:
      'Automatic reminders at 3 days and 1 day before expiry. Configurable 1-90 day request lifetime. No manual follow-ups.',
  },
  {
    icon: Webhook,
    title: 'Webhooks & Integrations',
    description:
      'Outbound webhooks fire on every signing event. Connect to your CRM, billing, or project management tools automatically.',
  },
];

const signingFlow = [
  {
    step: '01',
    title: 'Build your template',
    description:
      'Use the block-based editor to create reusable templates. Add signature fields, merge tags, and disclosure policies. Version every change.',
  },
  {
    step: '02',
    title: 'Send for signature',
    description:
      'Select recipients, assign roles, set signing order. Each signer receives a secure email with a unique, time-limited link.',
  },
  {
    step: '03',
    title: 'Signers authenticate and sign',
    description:
      'Recipients verify identity via OTP, review the document, and sign with a captured signature. Every action logged to the audit trail.',
  },
  {
    step: '04',
    title: 'Track and close',
    description:
      'Monitor real-time status for every recipient. Get notified when everyone has signed. Auto-trigger approval workflows if needed.',
  },
];

function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative z-10 mx-auto max-w-[900px] px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <motion.div variants={itemVariants} className="text-center mb-8">
            <div className="tag-neo rounded-full bg-signature/10 border-signature mb-6">
              <FileSignature className="w-4 h-4 text-signature" />
              <span className="text-[11px] font-semibold text-signature uppercase tracking-wider">
                Documents & E-Sign
              </span>
            </div>
            <h1 className="text-display font-display text-foreground mb-6">
              Close deals faster with{' '}
              <span className="text-signature">secure e-signatures</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Build templates, send for signature, verify identity, and track every action.
              Complete audit trail, multi-recipient workflows, and automated reminders built in.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-signature" />
                68% faster contract turnaround
              </span>
              <span className="flex items-center gap-2">
                <PenTool className="w-4 h-4 text-signature" />
                Legally binding e-signatures
              </span>
              <span className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-signature" />
                Full audit trail
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function PainPointsSection() {
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
          <span className="tag-neo text-signature mb-6 inline-block">The Problem</span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-tight mb-4">
            Every unsigned contract is revenue at risk
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            The average contract takes 5+ days to get signed. Every day of delay increases
            the chance the deal falls through.
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
              <motion.div
                key={point.title}
                variants={itemVariants}
                className="card-neo rounded-xl p-8 group"
              >
                <div className="w-12 h-12 rounded-xl bg-signature/10 flex items-center justify-center mb-5 group-hover:bg-signature/20 transition-colors">
                  <Icon className="w-6 h-6 text-signature" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{point.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function SolutionSection() {
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
          <span className="tag-neo text-signature mb-6 inline-block">How It Works</span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-tight mb-4">
            From template to signed in four steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            A signing workflow that protects both parties and gets deals closed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {signingFlow.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-5"
            >
              <div className="w-14 h-14 rounded-lg bg-signature/10 flex items-center justify-center shrink-0">
                <span className="font-display text-signature text-lg">{item.step}</span>
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
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
          <span className="tag-neo text-signature mb-6 inline-block">Capabilities</span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-tight mb-4">
            Enterprise-grade signing for every deal
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Everything you need to create, send, track, and legally enforce digital documents.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                variants={itemVariants}
                className="bg-card border-2 border-border rounded-lg p-8 hover:border-signature/30 transition-colors duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-signature/10 flex items-center justify-center mb-5 group-hover:bg-signature/20 transition-colors">
                  <Icon className="w-6 h-6 text-signature" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-3">{cap.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function ComplianceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const complianceFeatures = [
    'OTP identity verification for every signer',
    'AES-256 encryption for documents at rest',
    'TLS 1.3 for all document transfers',
    'Timestamped audit trail for every action',
    'Configurable disclosure policies with versioning',
    'Approval workflows with conditional rules',
    'Automatic document expiry and cleanup',
    'Webhook delivery tracking with retry logic',
  ];

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[900px] px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
          >
            <span className="tag-neo text-signature mb-6 inline-block">
              Security & Compliance
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-tight mb-4">
              Built for contracts that matter
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              Every document is encrypted, every signer is verified, and every action is
              logged. When disputes arise, you have the evidence you need.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <ul className="space-y-4">
              {complianceFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-foreground/80"
                >
                  <CheckCircle2 className="w-4 h-4 text-mint mt-0.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
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
            Close deals in hours,
            <br />
            <span className="text-signature">not weeks</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
            Send your first document for signature in minutes. Templates, multi-signer
            workflows, and full audit trails included from day one.
          </p>
          <a
            href="https://app.ozzios.com/sign-up"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
          >
            Start free trial
            <ArrowRight className="w-5 h-5" />
          </a>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              SOC 2 Compliant
            </span>
            <span className="hidden sm:inline text-border">|</span>
            <span>GDPR Ready</span>
            <span className="hidden sm:inline text-border">|</span>
            <span>99.9% Uptime SLA</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function DocumentsView() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PainPointsSection />
      <SolutionSection />
      <CapabilitiesSection />
      <ComplianceSection />
      <CTASection />
    </div>
  );
}
