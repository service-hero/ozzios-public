import { u as useRouterState, n as jsxRuntimeExports, a as reactExports } from "./worker-entry-DUbV-qEz.js";
import { L as Link, R as Route } from "./router-BLJT3Mxm.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { Z as Zap } from "./zap-1MGNmvOI.js";
import { c as createLucideIcon } from "./createLucideIcon-OQXTLfCE.js";
import { B as BookOpen, M as Menu } from "./menu-Bt53Wknu.js";
import { C as CodeXml } from "./code-xml-BVJ_id3J.js";
import { S as Sparkles } from "./sparkles-DZv4tgq8.js";
import { B as Button } from "./button-CtEClRbA.js";
import { I as Input } from "./input-D79fxQdz.js";
import { S as Search } from "./search-DUL7xjOG.js";
import { C as ChevronRight } from "./chevron-right-CPTxXx3M.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
const __iconNode$1 = [
  [
    "path",
    {
      d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
      key: "9ktpf1"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
];
const Compass = createLucideIcon("compass", __iconNode$1);
const __iconNode = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
];
const List = createLucideIcon("list", __iconNode);
const docsConfig = [
  {
    title: "Getting Started",
    icon: Zap,
    items: [
      { title: "Welcome", href: "/" },
      { title: "Setting Up", href: "/docs/installation" },
      { title: "How It Works", href: "/docs/architecture" }
    ]
  },
  {
    title: "Learn",
    icon: Compass,
    items: [
      { title: "AI Assistants", href: "/docs/concepts/agents" },
      { title: "Workspaces", href: "/docs/concepts/workspaces" },
      { title: "Automations", href: "/docs/concepts/workflows" }
    ]
  },
  {
    title: "How-To Guides",
    icon: BookOpen,
    items: [
      { title: "Add an AI Assistant", href: "/docs/guides/first-agent" },
      { title: "Create an Automation", href: "/docs/guides/workflows" }
    ]
  },
  {
    title: "Developer API",
    icon: CodeXml,
    items: [
      { title: "Agent Testing API", href: "/docs/api/agent-testing" }
    ]
  }
];
function DocsSidebar() {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "w-full px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-6", children: docsConfig.map((section, index) => {
      const IconComponent = section.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-2 py-1.5 mb-1", children: [
          IconComponent && /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { className: "h-3.5 w-3.5 text-muted-foreground/70" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground", children: section.title })
        ] }),
        section.items && section.items.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-0.5", children: section.items.map((item, itemIndex) => {
          const isActive = item.href === currentPath;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: item.href || "/",
              className: cn(
                "group relative flex items-center gap-2 rounded-md px-2 py-1.5 text-[13px] transition-all duration-150",
                isActive ? "bg-primary/8 text-foreground font-medium" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              ),
              children: [
                isActive && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-1/2 -translate-y-1/2 h-4 w-[2px] rounded-full bg-foreground" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pl-1", children: item.title })
              ]
            },
            itemIndex
          );
        }) })
      ] }, index);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 px-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-lg border border-border/40 bg-muted/30 px-3 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-amber-500" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-medium text-foreground", children: "Need help?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Ask our AI assistant" })
      ] })
    ] }) })
  ] });
}
function DocsHeader() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-14 items-center px-4 md:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", className: "h-8 w-8 p-0 md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2.5 transition-opacity hover:opacity-80", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/images/dark-theme-logo.svg",
            alt: "Ozzios",
            className: "h-6 w-auto dark:invert-0 invert"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-muted-foreground", children: "Docs" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden rounded-md bg-muted/60 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground md:inline-block", children: "v1.0" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative hidden md:block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "Search docs...",
            className: cn(
              "h-8 w-[200px] pl-8 pr-12 text-[13px] lg:w-[280px]",
              "bg-muted/30 border-border/50",
              "placeholder:text-muted-foreground/60",
              "focus:bg-background focus:border-border"
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-2 top-1/2 -translate-y-1/2 hidden items-center gap-0.5 sm:flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { className: "flex h-5 items-center rounded border border-border/60 bg-muted/50 px-1.5 text-[10px] font-medium text-muted-foreground", children: "⌘K" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", className: "h-8 w-8 p-0 md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            asChild: true,
            className: "h-8 px-3 text-[13px] text-muted-foreground hover:text-foreground",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://app.ozzios.com/sign-in", children: "Sign In" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            asChild: true,
            className: "h-8 px-3 text-[13px]",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://app.ozzios.com/sign-up", children: "Get Started" })
          }
        )
      ] })
    ] })
  ] }) });
}
function DocsLayout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex min-h-screen w-full flex-col bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none fixed inset-0 z-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute -top-48 -right-48 h-[600px] w-[600px] rounded-full blur-[120px] opacity-[0.06] bg-primary-glow"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full blur-[100px] opacity-[0.04] bg-chart-glow"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 opacity-[0.015] grid-pattern-md"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex min-h-screen flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DocsHeader, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-[260px] shrink-0 border-r border-border/40 bg-background/80 backdrop-blur-xl md:sticky md:block lg:w-[280px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full py-6 overflow-y-auto overflow-x-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DocsSidebar, {}) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "relative min-w-0 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl", children }) })
      ] })
    ] })
  ] });
}
function TableOfContents({ items }) {
  const [activeId, setActiveId] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (!items?.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` }
    );
    items.forEach((item) => {
      const element = document.getElementById(item.url.replace("#", ""));
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [items]);
  if (!items?.length) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden xl:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-20 py-8 pr-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4 pb-3 border-b border-border/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(List, { className: "h-3.5 w-3.5 text-muted-foreground/70" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground", children: "On this page" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: items.map((item) => {
      const isActive = item.url.replace("#", "") === activeId;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: item.url,
            className: cn(
              "block py-1.5 text-[13px] leading-snug transition-colors",
              isActive ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
            ),
            children: item.title
          }
        ),
        item.items?.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "ml-3 mt-1 space-y-1 border-l border-border/40 pl-3", children: item.items.map((subItem) => {
          const isSubActive = subItem.url.replace("#", "") === activeId;
          return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: subItem.url,
              className: cn(
                "block py-1 text-[12px] leading-snug transition-colors",
                isSubActive ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
              ),
              children: subItem.title
            }
          ) }, subItem.url);
        }) }) : null
      ] }, item.url);
    }) })
  ] }) });
}
function DocsPage({
  title,
  description,
  breadcrumbs,
  tableOfContents,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "xl:grid xl:grid-cols-[1fr_240px] xl:gap-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full min-w-0 px-6 py-8 md:px-8 lg:py-10", children: [
      breadcrumbs && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 flex items-center gap-1.5 text-[12px] text-muted-foreground", children: breadcrumbs.map((crumb, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
        i > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3 w-3 opacity-50" }),
        crumb.href ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: crumb.href,
            className: "transition-colors hover:text-foreground",
            children: crumb.title
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: crumb.title })
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[28px] font-semibold tracking-tight text-foreground lg:text-[32px]", children: title }),
        description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] leading-relaxed text-muted-foreground max-w-2xl", children: description })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(
        "docs-prose",
        // Headings
        "[&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-[20px] [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground",
        "[&_h2]:scroll-mt-20 [&_h2]:border-b [&_h2]:border-border/40 [&_h2]:pb-2",
        "[&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-[16px] [&_h3]:font-semibold [&_h3]:text-foreground",
        "[&_h4]:mt-6 [&_h4]:mb-2 [&_h4]:text-[14px] [&_h4]:font-medium [&_h4]:text-foreground",
        // Paragraphs
        "[&_p]:text-[14px] [&_p]:leading-[1.7] [&_p]:text-muted-foreground [&_p]:mb-4",
        // Links
        "[&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-border",
        "[&_a:hover]:decoration-foreground",
        // Lists
        "[&_ul]:my-4 [&_ul]:ml-6 [&_ul]:list-disc [&_ul]:text-[14px] [&_ul]:text-muted-foreground",
        "[&_ol]:my-4 [&_ol]:ml-6 [&_ol]:list-decimal [&_ol]:text-[14px] [&_ol]:text-muted-foreground",
        "[&_li]:mt-2 [&_li]:leading-[1.6]",
        // Code blocks
        "[&_pre]:my-6 [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-border/50 [&_pre]:bg-muted/30",
        "[&_pre]:px-4 [&_pre]:py-3.5 [&_pre]:overflow-x-auto",
        "[&_pre_code]:text-[13px] [&_pre_code]:leading-[1.6] [&_pre_code]:text-foreground",
        "[&_pre_code]:font-mono [&_pre_code]:bg-transparent [&_pre_code]:p-0",
        // Inline code
        "[&_code]:rounded [&_code]:bg-muted/50 [&_code]:px-1.5 [&_code]:py-0.5",
        "[&_code]:text-[13px] [&_code]:font-mono [&_code]:text-foreground",
        // Blockquotes
        "[&_blockquote]:my-6 [&_blockquote]:border-l-2 [&_blockquote]:border-border/60",
        "[&_blockquote]:pl-4 [&_blockquote]:text-[14px] [&_blockquote]:italic [&_blockquote]:text-muted-foreground",
        // Tables
        "[&_table]:my-6 [&_table]:w-full [&_table]:text-[13px]",
        "[&_th]:border [&_th]:border-border/40 [&_th]:bg-muted/30 [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:font-medium [&_th]:text-foreground",
        "[&_td]:border [&_td]:border-border/40 [&_td]:px-3 [&_td]:py-2 [&_td]:text-muted-foreground",
        // Horizontal rules
        "[&_hr]:my-8 [&_hr]:border-border/40",
        // Images
        "[&_img]:my-6 [&_img]:rounded-lg [&_img]:border [&_img]:border-border/40"
      ), children })
    ] }),
    tableOfContents && /* @__PURE__ */ jsxRuntimeExports.jsx(TableOfContents, { items: tableOfContents })
  ] });
}
const docsContent = {
  "installation": {
    title: "Setting Up",
    description: "Get started with Ozzios in just a few minutes.",
    breadcrumbs: [{
      title: "Docs",
      href: "/"
    }, {
      title: "Getting Started"
    }, {
      title: "Setting Up"
    }]
  },
  "architecture": {
    title: "How It Works",
    description: "Understand the core architecture and concepts behind Ozzios.",
    breadcrumbs: [{
      title: "Docs",
      href: "/"
    }, {
      title: "Getting Started"
    }, {
      title: "How It Works"
    }]
  },
  "concepts/agents": {
    title: "AI Assistants",
    description: "Learn about AI assistants and how they can automate your workflows.",
    breadcrumbs: [{
      title: "Docs",
      href: "/"
    }, {
      title: "Learn"
    }, {
      title: "AI Assistants"
    }]
  },
  "concepts/workspaces": {
    title: "Workspaces",
    description: "Organize your projects and teams with workspaces.",
    breadcrumbs: [{
      title: "Docs",
      href: "/"
    }, {
      title: "Learn"
    }, {
      title: "Workspaces"
    }]
  },
  "concepts/workflows": {
    title: "Automations",
    description: "Create powerful automations to streamline your business processes.",
    breadcrumbs: [{
      title: "Docs",
      href: "/"
    }, {
      title: "Learn"
    }, {
      title: "Automations"
    }]
  },
  "guides/first-agent": {
    title: "Add an AI Assistant",
    description: "Step-by-step guide to creating your first AI assistant.",
    breadcrumbs: [{
      title: "Docs",
      href: "/"
    }, {
      title: "How-To Guides"
    }, {
      title: "Add an AI Assistant"
    }]
  },
  "guides/workflows": {
    title: "Create an Automation",
    description: "Learn how to build and deploy automations.",
    breadcrumbs: [{
      title: "Docs",
      href: "/"
    }, {
      title: "How-To Guides"
    }, {
      title: "Create an Automation"
    }]
  },
  "api/agent-testing": {
    title: "Agent Testing API",
    description: "API reference for testing and debugging your AI assistants.",
    breadcrumbs: [{
      title: "Docs",
      href: "/"
    }, {
      title: "Developer API"
    }, {
      title: "Agent Testing API"
    }]
  }
};
function DocsRoute() {
  const {
    _splat
  } = Route.useParams();
  const content = docsContent[_splat ?? ""];
  if (!content) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DocsLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DocsPage, { title: "Page Not Found", description: "The page you're looking for doesn't exist.", breadcrumbs: [{
      title: "Docs",
      href: "/"
    }, {
      title: "Not Found"
    }], children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Check the URL or navigate using the sidebar." }) }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DocsLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DocsPage, { title: content.title, description: content.description, breadcrumbs: content.breadcrumbs, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Content for this page coming soon!" }) }) });
}
export {
  DocsRoute as component
};
