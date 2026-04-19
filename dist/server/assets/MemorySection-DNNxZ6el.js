import { j as jsxRuntimeExports, m as motion } from "./vendor-framer-DZFBeC81.js";
import { u as useAudience, a as audienceContent } from "./LandingLayout-CPC6VFbg.js";
import { N as Layers, n as Brain, bb as RefreshCcw, Z as Zap, S as Shield, a as Check, bc as History } from "./vendor-icons-RMyvaHp0.js";
import "./vendor-react-MO5I_vdy.js";
import "./vendor-router-DD_41qJ4.js";
import "./vendor-radix-Bd9PM-r6.js";
import "node:async_hooks";
import "./button-DuL_ysbl.js";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "memory", className: "relative overflow-hidden py-32 lg:py-40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 top-24 h-72 bg-[radial-gradient(circle_at_top,rgba(196,88,63,0.1),transparent_58%)] blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1440px] px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        variants: containerVariants,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "mb-16 max-w-5xl lg:mb-20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-[0.72rem] font-medium uppercase tracking-[0.26em] text-foreground/45", children: content.sectionLabel }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mb-6 text-[clamp(3rem,5.2vw,5.3rem)] font-display font-medium tracking-[-0.06em] text-foreground leading-[0.92]", children: [
              content.headline[0],
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/78", children: content.headline[1] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-2xl text-lg leading-8 text-muted-foreground", children: content.subheadline })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 lg:grid-cols-2 lg:gap-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[2rem] border border-white/80 bg-white/80 p-8 shadow-[0_24px_70px_rgba(56,40,29,0.08)] lg:p-10", children: [
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
                  className: "flex items-center gap-4 rounded-[1.2rem] border border-border/70 bg-[rgba(247,241,235,0.86)] p-3",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono font-bold text-muted-foreground w-6", children: layer.id }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground flex-1", children: layer.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground uppercase tracking-wide", children: index < 4 ? "Stable" : "Dynamic" })
                  ]
                },
                layer.id
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-3 gap-4 border-t border-border/60 pt-6", children: [
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
                  className: "group rounded-[1.75rem] border border-white/80 bg-white/78 p-6 shadow-[0_18px_50px_rgba(56,40,29,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(56,40,29,0.1)]",
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
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3 text-signature" }),
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
              className: "mt-16 rounded-[2rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(244,238,232,0.98))] p-8 shadow-[0_20px_60px_rgba(56,40,29,0.08)] lg:p-10",
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
    ) })
  ] });
}
export {
  MemorySection
};
