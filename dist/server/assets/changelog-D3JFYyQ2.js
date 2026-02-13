import { n as jsxRuntimeExports, a as reactExports } from "./worker-entry-DUbV-qEz.js";
import { L as LandingLayout } from "./LandingLayout-BFxFbzxM.js";
import { m as motion, A as ArrowRight } from "./proxy-BEnWwJWi.js";
import { R as Rocket } from "./rocket-OA2Q-QTm.js";
import { u as useInView } from "./use-in-view-DoLVnWF9.js";
import { c as createLucideIcon } from "./createLucideIcon-OQXTLfCE.js";
import { Z as Zap } from "./zap-1MGNmvOI.js";
import { S as Sparkles } from "./sparkles-DZv4tgq8.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "./router-BLJT3Mxm.js";
import "./utils-QXBWQHlM.js";
import "./button-CtEClRbA.js";
import "./menu-Bt53Wknu.js";
const __iconNode = [
  ["path", { d: "M12 20v-9", key: "1qisl0" }],
  ["path", { d: "M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z", key: "uouzyp" }],
  ["path", { d: "M14.12 3.88 16 2", key: "qol33r" }],
  ["path", { d: "M21 21a4 4 0 0 0-3.81-4", key: "1b0z45" }],
  ["path", { d: "M21 5a4 4 0 0 1-3.55 3.97", key: "5cxbf6" }],
  ["path", { d: "M22 13h-4", key: "1jl80f" }],
  ["path", { d: "M3 21a4 4 0 0 1 3.81-4", key: "1fjd4g" }],
  ["path", { d: "M3 5a4 4 0 0 0 3.55 3.97", key: "1d7oge" }],
  ["path", { d: "M6 13H2", key: "82j7cp" }],
  ["path", { d: "m8 2 1.88 1.88", key: "fmnt4t" }],
  ["path", { d: "M9 7.13V6a3 3 0 1 1 6 0v1.13", key: "1vgav8" }]
];
const Bug = createLucideIcon("bug", __iconNode);
const tagConfig = {
  new: {
    label: "New",
    className: "bg-signature/10 text-signature border-signature/20",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3" })
  },
  improvement: {
    label: "Improvement",
    className: "bg-electric/10 text-electric border-electric/20",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3 h-3" })
  },
  fix: {
    label: "Fix",
    className: "bg-mint/10 text-mint border-mint/20",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bug, { className: "w-3 h-3" })
  }
};
const entries = [
  {
    id: "jan-2025",
    date: "January 2025",
    title: "Platform Launch",
    tag: "new",
    description: "OzziOS is officially live. The full platform is now available to agencies of all sizes with AI-powered agents ready to handle marketing operations end-to-end.",
    items: [
      "Full agent workforce with Ozzi supervisor delegation",
      "Multi-workspace support with role-based access",
      "Real-time streaming agent responses with tool call visualization",
      "Stripe-powered billing with credit-based usage",
      "SOC 2 compliant infrastructure from day one"
    ]
  },
  {
    id: "dec-2024",
    date: "December 2024",
    title: "Integration Expansion",
    tag: "improvement",
    description: "Major expansion of the integration ecosystem. Agents can now connect to 30+ tools and services your agency already uses.",
    items: [
      "Google Workspace suite: Calendar, Gmail, Drive, Business Profile",
      "Meta Ads and Facebook Lead Forms integrations",
      "WordPress, Wix, and Shopify content publishing",
      "HouseCall Pro and ServiceTitan for field service agencies",
      "GoHighLevel CRM sync for seamless migration"
    ]
  },
  {
    id: "nov-2024",
    date: "November 2024",
    title: "AI Model Flexibility",
    tag: "new",
    description: "Bring your own API keys for leading AI models. Choose the right model for each agent based on your quality and cost requirements.",
    items: [
      "Support for Anthropic Claude, Google Gemini, and Groq models",
      "Per-agent model configuration in workflow builder",
      "AI-powered image generation with GPT-Image and Nano Banana",
      "ElevenLabs text-to-speech for voice content",
      "Veo 3 video generation for social media content"
    ]
  },
  {
    id: "oct-2024",
    date: "October 2024",
    title: "Workflow Engine Overhaul",
    tag: "improvement",
    description: "Complete rebuild of the workflow engine powering agent behavior. Faster execution, better error handling, and a visual builder for custom workflows.",
    items: [
      "Visual workflow builder with drag-and-drop nodes",
      "Conditional branching and parallel execution paths",
      "Webhook triggers for external event-driven automation",
      "Improved error recovery with automatic retry logic"
    ]
  },
  {
    id: "sep-2024",
    date: "September 2024",
    title: "Beta Release",
    tag: "new",
    description: "First beta release to select agency partners. Core agent system, conversation interface, and foundational integrations available for early testing.",
    items: [
      "Core agent harness with streaming responses",
      "Conversation-based interface for agent interaction",
      "Basic Google Calendar and Gmail integrations",
      "Clerk-based authentication and team management",
      "Bug fixes and performance improvements from alpha feedback"
    ]
  }
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
function TagBadge({ tag }) {
  const config = tagConfig[tag];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border-2 text-[11px] font-semibold uppercase tracking-wider ${config.className}`,
      children: [
        config.icon,
        config.label
      ]
    }
  );
}
function TimelineEntry({ entry, index }) {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 30 },
      animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
      transition: { duration: 0.5, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] },
      className: "relative pl-8 md:pl-12 pb-16 last:pb-0 group",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-[7px] md:left-[11px] top-3 bottom-0 w-px bg-border group-last:hidden" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 md:left-1 top-2 w-[15px] h-[15px] md:w-[23px] md:h-[23px] rounded-full border-[3px] border-signature bg-background z-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border-2 border-border rounded-lg p-6 md:p-8 hover:border-signature/30 transition-colors duration-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-muted-foreground font-display tracking-wide", children: entry.date }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TagBadge, { tag: entry.tag })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl md:text-2xl font-display text-foreground mb-3", children: entry.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-[15px] leading-relaxed mb-5", children: entry.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: entry.items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm text-foreground/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 w-1.5 h-1.5 rounded-full bg-signature shrink-0" }),
            item
          ] }, i)) })
        ] })
      ]
    }
  );
}
function ChangelogView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-[900px] px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: "hidden",
        animate: "visible",
        variants: containerVariants,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tag-neo rounded-full bg-signature/10 border-signature mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "w-4 h-4 text-signature" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold text-signature uppercase tracking-wider", children: "What's New" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-display font-display text-foreground mb-6", children: "Changelog" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-xl mx-auto", children: "See what we've been building. Every update, improvement, and fix shipped to make OzziOS better for your agency." })
        ] })
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative pb-24 lg:pb-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[800px] px-6 lg:px-8", children: entries.map((entry, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineEntry, { entry, index }, entry.id)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 lg:py-32 bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-4xl px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, {}) }) })
  ] });
}
function CTA() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 20 },
      animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
      transition: { duration: 0.6 },
      className: "text-center",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl lg:text-6xl font-semibold text-black tracking-tight mb-6", children: "Ready to get started?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-500 mb-10 max-w-lg mx-auto", children: "Join agencies already using OzziOS to automate their marketing operations." }),
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "/integrations",
            className: "text-sm text-gray-500 hover:text-gray-700 transition-colors",
            children: "View all integrations"
          }
        ) })
      ]
    }
  );
}
function ChangelogPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LandingLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChangelogView, {}) });
}
export {
  ChangelogPage as component
};
