import { r as reactExports, j as jsxRuntimeExports } from "./vendor-framer-DZFBeC81.js";
function LazySection({
  component: Component,
  rootMargin = "200px",
  fallback = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { minHeight: 200 } })
}) {
  const ref = reactExports.useRef(null);
  const [isVisible, setIsVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reactExports.startTransition(() => {
            setIsVisible(true);
          });
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, children: isVisible ? /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Component, {}) }) : fallback });
}
function DeferredSection({
  children,
  rootMargin = "200px",
  fallback = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { minHeight: 200 } })
}) {
  const ref = reactExports.useRef(null);
  const [isVisible, setIsVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reactExports.startTransition(() => {
            setIsVisible(true);
          });
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, children: isVisible ? children : fallback });
}
export {
  DeferredSection as D,
  LazySection as L
};
