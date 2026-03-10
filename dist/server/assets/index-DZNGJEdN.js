import { n as jsxRuntimeExports, a as reactExports } from "./worker-entry-CLCwO71W.js";
import { u as useAudience, b as audienceContent, A as AnimatePresence, C as ChevronDown, c as Menu, a as MessageSquare, F as FileText, X, L as LandingLayout } from "./LandingLayout-BbzH_Y3t.js";
import { B as Button } from "./button-R9GB7f-h.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { m as motion, A as ArrowRight } from "./proxy-wI6KZf5t.js";
import { P as Play } from "./play-C_IccGBi.js";
import { S as Star, a as Settings } from "./star-CBD98tTM.js";
import { H as Hash } from "./hash-l8u9mH09.js";
import { S as Search } from "./search-CrCxjhvY.js";
import { C as CircleCheck } from "./circle-check-BzKQZ__P.js";
import { c as createLucideIcon } from "./createLucideIcon-U9gqAy8t.js";
import { S as Sparkles } from "./sparkles-CI3FEs94.js";
import { S as Send } from "./send-BJplGCwy.js";
const __iconNode = [
  [
    "path",
    {
      d: "M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z",
      key: "1dfntj"
    }
  ],
  ["path", { d: "M15 3v5a1 1 0 0 0 1 1h5", key: "6s6qgf" }]
];
const StickyNote = createLucideIcon("sticky-note", __iconNode);
const getAgentMp4 = (agentName) => {
  const mp4Map = {
    "SEO Specialist": "/images/avatars/google-ozzi.mp4",
    "Data Analyst": "/images/avatars/firecrawl-ozzi.mp4",
    "Graphic Designer": "/images/avatars/openai-imagegen-ozzi.mp4",
    "Content Writer": "/images/avatars/wordpress-ozzi.mp4"
  };
  return mp4Map[agentName] || "/images/avatars/generic-ozzi-1.mp4";
};
const sidebarChannels = [
  { name: "general", starred: true, hasMessages: false },
  { name: "marketing-strategy", starred: true, hasMessages: true },
  { name: "seo-campaigns", starred: false, hasMessages: true },
  { name: "reports", starred: true, hasMessages: true },
  { name: "content-calendar", starred: false, hasMessages: false }
];
const sidebarTeam = [
  { name: "Jodi Elmore", isAgent: false, status: "online", image: "/images/generation-d33b25da-6a41-40c4-90f9-45ee86a2360e.png" },
  { name: "SEO Specialist", isAgent: true, status: "online", mp4: "/images/avatars/google-ozzi.mp4" },
  { name: "Data Analyst", isAgent: true, status: "online", mp4: "/images/avatars/firecrawl-ozzi.mp4" },
  { name: "Graphic Designer", isAgent: true, status: "online", mp4: "/images/avatars/openai-imagegen-ozzi.mp4" },
  { name: "Content Writer", isAgent: true, status: "online", mp4: "/images/avatars/wordpress-ozzi.mp4" }
];
const seoMessages = [
  {
    id: 1,
    user: "Jodi Elmore",
    avatar: "/images/generation-d33b25da-6a41-40c4-90f9-45ee86a2360e.png",
    isAgent: false,
    time: "9:15 AM",
    content: [
      { type: "mention", text: "@SEO Specialist" },
      { type: "text", text: " run a full site audit on clientsite.com and identify critical issues" }
    ]
  },
  {
    id: 2,
    user: "SEO Specialist",
    avatar: null,
    isAgent: true,
    agentColor: "emerald",
    time: "9:15 AM",
    content: [
      { type: "text", text: "Running technical SEO audit..." }
    ],
    typing: true
  },
  {
    id: 3,
    user: "SEO Specialist",
    avatar: null,
    isAgent: true,
    agentColor: "emerald",
    time: "9:16 AM",
    content: [
      { type: "text", text: "✅ Site Audit Complete — clientsite.com (847 pages crawled):" },
      { type: "metrics", items: [
        { label: "Health Score", value: "64/100", change: "" },
        { label: "Critical", value: "12", change: "" },
        { label: "Warnings", value: "47", change: "" },
        { label: "Indexed", value: "723", change: "" }
      ] },
      { type: "text", text: "🚨 Critical Issues Found:" },
      { type: "list", items: ["23 pages with duplicate title tags", "12 broken internal links (404s)", "8 pages missing meta descriptions", "3 redirect chains over 3 hops"] }
    ],
    reactions: [{ emoji: "👀", count: 2 }]
  },
  {
    id: 4,
    user: "Jodi Elmore",
    avatar: "/images/generation-d33b25da-6a41-40c4-90f9-45ee86a2360e.png",
    isAgent: false,
    time: "9:17 AM",
    content: [
      { type: "text", text: "Fix the broken links and redirect chains automatically. Also " },
      { type: "mention", text: "@SEO Specialist" },
      { type: "text", text: " generate optimized meta descriptions for those 8 pages" }
    ]
  },
  {
    id: 5,
    user: "SEO Specialist",
    avatar: null,
    isAgent: true,
    agentColor: "emerald",
    time: "9:17 AM",
    content: [
      { type: "text", text: "Connecting to WordPress..." }
    ],
    typing: true
  },
  {
    id: 6,
    user: "SEO Specialist",
    avatar: null,
    isAgent: true,
    agentColor: "emerald",
    time: "9:18 AM",
    content: [
      { type: "text", text: "✅ Fixes Applied to WordPress:" },
      { type: "actions", items: [
        { icon: "🔗", action: "Fixed 12 broken links", status: "success", detail: "Redirected to valid pages" },
        { icon: "↪️", action: "Simplified 3 redirect chains", status: "success", detail: "Now direct 301s" },
        { icon: "📝", action: "Generated 8 meta descriptions", status: "success", detail: "AI-optimized for CTR" }
      ] },
      { type: "code", content: 'Example meta generated:\n"Discover premium marketing solutions that drive 3x ROI. Trusted by 500+ businesses worldwide. Start free today."' }
    ],
    reactions: [{ emoji: "🚀", count: 3 }, { emoji: "✅", count: 2 }]
  },
  {
    id: 7,
    user: "Jodi Elmore",
    avatar: "/images/generation-d33b25da-6a41-40c4-90f9-45ee86a2360e.png",
    isAgent: false,
    time: "9:19 AM",
    content: [
      { type: "text", text: 'Now do keyword research for "AI marketing tools" and find low competition opportunities' }
    ]
  },
  {
    id: 8,
    user: "SEO Specialist",
    avatar: null,
    isAgent: true,
    agentColor: "emerald",
    time: "9:19 AM",
    content: [
      { type: "text", text: "✅ Keyword Opportunities Found (low KD, high intent):" },
      { type: "keywords", items: [
        { keyword: "ai marketing automation for small business", volume: "1.2K", difficulty: "23", intent: "Commercial" },
        { keyword: "best ai tools for digital marketing", volume: "2.4K", difficulty: "31", intent: "Commercial" },
        { keyword: "marketing ai assistant software", volume: "880", difficulty: "18", intent: "Transactional" },
        { keyword: "automated marketing campaign tools", volume: "1.8K", difficulty: "27", intent: "Commercial" }
      ] },
      { type: "text", text: '💡 Recommendation: Target "marketing ai assistant software" first — lowest difficulty with strong buyer intent.' }
    ],
    reactions: [{ emoji: "💎", count: 2 }, { emoji: "🎯", count: 1 }]
  }
];
const marketingMessages = [
  {
    id: 1,
    user: "Jodi Elmore",
    avatar: "/images/generation-d33b25da-6a41-40c4-90f9-45ee86a2360e.png",
    isAgent: false,
    time: "10:42 AM",
    content: [
      { type: "mention", text: "@Data Analyst" },
      { type: "text", text: " pull our Facebook Ads performance for Q4 campaigns" }
    ]
  },
  {
    id: 2,
    user: "Data Analyst",
    avatar: null,
    isAgent: true,
    agentColor: "emerald",
    time: "10:42 AM",
    content: [
      { type: "text", text: "Connected to Facebook Ads API. Here's your Q4 performance:" },
      { type: "metrics", items: [
        { label: "Spend", value: "$12.4K", change: "" },
        { label: "ROAS", value: "4.2x", change: "+18%" },
        { label: "Conversions", value: "847", change: "+32%" },
        { label: "CPA", value: "$14.63", change: "-22%" }
      ] },
      { type: "text", text: '⚠️ Ad Set "Retargeting - Cart Abandoners" underperforming (1.8x ROAS)' }
    ],
    reactions: [{ emoji: "📊", count: 1 }]
  },
  {
    id: 3,
    user: "Jodi Elmore",
    avatar: "/images/generation-d33b25da-6a41-40c4-90f9-45ee86a2360e.png",
    isAgent: false,
    time: "10:43 AM",
    content: [
      { type: "mention", text: "@Graphic Designer" },
      { type: "text", text: " generate 3 new video ads for the retargeting campaign - use testimonial style with motion graphics" }
    ]
  },
  {
    id: 4,
    user: "Graphic Designer",
    avatar: null,
    isAgent: true,
    agentColor: "violet",
    time: "10:43 AM",
    content: [
      { type: "text", text: "Generating video ads with AI..." }
    ],
    typing: true
  },
  {
    id: 5,
    user: "Graphic Designer",
    avatar: null,
    isAgent: true,
    agentColor: "violet",
    time: "10:44 AM",
    content: [
      { type: "text", text: "✅ Created 3 video variations (1080x1080, 15s each):" },
      { type: "videos", items: [
        { image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop&auto=format", duration: "0:15" },
        { image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop&auto=format", duration: "0:15" },
        { image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=200&h=200&fit=crop&auto=format", duration: "0:15" }
      ] }
    ],
    reactions: [{ emoji: "🎬", count: 2 }]
  },
  {
    id: 6,
    user: "Jodi Elmore",
    avatar: "/images/generation-d33b25da-6a41-40c4-90f9-45ee86a2360e.png",
    isAgent: false,
    time: "10:44 AM",
    content: [
      { type: "text", text: "Perfect! " },
      { type: "mention", text: "@Data Analyst" },
      { type: "text", text: " push these to Facebook - replace creatives in the retargeting ad set & update targeting to exclude purchasers from last 30 days" }
    ]
  },
  {
    id: 7,
    user: "Data Analyst",
    avatar: null,
    isAgent: true,
    agentColor: "emerald",
    time: "10:44 AM",
    content: [
      { type: "text", text: "Updating Facebook Ads Manager..." }
    ],
    typing: true
  },
  {
    id: 8,
    user: "Data Analyst",
    avatar: null,
    isAgent: true,
    agentColor: "emerald",
    time: "10:45 AM",
    content: [
      { type: "text", text: "✅ Facebook Ads Updated Live:" },
      { type: "actions", items: [
        { icon: "🎨", action: "Replaced 3 creatives", status: "success", detail: "Ad Set: Retargeting - Cart Abandoners" },
        { icon: "🎯", action: "Updated targeting", status: "success", detail: "Excluded: Purchasers (30 days)" },
        { icon: "💰", action: "Budget unchanged", status: "info", detail: "$150/day" }
      ] },
      { type: "text", text: "→ Changes are now live in Ads Manager" }
    ],
    reactions: [{ emoji: "🚀", count: 3 }, { emoji: "🔥", count: 2 }]
  },
  {
    id: 9,
    user: "Jodi Elmore",
    avatar: "/images/generation-d33b25da-6a41-40c4-90f9-45ee86a2360e.png",
    isAgent: false,
    time: "10:45 AM",
    content: [
      { type: "text", text: "Now " },
      { type: "mention", text: "@Content Writer" },
      { type: "text", text: " update our WordPress landing page headline to match the new campaign messaging. Also " },
      { type: "mention", text: "@Graphic Designer" },
      { type: "text", text: " generate a new hero image" }
    ]
  },
  {
    id: 10,
    user: "Content Writer",
    avatar: null,
    isAgent: true,
    agentColor: "amber",
    time: "10:46 AM",
    content: [
      { type: "text", text: "✅ WordPress Updated:" },
      { type: "code", content: 'Page: /landing-page\n- Headline: "Transform Your Marketing with AI"\n- Subhead: "Join 2,000+ businesses saving 20hrs/week"\n- Status: Published' },
      { type: "text", text: "→ Live at yoursite.com/landing-page" }
    ],
    reactions: [{ emoji: "✅", count: 1 }]
  },
  {
    id: 11,
    user: "Graphic Designer",
    avatar: null,
    isAgent: true,
    agentColor: "violet",
    time: "10:46 AM",
    content: [
      { type: "text", text: "✅ Hero image generated & uploaded to WordPress media library. Applied to landing page." },
      { type: "images", items: [
        { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop&auto=format", wide: true }
      ] }
    ],
    reactions: [{ emoji: "😍", count: 4 }, { emoji: "🎨", count: 2 }]
  }
];
const reportsMessages = [
  {
    id: 1,
    user: "Jodi Elmore",
    avatar: "/images/generation-d33b25da-6a41-40c4-90f9-45ee86a2360e.png",
    isAgent: false,
    time: "2:30 PM",
    content: [
      { type: "mention", text: "@Data Analyst" },
      { type: "text", text: " generate a full monthly performance report for the customer - include all channels, ROI breakdown, and recommendations" }
    ]
  },
  {
    id: 2,
    user: "Data Analyst",
    avatar: null,
    isAgent: true,
    agentColor: "emerald",
    time: "2:30 PM",
    content: [
      { type: "text", text: "Collecting data from connected platforms..." }
    ],
    typing: true
  },
  {
    id: 3,
    user: "Data Analyst",
    avatar: null,
    isAgent: true,
    agentColor: "emerald",
    time: "2:31 PM",
    content: [
      { type: "text", text: "✅ Data collected from 6 sources:" },
      { type: "actions", items: [
        { icon: "📊", action: "Google Analytics", status: "success", detail: "47K sessions" },
        { icon: "📈", action: "Facebook Ads", status: "success", detail: "$8.2K spend" },
        { icon: "🔍", action: "Google Ads", status: "success", detail: "$4.1K spend" },
        { icon: "📧", action: "Mailchimp", status: "success", detail: "12 campaigns" },
        { icon: "🛒", action: "Shopify", status: "success", detail: "$124K revenue" },
        { icon: "📱", action: "Instagram", status: "success", detail: "89K reach" }
      ] }
    ]
  },
  {
    id: 4,
    user: "Data Analyst",
    avatar: null,
    isAgent: true,
    agentColor: "emerald",
    time: "2:31 PM",
    content: [
      { type: "text", text: "Generating interactive React report..." }
    ],
    typing: true
  },
  {
    id: 5,
    user: "Data Analyst",
    avatar: null,
    isAgent: true,
    agentColor: "emerald",
    time: "2:32 PM",
    content: [
      { type: "text", text: "🚀 Building report website with React + Tailwind..." },
      { type: "code", content: "Creating components:\n→ ExecutiveSummary.tsx\n→ ChannelBreakdown.tsx\n→ ROIAnalysis.tsx\n→ RecommendationsPanel.tsx\n→ InteractiveCharts.tsx" }
    ]
  },
  {
    id: 6,
    user: "Data Analyst",
    avatar: null,
    isAgent: true,
    agentColor: "emerald",
    time: "2:33 PM",
    content: [
      { type: "text", text: "Deploying to E2B sandbox..." }
    ],
    typing: true
  },
  {
    id: 7,
    user: "Data Analyst",
    avatar: null,
    isAgent: true,
    agentColor: "emerald",
    time: "2:34 PM",
    content: [
      { type: "text", text: "✅ Monthly Performance Report Generated & Deployed!" },
      { type: "metrics", items: [
        { label: "Total Revenue", value: "$124,847", change: "+23%" },
        { label: "ROAS", value: "4.8x", change: "+31%" },
        { label: "New Customers", value: "1,247", change: "+18%" },
        { label: "CAC", value: "$9.87", change: "-15%" }
      ] },
      { type: "preview", url: "https://report-acme-dec2024.e2b.dev", title: "Service Hero - December 2024 Report", description: "Interactive performance dashboard with real-time analytics" },
      { type: "text", text: "⏱️ Time saved: ~40 hours of manual report building" }
    ],
    reactions: [{ emoji: "🤯", count: 5 }, { emoji: "🚀", count: 3 }, { emoji: "💰", count: 2 }]
  },
  {
    id: 8,
    user: "Jodi Elmore",
    avatar: "/images/generation-d33b25da-6a41-40c4-90f9-45ee86a2360e.png",
    isAgent: false,
    time: "2:35 PM",
    content: [
      { type: "text", text: "This is incredible! Can you add a competitor comparison section?" }
    ]
  },
  {
    id: 9,
    user: "Data Analyst",
    avatar: null,
    isAgent: true,
    agentColor: "emerald",
    time: "2:35 PM",
    content: [
      { type: "text", text: "✅ Added competitor analysis section to the report:" },
      { type: "actions", items: [
        { icon: "📊", action: "Competitor benchmarks added", status: "success", detail: "5 competitors analyzed" },
        { icon: "📈", action: "Market share chart", status: "success", detail: "Interactive visualization" },
        { icon: "🎯", action: "Gap analysis", status: "success", detail: "Opportunity highlights" }
      ] },
      { type: "text", text: "→ Report auto-updated at same URL" }
    ],
    reactions: [{ emoji: "⚡", count: 3 }]
  }
];
const channelMessages = {
  "marketing-strategy": marketingMessages,
  "seo-campaigns": seoMessages,
  "reports": reportsMessages
};
const enterpriseLogos = [
  { name: "Deloitte", width: "w-24" },
  { name: "McKinsey", width: "w-20" },
  { name: "Accenture", width: "w-24" },
  { name: "BCG", width: "w-16" },
  { name: "Bain", width: "w-16" },
  { name: "PwC", width: "w-14" },
  { name: "EY", width: "w-12" },
  { name: "KPMG", width: "w-16" }
];
function AnimatedBackground({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("absolute inset-0 overflow-hidden pointer-events-none", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        className: "absolute w-full h-[200%] opacity-[0.025] dark:opacity-[0.05]",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "pattern",
            {
              id: "premium-grid",
              width: "60",
              height: "60",
              patternUnits: "userSpaceOnUse",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  d: "M 60 0 L 0 0 0 60",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "1"
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "100%", height: "100%", fill: "url(#premium-grid)" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "absolute inset-x-0 top-0 w-full h-[100vh] max-h-[1000px] opacity-30 dark:opacity-40", viewBox: "0 0 100 100", preserveAspectRatio: "none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.path,
        {
          d: "M-10,50 Q25,30 50,50 T110,50",
          fill: "none",
          stroke: "url(#gradient1)",
          strokeWidth: "0.1",
          animate: {
            d: [
              "M-10,50 Q25,30 50,50 T110,50",
              "M-10,50 Q25,70 50,50 T110,50",
              "M-10,50 Q25,30 50,50 T110,50"
            ]
          },
          transition: { duration: 15, repeat: Infinity, ease: "easeInOut" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.path,
        {
          d: "M-10,60 Q35,40 60,60 T110,60",
          fill: "none",
          stroke: "url(#gradient2)",
          strokeWidth: "0.05",
          animate: {
            d: [
              "M-10,60 Q35,40 60,60 T110,60",
              "M-10,60 Q35,80 60,60 T110,60",
              "M-10,60 Q35,40 60,60 T110,60"
            ]
          },
          transition: { duration: 20, repeat: Infinity, ease: "easeInOut" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "gradient1", x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "hsl(var(--oz-signature))" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "transparent" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "gradient2", x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "currentColor" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "transparent" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: {
          scale: [1, 1.2, 1],
          opacity: [0.06, 0.1, 0.06]
        },
        transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        className: "absolute top-[-10%] right-[10%] w-[600px] h-[600px] rounded-full bg-signature blur-[120px]"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: {
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.06, 0.03],
          x: [0, -30, 0]
        },
        transition: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 },
        className: "absolute top-[20%] left-[-10%] w-[800px] h-[800px] rounded-full bg-foreground blur-[150px]"
      }
    )
  ] });
}
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  }
};
const messageVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
  }
};
function HeroSection() {
  const { audience, isBusinessOwner } = useAudience();
  const content = audienceContent[audience].hero;
  const [activeChannel, setActiveChannel] = reactExports.useState("marketing-strategy");
  const [visibleMessages, setVisibleMessages] = reactExports.useState([]);
  const [isTyping, setIsTyping] = reactExports.useState(false);
  const [streamingText, setStreamingText] = reactExports.useState({});
  const [streamingComplete, setStreamingComplete] = reactExports.useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = reactExports.useState(false);
  const [demoOpen, setDemoOpen] = reactExports.useState(false);
  const messagesEndRef = reactExports.useRef(null);
  const messagesContainerRef = reactExports.useRef(null);
  const animationRef = reactExports.useRef({ cancelled: false });
  const streamingRefs = reactExports.useRef({});
  const currentMessages = channelMessages[activeChannel] || marketingMessages;
  const activeChannels = sidebarChannels.filter((c) => c.hasMessages).map((c) => c.name);
  const getNextChannel = (currentChannel) => {
    const currentIndex = activeChannels.indexOf(currentChannel);
    const nextIndex = (currentIndex + 1) % activeChannels.length;
    return activeChannels[nextIndex];
  };
  const handleChannelChange = (channelName) => {
    if (!channelMessages[channelName]) return;
    if (channelName === activeChannel) return;
    switchToChannel(channelName);
  };
  const switchToChannel = (channelName) => {
    animationRef.current.cancelled = true;
    Object.values(streamingRefs.current).forEach((ref) => {
      ref.cancelled = true;
    });
    setVisibleMessages([]);
    setIsTyping(false);
    setStreamingText({});
    setStreamingComplete({});
    setActiveChannel(channelName);
    streamingRefs.current = {};
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = 0;
    }
  };
  const streamMessageText = async (messageId, fullText, controller) => {
    const chars = fullText.split("");
    let currentText = "";
    for (let i = 0; i < chars.length; i++) {
      if (controller.cancelled) return;
      currentText += chars[i];
      setStreamingText((prev) => ({ ...prev, [messageId]: currentText }));
      const char = chars[i];
      let delay;
      if (char === " " || char === "\n") {
        delay = 10;
      } else if ([".", "!", "?"].includes(char)) {
        delay = 150;
      } else if (char === ",") {
        delay = 80;
      } else if (char === ":") {
        delay = 100;
      } else {
        delay = 20 + Math.random() * 20;
      }
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
    if (!controller.cancelled) {
      setStreamingComplete((prev) => ({ ...prev, [messageId]: true }));
    }
  };
  reactExports.useEffect(() => {
    if (messagesEndRef.current && messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [visibleMessages, isTyping, streamingText]);
  reactExports.useEffect(() => {
    if (!demoOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setDemoOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [demoOpen]);
  reactExports.useEffect(() => {
    const controller = { cancelled: false };
    animationRef.current = controller;
    const showMessages = async () => {
      const messages = channelMessages[activeChannel] || marketingMessages;
      for (let i = 0; i < messages.length; i++) {
        if (controller.cancelled) return;
        const message = messages[i];
        const prevMessage = i > 0 ? messages[i - 1] : null;
        let delay;
        if (i === 0) {
          delay = 800;
        } else if (prevMessage?.isAgent) {
          delay = 400;
        } else {
          delay = 600;
        }
        await new Promise((resolve) => setTimeout(resolve, delay));
        if (controller.cancelled) return;
        if (message.typing) {
          setIsTyping(true);
          await new Promise((resolve) => setTimeout(resolve, 800));
          setIsTyping(false);
        }
        if (controller.cancelled) return;
        setVisibleMessages((prev) => [...prev, message.id]);
        if (message.isAgent && message.content.length > 0) {
          const textParts = message.content.filter((part) => part.type === "text" && part.text).map((part) => part.text).join("");
          if (textParts) {
            const streamController = { cancelled: false };
            streamingRefs.current[message.id] = streamController;
            await new Promise((resolve) => setTimeout(resolve, 200));
            if (controller.cancelled || streamController.cancelled) return;
            await streamMessageText(message.id, textParts, streamController);
            await new Promise((resolve) => setTimeout(resolve, 200));
          } else {
            setStreamingComplete((prev) => ({ ...prev, [message.id]: true }));
            await new Promise((resolve) => setTimeout(resolve, 400));
          }
        } else {
          setStreamingComplete((prev) => ({ ...prev, [message.id]: true }));
        }
      }
      if (!controller.cancelled) {
        await new Promise((resolve) => setTimeout(resolve, 4e3));
        if (!controller.cancelled) {
          const nextChannel = getNextChannel(activeChannel);
          switchToChannel(nextChannel);
        }
      }
    };
    const timer = setTimeout(showMessages, 600);
    return () => {
      controller.cancelled = true;
      Object.values(streamingRefs.current).forEach((ref) => {
        ref.cancelled = true;
      });
      clearTimeout(timer);
    };
  }, [activeChannel]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "hero",
      className: "relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-background",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedBackground, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 w-full mx-auto max-w-[1400px] px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: "hidden",
            animate: "visible",
            variants: containerVariants,
            className: "flex flex-col items-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted/30 border border-border/50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-signature animate-pulse" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium text-foreground tracking-widest uppercase", children: "Enterprise-Grade AI Marketing Platform" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "text-center max-w-5xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.h1,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -20 },
                  transition: { duration: 0.3 },
                  className: "text-[clamp(2.5rem,8vw,5.5rem)] font-display leading-[0.95] tracking-[-0.02em] text-foreground",
                  children: [
                    content.headline[0],
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-signature", children: content.headline[1] })
                  ]
                },
                audience
              ) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.p,
                {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -10 },
                  transition: { duration: 0.3, delay: 0.1 },
                  className: "mt-8 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl text-center font-light",
                  children: content.subheadline
                },
                `sub-${audience}`
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                  [
                    { name: "Google", logo: "/images/google-logo.svg" },
                    { name: "Facebook", logo: "/images/facebook-icon.svg" },
                    { name: "Shopify", logo: "/images/shopify-logo.webp" },
                    { name: "Stripe", logo: "/images/stripe-logo.webp" },
                    { name: "WordPress", logo: "/images/wordpress.webp" },
                    { name: "Google Ads", logo: "/images/google-ads-logo.webp" },
                    { name: "Gmail", logo: "/images/gmail-logo.webp" },
                    { name: "TikTok", logo: "/images/tiktok-logo.svg" }
                  ].map((integration, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "relative w-12 h-12 -ml-2.5 first:ml-0 rounded-full border-2 border-background bg-white dark:bg-muted overflow-hidden shadow-sm hover:z-10 hover:scale-110 transition-transform",
                      style: { zIndex: 8 - i },
                      title: integration.name,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: integration.logo,
                          alt: integration.name,
                          className: "w-full h-full object-contain p-2"
                        }
                      )
                    },
                    integration.name
                  )),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "relative w-12 h-12 -ml-2.5 rounded-full border-2 border-background bg-muted flex items-center justify-center shadow-sm",
                      style: { zIndex: 0 },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-muted-foreground", children: "+20" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Connects to the tools you already use" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  variants: itemVariants,
                  className: "mt-12 flex flex-col sm:flex-row items-center justify-center gap-4",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "lg",
                        asChild: true,
                        className: "h-12 px-6 text-sm font-medium gap-2 bg-signature text-white hover:bg-signature/90 rounded-md group",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://app.ozzios.com/sign-up", children: [
                          "Get Early Access",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: () => setDemoOpen(true),
                        className: "h-12 px-6 text-sm font-medium gap-2 text-foreground bg-muted/40 border border-border/50 hover:bg-muted/80 rounded-md inline-flex items-center transition-colors group",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-5 h-5 rounded-sm bg-foreground/10 group-hover:bg-foreground/20 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-2.5 w-2.5 text-foreground fill-current ml-0.5" }) }),
                          "Watch demo"
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  variants: itemVariants,
                  className: "mt-16 flex flex-wrap items-center justify-center gap-x-16 gap-y-8 border-y border-border/40 py-8 px-4",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -10 },
                      transition: { duration: 0.3, delay: 0.2 },
                      className: "flex flex-wrap items-center justify-center gap-x-12 gap-y-6",
                      children: content.stats.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl sm:text-3xl font-semibold text-foreground tracking-tight", children: stat.value }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground uppercase tracking-wider", children: stat.label })
                      ] }, stat.label))
                    },
                    `stats-${audience}`
                  ) })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  variants: itemVariants,
                  className: "mt-20 w-full max-w-5xl",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-xl border border-border/80 bg-background overflow-hidden shadow-2xl shadow-black/5 ring-1 ring-black/5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-4 py-2.5 border-b border-border/50 bg-muted/20", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-[#FF5F57]" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-[#FFBD2E]" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-[#28CA41]" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-4 py-1.5 rounded-lg bg-background border border-border", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-green-500/50" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground font-mono", children: "app.ozzios.com" })
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[3/4] sm:aspect-[4/3] md:aspect-[16/9] bg-muted/50 flex overflow-hidden", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex w-56 flex-col border-r border-border bg-background", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/service-hero-logo.jpg", alt: "Service Hero", className: "w-full h-full object-cover" }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] font-semibold text-foreground truncate", children: "Service Hero" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-green-500" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "Online" })
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5 text-muted-foreground" })
                        ] }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-hidden py-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3 h-3" }),
                            "Channels"
                          ] }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0.5 px-2", children: sidebarChannels.map((channel) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              onClick: () => channel.hasMessages && handleChannelChange(channel.name),
                              className: `flex items-center gap-2 px-2 py-1 rounded text-[11px] transition-all duration-200 ${channel.name === activeChannel ? "bg-signature/10 text-foreground" : channel.hasMessages ? "text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer" : "text-muted-foreground/50"}`,
                              children: [
                                channel.starred && /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3 text-signature fill-signature" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(Hash, { className: "w-3 h-3" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: channel.name }),
                                channel.hasMessages && channel.name !== activeChannel && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto w-1.5 h-1.5 rounded-full bg-signature/60" })
                              ]
                            },
                            channel.name
                          )) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 mt-4 mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3 h-3" }),
                            "Team"
                          ] }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0.5 px-2", children: sidebarTeam.map((member) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              className: "flex items-center gap-2 px-2 py-1 rounded text-[11px] text-muted-foreground hover:bg-muted",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                                  member.isAgent ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5 h-5 rounded-md overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "video",
                                    {
                                      src: getAgentMp4(member.name),
                                      autoPlay: true,
                                      loop: true,
                                      muted: true,
                                      playsInline: true,
                                      controlsList: "nodownload",
                                      disablePictureInPicture: true,
                                      onContextMenu: (e) => e.preventDefault(),
                                      className: "w-full h-full object-cover"
                                    }
                                  ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "img",
                                    {
                                      src: member.image,
                                      alt: member.name,
                                      className: "w-5 h-5 rounded-md object-cover"
                                    }
                                  ),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "div",
                                    {
                                      className: `absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border-2 border-background ${member.status === "online" ? "bg-green-500" : "bg-muted-foreground"}`
                                    }
                                  )
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: member.name }),
                                member.isAgent && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-[9px] px-1 py-0.5 rounded bg-signature/10 text-signature", children: "AI" })
                              ]
                            },
                            member.name
                          )) })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-w-0 min-h-0 overflow-hidden", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-between px-3 sm:px-4 py-2 border-b border-border bg-background", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "button",
                            {
                              onClick: () => setMobileMenuOpen(!mobileMenuOpen),
                              className: "flex md:hidden items-center gap-2 hover:bg-muted rounded-lg px-1.5 py-1 -ml-1.5 transition-colors",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-4 h-4 text-muted-foreground" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(Hash, { className: "w-3.5 h-3.5 text-muted-foreground" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] font-semibold text-foreground truncate max-w-[120px]", children: activeChannel }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `w-3 h-3 text-muted-foreground transition-transform ${mobileMenuOpen ? "rotate-180" : ""}` })
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 text-signature fill-signature" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Hash, { className: "w-4 h-4 text-muted-foreground" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-semibold text-foreground", children: activeChannel })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:flex items-center -space-x-2", children: [
                              sidebarTeam.slice(0, 3).map((member, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "div",
                                {
                                  className: "rounded-full overflow-visible",
                                  style: { zIndex: 3 - i },
                                  children: member.isAgent ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "video",
                                    {
                                      src: getAgentMp4(member.name),
                                      autoPlay: true,
                                      loop: true,
                                      muted: true,
                                      playsInline: true,
                                      controlsList: "nodownload",
                                      disablePictureInPicture: true,
                                      onContextMenu: (e) => e.preventDefault(),
                                      className: "w-full h-full object-cover"
                                    }
                                  ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: member.image, alt: "", className: "w-6 h-6 rounded-full object-cover" })
                                },
                                member.name
                              )),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-full border-2 border-background bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-muted-foreground", children: "+4" }) })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4 text-muted-foreground hidden sm:block" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "w-4 h-4 text-muted-foreground hidden sm:block" })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: mobileMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
                            motion.div,
                            {
                              initial: { opacity: 0, y: -10 },
                              animate: { opacity: 1, y: 0 },
                              exit: { opacity: 0, y: -10 },
                              transition: { duration: 0.15 },
                              className: "absolute top-full left-0 right-0 z-50 bg-background border-b border-border shadow-xl md:hidden",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 space-y-0.5", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-2 py-1.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider", children: "Channels" }),
                                sidebarChannels.map((channel) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                  "button",
                                  {
                                    onClick: () => {
                                      if (channel.hasMessages) {
                                        handleChannelChange(channel.name);
                                        setMobileMenuOpen(false);
                                      }
                                    },
                                    disabled: !channel.hasMessages,
                                    className: `w-full flex items-center gap-2 px-2 py-2 rounded-lg text-[12px] transition-all ${channel.name === activeChannel ? "bg-signature/10 text-foreground" : channel.hasMessages ? "text-muted-foreground hover:bg-muted hover:text-foreground" : "text-muted-foreground/50 cursor-not-allowed"}`,
                                    children: [
                                      channel.starred && /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 text-signature fill-signature" }),
                                      /* @__PURE__ */ jsxRuntimeExports.jsx(Hash, { className: "w-3.5 h-3.5" }),
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: channel.name }),
                                      channel.hasMessages && channel.name !== activeChannel && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto w-2 h-2 rounded-full bg-signature/60" }),
                                      channel.name === activeChannel && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-[9px] px-1.5 py-0.5 rounded bg-signature/10 text-signature", children: "Active" })
                                    ]
                                  },
                                  channel.name
                                ))
                              ] })
                            }
                          ) })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 px-4 py-2 border-b border-border bg-background", children: [
                          { icon: MessageSquare, label: "Messages", active: true },
                          { icon: CircleCheck, label: "Tasks", active: false },
                          { icon: FileText, label: "Files", active: false },
                          { icon: StickyNote, label: "Notes", active: false },
                          { icon: Sparkles, label: "Agent Creations", active: false }
                        ].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: `flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] ${tab.active ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"}`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(tab.icon, { className: "w-3.5 h-3.5" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: tab.label })
                            ]
                          },
                          tab.label
                        )) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: messagesContainerRef, className: "flex-1 min-h-0 overflow-y-auto overflow-x-hidden p-3 sm:p-4 space-y-4 scrollbar-hidden bg-background", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: currentMessages.filter((msg) => visibleMessages.includes(msg.id)).map((message) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            motion.div,
                            {
                              variants: messageVariants,
                              initial: "hidden",
                              animate: "visible",
                              className: "flex gap-2 sm:gap-3 min-w-0",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0", children: message.isAgent ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 sm:w-9 sm:h-9 rounded-lg overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "video",
                                  {
                                    src: getAgentMp4(message.user),
                                    autoPlay: true,
                                    loop: true,
                                    muted: true,
                                    playsInline: true,
                                    controlsList: "nodownload",
                                    disablePictureInPicture: true,
                                    onContextMenu: (e) => e.preventDefault(),
                                    className: "w-full h-full object-cover"
                                  }
                                ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "img",
                                  {
                                    src: message.avatar,
                                    alt: message.user,
                                    className: "w-7 h-7 sm:w-9 sm:h-9 rounded-lg object-cover"
                                  }
                                ) }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 overflow-hidden", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1 sm:gap-2 mb-1", children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] sm:text-[12px] font-semibold text-foreground truncate max-w-[100px] sm:max-w-none", children: message.user }),
                                    message.isAgent && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] sm:text-[9px] px-1 sm:px-1.5 py-0.5 rounded bg-signature/10 text-signature font-medium shrink-0", children: "AI" }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] sm:text-[10px] text-muted-foreground shrink-0", children: message.time })
                                  ] }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] sm:text-[12px] text-muted-foreground leading-relaxed break-words overflow-hidden", children: (() => {
                                    if (message.isAgent) {
                                      const isStreaming = !streamingComplete[message.id];
                                      const streamedText = streamingText[message.id] || "";
                                      const textParts = [];
                                      let currentPos = 0;
                                      message.content.forEach((part, idx) => {
                                        if (part.type === "text" && part.text) {
                                          textParts.push({
                                            index: idx,
                                            text: part.text,
                                            startPos: currentPos,
                                            endPos: currentPos + part.text.length
                                          });
                                          currentPos += part.text.length;
                                        }
                                      });
                                      return message.content.map((part, i) => {
                                        if (part.type === "text" && part.text) {
                                          const textPart = textParts.find((tp) => tp.index === i);
                                          if (!textPart) {
                                            return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: part.text }, i);
                                          }
                                          const partStart = textPart.startPos;
                                          const partEnd = textPart.endPos;
                                          let displayText = "";
                                          if (isStreaming && streamedText) {
                                            const streamedLength = streamedText.length;
                                            if (streamedLength > partStart) {
                                              const partStreamedLength = Math.min(streamedLength - partStart, part.text.length);
                                              displayText = part.text.substring(0, Math.max(0, partStreamedLength));
                                            }
                                          } else {
                                            displayText = part.text;
                                          }
                                          const showCursor = isStreaming && streamedText && streamedText.length > partStart && streamedText.length < partEnd;
                                          return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline", children: [
                                            displayText,
                                            showCursor && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                              "span",
                                              {
                                                className: "inline-block ml-0.5 align-middle text-muted-foreground",
                                                style: {
                                                  animation: "blink 1s ease-in-out infinite"
                                                },
                                                children: "▮"
                                              }
                                            )
                                          ] }, i);
                                        }
                                        if (part.type === "mention") {
                                          return /* @__PURE__ */ jsxRuntimeExports.jsx(
                                            "span",
                                            {
                                              className: "inline-flex items-center px-1.5 py-0.5 rounded bg-signature/10 text-signature font-medium",
                                              children: part.text
                                            },
                                            i
                                          );
                                        }
                                        if (part.type === "list" && "items" in part) {
                                          const shouldShow = !message.isAgent || streamingComplete[message.id];
                                          if (!shouldShow) return null;
                                          return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "my-2 space-y-1 ml-1", children: part.items.map((item, j) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-signature mt-1", children: "•" }),
                                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: item })
                                          ] }, j)) }, i);
                                        }
                                        if (part.type === "metrics" && "items" in part) {
                                          const shouldShow = !message.isAgent || streamingComplete[message.id];
                                          if (!shouldShow) return null;
                                          const items = part.items;
                                          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `my-2 grid gap-1.5 sm:gap-2 grid-cols-2 ${items.length === 4 ? "sm:grid-cols-4" : "sm:grid-cols-4 lg:grid-cols-5"}`, children: items.map((item, j) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                            "div",
                                            {
                                              className: "p-2 rounded-lg bg-muted/50 border border-border text-center",
                                              children: [
                                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mb-1", children: item.label }),
                                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] text-foreground font-semibold", children: item.value }),
                                                item.change && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                                  "div",
                                                  {
                                                    className: `text-[9px] mt-0.5 ${item.change.startsWith("+") ? "text-green-500" : item.change.startsWith("-") ? "text-green-500" : "text-muted-foreground"}`,
                                                    children: item.change
                                                  }
                                                )
                                              ]
                                            },
                                            j
                                          )) }, i);
                                        }
                                        if (part.type === "images" && "items" in part) {
                                          const shouldShow = !message.isAgent || streamingComplete[message.id];
                                          if (!shouldShow) return null;
                                          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-2 flex flex-wrap gap-2", children: part.items.map((item, j) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                            "div",
                                            {
                                              className: `relative ${item.wide ? "w-full sm:w-48 h-20 sm:h-24" : "w-16 sm:w-20 h-16 sm:h-20"} rounded-lg overflow-hidden group`,
                                              children: [
                                                item.image ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.image, alt: "Generated", className: "absolute inset-0 w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${item.color}` }),
                                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/20" }),
                                                item.placeholder && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 flex items-center justify-center text-[10px] font-medium text-white", children: item.placeholder }),
                                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" })
                                              ]
                                            },
                                            j
                                          )) }, i);
                                        }
                                        if (part.type === "videos" && "items" in part) {
                                          const shouldShow = !message.isAgent || streamingComplete[message.id];
                                          if (!shouldShow) return null;
                                          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-2 flex flex-wrap gap-2", children: part.items.map((item, j) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                            "div",
                                            {
                                              className: "relative w-16 sm:w-20 h-16 sm:h-20 rounded-lg overflow-hidden group cursor-pointer",
                                              children: [
                                                item.image ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.image, alt: "Video thumbnail", className: "absolute inset-0 w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${item.color}` }),
                                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/40" }),
                                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: [
                                                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full bg-white/90 flex items-center justify-center mb-1 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-black border-b-[6px] border-b-transparent ml-1" }) }),
                                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-medium text-white", children: item.duration })
                                                ] }),
                                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" })
                                              ]
                                            },
                                            j
                                          )) }, i);
                                        }
                                        if (part.type === "actions" && "items" in part) {
                                          const shouldShow = !message.isAgent || streamingComplete[message.id];
                                          if (!shouldShow) return null;
                                          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-2 space-y-1.5", children: part.items.map((item, j) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                            "div",
                                            {
                                              className: "flex flex-wrap items-center gap-1.5 sm:gap-2 p-2 rounded-lg bg-muted/50 border border-border",
                                              children: [
                                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px]", children: item.icon }),
                                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium text-[11px]", children: item.action }),
                                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline text-muted-foreground text-[10px]", children: "•" }),
                                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline text-muted-foreground text-[10px] truncate max-w-[150px]", children: item.detail }),
                                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `ml-auto text-[9px] px-1.5 py-0.5 rounded shrink-0 ${item.status === "success" ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"}`, children: item.status === "success" ? "✓ Done" : "Info" })
                                              ]
                                            },
                                            j
                                          )) }, i);
                                        }
                                        if (part.type === "keywords" && "items" in part) {
                                          const shouldShow = !message.isAgent || streamingComplete[message.id];
                                          if (!shouldShow) return null;
                                          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-2 space-y-1.5", children: part.items.map((item, j) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                            "div",
                                            {
                                              className: "flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 p-2 rounded-lg bg-muted/50 border border-border",
                                              children: [
                                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-foreground text-[11px] font-medium truncate", children: item.keyword }),
                                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
                                                    item.volume,
                                                    "/mo"
                                                  ] }),
                                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-[9px] px-1.5 py-0.5 rounded ${parseInt(item.difficulty) < 25 ? "bg-green-100 text-green-600" : parseInt(item.difficulty) < 40 ? "bg-yellow-100 text-yellow-600" : "bg-red-100 text-red-600"}`, children: [
                                                    "KD: ",
                                                    item.difficulty
                                                  ] }),
                                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] px-1.5 py-0.5 rounded bg-signature/10 text-signature", children: item.intent })
                                                ] })
                                              ]
                                            },
                                            j
                                          )) }, i);
                                        }
                                        if (part.type === "code" && "content" in part) {
                                          const shouldShow = !message.isAgent || streamingComplete[message.id];
                                          if (!shouldShow) return null;
                                          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-2 p-2 sm:p-3 rounded-lg bg-gray-900 border border-border font-mono text-[9px] sm:text-[10px] text-green-400 whitespace-pre-wrap break-all overflow-hidden", children: part.content }, i);
                                        }
                                        if (part.type === "preview" && "url" in part) {
                                          const shouldShow = !message.isAgent || streamingComplete[message.id];
                                          if (!shouldShow) return null;
                                          const previewData = part;
                                          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                            "a",
                                            {
                                              href: previewData.url,
                                              target: "_blank",
                                              rel: "noopener noreferrer",
                                              className: "block group rounded-xl overflow-hidden border border-border hover:border-border bg-background transition-all duration-300",
                                              children: [
                                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-3 bg-gradient-to-br from-muted/50 to-muted", children: [
                                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                                                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                                                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5 h-5 rounded overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/service-hero-logo.jpg", alt: "Service Hero", className: "w-full h-full object-cover" }) }),
                                                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-semibold text-foreground", children: "Service Hero Report" })
                                                    ] }),
                                                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 px-1.5 py-0.5 rounded bg-green-100 border border-green-200", children: [
                                                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-1 rounded-full bg-green-500 animate-pulse" }),
                                                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[7px] font-medium text-green-600", children: "LIVE" })
                                                    ] })
                                                  ] }),
                                                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-1.5 mb-3", children: [
                                                    { label: "Revenue", value: "$124K", color: "text-green-600" },
                                                    { label: "ROAS", value: "4.8x", color: "text-blue-600" },
                                                    { label: "Visitors", value: "47K", color: "text-violet-600" },
                                                    { label: "Conv.", value: "3.2%", color: "text-signature" }
                                                  ].map((metric) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-1.5 rounded bg-background border border-border", children: [
                                                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[6px] text-muted-foreground uppercase", children: metric.label }),
                                                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-[10px] font-semibold ${metric.color}`, children: metric.value })
                                                  ] }, metric.label)) }),
                                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 rounded bg-background border border-border mb-2", children: [
                                                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1.5", children: [
                                                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[7px] text-muted-foreground", children: "Revenue by Channel" }),
                                                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[6px] text-muted-foreground", children: "Last 30 days" })
                                                    ] }),
                                                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-1 h-8", children: [65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88, 72].map((height, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                                                      "div",
                                                      {
                                                        className: "flex-1 rounded-sm bg-gradient-to-t from-signature to-signature/60",
                                                        style: { height: `${height}%` }
                                                      },
                                                      idx
                                                    )) })
                                                  ] }),
                                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded bg-background border border-border overflow-hidden", children: [
                                                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 px-2 py-1 bg-muted/50 border-b border-border", children: [
                                                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[6px] text-muted-foreground uppercase", children: "Channel" }),
                                                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[6px] text-muted-foreground uppercase text-right", children: "Revenue" }),
                                                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[6px] text-muted-foreground uppercase text-right", children: "ROI" })
                                                    ] }),
                                                    [
                                                      { channel: "Facebook Ads", revenue: "$48.2K", roi: "+312%" },
                                                      { channel: "Google Ads", revenue: "$31.4K", roi: "+245%" },
                                                      { channel: "Email", revenue: "$28.1K", roi: "+890%" }
                                                    ].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 px-2 py-1 border-b border-border/50 last:border-0", children: [
                                                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[7px] text-muted-foreground", children: row.channel }),
                                                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[7px] text-foreground text-right font-medium", children: row.revenue }),
                                                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[7px] text-green-600 text-right", children: row.roi })
                                                    ] }, row.channel))
                                                  ] }),
                                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-2 right-2 flex items-center gap-1 px-1.5 py-0.5 rounded bg-background/80 backdrop-blur-sm border border-border", children: [
                                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[7px] text-muted-foreground", children: "Powered by" }),
                                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[7px] text-muted-foreground font-medium", children: "e2b.dev" })
                                                  ] })
                                                ] }),
                                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2.5 border-t border-border bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                                                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[11px] font-semibold text-foreground truncate group-hover:text-signature transition-colors", children: previewData.title }),
                                                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3 text-muted-foreground group-hover:text-signature group-hover:translate-x-0.5 transition-all" })
                                                  ] }),
                                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-muted-foreground mt-0.5 truncate", children: previewData.url })
                                                ] }) }) })
                                              ]
                                            }
                                          ) }, i);
                                        }
                                        return null;
                                      });
                                    }
                                    return message.content.map((part, i) => {
                                      if (part.type === "mention") {
                                        return /* @__PURE__ */ jsxRuntimeExports.jsx(
                                          "span",
                                          {
                                            className: "inline-flex items-center px-1.5 py-0.5 rounded bg-signature/10 text-signature font-medium",
                                            children: part.text
                                          },
                                          i
                                        );
                                      }
                                      if (part.type === "text" && part.text) {
                                        return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: part.text }, i);
                                      }
                                      return null;
                                    });
                                  })() }),
                                  message.reactions && (!message.isAgent || streamingComplete[message.id]) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 mt-2", children: message.reactions.map((reaction, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                    "div",
                                    {
                                      className: "flex items-center gap-1 px-2 py-0.5 rounded-full bg-muted border border-border",
                                      children: [
                                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px]", children: reaction.emoji }),
                                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: reaction.count })
                                      ]
                                    },
                                    i
                                  )) })
                                ] })
                              ]
                            },
                            message.id
                          )) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isTyping && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            motion.div,
                            {
                              initial: { opacity: 0, y: 10 },
                              animate: { opacity: 1, y: 0 },
                              exit: { opacity: 0, y: -10 },
                              className: "flex items-center gap-2 text-[11px] text-muted-foreground",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce", style: { animationDelay: "0ms" } }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce", style: { animationDelay: "150ms" } }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce", style: { animationDelay: "300ms" } })
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "AI Agent is typing..." })
                              ]
                            }
                          ) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: messagesEndRef })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 pt-3 pb-2 border-t border-border bg-background", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mb-2 overflow-x-auto scrollbar-hidden", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground shrink-0", children: "Try:" }),
                            (activeChannel === "seo-campaigns" ? [
                              { label: "Run site audit", icon: "🔍", prompt: "@SEO Specialist run a technical audit on our website" },
                              { label: "Find keywords", icon: "🎯", prompt: "@SEO Specialist find low competition keywords for our niche" },
                              { label: "Check rankings", icon: "📊", prompt: "@SEO Specialist show me our current keyword rankings" },
                              { label: "Fix errors", icon: "🔧", prompt: "@SEO Specialist fix the critical SEO issues you found" }
                            ] : activeChannel === "reports" ? [
                              { label: "Monthly report", icon: "📊", prompt: "@Data Analyst generate a full monthly performance report" },
                              { label: "ROI analysis", icon: "💰", prompt: "@Data Analyst create an ROI breakdown report by channel" },
                              { label: "Competitor report", icon: "🎯", prompt: "@Data Analyst generate a competitor analysis report" },
                              { label: "Customer dashboard", icon: "📈", prompt: "@Data Analyst build an interactive customer performance dashboard" }
                            ] : [
                              { label: "Check ad performance", icon: "📈", prompt: "@Data Analyst pull our Facebook Ads metrics for this week" },
                              { label: "Generate video ads", icon: "🎬", prompt: "@Graphic Designer create 3 new video ads for retargeting" },
                              { label: "Update WordPress", icon: "🌐", prompt: "@Content Writer update the landing page headline and copy" },
                              { label: "Analyze ROI", icon: "💰", prompt: "@Data Analyst show me the ROI breakdown by campaign" }
                            ]).map((chip) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "button",
                              {
                                onClick: () => handleChannelChange(activeChannel),
                                className: "group flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-muted/50 border border-border hover:bg-muted hover:border-border transition-all duration-200 shrink-0",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px]", children: chip.icon }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground group-hover:text-foreground whitespace-nowrap", children: chip.label })
                                ]
                              },
                              chip.label
                            ))
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 border border-border", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-muted-foreground", children: [
                              "Message #",
                              activeChannel
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-2", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5 h-5 rounded bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "@" }) }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4 text-muted-foreground/50" })
                            ] })
                          ] })
                        ] })
                      ] })
                    ] })
                  ] }) })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  variants: itemVariants,
                  className: "mt-20 w-full",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.25em] mb-10", children: [
                      "Trusted by leading ",
                      isBusinessOwner ? "businesses" : "companies",
                      " worldwide"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.div,
                        {
                          className: "flex items-center gap-16",
                          animate: { x: ["0%", "-50%"] },
                          transition: {
                            x: {
                              repeat: Infinity,
                              repeatType: "loop",
                              duration: 30,
                              ease: "linear"
                            }
                          },
                          children: [...enterpriseLogos, ...enterpriseLogos].map((logo, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: `${logo.width} shrink-0 flex items-center justify-center`,
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-muted-foreground/50 tracking-wide whitespace-nowrap", children: logo.name })
                            },
                            `${logo.name}-${i}`
                          ))
                        }
                      )
                    ] })
                  ]
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: demoOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.2 },
            className: "fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0 bg-black/85 backdrop-blur-sm",
                  onClick: () => setDemoOpen(false)
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { scale: 0.95, opacity: 0 },
                  animate: { scale: 1, opacity: 1 },
                  exit: { scale: 0.95, opacity: 0 },
                  transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] },
                  className: "relative z-10 w-full max-w-5xl",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: () => setDemoOpen(false),
                        className: "absolute -top-10 right-0 text-white/60 hover:text-white transition-colors inline-flex items-center gap-1.5 text-sm",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
                          "Close"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "video",
                      {
                        src: "/images/demo-video-1.mp4",
                        controls: true,
                        autoPlay: true,
                        playsInline: true,
                        className: "w-full rounded-xl shadow-2xl ring-1 ring-white/10"
                      }
                    )
                  ]
                }
              )
            ]
          }
        ) })
      ]
    }
  );
}
function LazySection({
  component: Component,
  rootMargin = "200px",
  fallback = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { minHeight: 200 } })
}) {
  const ref = reactExports.useRef(null);
  const [isVisible, setIsVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, children: isVisible ? /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Component, {}) }) : fallback });
}
const BentoSection = reactExports.lazy(
  () => import("./BentoSection-DnEbBCXT.js").then((m) => ({ default: m.BentoSection }))
);
const FeaturesShowcaseSection = reactExports.lazy(
  () => import("./FeaturesShowcaseSection-D0QBKmGY.js").then((m) => ({
    default: m.FeaturesShowcaseSection
  }))
);
const SavingsCalculatorSection = reactExports.lazy(
  () => import("./SavingsCalculatorSection-Br7RnxlD.js").then((m) => ({
    default: m.SavingsCalculatorSection
  }))
);
const FeaturesSection = reactExports.lazy(
  () => import("./HowItWorksSection--e95RSkq.js").then((m) => ({ default: m.FeaturesSection }))
);
const AgentsSection = reactExports.lazy(
  () => import("./AgentsSection-DP6rJYzS.js").then((m) => ({ default: m.AgentsSection }))
);
const MemorySection = reactExports.lazy(
  () => import("./MemorySection-D741WP8R.js").then((m) => ({ default: m.MemorySection }))
);
const PricingSection = reactExports.lazy(
  () => import("./PricingSection-Ds6rPAuH.js").then((m) => ({ default: m.PricingSection }))
);
const IntegrationsSection = reactExports.lazy(
  () => import("./IntegrationsSection-BEM0UwgZ.js").then((m) => ({
    default: m.IntegrationsSection
  }))
);
const TestimonialsSection = reactExports.lazy(
  () => import("./TestimonialsSection-DvEzC5nu.js").then((m) => ({
    default: m.TestimonialsSection
  }))
);
const FAQSection = reactExports.lazy(
  () => import("./FAQSection-DS0JRnSe.js").then((m) => ({ default: m.FAQSection }))
);
const CTASection = reactExports.lazy(
  () => import("./CTASection-SxC1GyYb.js").then((m) => ({ default: m.CTASection }))
);
function LandingHomeView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LazySection, { component: BentoSection }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LazySection, { component: FeaturesShowcaseSection }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LazySection, { component: SavingsCalculatorSection }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LazySection, { component: FeaturesSection }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LazySection, { component: AgentsSection }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LazySection, { component: MemorySection }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LazySection, { component: PricingSection }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LazySection, { component: IntegrationsSection }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LazySection, { component: TestimonialsSection }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LazySection, { component: FAQSection }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LazySection, { component: CTASection })
  ] });
}
function HomePage() {
  reactExports.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://ozzios-widget.garrett-b4a.workers.dev/loader.js?key=wgt_984c617ef77d7cde1d6c96436945fbaf654aa91748c7b628";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LandingLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(LandingHomeView, {}) });
}
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  component: HomePage
}, Symbol.toStringTag, { value: "Module" }));
export {
  AnimatedBackground as A,
  index as i
};
