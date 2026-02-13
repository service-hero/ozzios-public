'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Presentation,
  Clock,
  AlertTriangle,
  Palette,
  BarChart3,
  FileDown,
  Brain,
  Layers,
  SlidersHorizontal,
  Zap,
  Shield,
  Sparkles,
  Image,
  Play,
  ChevronLeft,
  ChevronRight,
  Download,
  Type,
  LayoutGrid,
  Quote,
  Minus,
  TrendingUp,
  GitCompare,
  Loader2,
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

// ---------------------------------------------------------------------------
// Presentation Hero Animation Data
// ---------------------------------------------------------------------------

interface SlideTheme {
  name: string;
  primary: string;
  primaryBg: string;
  secondary: string;
  secondaryBg: string;
  accent: string;
  accentBg: string;
  chartColors: string[];
}

const themes: SlideTheme[] = [
  {
    name: 'Corporate Blue',
    primary: 'text-blue-600',
    primaryBg: 'bg-blue-600',
    secondary: 'text-blue-400',
    secondaryBg: 'bg-blue-400',
    accent: 'text-blue-500',
    accentBg: 'bg-blue-500',
    chartColors: ['bg-blue-500', 'bg-blue-400', 'bg-blue-300', 'bg-sky-400', 'bg-sky-300'],
  },
  {
    name: 'Sunset Coral',
    primary: 'text-orange-500',
    primaryBg: 'bg-orange-500',
    secondary: 'text-amber-400',
    secondaryBg: 'bg-amber-400',
    accent: 'text-rose-500',
    accentBg: 'bg-rose-500',
    chartColors: ['bg-orange-500', 'bg-amber-400', 'bg-rose-400', 'bg-red-400', 'bg-yellow-400'],
  },
  {
    name: 'Forest Green',
    primary: 'text-emerald-600',
    primaryBg: 'bg-emerald-600',
    secondary: 'text-teal-400',
    secondaryBg: 'bg-teal-400',
    accent: 'text-emerald-500',
    accentBg: 'bg-emerald-500',
    chartColors: ['bg-emerald-500', 'bg-teal-400', 'bg-green-400', 'bg-lime-400', 'bg-cyan-400'],
  },
  {
    name: 'Royal Purple',
    primary: 'text-violet-600',
    primaryBg: 'bg-violet-600',
    secondary: 'text-purple-400',
    secondaryBg: 'bg-purple-400',
    accent: 'text-violet-500',
    accentBg: 'bg-violet-500',
    chartColors: ['bg-violet-500', 'bg-purple-400', 'bg-fuchsia-400', 'bg-pink-400', 'bg-indigo-400'],
  },
];

interface DemoSlide {
  id: number;
  type: 'title' | 'chart' | 'content' | 'comparison' | 'quote';
  label: string;
}

const demoSlides: DemoSlide[] = [
  { id: 0, type: 'title', label: 'Title' },
  { id: 1, type: 'chart', label: 'Chart' },
  { id: 2, type: 'content', label: 'Content' },
  { id: 3, type: 'comparison', label: 'Compare' },
  { id: 4, type: 'quote', label: 'Quote' },
];

const chartData = [
  { label: 'Q1', value: 45 },
  { label: 'Q2', value: 72 },
  { label: 'Q3', value: 58 },
  { label: 'Q4', value: 89 },
  { label: 'Q5', value: 65 },
];

const bulletPoints = [
  'Conversion rates increased 34% year over year',
  'Customer acquisition cost reduced by $12.50',
  'Average deal size grew to $48,000',
  'Net promoter score reached all-time high of 72',
];

const comparisonData = {
  left: { title: 'Before', items: ['Manual reporting', '6h per deck', 'Inconsistent brand', 'Static charts'] },
  right: { title: 'After', items: ['AI-generated', '5 min per deck', 'On-brand always', 'Interactive data'] },
};

// ---------------------------------------------------------------------------
// Slide Content Renderers
// ---------------------------------------------------------------------------

