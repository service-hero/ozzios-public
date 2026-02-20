import { n as jsxRuntimeExports } from "./worker-entry-B5eyDbT7.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { m as motion, A as ArrowRight } from "./proxy-CClMHKlh.js";
import { W as Wrench } from "./wrench-BepHrOf7.js";
import { U as Users, h as Code, c as Bot } from "./LandingLayout-DPGYOMoS.js";
import { c as createLucideIcon } from "./createLucideIcon-BabvJ7L_.js";
import { S as Server } from "./server-DlGaNyo3.js";
import { C as Clock } from "./clock-BPee9gmb.js";
import { S as Sparkles } from "./sparkles-BBbPpkNr.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "./router-CRqcsHLj.js";
import "./button-CdRR1kGv.js";
import "./menu-CRWpwPmx.js";
const __iconNode$1 = [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
];
const Cloud = createLucideIcon("cloud", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
      key: "1a0edw"
    }
  ],
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }]
];
const Package = createLucideIcon("package", __iconNode);
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
const comparisonRows = [
  {
    label: "Setup",
    icon: Wrench,
    openclaw: "Self-hosted on VPS or Cloudflare. Requires CLI, Docker, and config files.",
    ozzios: "Sign up and start. No servers, no config, no DevOps.",
    openclawShort: "DIY infrastructure",
    ozziosShort: "Instant — zero setup"
  },
  {
    label: "AI Agents",
    icon: Users,
    openclaw: "One general-purpose agent you configure yourself with prompts and tools.",
    ozzios: "30+ specialized agents — SEO, content, social, ads, analytics — working as a team.",
    openclawShort: "1 general agent",
    ozziosShort: "30+ specialist agents"
  },
  {
    label: "Built-in Tools",
    icon: Package,
    openclaw: "Bring your own. Connect external APIs, tools, and services manually.",
    ozzios: "77+ tools included — CRM, email, social scheduling, SEO, forms, and more.",
    openclawShort: "BYOT (bring your own)",
    ozziosShort: "77+ tools included"
  },
  {
    label: "Technical Skill",
    icon: Code,
    openclaw: "Developers and technical users. Requires command line and server management.",
    ozzios: "Built for business owners and agencies. No code required.",
    openclawShort: "Developer required",
    ozziosShort: "No code needed"
  },
  {
    label: "Infrastructure",
    icon: Server,
    openclaw: "You manage servers, updates, uptime, and security patches.",
    ozzios: "Fully managed. Enterprise-grade security. 99.9% uptime SLA.",
    openclawShort: "You manage it",
    ozziosShort: "Fully managed"
  },
  {
    label: "Time to Value",
    icon: Clock,
    openclaw: "Hours to days of setup before your first automated workflow runs.",
    ozzios: "First AI employee working within 5 minutes of signup.",
    openclawShort: "Hours to days",
    ozziosShort: "5 minutes"
  }
];
function ComparisonSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "comparison", className: "py-24 lg:py-32 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, margin: "-100px" },
      variants: containerVariants,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "text-center mb-16 lg:mb-24 max-w-3xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-px bg-signature" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold text-signature uppercase tracking-[0.2em]", children: "How We're Different" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-px bg-signature" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl lg:text-5xl font-display font-medium tracking-tight text-foreground mb-6 leading-[1.1]", children: [
            "Open-source agent",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/80", children: "vs. your AI team" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed font-light", children: "OpenClaw is a powerful open-source tool for developers. OzziOS is a complete AI marketing team for businesses. Different tools, different jobs." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden space-y-3", children: comparisonRows.map((row) => {
          const Icon = row.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              variants: itemVariants,
              className: "rounded-xl border border-border/80 bg-card p-5 shadow-sm",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-signature/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-signature" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground", children: row.label })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 mt-0.5 h-5 w-5 rounded-full bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-3 w-3 text-muted-foreground" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wide", children: "OpenClaw" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: row.openclawShort })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 mt-0.5 h-5 w-5 rounded-full bg-signature/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 text-signature" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-signature uppercase tracking-wide", children: "OzziOS" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground font-medium mt-0.5", children: row.ozziosShort })
                    ] })
                  ] })
                ] })
              ]
            },
            row.label
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            variants: itemVariants,
            className: "hidden lg:block rounded-xl border border-border/80 bg-card overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1fr_1fr_1fr] border-b border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 border-l border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-xl bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-5 w-5 text-muted-foreground" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold text-foreground", children: "OpenClaw" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Open-source AI agent" })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 border-l border-signature/20 bg-signature/[0.03]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-xl bg-signature/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-signature" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold text-foreground", children: "OzziOS" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Your AI marketing team" })
                  ] })
                ] }) })
              ] }),
              comparisonRows.map((row, index) => {
                const Icon = row.icon;
                const isLast = index === comparisonRows.length - 1;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: cn(
                      "grid grid-cols-[1fr_1fr_1fr]",
                      !isLast && "border-b border-border/50"
                    ),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex items-start gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 h-8 w-8 rounded-lg bg-muted/50 flex items-center justify-center mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-muted-foreground" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground pt-1", children: row.label })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 border-l border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: row.openclaw }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 border-l border-signature/20 bg-signature/[0.03]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground leading-relaxed font-medium", children: row.ozzios }) })
                    ]
                  },
                  row.label
                );
              })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            variants: itemVariants,
            className: "mt-16 p-8 lg:p-10 rounded-xl bg-muted/30 border border-border/50",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-md bg-card border border-border/80 flex items-center justify-center shrink-0 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cloud, { className: "h-5 w-5 text-signature" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium text-foreground mb-1", children: "Both are great. Pick the right one." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-light max-w-xl leading-relaxed", children: "If you're a developer who wants full control and loves tinkering — OpenClaw is fantastic. If you want a marketing team that works out of the box without managing infrastructure — that's OzziOS." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "/waitlist",
                  className: "inline-flex items-center gap-2 shrink-0 rounded-md bg-signature px-6 py-3 text-sm font-medium text-white hover:bg-signature/90 transition-all duration-200 group",
                  children: [
                    "Try OzziOS free",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
                  ]
                }
              )
            ] })
          }
        )
      ]
    }
  ) }) });
}
export {
  ComparisonSection
};
