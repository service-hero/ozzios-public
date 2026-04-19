import { r as reactExports, j as jsxRuntimeExports, m as motion, A as AnimatePresence } from "./vendor-framer-DZFBeC81.js";
import { D as useRouterState, L as Link } from "./vendor-router-DD_41qJ4.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { a7 as Bot, aI as Workflow, U as Users, aJ as LayoutDashboard, h as MessageSquare, M as Mail, y as Smartphone, z as Phone, aK as MessageSquareText, aL as Palette, a3 as Share2, J as ClipboardList, aM as SquareCheckBig, aN as Code, n as Brain, aA as BookOpen, v as FileText, j as Sparkles, p as ArrowUpRight, e as ChevronDown, X, t as Menu, aO as CornerDownLeft, A as ArrowRight, L as Lock, aP as MapPin, G as Globe } from "./vendor-icons-BFmuwI-v.js";
const navItems = [
  {
    label: "Product",
    megaMenu: {
      width: "wide",
      sections: [
        {
          title: "Core platform",
          items: [
            { icon: Bot, label: "AI Agents", description: "Specialized operators that work around the clock", href: "/features/ai-agents", badge: "Core" },
            { icon: Workflow, label: "Workflows", description: "Triggers, conditions, and durable execution", href: "/features/workflows" },
            { icon: Users, label: "CRM & Contacts", description: "Segmentation, scoring, and activity history", href: "/features/crm" },
            { icon: LayoutDashboard, label: "Dashboard", description: "Configurable reporting for every team", href: "/features/dashboard" }
          ]
        },
        {
          title: "Communication",
          items: [
            { icon: MessageSquare, label: "Channels", description: "Private, public, and cross-team threads", href: "/features/channels" },
            { icon: Mail, label: "Email Campaigns", description: "Batch sending with control and attribution", href: "/features/email-campaigns" },
            { icon: Smartphone, label: "SMS Campaigns", description: "Rate-aware flows through Twilio", href: "/features/sms-campaigns" },
            { icon: Phone, label: "Voice Agents", description: "AI reception and outbound orchestration", href: "/features/voice-agents", badge: "New" },
            { icon: MessageSquareText, label: "Chat Widget", description: "Site chat tied to CRM and knowledge", href: "/features/chat-widget", badge: "New" }
          ]
        },
        {
          title: "Marketing & content",
          items: [
            { icon: Palette, label: "Email Builder", description: "Drag-and-drop with brand-safe blocks", href: "/features/email-builder" },
            { icon: Share2, label: "Social Media", description: "Scheduling, approvals, multi-channel", href: "/features/social-media" },
            { icon: ClipboardList, label: "Forms", description: "Lead capture with native triggers", href: "/features/forms" }
          ]
        },
        {
          title: "Operations",
          items: [
            { icon: SquareCheckBig, label: "Task Management", description: "Boards, owners, execution visibility", href: "/features/tasks" },
            { icon: Code, label: "Coding", description: "Generated reports, apps, deliverables", href: "/features/coding" },
            { icon: Brain, label: "Knowledge Base", description: "Indexed documents, retrieval-backed answers", href: "/features/knowledge-base" }
          ]
        }
      ],
      featured: {
        eyebrow: "Newest",
        title: "Voice Agents",
        description: "AI reception that books, qualifies, and follows up — without an office line.",
        href: "/features/voice-agents",
        cta: "See how it works"
      }
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
            { label: "Content Marketing", description: "Plan, produce, and publish in one flow", href: "/solutions/content-marketing" },
            { label: "Customer Management", description: "Lifecycle automation across every touchpoint", href: "/solutions/customer-management" }
          ]
        }
      ],
      featured: {
        eyebrow: "Field guide",
        title: "Service businesses, deployed",
        description: "How real operators tie marketing, follow-up, and execution into one operating layer.",
        href: "/pricing",
        cta: "Read the guide"
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
            { icon: BookOpen, label: "Documentation", description: "Implementation guides and API references", href: "https://app.ozzios.com/docs", external: true },
            { icon: FileText, label: "Changelog", description: "Recent product releases and updates", href: "/changelog" },
            { icon: Sparkles, label: "About", description: "Why we built OzziOS and where it goes next", href: "/about" }
          ]
        }
      ]
    }
  },
  { label: "Pricing", href: "/pricing" }
];
function Kbd({ children, tone = "light", className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "kbd",
    {
      className: cn(
        "inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-[5px] border px-1 font-sans text-[10px] font-medium leading-none tabular-nums",
        tone === "light" ? "border-border/70 bg-white/80 text-foreground/55 shadow-[0_1px_0_rgba(0,0,0,0.04)]" : "border-white/15 bg-white/10 text-white/80 shadow-[inset_0_-1px_0_rgba(0,0,0,0.18)]",
        className
      ),
      children
    }
  );
}
function NavDestination({
  href,
  external,
  className,
  children,
  onClick,
  ariaCurrent,
  onMouseEnter,
  onFocus
}) {
  if (href.startsWith("/") && !external) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: href,
        className,
        onClick,
        onMouseEnter,
        onFocus,
        "aria-current": ariaCurrent,
        children
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href,
      className,
      target: external || !href.startsWith("/") ? "_blank" : void 0,
      rel: external || !href.startsWith("/") ? "noopener noreferrer" : void 0,
      onClick,
      onMouseEnter,
      onFocus,
      children
    }
  );
}
function Navigation() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [hasScrolled, setHasScrolled] = reactExports.useState(false);
  const [activeMenu, setActiveMenu] = reactExports.useState(null);
  const [hoveredKey, setHoveredKey] = reactExports.useState(null);
  const [isMobileOpen, setIsMobileOpen] = reactExports.useState(false);
  const closeTimeoutRef = reactExports.useRef(null);
  const railId = reactExports.useId();
  const activeNavItem = activeMenu ? navItems.find((i) => i.label === activeMenu) : null;
  const openMenu = reactExports.useCallback((label) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setActiveMenu(label);
  }, []);
  const closeMenu = reactExports.useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => setActiveMenu(null), 120);
  }, []);
  reactExports.useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);
  reactExports.useEffect(() => {
    setIsMobileOpen(false);
    setActiveMenu(null);
    setHoveredKey(null);
  }, [pathname]);
  reactExports.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setActiveMenu(null);
        setIsMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "header",
      {
        className: cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300",
          "border-b backdrop-blur-xl supports-[backdrop-filter]:bg-background/72",
          hasScrolled ? "border-border/70 bg-background/86 shadow-[0_1px_0_rgba(67,46,33,0.04),0_8px_24px_-12px_rgba(67,46,33,0.10)]" : "border-border/40 bg-background/60"
        ),
        onMouseLeave: () => {
          setHoveredKey(null);
          closeMenu();
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden border-b border-border/40 bg-background/40 xl:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-7 max-w-[1480px] items-center justify-between px-4 sm:px-6 lg:px-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-[11px] text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-50" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-mint" })
                ] }),
                "All systems operational"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-px bg-border/60" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/changelog",
                  className: "group inline-flex items-center gap-1.5 transition-colors hover:text-foreground",
                  children: [
                    "Voice Agents shipped",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/30", children: "·" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] tracking-tight text-foreground/40", children: "v2.4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3 text-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-[11px] text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "mailto:hello@ozzios.com",
                  className: "transition-colors hover:text-foreground",
                  children: "hello@ozzios.com"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-px bg-border/60" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "transition-colors hover:text-foreground", children: "Talk to sales" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "nav",
            {
              className: "relative mx-auto flex h-[60px] max-w-[1480px] items-center justify-between gap-6 px-4 sm:h-[64px] sm:px-6 lg:px-10",
              "aria-label": "Main",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 items-center gap-7", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/",
                      className: "group inline-flex shrink-0 items-center gap-2 transition-opacity hover:opacity-80",
                      "aria-label": "OzziOS home",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "img",
                          {
                            src: "/images/ozzios-logo.svg",
                            alt: "",
                            className: "h-[18px] w-auto brightness-0 sm:h-5"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden h-4 w-px bg-border/70 sm:inline-block" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40 sm:inline", children: "Operating System" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "relative hidden items-center lg:flex",
                      onMouseLeave: () => setHoveredKey(null),
                      children: navItems.map((item) => {
                        const key = item.label;
                        const isActive = item.href ? pathname === item.href : activeMenu === key;
                        const isHot = hoveredKey === key || activeMenu === key;
                        const isLink = !item.megaMenu && item.href;
                        const sharedClasses = cn(
                          "relative z-10 inline-flex h-9 items-center gap-1.5 rounded-md px-3 text-[13px] font-medium transition-colors duration-200",
                          isActive ? "text-foreground" : isHot ? "text-foreground" : "text-foreground/60 hover:text-foreground"
                        );
                        const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          item.label,
                          item.megaMenu ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                            ChevronDown,
                            {
                              className: cn(
                                "h-3 w-3 text-foreground/40 transition-transform duration-200",
                                activeMenu === key && "rotate-180 text-foreground/70"
                              ),
                              "aria-hidden": true
                            }
                          ) : null
                        ] });
                        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: "relative",
                            onMouseEnter: () => {
                              setHoveredKey(key);
                              if (item.megaMenu) openMenu(key);
                            },
                            onMouseLeave: () => {
                              if (item.megaMenu) closeMenu();
                            },
                            children: [
                              isHot ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                                motion.span,
                                {
                                  layoutId: `nav-rail-${railId}`,
                                  className: "absolute inset-x-1 inset-y-1 rounded-md bg-foreground/[0.055]",
                                  transition: { type: "spring", stiffness: 460, damping: 36 },
                                  "aria-hidden": true
                                }
                              ) : null,
                              isLink ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                                NavDestination,
                                {
                                  href: item.href,
                                  className: sharedClasses,
                                  onFocus: () => setHoveredKey(key),
                                  ariaCurrent: isActive ? "page" : void 0,
                                  children: inner
                                }
                              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  type: "button",
                                  className: sharedClasses,
                                  onClick: () => activeMenu === key ? setActiveMenu(null) : openMenu(key),
                                  onFocus: () => setHoveredKey(key),
                                  "aria-expanded": activeMenu === key,
                                  "aria-haspopup": "true",
                                  children: inner
                                }
                              ),
                              isActive && !item.megaMenu ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                                motion.span,
                                {
                                  layoutId: "nav-active-underline",
                                  className: "absolute inset-x-3 -bottom-[1px] h-[2px] rounded-full bg-signature",
                                  transition: { type: "spring", stiffness: 520, damping: 38 },
                                  "aria-hidden": true
                                }
                              ) : null
                            ]
                          },
                          key
                        );
                      })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "https://app.ozzios.com/sign-in",
                      className: "hidden h-9 items-center rounded-md px-3 text-[13px] font-medium text-foreground/65 transition-colors hover:bg-foreground/[0.05] hover:text-foreground lg:inline-flex",
                      children: "Sign in"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: "https://app.ozzios.com/sign-up",
                      className: cn(
                        "group relative hidden h-9 items-center gap-2 overflow-hidden rounded-md bg-foreground pl-3.5 pr-2 text-[13px] font-medium text-background",
                        "shadow-[0_1px_0_rgba(255,255,255,0.18)_inset,0_1px_2px_rgba(34,27,22,0.18),0_8px_22px_-8px_rgba(34,27,22,0.35)]",
                        "transition-all duration-200 hover:bg-[#1a1410] active:translate-y-px lg:inline-flex"
                      ),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" }),
                        "Get started",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Kbd, { tone: "dark", className: "h-[18px]", children: "S" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "https://app.ozzios.com/sign-up",
                      className: "inline-flex h-9 items-center rounded-md bg-foreground px-3 text-[13px] font-medium text-background shadow-[0_8px_22px_-10px_rgba(34,27,22,0.4)] lg:hidden",
                      children: "Start"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setIsMobileOpen((v) => !v),
                      className: "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/70 bg-background/80 text-foreground/70 transition-colors hover:bg-background hover:text-foreground lg:hidden",
                      "aria-label": isMobileOpen ? "Close menu" : "Open menu",
                      "aria-expanded": isMobileOpen,
                      children: isMobileOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-4 w-4" })
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: activeNavItem?.megaMenu ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: -6 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -6 },
              transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] },
              className: "hidden border-t border-border/50 bg-background/96 backdrop-blur-2xl lg:block",
              onMouseEnter: () => openMenu(activeNavItem.label),
              onMouseLeave: closeMenu,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1480px] px-4 py-7 sm:px-6 lg:px-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: cn(
                      "grid gap-6",
                      activeNavItem.megaMenu.featured ? "lg:grid-cols-[minmax(0,1fr)_300px]" : ""
                    ),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: cn(
                            "grid gap-x-6 gap-y-7",
                            activeNavItem.megaMenu.sections.length >= 4 ? "grid-cols-2 xl:grid-cols-4" : activeNavItem.megaMenu.sections.length === 3 ? "grid-cols-3" : "grid-cols-2"
                          ),
                          style: { gridAutoFlow: "dense" },
                          children: activeNavItem.megaMenu.sections.map((section) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                            section.title ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center gap-2", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/38", children: section.title }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px flex-1 bg-border/50" })
                            ] }) : null,
                            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-0.5", children: section.items.map((item) => {
                              const Icon = item.icon;
                              const isExternal = item.external || !item.href.startsWith("/");
                              return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                NavDestination,
                                {
                                  href: item.href,
                                  external: item.external,
                                  onClick: () => setActiveMenu(null),
                                  className: "group/link relative flex items-start gap-3 rounded-md px-2 py-2 transition-colors duration-150 hover:bg-foreground/[0.045]",
                                  children: [
                                    Icon ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border/60 bg-background text-foreground/60 transition-colors duration-150 group-hover/link:border-foreground/20 group-hover/link:bg-foreground group-hover/link:text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/25 transition-colors duration-150 group-hover/link:bg-signature" }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "min-w-0 flex-1", children: [
                                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-medium text-foreground", children: item.label }),
                                        item.badge ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                                          "span",
                                          {
                                            className: cn(
                                              "inline-flex h-[18px] items-center rounded-[5px] border px-1.5 font-mono text-[9px] font-medium uppercase tracking-wider",
                                              item.badge === "New" ? "border-signature/30 bg-signature/10 text-signature" : item.badge === "Core" ? "border-foreground/15 bg-foreground/5 text-foreground/70" : "border-border/70 bg-muted text-muted-foreground"
                                            ),
                                            children: item.badge
                                          }
                                        ) : null,
                                        isExternal ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "ml-0.5 h-3 w-3 text-foreground/30 transition-all duration-150 group-hover/link:translate-x-px group-hover/link:-translate-y-px group-hover/link:text-foreground/70" }) : null
                                      ] }),
                                      item.description ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 block text-[12px] leading-[1.45] text-muted-foreground", children: item.description }) : null
                                    ] }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                                      CornerDownLeft,
                                      {
                                        className: "mt-1 h-3 w-3 shrink-0 text-foreground/0 transition-colors duration-150 group-hover/link:text-foreground/40",
                                        "aria-hidden": true
                                      }
                                    )
                                  ]
                                }
                              ) }, item.label);
                            }) })
                          ] }, section.title ?? "links"))
                        }
                      ),
                      activeNavItem.megaMenu.featured ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        NavDestination,
                        {
                          href: activeNavItem.megaMenu.featured.href,
                          onClick: () => setActiveMenu(null),
                          className: "group/feature relative flex flex-col justify-between overflow-hidden rounded-xl border border-border/70 bg-[radial-gradient(circle_at_18%_12%,rgba(196,88,63,0.12),transparent_42%),linear-gradient(180deg,rgba(255,253,250,1),rgba(247,240,232,1))] p-5 transition-all duration-200 hover:border-signature/35 hover:shadow-[0_18px_40px_-18px_rgba(196,88,63,0.32)]",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-signature", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-signature" }),
                                activeNavItem.megaMenu.featured.eyebrow
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-[1.5rem] leading-[1.05] tracking-[-0.025em] text-foreground", children: activeNavItem.megaMenu.featured.title }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[12.5px] leading-[1.55] text-muted-foreground", children: activeNavItem.megaMenu.featured.description })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 inline-flex items-center gap-2 text-[12.5px] font-medium text-foreground", children: [
                              activeNavItem.megaMenu.featured.cta,
                              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform duration-200 group-hover/feature:translate-x-1" })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                "aria-hidden": true,
                                className: "pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-signature/15 blur-2xl transition-all duration-300 group-hover/feature:scale-110 group-hover/feature:bg-signature/25"
                              }
                            )
                          ]
                        }
                      ) : null
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-between gap-4 border-t border-border/50 pt-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-[11px] text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Kbd, { children: "↑" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Kbd, { children: "↓" }),
                      "navigate"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-px bg-border/60" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Kbd, { children: "↵" }),
                      "open"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-px bg-border/60" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Kbd, { children: "esc" }),
                      "close"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/pricing",
                      onClick: () => setActiveMenu(null),
                      className: "group/foot inline-flex items-center gap-1.5 text-[12px] font-medium text-foreground/70 transition-colors hover:text-foreground",
                      children: [
                        "See pricing",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3 transition-transform duration-150 group-hover/foot:translate-x-0.5" })
                      ]
                    }
                  )
                ] })
              ] })
            },
            activeNavItem.label
          ) : null })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isMobileOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.18 },
        className: "fixed inset-0 z-[60] bg-foreground/35 backdrop-blur-[2px] lg:hidden",
        onClick: () => setIsMobileOpen(false),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { x: "100%" },
            animate: { x: 0 },
            exit: { x: "100%" },
            transition: { duration: 0.26, ease: [0.16, 1, 0.3, 1] },
            className: "ml-auto flex h-full w-full max-w-[420px] flex-col border-l border-border/70 bg-background shadow-[-20px_0_60px_-20px_rgba(34,27,22,0.25)]",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-[60px] shrink-0 items-center justify-between gap-3 border-b border-border/60 px-4 sm:px-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/",
                    className: "inline-flex items-center gap-2",
                    onClick: () => setIsMobileOpen(false),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/ozzios-logo.svg", alt: "OzziOS", className: "h-[18px] w-auto brightness-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40", children: "Menu" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setIsMobileOpen(false),
                    className: "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/70 text-foreground/70 transition-colors hover:bg-foreground/[0.05] hover:text-foreground",
                    "aria-label": "Close menu",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto px-3 py-4 sm:px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                MobileMenuRow,
                {
                  item,
                  pathname,
                  onClose: () => setIsMobileOpen(false)
                },
                item.label
              )) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 space-y-2 border-t border-border/60 bg-background/70 px-4 py-4 sm:px-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "https://app.ozzios.com/sign-up",
                    onClick: () => setIsMobileOpen(false),
                    className: "group/cta relative flex h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-md bg-foreground text-[13px] font-medium text-background shadow-[0_1px_0_rgba(255,255,255,0.18)_inset,0_10px_28px_-12px_rgba(34,27,22,0.4)]",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" }),
                      "Get started",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform duration-200 group-hover/cta:translate-x-0.5" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "https://app.ozzios.com/sign-in",
                      onClick: () => setIsMobileOpen(false),
                      className: "flex h-10 flex-1 items-center justify-center rounded-md border border-border/70 text-[12.5px] font-medium text-foreground/75 transition-colors hover:bg-foreground/[0.04] hover:text-foreground",
                      children: "Sign in"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/contact",
                      onClick: () => setIsMobileOpen(false),
                      className: "flex h-10 flex-1 items-center justify-center rounded-md border border-border/70 text-[12.5px] font-medium text-foreground/75 transition-colors hover:bg-foreground/[0.04] hover:text-foreground",
                      children: "Talk to sales"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-1 text-[11px] text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-mint" }),
                    "All systems operational"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/changelog",
                      onClick: () => setIsMobileOpen(false),
                      className: "inline-flex items-center gap-1 transition-colors hover:text-foreground",
                      children: [
                        "v2.4",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3" })
                      ]
                    }
                  )
                ] })
              ] })
            ]
          }
        )
      }
    ) : null })
  ] });
}
function MobileMenuRow({
  item,
  pathname,
  onClose
}) {
  const [isOpen, setIsOpen] = reactExports.useState(item.label === "Product");
  if (!item.megaMenu) {
    const isActive = pathname === item.href;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      NavDestination,
      {
        href: item.href ?? "/",
        onClick: onClose,
        className: cn(
          "group/m flex h-12 items-center justify-between rounded-md border px-3 text-[14px] font-medium transition-colors",
          isActive ? "border-foreground bg-foreground text-background" : "border-border/60 bg-background text-foreground hover:border-border hover:bg-foreground/[0.04]"
        ),
        children: [
          item.label,
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: cn("h-3.5 w-3.5", isActive ? "text-background/70" : "text-foreground/35 group-hover/m:text-foreground/70") })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-md border border-border/60 bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setIsOpen((v) => !v),
        className: "flex h-12 w-full items-center justify-between px-3 text-left transition-colors hover:bg-foreground/[0.03]",
        "aria-expanded": isOpen,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px] font-medium text-foreground", children: item.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChevronDown,
            {
              className: cn(
                "h-4 w-4 text-foreground/40 transition-transform duration-200",
                isOpen && "rotate-180 text-foreground/70"
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
        className: "overflow-hidden border-t border-border/60",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 px-2 py-3", children: item.megaMenu.sections.map((section) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          section.title ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center gap-2 px-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/40", children: section.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px flex-1 bg-border/50" })
          ] }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-0.5", children: section.items.map((sub) => {
            const Icon = sub.icon;
            const isExternal = sub.external || !sub.href.startsWith("/");
            return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              NavDestination,
              {
                href: sub.href,
                external: sub.external,
                onClick: onClose,
                className: "group/sub flex items-start gap-2.5 rounded-md px-2 py-2 transition-colors hover:bg-foreground/[0.04]",
                children: [
                  Icon ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border/60 bg-background text-foreground/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/25" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-medium text-foreground", children: sub.label }),
                      sub.badge ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: cn(
                            "inline-flex h-[18px] items-center rounded-[5px] border px-1.5 font-mono text-[9px] font-medium uppercase tracking-wider",
                            sub.badge === "New" ? "border-signature/30 bg-signature/10 text-signature" : sub.badge === "Core" ? "border-foreground/15 bg-foreground/5 text-foreground/70" : "border-border/70 bg-muted text-muted-foreground"
                          ),
                          children: sub.badge
                        }
                      ) : null,
                      isExternal ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3 text-foreground/30" }) : null
                    ] }),
                    sub.description ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-[12px] leading-[1.45] text-muted-foreground", children: sub.description }) : null
                  ] })
                ]
              }
            ) }, sub.label);
          }) })
        ] }, section.title ?? "mobile-section")) })
      }
    ) : null })
  ] });
}
const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "AI Agents", href: "/features/ai-agents" },
      { label: "Workflows", href: "/features/workflows" },
      { label: "CRM & Contacts", href: "/features/crm" },
      { label: "Channels", href: "/features/channels" },
      { label: "Email Builder", href: "/features/email-builder" },
      { label: "Voice Agents", href: "/features/voice-agents", badge: "New" },
      { label: "Chat Widget", href: "/features/chat-widget", badge: "New" },
      { label: "Task Management", href: "/features/tasks" },
      { label: "Integrations", href: "/integrations" },
      { label: "Pricing", href: "/pricing" }
    ]
  },
  {
    title: "Solutions",
    links: [
      { label: "Solo Operators", href: "/solutions/solo-operators" },
      { label: "Teams", href: "/solutions/teams" },
      { label: "Multi-Location", href: "/solutions/enterprise" },
      { label: "Lead Generation", href: "/solutions/lead-generation" },
      { label: "Content Marketing", href: "/solutions/content-marketing" },
      { label: "Customer Management", href: "/solutions/customer-management" }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "https://app.ozzios.com/docs" },
      { label: "API Reference", href: "https://app.ozzios.com/docs/api" },
      { label: "Changelog", href: "/changelog" },
      { label: "Contact", href: "/contact" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Security", href: "/security" },
      { label: "Privacy", href: "/privacy-policy" },
      { label: "Terms", href: "/tos" },
      { label: "Data deletion", href: "/data-deletion" }
    ]
  }
];
const socialLinks = [
  {
    label: "Twitter",
    href: "https://twitter.com/ozzios",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/ozzios",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
  },
  {
    label: "GitHub",
    href: "https://github.com/ozzios",
    path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
  }
];
function FooterLinkRow({ link, onSurface }) {
  const isExternal = !link.href.startsWith("/");
  const baseClasses = "group/link inline-flex items-center gap-1.5 text-[13px] leading-snug text-foreground/65 transition-colors duration-150 hover:text-foreground";
  const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative", children: [
      link.label,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-[1px] left-0 h-px w-0 bg-foreground/40 transition-all duration-200 group-hover/link:w-full" })
    ] }),
    link.badge ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: cn(
          "inline-flex h-[16px] items-center rounded-[4px] border px-1 font-mono text-[8.5px] font-semibold uppercase tracking-wider",
          link.badge === "New" ? "border-signature/30 bg-signature/10 text-signature" : "border-border/70 bg-muted text-muted-foreground"
        ),
        children: link.badge
      }
    ) : null,
    isExternal ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3 text-foreground/30 transition-all duration-150 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-foreground/70" }) : null
  ] });
  if (link.href.startsWith("/")) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: link.href, className: baseClasses, children: inner });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: link.href, target: "_blank", rel: "noopener noreferrer", className: baseClasses, children: inner });
}
function ColumnHeading({ label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/40", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px flex-1 bg-border/50" })
  ] });
}
function StatusChip() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: "https://status.ozzios.com",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "group/s inline-flex h-7 items-center gap-2 rounded-full border border-border/60 bg-background/80 px-2.5 text-[11px] font-medium text-foreground/65 backdrop-blur transition-colors hover:border-border hover:text-foreground",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-mint/60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-mint" })
        ] }),
        "All systems operational",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3 text-foreground/35 transition-transform group-hover/s:-translate-y-0.5 group-hover/s:translate-x-0.5 group-hover/s:text-foreground/70" })
      ]
    }
  );
}
function Footer() {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative isolate mt-32 overflow-hidden border-t border-border/60 bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "pointer-events-none absolute -left-32 top-0 z-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(196,88,63,0.08),transparent_60%)] blur-3xl"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "pointer-events-none absolute inset-0 z-0 opacity-[0.4] [mask-image:linear-gradient(180deg,black_25%,transparent_85%)]",
        style: {
          backgroundImage: "radial-gradient(rgba(64, 45, 34, 0.10) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 pt-16 lg:grid-cols-[1.6fr_repeat(4,minmax(0,1fr))] lg:gap-10 lg:pt-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/",
              className: "inline-flex items-center gap-2.5 transition-opacity hover:opacity-80",
              "aria-label": "OzziOS home",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: "/images/ozzios-logo.svg",
                    alt: "",
                    className: "h-6 w-auto brightness-0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden h-4 w-px bg-border/70 sm:inline-block" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40 sm:inline", children: "Operating system for the trades" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-[380px] text-[13.5px] leading-[1.6] text-muted-foreground", children: "The first AI agent platform built for home services. Operations, marketing, and follow-up — without another layer of overhead." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusChip, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/changelog",
                className: "inline-flex h-7 items-center gap-1.5 rounded-full border border-border/60 bg-background/80 px-2.5 font-mono text-[10.5px] uppercase tracking-wider text-foreground/55 backdrop-blur transition-colors hover:text-foreground",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/35", children: "v" }),
                  "2.4"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex items-center gap-1.5", children: [
            socialLinks.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: s.href,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": s.label,
                className: "group/soc inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/60 bg-background text-foreground/55 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/30 hover:bg-foreground hover:text-background",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-3.5 w-3.5", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: s.path }) })
              },
              s.label
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1 inline-flex h-9 items-center gap-1.5 rounded-md border border-border/60 bg-background px-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/45", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3 w-3 text-foreground/40" }),
              "SOC 2 Type II — in progress"
            ] })
          ] })
        ] }),
        footerColumns.map((col) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ColumnHeading, { label: col.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: col.links.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(FooterLinkRow, { link }) }, link.label)) })
        ] }, col.title))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-20 select-none lg:mt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none flex justify-center overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/images/ozzios-logo.svg",
          alt: "",
          "aria-hidden": true,
          className: cn(
            "h-auto w-full max-w-[1280px]",
            // Brand mark — reads as a deliberate bleed, not a watermark
            "[filter:brightness(0)_invert(0)] opacity-[0.14]"
          ),
          style: {
            maskImage: "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 65%, rgba(0,0,0,0.2) 92%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage: "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 65%, rgba(0,0,0,0.2) 92%, rgba(0,0,0,0) 100%)"
          }
        }
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative -mt-6 flex flex-col gap-3 border-t border-border/50 pb-8 pt-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono", children: [
            "© ",
            year,
            " OzziOS, Inc."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden h-3 w-px bg-border/60 sm:inline-block" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3 text-foreground/35" }),
            "Designed in Asheville, NC"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden h-3 w-px bg-border/60 sm:inline-block" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-3 w-3 text-foreground/35" }),
            "English (US)"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 text-[11px] text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy-policy", className: "transition-colors hover:text-foreground", children: "Privacy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-px bg-border/60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/tos", className: "transition-colors hover:text-foreground", children: "Terms" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-px bg-border/60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/data-deletion", className: "transition-colors hover:text-foreground", children: "Data deletion" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-px bg-border/60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "mailto:hello@ozzios.com",
              className: "inline-flex items-center gap-1 transition-colors hover:text-foreground",
              children: [
                "hello@ozzios.com",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3 text-foreground/35" })
              ]
            }
          )
        ] })
      ] })
    ] })
  ] });
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
