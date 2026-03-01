import { a as reactExports, n as jsxRuntimeExports } from "./worker-entry-CPswMrD3.js";
import { L as Link } from "./router-Dw5fNepD.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { A as AnimatedBackground } from "./index-DdQTzZbT.js";
import { S as Send } from "./send-Cs-dQo0L.js";
import { a as MessageSquare, S as Share2, M as Mail, F as FileText, l as Monitor, j as Code, h as BookOpen, m as SquareCheckBig, U as Users, i as LayoutDashboard, d as Bot, P as Phone, W as Workflow, k as MessageSquareText, A as AnimatePresence } from "./LandingLayout-CWo80zJB.js";
import { c as createLucideIcon } from "./createLucideIcon-BniYXFn4.js";
import { F as FileCheck } from "./file-check-BHEpvYa-.js";
import { M as MessageCircle } from "./message-circle-DH5Em-cb.js";
import { m as motion, A as ArrowRight } from "./proxy-D0v6-HR_.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "./button-DJgtCYEi.js";
import "./play-CU2mLaSq.js";
import "./star-DPW1tum4.js";
import "./hash-D6SM1fZh.js";
import "./search-DnlqYBmu.js";
import "./circle-check-BYvvgtvH.js";
import "./sparkles-CvFzHYl9.js";
const __iconNode = [
  [
    "path",
    {
      d: "M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1",
      key: "1q9hii"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M2 15h10", key: "jfw4w8" }],
  ["path", { d: "m9 18 3-3-3-3", key: "112psh" }]
];
const FileInput = createLucideIcon("file-input", __iconNode);
const categories = [
  { id: "marketing", label: "Marketing & Campaigns" },
  { id: "content", label: "Content & Creative" },
  { id: "productivity", label: "Productivity & Ops" },
  { id: "ai", label: "AI & Communication" }
];
const features = [
  // Marketing & Campaigns
  {
    id: "email-campaigns",
    name: "Email Campaigns",
    description: "Send targeted campaigns with AI-optimized subject lines and send times.",
    icon: Send,
    href: "/features/email-campaigns",
    category: "marketing"
  },
  {
    id: "sms-campaigns",
    name: "SMS Campaigns",
    description: "Reach customers directly with personalized text message campaigns.",
    icon: MessageSquare,
    href: "/features/sms-campaigns",
    category: "marketing"
  },
  {
    id: "social-media",
    name: "Social Media",
    description: "Schedule and publish across all platforms from one dashboard.",
    icon: Share2,
    href: "/features/social-media",
    category: "marketing"
  },
  {
    id: "email-builder",
    name: "Email Builder",
    description: "Drag-and-drop email editor with AI content generation.",
    icon: Mail,
    href: "/features/email-builder",
    category: "marketing"
  },
  {
    id: "forms",
    name: "Forms",
    description: "Build smart forms that capture leads and trigger automations.",
    icon: FileInput,
    href: "/features/forms",
    category: "marketing"
  },
  // Content & Creative
  {
    id: "blog-seo",
    name: "Blog & SEO",
    description: "AI-written articles optimized for search with built-in SEO scoring.",
    icon: FileText,
    href: "/features/blog-seo",
    category: "content"
  },
  {
    id: "presentations",
    name: "Presentations",
    description: "Generate professional slide decks from a single prompt.",
    icon: Monitor,
    href: "/features/presentations",
    category: "content"
  },
  {
    id: "coding",
    name: "Reports & Code",
    description: "AI generates custom dashboards, reports, and applications.",
    icon: Code,
    href: "/features/coding",
    category: "content"
  },
  {
    id: "knowledge-base",
    name: "Knowledge Base",
    description: "Build searchable help centers and internal documentation wikis.",
    icon: BookOpen,
    href: "/features/knowledge-base",
    category: "content"
  },
  // Productivity & Ops
  {
    id: "tasks",
    name: "Task Management",
    description: "Kanban boards, assignments, and project tracking for your team.",
    icon: SquareCheckBig,
    href: "/features/tasks",
    category: "productivity"
  },
  {
    id: "crm",
    name: "CRM & Deals",
    description: "Manage contacts, pipeline stages, and deal flow in one place.",
    icon: Users,
    href: "/features/crm",
    category: "productivity"
  },
  {
    id: "dashboard",
    name: "Dashboard",
    description: "18 widget types for real-time business analytics and reporting.",
    icon: LayoutDashboard,
    href: "/features/dashboard",
    category: "productivity"
  },
  {
    id: "documents",
    name: "Documents & E-Sign",
    description: "Create, share, and collect digital signatures on documents.",
    icon: FileCheck,
    href: "/features/documents",
    category: "productivity"
  },
  // AI & Communication
  {
    id: "ai-agents",
    name: "AI Agents",
    description: "30+ specialized agents that learn your brand and work 24/7.",
    icon: Bot,
    href: "/features/ai-agents",
    category: "ai"
  },
  {
    id: "voice-agents",
    name: "Voice Agents",
    description: "AI phone agents that handle calls and book appointments.",
    icon: Phone,
    href: "/features/voice-agents",
    category: "ai"
  },
  {
    id: "workflows",
    name: "Workflows",
    description: "Visual automation builder with 22 triggers and 8 node types.",
    icon: Workflow,
    href: "/features/workflows",
    category: "ai"
  },
  {
    id: "channels",
    name: "Channels",
    description: "Real-time community spaces for team and client collaboration.",
    icon: MessageCircle,
    href: "/features/channels",
    category: "ai"
  },
  {
    id: "chat-widget",
    name: "Chat Widget",
    description: "AI-powered website chat with lead capture and human handoff.",
    icon: MessageSquareText,
    href: "/features/chat-widget",
    category: "ai"
  }
];
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
function FeaturesShowcaseSection() {
  const [activeCategory, setActiveCategory] = reactExports.useState("marketing");
  const [activeFeatureId, setActiveFeatureId] = reactExports.useState("email-campaigns");
  const [isPaused, setIsPaused] = reactExports.useState(false);
  const categoryFeatures = features.filter((f) => f.category === activeCategory);
  const activeFeature = features.find((f) => f.id === activeFeatureId) ?? categoryFeatures[0];
  const advanceFeature = reactExports.useCallback(() => {
    if (isPaused) return;
    const currentIndex = categoryFeatures.findIndex((f) => f.id === activeFeatureId);
    const nextIndex = (currentIndex + 1) % categoryFeatures.length;
    setActiveFeatureId(categoryFeatures[nextIndex].id);
  }, [activeFeatureId, categoryFeatures, isPaused]);
  reactExports.useEffect(() => {
    const timer = setInterval(advanceFeature, 4e3);
    return () => clearInterval(timer);
  }, [advanceFeature]);
  reactExports.useEffect(() => {
    const firstFeature = features.find((f) => f.category === activeCategory);
    if (firstFeature) setActiveFeatureId(firstFeature.id);
  }, [activeCategory]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "showcase", className: "relative py-24 lg:py-32 bg-muted/30 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedBackground, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
        variants: containerVariants,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "mb-16 lg:mb-20 max-w-3xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-px bg-signature" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold text-signature uppercase tracking-[0.2em]", children: "Platform Capabilities" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-[1.1] tracking-tight text-foreground mb-6", children: [
              "Everything your team needs.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/80", children: "One unified system." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed font-light", children: "17 enterprise-grade features that replace your entire marketing stack." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide", children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setActiveCategory(cat.id),
              className: cn(
                "px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200",
                activeCategory === cat.id ? "bg-foreground text-background" : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20"
              ),
              children: cat.label
            },
            cat.id
          )) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "grid lg:grid-cols-5 gap-6",
              onMouseEnter: () => setIsPaused(true),
              onMouseLeave: () => setIsPaused(false),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-2", children: [
                  categoryFeatures.map((feature) => {
                    const Icon = feature.icon;
                    const isActive = feature.id === activeFeature.id;
                    return /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => setActiveFeatureId(feature.id),
                        className: cn(
                          "w-full text-left p-4 rounded-xl transition-all duration-200 group",
                          isActive ? "bg-card border-2 border-signature/30 shadow-sm" : "bg-transparent border-2 border-transparent hover:bg-card hover:border-border"
                        ),
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: cn(
                                "shrink-0 h-10 w-10 rounded-lg flex items-center justify-center transition-colors",
                                isActive ? "bg-signature/10" : "bg-muted group-hover:bg-muted"
                              ),
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Icon,
                                {
                                  className: cn(
                                    "h-5 w-5 transition-colors",
                                    isActive ? "text-signature" : "text-muted-foreground"
                                  )
                                }
                              )
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "h3",
                                {
                                  className: cn(
                                    "text-sm font-semibold transition-colors",
                                    isActive ? "text-foreground" : "text-foreground/80"
                                  ),
                                  children: feature.name
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                ArrowRight,
                                {
                                  className: cn(
                                    "h-4 w-4 shrink-0 transition-all",
                                    isActive ? "text-signature opacity-100 translate-x-0" : "text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
                                  )
                                }
                              )
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed mt-0.5", children: feature.description })
                          ] })
                        ] })
                      },
                      feature.id
                    );
                  }),
                  activeFeature && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2 pl-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: activeFeature.href,
                      className: "inline-flex items-center gap-1.5 text-sm font-medium text-signature hover:text-signature/80 transition-colors",
                      children: [
                        "Learn more about ",
                        activeFeature.name,
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
                      ]
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserChrome, { url: `app.ozzios.com/${activeFeature.id}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-[440px] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    transition: { duration: 0.25 },
                    className: "absolute inset-0 p-5 overflow-y-auto",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturePreview, { featureId: activeFeature.id })
                  },
                  activeFeature.id
                ) }) }) }) }) })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "mt-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "17 features" }),
            " across 4 categories.",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "All included in every plan." })
          ] }) })
        ]
      }
    ) })
  ] });
}
function BrowserChrome({ children, url }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/80 bg-background overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-black/5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-4 py-2.5 border-b border-border/50 bg-muted/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-border" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-border" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-border" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 mx-3 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-background/50 border border-border/50 rounded flex items-center px-3 py-1 text-[10px] text-muted-foreground font-mono w-48 justify-center", children: url }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10" })
    ] }),
    children
  ] });
}
function FeaturePreview({ featureId }) {
  switch (featureId) {
    case "email-campaigns":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(EmailCampaignsPreview, {});
    case "sms-campaigns":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SmsCampaignsPreview, {});
    case "social-media":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SocialMediaPreview, {});
    case "email-builder":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(EmailBuilderPreview, {});
    case "forms":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(FormsPreview, {});
    case "blog-seo":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(BlogSeoPreview, {});
    case "presentations":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(PresentationsPreview, {});
    case "coding":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(CodingPreview, {});
    case "knowledge-base":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(KnowledgeBasePreview, {});
    case "tasks":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(TasksPreview, {});
    case "crm":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(CrmPreview, {});
    case "dashboard":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardPreview, {});
    case "documents":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(DocumentsPreview, {});
    case "ai-agents":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(AIAgentsPreview, {});
    case "voice-agents":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(VoiceAgentsPreview, {});
    case "workflows":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(WorkflowsPreview, {});
    case "channels":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ChannelsPreview, {});
    default:
      return null;
  }
}
function EmailCampaignsPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "Campaign Dashboard" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 text-[10px] font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full", children: "Live" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: [
      { label: "Sent", value: "12,847", color: "text-foreground" },
      { label: "Opened", value: "68.2%", color: "text-signature" },
      { label: "Clicked", value: "24.1%", color: "text-foreground" }
    ].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/50 rounded-lg p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground uppercase tracking-wider", children: m.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("text-lg font-semibold", m.color), children: m.value })
    ] }, m.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Performance by Campaign" }),
      [
        { name: "Welcome Series", pct: 85 },
        { name: "Product Launch", pct: 72 },
        { name: "Weekly Newsletter", pct: 61 },
        { name: "Re-engagement", pct: 48 }
      ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground w-28 truncate", children: c.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-2 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { width: 0 },
            animate: { width: `${c.pct}%` },
            transition: { duration: 1, delay: 0.3, ease: "easeOut" },
            className: "h-full bg-signature rounded-full"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-medium text-foreground w-8 text-right", children: [
          c.pct,
          "%"
        ] })
      ] }, c.name))
    ] })
  ] });
}
function SmsCampaignsPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-56 bg-card border-2 border-border rounded-[2rem] p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-1 bg-muted rounded-full mx-auto mb-2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [
        { text: "Hi Sarah! Your appointment is confirmed for tomorrow at 2pm.", sent: true },
        { text: "Can I reschedule to 3pm?", sent: false },
        { text: "Done! Moved to 3pm. We'll send a reminder 1hr before.", sent: true }
      ].map((msg, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: i * 0.4 + 0.3 },
          className: cn(
            "px-3 py-2 rounded-2xl text-xs max-w-[85%]",
            msg.sent ? "bg-signature text-white ml-auto rounded-br-sm" : "bg-muted text-foreground mr-auto rounded-bl-sm"
          ),
          children: msg.text
        },
        i
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2 flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-8 bg-muted rounded-full px-3 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "Type a message..." }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-4 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Delivered: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "2,847" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Response rate: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "34%" })
      ] })
    ] })
  ] });
}
function SocialMediaPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "Social Scheduler" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5", children: [
        { name: "Facebook", logo: "/images/facebook-icon.svg" },
        { name: "X", logo: "/images/x-logo.jpg" },
        { name: "TikTok", logo: "/images/tiktok-logo.svg" },
        { name: "YouTube", logo: "/images/youtube-logo.webp" }
      ].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.logo, alt: p.name, className: "w-5 h-5 rounded-full object-cover" }, p.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [
      { time: "9:00 AM", platform: "Facebook", title: "5 Marketing Trends for 2025", status: "Scheduled" },
      { time: "12:30 PM", platform: "YouTube", title: "New product feature announcement", status: "Scheduled" },
      { time: "3:00 PM", platform: "X", title: "Customer success story thread", status: "Draft" },
      { time: "5:30 PM", platform: "TikTok", title: "Behind the scenes video", status: "AI Generating" }
    ].map((post, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -10 },
        animate: { opacity: 1, x: 0 },
        transition: { delay: i * 0.15 + 0.2 },
        className: "flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-muted/50 border border-border/50 min-w-0",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline text-[10px] text-muted-foreground font-mono w-14 shrink-0", children: post.time }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline text-xs font-medium text-foreground/60 w-14 shrink-0", children: post.platform }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-foreground flex-1 truncate min-w-0", children: post.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: cn(
                "text-[10px] px-2 py-0.5 rounded-full font-medium shrink-0 whitespace-nowrap",
                post.status === "Scheduled" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : post.status === "AI Generating" ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" : "bg-muted text-muted-foreground"
              ),
              children: post.status
            }
          )
        ]
      },
      i
    )) })
  ] });
}
function EmailBuilderPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "Email Editor" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 text-[10px] font-medium bg-muted text-muted-foreground rounded", children: "Desktop" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 text-[10px] font-medium bg-muted text-muted-foreground rounded", children: "Mobile" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 space-y-2", children: ["Header", "Text", "Image", "Button", "Divider", "Footer"].map((block) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "p-2 text-[10px] text-center text-muted-foreground bg-muted/50 border border-dashed border-border rounded-lg cursor-grab",
          children: block
        },
        block
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 bg-white dark:bg-muted/20 rounded-lg border border-border p-4 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.2 },
            className: "h-12 bg-signature/10 rounded-lg flex items-center justify-center",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-signature", children: "LOGO" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.4 },
            className: "h-24 bg-muted/50 rounded-lg flex items-center justify-center",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "Hero Image" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.6 },
            className: "space-y-1.5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-muted rounded w-3/4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-muted/60 rounded w-full" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-muted/60 rounded w-5/6" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.95 },
            animate: { opacity: 1, scale: 1 },
            transition: { delay: 0.8 },
            className: "h-9 bg-signature rounded-lg flex items-center justify-center",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-white", children: "Shop Now" })
          }
        )
      ] })
    ] })
  ] });
}
function FormsPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "Form Builder" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "47 responses" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-semibold text-foreground", children: "Contact Us" }),
      [
        { label: "Full Name", placeholder: "John Smith", type: "text" },
        { label: "Email", placeholder: "john@example.com", type: "email" },
        { label: "Company", placeholder: "Acme Inc.", type: "text" }
      ].map((field, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 8 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: i * 0.2 + 0.2 },
          className: "space-y-1",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium text-foreground", children: field.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 bg-muted/50 border border-border rounded-lg px-3 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: field.placeholder }) })
          ]
        },
        field.label
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 0.9 },
          className: "space-y-1",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium text-foreground", children: "Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 bg-muted/50 border border-border rounded-lg" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 1.1 },
          className: "h-9 bg-signature rounded-lg flex items-center justify-center",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-white", children: "Submit" })
        }
      )
    ] })
  ] });
}
function BlogSeoPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "Blog Editor" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 text-[10px] font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full", children: "SEO Score: 92" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-foreground/80 rounded w-3/4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-muted rounded w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-muted rounded w-5/6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-muted rounded w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-muted rounded w-4/5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-28 bg-muted/50 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "Featured Image" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-foreground/60 rounded w-1/2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-muted rounded w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-muted rounded w-5/6" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-32 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold text-muted-foreground uppercase tracking-wider", children: "SEO Analysis" }),
        [
          { label: "Readability", score: 94, color: "bg-green-500" },
          { label: "Keywords", score: 88, color: "bg-green-500" },
          { label: "Meta Tags", score: 100, color: "bg-green-500" },
          { label: "Links", score: 75, color: "bg-yellow-500" }
        ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: item.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-medium text-foreground", children: item.score })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { width: 0 },
              animate: { width: `${item.score}%` },
              transition: { duration: 0.8, delay: 0.3 },
              className: cn("h-full rounded-full", item.color)
            }
          ) })
        ] }, item.label))
      ] })
    ] })
  ] });
}
function PresentationsPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "Presentation Builder" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 text-[10px] font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 rounded-full", children: "AI Generated" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[16/9] bg-gradient-to-br from-muted/50 to-muted rounded-lg border border-border p-6 flex flex-col justify-between relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 5 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.3 },
            className: "text-base font-semibold text-foreground",
            children: "Q4 Marketing Strategy"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.5 },
            className: "text-xs text-muted-foreground mt-1",
            children: "Growth Plan & Revenue Targets"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 0.7 },
          className: "flex gap-3",
          children: [65, 82, 45, 91].map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { height: 0 },
              animate: { height: `${h}%` },
              transition: { duration: 0.6, delay: 0.8 + i * 0.1 },
              className: "bg-signature/60 rounded-t-sm min-h-[4px]",
              style: { maxHeight: 60 }
            }
          ) }, i))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 h-1 bg-signature" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["Title Slide", "Overview", "Charts", "Strategy", "Timeline"].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: cn(
          "flex-1 h-12 rounded-md border flex items-center justify-center",
          i === 2 ? "border-signature bg-signature/5" : "border-border bg-muted/30"
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-muted-foreground", children: s })
      },
      s
    )) })
  ] });
}
function CodingPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "Code Sandbox" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 px-2 py-0.5 text-[10px] font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-green-500" }),
        "Live"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 min-h-[240px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-[#1e1e2e] rounded-lg p-3 font-mono text-[10px] leading-relaxed overflow-hidden", children: [
        { text: "import", color: "text-purple-400", rest: " { BarChart }", restColor: "text-blue-300" },
        { text: "const", color: "text-purple-400", rest: " data = fetchMetrics()", restColor: "text-green-300" },
        { text: "", color: "", rest: "", restColor: "" },
        { text: "export default", color: "text-purple-400", rest: " function Report() {", restColor: "text-blue-300" },
        { text: "  return", color: "text-purple-400", rest: " (", restColor: "text-white" },
        { text: "    <Dashboard", color: "text-blue-300", rest: ">", restColor: "text-white" },
        { text: "      <MetricCards", color: "text-blue-300", rest: " data={data} />", restColor: "text-green-300" },
        { text: "      <BarChart", color: "text-blue-300", rest: " data={data} />", restColor: "text-green-300" },
        { text: "    </Dashboard>", color: "text-blue-300", rest: "", restColor: "" }
      ].map((line, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: i * 0.12 + 0.2 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: line.color, children: line.text }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: line.restColor, children: line.rest })
          ]
        },
        i
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-36 bg-muted/50 rounded-lg border border-border p-3 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-semibold text-muted-foreground uppercase tracking-wider", children: "Preview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-1.5", children: ["$48K", "2.4K", "+18%", "94%"].map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.9 },
            animate: { opacity: 1, scale: 1 },
            transition: { delay: 0.8 + i * 0.1 },
            className: "bg-card border border-border rounded p-1.5 text-center",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold text-foreground", children: v })
          },
          i
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 1.3 },
            className: "flex gap-1 items-end h-16",
            children: [40, 65, 50, 80, 60, 75].map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { height: 0 },
                animate: { height: `${h}%` },
                transition: { duration: 0.5, delay: 1.4 + i * 0.08 },
                className: "flex-1 bg-signature/60 rounded-t-sm"
              },
              i
            ))
          }
        )
      ] })
    ] })
  ] });
}
function KnowledgeBasePreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "Knowledge Base" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/30 rounded-lg p-3 flex items-center gap-2 border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs", children: "Search articles..." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: [
      { title: "Getting Started", articles: 12, icon: "🚀" },
      { title: "Account Settings", articles: 8, icon: "⚙️" },
      { title: "Billing & Plans", articles: 6, icon: "💳" },
      { title: "API Reference", articles: 24, icon: "📖" }
    ].map((cat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: i * 0.15 + 0.3 },
        className: "bg-card border border-border rounded-lg p-4 hover:border-signature/30 transition-colors",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg mb-2", children: cat.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-foreground", children: cat.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground mt-0.5", children: [
            cat.articles,
            " articles"
          ] })
        ]
      },
      cat.title
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground uppercase tracking-wider", children: "Popular Articles" }),
      ["How to set up your first campaign", "Connecting your domain", "Understanding analytics"].map(
        (article, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-foreground/80 p-2 rounded bg-muted/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3 w-3 text-muted-foreground" }),
          article
        ] }, i)
      )
    ] })
  ] });
}
function TasksPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "Task Board" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3", children: [
      {
        title: "To Do",
        count: 5,
        cards: ["Design landing page", "Write blog post", "Review SEO audit"]
      },
      {
        title: "In Progress",
        count: 3,
        cards: ["Email campaign setup", "Social media calendar"]
      },
      {
        title: "Done",
        count: 12,
        cards: ["CRM migration", "Brand guidelines"]
      }
    ].map((col, colIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("bg-muted/50 rounded-lg p-2.5", colIndex === 2 && "col-span-2 sm:col-span-1"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold text-foreground uppercase tracking-wider", children: col.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: col.count })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: col.cards.map((card, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 5 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: colIndex * 0.15 + i * 0.1 + 0.3 },
          className: "bg-card border border-border rounded-md p-2",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-foreground", children: card })
        },
        card
      )) })
    ] }, col.title)) })
  ] });
}
function CrmPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "CRM Pipeline" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "$284K in pipeline" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: [
      { stage: "Lead", count: 24, width: "w-full" },
      { stage: "Qualified", count: 18, width: "w-5/6" },
      { stage: "Proposal", count: 8, width: "w-3/5" },
      { stage: "Closed", count: 5, width: "w-2/5" }
    ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 bg-signature/20 rounded-t flex items-center justify-center", style: { opacity: 0.4 + s.count / 24 * 0.6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-signature", children: s.count }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-muted-foreground mt-1", children: s.stage })
    ] }, s.stage)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground uppercase tracking-wider", children: "Recent Contacts" }),
      [
        { name: "Sarah Johnson", company: "TechCorp", deal: "$45K", status: "Qualified" },
        { name: "Mike Chen", company: "StartupXYZ", deal: "$28K", status: "Proposal" },
        { name: "Lisa Park", company: "GrowthCo", deal: "$62K", status: "Lead" }
      ].map((contact, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -8 },
          animate: { opacity: 1, x: 0 },
          transition: { delay: i * 0.15 + 0.4 },
          className: "flex items-center gap-3 p-2 rounded-lg bg-muted/30",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full bg-signature/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-signature", children: contact.name[0] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium text-foreground", children: contact.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: contact.company })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-foreground", children: contact.deal })
          ]
        },
        contact.name
      ))
    ] })
  ] });
}
function DashboardPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "Dashboard" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-2", children: [
      { label: "Revenue", value: "$48.2K", trend: "+12%" },
      { label: "Visitors", value: "24.1K", trend: "+8%" },
      { label: "Leads", value: "847", trend: "+24%" },
      { label: "Conversion", value: "3.2%", trend: "+0.4%" }
    ].map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 5 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: i * 0.1 + 0.2 },
        className: "bg-card border border-border rounded-lg p-2.5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-muted-foreground uppercase tracking-wider", children: m.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-foreground mt-0.5", children: m.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-green-600 dark:text-green-400 font-medium", children: m.trend })
        ]
      },
      m.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-lg p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold text-foreground", children: "Revenue Over Time" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-muted-foreground", children: "Last 30 days" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-1 h-24", children: [30, 45, 35, 60, 50, 70, 55, 80, 65, 75, 85, 90].map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { height: 0 },
          animate: { height: `${h}%` },
          transition: { duration: 0.5, delay: i * 0.05 + 0.4 },
          className: "flex-1 bg-signature/50 rounded-t-sm hover:bg-signature/70 transition-colors"
        },
        i
      )) })
    ] })
  ] });
}
function DocumentsPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "Document Editor" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 text-[10px] font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full", children: "Signed" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-muted/20 border border-border rounded-lg p-6 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-foreground", children: "Service Agreement" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Effective Date: Feb 1, 2025" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-muted rounded w-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-muted rounded w-5/6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-muted rounded w-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-muted rounded w-3/4" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-border" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-muted rounded w-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-muted rounded w-4/5" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 0.6 },
          className: "pt-4 border-t border-dashed border-border",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Signature" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-script italic text-signature", children: "John Smith" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-32 bg-border mt-1" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-green-600 dark:text-green-400", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-medium", children: "Verified" })
            ] })
          ] })
        }
      )
    ] })
  ] });
}
function AIAgentsPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "AI Workforce" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "30+ agents available" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2.5", children: [
      { name: "SEO Specialist", task: "Running site audit...", status: "active" },
      { name: "Content Writer", task: "Drafting blog post...", status: "active" },
      { name: "Social Manager", task: "Scheduling posts...", status: "active" },
      { name: "Data Analyst", task: "Generating report...", status: "active" },
      { name: "Email Marketer", task: "A/B testing subject lines", status: "idle" },
      { name: "Ad Optimizer", task: "Waiting for next cycle", status: "idle" }
    ].map((agent, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        transition: { delay: i * 0.1 + 0.2 },
        className: "bg-card border border-border rounded-lg p-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mb-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: cn(
                  "w-2 h-2 rounded-full",
                  agent.status === "active" ? "bg-green-500" : "bg-muted-foreground/30"
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold text-foreground", children: agent.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-muted-foreground truncate", children: agent.task })
        ]
      },
      agent.name
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 bg-signature/5 border border-signature/20 rounded-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-foreground font-medium", children: "4 agents working now" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-signature font-medium", children: "View all activity →" })
    ] })
  ] });
}
function VoiceAgentsPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "Voice Agent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" }),
        "On Call"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5 text-center space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-signature/10 mx-auto flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-6 w-6 text-signature" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "Sarah Johnson" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Appointment booking · 2:34" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-0.5 h-8", children: Array.from({ length: 24 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          animate: {
            height: [4, Math.random() * 24 + 4, 4]
          },
          transition: {
            duration: 0.6 + Math.random() * 0.4,
            repeat: Infinity,
            delay: i * 0.05
          },
          className: "w-1 bg-signature/60 rounded-full"
        },
        i
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground uppercase tracking-wider", children: "Live Transcript" }),
      [
        { speaker: "AI", text: "Hi Sarah! I'd be happy to help you schedule an appointment." },
        { speaker: "Caller", text: "I need a consultation next week, preferably Tuesday." },
        { speaker: "AI", text: "I have Tuesday at 10am or 2pm available. Which works better?" }
      ].map((line, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 5 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: i * 0.3 + 0.5 },
          className: "flex gap-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: cn(
                  "text-[10px] font-semibold w-8 shrink-0",
                  line.speaker === "AI" ? "text-signature" : "text-muted-foreground"
                ),
                children: line.speaker
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-foreground/80", children: line.text })
          ]
        },
        i
      ))
    ] })
  ] });
}
function WorkflowsPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "Workflow Builder" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 text-[10px] font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full", children: "Active" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center gap-2", children: [
      { label: "New Form Submission", type: "trigger", color: "border-blue-500 bg-blue-50 dark:bg-blue-900/20" },
      { label: "Add to CRM", type: "action", color: "border-signature bg-signature/5" },
      { label: "Score > 80?", type: "condition", color: "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20" },
      { label: "Send Welcome Email", type: "action", color: "border-signature bg-signature/5" },
      { label: "Assign to Sales Rep", type: "action", color: "border-signature bg-signature/5" }
    ].map((node, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: i * 0.15 + 0.2 },
        className: "w-full",
        children: [
          i > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-4 bg-border" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: cn(
                "border-2 rounded-lg p-3 flex items-center gap-3",
                node.color
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: cn(
                      "text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded",
                      node.type === "trigger" ? "text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/40" : node.type === "condition" ? "text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/40" : "text-signature bg-signature/10"
                    ),
                    children: node.type
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-foreground", children: node.label })
              ]
            }
          )
        ]
      },
      node.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-[10px] text-muted-foreground justify-center pt-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "22 triggers" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "8 node types" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "99.9% uptime" })
    ] })
  ] });
}
function ChannelsPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "Community Channels" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 min-h-[260px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 bg-muted/50 rounded-lg p-2.5 space-y-1", children: [
        { name: "# general", unread: 3 },
        { name: "# marketing", unread: 0 },
        { name: "# support", unread: 7 },
        { name: "# announcements", unread: 1 }
      ].map((ch, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: cn(
            "px-2 py-1.5 rounded text-[10px] flex items-center justify-between",
            i === 0 ? "bg-card border border-border font-medium text-foreground" : "text-muted-foreground hover:text-foreground"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: ch.name }),
            ch.unread > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 rounded-full bg-signature text-[8px] text-white flex items-center justify-center font-bold", children: ch.unread })
          ]
        },
        ch.name
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 space-y-3 py-1", children: [
          { name: "Alex", msg: "Just finished the Q4 campaign deck. Looks great!", time: "2:34 PM" },
          { name: "Sarah", msg: "Can someone review the new landing page copy?", time: "2:36 PM" },
          { name: "AI Bot", msg: "SEO audit complete. 12 issues found, 3 critical. See report →", time: "2:38 PM", isBot: true }
        ].map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 5 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: i * 0.2 + 0.3 },
            className: "flex gap-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: cn(
                    "w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0",
                    m.isBot ? "bg-signature/20 text-signature" : "bg-muted text-muted-foreground"
                  ),
                  children: m.isBot ? "🤖" : m.name[0]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold text-foreground", children: m.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-muted-foreground", children: m.time })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-foreground/80 mt-0.5", children: m.msg })
              ] })
            ]
          },
          i
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 bg-muted/50 border border-border rounded-lg flex items-center px-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "Message #general..." }) })
      ] })
    ] })
  ] });
}
export {
  FeaturesShowcaseSection
};
