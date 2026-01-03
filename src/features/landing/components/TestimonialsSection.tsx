import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO',
    company: 'GrowthLab Agency',
    content: 'OzziOS completely transformed how we operate. We replaced 3 full-time employees with AI agents and our output actually increased. The SEO Specialist agent alone saves us 20+ hours per week.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&auto=format',
  },
  {
    name: 'Marcus Chen',
    role: 'Founder',
    company: 'Digital Edge',
    content: 'The workflow automation is incredible. We set up lead nurturing sequences that run 24/7 without any manual intervention. Our conversion rate jumped 40% in the first month.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Operations Director',
    company: 'Spark Creative',
    content: 'Finally, a platform that actually understands agency workflows. The multi-tenant architecture is perfect for managing all our clients in one place. Support team is phenomenal too.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&auto=format',
  },
  {
    name: 'David Park',
    role: 'Co-Founder',
    company: 'Velocity Marketing',
    content: 'We were skeptical about AI agents at first, but the Content Writer produces better first drafts than most freelancers we\'ve hired. It learns our brand voice and just gets better over time.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&auto=format',
  },
  {
    name: 'Jessica Williams',
    role: 'Managing Partner',
    company: 'Apex Digital',
    content: 'The Slack-like communication with AI agents feels so natural. Our team adapted instantly. Being able to @mention an agent and get an intelligent response is game-changing.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&auto=format',
  },
  {
    name: 'Alex Thompson',
    role: 'CEO',
    company: 'NorthStar Agency',
    content: 'Best ROI on any software we\'ve purchased. The credit system is transparent, no hidden fees, and the agents actually deliver value. Cancelled 5 other subscriptions after switching.',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&auto=format',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function TestimonialsSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-50px' });

  return (
    <section
      id="testimonials"
      className="relative py-32 lg:py-40 bg-[#0A0A0B] overflow-hidden"
    >
      {/* Subtle divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-[11px] font-semibold text-amber-400/80 uppercase tracking-[0.2em] mb-4">
            Testimonials
          </p>
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-display leading-[1.1] tracking-[-0.02em] text-white mb-6">
            Loved by agencies
            <span className="text-white/30"> worldwide</span>
          </h2>
          <p className="text-lg text-white/40 max-w-lg mx-auto">
            See what forward-thinking agencies are saying about OzziOS.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={cn(
                'group relative rounded-2xl border border-white/[0.06] bg-white/[0.01] p-6 lg:p-8',
                'transition-all duration-500 hover:border-white/[0.1] hover:bg-white/[0.02]',
                index === 0 && 'md:col-span-2 lg:col-span-1'
              )}
            >
              {/* Quote icon */}
              <div className="mb-6">
                <Quote className="h-8 w-8 text-amber-500/20" />
              </div>

              {/* Content */}
              <p className="text-[15px] leading-relaxed text-white/50 mb-8">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10"
                />
                <div>
                  <p className="text-[14px] font-medium text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-[12px] text-white/30">
                    {testimonial.role} <span className="text-amber-400/50">@{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-8 lg:gap-16"
        >
          {[
            { value: '4.9/5', label: 'Average rating' },
            { value: '500+', label: 'Agencies' },
            { value: '98%', label: 'Would recommend' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-semibold text-white mb-1">{stat.value}</div>
              <div className="text-[12px] text-white/30 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
