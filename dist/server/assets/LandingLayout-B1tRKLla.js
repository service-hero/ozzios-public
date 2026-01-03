import { a as reactExports, n as jsxRuntimeExports } from "./worker-entry-C6c8gwHi.js";
import { L as Link } from "./router-Pb7WXC9i.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { S as Sparkles, a as BookOpen, B as Button, M as Menu } from "./button-BhYkgkTk.js";
import { c as createLucideIcon } from "./createLucideIcon-CSfETYTW.js";
import { M as MotionConfigContext, i as isHTMLElement, u as useConstant, P as PresenceContext, c as usePresence, b as useIsomorphicLayoutEffect, L as LayoutGroupContext, A as ArrowRight, m as motion } from "./proxy-C_lVAAsv.js";
const __iconNode$9 = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
];
const Bot = createLucideIcon("bot", __iconNode$9);
const __iconNode$8 = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
];
const ChartColumn = createLucideIcon("chart-column", __iconNode$8);
const __iconNode$7 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$7);
const __iconNode$6 = [
  ["path", { d: "m16 18 6-6-6-6", key: "eg8j8" }],
  ["path", { d: "m8 6-6 6 6 6", key: "ppft3o" }]
];
const Code = createLucideIcon("code", __iconNode$6);
const __iconNode$5 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
];
const FileText = createLucideIcon("file-text", __iconNode$5);
const __iconNode$4 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$4);
const __iconNode$3 = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
];
const MessageSquare = createLucideIcon("message-square", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode$2);
const __iconNode$1 = [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
];
const Workflow = createLucideIcon("workflow", __iconNode$1);
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup === "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup === "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}
function useComposedRefs(...refs) {
  return reactExports.useCallback(composeRefs(...refs), refs);
}
class PopChildMeasure extends reactExports.Component {
  getSnapshotBeforeUpdate(prevProps) {
    const element = this.props.childRef.current;
    if (element && prevProps.isPresent && !this.props.isPresent) {
      const parent = element.offsetParent;
      const parentWidth = isHTMLElement(parent) ? parent.offsetWidth || 0 : 0;
      const size = this.props.sizeRef.current;
      size.height = element.offsetHeight || 0;
      size.width = element.offsetWidth || 0;
      size.top = element.offsetTop;
      size.left = element.offsetLeft;
      size.right = parentWidth - size.width - size.left;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function PopChild({ children, isPresent, anchorX, root }) {
  const id = reactExports.useId();
  const ref = reactExports.useRef(null);
  const size = reactExports.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  });
  const { nonce } = reactExports.useContext(MotionConfigContext);
  const composedRef = useComposedRefs(ref, children?.ref);
  reactExports.useInsertionEffect(() => {
    const { width, height, top, left, right } = size.current;
    if (isPresent || !ref.current || !width || !height)
      return;
    const x = anchorX === "left" ? `left: ${left}` : `right: ${right}`;
    ref.current.dataset.motionPopId = id;
    const style = document.createElement("style");
    if (nonce)
      style.nonce = nonce;
    const parent = root ?? document.head;
    parent.appendChild(style);
    if (style.sheet) {
      style.sheet.insertRule(`
          [data-motion-pop-id="${id}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            ${x}px !important;
            top: ${top}px !important;
          }
        `);
    }
    return () => {
      if (parent.contains(style)) {
        parent.removeChild(style);
      }
    };
  }, [isPresent]);
  return jsxRuntimeExports.jsx(PopChildMeasure, { isPresent, childRef: ref, sizeRef: size, children: reactExports.cloneElement(children, { ref: composedRef }) });
}
const PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, anchorX, root }) => {
  const presenceChildren = useConstant(newChildrenMap);
  const id = reactExports.useId();
  let isReusedContext = true;
  let context = reactExports.useMemo(() => {
    isReusedContext = false;
    return {
      id,
      initial,
      isPresent,
      custom,
      onExitComplete: (childId) => {
        presenceChildren.set(childId, true);
        for (const isComplete of presenceChildren.values()) {
          if (!isComplete)
            return;
        }
        onExitComplete && onExitComplete();
      },
      register: (childId) => {
        presenceChildren.set(childId, false);
        return () => presenceChildren.delete(childId);
      }
    };
  }, [isPresent, presenceChildren, onExitComplete]);
  if (presenceAffectsLayout && isReusedContext) {
    context = { ...context };
  }
  reactExports.useMemo(() => {
    presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
  }, [isPresent]);
  reactExports.useEffect(() => {
    !isPresent && !presenceChildren.size && onExitComplete && onExitComplete();
  }, [isPresent]);
  if (mode === "popLayout") {
    children = jsxRuntimeExports.jsx(PopChild, { isPresent, anchorX, root, children });
  }
  return jsxRuntimeExports.jsx(PresenceContext.Provider, { value: context, children });
};
function newChildrenMap() {
  return /* @__PURE__ */ new Map();
}
const getChildKey = (child) => child.key || "";
function onlyElements(children) {
  const filtered = [];
  reactExports.Children.forEach(children, (child) => {
    if (reactExports.isValidElement(child))
      filtered.push(child);
  });
  return filtered;
}
const AnimatePresence = ({ children, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync", propagate = false, anchorX = "left", root }) => {
  const [isParentPresent, safeToRemove] = usePresence(propagate);
  const presentChildren = reactExports.useMemo(() => onlyElements(children), [children]);
  const presentKeys = propagate && !isParentPresent ? [] : presentChildren.map(getChildKey);
  const isInitialRender = reactExports.useRef(true);
  const pendingPresentChildren = reactExports.useRef(presentChildren);
  const exitComplete = useConstant(() => /* @__PURE__ */ new Map());
  const [diffedChildren, setDiffedChildren] = reactExports.useState(presentChildren);
  const [renderedChildren, setRenderedChildren] = reactExports.useState(presentChildren);
  useIsomorphicLayoutEffect(() => {
    isInitialRender.current = false;
    pendingPresentChildren.current = presentChildren;
    for (let i = 0; i < renderedChildren.length; i++) {
      const key = getChildKey(renderedChildren[i]);
      if (!presentKeys.includes(key)) {
        if (exitComplete.get(key) !== true) {
          exitComplete.set(key, false);
        }
      } else {
        exitComplete.delete(key);
      }
    }
  }, [renderedChildren, presentKeys.length, presentKeys.join("-")]);
  const exitingChildren = [];
  if (presentChildren !== diffedChildren) {
    let nextChildren = [...presentChildren];
    for (let i = 0; i < renderedChildren.length; i++) {
      const child = renderedChildren[i];
      const key = getChildKey(child);
      if (!presentKeys.includes(key)) {
        nextChildren.splice(i, 0, child);
        exitingChildren.push(child);
      }
    }
    if (mode === "wait" && exitingChildren.length) {
      nextChildren = exitingChildren;
    }
    setRenderedChildren(onlyElements(nextChildren));
    setDiffedChildren(presentChildren);
    return null;
  }
  const { forceRender } = reactExports.useContext(LayoutGroupContext);
  return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: renderedChildren.map((child) => {
    const key = getChildKey(child);
    const isPresent = propagate && !isParentPresent ? false : presentChildren === renderedChildren || presentKeys.includes(key);
    const onExit = () => {
      if (exitComplete.has(key)) {
        exitComplete.set(key, true);
      } else {
        return;
      }
      let isEveryExitComplete = true;
      exitComplete.forEach((isExitComplete) => {
        if (!isExitComplete)
          isEveryExitComplete = false;
      });
      if (isEveryExitComplete) {
        forceRender?.();
        setRenderedChildren(pendingPresentChildren.current);
        propagate && safeToRemove?.();
        onExitComplete && onExitComplete();
      }
    };
    return jsxRuntimeExports.jsx(PresenceChild, { isPresent, initial: !isInitialRender.current || initial ? void 0 : false, custom, presenceAffectsLayout, mode, root, onExitComplete: isPresent ? void 0 : onExit, anchorX, children: child }, key);
  }) });
};
const navItems = [
  {
    label: "Product",
    megaMenu: {
      sections: [
        {
          title: "Platform",
          items: [
            { icon: Bot, label: "AI Agents", description: "14 specialized employees", href: "#agents", badge: "Core" },
            { icon: Workflow, label: "Workflows", description: "Durable automation engine", href: "#workflows" },
            { icon: MessageSquare, label: "Channels", description: "Enterprise communication", href: "#channels" },
            { icon: Users, label: "CRM", description: "Full lead management", href: "#crm" }
          ]
        },
        {
          title: "Capabilities",
          items: [
            { icon: ChartColumn, label: "Marketing Suite", description: "Ads, email, social", href: "#marketing" },
            { icon: Mail, label: "Gmail & Calendar", description: "Two-way sync", href: "#integrations" },
            { icon: Sparkles, label: "77+ Tools", description: "Built into every agent", href: "#tools", badge: "New" }
          ]
        }
      ],
      cta: {
        title: "See OzziOS in action",
        description: "Watch a 2-minute demo of AI agents at work",
        href: "#demo",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format"
      }
    }
  },
  {
    label: "Solutions",
    megaMenu: {
      sections: [
        {
          title: "By team size",
          items: [
            { label: "Solo Agencies", description: "Scale without hiring", href: "#solo" },
            { label: "Teams", description: "Collaborate with AI", href: "#teams" },
            { label: "Enterprise", description: "Unlimited sub-accounts", href: "#enterprise" }
          ]
        },
        {
          title: "By use case",
          items: [
            { label: "Lead Generation", description: "Automate outreach", href: "#leads" },
            { label: "Content Marketing", description: "AI-powered creation", href: "#content" },
            { label: "Client Management", description: "Multi-tenant CRM", href: "#clients" }
          ]
        }
      ],
      cta: {
        title: "See how agencies use OzziOS",
        description: "Real examples from agencies scaling with AI agents",
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
            { icon: BookOpen, label: "Documentation", description: "Guides and tutorials", href: "/docs" },
            { icon: FileText, label: "Blog", description: "Updates and insights", href: "/blog" },
            { icon: Code, label: "API Reference", description: "Build integrations", href: "/docs/api" }
          ]
        },
        {
          title: "Community",
          items: [
            { icon: Users, label: "Discord", description: "Join 2,000+ agency owners", href: "#discord" },
            { icon: MessageSquare, label: "Support", description: "Get help from our team", href: "#support" }
          ]
        }
      ],
      cta: {
        title: "Start building today",
        description: "Get started with our free tier - no credit card required",
        href: "https://app.ozzios.com/sign-up",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&auto=format"
      }
    }
  },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "#pricing" }
];
function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = reactExports.useState(false);
  const [activeMenu, setActiveMenu] = reactExports.useState(null);
  const [hasScrolled, setHasScrolled] = reactExports.useState(false);
  const [isMounted, setIsMounted] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setIsMounted(true);
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
          hasScrolled && "backdrop-blur-xl dark:bg-[#0A0A0B]/80 bg-white/80"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: cn(
                "absolute inset-x-0 bottom-0 h-px transition-opacity duration-300",
                hasScrolled ? "opacity-100" : "opacity-0",
                "dark:bg-gradient-to-r dark:from-transparent dark:via-white/10 dark:to-transparent",
                "bg-gradient-to-r from-transparent via-black/10 to-transparent"
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "relative mx-auto max-w-[1400px] h-[72px] flex items-center justify-between px-6 lg:px-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center gap-2 transition-opacity hover:opacity-80", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/images/dark-theme-logo.svg",
                alt: "OzziOS",
                className: "h-6 w-auto"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:flex items-center gap-1", children: navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "relative",
                onMouseEnter: () => item.megaMenu && setActiveMenu(item.label),
                onMouseLeave: () => setActiveMenu(null),
                children: item.megaMenu ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    className: cn(
                      "flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium transition-colors rounded-lg",
                      activeMenu === item.label ? "text-foreground" : "text-foreground/60 hover:text-foreground"
                    ),
                    children: [
                      item.label,
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        activeMenu === item.label && "rotate-180"
                      ) })
                    ]
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: item.href,
                    className: "px-4 py-2 text-[13px] font-medium text-foreground/60 hover:text-foreground transition-colors",
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
                  className: "text-[13px] font-medium text-foreground/60 hover:text-foreground transition-colors",
                  children: "Sign in"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  asChild: true,
                  className: "h-9 px-5 text-[13px] font-medium dark:bg-white dark:text-[#0A0A0B] bg-[#0A0A0B] text-white hover:opacity-90 rounded-full",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://app.ozzios.com/sign-up", children: [
                    "Get started",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-3.5 w-3.5" })
                  ] })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
                className: "lg:hidden p-2 -mr-2 text-foreground/70 hover:text-foreground transition-colors",
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
              transition: { duration: 0.15, ease: "easeOut" },
              className: "absolute top-[50px] left-0 right-0 hidden lg:flex justify-center pointer-events-none",
              onMouseEnter: () => setActiveMenu(activeMenu),
              onMouseLeave: () => setActiveMenu(null),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-auto mx-8 w-full max-w-[900px] pt-[22px]", children: navItems.map((item) => {
                if (item.label !== activeMenu || !item.megaMenu) return null;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "rounded-2xl border border-border bg-card/95 backdrop-blur-xl p-6 shadow-2xl shadow-black/40",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-8", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(
                        "col-span-12 grid gap-8",
                        item.megaMenu.cta ? "lg:col-span-8" : "lg:col-span-12",
                        item.megaMenu.sections.length > 1 ? "sm:grid-cols-2" : "sm:grid-cols-1"
                      ), children: item.megaMenu.sections.map((section, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        section.title && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-semibold text-foreground/30 uppercase tracking-[0.15em] mb-4", children: section.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: section.items.map((subItem) => {
                          const Icon = subItem.icon;
                          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "a",
                            {
                              href: subItem.href,
                              className: "flex items-start gap-3 p-3 rounded-xl transition-colors hover:bg-muted group",
                              children: [
                                Icon && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-lg bg-muted flex items-center justify-center shrink-0 group-hover:bg-amber-500/10 group-hover:border group-hover:border-amber-500/20 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-foreground/40 group-hover:text-amber-400 transition-colors" }) }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-foreground/80 group-hover:text-foreground transition-colors", children: subItem.label }),
                                    subItem.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 rounded", children: subItem.badge })
                                  ] }),
                                  subItem.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-foreground/30 mt-0.5", children: subItem.description })
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
                          className: "block h-full rounded-xl bg-gradient-to-br from-muted/40 to-muted/10 border border-border overflow-hidden transition-all hover:border-border/80 hover:from-muted/60 group",
                          children: [
                            item.megaMenu.cta.image && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-32 overflow-hidden", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "img",
                                {
                                  src: item.megaMenu.cta.image,
                                  alt: "",
                                  className: "absolute inset-0 w-full h-full object-cover"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-card/95 via-card/50 to-transparent" })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-amber-400" }) }) }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] font-medium text-foreground mb-1", children: item.megaMenu.cta.title }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-foreground/40 leading-relaxed mb-3", children: item.megaMenu.cta.description }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-[12px] font-medium text-amber-400", children: [
                                item.label === "Product" ? "Watch demo" : item.label === "Solutions" ? "View case studies" : "Get started",
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
        transition: { duration: 0.2 },
        className: "fixed inset-0 z-40 bg-background lg:hidden",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full overflow-y-auto pt-[72px] pb-safe", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-8 space-y-2", children: [
          navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: item.megaMenu ? /* @__PURE__ */ jsxRuntimeExports.jsx(MobileMenuSection, { item, onClose: () => setIsMobileMenuOpen(false) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: item.href,
              className: "flex items-center h-12 text-[15px] font-medium text-foreground/80",
              onClick: () => setIsMobileMenuOpen(false),
              children: item.label
            }
          ) }, item.label)),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-8 mt-6 border-t border-border space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://app.ozzios.com/sign-in",
                className: "flex items-center justify-center h-12 text-[14px] font-medium text-foreground/60 rounded-xl border border-border hover:bg-muted transition-colors",
                onClick: () => setIsMobileMenuOpen(false),
                children: "Sign in"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "lg",
                asChild: true,
                className: "w-full h-12 text-[14px] font-medium dark:bg-white dark:text-[#0A0A0B] bg-[#0A0A0B] text-white hover:opacity-90 rounded-full",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://app.ozzios.com/sign-up", onClick: () => setIsMobileMenuOpen(false), children: [
                  "Get started",
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
          "flex items-center justify-between w-full h-12 text-[15px] font-medium transition-colors",
          isOpen ? "text-foreground" : "text-foreground/80"
        ),
        children: [
          item.label,
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: cn(
            "h-4 w-4 text-foreground/30 transition-transform duration-200",
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
        transition: { duration: 0.2 },
        className: "overflow-hidden",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-3 pl-4 space-y-6 border-l border-border", children: item.megaMenu.sections.map((section, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          section.title && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-semibold text-foreground/30 uppercase tracking-[0.15em] mb-3", children: section.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: section.items.map((subItem) => {
            const Icon = subItem.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: subItem.href,
                className: "flex items-center gap-3 py-2.5 text-foreground/50 hover:text-foreground transition-colors",
                onClick: onClose,
                children: [
                  Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px]", children: subItem.label })
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
      { label: "AI Agents", href: "#agents" },
      { label: "Workflows", href: "#workflows" },
      { label: "Channels", href: "#channels" },
      { label: "CRM", href: "#crm" },
      { label: "Marketing Suite", href: "#marketing" },
      { label: "Pricing", href: "/pricing" }
    ]
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Blog", href: "/blog" },
      { label: "Changelog", href: "/changelog" },
      { label: "API Reference", href: "/docs/api" }
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
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative border-t border-border bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none",
        style: {
          background: "radial-gradient(ellipse at center top, rgba(251, 146, 60, 0.03) 0%, transparent 70%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-16 lg:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 md:col-span-4 lg:col-span-1 lg:pr-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-block transition-opacity hover:opacity-80", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/images/dark-theme-logo.svg",
              alt: "OzziOS",
              className: "h-6 w-auto"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-[13px] leading-relaxed text-foreground/30 max-w-xs", children: "The AI-powered operating system for marketing agencies." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex items-center gap-4", children: socialLinks.map((social) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: social.href,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-foreground/20 hover:text-foreground/60 transition-colors",
              "aria-label": social.label,
              children: social.icon
            },
            social.label
          )) })
        ] }),
        Object.entries(footerLinks).map(([key, section]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground/40 mb-5", children: section.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: section.links.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: link.href,
              className: "text-[13px] text-foreground/30 hover:text-foreground transition-colors",
              children: link.label
            }
          ) }, link.label)) })
        ] }, key))
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/[0.06] py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-between gap-4 sm:flex-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-foreground/20", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " OzziOS. All rights reserved."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-emerald-500" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-foreground/30", children: "All systems operational" })
        ] })
      ] }) })
    ] })
  ] });
}
const AudienceContext = reactExports.createContext(null);
function AudienceProvider({ children, defaultAudience = "business" }) {
  const [audience, setAudienceState] = reactExports.useState(defaultAudience);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const urlAudience = params.get("audience");
    if (urlAudience === "business" || urlAudience === "agency") {
      setAudienceState(urlAudience);
    }
  }, []);
  const setAudience = reactExports.useCallback((newAudience) => {
    setAudienceState(newAudience);
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    url.searchParams.set("audience", newAudience);
    window.history.replaceState({}, "", url.toString());
  }, []);
  const toggleAudience = reactExports.useCallback(() => {
    setAudience(audience === "business" ? "agency" : "business");
  }, [audience, setAudience]);
  const value = {
    audience,
    setAudience,
    toggleAudience,
    isBusinessOwner: audience === "business",
    isAgency: audience === "agency"
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
      headline: ["What if you never had to", "hire an agency again?"],
      subheadline: "Your own AI marketing team. No retainers. No mystery. No middlemen.",
      subtext: "Finally see exactly what your marketing team is doing, 24/7.",
      stats: [
        { value: "14", label: "AI Employees" },
        { value: "24/7", label: "Coverage" },
        { value: "$0", label: "Retainers" },
        { value: "100%", label: "Transparency" }
      ]
    },
    bento: {
      sectionLabel: "Your Marketing Team",
      headline: ["Cancel your agency.", "Keep the results."],
      subheadline: "Stop paying for a black box. Your AI team shows you exactly what they're doing.",
      cards: {
        aiWorkforce: {
          badge: "Your Team",
          title: "A team that works for you",
          description: "Not an agency that treats you like a line item. AI employees who actually show you the work."
        },
        tools: {
          title: "No more agency tools",
          description: "Everything an agency uses—SEO, content, social, ads—now yours to see and control."
        },
        communication: {
          title: "Talk to your team directly",
          description: "Skip the account manager. Ask questions, request changes, see results instantly."
        },
        workflows: {
          title: "Marketing on autopilot",
          description: "Set it and forget it. Campaigns run while you sleep. Reports arrive automatically."
        },
        crm: {
          title: "Your customers, your data",
          description: "No more wondering what the agency knows. All customer data stays with you."
        },
        marketing: {
          title: "Every channel covered",
          description: "Email, social, ads, SEO—all in one place. No more juggling vendors."
        },
        multiTenant: {
          title: "One dashboard, total control",
          description: "See everything your marketing is doing in one place. Finally."
        },
        security: {
          title: "Your data stays yours",
          description: "Unlike agencies, we don't own your data. You do. Always."
        }
      }
    },
    stats: {
      sectionLabel: "The bottom line",
      headline: ["Real savings", "you can measure"],
      stats: [
        { value: 85, suffix: "%", label: "Less Spent", description: "vs. agency retainers" },
        { value: 24, suffix: "/7", label: "Availability", description: "No business hours" },
        { value: 100, suffix: "%", label: "Transparency", description: "See all the work" },
        { value: 0, suffix: "", label: "Surprises", description: "No hidden fees" }
      ],
      socialProof: "Join 500+ business owners"
    },
    calculator: {
      defaultTab: "agency",
      tabs: [
        { id: "agency", label: "Agency Costs", description: "See what you're really paying for black-box retainers" },
        { id: "tools", label: "Tool Costs", description: "Cancel subscriptions and consolidate" }
      ]
    },
    agents: {
      sectionLabel: "Your AI Team",
      headline: ["Meet your new team.", "They actually show you their work."],
      subheadline: "Unlike agencies, you see exactly what each team member does—every task, every decision."
    },
    faq: [
      {
        question: "Is this really cheaper than an agency?",
        answer: "Significantly. Agencies charge $3-15K/month for work you can't see. With OzziOS, you get a full AI marketing team—SEO, content, social, ads—for a fraction of that. And you see exactly what they do."
      },
      {
        question: "Can AI really do what an agency does?",
        answer: "For the repetitive, process-driven work? Yes—and often better. Site audits, content drafts, social scheduling, performance reports. Your AI team handles these 24/7 without the back-and-forth."
      },
      {
        question: "Will I finally understand what's happening with my marketing?",
        answer: "That's the whole point. Every action, every piece of content, every decision is logged and visible. No more mystery reports. No more wondering what you're paying for."
      },
      {
        question: "What if I need human help?",
        answer: "Your AI team handles the heavy lifting, but you're always in control. Set up approval workflows for important decisions. Our support team is here when you need guidance."
      },
      {
        question: "How do I train the AI on my brand?",
        answer: "Share examples, provide feedback, and your AI team learns. They maintain persistent memory of your preferences, writing style, and business details. The more you work with them, the better they get."
      },
      {
        question: "Can I try it before committing?",
        answer: "Absolutely. Start with 50 free credits—enough to test real workflows. No credit card required. If you don't love it, just walk away."
      }
    ],
    cta: {
      badge: "50 Free Credits",
      headline: ["Fire your agency.", "Hire your team."],
      subtext: "Your first AI employee is free. No credit card. Start building a marketing team that actually works for you.",
      primaryButton: "Get started for free",
      secondaryButton: "See how it works"
    },
    howItWorks: {
      sectionLabel: "How it works",
      headline: ["The agency runaround", "ends here."],
      subheadline: "Stop paying for mystery retainers. Stop waiting for callbacks. Start seeing exactly what your marketing team does.",
      steps: [
        {
          number: "01",
          title: "Fire your agency today",
          description: "Stop paying for black-box retainers. Set up your AI marketing team in minutes and own the results.",
          benefits: ["5-minute setup", "See everything your AI does"]
        },
        {
          number: "02",
          title: "Meet your new team",
          description: "14 AI employees join your business. They learn your brand, handle your marketing, and show you every step.",
          benefits: ["Full transparency", "No hidden work"]
        },
        {
          number: "03",
          title: "Marketing runs while you sleep",
          description: "Campaigns launch automatically. Reports arrive in your inbox. You focus on running your business.",
          benefits: ["24/7 marketing", "No more waiting"]
        },
        {
          number: "04",
          title: "Grow without the agency tax",
          description: "Scale your marketing without scaling your retainer. More results, less overhead.",
          benefits: ["Flat pricing", "No surprise invoices"]
        }
      ]
    },
    testimonials: {
      sectionLabel: "Testimonials",
      headline: ["They fired their agencies.", "Here's why."],
      subheadline: "Real stories from business owners who took back control of their marketing.",
      items: [
        {
          name: "Marcus Chen",
          role: "Owner",
          company: "Chen's Auto Group",
          content: "I fired my agency after 2 weeks on OzziOS. Not because the AI is better—but because I can finally see what's actually happening. No more black-box retainers. I own my marketing now.",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format"
        },
        {
          name: "Sarah Mitchell",
          role: "Owner",
          company: "Mitchell Dental",
          content: "My agency charged $5K/month and I never knew what they were doing. Now I see every blog post, every social update, every SEO fix. Same results, fraction of the cost.",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&auto=format"
        },
        {
          name: "David Park",
          role: "Founder",
          company: "Park Home Services",
          content: "I used to wait days for my agency to respond. Now I ask my AI team a question and get an answer in seconds. It's like having employees who actually care about my business.",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&auto=format"
        },
        {
          name: "Emily Rodriguez",
          role: "Owner",
          company: "Rodriguez Real Estate",
          content: "The agency never understood my market. My AI team learned my brand voice in a day and now writes better listing descriptions than I do. Complete game changer.",
          image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&auto=format"
        },
        {
          name: "Jessica Williams",
          role: "Owner",
          company: "Williams Fitness",
          content: "I used to spend Sunday nights approving content for Monday. Now my AI team has everything ready before I wake up. I actually have weekends again.",
          image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&auto=format"
        },
        {
          name: "Alex Thompson",
          role: "Owner",
          company: "Thompson Legal",
          content: "Cancelled my agency and 4 marketing tools. One platform does it all. The cost savings paid for OzziOS in the first week—and the results are better.",
          image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&auto=format"
        }
      ],
      trustStats: [
        { value: "4.9/5", label: "Average rating" },
        { value: "500+", label: "Business owners" },
        { value: "98%", label: "Would recommend" }
      ]
    }
  },
  agency: {
    hero: {
      headline: ["What if you never", "had to hire again?"],
      subheadline: "14 AI employees. Working 24/7. They never quit, never call in sick, and never take your best clients when they leave.",
      subtext: "Run a 100-person agency with 35 people.",
      stats: [
        { value: "65%", label: "Fewer Hires" },
        { value: "24/7", label: "Coverage" },
        { value: "$0", label: "Turnover Cost" },
        { value: "∞", label: "Memory" }
      ]
    },
    bento: {
      sectionLabel: "Platform",
      headline: ["Cancel 8+ subscriptions.", "One platform does it all."],
      subheadline: "Stop paying for tools that don't talk to each other. Your AI team works in one unified workspace.",
      cards: {
        aiWorkforce: {
          badge: "AI Workforce",
          title: "Employees who never quit",
          description: "14 AI employees working 24/7. They remember everything, never call in sick, and never take your best clients when they leave."
        },
        tools: {
          title: "No more tool switching",
          description: "77+ tools built in. Tasks, scheduling, reports, memory—one platform, zero tab switching."
        },
        communication: {
          title: "Your AI team, always online",
          description: "Chat with AI employees like Slack. They respond instantly, 24/7, 365."
        },
        workflows: {
          title: "Work that happens while you sleep",
          description: "Automate anything. Campaigns run at 3am. Reports generate overnight. You wake up to results."
        },
        crm: {
          title: "Never lose a lead again",
          description: "AI remembers every conversation, every preference, every detail. Institutional memory that never walks out."
        },
        marketing: {
          title: "Cancel 4 subscriptions",
          description: "Email, social, ads—all in one. Stop paying for Mailchimp, Hootsuite, and the rest."
        },
        multiTenant: {
          title: "One dashboard, all clients",
          description: "Unlimited sub-accounts. See everything in one place. No more juggling logins."
        },
        security: {
          title: "AI you can trust",
          description: "Enterprise-grade safety. Your data stays yours. SOC 2 compliant."
        }
      }
    },
    stats: {
      sectionLabel: "The bottom line",
      headline: ["Real impact you can", "measure"],
      stats: [
        { value: 40, suffix: "+", label: "Hours Saved", description: "Every single week" },
        { value: 15, suffix: "-25K", label: "Saved Per Hire", description: "You don't have to make" },
        { value: 8, suffix: "+", label: "Tools Replaced", description: "Cancel them all" },
        { value: 0, suffix: "%", label: "Turnover", description: "They never quit" }
      ],
      socialProof: "Join 500+ agencies"
    },
    calculator: {
      defaultTab: "employees",
      tabs: [
        { id: "employees", label: "Employee Costs", description: "Stop the hiring treadmill" },
        { id: "agency", label: "Agency Alternative", description: "Compare to outsourcing" },
        { id: "tools", label: "Tool Consolidation", description: "Cancel 8+ subscriptions" }
      ]
    },
    agents: {
      sectionLabel: "AI Workforce",
      headline: ["Meet your new team.", "They never ask for a raise."],
      subheadline: "They learn your brand, remember every conversation, and work around the clock without overtime."
    },
    faq: [
      {
        question: "Can AI really replace my employees?",
        answer: "Not entirely—but it can replace the repetitive, time-consuming work that burns out your best people. Our AI employees handle SEO audits, content drafts, data analysis, and campaign management 24/7. Your human team focuses on strategy, relationships, and the creative work that actually needs a human touch."
      },
      {
        question: "What happens to institutional knowledge when employees leave?",
        answer: "That's exactly the problem we solve. When your best people leave, they take years of knowledge with them. AI employees have infinite memory—they remember every client conversation, every brand guideline, every campaign that worked. Knowledge stays in your business forever."
      },
      {
        question: "How do I train the AI on my brand voice?",
        answer: "Each AI agent learns your brand through usage. Share examples, provide feedback, and the agents adapt. They maintain persistent memory of your preferences, writing style, and client-specific details. The more you work with them, the better they get."
      },
      {
        question: "Is this cheaper than hiring an agency?",
        answer: "Significantly. Agencies charge $5-15K/month for work you can't see. With OzziOS, you own the AI workforce—no retainers, no black boxes. You see exactly what your AI is doing, and you only pay for what you use."
      },
      {
        question: "Can I see what the AI is doing?",
        answer: "Complete transparency. Every action, every decision, every piece of content is logged and visible. Unlike agencies that send monthly reports, you see work happening in real-time. Approve actions before they execute, or let AI run autonomously—your choice."
      },
      {
        question: "What if I need human help?",
        answer: "AI handles the heavy lifting, but you're always in control. Set up approval workflows for critical actions. The AI flags when it needs human input. And our support team is here when you need guidance on getting the most from your AI workforce."
      },
      {
        question: "How many tools can I cancel?",
        answer: "Most clients cancel 8+ subscriptions after switching. OzziOS replaces your CRM, email marketing, social scheduling, project management, SEO tools, analytics platforms, and more. One login, one invoice, one platform."
      },
      {
        question: "What's the catch with the free trial?",
        answer: "No catch. Start with 50 free credits—enough to test real workflows. No credit card required. No automatic billing. If you don't love it, just walk away. We're confident you'll stay."
      }
    ],
    cta: {
      badge: "50 Free Credits",
      headline: ["Stop paying for humans", "who leave."],
      subtext: "Your first AI employee is free. No credit card. Start building a team that stays forever.",
      primaryButton: "Get started for free",
      secondaryButton: "Talk to sales"
    },
    howItWorks: {
      sectionLabel: "How it works",
      headline: ["The hiring treadmill", "stops here."],
      subheadline: "Stop paying $15-25K per hire. Stop losing institutional knowledge. Start building a team that stays forever.",
      steps: [
        {
          number: "01",
          title: "Fire your agency today",
          description: "Stop paying for black-box retainers. Set up your AI workforce in minutes and own the results.",
          benefits: ["5-minute setup", "See everything your AI does"]
        },
        {
          number: "02",
          title: "Hire employees who never leave",
          description: "14 AI employees join your team. They learn your brand, remember everything, and never take clients when they go.",
          benefits: ["$0 turnover cost", "Infinite institutional memory"]
        },
        {
          number: "03",
          title: "Work runs while you sleep",
          description: "Campaigns launch at 3am. Reports generate overnight. You wake up to results, not to-do lists.",
          benefits: ["24/7 automation", "No night shifts"]
        },
        {
          number: "04",
          title: "Grow without the hiring pain",
          description: "Scale revenue without scaling headcount. Add clients, not overhead.",
          benefits: ["Revenue not capped by seats", "65% fewer hires"]
        }
      ]
    },
    testimonials: {
      sectionLabel: "Testimonials",
      headline: ["They stopped hiring.", "Here's why."],
      subheadline: "Real stories from agencies who broke free from the hiring treadmill.",
      items: [
        {
          name: "Sarah Mitchell",
          role: "CEO",
          company: "GrowthLab Agency",
          content: "We stopped hiring 6 months ago. Our AI team handles everything our junior staff used to do—and they never call in sick or quit for a competitor. We're doing 3x the work with the same headcount.",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&auto=format"
        },
        {
          name: "Marcus Chen",
          role: "Founder",
          company: "Digital Edge",
          content: "I fired my agency after 2 weeks on OzziOS. Not because the AI is better—but because I can finally see what's actually happening. No more black-box retainers. I own my marketing now.",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format"
        },
        {
          name: "Emily Rodriguez",
          role: "Operations Director",
          company: "Spark Creative",
          content: "Our best account manager left last year and took years of client knowledge with her. Never again. Every conversation, every preference, every brand detail—it all stays in OzziOS forever.",
          image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&auto=format"
        },
        {
          name: "David Park",
          role: "Co-Founder",
          company: "Velocity Marketing",
          content: 'Hiring costs us $20K+ per employee. Training takes months. Then they leave. Our AI employees cost a fraction of that, learn in days, and the only "turnover" is version updates that make them better.',
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&auto=format"
        },
        {
          name: "Jessica Williams",
          role: "Managing Partner",
          company: "Apex Digital",
          content: "I used to spend Sunday nights reviewing reports for Monday meetings. Now I wake up to finished dashboards, campaign analyses, and content drafts. Work actually happens while I sleep.",
          image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&auto=format"
        },
        {
          name: "Alex Thompson",
          role: "CEO",
          company: "NorthStar Agency",
          content: "Cancelled Mailchimp, Hootsuite, SEMrush, Airtable, and 4 other tools. One platform, one invoice. The cost savings alone paid for OzziOS in the first month—and that's before the AI even did anything.",
          image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&auto=format"
        }
      ],
      trustStats: [
        { value: "4.9/5", label: "Average rating" },
        { value: "500+", label: "Agencies" },
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
        className: "fixed inset-0 pointer-events-none z-0 opacity-[0.015]",
        style: {
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 pointer-events-none z-0",
        style: {
          background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.03), transparent)"
        }
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
  AnimatePresence as A,
  Bot as B,
  ChevronDown as C,
  FileText as F,
  LandingLayout as L,
  MessageSquare as M,
  Users as U,
  Workflow as W,
  audienceContent as a,
  ChartColumn as b,
  useAudience as u
};
