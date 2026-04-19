import { j as jsxRuntimeExports, m as motion } from "./vendor-framer-DZFBeC81.js";
import { c as cn } from "./button-DuL_ysbl.js";
import { L as Link } from "./vendor-router-DD_41qJ4.js";
import { u as useAudience, a as audienceContent } from "./LandingLayout-CPC6VFbg.js";
import { a0 as Bot, A as ArrowRight, N as Layers, U as Users, aK as Workflow, _ as Briefcase, ax as Megaphone, y as ChartColumn, S as Shield } from "./vendor-icons-RMyvaHp0.js";
import "./vendor-react-MO5I_vdy.js";
import "./vendor-radix-Bd9PM-r6.js";
import "node:async_hooks";
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
function BentoSection() {
  const { audience } = useAudience();
  const content = audienceContent[audience].bento;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "features",
      className: "relative overflow-hidden py-32 lg:py-40",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 top-24 h-72 bg-[radial-gradient(circle_at_top,rgba(196,88,63,0.12),transparent_58%)] blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1440px] px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true, margin: "-50px" },
            variants: containerVariants,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "mb-20 max-w-5xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-[0.72rem] font-medium uppercase tracking-[0.26em] text-foreground/45", children: content.sectionLabel }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "max-w-5xl text-[clamp(3rem,5.8vw,5.8rem)] font-display font-medium leading-[0.92] tracking-[-0.06em] text-foreground mb-6", children: [
                  content.headline[0],
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/78", children: content.headline[1] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-2xl text-lg leading-8 text-muted-foreground", children: content.subheadline })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-flow-dense grid-cols-12 gap-5 lg:gap-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "col-span-12 lg:col-span-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BentoCard, { featured: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row h-full min-h-[320px]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative lg:w-2/5 h-48 lg:h-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: "/images/Gemini_Generated_Image_1vp39x1vp39x1vp3.webp",
                      alt: "AI marketing team collaborating",
                      className: "absolute inset-0 w-full h-full object-cover"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-8 lg:p-10 flex flex-col", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-signature/20 bg-signature/10 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-signature", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-3.5 w-3.5" }),
                      content.cards.aiWorkforce.badge
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl lg:text-4xl font-display font-medium text-foreground mb-4", children: content.cards.aiWorkforce.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-muted-foreground leading-relaxed mb-10 font-light", children: content.cards.aiWorkforce.description }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto grid grid-cols-2 gap-3", children: [
                      { name: "SEO Specialist", status: "active" },
                      { name: "Content Writer", status: "active" },
                      { name: "Data Analyst", status: "idle" },
                      { name: "Social Manager", status: "active" }
                    ].map((agent) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "p-3 rounded-xl bg-muted/50 border border-border/50 hover:border-border transition-colors",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1.5", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                className: cn(
                                  "h-2 w-2 rounded-full",
                                  agent.status === "active" ? "bg-foreground" : "bg-border"
                                )
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground uppercase tracking-wider", children: agent.status })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground/80", children: agent.name })
                        ]
                      },
                      agent.name
                    )) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Link,
                      {
                        to: "/features/ai-agents",
                        className: "inline-flex items-center gap-1.5 mt-6 text-sm font-medium text-signature hover:text-signature/80 transition-colors",
                        children: [
                          "Explore AI Agents",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
                        ]
                      }
                    )
                  ] })
                ] }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "col-span-12 sm:col-span-6 lg:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BentoCard, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7 flex flex-col h-full", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl bg-signature/10 flex items-center justify-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-5 w-5 text-signature" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-foreground mb-2", children: content.cards.tools.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-5", children: content.cards.tools.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto flex flex-wrap gap-2", children: ["Tasks", "Reports", "Memory", "Search"].map((tool) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "px-2.5 py-1 text-xs font-medium text-muted-foreground bg-muted rounded-md",
                      children: tool
                    },
                    tool
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/features/dashboard",
                      className: "inline-flex items-center gap-1.5 mt-4 text-xs font-medium text-signature hover:text-signature/80 transition-colors",
                      children: [
                        "See all tools",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3" })
                      ]
                    }
                  )
                ] }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "col-span-12 sm:col-span-6 lg:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BentoCard, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7 flex flex-col h-full", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl bg-signature/10 flex items-center justify-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5 text-signature" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-foreground mb-2", children: content.cards.communication.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-5", children: content.cards.communication.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto flex flex-wrap gap-2", children: ["Channels", "Forums", "Voice", "Roles"].map((feature) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "px-2.5 py-1 text-xs font-medium text-muted-foreground bg-muted rounded-md",
                      children: feature
                    },
                    feature
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/features/channels",
                      className: "inline-flex items-center gap-1.5 mt-4 text-xs font-medium text-signature hover:text-signature/80 transition-colors",
                      children: [
                        "Explore channels",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3" })
                      ]
                    }
                  )
                ] }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "col-span-12 lg:col-span-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BentoCard, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row h-full min-h-[280px]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-8 lg:p-10", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl bg-signature/10 flex items-center justify-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Workflow, { className: "h-5 w-5 text-signature" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-foreground mb-3", children: content.cards.workflows.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-muted-foreground leading-relaxed mb-8", children: content.cards.workflows.description }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-6", children: [
                      { value: "22", label: "Triggers" },
                      { value: "8", label: "Node Types" },
                      { value: "99.9%", label: "Uptime" }
                    ].map((metric) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-semibold text-foreground", children: metric.value }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wider mt-1", children: metric.label })
                    ] }, metric.label)) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Link,
                      {
                        to: "/features/workflows",
                        className: "inline-flex items-center gap-1.5 mt-6 text-sm font-medium text-signature hover:text-signature/80 transition-colors",
                        children: [
                          "Explore workflows",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative lg:w-2/5 h-48 lg:h-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: "/images/Gemini_Generated_Image_yam1khyam1khyam1.webp",
                      alt: "Automated marketing workflow",
                      className: "absolute inset-0 w-full h-full object-cover"
                    }
                  ) })
                ] }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "col-span-12 sm:col-span-6 lg:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BentoCard, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7 flex flex-col h-full", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl bg-signature/10 flex items-center justify-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-5 w-5 text-signature" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-foreground mb-2", children: content.cards.crm.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-5", children: content.cards.crm.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex items-baseline gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-semibold text-foreground", children: "31" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "contact fields" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/features/crm",
                      className: "inline-flex items-center gap-1.5 mt-4 text-xs font-medium text-signature hover:text-signature/80 transition-colors",
                      children: [
                        "Explore CRM",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3" })
                      ]
                    }
                  )
                ] }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "col-span-12 sm:col-span-6 lg:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BentoCard, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7 flex flex-col h-full", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl bg-signature/10 flex items-center justify-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { className: "h-5 w-5 text-signature" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-foreground mb-2", children: content.cards.marketing.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-5", children: content.cards.marketing.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto flex flex-wrap gap-2", children: [
                    { name: "Facebook", logo: "/images/facebook-icon.svg" },
                    { name: "Google", logo: "/images/google-logo.svg" },
                    { name: "TikTok", logo: "/images/tiktok-logo.svg" },
                    { name: "YouTube", logo: "/images/youtube-logo.webp" }
                  ].map((platform) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-muted-foreground bg-muted rounded-md",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: platform.logo, alt: platform.name, className: "w-3.5 h-3.5 rounded-sm object-cover" }),
                        platform.name
                      ]
                    },
                    platform.name
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/features/email-campaigns",
                      className: "inline-flex items-center gap-1.5 mt-4 text-xs font-medium text-signature hover:text-signature/80 transition-colors",
                      children: [
                        "Explore marketing",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3" })
                      ]
                    }
                  )
                ] }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "col-span-12 sm:col-span-6 lg:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BentoCard, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7 flex flex-col h-full", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl bg-signature/10 flex items-center justify-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "h-5 w-5 text-signature" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-foreground mb-2", children: content.cards.multiTenant.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-5", children: content.cards.multiTenant.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto text-sm text-muted-foreground", children: "650+ indexes / Workspace isolation" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/features/dashboard",
                      className: "inline-flex items-center gap-1.5 mt-4 text-xs font-medium text-signature hover:text-signature/80 transition-colors",
                      children: [
                        "Explore dashboard",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3" })
                      ]
                    }
                  )
                ] }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "col-span-12 sm:col-span-6 lg:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BentoCard, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7 flex flex-col h-full", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl bg-signature/10 flex items-center justify-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-5 w-5 text-signature" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-foreground mb-2", children: content.cards.security.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-5", children: content.cards.security.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 rounded-full bg-signature" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-signature", children: "Built-in Security" })
                  ] })
                ] }) }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "mt-8 rounded-[2rem] border border-white/80 bg-white/70 p-6 shadow-[0_20px_60px_rgba(56,40,29,0.08)] backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "17 features across 4 categories" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-xs text-muted-foreground", children: "Email campaigns, SMS, social media, forms, voice agents, dashboards, coding, and more." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "#showcase",
                    className: "inline-flex shrink-0 items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90",
                    children: [
                      "See all features",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                    ]
                  }
                )
              ] }) })
            ]
          }
        ) })
      ]
    }
  );
}
function BentoCard({
  children,
  className,
  featured = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "group relative overflow-hidden rounded-[2rem] bg-white/80 transition-all duration-500 ease-out",
        featured ? "border border-white/80 shadow-[0_24px_70px_rgba(56,40,29,0.08)] hover:-translate-y-1 hover:shadow-[0_34px_90px_rgba(56,40,29,0.12)]" : "border border-white/70 shadow-[0_16px_48px_rgba(56,40,29,0.06)] hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(56,40,29,0.1)]",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(233,222,214,0.28)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
        children
      ]
    }
  );
}
export {
  BentoSection
};
