'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Clock,
  AlertTriangle,
  Search,
  FileText,
  Globe,
  FileUp,
  Brain,
  RefreshCw,
  Zap,
  Shield,
  Bot,
  Layers,
  Sparkles,
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
    icon: AlertTriangle,
    title: 'AI agents give generic answers',
    description:
      'Without context about your business, products, and policies, AI assistants default to vague, unhelpful responses that frustrate your customers.',
  },
  {
    icon: Clock,
    title: 'Onboarding new tools takes weeks',
    description:
      'Every time you add a new AI feature, you spend days feeding it the same company info. Product specs, FAQs, pricing -- again and again.',
  },
  {
    icon: Search,
    title: 'Knowledge is scattered everywhere',
    description:
      'Your product info lives in PDFs, your FAQs are on a webpage, and your policies are in Google Docs. Nothing is connected.',
  },
  {
    icon: Layers,
    title: 'No way to test what AI knows',
    description:
      'You add content to your knowledge base but have no idea what the AI will actually say. You discover gaps only when a customer does.',
  },
];

const capabilities = [
  {
    icon: FileText,
    title: 'Text Entries',
    description:
      'Add FAQs, product info, policies, and procedures as rich text. Indexed immediately so your AI agents can use them in real time.',
  },
  {
    icon: Globe,
    title: 'URL Auto-Import',
    description:
      'Paste a URL and the system auto-fetches the page, converts it to markdown, and indexes it. Keep your knowledge base in sync with your website.',
  },
  {
    icon: FileUp,
    title: 'PDF Processing',
    description:
      'Upload PDFs up to 500K characters. Pages are parsed individually with progress tracking. Product manuals, contracts, guides -- all indexed.',
  },
  {
    icon: Search,
    title: 'Search Preview',
    description:
      'Test queries against your indexed content with relevance scoring (0-100%). See exactly what your AI agents will find before customers ask.',
  },
  {
    icon: Brain,
    title: 'Auto-Generated Company Profile',
    description:
      'AI summarizes all your indexed sources into a company profile. Used by agents before every call and chat for instant context.',
  },
  {
    icon: RefreshCw,
    title: 'Status Tracking & Retry',
    description:
      'Monitor indexing status for every source: pending, indexing, indexed, or error. Retry failed items with one click. See chunk counts per source.',
  },
];

const contentTypes = [
  {
    type: 'Text',
    icon: FileText,
    description: 'Manual entries -- FAQs, product info, policies',
    detail: 'Immediate indexing',
  },
  {
    type: 'URL',
    icon: Globe,
    description: 'Auto-fetched web pages, converted to markdown',
    detail: 'Background indexing',
  },
  {
    type: 'PDF',
    icon: FileUp,
    description: 'Parsed page-by-page with progress tracking',
    detail: 'Up to 500K characters',
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
              <BookOpen className="w-4 h-4 text-signature" />
              <span className="text-[11px] font-semibold text-signature uppercase tracking-wider">
                Knowledge Base
              </span>
            </div>
            <h1 className="text-display font-display text-foreground mb-6">
              Give your AI agents{' '}
              <span className="text-signature">your expertise</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Upload your product docs, FAQs, and web pages. Your AI agents use this
              knowledge in every conversation, giving answers as accurate as your best
              team member.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-signature" />
                RAG-powered search
              </span>
              <span className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-signature" />
                Used by all AI agents
              </span>
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-signature" />
                Auto-generated company profile
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
            Your AI is only as smart as what you teach it
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Without a structured knowledge base, your AI agents are guessing. And
            customers can tell.
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
            Three content types, one intelligent knowledge base
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Upload text, URLs, or PDFs. The system indexes everything and makes it available
            to every AI agent in your workspace.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {contentTypes.map((content, index) => {
            const Icon = content.icon;
            return (
              <motion.div
                key={content.type}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border-2 border-border rounded-lg p-8 text-center hover:border-signature/30 transition-colors duration-200"
              >
                <div className="w-14 h-14 rounded-xl bg-signature/10 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-signature" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{content.type}</h3>
                <p className="text-muted-foreground text-sm mb-3">{content.description}</p>
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-mint bg-mint/10 rounded-full">
                  {content.detail}
                </span>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-card border-2 border-border rounded-lg p-8 md:p-10"
        >
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-lg bg-signature/10 flex items-center justify-center shrink-0">
              <Brain className="w-7 h-7 text-signature" />
            </div>
            <div>
              <h3 className="font-display text-xl text-foreground mb-3">
                How RAG-Powered Search Works
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                When a customer asks your AI agent a question, the system searches your
                knowledge base using retrieval-augmented generation (RAG). It finds the
                most relevant chunks of your content, scores them by relevance, and feeds
                them to the AI as context. The result: answers grounded in your actual
                business information, not generic guesses.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-mint mt-0.5 shrink-0" />
                  Content is chunked and vectorized for semantic search
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-mint mt-0.5 shrink-0" />
                  Relevance scoring ensures only accurate content is used
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-mint mt-0.5 shrink-0" />
                  All AI agents share the same knowledge base
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
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
            Everything to make your AI agents experts
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            From upload to search-ready in minutes. Your AI agents become domain experts
            in your business.
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

function DifferentiatorSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      step: '01',
      title: 'Upload your content',
      description:
        'Add text entries, paste URLs, or upload PDFs. The system accepts all three and handles parsing automatically.',
    },
    {
      step: '02',
      title: 'Automatic indexing',
      description:
        'Content is chunked, vectorized, and indexed for semantic search. Track status in real-time: pending, indexing, indexed, or error.',
    },
    {
      step: '03',
      title: 'Test with search preview',
      description:
        'Run test queries to see what your AI agents will find. Relevance scores show you exactly how well your content matches.',
    },
    {
      step: '04',
      title: 'Agents use it automatically',
      description:
        'Every AI agent in your workspace now has access. Before calls, chats, and emails, agents pull relevant context from your knowledge base.',
    },
  ];

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
          <span className="tag-neo text-signature mb-6 inline-block">
            From Upload to Expert
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-tight mb-4">
            Four steps to smarter AI agents
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((item, index) => (
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
            Make your AI agents
            <br />
            <span className="text-signature">domain experts</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
            Upload your business knowledge once and every AI agent in your workspace
            becomes an expert on your products, services, and policies.
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

export function KnowledgeBaseView() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PainPointsSection />
      <SolutionSection />
      <CapabilitiesSection />
      <DifferentiatorSection />
      <CTASection />
    </div>
  );
}
