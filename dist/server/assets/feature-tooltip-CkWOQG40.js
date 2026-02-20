import { a as reactExports, n as jsxRuntimeExports } from "./worker-entry-B5eyDbT7.js";
function FeatureTooltip({ description }) {
  const [open, setOpen] = reactExports.useState(false);
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!open) return;
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "relative inline-flex items-center shrink-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        className: "w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center opacity-30 hover:opacity-60 transition-opacity focus:outline-none",
        onMouseEnter: () => setOpen(true),
        onMouseLeave: () => setOpen(false),
        onClick: () => setOpen((v) => !v),
        "aria-label": "Feature info",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-semibold leading-none", children: "i" })
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-52 bg-popover border border-border rounded-lg px-3 py-2.5 shadow-lg z-50 pointer-events-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-border" })
    ] })
  ] });
}
export {
  FeatureTooltip as F
};
