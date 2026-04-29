import { r as reactExports, j as jsxRuntimeExports, m as motion, A as AnimatePresence } from "./vendor-framer-DZFBeC81.js";
import { u as useCalDemoInit, a as useAudience, b as audienceContent, c as bookDemoTriggerProps, L as LandingLayout } from "./LandingLayout-Dblq4RXp.js";
import { L as Link } from "./vendor-router-DD_41qJ4.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { A as ArrowRight, q as Play, X, r as ArrowUpRight, s as Command, t as ChevronDown, u as Star, v as Hash, w as Menu, j as Search, x as Settings, M as MessageSquare, C as CircleCheck, y as FileText, z as StickyNote, f as Sparkles, I as ChartColumn, D as DollarSign, W as Wrench, J as Smartphone, N as Phone, O as RefreshCw, T as ClipboardList, k as Send } from "./vendor-icons-D94uOSxG.js";
import { L as LazySection } from "./lazy-section-B65XiZaR.js";
import "./vendor-react-MO5I_vdy.js";
import "./vendor-radix-Bd9PM-r6.js";
import "node:async_hooks";
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
  { name: "Jodi Elmore", isAgent: false, status: "online", image: "/images/generation-d33b25da-6a41-40c4-90f9-45ee86a2360e.webp" },
  { name: "SEO Specialist", isAgent: true, status: "online", mp4: "/images/avatars/google-ozzi.mp4" },
  { name: "Data Analyst", isAgent: true, status: "online", mp4: "/images/avatars/firecrawl-ozzi.mp4" },
  { name: "Graphic Designer", isAgent: true, status: "online", mp4: "/images/avatars/openai-imagegen-ozzi.mp4" },
  { name: "Content Writer", isAgent: true, status: "online", mp4: "/images/avatars/wordpress-ozzi.mp4" }
];
const leadFollowUpMessages = [
  {
    id: 1,
    user: "Jodi Elmore",
    avatar: "/images/generation-d33b25da-6a41-40c4-90f9-45ee86a2360e.webp",
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
    avatar: "/images/generation-d33b25da-6a41-40c4-90f9-45ee86a2360e.webp",
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
    avatar: "/images/generation-d33b25da-6a41-40c4-90f9-45ee86a2360e.webp",
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
    avatar: "/images/generation-d33b25da-6a41-40c4-90f9-45ee86a2360e.webp",
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
    avatar: "/images/generation-d33b25da-6a41-40c4-90f9-45ee86a2360e.webp",
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
    avatar: "/images/generation-d33b25da-6a41-40c4-90f9-45ee86a2360e.webp",
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
    avatar: "/images/generation-d33b25da-6a41-40c4-90f9-45ee86a2360e.webp",
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
    avatar: "/images/generation-d33b25da-6a41-40c4-90f9-45ee86a2360e.webp",
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
const EASE_OUT = [0.16, 1, 0.3, 1];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.085, delayChildren: 0.12 }
  }
};
const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT }
  }
};
const messageVariants = {
  hidden: { opacity: 0, y: 14, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.32, ease: EASE_OUT }
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
const channelSuggestions = {
  "lead-follow-up": [
    { label: "Missed calls today", icon: Phone, prompt: "@Data Analyst show me today's missed calls" },
    { label: "Follow up estimates", icon: DollarSign, prompt: "@Content Writer follow up on unsold estimates" },
    { label: "Reactivate dead leads", icon: RefreshCw, prompt: "@Content Writer send reactivation texts to old leads" },
    { label: "Book callbacks", icon: ClipboardList, prompt: "@Content Writer schedule callbacks for no-shows" }
  ],
  "reviews-seo": [
    { label: "Check new reviews", icon: Star, prompt: "@SEO Specialist check our Google reviews and respond" },
    { label: "Send review requests", icon: Smartphone, prompt: "@SEO Specialist send review requests to last week's jobs" },
    { label: "Local rankings", icon: ChartColumn, prompt: "@SEO Specialist how are we ranking in the Map Pack?" },
    { label: "Update GBP posts", icon: Search, prompt: "@SEO Specialist create a new Google Business post" }
  ],
  reports: [
    { label: "Monthly report", icon: ChartColumn, prompt: "@Data Analyst build a monthly performance report" },
    { label: "Revenue by service", icon: DollarSign, prompt: "@Data Analyst break down revenue by service type" },
    { label: "Tech performance", icon: Wrench, prompt: "@Data Analyst show me revenue per technician" },
    { label: "Ad spend ROI", icon: ArrowUpRight, prompt: "@Data Analyst compare cost per lead across all ad channels" }
  ]
};
const demoTabs = [
  { icon: MessageSquare, label: "Messages" },
  { icon: CircleCheck, label: "Tasks" },
  { icon: FileText, label: "Files" },
  { icon: StickyNote, label: "Notes" },
  { icon: Sparkles, label: "Creations" }
];
function Kbd({ children, tone = "light", className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "kbd",
    {
      className: cn(
        "inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-[5px] border px-1 font-sans text-[10px] font-medium leading-none tabular-nums",
        tone === "light" ? "border-border/70 bg-white/80 text-foreground/55 shadow-[0_1px_0_rgba(0,0,0,0.04)]" : "border-white/15 bg-white/10 text-white/85 shadow-[inset_0_-1px_0_rgba(0,0,0,0.18)]",
        className
      ),
      children
    }
  );
}
function StatusPill() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: "/changelog",
      className: "group inline-flex h-7 items-center gap-2 rounded-full border border-border/60 bg-background/80 pl-1.5 pr-3 text-[11px] font-medium tracking-tight text-foreground/68 backdrop-blur transition-colors hover:border-border hover:text-foreground",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex h-[18px] items-center gap-1.5 rounded-full bg-signature/10 px-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-signature", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-signature/60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-signature" })
          ] }),
          "Early access"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/55 group-hover:text-foreground", children: "v2.4 — Voice Agents shipped" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3 text-foreground/40 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" })
      ]
    }
  );
}
function HeadlineMark({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10 text-signature", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        "aria-hidden": true,
        className: "absolute -bottom-1 left-0 right-0 h-[6px] rounded-full bg-signature/15 blur-[2px]"
      }
    )
  ] });
}
function HeroSection() {
  useCalDemoInit();
  const { audience } = useAudience();
  const content = audienceContent[audience].hero;
  const [activeChannel, setActiveChannel] = reactExports.useState("lead-follow-up");
  const [visibleMessages, setVisibleMessages] = reactExports.useState([]);
  const [isTyping, setIsTyping] = reactExports.useState(false);
  const [streamingText, setStreamingText] = reactExports.useState({});
  const [streamingComplete, setStreamingComplete] = reactExports.useState({});
  const [mobileChannelOpen, setMobileChannelOpen] = reactExports.useState(false);
  const [demoOpen, setDemoOpen] = reactExports.useState(false);
  const messagesEndRef = reactExports.useRef(null);
  const messagesContainerRef = reactExports.useRef(null);
  const animationRef = reactExports.useRef({ cancelled: false });
  const streamingRefs = reactExports.useRef({});
  const currentMessages = channelMessages[activeChannel] || leadFollowUpMessages;
  const activeChannels = sidebarChannels.filter((c) => c.hasMessages).map((c) => c.name);
  const getNextChannel = (current) => {
    const idx = activeChannels.indexOf(current);
    return activeChannels[(idx + 1) % activeChannels.length];
  };
  const switchToChannel = (channelName) => {
    animationRef.current.cancelled = true;
    Object.values(streamingRefs.current).forEach((r) => r.cancelled = true);
    setVisibleMessages([]);
    setIsTyping(false);
    setStreamingText({});
    setStreamingComplete({});
    setActiveChannel(channelName);
    streamingRefs.current = {};
    if (messagesContainerRef.current) messagesContainerRef.current.scrollTop = 0;
  };
  const handleChannelChange = (channelName) => {
    if (!channelMessages[channelName]) return;
    if (channelName === activeChannel) return;
    switchToChannel(channelName);
  };
  const streamMessageText = async (messageId, fullText, controller) => {
    const chars = fullText.split("");
    let current = "";
    for (let i = 0; i < chars.length; i++) {
      if (controller.cancelled) return;
      current += chars[i];
      setStreamingText((p) => ({ ...p, [messageId]: current }));
      const ch = chars[i];
      let delay;
      if (ch === " " || ch === "\n") delay = 10;
      else if ([".", "!", "?"].includes(ch)) delay = 150;
      else if (ch === ",") delay = 80;
      else if (ch === ":") delay = 100;
      else delay = 20 + Math.random() * 20;
      await new Promise((r) => setTimeout(r, delay));
    }
    if (!controller.cancelled) {
      setStreamingComplete((p) => ({ ...p, [messageId]: true }));
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
    const onKey = (e) => {
      if (e.key === "Escape") setDemoOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [demoOpen]);
  reactExports.useEffect(() => {
    const controller = { cancelled: false };
    animationRef.current = controller;
    const run = async () => {
      const messages = channelMessages[activeChannel] || leadFollowUpMessages;
      for (let i = 0; i < messages.length; i++) {
        if (controller.cancelled) return;
        const m = messages[i];
        const prev = i > 0 ? messages[i - 1] : null;
        const delay = i === 0 ? 800 : prev?.isAgent ? 400 : 600;
        await new Promise((r) => setTimeout(r, delay));
        if (controller.cancelled) return;
        if (m.typing) {
          setIsTyping(true);
          await new Promise((r) => setTimeout(r, 800));
          setIsTyping(false);
        }
        if (controller.cancelled) return;
        setVisibleMessages((p) => [...p, m.id]);
        if (m.isAgent && m.content.length > 0) {
          const textParts = m.content.filter((p) => p.type === "text" && p.text).map((p) => p.text).join("");
          if (textParts) {
            const sc = { cancelled: false };
            streamingRefs.current[m.id] = sc;
            await new Promise((r) => setTimeout(r, 200));
            if (controller.cancelled || sc.cancelled) return;
            await streamMessageText(m.id, textParts, sc);
            await new Promise((r) => setTimeout(r, 200));
          } else {
            setStreamingComplete((p) => ({ ...p, [m.id]: true }));
            await new Promise((r) => setTimeout(r, 400));
          }
        } else {
          setStreamingComplete((p) => ({ ...p, [m.id]: true }));
        }
      }
      if (!controller.cancelled) {
        await new Promise((r) => setTimeout(r, 4e3));
        if (!controller.cancelled) switchToChannel(getNextChannel(activeChannel));
      }
    };
    const t = setTimeout(run, 600);
    return () => {
      controller.cancelled = true;
      Object.values(streamingRefs.current).forEach((r) => r.cancelled = true);
      clearTimeout(t);
    };
  }, [activeChannel]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "hero",
      className: "relative isolate overflow-hidden pb-12 pt-28 sm:pt-32 lg:pb-16 lg:pt-36",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BackgroundField, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: "hidden",
              animate: "visible",
              variants: containerVariants,
              className: "grid w-full min-w-0 items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-16",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "lg:col-span-6 xl:col-span-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.h1,
                    {
                      initial: { opacity: 0, y: 16 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -10 },
                      transition: { duration: 0.35 },
                      className: "mt-6 font-display text-[clamp(2rem,4.4vw,3.6rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-foreground [text-wrap:balance]",
                      children: [
                        content.headline[0],
                        /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden sm:block" }),
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(HeadlineMark, { children: content.headline[1] })
                      ]
                    },
                    `h-${audience}`
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.p,
                    {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -6 },
                      transition: { duration: 0.35, delay: 0.06 },
                      className: "mt-5 max-w-[480px] text-[16px] leading-[1.6] text-muted-foreground sm:text-[17px]",
                      children: content.subheadline
                    },
                    `s-${audience}`
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      variants: itemVariants,
                      className: "mt-7 flex flex-wrap items-center gap-2.5",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            type: "button",
                            ...bookDemoTriggerProps,
                            className: cn(
                              "group/cta relative inline-flex h-11 items-center gap-2 overflow-hidden rounded-md bg-foreground pl-4 pr-2.5 text-[13.5px] font-medium text-background",
                              "shadow-[0_1px_0_rgba(255,255,255,0.18)_inset,0_1px_2px_rgba(34,27,22,0.18),0_14px_30px_-12px_rgba(34,27,22,0.45)]",
                              "transition-all duration-200 hover:bg-[#1a1410] active:translate-y-px"
                            ),
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" }),
                              "Setup a demo",
                              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform duration-200 group-hover/cta:translate-x-0.5" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Kbd, { tone: "dark", children: "D" })
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            type: "button",
                            onClick: () => setDemoOpen(true),
                            className: "group/play inline-flex h-11 items-center gap-2.5 rounded-md border border-border/70 bg-background/70 pl-1.5 pr-4 text-[13.5px] font-medium text-foreground backdrop-blur transition-all duration-200 hover:border-border hover:bg-background",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded-[5px] bg-foreground text-background transition-transform duration-200 group-hover/play:scale-105", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "ml-[1px] h-3.5 w-3.5 fill-current" }) }),
                              "Watch the 90-second tour"
                            ]
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      variants: itemVariants,
                      className: "mt-9 flex max-w-[480px] flex-col gap-3",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                          heroIntegrations.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              title: it.name,
                              className: "relative -ml-2 flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border/70 bg-background shadow-[0_4px_10px_-6px_rgba(34,27,22,0.16)] first:ml-0 transition-transform duration-200 hover:-translate-y-0.5",
                              style: { zIndex: heroIntegrations.length - i },
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: it.logo, alt: it.name, className: "h-full w-full object-contain p-1.5" })
                            },
                            it.name
                          )),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative -ml-2 flex h-10 items-center gap-1.5 rounded-full border border-border/70 bg-background px-3 text-[11px] font-medium text-muted-foreground shadow-[0_4px_10px_-6px_rgba(34,27,22,0.16)]", children: "+20 more" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/40", children: "Native to your stack — search, ads, billing, follow-up" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    variants: itemVariants,
                    className: "relative w-full min-w-0 max-w-full lg:col-span-6 xl:col-span-7",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute -top-6 right-0 hidden items-center gap-2 lg:flex", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/35", children: "Live product surface" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 bg-border/60" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        DemoFrame,
                        {
                          activeChannel,
                          onChannelChange: handleChannelChange,
                          mobileOpen: mobileChannelOpen,
                          setMobileOpen: setMobileChannelOpen,
                          isTyping,
                          visibleMessages,
                          streamingText,
                          streamingComplete,
                          currentMessages,
                          messagesEndRef,
                          messagesContainerRef
                        }
                      )
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.5 },
              className: "mt-20 lg:mt-28",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/40", children: "Connects the tools you already pay for" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px flex-1 bg-border/50" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      className: "flex items-center gap-12",
                      animate: { x: ["0%", "-50%"] },
                      transition: { x: { repeat: Infinity, repeatType: "loop", duration: 60, ease: "linear" } },
                      children: [...enterpriseLogos, ...enterpriseLogos].map((logo, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: cn(logo.width, "flex h-10 shrink-0 items-center justify-center"),
                          title: logo.name,
                          children: logo.logo ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "img",
                            {
                              src: logo.logo,
                              alt: logo.name,
                              className: "h-7 w-auto object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-90 hover:grayscale-0"
                            }
                          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] font-medium tracking-tight text-foreground/45", children: logo.name })
                        },
                        `${logo.name}-${i}`
                      ))
                    }
                  )
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: demoOpen ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.2 },
            className: "fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "aria-label": "Close demo",
                  className: "absolute inset-0 bg-black/85 backdrop-blur-sm",
                  onClick: () => setDemoOpen(false)
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { scale: 0.96, opacity: 0 },
                  animate: { scale: 1, opacity: 1 },
                  exit: { scale: 0.96, opacity: 0 },
                  transition: { duration: 0.22, ease: EASE_OUT },
                  className: "relative z-10 w-full max-w-5xl",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => setDemoOpen(false),
                        className: "absolute -top-10 right-0 inline-flex items-center gap-1.5 text-sm text-white/65 transition-colors hover:text-white",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
                          "Close ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Kbd, { tone: "dark", className: "ml-1", children: "esc" })
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
        ) : null })
      ]
    }
  );
}
function BackgroundField() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -right-32 -top-32 z-0 h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle,rgba(196,88,63,0.14),transparent_60%)] blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -left-32 bottom-12 z-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(34,27,22,0.06),transparent_60%)] blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "pointer-events-none absolute inset-0 z-0 opacity-[0.55] [mask-image:radial-gradient(ellipse_at_top,black_15%,transparent_75%)]",
        style: {
          backgroundImage: "radial-gradient(rgba(64, 45, 34, 0.12) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }
      }
    )
  ] });
}
function DemoFrame(props) {
  const {
    activeChannel,
    onChannelChange,
    mobileOpen,
    setMobileOpen,
    isTyping,
    visibleMessages,
    streamingText,
    streamingComplete,
    currentMessages,
    messagesEndRef,
    messagesContainerRef
  } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full min-w-0 max-w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 -z-10 overflow-visible", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "absolute -inset-x-2 -bottom-10 top-10 rounded-[2rem] bg-[radial-gradient(circle_at_50%_100%,rgba(196,88,63,0.18),transparent_70%)] blur-3xl sm:-inset-x-6 sm:-bottom-12 sm:top-12"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-full overflow-hidden rounded-xl border border-border/70 bg-background shadow-[0_30px_80px_-30px_rgba(34,27,22,0.35),0_2px_0_rgba(255,255,255,0.6)_inset] ring-1 ring-foreground/5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-9 items-center gap-2 border-b border-border/60 bg-muted/30 px-2.5 sm:gap-3 sm:px-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center gap-1 sm:gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-[#FF5F57] sm:h-2.5 sm:w-2.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-[#FFBD2E] sm:h-2.5 sm:w-2.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-[#28CA41] sm:h-2.5 sm:w-2.5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-6 w-full min-w-0 max-w-[420px] items-center gap-1.5 rounded-md border border-border/60 bg-background px-2 text-[10.5px] sm:gap-2 sm:text-[11px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-1.5 w-1.5 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-mint/60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-mint" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "truncate font-mono text-foreground/55 sm:hidden", children: [
            "ozzios.com / ",
            activeChannel
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hidden truncate font-mono text-foreground/55 sm:inline", children: [
            "app.ozzios.com / channels / ",
            activeChannel
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto hidden shrink-0 items-center gap-1 text-foreground/40 sm:inline-flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Command, { className: "h-3 w-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Kbd, { className: "h-[16px] min-w-[16px] text-[9px]", children: "K" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden h-2.5 w-12 sm:block" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-[480px] w-full max-w-full overflow-hidden bg-background sm:h-auto sm:aspect-[4/3] md:aspect-[16/9]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          DemoSidebar,
          {
            activeChannel,
            onChannelChange
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            DemoChannelHeader,
            {
              activeChannel,
              onChannelChange,
              mobileOpen,
              setMobileOpen
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DemoTabs, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              ref: messagesContainerRef,
              className: "scrollbar-hidden min-h-0 flex-1 space-y-3 overflow-y-auto overflow-x-hidden bg-background px-2.5 py-2.5 sm:space-y-4 sm:px-4 sm:py-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: currentMessages.filter((m) => visibleMessages.includes(m.id)).map((message) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  MessageRow,
                  {
                    message,
                    streamingText,
                    streamingComplete
                  },
                  message.id
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isTyping ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -6 },
                    className: "flex items-center gap-2 text-[11px] text-muted-foreground",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground", style: { animationDelay: "0ms" } }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground", style: { animationDelay: "120ms" } }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground", style: { animationDelay: "240ms" } })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Agent is responding…" })
                    ]
                  }
                ) : null }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: messagesEndRef })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DemoComposer, { activeChannel })
        ] })
      ] })
    ] })
  ] });
}
function DemoSidebar({
  activeChannel,
  onChannelChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "hidden w-56 shrink-0 flex-col border-r border-border/60 bg-muted/30 md:flex", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/60 p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-md border border-border/60 bg-background p-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 overflow-hidden rounded-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/service-hero-logo.webp", alt: "Service Hero", className: "h-full w-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-[11.5px] font-semibold text-foreground", children: "Service Hero" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-[10px] text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-mint" }),
          "Online"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3.5 w-3.5 text-foreground/40" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-hidden py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarHeading, { label: "Channels" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-px px-2", children: sidebarChannels.map((channel) => {
        const isActive = channel.name === activeChannel;
        const isLive = channel.hasMessages;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => isLive && onChannelChange(channel.name),
            disabled: !isLive,
            className: cn(
              "group/c flex w-full items-center gap-1.5 rounded-md px-2 py-1.5 text-left text-[11.5px] transition-colors duration-150",
              isActive ? "bg-signature/10 text-foreground" : isLive ? "text-muted-foreground hover:bg-foreground/5 hover:text-foreground" : "cursor-not-allowed text-muted-foreground/40"
            ),
            children: [
              channel.starred ? /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3 w-3 fill-signature text-signature" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Hash, { className: "h-3 w-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: channel.name }),
              isLive && !isActive ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto h-1.5 w-1.5 rounded-full bg-signature/60" }) : null,
              isActive ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto rounded-[5px] bg-signature/15 px-1 font-mono text-[8.5px] font-semibold uppercase tracking-wider text-signature", children: "Live" }) : null
            ]
          },
          channel.name
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarHeading, { label: "Team" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-px px-2", children: sidebarTeam.map((member) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-2 rounded-md px-2 py-1.5 text-[11.5px] text-muted-foreground transition-colors hover:bg-foreground/5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                member.isAgent ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-5 overflow-hidden rounded-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
                    className: "h-full w-full object-cover"
                  }
                ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: member.image, alt: member.name, className: "h-5 w-5 rounded-md object-cover" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: cn(
                      "absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full border-2 border-background",
                      member.status === "online" ? "bg-mint" : "bg-muted-foreground"
                    )
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: member.name }),
              member.isAgent ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto rounded-[5px] border border-signature/25 bg-signature/10 px-1 font-mono text-[8.5px] font-semibold uppercase tracking-wider text-signature", children: "AI" }) : null
            ]
          },
          member.name
        )) })
      ] })
    ] })
  ] });
}
function SidebarHeading({ label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1.5 flex items-center gap-2 px-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3 w-3 text-foreground/40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9.5px] uppercase tracking-[0.2em] text-foreground/40", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px flex-1 bg-border/50" })
  ] });
}
function DemoChannelHeader({
  activeChannel,
  onChannelChange,
  mobileOpen,
  setMobileOpen
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-between gap-2 border-b border-border/60 bg-background px-3 py-2 sm:px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setMobileOpen(!mobileOpen),
        className: "-ml-1 flex min-w-0 items-center gap-1.5 rounded-md px-1.5 py-1 transition-colors hover:bg-muted md:hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-4 w-4 shrink-0 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Hash, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "max-w-[140px] truncate text-[12px] font-semibold text-foreground", children: activeChannel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChevronDown,
            {
              className: cn(
                "h-3 w-3 shrink-0 text-muted-foreground transition-transform",
                mobileOpen && "rotate-180"
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden items-center gap-2 md:flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-signature text-signature" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hash, { className: "h-3.5 w-3.5 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-semibold text-foreground", children: activeChannel }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1 inline-flex items-center gap-1 rounded-[5px] border border-border/60 bg-muted/40 px-1.5 py-0.5 font-mono text-[9.5px] uppercase tracking-wider text-foreground/55", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-mint" }),
        "Live"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center gap-2 sm:gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-[5px] border border-mint/30 bg-mint/10 px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-mint md:hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-mint" }),
        "Live"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden items-center -space-x-1.5 sm:flex", children: [
        sidebarTeam.slice(0, 3).map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full ring-2 ring-background", style: { zIndex: 3 - i }, children: m.isAgent ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-6 overflow-hidden rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "video",
          {
            src: getAgentMp4(m.name),
            autoPlay: true,
            loop: true,
            muted: true,
            playsInline: true,
            controlsList: "nodownload",
            disablePictureInPicture: true,
            onContextMenu: (e) => e.preventDefault(),
            className: "h-full w-full object-cover"
          }
        ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: m.image, alt: "", className: "h-6 w-6 rounded-full object-cover" }) }, m.name)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-6 w-6 items-center justify-center rounded-full border-2 border-background bg-muted text-[9px] text-muted-foreground", children: "+4" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "hidden text-muted-foreground transition-colors hover:text-foreground sm:inline-flex", "aria-label": "Search", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "hidden text-muted-foreground transition-colors hover:text-foreground sm:inline-flex", "aria-label": "Settings", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: mobileOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: -8 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
        transition: { duration: 0.15 },
        className: "absolute inset-x-0 top-full z-50 border-b border-border/60 bg-background shadow-xl md:hidden",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5 p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/40", children: "Channels" }),
          sidebarChannels.map((channel) => {
            const isActive = channel.name === activeChannel;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  if (channel.hasMessages) {
                    onChannelChange(channel.name);
                    setMobileOpen(false);
                  }
                },
                disabled: !channel.hasMessages,
                className: cn(
                  "flex w-full items-center gap-2 rounded-md px-2 py-2 text-[12px] transition-colors",
                  isActive ? "bg-signature/10 text-foreground" : channel.hasMessages ? "text-muted-foreground hover:bg-muted hover:text-foreground" : "cursor-not-allowed text-muted-foreground/40"
                ),
                children: [
                  channel.starred ? /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-signature text-signature" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Hash, { className: "h-3.5 w-3.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: channel.name }),
                  channel.hasMessages && !isActive ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto h-2 w-2 rounded-full bg-signature/60" }) : null,
                  isActive ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto rounded-[5px] bg-signature/15 px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-signature", children: "Active" }) : null
                ]
              },
              channel.name
            );
          })
        ] })
      }
    ) : null })
  ] });
}
function DemoTabs() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scrollbar-hidden flex items-center gap-0.5 overflow-x-auto border-b border-border/60 bg-background px-2 py-1.5 sm:px-3", children: [
    demoTabs.map((tab, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: cn(
          "inline-flex shrink-0 items-center gap-1.5 rounded-md px-2 py-1 text-[11px] transition-colors sm:px-2.5",
          i === 0 ? "bg-foreground/[0.06] text-foreground" : "text-muted-foreground hover:bg-foreground/[0.03] hover:text-foreground"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(tab.icon, { className: "h-3.5 w-3.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: tab.label })
        ]
      },
      tab.label
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto hidden shrink-0 items-center gap-1 text-[10px] text-foreground/40 sm:inline-flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kbd, { className: "h-[16px] min-w-[16px] text-[9px]", children: "⌘" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kbd, { className: "h-[16px] min-w-[16px] text-[9px]", children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline", children: "switch view" })
    ] })
  ] });
}
function DemoComposer({ activeChannel }) {
  const suggestions = channelSuggestions[activeChannel] ?? channelSuggestions["lead-follow-up"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/60 bg-background px-2.5 pb-2 pt-2 sm:px-3 sm:pb-2.5 sm:pt-2.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scrollbar-hidden mb-2 flex items-center gap-1.5 overflow-x-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 font-mono text-[9.5px] uppercase tracking-[0.18em] text-foreground/40", children: "Try" }),
      suggestions.map((chip) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: "group/chip inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border/60 bg-background px-2.5 py-1.5 text-[10.5px] text-muted-foreground transition-all duration-150 hover:-translate-y-0.5 hover:border-signature/30 hover:bg-signature/[0.06] hover:text-foreground sm:py-1",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(chip.icon, { className: "h-3 w-3 shrink-0 text-foreground/45 transition-colors group-hover/chip:text-signature" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-nowrap", children: chip.label })
          ]
        },
        chip.label
      ))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-md border border-border/60 bg-muted/30 px-3 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "min-w-0 flex-1 truncate text-[11px] text-muted-foreground", children: [
        "Message",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground/55", children: [
          "#",
          activeChannel
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-5 w-5 items-center justify-center rounded-md bg-foreground/[0.05] text-[10px] text-foreground/55", children: "@" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4 text-muted-foreground/55" })
      ] })
    ] })
  ] });
}
function MessageRow({
  message,
  streamingText,
  streamingComplete
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      variants: messageVariants,
      initial: "hidden",
      animate: "visible",
      className: "flex min-w-0 gap-2 sm:gap-3",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0", children: message.isAgent ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 overflow-hidden rounded-md ring-1 ring-signature/15 sm:h-9 sm:w-9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
            className: "h-full w-full object-cover"
          }
        ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: message.avatar,
            alt: message.user,
            className: "h-7 w-7 rounded-md object-cover sm:h-9 sm:w-9"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 sm:gap-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate text-[11px] font-semibold text-foreground sm:text-[12px]", children: message.user }),
            message.isAgent ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 rounded-[5px] border border-signature/25 bg-signature/10 px-1 py-0.5 font-mono text-[8.5px] font-semibold uppercase tracking-wider text-signature", children: "AI" }) : null,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-[10px] text-muted-foreground", children: message.time })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "break-words text-[11.5px] leading-relaxed text-muted-foreground sm:text-[12px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            MessageContent,
            {
              message,
              streamingText,
              streamingComplete
            }
          ) }),
          message.reactions && (!message.isAgent || streamingComplete[message.id]) ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex gap-1.5", children: message.reactions.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "inline-flex items-center gap-1 rounded-full border border-border/60 bg-muted px-2 py-0.5 text-[10px] text-muted-foreground",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px]", children: r.emoji }),
                r.count
              ]
            },
            i
          )) }) : null
        ] })
      ]
    },
    message.id
  );
}
function MessageContent({
  message,
  streamingText,
  streamingComplete
}) {
  const isAgent = message.isAgent;
  const isStreaming = isAgent && !streamingComplete[message.id];
  const streamed = streamingText[message.id] || "";
  const textOffsets = [];
  if (isAgent) {
    let pos = 0;
    message.content.forEach((part, idx) => {
      if (part.type === "text" && part.text) {
        textOffsets.push({ index: idx, startPos: pos, endPos: pos + part.text.length });
        pos += part.text.length;
      }
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: message.content.map((part, i) => {
    if (part.type === "mention") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "inline-flex items-center rounded bg-signature/10 px-1.5 py-0.5 font-medium text-signature",
          children: part.text
        },
        i
      );
    }
    if (part.type === "text" && part.text) {
      if (!isAgent) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: part.text }, i);
      const off = textOffsets.find((t) => t.index === i);
      if (!off) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: part.text }, i);
      let display = "";
      if (isStreaming && streamed) {
        const len = streamed.length;
        if (len > off.startPos) {
          display = part.text.substring(0, Math.max(0, Math.min(len - off.startPos, part.text.length)));
        }
      } else {
        display = part.text;
      }
      const showCursor = isStreaming && streamed.length > off.startPos && streamed.length < off.endPos;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline", children: [
        display,
        showCursor ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "ml-0.5 inline-block align-middle text-foreground/45",
            style: { animation: "blink 1s ease-in-out infinite" },
            children: "▮"
          }
        ) : null
      ] }, i);
    }
    const ready = !isAgent || streamingComplete[message.id];
    if (part.type === "list" && "items" in part && ready) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "my-2 ml-1 space-y-1", children: part.items.map((it, j) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 text-signature", children: "·" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: it })
      ] }, j)) }, i);
    }
    if (part.type === "metrics" && "items" in part && ready) {
      const items = part.items;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: cn(
            "my-2 grid grid-cols-2 gap-1.5 sm:gap-2",
            items.length === 4 ? "sm:grid-cols-4" : "sm:grid-cols-4 lg:grid-cols-5"
          ),
          children: items.map((it, j) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-md border border-border/60 bg-muted/30 p-2 text-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[9px] uppercase tracking-wider text-muted-foreground", children: it.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-[13px] font-semibold tabular-nums text-foreground", children: it.value }),
                it.change ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: cn(
                      "mt-0.5 text-[9px] tabular-nums",
                      it.change.startsWith("+") ? "text-mint" : it.change.startsWith("-") ? "text-mint" : "text-muted-foreground"
                    ),
                    children: it.change
                  }
                ) : null
              ]
            },
            j
          ))
        },
        i
      );
    }
    if (part.type === "images" && "items" in part && ready) {
      const items = part.items;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-2 flex flex-wrap gap-2", children: items.map((it, j) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: cn(
            "group/img relative overflow-hidden rounded-md border border-border/60",
            it.wide ? "h-20 w-full sm:h-24 sm:w-48" : "h-16 w-16 sm:h-20 sm:w-20"
          ),
          children: [
            it.image ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: it.image, alt: "Generated", className: "absolute inset-0 h-full w-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("absolute inset-0 bg-gradient-to-br", it.color) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/15" }),
            it.placeholder ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 flex items-center justify-center text-[10px] font-medium text-white", children: it.placeholder }) : null
          ]
        },
        j
      )) }, i);
    }
    if (part.type === "videos" && "items" in part && ready) {
      const items = part.items;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-2 flex flex-wrap gap-2", children: items.map((it, j) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "group/v relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-border/60 sm:h-20 sm:w-20",
          children: [
            it.image ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: it.image, alt: "Video thumbnail", className: "absolute inset-0 h-full w-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("absolute inset-0 bg-gradient-to-br", it.color) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/35" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-3 w-3 fill-foreground text-foreground" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-medium text-white", children: it.duration })
            ] })
          ]
        },
        j
      )) }, i);
    }
    if (part.type === "actions" && "items" in part && ready) {
      const items = part.items;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-2 space-y-1.5", children: items.map((it, j) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex flex-wrap items-center gap-2 rounded-md border border-border/60 bg-muted/30 p-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: cn(
                  "flex h-5 w-5 items-center justify-center rounded-[5px] border",
                  it.status === "success" ? "border-mint/40 bg-mint/10 text-mint" : "border-border bg-background text-foreground/55"
                ),
                children: it.status === "success" ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3 w-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium text-foreground", children: it.action }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden text-[10px] text-muted-foreground sm:inline", children: "·" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden max-w-[150px] truncate text-[10px] text-muted-foreground sm:inline", children: it.detail }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: cn(
                  "ml-auto rounded-[5px] border px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider",
                  it.status === "success" ? "border-mint/30 bg-mint/10 text-mint" : "border-border bg-muted text-muted-foreground"
                ),
                children: it.status === "success" ? "Done" : "Info"
              }
            )
          ]
        },
        j
      )) }, i);
    }
    if (part.type === "keywords" && "items" in part && ready) {
      const items = part.items;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-2 space-y-1.5", children: items.map((it, j) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex flex-col gap-1 rounded-md border border-border/60 bg-muted/30 p-2 sm:flex-row sm:items-center sm:gap-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 truncate text-[11px] font-medium text-foreground", children: it.keyword }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] tabular-nums text-muted-foreground", children: [
                it.volume,
                "/mo"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: cn(
                    "rounded-[5px] border px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider",
                    parseInt(it.difficulty) < 25 ? "border-mint/30 bg-mint/10 text-mint" : parseInt(it.difficulty) < 40 ? "border-sun/30 bg-sun/10 text-sun" : "border-destructive/30 bg-destructive/10 text-destructive"
                  ),
                  children: [
                    "KD: ",
                    it.difficulty
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-[5px] border border-signature/25 bg-signature/10 px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-signature", children: it.intent })
            ] })
          ]
        },
        j
      )) }, i);
    }
    if (part.type === "code" && "content" in part && ready) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "my-2 overflow-hidden rounded-md border border-foreground/15 bg-foreground p-2.5 font-mono text-[10px] leading-relaxed text-mint sm:p-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1.5 flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-[#FF5F57]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-[#FFBD2E]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-[#28CA41]" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "whitespace-pre-wrap break-all", children: part.content })
          ]
        },
        i
      );
    }
    if (part.type === "preview" && "url" in part && ready) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        PreviewCard,
        {
          url: part.url,
          title: part.title
        },
        i
      );
    }
    return null;
  }) });
}
function PreviewCard({ url, title }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: url,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "group/preview block overflow-hidden rounded-lg border border-border/70 bg-background transition-all duration-200 hover:-translate-y-0.5 hover:border-signature/35 hover:shadow-[0_18px_40px_-22px_rgba(196,88,63,0.35)]",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-gradient-to-br from-muted/40 to-muted p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-5 overflow-hidden rounded-[4px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/service-hero-logo.webp", alt: "Service Hero", className: "h-full w-full object-cover" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold text-foreground", children: "Service Hero — Report" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1 rounded-[5px] border border-mint/30 bg-mint/10 px-1.5 py-0.5 font-mono text-[8px] font-semibold uppercase tracking-wider text-mint", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-mint" }),
              "Live"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 grid grid-cols-4 gap-1.5", children: [
            { label: "Revenue", value: "$87.4K" },
            { label: "Jobs", value: "142" },
            { label: "Avg Ticket", value: "$615" },
            { label: "Close", value: "64%" }
          ].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[5px] border border-border/60 bg-background p-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[7px] uppercase tracking-wider text-muted-foreground", children: m.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold tabular-nums text-foreground", children: m.value })
          ] }, m.label)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 rounded-[5px] border border-border/60 bg-background p-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1.5 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[8px] uppercase tracking-wider text-muted-foreground", children: "Revenue by service" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[7px] tabular-nums text-foreground/40", children: "30d" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-8 items-end gap-1", children: [65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88, 72].map((h, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex-1 rounded-sm bg-gradient-to-t from-signature to-signature/60",
                style: { height: `${h}%` }
              },
              idx
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-[5px] border border-border/60 bg-background", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 border-b border-border/60 bg-muted/40 px-2 py-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[7px] uppercase tracking-wider text-muted-foreground", children: "Service" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-right font-mono text-[7px] uppercase tracking-wider text-muted-foreground", children: "Revenue" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-right font-mono text-[7px] uppercase tracking-wider text-muted-foreground", children: "Jobs" })
            ] }),
            [
              { c: "HVAC Install", r: "$38.2K", j: "34" },
              { c: "Repairs", r: "$28.4K", j: "67" },
              { c: "Maintenance", r: "$20.8K", j: "41" }
            ].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "grid grid-cols-3 gap-2 border-b border-border/40 px-2 py-1 last:border-0",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-muted-foreground", children: row.c }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-right text-[8px] font-medium tabular-nums text-foreground", children: row.r }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-right text-[8px] tabular-nums text-mint", children: row.j })
                ]
              },
              row.c
            ))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-[5px] border border-border/60 bg-background/85 px-1.5 py-0.5 font-mono text-[7px] text-muted-foreground backdrop-blur-sm", children: "Powered by e2b.dev" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border/60 bg-background p-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "truncate text-[11px] font-semibold text-foreground transition-colors group-hover/preview:text-signature", children: title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3 text-muted-foreground transition-all group-hover/preview:translate-x-0.5 group-hover/preview:text-signature" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 truncate text-[9px] text-muted-foreground", children: url })
        ] }) }) })
      ]
    }
  ) });
}
const BentoSection = reactExports.lazy(
  () => import("./BentoSection-BSeFArKG.js").then((m) => ({ default: m.BentoSection }))
);
const FeaturesShowcaseSection = reactExports.lazy(
  () => import("./FeaturesShowcaseSection-D5ZgKPuZ.js").then((m) => ({
    default: m.FeaturesShowcaseSection
  }))
);
const SavingsCalculatorSection = reactExports.lazy(
  () => import("./SavingsCalculatorSection-Ro6ZE4IL.js").then((m) => ({
    default: m.SavingsCalculatorSection
  }))
);
const FeaturesSection = reactExports.lazy(
  () => import("./HowItWorksSection-CovBBYjX.js").then((m) => ({ default: m.FeaturesSection }))
);
const AgentsSection = reactExports.lazy(
  () => import("./AgentsSection-DPzpnrF1.js").then((m) => ({ default: m.AgentsSection }))
);
const MemorySection = reactExports.lazy(
  () => import("./MemorySection-D5kfUC95.js").then((m) => ({ default: m.MemorySection }))
);
const PricingSection = reactExports.lazy(
  () => import("./PricingSection-DYsTBW9W.js").then((m) => ({ default: m.PricingSection }))
);
const IntegrationsSection = reactExports.lazy(
  () => import("./IntegrationsSection-BAJCvJlm.js").then((m) => ({
    default: m.IntegrationsSection
  }))
);
const TestimonialsSection = reactExports.lazy(
  () => import("./TestimonialsSection-DlUjemwe.js").then((m) => ({
    default: m.TestimonialsSection
  }))
);
const FAQSection = reactExports.lazy(
  () => import("./FAQSection-ZuGwpiKM.js").then((m) => ({ default: m.FAQSection }))
);
const CTASection = reactExports.lazy(
  () => import("./CTASection-W97BLrJq.js").then((m) => ({ default: m.CTASection }))
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
export {
  HomePage as component
};
