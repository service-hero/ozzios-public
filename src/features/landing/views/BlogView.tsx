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
    name: 'Sarah Mitchell',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&auto=format',
    role: 'CEO, OzziOS',
  },
  image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop&auto=format',
  readTime: '8 min read',
  date: 'Dec 28, 2024',
  trending: true,
};

const blogPosts = [
  {
    id: 'replace-8-tools',
    title: 'How We Replaced 8 Marketing Tools with One Platform',
    excerpt: 'Mailchimp, Hootsuite, SEMrush, Asana—we cancelled them all. Here\'s how consolidation saved us $2,400/month.',
    category: 'product',
    author: {
      name: 'Marcus Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format',
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
      name: 'Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&auto=format',
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
      name: 'David Park',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&auto=format',
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
      name: 'Jessica Williams',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&auto=format',
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
      name: 'Alex Thompson',
      avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&auto=format',
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
      name: 'Sarah Mitchell',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&auto=format',
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
        <div
          className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full blur-[120px] opacity-15 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, rgba(251, 146, 60, 0.4) 0%, rgba(234, 88, 12, 0.1) 50%, transparent 70%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <p className="text-[11px] font-semibold text-amber-400/80 uppercase tracking-[0.2em] mb-4">
                Blog
              </p>
              <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-display leading-[1.05] tracking-[-0.02em] text-foreground mb-6">
                Insights for the
                <br />
                <span className="bg-gradient-to-r from-amber-200 via-orange-300 to-amber-200 bg-clip-text text-transparent">
                  AI-first agency
                </span>
              </h1>
              <p className="text-lg text-foreground/40 max-w-xl mx-auto">
                Strategies, case studies, and product updates to help you build an agency that scales without the headcount.
              </p>
            </motion.div>

            {/* Search and Filters */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
              {/* Search */}
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-12 pl-11 pr-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[14px] text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-amber-500/40 focus:bg-white/[0.05] transition-all"
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
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                        : 'text-foreground/50 hover:text-foreground/70 hover:bg-white/[0.05] border border-transparent'
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
                className="group block relative rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden transition-all duration-500 hover:border-white/[0.15] hover:bg-white/[0.03]"
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
                      <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 backdrop-blur-sm">
                        <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                        <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider">
                          Trending
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="relative p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-2.5 py-1 rounded-md bg-indigo-500/20 text-[11px] font-semibold text-indigo-400 uppercase tracking-wider">
                        {categories.find(c => c.id === featuredPost.category)?.label}
                      </span>
                      <span className="text-[12px] text-foreground/30">{featuredPost.date}</span>
                    </div>

                    <h2 className="text-2xl lg:text-3xl font-display text-foreground mb-4 group-hover:text-amber-200 transition-colors">
                      {featuredPost.title}
                    </h2>

                    <p className="text-[15px] text-foreground/50 leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3">
                        <img
                          src={featuredPost.author.avatar}
                          alt={featuredPost.author.name}
                          className="w-10 h-10 rounded-full object-cover ring-2 ring-white/10"
                        />
                        <div>
                          <p className="text-[13px] font-medium text-foreground">
                            {featuredPost.author.name}
                          </p>
                          <p className="text-[11px] text-foreground/40">
                            {featuredPost.author.role}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-[13px] text-foreground/40">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>

                    {/* Read more indicator */}
                    <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 flex items-center gap-2 text-[13px] font-medium text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">
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
                    className="group flex flex-col h-full rounded-xl border border-white/[0.06] bg-white/[0.01] overflow-hidden transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.03]"
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
                        <span className="px-2 py-1 rounded-md bg-black/50 backdrop-blur-sm text-[10px] font-semibold text-foreground/70 uppercase tracking-wider">
                          {categories.find(c => c.id === post.category)?.label}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 flex flex-col">
                      <div className="flex items-center gap-3 mb-3 text-[11px] text-foreground/40">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-foreground/20" />
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-[17px] font-semibold text-foreground mb-3 group-hover:text-amber-200 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-[13px] text-foreground/40 leading-relaxed mb-4 line-clamp-2 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-2 mt-auto pt-4 border-t border-white/[0.06]">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-7 h-7 rounded-full object-cover"
                        />
                        <span className="text-[12px] text-foreground/50">
                          {post.author.name}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-foreground/30 ml-auto opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
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
                <p className="text-foreground/40 text-lg mb-2">No articles found</p>
                <p className="text-foreground/30 text-[14px]">
                  Try adjusting your search or filter
                </p>
              </motion.div>
            )}

            {/* Load more */}
            <motion.div variants={itemVariants} className="mt-16 text-center">
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/[0.1] bg-white/[0.02] text-[14px] font-medium text-foreground/60 hover:text-foreground hover:bg-white/[0.05] hover:border-white/[0.15] transition-all">
                Load more articles
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-24 border-t border-white/[0.06]">
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
            <p className="text-[15px] text-foreground/40 mb-8">
              Weekly strategies for building an AI-first agency. No spam, unsubscribe anytime.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 px-5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[14px] text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-amber-500/40 focus:bg-white/[0.05] transition-all"
              />
              <button className="h-12 px-6 rounded-xl bg-white text-[#0A0A0B] font-medium text-[14px] hover:bg-white/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>

            <p className="mt-4 text-[12px] text-foreground/30">
              Join 2,000+ agency owners already subscribed
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
