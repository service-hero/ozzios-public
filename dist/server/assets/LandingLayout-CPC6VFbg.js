import { r as reactExports, j as jsxRuntimeExports, A as AnimatePresence, m as motion } from "./vendor-framer-DZFBeC81.js";
import { D as useRouterState, L as Link } from "./vendor-router-DD_41qJ4.js";
import { c as cn, B as Button } from "./button-DuL_ysbl.js";
import { a0 as Bot, aK as Workflow, U as Users, aL as LayoutDashboard, h as MessageSquare, M as Mail, az as Smartphone, ac as Phone, aM as MessageSquareText, aN as Palette, W as Share2, a5 as ClipboardList, aO as SquareCheckBig, aP as Code, n as Brain, aB as BookOpen, t as FileText, e as ChevronDown, X, r as Menu, A as ArrowRight } from "./vendor-icons-RMyvaHp0.js";
const navItems = [
  {
    label: "Product",
    megaMenu: {
      sections: [
        {
          title: "Core platform",
          items: [
            { icon: Bot, label: "AI Agents", description: "Specialized operators that work around the clock", href: "/features/ai-agents", badge: "Core" },
            { icon: Workflow, label: "Workflows", description: "Triggers, conditions, and durable execution", href: "/features/workflows" },
            { icon: Users, label: "CRM & Contacts", description: "Segmentation, scoring, and activity history", href: "/features/crm" },
            { icon: LayoutDashboard, label: "Dashboard", description: "Configurable reporting surfaces for every team", href: "/features/dashboard" }
          ]
        },
        {
          title: "Communication",
          items: [
            { icon: MessageSquare, label: "Channels", description: "Private, public, and cross-team conversations", href: "/features/channels" },
            { icon: Mail, label: "Email Campaigns", description: "Batch sending with control and attribution", href: "/features/email-campaigns" },
            { icon: Smartphone, label: "SMS Campaigns", description: "Rate-aware messaging flows through Twilio", href: "/features/sms-campaigns" },
            { icon: Phone, label: "Voice Agents", description: "AI reception and outbound call orchestration", href: "/features/voice-agents", badge: "New" },
            { icon: MessageSquareText, label: "Chat Widget", description: "Site chat tied to CRM and knowledge", href: "/features/chat-widget", badge: "New" }
          ]
        },
        {
          title: "Marketing & content",
          items: [
            { icon: Palette, label: "Email Builder", description: "Drag-and-drop editing with brand-safe blocks", href: "/features/email-builder" },
            { icon: Share2, label: "Social Media", description: "Scheduling, approvals, and multi-channel posting", href: "/features/social-media" },
            { icon: ClipboardList, label: "Forms", description: "Lead capture with native automation triggers", href: "/features/forms" }
          ]
        },
        {
          title: "Operations",
          items: [
            { icon: SquareCheckBig, label: "Task Management", description: "Boards, owners, and execution visibility", href: "/features/tasks" },
            { icon: Code, label: "Coding", description: "Generated reports, apps, and shareable deliverables", href: "/features/coding" },
            { icon: Brain, label: "Knowledge Base", description: "Indexed documents and retrieval-backed answers", href: "/features/knowledge-base" }
          ]
        }
      ]
    }
  },
  {
    label: "Solutions",
    megaMenu: {
      sections: [
        {
          title: "By business size",
          items: [
            { label: "Solo Operators", description: "Scale output without adding headcount", href: "/solutions/solo-operators" },
            { label: "Teams", description: "Coordinate humans and agents in one system", href: "/solutions/teams" },
            { label: "Multi-Location", description: "Standardize performance across branches", href: "/solutions/enterprise" }
          ]
        },
        {
          title: "By use case",
          items: [
            { label: "Lead Generation", description: "Acquisition programs that stay measurable", href: "/solutions/lead-generation" },
            { label: "Content Marketing", description: "Planning, production, and publishing in one flow", href: "/solutions/content-marketing" },
            { label: "Customer Management", description: "Lifecycle automation across every touchpoint", href: "/solutions/customer-management" }
          ]
        }
      ],
      cta: {
        title: "See how service businesses deploy OzziOS",
        description: "Use cases that tie marketing, follow-up, and execution into a single operating layer.",
        href: "/pricing"
      }
    }
  },
  {
    label: "Resources",
    megaMenu: {
      sections: [
        {
          title: "Learn",
          items: [
            { icon: BookOpen, label: "Documentation", description: "Implementation guides and API references", href: "https://app.ozzios.com/docs" },
            { icon: FileText, label: "Changelog", description: "Recent product releases and updates", href: "/changelog" }
          ]
        }
      ]
    }
  },
  { label: "Pricing", href: "/pricing" }
];
function NavDestination({
  href,
  className,
  children,
  onClick
}) {
  if (href.startsWith("/")) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: href, className, onClick, children });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href,
      className,
      target: "_blank",
      rel: "noopener noreferrer",
      onClick,
      children
    }
  );
}
function Navigation() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname
  });
  const [hasScrolled, setHasScrolled] = reactExports.useState(false);
  const [activeMenu, setActiveMenu] = reactExports.useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = reactExports.useState(false);
  const closeTimeoutRef = reactExports.useRef(null);
  const activeNavItem = activeMenu ? navItems.find((item) => item.label === activeMenu) : null;
  const openMenu = reactExports.useCallback((label) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setActiveMenu(label);
  }, []);
  const closeMenu = reactExports.useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 120);
  }, []);
  reactExports.useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);
  reactExports.useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
  }, [pathname]);
  const headerChrome = hasScrolled ? "border-border/80 bg-[rgba(252,248,244,0.86)] shadow-[0_18px_70px_rgba(67,46,33,0.08)]" : "border-white/70 bg-[rgba(255,252,249,0.72)] shadow-[0_10px_40px_rgba(67,46,33,0.04)]";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: cn(
          "mx-auto max-w-[1460px] rounded-[1.35rem] border backdrop-blur-xl transition-all duration-300 sm:rounded-[1.75rem]",
          headerChrome
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex h-[68px] items-center justify-between gap-3 px-4 sm:h-[76px] sm:px-6 lg:px-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 items-center gap-3 sm:gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "min-w-0 shrink-0 transition-opacity hover:opacity-75", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: "/images/ozzios-logo.svg",
                  alt: "OzziOS",
                  className: "h-5 w-auto brightness-0 sm:h-6"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden items-center rounded-full border border-border/70 bg-background/70 p-1 lg:flex", children: navItems.map((item) => {
                const isActive = pathname === item.href;
                if (item.megaMenu) {
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "relative",
                      onMouseEnter: () => openMenu(item.label),
                      onMouseLeave: closeMenu,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          className: cn(
                            "inline-flex h-11 items-center gap-1.5 rounded-full px-4 text-sm font-medium transition-all duration-300",
                            activeMenu === item.label || isActive ? "bg-foreground text-background" : "text-foreground/68 hover:text-foreground"
                          ),
                          children: [
                            item.label,
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              ChevronDown,
                              {
                                className: cn(
                                  "h-3.5 w-3.5 transition-transform duration-300",
                                  activeMenu === item.label && "rotate-180"
                                )
                              }
                            )
                          ]
                        }
                      )
                    },
                    item.label
                  );
                }
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  NavDestination,
                  {
                    href: item.href ?? "/",
                    className: cn(
                      "inline-flex h-11 items-center rounded-full px-4 text-sm font-medium transition-all duration-300",
                      isActive ? "bg-foreground text-background" : "text-foreground/68 hover:text-foreground"
                    ),
                    children: item.label
                  },
                  item.label
                );
              }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 lg:hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "https://app.ozzios.com/sign-up",
                  className: "inline-flex h-10 items-center justify-center rounded-full bg-foreground px-4 text-sm font-medium text-background shadow-[0_12px_28px_rgba(34,27,22,0.14)] transition-colors hover:bg-foreground/92",
                  children: "Start"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setIsMobileMenuOpen((open) => !open),
                  className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/80 text-foreground transition-colors hover:bg-background",
                  "aria-label": isMobileMenuOpen ? "Close menu" : "Open menu",
                  children: isMobileMenuOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4.5 w-4.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-4.5 w-4.5" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden items-center gap-3 lg:flex", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "https://app.ozzios.com/sign-in",
                  className: "text-sm font-medium text-foreground/68 transition-colors hover:text-foreground",
                  children: "Sign in"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  asChild: true,
                  className: "h-11 rounded-full border-0 bg-foreground px-5 text-sm font-medium text-background shadow-[0_16px_40px_rgba(34,27,22,0.18)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-foreground/92",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://app.ozzios.com/sign-up", children: [
                    "Start with OzziOS",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1.5 h-4 w-4" })
                  ] })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: activeNavItem?.megaMenu ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: -10 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -10 },
              transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
              className: "hidden px-5 pb-5 lg:block",
              onMouseEnter: () => openMenu(activeNavItem.label),
              onMouseLeave: closeMenu,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-[1.75rem] border border-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(247,241,235,0.96))] shadow-[0_24px_80px_rgba(67,46,33,0.12)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 px-8 py-8 lg:grid-cols-[minmax(0,1fr)_320px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: cn(
                      "grid gap-6",
                      activeNavItem.megaMenu.sections.length >= 4 ? "md:grid-cols-2 xl:grid-cols-4" : activeNavItem.megaMenu.sections.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
                    ),
                    children: activeNavItem.megaMenu.sections.map((section) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      section.title ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-[0.68rem] font-semibold tracking-[0.22em] text-foreground/45", children: section.title }) : null,
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: section.items.map((item) => {
                        const Icon = item.icon;
                        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          NavDestination,
                          {
                            href: item.href,
                            onClick: () => setActiveMenu(null),
                            className: "group flex min-h-[92px] gap-4 rounded-[1.4rem] border border-transparent bg-white/55 px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-border/80 hover:bg-white",
                            children: [
                              Icon ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-foreground/[0.045] text-foreground/70 transition-colors duration-300 group-hover:bg-foreground group-hover:text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4.5 w-4.5" }) }) : null,
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: item.label }),
                                  item.badge ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-foreground px-2 py-0.5 text-[0.6rem] font-semibold tracking-[0.18em] text-background", children: item.badge }) : null
                                ] }),
                                item.description ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm leading-6 text-muted-foreground", children: item.description }) : null
                              ] })
                            ]
                          },
                          item.label
                        );
                      }) })
                    ] }, section.title ?? "links"))
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[1.75rem] border border-border/70 bg-[radial-gradient(circle_at_top,rgba(196,88,63,0.18),transparent_34%),linear-gradient(180deg,rgba(36,28,22,0.98),rgba(74,52,39,0.94))] p-7 text-white", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-[12ch] font-display text-[2rem] leading-[0.95] tracking-[-0.04em]", children: activeNavItem.megaMenu.cta?.title ?? "A cleaner operating layer for service teams." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-6 text-white/72", children: activeNavItem.megaMenu.cta?.description ?? "Explore the product surface and see how each part connects back to revenue, response time, and execution quality." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: activeNavItem.megaMenu.cta?.href ?? "https://app.ozzios.com/sign-up",
                      className: "mt-8 inline-flex items-center gap-2 text-sm font-medium text-white transition-opacity hover:opacity-80",
                      children: [
                        "Explore further",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                      ]
                    }
                  )
                ] })
              ] }) })
            }
          ) : null })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isMobileMenuOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-[60] bg-[rgba(27,21,17,0.44)] backdrop-blur-sm lg:hidden",
        onClick: () => setIsMobileMenuOpen(false),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { x: "100%" },
            animate: { x: 0 },
            exit: { x: "100%" },
            transition: { duration: 0.24, ease: [0.16, 1, 0.3, 1] },
            className: "ml-auto flex h-full w-full max-w-md flex-col border-l border-border/70 bg-[linear-gradient(180deg,rgba(255,252,249,0.98),rgba(247,240,234,1))] px-4 pb-6 pt-5 shadow-[0_20px_80px_rgba(43,31,22,0.18)] sm:px-5",
            onClick: (event) => event.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/",
                    className: "inline-flex items-center rounded-full border border-border/70 bg-white/80 px-4 py-2.5",
                    onClick: () => setIsMobileMenuOpen(false),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: "/images/ozzios-logo.svg",
                        alt: "OzziOS",
                        className: "h-5 w-auto brightness-0"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setIsMobileMenuOpen(false),
                    className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-white/80 text-foreground",
                    "aria-label": "Close menu",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4.5 w-4.5" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 overflow-y-auto pr-1", children: navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                MobileMenuSection,
                {
                  item,
                  pathname,
                  onClose: () => setIsMobileMenuOpen(false)
                },
                item.label
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-3 border-t border-border/60 pt-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "https://app.ozzios.com/sign-in",
                    className: "flex h-12 items-center justify-center rounded-full border border-border/70 bg-background/80 text-sm font-medium text-foreground",
                    onClick: () => setIsMobileMenuOpen(false),
                    children: "Sign in"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "lg",
                    asChild: true,
                    className: "h-12 w-full rounded-full border-0 bg-foreground text-sm font-medium text-background",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://app.ozzios.com/sign-up", onClick: () => setIsMobileMenuOpen(false), children: [
                      "Start with OzziOS",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "/pricing",
                    className: "flex h-11 items-center justify-center rounded-full text-sm font-medium text-foreground/72 transition-colors hover:text-foreground",
                    onClick: () => setIsMobileMenuOpen(false),
                    children: "View pricing"
                  }
                )
              ] })
            ]
          }
        )
      }
    ) : null })
  ] });
}
function MobileMenuSection({
  item,
  pathname,
  onClose
}) {
  const [isOpen, setIsOpen] = reactExports.useState(item.label === "Product");
  if (!item.megaMenu) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      NavDestination,
      {
        href: item.href ?? "/",
        onClick: onClose,
        className: cn(
          "flex min-h-[56px] items-center rounded-[1.4rem] border px-4 text-base font-medium transition-colors",
          pathname === item.href ? "border-foreground bg-foreground text-background" : "border-border/70 bg-white/70 text-foreground"
        ),
        children: item.label
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[1.5rem] border border-border/70 bg-white/70 px-4 py-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setIsOpen((open) => !open),
        className: "flex min-h-[52px] w-full items-center justify-between text-left",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-medium text-foreground", children: item.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: cn("h-4 w-4 text-foreground/45 transition-transform duration-300", isOpen && "rotate-180") })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        transition: { duration: 0.2 },
        className: "overflow-hidden",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5 pb-3 pt-2", children: item.megaMenu.sections.map((section) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          section.title ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-[0.68rem] font-semibold tracking-[0.2em] text-foreground/45", children: section.title }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: section.items.map((subItem) => {
            const Icon = subItem.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              NavDestination,
              {
                href: subItem.href,
                onClick: onClose,
                className: "flex items-start gap-3 rounded-[1.2rem] border border-transparent px-3 py-3 transition-colors hover:border-border/60 hover:bg-background/80",
                children: [
                  Icon ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "mt-0.5 h-4 w-4 shrink-0 text-foreground/55" }) : null,
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: subItem.label }),
                    subItem.description ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm leading-5 text-muted-foreground", children: subItem.description }) : null
                  ] })
                ]
              },
              subItem.label
            );
          }) })
        ] }, section.title ?? "mobile-links")) })
      }
    ) : null })
  ] });
}
const footerLinks = {
  product: {
    title: "Product",
    links: [
      { label: "AI Agents", href: "/features/ai-agents" },
      { label: "Workflows", href: "/features/workflows" },
      { label: "CRM & Contacts", href: "/features/crm" },
      { label: "Channels", href: "/features/channels" },
      { label: "Email Builder", href: "/features/email-builder" },
      { label: "Voice Agents", href: "/features/voice-agents" },
      { label: "Task Management", href: "/features/tasks" },
      { label: "Integrations", href: "/integrations" },
      { label: "Pricing", href: "/pricing" }
    ]
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Documentation", href: "https://app.ozzios.com/docs" },
      { label: "Changelog", href: "/changelog" },
      { label: "API Reference", href: "https://app.ozzios.com/docs/api" }
    ]
  },
  company: {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" }
    ]
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy-policy" },
      { label: "Terms", href: "/tos" },
      { label: "Security", href: "/security" }
    ]
  }
};
const socialLinks = [
  {
    label: "Twitter",
    href: "https://twitter.com/ozzios",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-4 w-4", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }) })
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/ozzios",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-4 w-4", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }) })
  },
  {
    label: "GitHub",
    href: "https://github.com/ozzios",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-4 w-4", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" }) })
  }
];
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative mt-24 border-t border-border/60 bg-[linear-gradient(180deg,rgba(255,252,249,0.7),rgba(245,239,232,0.98))] pb-6 pt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1440px] px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[2rem] border border-white/70 bg-white/80 px-6 py-10 shadow-[0_30px_120px_rgba(69,48,33,0.08)] backdrop-blur-xl sm:px-8 lg:px-12 lg:py-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-[1.35fr_repeat(4,minmax(0,1fr))]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-sm lg:pr-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-flex items-center transition-opacity hover:opacity-75", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/images/ozzios-logo.svg",
            alt: "OzziOS",
            className: "h-7 w-auto brightness-0"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm leading-7 text-muted-foreground", children: "Operations, marketing, and follow-up systems designed for home service teams that need more output without another layer of overhead." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap gap-3", children: socialLinks.map((social) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: social.href,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border/70 bg-background/90 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:text-foreground",
            "aria-label": social.label,
            children: social.icon
          },
          social.label
        )) })
      ] }),
      Object.entries(footerLinks).map(([key, section]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[0.72rem] font-semibold tracking-[0.24em] text-foreground/70", children: section.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3", children: section.links.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: link.href.startsWith("/") ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: link.href,
            className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
            children: link.label
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: link.href,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
            children: link.label
          }
        ) }, link.label)) })
      ] }, key))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-col gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " OzziOS. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-3 rounded-full border border-border/70 bg-background/80 px-4 py-2 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2.5 w-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Platform status: operational" })
      ] })
    ] })
  ] }) }) });
}
const AudienceContext = reactExports.createContext(null);
function AudienceProvider({ children, defaultAudience = "business" }) {
  const [audience, setAudience] = reactExports.useState(defaultAudience);
  const value = {
    audience,
    setAudience,
    isBusinessOwner: audience === "business"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AudienceContext.Provider, { value, children });
}
function useAudience() {
  const context = reactExports.useContext(AudienceContext);
  if (!context) {
    throw new Error("useAudience must be used within an AudienceProvider");
  }
  return context;
}
const audienceContent = {
  business: {
    hero: {
      headline: ["The first AI agent platform", "built for the trades."],
      subheadline: "Manus-level AI agents that actually know your business. HVAC, plumbing, roofing, electrical--purpose-built, not generic.",
      subtext: "The agent revolution is here. OzziOS brings it to home services first.",
      stats: [
        { value: "30+", label: "AI Agents" },
        { value: "24/7", label: "Coverage" },
        { value: "$0", label: "Overhead" },
        { value: "100%", label: "Transparency" }
      ]
    },
    bento: {
      sectionLabel: "Your AI Agent Team",
      headline: ["General-purpose AI fails 75% of the time.", "Ours is built for your trade."],
      subheadline: "Generic agents don't know a service call from a sales call. Ozzi agents are trained on home services from day one.",
      cards: {
        aiWorkforce: {
          badge: "Purpose-Built",
          title: "Agents that know your trade",
          description: "Not a generic chatbot with a logo slapped on it. AI agents trained on home service workflows, terminology, and customers."
        },
        tools: {
          title: "All your tools in one place",
          description: "Everything you need--SEO, content, social, ads--now yours to see and control."
        },
        communication: {
          title: "Community & Channels",
          description: "Host communities, forums, and private channels. Engage your customers directly in one place."
        },
        workflows: {
          title: "Marketing on autopilot",
          description: "Set it and forget it. Campaigns run while you sleep. Reports arrive automatically."
        },
        crm: {
          title: "Deal Flow & CRM",
          description: "Manage your pipeline and customer data. All contacts and deals in one unified view."
        },
        marketing: {
          title: "Every channel covered",
          description: "Email, social, ads, SEO--all in one place. No more juggling vendors."
        },
        multiTenant: {
          title: "One dashboard, total control",
          description: "See everything your marketing is doing in one place. Finally."
        },
        security: {
          title: "Your data stays yours",
          description: "Your data is always yours. Always."
        }
      }
    },
    stats: {
      sectionLabel: "The bottom line",
      headline: ["Real savings", "you can measure"],
      stats: [
        { value: 85, suffix: "%", label: "Less Spent", description: "vs. traditional marketing overhead" },
        { value: 24, suffix: "/7", label: "Availability", description: "No business hours" },
        { value: 100, suffix: "%", label: "Transparency", description: "See all the work" },
        { value: 0, suffix: "", label: "Surprises", description: "No hidden fees" }
      ],
      socialProof: "Join 500+ home service companies using AI agents"
    },
    calculator: {
      defaultTab: "overhead",
      tabs: [
        { id: "overhead", label: "Marketing Overhead", description: "See what you're really paying for marketing that doesn't deliver" },
        { id: "tools", label: "Tool Costs", description: "Cancel subscriptions and consolidate" }
      ]
    },
    agents: {
      sectionLabel: "Your AI Agent Team",
      headline: ["The AI agents everyone's talking about.", "Now built for home services."],
      subheadline: "Platforms like Manus proved agents could run entire workflows. Ozzi brings that power to the trades--with agents that know your industry inside and out."
    },
    memory: {
      sectionLabel: "Institutional Memory",
      headline: ["Generic AI forgets you exist.", "Ozzi never does."],
      subheadline: "General-purpose agents start from zero every time. Your Ozzi team remembers your brand, your services, your customers--and gets sharper with every interaction.",
      features: [
        {
          title: "Total Brand Recall",
          description: "Your AI team knows your brand voice, services, competitors, and preferences. Every detail, instantly accessible.",
          bullets: ["Brand guidelines always applied", "Service details at their fingertips", "Competitor awareness built-in"]
        },
        {
          title: "Learns From Mistakes",
          description: "When something goes wrong, they learn. Error patterns are captured automatically so the same mistake never happens twice.",
          bullets: ["Automatic error detection", "Pattern recognition", "Continuous improvement"]
        },
        {
          title: "Gets Smarter Over Time",
          description: "Every interaction teaches them. Feedback you give today improves their work tomorrow--and forever after.",
          bullets: ["Feedback becomes learning", "Preferences remembered", "Quality improves weekly"]
        },
        {
          title: "Knowledge Never Leaves",
          description: "Unlike employees who take knowledge when they quit, everything your AI learns stays in your business forever.",
          bullets: ["Institutional memory preserved", "No knowledge loss", "Always available"]
        }
      ],
      comparisonTitle: "The problem with traditional marketing",
      comparisonDescription: "Every time a marketing person leaves, they take years of knowledge with them. Your AI team's memory is permanent--and it only gets better.",
      comparisonStats: [
        { value: "0%", label: "Knowledge Loss" },
        { value: "∞", label: "Memory Retention" }
      ]
    },
    faq: [
      {
        question: "How is this different from Manus or ChatGPT?",
        answer: "Manus and ChatGPT are general-purpose--they can do a little of everything but aren't built for anything specific. OzziOS is a vertical AI agent platform purpose-built for home services. Our agents understand service calls, seasonal demand, local SEO, and trade-specific marketing out of the box. General AI fails 75% of the time in business. Specialists win."
      },
      {
        question: "Is this really cheaper than hiring a marketing team?",
        answer: "Significantly. Traditional marketing costs $3-15K/month in overhead for work you can't always see. With OzziOS, you get a full AI agent team--SEO, content, social, ads--for a fraction of that. And you see exactly what they do."
      },
      {
        question: "Can AI really handle marketing for a home service company?",
        answer: "For the repetitive, process-driven work? Yes--and often better. Content drafts, social scheduling, Google Business Profile management, performance reports, and follow-up workflows. Your AI agents handle these 24/7 without the back-and-forth."
      },
      {
        question: "Will I finally understand what's happening with my marketing?",
        answer: "That's the whole point. Every action, every piece of content, every decision is logged and visible. No more mystery reports. No more wondering what you're paying for."
      },
      {
        question: "What if I need human help?",
        answer: "Your AI agents handle the heavy lifting, but you're always in control. Set up approval workflows for important decisions. Our support team is here when you need guidance."
      },
      {
        question: "Can I try it before committing?",
        answer: "Early access is $795/month -- no annual lock-in, cancel anytime. You get the full platform from day one. If you don't see the value, just walk away."
      }
    ],
    cta: {
      badge: "Early Access",
      headline: ["The trades deserve better than generic AI.", "Meet your Ozzi team."],
      subtext: "The first AI agent platform built for home services. No long-term contracts. Your agents start working today.",
      primaryButton: "Get Early Access",
      secondaryButton: "See how it works"
    },
    howItWorks: {
      sectionLabel: "How it works",
      headline: ["From sign-up to running", "in under 5 minutes."],
      subheadline: "No consultants. No onboarding calls. Tell Ozzi your trade, and your AI agent team gets to work.",
      steps: [
        {
          number: "01",
          title: "Tell Ozzi your trade",
          description: "HVAC, plumbing, roofing, electrical--Ozzi knows the industry. Your agents configure themselves around your services, service area, and customers.",
          benefits: ["5-minute setup", "Trade-specific from day one"]
        },
        {
          number: "02",
          title: "Your agents get to work",
          description: "30+ AI agents handle SEO, content, social, ads, and Google Business Profile--trained on home service marketing, not generic templates.",
          benefits: ["Social & email campaigns", "Dashboards & reports"]
        },
        {
          number: "03",
          title: "Everything runs while you're on the job",
          description: "Automated workflows trigger email campaigns, SMS follow-ups, and social posts. Voice agents answer calls. You're on a roof, not behind a desk.",
          benefits: ["Workflows & voice agents", "Real-time dashboards"]
        },
        {
          number: "04",
          title: "Scale without hiring",
          description: "CRM, task management, knowledge base, call center--all built in. Grow from 1 truck to 10 without adding marketing headcount.",
          benefits: ["CRM & task management", "Knowledge base included"]
        }
      ]
    },
    testimonials: {
      sectionLabel: "From the Field",
      headline: ["Don't take our word for it.", "Ask the contractors."],
      subheadline: "Real home service business owners running AI agents on their marketing. Here's what happened.",
      items: [
        {
          name: "Anthony Cass",
          role: "Owner",
          company: "Roof Experts",
          content: "Ozzi is insane. You just tell it what you want to do and it builds a custom workflow--pulling in the right agents automatically. In the first 20 minutes it found and fixed a sitemap issue on my website I didn't even know existed. Two days later, I'm already seeing more traffic.",
          image: "/images/anthony-profile.webp"
        },
        {
          name: "Gregory Underwood",
          role: "Owner",
          company: "Extreme Carpet",
          content: "In my first day using it, Ozzi set up a full 12-week posting schedule for my Google Business Profile and built out a complete service page for my website that looked really professional. Only needed a quick manual fix for some meta tags because of Yoast SEO--minor thing. Impressive for less than 24 hours in.",
          image: "/images/greg-profile-image.webp"
        }
      ],
      trustStats: [
        { value: "4.9/5", label: "Average rating" },
        { value: "500+", label: "Home service companies" },
        { value: "98%", label: "Would recommend" }
      ]
    }
  }
};
function LandingLayout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AudienceProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: "#main-content",
        className: "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-background",
        children: "Skip to content"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(196,88,63,0.16),transparent_32%),radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.9),transparent_30%),linear-gradient(180deg,rgba(255,247,242,0.98),rgba(248,243,236,0.92)_58%,rgba(244,239,233,1))]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none fixed inset-0 z-0 noise-texture opacity-[0.035]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none fixed inset-x-0 top-0 z-0 h-[28rem] bg-[radial-gradient(circle_at_top,rgba(122,85,53,0.12),transparent_70%)] blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex min-h-screen flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { id: "main-content", className: "flex-1 overflow-x-hidden", children }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] })
  ] }) });
}
export {
  LandingLayout as L,
  audienceContent as a,
  useAudience as u
};
