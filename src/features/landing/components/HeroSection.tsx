import { AnimatePresence, motion, type Variants } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Command,
  DollarSign,
  FileText,
  Hash,
  Menu,
  MessageSquare,
  Phone,
  Play,
  RefreshCw,
  Search,
  Send,
  Settings,
  Smartphone,
  Sparkles,
  Star,
  StickyNote,
  Wrench,
  X,
  type LucideIcon,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { cn } from '@/lib/utils';
import { audienceContent, useAudience } from '../contexts/AudienceContext';
import { bookDemoTriggerProps, useCalDemoInit } from './book-demo';
import {
  channelMessages,
  enterpriseLogos,
  getAgentMp4,
  leadFollowUpMessages,
  sidebarChannels,
  sidebarTeam,
} from './hero/chatData';

// ────────────────────────────────────────────────────────────────────────────
// Motion primitives (framer-motion v12 strict-typed)
// ────────────────────────────────────────────────────────────────────────────

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.085, delayChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

const messageVariants: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.32, ease: EASE_OUT },
  },
};

// ────────────────────────────────────────────────────────────────────────────
// Hero data — kept inline so we don't need new files
// ────────────────────────────────────────────────────────────────────────────

const heroIntegrations = [
  { name: 'Google', logo: '/images/google-logo.svg' },
  { name: 'Facebook', logo: '/images/facebook-icon.svg' },
  { name: 'Shopify', logo: '/images/shopify-logo.webp' },
  { name: 'Stripe', logo: '/images/stripe-logo.webp' },
  { name: 'WordPress', logo: '/images/wordpress.webp' },
  { name: 'Google Ads', logo: '/images/google-ads-logo.webp' },
  { name: 'Gmail', logo: '/images/gmail-logo.webp' },
  { name: 'TikTok', logo: '/images/tiktok-logo.svg' },
];

type Suggestion = { label: string; icon: LucideIcon; prompt: string };

const channelSuggestions: Record<string, Suggestion[]> = {
  'lead-follow-up': [
    { label: 'Missed calls today', icon: Phone, prompt: '@Data Analyst show me today\'s missed calls' },
    { label: 'Follow up estimates', icon: DollarSign, prompt: '@Content Writer follow up on unsold estimates' },
    { label: 'Reactivate dead leads', icon: RefreshCw, prompt: '@Content Writer send reactivation texts to old leads' },
    { label: 'Book callbacks', icon: ClipboardList, prompt: '@Content Writer schedule callbacks for no-shows' },
  ],
  'reviews-seo': [
    { label: 'Check new reviews', icon: Star, prompt: '@SEO Specialist check our Google reviews and respond' },
    { label: 'Send review requests', icon: Smartphone, prompt: '@SEO Specialist send review requests to last week\'s jobs' },
    { label: 'Local rankings', icon: BarChart3, prompt: '@SEO Specialist how are we ranking in the Map Pack?' },
    { label: 'Update GBP posts', icon: Search, prompt: '@SEO Specialist create a new Google Business post' },
  ],
  reports: [
    { label: 'Monthly report', icon: BarChart3, prompt: '@Data Analyst build a monthly performance report' },
    { label: 'Revenue by service', icon: DollarSign, prompt: '@Data Analyst break down revenue by service type' },
    { label: 'Tech performance', icon: Wrench, prompt: '@Data Analyst show me revenue per technician' },
    { label: 'Ad spend ROI', icon: ArrowUpRight, prompt: '@Data Analyst compare cost per lead across all ad channels' },
  ],
};

const demoTabs = [
  { icon: MessageSquare, label: 'Messages' },
  { icon: CheckCircle2, label: 'Tasks' },
  { icon: FileText, label: 'Files' },
  { icon: StickyNote, label: 'Notes' },
  { icon: Sparkles, label: 'Creations' },
] as const;

// ────────────────────────────────────────────────────────────────────────────
// Primitives
// ────────────────────────────────────────────────────────────────────────────

function Kbd({ children, tone = 'light', className }: { children: React.ReactNode; tone?: 'light' | 'dark'; className?: string }) {
  return (
    <kbd
      className={cn(
        'inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-[5px] border px-1 font-sans text-[10px] font-medium leading-none tabular-nums',
        tone === 'light'
          ? 'border-border/70 bg-white/80 text-foreground/55 shadow-[0_1px_0_rgba(0,0,0,0.04)]'
          : 'border-white/15 bg-white/10 text-white/85 shadow-[inset_0_-1px_0_rgba(0,0,0,0.18)]',
        className,
      )}
    >
      {children}
    </kbd>
  );
}

function StatusPill() {
  return (
    <Link
      to="/changelog"
      className="group inline-flex h-7 items-center gap-2 rounded-full border border-border/60 bg-background/80 pl-1.5 pr-3 text-[11px] font-medium tracking-tight text-foreground/68 backdrop-blur transition-colors hover:border-border hover:text-foreground"
    >
      <span className="inline-flex h-[18px] items-center gap-1.5 rounded-full bg-signature/10 px-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-signature">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signature/60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signature" />
        </span>
        Early access
      </span>
      <span className="text-foreground/55 group-hover:text-foreground">v2.4 — Voice Agents shipped</span>
      <ArrowUpRight className="h-3 w-3 text-foreground/40 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
    </Link>
  );
}

