import { r as reactExports, u as useInView, j as jsxRuntimeExports, m as motion } from "./vendor-framer-DZFBeC81.js";
import { c as cn } from "./button-DuL_ysbl.js";
import { u as useAudience, a as audienceContent } from "./LandingLayout-CPC6VFbg.js";
import { a as Check } from "./vendor-icons-RMyvaHp0.js";
import "./vendor-react-MO5I_vdy.js";
import "./vendor-radix-Bd9PM-r6.js";
import "./vendor-router-DD_41qJ4.js";
import "node:async_hooks";
const stepImages = [
  "/images/Gemini_Generated_Image_u6mqxnu6mqxnu6mq.webp",
  "/images/Gemini_Generated_Image_2eqehs2eqehs2eqe.webp",
  "/images/Gemini_Generated_Image_rbkrybrbkrybrbkr.webp",
  "/images/Gemini_Generated_Image_bj78nibj78nibj78.webp"
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }
  }
};
function FeaturesSection() {
  const { audience } = useAudience();
  const content = audienceContent[audience].howItWorks;
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "how-it-works", className: "relative overflow-hidden py-32 lg:py-40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 top-32 h-80 bg-[radial-gradient(circle_at_top,rgba(196,88,63,0.08),transparent_60%)] blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1440px] px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
          transition: { duration: 0.7 },
          className: "mb-20 max-w-5xl",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-[0.72rem] font-medium uppercase tracking-[0.26em] text-foreground/45", children: content.sectionLabel }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "max-w-5xl text-[clamp(3rem,5.4vw,5.4rem)] font-display font-medium tracking-[-0.06em] text-foreground mb-6 leading-[0.92]", children: [
              content.headline[0],
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/78", children: content.headline[1] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-2xl text-lg leading-8 text-muted-foreground", children: content.subheadline })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden lg:block overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full bg-border/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { top: "-100%" },
              animate: { top: "100%" },
              transition: { duration: 5, repeat: Infinity, ease: "linear" },
              className: "absolute left-0 w-full h-[30%] bg-gradient-to-b from-transparent via-signature to-transparent opacity-50"
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
            className: "space-y-8 lg:space-y-24 relative z-10",
            children: content.steps.map((step, index) => {
              const image = stepImages[index];
              const isEven = index % 2 === 0;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  variants: itemVariants,
                  className: cn(
                    "relative group",
                    isEven ? "lg:mr-[50%] lg:pr-12" : "lg:ml-[50%] lg:pl-12"
                  ),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(
                      "absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-background bg-border hidden lg:block z-20 transition-colors duration-300 group-hover:bg-signature",
                      isEven ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-[0_20px_60px_rgba(56,40,29,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_90px_rgba(56,40,29,0.12)]",
                        style: { backgroundColor: "rgba(255,255,255,0.94)" },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn(
                          "flex flex-col lg:flex-row",
                          !isEven && "lg:flex-row-reverse"
                        ), children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative lg:w-2/5 h-48 lg:h-auto min-h-[200px]", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "img",
                              {
                                src: image,
                                alt: step.title,
                                className: "absolute inset-0 w-full h-full object-cover"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(
                              "absolute inset-0",
                              isEven ? "bg-gradient-to-r from-transparent via-transparent to-card" : "bg-gradient-to-l from-transparent via-transparent to-card",
                              "hidden lg:block"
                            ) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent lg:hidden" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(
                              "absolute top-6 font-bold text-[64px] leading-none text-foreground/[0.08]",
                              isEven ? "left-6" : "right-6"
                            ), children: String(index + 1).padStart(2, "0") })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 p-8 lg:p-10 flex flex-col justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl lg:text-2xl font-display text-foreground mb-3", children: step.title }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] leading-relaxed text-muted-foreground mb-4", children: step.description }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-4", children: step.benefits.map((benefit) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "span",
                              {
                                className: "inline-flex items-center gap-1.5 text-[12px] text-muted-foreground",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5 text-signature" }),
                                  benefit
                                ]
                              },
                              benefit
                            )) })
                          ] }) }) })
                        ] })
                      }
                    )
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
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { duration: 0.5, delay: 0.6 },
          className: "mt-20 text-center",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://app.ozzios.com/sign-up",
              className: "inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-white transition-all duration-200 group shadow-[0_18px_40px_rgba(41,30,23,0.16)] hover:bg-foreground/92",
              children: [
                "Get Early Access",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform group-hover:translate-x-0.5", children: "→" })
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
