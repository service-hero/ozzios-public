import { AnimatePresence, motion, useInView } from 'framer-motion';
import {
  Activity,
  BarChart3,
  Brain,
  Camera,
  Clock,
  Code,
  Copy,
  ExternalLink,
  FileX,
  LayoutTemplate,
  Link2,
  Lock,
  Save,
  Search,
  Share2,
  Target,
  TrendingUp,
  UserX,
  type LucideIcon,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { DeferredSection } from '@/components/ui/lazy-section';
import {
  CapabilitiesBlock,
  FeatureCTABlock,
  FeatureHero,
  Kbd,
  PainPointsBlock,
  SectionHeader,
  SectionHeading,
  innerContainerVariants,
  innerItemVariants,
  type Capability,
  type PainPoint,
} from '../../components/_landing-primitives';
import { DEMO_CTA_HREF } from '../../components/book-demo';

const painPoints: PainPoint[] = [
  {
    icon: Clock,
    title: 'Reports take hours to build',
    description:
      'Your team spends half a day pulling data, formatting charts, and wrestling with layout tools. By the time the report is done, the data is already stale.',
  },
  {
    icon: FileX,
    title: 'Static PDFs are dead on arrival',
    description:
      'You send a 20-page PDF and the customer skims page one. No interactivity, no drill-down, no way to explore the data that matters.',
  },
  {
    icon: UserX,
    title: 'Customizing per customer requires a developer',
    description:
      'Every customer wants their own branding, their own metrics, their own layout. Without a dev on staff, you are stuck with templates.',
  },
  {
    icon: Lock,
    title: 'No way to share interactive dashboards',
    description:
      'Your internal tools look great, but there is no clean way to give customers a live, branded view of their performance data.',
  },
];

const capabilities: Capability[] = [
  {
    icon: Brain,
    title: 'AI-generated React apps',
    benefit: 'Describe → deploy',
    description:
      'Describe what you need and the AI agent writes a complete React application — charts, tables, layouts, styling — in a secure cloud workspace.',
  },
  {
    icon: Link2,
    title: 'Live shareable URLs',
    benefit: 'Interactive, not static',
    description:
      'Every generated report gets a unique, live URL. Send it to customers and they see an interactive webpage, not a static file.',
  },
  {
    icon: LayoutTemplate,
    title: 'Pre-built template library',
    benefit: 'Start from proven layouts',
    description:
      'Search performance, ad performance, social engagement, traffic analytics, and executive KPI reports — battle-tested.',
  },
  {
    icon: Save,
    title: 'Save custom templates',
    benefit: 'One click to reuse',
    description:
      'Built the perfect report? Save it as a reusable template. Apply it to any customer with one click for consistent output.',
  },
  {
    icon: BarChart3,
    title: 'Interactive charts & dashboards',
    benefit: 'Customers explore their data',
    description:
      'Bar charts, line graphs, pie charts, data tables, and KPI cards — all interactive and responsive.',
  },
  {
    icon: Camera,
    title: 'Screenshot capture',
    benefit: 'Auto-thumbnails for emails',
    description:
      'Automatic thumbnail generation for every report. Use screenshots in emails, proposals, or dashboards as visual previews.',
  },
];

interface TemplateCategory {
  icon: LucideIcon;
  title: string;
  description: string;
}

const templateCategories: TemplateCategory[] = [
  { icon: Search, title: 'Search performance', description: 'Visibility trends, top pages, keyword movement, lead-focused search metrics.' },
  { icon: Target, title: 'Ad performance', description: 'ROAS, CPC, conversion funnels, spend breakdowns across Google and Meta.' },
  { icon: Share2, title: 'Social engagement', description: 'Post performance, follower growth, engagement rates, content calendar.' },
  { icon: Activity, title: 'Traffic analytics', description: 'Sessions, bounce rates, traffic sources, conversion paths with trends.' },
  { icon: TrendingUp, title: 'Executive KPI', description: 'High-level business metrics, revenue impact, strategic goal tracking.' },
];

// ────────────────────────────────────────────────────────────────────────────
// Animated code preview (Linear/Cursor style — simpler than the original 4-phase demo)
// ────────────────────────────────────────────────────────────────────────────

const codeSnippets = [
  {
    filename: 'SearchPerformanceReport.tsx',
    lines: [
      'import { Dashboard, BarChart, ScoreCard } from "./ui";',
      '',
      'export function SearchPerformanceReport({ data }) {',
      '  return (',
      '    <Dashboard title="Search Performance">',
      '      <ScoreCard label="Visibility" value={92} />',
      '      <ScoreCard label="Leads" value={187} />',
      '      <BarChart data={data.topPages} />',
      '    </Dashboard>',
      '  );',
      '}',
    ],
  },
  {
    filename: 'AdPerformanceReport.tsx',
    lines: [
      'import { Funnel, LineChart } from "./ui";',
      '',
      'export function AdPerformanceReport({ data }) {',
      '  const { spend, conversions, roas } = data;',
      '',
      '  return (',
      '    <Dashboard title="Ad Performance">',
      '      <ScoreCard label="ROAS" value={roas} />',
      '      <Funnel data={conversions} />',
      '      <LineChart data={spend} />',
      '    </Dashboard>',
      '  );',
      '}',
    ],
  },
];

function CodingHeroPreview() {
  const [snippetIdx, setSnippetIdx] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  const cancelRef = useRef({ cancelled: false });

  useEffect(() => {
    cancelRef.current.cancelled = true;
    cancelRef.current = { cancelled: false };
    const ctrl = cancelRef.current;
    const snippet = codeSnippets[snippetIdx];

    let i = 0;
    let timer: ReturnType<typeof setTimeout> | null = null;

    const reveal = () => {
      if (ctrl.cancelled) return;
      setVisibleLines(i);
      if (i >= snippet.lines.length) {
        timer = setTimeout(() => {
          if (ctrl.cancelled) return;
          setSnippetIdx((p) => (p + 1) % codeSnippets.length);
        }, 2400);
        return;
      }
      i += 1;
      timer = setTimeout(reveal, 220);
    };

    setVisibleLines(0);
    timer = setTimeout(reveal, 400);
    return () => {
      ctrl.cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, [snippetIdx]);

  const snippet = codeSnippets[snippetIdx];

  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-4 -bottom-10 top-10 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_50%_100%,rgba(196,88,63,0.18),transparent_70%)] blur-3xl"
      />
      <div className="overflow-hidden rounded-xl border border-foreground/15 bg-foreground shadow-[0_30px_80px_-30px_rgba(34,27,22,0.45)]">
        {/* Editor chrome */}
        <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28CA41]" />
          </div>
          <div className="inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/55">
            <Code className="h-3 w-3 text-signature" />
            <AnimatePresence mode="wait">
              <motion.span
                key={snippet.filename}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18 }}
                className="text-white/85"
              >
                {snippet.filename}
              </motion.span>
            </AnimatePresence>
          </div>
          <div className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/55">
            <span className="h-1 w-1 rounded-full bg-mint" />
            Live
          </div>
        </div>

        {/* Code body */}
        <div className="font-mono text-[11px] leading-[1.7] text-white/85">
          <AnimatePresence mode="wait">
            <motion.div
              key={snippet.filename}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="px-4 py-4"
            >
              {snippet.lines.map((line, i) => {
                const isVisible = i < visibleLines;
                const isCurrent = i === visibleLines - 1;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -6 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -6 }}
                    transition={{ duration: 0.15 }}
                    className="flex"
                  >
                    <span className="mr-4 w-6 shrink-0 select-none text-right text-white/25">
                      {i + 1}
                    </span>
                    <span className="flex-1">
                      <SyntaxLine text={line} />
                      {isCurrent ? (
                        <motion.span
                          className="ml-0.5 inline-block h-[12px] w-[2px] -translate-y-px bg-signature align-middle"
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
                        />
                      ) : null}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.04] px-4 py-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
            TypeScript React · Cloud workspace
          </span>
          <div className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/55">
            <Kbd tone="dark" className="h-[16px] min-w-[16px] text-[9px]">
              ⌘
            </Kbd>
            <Kbd tone="dark" className="h-[16px] min-w-[16px] text-[9px]">
              S
            </Kbd>
            deploy
          </div>
        </div>
      </div>
    </div>
  );
}

