import { a as reactExports, n as jsxRuntimeExports } from "./worker-entry-3gbtrwAd.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { C as Check } from "./check-ZonzdHht.js";
const Label = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "label",
      {
        ref,
        className: cn(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          className
        ),
        ...props
      }
    );
  }
);
Label.displayName = "Label";
const Checkbox = reactExports.forwardRef(
  ({ className, checked, onCheckedChange, ...props }, ref) => {
    const handleChange = (e) => {
      onCheckedChange?.(e.target.checked);
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-flex items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "checkbox",
          ref,
          checked,
          onChange: handleChange,
          className: "peer sr-only",
          ...props
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: cn(
            "h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background",
            "peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2",
            "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
            "flex items-center justify-center transition-colors",
            checked ? "bg-primary text-primary-foreground" : "bg-background",
            className
          ),
          onClick: () => onCheckedChange?.(!checked),
          children: checked && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3" })
        }
      )
    ] });
  }
);
Checkbox.displayName = "Checkbox";
export {
  Checkbox as C,
  Label as L
};
