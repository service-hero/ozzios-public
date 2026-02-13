'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, useCallback, type ReactElement } from 'react';
import {
  ArrowRight,
  Code,
  Clock,
  FileX,
  UserX,
  Lock,
  Brain,
  Link2,
  LayoutTemplate,
  Save,
  BarChart3,
  Camera,
  Shield,
  Search,
  TrendingUp,
  Share2,
  Activity,
  Target,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  Loader2,
  Globe,
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
    title: 'Reports take hours to build',
    description:
      'Your team spends half a day pulling data, formatting charts, and wrestling with layout tools. By the time the report is done, the data is already stale.',
  },
  {
    icon: FileX,
    title: 'Static PDFs are dead on arrival',
    description:
      'You send a 20-page PDF and the client skims page one. No interactivity, no drill-down, no way to explore the data that matters to them.',
  },
  {
    icon: UserX,
    title: 'Customizing per client requires a developer',
    description:
      'Every client wants their own branding, their own metrics, their own layout. Without a dev on staff, you are stuck with one-size-fits-all templates.',
  },
  {
    icon: Lock,
    title: 'No way to share interactive dashboards',
    description:
      'Your internal tools look great, but there is no clean way to give clients a live, branded view of their performance data without granting platform access.',
  },
];

const capabilities = [
  {
    icon: Brain,
    title: 'AI-Generated React Apps',
    description:
      'Describe what you need and the AI agent writes a complete React application -- charts, tables, layouts, and styling -- in an isolated sandbox.',
  },
  {
    icon: Link2,
    title: 'Live Shareable URLs',
    description:
      'Every generated report gets a unique, live URL. Send it to clients and they see an interactive webpage, not a static file.',
  },
  {
    icon: LayoutTemplate,
    title: 'Pre-built Template Library',
    description:
      'Start from battle-tested templates for SEO audits, ad performance, social engagement, traffic analytics, and executive KPI reports.',
  },
  {
    icon: Save,
    title: 'Save Custom Templates',
    description:
      'Built the perfect report layout? Save it as a reusable template. Apply it to any client with one click, keeping your agency output consistent.',
  },
  {
    icon: BarChart3,
    title: 'Interactive Charts & Dashboards',
    description:
      'Bar charts, line graphs, pie charts, data tables, and KPI cards -- all interactive and responsive. Clients can explore their own data.',
  },
  {
    icon: Camera,
    title: 'Screenshot Capture',
    description:
      'Automatic thumbnail generation for every report. Use screenshots in emails, proposals, or your client portal as visual previews.',
  },
];

const templateCategories = [
  {
    icon: Search,
    title: 'SEO Audit',
    description: 'Technical scores, keyword rankings, backlink analysis, and page speed metrics in a scannable format.',
  },
  {
    icon: Target,
    title: 'Ad Performance',
    description: 'ROAS, CPC, conversion funnels, and spend breakdowns across Google and Meta campaigns.',
  },
  {
    icon: Share2,
    title: 'Social Engagement',
    description: 'Post performance, follower growth, engagement rates, and content calendar analytics.',
  },
  {
    icon: Activity,
    title: 'Traffic Analytics',
    description: 'Sessions, bounce rates, traffic sources, and conversion paths with trend comparisons.',
  },
  {
    icon: TrendingUp,
    title: 'Executive KPI',
    description: 'High-level business metrics, revenue impact, and strategic goal tracking for C-suite clients.',
  },
];

// ── Report template data for the interactive hero animation ──────────────────

interface ReportTemplate {
  id: string;
  icon: typeof Search;
  label: string;
  filename: string;
  accentColor: string;
  accentBg: string;
  codeLines: string[];
  metrics: Array<{ label: string; value: string; color: string }>;
  chartBars: number[];
  chartLabel: string;
  tableHeaders: string[];
  tableRows: Array<string[]>;
  shareUrl: string;
}

