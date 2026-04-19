import { r as reactExports, u as useInView, j as jsxRuntimeExports, m as motion } from "./vendor-framer-DZFBeC81.js";
import { u as useAudience, a as audienceContent } from "./LandingLayout-CPC6VFbg.js";
import { p as Star } from "./vendor-icons-RMyvaHp0.js";
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
      staggerChildren: 0.08
    }
  }
};
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
};
function TestimonialsSection() {
  const { audience } = useAudience();
  const content = audienceContent[audience].testimonials;
  const headerRef = reactExports.useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "testimonials",
      className: "relative py-32 lg:py-40",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1440px] px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            ref: headerRef,
            initial: { opacity: 0, y: 20 },
            animate: isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
            transition: { duration: 0.6 },
            className: "mb-16 max-w-5xl lg:mb-24",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-[0.72rem] font-medium uppercase tracking-[0.26em] text-foreground/45", children: content.sectionLabel }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "max-w-5xl text-[clamp(3rem,5.6vw,5.6rem)] font-display font-medium text-foreground leading-[0.92] tracking-[-0.06em] mb-6", children: [
                content.headline[0],
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/78", children: content.headline[1] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-2xl text-lg leading-8 text-muted-foreground", children: content.subheadline })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true, margin: "-50px" },
            variants: containerVariants,
            className: "grid gap-6 lg:grid-cols-[1.2fr_1fr_1fr]",
            children: [
              content.items.map((testimonial, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  variants: cardVariants,
                  className: "rounded-[2rem] border border-white/80 bg-white/80 p-8 shadow-[0_20px_60px_rgba(56,40,29,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_90px_rgba(56,40,29,0.12)]",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-8 text-[15px] leading-8 text-muted-foreground", children: [
                      '"',
                      testimonial.content,
                      '"'
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: testimonial.image,
                          alt: testimonial.name,
                          className: "h-12 w-12 rounded-2xl object-cover"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-medium text-foreground", children: testimonial.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                          testimonial.role,
                          testimonial.company ? `, ${testimonial.company}` : ""
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
                  className: "flex h-full flex-col justify-between rounded-[2rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,249,244,0.98),rgba(239,226,214,0.98))] p-8 shadow-[0_24px_70px_rgba(56,40,29,0.1)]",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 flex gap-1", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-5 w-5 fill-signature text-signature" }, i)) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-foreground/45", children: "Operator sentiment" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "max-w-[11ch] font-display text-[2.3rem] leading-[0.94] tracking-[-0.05em] text-foreground", children: "Early teams are sticking with it." }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-sm text-[15px] leading-7 text-muted-foreground", children: "We are still onboarding beta customers, so the public quote wall is intentionally tight. The usage signal is already strong." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center", children: [
                        content.items.map((testimonial, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "img",
                          {
                            src: testimonial.image,
                            alt: testimonial.name,
                            className: "relative -ml-3 h-11 w-11 rounded-2xl border border-white/80 object-cover first:ml-0",
                            style: { zIndex: content.items.length - index }
                          },
                          testimonial.name
                        )),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative -ml-3 flex h-11 w-11 items-center justify-center rounded-2xl border border-border/70 bg-white/70 text-[11px] font-semibold tracking-[0.12em] text-foreground/68", children: "+498" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: content.trustStats.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "rounded-[1.35rem] border border-border/60 bg-white/60 px-4 py-4",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-semibold tracking-tight text-foreground", children: stat.value }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[0.64rem] uppercase tracking-[0.18em] text-foreground/45", children: stat.label })
                          ]
                        },
                        stat.label
                      )) })
                    ] })
                  ]
                }
              )
            ]
          }
        )
      ] })
    }
  );
}
export {
  TestimonialsSection
};
