import { z as createRootRoute, H as HeadContent, S as Scripts, O as Outlet, L as Link, A as createFileRoute, B as lazyRouteComponent, C as createRouter } from "./vendor-router-DD_41qJ4.js";
import { j as jsxRuntimeExports } from "./vendor-framer-DZFBeC81.js";
import "./vendor-radix-Bd9PM-r6.js";
import "./vendor-react-MO5I_vdy.js";
import "node:async_hooks";
const Route$y = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        title: "OzziOS - Your First AI Employee"
      },
      {
        name: "description",
        content: "The first agentic AI employee platform. Replace entire marketing teams with an unlimited AI workforce. 30+ specialized agents, custom agent builder, unified CRM, workflows, communication, and marketing suite."
      },
      {
        property: "og:site_name",
        content: "OzziOS"
      },
      {
        property: "og:type",
        content: "website"
      },
      {
        property: "og:image",
        content: "https://ozzios.com/images/Gemini_Generated_Image_2cfeqt2cfeqt2cfe.webp"
      }
    ],
    links: [
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/images/favicon-ozzios.svg"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", suppressHydrationWarning: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { suppressHydrationWarning: true, children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {});
}
function NotFound() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "tag-neo mb-6 text-signature", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-display mb-4", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-8 max-w-md text-lg text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "btn-neo inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground",
        children: "Back to Home"
      }
    )
  ] });
}
const SITE_NAME = "OzziOS";
const SITE_URL = "https://ozzios.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/Gemini_Generated_Image_2cfeqt2cfeqt2cfe.webp`;
function createPageHead(seo) {
  const fullTitle = `${seo.title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${seo.path}`;
  const image = seo.ogImage || DEFAULT_OG_IMAGE;
  const ogType = seo.ogType || "website";
  const meta = [
    { title: fullTitle },
    { name: "description", content: seo.description },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: seo.description },
    { property: "og:type", content: ogType },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:site_name", content: SITE_NAME },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: seo.description },
    { name: "twitter:image", content: image }
  ];
  if (ogType === "article" && seo.article) {
    if (seo.article.publishedTime) {
      meta.push({ property: "article:published_time", content: seo.article.publishedTime });
    }
    if (seo.article.author) {
      meta.push({ property: "article:author", content: seo.article.author });
    }
  }
  if (seo.noindex) {
    meta.push({ name: "robots", content: "noindex, nofollow" });
  }
  return { meta };
}
const $$splitComponentImporter$x = () => import("./waitlist-business-Cx6Pv8-j.js");
const Route$x = createFileRoute("/waitlist-business")({
  component: lazyRouteComponent($$splitComponentImporter$x, "component"),
  head: () => createPageHead({
    title: "Business Waitlist",
    description: "Apply for early business access to OzziOS enterprise features.",
    path: "/waitlist-business",
    noindex: true
  })
});
const $$splitComponentImporter$w = () => import("./waitlist-D0TX6TJL.js");
const Route$w = createFileRoute("/waitlist")({
  component: lazyRouteComponent($$splitComponentImporter$w, "component"),
  head: () => createPageHead({
    title: "Join the Waitlist",
    description: "Get early access to OzziOS — the AI employee platform built for home service companies.",
    path: "/waitlist"
  })
});
const $$splitComponentImporter$v = () => import("./tos-uhbM5gpG.js");
const Route$v = createFileRoute("/tos")({
  component: lazyRouteComponent($$splitComponentImporter$v, "component"),
  head: () => createPageHead({
    title: "Terms of Service",
    description: "OzziOS terms of service and acceptable use policies.",
    path: "/tos"
  })
});
const $$splitComponentImporter$u = () => import("./security-BSCgpmTS.js");
const Route$u = createFileRoute("/security")({
  head: () => createPageHead({
    title: "Security",
    description: "Enterprise-grade encryption, GDPR compliance, workspace isolation, and 99.9% uptime SLA for your business data.",
    path: "/security"
  }),
  component: lazyRouteComponent($$splitComponentImporter$u, "component")
});
const $$splitComponentImporter$t = () => import("./privacy-policy-DyJMdfUv.js");
const Route$t = createFileRoute("/privacy-policy")({
  component: lazyRouteComponent($$splitComponentImporter$t, "component"),
  head: () => createPageHead({
    title: "Privacy Policy",
    description: "How OzziOS collects, uses, and protects your data.",
    path: "/privacy-policy"
  })
});
const $$splitComponentImporter$s = () => import("./pricing-CtKRyyRd.js");
const Route$s = createFileRoute("/pricing")({
  head: () => createPageHead({
    title: "Setup a demo",
    description: "OzziOS is sold via guided demo. Book a 30-minute working session — we configure agents, workflows, and integrations against a real workflow from your business and quote it on the spot.",
    path: "/pricing"
  }),
  component: lazyRouteComponent($$splitComponentImporter$s, "component")
});
const $$splitComponentImporter$r = () => import("./integrations-CYZSjjek.js");
const Route$r = createFileRoute("/integrations")({
  head: () => createPageHead({
    title: "Integrations",
    description: "Connect OzziOS to 77+ tools including Google, GoHighLevel, Stripe, Twilio, and more. Unify your marketing stack.",
    path: "/integrations"
  }),
  component: lazyRouteComponent($$splitComponentImporter$r, "component")
});
const $$splitComponentImporter$q = () => import("./data-deletion-PyJOZcGu.js");
const Route$q = createFileRoute("/data-deletion")({
  component: lazyRouteComponent($$splitComponentImporter$q, "component"),
  head: () => createPageHead({
    title: "Data Deletion",
    description: "Request deletion of your OzziOS account and associated data.",
    path: "/data-deletion",
    noindex: true
  })
});
const $$splitComponentImporter$p = () => import("./contact-DRSJ0-Ca.js");
const Route$p = createFileRoute("/contact")({
  head: () => createPageHead({
    title: "Contact Us",
    description: "Get in touch with the OzziOS team. Questions about AI agents, pricing, or enterprise plans — we're here to help.",
    path: "/contact"
  }),
  component: lazyRouteComponent($$splitComponentImporter$p, "component")
});
const $$splitComponentImporter$o = () => import("./changelog-BxjL4tW3.js");
const Route$o = createFileRoute("/changelog")({
  head: () => createPageHead({
    title: "Changelog",
    description: "See what's new in OzziOS. Product updates, new AI agents, integrations, and platform improvements.",
    path: "/changelog"
  }),
  component: lazyRouteComponent($$splitComponentImporter$o, "component")
});
const $$splitComponentImporter$n = () => import("./careers-B8Oejnfq.js");
const Route$n = createFileRoute("/careers")({
  head: () => createPageHead({
    title: "Careers",
    description: "Join OzziOS and help build the future of AI-powered marketing. Remote-first with competitive pay and equity.",
    path: "/careers"
  }),
  component: lazyRouteComponent($$splitComponentImporter$n, "component")
});
const $$splitComponentImporter$m = () => import("./about-B-3E8FDx.js");
const Route$m = createFileRoute("/about")({
  head: () => createPageHead({
    title: "About Us",
    description: "Meet the team behind OzziOS. Built by home service operators to replace back-office overhead with AI agents that work 24/7.",
    path: "/about"
  }),
  component: lazyRouteComponent($$splitComponentImporter$m, "component")
});
const $$splitComponentImporter$l = () => import("./index-DWz44ueI.js");
const Route$l = createFileRoute("/")({
  head: () => createPageHead({
    title: "Your First AI Employee",
    description: "The first agentic AI employee platform. 30+ specialized agents, unified CRM, workflows, and full marketing suite — starting free.",
    path: "/"
  }),
  component: lazyRouteComponent($$splitComponentImporter$l, "component")
});
const $$splitComponentImporter$k = () => import("./teams-CZjrRW2n.js");
const Route$k = createFileRoute("/solutions/teams")({
  head: () => createPageHead({
    title: "For Teams",
    description: "Multiply your service team's output with AI employees. Dispatchers, technicians, and office staff focus on service delivery while AI handles the back office.",
    path: "/solutions/teams"
  }),
  component: lazyRouteComponent($$splitComponentImporter$k, "component")
});
const $$splitComponentImporter$j = () => import("./lead-generation-BeJ0Vht5.js");
const Route$j = createFileRoute("/solutions/lead-generation")({
  head: () => createPageHead({
    title: "Lead Generation",
    description: "AI-powered lead generation for home service companies. Capture homeowner leads, qualify with AI scoring, and nurture with automated follow-ups 24/7.",
    path: "/solutions/lead-generation"
  }),
  component: lazyRouteComponent($$splitComponentImporter$j, "component")
});
const $$splitComponentImporter$i = () => import("./enterprise-DrvCRzbd.js");
const Route$i = createFileRoute("/solutions/enterprise")({
  head: () => createPageHead({
    title: "Enterprise",
    description: "Enterprise-grade AI platform for multi-location service companies. Custom agents, SSO, dedicated support, and unlimited workflows.",
    path: "/solutions/enterprise"
  }),
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const $$splitComponentImporter$h = () => import("./content-marketing-C0MrY1HG.js");
const Route$h = createFileRoute("/solutions/content-marketing")({
  head: () => createPageHead({
    title: "Content Marketing",
    description: "Scale content production for your service business with AI. Blog posts, before/after showcases, seasonal tips, and local SEO content on autopilot.",
    path: "/solutions/content-marketing"
  }),
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const $$splitComponentImporter$g = () => import("./client-management-CLSdrNG5.js");
const Route$g = createFileRoute("/solutions/client-management")({
  head: () => createPageHead({
    title: "Customer Management",
    description: "Manage all your customers in one platform. AI handles reporting, communication, and job coordination.",
    path: "/solutions/client-management"
  }),
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import("./workflows-CjG0YeTe.js");
const Route$f = createFileRoute("/features/workflows")({
  head: () => createPageHead({
    title: "Workflows",
    description: "Visual workflow builder with AI automation. Connect triggers, actions, and agents to automate any process.",
    path: "/features/workflows"
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./voice-agents-DlwWyP9F.js");
const Route$e = createFileRoute("/features/voice-agents")({
  head: () => createPageHead({
    title: "Voice Agents",
    description: "AI voice agents for inbound and outbound calls. Appointment booking, lead qualification, and support on autopilot.",
    path: "/features/voice-agents"
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./video-editor-CHIaV-OZ.js");
const Route$d = createFileRoute("/features/video-editor")({
  head: () => createPageHead({
    title: "Video Editor",
    description: "AI video creation and editing. Promotional videos, social clips, and ads generated from text prompts.",
    path: "/features/video-editor"
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./tasks-BpomEUor.js");
const Route$c = createFileRoute("/features/tasks")({
  head: () => createPageHead({
    title: "Task Management",
    description: "AI-coordinated task management. Automatic assignment, priority tracking, and workflow integration.",
    path: "/features/tasks"
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./social-media-VgzZpqCn.js");
const Route$b = createFileRoute("/features/social-media")({
  head: () => createPageHead({
    title: "Social Media",
    description: "AI agents that create, schedule, and optimize social content across all platforms. Strategy to posting, automated.",
    path: "/features/social-media"
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./sms-campaigns-r_ZBr9I7.js");
const Route$a = createFileRoute("/features/sms-campaigns")({
  head: () => createPageHead({
    title: "SMS Campaigns",
    description: "AI-powered text message campaigns with personalization, scheduling, and compliance built in.",
    path: "/features/sms-campaigns"
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./knowledge-base-D_PXag3n.js");
const Route$9 = createFileRoute("/features/knowledge-base")({
  head: () => createPageHead({
    title: "Knowledge Base",
    description: "Create a self-service knowledge base. Help customers find answers and reduce support tickets with AI search.",
    path: "/features/knowledge-base"
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./forms-CJecZIa0.js");
const Route$8 = createFileRoute("/features/forms")({
  head: () => createPageHead({
    title: "Forms",
    description: "No-code form builder with automatic CRM sync, spam protection, and submission analytics. Embed with one line.",
    path: "/features/forms"
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./email-campaigns-Cfrf7nf2.js");
const Route$7 = createFileRoute("/features/email-campaigns")({
  head: () => createPageHead({
    title: "Email Campaigns",
    description: "AI-managed email marketing. Automated sequences, personalization, analytics, and deliverability optimization.",
    path: "/features/email-campaigns"
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./email-builder-C6JiZUs5.js");
const Route$6 = createFileRoute("/features/email-builder")({
  head: () => createPageHead({
    title: "Email Builder",
    description: "Drag-and-drop email builder with 16 block types, live device preview, and dynamic personalization.",
    path: "/features/email-builder"
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./dashboard-DUiDVema.js");
const Route$5 = createFileRoute("/features/dashboard")({
  head: () => createPageHead({
    title: "Dashboard",
    description: "Real-time business dashboard. Track agent activity, job metrics, and system health in a customizable layout.",
    path: "/features/dashboard"
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./crm-CZky61pI.js");
const Route$4 = createFileRoute("/features/crm")({
  head: () => createPageHead({
    title: "CRM",
    description: "AI-powered CRM with lead scoring, 25+ activity types, smart segmentation, and GDPR compliance built in.",
    path: "/features/crm"
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./coding-CCfN8ziC.js");
const Route$3 = createFileRoute("/features/coding")({
  head: () => createPageHead({
    title: "Code Sandbox",
    description: "Built-in code editor for developers. Write, test, and deploy scripts and integrations without leaving OzziOS.",
    path: "/features/coding"
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./chat-widget-Bckb9E5v.js");
const Route$2 = createFileRoute("/features/chat-widget")({
  head: () => createPageHead({
    title: "Chat Widget",
    description: "AI-powered website chat that captures leads, answers questions, and books meetings 24/7. Set up in 5 minutes.",
    path: "/features/chat-widget"
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./channels-BCcSog0N.js");
const Route$1 = createFileRoute("/features/channels")({
  head: () => createPageHead({
    title: "Channels",
    description: "Unified team messaging and collaboration. Real-time channels for your business, organized by customer or project.",
    path: "/features/channels"
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./ai-agents--g1FVXoq.js");
const Route = createFileRoute("/features/ai-agents")({
  head: () => createPageHead({
    title: "AI Agents",
    description: "Deploy 30+ specialized AI agents that work 24/7 with persistent memory, 127+ tools, and full transparency.",
    path: "/features/ai-agents"
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const WaitlistBusinessRoute = Route$x.update({
  id: "/waitlist-business",
  path: "/waitlist-business",
  getParentRoute: () => Route$y
});
const WaitlistRoute = Route$w.update({
  id: "/waitlist",
  path: "/waitlist",
  getParentRoute: () => Route$y
});
const TosRoute = Route$v.update({
  id: "/tos",
  path: "/tos",
  getParentRoute: () => Route$y
});
const SecurityRoute = Route$u.update({
  id: "/security",
  path: "/security",
  getParentRoute: () => Route$y
});
const PrivacyPolicyRoute = Route$t.update({
  id: "/privacy-policy",
  path: "/privacy-policy",
  getParentRoute: () => Route$y
});
const PricingRoute = Route$s.update({
  id: "/pricing",
  path: "/pricing",
  getParentRoute: () => Route$y
});
const IntegrationsRoute = Route$r.update({
  id: "/integrations",
  path: "/integrations",
  getParentRoute: () => Route$y
});
const DataDeletionRoute = Route$q.update({
  id: "/data-deletion",
  path: "/data-deletion",
  getParentRoute: () => Route$y
});
const ContactRoute = Route$p.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$y
});
const ChangelogRoute = Route$o.update({
  id: "/changelog",
  path: "/changelog",
  getParentRoute: () => Route$y
});
const CareersRoute = Route$n.update({
  id: "/careers",
  path: "/careers",
  getParentRoute: () => Route$y
});
const AboutRoute = Route$m.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$y
});
const IndexRoute = Route$l.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$y
});
const SolutionsTeamsRoute = Route$k.update({
  id: "/solutions/teams",
  path: "/solutions/teams",
  getParentRoute: () => Route$y
});
const SolutionsLeadGenerationRoute = Route$j.update({
  id: "/solutions/lead-generation",
  path: "/solutions/lead-generation",
  getParentRoute: () => Route$y
});
const SolutionsEnterpriseRoute = Route$i.update({
  id: "/solutions/enterprise",
  path: "/solutions/enterprise",
  getParentRoute: () => Route$y
});
const SolutionsContentMarketingRoute = Route$h.update({
  id: "/solutions/content-marketing",
  path: "/solutions/content-marketing",
  getParentRoute: () => Route$y
});
const SolutionsClientManagementRoute = Route$g.update({
  id: "/solutions/client-management",
  path: "/solutions/client-management",
  getParentRoute: () => Route$y
});
const FeaturesWorkflowsRoute = Route$f.update({
  id: "/features/workflows",
  path: "/features/workflows",
  getParentRoute: () => Route$y
});
const FeaturesVoiceAgentsRoute = Route$e.update({
  id: "/features/voice-agents",
  path: "/features/voice-agents",
  getParentRoute: () => Route$y
});
const FeaturesVideoEditorRoute = Route$d.update({
  id: "/features/video-editor",
  path: "/features/video-editor",
  getParentRoute: () => Route$y
});
const FeaturesTasksRoute = Route$c.update({
  id: "/features/tasks",
  path: "/features/tasks",
  getParentRoute: () => Route$y
});
const FeaturesSocialMediaRoute = Route$b.update({
  id: "/features/social-media",
  path: "/features/social-media",
  getParentRoute: () => Route$y
});
const FeaturesSmsCampaignsRoute = Route$a.update({
  id: "/features/sms-campaigns",
  path: "/features/sms-campaigns",
  getParentRoute: () => Route$y
});
const FeaturesKnowledgeBaseRoute = Route$9.update({
  id: "/features/knowledge-base",
  path: "/features/knowledge-base",
  getParentRoute: () => Route$y
});
const FeaturesFormsRoute = Route$8.update({
  id: "/features/forms",
  path: "/features/forms",
  getParentRoute: () => Route$y
});
const FeaturesEmailCampaignsRoute = Route$7.update({
  id: "/features/email-campaigns",
  path: "/features/email-campaigns",
  getParentRoute: () => Route$y
});
const FeaturesEmailBuilderRoute = Route$6.update({
  id: "/features/email-builder",
  path: "/features/email-builder",
  getParentRoute: () => Route$y
});
const FeaturesDashboardRoute = Route$5.update({
  id: "/features/dashboard",
  path: "/features/dashboard",
  getParentRoute: () => Route$y
});
const FeaturesCrmRoute = Route$4.update({
  id: "/features/crm",
  path: "/features/crm",
  getParentRoute: () => Route$y
});
const FeaturesCodingRoute = Route$3.update({
  id: "/features/coding",
  path: "/features/coding",
  getParentRoute: () => Route$y
});
const FeaturesChatWidgetRoute = Route$2.update({
  id: "/features/chat-widget",
  path: "/features/chat-widget",
  getParentRoute: () => Route$y
});
const FeaturesChannelsRoute = Route$1.update({
  id: "/features/channels",
  path: "/features/channels",
  getParentRoute: () => Route$y
});
const FeaturesAiAgentsRoute = Route.update({
  id: "/features/ai-agents",
  path: "/features/ai-agents",
  getParentRoute: () => Route$y
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  CareersRoute,
  ChangelogRoute,
  ContactRoute,
  DataDeletionRoute,
  IntegrationsRoute,
  PricingRoute,
  PrivacyPolicyRoute,
  SecurityRoute,
  TosRoute,
  WaitlistRoute,
  WaitlistBusinessRoute,
  FeaturesAiAgentsRoute,
  FeaturesChannelsRoute,
  FeaturesChatWidgetRoute,
  FeaturesCodingRoute,
  FeaturesCrmRoute,
  FeaturesDashboardRoute,
  FeaturesEmailBuilderRoute,
  FeaturesEmailCampaignsRoute,
  FeaturesFormsRoute,
  FeaturesKnowledgeBaseRoute,
  FeaturesSmsCampaignsRoute,
  FeaturesSocialMediaRoute,
  FeaturesTasksRoute,
  FeaturesVideoEditorRoute,
  FeaturesVoiceAgentsRoute,
  FeaturesWorkflowsRoute,
  SolutionsClientManagementRoute,
  SolutionsContentMarketingRoute,
  SolutionsEnterpriseRoute,
  SolutionsLeadGenerationRoute,
  SolutionsTeamsRoute
};
const routeTree = Route$y._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  const router = createRouter({
    routeTree,
    defaultPreload: "intent",
    scrollRestoration: true
  });
  return router;
}
export {
  getRouter
};
