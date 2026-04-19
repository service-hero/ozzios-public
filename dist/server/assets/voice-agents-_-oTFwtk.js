import { j as jsxRuntimeExports, r as reactExports, u as useInView, m as motion } from "./vendor-framer-DZFBeC81.js";
import { L as LandingLayout } from "./LandingLayout-D-c6g3QV.js";
import { D as DeferredSection } from "./lazy-section-B65XiZaR.js";
import { F as FeatureHero, P as PainPointsBlock, C as CapabilitiesBlock, d as ComparisonBlock, a as FeatureCTABlock, S as SectionHeader, c as SectionHeading, K as Kbd } from "./_landing-primitives-BgwWv7GL.js";
import { z as Phone, D as DollarSign, c as Clock, U as Users, T as TriangleAlert, ai as PhoneIncoming, aj as PhoneOutgoing, ak as Mic, r as Star, al as FlaskConical, u as Settings } from "./vendor-icons-BFmuwI-v.js";
import "./vendor-react-MO5I_vdy.js";
import "./vendor-router-DD_41qJ4.js";
import "./vendor-radix-Bd9PM-r6.js";
import "node:async_hooks";
import "./utils-QXBWQHlM.js";
const painPoints = [
  {
    icon: DollarSign,
    title: "Call centers cost a fortune",
    description: "A single receptionist costs $35K-$50K/year. Scaling to 24/7 coverage means 3x that. And you still get inconsistent quality and missed calls during breaks."
  },
  {
    icon: Clock,
    title: "Missed calls = missed revenue",
    description: "80% of callers will not leave a voicemail. Every missed call is a lost lead. After hours, weekends, and holidays — your phone rings and nobody answers."
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
    benefit: "24 / 7 / 365 coverage",
    description: "AI agents answer calls instantly. Custom greetings, after-hours messages, and intelligent routing based on caller intent."
  },
  {
    icon: PhoneOutgoing,
    title: "Outbound call campaigns",
    benefit: "Calls while you sleep",
    description: "Launch outbound calling campaigns with batch orchestration. AI agents qualify leads and book appointments."
  },
  {
    icon: Mic,
    title: "Real-time voice AI",
    benefit: "Sub-second latency",
    description: "Deepgram speech-to-text and ElevenLabs voice synthesis deliver natural, human-like conversations."
  },
  {
    icon: Star,
    title: "AI call quality scoring",
    benefit: "Coaching recommendations",
    description: "Every call is automatically transcribed, scored, and classified. AI reviews flag issues and provide guidance."
  },
  {
    icon: FlaskConical,
    title: "Voice testing lab",
    benefit: "Test before going live",
    description: "Test your voice agents in-browser. Real-time transcription, tool execution, and cost tracking at ~$0.07/min."
  },
  {
    icon: Settings,
    title: "Per-number configuration",
    benefit: "Different voice per line",
    description: "TTS provider, STT provider, greeting, system prompt, transfer destinations, and agent assignment per number."
  }
];
function LiveCallSection() {
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
            eyebrow: "Inside a live call",
            headlineLines: ["Natural conversations.", "Booked appointments."],
            sub: "Sub-second latency, voice synthesis that doesn't sound like a robot, and tool calls that book meetings, update CRM, and transfer to humans seamlessly."
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: 20 },
        animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 },
        transition: { duration: 0.7, delay: 0.2 },
        className: "overflow-hidden rounded-xl border border-border/70 bg-background shadow-[0_18px_50px_-26px_rgba(34,27,22,0.30)]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border/60 bg-muted/30 px-5 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5 text-signature" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10.5px] uppercase tracking-[0.18em] text-foreground/55", children: "Inbound · 02:14" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-[5px] border border-mint/30 bg-mint/10 px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-mint", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 animate-pulse rounded-full bg-mint" }),
              "Live"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5 px-5 py-5", children: [
            { who: "AI", text: "Hi, this is Ozzi from Service Hero. How can I help you today?" },
            { who: "Caller", text: "My AC stopped working. Can someone come tomorrow?" },
            { who: "AI", text: "Tomorrow at 10am or 2pm — which works better?" },
            { who: "Caller", text: "Two pm please." }
          ].map((line, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `w-12 shrink-0 font-mono text-[9.5px] font-semibold uppercase tracking-wider ${line.who === "AI" ? "text-signature" : "text-foreground/55"}`,
                children: line.who
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12.5px] leading-[1.5] text-foreground/85", children: line.text })
          ] }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border/60 px-5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-mint/30 bg-mint/[0.06] px-3 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-mint", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-mint" }),
              "Tool · book_appointment"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[12px] text-foreground/85", children: "Appointment booked for tomorrow 2pm. Confirmation sent to caller." })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-t border-border/60 bg-muted/20 px-5 py-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { label: "Call quality 9.2 / 10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/45", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Kbd, { className: "h-[16px] min-w-[16px] text-[9px]", children: "$" }),
              "0.07 / min"
            ] })
          ] })
        ]
      }
    )
  ] }) }) });
}
function VoiceAgentsView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FeatureHero,
      {
        pillIcon: Phone,
        pillLabel: "Voice Agents",
        pillSubtitle: "Twilio + ElevenLabs · sub-second latency",
        headlineLines: ["AI agents that", "answer the phone."],
        sub: "Your phones ring 24/7. Now something intelligent picks up. AI-powered voice agents that handle inbound calls, make outbound calls, qualify leads, and book appointments — at $0.07/minute instead of $25/hour.",
        primaryCta: { label: "Deploy a voice agent", href: "https://app.ozzios.com/sign-up", shortcut: "S" },
        secondaryCta: { label: "See pricing", href: "/pricing" },
        stats: [
          { value: "24 / 7", label: "Availability" },
          { value: "$0.07", label: "Per minute" },
          { value: "<1s", label: "Response latency" }
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      PainPointsBlock,
      {
        eyebrow: "The problem",
        headlineLines: ["Phone calls are expensive", "and unpredictable."],
        sub: "The phone is still the #1 channel for high-intent leads. But staffing it is a nightmare.",
        points: painPoints
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(LiveCallSection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CapabilitiesBlock,
      {
        eyebrow: "Capabilities",
        headlineLines: ["A complete voice ops stack,", "in one platform."],
        sub: "Inbound, outbound, testing, scoring, and per-number configuration — everything you need to run a phone operation without a call center.",
        capabilities
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ComparisonBlock,
      {
        eyebrow: "Why OzziOS",
        headlineLines: ["Call center", "vs. AI voice ops."],
        legacyLabel: "Traditional call center",
        legacyItems: [
          { label: "$35K – $50K per receptionist" },
          { label: "Limited to business hours" },
          { label: "3 months of training per hire" },
          { label: "Inconsistent script delivery" },
          { label: "Manual call recording review" }
        ],
        modernLabel: "OzziOS Voice Agents",
        modernItems: [
          { label: "$0.07 / minute pay-as-you-go" },
          { label: "24 / 7 / 365 availability" },
          { label: "Trained instantly from KB" },
          { label: "Consistent quality every call" },
          { label: "Auto-transcribed + AI-scored" }
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      FeatureCTABlock,
      {
        eyebrow: "Get started",
        headlineLines: ["Stop missing calls.", "Start booking them."],
        sub: "Deploy a voice agent in minutes. Test it in the lab. Connect it to a Twilio number. Watch it book your next 100 appointments.",
        primaryCta: { label: "Deploy a voice agent", href: "https://app.ozzios.com/sign-up", shortcut: "S" },
        secondaryCta: { label: "See pricing", href: "/pricing" },
        trust: [
          { value: "256-bit", label: "Encryption" },
          { value: "GDPR ready", label: "Compliance" },
          { value: "99.9%", label: "Uptime SLA" }
        ]
      }
    ) })
  ] });
}
function VoiceAgentsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LandingLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(VoiceAgentsView, {}) });
}
export {
  VoiceAgentsPage as component
};
