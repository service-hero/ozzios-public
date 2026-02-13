import { n as jsxRuntimeExports, a as reactExports } from "./worker-entry-DUbV-qEz.js";
import { L as LandingLayout } from "./LandingLayout-BFxFbzxM.js";
import { m as motion, A as ArrowRight } from "./proxy-BEnWwJWi.js";
import { S as Shield } from "./shield-CRI1Lu_S.js";
import { G as Globe } from "./globe-BwXwyD0b.js";
import { C as Clock } from "./clock-oQ2YqCyM.js";
import { L as Lock } from "./lock-40EwUw2a.js";
import { u as useInView } from "./use-in-view-DoLVnWF9.js";
import { c as createLucideIcon } from "./createLucideIcon-OQXTLfCE.js";
import { F as FileCheck } from "./file-check-CsEMba-H.js";
import { E as Eye } from "./eye-yZ4ZOJ0c.js";
import { C as CircleCheck } from "./circle-check-CFGtU0xv.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "./router-BLJT3Mxm.js";
import "./utils-QXBWQHlM.js";
import "./button-CtEClRbA.js";
import "./menu-Bt53Wknu.js";
const __iconNode$1 = [
  [
    "path",
    {
      d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
      key: "1s6t7t"
    }
  ],
  ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor", key: "w0ekpg" }]
];
const KeyRound = createLucideIcon("key-round", __iconNode$1);
const __iconNode = [
  ["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2", key: "ngkwjq" }],
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2", key: "iecqi9" }],
  ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
  ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }]
];
const Server = createLucideIcon("server", __iconNode);
const trustBadges = [
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-6 h-6" }),
    label: "SOC 2 Type II",
    detail: "Audited & compliant"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-6 h-6" }),
    label: "GDPR Ready",
    detail: "Data privacy by design"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-6 h-6" }),
    label: "99.9% Uptime",
    detail: "Enterprise SLA"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-6 h-6" }),
    label: "End-to-End Encryption",
    detail: "AES-256 at rest & in transit"
  }
];
const securitySections = [
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-7 h-7 text-signature" }),
    title: "Data Encryption",
    description: "All data is encrypted at rest using AES-256 and in transit using TLS 1.3. API keys and credentials are stored in isolated, encrypted vaults and never exposed in logs or error messages.",
    practices: [
      "AES-256 encryption at rest for all stored data",
      "TLS 1.3 enforced for all connections",
      "Credential isolation with encrypted vault storage",
      "Automatic key rotation on a regular schedule"
    ]
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(KeyRound, { className: "w-7 h-7 text-signature" }),
    title: "Access Controls",
    description: "Multi-layered access control ensures the right people have the right permissions. Every API call is authenticated and authorized against workspace-scoped policies.",
    practices: [
      "Role-based access control (RBAC) per workspace",
      "Multi-factor authentication via Clerk",
      "Workspace-scoped data isolation — no cross-tenant access",
      "Audit logging for all administrative actions"
    ]
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Server, { className: "w-7 h-7 text-signature" }),
    title: "Infrastructure",
    description: "Built on enterprise-grade infrastructure with automatic scaling, redundancy, and geographic distribution. Continuous monitoring detects and responds to threats in real time.",
    practices: [
      "Convex serverless backend with automatic scaling",
      "Cloudflare edge network for DDoS protection",
      "Automated backups with point-in-time recovery",
      "Real-time monitoring and anomaly detection via Sentry"
    ]
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileCheck, { className: "w-7 h-7 text-signature" }),
    title: "Compliance & Privacy",
    description: "We take a privacy-first approach to data handling. Your client data belongs to you. We process it only as instructed and never sell or share it with third parties.",
    practices: [
      "GDPR-compliant data processing agreements",
      "Right to data portability and deletion",
      "Regular third-party security assessments",
      "Transparent data retention and processing policies"
    ]
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-7 h-7 text-signature" }),
    title: "AI Safety & Transparency",
    description: "AI agents operate within strictly defined boundaries. Every tool call is logged, every action is auditable, and agents cannot access data outside their assigned workspace.",
    practices: [
      "Agent actions scoped to workspace permissions",
      "Full tool call logging with execution traces",
      "No training on customer data — your data stays yours",
      "Human-in-the-loop controls for sensitive operations"
    ]
  }
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
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
function TrustBadgeCard({ badge, index }) {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 20 },
      animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
      transition: { duration: 0.5, delay: index * 0.08 },
      className: "flex flex-col items-center text-center p-6 md:p-8 bg-card border-2 border-border rounded-lg hover:border-signature/30 transition-colors duration-200",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-signature/10 flex items-center justify-center text-signature mb-4", children: badge.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-display text-foreground mb-1", children: badge.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: badge.detail })
      ]
    }
  );
}
function SecuritySectionCard({ section, index }) {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 30 },
      animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
      transition: { duration: 0.5, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] },
      className: "bg-card border-2 border-border rounded-lg p-8 md:p-10 hover:border-signature/30 transition-colors duration-200",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-lg bg-signature/10 flex items-center justify-center shrink-0", children: section.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl md:text-2xl font-display text-foreground mb-3", children: section.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-[15px] leading-relaxed mb-6", children: section.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: section.practices.map((practice, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm text-foreground/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-mint mt-0.5 shrink-0" }),
            practice
          ] }, i)) })
        ] })
      ] })
    }
  );
}
function SecurityView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-[900px] px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: "hidden",
        animate: "visible",
        variants: containerVariants,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "text-center mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tag-neo rounded-full bg-signature/10 border-signature mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-4 h-4 text-signature" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold text-signature uppercase tracking-wider", children: "Enterprise-Grade Security" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-display font-display text-foreground mb-6", children: [
            "Security at",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-signature", children: "OzziOS" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Your agency handles sensitive client data. We built OzziOS with security as a foundation, not an afterthought. Every layer of the platform is designed to keep your data safe." })
        ] })
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative pb-20 lg:pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1000px] px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6", children: trustBadges.map((badge, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(TrustBadgeCard, { badge, index }, badge.label)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[900px] px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: securitySections.map((section, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(SecuritySectionCard, { section, index }, section.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 lg:py-32 bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-4xl px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, {}) }) })
  ] });
}
function SectionHeader() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 20 },
      animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
      transition: { duration: 0.6 },
      className: "text-center mb-16",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-display text-foreground mb-4", children: "How we protect your data" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto", children: "From encryption to compliance, every aspect of our platform is built to meet the highest security standards." })
      ]
    }
  );
}
function CTA() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 20 },
      animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
      transition: { duration: 0.6 },
      className: "text-center",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl lg:text-6xl font-semibold text-black tracking-tight mb-6", children: "Questions about security?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-500 mb-10 max-w-lg mx-auto", children: "Our team is happy to discuss our security practices, provide compliance documentation, or answer any questions." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "/contact",
            className: "inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200",
            children: [
              "Contact our team",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "SOC 2 Compliant" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline text-gray-300", children: "|" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "GDPR Ready" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline text-gray-300", children: "|" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "99.9% Uptime SLA" })
        ] })
      ]
    }
  );
}
function SecurityPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LandingLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SecurityView, {}) });
}
export {
  SecurityPage as component
};
