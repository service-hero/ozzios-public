import { r as reactExports, u as useInView, j as jsxRuntimeExports, m as motion, A as AnimatePresence } from "./vendor-framer-DZFBeC81.js";
import { c as cn } from "./button-DuL_ysbl.js";
import { u as useAudience, a as audienceContent } from "./LandingLayout-CPC6VFbg.js";
import { e as ChevronDown } from "./vendor-icons-RMyvaHp0.js";
import "./vendor-react-MO5I_vdy.js";
import "./vendor-radix-Bd9PM-r6.js";
import "./vendor-router-DD_41qJ4.js";
import "node:async_hooks";
function FAQSection() {
  const { audience } = useAudience();
  const faqs = audienceContent[audience].faq;
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = reactExports.useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faq", className: "relative py-32 lg:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1440px] px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        ref,
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.6 },
        className: "mb-16 max-w-5xl lg:mb-20",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-[0.72rem] font-medium uppercase tracking-[0.26em] text-foreground/45", children: "Common questions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-6 text-[clamp(3rem,5vw,5rem)] font-display font-medium text-foreground leading-[0.92] tracking-[-0.06em]", children: "Everything people ask before they switch." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-2xl text-lg leading-8 text-muted-foreground", children: "Pricing, rollout, implementation, and what the platform replaces." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.5, delay: 0.1 },
        className: "max-w-5xl",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 shadow-[0_20px_60px_rgba(56,40,29,0.08)] backdrop-blur-xl", children: faqs.map((faq, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          FAQItem,
          {
            question: faq.question,
            answer: faq.answer,
            isOpen: openIndex === index,
            onToggle: () => toggleFAQ(index),
            isFirst: index === 0
          },
          index
        )) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.5, delay: 0.3 },
        className: "mt-16 max-w-5xl text-left",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-muted-foreground", children: "Still have questions?" }),
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
            className: "group flex w-full items-center justify-between gap-4 px-6 py-6 text-left transition-colors hover:bg-muted/10",
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
            className: "overflow-hidden px-6",
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
