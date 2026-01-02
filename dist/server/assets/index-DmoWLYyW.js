import { useRouterState, Link } from "@tanstack/react-router";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Zap, Compass, BookOpen, Code2, Sparkles, Menu, Search, Bot, Workflow, ArrowRight, CheckCircle2, Users, PlayCircle, HelpCircle } from "lucide-react";
import * as React$1 from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { motion } from "framer-motion";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
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
    icon: Code2,
    items: [
      { title: "Agent Testing API", href: "/docs/api/agent-testing" }
    ]
  }
];
function DocsSidebar() {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  return /* @__PURE__ */ React.createElement("nav", { className: "w-full px-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-6" }, docsConfig.map((section, index) => {
    const IconComponent = section.icon;
    return /* @__PURE__ */ React.createElement("div", { key: index, className: "flex flex-col gap-1" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 px-2 py-1.5 mb-1" }, IconComponent && /* @__PURE__ */ React.createElement(IconComponent, { className: "h-3.5 w-3.5 text-muted-foreground/70" }), /* @__PURE__ */ React.createElement("span", { className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground" }, section.title)), section.items && section.items.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-0.5" }, section.items.map((item, itemIndex) => {
      const isActive = item.href === currentPath;
      return /* @__PURE__ */ React.createElement(
        Link,
        {
          key: itemIndex,
          to: item.href || "/",
          className: cn(
            "group relative flex items-center gap-2 rounded-md px-2 py-1.5 text-[13px] transition-all duration-150",
            isActive ? "bg-primary/8 text-foreground font-medium" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
          )
        },
        isActive && /* @__PURE__ */ React.createElement("div", { className: "absolute left-0 top-1/2 -translate-y-1/2 h-4 w-[2px] rounded-full bg-foreground" }),
        /* @__PURE__ */ React.createElement("span", { className: "pl-1" }, item.title)
      );
    })));
  })), /* @__PURE__ */ React.createElement("div", { className: "mt-8 px-2" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 rounded-lg border border-border/40 bg-muted/30 px-3 py-2" }, /* @__PURE__ */ React.createElement(Sparkles, { className: "h-3.5 w-3.5 text-amber-500" }), /* @__PURE__ */ React.createElement("div", { className: "min-w-0" }, /* @__PURE__ */ React.createElement("p", { className: "text-[11px] font-medium text-foreground" }, "Need help?"), /* @__PURE__ */ React.createElement("p", { className: "text-[10px] text-muted-foreground" }, "Ask our AI assistant")))));
}
const buttonVariants = cva(
  "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-lg border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-[3px] aria-invalid:ring-[3px] [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        "default-glow": "bg-primary text-primary-foreground hover:bg-primary/80 shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]",
        outline: "border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost: "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",
        destructive: "bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        icon: "size-8",
        "icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React$1.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ React$1.createElement(
      Comp,
      {
        "data-slot": "button",
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
const Input = React$1.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ React$1.createElement(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
function DocsHeader() {
  return /* @__PURE__ */ React.createElement("header", { className: "sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl" }, /* @__PURE__ */ React.createElement("div", { className: "flex h-14 items-center px-4 md:px-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4" }, /* @__PURE__ */ React.createElement(Button, { variant: "ghost", size: "sm", className: "h-8 w-8 p-0 md:hidden" }, /* @__PURE__ */ React.createElement(Menu, { className: "h-4 w-4" })), /* @__PURE__ */ React.createElement(Link, { to: "/", className: "flex items-center gap-2.5 transition-opacity hover:opacity-80" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: "/images/dark-theme-logo.svg",
      alt: "Ozzios",
      className: "h-6 w-auto dark:invert-0 invert"
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "hidden sm:block" }, /* @__PURE__ */ React.createElement("span", { className: "text-[12px] text-muted-foreground" }, "Docs"))), /* @__PURE__ */ React.createElement("span", { className: "hidden rounded-md bg-muted/60 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground md:inline-block" }, "v1.0")), /* @__PURE__ */ React.createElement("div", { className: "ml-auto flex items-center gap-3" }, /* @__PURE__ */ React.createElement("div", { className: "relative hidden md:block" }, /* @__PURE__ */ React.createElement(Search, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" }), /* @__PURE__ */ React.createElement(
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
  ), /* @__PURE__ */ React.createElement("div", { className: "absolute right-2 top-1/2 -translate-y-1/2 hidden items-center gap-0.5 sm:flex" }, /* @__PURE__ */ React.createElement("kbd", { className: "flex h-5 items-center rounded border border-border/60 bg-muted/50 px-1.5 text-[10px] font-medium text-muted-foreground" }, "⌘K"))), /* @__PURE__ */ React.createElement(Button, { variant: "ghost", size: "sm", className: "h-8 w-8 p-0 md:hidden" }, /* @__PURE__ */ React.createElement(Search, { className: "h-4 w-4" })), /* @__PURE__ */ React.createElement("nav", { className: "flex items-center gap-1" }, /* @__PURE__ */ React.createElement(
    Button,
    {
      variant: "ghost",
      size: "sm",
      asChild: true,
      className: "h-8 px-3 text-[13px] text-muted-foreground hover:text-foreground"
    },
    /* @__PURE__ */ React.createElement("a", { href: "https://app.ozzios.com/sign-in" }, "Sign In")
  ), /* @__PURE__ */ React.createElement(
    Button,
    {
      size: "sm",
      asChild: true,
      className: "h-8 px-3 text-[13px]"
    },
    /* @__PURE__ */ React.createElement("a", { href: "https://app.ozzios.com/sign-up" }, "Get Started")
  )))));
}
function DocsLayout({ children }) {
  return /* @__PURE__ */ React.createElement("div", { className: "relative flex min-h-screen w-full flex-col bg-background" }, /* @__PURE__ */ React.createElement("div", { className: "pointer-events-none fixed inset-0 z-0 overflow-hidden" }, /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "absolute -top-48 -right-48 h-[600px] w-[600px] rounded-full blur-[120px] opacity-[0.06]",
      style: { background: "var(--primary)" }
    }
  ), /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full blur-[100px] opacity-[0.04]",
      style: { background: "var(--chart-2)" }
    }
  ), /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "absolute inset-0 opacity-[0.015]",
      style: {
        backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px),
                              linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
        backgroundSize: "48px 48px"
      }
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "relative z-10 flex min-h-screen flex-col" }, /* @__PURE__ */ React.createElement(DocsHeader, null), /* @__PURE__ */ React.createElement("div", { className: "flex flex-1" }, /* @__PURE__ */ React.createElement("aside", { className: "fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-[260px] shrink-0 border-r border-border/40 bg-background/80 backdrop-blur-xl md:sticky md:block lg:w-[280px]" }, /* @__PURE__ */ React.createElement("div", { className: "h-full py-6 overflow-y-auto overflow-x-hidden" }, /* @__PURE__ */ React.createElement(DocsSidebar, null))), /* @__PURE__ */ React.createElement("main", { className: "relative min-w-0 flex-1" }, /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-5xl" }, children)))));
}
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};
const quickStartCards = [
  {
    title: "Get Started",
    description: "Set up your account and add your first client in minutes.",
    icon: Zap,
    href: "/docs/installation",
    gradient: "from-amber-500/20 via-orange-500/10 to-rose-500/20",
    iconColor: "text-amber-500"
  },
  {
    title: "AI Assistants",
    description: "Learn how AI can help you save time on everyday tasks.",
    icon: Bot,
    href: "/docs/concepts/agents",
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
    iconColor: "text-emerald-500"
  },
  {
    title: "Automations",
    description: "Set up automatic follow-ups, reminders, and more.",
    icon: Workflow,
    href: "/docs/concepts/workflows",
    gradient: "from-blue-500/20 via-indigo-500/10 to-violet-500/20",
    iconColor: "text-blue-500"
  },
  {
    title: "How-To Guides",
    description: "Step-by-step instructions for common tasks.",
    icon: BookOpen,
    href: "/docs/guides/first-agent",
    gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/20",
    iconColor: "text-violet-500"
  }
];
const highlights = [
  "Keep all your clients organized in one place",
  "AI assistants that help with emails, research, and more",
  "Automatic follow-ups so you never miss an opportunity",
  "Work together with your team in real-time"
];
function DocsHomeView() {
  return /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: "hidden",
      animate: "visible",
      variants: containerVariants,
      className: "w-full min-w-0 px-6 py-10 md:px-8 lg:py-12"
    },
    /* @__PURE__ */ React.createElement(motion.div, { variants: itemVariants, className: "mb-12" }, /* @__PURE__ */ React.createElement("div", { className: "mb-4 inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/30 px-3 py-1" }, /* @__PURE__ */ React.createElement(Sparkles, { className: "h-3.5 w-3.5 text-amber-500" }), /* @__PURE__ */ React.createElement("span", { className: "text-[12px] font-medium text-muted-foreground" }, "Help Center")), /* @__PURE__ */ React.createElement("h1", { className: "text-[32px] font-semibold tracking-tight text-foreground lg:text-[40px]" }, "Welcome to Ozzios"), /* @__PURE__ */ React.createElement("p", { className: "mt-3 max-w-2xl text-[16px] leading-relaxed text-muted-foreground" }, "Learn how to manage your clients, save time with AI assistants, and grow your business—all in one place.")),
    /* @__PURE__ */ React.createElement(motion.div, { variants: itemVariants, className: "mb-12" }, /* @__PURE__ */ React.createElement("div", { className: "grid gap-4 sm:grid-cols-2" }, quickStartCards.map((card) => {
      const IconComponent = card.icon;
      return /* @__PURE__ */ React.createElement(
        Link,
        {
          key: card.title,
          to: card.href,
          className: "group relative"
        },
        /* @__PURE__ */ React.createElement("div", { className: cn(
          "relative overflow-hidden rounded-xl border border-border/50 bg-card p-5 transition-all duration-200",
          "hover:border-border hover:shadow-sm"
        ) }, /* @__PURE__ */ React.createElement("div", { className: cn(
          "absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          `bg-gradient-to-br ${card.gradient}`
        ) }), /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement("div", { className: cn(
          "mb-3 flex h-10 w-10 items-center justify-center rounded-lg",
          "bg-muted/50 transition-colors group-hover:bg-background/80"
        ) }, /* @__PURE__ */ React.createElement(IconComponent, { className: cn("h-5 w-5", card.iconColor) })), /* @__PURE__ */ React.createElement("div", { className: "flex items-start justify-between gap-2" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "text-[15px] font-semibold text-foreground" }, card.title), /* @__PURE__ */ React.createElement("p", { className: "mt-1 text-[13px] leading-relaxed text-muted-foreground" }, card.description)), /* @__PURE__ */ React.createElement(ArrowRight, { className: "h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" }))))
      );
    }))),
    /* @__PURE__ */ React.createElement(motion.div, { variants: itemVariants, className: "mb-12" }, /* @__PURE__ */ React.createElement("div", { className: "rounded-xl border border-border/50 bg-card/50 p-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 mb-4" }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: "/images/dark-theme-logo.svg",
        alt: "Ozzios",
        className: "h-6 w-auto dark:invert-0 invert"
      }
    ), /* @__PURE__ */ React.createElement("h2", { className: "text-[18px] font-semibold text-foreground" }, "What Ozzios Does For You")), /* @__PURE__ */ React.createElement("p", { className: "mb-5 text-[14px] leading-relaxed text-muted-foreground" }, "Ozzios is your all-in-one business management platform. It helps you stay organized, communicate with clients, and automate repetitive tasks—so you can focus on what you do best."), /* @__PURE__ */ React.createElement("ul", { className: "grid gap-2.5 sm:grid-cols-2" }, highlights.map((item, index) => /* @__PURE__ */ React.createElement(
      motion.li,
      {
        key: index,
        initial: { opacity: 0, x: -10 },
        animate: { opacity: 1, x: 0 },
        transition: { delay: 0.4 + index * 0.1, duration: 0.3 },
        className: "flex items-start gap-2.5 text-[13px] text-foreground"
      },
      /* @__PURE__ */ React.createElement(CheckCircle2, { className: "h-4 w-4 shrink-0 mt-0.5 text-emerald-500" }),
      /* @__PURE__ */ React.createElement("span", null, item)
    ))))),
    /* @__PURE__ */ React.createElement(motion.div, { variants: itemVariants, className: "mb-12" }, /* @__PURE__ */ React.createElement("h2", { className: "mb-4 text-[16px] font-semibold text-foreground" }, "Popular Topics"), /* @__PURE__ */ React.createElement("div", { className: "grid gap-3 sm:grid-cols-3" }, /* @__PURE__ */ React.createElement(
      ExploreCard,
      {
        icon: Bot,
        title: "AI Assistants",
        description: "How to use AI help",
        href: "/docs/concepts/agents"
      }
    ), /* @__PURE__ */ React.createElement(
      ExploreCard,
      {
        icon: Workflow,
        title: "Automations",
        description: "Set up auto follow-ups",
        href: "/docs/concepts/workflows"
      }
    ), /* @__PURE__ */ React.createElement(
      ExploreCard,
      {
        icon: Users,
        title: "Team & Clients",
        description: "Manage your workspace",
        href: "/docs/concepts/workspaces"
      }
    ))),
    /* @__PURE__ */ React.createElement(motion.div, { variants: itemVariants }, /* @__PURE__ */ React.createElement("h2", { className: "mb-4 text-[16px] font-semibold text-foreground" }, "Quick Guides"), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(
      QuickLink,
      {
        icon: PlayCircle,
        title: "Add your first AI assistant",
        description: "Get a specialist agent working for you in 2 minutes",
        href: "/docs/guides/first-agent"
      }
    ), /* @__PURE__ */ React.createElement(
      QuickLink,
      {
        icon: Workflow,
        title: "Create your first automation",
        description: "Set up automatic follow-ups for new leads",
        href: "/docs/guides/workflows"
      }
    ), /* @__PURE__ */ React.createElement(
      QuickLink,
      {
        icon: HelpCircle,
        title: "How Ozzios works",
        description: "A simple overview of the platform",
        href: "/docs/architecture"
      }
    )))
  );
}
function ExploreCard({
  icon: IconComponent,
  title,
  description,
  href
}) {
  return /* @__PURE__ */ React.createElement(
    Link,
    {
      to: href,
      className: cn(
        "group flex items-center gap-3 rounded-lg border border-border/50 bg-card p-3",
        "transition-all hover:border-border hover:bg-muted/30"
      )
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex h-9 w-9 items-center justify-center rounded-md bg-muted/50" }, /* @__PURE__ */ React.createElement(IconComponent, { className: "h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" })),
    /* @__PURE__ */ React.createElement("div", { className: "min-w-0" }, /* @__PURE__ */ React.createElement("p", { className: "text-[13px] font-medium text-foreground" }, title), /* @__PURE__ */ React.createElement("p", { className: "text-[11px] text-muted-foreground" }, description))
  );
}
function QuickLink({
  icon: IconComponent,
  title,
  description,
  href
}) {
  return /* @__PURE__ */ React.createElement(
    Link,
    {
      to: href,
      className: cn(
        "group flex items-center gap-3 rounded-lg border border-border/50 bg-card/50 p-4",
        "transition-all hover:border-border hover:bg-card"
      )
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0" }, /* @__PURE__ */ React.createElement(IconComponent, { className: "h-5 w-5 text-primary" })),
    /* @__PURE__ */ React.createElement("div", { className: "min-w-0 flex-1" }, /* @__PURE__ */ React.createElement("p", { className: "text-[14px] font-medium text-foreground group-hover:text-primary transition-colors" }, title), /* @__PURE__ */ React.createElement("p", { className: "text-[12px] text-muted-foreground" }, description)),
    /* @__PURE__ */ React.createElement(ArrowRight, { className: "h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 shrink-0" })
  );
}
function HomePage() {
  return /* @__PURE__ */ React.createElement(DocsLayout, null, /* @__PURE__ */ React.createElement(DocsHomeView, null));
}
export {
  HomePage as component
};
