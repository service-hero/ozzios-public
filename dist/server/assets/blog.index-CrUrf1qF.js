import { a as reactExports, n as jsxRuntimeExports } from "./worker-entry-DUbV-qEz.js";
import { L as Link } from "./router-BLJT3Mxm.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { m as motion, A as ArrowRight } from "./proxy-BEnWwJWi.js";
import { S as Search } from "./search-DUL7xjOG.js";
import { T as TrendingUp } from "./trending-up-5m60Ya75.js";
import { C as Clock } from "./clock-oQ2YqCyM.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "./createLucideIcon-OQXTLfCE.js";
const categories = [
  { id: "all", label: "All Posts" },
  { id: "ai", label: "AI & Automation" },
  { id: "marketing", label: "Marketing" },
  { id: "agency", label: "Agency Growth" },
  { id: "product", label: "Product Updates" }
];
const featuredPost = {
  id: "future-of-agency-work",
  title: "The Future of Agency Work: Why AI Employees Are Inevitable",
  excerpt: "The agency model is broken. Hiring costs $15-25K per employee, training takes months, and your best people leave—taking institutional knowledge with them. Here's how AI changes everything.",
  category: "ai",
  author: {
    name: "Garrett Elmore",
    avatar: "/images/garrett-blog-profile-image.jpg",
    role: "Founder/CEO, OzziOS"
  },
  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop&auto=format",
  readTime: "8 min read",
  date: "Dec 28, 2024"
};
const blogPosts = [
  {
    id: "gohighlevel-integration",
    title: "OzziOS Now Integrates with GoHighLevel: Supercharge Your CRM with AI",
    excerpt: "Connect your GoHighLevel account to OzziOS and let AI agents manage contacts, automate follow-ups, and sync data across your entire marketing stack—all without leaving the platform.",
    category: "product",
    author: {
      name: "Garrett Elmore",
      avatar: "/images/garrett-blog-profile-image.jpg"
    },
    image: "/images/ghl_ozzi_integrated_blog_post.jpg",
    readTime: "4 min read",
    date: "Feb 2, 2025"
  },
  {
    id: "replace-8-tools",
    title: "How We Replaced 8 Marketing Tools with One Platform",
    excerpt: "Mailchimp, Hootsuite, SEMrush, Asana—we cancelled them all. Here's how consolidation saved us $2,400/month.",
    category: "product",
    author: {
      name: "Garrett Elmore",
      avatar: "/images/garrett-blog-profile-image.jpg"
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format",
    readTime: "5 min read",
    date: "Dec 22, 2024"
  },
  {
    id: "ai-seo-strategy",
    title: "AI-Powered SEO: A Complete Strategy Guide for 2025",
    excerpt: "Keyword research, technical audits, content optimization—all automated. Learn how AI agents handle SEO at scale.",
    category: "ai",
    author: {
      name: "Garrett Elmore",
      avatar: "/images/garrett-blog-profile-image.jpg"
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",
    readTime: "12 min read",
    date: "Dec 18, 2024"
  },
  {
    id: "scaling-without-hiring",
    title: "Scaling Your Agency Without Adding Headcount",
    excerpt: "We grew from $50K to $200K MRR with the same team size. The secret? AI employees that work 24/7.",
    category: "agency",
    author: {
      name: "Garrett Elmore",
      avatar: "/images/garrett-blog-profile-image.jpg"
    },
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&auto=format",
    readTime: "7 min read",
    date: "Dec 15, 2024"
  },
  {
    id: "content-automation",
    title: "Content Creation at Scale: From 4 Posts to 40 Per Week",
    excerpt: "Our AI Content Writer generates blog posts, social content, and email campaigns—all in your brand voice.",
    category: "marketing",
    author: {
      name: "Garrett Elmore",
      avatar: "/images/garrett-blog-profile-image.jpg"
    },
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&auto=format",
    readTime: "6 min read",
    date: "Dec 10, 2024"
  },
  {
    id: "client-reporting-automation",
    title: "Automated Client Reports That Actually Impress",
    excerpt: "Stop spending Sundays building reports. Our AI generates interactive dashboards clients can explore themselves.",
    category: "product",
    author: {
      name: "Garrett Elmore",
      avatar: "/images/garrett-blog-profile-image.jpg"
    },
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&auto=format",
    readTime: "4 min read",
    date: "Dec 5, 2024"
  },
  {
    id: "goodbye-agency-retainers",
    title: "Why We Fired Our Marketing Agency (And Never Looked Back)",
    excerpt: "$8K/month for work we couldn't see. Now we own the AI—full transparency, better results, fraction of the cost.",
    category: "agency",
    author: {
      name: "Garrett Elmore",
      avatar: "/images/garrett-blog-profile-image.jpg"
    },
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&auto=format",
    readTime: "9 min read",
    date: "Nov 28, 2024"
  }
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};
function BlogView() {
  const [activeCategory, setActiveCategory] = reactExports.useState("all");
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-pattern opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: "hidden",
          animate: "visible",
          variants: containerVariants,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "text-center mb-16", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tag-neo rounded-full bg-signature/10 border-signature mb-6 inline-flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold text-signature uppercase tracking-wider", children: "Blog" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-display font-display text-foreground mb-6", children: [
                "Insights for the",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-signature", children: "AI-first agency" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-xl mx-auto", children: "Strategies, case studies, and product updates to help you build an agency that scales without the headcount." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "flex flex-col sm:flex-row items-center justify-between gap-6 mb-12", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full sm:w-80", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Search articles...",
                    value: searchQuery,
                    onChange: (e) => setSearchQuery(e.target.value),
                    className: "w-full h-12 pl-11 pr-4 rounded-lg bg-background border border-border text-[14px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-signature/40 transition-all"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto", children: categories.map((category) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setActiveCategory(category.id),
                  className: cn(
                    "px-4 py-2 rounded-full text-[13px] font-medium whitespace-nowrap transition-all duration-300",
                    activeCategory === category.id ? "bg-signature/10 text-signature border border-signature/30" : "text-muted-foreground hover:text-foreground hover:bg-muted border border-transparent"
                  ),
                  children: category.label
                },
                category.id
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "mb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/blog/$postId",
                params: { postId: featuredPost.id },
                className: "group block relative rounded-2xl border-2 border-border bg-card overflow-hidden transition-all duration-500 hover:border-signature/30",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-64 lg:h-auto lg:min-h-[400px] overflow-hidden", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: featuredPost.image,
                        alt: featuredPost.title,
                        className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent lg:block hidden" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent lg:hidden" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-signature/10 border border-signature/30 backdrop-blur-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-3.5 h-3.5 text-signature" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold text-signature uppercase tracking-wider", children: "Trending" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-8 lg:p-12 flex flex-col justify-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-1 rounded-md bg-signature/10 text-[11px] font-semibold text-signature uppercase tracking-wider", children: categories.find((c) => c.id === featuredPost.category)?.label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-muted-foreground", children: featuredPost.date })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl lg:text-3xl font-display text-foreground mb-4 group-hover:text-signature transition-colors", children: featuredPost.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] text-muted-foreground leading-relaxed mb-6", children: featuredPost.excerpt }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-auto", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "img",
                          {
                            src: featuredPost.author.avatar,
                            alt: featuredPost.author.name,
                            className: "w-10 h-10 rounded-full object-cover ring-2 ring-border"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-foreground", children: featuredPost.author.name }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: featuredPost.author.role })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[13px] text-muted-foreground", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }),
                        featuredPost.readTime
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-8 right-8 lg:bottom-12 lg:right-12 flex items-center gap-2 text-[13px] font-medium text-signature opacity-0 group-hover:opacity-100 transition-opacity", children: [
                      "Read article",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 transition-transform group-hover:translate-x-1" })
                    ] })
                  ] })
                ] })
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                variants: containerVariants,
                className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
                children: filteredPosts.map((post) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/blog/$postId",
                    params: { postId: post.id },
                    className: "group flex flex-col h-full rounded-xl border-2 border-border bg-card overflow-hidden transition-all duration-500 hover:border-signature/30",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-48 overflow-hidden", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "img",
                          {
                            src: post.image,
                            alt: post.title,
                            className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-1 rounded-md bg-signature/10 backdrop-blur-sm text-[10px] font-semibold text-signature uppercase tracking-wider", children: categories.find((c) => c.id === post.category)?.label }) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-6 flex flex-col", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3 text-[11px] text-muted-foreground", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: post.date }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 rounded-full bg-border" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                            post.readTime
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[17px] font-semibold text-foreground mb-3 group-hover:text-signature transition-colors line-clamp-2", children: post.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-muted-foreground leading-relaxed mb-4 line-clamp-2 flex-1", children: post.excerpt }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-auto pt-4 border-t border-border", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "img",
                            {
                              src: post.author.avatar,
                              alt: post.author.name,
                              className: "w-7 h-7 rounded-full object-cover"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-muted-foreground", children: post.author.name }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" })
                        ] })
                      ] })
                    ]
                  }
                ) }, post.id))
              }
            ),
            filteredPosts.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                className: "text-center py-20",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg mb-2", children: "No articles found" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground/70 text-[14px]", children: "Try adjusting your search or filter" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "mt-16 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-border bg-card text-[14px] font-medium text-foreground hover:border-signature/30 transition-all", children: [
              "Load more articles",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
            ] }) })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 bg-muted/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[600px] px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-display text-foreground mb-4", children: "Get insights delivered" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] text-muted-foreground mb-8", children: "Weekly strategies for building an AI-first agency. No spam, unsubscribe anytime." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "email",
                placeholder: "Enter your email",
                className: "flex-1 h-12 px-5 rounded-lg bg-background border border-border text-[14px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-signature/40 transition-all"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "h-12 px-6 rounded-lg bg-signature text-white font-medium text-[14px] hover:bg-signature/90 transition-colors whitespace-nowrap", children: "Subscribe" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-[12px] text-muted-foreground", children: "Join 2,000+ agency owners already subscribed" })
        ]
      }
    ) }) })
  ] });
}
function BlogIndexPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BlogView, {});
}
export {
  BlogIndexPage as component
};
