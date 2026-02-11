'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MessageSquare, ArrowRight, Send, Clock, HelpCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CTASection } from '../components/CTASection';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const contactInfo = [
  {
    icon: Mail,
    title: 'Email us',
    description: 'Our team typically responds within 24 hours.',
    detail: 'hello@ozzios.com',
    href: 'mailto:hello@ozzios.com',
  },
  {
    icon: MessageSquare,
    title: 'Live chat',
    description: 'Chat with our support team in real-time.',
    detail: 'Available Mon-Fri, 9am-6pm EST',
    href: '#',
  },
  {
    icon: HelpCircle,
    title: 'Help center',
    description: 'Browse our documentation and guides.',
    detail: 'docs.ozzios.com',
    href: '#',
  },
  {
    icon: Clock,
    title: 'Response time',
    description: 'We aim to reply to all inquiries quickly.',
    detail: 'Under 24 hours',
    href: undefined,
  },
];

export function ContactView() {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const formInView = useInView(formRef, { once: true, margin: '-100px' });
  const infoInView = useInView(infoRef, { once: true, margin: '-100px' });

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-sm font-medium text-signature mb-4 tracking-wide uppercase">
              Contact
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Get in touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a question about OzziOs, want a demo, or need help getting started?
              We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="relative py-12 lg:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, y: 20 }}
              animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="rounded-xl border-2 border-border bg-card p-12 text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-signature/10">
                    <Send className="h-7 w-7 text-signature" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-3">
                    Message sent
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Thanks for reaching out! We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Name <span className="text-signature">*</span>
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, name: e.target.value }))
                        }
                        className="h-12 border-2"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email <span className="text-signature">*</span>
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, email: e.target.value }))
                        }
                        className="h-12 border-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-foreground">
                        Company
                      </label>
                      <Input
                        id="company"
                        placeholder="Your company"
                        value={formState.company}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, company: e.target.value }))
                        }
                        className="h-12 border-2"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-foreground">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="What is this about?"
                        value={formState.subject}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, subject: e.target.value }))
                        }
                        className="h-12 border-2"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message <span className="text-signature">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      placeholder="Tell us how we can help..."
                      required
                      value={formState.message}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, message: e.target.value }))
                      }
                      className={cn(
                        'flex w-full rounded-md border-2 border-input bg-background px-3 py-3 text-base ring-offset-background',
                        'placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                        'disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none'
                      )}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="h-12 px-8 bg-signature text-white hover:bg-signature/90 text-base font-medium"
                  >
                    Send message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact info sidebar */}
            <motion.div
              ref={infoRef}
              variants={containerVariants}
              initial="hidden"
              animate={infoInView ? 'visible' : 'hidden'}
              className="lg:col-span-2 space-y-6"
            >
              {contactInfo.map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="group rounded-xl border-2 border-border bg-card p-6 transition-all duration-150 hover:shadow-[4px_4px_0_0_hsl(var(--border))] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-signature/10">
                      <item.icon className="h-5 w-5 text-signature" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {item.description}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-medium text-signature hover:underline"
                        >
                          {item.detail}
                        </a>
                      ) : (
                        <span className="text-sm font-medium text-foreground">
                          {item.detail}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
