import { j as jsxRuntimeExports, m as motion } from "./vendor-framer-DZFBeC81.js";
import { L as Link } from "./vendor-router-DD_41qJ4.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { a as useAudience, b as audienceContent } from "./LandingLayout-Dblq4RXp.js";
import { B as BackgroundField, E as EASE_OUT, S as SectionHeader, e as SectionHeading, K as Kbd } from "./_landing-primitives-Bieps6V3.js";
import { aa as Bot, a3 as Layers, U as Users, aK as Workflow, a8 as Briefcase, az as Megaphone, I as ChartColumn, r as ArrowUpRight } from "./vendor-icons-D94uOSxG.js";
import "./vendor-react-MO5I_vdy.js";
import "./vendor-radix-Bd9PM-r6.js";
import "node:async_hooks";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 }
  }
};
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } }
};
const platformAgents = [
  { name: "SEO Specialist", status: "active" },
  { name: "Content Writer", status: "active" },
  { name: "Data Analyst", status: "idle" },
  { name: "Social Manager", status: "active" }
];
const workflowMetrics = [
  { value: "22", label: "Triggers" },
  { value: "8", label: "Node types" },
  { value: "99.9%", label: "Uptime" }
];
const marketingPlatforms = [
  { name: "Facebook", logo: "/images/facebook-icon.svg" },
  { name: "Google", logo: "/images/google-logo.svg" },
  { name: "TikTok", logo: "/images/tiktok-logo.svg" },
  { name: "YouTube", logo: "/images/youtube-logo.webp" }
];
function BentoSection() {
  const { audience } = useAudience();
  const content = audienceContent[audience].bento;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "features", className: "relative isolate overflow-hidden py-28 lg:py-36", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackgroundField, { variant: "top-right" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
        variants: containerVariants,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "mb-16 lg:mb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              eyebrow: content.sectionLabel,
              headlineLines: [content.headline[0], content.headline[1]],
              sub: content.subheadline
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-4 lg:gap-5", style: { gridAutoFlow: "dense" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "col-span-12 lg:col-span-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BentoCard, { featured: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid h-full min-h-[340px] grid-cols-1 lg:grid-cols-[2fr_3fr]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-48 overflow-hidden lg:h-auto", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: "/images/Gemini_Generated_Image_1vp39x1vp39x1vp3.webp",
                    alt: "AI marketing team collaborating",
                    className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-[1.04]"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    "aria-hidden": true,
                    className: "absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/95"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col p-7 lg:p-9", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 inline-flex items-center gap-1.5 self-start rounded-[5px] border border-signature/25 bg-signature/10 px-2 py-0.5 font-mono text-[9.5px] font-semibold uppercase tracking-wider text-signature", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-3 w-3" }),
                  content.cards.aiWorkforce.badge
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-[1.6rem] font-semibold leading-[1.05] tracking-[-0.025em] text-foreground sm:text-[1.85rem]", children: content.cards.aiWorkforce.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-[42ch] text-[13.5px] leading-[1.55] text-muted-foreground", children: content.cards.aiWorkforce.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pt-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { label: "On duty" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-1.5", children: platformAgents.map((agent) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center gap-2 rounded-md border border-border/60 bg-background/60 px-2.5 py-2",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: cn(
                              "h-1.5 w-1.5 shrink-0 rounded-full",
                              agent.status === "active" ? "bg-mint" : "bg-foreground/20"
                            )
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate text-[12px] font-medium text-foreground/85", children: agent.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto font-mono text-[8.5px] uppercase tracking-wider text-foreground/40", children: agent.status })
                      ]
                    },
                    agent.name
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BentoLink, { href: "/features/ai-agents", label: "Explore AI Agents" })
                ] })
              ] })
            ] }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "col-span-12 sm:col-span-6 lg:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BentoCard, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BentoIcon, { Icon: Layers }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-[17px] font-semibold leading-tight text-foreground", children: content.cards.tools.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[13px] leading-[1.55] text-muted-foreground", children: content.cards.tools.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-1.5", children: ["Tasks", "Reports", "Memory", "Search"].map((tool) => /* @__PURE__ */ jsxRuntimeExports.jsx(Kbd, { className: "h-[20px] px-1.5 text-[10px] uppercase tracking-wider", children: tool }, tool)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(BentoLink, { href: "/features/dashboard", label: "See all tools", className: "mt-auto pt-5" })
            ] }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "col-span-12 sm:col-span-6 lg:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BentoCard, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BentoIcon, { Icon: Users }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-[17px] font-semibold leading-tight text-foreground", children: content.cards.communication.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[13px] leading-[1.55] text-muted-foreground", children: content.cards.communication.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-1.5", children: ["Channels", "Forums", "Voice", "Roles"].map((feature) => /* @__PURE__ */ jsxRuntimeExports.jsx(Kbd, { className: "h-[20px] px-1.5 text-[10px] uppercase tracking-wider", children: feature }, feature)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(BentoLink, { href: "/features/channels", label: "Explore channels", className: "mt-auto pt-5" })
            ] }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "col-span-12 lg:col-span-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BentoCard, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid h-full min-h-[300px] grid-cols-1 lg:grid-cols-[3fr_2fr]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col p-7 lg:p-9", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BentoIcon, { Icon: Workflow }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-[1.5rem] font-semibold leading-[1.05] tracking-[-0.025em] text-foreground sm:text-[1.7rem]", children: content.cards.workflows.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-[42ch] text-[13.5px] leading-[1.55] text-muted-foreground", children: content.cards.workflows.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pt-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-md border border-border/60 bg-background/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 divide-x divide-border/60", children: workflowMetrics.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-[1.3rem] font-semibold leading-none tabular-nums tracking-[-0.02em] text-foreground", children: m.value }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5 font-mono text-[9.5px] uppercase tracking-[0.18em] text-foreground/45", children: m.label })
                  ] }, m.label)) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BentoLink, { href: "/features/workflows", label: "Explore workflows" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-48 overflow-hidden order-first lg:order-last lg:h-auto", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: "/images/Gemini_Generated_Image_yam1khyam1khyam1.webp",
                    alt: "Automated marketing workflow",
                    className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-[1.04]"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    "aria-hidden": true,
                    className: "absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/95"
                  }
                )
              ] })
            ] }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "col-span-12 sm:col-span-6 lg:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BentoCard, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BentoIcon, { Icon: Briefcase }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-[17px] font-semibold leading-tight text-foreground", children: content.cards.crm.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[13px] leading-[1.55] text-muted-foreground", children: content.cards.crm.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pt-5 flex items-baseline gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-[2rem] font-semibold leading-none tabular-nums tracking-[-0.025em] text-foreground", children: "31" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9.5px] uppercase tracking-[0.18em] text-foreground/45", children: "Contact fields" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(BentoLink, { href: "/features/crm", label: "Explore CRM" })
            ] }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "col-span-12 sm:col-span-6 lg:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BentoCard, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BentoIcon, { Icon: Megaphone }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-[17px] font-semibold leading-tight text-foreground", children: content.cards.marketing.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[13px] leading-[1.55] text-muted-foreground", children: content.cards.marketing.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-1.5", children: marketingPlatforms.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "inline-flex items-center gap-1.5 rounded-[5px] border border-border/60 bg-background px-2 py-1 text-[11px] font-medium text-foreground/75",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.logo, alt: p.name, className: "h-3 w-3 rounded-sm object-contain" }),
                    p.name
                  ]
                },
                p.name
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(BentoLink, { href: "/features/email-campaigns", label: "Explore marketing", className: "mt-auto pt-5" })
            ] }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "col-span-12 sm:col-span-6 lg:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BentoCard, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BentoIcon, { Icon: ChartColumn }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-[17px] font-semibold leading-tight text-foreground", children: content.cards.multiTenant.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[13px] leading-[1.55] text-muted-foreground", children: content.cards.multiTenant.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pt-5 flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-foreground/55", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tabular-nums text-foreground/85", children: "650+" }),
                "indexes",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-px bg-border/60" }),
                "Workspace isolation"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(BentoLink, { href: "/features/dashboard", label: "Explore dashboard" })
            ] }) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              variants: itemVariants,
              className: "mt-6 overflow-hidden rounded-md border border-border/60 bg-background/60 backdrop-blur",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-stretch divide-y divide-border/60 sm:flex-row sm:items-center sm:divide-x sm:divide-y-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 items-center gap-4 px-5 py-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-[1.6rem] font-semibold leading-none tabular-nums tracking-[-0.025em] text-foreground", children: "17" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-foreground", children: "Features across 4 categories" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-[12px] leading-[1.5] text-muted-foreground", children: "Email, SMS, social, forms, voice agents, dashboards, coding, and more." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "#showcase",
                    className: cn(
                      "group/cta relative inline-flex shrink-0 items-center justify-center gap-2 overflow-hidden bg-foreground px-5 py-3 text-[13px] font-medium text-background transition-colors hover:bg-[#1a1410] sm:m-2 sm:rounded-md"
                    ),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" }),
                      "See all features",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3.5 w-3.5 transition-transform group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" })
                    ]
                  }
                )
              ] })
            }
          )
        ]
      }
    ) })
  ] });
}
function BentoCard({
  children,
  className,
  featured = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn(
        "group/card relative h-full overflow-hidden rounded-xl border bg-background/85 transition-all duration-300",
        featured ? "border-border/70 shadow-[0_18px_50px_-26px_rgba(34,27,22,0.30)] hover:-translate-y-0.5 hover:border-border hover:shadow-[0_22px_60px_-22px_rgba(34,27,22,0.40)]" : "border-border/60 shadow-[0_8px_30px_-18px_rgba(34,27,22,0.18)] hover:-translate-y-0.5 hover:border-border hover:shadow-[0_14px_40px_-18px_rgba(34,27,22,0.30)]",
        className
      ),
      children
    }
  );
}
function BentoIcon({ Icon }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/60 bg-background text-foreground/70 transition-colors duration-200 group-hover/card:border-foreground/25 group-hover/card:bg-foreground group-hover/card:text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) });
}
function BentoLink({
  href,
  label,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: href,
      className: cn(
        "group/lnk mt-4 inline-flex items-center gap-1.5 self-start text-[12.5px] font-medium text-foreground/70 transition-colors hover:text-signature",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative", children: [
          label,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-px left-0 h-px w-0 bg-signature transition-all duration-200 group-hover/lnk:w-full" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3 transition-transform duration-200 group-hover/lnk:-translate-y-0.5 group-hover/lnk:translate-x-0.5" })
      ]
    }
  );
}
export {
  BentoSection
};
