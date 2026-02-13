import { n as jsxRuntimeExports, a as reactExports } from "./worker-entry-DUbV-qEz.js";
import { S as Share2, U as Users, L as LandingLayout } from "./LandingLayout-BFxFbzxM.js";
import { m as motion, A as ArrowRight } from "./proxy-BEnWwJWi.js";
import { u as useInView } from "./use-in-view-DoLVnWF9.js";
import { C as Clock } from "./clock-oQ2YqCyM.js";
import { c as createLucideIcon } from "./createLucideIcon-OQXTLfCE.js";
import { C as ChartColumn } from "./chart-column-BodL8QE9.js";
import { M as Megaphone } from "./megaphone-BWyKYido.js";
import { C as CircleCheck } from "./circle-check-CFGtU0xv.js";
import { T as Target } from "./target-CuMYRJyQ.js";
import { T as TrendingUp } from "./trending-up-5m60Ya75.js";
import { L as Layers } from "./layers-HgkP8SV_.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "./router-BLJT3Mxm.js";
import "./utils-QXBWQHlM.js";
import "./button-CtEClRbA.js";
import "./menu-Bt53Wknu.js";
const __iconNode = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
];
const CalendarDays = createLucideIcon("calendar-days", __iconNode);
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
const platforms = [
  "Facebook",
  "Instagram",
  "LinkedIn",
  "TikTok",
  "X (Twitter)",
  "Threads"
];
const painPoints = [
  {
    icon: Clock,
    title: "You're managing 6 platforms manually",
    description: "Logging into Facebook, Instagram, LinkedIn, TikTok, X, and Threads separately. Copy-pasting content. Adjusting formats. One person can't keep up with 6 posting cadences."
  },
  {
    icon: CalendarDays,
    title: "Your content calendar is a spreadsheet",
    description: "Tracking what's posted, what's scheduled, and what's still a draft across multiple platforms in a Google Sheet. No visual timeline. No status tracking. Just chaos."
  },
  {
    icon: ChartColumn,
    title: "You can't see what's working",
    description: "Engagement data lives in 6 different dashboards. Comparing performance across platforms means exporting CSVs and building reports manually. Every. Single. Week."
  },
  {
    icon: Megaphone,
    title: "Ad campaigns are disconnected",
    description: "Organic content in one tool. Meta Ads in Business Suite. TikTok Ads in their dashboard. LinkedIn campaigns somewhere else. No unified view of paid + organic together."
  }
];
const capabilities = [
  {
    icon: CalendarDays,
    title: "Visual content calendar",
    description: "Week and month views with drag-and-drop scheduling. See every post across every platform in one timeline. Filter by platform, status, or post type."
  },
  {
    icon: Share2,
    title: "6-platform publishing",
    description: "Schedule and publish to Facebook, Instagram, LinkedIn, TikTok, X, and Threads from one place. Auto-format content for each platform's requirements."
  },
  {
    icon: Target,
    title: "Meta Ads dashboard",
    description: "Manage Facebook and Instagram ad campaigns with full drill-down: campaigns, ad sets, and individual ads. Targeting details, spend tracking, CTR, CPC, and CPL."
  },
  {
    icon: TrendingUp,
    title: "TikTok & LinkedIn Ads",
    description: "Same campaign management for TikTok and LinkedIn. Ad groups with targeting breakdowns, performance metrics, and date range presets from today to lifetime."
  },
  {
    icon: ChartColumn,
    title: "Engagement analytics",
    description: "Likes, comments, shares, and impressions -- all in one view. Track performance by platform, by post, by campaign. No more dashboard hopping."
  },
  {
    icon: Users,
    title: "AI-powered ad analysis",
    description: "Select any campaign and attach it to AI chat for instant analysis. Get recommendations on budget allocation, targeting refinements, and creative improvements."
  }
];
function HeroSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-pattern opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-[900px] px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", animate: "visible", variants: containerVariants, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tag-neo rounded-full bg-signature/10 border-signature mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-4 h-4 text-signature" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold text-signature uppercase tracking-wider", children: "Social Media" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-display font-display text-foreground mb-6", children: [
          "6 platforms.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-signature", children: "One command center." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto mb-8", children: "Schedule, publish, and analyze content across Facebook, Instagram, LinkedIn, TikTok, X, and Threads. Manage organic posts and paid campaigns from a single content calendar." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://app.ozzios.com/sign-up",
              className: "inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200",
              children: [
                "Unify your social media",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Organic + paid -- all platforms -- one calendar" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "flex flex-wrap justify-center gap-3 mt-4", children: platforms.map((platform) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "px-4 py-2 bg-card border-2 border-border rounded-lg text-sm font-medium text-foreground",
          children: platform
        },
        platform
      )) })
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4", children: "Social media at scale is unsustainable" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-xl mx-auto", children: "More platforms, more content, more ads -- but the same team. Something has to break." })
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
function SolutionShowcaseSection() {
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag-neo text-signature mb-6 inline-block", children: "How It Works" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-6", children: [
            "Plan. Schedule.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Publish. Measure."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 text-muted-foreground text-base leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The content planner gives you a bird's-eye view of your entire social presence. Week view for tactical planning, month view for strategic overview. Every post, every platform, every status -- visible at a glance." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-mint mt-0.5 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Week & month views" }),
                  " -- calendar grid with post cards showing platform, type, and status"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-mint mt-0.5 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Multi-page Facebook" }),
                  " -- manage multiple pages, fetch feeds, schedule posts, track engagement"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-mint mt-0.5 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Post types" }),
                  " -- image, video, and article support with platform-specific formatting"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-mint mt-0.5 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Activity sidebar" }),
                  " -- upcoming posts, drafts, and real-time page activity feed"
                ] })
              ] })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, x: 30 },
        animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 },
        transition: { duration: 0.7, delay: 0.2 },
        className: "relative",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-neo rounded-xl p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg text-foreground mb-6", children: "Ad campaign metrics" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [
            { label: "Impressions", value: "847,293", change: "+12.4%" },
            { label: "Clicks", value: "23,847", change: "+8.7%" },
            { label: "CTR", value: "2.81%", change: "+0.3%" },
            { label: "Cost per Click", value: "$0.42", change: "-$0.08" },
            { label: "Cost per Lead", value: "$3.18", change: "-$0.52" }
          ].map((metric) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center justify-between py-3 border-b border-border last:border-0",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: metric.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-foreground", children: metric.value }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-mint font-medium", children: metric.change })
                ] })
              ]
            },
            metric.label
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-xs text-muted-foreground text-center", children: "Meta + TikTok + LinkedIn combined -- last 30 days" })
        ] })
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4", children: "Organic and paid, finally unified" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-xl mx-auto", children: "Content scheduling, ad management, and analytics in one place. No more juggling 6 dashboards." })
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
        children: capabilities.map((capability) => {
          const Icon = capability.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              variants: itemVariants,
              className: "card-neo rounded-xl p-8 group",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-signature/10 flex items-center justify-center mb-5 group-hover:bg-signature/20 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6 text-signature" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg text-foreground mb-3", children: capability.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: capability.description })
              ]
            },
            capability.title
          );
        })
      }
    )
  ] }) });
}
function AdPlatformsSection() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const adPlatforms = [
    {
      name: "Meta Ads",
      description: "Facebook & Instagram campaigns",
      features: [
        "Campaign, ad set, and ad-level management",
        "Targeting: age, gender, locations, interests, behaviors",
        "Metrics: spend, impressions, clicks, CTR, CPC, CPM, leads, CPL",
        "16 date presets from today to lifetime"
      ]
    },
    {
      name: "TikTok Ads",
      description: "TikTok campaign management",
      features: [
        "Campaign and ad group structure",
        "TikTok-specific targeting and creatives",
        "Performance metrics with date range filtering",
        "Budget and spend tracking"
      ]
    },
    {
      name: "LinkedIn Ads",
      description: "LinkedIn campaign management",
      features: [
        "Job titles, company names, industries targeting",
        "Company sizes, skills, seniorities, degrees",
        "Schools, member groups targeting",
        "Full campaign performance analytics"
      ]
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        ref,
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.6 },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tag-neo text-signature mb-6 inline-block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-4 h-4" }),
            "Paid Advertising"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4", children: "Three ad platforms. One dashboard." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-xl mx-auto", children: "Manage Meta, TikTok, and LinkedIn ad campaigns without switching tabs." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        variants: containerVariants,
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        className: "grid md:grid-cols-3 gap-6",
        children: adPlatforms.map((platform) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            variants: itemVariants,
            className: "card-neo rounded-xl p-8",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-foreground mb-2", children: platform.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: platform.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: platform.features.map((feature, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm text-foreground/80", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-mint mt-0.5 shrink-0" }),
                feature
              ] }, i)) })
            ]
          },
          platform.name
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
          "Your social media,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "under control."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground mb-10 max-w-lg mx-auto", children: "Stop logging into 6 platforms. Start managing your entire social presence -- organic and paid -- from one calendar." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://app.ozzios.com/sign-up",
            className: "inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200",
            children: [
              "Get started free",
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
function SocialMediaView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PainPointsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SolutionShowcaseSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CapabilitiesSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AdPlatformsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
function SocialMediaPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LandingLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SocialMediaView, {}) });
}
export {
  SocialMediaPage as component
};
