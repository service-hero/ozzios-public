import { j as jsxRuntimeExports, r as reactExports, u as useInView, m as motion } from "./vendor-framer-DZFBeC81.js";
import { D as DEMO_CTA_HREF, L as LandingLayout } from "./LandingLayout-Dblq4RXp.js";
import { D as DeferredSection } from "./lazy-section-B65XiZaR.js";
import { F as FeatureHero, b as PainPointsBlock, C as CapabilitiesBlock, g as ChecklistBlock, c as FeatureCTABlock, S as SectionHeader, i as innerContainerVariants, d as innerItemVariants } from "./_landing-primitives-Bieps6V3.js";
import { av as ListTodo, Y as TriangleAlert, c as Clock, U as Users, V as Repeat, aw as LayoutGrid, _ as GitBranch, ak as CalendarClock, aa as Bot, ax as Tag } from "./vendor-icons-D94uOSxG.js";
import "./vendor-react-MO5I_vdy.js";
import "./vendor-router-DD_41qJ4.js";
import "./vendor-radix-Bd9PM-r6.js";
import "node:async_hooks";
import "./utils-QXBWQHlM.js";
const painPoints = [
  {
    icon: TriangleAlert,
    title: "Tasks fall through the cracks",
    description: "Spreadsheets, sticky notes, and scattered tools mean deadlines get missed and customers notice. You need a single source of truth."
  },
  {
    icon: Clock,
    title: "Manual follow-ups eat your day",
    description: "You spend hours chasing status updates, reminding teammates about deadlines, and escalating overdue work. It should happen automatically."
  },
  {
    icon: Users,
    title: "No visibility across the team",
    description: "Who is working on what? What is blocking whom? Without real-time visibility, coordination is guesswork."
  },
  {
    icon: Repeat,
    title: "Repetitive work stays manual",
    description: "Customer onboarding, seasonal maintenance reminders, monthly reports — the same task lists get recreated from scratch every time."
  }
];
const capabilities = [
  {
    icon: LayoutGrid,
    title: "Kanban + List views",
    benefit: "Pick the view that fits",
    description: "Drag-and-drop kanban boards for visual workflows. Switch to list view for bulk operations."
  },
  {
    icon: GitBranch,
    title: "Task dependencies",
    benefit: "Auto-update on resolution",
    description: "Define what blocks what. Tasks auto-update when dependencies resolve. No starting work that is not ready."
  },
  {
    icon: CalendarClock,
    title: "Auto-escalation",
    benefit: "No manual triage",
    description: "Priority automatically increases as deadlines approach. 3 days out becomes high. Past due becomes urgent."
  },
  {
    icon: Repeat,
    title: "Recurring tasks",
    benefit: "Create once, run forever",
    description: "Set tasks to repeat daily, weekly, or monthly. Customer follow-ups, equipment inspections, service reminders."
  },
  {
    icon: Bot,
    title: "AI agent integration",
    benefit: "Tasks created autonomously",
    description: "AI agents create, update, and complete tasks. A campaign manager agent can spawn a full task list from a brief."
  },
  {
    icon: Tag,
    title: "Templates & tags",
    benefit: "Find anything in seconds",
    description: "Reusable task templates for new jobs, onboarding, and inspections. Tag and filter for instant retrieval."
  }
];
function WorkflowSection() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const steps = [
    { step: "01", title: "Create from anywhere", description: "Tasks are created by your team, from channel conversations, from leads and contacts, or by AI agents." },
    { step: "02", title: "Organize automatically", description: "Custom statuses, priorities, tags, and assignees keep your board clean. Drag between columns or auto-assign." },
    { step: "03", title: "Escalate intelligently", description: "Configurable escalation rules bump priority as deadlines approach. Focus on what matters most." },
    { step: "04", title: "Complete and repeat", description: "Mark tasks done, trigger dependent tasks, and let recurring schedules regenerate the next cycle." }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative isolate overflow-hidden border-t border-border/50 py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        ref,
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.6 },
        className: "mb-12 lg:mb-14",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeader,
          {
            eyebrow: "From creation to completion",
            headlineLines: ["Tasks that drive", "themselves forward."],
            align: "center"
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        variants: innerContainerVariants,
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        className: "grid gap-4 md:grid-cols-2 lg:gap-5",
        children: steps.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            variants: innerItemVariants,
            className: "rounded-xl border border-border/60 bg-background p-6",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-signature/25 bg-signature/10 font-mono text-[11px] font-semibold tabular-nums text-signature", children: item.step }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[15px] font-semibold text-foreground", children: item.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[13px] leading-[1.55] text-muted-foreground", children: item.description })
              ] })
            ] })
          },
          item.step
        ))
      }
    )
  ] }) });
}
function TaskManagementView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FeatureHero,
      {
        pillIcon: ListTodo,
        pillLabel: "Task Management",
        pillSubtitle: "Kanban + auto-escalation + dependencies",
        headlineLines: ["Stop losing work", "to broken processes."],
        sub: "Kanban boards, auto-escalation, dependencies, and AI-powered task creation. Every task tracked, every deadline enforced, every handoff automatic.",
        primaryCta: { label: "Setup a demo", href: DEMO_CTA_HREF, shortcut: "D" },
        secondaryCta: { label: "Talk to sales", href: "/contact" },
        stats: [
          { value: "37%", label: "Fewer missed deadlines" },
          { value: "5 hrs / wk", label: "Saved on follow-ups" },
          { value: "100%", label: "Task visibility" }
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      PainPointsBlock,
      {
        eyebrow: "The problem",
        headlineLines: ["Your task management", "is costing you customers."],
        sub: "Service businesses lose an average of 12% of revenue to missed appointments and poor coordination. Here is why.",
        points: painPoints
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(WorkflowSection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CapabilitiesBlock,
      {
        eyebrow: "Capabilities",
        headlineLines: ["Tasks that work", "for you."],
        sub: "Not just a to-do list. A complete operations system that surfaces priorities, enforces deadlines, and integrates with every team member — human or AI.",
        capabilities
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ChecklistBlock,
      {
        eyebrow: "Built in",
        headlineLines: ["Everything", "a team needs."],
        features: [
          "Custom statuses, priorities, and labels",
          "Drag-and-drop kanban with bulk actions",
          "Subtasks and dependencies with auto-update",
          "Recurring tasks with daily/weekly/monthly cycles",
          "AI agent assignment and autonomous completion",
          "Source tracking from contacts, leads, channels",
          "Reusable templates for repeat workflows",
          "Real-time collaboration and @mentions"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      FeatureCTABlock,
      {
        eyebrow: "Get started",
        headlineLines: ["Every task tracked.", "Every deadline met."],
        sub: "Stop losing work to broken processes. Get a task system that drives itself forward — with humans and AI working in lockstep.",
        primaryCta: { label: "Setup a demo", href: DEMO_CTA_HREF, shortcut: "D" },
        secondaryCta: { label: "Talk to sales", href: "/contact" },
        trust: [
          { value: "256-bit", label: "Encryption" },
          { value: "GDPR ready", label: "Compliance" },
          { value: "99.9%", label: "Uptime SLA" }
        ]
      }
    ) })
  ] });
}
function TaskManagementPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LandingLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TaskManagementView, {}) });
}
export {
  TaskManagementPage as component
};
