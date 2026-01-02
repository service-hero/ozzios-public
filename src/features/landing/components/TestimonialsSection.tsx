import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO',
    company: 'GrowthLab Agency',
    content: 'OzziOS completely transformed how we operate. We replaced 3 full-time employees with AI agents and our output actually increased. The SEO Specialist agent alone saves us 20+ hours per week.',
    avatar: 'SM',
  },
  {
    name: 'Marcus Chen',
    role: 'Founder',
    company: 'Digital Edge',
    content: 'The workflow automation is incredible. We set up lead nurturing sequences that run 24/7 without any manual intervention. Our conversion rate jumped 40% in the first month.',
    avatar: 'MC',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Operations Director',
    company: 'Spark Creative',
    content: 'Finally, a platform that actually understands agency workflows. The multi-tenant architecture is perfect for managing all our clients in one place. Support team is phenomenal too.',
    avatar: 'ER',
  },
  {
    name: 'David Park',
    role: 'Co-Founder',
    company: 'Velocity Marketing',
    content: 'We were skeptical about AI agents at first, but the Content Writer produces better first drafts than most freelancers we\'ve hired. It learns our brand voice and just gets better over time.',
    avatar: 'DP',
  },
  {
    name: 'Jessica Williams',
    role: 'Managing Partner',
    company: 'Apex Digital',
    content: 'The Slack-like communication with AI agents feels so natural. Our team adapted instantly. Being able to @mention an agent and get an intelligent response is game-changing.',
    avatar: 'JW',
  },
  {
    name: 'Alex Thompson',
    role: 'CEO',
    company: 'NorthStar Agency',
    content: 'Best ROI on any software we\'ve purchased. The credit system is transparent, no hidden fees, and the agents actually deliver value. Cancelled 5 other subscriptions after switching.',
    avatar: 'AT',
  },
  {
    name: 'Rachel Kim',
    role: 'Director of Marketing',
    company: 'Elevate Media',
    content: 'The Data Analyst agent produces reports that used to take our team days to compile. Now we get them in minutes. Our clients are impressed with how fast we deliver insights.',
    avatar: 'RK',
  },
  {
    name: 'Michael Foster',
    role: 'Founder',
    company: 'Catalyst Growth',
    content: 'Incredible capabilities. The durable workflows mean we never lose progress even if something fails. The human-approval nodes give us control over critical decisions.',
    avatar: 'MF',
  },
];

// Split testimonials into two columns for desktop
const leftColumn = testimonials.filter((_, i) => i % 2 === 0);
const rightColumn = testimonials.filter((_, i) => i % 2 === 1);

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export function TestimonialsSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-50px' });

  return (
    <section
      id="testimonials"
      className="relative py-20 sm:py-24 lg:py-32 bg-[rgb(20,20,20)] overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.5 }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1100px] px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block text-[12px] font-medium uppercase tracking-wider text-orange-400 mb-4">
            Testimonials
          </span>
          <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-semibold tracking-tight text-white leading-tight">
            Loved by agencies{' '}
            <span className="text-white/40 block sm:inline">worldwide</span>
          </h2>
          <p className="mt-4 text-[14px] sm:text-[16px] text-white/50 max-w-lg mx-auto">
            See what forward-thinking agencies are saying about OzziOS.
          </p>
        </motion.div>

        {/* Mobile: Single column with all testimonials */}
        <motion.div
          className="md:hidden space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          {testimonials.slice(0, 4).map((testimonial, index) => (
            <motion.div key={index} variants={cardVariants}>
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop: Two column with continuous animation */}
        <div className="hidden md:block relative">
          {/* Fade overlays */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[rgb(20,20,20)] to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[rgb(20,20,20)] to-transparent z-10 pointer-events-none" />

          <div className="grid grid-cols-2 gap-4 max-h-[650px] overflow-hidden">
            {/* Left Column - animates down continuously */}
            <motion.div
              animate={{ y: [0, 30, 0] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="space-y-4"
            >
              {leftColumn.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </motion.div>
              ))}
            </motion.div>

            {/* Right Column - animates up continuously, offset start */}
            <motion.div
              animate={{ y: [0, -30, 0] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="space-y-4 pt-12"
            >
              {rightColumn.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.15 }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: {
    name: string;
    role: string;
    company: string;
    content: string;
    avatar: string;
  };
}) {
  return (
    <div
      className={cn(
        'rounded-2xl p-5 sm:p-6 transition-all duration-300',
        'border border-[rgba(112,69,54,0.5)] bg-gradient-to-b from-white/[0.03] to-transparent',
        'hover:border-[rgba(112,69,54,0.8)] hover:bg-white/[0.04]'
      )}
    >
      {/* Header with avatar */}
      <div className="flex items-center gap-3 mb-3 sm:mb-4">
        <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-gradient-to-br from-orange-500/30 to-amber-500/30 flex items-center justify-center text-[12px] sm:text-[13px] font-semibold text-orange-300 shrink-0">
          {testimonial.avatar}
        </div>
        <div className="min-w-0">
          <p className="text-[13px] sm:text-[14px] font-semibold text-white truncate">
            {testimonial.name}
          </p>
          <p className="text-[11px] sm:text-[12px] text-white/40 truncate">
            {testimonial.role} <span className="text-orange-400/70">@{testimonial.company}</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <p className="text-[13px] sm:text-[14px] leading-relaxed text-white/60">
        "{testimonial.content}"
      </p>
    </div>
  );
}
