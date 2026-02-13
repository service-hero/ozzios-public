import { a as reactExports, n as jsxRuntimeExports } from "./worker-entry-DUbV-qEz.js";
import { L as LandingLayout } from "./LandingLayout-BFxFbzxM.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { m as motion, A as ArrowRight } from "./proxy-BEnWwJWi.js";
import { c as createLucideIcon } from "./createLucideIcon-OQXTLfCE.js";
import { S as Search } from "./search-DUL7xjOG.js";
import { S as Sparkles } from "./sparkles-DZv4tgq8.js";
import { C as Clock } from "./clock-oQ2YqCyM.js";
import { C as Check } from "./check-DYvJBUaI.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "./router-BLJT3Mxm.js";
import "./button-CtEClRbA.js";
import "./menu-Bt53Wknu.js";
const __iconNode = [
  ["path", { d: "M9 2v6", key: "17ngun" }],
  ["path", { d: "M15 2v6", key: "s7yy2p" }],
  ["path", { d: "M12 17v5", key: "bb1du9" }],
  ["path", { d: "M5 8h14", key: "pcz4l3" }],
  ["path", { d: "M6 11V8h12v3a6 6 0 1 1-12 0Z", key: "wtfw2c" }]
];
const Plug2 = createLucideIcon("plug-2", __iconNode);
const categories = [
  {
    id: "google",
    title: "Google Workspace",
    integrations: [
      { id: "google-calendar", name: "Google Calendar", description: "Calendar events and scheduling", icon: "/images/google-calendar-logo.webp", status: "available" },
      { id: "gmail", name: "Gmail", description: "Email access and sync", icon: "/images/gmail-logo.webp", status: "available" },
      { id: "google-drive", name: "Google Drive", description: "Drive files and Google Docs", icon: "/images/google-drive-logo.webp", status: "available" },
      { id: "google-ads", name: "Google Ads", description: "Ad campaigns and performance", icon: "/images/google-ads-logo.webp", status: "coming-soon" },
      { id: "google-business", name: "Google Business Profile", description: "Business listings and reviews", icon: "/images/gbp-logo.svg", status: "available" }
    ]
  },
  {
    id: "advertising",
    title: "Advertising",
    integrations: [
      { id: "meta-ads", name: "Meta Ads", description: "Facebook & Instagram advertising", icon: "/images/meta-ads-icon.webp", status: "available" }
    ]
  },
  {
    id: "social-media",
    title: "Social Media",
    integrations: [
      { id: "facebook", name: "Facebook Pages", description: "Page management and posts", icon: "/images/facebook-icon.svg", status: "available" },
      { id: "facebook-leads", name: "Facebook Lead Forms", description: "Capture leads from Facebook ads", icon: "/images/facebook-icon.svg", status: "available" },
      { id: "linkedin", name: "LinkedIn", description: "Professional network and posts", icon: "💼", status: "coming-soon" },
      { id: "twitter", name: "X / Twitter", description: "Social posts and engagement", icon: "/images/x-logo.jpg", status: "coming-soon" },
      { id: "tiktok", name: "TikTok", description: "Short-form video content", icon: "/images/tiktok-logo.svg", status: "coming-soon" },
      { id: "youtube", name: "YouTube", description: "Video content and analytics", icon: "/images/youtube-logo.webp", status: "available" }
    ]
  },
  {
    id: "content",
    title: "Content Publishing",
    integrations: [
      { id: "wordpress", name: "WordPress", description: "Blog and website publishing", icon: "/images/wordpress.webp", status: "available" },
      { id: "wix", name: "Wix", description: "Publish content to Wix sites", icon: "/images/wix-logo.webp", status: "available" },
      { id: "shopify", name: "Shopify", description: "E-commerce store management", icon: "/images/shopify-logo.webp", status: "available" }
    ]
  },
  {
    id: "communication",
    title: "Communication",
    integrations: [
      { id: "resend", name: "Resend", description: "Transactional email delivery", icon: "/images/resend-logo.svg", status: "available" },
      { id: "twilio", name: "Twilio", description: "SMS and WhatsApp messaging", icon: "/images/twilio-logo.webp", status: "available" }
    ]
  },
  {
    id: "payments",
    title: "Payments & Billing",
    integrations: [
      { id: "stripe", name: "Stripe", description: "Payment processing", icon: "/images/stripe-logo.webp", status: "available" }
    ]
  },
  {
    id: "crm",
    title: "CRM & Field Service",
    integrations: [
      { id: "housecall-pro", name: "HouseCall Pro", description: "Field service management", icon: "/images/housecall-pro-logo.webp", status: "available" },
      { id: "servicetitan", name: "ServiceTitan", description: "Enterprise field service management", icon: "/images/servicetitan-logo.webp", status: "available" },
      { id: "gohighlevel", name: "GoHighLevel", description: "All-in-one CRM & marketing automation", icon: "/images/gohighlevel-logo.png", status: "available" }
    ]
  },
  {
    id: "ai-creative",
    title: "AI & Creative",
    integrations: [
      { id: "firecrawl", name: "Firecrawl", description: "Web scraping and crawling", icon: "/images/firecrawl-logo.webp", status: "included" },
      { id: "tavily", name: "Tavily", description: "AI-powered web search", icon: "/images/tavily-logo.webp", status: "included" },
      { id: "exa", name: "Exa Search", description: "Neural semantic search", icon: "/images/exa-logo.webp", status: "included" },
      { id: "nanobanana", name: "Nano Banana", description: "Gemini image generation", icon: "/images/nano-banana-logo.jpeg", status: "included" },
      { id: "veo", name: "Veo 3", description: "AI video generation", icon: "/images/remotion-logo.webp", status: "included" },
      { id: "elevenlabs", name: "ElevenLabs", description: "AI text-to-speech", icon: "/images/elevenlabs-logo.webp", status: "included" },
      { id: "openai-image", name: "GPT-Image-1.5", description: "OpenAI image generation", icon: "/images/openai-logo.webp", status: "included" }
    ]
  },
  {
    id: "ai-models",
    title: "AI Models (Bring Your Own Key)",
    integrations: [
      { id: "ollama", name: "Ollama", description: "Local or cloud LLM inference (Kimi K2.5)", icon: "/images/kimi-ai-logo.webp", status: "available" },
      { id: "groq", name: "Groq", description: "Ultra-fast LPU inference (Kimi K2)", icon: "/images/kimi-ai-logo.webp", status: "available" },
      { id: "gemini", name: "Google Gemini", description: "Gemini 3 Flash & Pro models", icon: "/images/google-logo.svg", status: "available" },
      { id: "minimax", name: "MiniMax", description: "Multi-language coding (M2.1)", icon: "/images/minimax-ai-logo.png", status: "available" }
    ]
  },
  {
    id: "data-research",
    title: "Data & Research",
    integrations: [
      { id: "zillow", name: "Zillow", description: "Real estate data and listings", icon: "/images/zillow-logo.webp", status: "coming-soon" },
      { id: "semrush", name: "SEMrush", description: "PPC keyword research and forecasting", icon: "📈", status: "coming-soon" }
    ]
  }
];
const filterOptions = [
  { id: "all", label: "All Integrations" },
  { id: "available", label: "Available" },
  { id: "included", label: "Included" },
  { id: "coming-soon", label: "Coming Soon" }
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
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
function StatusBadge({ status }) {
  switch (status) {
    case "available":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-mint/10 border-2 border-mint/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3 text-mint" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium text-mint", children: "Available" })
      ] });
    case "coming-soon":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-muted border-2 border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium text-muted-foreground", children: "Coming Soon" })
      ] });
    case "included":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-electric/10 border-2 border-electric/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3 text-electric" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium text-electric", children: "Included Free" })
      ] });
    default:
      return null;
  }
}
function IntegrationsView() {
  const [activeFilter, setActiveFilter] = reactExports.useState("all");
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const filteredCategories = categories.map((category) => ({
    ...category,
    integrations: category.integrations.filter((integration) => {
      const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) || integration.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = activeFilter === "all" || integration.status === activeFilter;
      return matchesSearch && matchesFilter;
    })
  })).filter((category) => category.integrations.length > 0);
  const totalIntegrations = categories.reduce((acc, cat) => acc + cat.integrations.length, 0);
  const availableCount = categories.reduce(
    (acc, cat) => acc + cat.integrations.filter((i) => i.status === "available" || i.status === "included").length,
    0
  );
  const includedCount = categories.reduce(
    (acc, cat) => acc + cat.integrations.filter((i) => i.status === "included").length,
    0
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: "hidden",
        animate: "visible",
        variants: containerVariants,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tag-neo rounded-full bg-signature/10 border-signature mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plug2, { className: "w-4 h-4 text-signature" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-semibold text-signature uppercase tracking-wider", children: [
                totalIntegrations,
                "+ Integrations"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-display font-display text-foreground mb-6", children: [
              "Connect your",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-signature", children: "entire stack" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-xl mx-auto", children: "OzziOS connects with the tools you already use. From CRMs to social media, advertising to AI—everything works together seamlessly." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "flex items-center justify-center gap-8 mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-display text-foreground", children: availableCount }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-muted-foreground", children: "Available Now" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-10 bg-border" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-display text-foreground", children: includedCount }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-muted-foreground", children: "Included Free" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-10 bg-border" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-display text-foreground", children: "10" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-muted-foreground", children: "Categories" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "flex flex-col sm:flex-row items-center justify-between gap-6 mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full sm:w-80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Search integrations...",
                  value: searchQuery,
                  onChange: (e) => setSearchQuery(e.target.value),
                  className: "w-full h-12 pl-11 pr-4 rounded-xl bg-muted border-2 border-border text-[14px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-signature transition-all"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto", children: filterOptions.map((filter) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setActiveFilter(filter.id),
                className: cn(
                  "px-4 py-2 rounded-full text-[13px] font-medium whitespace-nowrap transition-all duration-150",
                  activeFilter === filter.id ? "bg-signature/15 text-signature border-2 border-signature" : "text-muted-foreground hover:text-foreground hover:bg-muted border-2 border-transparent"
                ),
                children: filter.label
              },
              filter.id
            )) })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1200px] px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: "hidden",
        animate: "visible",
        variants: containerVariants,
        className: "space-y-12",
        children: [
          filteredCategories.map((category) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-semibold text-foreground mb-6 flex items-center gap-3", children: [
              category.title,
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12px] font-normal text-muted-foreground", children: [
                category.integrations.length,
                " integration",
                category.integrations.length !== 1 ? "s" : ""
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: category.integrations.map((integration) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: cn(
                  "group relative p-5 rounded-xl border-2 transition-all duration-150",
                  integration.status === "coming-soon" ? "bg-muted/50 border-border opacity-60" : "bg-card border-border hover:border-foreground/20 hover:shadow-[4px_4px_0_0_hsl(var(--border))]"
                ),
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-muted border-2 border-border flex items-center justify-center shrink-0 overflow-hidden", children: integration.icon.startsWith("/") ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: integration.icon, alt: integration.name, className: "w-8 h-8 object-contain" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: integration.icon }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[15px] font-medium text-foreground mb-1", children: integration.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-muted-foreground leading-relaxed mb-3", children: integration.description }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: integration.status })
                  ] })
                ] })
              },
              integration.id
            )) })
          ] }, category.id)),
          filteredCategories.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              className: "text-center py-20",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg mb-2", children: "No integrations found" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground/70 text-[14px]", children: "Try adjusting your search or filter" })
              ]
            }
          )
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t-2 border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[600px] px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.4 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-display text-foreground mb-4", children: "Need a custom integration?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] text-muted-foreground mb-8", children: "Our team can build custom integrations for your specific workflow. Let us know what you need." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://app.ozzios.com/sign-up",
                className: "btn-neo inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-[15px] transition-colors",
                children: [
                  "Get started free",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#contact",
                className: "btn-neo inline-flex items-center gap-2 px-6 py-4 rounded-full border-2 border-border text-[14px] font-medium text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all",
                children: "Request integration"
              }
            )
          ] })
        ]
      }
    ) }) })
  ] });
}
function IntegrationsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LandingLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(IntegrationsView, {}) });
}
export {
  IntegrationsPage as component
};
