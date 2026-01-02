import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const floatVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-x-hidden overflow-y-visible bg-[rgb(23,23,23)]"
    >
      {/* Grid overlay - Framer style with 60% opacity */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.6 }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        {/* Radial fade for the grid */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgb(23, 23, 23) 70%)',
          }}
        />
      </div>

      {/* Ambient glow - smaller on mobile */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[300px] w-[300px] sm:h-[400px] sm:w-[500px] lg:h-[500px] lg:w-[700px] rounded-full blur-[100px] sm:blur-[150px]"
          style={{
            background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.15) 0%, rgba(249, 115, 22, 0.1) 100%)',
          }}
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 w-full mx-auto max-w-[1000px] px-4 sm:px-6 pt-24 pb-16 sm:py-28 lg:py-40 overflow-hidden">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-[13px] font-medium text-white/60 backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-orange-500" />
              </span>
              <span className="hidden xs:inline">Introducing the future of agency automation</span>
              <span className="xs:hidden">The future of agency automation</span>
            </span>
          </motion.div>

          {/* Headline - properly responsive */}
          <motion.h1
            variants={itemVariants}
            className="text-[26px] sm:text-[40px] md:text-[52px] lg:text-[64px] font-semibold tracking-tight text-white leading-[1.15] sm:leading-[1.1] max-w-4xl mx-auto"
          >
            <span className="block sm:inline">The </span>
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              AI-powered
            </span>
            <span className="block sm:inline"> operating system</span>
            <span className="block">for marketing agencies</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="mt-5 sm:mt-8 text-[14px] sm:text-[16px] md:text-[18px] text-white/50 leading-relaxed max-w-[320px] sm:max-w-xl md:max-w-2xl mx-auto font-light"
          >
            14 specialized AI agents. Unified CRM, workflows, and communication.
            One platform to run your entire agency.
          </motion.p>

          {/* CTAs - full width on mobile */}
          <motion.div
            variants={itemVariants}
            className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 text-[14px] sm:text-[15px] font-medium gap-2 bg-white text-[rgb(23,23,23)] hover:bg-white/90 rounded-full"
            >
              <a href="https://app.ozzios.com/sign-up">
                Start for free
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 text-[14px] sm:text-[15px] font-medium gap-2 rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              <Play className="h-4 w-4" />
              Watch demo
            </Button>
          </motion.div>

          {/* Product Screenshot */}
          <motion.div
            variants={itemVariants}
            className="mt-12 sm:mt-16 relative"
          >
            <div className="relative mx-auto max-w-4xl">
              {/* Glow behind image */}
              <div
                className="absolute inset-0 blur-[60px] opacity-30"
                style={{
                  background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.4) 0%, rgba(249, 115, 22, 0.2) 100%)',
                }}
              />
              {/* Browser frame */}
              <div className="relative rounded-xl sm:rounded-2xl border border-white/10 bg-[rgb(30,30,30)] overflow-hidden shadow-2xl">
                {/* Browser header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[rgb(25,25,25)]">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-white/10" />
                    <div className="h-3 w-3 rounded-full bg-white/10" />
                    <div className="h-3 w-3 rounded-full bg-white/10" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-6 rounded-md bg-white/5 max-w-xs mx-auto flex items-center justify-center">
                      <span className="text-[11px] text-white/30">app.ozzios.com</span>
                    </div>
                  </div>
                </div>
                {/* Screenshot placeholder - dashboard mockup */}
                <div className="relative aspect-[16/10] bg-gradient-to-br from-[rgb(20,20,20)] to-[rgb(30,30,30)]">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=750&fit=crop&auto=format"
                    alt="OzziOS Dashboard"
                    className="w-full h-full object-cover opacity-80"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgb(30,30,30)] via-transparent to-transparent opacity-60" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trusted by - Framer style with marquee */}
          <motion.section
            variants={itemVariants}
            className="mt-12 sm:mt-16 pt-8 sm:pt-12 -mx-4 sm:mx-0"
          >
            <p className="text-[12px] sm:text-[14px] text-white/40 font-medium mb-4 sm:mb-6 px-4 sm:px-0">
              Trusted by top teams
            </p>
            {/* Logo marquee with gradient mask */}
            <div
              className="relative overflow-hidden w-screen sm:w-full left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0"
              style={{
                maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)',
              }}
            >
              <motion.div
                className="flex items-center gap-8 sm:gap-10 md:gap-12 w-max"
                animate={{
                  x: ['0%', '-50%'],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 20,
                    ease: 'linear',
                  },
                }}
              >
                {/* Double the logos for seamless loop */}
                {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className="flex items-center gap-8 sm:gap-10 md:gap-12 shrink-0">
                    {['Acme', 'Globex', 'Initech', 'Umbrella', 'Stark', 'Wayne'].map((name, i) => (
                      <div
                        key={`${setIndex}-${i}`}
                        className="flex items-center gap-2 text-white/30 shrink-0"
                      >
                        <div className="h-5 w-5 sm:h-6 sm:w-6 rounded bg-white/10 shrink-0" />
                        <span className="text-[12px] sm:text-[14px] font-medium whitespace-nowrap">{name}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.section>
        </motion.div>

        {/* Floating elements - Desktop only (xl+) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={floatVariants}
          className="absolute -right-4 lg:right-0 top-1/3 hidden xl:block"
        >
          <FloatingCard
            title="SEO Specialist"
            subtitle="Optimizing rankings..."
            color="emerald"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={floatVariants}
          transition={{ delay: 0.2 }}
          className="absolute -left-4 lg:left-0 top-[45%] hidden xl:block"
        >
          <FloatingCard
            title="Content Writer"
            subtitle="Drafting campaign..."
            color="blue"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={floatVariants}
          transition={{ delay: 0.4 }}
          className="absolute left-[10%] top-[70%] hidden xl:block"
        >
          <FloatingCard
            title="Social Media Manager"
            subtitle="Scheduling posts..."
            color="amber"
          />
        </motion.div>
      </div>
    </section>
  );
}

function FloatingCard({
  title,
  subtitle,
  color,
}: {
  title: string;
  subtitle: string;
  color: 'emerald' | 'blue' | 'amber';
}) {
  const colorClasses = {
    emerald: 'bg-emerald-500/20 text-emerald-400',
    blue: 'bg-blue-500/20 text-blue-400',
    amber: 'bg-amber-500/20 text-amber-400',
  };

  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="rounded-2xl border border-white/10 bg-[rgb(30,30,30)]/90 backdrop-blur-xl p-4 shadow-2xl"
    >
      <div className="flex items-center gap-3">
        <div className={cn('h-10 w-10 rounded-xl flex items-center justify-center', colorClasses[color])}>
          <div className="h-3 w-3 rounded-full bg-current animate-pulse" />
        </div>
        <div>
          <p className="text-[14px] font-medium text-white">{title}</p>
          <p className="text-[12px] text-white/50">{subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
}