function SyntaxLine({ text }: { text: string }) {
  if (!text.trim()) return <span>&nbsp;</span>;

  const keywords = ['import', 'export', 'function', 'const', 'return', 'from'];
  let html = text;

  // Highlight strings (yellow-green)
  html = html.replace(/(["'][^"']*["'])/g, '<span class="text-[#c3e88d]">$1</span>');
  // Highlight JSX tags
  html = html.replace(/(&lt;\/?[A-Z][A-Za-z]*)/g, '<span class="text-[#82aaff]">$1</span>');
  html = html.replace(/(<\/?[A-Z][A-Za-z]*)/g, '<span class="text-[#82aaff]">$1</span>');
  // Highlight keywords
  keywords.forEach((kw) => {
    html = html.replace(new RegExp(`\\b(${kw})\\b`, 'g'), '<span class="text-[#c792ea]">$1</span>');
  });

  return <span className="text-white/80" dangerouslySetInnerHTML={{ __html: html }} />;
}

// ────────────────────────────────────────────────────────────────────────────
// Templates section
// ────────────────────────────────────────────────────────────────────────────

function TemplatesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative isolate overflow-hidden border-t border-border/50 py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-14"
        >
          <SectionHeader
            eyebrow="Template library"
            headlineLines={['Start from proven layouts.', 'Customize from there.']}
            sub="Five report categories battle-tested for service businesses. Each fully customizable."
          />
        </motion.div>

        <motion.div
          variants={innerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {templateCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                variants={innerItemVariants}
                className={cn(
                  'group/t relative cursor-pointer rounded-xl border border-border/60 bg-background p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:shadow-[0_14px_30px_-18px_rgba(34,27,22,0.25)]',
                )}
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/60 bg-background text-foreground/70 transition-colors duration-200 group-hover/t:border-foreground/25 group-hover/t:bg-foreground group-hover/t:text-background">
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="mt-4 text-[13.5px] font-semibold text-foreground">{cat.title}</h3>
                <p className="mt-1.5 text-[11.5px] leading-[1.5] text-muted-foreground">
                  {cat.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Share preview section
// ────────────────────────────────────────────────────────────────────────────

function SharePreviewSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative isolate overflow-hidden border-t border-border/50 py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-[960px] px-4 sm:px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <SectionHeader
            eyebrow="Live shareable URLs"
            headlineLines={['One link.', 'A live interactive report.']}
            align="center"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-hidden rounded-xl border border-border/70 bg-background shadow-[0_18px_50px_-26px_rgba(34,27,22,0.30)]"
        >
          <div className="border-b border-border/60 bg-muted/30 px-5 py-3">
            <SectionHeading label="Share URL" />
          </div>
          <div className="flex items-center gap-3 px-5 py-4">
            <span className="inline-flex h-2 w-2 rounded-full bg-mint" />
            <code className="flex-1 truncate font-mono text-[12.5px] text-foreground">
              reports.ozzios.com / r / search-performance-acme
            </code>
            <button
              type="button"
              className="inline-flex h-8 items-center gap-1.5 rounded-md border border-border/60 bg-background px-2.5 text-[11px] font-medium text-foreground/70 transition-colors hover:bg-muted/40"
              aria-label="Copy link"
            >
              <Copy className="h-3 w-3" />
              Copy
            </button>
            <button
              type="button"
              className="inline-flex h-8 items-center gap-1.5 rounded-md border border-border/60 bg-background px-2.5 text-[11px] font-medium text-foreground/70 transition-colors hover:bg-muted/40"
              aria-label="Open report"
            >
              <ExternalLink className="h-3 w-3" />
              Open
            </button>
          </div>
          <div className="border-t border-border/60 bg-muted/20 px-5 py-2.5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/45">
              Customer-branded · always live · no platform login required
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Main export
// ────────────────────────────────────────────────────────────────────────────

export function CodingView() {
  return (
    <>
      <FeatureHero
        pillIcon={Code}
        pillLabel="Reports & Code"
        pillSubtitle="AI builds custom apps in a sandbox"
        headlineLines={['Reports that customers', 'actually open.']}
        sub="An AI agent writes a complete React app for every report you need — branded, interactive, and live at a unique URL. No developers required."
        primaryCta={{ label: 'Setup a demo', href: DEMO_CTA_HREF, shortcut: 'D' }}
        secondaryCta={{ label: 'Talk to sales', href: '/contact' }}
        rightSlot={<CodingHeroPreview />}
      />

      <DeferredSection>
        <PainPointsBlock
          eyebrow="The problem"
          headlineLines={['Static reports', 'are dying.']}
          sub="Customers do not read PDFs. They explore dashboards. The companies that switch win."
          points={painPoints}
        />
      </DeferredSection>

      <DeferredSection>
        <CapabilitiesBlock
          eyebrow="Capabilities"
          headlineLines={['AI-built React apps,', 'on-demand.']}
          sub="A complete reporting platform powered by an AI agent that writes real React code in a secure cloud workspace."
          capabilities={capabilities}
        />
      </DeferredSection>

      <DeferredSection>
        <TemplatesSection />
      </DeferredSection>

      <DeferredSection>
        <SharePreviewSection />
      </DeferredSection>

      <DeferredSection>
        <FeatureCTABlock
          eyebrow="Get started"
          headlineLines={['Stop building reports.', 'Start sending live ones.']}
          sub="Generate your first interactive report in minutes. The AI writes the code, deploys the app, and gives you a shareable URL."
          primaryCta={{ label: 'Setup a demo', href: DEMO_CTA_HREF, shortcut: 'D' }}
          secondaryCta={{ label: 'Talk to sales', href: '/contact' }}
          trust={[
            { value: '256-bit', label: 'Encryption' },
            { value: 'Secure', label: 'Sandbox' },
            { value: '99.9%', label: 'Uptime SLA' },
          ]}
        />
      </DeferredSection>
    </>
  );
}
