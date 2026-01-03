import { motion } from 'framer-motion';
import { ArrowRight, Play, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const enterpriseLogos = [
  { name: 'Deloitte', width: 'w-24' },
  { name: 'McKinsey', width: 'w-20' },
  { name: 'Accenture', width: 'w-24' },
  { name: 'BCG', width: 'w-16' },
  { name: 'Bain', width: 'w-16' },
  { name: 'PwC', width: 'w-14' },
  { name: 'EY', width: 'w-12' },
  { name: 'KPMG', width: 'w-16' },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#0A0A0B]"
    >
      {/* Premium gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary warm glow - top center */}
        <div
          className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full blur-[120px] opacity-20"
          style={{
            background: 'radial-gradient(ellipse, rgba(251, 146, 60, 0.4) 0%, rgba(234, 88, 12, 0.1) 50%, transparent 70%)',
          }}
        />
        {/* Secondary cool accent - left */}
        <div
          className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.5) 0%, transparent 60%)',
          }}
        />
        {/* Tertiary accent - right */}
        <div
          className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] rounded-full blur-[80px] opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full mx-auto max-w-[1400px] px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          {/* Trust badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <div className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[11px] font-medium text-emerald-400 uppercase tracking-wider">
                  SOC 2 Compliant
                </span>
              </div>
              <div className="w-px h-3 bg-white/10" />
              <div className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[11px] font-medium text-white/50 uppercase tracking-wider">
                  Enterprise Ready
                </span>
              </div>
            </div>
          </motion.div>

          {/* Main headline - Editorial serif typography */}
          <motion.div variants={itemVariants} className="text-center max-w-5xl">
            <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-display leading-[0.95] tracking-[-0.02em] text-white">
              The operating system
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-amber-200 via-orange-300 to-amber-200 bg-clip-text text-transparent">
                  for modern agencies
                </span>
                {/* Underline accent */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-amber-500/30"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 7 Q50 0, 100 4 T200 3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="mt-8 text-lg sm:text-xl text-white/40 leading-relaxed max-w-2xl text-center font-light"
          >
            Replace your entire marketing team with 14 specialized AI agents.
            <br className="hidden sm:block" />
            Unified workflows, CRM, and communication in one platform.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col sm:flex-row items-center gap-4"
          >
            <Button
              size="lg"
              asChild
              className="h-14 px-8 text-[15px] font-medium gap-3 bg-white text-[#0A0A0B] hover:bg-white/90 rounded-full btn-enterprise group"
            >
              <a href="https://app.ozzios.com/sign-up">
                Start free trial
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="h-14 px-8 text-[15px] font-medium gap-3 text-white/70 hover:text-white hover:bg-white/5 rounded-full group"
            >
              <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/15 transition-colors">
                <Play className="h-3 w-3 fill-current ml-0.5" />
              </div>
              Watch demo
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="mt-20 flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
          >
            {[
              { value: '14', label: 'AI Agents' },
              { value: '77+', label: 'Native Tools' },
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '<200ms', label: 'Latency' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-white/30 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Product visualization */}
          <motion.div
            variants={itemVariants}
            className="mt-20 w-full max-w-5xl"
          >
            <div className="relative">
              {/* Glow effect */}
              <div
                className="absolute inset-0 blur-[60px] opacity-30 -z-10"
                style={{
                  background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.3) 0%, rgba(168, 85, 247, 0.15) 100%)',
                }}
              />

              {/* Browser chrome */}
              <div className="relative rounded-2xl border border-white/[0.08] bg-[#111113] overflow-hidden shadow-2xl shadow-black/50">
                {/* Window controls */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#0D0D0F]">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                      <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                      <span className="text-[11px] text-white/30 font-mono">app.ozzios.com</span>
                    </div>
                  </div>
                  <div className="w-16" />
                </div>

                {/* Dashboard mockup */}
                <div className="relative aspect-[16/9] bg-gradient-to-br from-[#0D0D0F] to-[#131316]">
                  {/* Abstract dashboard visualization */}
                  <div className="absolute inset-0 p-6 grid grid-cols-12 gap-4">
                    {/* Sidebar */}
                    <div className="col-span-2 space-y-3">
                      <div className="h-8 rounded-lg bg-white/[0.03]" />
                      <div className="space-y-2">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="h-6 rounded bg-white/[0.02]"
                            style={{ width: `${70 + Math.random() * 30}%` }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Main content */}
                    <div className="col-span-7 space-y-4">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div className="h-6 w-48 rounded bg-white/[0.04]" />
                        <div className="flex gap-2">
                          <div className="h-8 w-8 rounded-lg bg-white/[0.03]" />
                          <div className="h-8 w-8 rounded-lg bg-white/[0.03]" />
                        </div>
                      </div>

                      {/* Cards grid */}
                      <div className="grid grid-cols-3 gap-3">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]"
                          >
                            <div className="h-3 w-16 rounded bg-white/[0.06] mb-3" />
                            <div className="h-8 w-20 rounded bg-white/[0.08]" />
                          </div>
                        ))}
                      </div>

                      {/* Chart area */}
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] h-40">
                        <div className="flex items-end justify-between h-full gap-2 pt-8">
                          {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 95, 70].map((height, i) => (
                            <div
                              key={i}
                              className="flex-1 rounded-t bg-gradient-to-t from-amber-500/40 to-amber-500/10"
                              style={{ height: `${height}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right panel */}
                    <div className="col-span-3 space-y-3">
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500/30 to-orange-500/30" />
                          <div className="flex-1">
                            <div className="h-3 w-20 rounded bg-white/[0.08] mb-1" />
                            <div className="h-2 w-14 rounded bg-white/[0.04]" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="h-2 rounded bg-white/[0.03]" />
                          ))}
                        </div>
                      </div>

                      {/* Agent cards */}
                      {['SEO Specialist', 'Content Writer', 'Data Analyst'].map((agent, i) => (
                        <div
                          key={agent}
                          className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center gap-2"
                        >
                          <div
                            className="w-2 h-2 rounded-full animate-pulse"
                            style={{
                              backgroundColor: i === 0 ? '#10B981' : i === 1 ? '#F59E0B' : '#6366F1',
                            }}
                          />
                          <span className="text-[10px] text-white/40">{agent}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent opacity-60" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enterprise logos */}
          <motion.div
            variants={itemVariants}
            className="mt-24 w-full"
          >
            <p className="text-center text-[11px] font-medium text-white/20 uppercase tracking-[0.2em] mb-8">
              Trusted by leading agencies worldwide
            </p>

            {/* Logo marquee */}
            <div className="relative overflow-hidden">
              {/* Gradient masks */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0B] to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0B] to-transparent z-10" />

              <motion.div
                className="flex items-center gap-16"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 30,
                    ease: 'linear',
                  },
                }}
              >
                {/* Double the logos for seamless loop */}
                {[...enterpriseLogos, ...enterpriseLogos].map((logo, i) => (
                  <div
                    key={`${logo.name}-${i}`}
                    className={`${logo.width} shrink-0 flex items-center justify-center`}
                  >
                    <span className="text-sm font-semibold text-white/15 tracking-wide whitespace-nowrap">
                      {logo.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0B] to-transparent pointer-events-none" />
    </section>
  );
}
