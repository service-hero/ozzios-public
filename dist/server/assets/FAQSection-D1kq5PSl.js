import { a as reactExports, n as jsxRuntimeExports } from "./worker-entry-B5eyDbT7.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { u as useAudience, b as audienceContent, C as ChevronDown, A as AnimatePresence } from "./LandingLayout-DPGYOMoS.js";
import { u as useInView } from "./use-in-view-HBZ--VZ_.js";
import { m as motion } from "./proxy-CClMHKlh.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "./router-CRqcsHLj.js";
import "./button-CdRR1kGv.js";
import "./createLucideIcon-BabvJ7L_.js";
import "./menu-CRWpwPmx.js";
function FAQSection() {
  const { audience } = useAudience();
  const faqs = audienceContent[audience].faq;
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = reactExports.useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faq", className: "relative py-24 lg:py-32 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        ref,
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.6 },
        className: "text-center mb-16 lg:mb-20 flex flex-col items-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-px bg-signature" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold text-signature uppercase tracking-[0.2em]", children: "FAQ" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-px bg-signature" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground leading-[1.1] tracking-tight mb-6", children: [
            "Frequently asked",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/80", children: "questions" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-xl font-light leading-relaxed", children: "Everything you need to know about OzziOS." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.5, delay: 0.1 },
        className: "space-y-0",
        children: faqs.map((faq, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          FAQItem,
          {
            question: faq.question,
            answer: faq.answer,
            isOpen: openIndex === index,
            onToggle: () => toggleFAQ(index),
            isFirst: index === 0
          },
          index
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.5, delay: 0.3 },
        className: "mt-16 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-3", children: "Still have questions?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "mailto:support@ozzios.com",
              className: "inline-flex items-center gap-2 text-[15px] font-medium text-foreground hover:text-signature transition-colors duration-200",
              children: [
                "Contact our team",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-signature", children: "→" })
              ]
            }
          )
        ]
      }
    )
  ] }) });
}
function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  isFirst
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "border-b border-border/50",
        isFirst && "border-t"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: onToggle,
            className: "w-full flex items-center justify-between gap-4 py-6 text-left group hover:bg-muted/10 transition-colors px-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn(
                "text-base md:text-lg font-medium transition-colors duration-200",
                isOpen ? "text-foreground" : "text-foreground/80 group-hover:text-foreground"
              ), children: question }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(
                "shrink-0 h-8 w-8 rounded-full border border-border/80 flex items-center justify-center transition-all duration-200",
                isOpen ? "rotate-180 bg-signature/5 border-signature/30" : "group-hover:border-foreground/20 group-hover:bg-muted/50"
              ), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: cn(
                "h-4 w-4 transition-colors duration-200",
                isOpen ? "text-signature" : "text-muted-foreground group-hover:text-foreground"
              ) }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.25, ease: "easeInOut" },
            className: "overflow-hidden px-2",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pb-8 pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pl-0 border-l-2 border-signature/30 pl-4 ml-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed text-muted-foreground/90 font-light max-w-3xl", children: answer }) }) })
          }
        ) })
      ]
    }
  );
}
export {
  FAQSection
};
