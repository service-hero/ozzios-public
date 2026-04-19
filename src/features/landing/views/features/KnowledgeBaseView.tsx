import { motion, useInView } from 'framer-motion';
import {
  AlertTriangle,
  BookOpen,
  Brain,
  Clock,
  FileText,
  FileUp,
  Globe,
  Layers,
  RefreshCw,
  Search,
} from 'lucide-react';
import { useRef } from 'react';
import { DeferredSection } from '@/components/ui/lazy-section';
import {
  CapabilitiesBlock,
  ChecklistBlock,
  FeatureCTABlock,
  FeatureHero,
  PainPointsBlock,
  SectionHeader,
  innerContainerVariants,
  innerItemVariants,
  type Capability,
  type PainPoint,
} from '../../components/_landing-primitives';

const painPoints: PainPoint[] = [
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
      'Every time you add a new AI feature, you spend days feeding it the same company info. Product specs, FAQs, pricing — again and again.',
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

const capabilities: Capability[] = [
  {
    icon: FileText,
    title: 'Text entries',
    benefit: 'Immediate indexing',
    description:
      'Add FAQs, product info, policies, and procedures as rich text. Indexed immediately so agents can use them in real time.',
  },
  {
    icon: Globe,
    title: 'URL auto-import',
    benefit: 'Stay in sync with your site',
    description:
      'Paste a URL and the system auto-fetches the page, converts it to markdown, and indexes it.',
  },
  {
    icon: FileUp,
    title: 'PDF processing',
    benefit: 'Up to 500K characters',
    description:
      'Upload PDFs. Pages are parsed individually with progress tracking. Manuals, contracts, guides — all indexed.',
  },
  {
    icon: Search,
    title: 'Search preview',
    benefit: 'Test before customers do',
    description:
      'Test queries against your indexed content with relevance scoring (0-100%). See exactly what your agents will find.',
  },
  {
    icon: Brain,
    title: 'Auto-generated company profile',
    benefit: 'Used before every interaction',
    description:
      'AI summarizes all your indexed sources into a company profile. Used by agents before every call and chat for instant context.',
  },
  {
    icon: RefreshCw,
    title: 'Status tracking & retry',
    benefit: 'No silent failures',
    description:
      'Monitor indexing status: pending, indexing, indexed, or error. Retry failed items with one click.',
  },
];

// ────────────────────────────────────────────────────────────────────────────
// 4-step "From upload to expert" section
// ────────────────────────────────────────────────────────────────────────────

function StepFlowSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    { step: '01', title: 'Upload your content', description: 'Add text entries, paste URLs, or upload PDFs. The system accepts all three and handles parsing automatically.' },
    { step: '02', title: 'Automatic indexing', description: 'Content is chunked, vectorized, and indexed for semantic search. Track status in real-time.' },
    { step: '03', title: 'Test with search preview', description: 'Run test queries to see what your AI agents will find. Relevance scores show how well your content matches.' },
    { step: '04', title: 'Agents use it automatically', description: 'Every AI agent in your workspace now has access. Before calls, chats, and emails, agents pull relevant context.' },
  ];

  return (
    <section className="relative isolate overflow-hidden border-t border-border/50 py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-14"
        >
          <SectionHeader
            eyebrow="From upload to expert"
            headlineLines={['Four steps to', 'smarter AI agents.']}
            align="center"
          />
        </motion.div>

        <motion.div
          variants={innerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-4 md:grid-cols-2 lg:gap-5"
        >
          {steps.map((item) => (
            <motion.div
              key={item.step}
              variants={innerItemVariants}
              className="rounded-xl border border-border/60 bg-background p-6"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-signature/25 bg-signature/10 font-mono text-[11px] font-semibold tabular-nums text-signature">
                  {item.step}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[15px] font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-[1.55] text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Main export
// ────────────────────────────────────────────────────────────────────────────

export function KnowledgeBaseView() {
  return (
    <>
      <FeatureHero
        pillIcon={BookOpen}
        pillLabel="Knowledge Base"
        pillSubtitle="RAG-powered context for every agent"
        headlineLines={['Give your AI agents', 'your expertise.']}
        sub="Upload your product docs, FAQs, and web pages. Your AI agents use this knowledge in every conversation, giving answers as accurate as your best team member."
        primaryCta={{ label: 'Upload your knowledge', href: 'https://app.ozzios.com/sign-up', shortcut: 'S' }}
        secondaryCta={{ label: 'See pricing', href: '/pricing' }}
        stats={[
          { value: '3', label: 'Content types' },
          { value: '500K', label: 'Chars per PDF' },
          { value: 'RAG', label: 'Powered search' },
        ]}
      />

      <DeferredSection>
        <PainPointsBlock
          eyebrow="The problem"
          headlineLines={['Your AI is only as smart', 'as what you teach it.']}
          sub="Without a structured knowledge base, your AI agents are guessing. And customers can tell."
          points={painPoints}
        />
      </DeferredSection>

      <DeferredSection>
        <CapabilitiesBlock
          eyebrow="Capabilities"
          headlineLines={['Everything to make', 'your agents experts.']}
          sub="From upload to search-ready in minutes. Your AI agents become domain experts in your business."
          capabilities={capabilities}
        />
      </DeferredSection>

      <DeferredSection>
        <StepFlowSection />
      </DeferredSection>

      <DeferredSection>
        <ChecklistBlock
          eyebrow="How RAG works"
          headlineLines={['Grounded answers,', 'not generic guesses.']}
          features={[
            'Content is chunked and vectorized for semantic search',
            'Relevance scoring ensures only accurate content is used',
            'All AI agents share the same knowledge base',
            'Auto-generated company profile loaded before every call',
            'Indexing status tracked per source with retry',
            'Search preview lets you test queries before launch',
          ]}
        />
      </DeferredSection>

      <DeferredSection>
        <FeatureCTABlock
          eyebrow="Get started"
          headlineLines={['Make your AI agents', 'domain experts.']}
          sub="Upload your business knowledge once and every AI agent in your workspace becomes an expert on your products, services, and policies."
          primaryCta={{ label: 'Get early access', href: 'https://app.ozzios.com/sign-up', shortcut: 'S' }}
          secondaryCta={{ label: 'See pricing', href: '/pricing' }}
          trust={[
            { value: '256-bit', label: 'Encryption' },
            { value: 'GDPR ready', label: 'Compliance' },
            { value: '99.9%', label: 'Uptime SLA' },
          ]}
        />
      </DeferredSection>
    </>
  );
}
