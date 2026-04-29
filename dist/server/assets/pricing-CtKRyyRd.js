import { j as jsxRuntimeExports, r as reactExports, u as useInView, m as motion, A as AnimatePresence } from "./vendor-framer-DZFBeC81.js";
import { D as DEMO_CTA_HREF, L as LandingLayout } from "./LandingLayout-Dblq4RXp.js";
import { CTASection } from "./CTASection-W97BLrJq.js";
import { B as BackgroundField, E as EASE_OUT, S as SectionHeader, P as PrimaryCTA, a as SecondaryCTA, K as Kbd } from "./_landing-primitives-Bieps6V3.js";
import { e as CalendarCheck, f as Sparkles, g as ClipboardCheck, U as Users, h as ShieldCheck, M as MessageSquare, P as Plus } from "./vendor-icons-D94uOSxG.js";
import "./vendor-react-MO5I_vdy.js";
import "./vendor-router-DD_41qJ4.js";
import "./vendor-radix-Bd9PM-r6.js";
import "node:async_hooks";
import "./utils-QXBWQHlM.js";
const demoSteps = [
  {
    icon: CalendarCheck,
    title: "Pick a time",
    description: "A 30-minute working session with our team. No slide-deck pitch — we open the product and tailor it live."
  },
  {
    icon: Sparkles,
    title: "See it on your data",
    description: "We configure agents, workflows, and integrations against a real workflow from your business so you see the lift, not a sandbox."
  },
  {
    icon: ClipboardCheck,
    title: "Get a tailored plan",
    description: "You leave with a written rollout plan and a transparent quote sized to your team, locations, and AI volume."
  }
];
const includedInDemo = [
  {
    icon: Users,
    title: "Mapped to your team",
    description: "We size the seats, workspaces, and agent roster to the people who actually do the work — not a one-size template."
  },
  {
    icon: Sparkles,
    title: "AI volume sized to your workload",
    description: "Credit allocation is based on the campaigns, calls, and content you run today, with room to grow into."
  },
  {
    icon: ShieldCheck,
    title: "Procurement-ready",
    description: "SSO, SAML, SCIM, custom DPAs, NET-30 invoicing, and security review packets — all available from the start."
  },
  {
    icon: MessageSquare,
    title: "Real humans, every step",
    description: "A named OzziOS lead runs your demo, owns your rollout, and stays close after launch."
  }
];
const demoFaqs = [
  {
    question: "How is pricing decided?",
    answer: "Every team has different rollout needs — locations, AI volume, integrations, voice minutes, and security requirements. We quote it live during the demo so the price reflects what you actually need, with no surprises later."
  },
  {
    question: "How long is the demo?",
    answer: "Plan on 30 minutes for the working session. We use the time to understand your business, then open the product and configure it against a real workflow you bring to the call."
  },
  {
    question: "What do I need to bring?",
    answer: "A real example from your day-to-day work — a lead-handling problem, a campaign you want to run, or a process you want to automate. The more specific, the more useful the demo."
  },
  {
    question: "Who runs the demo?",
    answer: "A named OzziOS lead — the same person who will own your rollout if you decide to move forward. No SDR-to-AE-to-CSM hand-offs."
  },
  {
    question: "Do you work with enterprise teams?",
    answer: "Yes. SSO with SAML 2.0, SCIM provisioning, custom integrations, dedicated success managers, 24/7 priority support, custom contracts and DPAs, and NET-30/60 invoicing are all available."
  },
  {
    question: "How quickly can we get started after the demo?",
    answer: "Most teams are running their first agents within a week of the demo. We hand-configure the rollout so you don’t have to figure it out from a blank canvas."
  }
];
function PricingView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DemoSteps, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatYouGet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DemoFAQ, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
function HeroSection() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate overflow-hidden pb-12 pt-28 sm:pt-32 lg:pb-16 lg:pt-36", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackgroundField, { variant: "top-center" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        ref,
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.6, ease: EASE_OUT },
        className: "mx-auto max-w-[820px]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              eyebrow: "Setup a demo",
              headlineLines: ["Built for your team.", "Priced for your rollout."],
              sub: "A 30-minute working session where we configure the product — and the price — around the work you actually do.",
              align: "center"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryCTA, { href: DEMO_CTA_HREF, size: "lg", shortcut: "D", children: "Setup a demo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SecondaryCTA, { href: "/contact", size: "lg", children: "Talk to sales" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-center font-mono text-[10.5px] uppercase tracking-[0.22em] text-foreground/45", children: "30 minutes · Real product, real data · Quote at the end" })
        ]
      }
    ) })
  ] });
}
function DemoSteps() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-16 lg:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-10", ref, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid max-w-[980px] grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4", children: demoSteps.map((step, index) => {
    const Icon = step.icon;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.5, delay: 0.1 + index * 0.08, ease: EASE_OUT },
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
  }) }) }) });
}
function WhatYouGet() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate overflow-hidden border-t border-border/50 py-24 lg:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackgroundField, { variant: "top-right" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          ref,
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { duration: 0.6, ease: EASE_OUT },
          className: "mb-12 lg:mb-14",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              eyebrow: "What you walk away with",
              headlineLines: ["A rollout plan,", "not a sales pitch."],
              sub: "Every demo ends with a configured workspace, a written rollout plan, and a quote built around the way your team actually works.",
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
          className: "grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4",
          children: includedInDemo.map((item) => {
            const Icon = item.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-start gap-4 rounded-xl border border-border/60 bg-background/80 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:shadow-[0_18px_50px_-26px_rgba(34,27,22,0.30)]",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border/60 bg-background text-foreground/70", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-signature" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[14px] font-semibold text-foreground", children: item.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[12.5px] leading-[1.55] text-muted-foreground", children: item.description })
                  ] })
                ]
              },
              item.title
            );
          })
        }
      )
    ] })
  ] });
}
function DemoFAQ() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate overflow-hidden border-t border-border/50 py-24 lg:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackgroundField, { variant: "top-left" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          ref,
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { duration: 0.6, ease: EASE_OUT },
          className: "lg:col-span-5 lg:sticky lg:top-24 lg:self-start",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeader,
              {
                eyebrow: "Common questions",
                headlineLines: ["Demo questions,", "answered."],
                sub: "Everything you need to know about how the demo works and what happens next."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-foreground/45", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Kbd, { className: "h-[18px] min-w-[18px] text-[10px]", children: "D" }),
              "Press to setup a demo"
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
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-xl border border-border/60 bg-background/85 shadow-[0_18px_50px_-26px_rgba(34,27,22,0.30)]", children: demoFaqs.map((faq, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            FAQItem,
            {
              index: index + 1,
              question: faq.question,
              answer: faq.answer,
              isOpen: openIndex === index,
              onToggle: () => setOpenIndex(openIndex === index ? null : index),
              isLast: index === demoFaqs.length - 1
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
  isLast
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "group/q border-b border-border/60 transition-colors " + (isLast ? "border-b-0 " : "") + (isOpen ? "bg-muted/20" : ""),
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
                  className: "mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border font-mono text-[10px] font-semibold tabular-nums transition-colors " + (isOpen ? "border-signature/30 bg-signature/10 text-signature" : "border-border/60 bg-background text-foreground/55"),
                  children: String(index).padStart(2, "0")
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "flex-1 text-[14.5px] font-medium leading-[1.5] transition-colors sm:text-[15.5px] " + (isOpen ? "text-foreground" : "text-foreground/85 group-hover/q:text-foreground"),
                  children: question
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border transition-all duration-200 " + (isOpen ? "rotate-45 border-signature/30 bg-signature/10 text-signature" : "border-border/60 text-foreground/55 group-hover/q:border-foreground/25 group-hover/q:text-foreground"),
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
function PricingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LandingLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(PricingView, {}) });
}
export {
  PricingPage as component
};
