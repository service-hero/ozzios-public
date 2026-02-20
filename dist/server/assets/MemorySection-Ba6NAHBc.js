import { n as jsxRuntimeExports } from "./worker-entry-B5eyDbT7.js";
import { u as useAudience, b as audienceContent, B as Brain } from "./LandingLayout-DPGYOMoS.js";
import { m as motion } from "./proxy-CClMHKlh.js";
import { L as Layers } from "./layers-B0XEgFAl.js";
import { c as createLucideIcon } from "./createLucideIcon-BabvJ7L_.js";
import { Z as Zap } from "./zap-wF6jlK62.js";
import { S as Shield } from "./shield-Cds-Jb5B.js";
import { C as Check } from "./check-DkQamgCA.js";
import { H as History } from "./history-DsqH8aCz.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "./router-CRqcsHLj.js";
import "./utils-QXBWQHlM.js";
import "./button-CdRR1kGv.js";
import "./menu-CRWpwPmx.js";
const __iconNode = [
  ["path", { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "14sxne" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16", key: "1hlbsb" }],
  ["path", { d: "M16 16h5v5", key: "ccwih5" }]
];
const RefreshCcw = createLucideIcon("refresh-ccw", __iconNode);
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
const memoryLayers = [
  { id: "L1", name: "Brand Identity" },
  { id: "L2", name: "Business Rules" },
  { id: "L3", name: "Learnings" },
  { id: "L4", name: "Knowledge Base" },
  { id: "L5", name: "Error Patterns" },
  { id: "L6", name: "Context" }
];
const featureIcons = [Brain, RefreshCcw, Zap, Shield];
function MemorySection() {
  const { audience } = useAudience();
  const content = audienceContent[audience].memory;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "memory", className: "py-24 lg:py-32 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, margin: "-100px" },
      variants: containerVariants,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "mb-16 lg:mb-20 max-w-3xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-px bg-signature" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold text-signature uppercase tracking-[0.2em]", children: content.sectionLabel })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl lg:text-5xl font-display font-medium tracking-tight text-foreground mb-6 leading-[1.1]", children: [
            content.headline[0],
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/80", children: content.headline[1] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed font-light", children: content.subheadline })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-8 lg:gap-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/30 border border-border/50 rounded-xl p-8 lg:p-10 shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-card border border-border flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-5 w-5 text-signature" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold text-foreground", children: "Memory Architecture" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "7 layers of persistent context" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: memoryLayers.map((layer, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-4 p-3 rounded-xl bg-card border border-border",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono font-bold text-muted-foreground w-6", children: layer.id }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground flex-1", children: layer.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground uppercase tracking-wide", children: index < 4 ? "Stable" : "Dynamic" })
                ]
              },
              layer.id
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 pt-6 border-t border-border grid grid-cols-3 gap-4", children: [
              { value: "∞", label: "Retention" },
              { value: "7", label: "Layers" },
              { value: "<50ms", label: "Recall" }
            ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-semibold text-foreground", children: stat.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wide", children: stat.label })
            ] }, stat.label)) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "space-y-4", children: content.features.map((feature, index) => {
            const Icon = featureIcons[index % featureIcons.length];
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "group p-6 rounded-xl border border-border/80 bg-card hover:border-signature/30 hover:shadow-md transition-all duration-300 shadow-sm",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 h-10 w-10 rounded-xl bg-signature/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-signature" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold text-foreground mb-1", children: feature.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-3", children: feature.description }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-x-4 gap-y-1", children: feature.bullets.map((bullet) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: "inline-flex items-center gap-1.5 text-xs text-muted-foreground",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3 text-muted-foreground" }),
                          bullet
                        ]
                      },
                      bullet
                    )) })
                  ] })
                ] })
              },
              feature.title
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            variants: itemVariants,
            className: "mt-16 p-8 lg:p-10 rounded-xl bg-muted/30 border border-border/50 shadow-sm",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-card border border-border flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "h-5 w-5 text-signature" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-1", children: content.comparisonTitle }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-xl", children: content.comparisonDescription })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-8 lg:gap-12", children: content.comparisonStats.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-semibold text-foreground", children: stat.value }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wide", children: stat.label })
              ] }, stat.label)) })
            ] })
          }
        )
      ]
    }
  ) }) });
}
export {
  MemorySection
};
