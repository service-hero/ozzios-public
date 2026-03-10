import { a as reactExports, n as jsxRuntimeExports } from "./worker-entry-CLCwO71W.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { u as useAudience, b as audienceContent } from "./LandingLayout-BbzH_Y3t.js";
import { u as useInView } from "./use-in-view-CVc3ddL5.js";
import { m as motion } from "./proxy-wI6KZf5t.js";
import { C as Check } from "./check-kfc8KpZJ.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "./router-CGQQDatO.js";
import "./button-R9GB7f-h.js";
import "./createLucideIcon-U9gqAy8t.js";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "how-it-works", className: "py-24 lg:py-32 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1200px] px-6 lg:px-8", children: [
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl lg:text-5xl font-display font-medium tracking-tight text-foreground mb-6 leading-[1.1]", children: [
            content.headline[0],
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/80", children: content.headline[1] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed font-light", children: content.subheadline })
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border/80 bg-card overflow-hidden hover:border-signature/30 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn(
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
                        "absolute top-6 font-bold text-[64px] leading-none text-border",
                        isEven ? "left-6" : "right-6"
                      ), children: String(index + 1).padStart(2, "0") })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 p-8 lg:p-10 flex flex-col justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[12px] font-semibold text-muted-foreground uppercase tracking-wide mb-2", children: [
                        "Step ",
                        String(index + 1).padStart(2, "0")
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl lg:text-2xl font-display text-foreground mb-3", children: step.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] leading-relaxed text-muted-foreground mb-4", children: step.description }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-4", children: step.benefits.map((benefit) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: "inline-flex items-center gap-1.5 text-[12px] text-muted-foreground",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5 text-muted-foreground" }),
                            benefit
                          ]
                        },
                        benefit
                      )) })
                    ] }) }) })
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
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.5, delay: 0.6 },
        className: "mt-20 text-center",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://app.ozzios.com/sign-up",
            className: "inline-flex items-center gap-2 px-8 py-4 rounded-md bg-signature text-white font-medium text-sm hover:bg-signature/90 transition-all duration-200 group shadow-sm",
            children: [
              "Get Early Access",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform group-hover:translate-x-0.5", children: "→" })
            ]
          }
        )
      }
    )
  ] }) });
}
export {
  FeaturesSection
};
