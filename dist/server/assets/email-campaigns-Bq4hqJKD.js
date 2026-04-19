import { j as jsxRuntimeExports, r as reactExports, u as useInView, m as motion } from "./vendor-framer-DZFBeC81.js";
import { L as LandingLayout } from "./LandingLayout-D-c6g3QV.js";
import { D as DeferredSection } from "./lazy-section-B65XiZaR.js";
import { F as FeatureHero, P as PainPointsBlock, C as CapabilitiesBlock, a as FeatureCTABlock, S as SectionHeader, i as innerContainerVariants, b as innerItemVariants } from "./_landing-primitives-BgwWv7GL.js";
import { M as Mail, aE as SlidersHorizontal, x as ChartColumn, U as Users, c as Clock, V as Target, g as Send, E as Eye, Z as Zap, az as Pause, _ as TrendingUp, ac as MousePointerClick } from "./vendor-icons-BFmuwI-v.js";
import "./vendor-react-MO5I_vdy.js";
import "./vendor-router-DD_41qJ4.js";
import "./vendor-radix-Bd9PM-r6.js";
import "node:async_hooks";
import "./utils-QXBWQHlM.js";
const painPoints = [
  {
    icon: SlidersHorizontal,
    title: "Campaigns take hours to build",
    description: "Between designing, writing copy, segmenting lists, and scheduling sends — a single campaign eats half your day. And you need to send dozens a month."
  },
  {
    icon: ChartColumn,
    title: "Analytics scattered across tools",
    description: "Open rates in one dashboard, click data in another, revenue attribution somewhere else. You never get the full picture of what is actually working."
  },
  {
    icon: Users,
    title: "Segmentation is a nightmare",
    description: "Export from CRM, import to email tool, manually filter lists, pray you do not send to the wrong segment. One mistake and you lose customer trust."
  },
  {
    icon: Clock,
    title: "No way to pause or recover",
    description: "Spot a typo after hitting send? Too late. Most email tools blast your entire list with no pause button, no mid-flight corrections, and no safety net."
  }
];
const capabilities = [
  {
    icon: Target,
    title: "Smart segmentation",
    benefit: "Built from live CRM data",
    description: "No exports, no imports — just real-time audience targeting based on contact properties, engagement history, and lead scores."
  },
  {
    icon: Send,
    title: "Batch sending with control",
    benefit: "Pause, resume, cancel mid-flight",
    description: "Campaigns send in batches of 500. Spot an issue? Stop the campaign before it reaches your entire list."
  },
  {
    icon: Eye,
    title: "Real-time event tracking",
    benefit: "Webhook-powered insights",
    description: "Opens, clicks, bounces, replies, and unsubscribes tracked via webhooks in real-time. Know exactly how recipients engage."
  },
  {
    icon: Zap,
    title: "Template or custom HTML",
    benefit: "Tested across 90+ clients",
    description: "Use the visual email builder for pixel-perfect templates or paste custom HTML. Every email is responsive and tested."
  },
  {
    icon: Pause,
    title: "Draft, schedule, or send now",
    benefit: "Full lifecycle control",
    description: "Draft campaigns, schedule for optimal send times, or fire immediately — with status tracking at every stage."
  },
  {
    icon: ChartColumn,
    title: "Campaign analytics dashboard",
    benefit: "One unified view",
    description: "Delivery, open, click-through, bounce, and reply tracking in one place. Compare campaigns side by side."
  }
];
const campaignFlow = [
  { step: "01", label: "Draft", description: "Build your campaign with templates or custom HTML" },
  { step: "02", label: "Segment", description: "Target the right audience from your CRM" },
  { step: "03", label: "Schedule", description: "Set the perfect send time or send now" },
  { step: "04", label: "Send", description: "Batched delivery with pause/resume control" },
  { step: "05", label: "Track", description: "Real-time opens, clicks, bounces, and replies" }
];
const advantages = [
  {
    icon: TrendingUp,
    title: "CRM-native segmentation",
    description: "Segments built from live CRM data. No CSV exports, no list imports, no stale data. Your audience is always up to date."
  },
  {
    icon: Pause,
    title: "Mid-flight campaign control",
    description: "Pause a campaign mid-send. Fix the issue. Resume. Most email tools give you a send button and a prayer."
  },
  {
    icon: MousePointerClick,
    title: "Webhook-powered analytics",
    description: "Every open, click, bounce, and reply tracked in real-time via Resend webhooks. No delayed reporting or sampling."
  },
  {
    icon: Zap,
    title: "One platform, zero context switching",
    description: "Your campaigns, CRM, AI agents, and team chat live in OzziOS. Performance feeds directly into lead scores and workflows."
  }
];
function CampaignFlowSection() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative isolate overflow-hidden border-t border-border/50 py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-10", children: [
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
            eyebrow: "How it works",
            headlineLines: ["From draft to delivery", "in 5 steps."],
            sub: "A campaign workflow built for speed and safety. Every step gives you control.",
            align: "center"
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
        className: "mx-auto max-w-[760px] overflow-hidden rounded-xl border border-border/60 bg-background/85",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border/60", children: campaignFlow.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            variants: innerItemVariants,
            className: "flex items-start gap-5 px-5 py-5 transition-colors hover:bg-muted/30",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-signature/25 bg-signature/10 font-mono text-[11px] font-semibold tabular-nums text-signature", children: item.step }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[14px] font-semibold text-foreground", children: item.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[12.5px] leading-[1.55] text-muted-foreground", children: item.description })
              ] })
            ]
          },
          item.step
        )) })
      }
    )
  ] }) });
}
function DifferentiatorSection() {
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
            eyebrow: "Why OzziOS",
            headlineLines: ["Not just", "another email tool."],
            sub: "Email campaigns connected to your entire marketing operation."
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
        className: "grid gap-4 md:grid-cols-2 lg:gap-5",
        children: advantages.map((adv) => {
          const Icon = adv.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              variants: innerItemVariants,
              className: "group/a rounded-xl border border-border/60 bg-background p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:shadow-[0_14px_40px_-18px_rgba(34,27,22,0.30)]",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border/60 bg-background text-foreground/70 transition-colors duration-200 group-hover/a:border-foreground/25 group-hover/a:bg-foreground group-hover/a:text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[15px] font-semibold text-foreground", children: adv.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[13px] leading-[1.55] text-muted-foreground", children: adv.description })
                ] })
              ] })
            },
            adv.title
          );
        })
      }
    )
  ] }) });
}
function EmailCampaignsView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FeatureHero,
      {
        pillIcon: Mail,
        pillLabel: "Email Campaigns",
        pillSubtitle: "Targeted, tracked, controllable",
        headlineLines: ["Email campaigns", "that actually convert."],
        sub: "Build, segment, send, and track email campaigns from the same platform where your CRM, AI agents, and team live. No more juggling Mailchimp on the side.",
        primaryCta: { label: "Start sending campaigns", href: "https://app.ozzios.com/sign-up", shortcut: "S" },
        secondaryCta: { label: "See pricing", href: "/pricing" },
        stats: [
          { value: "500", label: "Per batch send" },
          { value: "5", label: "Event types" },
          { value: "90+", label: "Email clients" }
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      PainPointsBlock,
      {
        eyebrow: "The problem",
        headlineLines: ["Email marketing", "is painful."],
        sub: "You are spending too much time on campaigns and not enough time on strategy.",
        points: painPoints
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CampaignFlowSection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CapabilitiesBlock,
      {
        eyebrow: "Capabilities",
        headlineLines: ["Everything you need", "to send with confidence."],
        sub: "Professional email campaigns without the professional email tool price tag.",
        capabilities
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DifferentiatorSection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      FeatureCTABlock,
      {
        eyebrow: "Ready to send",
        headlineLines: ["Send smarter campaigns.", "Close more deals."],
        sub: "Email campaigns that integrate with your CRM, your AI agents, and your entire business workflow. Start in minutes.",
        primaryCta: { label: "Start sending", href: "https://app.ozzios.com/sign-up", shortcut: "S" },
        secondaryCta: { label: "Talk to our team", href: "/contact" },
        trust: [
          { value: "256-bit", label: "Encryption" },
          { value: "GDPR ready", label: "Compliance" },
          { value: "99.9%", label: "Uptime SLA" }
        ]
      }
    ) })
  ] });
}
function EmailCampaignsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LandingLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(EmailCampaignsView, {}) });
}
export {
  EmailCampaignsPage as component
};
