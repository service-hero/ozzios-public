import { a as reactExports, n as jsxRuntimeExports } from "./worker-entry-CLCwO71W.js";
import { u as useAudience, b as audienceContent } from "./LandingLayout-BbzH_Y3t.js";
import { u as useInView } from "./use-in-view-CVc3ddL5.js";
import { m as motion } from "./proxy-wI6KZf5t.js";
import { S as Star } from "./star-CBD98tTM.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "./router-CGQQDatO.js";
import "./utils-QXBWQHlM.js";
import "./button-R9GB7f-h.js";
import "./createLucideIcon-U9gqAy8t.js";
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
      className: "relative py-24 lg:py-32 bg-background",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            ref: headerRef,
            initial: { opacity: 0, y: 20 },
            animate: isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
            transition: { duration: 0.6 },
            className: "text-center mb-16 lg:mb-24 flex flex-col items-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-px bg-signature" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold text-signature uppercase tracking-[0.2em]", children: content.sectionLabel }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-px bg-signature" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground leading-[1.1] tracking-tight mb-6", children: [
                content.headline[0],
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/80", children: content.headline[1] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-xl font-light leading-relaxed", children: content.subheadline })
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
            className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
            children: [
              content.items.map((testimonial, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  variants: cardVariants,
                  className: "bg-card rounded-xl border border-border/80 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] hover:border-signature/30 transition-all duration-300",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-[15px] leading-relaxed mb-8", children: [
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
                          className: "h-12 w-12 rounded-full object-cover"
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
                  className: "bg-card rounded-xl border border-border/80 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-center justify-center text-center",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-4", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-5 h-5 fill-signature text-signature" }, i)) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-semibold text-foreground mb-2", children: "Hundreds more" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-[15px] leading-relaxed", children: "We're currently in beta with early users. More reviews coming soon." })
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: 0.2 },
            className: "mt-16 lg:mt-20 pt-12 border-t border-border/50",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-center gap-12 lg:gap-20", children: content.trustStats.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-semibold text-foreground mb-1", children: stat.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: stat.label })
            ] }, stat.label)) })
          }
        )
      ] })
    }
  );
}
export {
  TestimonialsSection
};
