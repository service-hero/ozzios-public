import { a as reactExports, n as jsxRuntimeExports } from "./worker-entry-DG84cuki.js";
import { c as createLucideIcon, a as cn, D as DocsLayout } from "./DocsLayout-BhonSBpG.js";
import { L as Link, R as Route } from "./router-Jwtmj7U_.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
const __iconNode$1 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode$1);
const __iconNode = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
];
const List = createLucideIcon("list", __iconNode);
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DocsLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DocsPage, { title: content.title, description: content.description, breadcrumbs: content.breadcrumbs, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Content for this page coming soon." }) }) });
}
export {
  DocsRoute as component
};
