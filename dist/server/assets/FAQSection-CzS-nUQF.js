import { r as reactExports, u as useInView, j as jsxRuntimeExports, m as motion, A as AnimatePresence } from "./vendor-framer-DZFBeC81.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { u as useAudience, a as audienceContent } from "./LandingLayout-D-c6g3QV.js";
import { B as BackgroundField, S as SectionHeader, K as Kbd, E as EASE_OUT } from "./_landing-primitives-BgwWv7GL.js";
import { ax as MessageCircle, p as ArrowUpRight, be as Plus } from "./vendor-icons-BFmuwI-v.js";
import "./vendor-react-MO5I_vdy.js";
import "./vendor-router-DD_41qJ4.js";
import "./vendor-radix-Bd9PM-r6.js";
import "node:async_hooks";
function FAQSection() {
  const { audience } = useAudience();
  const faqs = audienceContent[audience].faq;
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "faq", className: "relative isolate overflow-hidden py-28 lg:py-36", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackgroundField, { variant: "top-right" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          ref,
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { duration: 0.6 },
          className: "lg:col-span-5 lg:sticky lg:top-24 lg:self-start",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeader,
              {
                eyebrow: "Common questions",
                headlineLines: ["Everything people ask", "before they switch."],
                sub: "Pricing, rollout, implementation, and what the platform replaces."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 rounded-xl border border-border/60 bg-background p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border/60 bg-muted/40 text-foreground/70", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13.5px] font-semibold text-foreground", children: "Still have questions?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[12.5px] leading-[1.55] text-muted-foreground", children: "Real human responses within one business day." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "mailto:support@ozzios.com",
                    className: "group/c mt-3 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-foreground/80 transition-colors hover:text-signature",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative", children: [
                        "support@ozzios.com",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-px left-0 h-px w-0 bg-signature transition-all duration-200 group-hover/c:w-full" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3 transition-transform duration-200 group-hover/c:-translate-y-0.5 group-hover/c:translate-x-0.5" })
                    ]
                  }
                )
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-foreground/45", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Kbd, { className: "h-[18px] min-w-[18px] text-[10px]", children: "/" }),
              "Press to search the docs"
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { duration: 0.5, delay: 0.1, ease: EASE_OUT },
          className: "lg:col-span-7",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-xl border border-border/60 bg-background/85 shadow-[0_18px_50px_-26px_rgba(34,27,22,0.30)]", children: faqs.map((faq, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            FAQItem,
            {
              index: index + 1,
              question: faq.question,
              answer: faq.answer,
              isOpen: openIndex === index,
              onToggle: () => setOpenIndex(openIndex === index ? null : index),
              isFirst: index === 0,
              isLast: index === faqs.length - 1
            },
            index
          )) })
        }
      )
    ] }) })
  ] });
}
function FAQItem({
  index,
  question,
  answer,
  isOpen,
  onToggle,
  isFirst,
  isLast
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "group/q border-b border-border/60 transition-colors",
        isLast && "border-b-0",
        isOpen && "bg-muted/20"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: onToggle,
            "aria-expanded": isOpen,
            className: "flex w-full items-start gap-4 px-5 py-5 text-left transition-colors hover:bg-muted/15 sm:px-6 sm:py-6",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: cn(
                    "mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border font-mono text-[10px] font-semibold tabular-nums transition-colors",
                    isOpen ? "border-signature/30 bg-signature/10 text-signature" : "border-border/60 bg-background text-foreground/55"
                  ),
                  children: String(index).padStart(2, "0")
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: cn(
                    "flex-1 text-[14.5px] font-medium leading-[1.5] transition-colors sm:text-[15.5px]",
                    isOpen ? "text-foreground" : "text-foreground/85 group-hover/q:text-foreground"
                  ),
                  children: question
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: cn(
                    "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border transition-all duration-200",
                    isOpen ? "rotate-45 border-signature/30 bg-signature/10 text-signature" : "border-border/60 text-foreground/55 group-hover/q:border-foreground/25 group-hover/q:text-foreground"
                  ),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.25, ease: "easeInOut" },
            className: "overflow-hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-6 pl-[3.5rem] sm:px-6 sm:pl-[4rem]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-[68ch] text-[14px] leading-[1.65] text-muted-foreground", children: answer }) })
          }
        ) : null })
      ]
    }
  );
}
export {
  FAQSection
};
