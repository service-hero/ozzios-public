import { r as reactExports, u as useInView, j as jsxRuntimeExports, m as motion, A as AnimatePresence } from "./vendor-framer-DZFBeC81.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { B as Button } from "./button-HnwzKl7C.js";
import { u as useAudience } from "./LandingLayout-B-c7Elxf.js";
import { J as Building2, U as Users, N as Layers, j as Sparkles, A as ArrowRight, a as Check } from "./vendor-icons-BkkOHNOi.js";
import "./vendor-react-MO5I_vdy.js";
import "./vendor-radix-Bd9PM-r6.js";
import "./vendor-router-BDaSxPy_.js";
import "node:async_hooks";
const tools = [
  { id: "slack", name: "Slack", cost: 15, icon: "💬" },
  { id: "hubspot", name: "HubSpot", cost: 800, icon: "🔶" },
  { id: "mailchimp", name: "Mailchimp", cost: 100, icon: "📧" },
  { id: "hootsuite", name: "Hootsuite", cost: 99, icon: "🦉" },
  { id: "semrush", name: "SEMrush", cost: 130, icon: "📊" },
  { id: "asana", name: "Asana", cost: 25, icon: "✅" },
  { id: "zapier", name: "Zapier", cost: 50, icon: "⚡" },
  { id: "chatgpt", name: "ChatGPT/Claude", cost: 20, icon: "🤖" }
];
function AnimatedValue({
  value,
  prefix = "",
  suffix = "",
  decimals = 0
}) {
  const [displayValue, setDisplayValue] = reactExports.useState(value);
  const previousValue = reactExports.useRef(value);
  reactExports.useEffect(() => {
    const startValue = previousValue.current;
    const endValue = value;
    const duration = 600;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutExpo = 1 - Math.pow(2, -10 * progress);
      const current = startValue + (endValue - startValue) * easeOutExpo;
      setDisplayValue(current);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(endValue);
        previousValue.current = endValue;
      }
    };
    requestAnimationFrame(animate);
  }, [value]);
  const formatted = decimals > 0 ? displayValue.toFixed(decimals) : Math.round(displayValue).toLocaleString();
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
  const percentage = (value - min) / (max - min) * 100;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pt-4 pb-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full bg-muted" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-y-0 left-0 bg-signature rounded-full transition-all duration-150",
          style: { width: `${percentage}%` }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none z-10",
          style: { left: `${percentage}%` },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5 h-5 rounded-full bg-white shadow-md border-2 border-signature transition-transform hover:scale-110" })
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
        className: "absolute top-4 left-0 w-full h-2 opacity-0 cursor-pointer z-20"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-8 left-0 text-[11px] text-muted-foreground", children: formatValue(min) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-8 right-0 text-[11px] text-muted-foreground", children: formatValue(max) })
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
      onClick: () => onChange(!checked),
      className: cn(
        "group relative flex items-center gap-3 p-3 rounded-xl border transition-all duration-300",
        checked ? "border-signature/40 bg-signature/5" : "border-border bg-card hover:border-border"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(
          "flex items-center justify-center w-5 h-5 rounded-md border-2 transition-all duration-200",
          checked ? "border-signature bg-signature" : "border-border bg-transparent group-hover:border-border"
        ), children: checked && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: tool.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: cn(
            "text-[13px] font-medium transition-colors",
            checked ? "text-foreground" : "text-foreground/80"
          ), children: tool.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground", children: [
            "~$",
            tool.cost,
            "/mo"
          ] })
        ] })
      ]
    }
  );
}
const tabs = [
  { id: "agency", label: "Marketing Spend", icon: Building2, description: "See what you're really paying your marketing company or freelancers" },
  { id: "employees", label: "Employee Costs", icon: Users, description: "Stop the hiring treadmill" },
  { id: "tools", label: "Tool Consolidation", icon: Layers, description: "Cancel 8+ subscriptions" }
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};
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
  const [selectedTools, setSelectedTools] = reactExports.useState(["hubspot", "mailchimp", "semrush", "asana"]);
  const calculateAgencySavings = reactExports.useCallback(() => {
    const annualMarketingCost = agencySpend * 12;
    const estimatedOzziOsCost = 299 * 12;
    const savings = annualMarketingCost - estimatedOzziOsCost;
    const percentage = Math.round(savings / annualMarketingCost * 100);
    return { annual: savings, percentage, monthly: agencySpend - 299 };
  }, [agencySpend]);
  const calculateEmployeeSavings = reactExports.useCallback(() => {
    const reductionRate = 0.65;
    const totalSalaryCost = teamSize * avgSalary;
    const salarySavings = Math.round(totalSalaryCost * reductionRate);
    const employeesReduced = Math.round(teamSize * reductionRate);
    const employeesRemaining = teamSize - employeesReduced;
    return {
      salarySavings,
      employeesReduced,
      employeesRemaining,
      currentCost: totalSalaryCost,
      newCost: Math.round(totalSalaryCost * (1 - reductionRate))
    };
  }, [teamSize, avgSalary]);
  const calculateToolSavings = reactExports.useCallback(() => {
    const monthlyCost = selectedTools.reduce((acc, toolId) => {
      const tool = tools.find((t) => t.id === toolId);
      return acc + (tool?.cost || 0);
    }, 0);
    const annualSavings = monthlyCost * 12;
    return { monthly: monthlyCost, annual: annualSavings, count: selectedTools.length };
  }, [selectedTools]);
  const agencySavings = calculateAgencySavings();
  const employeeSavings = calculateEmployeeSavings();
  const toolSavings = calculateToolSavings();
  const getTotalSavings = () => {
    switch (activeTab) {
      case "agency":
        return agencySavings.annual;
      case "employees":
        return employeeSavings.salarySavings;
      case "tools":
        return toolSavings.annual;
      default:
        return 0;
    }
  };
  const totalSavings = getTotalSavings();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "calculator", className: "py-24 lg:py-32 bg-muted/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1200px] px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref,
      initial: "hidden",
      animate: isInView ? "visible" : "hidden",
      variants: containerVariants,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "text-center mb-16 lg:mb-20 max-w-3xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-px bg-signature" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold text-signature uppercase tracking-[0.2em]", children: "ROI Calculator" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-px bg-signature" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl lg:text-5xl font-display font-medium tracking-tight text-foreground mb-6 leading-[1.1]", children: "See what you'll save." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed font-light", children: "Calculate your potential savings across marketing services, employees, and tools." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border/80 bg-card overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-black/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row gap-2 p-4 border-b border-border bg-muted/50", children: tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setActiveTab(tab.id),
                className: cn(
                  "flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-[14px] transition-all duration-300",
                  isActive ? "bg-card text-foreground border border-border shadow-sm" : "text-muted-foreground hover:text-foreground/80 hover:bg-card/50"
                ),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: cn(
                    "h-4 w-4 transition-colors",
                    isActive ? "text-signature" : "text-muted-foreground"
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: tab.label })
                ]
              },
              tab.id
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-8 p-6 lg:p-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-muted-foreground mb-6", children: tabs.find((t) => t.id === activeTab)?.description }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
                activeTab === "agency" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, x: -20 },
                    animate: { opacity: 1, x: 0 },
                    exit: { opacity: 0, x: 20 },
                    transition: { duration: 0.3 },
                    className: "space-y-8",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center justify-between mb-4", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px] font-medium text-foreground", children: "Monthly marketing spend" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[18px] font-semibold text-signature tabular-nums", children: [
                            "$",
                            agencySpend.toLocaleString()
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
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
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-muted/50 border border-border", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-muted-foreground mb-3", children: "What you're paying your marketing company for:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [
                          "Cookie-cutter campaigns that don't fit your market",
                          "Freelancers who don't understand your trade",
                          "Zero visibility into what's actually getting done",
                          'Generic "strategy" calls that waste your time'
                        ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] text-muted-foreground", children: item })
                        ] }, i)) })
                      ] })
                    ]
                  },
                  "agency"
                ),
                activeTab === "employees" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, x: -20 },
                    animate: { opacity: 1, x: 0 },
                    exit: { opacity: 0, x: 20 },
                    transition: { duration: 0.3 },
                    className: "space-y-8",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center justify-between mb-4", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px] font-medium text-foreground", children: "Marketing team size" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[18px] font-semibold text-signature tabular-nums", children: [
                            teamSize,
                            " ",
                            teamSize === 1 ? "person" : "people"
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
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
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center justify-between mb-4", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px] font-medium text-foreground", children: "Average salary" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[18px] font-semibold text-signature tabular-nums", children: [
                            "$",
                            (avgSalary / 1e3).toFixed(0),
                            "K"
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          PremiumSlider,
                          {
                            value: avgSalary,
                            onChange: setAvgSalary,
                            min: 4e4,
                            max: 12e4,
                            step: 5e3,
                            formatValue: (v) => `$${(v / 1e3).toFixed(0)}K`
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 rounded-xl bg-signature/5 border border-signature/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-signature shrink-0 mt-0.5" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-signature mb-1", children: "65% headcount reduction" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-muted-foreground", children: "Run a 20-person operation with 7 people. AI handles the repetitive work—your team focuses on strategy and relationships." })
                        ] })
                      ] }) })
                    ]
                  },
                  "employees"
                ),
                activeTab === "tools" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, x: -20 },
                    animate: { opacity: 1, x: 0 },
                    exit: { opacity: 0, x: 20 },
                    transition: { duration: 0.3 },
                    className: "space-y-6",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] font-medium text-foreground", children: "Select the tools you're currently using:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: tools.map((tool) => /* @__PURE__ */ jsxRuntimeExports.jsx(
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
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 rounded-xl bg-green-50 border border-green-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-green-600 shrink-0 mt-0.5" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-green-700 mb-1", children: "OzziOS replaces all of these" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-muted-foreground", children: "One platform, one login, one invoice. All the features you need." })
                        ] })
                      ] }) })
                    ]
                  },
                  "tools"
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 rounded-2xl bg-muted/50 border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-muted-foreground uppercase tracking-wider mb-2", children: "Estimated Annual Savings" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[clamp(3rem,8vw,4.5rem)] font-bold text-foreground leading-none tracking-tight", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedValue, { value: totalSavings, prefix: "$" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[24px] text-muted-foreground ml-1", children: "/yr" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
                activeTab === "agency" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -10 },
                    className: "space-y-4",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-3 border-t border-border", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px] text-muted-foreground", children: "Current annual marketing cost" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[14px] font-medium text-foreground", children: [
                          "$",
                          (agencySpend * 12).toLocaleString()
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-3 border-t border-border", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px] text-muted-foreground", children: "OzziOS annual cost" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px] font-medium text-green-600", children: "~$3,588" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-3 border-t border-border", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px] text-muted-foreground", children: "Savings percentage" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px] font-semibold text-signature", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedValue, { value: agencySavings.percentage, suffix: "%" }) })
                      ] })
                    ]
                  },
                  "agency-results"
                ),
                activeTab === "employees" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -10 },
                    className: "space-y-4",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-3 border-t border-border", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px] text-muted-foreground", children: "Current salary costs" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px] font-medium text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedValue, { value: employeeSavings.currentCost, prefix: "$" }) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-3 border-t border-border", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px] text-muted-foreground", children: "Team after AI (35%)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[14px] font-medium text-green-600", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedValue, { value: employeeSavings.employeesRemaining }),
                          " people"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-3 border-t border-border", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px] text-muted-foreground", children: "Headcount reduction" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[14px] font-semibold text-signature", children: [
                          teamSize,
                          " → ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedValue, { value: employeeSavings.employeesRemaining }),
                          " (65% less)"
                        ] })
                      ] })
                    ]
                  },
                  "employees-results"
                ),
                activeTab === "tools" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -10 },
                    className: "space-y-4",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-3 border-t border-border", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px] text-muted-foreground", children: "Tools to cancel" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[14px] font-medium text-foreground", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedValue, { value: toolSavings.count }),
                          " subscriptions"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-3 border-t border-border", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px] text-muted-foreground", children: "Monthly savings" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[14px] font-medium text-green-600", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedValue, { value: toolSavings.monthly, prefix: "$" }),
                          "/mo"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-3 border-t border-border", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px] text-muted-foreground", children: "Fewer logins" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[14px] font-semibold text-signature", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedValue, { value: toolSavings.count }),
                          " → 1"
                        ] })
                      ] })
                    ]
                  },
                  "tools-results"
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "lg",
                    asChild: true,
                    className: "w-full h-12 text-[14px] font-medium gap-2 bg-signature text-white hover:bg-signature/90 rounded-md group shadow-sm",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://app.ozzios.com/sign-up", children: [
                      "Start saving today",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-[11px] text-muted-foreground mt-4" })
              ] })
            ] }) }) }) })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "mt-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-muted-foreground", children: "* Calculations are estimates based on industry averages. Your actual savings may vary." }) })
      ]
    }
  ) }) });
}
export {
  SavingsCalculatorSection
};
