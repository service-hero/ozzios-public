import { r as reactExports, u as useInView, j as jsxRuntimeExports, m as motion } from "./vendor-framer-DZFBeC81.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { a as useAudience, b as audienceContent } from "./LandingLayout-Dblq4RXp.js";
import { B as BackgroundField, S as SectionHeader, E as EASE_OUT, e as SectionHeading } from "./_landing-primitives-Bieps6V3.js";
import { u as Star, Q as Quote } from "./vendor-icons-D94uOSxG.js";
import "./vendor-react-MO5I_vdy.js";
import "./vendor-router-DD_41qJ4.js";
import "./vendor-radix-Bd9PM-r6.js";
import "node:async_hooks";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};
const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } }
};
function TestimonialsSection() {
  const { audience } = useAudience();
  const content = audienceContent[audience].testimonials;
  const headerRef = reactExports.useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "testimonials", className: "relative isolate overflow-hidden py-28 lg:py-36", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackgroundField, { variant: "top-left" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          ref: headerRef,
          initial: { opacity: 0, y: 20 },
          animate: isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { duration: 0.6 },
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, margin: "-50px" },
          variants: containerVariants,
          className: "grid gap-4 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-5",
          children: [
            content.items.map((testimonial, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.article,
              {
                variants: cardVariants,
                className: "group/q flex flex-col rounded-xl border border-border/60 bg-background p-7 shadow-[0_12px_40px_-22px_rgba(34,27,22,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:shadow-[0_22px_50px_-22px_rgba(34,27,22,0.32)]",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-signature text-signature" }, i)) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-4 w-4 text-foreground/15" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "flex-1 text-[14.5px] leading-[1.65] text-foreground/85", children: testimonial.content }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex items-center gap-3 border-t border-border/50 pt-5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: testimonial.image,
                        alt: testimonial.name,
                        className: "h-10 w-10 rounded-md object-cover ring-1 ring-border/60"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13.5px] font-semibold text-foreground", children: testimonial.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/50", children: [
                        testimonial.role,
                        testimonial.company ? ` · ${testimonial.company}` : ""
                      ] })
                    ] })
                  ] })
                ]
              },
              index
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                variants: cardVariants,
                className: "flex h-full flex-col rounded-xl border border-signature/30 bg-[radial-gradient(circle_at_18%_12%,rgba(196,88,63,0.10),transparent_42%),linear-gradient(180deg,rgba(255,253,250,1),rgba(247,240,232,1))] p-7",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { label: "Operator sentiment" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center gap-1", children: [
                      [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-signature text-signature" }, i)),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 font-mono text-[11px] tabular-nums text-foreground/65", children: "4.9 / 5" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 max-w-[14ch] font-display text-[1.7rem] font-semibold leading-[1.05] tracking-[-0.025em] text-foreground sm:text-[1.9rem]", children: "Early teams are sticking with it." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-[36ch] text-[13.5px] leading-[1.6] text-muted-foreground", children: "Still onboarding beta customers, so the public quote wall is intentionally tight. The usage signal is already strong." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center", children: [
                      content.items.map((t, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: t.image,
                          alt: t.name,
                          className: cn(
                            "relative -ml-2 h-9 w-9 rounded-md border border-border/60 object-cover ring-1 ring-background first:ml-0"
                          ),
                          style: { zIndex: content.items.length - index }
                        },
                        t.name
                      )),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative -ml-2 inline-flex h-9 items-center gap-1.5 rounded-md border border-border/60 bg-background px-3 font-mono text-[10px] uppercase tracking-wider text-foreground/65", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tabular-nums text-foreground/85", children: "+498" }),
                        "in beta"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-md border border-border/60 bg-background/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 divide-x divide-border/60", children: content.trustStats.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-3 text-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-[1.2rem] font-semibold leading-none tabular-nums tracking-[-0.025em] text-foreground", children: stat.value }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-foreground/45", children: stat.label })
                    ] }, stat.label)) }) })
                  ] })
                ]
              }
            )
          ]
        }
      )
    ] })
  ] });
}
export {
  TestimonialsSection
};