// Replaces the in-headline pill+image gimmick with a single-glyph signature accent
function HeadlineMark({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10 text-signature">{children}</span>
      <span
        aria-hidden
        className="absolute -bottom-1 left-0 right-0 h-[6px] rounded-full bg-signature/15 blur-[2px]"
      />
    </span>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// HeroSection
// ────────────────────────────────────────────────────────────────────────────

export function HeroSection() {
  useCalDemoInit();
  const { audience } = useAudience();
  const content = audienceContent[audience].hero;

  // ── Demo state (preserved 1:1 from previous implementation)
  const [activeChannel, setActiveChannel] = useState('lead-follow-up');
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [streamingText, setStreamingText] = useState<Record<number, string>>({});
  const [streamingComplete, setStreamingComplete] = useState<Record<number, boolean>>({});
  const [mobileChannelOpen, setMobileChannelOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<{ cancelled: boolean }>({ cancelled: false });
  const streamingRefs = useRef<Record<number, { cancelled: boolean }>>({});

  const currentMessages = channelMessages[activeChannel] || leadFollowUpMessages;
  const activeChannels = sidebarChannels.filter((c) => c.hasMessages).map((c) => c.name);

  const getNextChannel = (current: string): string => {
    const idx = activeChannels.indexOf(current);
    return activeChannels[(idx + 1) % activeChannels.length];
  };

  const switchToChannel = (channelName: string) => {
    animationRef.current.cancelled = true;
    Object.values(streamingRefs.current).forEach((r) => (r.cancelled = true));
    setVisibleMessages([]);
    setIsTyping(false);
    setStreamingText({});
    setStreamingComplete({});
    setActiveChannel(channelName);
    streamingRefs.current = {};
    if (messagesContainerRef.current) messagesContainerRef.current.scrollTop = 0;
  };

  const handleChannelChange = (channelName: string) => {
    if (!channelMessages[channelName]) return;
    if (channelName === activeChannel) return;
    switchToChannel(channelName);
  };

  // Stream text char-by-char (preserved cadence)
  const streamMessageText = async (
    messageId: number,
    fullText: string,
    controller: { cancelled: boolean },
  ) => {
    const chars = fullText.split('');
    let current = '';
    for (let i = 0; i < chars.length; i++) {
      if (controller.cancelled) return;
      current += chars[i];
      setStreamingText((p) => ({ ...p, [messageId]: current }));

      const ch = chars[i];
      let delay: number;
      if (ch === ' ' || ch === '\n') delay = 10;
      else if (['.', '!', '?'].includes(ch)) delay = 150;
      else if (ch === ',') delay = 80;
      else if (ch === ':') delay = 100;
      else delay = 20 + Math.random() * 20;

      await new Promise((r) => setTimeout(r, delay));
    }
    if (!controller.cancelled) {
      setStreamingComplete((p) => ({ ...p, [messageId]: true }));
    }
  };

  // Auto-scroll
  useEffect(() => {
    if (messagesEndRef.current && messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [visibleMessages, isTyping, streamingText]);

  // Demo modal ESC
  useEffect(() => {
    if (!demoOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDemoOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [demoOpen]);

  // Drive the message animation per channel
  useEffect(() => {
    const controller = { cancelled: false };
    animationRef.current = controller;

    const run = async () => {
      const messages = channelMessages[activeChannel] || leadFollowUpMessages;
      for (let i = 0; i < messages.length; i++) {
        if (controller.cancelled) return;
        const m = messages[i];
        const prev = i > 0 ? messages[i - 1] : null;
        const delay = i === 0 ? 800 : prev?.isAgent ? 400 : 600;
        await new Promise((r) => setTimeout(r, delay));
        if (controller.cancelled) return;

        if (m.typing) {
          setIsTyping(true);
          await new Promise((r) => setTimeout(r, 800));
          setIsTyping(false);
        }
        if (controller.cancelled) return;

        setVisibleMessages((p) => [...p, m.id]);

        if (m.isAgent && m.content.length > 0) {
          const textParts = m.content
            .filter((p) => p.type === 'text' && p.text)
            .map((p) => p.text as string)
            .join('');
          if (textParts) {
            const sc = { cancelled: false };
            streamingRefs.current[m.id] = sc;
            await new Promise((r) => setTimeout(r, 200));
            if (controller.cancelled || sc.cancelled) return;
            await streamMessageText(m.id, textParts, sc);
            await new Promise((r) => setTimeout(r, 200));
          } else {
            setStreamingComplete((p) => ({ ...p, [m.id]: true }));
            await new Promise((r) => setTimeout(r, 400));
          }
        } else {
          setStreamingComplete((p) => ({ ...p, [m.id]: true }));
        }
      }

      if (!controller.cancelled) {
        await new Promise((r) => setTimeout(r, 4000));
        if (!controller.cancelled) switchToChannel(getNextChannel(activeChannel));
      }
    };

    const t = setTimeout(run, 600);
    return () => {
      controller.cancelled = true;
      Object.values(streamingRefs.current).forEach((r) => (r.cancelled = true));
      clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeChannel]);

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden pb-12 pt-28 sm:pt-32 lg:pb-16 lg:pt-36"
    >
      {/* Background — quiet, hairline grid + single coral radial */}
      <BackgroundField />

      <div className="relative z-10 mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid w-full min-w-0 items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-16"
        >
          {/* ── Left: copy stack ───────────────────────────────────── */}
          <motion.div variants={itemVariants} className="lg:col-span-6 xl:col-span-5">
            <StatusPill />

            <AnimatePresence mode="wait">
              <motion.h1
                key={`h-${audience}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="mt-6 font-display text-[clamp(2rem,4.4vw,3.6rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-foreground [text-wrap:balance]"
              >
                {content.headline[0]}
                <br className="hidden sm:block" />{' '}
                <HeadlineMark>{content.headline[1]}</HeadlineMark>
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={`s-${audience}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35, delay: 0.06 }}
                className="mt-5 max-w-[480px] text-[16px] leading-[1.6] text-muted-foreground sm:text-[17px]"
              >
                {content.subheadline}
              </motion.p>
            </AnimatePresence>

            {/* Dual CTA */}
            <motion.div
              variants={itemVariants}
              className="mt-7 flex flex-wrap items-center gap-2.5"
            >
              <button
                type="button"
                {...bookDemoTriggerProps}
                className={cn(
                  'group/cta relative inline-flex h-11 items-center gap-2 overflow-hidden rounded-md bg-foreground pl-4 pr-2.5 text-[13.5px] font-medium text-background',
                  'shadow-[0_1px_0_rgba(255,255,255,0.18)_inset,0_1px_2px_rgba(34,27,22,0.18),0_14px_30px_-12px_rgba(34,27,22,0.45)]',
                  'transition-all duration-200 hover:bg-[#1a1410] active:translate-y-px',
                )}
              >
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                Setup a demo
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/cta:translate-x-0.5" />
                <Kbd tone="dark">D</Kbd>
              </button>

              <button
                type="button"
                onClick={() => setDemoOpen(true)}
                className="group/play inline-flex h-11 items-center gap-2.5 rounded-md border border-border/70 bg-background/70 pl-1.5 pr-4 text-[13.5px] font-medium text-foreground backdrop-blur transition-all duration-200 hover:border-border hover:bg-background"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-[5px] bg-foreground text-background transition-transform duration-200 group-hover/play:scale-105">
                  <Play className="ml-[1px] h-3.5 w-3.5 fill-current" />
                </span>
                Watch the 90-second tour
              </button>
            </motion.div>

            {/* Integrations strip + trust copy */}
            <motion.div
              variants={itemVariants}
              className="mt-9 flex max-w-[480px] flex-col gap-3"
            >
              <div className="flex items-center">
                {heroIntegrations.map((it, i) => (
                  <div
                    key={it.name}
                    title={it.name}
                    className="relative -ml-2 flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border/70 bg-background shadow-[0_4px_10px_-6px_rgba(34,27,22,0.16)] first:ml-0 transition-transform duration-200 hover:-translate-y-0.5"
                    style={{ zIndex: heroIntegrations.length - i }}
                  >
                    <img src={it.logo} alt={it.name} className="h-full w-full object-contain p-1.5" />
                  </div>
                ))}
                <div className="relative -ml-2 flex h-10 items-center gap-1.5 rounded-full border border-border/70 bg-background px-3 text-[11px] font-medium text-muted-foreground shadow-[0_4px_10px_-6px_rgba(34,27,22,0.16)]">
                  +20 more
                </div>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/40">
                Native to your stack — search, ads, billing, follow-up
              </p>
            </motion.div>
          </motion.div>

          {/* ── Right: live product surface ───────────────────────── */}
          <motion.div
            variants={itemVariants}
            className="relative w-full min-w-0 max-w-full lg:col-span-6 xl:col-span-7"
          >
            {/* corner mark — top right */}
            <div className="pointer-events-none absolute -top-6 right-0 hidden items-center gap-2 lg:flex">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/35">
                Live product surface
              </span>
              <span className="h-px w-12 bg-border/60" />
            </div>

            <DemoFrame
              activeChannel={activeChannel}
              onChannelChange={handleChannelChange}
              mobileOpen={mobileChannelOpen}
              setMobileOpen={setMobileChannelOpen}
              isTyping={isTyping}
              visibleMessages={visibleMessages}
              streamingText={streamingText}
              streamingComplete={streamingComplete}
              currentMessages={currentMessages}
              messagesEndRef={messagesEndRef}
              messagesContainerRef={messagesContainerRef}
            />
          </motion.div>
        </motion.div>

        {/* Below-fold trust marquee */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 lg:mt-28"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/40">
              Connects the tools you already pay for
            </span>
            <span className="h-px flex-1 bg-border/50" />
          </div>

          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />
            <motion.div
              className="flex items-center gap-12"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 60, ease: 'linear' } }}
            >
              {[...enterpriseLogos, ...enterpriseLogos].map((logo, i) => (
                <div
                  key={`${logo.name}-${i}`}
                  className={cn(logo.width, 'flex h-10 shrink-0 items-center justify-center')}
                  title={logo.name}
                >
                  {logo.logo ? (
                    <img
                      src={logo.logo}
                      alt={logo.name}
                      className="h-7 w-auto object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-90 hover:grayscale-0"
                    />
                  ) : (
                    <span className="text-[12px] font-medium tracking-tight text-foreground/45">
                      {logo.name}
                    </span>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Demo modal */}
      <AnimatePresence>
        {demoOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          >
            <button
              type="button"
              aria-label="Close demo"
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
              onClick={() => setDemoOpen(false)}
            />
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.22, ease: EASE_OUT }}
              className="relative z-10 w-full max-w-5xl"
            >
              <button
                type="button"
                onClick={() => setDemoOpen(false)}
                className="absolute -top-10 right-0 inline-flex items-center gap-1.5 text-sm text-white/65 transition-colors hover:text-white"
              >
                <X className="h-4 w-4" />
                Close <Kbd tone="dark" className="ml-1">esc</Kbd>
              </button>
              <video
                src="/images/demo-video-1.mp4"
                controls
                autoPlay
                playsInline
                className="w-full rounded-xl shadow-2xl ring-1 ring-white/10"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Background field — quiet hairline grid + single signature radial
// ────────────────────────────────────────────────────────────────────────────

function BackgroundField() {
  return (
    <>
      {/* Soft signature radial top-right (replaces orb fog) */}
      <div className="pointer-events-none absolute -right-32 -top-32 z-0 h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle,rgba(196,88,63,0.14),transparent_60%)] blur-3xl" />
      {/* Cool ambient bottom-left */}
      <div className="pointer-events-none absolute -left-32 bottom-12 z-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(34,27,22,0.06),transparent_60%)] blur-3xl" />
      {/* Hairline dotted grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.55] [mask-image:radial-gradient(ellipse_at_top,black_15%,transparent_75%)]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(64, 45, 34, 0.12) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
    </>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Demo frame
// ────────────────────────────────────────────────────────────────────────────

type DemoFrameProps = {
  activeChannel: string;
  onChannelChange: (name: string) => void;
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
  isTyping: boolean;
  visibleMessages: number[];
  streamingText: Record<number, string>;
  streamingComplete: Record<number, boolean>;
  currentMessages: typeof leadFollowUpMessages;
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
  messagesContainerRef: React.RefObject<HTMLDivElement | null>;
};

function DemoFrame(props: DemoFrameProps) {
  const {
    activeChannel,
    onChannelChange,
    mobileOpen,
    setMobileOpen,
    isTyping,
    visibleMessages,
    streamingText,
    streamingComplete,
    currentMessages,
    messagesEndRef,
    messagesContainerRef,
  } = props;

  return (
    <div className="relative w-full min-w-0 max-w-full">
      {/* Soft glow under the frame — clipped to its parent so it never expands the box */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-visible">
        <div
          aria-hidden
          className="absolute -inset-x-2 -bottom-10 top-10 rounded-[2rem] bg-[radial-gradient(circle_at_50%_100%,rgba(196,88,63,0.18),transparent_70%)] blur-3xl sm:-inset-x-6 sm:-bottom-12 sm:top-12"
        />
      </div>

      <div className="w-full max-w-full overflow-hidden rounded-xl border border-border/70 bg-background shadow-[0_30px_80px_-30px_rgba(34,27,22,0.35),0_2px_0_rgba(255,255,255,0.6)_inset] ring-1 ring-foreground/5">
        {/* Window chrome */}
        <div className="flex h-9 items-center gap-2 border-b border-border/60 bg-muted/30 px-2.5 sm:gap-3 sm:px-3">
          <div className="flex shrink-0 items-center gap-1 sm:gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#FF5F57] sm:h-2.5 sm:w-2.5" />
            <span className="h-2 w-2 rounded-full bg-[#FFBD2E] sm:h-2.5 sm:w-2.5" />
            <span className="h-2 w-2 rounded-full bg-[#28CA41] sm:h-2.5 sm:w-2.5" />
          </div>
          {/* Address / search bar */}
          <div className="mx-auto flex h-6 w-full min-w-0 max-w-[420px] items-center gap-1.5 rounded-md border border-border/60 bg-background px-2 text-[10.5px] sm:gap-2 sm:text-[11px]">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint/60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint" />
            </span>
            {/* Mobile: short channel-only URL · sm+: full path */}
            <span className="truncate font-mono text-foreground/55 sm:hidden">
              ozzios.com / {activeChannel}
            </span>
            <span className="hidden truncate font-mono text-foreground/55 sm:inline">
              app.ozzios.com / channels / {activeChannel}
            </span>
            <span className="ml-auto hidden shrink-0 items-center gap-1 text-foreground/40 sm:inline-flex">
              <Command className="h-3 w-3" />
              <Kbd className="h-[16px] min-w-[16px] text-[9px]">K</Kbd>
            </span>
          </div>
          <div className="hidden h-2.5 w-12 sm:block" />
        </div>

        {/* Body — fixed mobile height (no aspect-ratio so width can't expand);
              proper aspect ratios kick in from sm+ once layout stabilizes */}
        <div className="relative flex h-[480px] w-full max-w-full overflow-hidden bg-background sm:h-auto sm:aspect-[4/3] md:aspect-[16/9]">
          <DemoSidebar
            activeChannel={activeChannel}
            onChannelChange={onChannelChange}
          />

          <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
            <DemoChannelHeader
              activeChannel={activeChannel}
              onChannelChange={onChannelChange}
              mobileOpen={mobileOpen}
              setMobileOpen={setMobileOpen}
            />
            <DemoTabs />

            <div
              ref={messagesContainerRef}
              className="scrollbar-hidden min-h-0 flex-1 space-y-3 overflow-y-auto overflow-x-hidden bg-background px-2.5 py-2.5 sm:space-y-4 sm:px-4 sm:py-3"
            >
              <AnimatePresence mode="popLayout">
                {currentMessages
                  .filter((m) => visibleMessages.includes(m.id))
                  .map((message) => (
                    <MessageRow
                      key={message.id}
                      message={message}
                      streamingText={streamingText}
                      streamingComplete={streamingComplete}
                    />
                  ))}
              </AnimatePresence>

              <AnimatePresence>
                {isTyping ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="flex items-center gap-2 text-[11px] text-muted-foreground"
                  >
                    <div className="flex gap-1">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" style={{ animationDelay: '0ms' }} />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" style={{ animationDelay: '120ms' }} />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" style={{ animationDelay: '240ms' }} />
                    </div>
                    <span>Agent is responding…</span>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </div>

            <DemoComposer activeChannel={activeChannel} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Demo subcomponents
// ────────────────────────────────────────────────────────────────────────────

function DemoSidebar({
  activeChannel,
  onChannelChange,
}: {
  activeChannel: string;
  onChannelChange: (name: string) => void;
}) {
  return (
    <aside className="hidden w-56 shrink-0 flex-col border-r border-border/60 bg-muted/30 md:flex">
      {/* Workspace pill */}
      <div className="border-b border-border/60 p-3">
        <div className="flex items-center gap-2 rounded-md border border-border/60 bg-background p-1.5">
          <div className="h-7 w-7 overflow-hidden rounded-md">
            <img src="/images/service-hero-logo.webp" alt="Service Hero" className="h-full w-full object-cover" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-[11.5px] font-semibold text-foreground">Service Hero</div>
            <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-mint" />
              Online
            </div>
          </div>
          <ChevronDown className="h-3.5 w-3.5 text-foreground/40" />
        </div>
      </div>

      <div className="flex-1 overflow-hidden py-3">
        <SidebarHeading label="Channels" />
        <div className="space-y-px px-2">
          {sidebarChannels.map((channel) => {
            const isActive = channel.name === activeChannel;
            const isLive = channel.hasMessages;
            return (
              <button
                key={channel.name}
                type="button"
                onClick={() => isLive && onChannelChange(channel.name)}
                disabled={!isLive}
                className={cn(
                  'group/c flex w-full items-center gap-1.5 rounded-md px-2 py-1.5 text-left text-[11.5px] transition-colors duration-150',
                  isActive
                    ? 'bg-signature/10 text-foreground'
                    : isLive
                      ? 'text-muted-foreground hover:bg-foreground/5 hover:text-foreground'
                      : 'cursor-not-allowed text-muted-foreground/40',
                )}
              >
                {channel.starred ? (
                  <Star className="h-3 w-3 fill-signature text-signature" />
                ) : (
                  <Hash className="h-3 w-3" />
                )}
                <span className="truncate">{channel.name}</span>
                {isLive && !isActive ? (
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-signature/60" />
                ) : null}
                {isActive ? (
                  <span className="ml-auto rounded-[5px] bg-signature/15 px-1 font-mono text-[8.5px] font-semibold uppercase tracking-wider text-signature">
                    Live
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>

        <div className="mt-4">
          <SidebarHeading label="Team" />
          <div className="space-y-px px-2">
            {sidebarTeam.map((member) => (
              <div
                key={member.name}
                className="flex items-center gap-2 rounded-md px-2 py-1.5 text-[11.5px] text-muted-foreground transition-colors hover:bg-foreground/5"
              >
                <div className="relative">
                  {member.isAgent ? (
                    <div className="h-5 w-5 overflow-hidden rounded-md">
                      <video
                        src={getAgentMp4(member.name)}
                        autoPlay
                        loop
                        muted
                        playsInline
                        controlsList="nodownload"
                        disablePictureInPicture
                        onContextMenu={(e) => e.preventDefault()}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <img src={member.image} alt={member.name} className="h-5 w-5 rounded-md object-cover" />
                  )}
                  <span
                    className={cn(
                      'absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full border-2 border-background',
                      member.status === 'online' ? 'bg-mint' : 'bg-muted-foreground',
                    )}
                  />
                </div>
                <span className="truncate">{member.name}</span>
                {member.isAgent ? (
                  <span className="ml-auto rounded-[5px] border border-signature/25 bg-signature/10 px-1 font-mono text-[8.5px] font-semibold uppercase tracking-wider text-signature">
                    AI
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

function SidebarHeading({ label }: { label: string }) {
  return (
    <div className="mb-1.5 flex items-center gap-2 px-3">
      <ChevronDown className="h-3 w-3 text-foreground/40" />
      <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-foreground/40">
        {label}
      </span>
      <span className="h-px flex-1 bg-border/50" />
    </div>
  );
}

function DemoChannelHeader({
  activeChannel,
  onChannelChange,
  mobileOpen,
  setMobileOpen,
}: {
  activeChannel: string;
  onChannelChange: (name: string) => void;
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
}) {
  return (
    <div className="relative flex items-center justify-between gap-2 border-b border-border/60 bg-background px-3 py-2 sm:px-4">
      {/* Mobile toggle */}
      <button
        type="button"
        onClick={() => setMobileOpen(!mobileOpen)}
        className="-ml-1 flex min-w-0 items-center gap-1.5 rounded-md px-1.5 py-1 transition-colors hover:bg-muted md:hidden"
      >
        <Menu className="h-4 w-4 shrink-0 text-muted-foreground" />
        <Hash className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
        <span className="max-w-[140px] truncate text-[12px] font-semibold text-foreground">
          {activeChannel}
        </span>
        <ChevronDown
          className={cn(
            'h-3 w-3 shrink-0 text-muted-foreground transition-transform',
            mobileOpen && 'rotate-180',
          )}
        />
      </button>

      {/* Desktop label */}
      <div className="hidden items-center gap-2 md:flex">
        <Star className="h-3.5 w-3.5 fill-signature text-signature" />
        <Hash className="h-3.5 w-3.5 text-muted-foreground" />
        <span className="text-[13px] font-semibold text-foreground">{activeChannel}</span>
        <span className="ml-1 inline-flex items-center gap-1 rounded-[5px] border border-border/60 bg-muted/40 px-1.5 py-0.5 font-mono text-[9.5px] uppercase tracking-wider text-foreground/55">
          <span className="h-1 w-1 rounded-full bg-mint" />
          Live
        </span>
      </div>

      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        {/* Compact mobile live badge */}
        <span className="inline-flex items-center gap-1 rounded-[5px] border border-mint/30 bg-mint/10 px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-mint md:hidden">
          <span className="h-1 w-1 rounded-full bg-mint" />
          Live
        </span>

        <div className="hidden items-center -space-x-1.5 sm:flex">
          {sidebarTeam.slice(0, 3).map((m, i) => (
            <div key={m.name} className="rounded-full ring-2 ring-background" style={{ zIndex: 3 - i }}>
              {m.isAgent ? (
                <div className="h-6 w-6 overflow-hidden rounded-full">
                  <video
                    src={getAgentMp4(m.name)}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controlsList="nodownload"
                    disablePictureInPicture
                    onContextMenu={(e) => e.preventDefault()}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <img src={m.image} alt="" className="h-6 w-6 rounded-full object-cover" />
              )}
            </div>
          ))}
          <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-background bg-muted text-[9px] text-muted-foreground">
            +4
          </div>
        </div>
        <button type="button" className="hidden text-muted-foreground transition-colors hover:text-foreground sm:inline-flex" aria-label="Search">
          <Search className="h-4 w-4" />
        </button>
        <button type="button" className="hidden text-muted-foreground transition-colors hover:text-foreground sm:inline-flex" aria-label="Settings">
          <Settings className="h-4 w-4" />
        </button>
      </div>

      {/* Mobile channel dropdown */}
      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-x-0 top-full z-50 border-b border-border/60 bg-background shadow-xl md:hidden"
          >
            <div className="space-y-0.5 p-2">
              <div className="px-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/40">
                Channels
              </div>
              {sidebarChannels.map((channel) => {
                const isActive = channel.name === activeChannel;
                return (
                  <button
                    key={channel.name}
                    type="button"
                    onClick={() => {
                      if (channel.hasMessages) {
                        onChannelChange(channel.name);
                        setMobileOpen(false);
                      }
                    }}
                    disabled={!channel.hasMessages}
                    className={cn(
                      'flex w-full items-center gap-2 rounded-md px-2 py-2 text-[12px] transition-colors',
                      isActive
                        ? 'bg-signature/10 text-foreground'
                        : channel.hasMessages
                          ? 'text-muted-foreground hover:bg-muted hover:text-foreground'
                          : 'cursor-not-allowed text-muted-foreground/40',
                    )}
                  >
                    {channel.starred ? (
                      <Star className="h-3.5 w-3.5 fill-signature text-signature" />
                    ) : (
                      <Hash className="h-3.5 w-3.5" />
                    )}
                    <span>{channel.name}</span>
                    {channel.hasMessages && !isActive ? (
                      <span className="ml-auto h-2 w-2 rounded-full bg-signature/60" />
                    ) : null}
                    {isActive ? (
                      <span className="ml-auto rounded-[5px] bg-signature/15 px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-signature">
                        Active
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function DemoTabs() {
  return (
    <div className="scrollbar-hidden flex items-center gap-0.5 overflow-x-auto border-b border-border/60 bg-background px-2 py-1.5 sm:px-3">
      {demoTabs.map((tab, i) => (
        <button
          key={tab.label}
          type="button"
          className={cn(
            'inline-flex shrink-0 items-center gap-1.5 rounded-md px-2 py-1 text-[11px] transition-colors sm:px-2.5',
            i === 0
              ? 'bg-foreground/[0.06] text-foreground'
              : 'text-muted-foreground hover:bg-foreground/[0.03] hover:text-foreground',
          )}
        >
          <tab.icon className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">{tab.label}</span>
        </button>
      ))}
      <div className="ml-auto hidden shrink-0 items-center gap-1 text-[10px] text-foreground/40 sm:inline-flex">
        <Kbd className="h-[16px] min-w-[16px] text-[9px]">⌘</Kbd>
        <Kbd className="h-[16px] min-w-[16px] text-[9px]">/</Kbd>
        <span className="hidden md:inline">switch view</span>
      </div>
    </div>
  );
}

function DemoComposer({ activeChannel }: { activeChannel: string }) {
  const suggestions = channelSuggestions[activeChannel] ?? channelSuggestions['lead-follow-up'];

  return (
    <div className="border-t border-border/60 bg-background px-2.5 pb-2 pt-2 sm:px-3 sm:pb-2.5 sm:pt-2.5">
      {/* Suggestion chips — emoji-free, scrollable on mobile */}
      <div className="scrollbar-hidden mb-2 flex items-center gap-1.5 overflow-x-auto">
        <span className="shrink-0 font-mono text-[9.5px] uppercase tracking-[0.18em] text-foreground/40">
          Try
        </span>
        {suggestions.map((chip) => (
          <button
            key={chip.label}
            type="button"
            className="group/chip inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border/60 bg-background px-2.5 py-1.5 text-[10.5px] text-muted-foreground transition-all duration-150 hover:-translate-y-0.5 hover:border-signature/30 hover:bg-signature/[0.06] hover:text-foreground sm:py-1"
          >
            <chip.icon className="h-3 w-3 shrink-0 text-foreground/45 transition-colors group-hover/chip:text-signature" />
            <span className="whitespace-nowrap">{chip.label}</span>
          </button>
        ))}
      </div>

      {/* Composer input */}
      <div className="flex items-center gap-2 rounded-md border border-border/60 bg-muted/30 px-3 py-2">
        <span className="min-w-0 flex-1 truncate text-[11px] text-muted-foreground">
          Message{' '}
          <span className="text-foreground/55">#{activeChannel}</span>
        </span>
        <div className="flex shrink-0 items-center gap-2">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-foreground/[0.05] text-[10px] text-foreground/55">
            @
          </span>
          <Send className="h-4 w-4 text-muted-foreground/55" />
        </div>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Message rendering
// ────────────────────────────────────────────────────────────────────────────

type ChatMessage = (typeof leadFollowUpMessages)[number];

function MessageRow({
  message,
  streamingText,
  streamingComplete,
}: {
  message: ChatMessage;
  streamingText: Record<number, string>;
  streamingComplete: Record<number, boolean>;
}) {
  return (
    <motion.div
      key={message.id}
      variants={messageVariants}
      initial="hidden"
      animate="visible"
      className="flex min-w-0 gap-2 sm:gap-3"
    >
      {/* Avatar */}
      <div className="shrink-0">
        {message.isAgent ? (
          <div className="h-7 w-7 overflow-hidden rounded-md ring-1 ring-signature/15 sm:h-9 sm:w-9">
            <video
              src={getAgentMp4(message.user)}
              autoPlay
              loop
              muted
              playsInline
              controlsList="nodownload"
              disablePictureInPicture
              onContextMenu={(e) => e.preventDefault()}
              className="h-full w-full object-cover"
            />
          </div>
        ) : (
          <img
            src={message.avatar!}
            alt={message.user}
            className="h-7 w-7 rounded-md object-cover sm:h-9 sm:w-9"
          />
        )}
      </div>

      {/* Body */}
      <div className="min-w-0 flex-1 overflow-hidden">
        <div className="mb-1 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 sm:gap-x-2">
          <span className="truncate text-[11px] font-semibold text-foreground sm:text-[12px]">
            {message.user}
          </span>
          {message.isAgent ? (
            <span className="shrink-0 rounded-[5px] border border-signature/25 bg-signature/10 px-1 py-0.5 font-mono text-[8.5px] font-semibold uppercase tracking-wider text-signature">
              AI
            </span>
          ) : null}
          <span className="shrink-0 text-[10px] text-muted-foreground">{message.time}</span>
        </div>

        <div className="break-words text-[11.5px] leading-relaxed text-muted-foreground sm:text-[12px]">
          <MessageContent
            message={message}
            streamingText={streamingText}
            streamingComplete={streamingComplete}
          />
        </div>

        {/* Reactions */}
        {message.reactions && (!message.isAgent || streamingComplete[message.id]) ? (
          <div className="mt-2 flex gap-1.5">
            {message.reactions.map((r, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-muted px-2 py-0.5 text-[10px] text-muted-foreground"
              >
                <span className="text-[11px]">{r.emoji}</span>
                {r.count}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

function MessageContent({
  message,
  streamingText,
  streamingComplete,
}: {
  message: ChatMessage;
  streamingText: Record<number, string>;
  streamingComplete: Record<number, boolean>;
}) {
  const isAgent = message.isAgent;
  const isStreaming = isAgent && !streamingComplete[message.id];
  const streamed = streamingText[message.id] || '';

  // Pre-compute text-part offsets for agent streaming
  const textOffsets: Array<{ index: number; startPos: number; endPos: number }> = [];
  if (isAgent) {
    let pos = 0;
    message.content.forEach((part, idx) => {
      if (part.type === 'text' && part.text) {
        textOffsets.push({ index: idx, startPos: pos, endPos: pos + part.text.length });
        pos += part.text.length;
      }
    });
  }

  return (
    <>
      {message.content.map((part, i) => {
        // ── Mention (always render) ──────────────────────────────
        if (part.type === 'mention') {
          return (
            <span
              key={i}
              className="inline-flex items-center rounded bg-signature/10 px-1.5 py-0.5 font-medium text-signature"
            >
              {part.text}
            </span>
          );
        }

        // ── Streamed text for agents, plain for users ────────────
        if (part.type === 'text' && part.text) {
          if (!isAgent) return <span key={i}>{part.text}</span>;

          const off = textOffsets.find((t) => t.index === i);
          if (!off) return <span key={i}>{part.text}</span>;

          let display = '';
          if (isStreaming && streamed) {
            const len = streamed.length;
            if (len > off.startPos) {
              display = part.text.substring(0, Math.max(0, Math.min(len - off.startPos, part.text.length)));
            }
          } else {
            display = part.text;
          }
          const showCursor = isStreaming && streamed.length > off.startPos && streamed.length < off.endPos;
          return (
            <span key={i} className="inline">
              {display}
              {showCursor ? (
                <span
                  className="ml-0.5 inline-block align-middle text-foreground/45"
                  style={{ animation: 'blink 1s ease-in-out infinite' }}
                >
                  ▮
                </span>
              ) : null}
            </span>
          );
        }

        // Everything below this gates on streaming completion for agent messages
        const ready = !isAgent || streamingComplete[message.id];

        if (part.type === 'list' && 'items' in part && ready) {
          return (
            <ul key={i} className="my-2 ml-1 space-y-1">
              {(part.items as string[]).map((it, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span className="mt-1 text-signature">·</span>
                  <span className="text-foreground">{it}</span>
                </li>
              ))}
            </ul>
          );
        }

        if (part.type === 'metrics' && 'items' in part && ready) {
          const items = part.items as Array<{ label: string; value: string; change: string }>;
          return (
            <div
              key={i}
              className={cn(
                'my-2 grid grid-cols-2 gap-1.5 sm:gap-2',
                items.length === 4 ? 'sm:grid-cols-4' : 'sm:grid-cols-4 lg:grid-cols-5',
              )}
            >
              {items.map((it, j) => (
                <div
                  key={j}
                  className="rounded-md border border-border/60 bg-muted/30 p-2 text-center"
                >
                  <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                    {it.label}
                  </div>
                  <div className="mt-0.5 text-[13px] font-semibold tabular-nums text-foreground">
                    {it.value}
                  </div>
                  {it.change ? (
                    <div
                      className={cn(
                        'mt-0.5 text-[9px] tabular-nums',
                        it.change.startsWith('+')
                          ? 'text-mint'
                          : it.change.startsWith('-')
                            ? 'text-mint'
                            : 'text-muted-foreground',
                      )}
                    >
                      {it.change}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          );
        }

        if (part.type === 'images' && 'items' in part && ready) {
          const items = part.items as Array<{ image?: string; placeholder?: string; color?: string; wide?: boolean }>;
          return (
            <div key={i} className="my-2 flex flex-wrap gap-2">
              {items.map((it, j) => (
                <div
                  key={j}
                  className={cn(
                    'group/img relative overflow-hidden rounded-md border border-border/60',
                    it.wide ? 'h-20 w-full sm:h-24 sm:w-48' : 'h-16 w-16 sm:h-20 sm:w-20',
                  )}
                >
                  {it.image ? (
                    <img src={it.image} alt="Generated" className="absolute inset-0 h-full w-full object-cover" />
                  ) : (
                    <div className={cn('absolute inset-0 bg-gradient-to-br', it.color)} />
                  )}
                  <div className="absolute inset-0 bg-black/15" />
                  {it.placeholder ? (
                    <span className="absolute inset-0 flex items-center justify-center text-[10px] font-medium text-white">
                      {it.placeholder}
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          );
        }

        if (part.type === 'videos' && 'items' in part && ready) {
          const items = part.items as Array<{ image?: string; placeholder?: string; color?: string; duration: string }>;
          return (
            <div key={i} className="my-2 flex flex-wrap gap-2">
              {items.map((it, j) => (
                <div
                  key={j}
                  className="group/v relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-border/60 sm:h-20 sm:w-20"
                >
                  {it.image ? (
                    <img src={it.image} alt="Video thumbnail" className="absolute inset-0 h-full w-full object-cover" />
                  ) : (
                    <div className={cn('absolute inset-0 bg-gradient-to-br', it.color)} />
                  )}
                  <div className="absolute inset-0 bg-black/35" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="mb-1 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow">
                      <Play className="h-3 w-3 fill-foreground text-foreground" />
                    </div>
                    <span className="text-[9px] font-medium text-white">{it.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          );
        }

        if (part.type === 'actions' && 'items' in part && ready) {
          const items = part.items as Array<{ icon: string; action: string; status: string; detail: string }>;
          return (
            <div key={i} className="my-2 space-y-1.5">
              {items.map((it, j) => (
                <div
                  key={j}
                  className="flex flex-wrap items-center gap-2 rounded-md border border-border/60 bg-muted/30 p-2"
                >
                  <span
                    className={cn(
                      'flex h-5 w-5 items-center justify-center rounded-[5px] border',
                      it.status === 'success'
                        ? 'border-mint/40 bg-mint/10 text-mint'
                        : 'border-border bg-background text-foreground/55',
                    )}
                  >
                    {it.status === 'success' ? <CheckCircle2 className="h-3 w-3" /> : <Sparkles className="h-3 w-3" />}
                  </span>
                  <span className="text-[11px] font-medium text-foreground">{it.action}</span>
                  <span className="hidden text-[10px] text-muted-foreground sm:inline">·</span>
                  <span className="hidden max-w-[150px] truncate text-[10px] text-muted-foreground sm:inline">
                    {it.detail}
                  </span>
                  <span
                    className={cn(
                      'ml-auto rounded-[5px] border px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider',
                      it.status === 'success'
                        ? 'border-mint/30 bg-mint/10 text-mint'
                        : 'border-border bg-muted text-muted-foreground',
                    )}
                  >
                    {it.status === 'success' ? 'Done' : 'Info'}
                  </span>
                </div>
              ))}
            </div>
          );
        }

        if (part.type === 'keywords' && 'items' in part && ready) {
          const items = part.items as Array<{ keyword: string; volume: string; difficulty: string; intent: string }>;
          return (
            <div key={i} className="my-2 space-y-1.5">
              {items.map((it, j) => (
                <div
                  key={j}
                  className="flex flex-col gap-1 rounded-md border border-border/60 bg-muted/30 p-2 sm:flex-row sm:items-center sm:gap-3"
                >
                  <span className="flex-1 truncate text-[11px] font-medium text-foreground">
                    {it.keyword}
                  </span>
                  <div className="flex shrink-0 items-center gap-2">
                    <span className="text-[10px] tabular-nums text-muted-foreground">
                      {it.volume}/mo
                    </span>
                    <span
                      className={cn(
                        'rounded-[5px] border px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider',
                        parseInt(it.difficulty) < 25
                          ? 'border-mint/30 bg-mint/10 text-mint'
                          : parseInt(it.difficulty) < 40
                            ? 'border-sun/30 bg-sun/10 text-sun'
                            : 'border-destructive/30 bg-destructive/10 text-destructive',
                      )}
                    >
                      KD: {it.difficulty}
                    </span>
                    <span className="rounded-[5px] border border-signature/25 bg-signature/10 px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-signature">
                      {it.intent}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          );
        }

        if (part.type === 'code' && 'content' in part && ready) {
          return (
            <div
              key={i}
              className="my-2 overflow-hidden rounded-md border border-foreground/15 bg-foreground p-2.5 font-mono text-[10px] leading-relaxed text-mint sm:p-3"
            >
              <div className="mb-1.5 flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
                <span className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
                <span className="h-2 w-2 rounded-full bg-[#28CA41]" />
              </div>
              <pre className="whitespace-pre-wrap break-all">{part.content}</pre>
            </div>
          );
        }

        if (part.type === 'preview' && 'url' in part && ready) {
          return (
            <PreviewCard
              key={i}
              url={(part as { url: string }).url}
              title={(part as { title: string }).title}
            />
          );
        }

        return null;
      })}
    </>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Preview card (Linear-style report preview)
// ────────────────────────────────────────────────────────────────────────────

function PreviewCard({ url, title }: { url: string; title: string }) {
  return (
    <div className="my-3">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group/preview block overflow-hidden rounded-lg border border-border/70 bg-background transition-all duration-200 hover:-translate-y-0.5 hover:border-signature/35 hover:shadow-[0_18px_40px_-22px_rgba(196,88,63,0.35)]"
      >
        {/* Mini dashboard */}
        <div className="relative bg-gradient-to-br from-muted/40 to-muted p-3">
          {/* Header */}
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 overflow-hidden rounded-[4px]">
                <img src="/images/service-hero-logo.webp" alt="Service Hero" className="h-full w-full object-cover" />
              </div>
              <span className="text-[10px] font-semibold text-foreground">Service Hero — Report</span>
            </div>
            <div className="inline-flex items-center gap-1 rounded-[5px] border border-mint/30 bg-mint/10 px-1.5 py-0.5 font-mono text-[8px] font-semibold uppercase tracking-wider text-mint">
              <span className="h-1 w-1 rounded-full bg-mint" />
              Live
            </div>
          </div>

          {/* Mini metrics */}
          <div className="mb-3 grid grid-cols-4 gap-1.5">
            {[
              { label: 'Revenue', value: '$87.4K' },
              { label: 'Jobs', value: '142' },
              { label: 'Avg Ticket', value: '$615' },
              { label: 'Close', value: '64%' },
            ].map((m) => (
              <div key={m.label} className="rounded-[5px] border border-border/60 bg-background p-1.5">
                <div className="font-mono text-[7px] uppercase tracking-wider text-muted-foreground">
                  {m.label}
                </div>
                <div className="text-[10px] font-semibold tabular-nums text-foreground">
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="mb-2 rounded-[5px] border border-border/60 bg-background p-2">
            <div className="mb-1.5 flex items-center justify-between">
              <span className="font-mono text-[8px] uppercase tracking-wider text-muted-foreground">
                Revenue by service
              </span>
              <span className="font-mono text-[7px] tabular-nums text-foreground/40">30d</span>
            </div>
            <div className="flex h-8 items-end gap-1">
              {[65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88, 72].map((h, idx) => (
                <div
                  key={idx}
                  className="flex-1 rounded-sm bg-gradient-to-t from-signature to-signature/60"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-hidden rounded-[5px] border border-border/60 bg-background">
            <div className="grid grid-cols-3 gap-2 border-b border-border/60 bg-muted/40 px-2 py-1">
              <span className="font-mono text-[7px] uppercase tracking-wider text-muted-foreground">
                Service
              </span>
              <span className="text-right font-mono text-[7px] uppercase tracking-wider text-muted-foreground">
                Revenue
              </span>
              <span className="text-right font-mono text-[7px] uppercase tracking-wider text-muted-foreground">
                Jobs
              </span>
            </div>
            {[
              { c: 'HVAC Install', r: '$38.2K', j: '34' },
              { c: 'Repairs', r: '$28.4K', j: '67' },
              { c: 'Maintenance', r: '$20.8K', j: '41' },
            ].map((row) => (
              <div
                key={row.c}
                className="grid grid-cols-3 gap-2 border-b border-border/40 px-2 py-1 last:border-0"
              >
                <span className="text-[8px] text-muted-foreground">{row.c}</span>
                <span className="text-right text-[8px] font-medium tabular-nums text-foreground">
                  {row.r}
                </span>
                <span className="text-right text-[8px] tabular-nums text-mint">{row.j}</span>
              </div>
            ))}
          </div>

          {/* Footer badge */}
          <div className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-[5px] border border-border/60 bg-background/85 px-1.5 py-0.5 font-mono text-[7px] text-muted-foreground backdrop-blur-sm">
            Powered by e2b.dev
          </div>
        </div>

        {/* Card footer */}
        <div className="border-t border-border/60 bg-background p-2.5">
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <h4 className="truncate text-[11px] font-semibold text-foreground transition-colors group-hover/preview:text-signature">
                  {title}
                </h4>
                <ArrowRight className="h-3 w-3 text-muted-foreground transition-all group-hover/preview:translate-x-0.5 group-hover/preview:text-signature" />
              </div>
              <p className="mt-0.5 truncate text-[9px] text-muted-foreground">{url}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
