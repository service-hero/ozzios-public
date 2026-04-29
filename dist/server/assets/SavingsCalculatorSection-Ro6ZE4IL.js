import { r as reactExports, u as useInView, j as jsxRuntimeExports, m as motion, A as AnimatePresence } from "./vendor-framer-DZFBeC81.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { a as useAudience } from "./LandingLayout-Dblq4RXp.js";
import { B as BackgroundField, E as EASE_OUT, S as SectionHeader, e as SectionHeading, K as Kbd } from "./_landing-primitives-Bieps6V3.js";
import { a2 as Building2, U as Users, a3 as Layers, f as Sparkles, A as ArrowRight, a as Check } from "./vendor-icons-D94uOSxG.js";
import "./vendor-react-MO5I_vdy.js";
import "./vendor-router-DD_41qJ4.js";
import "./vendor-radix-Bd9PM-r6.js";
import "node:async_hooks";
const tools = [
  { id: "slack", name: "Slack", cost: 15, icon: "SL" },
  { id: "hubspot", name: "HubSpot", cost: 800, icon: "HB" },
  { id: "mailchimp", name: "Mailchimp", cost: 100, icon: "MC" },
  { id: "hootsuite", name: "Hootsuite", cost: 99, icon: "HS" },
  { id: "semrush", name: "SEMrush", cost: 130, icon: "SR" },
  { id: "asana", name: "Asana", cost: 25, icon: "AS" },
  { id: "zapier", name: "Zapier", cost: 50, icon: "ZP" },
  { id: "chatgpt", name: "ChatGPT/Claude", cost: 20, icon: "AI" }
];
const tabs = [
  {
    id: "agency",
    label: "Marketing spend",
    icon: Building2,
    description: "See what you are really paying your marketing company or freelancers."
  },
  {
    id: "employees",
    label: "Employee costs",
    icon: Users,
    description: "Stop the hiring treadmill — let agents handle the repeatable work."
  },
  {
    id: "tools",
    label: "Tool consolidation",
    icon: Layers,
    description: "Cancel 8+ subscriptions and consolidate into one operating layer."
  }
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT } }
};
function AnimatedValue({
  value,
  prefix = "",
  suffix = "",
  decimals = 0
}) {
  const [display, setDisplay] = reactExports.useState(value);
  const prev = reactExports.useRef(value);
  reactExports.useEffect(() => {
    const start = prev.current;
    const end = value;
    const dur = 600;
    const t0 = Date.now();
    const step = () => {
      const elapsed = Date.now() - t0;
      const p = Math.min(elapsed / dur, 1);
      const eased = 1 - Math.pow(2, -10 * p);
      setDisplay(start + (end - start) * eased);
      if (p < 1) requestAnimationFrame(step);
      else {
        setDisplay(end);
        prev.current = end;
      }
    };
    requestAnimationFrame(step);
  }, [value]);
  const formatted = decimals > 0 ? display.toFixed(decimals) : Math.round(display).toLocaleString();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tabular-nums", children: [
    prefix,
    formatted,
    suffix
  ] });
}
function PremiumSlider({
  value,
  onChange,
  min,
  max,
  step = 1,
  formatValue
}) {
  const pct = (value - min) / (max - min) * 100;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pb-6 pt-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full bg-muted" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-y-0 left-0 rounded-full bg-foreground transition-all duration-150",
          style: { width: `${pct}%` }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "pointer-events-none absolute top-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
          style: { left: `${pct}%` },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-4 rounded-full border border-foreground/20 bg-background shadow-[0_2px_6px_rgba(34,27,22,0.18)] transition-transform" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "range",
        min,
        max,
        step,
        value,
        onChange: (e) => onChange(Number(e.target.value)),
        className: "absolute left-0 top-3 z-20 h-1.5 w-full cursor-pointer opacity-0"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-7 font-mono text-[10px] text-foreground/40", children: formatValue(min) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-7 font-mono text-[10px] text-foreground/40", children: formatValue(max) })
  ] });
}
function ToolCheckbox({
  tool,
  checked,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick: () => onChange(!checked),
      className: cn(
        "group/tool relative flex items-center gap-3 rounded-md border p-3 text-left transition-all duration-200",
        checked ? "border-signature/35 bg-signature/[0.04]" : "border-border/60 bg-background hover:border-border"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: cn(
              "flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] border transition-all duration-150",
              checked ? "border-signature bg-signature" : "border-border/70 bg-transparent"
            ),
            children: checked ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-2.5 w-2.5 text-white", strokeWidth: 3 }) : null
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-7 w-7 items-center justify-center rounded-md border border-border/60 bg-background font-mono text-[10px] font-semibold tracking-wider text-foreground/65", children: tool.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: cn(
                "truncate text-[13px] font-medium transition-colors",
                checked ? "text-foreground" : "text-foreground/80"
              ),
              children: tool.name
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-[10px] uppercase tracking-wider text-foreground/45", children: [
            "~$",
            tool.cost,
            "/mo"
          ] })
        ] })
      ]
    }
  );
}
function SavingsCalculatorSection() {
  const { isBusinessOwner } = useAudience();
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const defaultTab = isBusinessOwner ? "agency" : "employees";
  const [activeTab, setActiveTab] = reactExports.useState(defaultTab);
  reactExports.useEffect(() => {
    setActiveTab(isBusinessOwner ? "agency" : "employees");
  }, [isBusinessOwner]);
  const [agencySpend, setAgencySpend] = reactExports.useState(5e3);
  const [teamSize, setTeamSize] = reactExports.useState(3);
  const [avgSalary, setAvgSalary] = reactExports.useState(65e3);
  const [selectedTools, setSelectedTools] = reactExports.useState([
    "hubspot",
    "mailchimp",
    "semrush",
    "asana"
  ]);
  const calculateAgencySavings = reactExports.useCallback(() => {
    const annual = agencySpend * 12;
    const ours = 299 * 12;
    const savings = annual - ours;
    const pct = Math.round(savings / annual * 100);
    return { annual: savings, percentage: pct, monthly: agencySpend - 299 };
  }, [agencySpend]);
  const calculateEmployeeSavings = reactExports.useCallback(() => {
    const reduction = 0.65;
    const totalSalary = teamSize * avgSalary;
    const salarySavings = Math.round(totalSalary * reduction);
    const reduced = Math.round(teamSize * reduction);
    const remaining = teamSize - reduced;
    return {
      salarySavings,
      employeesReduced: reduced,
      employeesRemaining: remaining,
      currentCost: totalSalary,
      newCost: Math.round(totalSalary * (1 - reduction))
    };
  }, [teamSize, avgSalary]);
  const calculateToolSavings = reactExports.useCallback(() => {
    const monthly = selectedTools.reduce((acc, id) => {
      const t = tools.find((x) => x.id === id);
      return acc + (t?.cost || 0);
    }, 0);
    return { monthly, annual: monthly * 12, count: selectedTools.length };
  }, [selectedTools]);
  const agencySavings = calculateAgencySavings();
  const employeeSavings = calculateEmployeeSavings();
  const toolSavings = calculateToolSavings();
  const totalSavings = activeTab === "agency" ? agencySavings.annual : activeTab === "employees" ? employeeSavings.salarySavings : toolSavings.annual;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "calculator", className: "relative isolate overflow-hidden py-28 lg:py-36", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackgroundField, { variant: "top-center" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        ref,
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        variants: containerVariants,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "mb-12 lg:mb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              eyebrow: "ROI calculator",
              headlineLines: ["See exactly", "what you save."],
              sub: "Calculate your potential savings across marketing services, employees, and tools."
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-xl border border-border/70 bg-background/85 shadow-[0_18px_50px_-26px_rgba(34,27,22,0.30)]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-stretch border-b border-border/60 bg-muted/30", children: tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setActiveTab(tab.id),
                  className: cn(
                    "group/tab relative flex flex-1 items-center justify-center gap-2 px-4 py-3.5 text-[12.5px] font-medium transition-all duration-200",
                    isActive ? "bg-background text-foreground" : "text-muted-foreground hover:bg-background/40 hover:text-foreground"
                  ),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Icon,
                      {
                        className: cn(
                          "h-3.5 w-3.5 transition-colors",
                          isActive ? "text-signature" : "text-foreground/40"
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: tab.label }),
                    isActive ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 left-3 right-3 h-[2px] rounded-t-full bg-signature" }) : null
                  ]
                },
                tab.id
              );
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 p-5 lg:grid-cols-2 lg:gap-8 lg:p-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] leading-[1.55] text-muted-foreground", children: tabs.find((t) => t.id === activeTab)?.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
                  activeTab === "agency" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, x: -16 },
                      animate: { opacity: 1, x: 0 },
                      exit: { opacity: 0, x: 16 },
                      transition: { duration: 0.3 },
                      className: "space-y-7",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          SliderField,
                          {
                            label: "Monthly marketing spend",
                            value: `$${agencySpend.toLocaleString()}`,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              PremiumSlider,
                              {
                                value: agencySpend,
                                onChange: setAgencySpend,
                                min: 1e3,
                                max: 25e3,
                                step: 500,
                                formatValue: (v) => `$${(v / 1e3).toFixed(0)}K`
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border/60 bg-muted/30 p-4", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { label: "What you're paying for" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 space-y-2", children: [
                            "Cookie-cutter campaigns that don't fit your market",
                            "Freelancers who don't understand your trade",
                            "Zero visibility into what's actually getting done",
                            "Generic strategy calls that waste your time"
                          ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12.5px] leading-[1.55] text-muted-foreground", children: item })
                          ] }, item)) })
                        ] })
                      ]
                    },
                    "agency"
                  ) : null,
                  activeTab === "employees" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, x: -16 },
                      animate: { opacity: 1, x: 0 },
                      exit: { opacity: 0, x: 16 },
                      transition: { duration: 0.3 },
                      className: "space-y-7",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          SliderField,
                          {
                            label: "Marketing team size",
                            value: `${teamSize} ${teamSize === 1 ? "person" : "people"}`,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              PremiumSlider,
                              {
                                value: teamSize,
                                onChange: setTeamSize,
                                min: 1,
                                max: 20,
                                step: 1,
                                formatValue: (v) => `${v}`
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SliderField, { label: "Average salary", value: `$${(avgSalary / 1e3).toFixed(0)}K`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          PremiumSlider,
                          {
                            value: avgSalary,
                            onChange: setAvgSalary,
                            min: 4e4,
                            max: 12e4,
                            step: 5e3,
                            formatValue: (v) => `$${(v / 1e3).toFixed(0)}K`
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md border border-signature/25 bg-signature/[0.06] p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mt-0.5 h-4 w-4 shrink-0 text-signature" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12.5px] font-semibold text-signature", children: "65% headcount reduction" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[12px] leading-[1.55] text-muted-foreground", children: "Run a 20-person operation with 7 people. AI handles the repetitive work — your team focuses on strategy and relationships." })
                          ] })
                        ] }) })
                      ]
                    },
                    "employees"
                  ) : null,
                  activeTab === "tools" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, x: -16 },
                      animate: { opacity: 1, x: 0 },
                      exit: { opacity: 0, x: 16 },
                      transition: { duration: 0.3 },
                      className: "space-y-5",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { label: "Tools you currently pay for" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: tools.map((tool) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          ToolCheckbox,
                          {
                            tool,
                            checked: selectedTools.includes(tool.id),
                            onChange: (checked) => {
                              setSelectedTools(
                                checked ? [...selectedTools, tool.id] : selectedTools.filter((id) => id !== tool.id)
                              );
                            }
                          },
                          tool.id
                        )) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md border border-mint/30 bg-mint/[0.06] p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mt-0.5 h-4 w-4 shrink-0 text-mint" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12.5px] font-semibold text-mint", children: "OzziOS replaces all of these" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[12px] leading-[1.55] text-muted-foreground", children: "One platform, one login, one invoice. All the features you need." })
                          ] })
                        ] }) })
                      ]
                    },
                    "tools"
                  ) : null
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:sticky lg:top-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-xl border border-border/70 bg-background", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/60 bg-muted/30 px-5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { label: "Estimated annual savings" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-baseline gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-[clamp(2.6rem,6.5vw,4.4rem)] font-semibold leading-none tracking-[-0.04em] text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedValue, { value: totalSavings, prefix: "$" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] uppercase tracking-wider text-foreground/45", children: "/yr" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
                    activeTab === "agency" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, y: 8 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: -8 },
                        className: "divide-y divide-border/60",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ResultRow, { label: "Current annual marketing cost", value: `$${(agencySpend * 12).toLocaleString()}` }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ResultRow, { label: "OzziOS annual cost", value: "~$3,588", tone: "mint" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            ResultRow,
                            {
                              label: "Savings percentage",
                              value: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedValue, { value: agencySavings.percentage, suffix: "%" }),
                              tone: "signature"
                            }
                          )
                        ]
                      },
                      "r-agency"
                    ) : null,
                    activeTab === "employees" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, y: 8 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: -8 },
                        className: "divide-y divide-border/60",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            ResultRow,
                            {
                              label: "Current salary cost",
                              value: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedValue, { value: employeeSavings.currentCost, prefix: "$" })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            ResultRow,
                            {
                              label: "Team after AI",
                              value: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedValue, { value: employeeSavings.employeesRemaining }),
                                " people"
                              ] }),
                              tone: "mint"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            ResultRow,
                            {
                              label: "Headcount reduction",
                              value: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                                teamSize,
                                " → ",
                                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedValue, { value: employeeSavings.employeesRemaining }),
                                " (65%)"
                              ] }),
                              tone: "signature"
                            }
                          )
                        ]
                      },
                      "r-emp"
                    ) : null,
                    activeTab === "tools" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, y: 8 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: -8 },
                        className: "divide-y divide-border/60",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            ResultRow,
                            {
                              label: "Tools to cancel",
                              value: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedValue, { value: toolSavings.count }),
                                " subscriptions"
                              ] })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            ResultRow,
                            {
                              label: "Monthly savings",
                              value: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedValue, { value: toolSavings.monthly, prefix: "$" }),
                                "/mo"
                              ] }),
                              tone: "mint"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            ResultRow,
                            {
                              label: "Fewer logins",
                              value: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedValue, { value: toolSavings.count }),
                                " → 1"
                              ] }),
                              tone: "signature"
                            }
                          )
                        ]
                      },
                      "r-tools"
                    ) : null
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: "https://app.ozzios.com/sign-up",
                      className: cn(
                        "group/cta relative flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-md bg-foreground text-[13.5px] font-medium text-background",
                        "shadow-[0_1px_0_rgba(255,255,255,0.18)_inset,0_14px_30px_-12px_rgba(34,27,22,0.45)]",
                        "transition-all duration-200 hover:bg-[#1a1410] active:translate-y-px"
                      ),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" }),
                        "Start saving today",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-0.5" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Kbd, { tone: "dark", children: "S" })
                      ]
                    }
                  ) })
                ] })
              ] }) })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "mt-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/40", children: "Estimates based on industry averages — actual savings vary" }) })
        ]
      }
    ) })
  ] });
}
function SliderField({
  label,
  value,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10.5px] uppercase tracking-[0.2em] text-foreground/55", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[15px] font-semibold tabular-nums text-foreground", children: value })
    ] }),
    children
  ] });
}
function ResultRow({
  label,
  value,
  tone = "neutral"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: cn(
          "text-[13px] font-semibold tabular-nums",
          tone === "mint" ? "text-mint" : tone === "signature" ? "text-signature" : "text-foreground"
        ),
        children: value
      }
    )
  ] });
}
export {
  SavingsCalculatorSection
};
