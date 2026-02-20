import { a as reactExports, n as jsxRuntimeExports } from "./worker-entry-B5eyDbT7.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { S as SiriOrbAvatar } from "./index-Dprzm04Y.js";
import { u as useAudience, b as audienceContent, S as Share2, f as Palette, F as FileText, a as MessageSquare } from "./LandingLayout-DPGYOMoS.js";
import { u as useInView } from "./use-in-view-HBZ--VZ_.js";
import { m as motion } from "./proxy-CClMHKlh.js";
import { S as Search } from "./search-e7iLX_iy.js";
import { P as PenTool } from "./pen-tool-DQPjDj9u.js";
import { c as createLucideIcon } from "./createLucideIcon-BabvJ7L_.js";
import { T as Target } from "./target-DK0zsI2a.js";
import { V as Video } from "./video-BFdY_QCc.js";
import { T as TrendingUp } from "./trending-up-BYDpX4Kt.js";
import { S as Star } from "./star-CL9RM-KK.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "./button-CdRR1kGv.js";
import "./router-CRqcsHLj.js";
import "./play-BEIe5iqE.js";
import "./hash-sCoLKmxU.js";
import "./menu-CRWpwPmx.js";
import "./circle-check-D_MffrsF.js";
import "./sparkles-BBbPpkNr.js";
import "./send-BNqo3P3g.js";
const __iconNode$1 = [
  ["path", { d: "M5 21v-6", key: "1hz6c0" }],
  ["path", { d: "M12 21V3", key: "1lcnhd" }],
  ["path", { d: "M19 21V9", key: "unv183" }]
];
const ChartNoAxesColumn = createLucideIcon("chart-no-axes-column", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode);
const showcaseAgents = [
  { name: "SEO Specialist", role: "Search Optimization", icon: Search, description: "Keyword research, competitor analysis, content optimization, performance tracking", variant: "seo" },
  { name: "Content Writer", role: "Content Creation", icon: PenTool, description: "Blog writing, email campaigns, marketing copy, content strategy", variant: "creative" },
  { name: "Social Media Manager", role: "Community & Growth", icon: Share2, description: "Content planning, social copywriting, community engagement, trend analysis", variant: "social" },
  { name: "Graphic Designer", role: "Visual Design", icon: Palette, description: "Visual concepts, design briefs, art direction, brand design", variant: "creative" },
  { name: "Data Analyst", role: "Performance Insights", icon: ChartNoAxesColumn, description: "Performance analysis, trend identification, strategic insights, custom reports", variant: "tech" },
  { name: "Organic SEO Blogger", role: "SEO Content", icon: FileText, description: "SEO blog writing, keyword clustering, on-page optimization, content calendars", variant: "seo" },
  { name: "Performance Marketing Specialist", role: "Paid Media", icon: Target, description: "ROAS optimization, audience strategy, performance analysis, budget allocation", variant: "tech" },
  { name: "Video Editor AI", role: "Video Production", icon: Video, description: "Video creation and editing using natural language, powered by Remotion AI", variant: "creative" },
  { name: "GBP Expert", role: "Local SEO", icon: MapPin, description: "Google Business Profile optimization, GBP posts, review management, local SEO", variant: "seo" },
  { name: "Client Portal Agent", role: "Client Support", icon: MessageSquare, description: "Instant responses, project updates, meeting scheduling, smart escalation", variant: "supervisor" },
  { name: "CRO Specialist", role: "Conversion Optimization", icon: TrendingUp, description: "Landing page optimization, funnel analysis, A/B testing, form optimization", variant: "tech" },
  { name: "Review & Reputation Manager", role: "Online Reputation", icon: Star, description: "Review generation, response drafting, reputation monitoring, reputation growth", variant: "social" }
];
const getAgentOrbState = (isActive) => {
  return isActive ? "happy" : "idle";
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06
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
function AgentsSection() {
  const { audience } = useAudience();
  const content = audienceContent[audience].agents;
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeAgent, setActiveAgent] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "agents", className: "py-24 lg:py-32 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1200px] px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
        transition: { duration: 0.7 },
        className: "mb-16 lg:mb-20 max-w-3xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-px bg-signature" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold text-signature uppercase tracking-[0.2em]", children: content.sectionLabel })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl lg:text-5xl font-display font-medium leading-[1.1] tracking-tight text-foreground mb-6", children: [
            content.headline[0],
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/80", children: content.headline[1] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed font-light", children: content.subheadline })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: "space-y-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold text-muted-foreground uppercase tracking-wider", children: "Community Agents" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground", children: "34 agents available" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: "hidden",
          animate: isInView ? "visible" : "hidden",
          variants: containerVariants,
          className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
          children: [
            showcaseAgents.map((agent) => {
              agent.icon;
              const isActive = activeAgent === agent.name;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  variants: itemVariants,
                  onMouseEnter: () => setActiveAgent(agent.name),
                  onMouseLeave: () => setActiveAgent(null),
                  className: cn(
                    "group relative rounded-xl border p-5 transition-all duration-300 cursor-pointer shadow-sm",
                    isActive ? "border-signature/40 bg-signature/[0.02] shadow-md" : "border-border/80 bg-card hover:border-signature/30"
                  ),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SiriOrbAvatar,
                      {
                        size: 48,
                        variant: agent.variant,
                        orbState: getAgentOrbState(isActive),
                        disableFloating: true,
                        className: "rounded-xl transition-all duration-300"
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[14px] font-semibold text-foreground", children: agent.name }),
                        isActive && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-muted-foreground mb-2", children: agent.role }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: cn(
                        "text-[12px] leading-relaxed transition-all duration-300",
                        isActive ? "text-muted-foreground" : "text-muted-foreground"
                      ), children: agent.description })
                    ] })
                  ] })
                },
                agent.name
              );
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                variants: itemVariants,
                className: "group relative rounded-xl border border-dashed border-border/80 p-5 flex flex-col items-center justify-center text-center cursor-pointer hover:border-signature/40 hover:bg-signature/[0.02] transition-all duration-300 shadow-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex -space-x-2 mb-3", children: ["seo", "creative", "tech", "social"].map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SiriOrbAvatar,
                    {
                      size: 28,
                      variant: v,
                      orbState: "idle",
                      disableFloating: true,
                      className: "rounded-full border-2 border-background"
                    },
                    v
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px] font-semibold text-foreground mb-1", children: "+22 more agents" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-muted-foreground", children: "Real estate, home services, video, email, ads & more" })
                ]
              }
            )
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.5, delay: 0.4 },
        className: "mt-16 pt-12 border-t border-border/50 flex flex-wrap items-center justify-center gap-6 lg:gap-12",
        children: [
          { label: "Deep reasoning", value: "Thinks through complex problems" },
          { label: "You're in control", value: "Approve actions before they happen" },
          { label: "Enterprise-safe", value: "Built-in content protection" }
        ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-1.5 rounded-full bg-signature" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-medium text-foreground/80", children: item.value }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] text-muted-foreground ml-2", children: item.label })
              ] })
            ]
          },
          item.label
        ))
      }
    )
  ] }) });
}
export {
  AgentsSection
};
