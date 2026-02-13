import { a as reactExports, n as jsxRuntimeExports } from "./worker-entry-DUbV-qEz.js";
import { B as Button } from "./button-CtEClRbA.js";
import { I as Input } from "./input-D79fxQdz.js";
import { L as Label, C as Checkbox } from "./checkbox-DMrab8t4.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { m as motion, A as ArrowRight } from "./proxy-BEnWwJWi.js";
import { Q as Quote } from "./quote-B68sZdvn.js";
import { C as CircleCheck } from "./circle-check-CFGtU0xv.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "./check-DYvJBUaI.js";
import "./createLucideIcon-OQXTLfCE.js";
const WAITLIST_API_URL = "https://cheerful-dachshund-758.convex.site/waitlist";
const useSignatureFont = () => {
  reactExports.useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);
};
function SuccessState({ message }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background flex items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      className: "max-w-md text-center space-y-6",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-8 h-8 text-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold text-foreground", children: "You're on the list." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: message })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground pt-6 border-t border-border", children: [
          "I'll personally reach out when your spot opens up.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground text-lg font-signature", children: "— Garrett" })
        ] })
      ]
    }
  ) });
}
function WaitlistBusinessView() {
  useSignatureFont();
  const [isSubmitted, setIsSubmitted] = reactExports.useState(false);
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [submitMessage, setSubmitMessage] = reactExports.useState("");
  const [error, setError] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [name, setName] = reactExports.useState("");
  const [company, setCompany] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [smsConsent, setSmsConsent] = reactExports.useState(false);
  const [emailError, setEmailError] = reactExports.useState("");
  const validateEmail = (value) => {
    if (!value) {
      setEmailError("Email is required");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    setEmailError("");
    return true;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) return;
    setIsSubmitting(true);
    setError("");
    try {
      const response = await fetch(WAITLIST_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name: name || void 0,
          company: company || void 0,
          phone: phone || void 0,
          smsConsent: smsConsent || void 0,
          source: typeof window !== "undefined" ? `business${window.location.search}` : "business"
        })
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }
      setSubmitMessage(result.message || "We'll be in touch soon!");
      setIsSubmitted(true);
    } catch (err) {
      console.error("Waitlist submission error:", err);
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  if (isSubmitted) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SuccessState, { message: submitMessage });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-6 py-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "font-semibold text-foreground", children: "OzziOs" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          variant: "outline",
          onClick: () => document.getElementById("join")?.scrollIntoView({ behavior: "smooth" }),
          children: "Join Waitlist"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "max-w-3xl mx-auto px-6 pt-20 pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "A letter to business owners" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl sm:text-5xl font-bold text-foreground tracking-tight leading-[1.15] mb-6", children: "What if you never had to hire a marketing agency again?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground leading-relaxed", children: "Your own AI marketing team. No retainers. No mystery. No middlemen." })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "max-w-3xl mx-auto px-6 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-neutral dark:prose-invert max-w-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-foreground mb-6", children: "You're paying for a black box." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "Let me guess: you're paying an agency somewhere between $3,000 and $15,000 a month. Maybe more. And you have no idea what they're actually doing." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: `They send you a report once a month. It's full of metrics you don't understand—impressions, CTR, bounce rate, domain authority. They tell you things are "trending in the right direction." They promise results are "just around the corner."` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "Meanwhile, the invoices keep coming. And you're left wondering:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "What are they actually doing all day?" }),
              " You're paying for 20+ hours a month, but you have no visibility into the work."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Is this the right strategy?" }),
              ` They're the "experts," but their recommendations always seem to require more budget.`
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Am I getting ripped off?" }),
              " You've heard horror stories. Agencies charging premium rates while junior employees do the work."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Why does everything take so long?" }),
              " A simple blog post takes two weeks. A campaign launch takes a month. You're running a business—you don't have time for this."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "The worst part? You feel trapped. You can't fire them because you don't have time to do marketing yourself. You can't hire in-house because a single marketing manager costs $70,000+ and can only do a fraction of what an agency promises. You're stuck in a cycle of paying for work you can't see, can't verify, and aren't sure is working." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground leading-relaxed font-medium", children: "There's another way." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16 py-12 border-y border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-foreground mb-6", children: "Your own marketing team. Finally." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "OzziOs gives you something agencies never will: your own dedicated marketing team that works for you, reports to you, and shows you exactly what they're doing." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "Except these aren't humans on your payroll. They're AI specialists—trained in SEO, content writing, social media, ad management, graphic design, and more. They work 24/7. They never miss deadlines. They never take your business for granted." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground leading-relaxed mb-4", children: [
          "And here's the key difference: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "you can see everything they do." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "When your SEO Specialist audits your website, you watch it happen. When your Content Writer drafts a blog post, you see the reasoning. When your Social Media Manager plans next month's content, you're in the conversation. No black boxes. No mystery invoices. No wondering what you're paying for." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-8 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-3 font-medium", children: "Your Core Marketing Team" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-3", children: [
              { role: "SEO Specialist", does: "Site audits, keyword research, ranking strategy" },
              { role: "Content Writer", does: "Blog posts, emails, website copy in your voice" },
              { role: "Social Media Manager", does: "Content calendars, posts, engagement" },
              { role: "Graphic Designer", does: "Visual concepts, social graphics, ad creative" },
              { role: "Data Analyst", does: "Performance tracking, ROI reports, insights" },
              { role: "Research Assistant", does: "Competitor analysis, market research" }
            ].map((agent) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-lg border border-border bg-muted/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground text-sm", children: agent.role }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: agent.does })
            ] }, agent.role)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-3 font-medium", children: "Industry Specialists Available" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-3", children: [
              { role: "Local Business", does: "Google Business Profile, reviews, local SEO" },
              { role: "Real Estate", does: "Listing marketing, lead nurture, property content" },
              { role: "Home Services", does: "Review management, seasonal campaigns, local ads" }
            ].map((agent) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-lg border border-border bg-muted/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground text-sm", children: agent.role }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: agent.does })
            ] }, agent.role)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "And you can add specialists for any role you need. This isn't a rigid software package—it's a flexible team that grows with your business." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-foreground mb-6", children: "It works like having employees. Without the overhead." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "OzziOs isn't another marketing tool. It's a workspace where you and your AI team collaborate—like Slack, but everyone actually does their job." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "You communicate with your team through channels. Need something done? Just ask:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-8 p-6 rounded-lg border border-border bg-muted/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-3", children: "Example:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "You:" }),
              " @Content-Writer write a blog post about the benefits of regular HVAC maintenance for homeowners. Make it helpful, not salesy."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm italic", children: "Your Content Writer researches the topic, drafts the post in your brand voice, and delivers it—usually within minutes, not weeks." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "Your team can do everything an agency does:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "SEO audits and optimization" }),
              " — Find out what's actually hurting your Google rankings and fix it."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Content creation" }),
              " — Blog posts, emails, social captions, website copy. All in your voice."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Social media management" }),
              " — Plan, create, and schedule content across all your platforms."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Ad campaign management" }),
              " — Google Ads, Meta Ads, with real analysis and recommendations."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Google Business Profile" }),
              " — Keep your listing optimized, respond to reviews, post updates."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Performance reporting" }),
              " — Actually understand what's working and what's not."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Here's what it looks like when your team collaborates on a project:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-border overflow-hidden shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/images/content-writer-delegating-to-graphic-designer.png",
              alt: "Screenshot showing AI marketing team collaborating on a project",
              className: "w-full"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-3 italic", children: "Real screenshot from OzziOs. Your AI team communicates and collaborates just like human employees." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16 py-12 border-y border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-foreground mb-6", children: "Set it and forget it. Seriously." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "You're running a business. You don't have time to manage a marketing team—even an AI one. That's why we built the dispatch board." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-border overflow-hidden shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/images/task-pool-dispatch-board.png",
              alt: "OzziOs Dispatch Board showing scheduled marketing tasks",
              className: "w-full"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-3 italic", children: "Schedule your marketing team's work in advance. They show up and do the job automatically." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "Schedule recurring tasks and your team handles them automatically:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Every Monday, your SEO Specialist checks your rankings and flags issues" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Every Tuesday, your Content Writer drafts that week's blog post" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Every afternoon, your Social Media Manager checks engagement and responds" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Every Friday, your Data Analyst sends you a performance summary" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground leading-relaxed font-medium", children: "Your marketing runs on autopilot. You check in when you want to, not because you have to." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-foreground mb-6", children: "Let's talk about what you're really paying." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "The average small business pays $3,000-5,000/month for basic agency services. Mid-market businesses often pay $7,000-15,000+. For a year of agency retainers, you're looking at $36,000 to $180,000." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "And what do you get for that money?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: 'A few hours a week of actual work (the rest is "strategy" and meetings)' })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Work done by junior employees you've never met" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Zero visibility into what's actually happening" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "A contract that's hard to get out of" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-8 p-6 rounded-lg border border-border bg-muted/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-foreground mb-4", children: "With OzziOs:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "You get a full marketing team—SEO, content, social, design, analytics—working for you around the clock. You see everything they do. You can ask for anything, anytime. And it costs a fraction of what you're paying now." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground leading-relaxed font-medium", children: "This isn't about replacing your agency with something cheaper. It's about getting something better." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16 py-12 border-y border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-foreground mb-6", children: "This is for you if..." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "You're tired of agency BS." }),
              " The jargon, the vague reports, the feeling that you're being taken for a ride."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "You want control." }),
              " You want to know what's happening with your marketing without having to schedule a call."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "You don't have time to become a marketing expert." }),
              " You have a business to run. You need a team that handles it."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "You're ready to try something new." }),
              " The old way clearly isn't working. This is different."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "OzziOs works for local businesses, professional services, e-commerce, real estate, home services—any business that needs marketing but doesn't want to play the agency game." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-foreground mb-6", children: "This wasn't possible two years ago." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "AI has reached a tipping point. The technology now exists to build AI that doesn't just answer questions—it does real work. Strategic work. Creative work. Work that used to require expensive human expertise." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: `The agencies know this is coming. They're terrified. They're going to tell you AI can't do what they do, that you need the "human touch," that marketing is too complex for machines.` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "They said the same thing about bookkeeping. And tax preparation. And customer service. And design. Every time, they were wrong." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground leading-relaxed font-medium", children: "The businesses that adopt AI marketing teams first will have an unfair advantage. Lower costs. Faster execution. Complete visibility. While their competitors are still waiting on agency callbacks." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mb-16 py-12 border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "w-8 h-8 text-muted-foreground/30 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-foreground leading-relaxed mb-6", children: '"The best investment you can make is in yourself and your business."' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "I built OzziOs because I've seen too many business owners get burned by agencies. Overpromised. Underdelivered. Left in the dark. You deserve better." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "You deserve a marketing team that works for you—not one that treats you like a line item on their client roster. You deserve to know exactly what's being done and why. You deserve results without the runaround." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "If you're ready to take back control of your marketing, I'd love to have you join us." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 flex items-baseline gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl text-foreground font-signature", children: "Garrett Elmore" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm", children: "— Founder" })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "join", className: "border-t border-border bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl mx-auto px-6 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-foreground mb-3", children: "Join the waitlist." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "We're opening access in waves. Early supporters get priority access and founding member pricing." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "bg-background border border-border rounded-xl p-6 shadow-sm",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "email", className: "text-sm font-medium", children: [
                  "Email ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "*" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "email",
                    type: "email",
                    placeholder: "you@yourbusiness.com",
                    value: email,
                    onChange: (e) => {
                      setEmail(e.target.value);
                      if (emailError) validateEmail(e.target.value);
                    },
                    onBlur: () => validateEmail(email),
                    className: cn(
                      "h-10",
                      emailError && "border-destructive"
                    )
                  }
                ),
                emailError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: emailError })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "name", className: "text-sm font-medium", children: "Your name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "name",
                    type: "text",
                    placeholder: "First and last name",
                    value: name,
                    onChange: (e) => setName(e.target.value),
                    className: "h-10"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "company", className: "text-sm font-medium", children: "Business name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "company",
                    type: "text",
                    placeholder: "Your company",
                    value: company,
                    onChange: (e) => setCompany(e.target.value),
                    className: "h-10"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "phone", className: "text-sm font-medium", children: "Phone number" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "phone",
                    type: "tel",
                    placeholder: "+1 (555) 123-4567",
                    value: phone,
                    onChange: (e) => setPhone(e.target.value),
                    className: "h-10"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Checkbox,
                  {
                    id: "smsConsent",
                    checked: smsConsent,
                    onCheckedChange: (checked) => setSmsConsent(checked),
                    className: "mt-0.5"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Label,
                  {
                    htmlFor: "smsConsent",
                    className: "text-sm text-muted-foreground font-normal leading-relaxed cursor-pointer",
                    children: "Send me an SMS when OzziOs launches. I agree to receive a one-time text message. Standard rates may apply."
                  }
                )
              ] }),
              error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", children: error }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "submit",
                  disabled: isSubmitting,
                  className: "w-full h-10",
                  children: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" }),
                    "Joining..."
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                    "Get early access",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                  ] })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 pt-4 border-t border-border flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-muted-foreground text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3" }),
                "No credit card"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3" }),
                "Cancel anytime"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3" }),
                "No spam"
              ] })
            ] })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-muted-foreground text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "font-medium text-foreground", children: "OzziOs" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " OzziOs. All rights reserved."
      ] })
    ] }) })
  ] });
}
function WaitlistBusinessPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(WaitlistBusinessView, {});
}
export {
  WaitlistBusinessPage as component
};
