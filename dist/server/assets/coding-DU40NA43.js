import { j as jsxRuntimeExports, r as reactExports, A as AnimatePresence, m as motion, u as useInView } from "./vendor-framer-DZFBeC81.js";
import { L as LandingLayout } from "./LandingLayout-D-c6g3QV.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { D as DeferredSection } from "./lazy-section-B65XiZaR.js";
import { F as FeatureHero, P as PainPointsBlock, C as CapabilitiesBlock, a as FeatureCTABlock, K as Kbd, S as SectionHeader, i as innerContainerVariants, b as innerItemVariants, c as SectionHeading } from "./_landing-primitives-BgwWv7GL.js";
import { aN as Code, c as Clock, a_ as FileX, a$ as UserX, L as Lock, n as Brain, b0 as Link2, b1 as LayoutTemplate, aT as Save, x as ChartColumn, b2 as Camera, f as Search, V as Target, a3 as Share2, aU as Activity, _ as TrendingUp, b3 as Copy, b4 as ExternalLink } from "./vendor-icons-BFmuwI-v.js";
import "./vendor-react-MO5I_vdy.js";
import "./vendor-router-DD_41qJ4.js";
import "./vendor-radix-Bd9PM-r6.js";
import "node:async_hooks";
const painPoints = [
  {
    icon: Clock,
    title: "Reports take hours to build",
    description: "Your team spends half a day pulling data, formatting charts, and wrestling with layout tools. By the time the report is done, the data is already stale."
  },
  {
    icon: FileX,
    title: "Static PDFs are dead on arrival",
    description: "You send a 20-page PDF and the customer skims page one. No interactivity, no drill-down, no way to explore the data that matters."
  },
  {
    icon: UserX,
    title: "Customizing per customer requires a developer",
    description: "Every customer wants their own branding, their own metrics, their own layout. Without a dev on staff, you are stuck with templates."
  },
  {
    icon: Lock,
    title: "No way to share interactive dashboards",
    description: "Your internal tools look great, but there is no clean way to give customers a live, branded view of their performance data."
  }
];
const capabilities = [
  {
    icon: Brain,
    title: "AI-generated React apps",
    benefit: "Describe → deploy",
    description: "Describe what you need and the AI agent writes a complete React application — charts, tables, layouts, styling — in a secure cloud workspace."
  },
  {
    icon: Link2,
    title: "Live shareable URLs",
    benefit: "Interactive, not static",
    description: "Every generated report gets a unique, live URL. Send it to customers and they see an interactive webpage, not a static file."
  },
  {
    icon: LayoutTemplate,
    title: "Pre-built template library",
    benefit: "Start from proven layouts",
    description: "Search performance, ad performance, social engagement, traffic analytics, and executive KPI reports — battle-tested."
  },
  {
    icon: Save,
    title: "Save custom templates",
    benefit: "One click to reuse",
    description: "Built the perfect report? Save it as a reusable template. Apply it to any customer with one click for consistent output."
  },
  {
    icon: ChartColumn,
    title: "Interactive charts & dashboards",
    benefit: "Customers explore their data",
    description: "Bar charts, line graphs, pie charts, data tables, and KPI cards — all interactive and responsive."
  },
  {
    icon: Camera,
    title: "Screenshot capture",
    benefit: "Auto-thumbnails for emails",
    description: "Automatic thumbnail generation for every report. Use screenshots in emails, proposals, or dashboards as visual previews."
  }
];
const templateCategories = [
  { icon: Search, title: "Search performance", description: "Visibility trends, top pages, keyword movement, lead-focused search metrics." },
  { icon: Target, title: "Ad performance", description: "ROAS, CPC, conversion funnels, spend breakdowns across Google and Meta." },
  { icon: Share2, title: "Social engagement", description: "Post performance, follower growth, engagement rates, content calendar." },
  { icon: Activity, title: "Traffic analytics", description: "Sessions, bounce rates, traffic sources, conversion paths with trends." },
  { icon: TrendingUp, title: "Executive KPI", description: "High-level business metrics, revenue impact, strategic goal tracking." }
];
const codeSnippets = [
  {
    filename: "SearchPerformanceReport.tsx",
    lines: [
      'import { Dashboard, BarChart, ScoreCard } from "./ui";',
      "",
      "export function SearchPerformanceReport({ data }) {",
      "  return (",
      '    <Dashboard title="Search Performance">',
      '      <ScoreCard label="Visibility" value={92} />',
      '      <ScoreCard label="Leads" value={187} />',
      "      <BarChart data={data.topPages} />",
      "    </Dashboard>",
      "  );",
      "}"
    ]
  },
  {
    filename: "AdPerformanceReport.tsx",
    lines: [
      'import { Funnel, LineChart } from "./ui";',
      "",
      "export function AdPerformanceReport({ data }) {",
      "  const { spend, conversions, roas } = data;",
      "",
      "  return (",
      '    <Dashboard title="Ad Performance">',
      '      <ScoreCard label="ROAS" value={roas} />',
      "      <Funnel data={conversions} />",
      "      <LineChart data={spend} />",
      "    </Dashboard>",
      "  );",
      "}"
    ]
  }
];
function CodingHeroPreview() {
  const [snippetIdx, setSnippetIdx] = reactExports.useState(0);
  const [visibleLines, setVisibleLines] = reactExports.useState(0);
  const cancelRef = reactExports.useRef({ cancelled: false });
  reactExports.useEffect(() => {
    cancelRef.current.cancelled = true;
    cancelRef.current = { cancelled: false };
    const ctrl = cancelRef.current;
    const snippet2 = codeSnippets[snippetIdx];
    let i = 0;
    let timer = null;
    const reveal = () => {
      if (ctrl.cancelled) return;
      setVisibleLines(i);
      if (i >= snippet2.lines.length) {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "pointer-events-none absolute -inset-x-4 -bottom-10 top-10 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_50%_100%,rgba(196,88,63,0.18),transparent_70%)] blur-3xl"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-xl border border-foreground/15 bg-foreground shadow-[0_30px_80px_-30px_rgba(34,27,22,0.45)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-4 py-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#FF5F57]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#28CA41]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/55", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Code, { className: "h-3 w-3 text-signature" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.span,
            {
              initial: { opacity: 0, y: 4 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -4 },
              transition: { duration: 0.18 },
              className: "text-white/85",
              children: snippet.filename
            },
            snippet.filename
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/55", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-mint" }),
          "Live"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[11px] leading-[1.7] text-white/85", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.18 },
          className: "px-4 py-4",
          children: snippet.lines.map((line, i) => {
            const isVisible = i < visibleLines;
            const isCurrent = i === visibleLines - 1;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -6 },
                animate: isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -6 },
                transition: { duration: 0.15 },
                className: "flex",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-4 w-6 shrink-0 select-none text-right text-white/25", children: i + 1 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SyntaxLine, { text: line }),
                    isCurrent ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.span,
                      {
                        className: "ml-0.5 inline-block h-[12px] w-[2px] -translate-y-px bg-signature align-middle",
                        animate: { opacity: [1, 0] },
                        transition: { duration: 0.6, repeat: Infinity, repeatType: "reverse" }
                      }
                    ) : null
                  ] })
                ]
              },
              i
            );
          })
        },
        snippet.filename
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-t border-white/10 bg-white/[0.04] px-4 py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-white/45", children: "TypeScript React · Cloud workspace" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/55", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Kbd, { tone: "dark", className: "h-[16px] min-w-[16px] text-[9px]", children: "⌘" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Kbd, { tone: "dark", className: "h-[16px] min-w-[16px] text-[9px]", children: "S" }),
          "deploy"
        ] })
      ] })
    ] })
  ] });
}
function SyntaxLine({ text }) {
  if (!text.trim()) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: " " });
  const keywords = ["import", "export", "function", "const", "return", "from"];
  let html = text;
  html = html.replace(/(["'][^"']*["'])/g, '<span class="text-[#c3e88d]">$1</span>');
  html = html.replace(/(&lt;\/?[A-Z][A-Za-z]*)/g, '<span class="text-[#82aaff]">$1</span>');
  html = html.replace(/(<\/?[A-Z][A-Za-z]*)/g, '<span class="text-[#82aaff]">$1</span>');
  keywords.forEach((kw) => {
    html = html.replace(new RegExp(`\\b(${kw})\\b`, "g"), '<span class="text-[#c792ea]">$1</span>');
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/80", dangerouslySetInnerHTML: { __html: html } });
}
function TemplatesSection() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative isolate overflow-hidden border-t border-border/50 py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        ref,
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.6 },
        className: "mb-12 lg:mb-14",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeader,
          {
            eyebrow: "Template library",
            headlineLines: ["Start from proven layouts.", "Customize from there."],
            sub: "Five report categories battle-tested for service businesses. Each fully customizable."
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        variants: innerContainerVariants,
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
        children: templateCategories.map((cat) => {
          const Icon = cat.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              variants: innerItemVariants,
              className: cn(
                "group/t relative cursor-pointer rounded-xl border border-border/60 bg-background p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:shadow-[0_14px_30px_-18px_rgba(34,27,22,0.25)]"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/60 bg-background text-foreground/70 transition-colors duration-200 group-hover/t:border-foreground/25 group-hover/t:bg-foreground group-hover/t:text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-[13.5px] font-semibold text-foreground", children: cat.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[11.5px] leading-[1.5] text-muted-foreground", children: cat.description })
              ]
            },
            cat.title
          );
        })
      }
    )
  ] }) });
}
function SharePreviewSection() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative isolate overflow-hidden border-t border-border/50 py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-[960px] px-4 sm:px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        ref,
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.6 },
        className: "mb-10",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeader,
          {
            eyebrow: "Live shareable URLs",
            headlineLines: ["One link.", "A live interactive report."],
            align: "center"
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.6, delay: 0.2 },
        className: "overflow-hidden rounded-xl border border-border/70 bg-background shadow-[0_18px_50px_-26px_rgba(34,27,22,0.30)]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/60 bg-muted/30 px-5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { label: "Share URL" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-5 py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-2 w-2 rounded-full bg-mint" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "flex-1 truncate font-mono text-[12.5px] text-foreground", children: "reports.ozzios.com / r / search-performance-acme" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "inline-flex h-8 items-center gap-1.5 rounded-md border border-border/60 bg-background px-2.5 text-[11px] font-medium text-foreground/70 transition-colors hover:bg-muted/40",
                "aria-label": "Copy link",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-3 w-3" }),
                  "Copy"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "inline-flex h-8 items-center gap-1.5 rounded-md border border-border/60 bg-background px-2.5 text-[11px] font-medium text-foreground/70 transition-colors hover:bg-muted/40",
                "aria-label": "Open report",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3" }),
                  "Open"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border/60 bg-muted/20 px-5 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/45", children: "Customer-branded · always live · no platform login required" }) })
        ]
      }
    )
  ] }) });
}
function CodingView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FeatureHero,
      {
        pillIcon: Code,
        pillLabel: "Reports & Code",
        pillSubtitle: "AI builds custom apps in a sandbox",
        headlineLines: ["Reports that customers", "actually open."],
        sub: "An AI agent writes a complete React app for every report you need — branded, interactive, and live at a unique URL. No developers required.",
        primaryCta: { label: "Generate a report", href: "https://app.ozzios.com/sign-up", shortcut: "S" },
        secondaryCta: { label: "See pricing", href: "/pricing" },
        rightSlot: /* @__PURE__ */ jsxRuntimeExports.jsx(CodingHeroPreview, {})
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      PainPointsBlock,
      {
        eyebrow: "The problem",
        headlineLines: ["Static reports", "are dying."],
        sub: "Customers do not read PDFs. They explore dashboards. The companies that switch win.",
        points: painPoints
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CapabilitiesBlock,
      {
        eyebrow: "Capabilities",
        headlineLines: ["AI-built React apps,", "on-demand."],
        sub: "A complete reporting platform powered by an AI agent that writes real React code in a secure cloud workspace.",
        capabilities
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TemplatesSection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SharePreviewSection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      FeatureCTABlock,
      {
        eyebrow: "Get started",
        headlineLines: ["Stop building reports.", "Start sending live ones."],
        sub: "Generate your first interactive report in minutes. The AI writes the code, deploys the app, and gives you a shareable URL.",
        primaryCta: { label: "Generate a report", href: "https://app.ozzios.com/sign-up", shortcut: "S" },
        secondaryCta: { label: "See pricing", href: "/pricing" },
        trust: [
          { value: "256-bit", label: "Encryption" },
          { value: "Secure", label: "Sandbox" },
          { value: "99.9%", label: "Uptime SLA" }
        ]
      }
    ) })
  ] });
}
function CodingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LandingLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodingView, {}) });
}
export {
  CodingPage as component
};
