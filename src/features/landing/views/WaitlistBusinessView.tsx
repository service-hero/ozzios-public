/**
 * Waitlist Page - Business Owners
 *
 * Long-form founder letter style landing page targeting home service
 * business owners who want to streamline their operations with AI.
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
const WAITLIST_API_URL = 'https://api.ozzios.com/waitlist';

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
          <span className="text-foreground text-lg font-signature">
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
            A letter to home service business owners
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight leading-[1.15] mb-6">
            What if your home service business ran itself?
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Your own AI operations team. No overhead. No chaos. No missed calls.
          </p>
        </motion.div>
      </header>

      {/* Long-form content */}
      <article className="max-w-3xl mx-auto px-6 pb-20">
        <div className="prose prose-neutral dark:prose-invert max-w-none">

          {/* The Problem */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              You're drowning in the day-to-day.
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Let me guess: you started your home service company because you're great at what you do. HVAC, plumbing, roofing, electrical, landscaping—whatever it is, you know the trade inside and out.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              But now you spend more time answering phones, chasing leads, following up on quotes, managing schedules, and begging customers for reviews than you do actually running your business. You're working 60-hour weeks and still feel like you're falling behind.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Meanwhile, the problems keep piling up:
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Missed calls = lost jobs.</strong> Every call that goes to voicemail is a customer calling your competitor instead.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Follow-ups fall through the cracks.</strong> You sent a quote three days ago. Did you follow up? You can't remember.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Your online presence is an afterthought.</strong> Your Google reviews are stale, your website hasn't been updated in months, and you know you should be posting on social media but who has the time?
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Hiring office help is expensive and risky.</strong> A full-time office manager costs $40,000-55,000/year. A receptionist, a dispatcher, a bookkeeper—it adds up fast.
                </span>
              </li>
            </ul>

            <p className="text-muted-foreground leading-relaxed mb-4">
              The worst part? You feel trapped. You can't grow because you're stuck doing everything yourself. You can't hire because the margins are too tight. You're working harder than ever but your business isn't getting any easier to run.
            </p>

            <p className="text-foreground leading-relaxed font-medium">
              There's another way.
            </p>
          </section>

          {/* The Vision */}
          <section className="mb-16 py-12 border-y border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Your own operations team. Finally.
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              OzziOs gives you something you've never had before: a dedicated team that handles scheduling, dispatch, customer follow-ups, reviews, invoicing, and marketing—so you can focus on growing your business.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Except these aren't employees on your payroll. They're AI specialists—trained in the daily operations of home service companies. They work 24/7. They never miss a call. They never forget to follow up.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              And here's the key difference: <strong className="text-foreground">you can see everything they do.</strong>
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              When your Dispatch Coordinator schedules a job, you see it happen. When your Customer Follow-Up Specialist sends a review request, you see the message. When your Marketing Manager plans next week's social posts, you're in the loop. No guesswork. No surprises.
            </p>

            <div className="my-8 space-y-6">
              {/* Core Operations Team */}
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-medium">Your Core Operations Team</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { role: 'Dispatch Coordinator', does: 'Job scheduling, technician routing, calendar management' },
                    { role: 'Customer Follow-Up Specialist', does: 'Quote follow-ups, review requests, satisfaction checks' },
                    { role: 'Marketing Manager', does: 'Social media, Google Business Profile, local SEO' },
                    { role: 'Content Writer', does: 'Blog posts, emails, website copy in your voice' },
                    { role: 'Bookkeeping Assistant', does: 'Invoice tracking, payment reminders, expense reports' },
                    { role: 'Research Assistant', does: 'Competitor analysis, market pricing, service area insights' },
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
                    { role: 'HVAC / Plumbing', does: 'Seasonal campaigns, maintenance reminders, emergency dispatch' },
                    { role: 'Roofing / Exterior', does: 'Storm response, inspection scheduling, insurance follow-ups' },
                    { role: 'Landscaping / Cleaning', does: 'Recurring service management, route optimization, upsells' },
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
              OzziOs isn't another app to check. It's a workspace where you and your AI team collaborate—like having an office manager, dispatcher, and marketing team all in one place.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              You communicate with your team through channels. Need something done? Just ask:
            </p>

            <div className="my-8 p-6 rounded-lg border border-border bg-muted/20">
              <p className="text-sm text-muted-foreground mb-3">Example:</p>
              <div className="space-y-3">
                <p className="text-foreground">
                  <span className="font-medium">You:</span> @Customer-Follow-Up send review requests to everyone we serviced this week. Personalize each one with the job we did.
                </p>
                <p className="text-muted-foreground text-sm italic">
                  Your Customer Follow-Up Specialist pulls the week's completed jobs, drafts personalized review requests for each customer, and sends them—usually within minutes.
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Your team handles the daily operations that eat up your time:
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Scheduling and dispatch</strong> — Book jobs, route technicians, and manage your calendar automatically.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Customer follow-ups</strong> — Quote reminders, post-job check-ins, and review requests on autopilot.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Review management</strong> — Get more 5-star reviews and respond to every one professionally.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Local SEO and Google Business Profile</strong> — Keep your listing optimized, post updates, and dominate local search.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Social media and content</strong> — Before-and-after posts, seasonal tips, and community engagement.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Invoicing and payment follow-ups</strong> — Send invoices, track payments, and chase outstanding balances.
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
                  alt="Screenshot showing AI operations team collaborating on a project"
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
              You're running a business. You don't have time to manage a team—even an AI one. That's why we built the dispatch board.
            </p>

            {/* Dispatch Board Screenshot */}
            <div className="my-10">
              <div className="rounded-lg border border-border overflow-hidden shadow-sm">
                <img
                  src="/images/task-pool-dispatch-board.png"
                  alt="OzziOs Dispatch Board showing scheduled business operations"
                  className="w-full"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-3 italic">
                Schedule your operations team's work in advance. They show up and do the job automatically.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Schedule recurring tasks and your team handles them automatically:
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  Every morning, your Dispatch Coordinator reviews the day's jobs and optimizes routes
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  Every afternoon, your Customer Follow-Up Specialist sends review requests for completed jobs
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  Every Wednesday, your Marketing Manager posts before-and-after photos to social media
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  Every Friday, your Bookkeeping Assistant sends you a revenue summary and flags unpaid invoices
                </span>
              </li>
            </ul>

            <p className="text-foreground leading-relaxed font-medium">
              Your business runs on autopilot. You check in when you want to, not because you have to.
            </p>
          </section>

          {/* The Math */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Let's talk about what you're really paying.
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              The average home service company spends $3,000-8,000/month on office staff, outsourced answering services, marketing, and software subscriptions. For a year, that's $36,000 to $96,000 in monthly overhead—before you've paid a single technician.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              And what do you get for that money?
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  An office manager who can only handle so many calls at once
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  An answering service that reads from a script and can't actually book jobs
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  Marketing you're either doing yourself (badly) or paying someone else to do (expensively)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  Five different software subscriptions that don't talk to each other
                </span>
              </li>
            </ul>

            <div className="my-8 p-6 rounded-lg border border-border bg-muted/20">
              <p className="text-lg font-semibold text-foreground mb-4">
                With OzziOs:
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You get a full operations team—dispatch, follow-ups, reviews, marketing, bookkeeping—working for you around the clock. You see everything they do. You can ask for anything, anytime. And it costs a fraction of what you're paying now.
              </p>
            </div>

            <p className="text-foreground leading-relaxed font-medium">
              This isn't about cutting corners. It's about running a smarter business.
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
                  <strong className="text-foreground">You're tired of doing everything yourself.</strong> You started a service company, not an office job. But that's what it's become.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">You're losing jobs to missed calls and slow follow-ups.</strong> You know every unanswered call is money walking out the door.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">You can't afford a full office staff yet.</strong> But you need the help. You need a team that handles it without breaking the bank.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">You're ready to grow.</strong> You know you could take on more jobs if the back office wasn't holding you back.
                </span>
              </li>
            </ul>

            <p className="text-muted-foreground leading-relaxed">
              OzziOs works for HVAC, plumbing, roofing, electrical, landscaping, cleaning, pest control, painting—any home service business that wants to stop surviving and start scaling.
            </p>
          </section>

          {/* Why now */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              This wasn't possible two years ago.
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              AI has reached a tipping point. The technology now exists to build AI that doesn't just answer questions—it does real work. Scheduling, follow-ups, marketing, bookkeeping. Work that used to require expensive staff or outsourcing costs you couldn't justify.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              The big franchise operations already have dedicated office teams handling all of this. That's their advantage. They have dispatchers, customer service reps, marketing departments, and bookkeepers on staff.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Now you can have the same thing—without the payroll.
            </p>

            <p className="text-foreground leading-relaxed font-medium">
              The service companies that adopt AI operations teams first will have an unfair advantage. Lower costs. Faster response times. No missed opportunities. While their competitors are still letting calls go to voicemail.
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
                  I built OzziOs because I've seen too many home service business owners work themselves to the bone trying to do everything. Answering calls at dinner. Sending invoices at midnight. Forgetting to follow up on that big quote because they were on a job site all day.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You deserve an operations team that works for you—one that never misses a call, never forgets a follow-up, and never lets a customer slip through the cracks. You deserve to focus on what you're good at: running your business and doing great work.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  If you're ready to take back control of your time, I'd love to have you join us.
                </p>
                <p className="mt-6 flex items-baseline gap-2">
                  <span className="text-2xl text-foreground font-signature">
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
