import { r as reactExports, u as useInView, j as jsxRuntimeExports, m as motion } from "./vendor-framer-DZFBeC81.js";
import { B as BackgroundField, E as EASE_OUT, S as SectionHeader, P as PrimaryCTA, a as SecondaryCTA } from "./_landing-primitives-Bieps6V3.js";
import { D as DEMO_CTA_HREF } from "./LandingLayout-Dblq4RXp.js";
import { e as CalendarCheck, f as Sparkles, M as MessageSquare } from "./vendor-icons-D94uOSxG.js";
import "./vendor-react-MO5I_vdy.js";
import "./vendor-router-DD_41qJ4.js";
import "./vendor-radix-Bd9PM-r6.js";
import "node:async_hooks";
import "./utils-QXBWQHlM.js";
const demoSteps = [
  {
    icon: CalendarCheck,
    title: "Pick a time",
    description: "A 30-minute working session with our team. No slide-deck pitch — we open the product and tailor it to your business."
  },
  {
    icon: Sparkles,
    title: "See it on your data",
    description: "We configure agents, workflows, and integrations against a real workflow from your business so you see the lift, not a sandbox."
  },
  {
    icon: MessageSquare,
    title: "Get a tailored plan",
    description: "You leave with a written rollout plan and a transparent quote sized to your team, locations, and AI volume."
  }
];
function PricingSection() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "pricing", className: "relative isolate overflow-hidden py-28 lg:py-36", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackgroundField, { variant: "top-center" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          ref,
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { duration: 0.6, ease: EASE_OUT },
          className: "mb-14 lg:mb-16",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              eyebrow: "Setup a demo",
              headlineLines: ["See OzziOS", "on your business."],
              sub: "A 30-minute working session where we configure agents, workflows, and integrations against a real workflow from your business — and quote it on the spot.",
              align: "center"
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { duration: 0.5, delay: 0.1, ease: EASE_OUT },
          className: "mx-auto grid max-w-[980px] grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4",
          children: demoSteps.map((step, index) => {
            const Icon = step.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative flex flex-col gap-3 rounded-xl border border-border/60 bg-background/80 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:shadow-[0_18px_50px_-26px_rgba(34,27,22,0.30)]",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/60 bg-background text-foreground/70", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-signature" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/40", children: String(index + 1).padStart(2, "0") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[15px] font-semibold text-foreground", children: step.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12.5px] leading-[1.55] text-muted-foreground", children: step.description })
                ]
              },
              step.title
            );
          })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { duration: 0.5, delay: 0.25, ease: EASE_OUT },
          className: "mx-auto mt-10 flex max-w-[980px] flex-col items-center justify-center gap-4 sm:flex-row",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryCTA, { href: DEMO_CTA_HREF, size: "lg", shortcut: "D", children: "Setup a demo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SecondaryCTA, { href: "/contact", size: "lg", children: "Talk to sales" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0 },
          animate: isInView ? { opacity: 1 } : { opacity: 0 },
          transition: { duration: 0.5, delay: 0.4 },
          className: "mt-6 text-center font-mono text-[10.5px] uppercase tracking-[0.22em] text-foreground/45",
          children: "30 minutes · Real product, real data · Quote at the end"
        }
      )
    ] })
  ] });
}
export {
  PricingSection
};