function TitleSlideContent({ theme }: { theme: SlideTheme }) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 sm:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${theme.primaryBg} flex items-center justify-center mb-3 sm:mb-4`}
      >
        <span className="text-white font-bold text-sm sm:text-lg">A</span>
      </motion.div>
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="text-base sm:text-xl md:text-2xl font-bold text-foreground mb-1 sm:mb-2"
      >
        Q4 Growth Strategy
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={`text-xs sm:text-sm ${theme.primary} font-medium`}
      >
        Acme Agency -- Annual Review 2025
      </motion.p>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        className={`mt-3 sm:mt-5 h-0.5 w-16 sm:w-24 ${theme.primaryBg} rounded-full`}
      />
    </div>
  );
}

function ChartSlideContent({ theme }: { theme: SlideTheme }) {
  return (
    <div className="flex flex-col h-full px-3 sm:px-6 py-3 sm:py-4">
      <motion.h4
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="text-xs sm:text-sm font-semibold text-foreground mb-1"
      >
        Revenue by Quarter
      </motion.h4>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.25 }}
        className="text-[10px] sm:text-xs text-muted-foreground mb-2 sm:mb-3"
      >
        Year-over-year comparison ($M)
      </motion.p>
      <div className="flex-1 flex items-end gap-1.5 sm:gap-3 pb-4 sm:pb-6 relative">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[8px] sm:text-[9px] text-muted-foreground">
          <span>100</span>
          <span>50</span>
          <span>0</span>
        </div>
        {/* Bars */}
        <div className="flex-1 flex items-end gap-1.5 sm:gap-3 ml-4 sm:ml-6">
          {chartData.map((bar, i) => (
            <div key={bar.label} className="flex-1 flex flex-col items-center gap-1">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${bar.value}%` }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                className={`w-full rounded-t-sm sm:rounded-t ${theme.chartColors[i]} relative group`}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + i * 0.12 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] sm:text-[9px] font-medium text-foreground"
                >
                  {bar.value}
                </motion.span>
              </motion.div>
              <span className="text-[8px] sm:text-[9px] text-muted-foreground">{bar.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContentSlideContent({ theme }: { theme: SlideTheme }) {
  return (
    <div className="flex flex-col h-full px-3 sm:px-6 py-3 sm:py-4">
      <motion.h4
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="text-xs sm:text-sm font-semibold text-foreground mb-2 sm:mb-3"
      >
        Key Performance Highlights
      </motion.h4>
      <div className="space-y-2 sm:space-y-2.5">
        {bulletPoints.map((point, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.25 + i * 0.15 }}
            className="flex items-start gap-2"
          >
            <div className={`w-1.5 h-1.5 rounded-full ${theme.primaryBg} mt-1 sm:mt-1.5 shrink-0`} />
            <span className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">
              {point}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ComparisonSlideContent({ theme }: { theme: SlideTheme }) {
  return (
    <div className="flex flex-col h-full px-3 sm:px-6 py-3 sm:py-4">
      <motion.h4
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="text-xs sm:text-sm font-semibold text-foreground mb-2 sm:mb-3"
      >
        Impact Analysis
      </motion.h4>
      <div className="flex-1 grid grid-cols-2 gap-2 sm:gap-3">
        {(['left', 'right'] as const).map((side, sIdx) => {
          const data = comparisonData[side];
          return (
            <motion.div
              key={side}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 + sIdx * 0.15 }}
              className={`rounded-lg border p-2 sm:p-3 ${side === 'right' ? `border-${theme.primaryBg.replace('bg-', '')} bg-${theme.primaryBg.replace('bg-', '')}/5` : 'border-border bg-muted/30'}`}
              style={side === 'right' ? { borderColor: 'currentColor' } : undefined}
            >
              <span className={`text-[10px] sm:text-xs font-semibold ${side === 'right' ? theme.primary : 'text-muted-foreground'} block mb-1.5 sm:mb-2`}>
                {data.title}
              </span>
              <div className="space-y-1 sm:space-y-1.5">
                {data.items.map((item, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.45 + sIdx * 0.15 + j * 0.1 }}
                    className="flex items-center gap-1.5"
                  >
                    {side === 'right' ? (
                      <CheckCircle2 className={`w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0 ${theme.primary}`} />
                    ) : (
                      <Minus className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-muted-foreground/50 shrink-0" />
                    )}
                    <span className={`text-[9px] sm:text-[10px] ${side === 'right' ? 'text-foreground' : 'text-muted-foreground line-through'}`}>
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function QuoteSlideContent({ theme }: { theme: SlideTheme }) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 sm:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Quote className={`w-6 h-6 sm:w-8 sm:h-8 ${theme.primary} mb-2 sm:mb-3 mx-auto opacity-40`} />
      </motion.div>
      <motion.blockquote
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="text-xs sm:text-sm md:text-base text-foreground font-medium italic leading-relaxed mb-2 sm:mb-3 max-w-[90%]"
      >
        "This platform cut our presentation time from 6 hours to 15 minutes. Our clients notice the quality difference."
      </motion.blockquote>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.55 }}
        className="flex flex-col items-center gap-0.5"
      >
        <span className={`text-[10px] sm:text-xs font-semibold ${theme.primary}`}>Sarah Chen</span>
        <span className="text-[9px] sm:text-[10px] text-muted-foreground">VP of Marketing, Acme Agency</span>
      </motion.div>
    </div>
  );
}

// Slide thumbnail icon map
function SlideTypeIcon({ type, className }: { type: DemoSlide['type']; className?: string }) {
  switch (type) {
    case 'title': return <Type className={className} />;
    case 'chart': return <BarChart3 className={className} />;
    case 'content': return <LayoutGrid className={className} />;
    case 'comparison': return <GitCompare className={className} />;
    case 'quote': return <Quote className={className} />;
  }
}

const painPoints = [
  {
    icon: Clock,
    title: 'Hours wasted on slide design',
    description:
      'Your team spends 4-6 hours building each client presentation. That is time not spent on strategy, campaigns, or revenue-generating work.',
  },
  {
    icon: AlertTriangle,
    title: 'Inconsistent brand quality',
    description:
      'Every team member has a different PowerPoint style. Clients see different fonts, layouts, and quality levels depending on who builds the deck.',
  },
  {
    icon: Palette,
    title: 'Data visualization is manual',
    description:
      'Turning campaign metrics into clear charts means exporting data, opening a chart tool, formatting, and pasting screenshots. For every single report.',
  },
  {
    icon: Layers,
    title: 'Research never makes it into decks',
    description:
      'Your team does great research but translating insights into a polished presentation is a separate, tedious workflow.',
  },
];

const capabilities = [
  {
    icon: Brain,
    title: 'AI-Generated Slides',
    description:
      'Describe what you need or feed in research -- the AI builds a complete slide deck with structure, content, and data visualizations.',
  },
  {
    icon: BarChart3,
    title: '5 Chart Types Built In',
    description:
      'Bar, line, pie, area, and donut charts render directly in slides with embedded data. No screenshots, no external tools.',
  },
  {
    icon: Palette,
    title: 'Custom Themes',
    description:
      'Set primary, secondary, and accent colors plus fonts and logos per presentation. Every slide follows the theme automatically.',
  },
  {
    icon: FileDown,
    title: 'PPTX Export',
    description:
      'Export any presentation to PowerPoint format via Remotion rendering. Share with clients who live in their own tools.',
  },
  {
    icon: Image,
    title: '8 Slide Types',
    description:
      'Title, content, section, image, comparison, quote, chart, and blank layouts. Mix and match for any narrative structure.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Full Editing Control',
    description:
      'AI generates the first draft. You refine every detail -- reorder slides, edit copy, adjust charts, swap layouts.',
  },
];

const slideTypes = [
  { type: 'Title', description: 'Opening slide with title and subtitle' },
  { type: 'Content', description: 'Body text with bullet points' },
  { type: 'Section', description: 'Visual section divider' },
  { type: 'Image', description: 'Full or split image layout' },
  { type: 'Comparison', description: 'Side-by-side analysis' },
  { type: 'Quote', description: 'Highlighted quote with attribution' },
  { type: 'Chart', description: 'Data visualization with 5 chart types' },
  { type: 'Blank', description: 'Freeform custom layout' },
];

function HeroSection() {
  // ---------------------------------------------------------------------------
  // Animation state
  // ---------------------------------------------------------------------------
  const [phase, setPhase] = useState<'generating' | 'presenting'>('generating');
  const [generatedCount, setGeneratedCount] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [themeIndex, setThemeIndex] = useState(0);
  const [promptText, setPromptText] = useState('');
  const [showExportPulse, setShowExportPulse] = useState(false);
  const cancelRef = useRef<{ cancelled: boolean }>({ cancelled: false });

  const theme = themes[themeIndex];

  const fullPrompt = 'Create a Q4 growth strategy deck with revenue charts, key highlights, competitive comparison, and a client testimonial...';

  // ---------------------------------------------------------------------------
  // Core animation loop
  // ---------------------------------------------------------------------------
  const runCycle = useCallback(async (controller: { cancelled: boolean }) => {
    // Phase 1: Reset & type prompt
    setPhase('generating');
    setGeneratedCount(0);
    setActiveSlide(0);
    setPromptText('');
    setShowExportPulse(false);

    // Type out the prompt
    for (let i = 0; i <= fullPrompt.length; i++) {
      if (controller.cancelled) return;
      setPromptText(fullPrompt.slice(0, i));
      await new Promise((r) => setTimeout(r, 18 + Math.random() * 12));
    }
    if (controller.cancelled) return;
    await new Promise((r) => setTimeout(r, 600));

    // Phase 2: Generate slides one at a time
    for (let i = 0; i < demoSlides.length; i++) {
      if (controller.cancelled) return;
      setGeneratedCount(i + 1);
      setActiveSlide(i);
      await new Promise((r) => setTimeout(r, 800));
    }

    if (controller.cancelled) return;
    setPhase('presenting');
    await new Promise((r) => setTimeout(r, 400));

    // Phase 3: Auto-advance through slides
    for (let i = 0; i < demoSlides.length; i++) {
      if (controller.cancelled) return;
      setActiveSlide(i);
      await new Promise((r) => setTimeout(r, 2800));
    }

    // Phase 4: Show export pulse
    if (controller.cancelled) return;
    setShowExportPulse(true);
    await new Promise((r) => setTimeout(r, 1600));

    // Phase 5: Switch theme and restart
    if (controller.cancelled) return;
    setThemeIndex((prev) => (prev + 1) % themes.length);
    await new Promise((r) => setTimeout(r, 600));
  }, []);

  useEffect(() => {
    const controller = { cancelled: false };
    cancelRef.current = controller;

    let running = true;
    const loop = async () => {
      while (running && !controller.cancelled) {
        await runCycle(controller);
      }
    };

    const timer = setTimeout(() => loop(), 1200);
    return () => {
      running = false;
      controller.cancelled = true;
      clearTimeout(timer);
    };
  }, [runCycle]);

  // Manual slide navigation
  const goToSlide = (idx: number) => {
    if (phase === 'presenting' && idx < generatedCount) {
      setActiveSlide(idx);
    }
  };

  // ---------------------------------------------------------------------------
  // Slide content renderer
  // ---------------------------------------------------------------------------
  const renderSlideContent = (slide: DemoSlide) => {
    switch (slide.type) {
      case 'title': return <TitleSlideContent theme={theme} />;
      case 'chart': return <ChartSlideContent theme={theme} />;
      case 'content': return <ContentSlideContent theme={theme} />;
      case 'comparison': return <ComparisonSlideContent theme={theme} />;
      case 'quote': return <QuoteSlideContent theme={theme} />;
    }
  };

  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          {/* ---- Headline area (preserved) ---- */}
          <motion.div variants={itemVariants} className="text-center mb-8 max-w-[900px] mx-auto">
            <div className="tag-neo rounded-full bg-signature/10 border-signature mb-6">
              <Presentation className="w-4 h-4 text-signature" />
              <span className="text-[11px] font-semibold text-signature uppercase tracking-wider">
                AI Presentations
              </span>
            </div>
            <h1 className="text-display font-display text-foreground mb-6">
              Client decks in minutes,{' '}
              <span className="text-signature">not hours</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              AI-powered slideshow generation with 8 slide types, embedded charts, custom
              themes, and PPTX export. From research to polished presentation in one click.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-signature" />
                90% faster deck creation
              </span>
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-signature" />
                AI-generated from research
              </span>
              <span className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-signature" />
                Built-in data visualization
              </span>
            </div>
          </motion.div>

          {/* ---- Interactive presentation builder ---- */}
          <motion.div variants={itemVariants} className="mt-12 w-full max-w-5xl mx-auto">
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
                      <Presentation className="w-3 h-3 text-muted-foreground" />
                      <span className="text-[11px] text-muted-foreground font-mono">
                        app.ozzios.com/presentations
                      </span>
                    </div>
                  </div>
                  <div className="w-16" />
                </div>

                {/* Toolbar */}
                <div className="flex items-center justify-between px-3 sm:px-4 py-2 border-b border-border bg-background">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-[11px] sm:text-xs font-semibold text-foreground truncate max-w-[120px] sm:max-w-none">
                      Q4 Growth Strategy
                    </span>
                    <AnimatePresence mode="wait">
                      {phase === 'generating' && generatedCount < demoSlides.length ? (
                        <motion.span
                          key="gen-badge"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-signature/10 text-signature text-[9px] sm:text-[10px] font-medium"
                        >
                          <Loader2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 animate-spin" />
                          Generating...
                        </motion.span>
                      ) : (
                        <motion.span
                          key="done-badge"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 text-[9px] sm:text-[10px] font-medium"
                        >
                          <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          <span className="hidden sm:inline">Ready</span>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    {/* Theme indicator */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={theme.name}
                        initial={{ opacity: 0, x: 5 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -5 }}
                        className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded-md bg-muted/50 border border-border"
                      >
                        <Palette className="w-3 h-3 text-muted-foreground" />
                        <span className="text-[10px] text-muted-foreground">{theme.name}</span>
                        <div className={`w-2.5 h-2.5 rounded-full ${theme.primaryBg}`} />
                      </motion.div>
                    </AnimatePresence>
                    {/* Export button */}
                    <motion.div
                      animate={showExportPulse ? { scale: [1, 1.08, 1] } : {}}
                      transition={{ duration: 0.5, repeat: showExportPulse ? 2 : 0 }}
                      className={`flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-medium transition-colors duration-300 ${
                        showExportPulse
                          ? 'bg-signature text-white'
                          : 'bg-muted/50 border border-border text-muted-foreground'
                      }`}
                    >
                      <Download className="w-3 h-3" />
                      <span className="hidden sm:inline">Export PPTX</span>
                    </motion.div>
                  </div>
                </div>

                {/* Main content area */}
                <div className="flex bg-muted/30" style={{ minHeight: 340 }}>
                  {/* Slide thumbnail sidebar */}
                  <div className="hidden sm:flex w-24 md:w-32 flex-col border-r border-border bg-background py-2 px-1.5 md:px-2 gap-1.5 overflow-y-auto">
                    <AnimatePresence>
                      {demoSlides.slice(0, generatedCount).map((slide, idx) => (
                        <motion.button
                          key={slide.id}
                          initial={{ opacity: 0, x: -20, scale: 0.9 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          transition={{ duration: 0.35, delay: 0.05 }}
                          onClick={() => goToSlide(idx)}
                          className={`relative w-full rounded-md border-2 transition-colors duration-200 p-0.5 group ${
                            idx === activeSlide
                              ? 'border-signature shadow-sm'
                              : 'border-border hover:border-muted-foreground/30'
                          }`}
                        >
                          {/* Mini slide preview */}
                          <div className="w-full aspect-[16/10] rounded-sm bg-muted/50 flex flex-col items-center justify-center gap-0.5 overflow-hidden">
                            <SlideTypeIcon
                              type={slide.type}
                              className={`w-3.5 h-3.5 md:w-4 md:h-4 ${idx === activeSlide ? theme.primary : 'text-muted-foreground'}`}
                            />
                            <span className={`text-[7px] md:text-[8px] font-medium ${idx === activeSlide ? 'text-foreground' : 'text-muted-foreground'}`}>
                              {slide.label}
                            </span>
                          </div>
                          {/* Slide number */}
                          <span className="absolute top-0.5 left-1 text-[7px] text-muted-foreground">{idx + 1}</span>
                        </motion.button>
                      ))}
                    </AnimatePresence>

                    {/* Placeholder skeletons for slides not yet generated */}
                    {phase === 'generating' &&
                      Array.from({ length: demoSlides.length - generatedCount }).map((_, i) => (
                        <div
                          key={`skel-${i}`}
                          className="w-full rounded-md border-2 border-dashed border-border/50 p-0.5"
                        >
                          <div className="w-full aspect-[16/10] rounded-sm bg-muted/20 animate-pulse" />
                        </div>
                      ))}
                  </div>

                  {/* Main slide preview */}
                  <div className="flex-1 flex flex-col min-w-0">
                    {/* Slide area */}
                    <div className="flex-1 flex items-center justify-center p-3 sm:p-6">
                      <div className="relative w-full max-w-lg aspect-[16/10] rounded-lg border border-border bg-background shadow-lg overflow-hidden">
                        {/* Generating overlay */}
                        <AnimatePresence>
                          {phase === 'generating' && generatedCount === 0 && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background"
                            >
                              <Loader2 className="w-6 h-6 sm:w-8 sm:h-8 text-signature animate-spin mb-2 sm:mb-3" />
                              <span className="text-[10px] sm:text-xs text-muted-foreground mb-1 sm:mb-2">
                                Generating slides...
                              </span>
                              <div className="w-32 sm:w-48 max-w-[80%] h-1 rounded-full bg-muted overflow-hidden">
                                <motion.div
                                  className="h-full bg-signature rounded-full"
                                  initial={{ width: '0%' }}
                                  animate={{ width: '100%' }}
                                  transition={{ duration: 3.5, ease: 'linear' }}
                                />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Active slide content */}
                        <AnimatePresence mode="wait">
                          {generatedCount > 0 && (
                            <motion.div
                              key={`slide-${activeSlide}-${themeIndex}`}
                              initial={{ opacity: 0, scale: 0.97 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 1.02 }}
                              transition={{ duration: 0.35 }}
                              className="absolute inset-0"
                            >
                              {renderSlideContent(demoSlides[activeSlide])}
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Subtle theme accent bar at bottom */}
                        <motion.div
                          className={`absolute bottom-0 left-0 right-0 h-0.5 ${theme.primaryBg}`}
                          layoutId="themeBar"
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>

                    {/* Bottom controls */}
                    <div className="px-3 sm:px-4 py-2 sm:py-3 border-t border-border bg-background">
                      {/* Prompt area (visible during generation) */}
                      <AnimatePresence mode="wait">
                        {phase === 'generating' ? (
                          <motion.div
                            key="prompt"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 border border-border"
                          >
                            <Sparkles className="w-3.5 h-3.5 text-signature shrink-0" />
                            <span className="text-[10px] sm:text-[11px] text-muted-foreground truncate flex-1">
                              {promptText}
                              <span className="inline-block ml-0.5 align-middle text-muted-foreground" style={{ animation: 'blink 1s ease-in-out infinite' }}>
                                |
                              </span>
                            </span>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="nav"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="flex items-center justify-between gap-3"
                          >
                            {/* Slide navigation dots */}
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => goToSlide(Math.max(0, activeSlide - 1))}
                                className="w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                              >
                                <ChevronLeft className="w-3.5 h-3.5" />
                              </button>
                              <div className="flex items-center gap-1">
                                {demoSlides.map((_, i) => (
                                  <button
                                    key={i}
                                    onClick={() => goToSlide(i)}
                                    className={`rounded-full transition-all duration-300 ${
                                      i === activeSlide
                                        ? `w-4 sm:w-5 h-1.5 ${theme.primaryBg}`
                                        : 'w-1.5 h-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                                    }`}
                                  />
                                ))}
                              </div>
                              <button
                                onClick={() => goToSlide(Math.min(demoSlides.length - 1, activeSlide + 1))}
                                className="w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                              >
                                <ChevronRight className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            {/* Slide counter */}
                            <span className="text-[10px] sm:text-[11px] text-muted-foreground">
                              Slide {activeSlide + 1} of {demoSlides.length}
                            </span>
                            {/* Present button */}
                            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted/50 border border-border text-muted-foreground text-[10px] sm:text-[11px]">
                              <Play className="w-3 h-3" />
                              <span className="hidden sm:inline">Present</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Mobile slide thumbnails (horizontal) */}
                      <div className="flex sm:hidden items-center gap-1.5 mt-2 overflow-x-auto scrollbar-hidden pb-1">
                        {demoSlides.slice(0, generatedCount).map((slide, idx) => (
                          <button
                            key={slide.id}
                            onClick={() => goToSlide(idx)}
                            className={`shrink-0 w-12 h-8 rounded border-2 flex items-center justify-center transition-colors ${
                              idx === activeSlide ? 'border-signature bg-muted/50' : 'border-border bg-muted/20'
                            }`}
                          >
                            <SlideTypeIcon
                              type={slide.type}
                              className={`w-3 h-3 ${idx === activeSlide ? theme.primary : 'text-muted-foreground'}`}
                            />
                          </button>
                        ))}
                        {phase === 'generating' &&
                          Array.from({ length: demoSlides.length - generatedCount }).map((_, i) => (
                            <div key={`mskel-${i}`} className="shrink-0 w-12 h-8 rounded border-2 border-dashed border-border/50 bg-muted/10 animate-pulse" />
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
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
            Presentations are your biggest time sink
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Agencies spend 15-20% of billable hours on presentation work that clients
            glance at for five minutes.
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
          >
            <span className="tag-neo text-signature mb-6 inline-block">How It Works</span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-tight mb-6">
              Research in, polished deck out
            </h2>
            <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
              <p>
                Feed your research documents, campaign data, or a simple prompt into the
                AI presentation builder. It generates a complete slide deck with the right
                structure, data visualizations, and narrative flow.
              </p>
              <p>
                Every presentation uses your custom theme -- brand colors, fonts, and logo
                applied automatically. Edit any slide, reorder the deck, adjust charts,
                and export to PPTX when it is ready.
              </p>
              <p>
                What used to take your team half a day now takes five minutes. And the
                quality is consistent every time.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
              <div className="bg-muted/50 px-6 py-4 border-b-2 border-border">
                <span className="text-sm font-semibold text-foreground">
                  8 Slide Types Available
                </span>
              </div>
              {slideTypes.map((slide, i) => (
                <div
                  key={slide.type}
                  className={`flex items-center gap-4 px-6 py-3.5 ${i < slideTypes.length - 1 ? 'border-b border-border' : ''}`}
                >
                  <span className="text-sm font-semibold text-signature w-24 shrink-0">
                    {slide.type}
                  </span>
                  <span className="text-sm text-muted-foreground">{slide.description}</span>
                </div>
              ))}
            </div>
          </motion.div>
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
            Professional presentations without the busywork
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Everything you need to create compelling client presentations at scale.
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

function WorkflowSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      step: '01',
      title: 'Input your content',
      description:
        'Paste research, upload data, or describe what you need. The AI analyzes your input to determine the right slide structure.',
    },
    {
      step: '02',
      title: 'AI builds the deck',
      description:
        'Slides are generated with appropriate types -- titles, content, charts, comparisons. Data is automatically visualized.',
    },
    {
      step: '03',
      title: 'Refine and brand',
      description:
        'Apply your custom theme, adjust individual slides, edit copy, and reorder. Full control over the final product.',
    },
    {
      step: '04',
      title: 'Present or export',
      description:
        'Use the built-in viewer with transitions or export to PPTX. Share directly with clients from the platform.',
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
          <span className="tag-neo text-signature mb-6 inline-block">Workflow</span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-tight mb-4">
            Four steps to a polished deck
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
            Build decks that impress,
            <br />
            <span className="text-signature">in minutes</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
            Stop spending hours on slide design. Let AI handle the heavy lifting while
            your team focuses on strategy and client relationships.
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

export function PresentationsView() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PainPointsSection />
      <SolutionSection />
      <CapabilitiesSection />
      <WorkflowSection />
      <CTASection />
    </div>
  );
}
