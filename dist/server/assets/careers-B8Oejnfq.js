import { r as reactExports, u as useInView, j as jsxRuntimeExports, m as motion } from "./vendor-framer-DZFBeC81.js";
import { L as LandingLayout } from "./LandingLayout-Dblq4RXp.js";
import { CTASection } from "./CTASection-W97BLrJq.js";
import { G as Globe, D as DollarSign, H as Heart, n as Cpu, R as Rocket, o as Calendar } from "./vendor-icons-D94uOSxG.js";
import "./vendor-react-MO5I_vdy.js";
import "./vendor-router-DD_41qJ4.js";
import "./vendor-radix-Bd9PM-r6.js";
import "node:async_hooks";
import "./utils-QXBWQHlM.js";
import "./_landing-primitives-Bieps6V3.js";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
};
const benefits = [
  {
    icon: Globe,
    title: "Remote-first",
    description: "Work from anywhere in the world. We believe great work happens where you are most productive."
  },
  {
    icon: DollarSign,
    title: "Competitive pay",
    description: "Top-of-market compensation with equity options. We pay well because we hire the best."
  },
  {
    icon: Heart,
    title: "Health & wellness",
    description: "Comprehensive health, dental, and vision coverage for you and your family."
  },
  {
    icon: Cpu,
    title: "Best-in-class tools",
    description: "Latest hardware, any software you need, and a generous home office stipend to set up your workspace."
  },
  {
    icon: Rocket,
    title: "Growth-oriented",
    description: "Learning budget, conference attendance, and mentorship from experienced leaders in the industry."
  },
  {
    icon: Calendar,
    title: "Flexible time off",
    description: "Unlimited PTO with a minimum of 3 weeks encouraged. Recharge when you need to."
  }
];
const values = [
  {
    title: "Ship with conviction",
    description: "We move fast, make decisions with incomplete information, and iterate based on real feedback."
  },
  {
    title: "Think from first principles",
    description: "We question assumptions and build solutions grounded in what actually matters, not industry convention."
  },
  {
    title: "Own the outcome",
    description: "Every person has full ownership over their work. No hand-offs, no finger-pointing."
  },
  {
    title: "Stay curious",
    description: "AI is evolving fast. We expect everyone to keep learning, experimenting, and pushing boundaries."
  }
];
function CareersView() {
  const heroRef = reactExports.useRef(null);
  const benefitsRef = reactExports.useRef(null);
  const valuesRef = reactExports.useRef(null);
  const positionsRef = reactExports.useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const positionsInView = useInView(positionsRef, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        ref: heroRef,
        initial: { opacity: 0, y: 20 },
        animate: heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.6 },
        className: "text-center max-w-3xl mx-auto",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-sm font-medium text-signature mb-4 tracking-wide uppercase", children: "Careers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6", children: "Join the team" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto", children: "We're building the future of home service business automation. Our AI agents replace entire back-office workflows -- and we need exceptional people to make it happen." })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 lg:py-32 bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          ref: benefitsRef,
          initial: { opacity: 0, y: 20 },
          animate: benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { duration: 0.6 },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4", children: "Why work at OzziOs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "We take care of our team so they can focus on building extraordinary products." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          variants: containerVariants,
          initial: "hidden",
          animate: benefitsInView ? "visible" : "hidden",
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",
          children: benefits.map((benefit) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              variants: itemVariants,
              className: "rounded-xl border-2 border-border bg-card p-8 transition-all duration-150 hover:shadow-[4px_4px_0_0_hsl(var(--border))] hover:translate-x-[-2px] hover:translate-y-[-2px]",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-lg bg-signature/10 mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(benefit.icon, { className: "h-6 w-6 text-signature" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg text-foreground mb-2", children: benefit.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: benefit.description })
              ]
            },
            benefit.title
          ))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          ref: valuesRef,
          initial: { opacity: 0, y: 20 },
          animate: valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { duration: 0.6 },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4", children: "Our values" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "These principles guide how we build, collaborate, and make decisions." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          variants: containerVariants,
          initial: "hidden",
          animate: valuesInView ? "visible" : "hidden",
          className: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto",
          children: values.map((value, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              variants: itemVariants,
              className: "flex gap-5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground text-background font-display text-sm", children: index + 1 }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg text-foreground mb-1", children: value.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: value.description })
                ] })
              ]
            },
            value.title
          ))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 lg:py-32 bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        ref: positionsRef,
        initial: { opacity: 0, y: 20 },
        animate: positionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.6 },
        className: "text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4", children: "Open positions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto mb-12", children: "We're always looking for talented people. Check back soon for new openings." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border-2 border-dashed border-border bg-card/50 p-16 max-w-2xl mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-7 w-7 text-muted-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-foreground mb-3", children: "No open positions right now" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8 max-w-md mx-auto", children: "We're not actively hiring at the moment, but we're always interested in hearing from exceptional people. Follow us to stay updated." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "https://x.com/ozzios",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg border-2 border-border bg-background text-foreground font-medium text-sm hover:bg-muted transition-colors duration-150",
                  children: "Follow on X"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "https://linkedin.com/company/ozzios",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg border-2 border-border bg-background text-foreground font-medium text-sm hover:bg-muted transition-colors duration-150",
                  children: "Follow on LinkedIn"
                }
              )
            ] })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
function CareersPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LandingLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CareersView, {}) });
}
export {
  CareersPage as component
};
