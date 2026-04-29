import { j as jsxRuntimeExports, r as reactExports, u as useInView, m as motion } from "./vendor-framer-DZFBeC81.js";
import { D as DEMO_CTA_HREF, L as LandingLayout } from "./LandingLayout-Dblq4RXp.js";
import { D as DeferredSection } from "./lazy-section-B65XiZaR.js";
import { F as FeatureHero, b as PainPointsBlock, C as CapabilitiesBlock, g as ChecklistBlock, c as FeatureCTABlock, S as SectionHeader, i as innerContainerVariants, d as innerItemVariants } from "./_landing-primitives-Bieps6V3.js";
import { aC as BookOpen, Y as TriangleAlert, c as Clock, j as Search, a3 as Layers, y as FileText, G as Globe, aD as FileUp, p as Brain, O as RefreshCw } from "./vendor-icons-D94uOSxG.js";
import "./vendor-react-MO5I_vdy.js";
import "./vendor-router-DD_41qJ4.js";
import "./vendor-radix-Bd9PM-r6.js";
import "node:async_hooks";
import "./utils-QXBWQHlM.js";
const painPoints = [
  {
    icon: TriangleAlert,
    title: "AI agents give generic answers",
    description: "Without context about your business, products, and policies, AI assistants default to vague, unhelpful responses that frustrate your customers."
  },
  {
    icon: Clock,
    title: "Onboarding new tools takes weeks",
    description: "Every time you add a new AI feature, you spend days feeding it the same company info. Product specs, FAQs, pricing — again and again."
  },
  {
    icon: Search,
    title: "Knowledge is scattered everywhere",
    description: "Your product info lives in PDFs, your FAQs are on a webpage, and your policies are in Google Docs. Nothing is connected."
  },
  {
    icon: Layers,
    title: "No way to test what AI knows",
    description: "You add content to your knowledge base but have no idea what the AI will actually say. You discover gaps only when a customer does."
  }
];
const capabilities = [
  {
    icon: FileText,
    title: "Text entries",
    benefit: "Immediate indexing",
    description: "Add FAQs, product info, policies, and procedures as rich text. Indexed immediately so agents can use them in real time."
  },
  {
    icon: Globe,
    title: "URL auto-import",
    benefit: "Stay in sync with your site",
    description: "Paste a URL and the system auto-fetches the page, converts it to markdown, and indexes it."
  },
  {
    icon: FileUp,
    title: "PDF processing",
    benefit: "Up to 500K characters",
    description: "Upload PDFs. Pages are parsed individually with progress tracking. Manuals, contracts, guides — all indexed."
  },
  {
    icon: Search,
    title: "Search preview",
    benefit: "Test before customers do",
    description: "Test queries against your indexed content with relevance scoring (0-100%). See exactly what your agents will find."
  },
  {
    icon: Brain,
    title: "Auto-generated company profile",
    benefit: "Used before every interaction",
    description: "AI summarizes all your indexed sources into a company profile. Used by agents before every call and chat for instant context."
  },
  {
    icon: RefreshCw,
    title: "Status tracking & retry",
    benefit: "No silent failures",
    description: "Monitor indexing status: pending, indexing, indexed, or error. Retry failed items with one click."
  }
];
function StepFlowSection() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const steps = [
    { step: "01", title: "Upload your content", description: "Add text entries, paste URLs, or upload PDFs. The system accepts all three and handles parsing automatically." },
    { step: "02", title: "Automatic indexing", description: "Content is chunked, vectorized, and indexed for semantic search. Track status in real-time." },
    { step: "03", title: "Test with search preview", description: "Run test queries to see what your AI agents will find. Relevance scores show how well your content matches." },
    { step: "04", title: "Agents use it automatically", description: "Every AI agent in your workspace now has access. Before calls, chats, and emails, agents pull relevant context." }
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
            eyebrow: "From upload to expert",
            headlineLines: ["Four steps to", "smarter AI agents."],
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
function KnowledgeBaseView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FeatureHero,
      {
        pillIcon: BookOpen,
        pillLabel: "Knowledge Base",
        pillSubtitle: "RAG-powered context for every agent",
        headlineLines: ["Give your AI agents", "your expertise."],
        sub: "Upload your product docs, FAQs, and web pages. Your AI agents use this knowledge in every conversation, giving answers as accurate as your best team member.",
        primaryCta: { label: "Setup a demo", href: DEMO_CTA_HREF, shortcut: "D" },
        secondaryCta: { label: "Talk to sales", href: "/contact" },
        stats: [
          { value: "3", label: "Content types" },
          { value: "500K", label: "Chars per PDF" },
          { value: "RAG", label: "Powered search" }
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      PainPointsBlock,
      {
        eyebrow: "The problem",
        headlineLines: ["Your AI is only as smart", "as what you teach it."],
        sub: "Without a structured knowledge base, your AI agents are guessing. And customers can tell.",
        points: painPoints
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CapabilitiesBlock,
      {
        eyebrow: "Capabilities",
        headlineLines: ["Everything to make", "your agents experts."],
        sub: "From upload to search-ready in minutes. Your AI agents become domain experts in your business.",
        capabilities
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StepFlowSection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ChecklistBlock,
      {
        eyebrow: "How RAG works",
        headlineLines: ["Grounded answers,", "not generic guesses."],
        features: [
          "Content is chunked and vectorized for semantic search",
          "Relevance scoring ensures only accurate content is used",
          "All AI agents share the same knowledge base",
          "Auto-generated company profile loaded before every call",
          "Indexing status tracked per source with retry",
          "Search preview lets you test queries before launch"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      FeatureCTABlock,
      {
        eyebrow: "Get started",
        headlineLines: ["Make your AI agents", "domain experts."],
        sub: "Upload your business knowledge once and every AI agent in your workspace becomes an expert on your products, services, and policies.",
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
function KnowledgeBasePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LandingLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(KnowledgeBaseView, {}) });
}
export {
  KnowledgeBasePage as component
};
