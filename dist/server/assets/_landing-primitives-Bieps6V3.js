import { j as jsxRuntimeExports, m as motion, r as reactExports, u as useInView } from "./vendor-framer-DZFBeC81.js";
import { L as Link } from "./vendor-router-DD_41qJ4.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { i as isDemoCta, u as useCalDemoInit, c as bookDemoTriggerProps } from "./LandingLayout-Dblq4RXp.js";
import { r as ArrowUpRight, a as Check } from "./vendor-icons-D94uOSxG.js";
const EASE_OUT = [0.16, 1, 0.3, 1];
function Kbd({
  children,
  tone = "light",
  className
}) {
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
function LedgerEyebrow({
  label,
  centered = false,
  ping = false,
  tone = "signature"
}) {
  const isSignature = tone === "signature";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("inline-flex items-center gap-3", centered && "mx-auto"), children: [
    centered ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-border/60" }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
      ping ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: cn(
              "absolute inline-flex h-full w-full animate-ping rounded-full",
              isSignature ? "bg-signature/60" : "bg-foreground/40"
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: cn(
              "relative inline-flex h-1.5 w-1.5 rounded-full",
              isSignature ? "bg-signature" : "bg-foreground/70"
            )
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: cn(
            "inline-flex h-1.5 w-1.5 rounded-full",
            isSignature ? "bg-signature" : "bg-foreground/70"
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: cn(
            "font-mono text-[10.5px] uppercase tracking-[0.22em]",
            isSignature ? "text-signature" : "text-foreground/55"
          ),
          children: label
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-border/60" })
  ] });
}
function SectionHeading({ label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10.5px] uppercase tracking-[0.22em] text-foreground/40", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px flex-1 bg-border/50" })
  ] });
}
function SectionHeader({
  eyebrow,
  headlineLines,
  sub,
  align = "left",
  ping = true,
  className
}) {
  const centered = align === "center";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "flex flex-col gap-6",
        centered ? "mx-auto items-center text-center" : "items-start text-left",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LedgerEyebrow, { label: eyebrow, centered, ping }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "h2",
          {
            className: cn(
              "max-w-[26ch] font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-foreground [text-wrap:balance]",
              centered && "mx-auto"
            ),
            children: [
              headlineLines[0],
              headlineLines[1] ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden sm:block" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(HeadlineMark, { children: headlineLines[1] })
              ] }) : null
            ]
          }
        ),
        sub ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: cn(
              "max-w-[560px] text-[15.5px] leading-[1.6] text-muted-foreground sm:text-[16.5px]",
              centered && "mx-auto"
            ),
            children: sub
          }
        ) : null
      ]
    }
  );
}
function BackgroundField({
  variant = "top-right",
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    variant !== "none" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: cn(
          "pointer-events-none absolute z-0 h-[520px] w-[720px] rounded-full bg-[radial-gradient(circle,rgba(196,88,63,0.12),transparent_60%)] blur-3xl",
          variant === "top-right" && "-right-32 -top-20",
          variant === "top-left" && "-left-32 -top-20",
          variant === "top-center" && "left-1/2 -top-32 -translate-x-1/2 w-[920px]",
          className
        )
      }
    ) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: cn(
          "pointer-events-none absolute inset-0 z-0 opacity-[0.45] [mask-image:radial-gradient(ellipse_at_top,black_15%,transparent_75%)]",
          className
        ),
        style: {
          backgroundImage: "radial-gradient(rgba(64, 45, 34, 0.10) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }
      }
    )
  ] });
}
function PrimaryCTA({
  children,
  href,
  shortcut,
  className,
  size = "md"
}) {
  const sizing = size === "lg" ? "h-12 pl-5 pr-3 text-[14px]" : size === "sm" ? "h-9 pl-3.5 pr-2 text-[13px]" : "h-11 pl-4 pr-2.5 text-[13.5px]";
  const isDemo = isDemoCta(href);
  const isInternal = !isDemo && href.startsWith("/");
  const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" }),
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3.5 w-3.5 transition-transform duration-200 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" }),
    shortcut ? /* @__PURE__ */ jsxRuntimeExports.jsx(Kbd, { tone: "dark", className: "ml-0.5", children: shortcut }) : null
  ] });
  const classes = cn(
    "group/cta relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-foreground font-medium text-background",
    "shadow-[0_1px_0_rgba(255,255,255,0.18)_inset,0_1px_2px_rgba(34,27,22,0.18),0_14px_30px_-12px_rgba(34,27,22,0.45)]",
    "transition-all duration-200 hover:bg-[#1a1410] active:translate-y-px",
    sizing,
    className
  );
  if (isDemo) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DemoCTAButton, { className: classes, children: inner });
  }
  if (isInternal) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: href, className: classes, children: inner });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, className: classes, children: inner });
}
function DemoCTAButton({
  children,
  className
}) {
  useCalDemoInit();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className, ...bookDemoTriggerProps, children });
}
function SecondaryCTA({
  children,
  href,
  className,
  size = "md"
}) {
  const sizing = size === "lg" ? "h-12 px-5 text-[14px]" : size === "sm" ? "h-9 px-3 text-[13px]" : "h-11 px-4 text-[13.5px]";
  const isDemo = isDemoCta(href);
  const isInternal = !isDemo && href.startsWith("/") && !href.startsWith("//");
  const classes = cn(
    "group/sec inline-flex items-center gap-2 rounded-md border border-border/70 bg-background/80 font-medium text-foreground backdrop-blur transition-all duration-200 hover:border-border hover:bg-background",
    sizing,
    className
  );
  const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3 text-foreground/40 transition-transform duration-200 group-hover/sec:-translate-y-0.5 group-hover/sec:translate-x-0.5 group-hover/sec:text-foreground/70" })
  ] });
  if (isDemo) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DemoCTAButton, { className: classes, children: inner });
  }
  if (isInternal) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: href, className: classes, children: inner });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href,
      target: href.startsWith("http") ? "_blank" : void 0,
      rel: href.startsWith("http") ? "noopener noreferrer" : void 0,
      className: classes,
      children: inner
    }
  );
}
const innerContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.05 } }
};
const innerItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT } }
};
function FeatureHero({
  pillIcon: PillIcon,
  pillLabel,
  pillSubtitle,
  headlineLines,
  sub,
  primaryCta,
  secondaryCta,
  stats,
  rightSlot,
  bgVariant = "top-right"
}) {
  const hasRightSlot = Boolean(rightSlot);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-20 lg:pt-36", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackgroundField, { variant: bgVariant }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: "hidden", animate: "visible", variants: innerContainerVariants, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: cn(
          "grid items-center gap-12",
          hasRightSlot ? "lg:grid-cols-12 lg:gap-10 xl:gap-16" : ""
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              variants: innerItemVariants,
              className: hasRightSlot ? "lg:col-span-7 xl:col-span-7" : "max-w-[860px]",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "group inline-flex h-7 items-center gap-2 rounded-full border border-border/60 bg-background/80 pl-1.5 pr-3 text-[11px] font-medium text-foreground/65 backdrop-blur", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex h-[18px] items-center gap-1.5 rounded-full bg-signature/10 px-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-signature", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(PillIcon, { className: "h-3 w-3" }),
                    pillLabel
                  ] }),
                  pillSubtitle ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/55", children: pillSubtitle }) : null
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-[clamp(2.25rem,5vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-foreground [text-wrap:balance]", children: [
                  headlineLines[0],
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden sm:block" }),
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(HeadlineMark, { children: headlineLines[1] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-[520px] text-[16px] leading-[1.6] text-muted-foreground sm:text-[17px]", children: sub }),
                (primaryCta || secondaryCta) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap items-center gap-2.5", children: [
                  primaryCta ? /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryCTA, { href: primaryCta.href, size: "md", shortcut: primaryCta.shortcut, children: primaryCta.label }) : null,
                  secondaryCta ? /* @__PURE__ */ jsxRuntimeExports.jsx(SecondaryCTA, { href: secondaryCta.href, size: "md", children: secondaryCta.label }) : null
                ] }),
                stats && stats.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 max-w-[640px] overflow-hidden rounded-md border border-border/60 bg-background/60 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: cn(
                      "grid divide-x divide-y divide-border/60 sm:divide-y-0",
                      stats.length === 4 ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-3"
                    ),
                    children: stats.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-[1.45rem] font-semibold leading-none tabular-nums tracking-[-0.025em] text-foreground", children: stat.value }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5 font-mono text-[9.5px] uppercase tracking-[0.2em] text-foreground/45", children: stat.label })
                    ] }, stat.label))
                  }
                ) }) : null
              ]
            }
          ),
          hasRightSlot ? /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: innerItemVariants, className: "lg:col-span-5 xl:col-span-5", children: rightSlot }) : null
        ]
      }
    ) }) })
  ] });
}
function PainPointsBlock({
  eyebrow,
  headlineLines,
  sub,
  points,
  bgVariant = "top-left"
}) {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate overflow-hidden border-t border-border/50 py-24 lg:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackgroundField, { variant: bgVariant }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          ref,
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { duration: 0.6 },
          className: "mb-12 lg:mb-16",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow, headlineLines, sub })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          variants: innerContainerVariants,
          initial: "hidden",
          animate: isInView ? "visible" : "hidden",
          className: "grid gap-4 md:grid-cols-2 lg:gap-5",
          children: points.map((point) => {
            const Icon = point.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                variants: innerItemVariants,
                className: "group/p rounded-xl border border-border/60 bg-background p-7 shadow-[0_8px_30px_-18px_rgba(34,27,22,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:shadow-[0_14px_40px_-18px_rgba(34,27,22,0.30)]",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-9 w-9 items-center justify-center rounded-md border border-destructive/25 bg-destructive/10 text-destructive transition-colors duration-200 group-hover/p:border-destructive/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-[16px] font-semibold leading-tight text-foreground", children: point.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[13.5px] leading-[1.6] text-muted-foreground", children: point.description })
                ]
              },
              point.title
            );
          })
        }
      )
    ] })
  ] });
}
function CapabilitiesBlock({
  eyebrow,
  headlineLines,
  sub,
  capabilities,
  bgVariant = "top-left"
}) {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate overflow-hidden border-t border-border/50 py-24 lg:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackgroundField, { variant: bgVariant }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          ref,
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { duration: 0.6 },
          className: "mb-12 lg:mb-16",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow, headlineLines, sub })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          variants: innerContainerVariants,
          initial: "hidden",
          animate: isInView ? "visible" : "hidden",
          className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5",
          children: capabilities.map((cap) => {
            const Icon = cap.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                variants: innerItemVariants,
                className: "group/c relative rounded-xl border border-border/60 bg-background p-7 shadow-[0_8px_30px_-18px_rgba(34,27,22,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:shadow-[0_14px_40px_-18px_rgba(34,27,22,0.30)]",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/60 bg-background text-foreground/70 transition-colors duration-200 group-hover/c:border-foreground/25 group-hover/c:bg-foreground group-hover/c:text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 font-mono text-[9.5px] uppercase tracking-[0.22em] text-signature", children: cap.benefit }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-[17px] font-semibold leading-tight text-foreground", children: cap.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[13px] leading-[1.6] text-muted-foreground", children: cap.description })
                ]
              },
              cap.title
            );
          })
        }
      )
    ] })
  ] });
}
function ChecklistBlock({
  eyebrow,
  headlineLines,
  features
}) {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate overflow-hidden py-24 lg:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackgroundField, { variant: "top-center" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-[960px] px-4 sm:px-6 lg:px-10", children: [
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
              eyebrow: eyebrow ?? "Built in",
              headlineLines,
              align: "center"
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
          className: "overflow-hidden rounded-xl border border-border/60 bg-background/85",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid divide-y divide-border/60 sm:grid-cols-2 sm:divide-x", children: features.map((feature, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              variants: innerItemVariants,
              className: cn(
                "flex items-start gap-3 px-5 py-4",
                i >= 2 && "sm:border-t sm:border-border/60"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-mint/30 bg-mint/10 text-mint", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-2.5 w-2.5", strokeWidth: 3 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13.5px] leading-[1.55] text-foreground/85", children: feature })
              ]
            },
            feature
          )) })
        }
      )
    ] })
  ] });
}
function FeatureCTABlock({
  eyebrow,
  headlineLines,
  sub,
  primaryCta,
  secondaryCta,
  trust
}) {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate overflow-hidden py-24 lg:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackgroundField, { variant: "top-center" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        ref,
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.6 },
        className: "mx-auto max-w-[820px]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              eyebrow,
              headlineLines,
              sub,
              align: "center"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center justify-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryCTA, { href: primaryCta.href, size: "lg", shortcut: primaryCta.shortcut, children: primaryCta.label }),
            secondaryCta ? /* @__PURE__ */ jsxRuntimeExports.jsx(SecondaryCTA, { href: secondaryCta.href, size: "lg", children: secondaryCta.label }) : null
          ] }),
          trust && trust.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-10 w-full max-w-[680px] overflow-hidden rounded-md border border-border/60 bg-background/60 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: cn(
                "grid divide-x divide-border/60",
                trust.length === 4 ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-3"
              ),
              children: trust.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-3 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-[1.05rem] font-semibold leading-none text-foreground", children: item.value }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5 font-mono text-[9.5px] uppercase tracking-[0.18em] text-foreground/45", children: item.label })
              ] }, item.label))
            }
          ) }) : null
        ]
      }
    ) })
  ] });
}
function ComparisonBlock({
  eyebrow,
  headlineLines,
  legacyLabel,
  legacyItems,
  modernLabel,
  modernItems
}) {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate overflow-hidden py-24 lg:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackgroundField, { variant: "top-center" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          ref,
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { duration: 0.6 },
          className: "mb-12 lg:mb-16",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow, headlineLines, align: "center" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
          transition: { duration: 0.6, delay: 0.2 },
          className: "grid gap-4 md:grid-cols-2 lg:gap-5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-xl border border-border/60 bg-background/85", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/60 bg-muted/30 px-5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { label: legacyLabel }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border/60", children: legacyItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 px-5 py-3.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-5 w-5 items-center justify-center rounded-full border border-destructive/30 bg-destructive/10 text-destructive", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "svg",
                  {
                    className: "h-2.5 w-2.5",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "3",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] text-muted-foreground", children: item.label })
              ] }, item.label)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-xl border border-signature/30 bg-[radial-gradient(circle_at_18%_12%,rgba(196,88,63,0.10),transparent_42%),linear-gradient(180deg,rgba(255,253,250,1),rgba(247,240,232,1))] shadow-[0_18px_50px_-26px_rgba(196,88,63,0.40)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-signature/15 bg-signature/[0.06] px-5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10.5px] uppercase tracking-[0.22em] text-signature", children: modernLabel }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px flex-1 bg-signature/20" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-[5px] border border-signature/30 bg-signature/15 px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-signature", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-signature" }),
                  "Recommended"
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-signature/15", children: modernItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 px-5 py-3.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-5 w-5 items-center justify-center rounded-full border border-signature/30 bg-signature/15 text-signature", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-2.5 w-2.5", strokeWidth: 3 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-medium text-foreground", children: item.label })
              ] }, item.label)) })
            ] })
          ]
        }
      )
    ] })
  ] });
}
export {
  BackgroundField as B,
  CapabilitiesBlock as C,
  EASE_OUT as E,
  FeatureHero as F,
  Kbd as K,
  PrimaryCTA as P,
  SectionHeader as S,
  SecondaryCTA as a,
  PainPointsBlock as b,
  FeatureCTABlock as c,
  innerItemVariants as d,
  SectionHeading as e,
  ComparisonBlock as f,
  ChecklistBlock as g,
  innerContainerVariants as i
};
