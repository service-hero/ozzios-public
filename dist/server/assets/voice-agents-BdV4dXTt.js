import { n as jsxRuntimeExports, a as reactExports } from "./worker-entry-DUbV-qEz.js";
import { P as Phone, U as Users, c as Bot, L as LandingLayout } from "./LandingLayout-BFxFbzxM.js";
import { m as motion, A as ArrowRight } from "./proxy-BEnWwJWi.js";
import { u as useInView } from "./use-in-view-DoLVnWF9.js";
import { D as DollarSign } from "./dollar-sign-BcKEf1UY.js";
import { C as Clock } from "./clock-oQ2YqCyM.js";
import { T as TriangleAlert } from "./triangle-alert-BHeXVE41.js";
import { C as CircleCheck } from "./circle-check-CFGtU0xv.js";
import { c as createLucideIcon } from "./createLucideIcon-OQXTLfCE.js";
import { Z as Zap } from "./zap-1MGNmvOI.js";
import { S as Star, a as Settings } from "./star-DxgSp20k.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "./router-BLJT3Mxm.js";
import "./utils-QXBWQHlM.js";
import "./button-CtEClRbA.js";
import "./menu-Bt53Wknu.js";
const __iconNode$4 = [
  [
    "path",
    {
      d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",
      key: "18mbvz"
    }
  ],
  ["path", { d: "M6.453 15h11.094", key: "3shlmq" }],
  ["path", { d: "M8.5 2h7", key: "csnxdl" }]
];
const FlaskConical = createLucideIcon("flask-conical", __iconNode$4);
const __iconNode$3 = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
];
const Mic = createLucideIcon("mic", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M13 2a9 9 0 0 1 9 9", key: "1itnx2" }],
  ["path", { d: "M13 6a5 5 0 0 1 5 5", key: "11nki7" }],
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const PhoneCall = createLucideIcon("phone-call", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M16 2v6h6", key: "1mfrl5" }],
  ["path", { d: "m22 2-6 6", key: "6f0sa0" }],
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const PhoneIncoming = createLucideIcon("phone-incoming", __iconNode$1);
const __iconNode = [
  ["path", { d: "m16 8 6-6", key: "oawc05" }],
  ["path", { d: "M22 8V2h-6", key: "oqy2zc" }],
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const PhoneOutgoing = createLucideIcon("phone-outgoing", __iconNode);
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
    icon: DollarSign,
    title: "Call centers cost a fortune",
    description: "A single receptionist costs $35K-$50K/year. Scaling to 24/7 coverage means 3x that. And you still get inconsistent quality and missed calls during breaks."
  },
  {
    icon: Clock,
    title: "Missed calls = missed revenue",
    description: "80% of callers will not leave a voicemail. Every missed call is a lost lead. After hours, weekends, and holidays -- your phone rings and nobody answers."
  },
  {
    icon: Users,
    title: "Training never ends",
    description: "New hire? 3 months of training. They leave? Start over. Call scripts get outdated, quality varies between reps, and institutional knowledge walks out the door."
  },
  {
    icon: TriangleAlert,
    title: "No visibility into call quality",
    description: "Are calls being handled well? Are leads being qualified correctly? Without recording, transcribing, and reviewing every call, you are guessing."
  }
];
const capabilities = [
  {
    icon: PhoneIncoming,
    title: "Inbound call handling",
    description: "AI agents answer calls instantly, 24/7/365. Custom greetings, after-hours messages, and intelligent routing based on caller intent and history."
  },
  {
    icon: PhoneOutgoing,
    title: "Outbound call campaigns",
    description: "Launch outbound calling campaigns with batch orchestration. AI agents make the calls, qualify leads, and book appointments -- all while you sleep."
  },
  {
    icon: Mic,
    title: "Real-time voice AI",
    description: "Deepgram speech-to-text and ElevenLabs voice synthesis deliver natural, human-like conversations. Sub-second latency means no awkward pauses."
  },
  {
    icon: Star,
    title: "AI call quality scoring",
    description: "Every call is automatically transcribed, scored, and classified. AI reviews rate quality, flag issues, and provide coaching recommendations."
  },
  {
    icon: FlaskConical,
    title: "Voice testing lab",
    description: "Test your voice agents in-browser before going live. Real-time transcription, tool execution visualization, and cost tracking at ~$0.07/min."
  },
  {
    icon: Settings,
    title: "Per-number configuration",
    description: "Configure each phone number independently: TTS provider, STT provider, greeting, system prompt, transfer destinations, and agent assignment."
  }
];
function HeroSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-pattern opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-[900px] px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", animate: "visible", variants: containerVariants, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tag-neo rounded-full bg-signature/10 border-signature mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4 text-signature" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold text-signature uppercase tracking-wider", children: "Voice Agents" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-display font-display text-foreground mb-6", children: [
          "AI agents that",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-signature", children: "answer the phone" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto mb-8", children: "Your phones ring 24/7. Now something intelligent picks up. AI-powered voice agents that handle inbound calls, make outbound calls, qualify leads, and book appointments -- at $0.07/minute instead of $25/hour." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://app.ozzios.com/sign-up",
            className: "inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200",
            children: [
              "Deploy a voice agent",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "grid grid-cols-3 gap-8 max-w-lg mx-auto mt-12", children: [
        { value: "24/7", label: "Availability" },
        { value: "$0.07", label: "Per minute" },
        { value: "<1s", label: "Response latency" }
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4", children: "Phone calls are expensive and unpredictable" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-xl mx-auto", children: "The phone is still the #1 channel for high-intent leads. But staffing it is a nightmare." })
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-6", children: "AI receptionists that never miss a call" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-muted-foreground text-base leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "OzziOS Voice Agents combine Twilio's telephony infrastructure with Deepgram's real-time speech recognition and ElevenLabs' natural voice synthesis to create AI agents that sound human and act intelligently." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Every call is answered instantly, transcribed in real-time, and scored for quality. Agents access your CRM, execute tools, book appointments, and transfer calls to humans when needed -- all within a single conversation." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 space-y-3", children: [
            "Twilio SIP trunking for enterprise-grade telephony",
            "Deepgram streaming STT with sub-second latency",
            "ElevenLabs natural voice synthesis",
            "Full CRM integration and tool execution during calls"
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-mint animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-foreground text-sm", children: "Live Call" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-mono", children: "02:34" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted rounded-lg p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneCall, { className: "w-3 h-3 text-muted-foreground" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold text-muted-foreground uppercase", children: "Caller" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: `"Hi, I'm looking to schedule a consultation for next week."` })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-signature/5 rounded-lg p-3 border border-signature/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "w-3 h-3 text-signature" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold text-signature uppercase", children: "AI Agent" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: `"I'd be happy to help you schedule that. I can see you're in our system -- let me pull up the available times for next week."` })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 py-2 bg-electric/5 border border-electric/10 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3 h-3 text-electric" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-electric font-medium", children: "Tool: check_calendar_availability" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-3 bg-muted rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-base text-foreground", children: "Sales Inquiry" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Classification" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-3 bg-muted rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-0.5", children: [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: `w-3 h-3 ${i <= 4 ? "text-signature fill-signature" : "text-border"}` }, i)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-1", children: "AI Quality Score" })
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4", children: "A complete voice AI platform" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-xl mx-auto", children: "Not just an answering machine. A fully intelligent voice agent with CRM access, tool execution, and quality assurance." })
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
      category: "Voice quality",
      ozzios: "ElevenLabs natural synthesis with multiple voice options and sub-second latency",
      others: "Robotic TTS that callers hang up on immediately"
    },
    {
      category: "Intelligence",
      ozzios: "Full CRM access, tool execution, appointment booking, and lead qualification during the call",
      others: "Script-based IVR menus with no real understanding"
    },
    {
      category: "Quality assurance",
      ozzios: "Every call transcribed, scored by AI, and classified with coaching recommendations",
      others: "Manual call review of random samples"
    },
    {
      category: "Cost",
      ozzios: "~$0.07/min for 24/7 coverage with consistent quality",
      others: "$25-40/hr per rep plus benefits, training, and turnover"
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4", children: "Replace your call center, not your standards" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-xl mx-auto", children: "AI voice agents that deliver better quality at a fraction of the cost." })
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
          "Never miss a call.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Never miss a lead." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground mb-10 max-w-lg mx-auto", children: "Deploy AI voice agents that answer every call, qualify every lead, and cost a fraction of a human team. Get started in minutes." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://app.ozzios.com/sign-up",
            className: "inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200",
            children: [
              "Deploy a voice agent",
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "SOC 2 Compliant" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline text-border", children: "|" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "GDPR Ready" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline text-border", children: "|" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "99.9% Uptime SLA" })
        ] })
      ]
    }
  ) }) });
}
function VoiceAgentsView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PainPointsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SolutionSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CapabilitiesSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DifferentiatorSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
function VoiceAgentsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LandingLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(VoiceAgentsView, {}) });
}
export {
  VoiceAgentsPage as component
};
