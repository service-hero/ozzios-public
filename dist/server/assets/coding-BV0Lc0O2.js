import { n as jsxRuntimeExports, a as reactExports } from "./worker-entry-DUbV-qEz.js";
import { e as Code, S as Share2, B as Brain, A as AnimatePresence, L as LandingLayout } from "./LandingLayout-BFxFbzxM.js";
import { m as motion, A as ArrowRight } from "./proxy-BEnWwJWi.js";
import { L as Link2 } from "./link-2-CXG8b97B.js";
import { c as createLucideIcon } from "./createLucideIcon-OQXTLfCE.js";
import { S as Search } from "./search-DUL7xjOG.js";
import { T as Target } from "./target-CuMYRJyQ.js";
import { T as TrendingUp } from "./trending-up-5m60Ya75.js";
import { L as LoaderCircle } from "./loader-circle-BvgboRpN.js";
import { C as CircleCheck } from "./circle-check-CFGtU0xv.js";
import { u as useInView } from "./use-in-view-DoLVnWF9.js";
import { C as Clock } from "./clock-oQ2YqCyM.js";
import { L as Lock } from "./lock-40EwUw2a.js";
import { S as Save } from "./save-DAF9fTV9.js";
import { C as ChartColumn } from "./chart-column-BodL8QE9.js";
import { A as Activity } from "./activity-kk088lx6.js";
import { S as Shield } from "./shield-CRI1Lu_S.js";
import { G as Globe } from "./globe-BwXwyD0b.js";
import { C as Check } from "./check-DYvJBUaI.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "./router-BLJT3Mxm.js";
import "./utils-QXBWQHlM.js";
import "./button-CtEClRbA.js";
import "./menu-Bt53Wknu.js";
const __iconNode$5 = [
  [
    "path",
    {
      d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
      key: "18u6gg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
];
const Camera = createLucideIcon("camera", __iconNode$5);
const __iconNode$4 = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
];
const Copy = createLucideIcon("copy", __iconNode$4);
const __iconNode$3 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "m14.5 12.5-5 5", key: "b62r18" }],
  ["path", { d: "m9.5 12.5 5 5", key: "1rk7el" }]
];
const FileX = createLucideIcon("file-x", __iconNode$2);
const __iconNode$1 = [
  ["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1", key: "f1a2em" }],
  ["rect", { width: "9", height: "7", x: "3", y: "14", rx: "1", key: "jqznyg" }],
  ["rect", { width: "5", height: "7", x: "16", y: "14", rx: "1", key: "q5h2i8" }]
];
const LayoutTemplate = createLucideIcon("layout-template", __iconNode$1);
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "17", x2: "22", y1: "8", y2: "13", key: "3nzzx3" }],
  ["line", { x1: "22", x2: "17", y1: "8", y2: "13", key: "1swrse" }]
];
const UserX = createLucideIcon("user-x", __iconNode);
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
const painPoints = [
  {
    icon: Clock,
    title: "Reports take hours to build",
    description: "Your team spends half a day pulling data, formatting charts, and wrestling with layout tools. By the time the report is done, the data is already stale."
  },
  {
    icon: FileX,
    title: "Static PDFs are dead on arrival",
    description: "You send a 20-page PDF and the client skims page one. No interactivity, no drill-down, no way to explore the data that matters to them."
  },
  {
    icon: UserX,
    title: "Customizing per client requires a developer",
    description: "Every client wants their own branding, their own metrics, their own layout. Without a dev on staff, you are stuck with one-size-fits-all templates."
  },
  {
    icon: Lock,
    title: "No way to share interactive dashboards",
    description: "Your internal tools look great, but there is no clean way to give clients a live, branded view of their performance data without granting platform access."
  }
];
const capabilities = [
  {
    icon: Brain,
    title: "AI-Generated React Apps",
    description: "Describe what you need and the AI agent writes a complete React application -- charts, tables, layouts, and styling -- in an isolated sandbox."
  },
  {
    icon: Link2,
    title: "Live Shareable URLs",
    description: "Every generated report gets a unique, live URL. Send it to clients and they see an interactive webpage, not a static file."
  },
  {
    icon: LayoutTemplate,
    title: "Pre-built Template Library",
    description: "Start from battle-tested templates for SEO audits, ad performance, social engagement, traffic analytics, and executive KPI reports."
  },
  {
    icon: Save,
    title: "Save Custom Templates",
    description: "Built the perfect report layout? Save it as a reusable template. Apply it to any client with one click, keeping your agency output consistent."
  },
  {
    icon: ChartColumn,
    title: "Interactive Charts & Dashboards",
    description: "Bar charts, line graphs, pie charts, data tables, and KPI cards -- all interactive and responsive. Clients can explore their own data."
  },
  {
    icon: Camera,
    title: "Screenshot Capture",
    description: "Automatic thumbnail generation for every report. Use screenshots in emails, proposals, or your client portal as visual previews."
  }
];
const templateCategories = [
  {
    icon: Search,
    title: "SEO Audit",
    description: "Technical scores, keyword rankings, backlink analysis, and page speed metrics in a scannable format."
  },
  {
    icon: Target,
    title: "Ad Performance",
    description: "ROAS, CPC, conversion funnels, and spend breakdowns across Google and Meta campaigns."
  },
  {
    icon: Share2,
    title: "Social Engagement",
    description: "Post performance, follower growth, engagement rates, and content calendar analytics."
  },
  {
    icon: Activity,
    title: "Traffic Analytics",
    description: "Sessions, bounce rates, traffic sources, and conversion paths with trend comparisons."
  },
  {
    icon: TrendingUp,
    title: "Executive KPI",
    description: "High-level business metrics, revenue impact, and strategic goal tracking for C-suite clients."
  }
];
const reportTemplates = [
  {
    id: "seo",
    icon: Search,
    label: "SEO Audit",
    filename: "SEOAuditReport.tsx",
    accentColor: "text-emerald-500",
    accentBg: "from-emerald-500 to-emerald-400",
    codeLines: [
      'import { BarChart, Card, Score } from "./ui";',
      "",
      "export function SEOAuditReport({ data }) {",
      "  const { scores, keywords, issues } = data;",
      "",
      "  return (",
      '    <Dashboard title="SEO Audit">',
      "      <MetricsRow>",
      '        <ScoreCard label="Health" value={scores.health} />',
      '        <ScoreCard label="Speed" value={scores.speed} />',
      '        <ScoreCard label="SEO" value={scores.seo} />',
      '        <ScoreCard label="A11y" value={scores.a11y} />',
      "      </MetricsRow>",
      "      <BarChart data={keywords} />",
      "      <IssuesTable data={issues} />",
      "    </Dashboard>",
      "  );",
      "}"
    ],
    metrics: [
      { label: "Health", value: "92", color: "text-emerald-500" },
      { label: "Speed", value: "87", color: "text-blue-500" },
      { label: "SEO", value: "95", color: "text-emerald-500" },
      { label: "A11y", value: "88", color: "text-violet-500" }
    ],
    chartBars: [85, 72, 90, 65, 78, 92, 70, 88, 95, 60, 82, 76],
    chartLabel: "Keyword Rankings",
    tableHeaders: ["Issue", "Impact", "Status"],
    tableRows: [
      ["Missing meta desc.", "High", "Open"],
      ["Slow LCP (3.2s)", "Critical", "Open"],
      ["Broken backlinks (3)", "Medium", "Fixed"]
    ],
    shareUrl: "reports.ozzios.com/r/seo-audit-acme"
  },
  {
    id: "ads",
    icon: Target,
    label: "Ad Performance",
    filename: "AdPerformanceReport.tsx",
    accentColor: "text-blue-500",
    accentBg: "from-blue-500 to-blue-400",
    codeLines: [
      'import { LineChart, Card, Funnel } from "./ui";',
      "",
      "export function AdPerformanceReport({ data }) {",
      "  const { spend, conversions, roas } = data;",
      "",
      "  return (",
      '    <Dashboard title="Ad Performance">',
      "      <MetricsRow>",
      '        <KPICard label="Spend" value={spend.total} />',
      '        <KPICard label="ROAS" value={roas.avg} />',
      '        <KPICard label="CPC" value={spend.cpc} />',
      '        <KPICard label="Conv." value={conversions} />',
      "      </MetricsRow>",
      "      <LineChart data={spend.daily} />",
      "      <ConversionFunnel data={roas} />",
      "    </Dashboard>",
      "  );",
      "}"
    ],
    metrics: [
      { label: "Spend", value: "$12.4K", color: "text-blue-500" },
      { label: "ROAS", value: "4.8x", color: "text-emerald-500" },
      { label: "CPC", value: "$0.42", color: "text-amber-500" },
      { label: "Conv.", value: "2,847", color: "text-violet-500" }
    ],
    chartBars: [45, 62, 58, 75, 82, 68, 90, 85, 72, 95, 88, 78],
    chartLabel: "Daily Spend",
    tableHeaders: ["Campaign", "Spend", "ROAS"],
    tableRows: [
      ["Facebook Retargeting", "$4.2K", "6.1x"],
      ["Google Search Brand", "$3.8K", "5.4x"],
      ["Instagram Stories", "$2.1K", "3.2x"]
    ],
    shareUrl: "reports.ozzios.com/r/ads-perf-acme"
  },
  {
    id: "social",
    icon: Share2,
    label: "Social Engagement",
    filename: "SocialEngagementReport.tsx",
    accentColor: "text-pink-500",
    accentBg: "from-pink-500 to-pink-400",
    codeLines: [
      'import { AreaChart, Card, Feed } from "./ui";',
      "",
      "export function SocialReport({ data }) {",
      "  const { followers, engagement, posts } = data;",
      "",
      "  return (",
      '    <Dashboard title="Social Engagement">',
      "      <MetricsRow>",
      '        <KPICard label="Followers" value={followers} />',
      '        <KPICard label="Eng. Rate" value={engagement} />',
      '        <KPICard label="Reach" value={data.reach} />',
      '        <KPICard label="Posts" value={posts.count} />',
      "      </MetricsRow>",
      "      <AreaChart data={followers.growth} />",
      "      <PostFeed data={posts.top} />",
      "    </Dashboard>",
      "  );",
      "}"
    ],
    metrics: [
      { label: "Followers", value: "24.8K", color: "text-pink-500" },
      { label: "Eng. Rate", value: "4.2%", color: "text-emerald-500" },
      { label: "Reach", value: "142K", color: "text-blue-500" },
      { label: "Posts", value: "47", color: "text-amber-500" }
    ],
    chartBars: [40, 55, 48, 65, 72, 60, 85, 78, 68, 92, 80, 88],
    chartLabel: "Follower Growth",
    tableHeaders: ["Post", "Reach", "Engagement"],
    tableRows: [
      ["Product launch reel", "18.2K", "8.4%"],
      ["Behind the scenes", "12.6K", "6.1%"],
      ["Client testimonial", "9.8K", "5.7%"]
    ],
    shareUrl: "reports.ozzios.com/r/social-acme"
  },
  {
    id: "kpi",
    icon: TrendingUp,
    label: "Executive KPI",
    filename: "ExecutiveKPIReport.tsx",
    accentColor: "text-violet-500",
    accentBg: "from-violet-500 to-violet-400",
    codeLines: [
      'import { ComboChart, Card, Gauge } from "./ui";',
      "",
      "export function ExecutiveKPI({ data }) {",
      "  const { revenue, goals, channels } = data;",
      "",
      "  return (",
      '    <Dashboard title="Executive KPI">',
      "      <MetricsRow>",
      '        <KPICard label="Revenue" value={revenue} />',
      '        <KPICard label="MRR" value={data.mrr} />',
      '        <KPICard label="CAC" value={data.cac} />',
      '        <KPICard label="LTV" value={data.ltv} />',
      "      </MetricsRow>",
      "      <ComboChart data={revenue.monthly} />",
      "      <GoalTracker data={goals} />",
      "    </Dashboard>",
      "  );",
      "}"
    ],
    metrics: [
      { label: "Revenue", value: "$248K", color: "text-violet-500" },
      { label: "MRR", value: "$42K", color: "text-emerald-500" },
      { label: "CAC", value: "$18", color: "text-blue-500" },
      { label: "LTV", value: "$840", color: "text-amber-500" }
    ],
    chartBars: [55, 68, 72, 80, 75, 88, 82, 90, 85, 95, 92, 98],
    chartLabel: "Monthly Revenue",
    tableHeaders: ["Goal", "Progress", "Status"],
    tableRows: [
      ["Q1 Revenue Target", "94%", "On Track"],
      ["New Clients (15)", "12/15", "At Risk"],
      ["Retention Rate 95%", "97.2%", "Exceeded"]
    ],
    shareUrl: "reports.ozzios.com/r/kpi-exec-acme"
  }
];
const PHASE_DURATIONS = {
  coding: 3200,
  building: 1800,
  preview: 3e3,
  share: 2500
};
function AnimatedCodeEditor({
  template,
  phase,
  visibleLines
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full bg-[#1e1e2e] rounded-l-none overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0 border-b border-white/10 bg-[#181825]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 py-2 bg-[#1e1e2e] border-r border-white/10 border-b-2 border-b-signature", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Code, { className: "w-3 h-3 text-signature" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-gray-300 font-mono", children: template.filename })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 px-3 py-2 text-gray-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono", children: "ui.tsx" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-hidden p-3 font-mono text-[10px] sm:text-[11px] leading-[1.7]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.3 },
        children: template.codeLines.map((line, i) => {
          const isVisible = i < visibleLines;
          const isCurrentLine = i === visibleLines - 1 && phase === "coding";
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -8 },
              animate: isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 },
              transition: { duration: 0.15, delay: 0 },
              className: "flex",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 text-right mr-4 text-gray-600 select-none shrink-0", children: i + 1 }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { text: line }),
                  isCurrentLine && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.span,
                    {
                      className: "inline-block w-[2px] h-[14px] bg-signature ml-0.5 align-middle",
                      animate: { opacity: [1, 0] },
                      transition: { duration: 0.6, repeat: Infinity, repeatType: "reverse" }
                    }
                  )
                ] })
              ]
            },
            i
          );
        })
      },
      template.id
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-3 py-1.5 border-t border-white/10 bg-[#181825]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        phase === "coding" && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-[9px] text-gray-400", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3 h-3 animate-spin text-signature" }),
          "Agent writing code..."
        ] }),
        phase === "building" && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-[9px] text-amber-400", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3 h-3 animate-spin" }),
          "Building in E2B sandbox..."
        ] }),
        (phase === "preview" || phase === "share") && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-[9px] text-emerald-400", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3" }),
          "Build complete"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-gray-500 font-mono", children: "TypeScript React" })
    ] })
  ] });
}
function CodeLine({ text }) {
  if (!text.trim()) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: " " });
  const keywords = ["import", "export", "function", "const", "return", "from"];
  const jsxTags = /(<\/?[A-Z][A-Za-z]*)/g;
  const strings = /(["'][^"']*["'])/g;
  const segments = [];
  keywords.forEach((kw) => {
    const regex = new RegExp(`\\b(${kw})\\b`, "g");
    let match2;
    while ((match2 = regex.exec(text)) !== null) {
      segments.push({
        text: match2[1],
        className: "text-purple-400",
        index: match2.index
      });
    }
  });
  let match;
  while ((match = jsxTags.exec(text)) !== null) {
    segments.push({
      text: match[1],
      className: "text-blue-400",
      index: match.index
    });
  }
  while ((match = strings.exec(text)) !== null) {
    segments.push({
      text: match[1],
      className: "text-emerald-400",
      index: match.index
    });
  }
  if (segments.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-300", children: text });
  }
  segments.sort((a, b) => a.index - b.index);
  const parts = [];
  let lastEnd = 0;
  segments.forEach((seg, i) => {
    if (seg.index > lastEnd) {
      parts.push(
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-300", children: text.slice(lastEnd, seg.index) }, `t-${i}`)
      );
    }
    if (seg.index >= lastEnd) {
      parts.push(
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: seg.className, children: seg.text }, `s-${i}`)
      );
      lastEnd = seg.index + seg.text.length;
    }
  });
  if (lastEnd < text.length) {
    parts.push(
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-300", children: text.slice(lastEnd) }, "end")
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: parts });
}
function LivePreviewPanel({
  template,
  phase
}) {
  const showMetrics = phase === "preview" || phase === "share";
  const showChart = phase === "preview" || phase === "share";
  const showTable = phase === "preview" || phase === "share";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full bg-background overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-3 py-2 border-b border-border bg-muted/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-3 h-3 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground font-mono", children: "Preview" })
      ] }),
      (phase === "preview" || phase === "share") && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          className: "flex items-center gap-1.5 px-1.5 py-0.5 rounded bg-green-100 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-1 rounded-full bg-green-500 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[7px] font-medium text-green-600 dark:text-green-400", children: "LIVE" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-hidden p-3", children: [
      phase === "coding" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center h-full gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            animate: { rotate: 360 },
            transition: { duration: 2, repeat: Infinity, ease: "linear" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-6 h-6 text-muted-foreground" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground", children: "Waiting for code..." })
      ] }),
      phase === "building" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center h-full gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            animate: { rotate: 360 },
            transition: { duration: 1.5, repeat: Infinity, ease: "linear" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-8 h-8 text-signature" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-foreground font-medium mb-1", children: "Building app..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Compiling React in E2B sandbox" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-48", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "h-1 rounded-full bg-muted overflow-hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "h-full rounded-full bg-signature",
                initial: { width: "0%" },
                animate: { width: "100%" },
                transition: { duration: 1.6, ease: "easeInOut" }
              }
            )
          }
        ) })
      ] }),
      (phase === "preview" || phase === "share") && /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -10 },
          transition: { duration: 0.4 },
          className: "space-y-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-5 h-5 rounded bg-gradient-to-br ${template.accentBg} flex items-center justify-center`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(template.icon, { className: "w-3 h-3 text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-semibold text-foreground", children: [
                  template.label,
                  " Report"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-muted-foreground", children: "Live Preview" })
            ] }),
            showMetrics && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-1.5", children: template.metrics.map((metric, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.3, delay: i * 0.1 },
                className: "p-1.5 rounded-lg bg-muted/50 border border-border text-center",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[7px] text-muted-foreground uppercase", children: metric.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-[12px] font-semibold ${metric.color}`, children: metric.value })
                ]
              },
              metric.label
            )) }),
            showChart && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.4, delay: 0.4 },
                className: "p-2 rounded-lg bg-muted/50 border border-border",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-muted-foreground", children: template.chartLabel }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[7px] text-muted-foreground", children: "Last 30 days" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-[3px] h-12", children: template.chartBars.map((height, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      className: `flex-1 rounded-sm bg-gradient-to-t ${template.accentBg} opacity-80`,
                      initial: { height: 0 },
                      animate: { height: `${height}%` },
                      transition: {
                        duration: 0.4,
                        delay: 0.5 + idx * 0.05,
                        ease: [0.25, 0.1, 0.25, 1]
                      }
                    },
                    idx
                  )) })
                ]
              }
            ),
            showTable && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.4, delay: 0.8 },
                className: "rounded-lg bg-muted/50 border border-border overflow-hidden",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 px-2 py-1 bg-muted/80 border-b border-border", children: template.tableHeaders.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[7px] text-muted-foreground uppercase", children: h }, h)) }),
                  template.tableRows.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, x: -5 },
                      animate: { opacity: 1, x: 0 },
                      transition: { duration: 0.3, delay: 0.9 + i * 0.1 },
                      className: "grid grid-cols-3 gap-2 px-2 py-1 border-b border-border/50 last:border-0",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-foreground truncate", children: row[0] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-muted-foreground", children: row[1] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[8px] ${row[2].includes("+") || row[2] === "On Track" || row[2] === "Exceeded" || row[2] === "Fixed" ? "text-emerald-500" : row[2] === "At Risk" || row[2] === "Open" || row[2] === "Critical" ? "text-amber-500" : "text-muted-foreground"}`, children: row[2] })
                      ]
                    },
                    i
                  ))
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 px-1.5 py-0.5 rounded bg-muted/50 border border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[7px] text-muted-foreground", children: "Powered by" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[7px] text-muted-foreground font-medium", children: "e2b.dev" })
            ] }) })
          ]
        },
        `preview-${template.id}`
      ) })
    ] })
  ] });
}
function ShareURLBar({
  url,
  show
}) {
  const [copied, setCopied] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!show) setCopied(false);
  }, [show]);
  const handleCopy = reactExports.useCallback(() => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: show && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 10, height: 0 },
      animate: { opacity: 1, y: 0, height: "auto" },
      exit: { opacity: 0, y: 10, height: 0 },
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
      className: "border-t border-border bg-muted/50",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 py-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-emerald-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-medium text-foreground", children: "Report ready!" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-background border border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { className: "w-3 h-3 text-muted-foreground shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground font-mono truncate", children: url }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: handleCopy,
              className: "ml-auto shrink-0 flex items-center gap-1 px-2 py-0.5 rounded bg-signature/10 hover:bg-signature/20 transition-colors",
              children: [
                copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3 text-signature" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3 h-3 text-signature" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-signature font-medium", children: copied ? "Copied!" : "Copy" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "shrink-0 flex items-center gap-1 px-2 py-1.5 rounded-md bg-signature text-white hover:bg-signature/90 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-medium", children: "Open" })
        ] })
      ] })
    }
  ) });
}
function HeroSection() {
  const [activeTemplateIndex, setActiveTemplateIndex] = reactExports.useState(0);
  const [phase, setPhase] = reactExports.useState("coding");
  const [visibleLines, setVisibleLines] = reactExports.useState(0);
  const animationRef = reactExports.useRef({ cancelled: false });
  const template = reportTemplates[activeTemplateIndex];
  reactExports.useEffect(() => {
    const controller = { cancelled: false };
    animationRef.current = controller;
    const runCycle = async () => {
      setVisibleLines(0);
      setPhase("coding");
      const totalLines = reportTemplates[activeTemplateIndex].codeLines.length;
      const lineDelay = PHASE_DURATIONS.coding / totalLines;
      for (let i = 1; i <= totalLines; i++) {
        if (controller.cancelled) return;
        await new Promise((resolve) => setTimeout(resolve, lineDelay));
        if (controller.cancelled) return;
        setVisibleLines(i);
      }
      if (controller.cancelled) return;
      await new Promise((resolve) => setTimeout(resolve, 300));
      if (controller.cancelled) return;
      setPhase("building");
      await new Promise((resolve) => setTimeout(resolve, PHASE_DURATIONS.building));
      if (controller.cancelled) return;
      setPhase("preview");
      await new Promise((resolve) => setTimeout(resolve, PHASE_DURATIONS.preview));
      if (controller.cancelled) return;
      setPhase("share");
      await new Promise((resolve) => setTimeout(resolve, PHASE_DURATIONS.share));
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-pattern opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", animate: "visible", variants: containerVariants, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tag-neo rounded-full bg-signature/10 border-signature mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Code, { className: "w-4 h-4 text-signature" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold text-signature uppercase tracking-wider", children: "Coding" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-display font-display text-foreground mb-6", children: [
          "AI agents that build",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-signature", children: "live reports" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto mb-8", children: "Your AI agents generate interactive React dashboards and reports in isolated sandboxes. Get a shareable URL and send it straight to your client -- no developers, no static PDFs." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Code, { className: "w-4 h-4 text-signature" }),
            "Live Preview"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { className: "w-4 h-4 text-signature" }),
            "Shareable Links"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutTemplate, { className: "w-4 h-4 text-signature" }),
            "Pre-built Templates"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "w-full max-w-5xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl border border-border bg-background overflow-hidden shadow-2xl shadow-black/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-[#FF5F57]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-[#FFBD2E]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-[#28CA41]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-4 py-1.5 rounded-lg bg-background border border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-green-500/50" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground font-mono", children: "app.ozzios.com/sandbox" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0 border-b border-border bg-muted/30 overflow-x-auto scrollbar-hidden", children: [
          reportTemplates.map((t, i) => {
            const Icon = t.icon;
            const isActive = i === activeTemplateIndex;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => {
                  if (i !== activeTemplateIndex) {
                    animationRef.current.cancelled = true;
                    setActiveTemplateIndex(i);
                  }
                },
                className: `flex items-center gap-1.5 px-3 py-2 text-[10px] font-medium transition-all duration-200 border-b-2 shrink-0 ${isActive ? "border-signature text-foreground bg-background" : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-3 h-3 ${isActive ? "text-signature" : ""}` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: t.label })
                ]
              },
              t.id
            );
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-1.5 px-3 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "w-1 h-1 rounded-full bg-signature",
                animate: { opacity: [0.3, 1, 0.3] },
                transition: { duration: 2, repeat: Infinity }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-muted-foreground", children: "Auto" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col md:flex-row", style: { minHeight: "380px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block md:w-1/2 border-r border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            AnimatedCodeEditor,
            {
              template,
              phase,
              visibleLines
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden border-b border-border bg-[#1e1e2e]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 py-2 border-b border-white/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Code, { className: "w-3 h-3 text-signature" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-gray-300 font-mono", children: template.filename }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto", children: [
                phase === "coding" && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-[9px] text-gray-400", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3 h-3 animate-spin text-signature" }),
                  "Writing..."
                ] }),
                phase === "building" && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-[9px] text-amber-400", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3 h-3 animate-spin" }),
                  "Building..."
                ] }),
                (phase === "preview" || phase === "share") && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-[9px] text-emerald-400", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3" }),
                  "Done"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 font-mono text-[9px] leading-[1.6] max-h-[100px] overflow-hidden", children: [
              template.codeLines.slice(0, Math.min(visibleLines, 6)).map((line, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 text-right mr-3 text-gray-600 select-none", children: i + 1 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { text: line })
              ] }, i)),
              visibleLines > 6 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-gray-500 pl-8", children: [
                "... ",
                template.codeLines.length - 6,
                " more lines"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 md:w-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LivePreviewPanel, { template, phase }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShareURLBar, { url: template.shareUrl, show: phase === "share" })
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl text-foreground tracking-tight mb-4", children: "Client reporting is broken" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-xl mx-auto", children: "Agencies waste hours building reports that clients barely look at. There has to be a better way." })
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-5 group-hover:bg-destructive/20 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6 text-destructive" }) }),
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
  const steps = [
    {
      step: "01",
      title: "Agent generates code",
      description: "Tell your AI agent what you need -- an SEO audit report, an ad performance dashboard, a KPI summary. It writes a complete React application with real data visualizations."
    },
    {
      step: "02",
      title: "Live preview in browser",
      description: "The app runs instantly in an isolated E2B sandbox. See exactly what your client will see -- interactive charts, responsive layout, live data -- before sharing."
    },
    {
      step: "03",
      title: "Share link with client",
      description: "Copy the shareable URL and send it. Your client opens a polished, interactive report in their browser. No downloads, no logins, no friction."
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag-neo text-signature mb-6 inline-block", children: "How It Works" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl text-foreground tracking-tight mb-4", children: "From prompt to shareable report in minutes" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: steps.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
        transition: { duration: 0.5, delay: index * 0.15 },
        className: "text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-signature/10 flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-signature text-xl", children: item.step }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-foreground mb-3", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: item.description })
        ]
      },
      item.step
    )) })
  ] }) });
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl text-foreground tracking-tight mb-4", children: "Everything your reports need, nothing they don't" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-xl mx-auto", children: "AI-generated, fully interactive, and shareable in seconds." })
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
function TemplatesSection() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag-neo text-signature mb-6 inline-block", children: "Templates" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl text-foreground tracking-tight mb-4", children: "Start with a template, make it yours" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-xl mx-auto", children: "Pre-built report templates for the most common agency deliverables. Customize everything or build from scratch." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        variants: containerVariants,
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[900px] mx-auto",
        children: templateCategories.map((template) => {
          const Icon = template.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              variants: itemVariants,
              className: "bg-card border-2 border-border rounded-lg p-6 hover:border-signature/30 transition-colors duration-200 group",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-signature/10 flex items-center justify-center mb-4 group-hover:bg-signature/20 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-signature" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground text-sm mb-2", children: template.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: template.description })
              ]
            },
            template.title
          );
        })
      }
    )
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
          "Reports that impress,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-signature", children: "in minutes" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground mb-10 max-w-lg mx-auto", children: 'Stop sending static PDFs. Let AI agents build interactive, shareable reports that make your clients say "how did you do that?"' }),
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
function CodingView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PainPointsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SolutionSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CapabilitiesSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TemplatesSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
function CodingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LandingLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodingView, {}) });
}
export {
  CodingPage as component
};
