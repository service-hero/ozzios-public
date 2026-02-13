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
function WaitlistView() {
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
          source: typeof window !== "undefined" ? window.location.search : void 0
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "A letter from the founder" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl sm:text-5xl font-bold text-foreground tracking-tight leading-[1.15] mb-6", children: "What if you could run a 100-person agency with 35 people?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground leading-relaxed", children: "We're not building another SaaS tool. We're building a workforce." })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "max-w-3xl mx-auto px-6 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-neutral dark:prose-invert max-w-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-foreground mb-6", children: "The agency model is broken." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "I've spent years in the marketing agency world, and I've watched the same pattern destroy businesses over and over again." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "You land a big client. You hire to meet the demand. You train them for months. They finally become productive. Then they leave. Or the client churns. Or both happen at the same time, and suddenly you're paying for people who have nothing to do." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "The math never works. Here's what most agency owners don't talk about:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Hiring costs $15,000-25,000 per employee" }),
              " when you factor in recruiting, interviewing, onboarding, and the productivity ramp-up period."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Average agency turnover is 30%+ annually." }),
              " That means rebuilding a third of your team every year."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Your best people get poached." }),
              " The ones who finally understand your clients, your processes, your standards—they're the first to leave."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Revenue is capped by headcount." }),
              " You can only grow as fast as you can hire, train, and retain."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "And that's before we talk about the tool sprawl. The average agency uses 8-12 different software products. Slack for communication. Asana or Monday for tasks. HubSpot for CRM. Hootsuite for social. Zapier to connect them all. Each one adds friction, costs money, and creates another place where information gets lost." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground leading-relaxed font-medium", children: "I got tired of fighting this battle. So I decided to change the game entirely." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16 py-12 border-y border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-foreground mb-6", children: "A different kind of company." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "OzziOs isn't software. It's a workforce." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "When you sign up, you're not getting another dashboard to check. You're getting employees. AI employees who specialize in the exact roles your agency needs—and who never quit, never call in sick, never need a raise, and never take your best clients with them when they leave." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "These aren't chatbots. They're not glorified auto-responders. They're agents that actually do work. We have 20+ pre-built specialists ready to deploy:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-8 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-3 font-medium", children: "Channel Agents — Work within specific projects" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-3", children: [
              { role: "Supervisor", does: "Coordinates the team, delegates tasks, keeps projects moving" },
              { role: "SEO Specialist", does: "Site audits, keyword research, competitor analysis" },
              { role: "Content Writer", does: "Blog posts, emails, ad copy in your brand voice" },
              { role: "Social Media Manager", does: "Content calendars, posts, engagement strategy" },
              { role: "Data Analyst", does: "Performance metrics, trends, actionable reports" },
              { role: "Research Assistant", does: "Market research, competitor intel, synthesis" },
              { role: "Graphic Designer", does: "Visual concepts, design briefs, art direction" },
              { role: "GBP Expert", does: "Google Business Profile optimization, reviews" },
              { role: "Organic SEO Blogger", does: "SEO-optimized long-form content that ranks" }
            ].map((agent) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-lg border border-border bg-muted/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground text-sm", children: agent.role }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: agent.does })
            ] }, agent.role)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-3 font-medium", children: "Executive Agents — Workspace-wide oversight" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-3", children: [
              { role: "CEO Agent", does: "Portfolio analytics, revenue insights, strategic planning" },
              { role: "General Manager", does: "Cross-project coordination, resource allocation" },
              { role: "Analytics Director", does: "Aggregated metrics, benchmarking, ROI analysis" },
              { role: "Operations Manager", does: "Workflow optimization, capacity planning" }
            ].map((agent) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-lg border border-border bg-muted/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground text-sm", children: agent.role }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: agent.does })
            ] }, agent.role)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-3 font-medium", children: "Industry-Specific — Specialized expertise" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-3", children: [
              { role: "Real Estate", does: "Listing specialist, lead nurture, property marketing" },
              { role: "HVAC", does: "Customer service, tech support, sales consulting" },
              { role: "Marketing Agency", does: "Account management, copywriting, social strategy" }
            ].map((agent) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-lg border border-border bg-muted/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground text-sm", children: agent.role }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: agent.does })
            ] }, agent.role)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "And this is just the beginning. You can create custom agents for any role you can imagine, and we're adding new specialists every week." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "And here's what makes this different from every other AI tool you've tried: they remember everything. Every client preference. Every past conversation. Every project detail. They build up institutional knowledge that used to walk out the door every time an employee left." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-foreground mb-6", children: "How it actually works." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "OzziOs is built around channels—like Slack, but with AI employees as first-class team members." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "Each client gets their own channel. Your AI employees are assigned to that channel and immediately have context about that client—their industry, their brand voice, their history, their preferences. When you @mention an employee, they get to work." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-8 p-6 rounded-lg border border-border bg-muted/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-3", children: "Example:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "You:" }),
              " @SEO-Specialist run a full site audit on acme.com and identify the top ranking opportunities"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm italic", children: "The SEO Specialist analyzes the site, checks competitor rankings, identifies technical issues, and delivers a prioritized action plan—usually within minutes." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "But it goes deeper than that. Your AI employees can:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Create and manage tasks" }),
              " — They don't just tell you what to do. They create the tasks, assign them, and follow up."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Schedule meetings and send emails" }),
              " — Connected to your calendar and inbox. They handle the logistics."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Generate client reports" }),
              " — Ask for a monthly SEO report and get a shareable link you can send to your client. No more spending Sunday nights in Google Sheets."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Manage ad campaigns" }),
              " — Direct integrations with Google Ads, Meta Ads, and more. They can analyze performance and make recommendations."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Coordinate with each other" }),
              " — AI employees can delegate work to each other, collaborate on projects, and keep things moving without you orchestrating every step."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Here's what this looks like in practice — the SEO Specialist and Content Writer collaborating on a client project:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-border overflow-hidden shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/images/content-writer-delegating-to-graphic-designer.png",
              alt: "Screenshot showing AI employees collaborating - SEO Specialist working with Content Writer on a client project",
              className: "w-full"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-3 italic", children: "Real screenshot from OzziOs. AI employees communicate in channels just like human team members." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16 py-12 border-y border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-foreground mb-6", children: "Meet the Supervisor." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "This is the role that changes everything." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "The Supervisor is an AI employee whose entire job is managing other AI employees. You tell it what you need done, and it figures out who should do it, delegates the work, follows up, and reports back." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: `Think about what this means: you're no longer managing individual tasks or individual employees. You're managing outcomes. You say "I need a content strategy for this client's Q1 launch" and the Supervisor coordinates the research, the writing, the SEO optimization, and the social media planning—across multiple AI employees—without you having to orchestrate any of it.` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground leading-relaxed font-medium", children: "It's like having a project manager who works 24/7 and never drops the ball." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-foreground mb-6", children: "Schedule work like you schedule people." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "Most AI tools give you a chat box. You type something, you get a response, and then... nothing. The AI sits idle until you remember to use it again." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "That's not how real employees work. Real employees have schedules. They have recurring responsibilities. They show up every day and do the work without being asked." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "So we built a dispatch board." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-border overflow-hidden shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/images/task-pool-dispatch-board.png",
              alt: "OzziOs Dispatch Board showing AI employees scheduled on a timeline with task templates",
              className: "w-full"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-3 italic", children: "The Dispatch Board — schedule your AI employees like real team members." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "On the left, you have a Task Pool with pre-built templates for everything your AI employees can do: draft emails, check engagement, create posts, respond to reviews, run research. Drag a task onto an employee's timeline and it's scheduled." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "Tasks can be one-time or recurring. Set your SEO Specialist to audit your client sites every Monday. Have your Content Writer draft the weekly newsletter every Thursday at 9am. Your Social Media Manager can check engagement and respond to comments every afternoon." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground leading-relaxed font-medium mb-4", children: "The dispatch board turns AI from a tool you remember to use into a team that works on autopilot." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "And you can see it all at a glance: who's working, what's scheduled, what's in progress, what's completed. It's the visibility you wish you had with human employees." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16 py-12 border-y border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-foreground mb-6", children: "Automation that actually works." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "Beyond scheduling, we built an enterprise-grade workflow engine into OzziOs. Not because automation is trendy, but because the combination of AI employees + automation creates something genuinely new." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "When a new lead comes in, you can automatically:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "space-y-3 my-6 list-decimal list-inside", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-muted-foreground pl-2", children: "Have an AI employee research the company and enrich the lead data" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-muted-foreground pl-2", children: "Score them based on your criteria" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-muted-foreground pl-2", children: "If qualified, create a draft proposal and notify your team" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-muted-foreground pl-2", children: "If not, send a polite decline email" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "All of this happens without you touching anything. The workflow runs, the AI employees do their jobs, and you only get involved when there's a decision that requires human judgment." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "And these workflows are durable—they survive server restarts, handle failures gracefully, and support human approval steps when you need them. This isn't Zapier. This is infrastructure built for real work." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Here's a workflow that runs three research agents in parallel, then synthesizes their findings into a single report:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-border overflow-hidden shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/images/workflow-builder.png",
              alt: "OzziOs Workflow Builder showing parallel agent execution - Market Trends Analyst, Competitor Analyst, and Customer Insights Analyst running simultaneously, then merging into a Research Synthesizer",
              className: "w-full"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-3 italic", children: "Visual workflow builder with parallel agent execution. Drag, drop, connect — no code required." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Multiple AI employees can work on different parts of a problem simultaneously, and their outputs merge automatically. It's like having a research team that can tackle a project from every angle at once." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16 py-12 border-y border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-foreground mb-6", children: "Cancel everything else." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "OzziOs replaces your entire tool stack:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-8 grid sm:grid-cols-2 gap-4", children: [
          { old: "Slack", now: "Built-in channels, DMs, threads" },
          { old: "Asana/Monday/ClickUp", now: "Native task management" },
          { old: "HubSpot/Salesforce", now: "Full CRM with pipeline" },
          { old: "Hootsuite/Buffer", now: "Social media management" },
          { old: "ChatGPT/Claude", now: "AI employees included" },
          { old: "Zapier/Make", now: "Workflow automation built-in" },
          { old: "Google Meet/Zoom", now: "Huddles for collaboration" },
          { old: "Email marketing tools", now: "Campaign builder included" }
        ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-lg bg-muted/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground line-through text-sm", children: item.old }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground text-sm", children: [
            "→ ",
            item.now
          ] })
        ] }, item.old)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "That's 8+ subscriptions you can cancel. Thousands of dollars per month back in your pocket. And more importantly: one place where everything lives, where your AI employees have full context, and where nothing falls through the cracks." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-foreground mb-6", children: "Let's do the math." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "A mid-level marketing specialist costs $60,000-80,000/year in salary alone. Add benefits, equipment, office space, and management overhead, and you're looking at $80,000-100,000 in total cost." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "That employee works 40 hours a week—2,080 hours a year—minus vacation, sick days, meetings, and all the other time that isn't actual productive work. Realistically, you get maybe 1,200 hours of real output." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "An AI employee on OzziOs works 24/7/365. That's 8,760 hours of availability. They don't take breaks. They don't get distracted. They don't need to be managed. And they cost a fraction of what a human employee costs." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-8 p-6 rounded-lg border border-border bg-muted/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-foreground mb-4", children: "The real math:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "If you have a 100-person agency and you can automate 65% of the repetitive, process-driven work with AI employees, you can deliver the same output with 35 people. The 35 who remain focus on strategy, client relationships, and creative direction—the work that actually requires human judgment." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground leading-relaxed font-medium", children: "This isn't about replacing people. It's about freeing them to do work that matters." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16 py-12 border-y border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-foreground mb-6", children: "Who this is for." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "OzziOs is built for marketing agencies, but the model applies anywhere you have knowledge workers doing repetitive, process-driven tasks:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Digital marketing agencies" }),
              " — SEO, PPC, social media, content marketing"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Creative agencies" }),
              " — Brand strategy, design, campaigns"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Consultancies" }),
              " — Research, analysis, client deliverables"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "In-house marketing teams" }),
              " — Stretched thin and drowning in requests"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "If you're tired of the hiring treadmill, if you're paying for 10 different tools that don't talk to each other, if you want to scale without the chaos—this is for you." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-foreground mb-6", children: "Why now." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: 'AI has been "coming" for a decade. But in the last two years, something fundamentally changed. Models like Claude can now reason, plan, and execute complex tasks. They can hold context across long conversations. They can use tools and take actions.' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "The technology finally exists to build AI that doesn't just answer questions—it does work. Real, substantive, valuable work that used to require a human sitting at a desk." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "We're at an inflection point. The agencies that figure this out first will have an insurmountable advantage. They'll be able to take on more clients, deliver better work, and make more profit—while their competitors are still posting job ads and conducting interviews." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground leading-relaxed font-medium", children: "I'm building OzziOs because I believe this is the future. Not in ten years. Now." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mb-16 py-12 border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "w-8 h-8 text-muted-foreground/30 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-foreground leading-relaxed mb-6", children: '"The best time to plant a tree was 20 years ago. The second best time is now."' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "I don't know if OzziOs will be the platform that defines this new era. But I know the era is coming. The question isn't whether AI will change how agencies work—it's whether you'll be leading that change or reacting to it." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "If you're ready to find out what's possible, I'd love to have you join us." }),
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
                  "Work email ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "*" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "email",
                    type: "email",
                    placeholder: "you@agency.com",
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
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "company", className: "text-sm font-medium", children: "Agency or company" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "company",
                    type: "text",
                    placeholder: "Where do you work?",
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
                    "Request early access",
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
function WaitlistPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(WaitlistView, {});
}
export {
  WaitlistPage as component
};