const reportTemplates: ReportTemplate[] = [
  {
    id: 'seo',
    icon: Search,
    label: 'SEO Audit',
    filename: 'SEOAuditReport.tsx',
    accentColor: 'text-emerald-500',
    accentBg: 'from-emerald-500 to-emerald-400',
    codeLines: [
      'import { BarChart, Card, Score } from "./ui";',
      '',
      'export function SEOAuditReport({ data }) {',
      '  const { scores, keywords, issues } = data;',
      '',
      '  return (',
      '    <Dashboard title="SEO Audit">',
      '      <MetricsRow>',
      '        <ScoreCard label="Health" value={scores.health} />',
      '        <ScoreCard label="Speed" value={scores.speed} />',
      '        <ScoreCard label="SEO" value={scores.seo} />',
      '        <ScoreCard label="A11y" value={scores.a11y} />',
      '      </MetricsRow>',
      '      <BarChart data={keywords} />',
      '      <IssuesTable data={issues} />',
      '    </Dashboard>',
      '  );',
      '}',
    ],
    metrics: [
      { label: 'Health', value: '92', color: 'text-emerald-500' },
      { label: 'Speed', value: '87', color: 'text-blue-500' },
      { label: 'SEO', value: '95', color: 'text-emerald-500' },
      { label: 'A11y', value: '88', color: 'text-violet-500' },
    ],
    chartBars: [85, 72, 90, 65, 78, 92, 70, 88, 95, 60, 82, 76],
    chartLabel: 'Keyword Rankings',
    tableHeaders: ['Issue', 'Impact', 'Status'],
    tableRows: [
      ['Missing meta desc.', 'High', 'Open'],
      ['Slow LCP (3.2s)', 'Critical', 'Open'],
      ['Broken backlinks (3)', 'Medium', 'Fixed'],
    ],
    shareUrl: 'reports.ozzios.com/r/seo-audit-acme',
  },
  {
    id: 'ads',
    icon: Target,
    label: 'Ad Performance',
    filename: 'AdPerformanceReport.tsx',
    accentColor: 'text-blue-500',
    accentBg: 'from-blue-500 to-blue-400',
    codeLines: [
      'import { LineChart, Card, Funnel } from "./ui";',
      '',
      'export function AdPerformanceReport({ data }) {',
      '  const { spend, conversions, roas } = data;',
      '',
      '  return (',
      '    <Dashboard title="Ad Performance">',
      '      <MetricsRow>',
      '        <KPICard label="Spend" value={spend.total} />',
      '        <KPICard label="ROAS" value={roas.avg} />',
      '        <KPICard label="CPC" value={spend.cpc} />',
      '        <KPICard label="Conv." value={conversions} />',
      '      </MetricsRow>',
      '      <LineChart data={spend.daily} />',
      '      <ConversionFunnel data={roas} />',
      '    </Dashboard>',
      '  );',
      '}',
    ],
    metrics: [
      { label: 'Spend', value: '$12.4K', color: 'text-blue-500' },
      { label: 'ROAS', value: '4.8x', color: 'text-emerald-500' },
      { label: 'CPC', value: '$0.42', color: 'text-amber-500' },
      { label: 'Conv.', value: '2,847', color: 'text-violet-500' },
    ],
    chartBars: [45, 62, 58, 75, 82, 68, 90, 85, 72, 95, 88, 78],
    chartLabel: 'Daily Spend',
    tableHeaders: ['Campaign', 'Spend', 'ROAS'],
    tableRows: [
      ['Facebook Retargeting', '$4.2K', '6.1x'],
      ['Google Search Brand', '$3.8K', '5.4x'],
      ['Instagram Stories', '$2.1K', '3.2x'],
    ],
    shareUrl: 'reports.ozzios.com/r/ads-perf-acme',
  },
  {
    id: 'social',
    icon: Share2,
    label: 'Social Engagement',
    filename: 'SocialEngagementReport.tsx',
    accentColor: 'text-pink-500',
    accentBg: 'from-pink-500 to-pink-400',
    codeLines: [
      'import { AreaChart, Card, Feed } from "./ui";',
      '',
      'export function SocialReport({ data }) {',
      '  const { followers, engagement, posts } = data;',
      '',
      '  return (',
      '    <Dashboard title="Social Engagement">',
      '      <MetricsRow>',
      '        <KPICard label="Followers" value={followers} />',
      '        <KPICard label="Eng. Rate" value={engagement} />',
      '        <KPICard label="Reach" value={data.reach} />',
      '        <KPICard label="Posts" value={posts.count} />',
      '      </MetricsRow>',
      '      <AreaChart data={followers.growth} />',
      '      <PostFeed data={posts.top} />',
      '    </Dashboard>',
      '  );',
      '}',
    ],
    metrics: [
      { label: 'Followers', value: '24.8K', color: 'text-pink-500' },
      { label: 'Eng. Rate', value: '4.2%', color: 'text-emerald-500' },
      { label: 'Reach', value: '142K', color: 'text-blue-500' },
      { label: 'Posts', value: '47', color: 'text-amber-500' },
    ],
    chartBars: [40, 55, 48, 65, 72, 60, 85, 78, 68, 92, 80, 88],
    chartLabel: 'Follower Growth',
    tableHeaders: ['Post', 'Reach', 'Engagement'],
    tableRows: [
      ['Product launch reel', '18.2K', '8.4%'],
      ['Behind the scenes', '12.6K', '6.1%'],
      ['Client testimonial', '9.8K', '5.7%'],
    ],
    shareUrl: 'reports.ozzios.com/r/social-acme',
  },
  {
    id: 'kpi',
    icon: TrendingUp,
    label: 'Executive KPI',
    filename: 'ExecutiveKPIReport.tsx',
    accentColor: 'text-violet-500',
    accentBg: 'from-violet-500 to-violet-400',
    codeLines: [
      'import { ComboChart, Card, Gauge } from "./ui";',
      '',
      'export function ExecutiveKPI({ data }) {',
      '  const { revenue, goals, channels } = data;',
      '',
      '  return (',
      '    <Dashboard title="Executive KPI">',
      '      <MetricsRow>',
      '        <KPICard label="Revenue" value={revenue} />',
      '        <KPICard label="MRR" value={data.mrr} />',
      '        <KPICard label="CAC" value={data.cac} />',
      '        <KPICard label="LTV" value={data.ltv} />',
      '      </MetricsRow>',
      '      <ComboChart data={revenue.monthly} />',
      '      <GoalTracker data={goals} />',
      '    </Dashboard>',
      '  );',
      '}',
    ],
    metrics: [
      { label: 'Revenue', value: '$248K', color: 'text-violet-500' },
      { label: 'MRR', value: '$42K', color: 'text-emerald-500' },
      { label: 'CAC', value: '$18', color: 'text-blue-500' },
      { label: 'LTV', value: '$840', color: 'text-amber-500' },
    ],
    chartBars: [55, 68, 72, 80, 75, 88, 82, 90, 85, 95, 92, 98],
    chartLabel: 'Monthly Revenue',
    tableHeaders: ['Goal', 'Progress', 'Status'],
    tableRows: [
      ['Q1 Revenue Target', '94%', 'On Track'],
      ['New Clients (15)', '12/15', 'At Risk'],
      ['Retention Rate 95%', '97.2%', 'Exceeded'],
    ],
    shareUrl: 'reports.ozzios.com/r/kpi-exec-acme',
  },
];

