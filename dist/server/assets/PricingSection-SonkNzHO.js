import { a as reactExports, n as jsxRuntimeExports } from "./worker-entry-B_SLcB1Z.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { F as FeatureTooltip } from "./feature-tooltip-Doe01PBy.js";
import { u as useInView } from "./use-in-view-DO4SP-OS.js";
import { m as motion, A as ArrowRight } from "./proxy-SP-br39M.js";
import { C as Check } from "./check-BUdgo7R6.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "./createLucideIcon-D4CjHuLj.js";
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
    price: 197,
    usage: "5,000 AI credits/mo",
    description: "Workflows, video, and premium AI tools",
    features: [
      { label: "Up to 2 team members", description: "Everything you need to run your business — with room for one extra hand when you need it." },
      { label: "2 workspaces", description: "Separate your projects or service areas into dedicated workspaces, each with its own settings." },
      { label: "5,000 AI credits", description: "Plenty of AI capacity for content creation, workflows, and daily marketing automation." },
      { label: "Social planner & blog tools", description: "Stay consistent on social and keep your blog active and SEO-friendly — without doing it all manually." },
      { label: "Email builder & all integrations", description: "Send professional emails and connect 40+ tools — Google, Meta, Shopify, WordPress, and more." },
      { label: "Forms, documents & e-sign", description: "Capture leads, send proposals, and get contracts signed — all without the back-and-forth." },
      { label: "Workflow builder & advanced CRM", description: "Set up automations that run forever and know exactly where every lead stands." },
      { label: "Chat widget", description: "Capture leads with an AI-powered chat widget on your site that answers questions and qualifies visitors 24/7." },
      { label: "Video kit & app builder", description: "Record professional videos and let Ozzi build custom apps, dashboards, and tools — no developer needed." },
      { label: "Local rank & Claude Opus", description: "Track your Google Maps rankings and access the most powerful AI model for complex tasks." }
    ],
    cta: "Get started",
    href: "https://app.ozzios.com/sign-up?plan=solo",
    recommended: true
  },
  {
    name: "Scale",
    price: 490,
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "pricing", className: "relative py-24 lg:py-32 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        ref,
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.6 },
        className: "text-center mb-20 flex flex-col items-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-px bg-signature" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold text-signature uppercase tracking-[0.2em]", children: "Pricing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-px bg-signature" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground tracking-tight mb-6", children: "Simple, transparent pricing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-xl font-light leading-relaxed", children: "Stop overpaying for outsourced services. Get professional-grade automation at a fraction of the cost." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start", children: pricingTiers.map((tier, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.5, delay: 0.1 + index * 0.08 },
        className: cn(
          "relative rounded-xl p-8 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col",
          tier.recommended ? "border border-signature/60 bg-card ring-1 ring-signature/10" : "border border-border/80 bg-card hover:border-border"
        ),
        children: [
          tier.recommended && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-3.5 left-1/2 -translate-x-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-4 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest bg-signature text-white shadow-sm", children: "Most Popular" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground", children: tier.name }),
            tier.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: tier.description })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl font-bold text-foreground tracking-tight", children: tier.price === 0 ? "Free" : `$${tier.price.toLocaleString()}` }),
            tier.price > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "/mo" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground border border-border", children: tier.usage }) }),
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
                "flex items-center justify-center gap-2 w-full h-12 rounded-md font-medium text-[13px] transition-all duration-200 group",
                tier.recommended ? "bg-signature text-white hover:bg-signature/90 shadow-sm" : "bg-transparent text-foreground border border-border/80 hover:bg-muted/50"
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
  ] }) });
}
export {
  PricingSection
};
