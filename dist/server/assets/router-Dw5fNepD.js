import { r as rootRouteId, i as invariant, t as trimPathLeft, j as joinPaths, a as reactExports, d as dummyMatchContext, m as matchContext, u as useRouterState, b as useRouter, c as requireReactDom, e as useForwardedRef, f as useIntersectionObserver, g as functionalUpdate, h as exactPathTest, k as removeTrailingSlash, l as deepEqual, R as React__default, n as jsxRuntimeExports, w as warning, o as isModuleNotFoundError, p as RouterCore, O as Outlet } from "./worker-entry-CPswMrD3.js";
const preloadWarning = "Error preloading route! ☝️";
class BaseRoute {
  constructor(options) {
    this.init = (opts) => {
      this.originalIndex = opts.originalIndex;
      const options2 = this.options;
      const isRoot = !options2?.path && !options2?.id;
      this.parentRoute = this.options.getParentRoute?.();
      if (isRoot) {
        this._path = rootRouteId;
      } else if (!this.parentRoute) {
        invariant(
          false
        );
      }
      let path = isRoot ? rootRouteId : options2?.path;
      if (path && path !== "/") {
        path = trimPathLeft(path);
      }
      const customId = options2?.id || path;
      let id = isRoot ? rootRouteId : joinPaths([
        this.parentRoute.id === rootRouteId ? "" : this.parentRoute.id,
        customId
      ]);
      if (path === rootRouteId) {
        path = "/";
      }
      if (id !== rootRouteId) {
        id = joinPaths(["/", id]);
      }
      const fullPath = id === rootRouteId ? "/" : joinPaths([this.parentRoute.fullPath, path]);
      this._path = path;
      this._id = id;
      this._fullPath = fullPath;
      this._to = fullPath;
    };
    this.addChildren = (children) => {
      return this._addFileChildren(children);
    };
    this._addFileChildren = (children) => {
      if (Array.isArray(children)) {
        this.children = children;
      }
      if (typeof children === "object" && children !== null) {
        this.children = Object.values(children);
      }
      return this;
    };
    this._addFileTypes = () => {
      return this;
    };
    this.updateLoader = (options2) => {
      Object.assign(this.options, options2);
      return this;
    };
    this.update = (options2) => {
      Object.assign(this.options, options2);
      return this;
    };
    this.lazy = (lazyFn) => {
      this.lazyFn = lazyFn;
      return this;
    };
    this.options = options || {};
    this.isRoot = !options?.getParentRoute;
    if (options?.id && options?.path) {
      throw new Error(`Route cannot have both an 'id' and a 'path' option.`);
    }
  }
  get to() {
    return this._to;
  }
  get id() {
    return this._id;
  }
  get path() {
    return this._path;
  }
  get fullPath() {
    return this._fullPath;
  }
}
class BaseRootRoute extends BaseRoute {
  constructor(options) {
    super(options);
  }
}
function useMatch(opts) {
  const nearestMatchId = reactExports.useContext(
    opts.from ? dummyMatchContext : matchContext
  );
  const matchSelection = useRouterState({
    select: (state) => {
      const match = state.matches.find(
        (d) => opts.from ? opts.from === d.routeId : d.id === nearestMatchId
      );
      invariant(
        !((opts.shouldThrow ?? true) && !match),
        `Could not find ${opts.from ? `an active match from "${opts.from}"` : "a nearest match!"}`
      );
      if (match === void 0) {
        return void 0;
      }
      return opts.select ? opts.select(match) : match;
    },
    structuralSharing: opts.structuralSharing
  });
  return matchSelection;
}
function useLoaderData(opts) {
  return useMatch({
    from: opts.from,
    strict: opts.strict,
    structuralSharing: opts.structuralSharing,
    select: (s) => {
      return opts.select ? opts.select(s.loaderData) : s.loaderData;
    }
  });
}
function useLoaderDeps(opts) {
  const { select, ...rest } = opts;
  return useMatch({
    ...rest,
    select: (s) => {
      return select ? select(s.loaderDeps) : s.loaderDeps;
    }
  });
}
function useParams(opts) {
  return useMatch({
    from: opts.from,
    shouldThrow: opts.shouldThrow,
    structuralSharing: opts.structuralSharing,
    strict: opts.strict,
    select: (match) => {
      const params = opts.strict === false ? match.params : match._strictParams;
      return opts.select ? opts.select(params) : params;
    }
  });
}
function useSearch(opts) {
  return useMatch({
    from: opts.from,
    strict: opts.strict,
    shouldThrow: opts.shouldThrow,
    structuralSharing: opts.structuralSharing,
    select: (match) => {
      return opts.select ? opts.select(match.search) : match.search;
    }
  });
}
function useNavigate(_defaultOpts) {
  const router2 = useRouter();
  return reactExports.useCallback(
    (options) => {
      return router2.navigate({
        ...options,
        from: options.from ?? _defaultOpts?.from
      });
    },
    [_defaultOpts?.from, router2]
  );
}
var reactDomExports = requireReactDom();
function useLinkProps(options, forwardedRef) {
  const router2 = useRouter();
  const [isTransitioning, setIsTransitioning] = reactExports.useState(false);
  const hasRenderFetched = reactExports.useRef(false);
  const innerRef = useForwardedRef(forwardedRef);
  const {
    // custom props
    activeProps,
    inactiveProps,
    activeOptions,
    to,
    preload: userPreload,
    preloadDelay: userPreloadDelay,
    hashScrollIntoView,
    replace,
    startTransition,
    resetScroll,
    viewTransition,
    // element props
    children,
    target,
    disabled,
    style,
    className,
    onClick,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    onTouchStart,
    ignoreBlocker,
    // prevent these from being returned
    params: _params,
    search: _search,
    hash: _hash,
    state: _state,
    mask: _mask,
    reloadDocument: _reloadDocument,
    unsafeRelative: _unsafeRelative,
    from: _from,
    _fromLocation,
    ...propsSafeToSpread
  } = options;
  const currentSearch = useRouterState({
    select: (s) => s.location.search,
    structuralSharing: true
  });
  const from = options.from;
  const _options = reactExports.useMemo(
    () => {
      return { ...options, from };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      router2,
      currentSearch,
      from,
      options._fromLocation,
      options.hash,
      options.to,
      options.search,
      options.params,
      options.state,
      options.mask,
      options.unsafeRelative
    ]
  );
  const next = reactExports.useMemo(
    () => router2.buildLocation({ ..._options }),
    [router2, _options]
  );
  const hrefOption = reactExports.useMemo(() => {
    if (disabled) {
      return void 0;
    }
    let href = next.maskedLocation ? next.maskedLocation.url.href : next.url.href;
    let external = false;
    if (router2.origin) {
      if (href.startsWith(router2.origin)) {
        href = router2.history.createHref(href.replace(router2.origin, "")) || "/";
      } else {
        external = true;
      }
    }
    return { href, external };
  }, [disabled, next.maskedLocation, next.url, router2.origin, router2.history]);
  const externalLink = reactExports.useMemo(() => {
    if (hrefOption?.external) {
      return hrefOption.href;
    }
    try {
      new URL(to);
      return to;
    } catch {
    }
    return void 0;
  }, [to, hrefOption]);
  const preload = options.reloadDocument || externalLink ? false : userPreload ?? router2.options.defaultPreload;
  const preloadDelay = userPreloadDelay ?? router2.options.defaultPreloadDelay ?? 0;
  const isActive = useRouterState({
    select: (s) => {
      if (externalLink) return false;
      if (activeOptions?.exact) {
        const testExact = exactPathTest(
          s.location.pathname,
          next.pathname,
          router2.basepath
        );
        if (!testExact) {
          return false;
        }
      } else {
        const currentPathSplit = removeTrailingSlash(
          s.location.pathname,
          router2.basepath
        );
        const nextPathSplit = removeTrailingSlash(
          next.pathname,
          router2.basepath
        );
        const pathIsFuzzyEqual = currentPathSplit.startsWith(nextPathSplit) && (currentPathSplit.length === nextPathSplit.length || currentPathSplit[nextPathSplit.length] === "/");
        if (!pathIsFuzzyEqual) {
          return false;
        }
      }
      if (activeOptions?.includeSearch ?? true) {
        const searchTest = deepEqual(s.location.search, next.search, {
          partial: !activeOptions?.exact,
          ignoreUndefined: !activeOptions?.explicitUndefined
        });
        if (!searchTest) {
          return false;
        }
      }
      if (activeOptions?.includeHash) {
        return s.location.hash === next.hash;
      }
      return true;
    }
  });
  const doPreload = reactExports.useCallback(() => {
    router2.preloadRoute({ ..._options }).catch((err) => {
      console.warn(err);
      console.warn(preloadWarning);
    });
  }, [router2, _options]);
  const preloadViewportIoCallback = reactExports.useCallback(
    (entry) => {
      if (entry?.isIntersecting) {
        doPreload();
      }
    },
    [doPreload]
  );
  useIntersectionObserver(
    innerRef,
    preloadViewportIoCallback,
    intersectionObserverOptions,
    { disabled: !!disabled || !(preload === "viewport") }
  );
  reactExports.useEffect(() => {
    if (hasRenderFetched.current) {
      return;
    }
    if (!disabled && preload === "render") {
      doPreload();
      hasRenderFetched.current = true;
    }
  }, [disabled, doPreload, preload]);
  const handleClick = (e) => {
    const elementTarget = e.currentTarget.getAttribute("target");
    const effectiveTarget = target !== void 0 ? target : elementTarget;
    if (!disabled && !isCtrlEvent(e) && !e.defaultPrevented && (!effectiveTarget || effectiveTarget === "_self") && e.button === 0) {
      e.preventDefault();
      reactDomExports.flushSync(() => {
        setIsTransitioning(true);
      });
      const unsub = router2.subscribe("onResolved", () => {
        unsub();
        setIsTransitioning(false);
      });
      router2.navigate({
        ..._options,
        replace,
        resetScroll,
        hashScrollIntoView,
        startTransition,
        viewTransition,
        ignoreBlocker
      });
    }
  };
  if (externalLink) {
    return {
      ...propsSafeToSpread,
      ref: innerRef,
      href: externalLink,
      ...children && { children },
      ...target && { target },
      ...disabled && { disabled },
      ...style && { style },
      ...className && { className },
      ...onClick && { onClick },
      ...onFocus && { onFocus },
      ...onMouseEnter && { onMouseEnter },
      ...onMouseLeave && { onMouseLeave },
      ...onTouchStart && { onTouchStart }
    };
  }
  const handleFocus = (_) => {
    if (disabled) return;
    if (preload) {
      doPreload();
    }
  };
  const handleTouchStart = handleFocus;
  const handleEnter = (e) => {
    if (disabled || !preload) return;
    if (!preloadDelay) {
      doPreload();
    } else {
      const eventTarget = e.target;
      if (timeoutMap.has(eventTarget)) {
        return;
      }
      const id = setTimeout(() => {
        timeoutMap.delete(eventTarget);
        doPreload();
      }, preloadDelay);
      timeoutMap.set(eventTarget, id);
    }
  };
  const handleLeave = (e) => {
    if (disabled || !preload || !preloadDelay) return;
    const eventTarget = e.target;
    const id = timeoutMap.get(eventTarget);
    if (id) {
      clearTimeout(id);
      timeoutMap.delete(eventTarget);
    }
  };
  const resolvedActiveProps = isActive ? functionalUpdate(activeProps, {}) ?? STATIC_ACTIVE_OBJECT : STATIC_EMPTY_OBJECT;
  const resolvedInactiveProps = isActive ? STATIC_EMPTY_OBJECT : functionalUpdate(inactiveProps, {}) ?? STATIC_EMPTY_OBJECT;
  const resolvedClassName = [
    className,
    resolvedActiveProps.className,
    resolvedInactiveProps.className
  ].filter(Boolean).join(" ");
  const resolvedStyle = (style || resolvedActiveProps.style || resolvedInactiveProps.style) && {
    ...style,
    ...resolvedActiveProps.style,
    ...resolvedInactiveProps.style
  };
  return {
    ...propsSafeToSpread,
    ...resolvedActiveProps,
    ...resolvedInactiveProps,
    href: hrefOption?.href,
    ref: innerRef,
    onClick: composeHandlers([onClick, handleClick]),
    onFocus: composeHandlers([onFocus, handleFocus]),
    onMouseEnter: composeHandlers([onMouseEnter, handleEnter]),
    onMouseLeave: composeHandlers([onMouseLeave, handleLeave]),
    onTouchStart: composeHandlers([onTouchStart, handleTouchStart]),
    disabled: !!disabled,
    target,
    ...resolvedStyle && { style: resolvedStyle },
    ...resolvedClassName && { className: resolvedClassName },
    ...disabled && STATIC_DISABLED_PROPS,
    ...isActive && STATIC_ACTIVE_PROPS,
    ...isTransitioning && STATIC_TRANSITIONING_PROPS
  };
}
const STATIC_EMPTY_OBJECT = {};
const STATIC_ACTIVE_OBJECT = { className: "active" };
const STATIC_DISABLED_PROPS = { role: "link", "aria-disabled": true };
const STATIC_ACTIVE_PROPS = { "data-status": "active", "aria-current": "page" };
const STATIC_TRANSITIONING_PROPS = { "data-transitioning": "transitioning" };
const timeoutMap = /* @__PURE__ */ new WeakMap();
const intersectionObserverOptions = {
  rootMargin: "100px"
};
const composeHandlers = (handlers) => (e) => {
  for (const handler of handlers) {
    if (!handler) continue;
    if (e.defaultPrevented) return;
    handler(e);
  }
};
const Link = reactExports.forwardRef(
  (props, ref) => {
    const { _asChild, ...rest } = props;
    const {
      type: _type,
      ref: innerRef,
      ...linkProps
    } = useLinkProps(rest, ref);
    const children = typeof rest.children === "function" ? rest.children({
      isActive: linkProps["data-status"] === "active"
    }) : rest.children;
    if (_asChild === void 0) {
      delete linkProps.disabled;
    }
    return reactExports.createElement(
      _asChild ? _asChild : "a",
      {
        ...linkProps,
        ref: innerRef
      },
      children
    );
  }
);
function isCtrlEvent(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
let Route$G = class Route extends BaseRoute {
  /**
   * @deprecated Use the `createRoute` function instead.
   */
  constructor(options) {
    super(options);
    this.useMatch = (opts) => {
      return useMatch({
        select: opts?.select,
        from: this.id,
        structuralSharing: opts?.structuralSharing
      });
    };
    this.useRouteContext = (opts) => {
      return useMatch({
        ...opts,
        from: this.id,
        select: (d) => opts?.select ? opts.select(d.context) : d.context
      });
    };
    this.useSearch = (opts) => {
      return useSearch({
        select: opts?.select,
        structuralSharing: opts?.structuralSharing,
        from: this.id
      });
    };
    this.useParams = (opts) => {
      return useParams({
        select: opts?.select,
        structuralSharing: opts?.structuralSharing,
        from: this.id
      });
    };
    this.useLoaderDeps = (opts) => {
      return useLoaderDeps({ ...opts, from: this.id });
    };
    this.useLoaderData = (opts) => {
      return useLoaderData({ ...opts, from: this.id });
    };
    this.useNavigate = () => {
      return useNavigate({ from: this.fullPath });
    };
    this.Link = React__default.forwardRef(
      (props, ref) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { ref, from: this.fullPath, ...props });
      }
    );
    this.$$typeof = /* @__PURE__ */ Symbol.for("react.memo");
  }
};
function createRoute(options) {
  return new Route$G(
    // TODO: Help us TypeChris, you're our only hope!
    options
  );
}
class RootRoute extends BaseRootRoute {
  /**
   * @deprecated `RootRoute` is now an internal implementation detail. Use `createRootRoute()` instead.
   */
  constructor(options) {
    super(options);
    this.useMatch = (opts) => {
      return useMatch({
        select: opts?.select,
        from: this.id,
        structuralSharing: opts?.structuralSharing
      });
    };
    this.useRouteContext = (opts) => {
      return useMatch({
        ...opts,
        from: this.id,
        select: (d) => opts?.select ? opts.select(d.context) : d.context
      });
    };
    this.useSearch = (opts) => {
      return useSearch({
        select: opts?.select,
        structuralSharing: opts?.structuralSharing,
        from: this.id
      });
    };
    this.useParams = (opts) => {
      return useParams({
        select: opts?.select,
        structuralSharing: opts?.structuralSharing,
        from: this.id
      });
    };
    this.useLoaderDeps = (opts) => {
      return useLoaderDeps({ ...opts, from: this.id });
    };
    this.useLoaderData = (opts) => {
      return useLoaderData({ ...opts, from: this.id });
    };
    this.useNavigate = () => {
      return useNavigate({ from: this.fullPath });
    };
    this.Link = React__default.forwardRef(
      (props, ref) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { ref, from: this.fullPath, ...props });
      }
    );
    this.$$typeof = /* @__PURE__ */ Symbol.for("react.memo");
  }
}
function createRootRoute(options) {
  return new RootRoute(options);
}
function createFileRoute(path) {
  if (typeof path === "object") {
    return new FileRoute(path, {
      silent: true
    }).createRoute(path);
  }
  return new FileRoute(path, {
    silent: true
  }).createRoute;
}
class FileRoute {
  constructor(path, _opts) {
    this.path = path;
    this.createRoute = (options) => {
      warning(
        this.silent
      );
      const route = createRoute(options);
      route.isRoot = false;
      return route;
    };
    this.silent = _opts?.silent;
  }
}
class LazyRoute {
  constructor(opts) {
    this.useMatch = (opts2) => {
      return useMatch({
        select: opts2?.select,
        from: this.options.id,
        structuralSharing: opts2?.structuralSharing
      });
    };
    this.useRouteContext = (opts2) => {
      return useMatch({
        from: this.options.id,
        select: (d) => opts2?.select ? opts2.select(d.context) : d.context
      });
    };
    this.useSearch = (opts2) => {
      return useSearch({
        select: opts2?.select,
        structuralSharing: opts2?.structuralSharing,
        from: this.options.id
      });
    };
    this.useParams = (opts2) => {
      return useParams({
        select: opts2?.select,
        structuralSharing: opts2?.structuralSharing,
        from: this.options.id
      });
    };
    this.useLoaderDeps = (opts2) => {
      return useLoaderDeps({ ...opts2, from: this.options.id });
    };
    this.useLoaderData = (opts2) => {
      return useLoaderData({ ...opts2, from: this.options.id });
    };
    this.useNavigate = () => {
      const router2 = useRouter();
      return useNavigate({ from: router2.routesById[this.options.id].fullPath });
    };
    this.options = opts;
    this.$$typeof = /* @__PURE__ */ Symbol.for("react.memo");
  }
}
function createLazyFileRoute(id) {
  if (typeof id === "object") {
    return new LazyRoute(id);
  }
  return (opts) => new LazyRoute({ id, ...opts });
}
function lazyRouteComponent(importer, exportName) {
  let loadPromise;
  let comp;
  let error;
  let reload;
  const load = () => {
    if (!loadPromise) {
      loadPromise = importer().then((res) => {
        loadPromise = void 0;
        comp = res[exportName];
      }).catch((err) => {
        error = err;
        if (isModuleNotFoundError(error)) {
          if (error instanceof Error && typeof window !== "undefined" && typeof sessionStorage !== "undefined") {
            const storageKey = `tanstack_router_reload:${error.message}`;
            if (!sessionStorage.getItem(storageKey)) {
              sessionStorage.setItem(storageKey, "1");
              reload = true;
            }
          }
        }
      });
    }
    return loadPromise;
  };
  const lazyComp = function Lazy(props) {
    if (reload) {
      window.location.reload();
      throw new Promise(() => {
      });
    }
    if (error) {
      throw error;
    }
    if (!comp) {
      if (reactExports.use) {
        reactExports.use(load());
      } else {
        throw load();
      }
    }
    return reactExports.createElement(comp, props);
  };
  lazyComp.preload = load;
  return lazyComp;
}
const createRouter = (options) => {
  return new Router(options);
};
class Router extends RouterCore {
  constructor(options) {
    super(options);
  }
}
if (typeof globalThis !== "undefined") {
  globalThis.createFileRoute = createFileRoute;
  globalThis.createLazyFileRoute = createLazyFileRoute;
} else if (typeof window !== "undefined") {
  window.createFileRoute = createFileRoute;
  window.createLazyFileRoute = createLazyFileRoute;
}
function Asset({
  tag,
  attrs,
  children,
  nonce
}) {
  switch (tag) {
    case "title":
      return /* @__PURE__ */ jsxRuntimeExports.jsx("title", { ...attrs, suppressHydrationWarning: true, children });
    case "meta":
      return /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { ...attrs, suppressHydrationWarning: true });
    case "link":
      return /* @__PURE__ */ jsxRuntimeExports.jsx("link", { ...attrs, nonce, suppressHydrationWarning: true });
    case "style":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "style",
        {
          ...attrs,
          dangerouslySetInnerHTML: { __html: children },
          nonce
        }
      );
    case "script":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Script, { attrs, children });
    default:
      return null;
  }
}
function Script({
  attrs,
  children
}) {
  const router2 = useRouter();
  reactExports.useEffect(() => {
    if (attrs?.src) {
      const normSrc = (() => {
        try {
          const base = document.baseURI || window.location.href;
          return new URL(attrs.src, base).href;
        } catch {
          return attrs.src;
        }
      })();
      const existingScript = Array.from(
        document.querySelectorAll("script[src]")
      ).find((el) => el.src === normSrc);
      if (existingScript) {
        return;
      }
      const script = document.createElement("script");
      for (const [key, value] of Object.entries(attrs)) {
        if (key !== "suppressHydrationWarning" && value !== void 0 && value !== false) {
          script.setAttribute(
            key,
            typeof value === "boolean" ? "" : String(value)
          );
        }
      }
      document.head.appendChild(script);
      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
    if (typeof children === "string") {
      const typeAttr = typeof attrs?.type === "string" ? attrs.type : "text/javascript";
      const nonceAttr = typeof attrs?.nonce === "string" ? attrs.nonce : void 0;
      const existingScript = Array.from(
        document.querySelectorAll("script:not([src])")
      ).find((el) => {
        if (!(el instanceof HTMLScriptElement)) return false;
        const sType = el.getAttribute("type") ?? "text/javascript";
        const sNonce = el.getAttribute("nonce") ?? void 0;
        return el.textContent === children && sType === typeAttr && sNonce === nonceAttr;
      });
      if (existingScript) {
        return;
      }
      const script = document.createElement("script");
      script.textContent = children;
      if (attrs) {
        for (const [key, value] of Object.entries(attrs)) {
          if (key !== "suppressHydrationWarning" && value !== void 0 && value !== false) {
            script.setAttribute(
              key,
              typeof value === "boolean" ? "" : String(value)
            );
          }
        }
      }
      document.head.appendChild(script);
      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
    return void 0;
  }, [attrs, children]);
  if (!router2.isServer) {
    const { src, ...rest } = attrs || {};
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "script",
      {
        suppressHydrationWarning: true,
        dangerouslySetInnerHTML: { __html: "" },
        ...rest
      }
    );
  }
  if (attrs?.src && typeof attrs.src === "string") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("script", { ...attrs, suppressHydrationWarning: true });
  }
  if (typeof children === "string") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "script",
      {
        ...attrs,
        dangerouslySetInnerHTML: { __html: children },
        suppressHydrationWarning: true
      }
    );
  }
  return null;
}
const useTags = () => {
  const router2 = useRouter();
  const nonce = router2.options.ssr?.nonce;
  const routeMeta = useRouterState({
    select: (state) => {
      return state.matches.map((match) => match.meta).filter(Boolean);
    }
  });
  const meta = reactExports.useMemo(() => {
    const resultMeta = [];
    const metaByAttribute = {};
    let title;
    for (let i = routeMeta.length - 1; i >= 0; i--) {
      const metas = routeMeta[i];
      for (let j = metas.length - 1; j >= 0; j--) {
        const m = metas[j];
        if (!m) continue;
        if (m.title) {
          if (!title) {
            title = {
              tag: "title",
              children: m.title
            };
          }
        } else {
          const attribute = m.name ?? m.property;
          if (attribute) {
            if (metaByAttribute[attribute]) {
              continue;
            } else {
              metaByAttribute[attribute] = true;
            }
          }
          resultMeta.push({
            tag: "meta",
            attrs: {
              ...m,
              nonce
            }
          });
        }
      }
    }
    if (title) {
      resultMeta.push(title);
    }
    if (nonce) {
      resultMeta.push({
        tag: "meta",
        attrs: {
          property: "csp-nonce",
          content: nonce
        }
      });
    }
    resultMeta.reverse();
    return resultMeta;
  }, [routeMeta, nonce]);
  const links = useRouterState({
    select: (state) => {
      const constructed = state.matches.map((match) => match.links).filter(Boolean).flat(1).map((link) => ({
        tag: "link",
        attrs: {
          ...link,
          nonce
        }
      }));
      const manifest = router2.ssr?.manifest;
      const assets = state.matches.map((match) => manifest?.routes[match.routeId]?.assets ?? []).filter(Boolean).flat(1).filter((asset) => asset.tag === "link").map(
        (asset) => ({
          tag: "link",
          attrs: {
            ...asset.attrs,
            suppressHydrationWarning: true,
            nonce
          }
        })
      );
      return [...constructed, ...assets];
    },
    structuralSharing: true
  });
  const preloadLinks = useRouterState({
    select: (state) => {
      const preloadLinks2 = [];
      state.matches.map((match) => router2.looseRoutesById[match.routeId]).forEach(
        (route) => router2.ssr?.manifest?.routes[route.id]?.preloads?.filter(Boolean).forEach((preload) => {
          preloadLinks2.push({
            tag: "link",
            attrs: {
              rel: "modulepreload",
              href: preload,
              nonce
            }
          });
        })
      );
      return preloadLinks2;
    },
    structuralSharing: true
  });
  const styles = useRouterState({
    select: (state) => state.matches.map((match) => match.styles).flat(1).filter(Boolean).map(({ children, ...attrs }) => ({
      tag: "style",
      attrs,
      children,
      nonce
    })),
    structuralSharing: true
  });
  const headScripts = useRouterState({
    select: (state) => state.matches.map((match) => match.headScripts).flat(1).filter(Boolean).map(({ children, ...script }) => ({
      tag: "script",
      attrs: {
        ...script,
        nonce
      },
      children
    })),
    structuralSharing: true
  });
  return uniqBy(
    [
      ...meta,
      ...preloadLinks,
      ...links,
      ...styles,
      ...headScripts
    ],
    (d) => {
      return JSON.stringify(d);
    }
  );
};
function HeadContent() {
  const tags = useTags();
  const router2 = useRouter();
  const nonce = router2.options.ssr?.nonce;
  return tags.map((tag) => /* @__PURE__ */ reactExports.createElement(Asset, { ...tag, key: `tsr-meta-${JSON.stringify(tag)}`, nonce }));
}
function uniqBy(arr, fn) {
  const seen = /* @__PURE__ */ new Set();
  return arr.filter((item) => {
    const key = fn(item);
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}
const Scripts = () => {
  const router2 = useRouter();
  const nonce = router2.options.ssr?.nonce;
  const assetScripts = useRouterState({
    select: (state) => {
      const assetScripts2 = [];
      const manifest = router2.ssr?.manifest;
      if (!manifest) {
        return [];
      }
      state.matches.map((match) => router2.looseRoutesById[match.routeId]).forEach(
        (route) => manifest.routes[route.id]?.assets?.filter((d) => d.tag === "script").forEach((asset) => {
          assetScripts2.push({
            tag: "script",
            attrs: { ...asset.attrs, nonce },
            children: asset.children
          });
        })
      );
      return assetScripts2;
    },
    structuralSharing: true
  });
  const { scripts } = useRouterState({
    select: (state) => ({
      scripts: state.matches.map((match) => match.scripts).flat(1).filter(Boolean).map(({ children, ...script }) => ({
        tag: "script",
        attrs: {
          ...script,
          suppressHydrationWarning: true,
          nonce
        },
        children
      }))
    }),
    structuralSharing: true
  });
  let serverBufferedScript = void 0;
  if (router2.serverSsr) {
    serverBufferedScript = router2.serverSsr.takeBufferedScripts();
  }
  const allScripts = [...scripts, ...assetScripts];
  if (serverBufferedScript) {
    allScripts.unshift(serverBufferedScript);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: allScripts.map((asset, i) => /* @__PURE__ */ reactExports.createElement(Asset, { ...asset, key: `tsr-scripts-${asset.tag}-${i}` })) });
};
const Route$F = createRootRoute({
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
const $$splitComponentImporter$E = () => import("./waitlist-business-CLqMxAsp.js");
const Route$E = createFileRoute("/waitlist-business")({
  component: lazyRouteComponent($$splitComponentImporter$E, "component"),
  head: () => createPageHead({
    title: "Business Waitlist",
    description: "Apply for early business access to OzziOS enterprise features.",
    path: "/waitlist-business",
    noindex: true
  })
});
const $$splitComponentImporter$D = () => import("./waitlist-DiYHa3y5.js");
const Route$D = createFileRoute("/waitlist")({
  component: lazyRouteComponent($$splitComponentImporter$D, "component"),
  head: () => createPageHead({
    title: "Join the Waitlist",
    description: "Get early access to OzziOS — the AI employee platform replacing marketing agencies.",
    path: "/waitlist"
  })
});
const $$splitComponentImporter$C = () => import("./tos-CGprat4Y.js");
const Route$C = createFileRoute("/tos")({
  component: lazyRouteComponent($$splitComponentImporter$C, "component"),
  head: () => createPageHead({
    title: "Terms of Service",
    description: "OzziOS terms of service and acceptable use policies.",
    path: "/tos"
  })
});
const $$splitComponentImporter$B = () => import("./security-OghTTV40.js");
const Route$B = createFileRoute("/security")({
  head: () => createPageHead({
    title: "Security",
    description: "Enterprise-grade encryption, GDPR compliance, workspace isolation, and 99.9% uptime SLA for your agency data.",
    path: "/security"
  }),
  component: lazyRouteComponent($$splitComponentImporter$B, "component")
});
const $$splitComponentImporter$A = () => import("./privacy-policy-BEuHnPoU.js");
const Route$A = createFileRoute("/privacy-policy")({
  component: lazyRouteComponent($$splitComponentImporter$A, "component"),
  head: () => createPageHead({
    title: "Privacy Policy",
    description: "How OzziOS collects, uses, and protects your data.",
    path: "/privacy-policy"
  })
});
const $$splitComponentImporter$z = () => import("./pricing-BfdqrRx5.js");
const Route$z = createFileRoute("/pricing")({
  head: () => createPageHead({
    title: "Pricing",
    description: "Plans from Starter to Business. 30+ AI agents, unlimited workflows, CRM, and full marketing suite.",
    path: "/pricing"
  }),
  component: lazyRouteComponent($$splitComponentImporter$z, "component")
});
const $$splitComponentImporter$y = () => import("./integrations-BJ5t7v_p.js");
const Route$y = createFileRoute("/integrations")({
  head: () => createPageHead({
    title: "Integrations",
    description: "Connect OzziOS to 77+ tools including Google, GoHighLevel, Stripe, Twilio, and more. Unify your marketing stack.",
    path: "/integrations"
  }),
  component: lazyRouteComponent($$splitComponentImporter$y, "component")
});
const $$splitComponentImporter$x = () => import("./data-deletion-BGJbu7Ug.js");
const Route$x = createFileRoute("/data-deletion")({
  component: lazyRouteComponent($$splitComponentImporter$x, "component"),
  head: () => createPageHead({
    title: "Data Deletion",
    description: "Request deletion of your OzziOS account and associated data.",
    path: "/data-deletion",
    noindex: true
  })
});
const $$splitComponentImporter$w = () => import("./contact-0T1XMqny.js");
const Route$w = createFileRoute("/contact")({
  head: () => createPageHead({
    title: "Contact Us",
    description: "Get in touch with the OzziOS team. Questions about AI agents, pricing, or enterprise plans — we're here to help.",
    path: "/contact"
  }),
  component: lazyRouteComponent($$splitComponentImporter$w, "component")
});
const $$splitComponentImporter$v = () => import("./changelog-KZ4oQG-l.js");
const Route$v = createFileRoute("/changelog")({
  head: () => createPageHead({
    title: "Changelog",
    description: "See what's new in OzziOS. Product updates, new AI agents, integrations, and platform improvements.",
    path: "/changelog"
  }),
  component: lazyRouteComponent($$splitComponentImporter$v, "component")
});
const $$splitComponentImporter$u = () => import("./careers-ClWfCCaT.js");
const Route$u = createFileRoute("/careers")({
  head: () => createPageHead({
    title: "Careers",
    description: "Join OzziOS and help build the future of AI-powered marketing. Remote-first with competitive pay and equity.",
    path: "/careers"
  }),
  component: lazyRouteComponent($$splitComponentImporter$u, "component")
});
const $$splitComponentImporter$t = () => import("./blog-B6HMmfBR.js");
const Route$t = createFileRoute("/blog")({
  component: lazyRouteComponent($$splitComponentImporter$t, "component")
});
const $$splitComponentImporter$s = () => import("./about-CEC16zDM.js");
const Route$s = createFileRoute("/about")({
  head: () => createPageHead({
    title: "About Us",
    description: "Meet the team behind OzziOS. Built by agency operators to replace marketing overhead with AI agents that work 24/7.",
    path: "/about"
  }),
  component: lazyRouteComponent($$splitComponentImporter$s, "component")
});
const $$splitComponentImporter$r = () => import("./index-DdQTzZbT.js").then((n) => n.i);
const Route$r = createFileRoute("/")({
  head: () => createPageHead({
    title: "Your First AI Employee",
    description: "The first agentic AI employee platform. 30+ specialized agents, unified CRM, workflows, and full marketing suite — starting free.",
    path: "/"
  }),
  component: lazyRouteComponent($$splitComponentImporter$r, "component")
});
const $$splitComponentImporter$q = () => import("./blog.index-DQBTcOUf.js");
const Route$q = createFileRoute("/blog/")({
  component: lazyRouteComponent($$splitComponentImporter$q, "component"),
  head: () => createPageHead({
    title: "Blog",
    description: "Insights on AI marketing, agency scaling, and product updates from the OzziOS team.",
    path: "/blog"
  })
});
const $$splitComponentImporter$p = () => import("./teams-DBCaBbGW.js");
const Route$p = createFileRoute("/solutions/teams")({
  head: () => createPageHead({
    title: "For Teams",
    description: "Multiply your team's output with AI employees that handle execution while humans focus on strategy.",
    path: "/solutions/teams"
  }),
  component: lazyRouteComponent($$splitComponentImporter$p, "component")
});
const $$splitComponentImporter$o = () => import("./solo-agencies-D-Q476rt.js");
const Route$o = createFileRoute("/solutions/solo-agencies")({
  head: () => createPageHead({
    title: "For Solo Agencies",
    description: "Run your entire agency with AI employees. A full marketing team without the headcount or overhead.",
    path: "/solutions/solo-agencies"
  }),
  component: lazyRouteComponent($$splitComponentImporter$o, "component")
});
const $$splitComponentImporter$n = () => import("./lead-generation-Dr5ilJnU.js");
const Route$n = createFileRoute("/solutions/lead-generation")({
  head: () => createPageHead({
    title: "Lead Generation",
    description: "AI-powered lead generation that works 24/7. Capture, qualify, and nurture leads across every channel.",
    path: "/solutions/lead-generation"
  }),
  component: lazyRouteComponent($$splitComponentImporter$n, "component")
});
const $$splitComponentImporter$m = () => import("./enterprise-hZtdvn1n.js");
const Route$m = createFileRoute("/solutions/enterprise")({
  head: () => createPageHead({
    title: "Enterprise",
    description: "Enterprise-grade AI employee platform. Custom agents, SSO, dedicated support, and unlimited workflows.",
    path: "/solutions/enterprise"
  }),
  component: lazyRouteComponent($$splitComponentImporter$m, "component")
});
const $$splitComponentImporter$l = () => import("./content-marketing-D8cRr797.js");
const Route$l = createFileRoute("/solutions/content-marketing")({
  head: () => createPageHead({
    title: "Content Marketing",
    description: "Scale content production with AI. Produce 10x more content without 10x the headcount.",
    path: "/solutions/content-marketing"
  }),
  component: lazyRouteComponent($$splitComponentImporter$l, "component")
});
const $$splitComponentImporter$k = () => import("./client-management-BFeOft7a.js");
const Route$k = createFileRoute("/solutions/client-management")({
  head: () => createPageHead({
    title: "Client Management",
    description: "Manage all agency clients in one platform. AI handles reporting, communication, and campaign execution.",
    path: "/solutions/client-management"
  }),
  component: lazyRouteComponent($$splitComponentImporter$k, "component")
});
const $$splitComponentImporter$j = () => import("./workflows-sBGlpxmv.js");
const Route$j = createFileRoute("/features/workflows")({
  head: () => createPageHead({
    title: "Workflows",
    description: "Visual workflow builder with AI automation. Connect triggers, actions, and agents to automate any process.",
    path: "/features/workflows"
  }),
  component: lazyRouteComponent($$splitComponentImporter$j, "component")
});
const $$splitComponentImporter$i = () => import("./voice-agents-DHeZyZfl.js");
const Route$i = createFileRoute("/features/voice-agents")({
  head: () => createPageHead({
    title: "Voice Agents",
    description: "AI voice agents for inbound and outbound calls. Appointment booking, lead qualification, and support on autopilot.",
    path: "/features/voice-agents"
  }),
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const $$splitComponentImporter$h = () => import("./video-editor-f-pJB1b6.js");
const Route$h = createFileRoute("/features/video-editor")({
  head: () => createPageHead({
    title: "Video Editor",
    description: "AI video creation and editing. Marketing videos, social clips, and ads generated from text prompts.",
    path: "/features/video-editor"
  }),
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const $$splitComponentImporter$g = () => import("./tasks-Cz6atCMg.js");
const Route$g = createFileRoute("/features/tasks")({
  head: () => createPageHead({
    title: "Task Management",
    description: "AI-coordinated task management. Automatic assignment, priority tracking, and workflow integration.",
    path: "/features/tasks"
  }),
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import("./social-media-DkCm9AKM.js");
const Route$f = createFileRoute("/features/social-media")({
  head: () => createPageHead({
    title: "Social Media",
    description: "AI agents that create, schedule, and optimize social content across all platforms. Strategy to posting, automated.",
    path: "/features/social-media"
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./sms-campaigns-tCEM2jeH.js");
const Route$e = createFileRoute("/features/sms-campaigns")({
  head: () => createPageHead({
    title: "SMS Campaigns",
    description: "AI-powered text message campaigns with personalization, scheduling, and compliance built in.",
    path: "/features/sms-campaigns"
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./presentations-BIzKJthh.js");
const Route$d = createFileRoute("/features/presentations")({
  head: () => createPageHead({
    title: "Presentations",
    description: "AI-generated presentations and pitch decks. Professional slides from your content in minutes.",
    path: "/features/presentations"
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./knowledge-base-xjRj6vYB.js");
const Route$c = createFileRoute("/features/knowledge-base")({
  head: () => createPageHead({
    title: "Knowledge Base",
    description: "Create a self-service knowledge base. Help clients find answers and reduce support tickets with AI search.",
    path: "/features/knowledge-base"
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./forms-BNTjWVRX.js");
const Route$b = createFileRoute("/features/forms")({
  head: () => createPageHead({
    title: "Forms",
    description: "No-code form builder with automatic CRM sync, spam protection, and submission analytics. Embed with one line.",
    path: "/features/forms"
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./email-campaigns-YfAubUbn.js");
const Route$a = createFileRoute("/features/email-campaigns")({
  head: () => createPageHead({
    title: "Email Campaigns",
    description: "AI-managed email marketing. Automated sequences, personalization, analytics, and deliverability optimization.",
    path: "/features/email-campaigns"
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./email-builder-DG6-uWYK.js");
const Route$9 = createFileRoute("/features/email-builder")({
  head: () => createPageHead({
    title: "Email Builder",
    description: "Drag-and-drop email builder with 16 block types, live device preview, and dynamic personalization.",
    path: "/features/email-builder"
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./documents-Dm7vKscK.js");
const Route$8 = createFileRoute("/features/documents")({
  head: () => createPageHead({
    title: "Documents",
    description: "AI-powered document creation with e-signatures. Proposals, contracts, and reports generated and signed in one place.",
    path: "/features/documents"
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./dashboard-Dvwsee6x.js");
const Route$7 = createFileRoute("/features/dashboard")({
  head: () => createPageHead({
    title: "Dashboard",
    description: "Real-time marketing dashboard. Track agent activity, campaign metrics, and system health in a customizable layout.",
    path: "/features/dashboard"
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./crm-DurTXr2d.js");
const Route$6 = createFileRoute("/features/crm")({
  head: () => createPageHead({
    title: "CRM",
    description: "AI-powered CRM with lead scoring, 25+ activity types, smart segmentation, and GDPR compliance built in.",
    path: "/features/crm"
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./coding-D7wxnz7Z.js");
const Route$5 = createFileRoute("/features/coding")({
  head: () => createPageHead({
    title: "Code Sandbox",
    description: "Built-in code editor for developers. Write, test, and deploy scripts and integrations without leaving OzziOS.",
    path: "/features/coding"
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./chat-widget-DWp1JgYa.js");
const Route$4 = createFileRoute("/features/chat-widget")({
  head: () => createPageHead({
    title: "Chat Widget",
    description: "AI-powered website chat that captures leads, answers questions, and books meetings 24/7. Set up in 5 minutes.",
    path: "/features/chat-widget"
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./channels-DEJbywUd.js");
const Route$3 = createFileRoute("/features/channels")({
  head: () => createPageHead({
    title: "Channels",
    description: "Unified team messaging and collaboration. Real-time channels for your agency, organized by client or project.",
    path: "/features/channels"
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./blog-seo-DqngL5z1.js");
const Route$2 = createFileRoute("/features/blog-seo")({
  head: () => createPageHead({
    title: "Blog & SEO",
    description: "AI-powered SEO and blog management. Keyword research, content optimization, technical audits, and automated publishing.",
    path: "/features/blog-seo"
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./ai-agents-DQAdDlG9.js");
const Route$1 = createFileRoute("/features/ai-agents")({
  head: () => createPageHead({
    title: "AI Agents",
    description: "Deploy 30+ specialized AI agents that work 24/7 with persistent memory, 127+ tools, and full transparency.",
    path: "/features/ai-agents"
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const blogPostsMeta = {
  "22-ai-agents-replace-agency": {
    id: "22-ai-agents-replace-agency",
    title: "I Run a Marketing Agency. Here's Why I Built 22 AI Agents to Replace It.",
    excerpt: "$4,500/month. That's the average retainer small businesses pay a marketing agency. After years of watching clients wait days for deliverables AI could produce in minutes, I stopped pretending the model wasn't broken.",
    image: "/images/blog-post-22-ai-agents-replace-agency.png",
    date: "February 17, 2025",
    authorName: "Garrett Elmore"
  },
  "gohighlevel-integration": {
    id: "gohighlevel-integration",
    title: "OzziOS Now Integrates with GoHighLevel: Supercharge Your CRM with AI",
    excerpt: "Connect your GoHighLevel account to OzziOS and let AI agents manage contacts, automate follow-ups, and sync data across your entire marketing stack—all without leaving the platform.",
    image: "/images/ghl_ozzi_integrated_blog_post.jpg",
    date: "February 2, 2025",
    authorName: "Garrett Elmore"
  },
  "future-of-agency-work": {
    id: "future-of-agency-work",
    title: "The Future of Agency Work: Why AI Employees Are Inevitable",
    excerpt: "The agency model is broken. Hiring costs $15-25K per employee, training takes months, and your best people leave—taking institutional knowledge with them. Here's how AI changes everything.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&h=900&fit=crop&auto=format",
    date: "December 28, 2024",
    authorName: "Garrett Elmore"
  },
  "replace-8-tools": {
    id: "replace-8-tools",
    title: "How We Replaced 8 Marketing Tools with One Platform",
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
    title: "Scaling Your Agency Without Adding Headcount",
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
  "client-reporting-automation": {
    id: "client-reporting-automation",
    title: "Automated Client Reports That Actually Impress",
    excerpt: "Stop spending Sundays building reports. Our AI generates interactive dashboards clients can explore themselves.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&h=900&fit=crop&auto=format",
    date: "December 5, 2024",
    authorName: "Garrett Elmore"
  },
  "goodbye-agency-retainers": {
    id: "goodbye-agency-retainers",
    title: "Why We Fired Our Marketing Agency (And Never Looked Back)",
    excerpt: "$8K/month for work we couldn't see. Now we own the AI—full transparency, better results, fraction of the cost.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=900&fit=crop&auto=format",
    date: "November 28, 2024",
    authorName: "Garrett Elmore"
  }
};
function getPostMeta(id) {
  return blogPostsMeta[id];
}
const $$splitComponentImporter = () => import("./blog._postId-DOw9D17n.js");
const Route2 = createFileRoute("/blog/$postId")({
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
const WaitlistBusinessRoute = Route$E.update({
  id: "/waitlist-business",
  path: "/waitlist-business",
  getParentRoute: () => Route$F
});
const WaitlistRoute = Route$D.update({
  id: "/waitlist",
  path: "/waitlist",
  getParentRoute: () => Route$F
});
const TosRoute = Route$C.update({
  id: "/tos",
  path: "/tos",
  getParentRoute: () => Route$F
});
const SecurityRoute = Route$B.update({
  id: "/security",
  path: "/security",
  getParentRoute: () => Route$F
});
const PrivacyPolicyRoute = Route$A.update({
  id: "/privacy-policy",
  path: "/privacy-policy",
  getParentRoute: () => Route$F
});
const PricingRoute = Route$z.update({
  id: "/pricing",
  path: "/pricing",
  getParentRoute: () => Route$F
});
const IntegrationsRoute = Route$y.update({
  id: "/integrations",
  path: "/integrations",
  getParentRoute: () => Route$F
});
const DataDeletionRoute = Route$x.update({
  id: "/data-deletion",
  path: "/data-deletion",
  getParentRoute: () => Route$F
});
const ContactRoute = Route$w.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$F
});
const ChangelogRoute = Route$v.update({
  id: "/changelog",
  path: "/changelog",
  getParentRoute: () => Route$F
});
const CareersRoute = Route$u.update({
  id: "/careers",
  path: "/careers",
  getParentRoute: () => Route$F
});
const BlogRoute = Route$t.update({
  id: "/blog",
  path: "/blog",
  getParentRoute: () => Route$F
});
const AboutRoute = Route$s.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$F
});
const IndexRoute = Route$r.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$F
});
const BlogIndexRoute = Route$q.update({
  id: "/",
  path: "/",
  getParentRoute: () => BlogRoute
});
const SolutionsTeamsRoute = Route$p.update({
  id: "/solutions/teams",
  path: "/solutions/teams",
  getParentRoute: () => Route$F
});
const SolutionsSoloAgenciesRoute = Route$o.update({
  id: "/solutions/solo-agencies",
  path: "/solutions/solo-agencies",
  getParentRoute: () => Route$F
});
const SolutionsLeadGenerationRoute = Route$n.update({
  id: "/solutions/lead-generation",
  path: "/solutions/lead-generation",
  getParentRoute: () => Route$F
});
const SolutionsEnterpriseRoute = Route$m.update({
  id: "/solutions/enterprise",
  path: "/solutions/enterprise",
  getParentRoute: () => Route$F
});
const SolutionsContentMarketingRoute = Route$l.update({
  id: "/solutions/content-marketing",
  path: "/solutions/content-marketing",
  getParentRoute: () => Route$F
});
const SolutionsClientManagementRoute = Route$k.update({
  id: "/solutions/client-management",
  path: "/solutions/client-management",
  getParentRoute: () => Route$F
});
const FeaturesWorkflowsRoute = Route$j.update({
  id: "/features/workflows",
  path: "/features/workflows",
  getParentRoute: () => Route$F
});
const FeaturesVoiceAgentsRoute = Route$i.update({
  id: "/features/voice-agents",
  path: "/features/voice-agents",
  getParentRoute: () => Route$F
});
const FeaturesVideoEditorRoute = Route$h.update({
  id: "/features/video-editor",
  path: "/features/video-editor",
  getParentRoute: () => Route$F
});
const FeaturesTasksRoute = Route$g.update({
  id: "/features/tasks",
  path: "/features/tasks",
  getParentRoute: () => Route$F
});
const FeaturesSocialMediaRoute = Route$f.update({
  id: "/features/social-media",
  path: "/features/social-media",
  getParentRoute: () => Route$F
});
const FeaturesSmsCampaignsRoute = Route$e.update({
  id: "/features/sms-campaigns",
  path: "/features/sms-campaigns",
  getParentRoute: () => Route$F
});
const FeaturesPresentationsRoute = Route$d.update({
  id: "/features/presentations",
  path: "/features/presentations",
  getParentRoute: () => Route$F
});
const FeaturesKnowledgeBaseRoute = Route$c.update({
  id: "/features/knowledge-base",
  path: "/features/knowledge-base",
  getParentRoute: () => Route$F
});
const FeaturesFormsRoute = Route$b.update({
  id: "/features/forms",
  path: "/features/forms",
  getParentRoute: () => Route$F
});
const FeaturesEmailCampaignsRoute = Route$a.update({
  id: "/features/email-campaigns",
  path: "/features/email-campaigns",
  getParentRoute: () => Route$F
});
const FeaturesEmailBuilderRoute = Route$9.update({
  id: "/features/email-builder",
  path: "/features/email-builder",
  getParentRoute: () => Route$F
});
const FeaturesDocumentsRoute = Route$8.update({
  id: "/features/documents",
  path: "/features/documents",
  getParentRoute: () => Route$F
});
const FeaturesDashboardRoute = Route$7.update({
  id: "/features/dashboard",
  path: "/features/dashboard",
  getParentRoute: () => Route$F
});
const FeaturesCrmRoute = Route$6.update({
  id: "/features/crm",
  path: "/features/crm",
  getParentRoute: () => Route$F
});
const FeaturesCodingRoute = Route$5.update({
  id: "/features/coding",
  path: "/features/coding",
  getParentRoute: () => Route$F
});
const FeaturesChatWidgetRoute = Route$4.update({
  id: "/features/chat-widget",
  path: "/features/chat-widget",
  getParentRoute: () => Route$F
});
const FeaturesChannelsRoute = Route$3.update({
  id: "/features/channels",
  path: "/features/channels",
  getParentRoute: () => Route$F
});
const FeaturesBlogSeoRoute = Route$2.update({
  id: "/features/blog-seo",
  path: "/features/blog-seo",
  getParentRoute: () => Route$F
});
const FeaturesAiAgentsRoute = Route$1.update({
  id: "/features/ai-agents",
  path: "/features/ai-agents",
  getParentRoute: () => Route$F
});
const BlogPostIdRoute = Route2.update({
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
  SolutionsSoloAgenciesRoute,
  SolutionsTeamsRoute
};
const routeTree = Route$F._addFileChildren(rootRouteChildren)._addFileTypes();
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
  Link as L,
  Route2 as R,
  router as r
};
