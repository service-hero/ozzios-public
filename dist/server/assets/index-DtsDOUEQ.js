import { n as jsxRuntimeExports, a as reactExports } from "./worker-entry-DQqzEwj7.js";
import { u as useAudience, b as audienceContent, c as Bot, W as Workflow, U as Users, L as LandingLayout } from "./LandingLayout-BoCruZjy.js";
import { B as Button } from "./button-35jeRZKs.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { A as ArrowRight } from "./arrow-right-BizuN90N.js";
import { P as Play } from "./play-pmHI1Zkg.js";
import { S as Shield } from "./shield-C55_3jtV.js";
import { H as Hash } from "./hash-B08M5E2k.js";
import { S as Search } from "./search-CQWrQZTw.js";
import { S as Sparkles } from "./sparkles-BTMOdavJ.js";
import { S as Send } from "./send-B2RUDFol.js";
import { C as CircleCheck } from "./circle-check-eCaKvzpu.js";
function AnimatedBackground({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("ozzi-ambient pointer-events-none absolute inset-0 overflow-hidden", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ozzi-ambient-grid absolute inset-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ozzi-ambient-lines absolute inset-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ozzi-ambient-orb ozzi-ambient-orb-signature absolute right-[8%] top-[-12%] h-[26rem] w-[26rem] rounded-full" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ozzi-ambient-orb ozzi-ambient-orb-ink absolute left-[-12%] top-[18%] h-[32rem] w-[32rem] rounded-full" })
  ] });
}
const platformNames = [
  "Housecall Pro",
  "ServiceTitan",
  "Google Ads",
  "GBP",
  "Twilio",
  "WordPress",
  "Stripe",
  "Resend"
];
const workspaceChannels = ["lead-follow-up", "review-requests", "spring-promo", "voice-bookings"];
const activityFeed = [
  {
    agent: "SEO Specialist",
    task: "Published a fresh service-area page and queued schema updates.",
    status: "Ready for review"
  },
  {
    agent: "Dispatch Assistant",
    task: "Moved three missed calls into callback tasks with owner notes.",
    status: "Completed"
  },
  {
    agent: "Campaign Manager",
    task: "Prepared a Google Ads adjustment based on last week’s CAC trend.",
    status: "Awaiting approval"
  }
];
const workflowStages = [
  {
    title: "Capture lead",
    detail: "Widget, forms, and calls flow into one queue.",
    icon: Search
  },
  {
    title: "Plan response",
    detail: "Agents draft the next best action instantly.",
    icon: Sparkles
  },
  {
    title: "Route work",
    detail: "Tasks move to the right teammate or AI worker.",
    icon: Users
  },
  {
    title: "Launch follow-up",
    detail: "Email, SMS, and callbacks are queued automatically.",
    icon: Send
  }
];
const operatingPrinciples = [
  {
    title: "Autonomous execution",
    description: "Agents handle repetitive work without waiting for another kickoff meeting.",
    icon: Bot
  },
  {
    title: "Human approvals",
    description: "Important decisions stay visible, reviewable, and easy to approve.",
    icon: Shield
  },
  {
    title: "Persistent context",
    description: "Every campaign, customer touchpoint, and workflow stays attached to the business.",
    icon: Workflow
  }
];
function HeroSection() {
  const { audience } = useAudience();
  const hero = audienceContent[audience].hero;
  const cta = audienceContent[audience].cta;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "hero",
      className: "relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-background",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedBackground, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-2 backdrop-blur-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-signature" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground", children: "The AI Platform Built for Service Companies" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-[clamp(2.8rem,8vw,5.9rem)] leading-[0.94] tracking-[-0.04em] text-foreground", children: [
              hero.headline[0],
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-signature", children: hero.headline[1] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-8 max-w-3xl text-lg font-light leading-relaxed text-muted-foreground sm:text-xl", children: hero.subheadline }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-2xl text-sm uppercase tracking-[0.24em] text-muted-foreground/80 sm:text-[13px]", children: hero.subtext }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "lg",
                  asChild: true,
                  className: "h-12 rounded-md bg-signature px-6 text-sm font-semibold text-white hover:bg-signature/90",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://app.ozzios.com/sign-up", children: [
                    cta.primaryButton,
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#platform-preview",
                  className: "inline-flex h-12 items-center gap-2 rounded-md border border-border/60 bg-background/80 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-muted",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-4 w-4" }),
                    cta.secondaryButton
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-4 border-y border-border/40 py-8 sm:grid-cols-2 lg:grid-cols-4", children: hero.stats.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/50 bg-background/70 p-5 text-center backdrop-blur-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-semibold tracking-tight text-foreground", children: stat.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground", children: stat.label })
          ] }, stat.label)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              id: "platform-preview",
              className: "mt-20 grid gap-6 rounded-[2rem] border border-border/60 bg-background/80 p-6 shadow-[0_32px_120px_-60px_rgba(0,0,0,0.45)] backdrop-blur-sm lg:grid-cols-[1.05fr_1.25fr] lg:p-8",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between rounded-[1.5rem] border border-border/60 bg-card/90 p-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 rounded-full border border-signature/20 bg-signature/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-signature", children: "Autonomous Workspace" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 max-w-lg font-display text-4xl leading-tight tracking-[-0.03em] text-foreground", children: "One operator view for every agent, campaign, and follow-up." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xl text-base leading-relaxed text-muted-foreground", children: "This animated workspace distills the core flow users care about: leads arrive, agents coordinate work, approvals stay visible, and follow-up launches without bouncing between tools." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-3", children: operatingPrinciples.map((item) => {
                    const Icon = item.icon;
                    return /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "rounded-2xl border border-border/60 bg-background/80 p-4",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-2xl bg-signature/10 text-signature", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: item.title }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm leading-relaxed text-muted-foreground", children: item.description })
                          ] })
                        ] })
                      },
                      item.title
                    );
                  }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground", children: "Works with the stack you already use" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: platformNames.map((name) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "rounded-full border border-border/60 bg-muted/60 px-3 py-1.5 text-[12px] font-medium text-foreground",
                        children: name
                      },
                      name
                    )) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ozzi-preview-shell rounded-[1.5rem] border border-foreground/10 bg-foreground text-background shadow-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-white/10 px-5 py-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2.5 w-2.5 rounded-full bg-[#FF5F57]" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2.5 w-2.5 rounded-full bg-[#28C840]" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/60", children: "app.ozzios.com" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45", children: "Live" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 p-5 lg:grid-cols-[0.86fr_1.14fr]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3.5 w-3.5" }),
                        "Team Channels"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-2", children: workspaceChannels.map((channel, index2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: index2 === 0 ? "ozzi-preview-active-channel flex items-center justify-between rounded-2xl border border-signature/20 bg-signature/10 px-3 py-2 text-sm" : "ozzi-preview-channel flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white/80",
                          style: index2 === 0 ? void 0 : { animationDelay: `${index2 * 1.1}s` },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Hash, { className: "h-3.5 w-3.5" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: channel })
                            ] }),
                            index2 === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80", children: "active" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-white/35" })
                          ]
                        },
                        channel
                      )) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-3.5 w-3.5" }),
                          "Signal Snapshot"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-white/[0.04] p-3", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-semibold text-white", children: "12" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs uppercase tracking-[0.18em] text-white/45", children: "new leads" })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-white/[0.04] p-3", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-semibold text-white", children: "4" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs uppercase tracking-[0.18em] text-white/45", children: "approvals waiting" })
                          ] })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45", children: "Agent Activity" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-xl font-semibold text-white", children: "Today's operating feed" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/60", children: "Service Hero" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-5 overflow-hidden rounded-2xl border border-signature/15 bg-signature/[0.08] p-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ozzi-preview-scan-line" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.22em] text-signature/80", children: "Automation Run" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-white/75", children: "A new lead gets captured, scored, routed, and followed up automatically." })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full border border-signature/20 bg-signature/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-signature", children: "in progress" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid gap-3 md:grid-cols-2", children: workflowStages.map((stage, index2) => {
                          const Icon = stage.icon;
                          return /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "ozzi-preview-stage rounded-2xl border border-white/10 bg-white/[0.04] p-4",
                              style: { animationDelay: `${index2 * 0.9}s` },
                              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-white", children: stage.title }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ozzi-preview-status-dot h-2.5 w-2.5 rounded-full bg-signature" })
                                  ] }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm leading-relaxed text-white/65", children: stage.detail }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-1.5 overflow-hidden rounded-full bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "div",
                                    {
                                      className: "ozzi-preview-progress h-full rounded-full bg-signature",
                                      style: { animationDelay: `${index2 * 0.9}s` }
                                    }
                                  ) })
                                ] })
                              ] })
                            },
                            stage.title
                          );
                        }) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 space-y-3", children: activityFeed.map((item, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "ozzi-preview-feed-card rounded-2xl border border-white/10 bg-white/[0.04] p-4",
                          style: { animationDelay: `${index2 * 1.1}s` },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-signature/15 text-signature", children: index2 === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }) : index2 === 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Workflow, { className: "h-4 w-4" }) }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-white", children: item.agent }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm leading-relaxed text-white/65", children: item.task })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ozzi-preview-status-dot h-2 w-2 rounded-full bg-signature" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.status })
                            ] })
                          ] })
                        },
                        item.agent
                      )) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid gap-3 md:grid-cols-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-white/10 bg-white/[0.04] p-4", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.2em] text-white/45", children: "Response time" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-2xl font-semibold text-white", children: "2.4m" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-white/10 bg-white/[0.04] p-4", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.2em] text-white/45", children: "Active automations" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-2xl font-semibold text-white", children: "18" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-white/10 bg-white/[0.04] p-4", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.2em] text-white/45", children: "Next handoff" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-2 text-sm font-semibold text-white", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4 text-signature" }),
                            "3 review requests"
                          ] })
                        ] })
                      ] })
                    ] })
                  ] })
                ] })
              ]
            }
          )
        ] })
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
  () => import("./BentoSection-U3aHlKOH.js").then((m) => ({ default: m.BentoSection }))
);
const FeaturesShowcaseSection = reactExports.lazy(
  () => import("./FeaturesShowcaseSection-t5UKloZH.js").then((m) => ({
    default: m.FeaturesShowcaseSection
  }))
);
const SavingsCalculatorSection = reactExports.lazy(
  () => import("./SavingsCalculatorSection-qpbZWG83.js").then((m) => ({
    default: m.SavingsCalculatorSection
  }))
);
const FeaturesSection = reactExports.lazy(
  () => import("./HowItWorksSection-BxbX_Jid.js").then((m) => ({ default: m.FeaturesSection }))
);
const AgentsSection = reactExports.lazy(
  () => import("./AgentsSection-E-hx7Kdw.js").then((m) => ({ default: m.AgentsSection }))
);
const MemorySection = reactExports.lazy(
  () => import("./MemorySection-DjomXYwB.js").then((m) => ({ default: m.MemorySection }))
);
const PricingSection = reactExports.lazy(
  () => import("./PricingSection-CUztPjos.js").then((m) => ({ default: m.PricingSection }))
);
const IntegrationsSection = reactExports.lazy(
  () => import("./IntegrationsSection-DlHCQJst.js").then((m) => ({
    default: m.IntegrationsSection
  }))
);
const TestimonialsSection = reactExports.lazy(
  () => import("./TestimonialsSection-CzZ_ycVO.js").then((m) => ({
    default: m.TestimonialsSection
  }))
);
const FAQSection = reactExports.lazy(
  () => import("./FAQSection-DoRPjdCs.js").then((m) => ({ default: m.FAQSection }))
);
const CTASection = reactExports.lazy(
  () => import("./CTASection-DyY85weB.js").then((m) => ({ default: m.CTASection }))
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
    let script = null;
    let timeoutId = null;
    let idleId = null;
    let cleanedUp = false;
    const loadWidget = () => {
      if (cleanedUp || script) {
        return;
      }
      script = document.createElement("script");
      script.src = "https://ozzios-widget.garrett-b4a.workers.dev/loader.js?key=wgt_984c617ef77d7cde1d6c96436945fbaf654aa91748c7b628";
      script.async = true;
      document.head.appendChild(script);
      removeInteractionListeners();
    };
    const handleInteraction = () => {
      loadWidget();
    };
    const interactionEvents = ["pointerdown", "keydown", "touchstart"];
    const addInteractionListeners = () => {
      interactionEvents.forEach((eventName) => {
        window.addEventListener(eventName, handleInteraction, {
          once: true,
          passive: true
        });
      });
      window.addEventListener("scroll", handleInteraction, {
        once: true,
        passive: true
      });
    };
    function removeInteractionListeners() {
      interactionEvents.forEach((eventName) => {
        window.removeEventListener(eventName, handleInteraction);
      });
      window.removeEventListener("scroll", handleInteraction);
    }
    addInteractionListeners();
    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(loadWidget, {
        timeout: 4e3
      });
    } else {
      timeoutId = window.setTimeout(loadWidget, 4e3);
    }
    return () => {
      cleanedUp = true;
      removeInteractionListeners();
      if (idleId !== null && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
      if (script?.parentNode) {
        script.parentNode.removeChild(script);
      }
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
