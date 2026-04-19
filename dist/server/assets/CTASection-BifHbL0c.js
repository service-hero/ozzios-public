import { r as reactExports, u as useInView, j as jsxRuntimeExports, m as motion, A as AnimatePresence } from "./vendor-framer-DZFBeC81.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { u as useAudience, a as audienceContent } from "./LandingLayout-D-c6g3QV.js";
import { A as ArrowRight, o as Play, aQ as ChevronRight, a as Check, aR as Terminal } from "./vendor-icons-BFmuwI-v.js";
import "./vendor-react-MO5I_vdy.js";
import "./vendor-router-DD_41qJ4.js";
import "./vendor-radix-Bd9PM-r6.js";
import "node:async_hooks";
const EASE_OUT = [0.16, 1, 0.3, 1];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 }
  }
};
const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE_OUT } }
};
const setupFlow = [
  { id: "01", title: "Connect your stack" },
  { id: "02", title: "Deploy your agents" },
  { id: "03", title: "Review the output" }
];
const trustMetrics = [
  { value: "5 min", label: "Setup time" },
  { value: "30+", label: "Specialist agents" },
  { value: "24/7", label: "Coverage window" },
  { value: "$0", label: "Extra headcount" }
];
const proofPoints = [
  "Setup in under 5 minutes",
  "No annual contract",
  "Built for HVAC, plumbing, roofing, electrical",
  "CRM, workflows, voice, reporting in one system",
  "See every action your agents take",
  "Cancel anytime"
];
const commandCycle = [
  "deploy hvac-team@servicehero",
  "agents.start --trade roofing",
  "campaigns:launch summer-tune-up",
  "workflow.run missed-call-recovery"
];
function Kbd({ children, tone = "light", className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "kbd",
    {
      className: cn(
        "inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-[5px] border px-1 font-sans text-[10px] font-medium leading-none tabular-nums",
        tone === "light" ? "border-border/70 bg-white/80 text-foreground/55 shadow-[0_1px_0_rgba(0,0,0,0.04)]" : "border-white/15 bg-white/10 text-white/85 shadow-[inset_0_-1px_0_rgba(0,0,0,0.18)]",
        className
      ),
      children
    }
  );
}
function LedgerEyebrow({ label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mb-7 inline-flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-border/60" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-signature/60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-signature" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10.5px] uppercase tracking-[0.22em] text-signature", children: label })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-border/60" })
  ] });
}
function HeadlineMark({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10 text-signature", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        "aria-hidden": true,
        className: "absolute -bottom-1 left-0 right-0 h-[6px] rounded-full bg-signature/15 blur-[2px]"
      }
    )
  ] });
}
function CommandTease() {
  const [phraseIdx, setPhraseIdx] = reactExports.useState(0);
  const [typed, setTyped] = reactExports.useState("");
  const cancelRef = reactExports.useRef({ cancelled: false });
  reactExports.useEffect(() => {
    cancelRef.current.cancelled = true;
    cancelRef.current = { cancelled: false };
    const ctrl = cancelRef.current;
    const target = commandCycle[phraseIdx];
    let i = 0;
    let dwellTimer = null;
    let typeTimer = null;
    const type = () => {
      if (ctrl.cancelled) return;
      i += 1;
      setTyped(target.slice(0, i));
      if (i >= target.length) {
        dwellTimer = setTimeout(() => {
          if (ctrl.cancelled) return;
          setPhraseIdx((p) => (p + 1) % commandCycle.length);
        }, 2200);
        return;
      }
      const ch = target[i - 1];
      const delay = ch === " " ? 50 : ch === "-" || ch === "@" ? 90 : 28 + Math.random() * 30;
      typeTimer = setTimeout(type, delay);
    };
    setTyped("");
    typeTimer = setTimeout(type, 200);
    return () => {
      ctrl.cancelled = true;
      if (dwellTimer) clearTimeout(dwellTimer);
      if (typeTimer) clearTimeout(typeTimer);
    };
  }, [phraseIdx]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mt-6 w-full max-w-[520px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group/cmd flex h-11 items-center gap-2.5 rounded-md border border-border/60 bg-background/80 pl-3 pr-1.5 backdrop-blur-sm transition-colors hover:border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Terminal, { className: "h-3.5 w-3.5 shrink-0 text-foreground/40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[12px] tabular-nums text-foreground/40", children: "$" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 truncate font-mono text-[12.5px] text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/50", children: "ozzi " }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", initial: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.span,
          {
            initial: { opacity: 0, y: 4 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -4 },
            transition: { duration: 0.18 },
            className: "inline",
            children: typed
          },
          phraseIdx
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "ml-0.5 inline-block h-[12px] w-[7px] -translate-y-px translate-x-0.5 align-middle bg-signature/80",
            style: { animation: "blink 1s steps(2) infinite" },
            "aria-hidden": true
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1 inline-flex items-center gap-1.5 text-[10.5px] font-medium text-foreground/45", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Kbd, { children: "↵" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "run" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/40", children: [
      "Or just press ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kbd, { className: "ml-0.5", children: "S" }),
      " to start"
    ] })
  ] });
}
function CTASection() {
  const { audience } = useAudience();
  const content = audienceContent[audience].cta;
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate overflow-hidden py-28 lg:py-36", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "pointer-events-none absolute -top-32 left-1/2 z-0 h-[640px] w-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(196,88,63,0.18),transparent_60%)] blur-3xl"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "pointer-events-none absolute inset-0 z-0 opacity-[0.45] [mask-image:radial-gradient(ellipse_at_top,black_15%,transparent_75%)]",
        style: {
          backgroundImage: "radial-gradient(rgba(64, 45, 34, 0.10) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref,
        className: "relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: "hidden",
              animate: isInView ? "visible" : "hidden",
              variants: containerVariants,
              className: "mx-auto flex max-w-[920px] flex-col items-center text-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LedgerEyebrow, { label: "Final step" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.h2,
                  {
                    variants: itemVariants,
                    className: "font-display text-[clamp(2.5rem,5.6vw,5.4rem)] font-semibold leading-[0.96] tracking-[-0.04em] text-foreground",
                    children: [
                      content.headline[0],
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden sm:block" }),
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(HeadlineMark, { children: content.headline[1] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.p,
                  {
                    variants: itemVariants,
                    className: "mt-6 max-w-[580px] text-[16px] leading-[1.6] text-muted-foreground sm:text-[17px]",
                    children: content.subtext
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    variants: itemVariants,
                    className: "mt-9 flex flex-wrap items-center justify-center gap-2.5",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "a",
                        {
                          href: "https://app.ozzios.com/sign-up",
                          className: cn(
                            "group/cta relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-md bg-foreground pl-5 pr-3 text-[14px] font-medium text-background",
                            "shadow-[0_1px_0_rgba(255,255,255,0.18)_inset,0_1px_2px_rgba(34,27,22,0.18),0_18px_38px_-14px_rgba(34,27,22,0.5)]",
                            "transition-all duration-200 hover:bg-[#1a1410] active:translate-y-px"
                          ),
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" }),
                            content.primaryButton,
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform duration-200 group-hover/cta:translate-x-0.5" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Kbd, { tone: "dark", children: "S" })
                          ]
                        }
                      ),
                      content.secondaryButton ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "a",
                        {
                          href: "#how-it-works",
                          className: "group/play inline-flex h-12 items-center gap-2.5 rounded-md border border-border/70 bg-background/80 pl-1.5 pr-5 text-[14px] font-medium text-foreground backdrop-blur transition-all duration-200 hover:border-border hover:bg-background",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-[5px] bg-foreground text-background transition-transform duration-200 group-hover/play:scale-105", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "ml-[1px] h-3.5 w-3.5 fill-current" }) }),
                            content.secondaryButton
                          ]
                        }
                      ) : null
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CommandTease, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    variants: itemVariants,
                    className: "mt-12 flex w-full max-w-[820px] flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-2",
                    children: setupFlow.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 sm:gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1.5 backdrop-blur", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10.5px] tabular-nums text-foreground/40", children: step.id }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12.5px] font-medium text-foreground", children: step.title })
                      ] }),
                      i < setupFlow.length - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "hidden h-3.5 w-3.5 text-foreground/30 sm:inline-block" }) : null
                    ] }, step.id))
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    variants: itemVariants,
                    className: "mt-12 w-full max-w-[820px] overflow-hidden rounded-md border border-border/60 bg-background/60 backdrop-blur",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 divide-x divide-y divide-border/60 sm:grid-cols-4 sm:divide-y-0", children: trustMetrics.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-4 text-left", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-[1.6rem] font-semibold leading-none tabular-nums tracking-[-0.025em] text-foreground", children: m.value }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-mono text-[9.5px] uppercase tracking-[0.2em] text-foreground/45", children: m.label })
                    ] }, m.label)) })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
              transition: { duration: 0.7, delay: 0.55, ease: EASE_OUT },
              className: "mt-16 lg:mt-20",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-border/50" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/40", children: "What you get on day one" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-border/50" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-md border border-border/60 bg-background/50 py-3 backdrop-blur", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      animate: { x: ["0%", "-50%"] },
                      transition: { duration: 32, ease: "linear", repeat: Infinity },
                      className: "flex min-w-max items-center gap-10 px-6",
                      children: [...proofPoints, ...proofPoints].map((point, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: "inline-flex items-center gap-2 whitespace-nowrap text-[12px] font-medium text-foreground/65",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-4 w-4 items-center justify-center rounded-full border border-signature/30 bg-signature/10 text-signature", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-2.5 w-2.5", strokeWidth: 3 }) }),
                            point,
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 h-1 w-1 rounded-full bg-foreground/15" })
                          ]
                        },
                        `${point}-${i}`
                      ))
                    }
                  )
                ] })
              ]
            }
          )
        ]
      }
    )
  ] });
}
export {
  CTASection
};
