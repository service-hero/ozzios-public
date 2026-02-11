'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Shield,
  Lock,
  Server,
  Eye,
  CheckCircle2,
  ArrowRight,
  KeyRound,
  FileCheck,
  Globe,
  Clock,
} from 'lucide-react';

type TrustBadge = {
  icon: React.ReactNode;
  label: string;
  detail: string;
};

type SecuritySection = {
  icon: React.ReactNode;
  title: string;
  description: string;
  practices: string[];
};

const trustBadges: TrustBadge[] = [
  {
    icon: <Shield className="w-6 h-6" />,
    label: 'SOC 2 Type II',
    detail: 'Audited & compliant',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    label: 'GDPR Ready',
    detail: 'Data privacy by design',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    label: '99.9% Uptime',
    detail: 'Enterprise SLA',
  },
  {
    icon: <Lock className="w-6 h-6" />,
    label: 'End-to-End Encryption',
    detail: 'AES-256 at rest & in transit',
  },
];

const securitySections: SecuritySection[] = [
  {
    icon: <Lock className="w-7 h-7 text-signature" />,
    title: 'Data Encryption',
    description:
      'All data is encrypted at rest using AES-256 and in transit using TLS 1.3. API keys and credentials are stored in isolated, encrypted vaults and never exposed in logs or error messages.',
    practices: [
      'AES-256 encryption at rest for all stored data',
      'TLS 1.3 enforced for all connections',
      'Credential isolation with encrypted vault storage',
      'Automatic key rotation on a regular schedule',
    ],
  },
  {
    icon: <KeyRound className="w-7 h-7 text-signature" />,
    title: 'Access Controls',
    description:
      'Multi-layered access control ensures the right people have the right permissions. Every API call is authenticated and authorized against workspace-scoped policies.',
    practices: [
      'Role-based access control (RBAC) per workspace',
      'Multi-factor authentication via Clerk',
      'Workspace-scoped data isolation — no cross-tenant access',
      'Audit logging for all administrative actions',
    ],
  },
  {
    icon: <Server className="w-7 h-7 text-signature" />,
    title: 'Infrastructure',
    description:
      'Built on enterprise-grade infrastructure with automatic scaling, redundancy, and geographic distribution. Continuous monitoring detects and responds to threats in real time.',
    practices: [
      'Convex serverless backend with automatic scaling',
      'Cloudflare edge network for DDoS protection',
      'Automated backups with point-in-time recovery',
      'Real-time monitoring and anomaly detection via Sentry',
    ],
  },
  {
    icon: <FileCheck className="w-7 h-7 text-signature" />,
    title: 'Compliance & Privacy',
    description:
      'We take a privacy-first approach to data handling. Your client data belongs to you. We process it only as instructed and never sell or share it with third parties.',
    practices: [
      'GDPR-compliant data processing agreements',
      'Right to data portability and deletion',
      'Regular third-party security assessments',
      'Transparent data retention and processing policies',
    ],
  },
  {
    icon: <Eye className="w-7 h-7 text-signature" />,
    title: 'AI Safety & Transparency',
    description:
      'AI agents operate within strictly defined boundaries. Every tool call is logged, every action is auditable, and agents cannot access data outside their assigned workspace.',
    practices: [
      'Agent actions scoped to workspace permissions',
      'Full tool call logging with execution traces',
      'No training on customer data — your data stays yours',
      'Human-in-the-loop controls for sensitive operations',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
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

function TrustBadgeCard({ badge, index }: { badge: TrustBadge; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex flex-col items-center text-center p-6 md:p-8 bg-card border-2 border-border rounded-lg hover:border-signature/30 transition-colors duration-200"
    >
      <div className="w-14 h-14 rounded-full bg-signature/10 flex items-center justify-center text-signature mb-4">
        {badge.icon}
      </div>
      <h3 className="text-lg font-display text-foreground mb-1">{badge.label}</h3>
      <p className="text-sm text-muted-foreground">{badge.detail}</p>
    </motion.div>
  );
}

function SecuritySectionCard({ section, index }: { section: SecuritySection; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
      className="bg-card border-2 border-border rounded-lg p-8 md:p-10 hover:border-signature/30 transition-colors duration-200"
    >
      <div className="flex items-start gap-5">
        <div className="w-14 h-14 rounded-lg bg-signature/10 flex items-center justify-center shrink-0">
          {section.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl md:text-2xl font-display text-foreground mb-3">
            {section.title}
          </h3>
          <p className="text-muted-foreground text-[15px] leading-relaxed mb-6">
            {section.description}
          </p>
          <ul className="space-y-3">
            {section.practices.map((practice, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                <CheckCircle2 className="w-4 h-4 text-mint mt-0.5 shrink-0" />
                {practice}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export function SecurityView() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-[900px] px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-8">
              <div className="tag-neo rounded-full bg-signature/10 border-signature mb-6">
                <Shield className="w-4 h-4 text-signature" />
                <span className="text-[11px] font-semibold text-signature uppercase tracking-wider">
                  Enterprise-Grade Security
                </span>
              </div>
              <h1 className="text-display font-display text-foreground mb-6">
                Security at{' '}
                <span className="text-signature">OzziOS</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your agency handles sensitive client data. We built OzziOS with security
                as a foundation, not an afterthought. Every layer of the platform is
                designed to keep your data safe.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="relative pb-20 lg:pb-24">
        <div className="mx-auto max-w-[1000px] px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {trustBadges.map((badge, index) => (
              <TrustBadgeCard key={badge.label} badge={badge} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-[900px] px-6 lg:px-8">
          <SectionHeader />
          <div className="space-y-6">
            {securitySections.map((section, index) => (
              <SecuritySectionCard key={section.title} section={section} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <CTA />
        </div>
      </section>
    </div>
  );
}

function SectionHeader() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
        How we protect your data
      </h2>
      <p className="text-muted-foreground max-w-xl mx-auto">
        From encryption to compliance, every aspect of our platform is built to meet
        the highest security standards.
      </p>
    </motion.div>
  );
}

function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black tracking-tight mb-6">
        Questions about security?
      </h2>
      <p className="text-lg text-gray-500 mb-10 max-w-lg mx-auto">
        Our team is happy to discuss our security practices, provide compliance
        documentation, or answer any questions.
      </p>
      <a
        href="/contact"
        className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
      >
        Contact our team
        <ArrowRight className="w-5 h-5" />
      </a>
      <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
        <span>SOC 2 Compliant</span>
        <span className="hidden sm:inline text-gray-300">|</span>
        <span>GDPR Ready</span>
        <span className="hidden sm:inline text-gray-300">|</span>
        <span>99.9% Uptime SLA</span>
      </div>
    </motion.div>
  );
}