// ── Animation phases ─────────────────────────────────────────────────────────

type AnimationPhase = 'coding' | 'building' | 'preview' | 'share';

const PHASE_DURATIONS = {
  coding: 3200,
  building: 1800,
  preview: 3000,
  share: 2500,
};

// ── Animated code editor component ───────────────────────────────────────────

function AnimatedCodeEditor({
  template,
  phase,
  visibleLines,
}: {
  template: ReportTemplate;
  phase: AnimationPhase;
  visibleLines: number;
}) {
  return (
    <div className="flex flex-col h-full bg-[#1e1e2e] rounded-l-none overflow-hidden">
      {/* Editor tabs */}
      <div className="flex items-center gap-0 border-b border-white/10 bg-[#181825]">
        <div className="flex items-center gap-2 px-3 py-2 bg-[#1e1e2e] border-r border-white/10 border-b-2 border-b-signature">
          <Code className="w-3 h-3 text-signature" />
          <span className="text-[10px] text-gray-300 font-mono">{template.filename}</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 text-gray-500">
          <span className="text-[10px] font-mono">ui.tsx</span>
        </div>
      </div>

      {/* Code content */}
      <div className="flex-1 overflow-hidden p-3 font-mono text-[10px] sm:text-[11px] leading-[1.7]">
        <AnimatePresence mode="wait">
          <motion.div
            key={template.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {template.codeLines.map((line, i) => {
              const isVisible = i < visibleLines;
              const isCurrentLine = i === visibleLines - 1 && phase === 'coding';

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={
                    isVisible
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -8 }
                  }
                  transition={{ duration: 0.15, delay: 0 }}
                  className="flex"
                >
                  <span className="w-6 text-right mr-4 text-gray-600 select-none shrink-0">
                    {i + 1}
                  </span>
                  <span className="flex-1 min-w-0">
                    <CodeLine text={line} />
                    {isCurrentLine && (
                      <motion.span
                        className="inline-block w-[2px] h-[14px] bg-signature ml-0.5 align-middle"
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
                      />
                    )}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Terminal status bar */}
      <div className="flex items-center justify-between px-3 py-1.5 border-t border-white/10 bg-[#181825]">
        <div className="flex items-center gap-2">
          {phase === 'coding' && (
            <span className="flex items-center gap-1.5 text-[9px] text-gray-400">
              <Loader2 className="w-3 h-3 animate-spin text-signature" />
              Agent writing code...
            </span>
          )}
          {phase === 'building' && (
            <span className="flex items-center gap-1.5 text-[9px] text-amber-400">
              <Loader2 className="w-3 h-3 animate-spin" />
              Building in E2B sandbox...
            </span>
          )}
          {(phase === 'preview' || phase === 'share') && (
            <span className="flex items-center gap-1.5 text-[9px] text-emerald-400">
              <CheckCircle2 className="w-3 h-3" />
              Build complete
            </span>
          )}
        </div>
        <span className="text-[9px] text-gray-500 font-mono">TypeScript React</span>
      </div>
    </div>
  );
}

// ── Syntax highlighting helper ───────────────────────────────────────────────

function CodeLine({ text }: { text: string }) {
  if (!text.trim()) return <span>&nbsp;</span>;

  // Simple keyword-based syntax highlighting
  const keywords = ['import', 'export', 'function', 'const', 'return', 'from'];
  const jsxTags = /(<\/?[A-Z][A-Za-z]*)/g;
  const strings = /(["'][^"']*["'])/g;

  const segments: Array<{ text: string; className: string; index: number }> = [];

  // Find keywords
  keywords.forEach((kw) => {
    const regex = new RegExp(`\\b(${kw})\\b`, 'g');
    let match;
    while ((match = regex.exec(text)) !== null) {
      segments.push({
        text: match[1],
        className: 'text-purple-400',
        index: match.index,
      });
    }
  });

  // Find JSX tags
  let match;
  while ((match = jsxTags.exec(text)) !== null) {
    segments.push({
      text: match[1],
      className: 'text-blue-400',
      index: match.index,
    });
  }

  // Find strings
  while ((match = strings.exec(text)) !== null) {
    segments.push({
      text: match[1],
      className: 'text-emerald-400',
      index: match.index,
    });
  }

  // If no segments found, return plain text
  if (segments.length === 0) {
    return <span className="text-gray-300">{text}</span>;
  }

  // Sort by index and render
  segments.sort((a, b) => a.index - b.index);

  const parts: ReactElement[] = [];
  let lastEnd = 0;

  segments.forEach((seg, i) => {
    if (seg.index > lastEnd) {
      parts.push(
        <span key={`t-${i}`} className="text-gray-300">
          {text.slice(lastEnd, seg.index)}
        </span>
      );
    }
    if (seg.index >= lastEnd) {
      parts.push(
        <span key={`s-${i}`} className={seg.className}>
          {seg.text}
        </span>
      );
      lastEnd = seg.index + seg.text.length;
    }
  });

  if (lastEnd < text.length) {
    parts.push(
      <span key="end" className="text-gray-300">
        {text.slice(lastEnd)}
      </span>
    );
  }

  return <>{parts}</>;
}

// ── Live preview panel ───────────────────────────────────────────────────────

function LivePreviewPanel({
  template,
  phase,
}: {
  template: ReportTemplate;
  phase: AnimationPhase;
}) {
  const showMetrics = phase === 'preview' || phase === 'share';
  const showChart = phase === 'preview' || phase === 'share';
  const showTable = phase === 'preview' || phase === 'share';

  return (
    <div className="flex flex-col h-full bg-background overflow-hidden">
      {/* Preview header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-border bg-muted/50">
        <div className="flex items-center gap-2">
          <Globe className="w-3 h-3 text-muted-foreground" />
          <span className="text-[10px] text-muted-foreground font-mono">Preview</span>
        </div>
        {(phase === 'preview' || phase === 'share') && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-1.5 px-1.5 py-0.5 rounded bg-green-100 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20"
          >
            <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[7px] font-medium text-green-600 dark:text-green-400">LIVE</span>
          </motion.div>
        )}
      </div>

      {/* Preview content */}
      <div className="flex-1 overflow-hidden p-3">
        {phase === 'coding' && (
          <div className="flex flex-col items-center justify-center h-full gap-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              <Loader2 className="w-6 h-6 text-muted-foreground" />
            </motion.div>
            <span className="text-[11px] text-muted-foreground">Waiting for code...</span>
          </div>
        )}

        {phase === 'building' && (
          <div className="flex flex-col items-center justify-center h-full gap-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            >
              <Loader2 className="w-8 h-8 text-signature" />
            </motion.div>
            <div className="text-center">
              <p className="text-[12px] text-foreground font-medium mb-1">Building app...</p>
              <p className="text-[10px] text-muted-foreground">Compiling React in E2B sandbox</p>
            </div>
            {/* Build progress */}
            <div className="w-48">
              <motion.div
                className="h-1 rounded-full bg-muted overflow-hidden"
              >
                <motion.div
                  className="h-full rounded-full bg-signature"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.6, ease: 'easeInOut' }}
                />
              </motion.div>
            </div>
          </div>
        )}

        {(phase === 'preview' || phase === 'share') && (
          <AnimatePresence mode="wait">
            <motion.div
              key={`preview-${template.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="space-y-3"
            >
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className={`w-5 h-5 rounded bg-gradient-to-br ${template.accentBg} flex items-center justify-center`}>
                    <template.icon className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-[11px] font-semibold text-foreground">{template.label} Report</span>
                </div>
                <span className="text-[8px] text-muted-foreground">Live Preview</span>
              </div>

              {/* Metrics cards */}
              {showMetrics && (
                <div className="grid grid-cols-4 gap-1.5">
                  {template.metrics.map((metric, i) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="p-1.5 rounded-lg bg-muted/50 border border-border text-center"
                    >
                      <div className="text-[7px] text-muted-foreground uppercase">{metric.label}</div>
                      <div className={`text-[12px] font-semibold ${metric.color}`}>{metric.value}</div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Chart */}
              {showChart && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="p-2 rounded-lg bg-muted/50 border border-border"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[8px] text-muted-foreground">{template.chartLabel}</span>
                    <span className="text-[7px] text-muted-foreground">Last 30 days</span>
                  </div>
                  <div className="flex items-end gap-[3px] h-12">
                    {template.chartBars.map((height, idx) => (
                      <motion.div
                        key={idx}
                        className={`flex-1 rounded-sm bg-gradient-to-t ${template.accentBg} opacity-80`}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{
                          duration: 0.4,
                          delay: 0.5 + idx * 0.05,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Table */}
              {showTable && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  className="rounded-lg bg-muted/50 border border-border overflow-hidden"
                >
                  <div className="grid grid-cols-3 gap-2 px-2 py-1 bg-muted/80 border-b border-border">
                    {template.tableHeaders.map((h) => (
                      <span key={h} className="text-[7px] text-muted-foreground uppercase">{h}</span>
                    ))}
                  </div>
                  {template.tableRows.map((row, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.9 + i * 0.1 }}
                      className="grid grid-cols-3 gap-2 px-2 py-1 border-b border-border/50 last:border-0"
                    >
                      <span className="text-[8px] text-foreground truncate">{row[0]}</span>
                      <span className="text-[8px] text-muted-foreground">{row[1]}</span>
                      <span className={`text-[8px] ${
                        row[2].includes('+') || row[2] === 'On Track' || row[2] === 'Exceeded' || row[2] === 'Fixed'
                          ? 'text-emerald-500'
                          : row[2] === 'At Risk' || row[2] === 'Open' || row[2] === 'Critical'
                            ? 'text-amber-500'
                            : 'text-muted-foreground'
                      }`}>{row[2]}</span>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* E2B badge */}
              <div className="flex justify-end">
                <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-muted/50 border border-border">
                  <span className="text-[7px] text-muted-foreground">Powered by</span>
                  <span className="text-[7px] text-muted-foreground font-medium">e2b.dev</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}

// ── Share URL bar ────────────────────────────────────────────────────────────

function ShareURLBar({
  url,
  show,
}: {
  url: string;
  show: boolean;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!show) setCopied(false);
  }, [show]);

  const handleCopy = useCallback(() => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 10, height: 0 }}
          animate={{ opacity: 1, y: 0, height: 'auto' }}
          exit={{ opacity: 0, y: 10, height: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="border-t border-border bg-muted/50"
        >
          <div className="flex items-center gap-2 px-3 py-2.5">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-[10px] font-medium text-foreground">Report ready!</span>
            </div>
            <div className="flex-1 flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-background border border-border">
              <Link2 className="w-3 h-3 text-muted-foreground shrink-0" />
              <span className="text-[10px] text-muted-foreground font-mono truncate">{url}</span>
              <button
                onClick={handleCopy}
                className="ml-auto shrink-0 flex items-center gap-1 px-2 py-0.5 rounded bg-signature/10 hover:bg-signature/20 transition-colors"
              >
                {copied ? (
                  <Check className="w-3 h-3 text-signature" />
                ) : (
                  <Copy className="w-3 h-3 text-signature" />
                )}
                <span className="text-[9px] text-signature font-medium">
                  {copied ? 'Copied!' : 'Copy'}
                </span>
              </button>
            </div>
            <button className="shrink-0 flex items-center gap-1 px-2 py-1.5 rounded-md bg-signature text-white hover:bg-signature/90 transition-colors">
              <ExternalLink className="w-3 h-3" />
              <span className="text-[9px] font-medium">Open</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ── Main Hero Section ────────────────────────────────────────────────────────

function HeroSection() {
  const [activeTemplateIndex, setActiveTemplateIndex] = useState(0);
  const [phase, setPhase] = useState<AnimationPhase>('coding');
  const [visibleLines, setVisibleLines] = useState(0);
  const animationRef = useRef<{ cancelled: boolean }>({ cancelled: false });

  const template = reportTemplates[activeTemplateIndex];

  // Run the animation cycle
  useEffect(() => {
    const controller = { cancelled: false };
    animationRef.current = controller;

    const runCycle = async () => {
      // Reset state
      setVisibleLines(0);
      setPhase('coding');

      // Phase 1: Coding - type out lines
      const totalLines = reportTemplates[activeTemplateIndex].codeLines.length;
      const lineDelay = PHASE_DURATIONS.coding / totalLines;

      for (let i = 1; i <= totalLines; i++) {
        if (controller.cancelled) return;
        await new Promise((resolve) => setTimeout(resolve, lineDelay));
        if (controller.cancelled) return;
        setVisibleLines(i);
      }

      // Phase 2: Building
      if (controller.cancelled) return;
      await new Promise((resolve) => setTimeout(resolve, 300));
      if (controller.cancelled) return;
      setPhase('building');
      await new Promise((resolve) => setTimeout(resolve, PHASE_DURATIONS.building));

      // Phase 3: Preview
      if (controller.cancelled) return;
      setPhase('preview');
      await new Promise((resolve) => setTimeout(resolve, PHASE_DURATIONS.preview));

      // Phase 4: Share URL
      if (controller.cancelled) return;
      setPhase('share');
      await new Promise((resolve) => setTimeout(resolve, PHASE_DURATIONS.share));

      // Move to next template
      if (!controller.cancelled) {
        setActiveTemplateIndex((prev) => (prev + 1) % reportTemplates.length);
      }
    };

    const timer = setTimeout(runCycle, 600);

    return () => {
      controller.cancelled = true;
      clearTimeout(timer);
    };
  }, [activeTemplateIndex]);

  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          {/* Headline area - same structure as before */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="tag-neo rounded-full bg-signature/10 border-signature mb-6">
              <Code className="w-4 h-4 text-signature" />
              <span className="text-[11px] font-semibold text-signature uppercase tracking-wider">
                Coding
              </span>
            </div>
            <h1 className="text-display font-display text-foreground mb-6">
              AI agents that build{' '}
              <span className="text-signature">live reports</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Your AI agents generate interactive React dashboards and reports in isolated
              sandboxes. Get a shareable URL and send it straight to your client -- no
              developers, no static PDFs.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Code className="w-4 h-4 text-signature" />
                Live Preview
              </span>
              <span className="flex items-center gap-2">
                <Link2 className="w-4 h-4 text-signature" />
                Shareable Links
              </span>
              <span className="flex items-center gap-2">
                <LayoutTemplate className="w-4 h-4 text-signature" />
                Pre-built Templates
              </span>
            </div>
          </motion.div>

          {/* Interactive animation - browser window */}
          <motion.div variants={itemVariants} className="w-full max-w-5xl mx-auto">
            <div className="relative">
              {/* Browser chrome */}
              <div className="relative rounded-2xl border border-border bg-background overflow-hidden shadow-2xl shadow-black/10">
                {/* Window controls */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-background border border-border">
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                      <span className="text-[11px] text-muted-foreground font-mono">app.ozzios.com/sandbox</span>
                    </div>
                  </div>
                  <div className="w-16" />
                </div>

                {/* Template selector tabs */}
                <div className="flex items-center gap-0 border-b border-border bg-muted/30 overflow-x-auto scrollbar-hidden">
                  {reportTemplates.map((t, i) => {
                    const Icon = t.icon;
                    const isActive = i === activeTemplateIndex;
                    return (
                      <button
                        key={t.id}
                        onClick={() => {
                          if (i !== activeTemplateIndex) {
                            animationRef.current.cancelled = true;
                            setActiveTemplateIndex(i);
                          }
                        }}
                        className={`flex items-center gap-1.5 px-3 py-2 text-[10px] font-medium transition-all duration-200 border-b-2 shrink-0 ${
                          isActive
                            ? 'border-signature text-foreground bg-background'
                            : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                      >
                        <Icon className={`w-3 h-3 ${isActive ? 'text-signature' : ''}`} />
                        <span className="hidden sm:inline">{t.label}</span>
                      </button>
                    );
                  })}

                  {/* Rotating indicator */}
                  <div className="ml-auto flex items-center gap-1.5 px-3 shrink-0">
                    <motion.div
                      className="w-1 h-1 rounded-full bg-signature"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-[9px] text-muted-foreground">Auto</span>
                  </div>
                </div>

                {/* Main content: Code editor + Live preview split */}
                <div className="relative flex flex-col md:flex-row" style={{ minHeight: '380px' }}>
                  {/* Left: Code editor (hidden on mobile, show simplified) */}
                  <div className="hidden md:block md:w-1/2 border-r border-border">
                    <AnimatedCodeEditor
                      template={template}
                      phase={phase}
                      visibleLines={visibleLines}
                    />
                  </div>

                  {/* Mobile: simplified code view */}
                  <div className="md:hidden border-b border-border bg-[#1e1e2e]">
                    <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10">
                      <Code className="w-3 h-3 text-signature" />
                      <span className="text-[10px] text-gray-300 font-mono">{template.filename}</span>
                      <div className="ml-auto">
                        {phase === 'coding' && (
                          <span className="flex items-center gap-1 text-[9px] text-gray-400">
                            <Loader2 className="w-3 h-3 animate-spin text-signature" />
                            Writing...
                          </span>
                        )}
                        {phase === 'building' && (
                          <span className="flex items-center gap-1 text-[9px] text-amber-400">
                            <Loader2 className="w-3 h-3 animate-spin" />
                            Building...
                          </span>
                        )}
                        {(phase === 'preview' || phase === 'share') && (
                          <span className="flex items-center gap-1 text-[9px] text-emerald-400">
                            <CheckCircle2 className="w-3 h-3" />
                            Done
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="p-3 font-mono text-[9px] leading-[1.6] max-h-[100px] overflow-hidden">
                      {template.codeLines.slice(0, Math.min(visibleLines, 6)).map((line, i) => (
                        <div key={i} className="flex">
                          <span className="w-5 text-right mr-3 text-gray-600 select-none">{i + 1}</span>
                          <CodeLine text={line} />
                        </div>
                      ))}
                      {visibleLines > 6 && (
                        <div className="text-gray-500 pl-8">... {template.codeLines.length - 6} more lines</div>
                      )}
                    </div>
                  </div>

                  {/* Right: Live preview */}
                  <div className="flex-1 md:w-1/2">
                    <LivePreviewPanel template={template} phase={phase} />
                  </div>
                </div>

                {/* Share URL bar */}
                <ShareURLBar url={template.shareUrl} show={phase === 'share'} />
              </div>
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
            Client reporting is broken
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Agencies waste hours building reports that clients barely look at. There has to
            be a better way.
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
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-5 group-hover:bg-destructive/20 transition-colors">
                  <Icon className="w-6 h-6 text-destructive" />
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

  const steps = [
    {
      step: '01',
      title: 'Agent generates code',
      description:
        'Tell your AI agent what you need -- an SEO audit report, an ad performance dashboard, a KPI summary. It writes a complete React application with real data visualizations.',
    },
    {
      step: '02',
      title: 'Live preview in browser',
      description:
        'The app runs instantly in an isolated E2B sandbox. See exactly what your client will see -- interactive charts, responsive layout, live data -- before sharing.',
    },
    {
      step: '03',
      title: 'Share link with client',
      description:
        'Copy the shareable URL and send it. Your client opens a polished, interactive report in their browser. No downloads, no logins, no friction.',
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
          <span className="tag-neo text-signature mb-6 inline-block">How It Works</span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-tight mb-4">
            From prompt to shareable report in minutes
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-signature/10 flex items-center justify-center mx-auto mb-6">
                <span className="font-display text-signature text-xl">{item.step}</span>
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
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
            Everything your reports need, nothing they don't
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            AI-generated, fully interactive, and shareable in seconds.
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

function TemplatesSection() {
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
          <span className="tag-neo text-signature mb-6 inline-block">Templates</span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-tight mb-4">
            Start with a template, make it yours
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Pre-built report templates for the most common agency deliverables. Customize
            everything or build from scratch.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[900px] mx-auto"
        >
          {templateCategories.map((template) => {
            const Icon = template.icon;
            return (
              <motion.div
                key={template.title}
                variants={itemVariants}
                className="bg-card border-2 border-border rounded-lg p-6 hover:border-signature/30 transition-colors duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-signature/10 flex items-center justify-center mb-4 group-hover:bg-signature/20 transition-colors">
                  <Icon className="w-5 h-5 text-signature" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-2">{template.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {template.description}
                </p>
              </motion.div>
            );
          })}
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
            Reports that impress,
            <br />
            <span className="text-signature">in minutes</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
            Stop sending static PDFs. Let AI agents build interactive, shareable reports
            that make your clients say "how did you do that?"
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

export function CodingView() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PainPointsSection />
      <SolutionSection />
      <CapabilitiesSection />
      <TemplatesSection />
      <CTASection />
    </div>
  );
}
