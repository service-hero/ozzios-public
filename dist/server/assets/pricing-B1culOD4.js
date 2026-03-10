import { n as jsxRuntimeExports, a as reactExports } from "./worker-entry-CLCwO71W.js";
import { U as Users, C as ChevronDown, A as AnimatePresence, X, L as LandingLayout } from "./LandingLayout-BbzH_Y3t.js";
import { F as FeatureTooltip } from "./feature-tooltip-Cz1-VBs4.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { CTASection } from "./CTASection-SxC1GyYb.js";
import { u as useInView } from "./use-in-view-CVc3ddL5.js";
import { m as motion, A as ArrowRight } from "./proxy-wI6KZf5t.js";
import { Z as Zap } from "./zap-IUG7lK8L.js";
import { c as createLucideIcon } from "./createLucideIcon-U9gqAy8t.js";
import { C as Check } from "./check-kfc8KpZJ.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "./router-CGQQDatO.js";
import "./button-R9GB7f-h.js";
const __iconNode = [
  [
    "path",
    {
      d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
      key: "1xhozi"
    }
  ]
];
const Headphones = createLucideIcon("headphones", __iconNode);
const pricingTiers = [
  {
    name: "Basic",
    price: 49,
    usage: "1,000 AI credits/mo",
    description: "For lean teams getting started",
    features: [
      { label: "1 workspace member", description: "Everything you need to run your business solo — focused and streamlined for one operator." },
      { label: "1 workspace", description: "A dedicated workspace with its own settings, channels, and inbox." },
      { label: "1,000 AI credits", description: "Enough AI capacity to get started with automation, content creation, and daily marketing tasks." },
      { label: "Workspace, channels & inbox", description: "Your central hub for team communication, customer messages, and task management — all in one place." },
      { label: "Tasks", description: "Organize your work with task management built right into your workspace." },
      { label: "Basic CRM", description: "Track your contacts and deals without the complexity of enterprise CRM tools." },
      { label: "Basic integrations", description: "Connect the essential tools you use every day to keep your workflow moving." },
      { label: "Email support", description: "Our team is here when you need help. Reach out anytime and get a real response within one business day." }
    ],
    cta: "Get started",
    href: "https://app.ozzios.com/sign-up?plan=basic",
    recommended: false
  },
  {
    name: "Pro",
    price: 197,
    usage: "5,000 AI credits/mo",
    description: "Workflows, video, and premium AI tools",
    features: [
      { label: "Up to 2 team members", description: "Everything you need to run your business — with room for one extra hand when you need it." },
      { label: "2 workspaces", description: "Separate your projects or service areas into dedicated workspaces, each with its own settings." },
      { label: "5,000 AI credits", description: "Plenty of AI capacity for content creation, workflows, and daily marketing automation." },
      { label: "Social planner & blog tools", description: "Stay consistent on social and keep your blog active and SEO-friendly — without doing it all manually." },
      { label: "Email builder & all integrations", description: "Send professional emails and connect 40+ tools — Google, Meta, Shopify, WordPress, and more." },
      { label: "Forms, documents & e-sign", description: "Capture leads, send proposals, and get contracts signed — all without the back-and-forth." },
      { label: "Workflow builder & advanced CRM", description: "Set up automations that run forever and know exactly where every lead stands." },
      { label: "Chat widget", description: "Capture leads with an AI-powered chat widget on your site that answers questions and qualifies visitors 24/7." },
      { label: "Video kit & coding sandbox", description: "Record professional videos and let Ozzi build custom dashboards and tools — no developer needed." },
      { label: "Local rank & Claude Opus", description: "Track your Google Maps rankings and access the most powerful AI model for complex tasks." }
    ],
    cta: "Get started",
    href: "https://app.ozzios.com/sign-up?plan=solo",
    recommended: true
  },
  {
    name: "Scale",
    price: 490,
    usage: "15,000 AI credits/mo",
    description: "Messaging and voice ops for scaling teams",
    features: [
      { label: "Everything in Pro", description: "Includes every feature from the Pro plan — workflows, video, integrations, and more." },
      { label: "Up to 5 team members", description: "Bring your whole team into one place — no more scattered tools or missed handoffs." },
      { label: "5 workspaces", description: "Run multiple locations or projects from one login — each fully separate with its own team and settings." },
      { label: "15,000 AI credits", description: "High-capacity AI for teams running campaigns, workflows, and automations at scale every day." },
      { label: "Email/SMS campaigns", description: "Send professional email and text campaigns. Track opens, clicks, and conversions so you know what's working." },
      { label: "Call center & voice ops", description: "Handle inbound calls with AI voice agents that answer, qualify, and route — then review recordings and AI-scored call quality." },
      { label: "Outbound call tooling", description: "Let your AI agent make outbound calls on your behalf — for follow-ups, appointment reminders, and lead outreach at scale." }
    ],
    cta: "Get started",
    href: "https://app.ozzios.com/sign-up?plan=starter",
    recommended: false
  }
];
const comparisonFeatures = [
  {
    category: "Limits",
    features: [
      { name: "Team members", basic: "1", pro: "2", scale: "5" },
      { name: "Workspaces", basic: "1", pro: "2", scale: "5" },
      { name: "Monthly AI credits", basic: "1,000", pro: "5,000", scale: "15,000" }
    ]
  },
  {
    category: "Core",
    features: [
      { name: "Workspace, channels & inbox", basic: true, pro: true, scale: true },
      { name: "Tasks", basic: true, pro: true, scale: true },
      { name: "Basic CRM", basic: true, pro: true, scale: true },
      { name: "Basic integrations", basic: true, pro: true, scale: true }
    ]
  },
  {
    category: "Pro",
    features: [
      { name: "Social planner", basic: false, pro: true, scale: true },
      { name: "Blog tools", basic: false, pro: true, scale: true },
      { name: "Email builder", basic: false, pro: true, scale: true },
      { name: "All integrations", basic: false, pro: true, scale: true },
      { name: "Forms builder", basic: false, pro: true, scale: true },
      { name: "Documents & e-sign", basic: false, pro: true, scale: true },
      { name: "Workflow builder", basic: false, pro: true, scale: true },
      { name: "Advanced CRM", basic: false, pro: true, scale: true },
      { name: "Chat widget", basic: false, pro: true, scale: true },
      { name: "Huddles", basic: false, pro: true, scale: true },
      { name: "Video kit", basic: false, pro: true, scale: true },
      { name: "Coding sandbox", basic: false, pro: true, scale: true },
      { name: "Local rank", basic: false, pro: true, scale: true },
      { name: "Claude Opus", basic: false, pro: true, scale: true },
      { name: "Advanced automation nodes", basic: false, pro: true, scale: true }
    ]
  },
  {
    category: "Scale",
    features: [
      { name: "Email/SMS campaigns", basic: false, pro: false, scale: true },
      { name: "Call center & voice ops", basic: false, pro: false, scale: true },
      { name: "Outbound call tooling", basic: false, pro: false, scale: true }
    ]
  },
  {
    category: "Support",
    features: [
      { name: "Email support", basic: true, pro: true, scale: true }
    ]
  }
];
const pricingFaqs = [
  {
    question: "How does usage-based pricing work?",
    answer: "Each plan includes a monthly AI credit allocation that covers all AI operations — writing content, analyzing data, scheduling posts, running workflows, and more. Credits are tracked automatically and reset at the start of each billing cycle. You can monitor your usage in real time from your account dashboard, and purchase additional credit packs anytime."
  },
  {
    question: "Can I change plans at any time?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to the new plan's features and your billing will be prorated. When downgrading, the change takes effect at the start of your next billing cycle."
  },
  {
    question: "What happens if I run out of credits?",
    answer: "If you use all your monthly AI credits before your billing cycle renews, your AI agents will pause until credits reset. You can purchase additional credit packs anytime or upgrade to a higher plan for more monthly credits."
  },
  {
    question: "Do you offer annual billing?",
    answer: "Yes, we offer annual billing with a 17% discount on all plans. You can switch to annual billing during checkout or in your account settings."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely. There are no long-term contracts or cancellation fees. You can cancel your subscription at any time from your account settings. Your access continues until the end of your current billing period."
  },
  {
    question: "What's included in priority support?",
    answer: "Priority support includes faster response times (under 4 hours), dedicated support channels, and access to our team of marketing automation specialists who can help optimize your workflows and agent configurations."
  },
  {
    question: "Do you offer custom enterprise plans?",
    answer: "Yes, for organizations with specific needs, we offer custom enterprise plans with unlimited usage, custom integrations, dedicated infrastructure, and hands-on onboarding. Contact our sales team to discuss your requirements."
  }
];
const valueProps = [
  {
    icon: Zap,
    title: "Save 70%+ vs outsourcing",
    description: "Replace expensive outsourcing and overhead with AI agents that work 24/7."
  },
  {
    icon: Users,
    title: "Scale without hiring",
    description: "Add AI agents instead of employees. No training or onboarding needed."
  },
  {
    icon: Headphones,
    title: "Expert support",
    description: "Our team helps you get the most out of every AI agent and workflow."
  }
];
function PricingView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ValuePropsBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PricingCards, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ComparisonTable, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PricingFAQ, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
function HeroSection() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-4xl px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 20 },
      animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
      transition: { duration: 0.6 },
      className: "text-center",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-signature uppercase tracking-[0.15em] mb-4", children: "Pricing" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-semibold text-black tracking-tight mb-6", children: [
          "Simple, transparent",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400", children: "pricing" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-500 max-w-xl mx-auto", children: "Stop overpaying for outsourced services. Get enterprise-level automation at a fraction of the cost. No hidden fees, no surprises." })
      ]
    }
  ) }) });
}
function ValuePropsBar() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 bg-gray-50 border-y border-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 20 },
      animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
      transition: { duration: 0.5 },
      className: "grid grid-cols-2 lg:grid-cols-3 gap-8",
      children: valueProps.map((prop) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-gray-200 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(prop.icon, { className: "w-5 h-5 text-signature" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-black mb-1", children: prop.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: prop.description })
      ] }, prop.title))
    }
  ) }) });
}
function PricingCards() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 lg:py-32 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", ref, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start", children: pricingTiers.map((tier, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.5, delay: 0.1 + index * 0.08 },
        className: cn(
          "relative rounded-2xl p-6 transition-all duration-300",
          tier.recommended ? "border-2 border-signature bg-white" : "border border-gray-200 bg-white hover:border-gray-300"
        ),
        children: [
          tier.recommended && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-3 left-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-signature text-white", children: "Most Popular" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-black", children: tier.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: tier.description })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl font-bold text-black tracking-tight", children: tier.price === 0 ? "Free" : `$${tier.price.toLocaleString()}` }),
            tier.price > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-400", children: "/mo" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200", children: tier.usage }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5 mb-6", children: tier.features.map((feature, featureIndex) => {
            const isEverything = feature.label.startsWith("Everything in");
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
              isEverything ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-signature shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 shrink-0 flex items-center justify-center text-[11px] font-bold text-gray-400", children: "+" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm ${isEverything ? "text-black font-medium" : "text-gray-600"}`, children: feature.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureTooltip, { description: feature.description })
            ] }, featureIndex);
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: tier.href,
              className: cn(
                "flex items-center justify-center gap-2 w-full h-11 rounded-lg font-medium text-sm transition-all duration-200",
                tier.recommended ? "bg-signature text-white hover:bg-signature/90" : "bg-white text-black border border-gray-300 hover:bg-gray-50"
              ),
              children: [
                tier.cta,
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
              ]
            }
          )
        ]
      },
      tier.name
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: isInView ? { opacity: 1 } : { opacity: 0 },
        transition: { duration: 0.5, delay: 0.5 },
        className: "mt-16 text-center",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-400", children: [
          "Need a custom plan for your enterprise?",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "mailto:sales@ozzios.com",
              className: "text-signature hover:underline",
              children: "Contact sales"
            }
          )
        ] })
      }
    )
  ] }) });
}
function ComparisonTable() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 lg:py-32 bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        ref,
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.6 },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-semibold text-black tracking-tight mb-4", children: "Compare plans" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-gray-500 max-w-lg mx-auto", children: "Find the perfect plan for your business. Every feature, side by side." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.5, delay: 0.1 },
        className: "overflow-x-auto",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full min-w-[500px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-gray-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-4 pr-4 text-sm font-medium text-gray-500 w-[40%]", children: "Features" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-4 px-3 text-sm font-semibold text-black w-[20%]", children: "Basic" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-4 px-3 text-sm font-semibold text-signature w-[20%]", children: "Pro" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-4 px-3 text-sm font-semibold text-black w-[20%]", children: "Scale" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: comparisonFeatures.map((category) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "td",
              {
                colSpan: 4,
                className: "pt-8 pb-3 text-xs font-medium text-gray-400 uppercase tracking-widest",
                children: category.category
              }
            ) }, `cat-${category.category}`),
            category.features.map((feature) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "border-b border-gray-100",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 pr-4 text-sm text-gray-700", children: feature.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureValue, { value: feature.basic }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureValue, { value: feature.pro }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureValue, { value: feature.scale }) })
                ]
              },
              feature.name
            ))
          ] })) })
        ] })
      }
    )
  ] }) });
}
function FeatureValue({ value }) {
  if (typeof value === "string") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-black", children: value });
  }
  if (value) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-5 h-5 text-signature mx-auto" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5 text-gray-300 mx-auto" });
}
function PricingFAQ() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = reactExports.useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 lg:py-32 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        ref,
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.6 },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-signature uppercase tracking-[0.15em] mb-4", children: "FAQ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-semibold text-black leading-tight tracking-tight mb-4", children: [
            "Pricing",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400", children: "questions" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-gray-500 max-w-md mx-auto", children: "Everything you need to know about our plans and billing." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.5, delay: 0.1 },
        className: "space-y-0",
        children: pricingFaqs.map((faq, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: cn(
              "border-b border-gray-100",
              index === 0 && "border-t"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => toggleFAQ(index),
                  className: "w-full flex items-center justify-between gap-4 py-6 text-left group",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: cn(
                          "text-base font-medium transition-colors duration-200",
                          openIndex === index ? "text-black" : "text-gray-700 group-hover:text-black"
                        ),
                        children: faq.question
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: cn(
                          "shrink-0 transition-transform duration-200",
                          openIndex === index && "rotate-180"
                        ),
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          ChevronDown,
                          {
                            className: cn(
                              "h-5 w-5 transition-colors duration-200",
                              openIndex === index ? "text-signature" : "text-gray-400"
                            )
                          }
                        )
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: openIndex === index && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  transition: { duration: 0.25, ease: "easeInOut" },
                  className: "overflow-hidden",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pl-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-8 bg-signature mb-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] leading-relaxed text-gray-500", children: faq.answer })
                  ] }) })
                }
              ) })
            ]
          },
          index
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.5, delay: 0.3 },
        className: "mt-16 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 mb-3", children: "Still have questions?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "mailto:sales@ozzios.com",
              className: "inline-flex items-center gap-2 text-[15px] font-medium text-black hover:text-signature transition-colors duration-200",
              children: [
                "Contact our sales team",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-signature", children: "→" })
              ]
            }
          )
        ]
      }
    )
  ] }) });
}
function PricingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LandingLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(PricingView, {}) });
}
export {
  PricingPage as component
};
