import { r as reactExports, u as useInView, j as jsxRuntimeExports, m as motion } from "./vendor-framer-DZFBeC81.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { F as FeatureTooltip } from "./feature-tooltip-1guYWes2.js";
import { B as BackgroundField, S as SectionHeader, E as EASE_OUT, K as Kbd } from "./_landing-primitives-BgwWv7GL.js";
import { be as Plus, A as ArrowRight, a as Check } from "./vendor-icons-BFmuwI-v.js";
import "./vendor-react-MO5I_vdy.js";
import "./vendor-router-DD_41qJ4.js";
import "./vendor-radix-Bd9PM-r6.js";
import "node:async_hooks";
const pricingTiers = [
  {
    name: "Basic",
    price: 49,
    usage: "1,000 AI credits / mo",
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
    usage: "5,000 AI credits / mo",
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
    usage: "15,000 AI credits / mo",
    description: "Messaging and voice ops for scaling teams",
    features: [
      { label: "Everything in Pro", description: "Includes every feature from the Pro plan — workflows, video, integrations, and more." },
      { label: "Up to 5 team members", description: "Bring your whole team into one place — no more scattered tools or missed handoffs." },
      { label: "5 workspaces", description: "Run multiple locations or projects from one login — each fully separate with its own team and settings." },
      { label: "15,000 AI credits", description: "High-capacity AI for teams running campaigns, workflows, and automations at scale every day." },
      { label: "Email/SMS campaigns", description: "Send professional email and text campaigns. Track opens, clicks, and conversions so you know what is working." },
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "pricing", className: "relative isolate overflow-hidden py-28 lg:py-36", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackgroundField, { variant: "top-center" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          ref,
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { duration: 0.6 },
          className: "mb-14 lg:mb-20",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              eyebrow: "Pricing",
              headlineLines: ["Simple,", "transparent pricing"],
              sub: "Stop overpaying for outsourced services. Get professional-grade automation at a fraction of the cost."
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5", children: pricingTiers.map((tier, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { duration: 0.5, delay: 0.1 + index * 0.08, ease: EASE_OUT },
          className: "relative flex",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(PricingCard, { tier })
        },
        tier.name
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: isInView ? { opacity: 1 } : { opacity: 0 },
          transition: { duration: 0.5, delay: 0.5 },
          className: "mt-12",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-between gap-4 rounded-md border border-border/60 bg-background/60 px-5 py-4 backdrop-blur sm:flex-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-7 w-7 items-center justify-center rounded-md border border-border/60 bg-background text-foreground/65", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-foreground", children: "Need a custom plan for a larger team?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/45", children: "Multi-location, white-label, and enterprise terms available" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "mailto:sales@ozzios.com",
                className: "group/c inline-flex h-9 items-center gap-1.5 rounded-md border border-border/70 bg-background px-4 text-[12.5px] font-medium text-foreground transition-colors hover:bg-muted/40",
                children: [
                  "Contact sales",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3 transition-transform group-hover/c:translate-x-0.5" })
                ]
              }
            )
          ] })
        }
      )
    ] })
  ] });
}
function PricingCard({ tier }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "relative flex w-full flex-col rounded-xl border bg-background transition-all duration-300",
        tier.recommended ? "border-foreground/85 bg-foreground text-background shadow-[0_28px_70px_-26px_rgba(34,27,22,0.55)]" : "border-border/60 shadow-[0_12px_40px_-22px_rgba(34,27,22,0.20)] hover:-translate-y-0.5 hover:border-border hover:shadow-[0_22px_50px_-22px_rgba(34,27,22,0.32)]"
      ),
      children: [
        tier.recommended ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-2.5 left-1/2 -translate-x-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-[5px] border border-signature/30 bg-signature px-2 py-0.5 font-mono text-[9.5px] font-semibold uppercase tracking-wider text-white shadow-[0_8px_22px_-10px_rgba(196,88,63,0.6)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-white" }),
          "Most popular"
        ] }) }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-6 lg:p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: cn(
                  "text-[15px] font-semibold",
                  tier.recommended ? "text-background" : "text-foreground"
                ),
                children: tier.name
              }
            ),
            tier.description ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: cn(
                  "mt-1 text-[12.5px] leading-[1.5]",
                  tier.recommended ? "text-background/65" : "text-muted-foreground"
                ),
                children: tier.description
              }
            ) : null
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-baseline gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: cn(
                  "font-display text-[2.5rem] font-semibold leading-none tabular-nums tracking-[-0.04em]",
                  tier.recommended ? "text-background" : "text-foreground"
                ),
                children: tier.price === 0 ? "Free" : `$${tier.price.toLocaleString()}`
              }
            ),
            tier.price > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: cn(
                  "font-mono text-[11px] uppercase tracking-wider",
                  tier.recommended ? "text-background/55" : "text-foreground/45"
                ),
                children: "/mo"
              }
            ) : null
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: cn(
                "inline-flex items-center gap-1.5 rounded-[5px] border px-2 py-0.5 font-mono text-[9.5px] font-semibold uppercase tracking-wider",
                tier.recommended ? "border-white/15 bg-white/10 text-background/85" : "border-border/60 bg-muted text-foreground/70"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: cn(
                      "h-1 w-1 rounded-full",
                      tier.recommended ? "bg-signature" : "bg-foreground/40"
                    )
                  }
                ),
                tier.usage
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: cn(
                  "font-mono text-[10px] uppercase tracking-[0.22em]",
                  tier.recommended ? "text-background/55" : "text-foreground/40"
                ),
                children: "Included"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: cn(
                  "h-px flex-1",
                  tier.recommended ? "bg-white/15" : "bg-border/50"
                )
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: tier.features.map((feature, i) => {
            const isEverything = feature.label.startsWith("Everything in");
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: cn(
                    "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border",
                    isEverything ? tier.recommended ? "border-signature/50 bg-signature/20" : "border-signature/30 bg-signature/10" : tier.recommended ? "border-white/15 bg-white/5" : "border-border/60 bg-muted/40"
                  ),
                  children: isEverything ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Check,
                    {
                      className: cn("h-2.5 w-2.5", tier.recommended ? "text-signature" : "text-signature"),
                      strokeWidth: 3
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Plus,
                    {
                      className: cn(
                        "h-2 w-2",
                        tier.recommended ? "text-background/55" : "text-foreground/45"
                      ),
                      strokeWidth: 3
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: cn(
                    "text-[12.5px] leading-[1.45]",
                    isEverything ? tier.recommended ? "font-medium text-background" : "font-medium text-foreground" : tier.recommended ? "text-background/80" : "text-muted-foreground"
                  ),
                  children: feature.label
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureTooltip, { description: feature.description })
            ] }, i);
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: tier.href,
              className: cn(
                "group/cta relative flex h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-md text-[13px] font-medium transition-all duration-200 active:translate-y-px",
                tier.recommended ? "bg-background text-foreground hover:bg-background/92 shadow-[0_14px_30px_-12px_rgba(0,0,0,0.4)]" : "border border-border/70 bg-background text-foreground hover:border-border hover:bg-muted/40"
              ),
              children: [
                tier.cta,
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-0.5" }),
                tier.recommended ? /* @__PURE__ */ jsxRuntimeExports.jsx(Kbd, { className: "ml-1 h-[18px] min-w-[18px]", children: "S" }) : null
              ]
            }
          ) })
        ] })
      ]
    }
  );
}
export {
  PricingSection
};
