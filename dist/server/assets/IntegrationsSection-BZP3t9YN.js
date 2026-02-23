import { a as reactExports, n as jsxRuntimeExports } from "./worker-entry-Brahq7cg.js";
import { u as useInView } from "./use-in-view-BvmxzeBy.js";
import { m as motion } from "./proxy-CmmExSSS.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "./createLucideIcon-Dq1_ZUrX.js";
const nodes = [
  // Top Left
  { name: "Google", logo: "/images/google-logo.svg", x: 18, y: 24 },
  { name: "Facebook", logo: "/images/facebook-icon.svg", x: 34, y: 19 },
  // Bottom Left
  { name: "Shopify", logo: "/images/shopify-logo.webp", x: 21, y: 76 },
  { name: "Stripe", logo: "/images/stripe-logo.webp", x: 36, y: 81 },
  // Top Right
  { name: "WordPress", logo: "/images/wordpress.webp", x: 82, y: 24 },
  { name: "Google Ads", logo: "/images/google-ads-logo.webp", x: 66, y: 19 },
  // Bottom Right
  { name: "Gmail", logo: "/images/gmail-logo.webp", x: 79, y: 76 },
  { name: "TikTok", logo: "/images/tiktok-logo.svg", x: 64, y: 81 }
];
const CENTER = { x: 50, y: 50 };
function IntegrationsSection() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 lg:py-32 bg-background overflow-hidden border-t border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6 lg:px-8 z-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { duration: 0.5 },
          className: "flex items-center justify-center gap-3 mb-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-px bg-signature" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold text-signature uppercase tracking-[0.2em]", children: "Connect Anything" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-px bg-signature" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { duration: 0.5, delay: 0.1 },
          className: "text-4xl md:text-5xl font-display font-medium text-foreground tracking-tight mb-4",
          children: "Integrates with your stack"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { duration: 0.5, delay: 0.2 },
          className: "text-lg text-muted-foreground max-w-2xl mx-auto",
          children: "Ozzi works seamlessly with the tools you already use, pulling data and triggering actions across your entire business."
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "relative w-full max-w-5xl mx-auto aspect-square md:aspect-[16/9] mt-12 md:mt-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "svg",
        {
          className: "absolute inset-0 w-full h-full pointer-events-none",
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
              strokeWidth: "1.5",
              className: "text-border dark:text-border/50",
              initial: { pathLength: 0, opacity: 0 },
              animate: isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 },
              transition: {
                duration: 1.5,
                delay: 0.5 + i * 0.1,
                ease: "easeOut"
              }
            },
            `line-${node.name}`
          ))
        }
      ),
      nodes.map((node, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "absolute w-2 h-2 rounded-full bg-signature z-10 shadow-[0_0_12px_rgba(255,87,34,0.8)]",
          initial: { left: `${CENTER.x}%`, top: `${CENTER.y}%`, opacity: 0, scale: 0, x: "-50%", y: "-50%" },
          animate: isInView ? {
            left: [`${CENTER.x}%`, `${node.x}%`],
            top: [`${CENTER.y}%`, `${node.y}%`],
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1, 0.5],
            x: "-50%",
            y: "-50%"
          } : {},
          transition: {
            duration: 2.5,
            delay: 1 + i * 0.2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        },
        `pulse-${node.name}`
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.5 },
          animate: isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 },
          transition: { duration: 1.5, delay: 0.2, ease: "easeOut" },
          className: "w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-signature/20 rounded-full blur-[80px] md:blur-[120px]"
        }
      ) }),
      nodes.map((node, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute z-10 -translate-x-1/2 -translate-y-1/2",
          style: { left: `${node.x}%`, top: `${node.y}%` },
          title: node.name,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, scale: 0 },
              animate: isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 },
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 1.2 + i * 0.1
              },
              className: "w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white dark:bg-card border border-border/60 shadow-lg flex items-center justify-center hover:scale-110 hover:border-signature/30 hover:shadow-signature/20 transition-all duration-300 cursor-pointer group",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: node.logo,
                  alt: node.name,
                  className: "w-6 h-6 md:w-8 md:h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                }
              )
            }
          )
        },
        node.name
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.5 },
          animate: isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 },
          transition: {
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.4
          },
          className: "relative flex items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-3xl bg-white dark:bg-card border-2 border-signature shadow-[0_0_40px_rgba(255,87,34,0.3)] group cursor-pointer overflow-hidden",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "video",
            {
              src: "/images/ozzi-avatar.mp4",
              autoPlay: true,
              loop: true,
              muted: true,
              playsInline: true,
              className: "w-full h-full object-cover rounded-3xl"
            }
          )
        }
      ) })
    ] })
  ] }) });
}
export {
  IntegrationsSection
};
