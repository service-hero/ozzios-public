import { a as reactExports, n as jsxRuntimeExports } from "./worker-entry-02g-9CY0.js";
import { L as Link } from "./router-Dm0n1Eoz.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { S as Sparkles, a as BookOpen, B as Button, M as Menu } from "./button-B7Be5mSl.js";
import { c as createLucideIcon } from "./createLucideIcon-BGFFOEkq.js";
import { M as MotionConfigContext, i as isHTMLElement, u as useConstant, P as PresenceContext, c as usePresence, b as useIsomorphicLayoutEffect, L as LayoutGroupContext, A as ArrowRight, m as motion } from "./proxy-Di5wTO0d.js";
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
              className: "absolute top-[72px] left-0 right-0 hidden lg:flex justify-center pointer-events-none",
              onMouseEnter: () => setActiveMenu(activeMenu),
              onMouseLeave: () => setActiveMenu(null),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-auto mx-8 w-full max-w-[900px]", children: navItems.map((item) => {
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
                                Icon && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-lg bg-muted flex items-center justify-center shrink-0 group-hover:bg-muted/80 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-foreground/40 group-hover:text-foreground/60 transition-colors" }) }),
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
function LandingLayout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen w-full flex flex-col bg-background overflow-x-hidden", children: [
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
  ] });
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
  ChartColumn as a
};
