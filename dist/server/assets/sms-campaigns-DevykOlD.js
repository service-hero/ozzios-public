import { j as jsxRuntimeExports } from "./vendor-framer-DZFBeC81.js";
import { L as LandingLayout } from "./LandingLayout-D-c6g3QV.js";
import { D as DeferredSection } from "./lazy-section-B65XiZaR.js";
import { F as FeatureHero, P as PainPointsBlock, C as CapabilitiesBlock, d as ComparisonBlock, a as FeatureCTABlock } from "./_landing-primitives-BgwWv7GL.js";
import { ax as MessageCircle, T as TriangleAlert, U as Users, ae as Timer, x as ChartColumn, V as Target, g as Send, ay as ShieldCheck, az as Pause, Z as Zap } from "./vendor-icons-BFmuwI-v.js";
import "./vendor-react-MO5I_vdy.js";
import "./vendor-router-DD_41qJ4.js";
import "./vendor-radix-Bd9PM-r6.js";
import "node:async_hooks";
import "./utils-QXBWQHlM.js";
const painPoints = [
  {
    icon: TriangleAlert,
    title: "Compliance is a minefield",
    description: "TCPA violations cost $500-$1,500 per text. Most SMS tools leave compliance to you — one mistake with opt-outs and you are facing a class action."
  },
  {
    icon: Users,
    title: "Separate tool, separate data",
    description: "Your SMS platform does not talk to your CRM. You are manually exporting contacts, managing opt-outs in spreadsheets, and praying nothing falls out of sync."
  },
  {
    icon: Timer,
    title: "No rate limiting or safety nets",
    description: "Hit send and 10,000 messages blast instantly. Carrier throttling kicks in, messages get flagged as spam, and your deliverability tanks."
  },
  {
    icon: ChartColumn,
    title: "Zero visibility into performance",
    description: "Did the message deliver? Did they click? Did they reply? Most SMS tools give you a sent count and nothing else. You are flying blind."
  }
];
const capabilities = [
  {
    icon: Target,
    title: "CRM-native targeting",
    benefit: "No list exports needed",
    description: "Build SMS audiences directly from your contact database. Filter by lead score, last activity, tags, or any custom field."
  },
  {
    icon: Send,
    title: "Intelligent batch orchestration",
    benefit: "Carrier-friendly sending",
    description: "Messages send in controlled batches with Twilio rate limiting built in. Protects your deliverability and sender reputation."
  },
  {
    icon: ShieldCheck,
    title: "Compliance built in",
    benefit: "Sleep at night",
    description: "Automatic opt-out handling, consent tracking, quiet hours enforcement, and A2P 10DLC registration support."
  },
  {
    icon: Pause,
    title: "Mid-campaign control",
    benefit: "Stop before it spreads",
    description: "Pause, resume, or cancel campaigns mid-send. Spot a problem? Stop the campaign before it reaches your entire list."
  },
  {
    icon: ChartColumn,
    title: "Delivery status tracking",
    benefit: "Real-time webhooks",
    description: "Real-time delivery confirmations via Twilio webhooks. Know exactly which messages delivered, failed, or are still queued."
  },
  {
    icon: Zap,
    title: "Workflow integration",
    benefit: "Two-way automation",
    description: "Trigger SMS campaigns from workflows, or trigger workflows from SMS replies. Two-way communication that feeds your business."
  }
];
function SmsCampaignsView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FeatureHero,
      {
        pillIcon: MessageCircle,
        pillLabel: "SMS Campaigns",
        pillSubtitle: "Twilio-powered · compliance built in",
        headlineLines: ["SMS campaigns", "that respect the rules."],
        sub: "98% open rate. 45% response rate. SMS is the most powerful channel in marketing — if you do it right. OzziOS handles compliance, rate limiting, and delivery so you focus on the message.",
        primaryCta: { label: "Start SMS campaigns", href: "https://app.ozzios.com/sign-up", shortcut: "S" },
        secondaryCta: { label: "See pricing", href: "/pricing" },
        stats: [
          { value: "98%", label: "Open rate" },
          { value: "45%", label: "Response rate" },
          { value: "<3s", label: "Delivery time" }
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      PainPointsBlock,
      {
        eyebrow: "The problem",
        headlineLines: ["SMS marketing is", "high-risk, high-reward."],
        sub: "The most powerful marketing channel is also the most regulated. Here is where most tools fail.",
        points: painPoints
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CapabilitiesBlock,
      {
        eyebrow: "Capabilities",
        headlineLines: ["Powerful SMS", "without the complexity."],
        sub: "Every feature designed for service businesses who need to send at scale without losing sleep over compliance.",
        capabilities
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ComparisonBlock,
      {
        eyebrow: "Why OzziOS",
        headlineLines: ["SMS done", "right."],
        legacyLabel: "Other SMS tools",
        legacyItems: [
          { label: "Compliance is your problem" },
          { label: "Blast list instantly, get flagged" },
          { label: "Hit send and hope for the best" },
          { label: "Standalone tool with CSV imports" },
          { label: "Sent count, no other insights" }
        ],
        modernLabel: "OzziOS SMS",
        modernItems: [
          { label: "Built-in opt-out & A2P registration" },
          { label: "Intelligent rate limiting per workspace" },
          { label: "Pause / resume / cancel mid-send" },
          { label: "CRM-native targeting + workflow triggers" },
          { label: "Real-time webhook delivery tracking" }
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      FeatureCTABlock,
      {
        eyebrow: "Get started",
        headlineLines: ["Reach every phone.", "Stay compliant."],
        sub: "SMS campaigns with built-in compliance, intelligent rate limiting, and CRM-native targeting. Start sending today.",
        primaryCta: { label: "Start SMS campaigns", href: "https://app.ozzios.com/sign-up", shortcut: "S" },
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
function SmsCampaignsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LandingLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SmsCampaignsView, {}) });
}
export {
  SmsCampaignsPage as component
};
