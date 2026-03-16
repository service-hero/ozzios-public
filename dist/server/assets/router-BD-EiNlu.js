import { z as createRootRoute, H as HeadContent, S as Scripts, O as Outlet, L as Link, A as createFileRoute, B as lazyRouteComponent, C as createRouter } from "./vendor-router-BDaSxPy_.js";
import { j as jsxRuntimeExports } from "./vendor-framer-DZFBeC81.js";
const Route$E = createRootRoute({
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
const $$splitComponentImporter$D = () => import("./waitlist-business-JhR0td3N.js");
const Route$D = createFileRoute("/waitlist-business")({
  component: lazyRouteComponent($$splitComponentImporter$D, "component"),
  head: () => createPageHead({
    title: "Business Waitlist",
    description: "Apply for early business access to OzziOS enterprise features.",
    path: "/waitlist-business",
    noindex: true
  })
});
const $$splitComponentImporter$C = () => import("./waitlist-nmcGBBAg.js");
const Route$C = createFileRoute("/waitlist")({
  component: lazyRouteComponent($$splitComponentImporter$C, "component"),
  head: () => createPageHead({
    title: "Join the Waitlist",
    description: "Get early access to OzziOS — the AI employee platform built for home service companies.",
    path: "/waitlist"
  })
});
const $$splitComponentImporter$B = () => import("./tos-CkRXyKst.js");
const Route$B = createFileRoute("/tos")({
  component: lazyRouteComponent($$splitComponentImporter$B, "component"),
  head: () => createPageHead({
    title: "Terms of Service",
    description: "OzziOS terms of service and acceptable use policies.",
    path: "/tos"
  })
});
const $$splitComponentImporter$A = () => import("./security-R9E1LVbY.js");
const Route$A = createFileRoute("/security")({
  head: () => createPageHead({
    title: "Security",
    description: "Enterprise-grade encryption, GDPR compliance, workspace isolation, and 99.9% uptime SLA for your business data.",
    path: "/security"
  }),
  component: lazyRouteComponent($$splitComponentImporter$A, "component")
});
const $$splitComponentImporter$z = () => import("./privacy-policy-CF3Ghndy.js");
const Route$z = createFileRoute("/privacy-policy")({
  component: lazyRouteComponent($$splitComponentImporter$z, "component"),
  head: () => createPageHead({
    title: "Privacy Policy",
    description: "How OzziOS collects, uses, and protects your data.",
    path: "/privacy-policy"
  })
});
const $$splitComponentImporter$y = () => import("./pricing-D3SXN4Rj.js");
const Route$y = createFileRoute("/pricing")({
  head: () => createPageHead({
    title: "Pricing",
    description: "Plans from Starter to Business. 30+ AI agents, unlimited workflows, CRM, and full marketing suite.",
    path: "/pricing"
  }),
  component: lazyRouteComponent($$splitComponentImporter$y, "component")
});
const $$splitComponentImporter$x = () => import("./integrations-BU1Mcq4O.js");
const Route$x = createFileRoute("/integrations")({
  head: () => createPageHead({
    title: "Integrations",
    description: "Connect OzziOS to 77+ tools including Google, GoHighLevel, Stripe, Twilio, and more. Unify your marketing stack.",
    path: "/integrations"
  }),
  component: lazyRouteComponent($$splitComponentImporter$x, "component")
});
const $$splitComponentImporter$w = () => import("./data-deletion-DM6z1li_.js");
const Route$w = createFileRoute("/data-deletion")({
  component: lazyRouteComponent($$splitComponentImporter$w, "component"),
  head: () => createPageHead({
    title: "Data Deletion",
    description: "Request deletion of your OzziOS account and associated data.",
    path: "/data-deletion",
    noindex: true
  })
});
const $$splitComponentImporter$v = () => import("./contact-zZwcLh4y.js");
const Route$v = createFileRoute("/contact")({
  head: () => createPageHead({
    title: "Contact Us",
    description: "Get in touch with the OzziOS team. Questions about AI agents, pricing, or enterprise plans — we're here to help.",
    path: "/contact"
  }),
  component: lazyRouteComponent($$splitComponentImporter$v, "component")
});
const $$splitComponentImporter$u = () => import("./changelog-DYmkNUH4.js");
const Route$u = createFileRoute("/changelog")({
  head: () => createPageHead({
    title: "Changelog",
    description: "See what's new in OzziOS. Product updates, new AI agents, integrations, and platform improvements.",
    path: "/changelog"
  }),
  component: lazyRouteComponent($$splitComponentImporter$u, "component")
});
const $$splitComponentImporter$t = () => import("./careers-D3MXhMXF.js");
const Route$t = createFileRoute("/careers")({
  head: () => createPageHead({
    title: "Careers",
    description: "Join OzziOS and help build the future of AI-powered marketing. Remote-first with competitive pay and equity.",
    path: "/careers"
  }),
  component: lazyRouteComponent($$splitComponentImporter$t, "component")
});
const $$splitComponentImporter$s = () => import("./blog-DDtX-dDg.js");
const Route$s = createFileRoute("/blog")({
  component: lazyRouteComponent($$splitComponentImporter$s, "component")
});
const $$splitComponentImporter$r = () => import("./about-BS8fI9TE.js");
const Route$r = createFileRoute("/about")({
  head: () => createPageHead({
    title: "About Us",
    description: "Meet the team behind OzziOS. Built by home service operators to replace back-office overhead with AI agents that work 24/7.",
    path: "/about"
  }),
  component: lazyRouteComponent($$splitComponentImporter$r, "component")
});
const $$splitComponentImporter$q = () => import("./index-B3TnHpu4.js").then((n) => n.i);
const Route$q = createFileRoute("/")({
  head: () => createPageHead({
    title: "Your First AI Employee",
    description: "The first agentic AI employee platform. 30+ specialized agents, unified CRM, workflows, and full marketing suite — starting free.",
    path: "/"
  }),
  component: lazyRouteComponent($$splitComponentImporter$q, "component")
});
const $$splitComponentImporter$p = () => import("./blog.index-DBe8qIsZ.js");
const Route$p = createFileRoute("/blog/")({
  component: lazyRouteComponent($$splitComponentImporter$p, "component"),
  head: () => createPageHead({
    title: "Blog",
    description: "Insights on AI automation, business growth, and product updates from the OzziOS team.",
    path: "/blog"
  })
});
const $$splitComponentImporter$o = () => import("./teams-C3lDHvu8.js");
const Route$o = createFileRoute("/solutions/teams")({
  head: () => createPageHead({
    title: "For Teams",
    description: "Multiply your service team's output with AI employees. Dispatchers, technicians, and office staff focus on service delivery while AI handles the back office.",
    path: "/solutions/teams"
  }),
  component: lazyRouteComponent($$splitComponentImporter$o, "component")
});
const $$splitComponentImporter$n = () => import("./lead-generation-CKkVFS0i.js");
const Route$n = createFileRoute("/solutions/lead-generation")({
  head: () => createPageHead({
    title: "Lead Generation",
    description: "AI-powered lead generation for home service companies. Capture homeowner leads, qualify with AI scoring, and nurture with automated follow-ups 24/7.",
    path: "/solutions/lead-generation"
  }),
  component: lazyRouteComponent($$splitComponentImporter$n, "component")
});
const $$splitComponentImporter$m = () => import("./enterprise-D5rPXoWf.js");
const Route$m = createFileRoute("/solutions/enterprise")({
  head: () => createPageHead({
    title: "Enterprise",
    description: "Enterprise-grade AI platform for multi-location service companies. Custom agents, SSO, dedicated support, and unlimited workflows.",
    path: "/solutions/enterprise"
  }),
  component: lazyRouteComponent($$splitComponentImporter$m, "component")
});
const $$splitComponentImporter$l = () => import("./content-marketing-C0LqPU2v.js");
const Route$l = createFileRoute("/solutions/content-marketing")({
  head: () => createPageHead({
    title: "Content Marketing",
    description: "Scale content production for your service business with AI. Blog posts, before/after showcases, seasonal tips, and local SEO content on autopilot.",
    path: "/solutions/content-marketing"
  }),
  component: lazyRouteComponent($$splitComponentImporter$l, "component")
});
const $$splitComponentImporter$k = () => import("./client-management-BZPQnIo6.js");
const Route$k = createFileRoute("/solutions/client-management")({
  head: () => createPageHead({
    title: "Customer Management",
    description: "Manage all your customers in one platform. AI handles reporting, communication, and job coordination.",
    path: "/solutions/client-management"
  }),
  component: lazyRouteComponent($$splitComponentImporter$k, "component")
});
const $$splitComponentImporter$j = () => import("./workflows-_fF1WxaV.js");
const Route$j = createFileRoute("/features/workflows")({
  head: () => createPageHead({
    title: "Workflows",
    description: "Visual workflow builder with AI automation. Connect triggers, actions, and agents to automate any process.",
    path: "/features/workflows"
  }),
  component: lazyRouteComponent($$splitComponentImporter$j, "component")
});
const $$splitComponentImporter$i = () => import("./voice-agents-B9VVnDYM.js");
const Route$i = createFileRoute("/features/voice-agents")({
  head: () => createPageHead({
    title: "Voice Agents",
    description: "AI voice agents for inbound and outbound calls. Appointment booking, lead qualification, and support on autopilot.",
    path: "/features/voice-agents"
  }),
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const $$splitComponentImporter$h = () => import("./video-editor-nevdjh_X.js");
const Route$h = createFileRoute("/features/video-editor")({
  head: () => createPageHead({
    title: "Video Editor",
    description: "AI video creation and editing. Promotional videos, social clips, and ads generated from text prompts.",
    path: "/features/video-editor"
  }),
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const $$splitComponentImporter$g = () => import("./tasks-BbxtqJnD.js");
const Route$g = createFileRoute("/features/tasks")({
  head: () => createPageHead({
    title: "Task Management",
    description: "AI-coordinated task management. Automatic assignment, priority tracking, and workflow integration.",
    path: "/features/tasks"
  }),
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import("./social-media-CaS8e5ai.js");
const Route$f = createFileRoute("/features/social-media")({
  head: () => createPageHead({
    title: "Social Media",
    description: "AI agents that create, schedule, and optimize social content across all platforms. Strategy to posting, automated.",
    path: "/features/social-media"
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./sms-campaigns-BiMXfBuK.js");
const Route$e = createFileRoute("/features/sms-campaigns")({
  head: () => createPageHead({
    title: "SMS Campaigns",
    description: "AI-powered text message campaigns with personalization, scheduling, and compliance built in.",
    path: "/features/sms-campaigns"
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./presentations-ByWKAaGx.js");
const Route$d = createFileRoute("/features/presentations")({
  head: () => createPageHead({
    title: "Presentations",
    description: "AI-generated presentations and pitch decks. Professional slides from your content in minutes.",
    path: "/features/presentations"
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./knowledge-base-Du-aQpzo.js");
const Route$c = createFileRoute("/features/knowledge-base")({
  head: () => createPageHead({
    title: "Knowledge Base",
    description: "Create a self-service knowledge base. Help customers find answers and reduce support tickets with AI search.",
    path: "/features/knowledge-base"
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./forms-DN84EGzP.js");
const Route$b = createFileRoute("/features/forms")({
  head: () => createPageHead({
    title: "Forms",
    description: "No-code form builder with automatic CRM sync, spam protection, and submission analytics. Embed with one line.",
    path: "/features/forms"
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./email-campaigns-_c9Fcpnm.js");
const Route$a = createFileRoute("/features/email-campaigns")({
  head: () => createPageHead({
    title: "Email Campaigns",
    description: "AI-managed email marketing. Automated sequences, personalization, analytics, and deliverability optimization.",
    path: "/features/email-campaigns"
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./email-builder-8l5UZA4b.js");
const Route$9 = createFileRoute("/features/email-builder")({
  head: () => createPageHead({
    title: "Email Builder",
    description: "Drag-and-drop email builder with 16 block types, live device preview, and dynamic personalization.",
    path: "/features/email-builder"
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./documents-Uf_jjwyL.js");
const Route$8 = createFileRoute("/features/documents")({
  head: () => createPageHead({
    title: "Documents",
    description: "AI-powered document creation with e-signatures. Proposals, contracts, and reports generated and signed in one place.",
    path: "/features/documents"
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./dashboard-B-wWOF26.js");
const Route$7 = createFileRoute("/features/dashboard")({
  head: () => createPageHead({
    title: "Dashboard",
    description: "Real-time business dashboard. Track agent activity, job metrics, and system health in a customizable layout.",
    path: "/features/dashboard"
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./crm-DoqFLAie.js");
const Route$6 = createFileRoute("/features/crm")({
  head: () => createPageHead({
    title: "CRM",
    description: "AI-powered CRM with lead scoring, 25+ activity types, smart segmentation, and GDPR compliance built in.",
    path: "/features/crm"
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./coding-BDRsNrpP.js");
const Route$5 = createFileRoute("/features/coding")({
  head: () => createPageHead({
    title: "Code Sandbox",
    description: "Built-in code editor for developers. Write, test, and deploy scripts and integrations without leaving OzziOS.",
    path: "/features/coding"
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./chat-widget-DnDEslUX.js");
const Route$4 = createFileRoute("/features/chat-widget")({
  head: () => createPageHead({
    title: "Chat Widget",
    description: "AI-powered website chat that captures leads, answers questions, and books meetings 24/7. Set up in 5 minutes.",
    path: "/features/chat-widget"
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./channels-Cxr4vFkS.js");
const Route$3 = createFileRoute("/features/channels")({
  head: () => createPageHead({
    title: "Channels",
    description: "Unified team messaging and collaboration. Real-time channels for your business, organized by customer or project.",
    path: "/features/channels"
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./blog-seo-BVhyX2yZ.js");
const Route$2 = createFileRoute("/features/blog-seo")({
  head: () => createPageHead({
    title: "Blog & SEO",
    description: "AI-powered SEO and blog management. Keyword research, content optimization, technical audits, and automated publishing.",
    path: "/features/blog-seo"
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./ai-agents-BWXfDUlf.js");
const Route$1 = createFileRoute("/features/ai-agents")({
  head: () => createPageHead({
    title: "AI Agents",
    description: "Deploy 30+ specialized AI agents that work 24/7 with persistent memory, 127+ tools, and full transparency.",
    path: "/features/ai-agents"
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const blogPostsMeta = {
  "22-ai-agents-home-service": {
    id: "22-ai-agents-home-service",
    title: "I Run a Home Service Company. Here's Why I Built 22 AI Agents to Run the Back Office.",
    excerpt: "$4,500/month. That's the average overhead small home service businesses spend on marketing and admin. After years of watching jobs slip through the cracks while teams struggled to keep up, I stopped pretending the model wasn't broken.",
    image: "/images/blog-post-22-ai-agents-replace-agency.png",
    date: "February 17, 2025",
    authorName: "Garrett Elmore"
  },
  "gohighlevel-integration": {
    id: "gohighlevel-integration",
    title: "OzziOS Now Integrates with GoHighLevel: Supercharge Your CRM with AI",
    excerpt: "Connect your GoHighLevel account to OzziOS and let AI agents manage contacts, automate follow-ups, and sync data across your entire business operations—all without leaving the platform.",
    image: "/images/ghl_ozzi_integrated_blog_post.jpg",
    date: "February 2, 2025",
    authorName: "Garrett Elmore"
  },
  "future-of-home-service-work": {
    id: "future-of-home-service-work",
    title: "The Future of Home Service Businesses: Why AI Employees Are Inevitable",
    excerpt: "The traditional service business model is broken. Hiring costs $15-25K per employee, training takes months, and your best people leave—taking institutional knowledge with them. Here's how AI changes everything.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&h=900&fit=crop&auto=format",
    date: "December 28, 2024",
    authorName: "Garrett Elmore"
  },
  "replace-8-tools": {
    id: "replace-8-tools",
    title: "How We Replaced 8 Business Tools with One Platform",
    excerpt: "Mailchimp, Hootsuite, SEMrush, Asana—we cancelled them all. Here's how consolidation saved us $2,400/month.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop&auto=format",
    date: "December 22, 2024",
    authorName: "Garrett Elmore"
  },
  "ai-seo-strategy": {
    id: "ai-seo-strategy",
    title: "AI-Powered SEO: A Complete Strategy Guide for 2025",
    excerpt: "Keyword research, technical audits, content optimization—all automated. Learn how AI agents handle SEO at scale.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop&auto=format",
    date: "December 18, 2024",
    authorName: "Garrett Elmore"
  },
  "scaling-without-hiring": {
    id: "scaling-without-hiring",
    title: "Scaling Your Service Business Without Adding Headcount",
    excerpt: "We grew from $50K to $200K MRR with the same team size. The secret? AI employees that work 24/7.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop&auto=format",
    date: "December 15, 2024",
    authorName: "Garrett Elmore"
  },
  "content-automation": {
    id: "content-automation",
    title: "Content Creation at Scale: From 4 Posts to 40 Per Week",
    excerpt: "Our AI Content Writer generates blog posts, social content, and email campaigns—all in your brand voice.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop&auto=format",
    date: "December 10, 2024",
    authorName: "Garrett Elmore"
  },
  "customer-reporting-automation": {
    id: "customer-reporting-automation",
    title: "Automated Customer Reports That Actually Impress",
    excerpt: "Stop spending Sundays building reports. Our AI generates interactive dashboards customers can explore themselves.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&h=900&fit=crop&auto=format",
    date: "December 5, 2024",
    authorName: "Garrett Elmore"
  },
  "goodbye-overhead": {
    id: "goodbye-overhead",
    title: "Why We Stopped Outsourcing Our Marketing (And Never Looked Back)",
    excerpt: "$8K/month for work we couldn't see. Now we own the AI—full transparency, better results, fraction of the cost.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=900&fit=crop&auto=format",
    date: "November 28, 2024",
    authorName: "Garrett Elmore"
  }
};
function getPostMeta(id) {
  return blogPostsMeta[id];
}
const $$splitComponentImporter = () => import("./blog._postId-C5-W15S3.js");
const Route = createFileRoute("/blog/$postId")({
  loader: ({
    params
  }) => {
    return {
      postMeta: getPostMeta(params.postId)
    };
  },
  head: ({
    loaderData
  }) => {
    if (!loaderData?.postMeta) {
      return createPageHead({
        title: "Post Not Found",
        description: "The blog post you are looking for does not exist.",
        path: "/blog",
        noindex: true
      });
    }
    const {
      postMeta
    } = loaderData;
    return createPageHead({
      title: postMeta.title,
      description: postMeta.excerpt,
      path: `/blog/${postMeta.id}`,
      ogImage: postMeta.image.startsWith("http") ? postMeta.image : `https://ozzios.com${postMeta.image}`,
      ogType: "article",
      article: {
        publishedTime: postMeta.date,
        author: postMeta.authorName
      }
    });
  },
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const WaitlistBusinessRoute = Route$D.update({
  id: "/waitlist-business",
  path: "/waitlist-business",
  getParentRoute: () => Route$E
});
const WaitlistRoute = Route$C.update({
  id: "/waitlist",
  path: "/waitlist",
  getParentRoute: () => Route$E
});
const TosRoute = Route$B.update({
  id: "/tos",
  path: "/tos",
  getParentRoute: () => Route$E
});
const SecurityRoute = Route$A.update({
  id: "/security",
  path: "/security",
  getParentRoute: () => Route$E
});
const PrivacyPolicyRoute = Route$z.update({
  id: "/privacy-policy",
  path: "/privacy-policy",
  getParentRoute: () => Route$E
});
const PricingRoute = Route$y.update({
  id: "/pricing",
  path: "/pricing",
  getParentRoute: () => Route$E
});
const IntegrationsRoute = Route$x.update({
  id: "/integrations",
  path: "/integrations",
  getParentRoute: () => Route$E
});
const DataDeletionRoute = Route$w.update({
  id: "/data-deletion",
  path: "/data-deletion",
  getParentRoute: () => Route$E
});
const ContactRoute = Route$v.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$E
});
const ChangelogRoute = Route$u.update({
  id: "/changelog",
  path: "/changelog",
  getParentRoute: () => Route$E
});
const CareersRoute = Route$t.update({
  id: "/careers",
  path: "/careers",
  getParentRoute: () => Route$E
});
const BlogRoute = Route$s.update({
  id: "/blog",
  path: "/blog",
  getParentRoute: () => Route$E
});
const AboutRoute = Route$r.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$E
});
const IndexRoute = Route$q.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$E
});
const BlogIndexRoute = Route$p.update({
  id: "/",
  path: "/",
  getParentRoute: () => BlogRoute
});
const SolutionsTeamsRoute = Route$o.update({
  id: "/solutions/teams",
  path: "/solutions/teams",
  getParentRoute: () => Route$E
});
const SolutionsLeadGenerationRoute = Route$n.update({
  id: "/solutions/lead-generation",
  path: "/solutions/lead-generation",
  getParentRoute: () => Route$E
});
const SolutionsEnterpriseRoute = Route$m.update({
  id: "/solutions/enterprise",
  path: "/solutions/enterprise",
  getParentRoute: () => Route$E
});
const SolutionsContentMarketingRoute = Route$l.update({
  id: "/solutions/content-marketing",
  path: "/solutions/content-marketing",
  getParentRoute: () => Route$E
});
const SolutionsClientManagementRoute = Route$k.update({
  id: "/solutions/client-management",
  path: "/solutions/client-management",
  getParentRoute: () => Route$E
});
const FeaturesWorkflowsRoute = Route$j.update({
  id: "/features/workflows",
  path: "/features/workflows",
  getParentRoute: () => Route$E
});
const FeaturesVoiceAgentsRoute = Route$i.update({
  id: "/features/voice-agents",
  path: "/features/voice-agents",
  getParentRoute: () => Route$E
});
const FeaturesVideoEditorRoute = Route$h.update({
  id: "/features/video-editor",
  path: "/features/video-editor",
  getParentRoute: () => Route$E
});
const FeaturesTasksRoute = Route$g.update({
  id: "/features/tasks",
  path: "/features/tasks",
  getParentRoute: () => Route$E
});
const FeaturesSocialMediaRoute = Route$f.update({
  id: "/features/social-media",
  path: "/features/social-media",
  getParentRoute: () => Route$E
});
const FeaturesSmsCampaignsRoute = Route$e.update({
  id: "/features/sms-campaigns",
  path: "/features/sms-campaigns",
  getParentRoute: () => Route$E
});
const FeaturesPresentationsRoute = Route$d.update({
  id: "/features/presentations",
  path: "/features/presentations",
  getParentRoute: () => Route$E
});
const FeaturesKnowledgeBaseRoute = Route$c.update({
  id: "/features/knowledge-base",
  path: "/features/knowledge-base",
  getParentRoute: () => Route$E
});
const FeaturesFormsRoute = Route$b.update({
  id: "/features/forms",
  path: "/features/forms",
  getParentRoute: () => Route$E
});
const FeaturesEmailCampaignsRoute = Route$a.update({
  id: "/features/email-campaigns",
  path: "/features/email-campaigns",
  getParentRoute: () => Route$E
});
const FeaturesEmailBuilderRoute = Route$9.update({
  id: "/features/email-builder",
  path: "/features/email-builder",
  getParentRoute: () => Route$E
});
const FeaturesDocumentsRoute = Route$8.update({
  id: "/features/documents",
  path: "/features/documents",
  getParentRoute: () => Route$E
});
const FeaturesDashboardRoute = Route$7.update({
  id: "/features/dashboard",
  path: "/features/dashboard",
  getParentRoute: () => Route$E
});
const FeaturesCrmRoute = Route$6.update({
  id: "/features/crm",
  path: "/features/crm",
  getParentRoute: () => Route$E
});
const FeaturesCodingRoute = Route$5.update({
  id: "/features/coding",
  path: "/features/coding",
  getParentRoute: () => Route$E
});
const FeaturesChatWidgetRoute = Route$4.update({
  id: "/features/chat-widget",
  path: "/features/chat-widget",
  getParentRoute: () => Route$E
});
const FeaturesChannelsRoute = Route$3.update({
  id: "/features/channels",
  path: "/features/channels",
  getParentRoute: () => Route$E
});
const FeaturesBlogSeoRoute = Route$2.update({
  id: "/features/blog-seo",
  path: "/features/blog-seo",
  getParentRoute: () => Route$E
});
const FeaturesAiAgentsRoute = Route$1.update({
  id: "/features/ai-agents",
  path: "/features/ai-agents",
  getParentRoute: () => Route$E
});
const BlogPostIdRoute = Route.update({
  id: "/$postId",
  path: "/$postId",
  getParentRoute: () => BlogRoute
});
const BlogRouteChildren = {
  BlogPostIdRoute,
  BlogIndexRoute
};
const BlogRouteWithChildren = BlogRoute._addFileChildren(BlogRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  BlogRoute: BlogRouteWithChildren,
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
  FeaturesBlogSeoRoute,
  FeaturesChannelsRoute,
  FeaturesChatWidgetRoute,
  FeaturesCodingRoute,
  FeaturesCrmRoute,
  FeaturesDashboardRoute,
  FeaturesDocumentsRoute,
  FeaturesEmailBuilderRoute,
  FeaturesEmailCampaignsRoute,
  FeaturesFormsRoute,
  FeaturesKnowledgeBaseRoute,
  FeaturesPresentationsRoute,
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
const routeTree = Route$E._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  const router2 = createRouter({
    routeTree,
    defaultPreload: "intent",
    scrollRestoration: true
  });
  return router2;
}
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  router as r
};
