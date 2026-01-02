import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Rocket,
  Users,
  Bot,
  TrendingUp,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  {
    number: '01',
    icon: Rocket,
    title: 'Set up your workspace',
    description: 'Create your agency workspace in minutes. Invite your team, configure channels, and connect your existing tools.',
    color: 'orange',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop&auto=format',
  },
  {
    number: '02',
    icon: Bot,
    title: 'Deploy AI agents',
    description: 'Activate specialized AI agents for SEO, content, analytics, and more. They join your channels like team members.',
    color: 'violet',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&auto=format',
  },
  {
    number: '03',
    icon: Users,
    title: 'Onboard your clients',
    description: 'Create sub-accounts for each client. Isolated data, shared workflows, unified billing. The agency model, perfected.',
    color: 'emerald',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&auto=format',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Scale without limits',
    description: 'Automate repetitive tasks, run campaigns at scale, and grow revenue per employee. Your AI workforce never sleeps.',
    color: 'blue',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format',
  },
];

const colorClasses = {
  orange: {
    bg: 'bg-orange-500/20',
    text: 'text-orange-400',
    border: 'border-orange-500/30',
    number: 'text-orange-500',
  },
  violet: {
    bg: 'bg-violet-500/20',
    text: 'text-violet-400',
    border: 'border-violet-500/30',
    number: 'text-violet-500',
  },
  emerald: {
    bg: 'bg-emerald-500/20',
    text: 'text-emerald-400',
    border: 'border-emerald-500/30',
    number: 'text-emerald-500',
  },
  blue: {
    bg: 'bg-blue-500/20',
    text: 'text-blue-400',
    border: 'border-blue-500/30',
    number: 'text-blue-500',
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 bg-[rgb(20,20,20)]">
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.2 }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1100px] px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block text-[12px] font-medium uppercase tracking-wider text-orange-400 mb-4">
            How it works
          </span>
          <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-tight text-white leading-tight">
            From setup to scale<br />
            <span className="text-white/40">in four simple steps</span>
          </h2>
          <p className="mt-4 text-[16px] text-white/50 max-w-2xl mx-auto">
            Get your agency running on OzziOS in less than a day. No complex migrations, no training required.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-6"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            const colors = colorClasses[step.color as keyof typeof colorClasses];
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className={cn(
                  'group relative rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden',
                  'transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]'
                )}
              >
                <div className={cn(
                  'flex flex-col lg:flex-row items-stretch',
                  !isEven && 'lg:flex-row-reverse'
                )}>
                  {/* Image side */}
                  <div className="relative lg:w-2/5 h-48 lg:h-auto min-h-[200px]">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity"
                    />
                    <div className={cn(
                      'absolute inset-0',
                      isEven 
                        ? 'bg-gradient-to-r from-transparent via-transparent to-[rgb(20,20,20)]' 
                        : 'bg-gradient-to-l from-transparent via-transparent to-[rgb(20,20,20)]',
                      'lg:block hidden'
                    )} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgb(20,20,20)] to-transparent lg:hidden" />
                    
                    {/* Step number overlay */}
                    <div className={cn(
                      'absolute top-6 font-bold text-[64px] leading-none opacity-20',
                      isEven ? 'left-6' : 'right-6',
                      colors.number
                    )}>
                      {step.number}
                    </div>
                  </div>

                  {/* Content side */}
                  <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-start gap-4">
                      <div className={cn(
                        'shrink-0 h-12 w-12 rounded-xl flex items-center justify-center',
                        colors.bg
                      )}>
                        <Icon className={cn('h-6 w-6', colors.text)} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={cn('text-[13px] font-medium', colors.text)}>
                            Step {step.number}
                          </span>
                        </div>
                        <h3 className="text-[22px] font-semibold text-white mb-3">
                          {step.title}
                        </h3>
                        <p className="text-[15px] leading-relaxed text-white/50 mb-4">
                          {step.description}
                        </p>
                        
                        {/* Quick benefits */}
                        <div className="flex flex-wrap gap-3">
                          {index === 0 && (
                            <>
                              <Benefit text="5-minute setup" />
                              <Benefit text="No credit card required" />
                            </>
                          )}
                          {index === 1 && (
                            <>
                              <Benefit text="14 agent types" />
                              <Benefit text="77+ built-in tools" />
                            </>
                          )}
                          {index === 2 && (
                            <>
                              <Benefit text="Unlimited sub-accounts" />
                              <Benefit text="Full data isolation" />
                            </>
                          )}
                          {index === 3 && (
                            <>
                              <Benefit text="Durable workflows" />
                              <Benefit text="24/7 automation" />
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://app.ozzios.com/sign-up"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[rgb(20,20,20)] font-medium text-[15px] hover:bg-white/90 transition-colors"
          >
            Get started free
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Benefit({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[12px] text-white/40">
      <CheckCircle className="h-3.5 w-3.5 text-emerald-400/70" />
      {text}
    </span>
  );
}
