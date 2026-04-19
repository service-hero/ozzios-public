import { r as reactExports, u as useInView, j as jsxRuntimeExports, m as motion } from "./vendor-framer-DZFBeC81.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { u as useAudience, a as audienceContent } from "./LandingLayout-D-c6g3QV.js";
import { B as BackgroundField, E as EASE_OUT, S as SectionHeader, c as SectionHeading, K as Kbd } from "./_landing-primitives-BgwWv7GL.js";
import { a as Check, A as ArrowRight } from "./vendor-icons-BFmuwI-v.js";
import "./vendor-react-MO5I_vdy.js";
import "./vendor-router-DD_41qJ4.js";
import "./vendor-radix-Bd9PM-r6.js";
import "node:async_hooks";
const stepImages = [
  "/images/Gemini_Generated_Image_u6mqxnu6mqxnu6mq.webp",
  "/images/Gemini_Generated_Image_2eqehs2eqehs2eqe.webp",
  "/images/Gemini_Generated_Image_rbkrybrbkrybrbkr.webp",
  "/images/Gemini_Generated_Image_bj78nibj78nibj78.webp"
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } }
};
function FeaturesSection() {
  const { audience } = useAudience();
  const content = audienceContent[audience].howItWorks;
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "how-it-works", className: "relative isolate overflow-hidden py-28 lg:py-36", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackgroundField, { variant: "top-right" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
          transition: { duration: 0.7, ease: EASE_OUT },
          className: "mb-14 lg:mb-20",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              eyebrow: content.sectionLabel,
              headlineLines: [content.headline[0], content.headline[1]],
              sub: content.subheadline
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 overflow-hidden lg:block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-full bg-border/50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { top: "-100%" },
              animate: { top: "100%" },
              transition: { duration: 6, repeat: Infinity, ease: "linear" },
              className: "absolute left-0 h-[28%] w-full bg-gradient-to-b from-transparent via-signature to-transparent opacity-60"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            ref,
            initial: "hidden",
            animate: isInView ? "visible" : "hidden",
            variants: containerVariants,
            className: "relative z-10 space-y-8 lg:space-y-20",
            children: content.steps.map((step, index) => {
              const image = stepImages[index];
              const isEven = index % 2 === 0;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  variants: itemVariants,
                  className: cn(
                    "group/step relative",
                    isEven ? "lg:mr-[50%] lg:pr-10" : "lg:ml-[50%] lg:pl-10"
                  ),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        "aria-hidden": true,
                        className: cn(
                          "absolute top-1/2 z-20 hidden h-3 w-3 -translate-y-1/2 rounded-full border-2 border-background bg-foreground/20 transition-colors duration-300 group-hover/step:bg-signature lg:block",
                          isEven ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-xl border border-border/70 bg-background shadow-[0_18px_50px_-26px_rgba(34,27,22,0.30)] transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:shadow-[0_24px_60px_-22px_rgba(34,27,22,0.40)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex flex-col lg:flex-row", !isEven && "lg:flex-row-reverse"), children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-48 min-h-[200px] overflow-hidden lg:h-auto lg:w-2/5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "img",
                          {
                            src: image,
                            alt: step.title,
                            className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover/step:scale-[1.04]"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            "aria-hidden": true,
                            className: cn(
                              "absolute inset-0 hidden lg:block",
                              isEven ? "bg-gradient-to-r from-transparent via-transparent to-background/95" : "bg-gradient-to-l from-transparent via-transparent to-background/95"
                            )
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            "aria-hidden": true,
                            className: "absolute inset-0 bg-gradient-to-t from-background via-background/55 to-transparent lg:hidden"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: cn(
                              "absolute top-4 font-display text-[3rem] font-semibold leading-none tracking-[-0.04em] text-foreground/[0.10]",
                              isEven ? "left-5" : "right-5"
                            ),
                            children: String(index + 1).padStart(2, "0")
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col justify-center p-7 lg:p-9", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { label: `Step ${String(index + 1).padStart(2, "0")}` }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-[1.5rem] font-semibold leading-[1.05] tracking-[-0.025em] text-foreground sm:text-[1.7rem]", children: step.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-[42ch] text-[14px] leading-[1.6] text-muted-foreground", children: step.description }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-x-4 gap-y-1.5", children: step.benefits.map((benefit) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "span",
                          {
                            className: "inline-flex items-center gap-1.5 text-[12px] text-muted-foreground",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-3.5 w-3.5 items-center justify-center rounded-full border border-signature/30 bg-signature/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-2 w-2 text-signature", strokeWidth: 3 }) }),
                              benefit
                            ]
                          },
                          benefit
                        )) })
                      ] })
                    ] }) })
                  ]
                },
                step.number
              );
            })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
          transition: { duration: 0.5, delay: 0.5 },
          className: "mt-16 flex justify-center",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://app.ozzios.com/sign-up",
              className: cn(
                "group/cta relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-md bg-foreground pl-5 pr-3 text-[14px] font-medium text-background",
                "shadow-[0_1px_0_rgba(255,255,255,0.18)_inset,0_14px_30px_-12px_rgba(34,27,22,0.45)]",
                "transition-all duration-200 hover:bg-[#1a1410] active:translate-y-px"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" }),
                "Get early access",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Kbd, { tone: "dark", children: "S" })
              ]
            }
          )
        }
      )
    ] })
  ] });
}
export {
  FeaturesSection
};
