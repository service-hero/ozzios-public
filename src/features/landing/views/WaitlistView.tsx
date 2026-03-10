/**
 * Waitlist Page
 *
 * Long-form founder letter style landing page.
 * Tells the story of why OzziOs exists and the problem it solves
 * for home service companies.
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

export function WaitlistView() {
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
          source: typeof window !== 'undefined' ? window.location.search : undefined,
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
            A letter from the founder
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight leading-[1.15] mb-6">
            What if your growing service company had a full back-office team on day one?
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're not building another SaaS tool. We're building a workforce.
          </p>
        </motion.div>
      </header>

      {/* Long-form content */}
      <article className="max-w-3xl mx-auto px-6 pb-20">
        <div className="prose prose-neutral dark:prose-invert max-w-none">

          {/* The Problem */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              The home service business model is broken.
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              I've spent years working with home service companies, and I've watched the same pattern hold businesses back over and over again.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              You land a big job. You need to hire more techs. You train them for weeks. They finally become productive. Then they leave. Or the seasonal slowdown hits. Or both happen at the same time, and suddenly you're paying for a team with not enough work to keep them busy.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              The math never works. Here's what most service business owners don't talk about:
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Every missed call costs you $200-500 in lost revenue.</strong> And when you're on a job site, every call goes to voicemail.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Office staff costs $40,000-55,000/year each.</strong> A dispatcher, a receptionist, a bookkeeper—that's over $120,000 before benefits.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Your best techs get poached.</strong> The ones who finally know your systems, your customers, your standards—they're the first to leave for a bigger company.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Growth is capped by your back office.</strong> You can only take on as many jobs as you can schedule, dispatch, follow up on, and invoice.
                </span>
              </li>
            </ul>

            <p className="text-muted-foreground leading-relaxed mb-4">
              And that's before we talk about the tool sprawl. The average home service company uses 5-8 different software products. ServiceTitan or Housecall Pro for scheduling. QuickBooks for invoicing. Google Sheets for tracking leads. A CRM you never update. Some social media tool you signed up for and forgot about. Each one adds friction, costs money, and creates another place where information gets lost.
            </p>

            <p className="text-foreground leading-relaxed font-medium">
              I got tired of watching great tradespeople struggle with this. So I decided to change the game entirely.
            </p>
          </section>

          {/* The Vision */}
          <section className="mb-16 py-12 border-y border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              A different kind of company.
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              OzziOs isn't software. It's a workforce.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              When you sign up, you're not getting another dashboard to check. You're getting employees. AI employees who specialize in the exact roles your service business needs—and who never quit, never call in sick, never need a raise, and never take your best customers with them when they leave.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              These aren't chatbots. They're not glorified auto-responders. They're agents that actually do work. We have 20+ pre-built specialists ready to deploy:
            </p>

            <div className="my-8 space-y-6">
              {/* Operations Agents */}
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-medium">Operations Agents — Handle your daily business</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { role: 'Supervisor', does: 'Coordinates the team, delegates tasks, keeps operations moving' },
                    { role: 'Dispatch Coordinator', does: 'Job scheduling, technician routing, calendar management' },
                    { role: 'Customer Follow-Up Specialist', does: 'Quote follow-ups, review requests, satisfaction checks' },
                    { role: 'Marketing Manager', does: 'Social media, Google Business Profile, local SEO' },
                    { role: 'Content Writer', does: 'Blog posts, emails, website copy in your voice' },
                    { role: 'Bookkeeping Assistant', does: 'Invoice tracking, payment reminders, expense reports' },
                    { role: 'Data Analyst', does: 'Performance metrics, revenue trends, actionable reports' },
                    { role: 'GBP Expert', does: 'Google Business Profile optimization, review responses' },
                    { role: 'Research Assistant', does: 'Competitor pricing, market analysis, service area insights' },
                  ].map((agent) => (
                    <div key={agent.role} className="p-3 rounded-lg border border-border bg-muted/30">
                      <p className="font-medium text-foreground text-sm">{agent.role}</p>
                      <p className="text-xs text-muted-foreground">{agent.does}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Executive Agents */}
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-medium">Executive Agents — Business-wide oversight</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { role: 'CEO Agent', does: 'Revenue analytics, growth insights, strategic planning' },
                    { role: 'General Manager', does: 'Cross-location coordination, resource allocation' },
                    { role: 'Analytics Director', does: 'Aggregated metrics, benchmarking, ROI analysis' },
                    { role: 'Operations Manager', does: 'Workflow optimization, capacity planning' },
                  ].map((agent) => (
                    <div key={agent.role} className="p-3 rounded-lg border border-border bg-muted/30">
                      <p className="font-medium text-foreground text-sm">{agent.role}</p>
                      <p className="text-xs text-muted-foreground">{agent.does}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industry Agents */}
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-medium">Industry-Specific — Specialized expertise</p>
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

            <p className="text-muted-foreground leading-relaxed mb-4">
              And this is just the beginning. You can create custom agents for any role you can imagine, and we're adding new specialists every week.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              And here's what makes this different from every other AI tool you've tried: they remember everything. Every customer preference. Every past conversation. Every job detail. They build up institutional knowledge that used to walk out the door every time an employee left.
            </p>
          </section>

          {/* How it works */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              How it actually works.
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              OzziOs is built around channels—like Slack, but with AI employees as first-class team members.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Each service area or location gets its own channel. Your AI employees are assigned to that channel and immediately have context about that area—the customer base, seasonal patterns, local competition, service history. When you @mention an employee, they get to work.
            </p>

            <div className="my-8 p-6 rounded-lg border border-border bg-muted/20">
              <p className="text-sm text-muted-foreground mb-3">Example:</p>
              <div className="space-y-3">
                <p className="text-foreground">
                  <span className="font-medium">You:</span> @Customer-Follow-Up send review requests to every customer we serviced this week. Personalize each one with the job we completed.
                </p>
                <p className="text-muted-foreground text-sm italic">
                  The Customer Follow-Up Specialist pulls the week's completed jobs, drafts personalized review requests for each customer, and sends them—usually within minutes.
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">
              But it goes deeper than that. Your AI employees can:
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Schedule and dispatch jobs</strong> — They don't just tell you what to do. They book the appointment, assign the tech, and send the confirmation.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Follow up on quotes and send reminders</strong> — Connected to your CRM. They chase leads so you don't have to.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Generate customer reports and invoices</strong> — Job summaries, payment tracking, and revenue reports you can review in seconds.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Manage your online presence</strong> — Google Business Profile, review responses, social media posts, and local SEO.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Coordinate with each other</strong> — AI employees can delegate work to each other, collaborate on projects, and keep things moving without you orchestrating every step.
                </span>
              </li>
            </ul>

            {/* Screenshot showing AI collaboration */}
            <div className="my-10">
              <p className="text-sm text-muted-foreground mb-4">
                Here's what this looks like in practice — the Dispatch Coordinator and Customer Follow-Up Specialist collaborating on a service project:
              </p>
              <div className="rounded-lg border border-border overflow-hidden shadow-sm">
                <img
                  src="/images/content-writer-delegating-to-graphic-designer.png"
                  alt="Screenshot showing AI employees collaborating - operations team working together on a service project"
                  className="w-full"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-3 italic">
                Real screenshot from OzziOs. AI employees communicate in channels just like human team members.
              </p>
            </div>
          </section>

          {/* The Supervisor */}
          <section className="mb-16 py-12 border-y border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Meet the Supervisor.
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              This is the role that changes everything.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              The Supervisor is an AI employee whose entire job is managing other AI employees. You tell it what you need done, and it figures out who should do it, delegates the work, follows up, and reports back.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Think about what this means: you're no longer managing individual tasks or individual employees. You're managing outcomes. You say "I need to launch a seasonal AC tune-up campaign across all our service areas" and the Supervisor coordinates the marketing, the scheduling, the customer outreach, and the follow-ups—across multiple AI employees—without you having to orchestrate any of it.
            </p>

            <p className="text-foreground leading-relaxed font-medium">
              It's like having an operations manager who works 24/7 and never drops the ball.
            </p>
          </section>

          {/* The Dispatch Board */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Schedule work like you schedule people.
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Most AI tools give you a chat box. You type something, you get a response, and then... nothing. The AI sits idle until you remember to use it again.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              That's not how real employees work. Real employees have schedules. They have recurring responsibilities. They show up every day and do the work without being asked.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              So we built a dispatch board.
            </p>

            {/* Dispatch Board Screenshot */}
            <div className="my-10">
              <div className="rounded-lg border border-border overflow-hidden shadow-sm">
                <img
                  src="/images/task-pool-dispatch-board.png"
                  alt="OzziOs Dispatch Board showing AI employees scheduled on a timeline with task templates"
                  className="w-full"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-3 italic">
                The Dispatch Board — schedule your AI employees like real team members.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">
              On the left, you have a Task Pool with pre-built templates for everything your AI employees can do: follow up on quotes, request reviews, schedule maintenance reminders, post to social media, send payment reminders. Drag a task onto an employee's timeline and it's scheduled.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Tasks can be one-time or recurring. Set your Dispatch Coordinator to optimize routes every morning. Have your Customer Follow-Up Specialist send review requests every afternoon. Your Marketing Manager can post before-and-after photos every Wednesday.
            </p>

            <p className="text-foreground leading-relaxed font-medium mb-4">
              The dispatch board turns AI from a tool you remember to use into a team that works on autopilot.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              And you can see it all at a glance: who's working, what's scheduled, what's in progress, what's completed. It's the visibility you wish you had with human employees.
            </p>
          </section>

          {/* Workflows */}
          <section className="mb-16 py-12 border-y border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Automation that actually works.
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Beyond scheduling, we built an enterprise-grade workflow engine into OzziOs. Not because automation is trendy, but because the combination of AI employees + automation creates something genuinely new.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              When a new service request comes in, you can automatically:
            </p>

            <ol className="space-y-3 my-6 list-decimal list-inside">
              <li className="text-muted-foreground pl-2">
                Have an AI employee qualify the lead and gather job details
              </li>
              <li className="text-muted-foreground pl-2">
                Check technician availability and schedule the appointment
              </li>
              <li className="text-muted-foreground pl-2">
                Send the customer a confirmation with tech details and arrival window
              </li>
              <li className="text-muted-foreground pl-2">
                After the job, trigger a review request and follow-up survey
              </li>
            </ol>

            <p className="text-muted-foreground leading-relaxed mb-4">
              All of this happens without you touching anything. The workflow runs, the AI employees do their jobs, and you only get involved when there's a decision that requires human judgment.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              And these workflows are durable—they survive server restarts, handle failures gracefully, and support human approval steps when you need them. This isn't Zapier. This is infrastructure built for real work.
            </p>

            {/* Workflow Builder Screenshot */}
            <div className="my-10">
              <p className="text-sm text-muted-foreground mb-4">
                Here's a workflow that handles a new service request end-to-end—from lead qualification to post-job follow-up:
              </p>
              <div className="rounded-lg border border-border overflow-hidden shadow-sm">
                <img
                  src="/images/workflow-builder.png"
                  alt="OzziOs Workflow Builder showing parallel agent execution - Lead Qualifier, Dispatch Coordinator, and Customer Follow-Up Specialist working together on a service request"
                  className="w-full"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-3 italic">
                Visual workflow builder with parallel agent execution. Drag, drop, connect — no code required.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Multiple AI employees can work on different parts of a job simultaneously, and their outputs merge automatically. It's like having an operations team that can tackle every aspect of a service request at once.
            </p>
          </section>

          {/* One Platform */}
          <section className="mb-16 py-12 border-y border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Cancel everything else.
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              OzziOs replaces your entire tool stack:
            </p>

            <div className="my-8 grid sm:grid-cols-2 gap-4">
              {[
                { old: 'Answering services', now: 'AI handles calls and booking' },
                { old: 'ServiceTitan/Housecall Pro', now: 'Built-in scheduling and dispatch' },
                { old: 'QuickBooks', now: 'Invoicing and payment tracking' },
                { old: 'Podium/Birdeye', now: 'Review management built-in' },
                { old: 'ChatGPT/Claude', now: 'AI employees included' },
                { old: 'Zapier/Make', now: 'Workflow automation built-in' },
                { old: 'Hootsuite/Buffer', now: 'Social media management' },
                { old: 'Mailchimp', now: 'Email campaigns included' },
              ].map((item) => (
                <div key={item.old} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                  <span className="text-muted-foreground line-through text-sm">{item.old}</span>
                  <span className="text-foreground text-sm">→ {item.now}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">
              That's 8+ subscriptions you can cancel. Thousands of dollars per month back in your pocket. And more importantly: one place where everything lives, where your AI employees have full context, and where nothing falls through the cracks.
            </p>
          </section>

          {/* The Math */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Let's do the math.
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              A full-time office manager costs $45,000-55,000/year in salary alone. Add a dispatcher, a bookkeeper, and a part-time marketing person, and you're looking at $150,000-200,000 in total overhead—before benefits and equipment.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Those employees work 40 hours a week—2,080 hours a year—minus vacation, sick days, and all the other time that isn't actual productive work. Realistically, you get maybe 1,200 hours of real output from each.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              An AI employee on OzziOs works 24/7/365. That's 8,760 hours of availability. They don't take breaks. They don't get distracted. They don't need to be managed. And they cost a fraction of what human office staff costs.
            </p>

            <div className="my-8 p-6 rounded-lg border border-border bg-muted/20">
              <p className="text-lg font-semibold text-foreground mb-4">
                The real math:
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you're a growing service company and you can automate 65% of the repetitive, process-driven back-office work with AI employees, you can deliver the same customer experience with a fraction of the office staff. The people who remain focus on complex customer issues, in-person relationships, and growing the business—the work that actually requires human judgment.
              </p>
            </div>

            <p className="text-foreground leading-relaxed font-medium">
              This isn't about replacing people. It's about freeing you to focus on the work that matters.
            </p>
          </section>

          {/* Who this is for */}
          <section className="mb-16 py-12 border-y border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Who this is for.
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              OzziOs is built for home service companies, but the model applies anywhere you have back-office operations eating into your margins:
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">HVAC, plumbing, and electrical</strong> — Scheduling, dispatch, maintenance reminders, emergency response
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Roofing and exterior services</strong> — Storm response, inspection scheduling, insurance coordination
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Landscaping and cleaning</strong> — Recurring service management, route optimization, seasonal campaigns
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Pest control, painting, and general contracting</strong> — Lead management, quote follow-ups, customer retention
                </span>
              </li>
            </ul>

            <p className="text-muted-foreground leading-relaxed">
              If you're tired of missed calls, if you're paying for 5 different tools that don't talk to each other, if you want to grow without the chaos—this is for you.
            </p>
          </section>

          {/* Why now */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Why now.
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              AI has been "coming" for a decade. But in the last two years, something fundamentally changed. Models like Claude can now reason, plan, and execute complex tasks. They can hold context across long conversations. They can use tools and take actions.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              The technology finally exists to build AI that doesn't just answer questions—it does work. Real, substantive, valuable work that used to require someone sitting at a desk answering phones and managing schedules.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              We're at an inflection point. The service companies that figure this out first will have an insurmountable advantage. They'll be able to take on more jobs, deliver better customer experiences, and grow faster—while their competitors are still letting calls go to voicemail and forgetting to follow up on quotes.
            </p>

            <p className="text-foreground leading-relaxed font-medium">
              I'm building OzziOs because I believe this is the future. Not in ten years. Now.
            </p>
          </section>

          {/* Closing */}
          <section className="mb-16 py-12 border-y border-border">
            <div className="flex gap-4">
              <Quote className="w-8 h-8 text-muted-foreground/30 shrink-0" />
              <div>
                <p className="text-xl text-foreground leading-relaxed mb-6">
                  "The best time to plant a tree was 20 years ago. The second best time is now."
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I don't know if OzziOs will be the platform that defines this new era. But I know the era is coming. The question isn't whether AI will change how service businesses operate—it's whether you'll be leading that change or reacting to it.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  If you're ready to find out what's possible, I'd love to have you join us.
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
                  placeholder="Your service company"
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
                    Request early access
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
