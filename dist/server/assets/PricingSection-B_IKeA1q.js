import { r as reactExports, u as useInView, j as jsxRuntimeExports, m as motion } from "./vendor-framer-DZFBeC81.js";
import { c as cn } from "./button-DuL_ysbl.js";
import { F as FeatureTooltip } from "./feature-tooltip-1guYWes2.js";
import { a as Check, A as ArrowRight } from "./vendor-icons-RMyvaHp0.js";
import "./vendor-react-MO5I_vdy.js";
import "./vendor-radix-Bd9PM-r6.js";
const pricingTiers = [
  {
    name: "Basic",
    price: 49,
    usage: "1,000 AI credits/mo",
    description: "For lean teams getting started",
    features: [
      { label: "1 workspace member", description: "Everything you need to run your business solo — focused and streamlined for one operator." },
      { label: "1 workspace", description: "A dedicated workspace with its own settings, channels, and inbox." },
      { label: "1,000 AI credits", description: "Enough AI capacity to get started with automation, content creation, and daily marketing tasks." },
      { label: "Workspace, channels & inbox", description: "Your central hub for team communication, customer messages, and task management — all in one place." },
      { label: "Tasks", description: "Organize your work with task management built right into your workspace." },
      { label: "Basic CRM", description: "Track your contacts and deals without the complexity of expensive CRM tools." },
      { label: "Basic integrations", description: "Connect the essential tools you use every day to keep your workflow moving." },
      { label: "Email support", description: "Our team is here when you need help. Reach out anytime and get a real response within one business day." }
    ],
    cta: "Get started",
    href: "https://app.ozzios.com/sign-up?plan=basic",
    recommended: false
  },
  {
    name: "Pro",
    price: 295,
    usage: "5,000 AI credits/mo",
    description: "Workflows and premium AI tools",
    features: [
      { label: "Up to 2 team members", description: "Everything you need to run your business — with room for one extra hand when you need it." },
      { label: "2 workspaces", description: "Separate your projects or service areas into dedicated workspaces, each with its own settings." },
      { label: "5,000 AI credits", description: "Plenty of AI capacity for content creation, workflows, and daily marketing automation." },
      { label: "Social content planner", description: "Stay consistent on social with AI-assisted planning and scheduling — without living in multiple tools." },
      { label: "Email builder & all integrations", description: "Send professional emails and connect 40+ tools — Google, Meta, Shopify, WordPress, and more." },
      { label: "Forms & lead capture", description: "Build smart lead forms and route every submission into the right follow-up workflow automatically." },
      { label: "Workflow builder & advanced CRM", description: "Set up automations that run forever and know exactly where every lead stands." },
      { label: "Chat widget", description: "Capture leads with an AI-powered chat widget on your site that answers questions and qualifies visitors 24/7." },
      { label: "App builder & dashboards", description: "Let Ozzi build custom apps, dashboards, and internal tools — no developer needed." },
      { label: "Local rank & Claude Opus", description: "Track your Google Maps rankings and access the most powerful AI model for complex tasks." }
    ],
    cta: "Get started",
    href: "https://app.ozzios.com/sign-up?plan=solo",
    recommended: true
  },
  {
    name: "Scale",
    price: 795,
    usage: "15,000 AI credits/mo",
    description: "Messaging and voice ops for scaling teams",
    features: [
      { label: "Everything in Pro", description: "Includes every feature from the Pro plan — workflows, video, integrations, and more." },
      { label: "Up to 5 team members", description: "Bring your whole team into one place — no more scattered tools or missed handoffs." },
      { label: "5 workspaces", description: "Run multiple locations or projects from one login — each fully separate with its own team and settings." },
      { label: "15,000 AI credits", description: "High-capacity AI for teams running campaigns, workflows, and automations at scale every day." },
      { label: "Email/SMS campaigns", description: "Send professional email and text campaigns. Track opens, clicks, and conversions so you know what's working." },
      { label: "Call center & voice ops", description: "Handle inbound calls with AI voice agents that answer, qualify, and route — then review recordings and AI-scored call quality." },
      { label: "Outbound call tooling", description: "Let your AI agent make outbound calls on your behalf — for follow-ups, appointment reminders, and lead outreach at scale." }
    ],
    cta: "Get started",
    href: "https://app.ozzios.com/sign-up?plan=starter",
    recommended: false
  }
];
function PricingSection() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "pricing", className: "relative overflow-hidden py-32 lg:py-40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 top-24 h-80 bg-[radial-gradient(circle_at_top,rgba(196,88,63,0.1),transparent_58%)] blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1440px] px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          ref,
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { duration: 0.6 },
          className: "mb-20 max-w-5xl",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-[0.72rem] font-medium uppercase tracking-[0.26em] text-foreground/45", children: "Pricing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-6 text-[clamp(3rem,5.2vw,5.2rem)] font-display font-medium text-foreground tracking-[-0.06em] leading-[0.92]", children: "Simple, transparent pricing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-2xl text-lg leading-8 text-muted-foreground", children: "Stop overpaying for outsourced services. Get professional-grade automation at a fraction of the cost." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 items-start gap-5 md:grid-cols-2 lg:grid-cols-3", children: pricingTiers.map((tier, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { duration: 0.5, delay: 0.1 + index * 0.08 },
          className: cn(
            "relative flex flex-col rounded-[2rem] p-8 transition-all duration-300",
            tier.recommended ? "border border-signature/40 bg-[linear-gradient(180deg,rgba(255,250,247,0.96),rgba(243,232,224,0.98))] shadow-[0_28px_80px_rgba(56,40,29,0.12)]" : "border border-white/80 bg-white/80 shadow-[0_20px_60px_rgba(56,40,29,0.08)] hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(56,40,29,0.12)]"
          ),
          children: [
            tier.recommended && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-3.5 left-1/2 -translate-x-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full bg-foreground px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-sm", children: "Most Popular" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground", children: tier.name }),
              tier.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: tier.description })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl font-bold text-foreground tracking-tight", children: tier.price === 0 ? "Free" : `$${tier.price.toLocaleString()}` }),
              tier.price > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "/mo" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full border border-border/70 bg-[rgba(247,241,235,0.9)] px-3 py-1 text-xs font-medium text-muted-foreground", children: tier.usage }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5 mb-6", children: tier.features.map((feature, featureIndex) => {
              const isEverything = feature.label.startsWith("Everything in");
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                isEverything ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-signature shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 shrink-0 flex items-center justify-center text-[11px] font-bold text-muted-foreground", children: "+" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm ${isEverything ? "text-foreground font-medium" : "text-muted-foreground"}`, children: feature.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureTooltip, { description: feature.description })
              ] }, featureIndex);
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: tier.href,
                className: cn(
                  "group flex h-12 w-full items-center justify-center gap-2 rounded-full font-medium text-[13px] transition-all duration-200",
                  tier.recommended ? "bg-foreground text-white hover:bg-foreground/92 shadow-[0_16px_40px_rgba(41,30,23,0.14)]" : "bg-transparent text-foreground border border-border/80 hover:bg-muted/50"
                ),
                children: [
                  tier.cta,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" })
                ]
              }
            ) })
          ]
        },
        tier.name
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: isInView ? { opacity: 1 } : { opacity: 0 },
          transition: { duration: 0.5, delay: 0.5 },
          className: "mt-16 text-center",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
            "Need a custom plan for your larger team?",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:sales@ozzios.com", className: "text-signature hover:underline", children: "Contact sales" })
          ] })
        }
      )
    ] })
  ] });
}
export {
  PricingSection
};
