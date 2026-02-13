import { a as reactExports, n as jsxRuntimeExports } from "./worker-entry-DUbV-qEz.js";
import { M as Mail, a as MessageSquare, L as LandingLayout } from "./LandingLayout-BFxFbzxM.js";
import { I as Input } from "./input-D79fxQdz.js";
import { B as Button } from "./button-CtEClRbA.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { C as CTASection } from "./CTASection-iYlybzcN.js";
import { u as useInView } from "./use-in-view-DoLVnWF9.js";
import { m as motion, A as ArrowRight } from "./proxy-BEnWwJWi.js";
import { S as Send } from "./send-BhJ8yNOo.js";
import { c as createLucideIcon } from "./createLucideIcon-OQXTLfCE.js";
import { C as Clock } from "./clock-oQ2YqCyM.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "./router-BLJT3Mxm.js";
import "./menu-Bt53Wknu.js";
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const CircleQuestionMark = createLucideIcon("circle-question-mark", __iconNode);
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
};
const contactInfo = [
  {
    icon: Mail,
    title: "Email us",
    description: "Our team typically responds within 24 hours.",
    detail: "hello@ozzios.com",
    href: "mailto:hello@ozzios.com"
  },
  {
    icon: MessageSquare,
    title: "Live chat",
    description: "Chat with our support team in real-time.",
    detail: "Available Mon-Fri, 9am-6pm EST",
    href: "#"
  },
  {
    icon: CircleQuestionMark,
    title: "Help center",
    description: "Browse our documentation and guides.",
    detail: "docs.ozzios.com",
    href: "#"
  },
  {
    icon: Clock,
    title: "Response time",
    description: "We aim to reply to all inquiries quickly.",
    detail: "Under 24 hours",
    href: void 0
  }
];
function ContactView() {
  const heroRef = reactExports.useRef(null);
  const formRef = reactExports.useRef(null);
  const infoRef = reactExports.useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const formInView = useInView(formRef, { once: true, margin: "-100px" });
  const infoInView = useInView(infoRef, { once: true, margin: "-100px" });
  const [formState, setFormState] = reactExports.useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = reactExports.useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        ref: heroRef,
        initial: { opacity: 0, y: 20 },
        animate: heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.6 },
        className: "text-center max-w-3xl mx-auto",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-sm font-medium text-signature mb-4 tracking-wide uppercase", children: "Contact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6", children: "Get in touch" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto", children: "Have a question about OzziOs, want a demo, or need help getting started? We'd love to hear from you." })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-12 lg:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          ref: formRef,
          initial: { opacity: 0, y: 20 },
          animate: formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { duration: 0.6 },
          className: "lg:col-span-3",
          children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border-2 border-border bg-card p-12 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-signature/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-7 w-7 text-signature" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-foreground mb-3", children: "Message sent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-md mx-auto", children: "Thanks for reaching out! We'll get back to you within 24 hours." })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "name", className: "text-sm font-medium text-foreground", children: [
                  "Name ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-signature", children: "*" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "name",
                    placeholder: "Your name",
                    required: true,
                    value: formState.name,
                    onChange: (e) => setFormState((s) => ({ ...s, name: e.target.value })),
                    className: "h-12 border-2"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "email", className: "text-sm font-medium text-foreground", children: [
                  "Email ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-signature", children: "*" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "email",
                    type: "email",
                    placeholder: "you@company.com",
                    required: true,
                    value: formState.email,
                    onChange: (e) => setFormState((s) => ({ ...s, email: e.target.value })),
                    className: "h-12 border-2"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "company", className: "text-sm font-medium text-foreground", children: "Company" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "company",
                    placeholder: "Your company",
                    value: formState.company,
                    onChange: (e) => setFormState((s) => ({ ...s, company: e.target.value })),
                    className: "h-12 border-2"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "subject", className: "text-sm font-medium text-foreground", children: "Subject" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "subject",
                    placeholder: "What is this about?",
                    value: formState.subject,
                    onChange: (e) => setFormState((s) => ({ ...s, subject: e.target.value })),
                    className: "h-12 border-2"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "message", className: "text-sm font-medium text-foreground", children: [
                "Message ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-signature", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  id: "message",
                  rows: 6,
                  placeholder: "Tell us how we can help...",
                  required: true,
                  value: formState.message,
                  onChange: (e) => setFormState((s) => ({ ...s, message: e.target.value })),
                  className: cn(
                    "flex w-full rounded-md border-2 border-input bg-background px-3 py-3 text-base ring-offset-background",
                    "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    "disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none"
                  )
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "submit",
                size: "lg",
                className: "h-12 px-8 bg-signature text-white hover:bg-signature/90 text-base font-medium",
                children: [
                  "Send message",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                ]
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          ref: infoRef,
          variants: containerVariants,
          initial: "hidden",
          animate: infoInView ? "visible" : "hidden",
          className: "lg:col-span-2 space-y-6",
          children: contactInfo.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              variants: itemVariants,
              className: "group rounded-xl border-2 border-border bg-card p-6 transition-all duration-150 hover:shadow-[4px_4px_0_0_hsl(var(--border))] hover:translate-x-[-2px] hover:translate-y-[-2px]",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-signature/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-5 w-5 text-signature" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-foreground mb-1", children: item.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-2", children: item.description }),
                  item.href ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: item.href,
                      className: "text-sm font-medium text-signature hover:underline",
                      children: item.detail
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: item.detail })
                ] })
              ] })
            },
            item.title
          ))
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LandingLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactView, {}) });
}
export {
  ContactPage as component
};
