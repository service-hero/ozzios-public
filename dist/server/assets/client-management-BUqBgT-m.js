import { n as jsxRuntimeExports, a as reactExports } from "./worker-entry-B_SLcB1Z.js";
import { a as MessageSquare, d as Bot, B as Brain, U as Users, e as ClipboardList, F as FileText, L as LandingLayout } from "./LandingLayout-CWwQi4iJ.js";
import { m as motion, A as ArrowRight } from "./proxy-SP-br39M.js";
import { B as Briefcase } from "./briefcase-KGMwC8RU.js";
import { u as useInView } from "./use-in-view-DO4SP-OS.js";
import { T as TriangleAlert } from "./triangle-alert-Bi7ThHyY.js";
import { E as Eye } from "./eye-B3QkZDuI.js";
import { C as Clock } from "./clock-YKzwlgBP.js";
import { c as createLucideIcon } from "./createLucideIcon-D4CjHuLj.js";
import { C as ChartColumn } from "./chart-column-BteI0noI.js";
import { C as CircleCheck } from "./circle-check-m0JZOYhB.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "./router-DIO52ZOv.js";
import "./utils-QXBWQHlM.js";
import "./button-CDiclS82.js";
const __iconNode$4 = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  ["path", { d: "M22 8c0-2.3-.8-4.3-2-6", key: "5bb3ad" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ],
  ["path", { d: "M4 2C2.8 3.7 2 5.7 2 8", key: "tap9e0" }]
];
const BellRing = createLucideIcon("bell-ring", __iconNode$4);
const __iconNode$3 = [
  [
    "path",
    {
      d: "M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762",
      key: "17lmqv"
    }
  ]
];
const HeartHandshake = createLucideIcon("heart-handshake", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M12 22v-5", key: "1ega77" }],
  ["path", { d: "M9 8V2", key: "14iosj" }],
  ["path", { d: "M15 8V2", key: "18g5xt" }],
  ["path", { d: "M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z", key: "osxo6l" }]
];
const Plug = createLucideIcon("plug", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M20 18v-2a4 4 0 0 0-4-4H4", key: "5vmcpk" }],
  ["path", { d: "m9 17-5-5 5-5", key: "nvlc11" }]
];
const Reply = createLucideIcon("reply", __iconNode$1);
const __iconNode = [
  ["path", { d: "m16 11 2 2 4-4", key: "9rsbq5" }],
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const UserCheck = createLucideIcon("user-check", __iconNode);
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
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
    title: "Things fall through the cracks",
    description: "A customer mentioned a deadline in an email last Tuesday. A job was supposed to start Friday. Nobody remembered, and now you are scrambling to explain the miss."
  },
  {
    icon: MessageSquare,
    title: "Communication is scattered",
    description: "Customer feedback lives in texts, job updates in spreadsheets, files in Google Drive, and invoices in QuickBooks. Finding the full picture on any customer requires opening five different tools."
  },
  {
    icon: Eye,
    title: "Customers have no visibility",
    description: 'Your customers call "just checking in" every week because they have no idea when their job is scheduled. You spend hours on the phone instead of doing the actual work.'
  },
  {
    icon: Clock,
    title: "Onboarding takes too long",
    description: "Every new customer means a new intake process, new estimate, new scheduling setup, and a dozen back-and-forth calls. By the time you start, they are already frustrated."
  }
];
const pipelineStages = [
  {
    step: "01",
    title: "Onboard",
    description: "Automated onboarding workflows collect customer information, set up job records, assign technicians, and kick off initial scheduling -- all in one smooth process.",
    features: ["Automated intake forms", "Job record creation", "Technician assignment workflows", "Welcome sequence automation"],
    color: "text-signature",
    bgColor: "bg-signature/10"
  },
  {
    step: "02",
    title: "Communicate",
    description: "Every customer gets a unified communication hub with an AI agent handling responses, follow-ups, and status updates automatically -- your customers get instant replies while your team focuses on getting the job done.",
    features: ["AI agent for every customer", "Instant automated responses", "File sharing & approvals", "Smart escalation to humans"],
    color: "text-electric",
    bgColor: "bg-electric/10"
  },
  {
    step: "03",
    title: "Execute",
    description: "AI agents handle the day-to-day operations. Scheduling, dispatching, follow-ups, and reporting run on autopilot with human oversight.",
    features: ["AI-powered task execution", "Deadline tracking", "Dependency management", "Automated quality checks"],
    color: "text-mint",
    bgColor: "bg-mint/10"
  },
  {
    step: "04",
    title: "Report",
    description: "Customers see real-time updates showing exactly what is happening and when their job will be completed. No more daily phone calls -- it is all live.",
    features: ["Real-time customer updates", "Automated reporting", "Custom KPI tracking", "Branded reporting"],
    color: "text-signature",
    bgColor: "bg-signature/10"
  },
  {
    step: "05",
    title: "Retain",
    description: "AI monitors customer health signals -- engagement drops, missed appointments, declining satisfaction -- and alerts you before a customer churns. Proactive, not reactive.",
    features: ["Customer health scoring", "Churn risk detection", "Upsell opportunity flagging", "Satisfaction tracking"],
    color: "text-electric",
    bgColor: "bg-electric/10"
  }
];
const featureHighlights = [
  {
    icon: Users,
    title: "CRM & Contacts",
    description: "Complete customer profiles with every interaction, file, and note. Your single source of truth for all customer relationships.",
    link: "/features/contacts"
  },
  {
    icon: ClipboardList,
    title: "Task Management",
    description: "Assign, track, and automate tasks across customers. Dependencies, deadlines, and escalation rules keep everything on schedule.",
    link: "/features/tasks"
  },
  {
    icon: MessageSquare,
    title: "Channels & Messaging",
    description: "Dedicated communication channels for your team with an AI agent installed to handle day-to-day comms. Threaded conversations, file sharing, and smart escalation.",
    link: "/features/channels"
  },
  {
    icon: FileText,
    title: "Documents & E-Signing",
    description: "Estimates, contracts, and service agreements with built-in e-signatures. Send, track, and close -- all inside OzziOS.",
    link: "/features/documents"
  },
  {
    icon: Brain,
    title: "AI Agents",
    description: "30+ specialist AI agents handle execution across scheduling, communications, follow-ups, and more -- plus create your own. Your team focuses on delivering great service.",
    link: "/features/ai-agents"
  },
  {
    icon: ChartColumn,
    title: "Customer Reporting",
    description: "Branded dashboards with live metrics. Customers see progress in real-time, and you never write another status update.",
    link: "/features/analytics"
  }
];
const results = [
  { value: "0", label: "Dropped jobs", description: "Automated tracking and reminders mean nothing slips through the cracks. Ever." },
  { value: "75%", label: "Fewer status calls", description: 'Real-time customer updates eliminate the daily "when are you coming?" phone calls' },
  { value: "2x", label: "Customer capacity", description: "Manage twice as many customers per team member with AI-powered execution and automation" },
  { value: "35%", label: "Lower churn", description: "Proactive health monitoring catches at-risk customers before they start looking elsewhere" }
];
function HeroSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-pattern opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: "hidden",
        animate: "visible",
        variants: containerVariants,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "text-center max-w-3xl mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tag-neo rounded-full text-signature mb-6 inline-flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-3.5 h-3.5" }),
              "Customer Management"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-display font-display text-foreground mb-6", children: [
              "Never drop a customer ball",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-signature", children: "again" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto", children: "Onboard, communicate, execute, report, and retain -- all in one platform. OzziOS replaces your patchwork of tools with an end-to-end customer management system powered by AI." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://app.ozzios.com/sign-up",
                className: "inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200",
                children: [
                  "Manage customers better",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "mt-16 max-w-2xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-neo rounded-xl p-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl md:text-5xl text-signature mb-2", children: "68%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "of customers leave service companies due to poor communication, not poor work. OzziOS fixes that." })
          ] }) })
        ]
      }
    ) })
  ] });
}
function ProblemSection() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 lg:py-32 bg-muted/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1200px] px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        ref,
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.6 },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag-neo rounded-full text-signature mb-6 inline-block", children: "The Problem" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4", children: "Customer management is a mess" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-xl mx-auto", children: "More customers should mean more revenue. Instead, it means more chaos, more dropped balls, and more churn." })
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-signature/10 flex items-center justify-center mb-5 group-hover:bg-signature/20 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6 text-signature" }) }),
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
function PipelineSection() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1200px] px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        ref,
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.6 },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag-neo rounded-full text-signature mb-6 inline-block", children: "The Lifecycle" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4", children: "Every customer, perfectly managed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "OzziOS manages the complete customer lifecycle. From first contact to long-term retention, every stage is systematized and powered by AI." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: pipelineStages.map((stage, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(PipelineStageCard, { stage, index, isLast: index === pipelineStages.length - 1 }, stage.step)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.6, delay: 0.5 },
        className: "mt-12 text-center",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-3 card-neo rounded-full px-6 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(HeartHandshake, { className: "w-4 h-4 text-signature" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Happy customers stay longer, spend more, and refer others. OzziOS makes that the default." })
        ] })
      }
    )
  ] }) });
}
function PipelineStageCard({ stage, index, isLast }) {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref,
      initial: { opacity: 0, x: index % 2 === 0 ? -30 : 30 },
      animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 },
      transition: { duration: 0.6, delay: index * 0.08 },
      className: "relative",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-neo rounded-xl p-8 md:p-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-start gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-14 h-14 rounded-xl ${stage.bgColor} flex items-center justify-center shrink-0`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-display text-lg ${stage.color}`, children: stage.step }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl md:text-3xl text-foreground mb-3", children: stage.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-[15px] leading-relaxed mb-6", children: stage.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: stage.features.map((feature) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-foreground/70 bg-muted border border-border rounded-full",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3 text-mint" }),
                  feature
                ]
              },
              feature
            )) })
          ] })
        ] }) }),
        !isLast && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-6 bg-border" }) })
      ]
    }
  );
}
const aiCommsCapabilities = [
  {
    icon: Reply,
    title: "Instant customer responses",
    description: "Customer asks a question at 11 PM? The AI agent responds immediately with accurate, context-aware answers pulled from your knowledge base and job history."
  },
  {
    icon: BellRing,
    title: "Proactive status updates",
    description: "The agent automatically sends progress updates, appointment reminders, and job completion summaries to customers -- without anyone on your team lifting a finger."
  },
  {
    icon: UserCheck,
    title: "Smart human escalation",
    description: "When a customer request needs human judgment -- a scheduling change, a sensitive conversation, a pricing question -- the agent flags it and routes to the right team member."
  },
  {
    icon: Brain,
    title: "Learns your voice and context",
    description: "The agent uses your knowledge base, past conversations, and customer-specific context to respond in your brand voice. Customers cannot tell the difference."
  }
];
function AICommsSection() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 lg:py-32 bg-muted/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1200px] px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        ref,
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.6 },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tag-neo rounded-full text-signature mb-6 inline-flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "w-3.5 h-3.5" }),
            "AI Customer Comms"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4", children: "Install an AI agent into every team channel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Each team channel gets its own AI agent that handles communication 24/7. It responds to questions, shares updates, and escalates to your team only when it matters." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
        transition: { duration: 0.6, delay: 0.15 },
        className: "max-w-3xl mx-auto mb-16",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-neo rounded-xl p-8 md:p-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-signature/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plug, { className: "w-6 h-6 text-signature" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-foreground", children: "How it works" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Three steps to always-on customer communication" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-signature/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-signature text-sm", children: "01" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-1", children: "Create a team channel" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Set up a dedicated channel for your team -- or use one you already have. This becomes the single hub for all customer communication." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-electric text-sm", children: "02" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-1", children: "Install an AI agent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Assign an AI agent to the channel. It instantly has access to your knowledge base, the customer's history, job status, and your brand voice." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-mint/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-mint text-sm", children: "03" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-1", children: "Let it handle the conversation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "The agent responds to customer messages, shares proactive updates, and only pulls in your team when human judgment is needed. Your customers get 24/7 responsiveness." })
              ] })
            ] })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        variants: containerVariants,
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        className: "grid md:grid-cols-2 gap-6",
        children: aiCommsCapabilities.map((cap) => {
          const Icon = cap.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              variants: itemVariants,
              className: "card-neo rounded-xl p-8 group",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-signature/10 flex items-center justify-center mb-5 group-hover:bg-signature/20 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6 text-signature" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-foreground mb-3", children: cap.title }),
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
function FeatureHighlightsSection() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 lg:py-32 bg-muted/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1200px] px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        ref,
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.6 },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag-neo rounded-full text-signature mb-6 inline-block", children: "Features That Power It" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4", children: "One platform for every customer need" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-xl mx-auto", children: "Replace your stack of disconnected tools with one unified system that handles communication, execution, and reporting." })
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
        children: featureHighlights.map((feature) => {
          const Icon = feature.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.a,
            {
              href: feature.link,
              variants: itemVariants,
              className: "card-neo rounded-xl p-8 group block",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-signature/10 flex items-center justify-center mb-5 group-hover:bg-signature/20 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6 text-signature" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg text-foreground mb-3 group-hover:text-signature transition-colors", children: feature.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed mb-4", children: feature.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-sm font-medium text-signature", children: [
                  "Learn more",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" })
                ] })
              ]
            },
            feature.title
          );
        })
      }
    )
  ] }) });
}
function ResultsSection() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1200px] px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        ref,
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.6 },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag-neo rounded-full text-mint mb-6 inline-block", children: "Results" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4", children: "Better customers, better retention" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-xl mx-auto", children: "Service companies using OzziOS for customer management deliver better work, communicate more effectively, and keep customers longer." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        variants: containerVariants,
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        className: "grid grid-cols-2 lg:grid-cols-4 gap-6",
        children: results.map((result) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            variants: itemVariants,
            className: "card-neo rounded-xl p-6 text-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl md:text-4xl text-signature mb-2", children: result.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground text-sm mb-2", children: result.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: result.description })
            ]
          },
          result.label
        ))
      }
    )
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
          "Stop managing chaos.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-signature", children: "Start managing customers." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground mb-10 max-w-lg mx-auto", children: "One platform for onboarding, communication, execution, and reporting. Your customers will thank you." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://app.ozzios.com/sign-up",
            className: "inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200",
            children: [
              "Manage customers better",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
            ]
          }
        ),
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
function ClientManagementView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProblemSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PipelineSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AICommsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureHighlightsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ResultsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
function ClientManagementPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LandingLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ClientManagementView, {}) });
}
export {
  ClientManagementPage as component
};
