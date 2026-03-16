import { r as reactExports, j as jsxRuntimeExports, A as AnimatePresence, m as motion } from "./vendor-framer-DZFBeC81.js";
import { L as Link } from "./vendor-router-BDaSxPy_.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { B as Button } from "./button-HnwzKl7C.js";
import { $ as Bot, aN as Workflow, U as Users, aO as LayoutDashboard, h as MessageSquare, M as Mail, az as Smartphone, ab as Phone, aP as MessageSquareText, aC as Palette, aQ as PenLine, W as Share2, a4 as ClipboardList, aR as SquareCheckBig, aS as FilePen, aT as Monitor, aU as Code, n as Brain, aK as BookOpen, t as FileText, e as ChevronDown, A as ArrowRight, X, r as Menu } from "./vendor-icons-BkkOHNOi.js";
const navItems = [
  {
    label: "Product",
    megaMenu: {
      sections: [
        {
          title: "Core Platform",
          items: [
            { icon: Bot, label: "AI Agents", description: "Unlimited AI workforce", href: "/features/ai-agents", badge: "Core" },
            { icon: Workflow, label: "Workflows", description: "Durable automation engine", href: "/features/workflows" },
            { icon: Users, label: "CRM & Contacts", description: "Scoring, enrichment & segmentation", href: "/features/crm" },
            { icon: LayoutDashboard, label: "Dashboard", description: "18 customizable widget types", href: "/features/dashboard" }
          ]
        },
        {
          title: "Communication",
          items: [
            { icon: MessageSquare, label: "Channels", description: "Public, private, voice & DMs", href: "/features/channels" },
            { icon: Mail, label: "Email Campaigns", description: "Broadcast, schedule & track", href: "/features/email-campaigns" },
            { icon: Smartphone, label: "SMS Campaigns", description: "Rate-limited Twilio messaging", href: "/features/sms-campaigns" },
            { icon: Phone, label: "Voice Agents", description: "AI call center with transcription", href: "/features/voice-agents", badge: "New" },
            { icon: MessageSquareText, label: "Chat Widget", description: "AI-powered website chat", href: "/features/chat-widget", badge: "New" }
          ]
        },
        {
          title: "Marketing & Content",
          items: [
            { icon: Palette, label: "Email Builder", description: "Drag-and-drop with 16 block types", href: "/features/email-builder" },
            { icon: PenLine, label: "Blog & SEO", description: "Editorial suite with WordPress sync", href: "/features/blog-seo" },
            { icon: Share2, label: "Social Media", description: "Schedule across 5 platforms", href: "/features/social-media" },
            { icon: ClipboardList, label: "Forms", description: "Lead capture with conditional logic", href: "/features/forms" }
          ]
        },
        {
          title: "Operations",
          items: [
            { icon: SquareCheckBig, label: "Task Management", description: "Kanban boards with dependencies", href: "/features/tasks" },
            { icon: FilePen, label: "Documents & E-Sign", description: "Templates, signing & audit trails", href: "/features/documents" },
            { icon: Monitor, label: "Presentations", description: "AI slides with PPTX export", href: "/features/presentations" },
            { icon: Code, label: "Coding", description: "AI-generated reports & dashboards", href: "/features/coding" },
            { icon: Brain, label: "Knowledge Base", description: "RAG-powered search & indexing", href: "/features/knowledge-base" }
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
            { label: "Solo Operators", description: "Scale without hiring", href: "/solutions/solo-operators" },
            { label: "Teams", description: "Collaborate with AI", href: "/solutions/teams" },
            { label: "Multi-Location", description: "Manage multiple locations", href: "/solutions/enterprise" }
          ]
        },
        {
          title: "By use case",
          items: [
            { label: "Lead Generation", description: "Automate outreach", href: "/solutions/lead-generation" },
            { label: "Content Marketing", description: "AI-powered creation", href: "/solutions/content-marketing" },
            { label: "Customer Management", description: "Multi-tenant CRM", href: "/solutions/customer-management" }
          ]
        }
      ],
      cta: {
        title: "See how home service companies use OzziOS",
        description: "Real examples from businesses scaling with AI agents",
        href: "#case-studies",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&auto=format"
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
            { icon: BookOpen, label: "Documentation", description: "Guides and tutorials", href: "https://app.ozzios.com/docs" },
            { icon: FileText, label: "Blog", description: "Updates and insights", href: "/blog" }
          ]
        },
        {
          title: "Community",
          items: [
            { icon: MessageSquare, label: "Support", description: "Get help from our team", href: "/contact" },
            { iconSrc: "/images/facebook-icon.svg", label: "Facebook Group", description: "Join the OzziOS community", href: "https://www.facebook.com/groups/1796376351052187" }
          ]
        }
      ],
      cta: {
        title: "Start building today",
        description: "Join the OzziOS community",
        href: "https://app.ozzios.com/sign-up",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&auto=format"
      }
    }
  },
  {
    label: "Integrations",
    megaMenu: {
      sections: [
        {
          title: "Google Workspace",
          items: [
            { label: "Gmail & Calendar", description: "Two-way email and calendar sync", href: "/integrations#google" },
            { label: "Google Ads", description: "Campaign management and analytics", href: "/integrations#google" },
            { label: "Google Business Profile", description: "Local SEO and listing management", href: "/integrations#google" },
            { label: "Search Console", description: "Organic search data and insights", href: "/integrations#google" }
          ]
        },
        {
          title: "Communication",
          items: [
            { label: "Twilio", description: "SMS, voice calls and WhatsApp", href: "/integrations#communication" },
            { label: "Resend", description: "Transactional email and domains", href: "/integrations#communication" },
            { label: "Deepgram", description: "Real-time speech-to-text", href: "/integrations#communication" },
            { label: "ElevenLabs", description: "AI voice synthesis", href: "/integrations#communication" }
          ]
        },
        {
          title: "Advertising & Platforms",
          items: [
            { label: "Meta Ads", description: "Facebook and Instagram campaigns", href: "/integrations#advertising" },
            { label: "Shopify", description: "E-commerce store integration", href: "/integrations#platforms" },
            { label: "WordPress", description: "CMS publishing and sync", href: "/integrations#platforms" },
            { label: "LinkedIn & TikTok", description: "Social ad management", href: "/integrations#advertising" }
          ]
        }
      ],
      cta: {
        title: "Explore all integrations",
        description: "Connect with 30+ platforms and services",
        href: "/integrations",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&auto=format"
      }
    }
  },
  { label: "Pricing", href: "#pricing" }
];
function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = reactExports.useState(false);
  const [activeMenu, setActiveMenu] = reactExports.useState(null);
  const [hasScrolled, setHasScrolled] = reactExports.useState(false);
  const [isMounted, setIsMounted] = reactExports.useState(false);
  const closeTimeoutRef = reactExports.useRef(null);
  const activeNavItem = activeMenu ? navItems.find((i) => i.label === activeMenu) : null;
  const isWideMegaMenu = (activeNavItem?.megaMenu?.sections.length ?? 0) >= 4;
  const openMenu = reactExports.useCallback((label) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveMenu(label);
  }, []);
  const closeMenu = reactExports.useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  }, []);
  reactExports.useEffect(() => {
    setIsMounted(true);
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);
  reactExports.useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  reactExports.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "header",
      {
        className: cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          hasScrolled ? "bg-white shadow-sm border-b border-border/50 backdrop-blur-sm bg-white/95" : "bg-transparent border-b border-transparent"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "relative mx-auto max-w-[1400px] h-[72px] flex items-center justify-between px-6 lg:px-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center gap-2 transition-opacity hover:opacity-70", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/images/ozzios-logo.svg",
                alt: "OzziOS",
                className: "h-6 w-auto brightness-0"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:flex items-center gap-0", children: navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "relative",
                onMouseEnter: () => item.megaMenu && openMenu(item.label),
                onMouseLeave: closeMenu,
                children: item.megaMenu ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    className: cn(
                      "flex items-center gap-1.5 px-4 py-2 text-[13px] font-semibold transition-colors",
                      activeMenu === item.label ? "text-black" : "text-gray-500 hover:text-black"
                    ),
                    children: [
                      item.label,
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: cn(
                        "h-3.5 w-3.5 transition-transform duration-150",
                        activeMenu === item.label && "rotate-180"
                      ) })
                    ]
                  }
                ) : item.href?.startsWith("/") ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: item.href,
                    className: "px-4 py-2 text-[13px] font-semibold text-gray-500 hover:text-black transition-colors",
                    children: item.label
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: item.href,
                    className: "px-4 py-2 text-[13px] font-semibold text-gray-500 hover:text-black transition-colors",
                    children: item.label
                  }
                )
              },
              item.label
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "https://app.ozzios.com/sign-in",
                  className: "text-[13px] font-semibold text-gray-500 hover:text-black transition-colors",
                  children: "Sign in"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  asChild: true,
                  className: "h-9 px-5 text-[12px] font-bold tracking-wide bg-signature text-white hover:bg-signature/90 rounded-md shadow-sm",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://app.ozzios.com/sign-up", children: [
                    "Get Early Access",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1.5 h-3.5 w-3.5" })
                  ] })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
                className: "lg:hidden p-2 -mr-2 text-gray-600 hover:text-black transition-colors",
                "aria-label": isMobileMenuOpen ? "Close menu" : "Open menu",
                children: isMobileMenuOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: activeMenu && isMounted && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: -8 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -8 },
              transition: { duration: 0.15, ease: [0.16, 1, 0.3, 1] },
              className: "absolute top-[50px] left-0 right-0 hidden lg:flex justify-center pointer-events-none",
              onMouseEnter: () => activeMenu && openMenu(activeMenu),
              onMouseLeave: closeMenu,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("pointer-events-auto mx-8 w-full pt-[22px]", isWideMegaMenu ? "max-w-[1100px]" : "max-w-[900px]"), children: navItems.map((item) => {
                if (item.label !== activeMenu || !item.megaMenu) return null;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "border border-gray-200 bg-white p-6 shadow-lg rounded-2xl",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-8", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(
                        "col-span-12 grid gap-8",
                        item.megaMenu.cta ? "lg:col-span-8" : "lg:col-span-12",
                        item.megaMenu.sections.length >= 4 ? "sm:grid-cols-2 lg:grid-cols-4" : item.megaMenu.sections.length === 3 ? "sm:grid-cols-3" : item.megaMenu.sections.length > 1 ? "sm:grid-cols-2" : "sm:grid-cols-1"
                      ), children: item.megaMenu.sections.map((section, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        section.title && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-4", children: section.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: section.items.map((subItem) => {
                          const Icon = subItem.icon;
                          const LinkOrA = subItem.href.startsWith("/") ? Link : "a";
                          const linkProps = subItem.href.startsWith("/") ? { to: subItem.href, onClick: () => setActiveMenu(null) } : { href: subItem.href, target: "_blank", rel: "noopener noreferrer" };
                          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            LinkOrA,
                            {
                              ...linkProps,
                              className: "flex items-start gap-3 p-3 rounded-xl transition-colors hover:bg-gray-50 group",
                              children: [
                                subItem.iconSrc ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-xl bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-gray-200 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: subItem.iconSrc, alt: "", className: "h-4 w-4" }) }) : Icon ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-xl bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-gray-200 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-gray-600" }) }) : null,
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-gray-700 group-hover:text-black transition-colors", children: subItem.label }),
                                    subItem.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white bg-signature rounded", children: subItem.badge })
                                  ] }),
                                  subItem.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-gray-400 mt-0.5", children: subItem.description })
                                ] })
                              ]
                            },
                            subItem.label
                          );
                        }) })
                      ] }, idx)) }),
                      item.megaMenu.cta && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 lg:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "a",
                        {
                          href: item.megaMenu.cta.href,
                          className: "block h-full border border-gray-200 rounded-xl overflow-hidden transition-all hover:border-gray-300 hover:shadow-sm group",
                          children: [
                            item.megaMenu.cta.image && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-32 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "img",
                              {
                                src: item.megaMenu.cta.image,
                                alt: "",
                                className: "absolute inset-0 w-full h-full object-cover"
                              }
                            ) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-gray-50", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] font-semibold text-black mb-1", children: item.megaMenu.cta.title }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-gray-500 leading-relaxed mb-3", children: item.megaMenu.cta.description }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-[12px] font-semibold text-signature", children: [
                                item.label === "Product" ? "Watch demo" : item.label === "Solutions" ? "View case studies" : item.label === "Integrations" ? "View all" : "Get started",
                                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3 transition-transform group-hover:translate-x-0.5" })
                              ] })
                            ] })
                          ]
                        }
                      ) })
                    ] })
                  },
                  item.label
                );
              }) })
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isMobileMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.15 },
        className: "fixed inset-0 z-40 bg-white lg:hidden",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full overflow-y-auto pt-[72px] pb-safe", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-8 space-y-2", children: [
          navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: item.megaMenu ? /* @__PURE__ */ jsxRuntimeExports.jsx(MobileMenuSection, { item, onClose: () => setIsMobileMenuOpen(false) }) : item.href?.startsWith("/") ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: item.href,
              className: "flex items-center h-12 text-[15px] font-semibold text-gray-700",
              onClick: () => setIsMobileMenuOpen(false),
              children: item.label
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: item.href,
              className: "flex items-center h-12 text-[15px] font-semibold text-gray-700",
              onClick: () => setIsMobileMenuOpen(false),
              children: item.label
            }
          ) }, item.label)),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-8 mt-6 border-t border-gray-200 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://app.ozzios.com/sign-in",
                className: "flex items-center justify-center h-12 text-[14px] font-semibold text-gray-600 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors",
                onClick: () => setIsMobileMenuOpen(false),
                children: "Sign in"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "lg",
                asChild: true,
                className: "w-full h-12 text-[13px] font-bold tracking-wide bg-signature text-white hover:bg-signature/90 rounded-md shadow-sm",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://app.ozzios.com/sign-up", onClick: () => setIsMobileMenuOpen(false), children: [
                  "Get Early Access",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                ] })
              }
            )
          ] })
        ] }) })
      }
    ) })
  ] });
}
function MobileMenuSection({ item, onClose }) {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  if (!item.megaMenu) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        className: cn(
          "flex items-center justify-between w-full h-12 text-[15px] font-semibold transition-colors",
          isOpen ? "text-black" : "text-gray-700"
        ),
        children: [
          item.label,
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: cn(
            "h-4 w-4 text-gray-400 transition-transform duration-150",
            isOpen && "rotate-180"
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        transition: { duration: 0.15 },
        className: "overflow-hidden",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-3 pl-4 space-y-6 border-l border-gray-200", children: item.megaMenu.sections.map((section, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          section.title && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-3", children: section.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: section.items.map((subItem) => {
            const Icon = subItem.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: subItem.href,
                className: "flex items-center gap-3 py-2.5 text-gray-600 hover:text-black transition-colors",
                onClick: onClose,
                ...!subItem.href.startsWith("/") ? { target: "_blank", rel: "noopener noreferrer" } : {},
                children: [
                  subItem.iconSrc ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: subItem.iconSrc, alt: "", className: "h-4 w-4" }) : Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px] font-medium", children: subItem.label })
                ]
              },
              subItem.label
            );
          }) })
        ] }, idx)) })
      }
    ) })
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
      { label: "Documents & E-Sign", href: "/features/documents" },
      { label: "Integrations", href: "/integrations" },
      { label: "Pricing", href: "/pricing" }
    ]
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Documentation", href: "https://app.ozzios.com/docs" },
      { label: "Blog", href: "/blog" },
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border/40 bg-background pt-8 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-16 lg:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 md:col-span-4 lg:col-span-1 lg:pr-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-block transition-opacity hover:opacity-80", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/images/ozzios-logo.svg",
            alt: "OzziOS",
            className: "h-6 w-auto brightness-0"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-[13px] leading-relaxed text-muted-foreground max-w-xs font-light", children: "The AI platform built for home service companies. Automate your marketing, follow-ups, and operations without hiring more staff." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex items-center gap-4", children: socialLinks.map((social) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: social.href,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-muted-foreground hover:text-foreground transition-colors",
            "aria-label": social.label,
            children: social.icon
          },
          social.label
        )) })
      ] }),
      Object.entries(footerLinks).map(([key, section]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[11px] font-semibold uppercase tracking-widest text-foreground mb-6", children: section.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: section.links.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: link.href,
            className: "text-[13px] text-muted-foreground hover:text-foreground transition-colors",
            children: link.label
          }
        ) }, link.label)) })
      ] }, key))
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border/40 py-8 mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-between gap-4 sm:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-muted-foreground", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " OzziOS. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-green-500" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground", children: "All systems operational" })
      ] })
    ] }) })
  ] }) });
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
        answer: "For the repetitive, process-driven work? Yes--and often better. Site audits, content drafts, social scheduling, Google Business Profile management, performance reports. Your AI agents handle these 24/7 without the back-and-forth."
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
          benefits: ["Blog & SEO", "Presentations & reports"]
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
          image: "/images/anthony-profile.jpg"
        },
        {
          name: "Gregory Underwood",
          role: "Owner",
          company: "Extreme Carpet",
          content: "In my first day using it, Ozzi set up a full 12-week posting schedule for my Google Business Profile and built out a complete service page for my website that looked really professional. Only needed a quick manual fix for some meta tags because of Yoast SEO--minor thing. Impressive for less than 24 hours in.",
          image: "/images/greg-profile-image.jpg"
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AudienceProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen w-full flex flex-col bg-background overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 pointer-events-none z-0 opacity-[0.015] noise-texture"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 pointer-events-none z-0 glow-depth-violet"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex min-h-screen flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] })
  ] }) });
}
export {
  LandingLayout as L,
  audienceContent as a,
  useAudience as u
};
