import { r as reactExports, u as useInView, j as jsxRuntimeExports, m as motion } from "./vendor-framer-DZFBeC81.js";
import { L as Link } from "./vendor-router-DD_41qJ4.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { B as BackgroundField, S as SectionHeader, E as EASE_OUT, e as SectionHeading } from "./_landing-primitives-Bieps6V3.js";
import { r as ArrowUpRight } from "./vendor-icons-D94uOSxG.js";
import "./vendor-react-MO5I_vdy.js";
import "./vendor-radix-Bd9PM-r6.js";
import "node:async_hooks";
import "./LandingLayout-Dblq4RXp.js";
const nodes = [
  { name: "Google", logo: "/images/google-logo.svg", x: 18, y: 26 },
  { name: "Facebook", logo: "/images/facebook-icon.svg", x: 34, y: 19 },
  { name: "Shopify", logo: "/images/shopify-logo.webp", x: 21, y: 76 },
  { name: "Stripe", logo: "/images/stripe-logo.webp", x: 36, y: 81 },
  { name: "WordPress", logo: "/images/wordpress.webp", x: 82, y: 26 },
  { name: "Google Ads", logo: "/images/google-ads-logo.webp", x: 66, y: 19 },
  { name: "Gmail", logo: "/images/gmail-logo.webp", x: 79, y: 76 },
  { name: "TikTok", logo: "/images/tiktok-logo.svg", x: 64, y: 81 }
];
const CENTER = { x: 50, y: 50 };
const integrationDirectory = [
  { label: "Search & ads", items: ["Google", "Google Ads", "Facebook", "TikTok", "YouTube"] },
  { label: "Commerce & billing", items: ["Stripe", "Shopify", "WooCommerce"] },
  { label: "Communication", items: ["Gmail", "Twilio", "Resend", "Slack"] },
  { label: "Field service", items: ["Housecall Pro", "ServiceTitan", "Jobber", "FieldPulse"] }
];
function IntegrationsSection() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate overflow-hidden border-t border-border/50 py-28 lg:py-36", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackgroundField, { variant: "top-right" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { duration: 0.6 },
          className: "mb-12 lg:mb-16",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              eyebrow: "Connect anything",
              headlineLines: ["Integrates with", "your stack"],
              sub: "Ozzi works seamlessly with the tools you already use, pulling data and triggering actions across your entire business."
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          ref,
          className: "relative mx-auto aspect-[16/10] w-full overflow-hidden rounded-xl border border-border/70 bg-background shadow-[0_18px_50px_-26px_rgba(34,27,22,0.30)]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0 opacity-[0.55] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_85%)]",
                style: {
                  backgroundImage: "linear-gradient(rgba(64,45,34,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(64,45,34,0.10) 1px, transparent 1px)",
                  backgroundSize: "60px 60px"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "svg",
              {
                className: "pointer-events-none absolute inset-0 h-full w-full",
                viewBox: "0 0 100 100",
                preserveAspectRatio: "none",
                children: nodes.map((node, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.line,
                  {
                    x1: CENTER.x,
                    y1: CENTER.y,
                    x2: node.x,
                    y2: node.y,
                    vectorEffect: "non-scaling-stroke",
                    stroke: "currentColor",
                    strokeWidth: "1",
                    strokeDasharray: "3 3",
                    className: "text-border",
                    initial: { pathLength: 0, opacity: 0 },
                    animate: isInView ? { pathLength: 1, opacity: 0.65 } : { pathLength: 0, opacity: 0 },
                    transition: { duration: 1.4, delay: 0.5 + i * 0.08, ease: "easeOut" }
                  },
                  `line-${node.name}`
                ))
              }
            ),
            nodes.map((node, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "absolute z-10 h-1.5 w-1.5 rounded-full bg-signature shadow-[0_0_10px_rgba(196,88,63,0.7)]",
                initial: {
                  left: `${CENTER.x}%`,
                  top: `${CENTER.y}%`,
                  opacity: 0,
                  scale: 0,
                  x: "-50%",
                  y: "-50%"
                },
                animate: isInView ? {
                  left: [`${CENTER.x}%`, `${node.x}%`],
                  top: [`${CENTER.y}%`, `${node.y}%`],
                  opacity: [0, 1, 1, 0],
                  scale: [0.5, 1, 1, 0.5],
                  x: "-50%",
                  y: "-50%"
                } : {},
                transition: {
                  duration: 2.6,
                  delay: 1 + i * 0.18,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              },
              `pulse-${node.name}`
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.6 },
                animate: isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 },
                transition: { duration: 1.4, delay: 0.2, ease: EASE_OUT },
                className: "h-[280px] w-[280px] rounded-full bg-signature/15 blur-[80px] md:h-[440px] md:w-[440px] md:blur-[110px]"
              }
            ) }),
            nodes.map((node, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute z-10 -translate-x-1/2 -translate-y-1/2",
                style: { left: `${node.x}%`, top: `${node.y}%` },
                title: node.name,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, scale: 0 },
                    animate: isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 },
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 1.1 + i * 0.08
                    },
                    className: cn(
                      "group/node flex cursor-pointer items-center justify-center rounded-md border border-border/70 bg-background shadow-[0_8px_24px_-12px_rgba(34,27,22,0.35)] transition-all duration-300",
                      "h-12 w-12 hover:-translate-y-0.5 hover:border-signature/40 hover:shadow-[0_14px_30px_-14px_rgba(196,88,63,0.40)]",
                      "md:h-14 md:w-14 md:rounded-lg"
                    ),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: node.logo,
                          alt: node.name,
                          className: "h-6 w-6 object-contain transition-transform duration-300 group-hover/node:scale-110 md:h-7 md:w-7"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute -bottom-6 hidden whitespace-nowrap font-mono text-[9.5px] uppercase tracking-[0.18em] text-foreground/45 group-hover/node:inline", children: node.name })
                    ]
                  }
                )
              },
              node.name
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.6 },
                animate: isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 },
                transition: { type: "spring", stiffness: 200, damping: 20, delay: 0.4 },
                className: "group relative flex h-20 w-20 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-signature/40 bg-foreground shadow-[0_0_36px_rgba(196,88,63,0.35),0_18px_40px_-18px_rgba(34,27,22,0.55)] md:h-24 md:w-24",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "video",
                    {
                      src: "/images/ozzi-avatar.mp4",
                      autoPlay: true,
                      loop: true,
                      muted: true,
                      playsInline: true,
                      className: "h-full w-full rounded-xl object-cover"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[9.5px] uppercase tracking-[0.18em] text-foreground/50", children: "Ozzi" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-4 top-4 inline-flex items-center gap-2 rounded-md border border-border/60 bg-background/85 px-2.5 py-1 backdrop-blur", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-mint/60" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-mint" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[9.5px] uppercase tracking-[0.18em] text-foreground/55", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/85 tabular-nums", children: "40+" }),
                " integrations syncing"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-4 top-4 inline-flex items-center gap-2 rounded-md border border-border/60 bg-background/85 px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.18em] text-foreground/55 backdrop-blur", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/85 tabular-nums", children: "v2.4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-px bg-border/60" }),
              "Live"
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
          transition: { duration: 0.6, delay: 0.4 },
          className: "mt-12",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-md border border-border/60 bg-background/60 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 divide-y divide-border/60 sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0", children: integrationDirectory.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { label: cat.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-1.5", children: cat.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-[12.5px] text-foreground/80", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-foreground/30" }),
                item
              ] }, item)) })
            ] }, cat.label)) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10.5px] uppercase tracking-[0.18em] text-foreground/45", children: "And many more" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/",
                  className: "group/lnk inline-flex items-center gap-1.5 text-[12.5px] font-medium text-foreground/70 transition-colors hover:text-signature",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative", children: [
                      "Browse all integrations",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-px left-0 h-px w-0 bg-signature transition-all duration-200 group-hover/lnk:w-full" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3 transition-transform duration-200 group-hover/lnk:-translate-y-0.5 group-hover/lnk:translate-x-0.5" })
                  ]
                }
              )
            ] })
          ]
        }
      )
    ] })
  ] });
}
export {
  IntegrationsSection
};
