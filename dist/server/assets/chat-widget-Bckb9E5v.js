import { j as jsxRuntimeExports, r as reactExports, u as useInView, m as motion } from "./vendor-framer-DZFBeC81.js";
import { D as DEMO_CTA_HREF, L as LandingLayout } from "./LandingLayout-Dblq4RXp.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { D as DeferredSection } from "./lazy-section-B65XiZaR.js";
import { F as FeatureHero, b as PainPointsBlock, C as CapabilitiesBlock, f as ComparisonBlock, c as FeatureCTABlock, S as SectionHeader, i as innerContainerVariants, d as innerItemVariants } from "./_landing-primitives-Bieps6V3.js";
import { aM as MessageSquareText, D as DollarSign, c as Clock, U as Users, Y as TriangleAlert, aa as Bot, b7 as PhoneForwarded, aF as UserPlus, o as Calendar, aI as Paintbrush, L as Lock, S as Shield, b8 as Fingerprint, E as Eye, G as Globe, b9 as FileDown, ba as Trash2, aE as CodeXml } from "./vendor-icons-D94uOSxG.js";
import "./vendor-react-MO5I_vdy.js";
import "./vendor-router-DD_41qJ4.js";
import "./vendor-radix-Bd9PM-r6.js";
import "node:async_hooks";
const painPoints = [
  {
    icon: DollarSign,
    title: "Live chat tools cost too much",
    description: "Intercom starts at $39/seat/month. Drift charges per contact. You're paying thousands a year just to talk to website visitors — and you still need humans behind it."
  },
  {
    icon: Clock,
    title: "Visitors leave before you reply",
    description: "The average response time for live chat is 2 minutes 40 seconds. By then, 53% of visitors have already bounced. Every delayed reply is a lost lead."
  },
  {
    icon: Users,
    title: "You can't staff chat 24/7",
    description: "Your team works 9-5 but your website gets traffic around the clock. Nights, weekends, holidays — visitors arrive and nobody's home."
  },
  {
    icon: TriangleAlert,
    title: "Chat data lives in a silo",
    description: "Conversations in Intercom never reach your CRM. Leads captured in Drift don't trigger your workflows. You're manually copying data between systems."
  }
];
const capabilities = [
  {
    icon: Bot,
    title: "AI-powered conversations",
    benefit: "Instant, intelligent responses",
    description: "Your widget connects to an embedded AI agent with access to your knowledge base. Answers questions and captures leads — 24/7."
  },
  {
    icon: PhoneForwarded,
    title: "Seamless human handoff",
    benefit: "AI to human in one click",
    description: "When the AI hits its limits or a visitor requests a person, it transfers the conversation to your team with full context."
  },
  {
    icon: UserPlus,
    title: "Built-in lead capture",
    benefit: "Chat to CRM automatically",
    description: "The AI conversationally collects contact info and creates leads in your CRM with full conversation history attached."
  },
  {
    icon: Calendar,
    title: "Calendar booking",
    benefit: "Book meetings mid-chat",
    description: "Visitors check availability and book meetings through chat. Working hours, buffer times, and timezones all enforced."
  },
  {
    icon: Paintbrush,
    title: "5-step setup wizard",
    benefit: "Live in under 5 minutes",
    description: "Configure appearance, behavior, AI agent, and capabilities with a guided wizard. Live preview as you customize."
  },
  {
    icon: Lock,
    title: "GDPR compliant by default",
    benefit: "Privacy without paperwork",
    description: "Configurable consent, data retention policies, Right to Access exports, and SHA-256 hashed IPs."
  }
];
const identificationModes = [
  { mode: "Anonymous first", description: "Let visitors chat freely, then prompt for email after N messages. Lowest friction, highest engagement.", tag: "Recommended" },
  { mode: "Email required", description: "Collect email before the first message. Best for high-intent pages like pricing and demo requests.", tag: "High quality" },
  { mode: "Email optional", description: "Show an email prompt that visitors can skip. Balanced approach for general website traffic.", tag: "Flexible" }
];
const securityFeatures = [
  { icon: Shield, label: "Cryptographic widget keys with rotation" },
  { icon: Fingerprint, label: "IP-based rate limiting on sessions" },
  { icon: Lock, label: "Token-based rate limiting on messages" },
  { icon: Eye, label: "Tool allow-list (only safe, curated tools)" },
  { icon: Globe, label: "Multi-tenant isolation by workspace" },
  { icon: FileDown, label: "GDPR data export and deletion endpoints" },
  { icon: Trash2, label: "Configurable visitor data retention" },
  { icon: CodeXml, label: "CORS headers and origin validation" }
];
function IdentificationSection() {
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
            eyebrow: "Lead capture modes",
            headlineLines: ["Three identification modes.", "You pick the friction."],
            sub: "Match your lead capture flow to the page intent. From anonymous chat to required email — the AI adjusts.",
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
        className: "grid gap-4 md:grid-cols-3",
        children: identificationModes.map((mode) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            variants: innerItemVariants,
            className: cn(
              "overflow-hidden rounded-xl border bg-background p-6",
              mode.tag === "Recommended" ? "border-signature/35 shadow-[0_18px_40px_-22px_rgba(196,88,63,0.30)]" : "border-border/60"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[15px] font-semibold text-foreground", children: mode.mode }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: cn(
                      "rounded-[5px] border px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider",
                      mode.tag === "Recommended" ? "border-signature/30 bg-signature/10 text-signature" : "border-border/60 bg-muted text-muted-foreground"
                    ),
                    children: mode.tag
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[12.5px] leading-[1.55] text-muted-foreground", children: mode.description })
            ]
          },
          mode.mode
        ))
      }
    )
  ] }) });
}
function SecuritySection() {
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
            eyebrow: "Security & compliance",
            headlineLines: ["Production-grade security,", "out of the box."],
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
        className: "overflow-hidden rounded-xl border border-border/60 bg-background",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-0 sm:grid-cols-2", children: securityFeatures.map((feature, i) => {
          const Icon = feature.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              variants: innerItemVariants,
              className: cn(
                "flex items-center gap-3 px-5 py-4",
                i % 2 === 0 ? "sm:border-r sm:border-border/60" : "",
                i >= 2 ? "border-t border-border/60" : ""
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border/60 bg-muted/40 text-foreground/65", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] text-foreground/85", children: feature.label })
              ]
            },
            feature.label
          );
        }) })
      }
    )
  ] }) });
}
function ChatWidgetView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FeatureHero,
      {
        pillIcon: MessageSquareText,
        pillLabel: "Chat Widget",
        pillSubtitle: "AI on your site · 24/7 lead capture",
        headlineLines: ["Your website talks back.", "And it actually helps."],
        sub: "An AI-powered chat widget with calendar booking, knowledge base access, and seamless human handoff. Embedded on any site with one script tag.",
        primaryCta: { label: "Setup a demo", href: DEMO_CTA_HREF, shortcut: "D" },
        secondaryCta: { label: "Talk to sales", href: "/contact" },
        stats: [
          { value: "24 / 7", label: "AI coverage" },
          { value: "<2s", label: "Response time" },
          { value: "1-line", label: "Embed code" }
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      PainPointsBlock,
      {
        eyebrow: "The problem",
        headlineLines: ["Live chat is broken.", "And expensive."],
        sub: "The tools cost too much, response times are too slow, and the data never reaches your CRM.",
        points: painPoints
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CapabilitiesBlock,
      {
        eyebrow: "Capabilities",
        headlineLines: ["A chat widget that", "closes the loop."],
        sub: "Not just messages. A complete lead capture pipeline from the first visitor question to the booked meeting.",
        capabilities
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(IdentificationSection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SecuritySection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ComparisonBlock,
      {
        eyebrow: "Why OzziOS",
        headlineLines: ["Other chat tools", "vs. OzziOS."],
        legacyLabel: "Intercom / Drift / Zendesk",
        legacyItems: [
          { label: "$39 – $139+ per seat / month" },
          { label: "Canned bot responses" },
          { label: "Separate CRM integration needed" },
          { label: "No built-in AI agent" },
          { label: "GDPR compliance add-on" },
          { label: "Complex pricing tiers" }
        ],
        modernLabel: "OzziOS Chat Widget",
        modernItems: [
          { label: "Included in your plan" },
          { label: "AI-powered conversations" },
          { label: "Native CRM + lead pipeline" },
          { label: "Embedded AI with knowledge base" },
          { label: "GDPR compliant by default" },
          { label: "One script tag to deploy" }
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      FeatureCTABlock,
      {
        eyebrow: "Get started",
        headlineLines: ["Stop missing visitors.", "Start capturing them."],
        sub: "Add an AI chat widget to any website in under 5 minutes. Every conversation flows into your CRM.",
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
function ChatWidgetPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LandingLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChatWidgetView, {}) });
}
export {
  ChatWidgetPage as component
};
