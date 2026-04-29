import { r as reactExports, u as useInView, j as jsxRuntimeExports, m as motion } from "./vendor-framer-DZFBeC81.js";
import { L as Link } from "./vendor-router-DD_41qJ4.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { a as useAudience, b as audienceContent } from "./LandingLayout-Dblq4RXp.js";
import { B as BackgroundField, S as SectionHeader, e as SectionHeading, E as EASE_OUT, K as Kbd } from "./_landing-primitives-Bieps6V3.js";
import { j as Search, a6 as Share2, l as Mail, a7 as Video, G as Globe, W as Wrench, aN as Palette, Z as Zap, r as ArrowUpRight, f as Sparkles } from "./vendor-icons-D94uOSxG.js";
import "./vendor-react-MO5I_vdy.js";
import "./vendor-radix-Bd9PM-r6.js";
import "node:async_hooks";
const showcaseAgents = [
  { name: "Google Ozzi", role: "Google Marketing", icon: Search, description: "Search campaigns, local SEO, Google Ads, analytics, GBP optimization", mp4: "/images/avatars/google-ozzi.mp4" },
  { name: "Facebook Ozzi", role: "Facebook & Instagram", icon: Share2, description: "Ad creation, audience targeting, page management, scheduling, optimization", mp4: "/images/avatars/facebook-ozzi.mp4" },
  { name: "Gmail Ozzi", role: "Email Marketing", icon: Mail, description: "Campaign writing, drip sequences, cold outreach, follow-up automation", mp4: "/images/avatars/gmail-ozzi.mp4" },
  { name: "YouTube Ozzi", role: "YouTube Growth", icon: Video, description: "Video SEO, titles & descriptions, thumbnail briefs, channel strategy", mp4: "/images/avatars/youtube-ozzi.mp4" },
  { name: "WordPress Ozzi", role: "WordPress Content", icon: Globe, description: "Blog writing, on-page SEO, publishing, keyword clustering, calendars", mp4: "/images/avatars/wordpress-ozzi.mp4" },
  { name: "Firecrawl Ozzi", role: "Web Intelligence", icon: Search, description: "Competitor research, web data extraction, market analysis, SERP tracking", mp4: "/images/avatars/firecrawl-ozzi.mp4" },
  { name: "Housecall Pro Ozzi", role: "Field Service Marketing", icon: Wrench, description: "Reviews, job follow-ups, local SEO, re-engagement, booking optimization", mp4: "/images/avatars/housecall-pro-ozzi.mp4" },
  { name: "ImageGen Ozzi", role: "AI Visual Creation", icon: Palette, description: "AI image prompting, ad creatives, social graphics, product imagery", mp4: "/images/avatars/openai-imagegen-ozzi.mp4" },
  { name: "Nano Banana Ozzi", role: "Micro-Task Automation", icon: Zap, description: "Rapid task execution, lightweight workflows, quick-turn content", mp4: "/images/avatars/nano-banana-ozzi.mp4" }
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } }
};
function AgentsSection() {
  const { audience } = useAudience();
  const content = audienceContent[audience].agents;
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeAgent, setActiveAgent] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "agents", className: "relative isolate overflow-hidden py-28 lg:py-36", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackgroundField, { variant: "top-left" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
          transition: { duration: 0.7 },
          className: "mb-14 lg:mb-20",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              eyebrow: content.sectionLabel,
              headlineLines: [content.headline[0], content.headline[1]],
              sub: content.subheadline
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "space-y-14 lg:space-y-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
            transition: { duration: 0.7 },
            className: "overflow-hidden rounded-xl border border-border/70 bg-background shadow-[0_18px_50px_-26px_rgba(34,27,22,0.30)]",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid min-h-[320px] grid-cols-1 lg:grid-cols-[2fr_3fr]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex min-h-[260px] items-center justify-center overflow-hidden bg-foreground lg:min-h-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(OzziSupervisorVideo, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    "aria-hidden": true,
                    className: "absolute inset-0 hidden bg-gradient-to-r from-transparent via-transparent to-background/95 lg:block"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-[5px] border border-white/15 bg-white/10 px-2 py-0.5 font-mono text-[9.5px] font-semibold uppercase tracking-wider text-white/85 backdrop-blur", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-mint" }),
                  "Online"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center p-7 lg:p-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5 inline-flex items-center gap-1.5 self-start rounded-[5px] border border-signature/25 bg-signature/10 px-2 py-0.5 font-mono text-[9.5px] font-semibold uppercase tracking-wider text-signature", children: "Team Supervisor" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-[1.7rem] font-semibold leading-[1.05] tracking-[-0.025em] text-foreground sm:text-[2rem]", children: "Meet Ozzi — your AI operations supervisor." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-[52ch] text-[14px] leading-[1.6] text-muted-foreground", children: "Think of Ozzi as the foreman for your AI agent team. He coordinates every agent — assigning tasks, reviewing outputs, catching errors. The same autonomous agent technology powering platforms like Manus, purpose-built for your trade." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3", children: [
                  { label: "Delegates tasks", description: "Assigns the right agent to every job" },
                  { label: "Reviews outputs", description: "Quality checks before anything goes live" },
                  { label: "Runs 24/7", description: "Never off the clock, never misses a beat" }
                ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border/60 bg-muted/30 p-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 shrink-0 rounded-full bg-signature" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12.5px] font-semibold text-foreground", children: item.label })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[11.5px] leading-[1.5] text-muted-foreground", children: item.description })
                ] }, item.label)) })
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { label: "Specialist agents" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10.5px] uppercase tracking-[0.18em] text-foreground/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tabular-nums text-foreground/85", children: "31" }),
              " available"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: "hidden",
              animate: isInView ? "visible" : "hidden",
              variants: containerVariants,
              className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
              children: [
                showcaseAgents.map((agent) => {
                  const isActive = activeAgent === agent.name;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      variants: itemVariants,
                      onMouseEnter: () => setActiveAgent(agent.name),
                      onMouseLeave: () => setActiveAgent(null),
                      className: cn(
                        "group/a relative cursor-pointer rounded-xl border bg-background p-4 transition-all duration-300",
                        isActive ? "border-signature/35 shadow-[0_18px_40px_-22px_rgba(196,88,63,0.30)]" : "border-border/60 hover:-translate-y-0.5 hover:border-border hover:shadow-[0_14px_30px_-18px_rgba(34,27,22,0.25)]"
                      ),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 shrink-0 overflow-hidden rounded-md ring-1 ring-signature/15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "video",
                            {
                              src: agent.mp4,
                              autoPlay: true,
                              loop: true,
                              muted: true,
                              playsInline: true,
                              controlsList: "nodownload",
                              disablePictureInPicture: true,
                              onContextMenu: (e) => e.preventDefault(),
                              className: "h-full w-full object-cover"
                            }
                          ) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "truncate text-[13.5px] font-semibold text-foreground", children: agent.name }),
                              isActive ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-mint" }) : null
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/45", children: agent.role })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[12px] leading-[1.5] text-muted-foreground", children: agent.description })
                      ]
                    },
                    agent.mp4
                  );
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    variants: itemVariants,
                    className: "group/m relative flex flex-col items-center justify-center rounded-xl border border-dashed border-border/70 bg-background/60 p-4 text-center transition-all duration-300 hover:border-signature/35 hover:bg-signature/[0.04]",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 flex -space-x-2", children: [
                        "/images/avatars/facebook-ozzi-v2.mp4",
                        "/images/avatars/youtube-ozzi.mp4",
                        "/images/avatars/google-ozzi.mp4",
                        "/images/avatars/wordpress-ozzi.mp4"
                      ].map((src) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "h-7 w-7 shrink-0 overflow-hidden rounded-full border-2 border-background",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "video",
                            {
                              src,
                              autoPlay: true,
                              loop: true,
                              muted: true,
                              playsInline: true,
                              controlsList: "nodownload",
                              disablePictureInPicture: true,
                              onContextMenu: (e) => e.preventDefault(),
                              className: "h-full w-full object-cover"
                            }
                          )
                        },
                        src
                      )) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13.5px] font-semibold text-foreground", children: "+22 more agents" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 text-[11.5px] leading-[1.4] text-muted-foreground", children: "HVAC, plumbing, roofing, electrical, and more" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Link,
                        {
                          to: "/features/ai-agents",
                          className: "mt-3 inline-flex items-center gap-1 text-[11.5px] font-medium text-foreground/65 transition-colors hover:text-signature",
                          children: [
                            "Explore the team",
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3" })
                          ]
                        }
                      )
                    ]
                  }
                )
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
          transition: { duration: 0.6, delay: 0.4 },
          className: "mt-14",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-md border border-border/60 bg-background/60 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 divide-y divide-border/60 sm:grid-cols-3 sm:divide-x sm:divide-y-0", children: [
              { value: "Trade-trained", label: "Built for home services" },
              { value: "You approve", label: "Actions before they happen" },
              { value: "Autonomous", label: "Manus-level agent intelligence" }
            ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-[15px] font-semibold text-foreground", children: item.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/45", children: item.label })
            ] }, item.value)) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Kbd, { className: "mr-1 h-[20px] px-2 text-[10px] uppercase tracking-wider", children: "Tip" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10.5px] uppercase tracking-[0.18em] text-foreground/45", children: "Hover any agent to see them activate" })
            ] })
          ]
        }
      )
    ] })
  ] });
}
function OzziSupervisorVideo() {
  const [loaded, setLoaded] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    !loaded ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-10 flex flex-col items-center justify-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "aria-hidden": true,
          className: "absolute inset-0 animate-pulse bg-[linear-gradient(135deg,rgba(36,28,22,1),rgba(50,36,27,1)_40%,rgba(196,88,63,0.18)_70%,rgba(36,28,22,1))]"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "aria-hidden": true,
          className: "absolute inset-0 opacity-[0.18]",
          style: {
            backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "20px 20px"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              "aria-hidden": true,
              className: "absolute inset-0 animate-ping rounded-full border border-signature/40",
              style: { animationDuration: "2.4s" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-signature" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.22em] text-white/55", children: "Loading Ozzi" })
      ] })
    ] }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "video",
      {
        src: "/images/ozzi-avatar.mp4",
        autoPlay: true,
        loop: true,
        muted: true,
        playsInline: true,
        preload: "auto",
        controlsList: "nodownload",
        disablePictureInPicture: true,
        onContextMenu: (e) => e.preventDefault(),
        onCanPlay: () => setLoaded(true),
        onLoadedData: () => setLoaded(true),
        className: cn(
          "h-full w-full object-cover transition-opacity duration-500 ease-out",
          loaded ? "opacity-100" : "opacity-0"
        )
      }
    )
  ] });
}
export {
  AgentsSection
};
