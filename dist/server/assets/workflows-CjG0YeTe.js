import { j as jsxRuntimeExports, r as reactExports, u as useInView, m as motion } from "./vendor-framer-DZFBeC81.js";
import { D as DEMO_CTA_HREF, L as LandingLayout } from "./LandingLayout-Dblq4RXp.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { D as DeferredSection } from "./lazy-section-B65XiZaR.js";
import { F as FeatureHero, b as PainPointsBlock, C as CapabilitiesBlock, c as FeatureCTABlock, S as SectionHeader, i as innerContainerVariants, d as innerItemVariants, e as SectionHeading } from "./_landing-primitives-Bieps6V3.js";
import { _ as GitBranch, af as MousePointerClick, Y as TriangleAlert, c as Clock, a3 as Layers, ag as RotateCcw, q as Play, ah as Timer, S as Shield, Z as Zap, ai as SquareSplitVertical, V as Repeat, aj as Webhook, l as Mail, ak as CalendarClock } from "./vendor-icons-D94uOSxG.js";
import "./vendor-react-MO5I_vdy.js";
import "./vendor-router-DD_41qJ4.js";
import "./vendor-radix-Bd9PM-r6.js";
import "node:async_hooks";
const painPoints = [
  {
    icon: MousePointerClick,
    title: "Manual processes drain your team",
    description: "Every new lead means a manual email, a CRM update, a Slack notification, and a follow-up reminder. Multiply that by 100 leads a week."
  },
  {
    icon: TriangleAlert,
    title: "Balls get dropped constantly",
    description: "A lead comes in at 11pm and nobody follows up until Monday. A customer goes quiet for 3 weeks and nobody notices. Leads go cold because humans forget."
  },
  {
    icon: Clock,
    title: "Duct-taped automations break",
    description: "You've connected 6 different tools with Zapier and Make. One API changes and the whole chain breaks silently. You find out when a customer complains."
  },
  {
    icon: Layers,
    title: "No visibility into what is running",
    description: "Your automations are scattered across platforms. Nobody knows what triggers what. When something breaks, you spend hours debugging across 4 dashboards."
  }
];
const nodeTypes = [
  { icon: Zap, name: "Action", description: "Execute agent responses, API calls, or Convex functions. Full access to 127+ tools." },
  { icon: Clock, name: "Wait", description: 'Delay by duration or until a specific timestamp. "Wait 3 days, then follow up."' },
  { icon: Shield, name: "Approval", description: "Pause for human decision. Get a push notification, approve or deny from anywhere." },
  { icon: SquareSplitVertical, name: "Condition", description: "Branch logic. If lead score > 80, fast-track to sales. Otherwise, nurture sequence." },
  { icon: Repeat, name: "Loop", description: "Repeat until a condition is met. Check status every hour until the deal closes." },
  { icon: GitBranch, name: "Parallel", description: "Execute multiple branches at once. Send email, update CRM, notify Slack simultaneously." },
  { icon: Webhook, name: "Webhook", description: "Trigger workflows from any external service. Stripe payment, form submission, API call." },
  { icon: Mail, name: "Delivery", description: "Send email, SMS, or push notifications. Personalized with contact data from your CRM." }
];
const triggers = [
  { event: "Lead created", source: "CRM", description: "Instantly engage new leads before they go cold" },
  { event: "Form submitted", source: "Website", description: "Route submissions to the right team or workflow" },
  { event: "Payment received", source: "Stripe", description: "Trigger onboarding, upsell, or thank-you sequences" },
  { event: "Customer inactive", source: "Activity", description: "Re-engage customers before they churn" },
  { event: "Task overdue", source: "Tasks", description: "Escalate automatically when deadlines are missed" },
  { event: "Email received", source: "Inbox", description: "Auto-route, classify, and respond to inbound email" }
];
const capabilities = [
  {
    icon: RotateCcw,
    title: "Durable execution",
    benefit: "Workflows that never fail silently",
    description: "Every step is checkpointed. If a server restarts, your workflow resumes exactly where it left off. Failed steps retry automatically."
  },
  {
    icon: Play,
    title: "Visual builder",
    benefit: "Build without code",
    description: "Drag-and-drop workflow editor built on React Flow. Connect nodes, set conditions, and deploy in minutes. See your entire automation as a clear diagram."
  },
  {
    icon: Timer,
    title: "Timezone-aware scheduling",
    benefit: "Reach people at the right time",
    description: "Schedule workflows in any timezone. Send that follow-up email at 9am in the recipient's local time, not yours."
  },
  {
    icon: Shield,
    title: "Built-in safety rails",
    benefit: "Automation you can trust",
    description: "Watchdog auto-cancels stuck workflows. Dead letter queue captures failures for review. Rate limiting prevents runaway executions."
  }
];
function NodeTypesSection() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative isolate overflow-hidden border-t border-border/50 py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        ref,
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.6 },
        className: "mb-12 lg:mb-14",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeader,
          {
            eyebrow: "Building blocks",
            headlineLines: ["8 node types.", "Infinite combinations."],
            sub: "Drag, connect, deploy. Each node is a building block for automations that match exactly how your business works."
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        variants: innerContainerVariants,
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
        children: nodeTypes.map((node) => {
          const Icon = node.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              variants: innerItemVariants,
              className: "group/n rounded-xl border border-border/60 bg-background p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:shadow-[0_14px_30px_-18px_rgba(34,27,22,0.25)]",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/60 bg-background text-foreground/70 transition-colors duration-200 group-hover/n:border-foreground/25 group-hover/n:bg-foreground group-hover/n:text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-[13.5px] font-semibold text-foreground", children: node.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[11.5px] leading-[1.5] text-muted-foreground", children: node.description })
              ]
            },
            node.name
          );
        })
      }
    )
  ] }) });
}
function TriggersSection() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative isolate overflow-hidden border-t border-border/50 py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-12 lg:grid-cols-2 lg:gap-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        ref,
        initial: { opacity: 0, x: -20 },
        animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 },
        transition: { duration: 0.7 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeader,
          {
            eyebrow: "Triggers",
            headlineLines: ["React to anything,", "instantly."],
            sub: "Event-based, time-based, and webhook triggers mean your workflows fire the moment something happens — not hours later when someone checks. Stale entity detection catches leads that haven't progressed and customers that went quiet. Automatically."
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, x: 20 },
        animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 },
        transition: { duration: 0.7, delay: 0.2 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-xl border border-border/60 bg-background", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/60 bg-muted/30 px-5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { label: "Event triggers" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border/60", children: triggers.map((trigger, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 8 },
              animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 },
              transition: { duration: 0.4, delay: 0.3 + i * 0.05 },
              className: "flex items-start gap-4 px-5 py-3.5 transition-colors hover:bg-muted/30",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border/60 bg-background text-signature", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarClock, { className: "h-3.5 w-3.5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-semibold text-foreground", children: trigger.event }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: cn(
                          "inline-flex items-center rounded-[5px] border border-border/60 bg-muted px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-muted-foreground"
                        ),
                        children: trigger.source
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-[11.5px] leading-[1.5] text-muted-foreground", children: trigger.description })
                ] })
              ]
            },
            trigger.event
          )) })
        ] })
      }
    )
  ] }) }) });
}
function WorkflowsView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FeatureHero,
      {
        pillIcon: GitBranch,
        pillLabel: "Workflow Automation",
        pillSubtitle: "Durable execution, visual builder",
        headlineLines: ["Automate the work", "that burns you out."],
        sub: "Durable, visual workflows that connect your AI agents, triggers, and actions into automations that run 24/7 and never break silently.",
        primaryCta: { label: "Setup a demo", href: DEMO_CTA_HREF, shortcut: "D" },
        secondaryCta: { label: "Talk to sales", href: "/contact" },
        stats: [
          { value: "10", label: "Node types" },
          { value: "20+", label: "Event triggers" },
          { value: "24 / 7", label: "Always running" },
          { value: "3×", label: "Auto-retry" }
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      PainPointsBlock,
      {
        eyebrow: "The problem",
        headlineLines: ["Your automations", "are held together with tape."],
        sub: "Zapier chains, manual follow-ups, and 'I'll remember to do that' — until you don't.",
        points: painPoints
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(NodeTypesSection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriggersSection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CapabilitiesBlock,
      {
        eyebrow: "Professional-grade",
        headlineLines: ["Automation that takes", "itself seriously."],
        sub: "Reliable automation that never drops the ball. Your workflows keep running through outages, retry automatically when something fails, and never lose track.",
        capabilities
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      FeatureCTABlock,
      {
        eyebrow: "Get automating",
        headlineLines: ["Stop doing manually", "what should run on autopilot."],
        sub: "Build your first workflow in minutes. No code, no fragile integrations, no babysitting.",
        primaryCta: { label: "Setup a demo", href: DEMO_CTA_HREF, shortcut: "D" },
        secondaryCta: { label: "Talk to sales", href: "/contact" },
        trust: [
          { value: "256-bit", label: "Encryption" },
          { value: "GDPR ready", label: "Compliance" },
          { value: "99.9%", label: "Uptime SLA" }
        ]
      }
    ) })
  ] });
}
function WorkflowsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LandingLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(WorkflowsView, {}) });
}
export {
  WorkflowsPage as component
};
