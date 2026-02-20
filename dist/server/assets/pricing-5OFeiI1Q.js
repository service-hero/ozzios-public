import { n as jsxRuntimeExports, a as reactExports } from "./worker-entry-DIC8UpJI.js";
import { U as Users, C as ChevronDown, A as AnimatePresence, X, L as LandingLayout } from "./LandingLayout-_Rk3zA7h.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { C as CTASection } from "./CTASection-l161shkV.js";
import { u as useInView } from "./use-in-view-Cg991X_n.js";
import { m as motion, A as ArrowRight } from "./proxy-CBHrjLyJ.js";
import { Z as Zap } from "./zap-D4CMEOVU.js";
import { S as Shield } from "./shield-CNL1vjWD.js";
import { c as createLucideIcon } from "./createLucideIcon-CxWayAC-.js";
import { C as Check } from "./check-D6Pf0RHH.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "./router-kXCOQ41n.js";
import "./button-Cce7Ah0G.js";
import "./menu-2JpqeIYT.js";
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
    name: "Free",
    price: 0,
    credits: "50 credits/mo",
    description: "Explore core features with no commitment.",
    features: [
      "1 workspace member",
      "Workspace, channels & inbox",
      "Tasks",
      "Basic CRM",
      "Basic integrations"
    ],
    cta: "Get started free",
    href: "https://app.ozzios.com/sign-up?plan=free",
    recommended: false
  },
  {
    name: "Solo",
    price: 197,
    credits: "500 credits/mo",
    description: "For solo operators ready to automate their marketing.",
    features: [
      "Up to 2 team members",
      "500 AI credits/month",
      "Social planner",
      "Blog tools",
      "Email builder",
      "All integrations",
      "Email support"
    ],
    cta: "Start free trial",
    href: "https://app.ozzios.com/sign-up?plan=solo",
    recommended: false
  },
  {
    name: "Starter",
    price: 490,
    credits: "1,000 credits/mo",
    description: "Perfect for small teams ready to automate their marketing basics.",
    features: [
      "Up to 5 team members",
      "1,000 AI credits/month",
      "Email/SMS campaigns",
      "Forms builder",
      "Documents & e-sign",
      "Workflow builder",
      "Advanced CRM"
    ],
    cta: "Get started",
    href: "https://app.ozzios.com/sign-up?plan=starter",
    recommended: false
  },
  {
    name: "Professional",
    price: 990,
    credits: "2,000 credits/mo",
    description: "Everything you need to run marketing like a full-service agency.",
    features: [
      "Up to 15 team members",
      "5 workspaces",
      "Client portal & chat widget",
      "Portal AI agent",
      "Huddles",
      "Video kit",
      "Code sandbox",
      "Local rank",
      "Advanced automation nodes"
    ],
    cta: "Get started",
    href: "https://app.ozzios.com/sign-up?plan=professional",
    recommended: true
  },
  {
    name: "Business",
    price: 1995,
    credits: "10,000 credits/mo",
    description: "For growing businesses that need enterprise-level marketing power.",
    features: [
      "Everything in Professional",
      "Up to 50 team members",
      "15 workspaces",
      "Call center & voice ops",
      "Outbound call tooling",
      "High-volume operations",
      "Dedicated success manager",
      "SLA & phone support"
    ],
    cta: "Get started",
    href: "https://app.ozzios.com/sign-up?plan=business",
    recommended: false
  }
];
const comparisonFeatures = [
  {
    category: "Limits",
    features: [
      { name: "Team members", free: "1", solo: "2", starter: "5", professional: "15", business: "50" },
      { name: "Workspaces", free: "1", solo: "1", starter: "1", professional: "5", business: "15" },
      { name: "AI credits/month", free: "50", solo: "500", starter: "1,000", professional: "2,000", business: "10,000" }
    ]
  },
  {
    category: "Core (Free)",
    features: [
      { name: "Workspace, channels & inbox", free: true, solo: true, starter: true, professional: true, business: true },
      { name: "Tasks", free: true, solo: true, starter: true, professional: true, business: true },
      { name: "Basic CRM", free: true, solo: true, starter: true, professional: true, business: true },
      { name: "Basic integrations", free: true, solo: true, starter: true, professional: true, business: true }
    ]
  },
  {
    category: "Solo",
    features: [
      { name: "Social planner", free: false, solo: true, starter: true, professional: true, business: true },
      { name: "Blog tools", free: false, solo: true, starter: true, professional: true, business: true },
      { name: "Email builder", free: false, solo: true, starter: true, professional: true, business: true },
      { name: "All integrations", free: false, solo: true, starter: true, professional: true, business: true }
    ]
  },
  {
    category: "Starter",
    features: [
      { name: "Email/SMS campaigns", free: false, solo: false, starter: true, professional: true, business: true },
      { name: "Forms builder", free: false, solo: false, starter: true, professional: true, business: true },
      { name: "Documents & e-sign", free: false, solo: false, starter: true, professional: true, business: true },
      { name: "Workflow builder", free: false, solo: false, starter: true, professional: true, business: true },
      { name: "Advanced CRM", free: false, solo: false, starter: true, professional: true, business: true }
    ]
  },
  {
    category: "Professional",
    features: [
      { name: "Client portal & chat widget", free: false, solo: false, starter: false, professional: true, business: true },
      { name: "Portal AI agent", free: false, solo: false, starter: false, professional: true, business: true },
      { name: "Huddles", free: false, solo: false, starter: false, professional: true, business: true },
      { name: "Video kit", free: false, solo: false, starter: false, professional: true, business: true },
      { name: "Code sandbox", free: false, solo: false, starter: false, professional: true, business: true },
      { name: "Local rank", free: false, solo: false, starter: false, professional: true, business: true },
      { name: "Advanced automation nodes", free: false, solo: false, starter: false, professional: true, business: true }
    ]
  },
  {
    category: "Business",
    features: [
      { name: "Call center & voice ops", free: false, solo: false, starter: false, professional: false, business: true },
      { name: "Outbound call tooling", free: false, solo: false, starter: false, professional: false, business: true },
      { name: "High-volume operations", free: false, solo: false, starter: false, professional: false, business: true }
    ]
  },
  {
    category: "Support",
    features: [
      { name: "Email support", free: false, solo: true, starter: true, professional: true, business: true },
      { name: "Dedicated success manager", free: false, solo: false, starter: false, professional: false, business: true },
      { name: "SLA & phone support", free: false, solo: false, starter: false, professional: false, business: true }
    ]
  }
];
const pricingFaqs = [
  {
    question: "What are AI credits?",
    answer: "AI credits are used every time an AI agent performs a task -- writing content, analyzing data, scheduling posts, or running workflows. Different tasks use different amounts of credits based on complexity. Most simple tasks use 1-5 credits, while more complex operations like full content creation may use 10-25 credits."
  },
  {
    question: "Can I change plans at any time?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to the new plan's features and your billing will be prorated. When downgrading, the change takes effect at the start of your next billing cycle."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! All plans include a 7-day free trial with full access to all features. A credit card is required to start your trial, but you won't be charged until the trial ends. Cancel anytime before the trial is over."
  },
  {
    question: "What happens if I run out of AI credits?",
    answer: "If you run out of credits before your monthly renewal, your agents will pause until your credits refresh. You can also purchase additional credit packs at any time, or upgrade to a higher plan for more credits."
  },
  {
    question: "Do you offer annual billing?",
    answer: "Yes, we offer annual billing with a 20% discount on all plans. Contact our sales team or switch to annual billing in your account settings."
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
    answer: "Yes, for organizations with specific needs, we offer custom enterprise plans with tailored AI credit allocations, custom integrations, dedicated infrastructure, and hands-on onboarding. Contact our sales team to discuss your requirements."
  }
];
const valueProps = [
  {
    icon: Zap,
    title: "Save 70%+ vs agencies",
    description: "Replace expensive agency retainers with AI agents that work 24/7."
  },
  {
    icon: Shield,
    title: "7-day free trial",
    description: "Try any plan risk-free. Cancel anytime before your trial ends."
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-500 max-w-xl mx-auto", children: "Stop overpaying for agencies. Get enterprise-level marketing automation at a fraction of the cost. No hidden fees, no surprises." })
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
      className: "grid grid-cols-2 lg:grid-cols-5 gap-8",
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-black", children: tier.name }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl font-bold text-black tracking-tight", children: tier.price === 0 ? "Free" : `$${tier.price.toLocaleString()}` }),
              tier.price > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-400", children: "/mo" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 mt-1", children: tier.credits })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5 mb-6", children: tier.features.map((feature, featureIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-gray-400 shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-600", children: feature })
          ] }, featureIndex)) }),
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: isInView ? { opacity: 1 } : { opacity: 0 },
        transition: { duration: 0.5, delay: 0.5 },
        className: "mt-16 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: "All plans include a 7-day free trial. Cancel anytime." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-400 mt-2", children: [
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
        ]
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
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full min-w-[600px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-gray-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-4 pr-4 text-sm font-medium text-gray-500 w-[20%]", children: "Features" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-4 px-3 text-sm font-semibold text-black w-[16%]", children: "Free" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-4 px-3 text-sm font-semibold text-black w-[16%]", children: "Solo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-4 px-3 text-sm font-semibold text-black w-[16%]", children: "Starter" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-4 px-3 text-sm font-semibold text-signature w-[16%]", children: "Professional" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-4 px-3 text-sm font-semibold text-black w-[16%]", children: "Business" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: comparisonFeatures.map((category) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "td",
              {
                colSpan: 6,
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureValue, { value: feature.free }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureValue, { value: feature.solo }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureValue, { value: feature.starter }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureValue, { value: feature.professional }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureValue, { value: feature.business }) })
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
