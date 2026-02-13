import { n as jsxRuntimeExports, a as reactExports } from "./worker-entry-DUbV-qEz.js";
import { c as Bot, U as Users, a as MessageSquare, B as Brain, L as LandingLayout } from "./LandingLayout-BFxFbzxM.js";
import { m as motion, A as ArrowRight } from "./proxy-BEnWwJWi.js";
import { u as useInView } from "./use-in-view-DoLVnWF9.js";
import { C as Clock } from "./clock-oQ2YqCyM.js";
import { C as ChartColumn } from "./chart-column-BodL8QE9.js";
import { c as createLucideIcon } from "./createLucideIcon-OQXTLfCE.js";
import { G as GitBranch } from "./git-branch-D7ti549O.js";
import { E as Eye } from "./eye-yZ4ZOJ0c.js";
import { S as Shield } from "./shield-CRI1Lu_S.js";
import { S as Sparkles } from "./sparkles-DZv4tgq8.js";
import { C as CircleCheck } from "./circle-check-CFGtU0xv.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "./router-BLJT3Mxm.js";
import "./utils-QXBWQHlM.js";
import "./button-CtEClRbA.js";
import "./menu-Bt53Wknu.js";
const __iconNode = [
  [
    "path",
    {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
      key: "1ngwbx"
    }
  ]
];
const Wrench = createLucideIcon("wrench", __iconNode);
const painPoints = [
  {
    icon: Users,
    title: "Turnover is killing you",
    description: "You spend months training a specialist, they leave, and their client knowledge walks out the door with them. You start from scratch. Again."
  },
  {
    icon: Clock,
    title: "You can't scale without hiring",
    description: "Every new client means another hire, another salary, another desk. Your margins shrink as you grow. The math never works."
  },
  {
    icon: ChartColumn,
    title: "Work disappears into a black box",
    description: "You're paying $5K-$15K per month for marketing and you can't see what's being done. Reports show results but never the work behind them."
  },
  {
    icon: MessageSquare,
    title: "Context gets lost between handoffs",
    description: "Your SEO specialist doesn't talk to your social media manager. Your content writer doesn't know what campaigns are running. Silos everywhere."
  }
];
const agents = [
  { name: "Ozzi", role: "Supervisor", description: "Delegates, prioritizes, orchestrates. Your AI chief of staff." },
  { name: "SEO Specialist", role: "Search", description: "Technical audits, keyword research, content optimization." },
  { name: "Content Writer", role: "Content", description: "Blog posts, landing pages, email copy. On-brand, always." },
  { name: "Social Media Manager", role: "Social", description: "Scheduling, engagement, trend analysis across platforms." },
  { name: "Data Analyst", role: "Analytics", description: "Campaign performance, ROI tracking, actionable insights." },
  { name: "Email Specialist", role: "Email", description: "Campaigns, sequences, A/B testing, deliverability." },
  { name: "Ad Manager", role: "Paid Media", description: "Google Ads, Meta Ads, budget optimization, ROAS." },
  { name: "CRM Manager", role: "CRM", description: "Lead scoring, pipeline management, contact enrichment." },
  { name: "Reputation Manager", role: "Reviews", description: "Review monitoring, response drafting, sentiment analysis." },
  { name: "Web Developer", role: "Development", description: "Landing pages, forms, embeds. Code in a sandbox." },
  { name: "Video Producer", role: "Video", description: "Scripting, editing, rendering. AI-powered video creation." },
  { name: "Voice Agent", role: "Voice", description: "Inbound/outbound calls, appointment setting, lead qualification." },
  { name: "Research Analyst", role: "Research", description: "Market research, competitive analysis, trend reports." },
  { name: "Task Manager", role: "Operations", description: "Scheduling, follow-ups, deadline tracking, escalation." }
];
const capabilities = [
  {
    icon: Brain,
    title: "7-layer memory system",
    benefit: "Never lose client knowledge again",
    description: "Every conversation, every preference, every piece of context is stored across 7 memory layers. Your AI team remembers everything, forever."
  },
  {
    icon: Wrench,
    title: "127+ native tools",
    benefit: "One team, every channel",
    description: "From writing blog posts to managing ad campaigns to answering phone calls. 127 built-in tools plus 35+ integrations. No switching between platforms."
  },
  {
    icon: GitBranch,
    title: "Parallel delegation",
    benefit: "Work that happens simultaneously",
    description: "Ozzi breaks complex tasks into sub-tasks and delegates to up to 5 specialists at once. A content audit, keyword analysis, and competitive review all run in parallel."
  },
  {
    icon: Eye,
    title: "Full transparency",
    benefit: "See every action, every decision",
    description: "Every tool call is logged. Every decision is traceable. Real-time streaming shows you exactly what your agents are doing as they do it."
  },
  {
    icon: Shield,
    title: "Human-in-the-loop controls",
    benefit: "You stay in control",
    description: "Configure approval requirements for sensitive actions. Agents ask before publishing, spending budget, or contacting clients."
  },
  {
    icon: Sparkles,
    title: "Multi-model intelligence",
    benefit: "The right brain for every task",
    description: "Claude for reasoning, Gemini for speed, Groq for real-time. Each agent uses the optimal AI model for its specialty."
  }
];
const differentiators = [
  { label: "Traditional Agency", items: ["$5K-15K/month", "9-5 availability", "2-4 week onboarding", "Staff turnover", "Opaque reporting"] },
  { label: "OzziOS AI Team", items: ["Fraction of the cost", "24/7/365 availability", "Instant deployment", "0% turnover", "Full transparency"], highlight: true }
];
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
function HeroSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-pattern opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", animate: "visible", variants: containerVariants, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tag-neo rounded-full bg-signature/10 border-signature mb-6 inline-flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "w-4 h-4 text-signature" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold text-signature uppercase tracking-wider", children: "AI Agent Platform" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-display font-display text-foreground mb-6", children: [
          "Stop hiring.",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-signature", children: "Start deploying." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10", children: "An unlimited AI workforce that works 24/7, remembers everything, and shows you every action they take. Your entire marketing department, for a fraction of the cost." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4 mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://app.ozzios.com/sign-up",
              className: "inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200",
              children: [
                "Deploy your AI team",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "/pricing",
              className: "inline-flex items-center justify-center gap-2 h-14 px-8 bg-card border-2 border-border text-foreground font-medium text-base rounded-lg hover:border-signature/30 transition-colors duration-200",
              children: "See pricing"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto", children: [
        { value: "30+", label: "AI Agents" },
        { value: "127+", label: "Built-in Tools" },
        { value: "24/7", label: "Always Working" },
        { value: "0%", label: "Turnover Rate" }
      ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl md:text-4xl text-foreground mb-1", children: stat.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: stat.label })
      ] }, stat.label)) })
    ] }) })
  ] });
}
function PainPointsSection() {
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag-neo text-signature mb-6 inline-block", children: "The Problem" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4", children: "Marketing teams are broken" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-xl mx-auto", children: "The agency model hasn't changed in 30 years. It's expensive, opaque, and fragile." })
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
function AgentShowcaseSection() {
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag-neo text-signature mb-6 inline-block", children: "Meet Your Team" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4", children: "30+ specialists. Zero drama." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-xl mx-auto", children: "Each agent is purpose-built for a specific marketing function. They collaborate, share context, and never compete for credit." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        variants: containerVariants,
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4",
        children: agents.map((agent, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            variants: itemVariants,
            className: "bg-card border-2 border-border rounded-lg p-4 hover:border-signature/30 transition-colors duration-200 group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-signature/10 flex items-center justify-center mb-3 group-hover:bg-signature/20 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "w-5 h-5 text-signature" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground text-sm mb-0.5", children: agent.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-signature font-medium uppercase tracking-wider mb-2", children: agent.role }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: agent.description })
            ]
          },
          agent.name
        ))
      }
    )
  ] }) });
}
function CapabilitiesSection() {
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag-neo text-signature mb-6 inline-block", children: "Capabilities" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4", children: "Not just chatbots. Real employees." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-xl mx-auto", children: "Built with enterprise-grade infrastructure that makes these agents actually useful, not just impressive demos." })
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-signature text-xs font-semibold uppercase tracking-wider mb-2", children: cap.benefit }),
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
function ComparisonSection() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag-neo text-signature mb-6 inline-block", children: "Why Switch" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4", children: "The old way vs. the OzziOS way" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
        transition: { duration: 0.6, delay: 0.2 },
        className: "grid md:grid-cols-2 gap-6",
        children: differentiators.map((col) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `rounded-xl p-8 border-2 ${col.highlight ? "border-signature bg-signature/5" : "border-border bg-card"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `font-display text-lg mb-6 ${col.highlight ? "text-signature" : "text-muted-foreground"}`, children: col.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: col.items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CircleCheck,
                  {
                    className: `w-4 h-4 shrink-0 ${col.highlight ? "text-mint" : "text-muted-foreground/40"}`
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: col.highlight ? "text-foreground font-medium" : "text-muted-foreground", children: item })
              ] }, i)) })
            ]
          },
          col.label
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
          "Your AI team is ready.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Are you?" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground mb-10 max-w-lg mx-auto", children: "Deploy your AI workforce in minutes. No hiring, no training, no turnover. Just results, 24/7." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://app.ozzios.com/sign-up",
            className: "inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200",
            children: [
              "Start free trial",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
            ]
          }
        ),
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
function AIAgentsView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PainPointsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AgentShowcaseSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CapabilitiesSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ComparisonSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
function AIAgentsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LandingLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AIAgentsView, {}) });
}
export {
  AIAgentsPage as component
};
