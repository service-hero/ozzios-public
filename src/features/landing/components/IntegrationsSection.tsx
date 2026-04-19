import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import { Link } from '@tanstack/react-router';
import { cn } from '@/lib/utils';
import {
  BackgroundField,
  EASE_OUT,
  SectionHeader,
  SectionHeading,
} from './_landing-primitives';

interface IntegrationNode {
  name: string;
  logo: string;
  x: number;
  y: number;
}

const nodes: IntegrationNode[] = [
  { name: 'Google', logo: '/images/google-logo.svg', x: 18, y: 26 },
  { name: 'Facebook', logo: '/images/facebook-icon.svg', x: 34, y: 19 },
  { name: 'Shopify', logo: '/images/shopify-logo.webp', x: 21, y: 76 },
  { name: 'Stripe', logo: '/images/stripe-logo.webp', x: 36, y: 81 },
  { name: 'WordPress', logo: '/images/wordpress.webp', x: 82, y: 26 },
  { name: 'Google Ads', logo: '/images/google-ads-logo.webp', x: 66, y: 19 },
  { name: 'Gmail', logo: '/images/gmail-logo.webp', x: 79, y: 76 },
  { name: 'TikTok', logo: '/images/tiktok-logo.svg', x: 64, y: 81 },
];

const CENTER = { x: 50, y: 50 };

const integrationDirectory = [
  { label: 'Search & ads', items: ['Google', 'Google Ads', 'Facebook', 'TikTok', 'YouTube'] },
  { label: 'Commerce & billing', items: ['Stripe', 'Shopify', 'WooCommerce'] },
  { label: 'Communication', items: ['Gmail', 'Twilio', 'Resend', 'Slack'] },
  { label: 'Field service', items: ['Housecall Pro', 'ServiceTitan', 'Jobber', 'FieldPulse'] },
];

export function IntegrationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative isolate overflow-hidden border-t border-border/50 py-28 lg:py-36">
      <BackgroundField variant="top-right" />

      <div className="relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <SectionHeader
            eyebrow="Connect anything"
            headlineLines={['Integrates with', 'your stack']}
            sub="Ozzi works seamlessly with the tools you already use, pulling data and triggering actions across your entire business."
          />
        </motion.div>

        {/* Integration map */}
        <div
          ref={ref}
          className="relative mx-auto aspect-[16/10] w-full overflow-hidden rounded-xl border border-border/70 bg-background shadow-[0_18px_50px_-26px_rgba(34,27,22,0.30)]"
        >
          {/* Grid backdrop */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.55] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_85%)]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(64,45,34,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(64,45,34,0.10) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          {/* Connection lines */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {nodes.map((node, i) => (
              <motion.line
                key={`line-${node.name}`}
                x1={CENTER.x}
                y1={CENTER.y}
                x2={node.x}
                y2={node.y}
                vectorEffect="non-scaling-stroke"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="3 3"
                className="text-border"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.65 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 1.4, delay: 0.5 + i * 0.08, ease: 'easeOut' }}
              />
            ))}
          </svg>

          {/* Data pulses */}
          {nodes.map((node, i) => (
            <motion.div
              key={`pulse-${node.name}`}
              className="absolute z-10 h-1.5 w-1.5 rounded-full bg-signature shadow-[0_0_10px_rgba(196,88,63,0.7)]"
              initial={{
                left: `${CENTER.x}%`,
                top: `${CENTER.y}%`,
                opacity: 0,
                scale: 0,
                x: '-50%',
                y: '-50%',
              }}
              animate={
                isInView
                  ? {
                      left: [`${CENTER.x}%`, `${node.x}%`],
                      top: [`${CENTER.y}%`, `${node.y}%`],
                      opacity: [0, 1, 1, 0],
                      scale: [0.5, 1, 1, 0.5],
                      x: '-50%',
                      y: '-50%',
                    }
                  : {}
              }
              transition={{
                duration: 2.6,
                delay: 1 + i * 0.18,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}

          {/* Center radial bloom */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
              transition={{ duration: 1.4, delay: 0.2, ease: EASE_OUT }}
              className="h-[280px] w-[280px] rounded-full bg-signature/15 blur-[80px] md:h-[440px] md:w-[440px] md:blur-[110px]"
            />
          </div>

          {/* Nodes */}
          {nodes.map((node, i) => (
            <div
              key={node.name}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              title={node.name}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: 1.1 + i * 0.08,
                }}
                className={cn(
                  'group/node flex cursor-pointer items-center justify-center rounded-md border border-border/70 bg-background shadow-[0_8px_24px_-12px_rgba(34,27,22,0.35)] transition-all duration-300',
                  'h-12 w-12 hover:-translate-y-0.5 hover:border-signature/40 hover:shadow-[0_14px_30px_-14px_rgba(196,88,63,0.40)]',
                  'md:h-14 md:w-14 md:rounded-lg',
                )}
              >
                <img
                  src={node.logo}
                  alt={node.name}
                  className="h-6 w-6 object-contain transition-transform duration-300 group-hover/node:scale-110 md:h-7 md:w-7"
                />
                <span className="pointer-events-none absolute -bottom-6 hidden whitespace-nowrap font-mono text-[9.5px] uppercase tracking-[0.18em] text-foreground/45 group-hover/node:inline">
                  {node.name}
                </span>
              </motion.div>
            </div>
          ))}

          {/* Center logo */}
          <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.4 }}
              className="group relative flex h-20 w-20 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-signature/40 bg-foreground shadow-[0_0_36px_rgba(196,88,63,0.35),0_18px_40px_-18px_rgba(34,27,22,0.55)] md:h-24 md:w-24"
            >
              <video
                src="/images/ozzi-avatar.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full rounded-xl object-cover"
              />
              <span className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[9.5px] uppercase tracking-[0.18em] text-foreground/50">
                Ozzi
              </span>
            </motion.div>
          </div>

          {/* Status sliver inside frame */}
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-md border border-border/60 bg-background/85 px-2.5 py-1 backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint/60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint" />
            </span>
            <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-foreground/55">
              <span className="text-foreground/85 tabular-nums">40+</span> integrations syncing
            </span>
          </div>

          <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-md border border-border/60 bg-background/85 px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.18em] text-foreground/55 backdrop-blur">
            <span className="text-foreground/85 tabular-nums">v2.4</span>
            <span className="h-3 w-px bg-border/60" />
            Live
          </div>
        </div>

        {/* Directory */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <div className="overflow-hidden rounded-md border border-border/60 bg-background/60 backdrop-blur">
            <div className="grid grid-cols-1 divide-y divide-border/60 sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0">
              {integrationDirectory.map((cat) => (
                <div key={cat.label} className="p-5">
                  <SectionHeading label={cat.label} />
                  <ul className="mt-3 space-y-1.5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[12.5px] text-foreground/80">
                        <span className="h-1 w-1 rounded-full bg-foreground/30" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-foreground/45">
              And many more
            </span>
            <Link
              to="/"
              className="group/lnk inline-flex items-center gap-1.5 text-[12.5px] font-medium text-foreground/70 transition-colors hover:text-signature"
            >
              <span className="relative">
                Browse all integrations
                <span className="absolute -bottom-px left-0 h-px w-0 bg-signature transition-all duration-200 group-hover/lnk:w-full" />
              </span>
              <ArrowUpRight className="h-3 w-3 transition-transform duration-200 group-hover/lnk:-translate-y-0.5 group-hover/lnk:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
