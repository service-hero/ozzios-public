/**
 * Waitlist Page - Business Owners
 *
 * Long-form founder letter style landing page targeting business owners
 * who want to run their own marketing without hiring an agency.
 */

import { useState, useEffect, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  ArrowRight,
  Quote,
} from 'lucide-react';

// Convex HTTP endpoint for waitlist submission
const WAITLIST_API_URL = 'https://cheerful-dachshund-758.convex.site/waitlist';

// Load signature font
const useSignatureFont = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);
};

// Success state component
function SuccessState({ message }: { message: string }) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md text-center space-y-6"
      >
        <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-foreground" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-foreground">
            You're on the list.
          </h1>
          <p className="text-muted-foreground">
            {message}
          </p>
        </div>

        <p className="text-sm text-muted-foreground pt-6 border-t border-border">
          I'll personally reach out when your spot opens up.
          <br />
          <span
            className="text-foreground text-lg"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            — Garrett
          </span>
        </p>
      </motion.div>
    </div>
  );
}

export function WaitlistBusinessView() {
  useSignatureFont();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [error, setError] = useState('');

  // Form state
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [smsConsent, setSmsConsent] = useState(false);
  const [emailError, setEmailError] = useState('');

  const validateEmail = (value: string) => {
    if (!value) {
      setEmailError('Email is required');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailError('Please enter a valid email address');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) return;

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch(WAITLIST_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name: name || undefined,
          company: company || undefined,
          phone: phone || undefined,
          smsConsent: smsConsent || undefined,
          source: typeof window !== 'undefined' ? `business${window.location.search}` : 'business',
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Something went wrong');
      }

      setSubmitMessage(result.message || "We'll be in touch soon!");
      setIsSubmitted(true);
    } catch (err) {
      console.error('Waitlist submission error:', err);
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return <SuccessState message={submitMessage} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="font-semibold text-foreground">OzziOs</a>
          <Button
            size="sm"
            variant="outline"
            onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join Waitlist
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <header className="max-w-3xl mx-auto px-6 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-muted-foreground mb-4">
            A letter to business owners
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight leading-[1.15] mb-6">
            What if you never had to hire a marketing agency again?
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Your own AI marketing team. No retainers. No mystery. No middlemen.
          </p>
        </motion.div>
      </header>

      {/* Long-form content */}
      <article className="max-w-3xl mx-auto px-6 pb-20">
        <div className="prose prose-neutral dark:prose-invert max-w-none">

          {/* The Problem */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              You're paying for a black box.
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Let me guess: you're paying an agency somewhere between $3,000 and $15,000 a month. Maybe more. And you have no idea what they're actually doing.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              They send you a report once a month. It's full of metrics you don't understand—impressions, CTR, bounce rate, domain authority. They tell you things are "trending in the right direction." They promise results are "just around the corner."
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Meanwhile, the invoices keep coming. And you're left wondering:
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">What are they actually doing all day?</strong> You're paying for 20+ hours a month, but you have no visibility into the work.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Is this the right strategy?</strong> They're the "experts," but their recommendations always seem to require more budget.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Am I getting ripped off?</strong> You've heard horror stories. Agencies charging premium rates while junior employees do the work.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Why does everything take so long?</strong> A simple blog post takes two weeks. A campaign launch takes a month. You're running a business—you don't have time for this.
                </span>
              </li>
            </ul>

            <p className="text-muted-foreground leading-relaxed mb-4">
              The worst part? You feel trapped. You can't fire them because you don't have time to do marketing yourself. You can't hire in-house because a single marketing manager costs $70,000+ and can only do a fraction of what an agency promises. You're stuck in a cycle of paying for work you can't see, can't verify, and aren't sure is working.
            </p>

            <p className="text-foreground leading-relaxed font-medium">
              There's another way.
            </p>
          </section>

          {/* The Vision */}
          <section className="mb-16 py-12 border-y border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Your own marketing team. Finally.
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              OzziOs gives you something agencies never will: your own dedicated marketing team that works for you, reports to you, and shows you exactly what they're doing.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Except these aren't humans on your payroll. They're AI specialists—trained in SEO, content writing, social media, ad management, graphic design, and more. They work 24/7. They never miss deadlines. They never take your business for granted.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              And here's the key difference: <strong className="text-foreground">you can see everything they do.</strong>
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              When your SEO Specialist audits your website, you watch it happen. When your Content Writer drafts a blog post, you see the reasoning. When your Social Media Manager plans next month's content, you're in the conversation. No black boxes. No mystery invoices. No wondering what you're paying for.
            </p>

            <div className="my-8 space-y-6">
              {/* Core Marketing Team */}
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-medium">Your Core Marketing Team</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { role: 'SEO Specialist', does: 'Site audits, keyword research, ranking strategy' },
                    { role: 'Content Writer', does: 'Blog posts, emails, website copy in your voice' },
                    { role: 'Social Media Manager', does: 'Content calendars, posts, engagement' },
                    { role: 'Graphic Designer', does: 'Visual concepts, social graphics, ad creative' },
                    { role: 'Data Analyst', does: 'Performance tracking, ROI reports, insights' },
                    { role: 'Research Assistant', does: 'Competitor analysis, market research' },
                  ].map((agent) => (
                    <div key={agent.role} className="p-3 rounded-lg border border-border bg-muted/30">
                      <p className="font-medium text-foreground text-sm">{agent.role}</p>
                      <p className="text-xs text-muted-foreground">{agent.does}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industry Specialists */}
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-medium">Industry Specialists Available</p>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    { role: 'Local Business', does: 'Google Business Profile, reviews, local SEO' },
                    { role: 'Real Estate', does: 'Listing marketing, lead nurture, property content' },
                    { role: 'Home Services', does: 'Review management, seasonal campaigns, local ads' },
                  ].map((agent) => (
                    <div key={agent.role} className="p-3 rounded-lg border border-border bg-muted/30">
                      <p className="font-medium text-foreground text-sm">{agent.role}</p>
                      <p className="text-xs text-muted-foreground">{agent.does}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              And you can add specialists for any role you need. This isn't a rigid software package—it's a flexible team that grows with your business.
            </p>
          </section>

          {/* How it works */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              It works like having employees. Without the overhead.
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              OzziOs isn't another marketing tool. It's a workspace where you and your AI team collaborate—like Slack, but everyone actually does their job.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              You communicate with your team through channels. Need something done? Just ask:
            </p>

            <div className="my-8 p-6 rounded-lg border border-border bg-muted/20">
              <p className="text-sm text-muted-foreground mb-3">Example:</p>
              <div className="space-y-3">
                <p className="text-foreground">
                  <span className="font-medium">You:</span> @Content-Writer write a blog post about the benefits of regular HVAC maintenance for homeowners. Make it helpful, not salesy.
                </p>
                <p className="text-muted-foreground text-sm italic">
                  Your Content Writer researches the topic, drafts the post in your brand voice, and delivers it—usually within minutes, not weeks.
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Your team can do everything an agency does:
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">SEO audits and optimization</strong> — Find out what's actually hurting your Google rankings and fix it.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Content creation</strong> — Blog posts, emails, social captions, website copy. All in your voice.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Social media management</strong> — Plan, create, and schedule content across all your platforms.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Ad campaign management</strong> — Google Ads, Meta Ads, with real analysis and recommendations.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Google Business Profile</strong> — Keep your listing optimized, respond to reviews, post updates.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Performance reporting</strong> — Actually understand what's working and what's not.
                </span>
              </li>
            </ul>

            {/* Screenshot showing AI collaboration */}
            <div className="my-10">
              <p className="text-sm text-muted-foreground mb-4">
                Here's what it looks like when your team collaborates on a project:
              </p>
              <div className="rounded-lg border border-border overflow-hidden shadow-sm">
                <img
                  src="/images/content-writer-delegating-to-graphic-designer.png"
                  alt="Screenshot showing AI marketing team collaborating on a project"
                  className="w-full"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-3 italic">
                Real screenshot from OzziOs. Your AI team communicates and collaborates just like human employees.
              </p>
            </div>
          </section>

          {/* Autopilot */}
          <section className="mb-16 py-12 border-y border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Set it and forget it. Seriously.
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              You're running a business. You don't have time to manage a marketing team—even an AI one. That's why we built the dispatch board.
            </p>

            {/* Dispatch Board Screenshot */}
            <div className="my-10">
              <div className="rounded-lg border border-border overflow-hidden shadow-sm">
                <img
                  src="/images/task-pool-dispatch-board.png"
                  alt="OzziOs Dispatch Board showing scheduled marketing tasks"
                  className="w-full"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-3 italic">
                Schedule your marketing team's work in advance. They show up and do the job automatically.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Schedule recurring tasks and your team handles them automatically:
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  Every Monday, your SEO Specialist checks your rankings and flags issues
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  Every Tuesday, your Content Writer drafts that week's blog post
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  Every afternoon, your Social Media Manager checks engagement and responds
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  Every Friday, your Data Analyst sends you a performance summary
                </span>
              </li>
            </ul>

            <p className="text-foreground leading-relaxed font-medium">
              Your marketing runs on autopilot. You check in when you want to, not because you have to.
            </p>
          </section>

          {/* The Math */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Let's talk about what you're really paying.
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              The average small business pays $3,000-5,000/month for basic agency services. Mid-market businesses often pay $7,000-15,000+. For a year of agency retainers, you're looking at $36,000 to $180,000.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              And what do you get for that money?
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  A few hours a week of actual work (the rest is "strategy" and meetings)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  Work done by junior employees you've never met
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  Zero visibility into what's actually happening
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  A contract that's hard to get out of
                </span>
              </li>
            </ul>

            <div className="my-8 p-6 rounded-lg border border-border bg-muted/20">
              <p className="text-lg font-semibold text-foreground mb-4">
                With OzziOs:
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You get a full marketing team—SEO, content, social, design, analytics—working for you around the clock. You see everything they do. You can ask for anything, anytime. And it costs a fraction of what you're paying now.
              </p>
            </div>

            <p className="text-foreground leading-relaxed font-medium">
              This isn't about replacing your agency with something cheaper. It's about getting something better.
            </p>
          </section>

          {/* Who this is for */}
          <section className="mb-16 py-12 border-y border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              This is for you if...
            </h2>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">You're tired of agency BS.</strong> The jargon, the vague reports, the feeling that you're being taken for a ride.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">You want control.</strong> You want to know what's happening with your marketing without having to schedule a call.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">You don't have time to become a marketing expert.</strong> You have a business to run. You need a team that handles it.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">You're ready to try something new.</strong> The old way clearly isn't working. This is different.
                </span>
              </li>
            </ul>

            <p className="text-muted-foreground leading-relaxed">
              OzziOs works for local businesses, professional services, e-commerce, real estate, home services—any business that needs marketing but doesn't want to play the agency game.
            </p>
          </section>

          {/* Why now */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              This wasn't possible two years ago.
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              AI has reached a tipping point. The technology now exists to build AI that doesn't just answer questions—it does real work. Strategic work. Creative work. Work that used to require expensive human expertise.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              The agencies know this is coming. They're terrified. They're going to tell you AI can't do what they do, that you need the "human touch," that marketing is too complex for machines.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              They said the same thing about bookkeeping. And tax preparation. And customer service. And design. Every time, they were wrong.
            </p>

            <p className="text-foreground leading-relaxed font-medium">
              The businesses that adopt AI marketing teams first will have an unfair advantage. Lower costs. Faster execution. Complete visibility. While their competitors are still waiting on agency callbacks.
            </p>
          </section>

          {/* Closing */}
          <section className="mb-16 py-12 border-y border-border">
            <div className="flex gap-4">
              <Quote className="w-8 h-8 text-muted-foreground/30 shrink-0" />
              <div>
                <p className="text-xl text-foreground leading-relaxed mb-6">
                  "The best investment you can make is in yourself and your business."
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I built OzziOs because I've seen too many business owners get burned by agencies. Overpromised. Underdelivered. Left in the dark. You deserve better.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You deserve a marketing team that works for you—not one that treats you like a line item on their client roster. You deserve to know exactly what's being done and why. You deserve results without the runaround.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  If you're ready to take back control of your marketing, I'd love to have you join us.
                </p>
                <p className="mt-6 flex items-baseline gap-2">
                  <span
                    className="text-2xl text-foreground"
                    style={{ fontFamily: "'Caveat', cursive" }}
                  >
                    Garrett Elmore
                  </span>
                  <span className="text-muted-foreground text-sm">— Founder</span>
                </p>
              </div>
            </div>
          </section>

        </div>
      </article>

      {/* CTA / Form Section */}
      <section id="join" className="border-t border-border bg-muted/30">
        <div className="max-w-xl mx-auto px-6 py-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              Join the waitlist.
            </h2>
            <p className="text-muted-foreground">
              We're opening access in waves. Early supporters get priority access and founding member pricing.
            </p>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background border border-border rounded-xl p-6 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Field */}
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email <span className="text-muted-foreground">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@yourbusiness.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) validateEmail(e.target.value);
                  }}
                  onBlur={() => validateEmail(email)}
                  className={cn(
                    "h-10",
                    emailError && "border-destructive"
                  )}
                />
                {emailError && (
                  <p className="text-xs text-destructive">{emailError}</p>
                )}
              </div>

              {/* Name Field */}
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-sm font-medium">
                  Your name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="First and last name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-10"
                />
              </div>

              {/* Company Field */}
              <div className="space-y-1.5">
                <Label htmlFor="company" className="text-sm font-medium">
                  Business name
                </Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Your company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="h-10"
                />
              </div>

              {/* Phone Field */}
              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-sm font-medium">
                  Phone number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-10"
                />
              </div>

              {/* SMS Consent Checkbox */}
              <div className="flex items-start gap-3 pt-2">
                <Checkbox
                  id="smsConsent"
                  checked={smsConsent}
                  onCheckedChange={(checked) => setSmsConsent(checked)}
                  className="mt-0.5"
                />
                <Label
                  htmlFor="smsConsent"
                  className="text-sm text-muted-foreground font-normal leading-relaxed cursor-pointer"
                >
                  Send me an SMS when OzziOs launches. I agree to receive a one-time text message. Standard rates may apply.
                </Label>
              </div>

              {/* Error Message */}
              {error && (
                <p className="text-sm text-destructive">{error}</p>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-10"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Joining...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Get early access
                    <ArrowRight className="w-4 h-4" />
                  </span>
                )}
              </Button>
            </form>

            {/* Trust indicators */}
            <div className="mt-5 pt-4 border-t border-border flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-muted-foreground text-xs">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                No credit card
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                Cancel anytime
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                No spam
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
          <a href="/" className="font-medium text-foreground">OzziOs</a>
          <span>© {new Date().getFullYear()} OzziOs. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
