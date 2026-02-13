import { n as jsxRuntimeExports, a as reactExports } from "./worker-entry-DUbV-qEz.js";
import { A as AnimatePresence, h as Palette, B as Brain, L as LandingLayout } from "./LandingLayout-BFxFbzxM.js";
import { m as motion, A as ArrowRight } from "./proxy-BEnWwJWi.js";
import { c as createLucideIcon } from "./createLucideIcon-OQXTLfCE.js";
import { Z as Zap } from "./zap-1MGNmvOI.js";
import { S as Sparkles } from "./sparkles-DZv4tgq8.js";
import { C as ChartColumn } from "./chart-column-BodL8QE9.js";
import { L as LoaderCircle } from "./loader-circle-BvgboRpN.js";
import { C as CircleCheck } from "./circle-check-CFGtU0xv.js";
import { C as ChevronRight } from "./chevron-right-CPTxXx3M.js";
import { P as Play } from "./play-ChZJg9yy.js";
import { u as useInView } from "./use-in-view-DoLVnWF9.js";
import { C as Clock } from "./clock-oQ2YqCyM.js";
import { T as TriangleAlert } from "./triangle-alert-BHeXVE41.js";
import { L as Layers } from "./layers-HgkP8SV_.js";
import { I as Image } from "./image-Dc2fdWjD.js";
import { S as SlidersHorizontal } from "./sliders-horizontal-CefGSN-s.js";
import { S as Shield } from "./shield-CRI1Lu_S.js";
import { Q as Quote } from "./quote-B68sZdvn.js";
import { L as LayoutGrid } from "./layout-grid-CoxctHTr.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "./router-BLJT3Mxm.js";
import "./utils-QXBWQHlM.js";
import "./button-CtEClRbA.js";
import "./menu-Bt53Wknu.js";
const __iconNode$6 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$6);
const __iconNode$5 = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode$5);
const __iconNode$4 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M12 18v-6", key: "17g6i2" }],
  ["path", { d: "m9 15 3 3 3-3", key: "1npd3o" }]
];
const FileDown = createLucideIcon("file-down", __iconNode$4);
const __iconNode$3 = [
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7", key: "1yeb86" }],
  ["path", { d: "M11 18H8a2 2 0 0 1-2-2V9", key: "19pyzm" }]
];
const GitCompare = createLucideIcon("git-compare", __iconNode$3);
const __iconNode$2 = [["path", { d: "M5 12h14", key: "1ays0h" }]];
const Minus = createLucideIcon("minus", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M2 3h20", key: "91anmk" }],
  ["path", { d: "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3", key: "2k9sn8" }],
  ["path", { d: "m7 21 5-5 5 5", key: "bip4we" }]
];
const Presentation = createLucideIcon("presentation", __iconNode$1);
const __iconNode = [
  ["path", { d: "M12 4v16", key: "1654pz" }],
  ["path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2", key: "e0r10z" }],
  ["path", { d: "M9 20h6", key: "s66wpe" }]
];
const Type = createLucideIcon("type", __iconNode);
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
};
const themes = [
  {
    name: "Corporate Blue",
    primary: "text-blue-600",
    primaryBg: "bg-blue-600",
    secondary: "text-blue-400",
    secondaryBg: "bg-blue-400",
    accent: "text-blue-500",
    accentBg: "bg-blue-500",
    chartColors: ["bg-blue-500", "bg-blue-400", "bg-blue-300", "bg-sky-400", "bg-sky-300"]
  },
  {
    name: "Sunset Coral",
    primary: "text-orange-500",
    primaryBg: "bg-orange-500",
    secondary: "text-amber-400",
    secondaryBg: "bg-amber-400",
    accent: "text-rose-500",
    accentBg: "bg-rose-500",
    chartColors: ["bg-orange-500", "bg-amber-400", "bg-rose-400", "bg-red-400", "bg-yellow-400"]
  },
  {
    name: "Forest Green",
    primary: "text-emerald-600",
    primaryBg: "bg-emerald-600",
    secondary: "text-teal-400",
    secondaryBg: "bg-teal-400",
    accent: "text-emerald-500",
    accentBg: "bg-emerald-500",
    chartColors: ["bg-emerald-500", "bg-teal-400", "bg-green-400", "bg-lime-400", "bg-cyan-400"]
  },
  {
    name: "Royal Purple",
    primary: "text-violet-600",
    primaryBg: "bg-violet-600",
    secondary: "text-purple-400",
    secondaryBg: "bg-purple-400",
    accent: "text-violet-500",
    accentBg: "bg-violet-500",
    chartColors: ["bg-violet-500", "bg-purple-400", "bg-fuchsia-400", "bg-pink-400", "bg-indigo-400"]
  }
];
const demoSlides = [
  { id: 0, type: "title", label: "Title" },
  { id: 1, type: "chart", label: "Chart" },
  { id: 2, type: "content", label: "Content" },
  { id: 3, type: "comparison", label: "Compare" },
  { id: 4, type: "quote", label: "Quote" }
];
const chartData = [
  { label: "Q1", value: 45 },
  { label: "Q2", value: 72 },
  { label: "Q3", value: 58 },
  { label: "Q4", value: 89 },
  { label: "Q5", value: 65 }
];
const bulletPoints = [
  "Conversion rates increased 34% year over year",
  "Customer acquisition cost reduced by $12.50",
  "Average deal size grew to $48,000",
  "Net promoter score reached all-time high of 72"
];
const comparisonData = {
  left: { title: "Before", items: ["Manual reporting", "6h per deck", "Inconsistent brand", "Static charts"] },
  right: { title: "After", items: ["AI-generated", "5 min per deck", "On-brand always", "Interactive data"] }
};
function TitleSlideContent({ theme }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center h-full px-4 sm:px-8 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.5, delay: 0.2 },
        className: `w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${theme.primaryBg} flex items-center justify-center mb-3 sm:mb-4`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-bold text-sm sm:text-lg", children: "A" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.h3,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: 0.35 },
        className: "text-base sm:text-xl md:text-2xl font-bold text-foreground mb-1 sm:mb-2",
        children: "Q4 Growth Strategy"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.p,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: 0.5 },
        className: `text-xs sm:text-sm ${theme.primary} font-medium`,
        children: "Acme Agency -- Annual Review 2025"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { scaleX: 0 },
        animate: { scaleX: 1 },
        transition: { duration: 0.6, delay: 0.65 },
        className: `mt-3 sm:mt-5 h-0.5 w-16 sm:w-24 ${theme.primaryBg} rounded-full`
      }
    )
  ] });
}
function ChartSlideContent({ theme }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full px-3 sm:px-6 py-3 sm:py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.h4,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.4, delay: 0.15 },
        className: "text-xs sm:text-sm font-semibold text-foreground mb-1",
        children: "Revenue by Quarter"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.p,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.4, delay: 0.25 },
        className: "text-[10px] sm:text-xs text-muted-foreground mb-2 sm:mb-3",
        children: "Year-over-year comparison ($M)"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex items-end gap-1.5 sm:gap-3 pb-4 sm:pb-6 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[8px] sm:text-[9px] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "100" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "0" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-end gap-1.5 sm:gap-3 ml-4 sm:ml-6", children: chartData.map((bar, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0 },
            animate: { height: `${bar.value}%` },
            transition: { duration: 0.6, delay: 0.3 + i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
            className: `w-full rounded-t-sm sm:rounded-t ${theme.chartColors[i]} relative group`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.span,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.8 + i * 0.12 },
                className: "absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] sm:text-[9px] font-medium text-foreground",
                children: bar.value
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] sm:text-[9px] text-muted-foreground", children: bar.label })
      ] }, bar.label)) })
    ] })
  ] });
}
function ContentSlideContent({ theme }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full px-3 sm:px-6 py-3 sm:py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.h4,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.4, delay: 0.15 },
        className: "text-xs sm:text-sm font-semibold text-foreground mb-2 sm:mb-3",
        children: "Key Performance Highlights"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 sm:space-y-2.5", children: bulletPoints.map((point, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -15 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.4, delay: 0.25 + i * 0.15 },
        className: "flex items-start gap-2",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-1.5 h-1.5 rounded-full ${theme.primaryBg} mt-1 sm:mt-1.5 shrink-0` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] sm:text-xs text-muted-foreground leading-relaxed", children: point })
        ]
      },
      i
    )) })
  ] });
}
function ComparisonSlideContent({ theme }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full px-3 sm:px-6 py-3 sm:py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.h4,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.4, delay: 0.15 },
        className: "text-xs sm:text-sm font-semibold text-foreground mb-2 sm:mb-3",
        children: "Impact Analysis"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 grid grid-cols-2 gap-2 sm:gap-3", children: ["left", "right"].map((side, sIdx) => {
      const data = comparisonData[side];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.25 + sIdx * 0.15 },
          className: `rounded-lg border p-2 sm:p-3 ${side === "right" ? `border-${theme.primaryBg.replace("bg-", "")} bg-${theme.primaryBg.replace("bg-", "")}/5` : "border-border bg-muted/30"}`,
          style: side === "right" ? { borderColor: "currentColor" } : void 0,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] sm:text-xs font-semibold ${side === "right" ? theme.primary : "text-muted-foreground"} block mb-1.5 sm:mb-2`, children: data.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1 sm:space-y-1.5", children: data.items.map((item, j) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.45 + sIdx * 0.15 + j * 0.1 },
                className: "flex items-center gap-1.5",
                children: [
                  side === "right" ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: `w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0 ${theme.primary}` }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "w-2.5 h-2.5 sm:w-3 sm:h-3 text-muted-foreground/50 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9px] sm:text-[10px] ${side === "right" ? "text-foreground" : "text-muted-foreground line-through"}`, children: item })
                ]
              },
              j
            )) })
          ]
        },
        side
      );
    }) })
  ] });
}
function QuoteSlideContent({ theme }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center h-full px-4 sm:px-8 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.5, delay: 0.2 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: `w-6 h-6 sm:w-8 sm:h-8 ${theme.primary} mb-2 sm:mb-3 mx-auto opacity-40` })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.blockquote,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: 0.35 },
        className: "text-xs sm:text-sm md:text-base text-foreground font-medium italic leading-relaxed mb-2 sm:mb-3 max-w-[90%]",
        children: '"This platform cut our presentation time from 6 hours to 15 minutes. Our clients notice the quality difference."'
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5, delay: 0.55 },
        className: "flex flex-col items-center gap-0.5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] sm:text-xs font-semibold ${theme.primary}`, children: "Sarah Chen" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] sm:text-[10px] text-muted-foreground", children: "VP of Marketing, Acme Agency" })
        ]
      }
    )
  ] });
}
function SlideTypeIcon({ type, className }) {
  switch (type) {
    case "title":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Type, { className });
    case "chart":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className });
    case "content":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGrid, { className });
    case "comparison":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(GitCompare, { className });
    case "quote":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className });
  }
}
const painPoints = [
  {
    icon: Clock,
    title: "Hours wasted on slide design",
    description: "Your team spends 4-6 hours building each client presentation. That is time not spent on strategy, campaigns, or revenue-generating work."
  },
  {
    icon: TriangleAlert,
    title: "Inconsistent brand quality",
    description: "Every team member has a different PowerPoint style. Clients see different fonts, layouts, and quality levels depending on who builds the deck."
  },
  {
    icon: Palette,
    title: "Data visualization is manual",
    description: "Turning campaign metrics into clear charts means exporting data, opening a chart tool, formatting, and pasting screenshots. For every single report."
  },
  {
    icon: Layers,
    title: "Research never makes it into decks",
    description: "Your team does great research but translating insights into a polished presentation is a separate, tedious workflow."
  }
];
const capabilities = [
  {
    icon: Brain,
    title: "AI-Generated Slides",
    description: "Describe what you need or feed in research -- the AI builds a complete slide deck with structure, content, and data visualizations."
  },
  {
    icon: ChartColumn,
    title: "5 Chart Types Built In",
    description: "Bar, line, pie, area, and donut charts render directly in slides with embedded data. No screenshots, no external tools."
  },
  {
    icon: Palette,
    title: "Custom Themes",
    description: "Set primary, secondary, and accent colors plus fonts and logos per presentation. Every slide follows the theme automatically."
  },
  {
    icon: FileDown,
    title: "PPTX Export",
    description: "Export any presentation to PowerPoint format via Remotion rendering. Share with clients who live in their own tools."
  },
  {
    icon: Image,
    title: "8 Slide Types",
    description: "Title, content, section, image, comparison, quote, chart, and blank layouts. Mix and match for any narrative structure."
  },
  {
    icon: SlidersHorizontal,
    title: "Full Editing Control",
    description: "AI generates the first draft. You refine every detail -- reorder slides, edit copy, adjust charts, swap layouts."
  }
];
const slideTypes = [
  { type: "Title", description: "Opening slide with title and subtitle" },
  { type: "Content", description: "Body text with bullet points" },
  { type: "Section", description: "Visual section divider" },
  { type: "Image", description: "Full or split image layout" },
  { type: "Comparison", description: "Side-by-side analysis" },
  { type: "Quote", description: "Highlighted quote with attribution" },
  { type: "Chart", description: "Data visualization with 5 chart types" },
  { type: "Blank", description: "Freeform custom layout" }
];
function HeroSection() {
  const [phase, setPhase] = reactExports.useState("generating");
  const [generatedCount, setGeneratedCount] = reactExports.useState(0);
  const [activeSlide, setActiveSlide] = reactExports.useState(0);
  const [themeIndex, setThemeIndex] = reactExports.useState(0);
  const [promptText, setPromptText] = reactExports.useState("");
  const [showExportPulse, setShowExportPulse] = reactExports.useState(false);
  const cancelRef = reactExports.useRef({ cancelled: false });
  const theme = themes[themeIndex];
  const fullPrompt = "Create a Q4 growth strategy deck with revenue charts, key highlights, competitive comparison, and a client testimonial...";
  const runCycle = reactExports.useCallback(async (controller) => {
    setPhase("generating");
    setGeneratedCount(0);
    setActiveSlide(0);
    setPromptText("");
    setShowExportPulse(false);
    for (let i = 0; i <= fullPrompt.length; i++) {
      if (controller.cancelled) return;
      setPromptText(fullPrompt.slice(0, i));
      await new Promise((r) => setTimeout(r, 18 + Math.random() * 12));
    }
    if (controller.cancelled) return;
    await new Promise((r) => setTimeout(r, 600));
    for (let i = 0; i < demoSlides.length; i++) {
      if (controller.cancelled) return;
      setGeneratedCount(i + 1);
      setActiveSlide(i);
      await new Promise((r) => setTimeout(r, 800));
    }
    if (controller.cancelled) return;
    setPhase("presenting");
    await new Promise((r) => setTimeout(r, 400));
    for (let i = 0; i < demoSlides.length; i++) {
      if (controller.cancelled) return;
      setActiveSlide(i);
      await new Promise((r) => setTimeout(r, 2800));
    }
    if (controller.cancelled) return;
    setShowExportPulse(true);
    await new Promise((r) => setTimeout(r, 1600));
    if (controller.cancelled) return;
    setThemeIndex((prev) => (prev + 1) % themes.length);
    await new Promise((r) => setTimeout(r, 600));
  }, []);
  reactExports.useEffect(() => {
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
  const goToSlide = (idx) => {
    if (phase === "presenting" && idx < generatedCount) {
      setActiveSlide(idx);
    }
  };
  const renderSlideContent = (slide) => {
    switch (slide.type) {
      case "title":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(TitleSlideContent, { theme });
      case "chart":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ChartSlideContent, { theme });
      case "content":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ContentSlideContent, { theme });
      case "comparison":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ComparisonSlideContent, { theme });
      case "quote":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(QuoteSlideContent, { theme });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-pattern opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", animate: "visible", variants: containerVariants, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "text-center mb-8 max-w-[900px] mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tag-neo rounded-full bg-signature/10 border-signature mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Presentation, { className: "w-4 h-4 text-signature" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold text-signature uppercase tracking-wider", children: "AI Presentations" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-display font-display text-foreground mb-6", children: [
          "Client decks in minutes,",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-signature", children: "not hours" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto mb-8", children: "AI-powered slideshow generation with 8 slide types, embedded charts, custom themes, and PPTX export. From research to polished presentation in one click." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 text-signature" }),
            "90% faster deck creation"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-signature" }),
            "AI-generated from research"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-4 h-4 text-signature" }),
            "Built-in data visualization"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "mt-12 w-full max-w-5xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl border border-border bg-background overflow-hidden shadow-2xl shadow-black/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-[#FF5F57]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-[#FFBD2E]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-[#28CA41]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-4 py-1.5 rounded-lg bg-background border border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Presentation, { className: "w-3 h-3 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground font-mono", children: "app.ozzios.com/presentations" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-3 sm:px-4 py-2 border-b border-border bg-background", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 sm:gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] sm:text-xs font-semibold text-foreground truncate max-w-[120px] sm:max-w-none", children: "Q4 Growth Strategy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: phase === "generating" && generatedCount < demoSlides.length ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.span,
              {
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.8 },
                className: "flex items-center gap-1 px-2 py-0.5 rounded-full bg-signature/10 text-signature text-[9px] sm:text-[10px] font-medium",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-2.5 h-2.5 sm:w-3 sm:h-3 animate-spin" }),
                  "Generating..."
                ]
              },
              "gen-badge"
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.span,
              {
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.8 },
                className: "flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 text-[9px] sm:text-[10px] font-medium",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-2.5 h-2.5 sm:w-3 sm:h-3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Ready" })
                ]
              },
              "done-badge"
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 sm:gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: 5 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: -5 },
                className: "hidden sm:flex items-center gap-1.5 px-2 py-1 rounded-md bg-muted/50 border border-border",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Palette, { className: "w-3 h-3 text-muted-foreground" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: theme.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-2.5 h-2.5 rounded-full ${theme.primaryBg}` })
                ]
              },
              theme.name
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                animate: showExportPulse ? { scale: [1, 1.08, 1] } : {},
                transition: { duration: 0.5, repeat: showExportPulse ? 2 : 0 },
                className: `flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-medium transition-colors duration-300 ${showExportPulse ? "bg-signature text-white" : "bg-muted/50 border border-border text-muted-foreground"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3 h-3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Export PPTX" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex bg-muted/30", style: { minHeight: 340 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:flex w-24 md:w-32 flex-col border-r border-border bg-background py-2 px-1.5 md:px-2 gap-1.5 overflow-y-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: demoSlides.slice(0, generatedCount).map((slide, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.button,
              {
                initial: { opacity: 0, x: -20, scale: 0.9 },
                animate: { opacity: 1, x: 0, scale: 1 },
                transition: { duration: 0.35, delay: 0.05 },
                onClick: () => goToSlide(idx),
                className: `relative w-full rounded-md border-2 transition-colors duration-200 p-0.5 group ${idx === activeSlide ? "border-signature shadow-sm" : "border-border hover:border-muted-foreground/30"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full aspect-[16/10] rounded-sm bg-muted/50 flex flex-col items-center justify-center gap-0.5 overflow-hidden", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SlideTypeIcon,
                      {
                        type: slide.type,
                        className: `w-3.5 h-3.5 md:w-4 md:h-4 ${idx === activeSlide ? theme.primary : "text-muted-foreground"}`
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[7px] md:text-[8px] font-medium ${idx === activeSlide ? "text-foreground" : "text-muted-foreground"}`, children: slide.label })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-0.5 left-1 text-[7px] text-muted-foreground", children: idx + 1 })
                ]
              },
              slide.id
            )) }),
            phase === "generating" && Array.from({ length: demoSlides.length - generatedCount }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-full rounded-md border-2 border-dashed border-border/50 p-0.5",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full aspect-[16/10] rounded-sm bg-muted/20 animate-pulse" })
              },
              `skel-${i}`
            ))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center justify-center p-3 sm:p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-lg aspect-[16/10] rounded-lg border border-border bg-background shadow-lg overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: phase === "generating" && generatedCount === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  className: "absolute inset-0 z-10 flex flex-col items-center justify-center bg-background",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-6 h-6 sm:w-8 sm:h-8 text-signature animate-spin mb-2 sm:mb-3" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] sm:text-xs text-muted-foreground mb-1 sm:mb-2", children: "Generating slides..." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 sm:w-48 max-w-[80%] h-1 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        className: "h-full bg-signature rounded-full",
                        initial: { width: "0%" },
                        animate: { width: "100%" },
                        transition: { duration: 3.5, ease: "linear" }
                      }
                    ) })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: generatedCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, scale: 0.97 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 1.02 },
                  transition: { duration: 0.35 },
                  className: "absolute inset-0",
                  children: renderSlideContent(demoSlides[activeSlide])
                },
                `slide-${activeSlide}-${themeIndex}`
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: `absolute bottom-0 left-0 right-0 h-0.5 ${theme.primaryBg}`,
                  layoutId: "themeBar",
                  transition: { duration: 0.5 }
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 sm:px-4 py-2 sm:py-3 border-t border-border bg-background", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: phase === "generating" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 5 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -5 },
                  className: "flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 border border-border",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-signature shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] sm:text-[11px] text-muted-foreground truncate flex-1", children: [
                      promptText,
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block ml-0.5 align-middle text-muted-foreground", style: { animation: "blink 1s ease-in-out infinite" }, children: "|" })
                    ] })
                  ]
                },
                "prompt"
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 5 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -5 },
                  className: "flex items-center justify-between gap-3",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          onClick: () => goToSlide(Math.max(0, activeSlide - 1)),
                          className: "w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-3.5 h-3.5" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1", children: demoSlides.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          onClick: () => goToSlide(i),
                          className: `rounded-full transition-all duration-300 ${i === activeSlide ? `w-4 sm:w-5 h-1.5 ${theme.primaryBg}` : "w-1.5 h-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"}`
                        },
                        i
                      )) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          onClick: () => goToSlide(Math.min(demoSlides.length - 1, activeSlide + 1)),
                          className: "w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5" })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] sm:text-[11px] text-muted-foreground", children: [
                      "Slide ",
                      activeSlide + 1,
                      " of ",
                      demoSlides.length
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted/50 border border-border text-muted-foreground text-[10px] sm:text-[11px]", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-3 h-3" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Present" })
                    ] })
                  ]
                },
                "nav"
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex sm:hidden items-center gap-1.5 mt-2 overflow-x-auto scrollbar-hidden pb-1", children: [
                demoSlides.slice(0, generatedCount).map((slide, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => goToSlide(idx),
                    className: `shrink-0 w-12 h-8 rounded border-2 flex items-center justify-center transition-colors ${idx === activeSlide ? "border-signature bg-muted/50" : "border-border bg-muted/20"}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SlideTypeIcon,
                      {
                        type: slide.type,
                        className: `w-3 h-3 ${idx === activeSlide ? theme.primary : "text-muted-foreground"}`
                      }
                    )
                  },
                  slide.id
                )),
                phase === "generating" && Array.from({ length: demoSlides.length - generatedCount }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 w-12 h-8 rounded border-2 border-dashed border-border/50 bg-muted/10 animate-pulse" }, `mskel-${i}`))
              ] })
            ] })
          ] })
        ] })
      ] }) }) })
    ] }) })
  ] });
}
function PainPointsSection() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 lg:py-32 bg-muted/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1200px] px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        ref,
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.6 },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag-neo text-signature mb-6 inline-block", children: "The Problem" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl text-foreground tracking-tight mb-4", children: "Presentations are your biggest time sink" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-xl mx-auto", children: "Agencies spend 15-20% of billable hours on presentation work that clients glance at for five minutes." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        variants: containerVariants,
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        className: "grid md:grid-cols-2 gap-6",
        children: painPoints.map((point) => {
          const Icon = point.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              variants: itemVariants,
              className: "card-neo rounded-xl p-8 group",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-signature/10 flex items-center justify-center mb-5 group-hover:bg-signature/20 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6 text-signature" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-foreground mb-3", children: point.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: point.description })
              ]
            },
            point.title
          );
        })
      }
    )
  ] }) });
}
function SolutionSection() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1200px] px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        ref,
        initial: { opacity: 0, x: -30 },
        animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 },
        transition: { duration: 0.7 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag-neo text-signature mb-6 inline-block", children: "How It Works" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl text-foreground tracking-tight mb-6", children: "Research in, polished deck out" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-muted-foreground text-base leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Feed your research documents, campaign data, or a simple prompt into the AI presentation builder. It generates a complete slide deck with the right structure, data visualizations, and narrative flow." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Every presentation uses your custom theme -- brand colors, fonts, and logo applied automatically. Edit any slide, reorder the deck, adjust charts, and export to PPTX when it is ready." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "What used to take your team half a day now takes five minutes. And the quality is consistent every time." })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, x: 30 },
        animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 },
        transition: { duration: 0.7, delay: 0.2 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border-2 border-border rounded-lg overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/50 px-6 py-4 border-b-2 border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground", children: "8 Slide Types Available" }) }),
          slideTypes.map((slide, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `flex items-center gap-4 px-6 py-3.5 ${i < slideTypes.length - 1 ? "border-b border-border" : ""}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-signature w-24 shrink-0", children: slide.type }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: slide.description })
              ]
            },
            slide.type
          ))
        ] })
      }
    )
  ] }) }) });
}
function CapabilitiesSection() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 lg:py-32 bg-muted/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1200px] px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        ref,
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.6 },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag-neo text-signature mb-6 inline-block", children: "Capabilities" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl text-foreground tracking-tight mb-4", children: "Professional presentations without the busywork" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-xl mx-auto", children: "Everything you need to create compelling client presentations at scale." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        variants: containerVariants,
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
        children: capabilities.map((cap) => {
          const Icon = cap.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              variants: itemVariants,
              className: "bg-card border-2 border-border rounded-lg p-8 hover:border-signature/30 transition-colors duration-200 group",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-signature/10 flex items-center justify-center mb-5 group-hover:bg-signature/20 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6 text-signature" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg text-foreground mb-3", children: cap.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: cap.description })
              ]
            },
            cap.title
          );
        })
      }
    )
  ] }) });
}
function WorkflowSection() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const steps = [
    {
      step: "01",
      title: "Input your content",
      description: "Paste research, upload data, or describe what you need. The AI analyzes your input to determine the right slide structure."
    },
    {
      step: "02",
      title: "AI builds the deck",
      description: "Slides are generated with appropriate types -- titles, content, charts, comparisons. Data is automatically visualized."
    },
    {
      step: "03",
      title: "Refine and brand",
      description: "Apply your custom theme, adjust individual slides, edit copy, and reorder. Full control over the final product."
    },
    {
      step: "04",
      title: "Present or export",
      description: "Use the built-in viewer with transitions or export to PPTX. Share directly with clients from the platform."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1200px] px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        ref,
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.6 },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag-neo text-signature mb-6 inline-block", children: "Workflow" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl text-foreground tracking-tight mb-4", children: "Four steps to a polished deck" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-8", children: steps.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
        transition: { duration: 0.5, delay: index * 0.1 },
        className: "flex items-start gap-5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-lg bg-signature/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-signature text-lg", children: item.step }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-foreground mb-2", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: item.description })
          ] })
        ]
      },
      item.step
    )) })
  ] }) });
}
function CTASection() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 lg:py-32 bg-muted/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-4xl px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 20 },
      animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
      transition: { duration: 0.6 },
      className: "text-center",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight mb-6", children: [
          "Build decks that impress,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-signature", children: "in minutes" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground mb-10 max-w-lg mx-auto", children: "Stop spending hours on slide design. Let AI handle the heavy lifting while your team focuses on strategy and client relationships." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://app.ozzios.com/sign-up",
            className: "inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200",
            children: [
              "Start free trial",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-4 h-4" }),
            "SOC 2 Compliant"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline text-border", children: "|" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "GDPR Ready" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline text-border", children: "|" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "99.9% Uptime SLA" })
        ] })
      ]
    }
  ) }) });
}
function PresentationsView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PainPointsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SolutionSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CapabilitiesSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WorkflowSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
function PresentationsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LandingLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(PresentationsView, {}) });
}
export {
  PresentationsPage as component
};
