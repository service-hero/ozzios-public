import { j as jsxRuntimeExports, m as motion } from "./vendor-framer-DZFBeC81.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { a as useAudience, b as audienceContent } from "./LandingLayout-Dblq4RXp.js";
import { B as BackgroundField, E as EASE_OUT, S as SectionHeader, e as SectionHeading } from "./_landing-primitives-Bieps6V3.js";
import { a3 as Layers, p as Brain, be as RefreshCcw, Z as Zap, S as Shield, a as Check, bf as History } from "./vendor-icons-D94uOSxG.js";
import "./vendor-react-MO5I_vdy.js";
import "./vendor-router-DD_41qJ4.js";
import "./vendor-radix-Bd9PM-r6.js";
import "node:async_hooks";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.05 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } }
};
const memoryLayers = [
  { id: "L1", name: "Brand Identity", kind: "stable" },
  { id: "L2", name: "Business Rules", kind: "stable" },
  { id: "L3", name: "Learnings", kind: "stable" },
  { id: "L4", name: "Knowledge Base", kind: "stable" },
  { id: "L5", name: "Error Patterns", kind: "dynamic" },
  { id: "L6", name: "Context", kind: "dynamic" }
];
const featureIcons = [Brain, RefreshCcw, Zap, Shield];
function MemorySection() {
  const { audience } = useAudience();
  const content = audienceContent[audience].memory;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "memory", className: "relative isolate overflow-hidden py-28 lg:py-36", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackgroundField, { variant: "top-right" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        variants: containerVariants,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "mb-14 lg:mb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              eyebrow: content.sectionLabel,
              headlineLines: [content.headline[0], content.headline[1]],
              sub: content.subheadline
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 lg:grid-cols-12 lg:gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-xl border border-border/70 bg-background shadow-[0_18px_50px_-26px_rgba(34,27,22,0.30)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/60 bg-muted/30 px-5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-7 w-7 items-center justify-center rounded-md border border-border/60 bg-background text-foreground/70", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-3.5 w-3.5" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold text-foreground", children: "Memory architecture" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[9.5px] uppercase tracking-[0.18em] text-foreground/45", children: "7 layers of persistent context" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-[5px] border border-mint/30 bg-mint/10 px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-mint", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-mint" }),
                  "Live"
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border/60", children: memoryLayers.map((layer) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-4 px-5 py-3 transition-colors hover:bg-muted/30",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 font-mono text-[11px] font-semibold tabular-nums text-foreground/40", children: layer.id }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-[13px] font-medium text-foreground", children: layer.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: cn(
                          "inline-flex items-center gap-1 rounded-[5px] border px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider",
                          layer.kind === "stable" ? "border-foreground/15 bg-foreground/5 text-foreground/70" : "border-signature/25 bg-signature/10 text-signature"
                        ),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: cn(
                                "h-1 w-1 rounded-full",
                                layer.kind === "stable" ? "bg-foreground/60" : "bg-signature"
                              )
                            }
                          ),
                          layer.kind
                        ]
                      }
                    )
                  ]
                },
                layer.id
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 divide-x divide-border/60 border-t border-border/60 bg-muted/20", children: [
                { value: "∞", label: "Retention" },
                { value: "7", label: "Layers" },
                { value: "<50ms", label: "Recall" }
              ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-3 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-[1.4rem] font-semibold leading-none tabular-nums tracking-[-0.02em] text-foreground", children: stat.value }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5 font-mono text-[9.5px] uppercase tracking-[0.18em] text-foreground/45", children: stat.label })
              ] }, stat.label)) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "space-y-3 lg:col-span-7", children: content.features.map((feature, index) => {
              const Icon = featureIcons[index % featureIcons.length];
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "group/m rounded-xl border border-border/60 bg-background p-5 shadow-[0_8px_30px_-18px_rgba(34,27,22,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:shadow-[0_14px_40px_-18px_rgba(34,27,22,0.30)]",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border/60 bg-background text-foreground/70 transition-colors group-hover/m:border-foreground/25 group-hover/m:bg-foreground group-hover/m:text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[15px] font-semibold text-foreground", children: feature.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[13px] leading-[1.55] text-muted-foreground", children: feature.description }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-x-4 gap-y-1.5", children: feature.bullets.map((bullet) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: "inline-flex items-center gap-1.5 text-[11.5px] text-muted-foreground",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-3 w-3 items-center justify-center rounded-full border border-signature/30 bg-signature/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-1.5 w-1.5 text-signature", strokeWidth: 3 }) }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-xl border border-border/70 bg-background/85", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6 p-6 lg:flex-row lg:items-center lg:justify-between lg:p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border/60 bg-muted/40 text-foreground/70", children: /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { label: "Versus traditional marketing" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-[1.3rem] font-semibold leading-[1.15] tracking-[-0.02em] text-foreground sm:text-[1.5rem]", children: content.comparisonTitle }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-[60ch] text-[13px] leading-[1.55] text-muted-foreground", children: content.comparisonDescription })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 divide-x divide-border/60 overflow-hidden rounded-md border border-border/60", children: content.comparisonStats.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-3 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-[1.6rem] font-semibold leading-none tabular-nums tracking-[-0.025em] text-foreground", children: stat.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5 font-mono text-[9.5px] uppercase tracking-[0.18em] text-foreground/45", children: stat.label })
            ] }, stat.label)) })
          ] }) }) })
        ]
      }
    ) })
  ] });
}
export {
  MemorySection
};
