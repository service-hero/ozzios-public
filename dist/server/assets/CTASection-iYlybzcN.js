import { a as reactExports, n as jsxRuntimeExports } from "./worker-entry-DUbV-qEz.js";
import { u as useAudience, b as audienceContent } from "./LandingLayout-BFxFbzxM.js";
import { u as useInView } from "./use-in-view-DoLVnWF9.js";
import { m as motion, A as ArrowRight } from "./proxy-BEnWwJWi.js";
function CTASection() {
  const { audience } = useAudience();
  const content = audienceContent[audience].cta;
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 lg:py-32 bg-muted/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-4xl px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 20 },
      animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
      transition: { duration: 0.6 },
      className: "text-center",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight mb-6", children: [
          content.headline[0],
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: content.headline[1] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground mb-10 max-w-lg mx-auto", children: content.subtext }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://app.ozzios.com/sign-up",
            className: "inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200",
            children: [
              content.primaryButton,
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#contact",
            className: "text-sm text-muted-foreground hover:text-foreground/80 transition-colors",
            children: content.secondaryButton
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "SOC 2 Compliant" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline text-border", children: "|" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "GDPR Ready" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline text-border", children: "|" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "99.9% Uptime SLA" })
        ] })
      ]
    }
  ) }) });
}
export {
  CTASection as C
};
