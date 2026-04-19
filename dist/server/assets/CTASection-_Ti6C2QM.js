import { r as reactExports, u as useInView, j as jsxRuntimeExports, m as motion } from "./vendor-framer-DZFBeC81.js";
import { u as useAudience, a as audienceContent } from "./LandingLayout-CPC6VFbg.js";
import { A as ArrowRight, o as Play, a as Check } from "./vendor-icons-RMyvaHp0.js";
import "./vendor-react-MO5I_vdy.js";
import "./vendor-router-DD_41qJ4.js";
import "./vendor-radix-Bd9PM-r6.js";
import "node:async_hooks";
import "./button-DuL_ysbl.js";
const closeoutSteps = [
  {
    id: "01",
    title: "Connect your stack",
    detail: "Bring in Google, Meta, CRM, inboxes, and the systems you already run."
  },
  {
    id: "02",
    title: "Deploy your agents",
    detail: "Ozzi configures trade-aware workflows for follow-up, publishing, and reporting."
  },
  {
    id: "03",
    title: "Review the output",
    detail: "See what shipped, what changed, and where the next revenue opportunity is."
  }
];
const closeoutProof = [
  "Setup in under 5 minutes",
  "No annual contract",
  "Built for HVAC, plumbing, roofing, and electrical",
  "CRM, workflows, voice, and reporting in one system",
  "See every action your agents take"
];
function CTASection() {
  const { audience } = useAudience();
  const content = audienceContent[audience].cta;
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden py-32 lg:py-40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 top-24 h-96 bg-[radial-gradient(circle_at_top,rgba(196,88,63,0.12),transparent_56%)] blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        ref,
        initial: { opacity: 0, y: 30 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        className: "overflow-hidden rounded-[2.6rem] border border-white/90 shadow-[0_28px_90px_rgba(56,40,29,0.12)]",
        style: { backgroundColor: "rgba(246, 236, 226, 0.98)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-0 lg:grid-cols-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative overflow-hidden border-b border-white/60 px-6 py-12 sm:px-10 lg:col-span-7 lg:border-b-0 lg:border-r lg:border-white/60 lg:px-12 lg:py-14",
                style: {
                  background: "linear-gradient(180deg, rgba(255, 250, 245, 0.98), rgba(243, 231, 221, 0.98))"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(196,88,63,0.16),transparent_40%)]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[rgba(214,123,73,0.12)] blur-3xl" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-5xl", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-[0.72rem] font-medium uppercase tracking-[0.26em] text-foreground/45", children: "Final step" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "max-w-5xl text-[clamp(3rem,5.4vw,5.6rem)] font-display font-medium leading-[0.92] tracking-[-0.06em] text-foreground", children: [
                      content.headline[0],
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2 inline-block h-10 w-20 rounded-full align-middle bg-[linear-gradient(135deg,rgba(48,34,26,0.98),rgba(104,67,45,0.95))] p-2 shadow-[0_12px_24px_rgba(56,40,29,0.16)] sm:h-12 sm:w-24 md:h-14 md:w-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-full items-center justify-center rounded-full bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-signature shadow-[0_0_18px_rgba(214,123,73,0.68)]" }) }) }),
                      content.headline[1]
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-2xl text-lg leading-8 text-muted-foreground", children: content.subtext }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "a",
                        {
                          href: "https://app.ozzios.com/sign-up",
                          className: "inline-flex h-14 items-center justify-center gap-2 rounded-full bg-foreground px-8 text-base font-medium text-white shadow-[0_18px_40px_rgba(41,30,23,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground/92",
                          children: [
                            content.primaryButton,
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                          ]
                        }
                      ),
                      content.secondaryButton ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "a",
                        {
                          href: "#how-it-works",
                          className: "inline-flex h-14 items-center justify-center gap-3 rounded-full border border-border/70 bg-white/70 px-8 text-base font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-white",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "ml-0.5 h-3.5 w-3.5 fill-current" }) }),
                            content.secondaryButton
                          ]
                        }
                      ) : null
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-signature" }),
                        "Launch without another vendor layer"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-signature" }),
                        "Keep control of every workflow"
                      ] })
                    ] })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "px-6 py-12 sm:px-10 lg:col-span-5 lg:px-10 lg:py-14",
                style: {
                  background: "linear-gradient(180deg, rgba(235, 221, 209, 0.98), rgba(224, 207, 193, 0.98))"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.72rem] font-medium uppercase tracking-[0.24em] text-foreground/45", children: "What happens next" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/55 px-3 py-1 text-xs text-foreground/68", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-emerald-400" }),
                      "Live setup"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: closeoutSteps.map((step, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "rounded-[1.6rem] border border-white/70 bg-white/40 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] transition-transform duration-300 hover:scale-[1.015]",
                      style: { transform: `translateY(${index * 2}px)` },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-foreground/10 text-sm font-semibold text-foreground", children: step.id }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold text-foreground", children: step.title }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm leading-6 text-muted-foreground", children: step.detail })
                        ] })
                      ] })
                    },
                    step.id
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 rounded-[1.8rem] border border-white/70 bg-white/35 p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: [
                    { value: "5 min", label: "Average setup" },
                    { value: "30+", label: "Specialized agents" },
                    { value: "24/7", label: "Coverage window" },
                    { value: "0", label: "Extra headcount" }
                  ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-semibold tracking-tight text-foreground", children: item.value }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[0.68rem] uppercase tracking-[0.18em] text-foreground/45", children: item.label })
                  ] }, item.label)) }) })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "overflow-hidden border-t border-white/60 py-4",
              style: { backgroundColor: "rgba(255, 247, 240, 0.82)" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  animate: { x: ["0%", "-50%"] },
                  transition: { duration: 22, ease: "linear", repeat: Infinity },
                  className: "flex min-w-max items-center gap-10 px-6",
                  children: [...closeoutProof, ...closeoutProof].map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "inline-flex items-center gap-3 whitespace-nowrap text-sm font-medium text-foreground/72",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-signature" }),
                        item
                      ]
                    },
                    `${item}-${index}`
                  ))
                }
              )
            }
          )
        ]
      }
    ) })
  ] });
}
export {
  CTASection
};
