import { r as rootRouteId, i as invariant, t as trimPathLeft, j as joinPaths, a as reactExports, d as dummyMatchContext, m as matchContext, u as useRouterState, b as useRouter, c as requireReactDom, e as useForwardedRef, f as useIntersectionObserver, g as functionalUpdate, h as exactPathTest, k as removeTrailingSlash, l as deepEqual, R as React__default, n as jsxRuntimeExports, w as warning, o as isModuleNotFoundError, p as RouterCore, O as Outlet } from "./worker-entry-DUbV-qEz.js";
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
let Route$F = class Route extends BaseRoute {
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
  return new Route$F(
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
      }
    ],
    links: [
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/images/favicon.svg"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent
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
const $$splitComponentImporter$D = () => import("./waitlist-business-D547us69.js");
const Route$D = createFileRoute("/waitlist-business")({
  component: lazyRouteComponent($$splitComponentImporter$D, "component")
});
const $$splitComponentImporter$C = () => import("./waitlist-DeN-BAPH.js");
const Route$C = createFileRoute("/waitlist")({
  component: lazyRouteComponent($$splitComponentImporter$C, "component")
});
const $$splitComponentImporter$B = () => import("./tos-C2BtJXbz.js");
const Route$B = createFileRoute("/tos")({
  component: lazyRouteComponent($$splitComponentImporter$B, "component")
});
const $$splitComponentImporter$A = () => import("./security-DQ05J-4J.js");
const Route$A = createFileRoute("/security")({
  component: lazyRouteComponent($$splitComponentImporter$A, "component")
});
const $$splitComponentImporter$z = () => import("./privacy-policy-QmCwjn8h.js");
const Route$z = createFileRoute("/privacy-policy")({
  component: lazyRouteComponent($$splitComponentImporter$z, "component")
});
const $$splitComponentImporter$y = () => import("./pricing-Bs85GlCh.js");
const Route$y = createFileRoute("/pricing")({
  component: lazyRouteComponent($$splitComponentImporter$y, "component")
});
const $$splitComponentImporter$x = () => import("./integrations-DNtwVwzh.js");
const Route$x = createFileRoute("/integrations")({
  component: lazyRouteComponent($$splitComponentImporter$x, "component")
});
const $$splitComponentImporter$w = () => import("./data-deletion-B-7FOGn1.js");
const Route$w = createFileRoute("/data-deletion")({
  component: lazyRouteComponent($$splitComponentImporter$w, "component")
});
const $$splitComponentImporter$v = () => import("./contact-Bm95Z2HX.js");
const Route$v = createFileRoute("/contact")({
  component: lazyRouteComponent($$splitComponentImporter$v, "component")
});
const $$splitComponentImporter$u = () => import("./changelog-D3JFYyQ2.js");
const Route$u = createFileRoute("/changelog")({
  component: lazyRouteComponent($$splitComponentImporter$u, "component")
});
const $$splitComponentImporter$t = () => import("./careers-BKsGIbTA.js");
const Route$t = createFileRoute("/careers")({
  component: lazyRouteComponent($$splitComponentImporter$t, "component")
});
const $$splitComponentImporter$s = () => import("./blog-1Cvbjc_R.js");
const Route$s = createFileRoute("/blog")({
  component: lazyRouteComponent($$splitComponentImporter$s, "component")
});
const $$splitComponentImporter$r = () => import("./about-BrfUbAlo.js");
const Route$r = createFileRoute("/about")({
  component: lazyRouteComponent($$splitComponentImporter$r, "component")
});
const $$splitComponentImporter$q = () => import("./index-DU1nZThF.js");
const Route$q = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$q, "component")
});
const $$splitComponentImporter$p = () => import("./blog.index-CrUrf1qF.js");
const Route$p = createFileRoute("/blog/")({
  component: lazyRouteComponent($$splitComponentImporter$p, "component")
});
const $$splitComponentImporter$o = () => import("./teams-C_244BpM.js");
const Route$o = createFileRoute("/solutions/teams")({
  component: lazyRouteComponent($$splitComponentImporter$o, "component")
});
const $$splitComponentImporter$n = () => import("./solo-agencies-D3wTwZFK.js");
const Route$n = createFileRoute("/solutions/solo-agencies")({
  component: lazyRouteComponent($$splitComponentImporter$n, "component")
});
const $$splitComponentImporter$m = () => import("./lead-generation-CrG3zBlg.js");
const Route$m = createFileRoute("/solutions/lead-generation")({
  component: lazyRouteComponent($$splitComponentImporter$m, "component")
});
const $$splitComponentImporter$l = () => import("./enterprise-CdBOlyvQ.js");
const Route$l = createFileRoute("/solutions/enterprise")({
  component: lazyRouteComponent($$splitComponentImporter$l, "component")
});
const $$splitComponentImporter$k = () => import("./content-marketing-CKKzw7gp.js");
const Route$k = createFileRoute("/solutions/content-marketing")({
  component: lazyRouteComponent($$splitComponentImporter$k, "component")
});
const $$splitComponentImporter$j = () => import("./client-management-D74AOipO.js");
const Route$j = createFileRoute("/solutions/client-management")({
  component: lazyRouteComponent($$splitComponentImporter$j, "component")
});
const $$splitComponentImporter$i = () => import("./workflows-DlzhmaJ3.js");
const Route$i = createFileRoute("/features/workflows")({
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const $$splitComponentImporter$h = () => import("./voice-agents-BdV4dXTt.js");
const Route$h = createFileRoute("/features/voice-agents")({
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const $$splitComponentImporter$g = () => import("./tasks-CdX-m6Gf.js");
const Route$g = createFileRoute("/features/tasks")({
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import("./social-media-Cv-lH-y6.js");
const Route$f = createFileRoute("/features/social-media")({
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./sms-campaigns-C58NONwo.js");
const Route$e = createFileRoute("/features/sms-campaigns")({
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./presentations-CH2AHekp.js");
const Route$d = createFileRoute("/features/presentations")({
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./knowledge-base-DTsxTfnR.js");
const Route$c = createFileRoute("/features/knowledge-base")({
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./forms-DCsgFe_6.js");
const Route$b = createFileRoute("/features/forms")({
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./email-campaigns-DLkpX7iK.js");
const Route$a = createFileRoute("/features/email-campaigns")({
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./email-builder-BJkrwpDl.js");
const Route$9 = createFileRoute("/features/email-builder")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./documents-Cx3VMUgq.js");
const Route$8 = createFileRoute("/features/documents")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./dashboard-1eDSmHfJ.js");
const Route$7 = createFileRoute("/features/dashboard")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./crm-DjhJovtL.js");
const Route$6 = createFileRoute("/features/crm")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./coding-BV0Lc0O2.js");
const Route$5 = createFileRoute("/features/coding")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./channels-DEqREmaA.js");
const Route$4 = createFileRoute("/features/channels")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./blog-seo-Cu47n_BF.js");
const Route$3 = createFileRoute("/features/blog-seo")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./ai-agents-BPzr2FZm.js");
const Route$2 = createFileRoute("/features/ai-agents")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./_-kpjyGuOt.js");
const Route$1 = createFileRoute("/docs/$")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./blog._postId-6h4nNmxu.js");
const Route2 = createFileRoute("/blog/$postId")({
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
const SolutionsSoloAgenciesRoute = Route$n.update({
  id: "/solutions/solo-agencies",
  path: "/solutions/solo-agencies",
  getParentRoute: () => Route$E
});
const SolutionsLeadGenerationRoute = Route$m.update({
  id: "/solutions/lead-generation",
  path: "/solutions/lead-generation",
  getParentRoute: () => Route$E
});
const SolutionsEnterpriseRoute = Route$l.update({
  id: "/solutions/enterprise",
  path: "/solutions/enterprise",
  getParentRoute: () => Route$E
});
const SolutionsContentMarketingRoute = Route$k.update({
  id: "/solutions/content-marketing",
  path: "/solutions/content-marketing",
  getParentRoute: () => Route$E
});
const SolutionsClientManagementRoute = Route$j.update({
  id: "/solutions/client-management",
  path: "/solutions/client-management",
  getParentRoute: () => Route$E
});
const FeaturesWorkflowsRoute = Route$i.update({
  id: "/features/workflows",
  path: "/features/workflows",
  getParentRoute: () => Route$E
});
const FeaturesVoiceAgentsRoute = Route$h.update({
  id: "/features/voice-agents",
  path: "/features/voice-agents",
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
const FeaturesChannelsRoute = Route$4.update({
  id: "/features/channels",
  path: "/features/channels",
  getParentRoute: () => Route$E
});
const FeaturesBlogSeoRoute = Route$3.update({
  id: "/features/blog-seo",
  path: "/features/blog-seo",
  getParentRoute: () => Route$E
});
const FeaturesAiAgentsRoute = Route$2.update({
  id: "/features/ai-agents",
  path: "/features/ai-agents",
  getParentRoute: () => Route$E
});
const DocsSplatRoute = Route$1.update({
  id: "/docs/$",
  path: "/docs/$",
  getParentRoute: () => Route$E
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
  DocsSplatRoute,
  FeaturesAiAgentsRoute,
  FeaturesBlogSeoRoute,
  FeaturesChannelsRoute,
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
  FeaturesVoiceAgentsRoute,
  FeaturesWorkflowsRoute,
  SolutionsClientManagementRoute,
  SolutionsContentMarketingRoute,
  SolutionsEnterpriseRoute,
  SolutionsLeadGenerationRoute,
  SolutionsSoloAgenciesRoute,
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
  Link as L,
  Route$1 as R,
  Route2 as a,
  router as r
};
