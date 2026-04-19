import { j as jsxRuntimeExports, m as motion, r as reactExports, A as AnimatePresence } from "./vendor-framer-DZFBeC81.js";
import { u as useAudience, a as audienceContent, L as LandingLayout } from "./LandingLayout-CPC6VFbg.js";
import { c as cn, B as Button } from "./button-DuL_ysbl.js";
import { A as ArrowRight, o as Play, e as ChevronDown, p as Star, q as Hash, r as Menu, f as Search, s as Settings, h as MessageSquare, C as CircleCheck, t as FileText, u as StickyNote, j as Sparkles, g as Send, X } from "./vendor-icons-RMyvaHp0.js";
import { L as LazySection } from "./lazy-section-B65XiZaR.js";
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
  { name: "lead-follow-up", starred: true, hasMessages: true },
  { name: "reviews-seo", starred: false, hasMessages: true },
  { name: "reports", starred: true, hasMessages: true },
  { name: "scheduling", starred: false, hasMessages: false }
];
const sidebarTeam = [
  { name: "Jodi Elmore", isAgent: false, status: "online", image: "/images/generation-d33b25da-6a41-40c4-90f9-45ee86a2360e.png" },
  { name: "SEO Specialist", isAgent: true, status: "online", mp4: "/images/avatars/google-ozzi.mp4" },
  { name: "Data Analyst", isAgent: true, status: "online", mp4: "/images/avatars/firecrawl-ozzi.mp4" },
  { name: "Graphic Designer", isAgent: true, status: "online", mp4: "/images/avatars/openai-imagegen-ozzi.mp4" },
  { name: "Content Writer", isAgent: true, status: "online", mp4: "/images/avatars/wordpress-ozzi.mp4" }
];
const leadFollowUpMessages = [
  {
    id: 1,
    user: "Jodi Elmore",
    avatar: "/images/generation-d33b25da-6a41-40c4-90f9-45ee86a2360e.png",
    isAgent: false,
    time: "8:15 AM",
    content: [
      { type: "mention", text: "@Data Analyst" },
      { type: "text", text: " pull all missed calls and unsold estimates from the last 7 days — I want to see what we're leaving on the table" }
    ]
  },
  {
    id: 2,
    user: "Data Analyst",
    avatar: null,
    isAgent: true,
    agentColor: "emerald",
    time: "8:15 AM",
    content: [
      { type: "text", text: "Pulling data from your CRM and phone system..." }
    ],
    typing: true
  },
  {
    id: 3,
    user: "Data Analyst",
    avatar: null,
    isAgent: true,
    agentColor: "emerald",
    time: "8:16 AM",
    content: [
      { type: "text", text: "⚠️ Here's what slipped through the cracks this week:" },
      { type: "metrics", items: [
        { label: "Missed Calls", value: "23", change: "" },
        { label: "Unsold Estimates", value: "14", change: "" },
        { label: "No-Shows", value: "6", change: "" },
        { label: "Est. Lost Revenue", value: "$18.4K", change: "" }
      ] },
      { type: "text", text: "🔥 Top missed opportunities:" },
      { type: "list", items: ["$4,200 HVAC install — estimate sent, no follow-up in 5 days", "$2,800 water heater replacement — missed call, never called back", "$1,900 duct cleaning — customer asked for callback, still waiting", "8 missed calls from Google Ads — zero follow-up"] }
    ],
    reactions: [{ emoji: "😬", count: 2 }]
  },
  {
    id: 4,
    user: "Jodi Elmore",
    avatar: "/images/generation-d33b25da-6a41-40c4-90f9-45ee86a2360e.png",
    isAgent: false,
    time: "8:17 AM",
    content: [
      { type: "text", text: "That's brutal. " },
      { type: "mention", text: "@Content Writer" },
      { type: "text", text: " send follow-up texts to every missed call and unsold estimate. Personalize each one based on the service they needed" }
    ]
  },
  {
    id: 5,
    user: "Content Writer",
    avatar: null,
    isAgent: true,
    agentColor: "amber",
    time: "8:17 AM",
    content: [
      { type: "text", text: "Drafting personalized follow-ups..." }
    ],
    typing: true
  },
  {
    id: 6,
    user: "Content Writer",
    avatar: null,
    isAgent: true,
    agentColor: "amber",
    time: "8:18 AM",
    content: [
      { type: "text", text: "✅ Follow-ups sent to 37 contacts:" },
      { type: "actions", items: [
        { icon: "📱", action: "23 missed call texts sent", status: "success", detail: '"Hi [name], sorry we missed you..."' },
        { icon: "💰", action: "14 estimate follow-ups sent", status: "success", detail: "Personalized per service type" },
        { icon: "📋", action: "Auto-scheduled callbacks", status: "success", detail: "6 no-shows rebooked for this week" }
      ] },
      { type: "code", content: 'Example text sent:\n"Hi Mike, this is Service Hero. We missed your call about the AC repair yesterday. We have a tech available tomorrow morning — want us to come take a look? Reply YES to confirm."' }
    ],
    reactions: [{ emoji: "🚀", count: 3 }, { emoji: "💪", count: 2 }]
  },
  {
    id: 7,
    user: "Jodi Elmore",
    avatar: "/images/generation-d33b25da-6a41-40c4-90f9-45ee86a2360e.png",
    isAgent: false,
    time: "8:19 AM",
    content: [
      { type: "text", text: "Set this up to run automatically every morning at 8am — I never want to miss another lead again" }
    ]
  },
  {
    id: 8,
    user: "Content Writer",
    avatar: null,
    isAgent: true,
    agentColor: "amber",
    time: "8:19 AM",
    content: [
      { type: "text", text: "✅ Automated workflow created:" },
      { type: "actions", items: [
        { icon: "⏰", action: "Daily 8:00 AM trigger set", status: "success", detail: "Runs every morning automatically" },
        { icon: "📱", action: "Auto-text missed calls", status: "success", detail: "Within 5 min of missed call" },
        { icon: "💰", action: "Estimate follow-up at 48hrs", status: "success", detail: "Then again at 5 days" },
        { icon: "📊", action: "Weekly summary to you", status: "success", detail: "Every Monday at 7 AM" }
      ] },
      { type: "text", text: "→ You'll never manually chase a lead again. I'll handle it." }
    ],
    reactions: [{ emoji: "🔥", count: 4 }, { emoji: "🤖", count: 2 }]
  }
];
const reviewsSeoMessages = [
  {
    id: 1,
    user: "Jodi Elmore",
    avatar: "/images/generation-d33b25da-6a41-40c4-90f9-45ee86a2360e.png",
    isAgent: false,
    time: "9:30 AM",
    content: [
      { type: "mention", text: "@SEO Specialist" },
      { type: "text", text: " check our Google reviews — any new ones that need responses? Also how are we ranking locally?" }
    ]
  },
  {
    id: 2,
    user: "SEO Specialist",
    avatar: null,
    isAgent: true,
    agentColor: "emerald",
    time: "9:30 AM",
    content: [
      { type: "text", text: "Checking Google Business Profile..." }
    ],
    typing: true
  },
  {
    id: 3,
    user: "SEO Specialist",
    avatar: null,
    isAgent: true,
    agentColor: "emerald",
    time: "9:31 AM",
    content: [
      { type: "text", text: "📊 Google Business Profile Summary:" },
      { type: "metrics", items: [
        { label: "Rating", value: "4.7★", change: "+0.1" },
        { label: "New Reviews", value: "8", change: "This week" },
        { label: "Unanswered", value: "5", change: "" },
        { label: "Map Pack Rank", value: "#2", change: "+1 spot" }
      ] },
      { type: "text", text: "⚠️ 5 reviews need responses (3 are 5-star, 1 is 4-star, 1 is 2-star):" },
      { type: "list", items: ['⭐⭐⭐⭐⭐ "Best HVAC service in town. Mike was amazing!" — Sarah T.', '⭐⭐⭐⭐⭐ "Fixed our AC same day. Very professional." — James R.', '⭐⭐⭐⭐⭐ "Fair price, great work on our furnace." — Linda M.', '⭐⭐⭐⭐ "Good service but arrived 30 min late." — Dave K.', '⭐⭐ "Quoted $800 for a simple repair. Too expensive." — Chris P.'] }
    ],
    reactions: [{ emoji: "👀", count: 1 }]
  },
  {
    id: 4,
    user: "Jodi Elmore",
    avatar: "/images/generation-d33b25da-6a41-40c4-90f9-45ee86a2360e.png",
    isAgent: false,
    time: "9:32 AM",
    content: [
      { type: "text", text: "Draft responses for all 5. Be professional on the negative one — acknowledge the concern and offer to make it right" }
    ]
  },
  {
    id: 5,
    user: "SEO Specialist",
    avatar: null,
    isAgent: true,
    agentColor: "emerald",
    time: "9:32 AM",
    content: [
      { type: "text", text: "Writing personalized responses..." }
    ],
    typing: true
  },
  {
    id: 6,
    user: "SEO Specialist",
    avatar: null,
    isAgent: true,
    agentColor: "emerald",
    time: "9:33 AM",
    content: [
      { type: "text", text: "✅ All 5 review responses drafted and posted:" },
      { type: "actions", items: [
        { icon: "⭐", action: "3 five-star responses posted", status: "success", detail: "Thanked by name, mentioned service" },
        { icon: "👍", action: "1 four-star response posted", status: "success", detail: "Apologized for delay, offered priority next time" },
        { icon: "🤝", action: "1 two-star response posted", status: "success", detail: "Offered free re-evaluation" }
      ] },
      { type: "code", content: `2-star response posted:
"Hi Chris, thank you for your feedback. We understand pricing concerns — our quotes include a 2-year warranty on all parts and labor. We'd love to offer you a free second look. Please call us at (555) 123-4567 and ask for Jodi. — Service Hero Team"` }
    ],
    reactions: [{ emoji: "✅", count: 2 }, { emoji: "👏", count: 3 }]
  },
  {
    id: 7,
    user: "Jodi Elmore",
    avatar: "/images/generation-d33b25da-6a41-40c4-90f9-45ee86a2360e.png",
    isAgent: false,
    time: "9:34 AM",
    content: [
      { type: "text", text: "Now send review request texts to last week's completed jobs — the ones that haven't left a review yet" }
    ]
  },
  {
    id: 8,
    user: "SEO Specialist",
    avatar: null,
    isAgent: true,
    agentColor: "emerald",
    time: "9:34 AM",
    content: [
      { type: "text", text: "✅ Review requests sent:" },
      { type: "actions", items: [
        { icon: "📱", action: "18 review request texts sent", status: "success", detail: "Completed jobs with no review" },
        { icon: "🔗", action: "Direct Google review link", status: "success", detail: "One-tap to leave review" },
        { icon: "📊", action: "Avg response rate: 34%", status: "info", detail: "Expect ~6 new reviews" }
      ] },
      { type: "text", text: "→ At this rate, you'll hit 200 reviews by end of month. That'll push you to #1 in the Map Pack." }
    ],
    reactions: [{ emoji: "🚀", count: 3 }, { emoji: "⭐", count: 2 }]
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
      { type: "text", text: " build me a monthly performance report — I need to see revenue by service type, close rates, and where our leads are coming from" }
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
      { type: "text", text: "Pulling data from your CRM, Google Ads, and phone system..." }
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
      { type: "text", text: "✅ Data collected from all sources:" },
      { type: "actions", items: [
        { icon: "📊", action: "CRM & job history", status: "success", detail: "142 jobs completed" },
        { icon: "📞", action: "Call tracking", status: "success", detail: "287 inbound calls" },
        { icon: "📈", action: "Google Ads", status: "success", detail: "$3.2K spend" },
        { icon: "🔍", action: "Google Business Profile", status: "success", detail: "4,200 profile views" },
        { icon: "📱", action: "Facebook Ads", status: "success", detail: "$1.8K spend" },
        { icon: "🌐", action: "Website analytics", status: "success", detail: "2,100 visitors" }
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
      { type: "text", text: "Building your interactive dashboard..." }
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
      { type: "text", text: "🚀 Building report with React + Tailwind..." },
      { type: "code", content: "Creating components:\n→ RevenueByService.tsx\n→ LeadSourceBreakdown.tsx\n→ CloseRateTracker.tsx\n→ TechPerformance.tsx\n→ AdSpendROI.tsx" }
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
      { type: "text", text: "Building your app..." }
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
      { type: "text", text: "✅ Monthly Performance Report Ready!" },
      { type: "metrics", items: [
        { label: "Revenue", value: "$87,400", change: "+18%" },
        { label: "Jobs Completed", value: "142", change: "+12%" },
        { label: "Avg Ticket", value: "$615", change: "+8%" },
        { label: "Close Rate", value: "64%", change: "+5%" }
      ] },
      { type: "preview", url: "https://report-servicehero-jan2025.e2b.dev", title: "Service Hero — January 2025 Report", description: "Revenue by service, lead sources, tech performance & ad ROI" },
      { type: "text", text: "💡 Key insight: Google Ads drove 47% of booked jobs at $38/lead. Facebook was $67/lead — consider shifting $500/mo from FB to Google." }
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
      { type: "text", text: "Add a section showing revenue by tech — I want to see who's selling the most maintenance agreements" }
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
      { type: "text", text: "✅ Tech performance section added:" },
      { type: "actions", items: [
        { icon: "👨‍🔧", action: "Revenue per technician", status: "success", detail: "Mike leads at $24.2K" },
        { icon: "📋", action: "Maintenance agreements sold", status: "success", detail: "28 new this month" },
        { icon: "📊", action: "Upsell rate by tech", status: "success", detail: "Range: 18% to 42%" }
      ] },
      { type: "text", text: "→ Report updated. Mike sold 12 agreements, Tony sold 9. Consider having Mike train the team on his approach." }
    ],
    reactions: [{ emoji: "⚡", count: 3 }]
  }
];
const channelMessages = {
  "lead-follow-up": leadFollowUpMessages,
  "reviews-seo": reviewsSeoMessages,
  "reports": reportsMessages
};
const enterpriseLogos = [
  { name: "Housecall Pro", width: "w-28", logo: "/images/logos/housecall-pro-logo.webp" },
  { name: "ServiceTitan", width: "w-28", logo: "/images/logos/servicetitan-logo.webp" },
  { name: "Jobber", width: "w-24", logo: "/images/logos/jobber-logo.png" },
  { name: "Google", width: "w-24", logo: "/images/logos/google-logo.svg" },
  { name: "Google Ads", width: "w-24", logo: "/images/logos/google-ads-logo.webp" },
  { name: "Facebook", width: "w-24", logo: "/images/logos/facebook-icon.svg" },
  { name: "Stripe", width: "w-20", logo: "/images/logos/stripe-logo.svg" },
  { name: "WordPress", width: "w-24", logo: "/images/logos/wordpress.webp" },
  { name: "Shopify", width: "w-24", logo: "/images/logos/shopify-logo.webp" },
  { name: "YouTube", width: "w-24", logo: "/images/logos/youtube-logo.webp" },
  { name: "Zapier", width: "w-20", logo: "/images/logos/zapier-logo.svg" },
  { name: "Gmail", width: "w-20", logo: "/images/logos/gmail-logo.webp" },
  { name: "HubSpot", width: "w-24", logo: "/images/logos/hubspot-logo.png" },
  { name: "Twilio", width: "w-24", logo: "/images/logos/twilio-logo.webp" },
  { name: "Anthropic", width: "w-24", logo: "/images/logos/anthropic-logo.svg" },
  { name: "OpenAI", width: "w-20", logo: "/images/logos/openai-logo.webp" },
  { name: "ElevenLabs", width: "w-24", logo: "/images/logos/elevenlabs-logo.webp" },
  { name: "TikTok", width: "w-20", logo: "/images/logos/tiktok-logo.svg" },
  { name: "Thumbtack", width: "w-24", logo: "/images/logos/thumbtack-logo.png" },
  { name: "Yelp", width: "w-20", logo: "/images/logos/yelp-logo.webp" },
  { name: "Angi", width: "w-20", logo: "/images/logos/angieslist-logo.png" },
  { name: "CallRail", width: "w-24", logo: "/images/logos/callrail-logo.webp" },
  { name: "Modernize", width: "w-24", logo: "/images/logos/modernize-logo.webp" },
  { name: "FieldPulse", width: "w-24", logo: "/images/logos/fieldpulse-logo.avif" },
  { name: "Klaviyo", width: "w-20", logo: "/images/logos/klaviyo-logo.png" },
  { name: "Mailchimp", width: "w-24", logo: "/images/logos/mailchimp-logo.jpeg" },
  { name: "Resend", width: "w-20", logo: "/images/logos/resend-logo.svg" },
  { name: "Wix", width: "w-16", logo: "/images/logos/wix-logo.webp" }
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
const heroIntegrations = [
  { name: "Google", logo: "/images/google-logo.svg" },
  { name: "Facebook", logo: "/images/facebook-icon.svg" },
  { name: "Shopify", logo: "/images/shopify-logo.webp" },
  { name: "Stripe", logo: "/images/stripe-logo.webp" },
  { name: "WordPress", logo: "/images/wordpress.webp" },
  { name: "Google Ads", logo: "/images/google-ads-logo.webp" },
  { name: "Gmail", logo: "/images/gmail-logo.webp" },
  { name: "TikTok", logo: "/images/tiktok-logo.svg" }
];
function HeroSection() {
  const { audience, isBusinessOwner } = useAudience();
  const content = audienceContent[audience].hero;
  const [activeChannel, setActiveChannel] = reactExports.useState("lead-follow-up");
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
  const currentMessages = channelMessages[activeChannel] || leadFollowUpMessages;
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
      const messages = channelMessages[activeChannel] || leadFollowUpMessages;
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
      className: "relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-background",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedBackground, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 top-24 z-[1] h-[34rem] bg-[radial-gradient(circle_at_top,rgba(196,88,63,0.16),transparent_44%)] blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto w-full max-w-[1480px] px-6 pb-24 pt-32 lg:px-8 lg:pb-36 lg:pt-44", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: "hidden",
            animate: "visible",
            variants: containerVariants,
            className: "flex flex-col",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-end gap-14 lg:grid-cols-12 lg:gap-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "lg:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-foreground/52", children: "Operating system for the trades" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.h1,
                    {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -20 },
                      transition: { duration: 0.35 },
                      className: "max-w-6xl text-[clamp(3.35rem,7vw,6.4rem)] font-display leading-[0.88] tracking-[-0.06em] text-foreground",
                      children: [
                        content.headline[0],
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2 inline-flex h-12 w-24 items-center rounded-full border border-white/80 bg-[linear-gradient(135deg,rgba(34,25,19,0.96),rgba(96,62,41,0.92))] px-2.5 align-middle shadow-[0_12px_28px_rgba(41,30,23,0.18)] sm:h-14 sm:w-28 md:h-16 md:w-36 md:px-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 md:gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-7 w-7 items-center justify-center rounded-full bg-[rgba(255,255,255,0.14)] md:h-9 md:w-9", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-signature shadow-[0_0_18px_rgba(214,123,73,0.65)] md:h-3 md:w-3" }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex flex-col gap-1 md:gap-1.5", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-8 rounded-full bg-white/85 md:w-12" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-5 rounded-full bg-white/35 md:w-7" })
                          ] })
                        ] }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-signature", children: content.headline[1] })
                      ]
                    },
                    audience
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.p,
                    {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -10 },
                      transition: { duration: 0.35, delay: 0.08 },
                      className: "mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl",
                      children: content.subheadline
                    },
                    `sub-${audience}`
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      variants: itemVariants,
                      className: "mt-10 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            size: "lg",
                            asChild: true,
                            className: "h-14 rounded-full border-0 bg-foreground px-7 text-sm font-medium text-white shadow-[0_18px_40px_rgba(41,30,23,0.18)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-foreground/92",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://app.ozzios.com/sign-up", children: [
                              "Get Early Access",
                              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" })
                            ] })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            onClick: () => setDemoOpen(true),
                            className: "inline-flex h-14 items-center gap-3 rounded-full border border-border/70 bg-white/70 px-7 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-white",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "ml-0.5 h-3.5 w-3.5 fill-current" }) }),
                              "Watch demo"
                            ]
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "mt-10 flex flex-wrap items-center gap-5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                      heroIntegrations.map((integration, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "relative -ml-3 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/80 bg-white shadow-[0_10px_24px_rgba(41,30,23,0.1)] first:ml-0",
                          style: { zIndex: heroIntegrations.length - i },
                          title: integration.name,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "img",
                            {
                              src: integration.logo,
                              alt: integration.name,
                              className: "h-full w-full object-contain p-2"
                            }
                          )
                        },
                        integration.name
                      )),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative -ml-3 flex h-12 w-12 items-center justify-center rounded-full border border-white/80 bg-muted shadow-[0_10px_24px_rgba(41,30,23,0.1)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-muted-foreground", children: "+20" }) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-6 text-muted-foreground", children: "Connected to the systems you already run, from search and ads to billing and follow-up." })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[2rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(248,242,237,0.96))] p-6 shadow-[0_28px_90px_rgba(54,39,29,0.12)] backdrop-blur-xl", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.72rem] font-medium uppercase tracking-[0.24em] text-foreground/45", children: "What the team sees" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/80 px-3 py-1 text-xs text-muted-foreground", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-emerald-500" }),
                      "Live automation"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-4", children: [
                    {
                      title: "Missed-call recovery",
                      detail: "Lead follow-up triggers personalized text and email sequences within minutes."
                    },
                    {
                      title: "Review response drafting",
                      detail: "Agents draft, route, and post responses without waiting on office staff."
                    },
                    {
                      title: "Daily operating summary",
                      detail: "Revenue leaks, campaign changes, and open tasks land in one thread each morning."
                    }
                  ].map((item, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "group rounded-[1.5rem] border border-border/60 bg-white/75 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-foreground text-sm font-semibold text-background", children: [
                          "0",
                          index2 + 1
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold text-foreground", children: item.title }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm leading-6 text-muted-foreground", children: item.detail })
                        ] })
                      ] })
                    },
                    item.title
                  )) })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "mt-12 overflow-hidden rounded-full border border-border/60 bg-white/55 py-3 shadow-[0_14px_38px_rgba(41,30,23,0.06)] backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  animate: { x: ["0%", "-50%"] },
                  transition: { duration: 22, ease: "linear", repeat: Infinity },
                  className: "flex min-w-max items-center gap-10 px-6",
                  children: [...content.stats, ...content.stats].map((stat, index2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 whitespace-nowrap", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-semibold tracking-tight text-foreground", children: stat.value }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[0.72rem] uppercase tracking-[0.24em] text-foreground/45", children: stat.label })
                  ] }, `${stat.label}-${index2}`))
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  variants: itemVariants,
                  className: "mt-10 w-full",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -inset-x-10 top-10 h-48 bg-[radial-gradient(circle_at_center,rgba(196,88,63,0.14),transparent_58%)] blur-3xl" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[2rem] border border-white/80 bg-background/90 shadow-[0_38px_120px_rgba(36,29,24,0.12)] ring-1 ring-black/5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b border-border/50 bg-muted/20 px-4 py-2.5", children: [
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
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/service-hero-logo.webp", alt: "Service Hero", className: "w-full h-full object-cover" }) }),
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
                                                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5 h-5 rounded overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/service-hero-logo.webp", alt: "Service Hero", className: "w-full h-full object-cover" }) }),
                                                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-semibold text-foreground", children: "Service Hero Report" })
                                                      ] }),
                                                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 px-1.5 py-0.5 rounded bg-green-100 border border-green-200", children: [
                                                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-1 rounded-full bg-green-500 animate-pulse" }),
                                                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[7px] font-medium text-green-600", children: "LIVE" })
                                                      ] })
                                                    ] }),
                                                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-1.5 mb-3", children: [
                                                      { label: "Revenue", value: "$87.4K", color: "text-green-600" },
                                                      { label: "Jobs", value: "142", color: "text-blue-600" },
                                                      { label: "Avg Ticket", value: "$615", color: "text-violet-600" },
                                                      { label: "Close Rate", value: "64%", color: "text-signature" }
                                                    ].map((metric) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-1.5 rounded bg-background border border-border", children: [
                                                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[6px] text-muted-foreground uppercase", children: metric.label }),
                                                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-[10px] font-semibold ${metric.color}`, children: metric.value })
                                                    ] }, metric.label)) }),
                                                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 rounded bg-background border border-border mb-2", children: [
                                                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1.5", children: [
                                                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[7px] text-muted-foreground", children: "Revenue by Service" }),
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
                                                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[6px] text-muted-foreground uppercase", children: "Service" }),
                                                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[6px] text-muted-foreground uppercase text-right", children: "Revenue" }),
                                                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[6px] text-muted-foreground uppercase text-right", children: "Jobs" })
                                                      ] }),
                                                      [
                                                        { channel: "HVAC Install", revenue: "$38.2K", roi: "34" },
                                                        { channel: "Repairs", revenue: "$28.4K", roi: "67" },
                                                        { channel: "Maintenance", revenue: "$20.8K", roi: "41" }
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
                              (activeChannel === "reviews-seo" ? [
                                { label: "Check new reviews", icon: "⭐", prompt: "@SEO Specialist check our Google reviews and respond" },
                                { label: "Send review requests", icon: "📱", prompt: "@SEO Specialist send review requests to last week's jobs" },
                                { label: "Local rankings", icon: "📊", prompt: "@SEO Specialist how are we ranking in the Map Pack?" },
                                { label: "Update GBP posts", icon: "🔍", prompt: "@SEO Specialist create a new Google Business post" }
                              ] : activeChannel === "reports" ? [
                                { label: "Monthly report", icon: "📊", prompt: "@Data Analyst build a monthly performance report" },
                                { label: "Revenue by service", icon: "💰", prompt: "@Data Analyst break down revenue by service type" },
                                { label: "Tech performance", icon: "👨‍🔧", prompt: "@Data Analyst show me revenue per technician" },
                                { label: "Ad spend ROI", icon: "📈", prompt: "@Data Analyst compare cost per lead across all ad channels" }
                              ] : [
                                { label: "Missed calls today", icon: "📞", prompt: "@Data Analyst show me today's missed calls" },
                                { label: "Follow up estimates", icon: "💰", prompt: "@Content Writer follow up on unsold estimates" },
                                { label: "Reactivate dead leads", icon: "🔄", prompt: "@Content Writer send reactivation texts to old leads" },
                                { label: "Book callbacks", icon: "📋", prompt: "@Content Writer schedule callbacks for no-shows" }
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
                    ] })
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  variants: itemVariants,
                  className: "mt-20 w-full",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.25em] mb-10", children: "Integrates with the tools you already use" }),
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
                              duration: 60,
                              ease: "linear"
                            }
                          },
                          children: [...enterpriseLogos, ...enterpriseLogos].map((logo, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: `${logo.width} shrink-0 flex items-center justify-center h-12`,
                              children: logo.logo ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "img",
                                {
                                  src: logo.logo,
                                  alt: logo.name,
                                  className: "h-10 w-auto object-contain opacity-50 hover:opacity-80 transition-opacity grayscale"
                                }
                              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-muted-foreground/50 tracking-wide whitespace-nowrap", children: logo.name })
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
const BentoSection = reactExports.lazy(
  () => import("./BentoSection-BAv1zYVd.js").then((m) => ({ default: m.BentoSection }))
);
const FeaturesShowcaseSection = reactExports.lazy(
  () => import("./FeaturesShowcaseSection-Dfim0PPr.js").then((m) => ({
    default: m.FeaturesShowcaseSection
  }))
);
const SavingsCalculatorSection = reactExports.lazy(
  () => import("./SavingsCalculatorSection-DkuUHarU.js").then((m) => ({
    default: m.SavingsCalculatorSection
  }))
);
const FeaturesSection = reactExports.lazy(
  () => import("./HowItWorksSection-BK30iVjn.js").then((m) => ({ default: m.FeaturesSection }))
);
const AgentsSection = reactExports.lazy(
  () => import("./AgentsSection-DY3DtxJR.js").then((m) => ({ default: m.AgentsSection }))
);
const MemorySection = reactExports.lazy(
  () => import("./MemorySection-DNNxZ6el.js").then((m) => ({ default: m.MemorySection }))
);
const PricingSection = reactExports.lazy(
  () => import("./PricingSection-B_IKeA1q.js").then((m) => ({ default: m.PricingSection }))
);
const IntegrationsSection = reactExports.lazy(
  () => import("./IntegrationsSection-DqnOq4oW.js").then((m) => ({
    default: m.IntegrationsSection
  }))
);
const TestimonialsSection = reactExports.lazy(
  () => import("./TestimonialsSection-DVPSACDg.js").then((m) => ({
    default: m.TestimonialsSection
  }))
);
const FAQSection = reactExports.lazy(
  () => import("./FAQSection-CWvQMis-.js").then((m) => ({ default: m.FAQSection }))
);
const CTASection = reactExports.lazy(
  () => import("./CTASection-_Ti6C2QM.js").then((m) => ({ default: m.CTASection }))
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
