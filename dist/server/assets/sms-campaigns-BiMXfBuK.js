import { j as jsxRuntimeExports, m as motion, r as reactExports, u as useInView } from "./vendor-framer-DZFBeC81.js";
import { L as LandingLayout } from "./LandingLayout-B-c7Elxf.js";
import { D as DeferredSection } from "./lazy-section-B65XiZaR.js";
import { ay as MessageCircle, A as ArrowRight, w as TriangleAlert, U as Users, aa as Timer, z as ChartColumn, C as CircleCheck, az as Smartphone, y as Target, g as Send, aA as ShieldCheck, ao as Pause, Z as Zap } from "./vendor-icons-BkkOHNOi.js";
import "./vendor-react-MO5I_vdy.js";
import "./vendor-router-BDaSxPy_.js";
import "./vendor-radix-Bd9PM-r6.js";
import "node:async_hooks";
import "./utils-QXBWQHlM.js";
import "./button-HnwzKl7C.js";
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
const painPoints = [
  {
    icon: TriangleAlert,
    title: "Compliance is a minefield",
    description: "TCPA violations cost $500-$1,500 per text. Most SMS tools leave compliance to you -- one mistake with opt-outs and you are facing a class action."
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
    description: "Build SMS audiences directly from your contact database. Filter by lead score, last activity, tags, or any custom field. No list exports needed."
  },
  {
    icon: Send,
    title: "Intelligent batch orchestration",
    description: "Messages send in controlled batches with Twilio rate limiting built in. Carrier-friendly sending that protects your deliverability and sender reputation."
  },
  {
    icon: ShieldCheck,
    title: "Compliance built in",
    description: "Automatic opt-out handling, consent tracking, and quiet hours enforcement. A2P 10DLC registration support keeps you compliant with carrier requirements."
  },
  {
    icon: Pause,
    title: "Mid-campaign control",
    description: "Pause, resume, or cancel campaigns mid-send. Spot a problem? Stop the campaign before it reaches your entire list. No more irreversible sends."
  },
  {
    icon: ChartColumn,
    title: "Delivery status tracking",
    description: "Real-time delivery confirmations via Twilio webhooks. Know exactly which messages delivered, failed, or are still queued."
  },
  {
    icon: Zap,
    title: "Workflow integration",
    description: "Trigger SMS campaigns from workflows, or trigger workflows from SMS replies. Two-way communication that feeds into your entire business automation."
  }
];
function HeroSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-pattern opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-[900px] px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", animate: "visible", variants: containerVariants, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tag-neo rounded-full bg-signature/10 border-signature mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4 text-signature" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold text-signature uppercase tracking-wider", children: "SMS Campaigns" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-display font-display text-foreground mb-6", children: [
          "SMS campaigns that",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-signature", children: "respect the rules" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto mb-8", children: "98% open rate. 45% response rate. SMS is the most powerful channel in marketing -- if you do it right. OzziOS handles compliance, rate limiting, and delivery so you focus on the message." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://app.ozzios.com/sign-up",
            className: "inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200",
            children: [
              "Start SMS campaigns",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "grid grid-cols-3 gap-8 max-w-lg mx-auto mt-12", children: [
        { value: "98%", label: "Open rate" },
        { value: "45%", label: "Response rate" },
        { value: "<3s", label: "Delivery time" }
      ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl md:text-3xl text-foreground mb-1", children: stat.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: stat.label })
      ] }, stat.label)) })
    ] }) })
  ] });
}
function PainPointsSection() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 lg:py-32 bg-muted/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        ref,
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.6 },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag-neo text-signature mb-6 inline-block", children: "The Problem" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4", children: "SMS marketing is high-risk, high-reward" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-xl mx-auto", children: "The most powerful marketing channel is also the most regulated. Here is where most tools fail." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        variants: containerVariants,
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        className: "grid md:grid-cols-2 gap-6",
        children: painPoints.map((point) => {
          const Icon = point.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              variants: itemVariants,
              className: "card-neo rounded-xl p-8 group",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-5 group-hover:bg-destructive/20 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6 text-destructive" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-foreground mb-3", children: point.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: point.description })
              ]
            },
            point.title
          );
        })
      }
    )
  ] }) });
}
function SolutionSection() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        ref,
        initial: { opacity: 0, x: -30 },
        animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 },
        transition: { duration: 0.7 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag-neo text-signature mb-6 inline-block", children: "The Solution" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-6", children: "Compliant SMS at scale. No headaches." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-muted-foreground text-base leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "OzziOS SMS campaigns are built on Twilio's infrastructure with intelligent rate limiting, batch orchestration, and compliance guardrails baked in from day one." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Your campaigns send at carrier-friendly rates, respect opt-outs automatically, and give you full control to pause or cancel mid-flight. Combined with CRM-native targeting, you reach the right people with the right message every time." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 space-y-3", children: [
            "Twilio-powered delivery with 99.9% uptime",
            "Automatic opt-out and consent management",
            "Rate limiting protects sender reputation",
            "Real-time delivery status via webhooks"
          ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm text-foreground/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-mint mt-0.5 shrink-0" }),
            item
          ] }, item)) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, x: 30 },
        animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 },
        transition: { duration: 0.7, delay: 0.2 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-neo rounded-xl p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "w-5 h-5 text-signature" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-foreground", children: "Campaign Preview" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted rounded-lg p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-signature/20 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4 text-signature" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl rounded-tl-sm p-3 max-w-[280px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: "Hey Sarah! Your HVAC maintenance is due next month. Book early and save 15%. Schedule now: app.ozzios.com/r/abc123" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-2", children: "Reply STOP to opt out" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-3 bg-muted rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg text-foreground", children: "2,847" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Delivered" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-3 bg-muted rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg text-mint", children: "98.2%" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Delivery rate" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-3 bg-muted rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg text-electric", children: "412" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Link clicks" })
            ] })
          ] })
        ] }) })
      }
    )
  ] }) }) });
}
function CapabilitiesSection() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 lg:py-32 bg-muted/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        ref,
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.6 },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag-neo text-signature mb-6 inline-block", children: "Capabilities" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4", children: "Powerful SMS without the complexity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-xl mx-auto", children: "Every feature designed for service businesses who need to send at scale without losing sleep over compliance." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        variants: containerVariants,
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
        children: capabilities.map((cap) => {
          const Icon = cap.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              variants: itemVariants,
              className: "card-neo rounded-xl p-8 group",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-signature/10 flex items-center justify-center mb-5 group-hover:bg-signature/20 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6 text-signature" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg text-foreground mb-3", children: cap.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: cap.description })
              ]
            },
            cap.title
          );
        })
      }
    )
  ] }) });
}
function DifferentiatorSection() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const comparisons = [
    {
      category: "Compliance",
      ozzios: "Built-in opt-out handling, consent tracking, and A2P registration",
      others: "Compliance is your problem -- good luck"
    },
    {
      category: "Rate limiting",
      ozzios: "Intelligent per-user and per-workspace rate limits protect deliverability",
      others: "Blast your entire list instantly, get flagged as spam"
    },
    {
      category: "Campaign control",
      ozzios: "Pause, resume, and cancel mid-send with batch orchestration",
      others: "Hit send and hope for the best"
    },
    {
      category: "Data integration",
      ozzios: "CRM-native targeting, workflow triggers, and AI agent coordination",
      others: "Standalone tool with CSV imports"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[900px] px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        ref,
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.6 },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag-neo text-signature mb-6 inline-block", children: "Why OzziOS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4", children: "SMS done right" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-xl mx-auto", children: "The only SMS platform built for service businesses with compliance and CRM integration from day one." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: comparisons.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.5, delay: index * 0.08 },
        className: "bg-card border-2 border-border rounded-lg p-6",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm text-foreground mb-4 uppercase tracking-wider", children: item.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-mint mt-0.5 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-mint mb-1 uppercase tracking-wider", children: "OzziOS" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80", children: item.ozzios })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5 h-5 rounded-full border-2 border-border mt-0.5 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider", children: "Others" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: item.others })
              ] })
            ] })
          ] })
        ]
      },
      item.category
    )) })
  ] }) });
}
function CTASection() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 lg:py-32 bg-muted/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-4xl px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 20 },
      animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
      transition: { duration: 0.6 },
      className: "text-center",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight mb-6", children: [
          "Reach every phone.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Stay compliant." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground mb-10 max-w-lg mx-auto", children: "SMS campaigns with built-in compliance, intelligent rate limiting, and CRM-native targeting. Start sending today." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://app.ozzios.com/sign-up",
            className: "inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200",
            children: [
              "Start SMS campaigns",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "/contact",
            className: "text-sm text-muted-foreground hover:text-foreground/80 transition-colors",
            children: "Or talk to our team"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "256-bit Encryption" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline text-border", children: "|" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "GDPR Ready" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline text-border", children: "|" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "99.9% Uptime SLA" })
        ] })
      ]
    }
  ) }) });
}
function SmsCampaignsView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(PainPointsSection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SolutionSection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CapabilitiesSection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DifferentiatorSection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {}) })
  ] });
}
function SmsCampaignsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LandingLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SmsCampaignsView, {}) });
}
export {
  SmsCampaignsPage as component
};
