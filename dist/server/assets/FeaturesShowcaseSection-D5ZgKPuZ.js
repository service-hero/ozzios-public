import { r as reactExports, j as jsxRuntimeExports, m as motion, A as AnimatePresence } from "./vendor-framer-DZFBeC81.js";
import { L as Link } from "./vendor-router-DD_41qJ4.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { B as BackgroundField, E as EASE_OUT, S as SectionHeader, e as SectionHeading, K as Kbd } from "./_landing-primitives-Bieps6V3.js";
import { k as Send, M as MessageSquare, a6 as Share2, l as Mail, bd as FileInput, aP as Code, aC as BookOpen, aO as SquareCheckBig, U as Users, aL as LayoutDashboard, aa as Bot, N as Phone, aK as Workflow, aA as MessageCircle, aM as MessageSquareText, r as ArrowUpRight, s as Command, y as FileText } from "./vendor-icons-D94uOSxG.js";
import "./vendor-react-MO5I_vdy.js";
import "./vendor-radix-Bd9PM-r6.js";
import "node:async_hooks";
import "./LandingLayout-Dblq4RXp.js";
const categories = [
  { id: "marketing", label: "Marketing & Campaigns" },
  { id: "content", label: "Content & Creative" },
  { id: "productivity", label: "Productivity & Ops" },
  { id: "ai", label: "AI & Communication" }
];
const features = [
  { id: "email-campaigns", name: "Email Campaigns", description: "Send targeted campaigns with AI-optimized subject lines and send times.", icon: Send, href: "/features/email-campaigns", category: "marketing" },
  { id: "sms-campaigns", name: "SMS Campaigns", description: "Reach customers directly with personalized text message campaigns.", icon: MessageSquare, href: "/features/sms-campaigns", category: "marketing" },
  { id: "social-media", name: "Social Media", description: "Schedule and publish across all platforms from one dashboard.", icon: Share2, href: "/features/social-media", category: "marketing" },
  { id: "email-builder", name: "Email Builder", description: "Drag-and-drop email editor with AI content generation.", icon: Mail, href: "/features/email-builder", category: "marketing" },
  { id: "forms", name: "Forms", description: "Build smart forms that capture leads and trigger automations.", icon: FileInput, href: "/features/forms", category: "marketing" },
  { id: "coding", name: "Reports & Code", description: "AI generates custom dashboards, reports, and applications.", icon: Code, href: "/features/coding", category: "content" },
  { id: "knowledge-base", name: "Knowledge Base", description: "Build searchable help centers and internal documentation wikis.", icon: BookOpen, href: "/features/knowledge-base", category: "content" },
  { id: "tasks", name: "Task Management", description: "Kanban boards, assignments, and project tracking for your team.", icon: SquareCheckBig, href: "/features/tasks", category: "productivity" },
  { id: "crm", name: "CRM & Deals", description: "Manage contacts, pipeline stages, and deal flow in one place.", icon: Users, href: "/features/crm", category: "productivity" },
  { id: "dashboard", name: "Dashboard", description: "18 widget types for real-time business analytics and reporting.", icon: LayoutDashboard, href: "/features/dashboard", category: "productivity" },
  { id: "ai-agents", name: "AI Agents", description: "30+ AI team members that learn your business and work around the clock.", icon: Bot, href: "/features/ai-agents", category: "ai" },
  { id: "voice-agents", name: "Voice Agents", description: "AI phone agents that handle calls and book appointments.", icon: Phone, href: "/features/voice-agents", category: "ai" },
  { id: "workflows", name: "Workflows", description: "Visual automation builder with 22 triggers and 8 node types.", icon: Workflow, href: "/features/workflows", category: "ai" },
  { id: "channels", name: "Channels", description: "Real-time community spaces for your team and customer collaboration.", icon: MessageCircle, href: "/features/channels", category: "ai" },
  { id: "chat-widget", name: "Chat Widget", description: "AI-powered website chat with lead capture and human handoff.", icon: MessageSquareText, href: "/features/chat-widget", category: "ai" }
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } }
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "showcase", className: "relative isolate overflow-hidden py-28 lg:py-36", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackgroundField, { variant: "top-left" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
        variants: containerVariants,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "mb-12 lg:mb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              eyebrow: "Platform capabilities",
              headlineLines: ["Everything your team needs.", "One unified system."],
              sub: "17 product surfaces replacing the patchwork stack most service businesses bolt together."
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "scrollbar-hidden -mx-1 flex gap-1.5 overflow-x-auto px-1 pb-2", children: categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setActiveCategory(cat.id),
                className: cn(
                  "relative inline-flex h-9 shrink-0 items-center gap-2 whitespace-nowrap rounded-md border px-3.5 text-[12.5px] font-medium transition-all duration-200",
                  isActive ? "border-foreground/15 bg-foreground text-background shadow-[0_8px_22px_-10px_rgba(34,27,22,0.4)]" : "border-border/60 bg-background/60 text-foreground/65 hover:border-border hover:bg-background hover:text-foreground"
                ),
                children: [
                  isActive ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-signature" }) : null,
                  cat.label
                ]
              },
              cat.id
            );
          }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "grid gap-5 lg:grid-cols-12",
              onMouseEnter: () => setIsPaused(true),
              onMouseLeave: () => setIsPaused(false),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 xl:col-span-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { label: `${categoryFeatures.length} features` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-1.5", children: categoryFeatures.map((feature) => {
                    const Icon = feature.icon;
                    const isActive = feature.id === activeFeature.id;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => setActiveFeatureId(feature.id),
                        className: cn(
                          "group/feat relative flex w-full items-start gap-3 rounded-md border px-3 py-3 text-left transition-all duration-200",
                          isActive ? "border-border bg-background shadow-[0_8px_22px_-12px_rgba(34,27,22,0.18)]" : "border-transparent bg-transparent hover:border-border/60 hover:bg-background/60"
                        ),
                        children: [
                          isActive ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-px top-2 h-[calc(100%-1rem)] w-[2px] rounded-full bg-signature" }) : null,
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: cn(
                                "mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border transition-all duration-200",
                                isActive ? "border-foreground/25 bg-foreground text-background" : "border-border/60 bg-background text-foreground/55"
                              ),
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5" })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "h3",
                                {
                                  className: cn(
                                    "text-[13.5px] font-semibold transition-colors",
                                    isActive ? "text-foreground" : "text-foreground/80"
                                  ),
                                  children: feature.name
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                ArrowUpRight,
                                {
                                  className: cn(
                                    "h-3 w-3 shrink-0 transition-all duration-150",
                                    isActive ? "translate-x-0 -translate-y-0 text-signature opacity-100" : "translate-x-1 translate-y-0.5 text-foreground/30 opacity-0 group-hover/feat:translate-x-0 group-hover/feat:-translate-y-0 group-hover/feat:opacity-100"
                                  )
                                }
                              )
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-[12px] leading-[1.5] text-muted-foreground", children: feature.description })
                          ] })
                        ]
                      },
                      feature.id
                    );
                  }) }),
                  activeFeature ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 pl-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: activeFeature.href,
                      className: "group/learn inline-flex items-center gap-1.5 text-[12.5px] font-medium text-foreground/70 transition-colors hover:text-signature",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative", children: [
                          "Learn more about ",
                          activeFeature.name,
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-px left-0 h-px w-0 bg-signature transition-all duration-200 group-hover/learn:w-full" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3 transition-transform duration-200 group-hover/learn:-translate-y-0.5 group-hover/learn:translate-x-0.5" })
                      ]
                    }
                  ) }) : null
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 xl:col-span-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserChrome, { url: `app.ozzios.com/${activeFeature.id}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-[440px] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    transition: { duration: 0.25 },
                    className: "absolute inset-0 overflow-y-auto p-5",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturePreview, { featureId: activeFeature.id })
                  },
                  activeFeature.id
                ) }) }) }) }) })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px flex-1 bg-border/50" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10.5px] uppercase tracking-[0.22em] text-foreground/45", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/85 tabular-nums", children: "14" }),
              " features ·",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/85 tabular-nums", children: "4" }),
              " categories ·",
              " ",
              "included in every plan"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px flex-1 bg-border/50" })
          ] }) })
        ]
      }
    ) })
  ] });
}
function BrowserChrome({ children, url }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-xl border border-border/70 bg-background shadow-[0_24px_60px_-30px_rgba(34,27,22,0.30),0_2px_0_rgba(255,255,255,0.6)_inset] ring-1 ring-foreground/5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-9 items-center gap-3 border-b border-border/60 bg-muted/30 px-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#FF5F57]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#28CA41]" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-6 w-full max-w-[360px] items-center gap-2 rounded-md border border-border/60 bg-background px-2 text-[11px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-mint/60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-mint" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate font-mono text-foreground/55", children: url }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto inline-flex items-center gap-1 text-foreground/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Command, { className: "h-3 w-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Kbd, { className: "h-[16px] min-w-[16px] text-[9px]", children: "K" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden h-2.5 w-12 sm:block" })
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
function StatusBadge({ children, tone = "live" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: cn(
        "inline-flex items-center gap-1 rounded-[5px] border px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider",
        tone === "live" ? "border-mint/30 bg-mint/10 text-mint" : tone === "draft" ? "border-border/60 bg-muted text-muted-foreground" : "border-signature/30 bg-signature/10 text-signature"
      ),
      children: [
        tone === "live" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-mint" }) : null,
        children
      ]
    }
  );
}
function EmailCampaignsPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "Campaign Dashboard" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { tone: "live", children: "Live" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: [
      { label: "Sent", value: "12,847" },
      { label: "Opened", value: "68.2%" },
      { label: "Clicked", value: "24.1%" }
    ].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border/60 bg-muted/30 p-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[9px] uppercase tracking-wider text-muted-foreground", children: m.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[15px] font-semibold tabular-nums text-foreground", children: m.value })
    ] }, m.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { label: "Performance by campaign" }),
      [
        { name: "Welcome Series", pct: 85 },
        { name: "Product Launch", pct: 72 },
        { name: "Weekly Newsletter", pct: 61 },
        { name: "Re-engagement", pct: 48 }
      ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-28 truncate text-[12px] text-muted-foreground", children: c.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 flex-1 overflow-hidden rounded-full bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { width: 0 },
            animate: { width: `${c.pct}%` },
            transition: { duration: 1, delay: 0.3, ease: "easeOut" },
            className: "h-full rounded-full bg-signature"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "w-9 text-right text-[12px] font-medium tabular-nums text-foreground", children: [
          c.pct,
          "%"
        ] })
      ] }, c.name))
    ] })
  ] });
}
function SmsCampaignsPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-56 space-y-3 rounded-[1.4rem] border border-border/60 bg-background p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-2 h-1 w-16 rounded-full bg-muted" }),
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
            "max-w-[85%] rounded-2xl px-3 py-2 text-[12px]",
            msg.sent ? "ml-auto rounded-br-sm bg-signature text-white" : "mr-auto rounded-bl-sm bg-muted text-foreground"
          ),
          children: msg.text
        },
        i
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-7 flex-1 items-center rounded-full border border-border/60 bg-muted/40 px-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "Type a message…" }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 inline-flex items-center gap-3 rounded-md border border-border/60 bg-background/60 px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-foreground/55", children: [
      "Delivered ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tabular-nums text-foreground/85", children: "2,847" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-px bg-border/60" }),
      "Response ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tabular-nums text-foreground/85", children: "34%" })
    ] })
  ] });
}
function SocialMediaPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "Social Scheduler" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5", children: [
        { name: "Facebook", logo: "/images/facebook-icon.svg" },
        { name: "X", logo: "/images/x-logo.jpg" },
        { name: "TikTok", logo: "/images/tiktok-logo.svg" },
        { name: "YouTube", logo: "/images/youtube-logo.webp" }
      ].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: p.logo,
          alt: p.name,
          className: "h-5 w-5 rounded-full border border-border/60 object-cover"
        },
        p.name
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: [
      { time: "9:00 AM", platform: "Facebook", title: "5 Marketing Trends for 2025", status: "Scheduled" },
      { time: "12:30 PM", platform: "YouTube", title: "New product feature announcement", status: "Scheduled" },
      { time: "3:00 PM", platform: "X", title: "Customer success story thread", status: "Draft" },
      { time: "5:30 PM", platform: "TikTok", title: "Behind the scenes video", status: "AI" }
    ].map((post, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -10 },
        animate: { opacity: 1, x: 0 },
        transition: { delay: i * 0.15 + 0.2 },
        className: "flex min-w-0 items-center gap-2 rounded-md border border-border/60 bg-muted/30 p-2 sm:gap-3 sm:p-2.5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden w-14 shrink-0 font-mono text-[10px] tabular-nums text-muted-foreground sm:inline", children: post.time }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden w-14 shrink-0 text-[11px] font-medium text-foreground/65 sm:inline", children: post.platform }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 flex-1 truncate text-[12px] text-foreground", children: post.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { tone: post.status === "Scheduled" ? "live" : post.status === "AI" ? "ai" : "draft", children: post.status === "AI" ? "AI gen" : post.status })
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Kbd, { className: "h-[20px] px-1.5 text-[10px] uppercase tracking-wider", children: "Desktop" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Kbd, { className: "h-[20px] px-1.5 text-[10px] uppercase tracking-wider", children: "Mobile" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 space-y-1.5", children: ["Header", "Text", "Image", "Button", "Divider", "Footer"].map((block) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "cursor-grab rounded-md border border-dashed border-border/60 bg-muted/30 p-1.5 text-center text-[10px] text-muted-foreground transition-colors hover:border-signature/30 hover:text-foreground",
          children: block
        },
        block
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-3 rounded-md border border-border/60 bg-background p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.2 },
            className: "flex h-12 items-center justify-center rounded-md bg-signature/10",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-signature", children: "LOGO" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.4 },
            className: "flex h-24 items-center justify-center rounded-md bg-muted/40",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "Hero image" })
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-3/4 rounded bg-muted" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-full rounded bg-muted/60" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-5/6 rounded bg-muted/60" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.95 },
            animate: { opacity: 1, scale: 1 },
            transition: { delay: 0.8 },
            className: "flex h-9 items-center justify-center rounded-md bg-foreground",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] font-medium text-background", children: "Shop now" })
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: "47 responses" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 rounded-md border border-border/60 bg-background p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-[15px] font-semibold text-foreground", children: "Contact us" }),
      [
        { label: "Full name", placeholder: "John Smith" },
        { label: "Email", placeholder: "john@example.com" },
        { label: "Company", placeholder: "Acme Inc." }
      ].map((field, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 8 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: i * 0.18 + 0.2 },
          className: "space-y-1",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-mono text-[9.5px] uppercase tracking-[0.18em] text-foreground/55", children: field.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 items-center rounded-md border border-border/60 bg-muted/30 px-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-muted-foreground", children: field.placeholder }) })
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-mono text-[9.5px] uppercase tracking-[0.18em] text-foreground/55", children: "Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 rounded-md border border-border/60 bg-muted/30" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 1.1 },
          className: "flex h-9 items-center justify-center rounded-md bg-foreground",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] font-medium text-background", children: "Submit" })
        }
      )
    ] })
  ] });
}
function CodingPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "App Builder" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { tone: "live", children: "Live" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-[240px] gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-hidden rounded-md border border-foreground/15 bg-foreground p-3 font-mono text-[10px] leading-relaxed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#FF5F57]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#FFBD2E]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#28CA41]" })
        ] }),
        [
          { text: "import", color: "text-[#c792ea]", rest: " { BarChart }", restColor: "text-[#82aaff]" },
          { text: "const", color: "text-[#c792ea]", rest: " data = fetchMetrics()", restColor: "text-[#c3e88d]" },
          { text: "", color: "", rest: "", restColor: "" },
          { text: "export default", color: "text-[#c792ea]", rest: " function Report() {", restColor: "text-[#82aaff]" },
          { text: "  return", color: "text-[#c792ea]", rest: " (", restColor: "text-white/85" },
          { text: "    <Dashboard", color: "text-[#82aaff]", rest: ">", restColor: "text-white/85" },
          { text: "      <MetricCards", color: "text-[#82aaff]", rest: " data={data} />", restColor: "text-[#c3e88d]" },
          { text: "      <BarChart", color: "text-[#82aaff]", rest: " data={data} />", restColor: "text-[#c3e88d]" },
          { text: "    </Dashboard>", color: "text-[#82aaff]", rest: "", restColor: "" }
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
        ))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-36 space-y-2 rounded-md border border-border/60 bg-background p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[9px] uppercase tracking-wider text-muted-foreground", children: "Preview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-1.5", children: ["$48K", "2.4K", "+18%", "94%"].map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.9 },
            animate: { opacity: 1, scale: 1 },
            transition: { delay: 0.8 + i * 0.1 },
            className: "rounded-[5px] border border-border/60 bg-muted/30 p-1.5 text-center",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold tabular-nums text-foreground", children: v })
          },
          i
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 1.3 },
            className: "flex h-16 items-end gap-1",
            children: [40, 65, 50, 80, 60, 75].map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { height: 0 },
                animate: { height: `${h}%` },
                transition: { duration: 0.5, delay: 1.4 + i * 0.08 },
                className: "flex-1 rounded-t-sm bg-signature/60"
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
  const cats = [
    { title: "Getting started", articles: 12, Icon: BookOpen },
    { title: "Account settings", articles: 8, Icon: Users },
    { title: "Billing & plans", articles: 6, Icon: FileText },
    { title: "API reference", articles: 24, Icon: Code }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "Knowledge Base" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-md border border-border/60 bg-muted/30 p-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Command, { className: "h-3 w-3 text-foreground/40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-muted-foreground", children: "Search articles…" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kbd, { className: "ml-auto h-[16px] min-w-[16px] text-[9px]", children: "⌘K" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: cats.map((cat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: i * 0.12 + 0.3 },
        className: "rounded-md border border-border/60 bg-background p-3 transition-all hover:-translate-y-0.5 hover:border-signature/30",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-7 w-7 items-center justify-center rounded-md border border-border/60 bg-background text-foreground/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx(cat.Icon, { className: "h-3.5 w-3.5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[12px] font-semibold text-foreground", children: cat.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[9.5px] uppercase tracking-wider text-muted-foreground", children: [
            cat.articles,
            " articles"
          ] })
        ]
      },
      cat.title
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { label: "Popular" }),
      ["How to set up your first campaign", "Connecting your domain", "Understanding analytics"].map((article, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center gap-2 rounded-md bg-muted/30 p-2 text-[12px] text-foreground/80",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3 w-3 text-muted-foreground" }),
            article
          ]
        },
        i
      ))
    ] })
  ] });
}
function TasksPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "Task Board" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2 sm:grid-cols-3", children: [
      { title: "To do", count: 5, cards: ["Design landing page", "Write blog post", "Review monthly report"] },
      { title: "In progress", count: 3, cards: ["Email campaign setup", "Social media calendar"] },
      { title: "Done", count: 12, cards: ["CRM migration", "Brand guidelines"] }
    ].map((col, ci) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: cn(
          "rounded-md border border-border/60 bg-muted/30 p-2.5",
          ci === 2 && "col-span-2 sm:col-span-1"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9.5px] uppercase tracking-wider text-foreground/55", children: col.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tabular-nums text-muted-foreground", children: col.count })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: col.cards.map((card, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 5 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: ci * 0.15 + i * 0.1 + 0.3 },
              className: "rounded border border-border/60 bg-background p-2",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10.5px] text-foreground", children: card })
            },
            card
          )) })
        ]
      },
      col.title
    )) })
  ] });
}
function CrmPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "CRM Pipeline" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: "$284K in pipeline" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: [
      { stage: "Lead", count: 24 },
      { stage: "Qualified", count: 18 },
      { stage: "Proposal", count: 8 },
      { stage: "Closed", count: 5 }
    ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "flex h-9 items-center justify-center rounded-t-md bg-signature/20",
          style: { opacity: 0.4 + s.count / 24 * 0.6 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] font-bold tabular-nums text-signature", children: s.count })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-mono text-[9.5px] uppercase tracking-wider text-foreground/55", children: s.stage })
    ] }, s.stage)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { label: "Recent contacts" }),
      [
        { name: "Sarah Johnson", company: "TechCorp", deal: "$45K" },
        { name: "Mike Chen", company: "StartupXYZ", deal: "$28K" },
        { name: "Lisa Park", company: "GrowthCo", deal: "$62K" }
      ].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -8 },
          animate: { opacity: 1, x: 0 },
          transition: { delay: i * 0.15 + 0.4 },
          className: "flex items-center gap-3 rounded-md border border-border/60 bg-background p-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-7 w-7 items-center justify-center rounded-md border border-signature/25 bg-signature/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold text-signature", children: c.name[0] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] font-medium text-foreground", children: c.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10.5px] text-muted-foreground", children: c.company })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] font-semibold tabular-nums text-foreground", children: c.deal })
          ]
        },
        c.name
      ))
    ] })
  ] });
}
function DashboardPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "Dashboard" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2 sm:grid-cols-4", children: [
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
        className: "rounded-md border border-border/60 bg-background p-2.5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[9px] uppercase tracking-wider text-muted-foreground", children: m.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-[14px] font-bold tabular-nums text-foreground", children: m.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-medium tabular-nums text-mint", children: m.trend })
        ]
      },
      m.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border/60 bg-background p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold text-foreground", children: "Revenue over time" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9.5px] uppercase tracking-wider text-muted-foreground", children: "30d" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-24 items-end gap-1", children: [30, 45, 35, 60, 50, 70, 55, 80, 65, 75, 85, 90].map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { height: 0 },
          animate: { height: `${h}%` },
          transition: { duration: 0.5, delay: i * 0.05 + 0.4 },
          className: "flex-1 rounded-t-sm bg-signature/55 transition-colors hover:bg-signature/75"
        },
        i
      )) })
    ] })
  ] });
}
function AIAgentsPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "AI Workforce" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: "30+ available" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: [
      { name: "SEO Specialist", task: "Tracking ranking changes…", status: "active" },
      { name: "Content Writer", task: "Drafting blog post…", status: "active" },
      { name: "Social Manager", task: "Scheduling posts…", status: "active" },
      { name: "Data Analyst", task: "Generating report…", status: "active" },
      { name: "Email Marketer", task: "A/B testing subject lines", status: "idle" },
      { name: "Ad Optimizer", task: "Waiting for next cycle", status: "idle" }
    ].map((agent, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        transition: { delay: i * 0.1 + 0.2 },
        className: "rounded-md border border-border/60 bg-background p-2.5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1 flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: cn(
                  "h-1.5 w-1.5 rounded-full",
                  agent.status === "active" ? "bg-mint" : "bg-foreground/20"
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold text-foreground", children: agent.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-[10px] text-muted-foreground", children: agent.task })
        ]
      },
      agent.name
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-md border border-signature/25 bg-signature/[0.06] px-3 py-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] font-medium text-foreground", children: "4 agents working now" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/features/ai-agents", className: "inline-flex items-center gap-1 text-[11px] font-medium text-signature hover:text-signature/80", children: [
        "View activity",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3" })
      ] })
    ] })
  ] });
}
function VoiceAgentsPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "Voice Agent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { tone: "live", children: "On call" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 rounded-md border border-border/60 bg-background p-5 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-signature/25 bg-signature/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5 text-signature" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[14px] font-semibold text-foreground", children: "Sarah Johnson" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: "Appointment booking · 02:34" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-8 items-center justify-center gap-0.5", children: Array.from({ length: 24 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          animate: { height: [4, Math.random() * 24 + 4, 4] },
          transition: { duration: 0.6 + Math.random() * 0.4, repeat: Infinity, delay: i * 0.05 },
          className: "w-1 rounded-full bg-signature/60"
        },
        i
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { label: "Live transcript" }),
      [
        { speaker: "AI", text: "Hi Sarah! I'd be happy to help you schedule an appointment." },
        { speaker: "Caller", text: "I need a consultation next week, preferably Tuesday." },
        { speaker: "AI", text: "I have Tuesday at 10am or 2pm. Which works better?" }
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
                  "w-10 shrink-0 font-mono text-[9.5px] font-semibold uppercase tracking-wider",
                  line.speaker === "AI" ? "text-signature" : "text-muted-foreground"
                ),
                children: line.speaker
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-foreground/85", children: line.text })
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { tone: "live", children: "Active" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center gap-1", children: [
      { label: "New form submission", type: "trigger" },
      { label: "Add to CRM", type: "action" },
      { label: "Score > 80?", type: "condition" },
      { label: "Send welcome email", type: "action" },
      { label: "Assign to sales rep", type: "action" }
    ].map((node, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: i * 0.15 + 0.2 },
        className: "w-full",
        children: [
          i > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-px bg-border" }) }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: cn(
                "flex items-center gap-3 rounded-md border bg-background p-2.5",
                node.type === "trigger" ? "border-foreground/15" : node.type === "condition" ? "border-sun/30" : "border-signature/25"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: cn(
                      "inline-flex items-center rounded-[5px] border px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider",
                      node.type === "trigger" ? "border-foreground/20 bg-foreground/5 text-foreground/70" : node.type === "condition" ? "border-sun/30 bg-sun/10 text-sun" : "border-signature/25 bg-signature/10 text-signature"
                    ),
                    children: node.type
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] font-medium text-foreground", children: node.label })
              ]
            }
          )
        ]
      },
      node.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 pt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/45", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "22 triggers" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-px bg-border/60" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "8 nodes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-px bg-border/60" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "99.9% uptime" })
    ] })
  ] });
}
function ChannelsPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "Community Channels" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-[260px] gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 space-y-1 rounded-md border border-border/60 bg-muted/30 p-2", children: [
        { name: "# general", unread: 3 },
        { name: "# marketing", unread: 0 },
        { name: "# support", unread: 7 },
        { name: "# announcements", unread: 1 }
      ].map((ch, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: cn(
            "flex items-center justify-between rounded-md px-2 py-1.5 text-[10.5px]",
            i === 0 ? "border border-border/60 bg-background font-medium text-foreground" : "text-muted-foreground hover:text-foreground"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: ch.name }),
            ch.unread > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-4 w-4 items-center justify-center rounded-full bg-signature text-[8px] font-bold text-white", children: ch.unread }) : null
          ]
        },
        ch.name
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 space-y-3 py-1", children: [
          { name: "Alex", msg: "Just finished the Q4 campaign deck. Looks great!", time: "2:34 PM" },
          { name: "Sarah", msg: "Can someone review the new landing page copy?", time: "2:36 PM" },
          { name: "Ozzi", msg: "Weekly report ready. 3 trends flagged.", time: "2:38 PM", isBot: true }
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
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[9px] font-bold",
                    m.isBot ? "border border-signature/25 bg-signature/10 text-signature" : "border border-border/60 bg-muted text-muted-foreground"
                  ),
                  children: m.name[0]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10.5px] font-semibold text-foreground", children: m.name }),
                  m.isBot ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-[5px] border border-signature/25 bg-signature/10 px-1 font-mono text-[8.5px] font-semibold uppercase tracking-wider text-signature", children: "AI" }) : null,
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9.5px] text-muted-foreground", children: m.time })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-[10.5px] text-foreground/85", children: m.msg })
              ] })
            ]
          },
          i
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-7 items-center rounded-md border border-border/60 bg-muted/30 px-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "Message #general…" }) })
      ] })
    ] })
  ] });
}
export {
  FeaturesShowcaseSection
};
