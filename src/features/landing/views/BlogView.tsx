'use client';

import { motion } from 'framer-motion';
import { Link } from '@tanstack/react-router';
import { ArrowRight, Clock, Search, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const categories = [
  { id: 'all', label: 'All Posts' },
  { id: 'ai', label: 'AI & Automation' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'agency', label: 'Agency Growth' },
  { id: 'product', label: 'Product Updates' },
];

const featuredPost = {
  id: 'future-of-agency-work',
  title: 'The Future of Agency Work: Why AI Employees Are Inevitable',
  excerpt: 'The agency model is broken. Hiring costs $15-25K per employee, training takes months, and your best people leave—taking institutional knowledge with them. Here\'s how AI changes everything.',
  category: 'ai',
  author: {
    name: 'Garrett Elmore',
    avatar: '/images/garrett-blog-profile-image.jpg',
    role: 'Founder/CEO, OzziOS',
  },
  image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop&auto=format',
  readTime: '8 min read',
  date: 'Dec 28, 2024',
  trending: true,
};

const blogPosts = [
  {
    id: 'gohighlevel-integration',
    title: 'OzziOS Now Integrates with GoHighLevel: Supercharge Your CRM with AI',
    excerpt: 'Connect your GoHighLevel account to OzziOS and let AI agents manage contacts, automate follow-ups, and sync data across your entire marketing stack—all without leaving the platform.',
    category: 'product',
    author: {
      name: 'Garrett Elmore',
      avatar: '/images/garrett-blog-profile-image.jpg',
    },
    image: '/images/ghl_ozzi_integrated_blog_post.jpg',
    readTime: '4 min read',
    date: 'Feb 2, 2025',
  },
  {
    id: 'replace-8-tools',
    title: 'How We Replaced 8 Marketing Tools with One Platform',
    excerpt: 'Mailchimp, Hootsuite, SEMrush, Asana—we cancelled them all. Here\'s how consolidation saved us $2,400/month.',
    category: 'product',
    author: {
      name: 'Garrett Elmore',
      avatar: '/images/garrett-blog-profile-image.jpg',
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format',
    readTime: '5 min read',
    date: 'Dec 22, 2024',
  },
  {
    id: 'ai-seo-strategy',
    title: 'AI-Powered SEO: A Complete Strategy Guide for 2025',
    excerpt: 'Keyword research, technical audits, content optimization—all automated. Learn how AI agents handle SEO at scale.',
    category: 'ai',
    author: {
      name: 'Garrett Elmore',
      avatar: '/images/garrett-blog-profile-image.jpg',
    },
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format',
    readTime: '12 min read',
    date: 'Dec 18, 2024',
  },
  {
    id: 'scaling-without-hiring',
    title: 'Scaling Your Agency Without Adding Headcount',
    excerpt: 'We grew from $50K to $200K MRR with the same team size. The secret? AI employees that work 24/7.',
    category: 'agency',
    author: {
      name: 'Garrett Elmore',
      avatar: '/images/garrett-blog-profile-image.jpg',
    },
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&auto=format',
    readTime: '7 min read',
    date: 'Dec 15, 2024',
  },
  {
    id: 'content-automation',
    title: 'Content Creation at Scale: From 4 Posts to 40 Per Week',
    excerpt: 'Our AI Content Writer generates blog posts, social content, and email campaigns—all in your brand voice.',
    category: 'marketing',
    author: {
      name: 'Garrett Elmore',
      avatar: '/images/garrett-blog-profile-image.jpg',
    },
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&auto=format',
    readTime: '6 min read',
    date: 'Dec 10, 2024',
  },
  {
    id: 'client-reporting-automation',
    title: 'Automated Client Reports That Actually Impress',
    excerpt: 'Stop spending Sundays building reports. Our AI generates interactive dashboards clients can explore themselves.',
    category: 'product',
    author: {
      name: 'Garrett Elmore',
      avatar: '/images/garrett-blog-profile-image.jpg',
    },
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&auto=format',
    readTime: '4 min read',
    date: 'Dec 5, 2024',
  },
  {
    id: 'goodbye-agency-retainers',
    title: 'Why We Fired Our Marketing Agency (And Never Looked Back)',
    excerpt: '$8K/month for work we couldn\'t see. Now we own the AI—full transparency, better results, fraction of the cost.',
    category: 'agency',
    author: {
      name: 'Garrett Elmore',
      avatar: '/images/garrett-blog-profile-image.jpg',
    },
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&auto=format',
    readTime: '9 min read',
    date: 'Nov 28, 2024',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function BlogView() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <div className="tag-neo rounded-full bg-signature/10 border-signature mb-6 inline-flex items-center gap-2">
                <span className="text-[11px] font-semibold text-signature uppercase tracking-wider">
                  Blog
                </span>
              </div>
              <h1 className="text-display font-display text-foreground mb-6">
                Insights for the{' '}
                <span className="text-signature">AI-first agency</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Strategies, case studies, and product updates to help you build an agency that scales without the headcount.
              </p>
            </motion.div>

            {/* Search and Filters */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
              {/* Search */}
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-12 pl-11 pr-4 rounded-lg bg-background border border-border text-[14px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-signature/40 transition-all"
                />
              </div>

              {/* Category filters */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={cn(
                      'px-4 py-2 rounded-full text-[13px] font-medium whitespace-nowrap transition-all duration-300',
                      activeCategory === category.id
                        ? 'bg-signature/10 text-signature border border-signature/30'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted border border-transparent'
                    )}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Featured Post */}
            <motion.div variants={itemVariants} className="mb-16">
              <Link
                to="/blog/$postId"
                params={{ postId: featuredPost.id }}
                className="group block relative rounded-2xl border-2 border-border bg-card overflow-hidden transition-all duration-500 hover:border-signature/30"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto lg:min-h-[400px] overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent lg:block hidden" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent lg:hidden" />

                    {/* Trending badge */}
                    {featuredPost.trending && (
                      <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-signature/10 border border-signature/30 backdrop-blur-sm">
                        <TrendingUp className="w-3.5 h-3.5 text-signature" />
                        <span className="text-[11px] font-semibold text-signature uppercase tracking-wider">
                          Trending
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="relative p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-2.5 py-1 rounded-md bg-signature/10 text-[11px] font-semibold text-signature uppercase tracking-wider">
                        {categories.find(c => c.id === featuredPost.category)?.label}
                      </span>
                      <span className="text-[12px] text-muted-foreground">{featuredPost.date}</span>
                    </div>

                    <h2 className="text-2xl lg:text-3xl font-display text-foreground mb-4 group-hover:text-signature transition-colors">
                      {featuredPost.title}
                    </h2>

                    <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3">
                        <img
                          src={featuredPost.author.avatar}
                          alt={featuredPost.author.name}
                          className="w-10 h-10 rounded-full object-cover ring-2 ring-border"
                        />
                        <div>
                          <p className="text-[13px] font-medium text-foreground">
                            {featuredPost.author.name}
                          </p>
                          <p className="text-[11px] text-muted-foreground">
                            {featuredPost.author.role}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>

                    {/* Read more indicator */}
                    <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 flex items-center gap-2 text-[13px] font-medium text-signature opacity-0 group-hover:opacity-100 transition-opacity">
                      Read article
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Blog Grid */}
            <motion.div
              variants={containerVariants}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredPosts.map((post) => (
                <motion.div key={post.id} variants={itemVariants}>
                  <Link
                    to="/blog/$postId"
                    params={{ postId: post.id }}
                    className="group flex flex-col h-full rounded-xl border-2 border-border bg-card overflow-hidden transition-all duration-500 hover:border-signature/30"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                      {/* Category badge */}
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 rounded-md bg-signature/10 backdrop-blur-sm text-[10px] font-semibold text-signature uppercase tracking-wider">
                          {categories.find(c => c.id === post.category)?.label}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 flex flex-col">
                      <div className="flex items-center gap-3 mb-3 text-[11px] text-muted-foreground">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-border" />
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-[17px] font-semibold text-foreground mb-3 group-hover:text-signature transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-[13px] text-muted-foreground leading-relaxed mb-4 line-clamp-2 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-2 mt-auto pt-4 border-t border-border">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-7 h-7 rounded-full object-cover"
                        />
                        <span className="text-[12px] text-muted-foreground">
                          {post.author.name}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Empty state */}
            {filteredPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-muted-foreground text-lg mb-2">No articles found</p>
                <p className="text-muted-foreground/70 text-[14px]">
                  Try adjusting your search or filter
                </p>
              </motion.div>
            )}

            {/* Load more */}
            <motion.div variants={itemVariants} className="mt-16 text-center">
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-border bg-card text-[14px] font-medium text-foreground hover:border-signature/30 transition-all">
                Load more articles
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-24 bg-muted/50">
        <div className="mx-auto max-w-[600px] px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display text-foreground mb-4">
              Get insights delivered
            </h3>
            <p className="text-[15px] text-muted-foreground mb-8">
              Weekly strategies for building an AI-first agency. No spam, unsubscribe anytime.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 px-5 rounded-lg bg-background border border-border text-[14px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-signature/40 transition-all"
              />
              <button className="h-12 px-6 rounded-lg bg-signature text-white font-medium text-[14px] hover:bg-signature/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>

            <p className="mt-4 text-[12px] text-muted-foreground">
              Join 2,000+ agency owners already subscribed
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
