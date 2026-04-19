import { Link, useRouterState } from '@tanstack/react-router';
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Bot,
  Brain,
  CheckSquare,
  ChevronDown,
  ClipboardList,
  Code,
  CornerDownLeft,
  FileText,
  LayoutDashboard,
  Mail,
  Menu,
  MessageSquare,
  MessageSquareText,
  Palette,
  Phone,
  Share2,
  Smartphone,
  Sparkles,
  Users,
  Workflow,
  X,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// ────────────────────────────────────────────────────────────────────────────
// Types
// ────────────────────────────────────────────────────────────────────────────

type NavLinkItem = {
  icon?: React.ElementType;
  label: string;
  description?: string;
  href: string;
  badge?: string;
  external?: boolean;
};

type NavItem = {
  label: string;
  href?: string;
  megaMenu?: {
    width?: 'standard' | 'wide';
    sections: {
      title?: string;
      items: NavLinkItem[];
    }[];
    featured?: {
      eyebrow: string;
      title: string;
      description: string;
      href: string;
      cta: string;
    };
  };
};

// ────────────────────────────────────────────────────────────────────────────
// Data
// ────────────────────────────────────────────────────────────────────────────

const navItems: NavItem[] = [
  {
    label: 'Product',
    megaMenu: {
      width: 'wide',
      sections: [
        {
          title: 'Core platform',
          items: [
            { icon: Bot, label: 'AI Agents', description: 'Specialized operators that work around the clock', href: '/features/ai-agents', badge: 'Core' },
            { icon: Workflow, label: 'Workflows', description: 'Triggers, conditions, and durable execution', href: '/features/workflows' },
            { icon: Users, label: 'CRM & Contacts', description: 'Segmentation, scoring, and activity history', href: '/features/crm' },
            { icon: LayoutDashboard, label: 'Dashboard', description: 'Configurable reporting for every team', href: '/features/dashboard' },
          ],
        },
        {
          title: 'Communication',
          items: [
            { icon: MessageSquare, label: 'Channels', description: 'Private, public, and cross-team threads', href: '/features/channels' },
            { icon: Mail, label: 'Email Campaigns', description: 'Batch sending with control and attribution', href: '/features/email-campaigns' },
            { icon: Smartphone, label: 'SMS Campaigns', description: 'Rate-aware flows through Twilio', href: '/features/sms-campaigns' },
            { icon: Phone, label: 'Voice Agents', description: 'AI reception and outbound orchestration', href: '/features/voice-agents', badge: 'New' },
            { icon: MessageSquareText, label: 'Chat Widget', description: 'Site chat tied to CRM and knowledge', href: '/features/chat-widget', badge: 'New' },
          ],
        },
        {
          title: 'Marketing & content',
          items: [
            { icon: Palette, label: 'Email Builder', description: 'Drag-and-drop with brand-safe blocks', href: '/features/email-builder' },
            { icon: Share2, label: 'Social Media', description: 'Scheduling, approvals, multi-channel', href: '/features/social-media' },
            { icon: ClipboardList, label: 'Forms', description: 'Lead capture with native triggers', href: '/features/forms' },
          ],
        },
        {
          title: 'Operations',
          items: [
            { icon: CheckSquare, label: 'Task Management', description: 'Boards, owners, execution visibility', href: '/features/tasks' },
            { icon: Code, label: 'Coding', description: 'Generated reports, apps, deliverables', href: '/features/coding' },
            { icon: Brain, label: 'Knowledge Base', description: 'Indexed documents, retrieval-backed answers', href: '/features/knowledge-base' },
          ],
        },
      ],
      featured: {
        eyebrow: 'Newest',
        title: 'Voice Agents',
        description: 'AI reception that books, qualifies, and follows up — without an office line.',
        href: '/features/voice-agents',
        cta: 'See how it works',
      },
    },
  },
  {
    label: 'Solutions',
    megaMenu: {
      sections: [
        {
          title: 'By business size',
          items: [
            { label: 'Solo Operators', description: 'Scale output without adding headcount', href: '/solutions/solo-operators' },
            { label: 'Teams', description: 'Coordinate humans and agents in one system', href: '/solutions/teams' },
            { label: 'Multi-Location', description: 'Standardize performance across branches', href: '/solutions/enterprise' },
          ],
        },
        {
          title: 'By use case',
          items: [
            { label: 'Lead Generation', description: 'Acquisition programs that stay measurable', href: '/solutions/lead-generation' },
            { label: 'Content Marketing', description: 'Plan, produce, and publish in one flow', href: '/solutions/content-marketing' },
            { label: 'Customer Management', description: 'Lifecycle automation across every touchpoint', href: '/solutions/customer-management' },
          ],
        },
      ],
      featured: {
        eyebrow: 'Field guide',
        title: 'Service businesses, deployed',
        description: 'How real operators tie marketing, follow-up, and execution into one operating layer.',
        href: '/pricing',
        cta: 'Read the guide',
      },
    },
  },
  {
    label: 'Resources',
    megaMenu: {
      sections: [
        {
          title: 'Learn',
          items: [
            { icon: BookOpen, label: 'Documentation', description: 'Implementation guides and API references', href: 'https://app.ozzios.com/docs', external: true },
            { icon: FileText, label: 'Changelog', description: 'Recent product releases and updates', href: '/changelog' },
            { icon: Sparkles, label: 'About', description: 'Why we built OzziOS and where it goes next', href: '/about' },
          ],
        },
      ],
    },
  },
  { label: 'Pricing', href: '/pricing' },
];

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
          : 'border-white/15 bg-white/10 text-white/80 shadow-[inset_0_-1px_0_rgba(0,0,0,0.18)]',
        className,
      )}
    >
      {children}
    </kbd>
  );
}

function NavDestination({
  href,
  external,
  className,
  children,
  onClick,
  ariaCurrent,
  onMouseEnter,
  onFocus,
}: {
  href: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  ariaCurrent?: 'page' | undefined;
  onMouseEnter?: () => void;
  onFocus?: () => void;
}) {
  if (href.startsWith('/') && !external) {
    return (
      <Link
        to={href}
        className={className}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onFocus={onFocus}
        aria-current={ariaCurrent}
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={className}
      target={external || !href.startsWith('/') ? '_blank' : undefined}
      rel={external || !href.startsWith('/') ? 'noopener noreferrer' : undefined}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onFocus={onFocus}
    >
      {children}
    </a>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Navigation
// ────────────────────────────────────────────────────────────────────────────

export function Navigation() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const railId = useId();

  const activeNavItem = activeMenu ? navItems.find((i) => i.label === activeMenu) : null;

  const openMenu = useCallback((label: string) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setActiveMenu(label);
  }, []);

  const closeMenu = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => setActiveMenu(null), 120);
  }, []);

  // Scroll = sharper border + tighter shadow
  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll for mobile drawer
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  // Close everything on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setActiveMenu(null);
    setHoveredKey(null);
  }, [pathname]);

  // Close mega menu on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMenu(null);
        setIsMobileOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300',
          'border-b backdrop-blur-xl supports-[backdrop-filter]:bg-background/72',
          hasScrolled
            ? 'border-border/70 bg-background/86 shadow-[0_1px_0_rgba(67,46,33,0.04),0_8px_24px_-12px_rgba(67,46,33,0.10)]'
            : 'border-border/40 bg-background/60',
        )}
        onMouseLeave={() => {
          setHoveredKey(null);
          closeMenu();
        }}
      >
        {/* Top sliver: changelog ping (xl+) */}
        <div className="hidden border-b border-border/40 bg-background/40 xl:block">
          <div className="mx-auto flex h-7 max-w-[1480px] items-center justify-between px-4 sm:px-6 lg:px-10">
            <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-50" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint" />
                </span>
                All systems operational
              </span>
              <span className="h-3 w-px bg-border/60" />
              <Link
                to="/changelog"
                className="group inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                Voice Agents shipped
                <span className="text-foreground/30">·</span>
                <span className="font-mono text-[10px] tracking-tight text-foreground/40">v2.4</span>
                <ArrowUpRight className="h-3 w-3 text-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
              </Link>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
              <a
                href="mailto:hello@ozzios.com"
                className="transition-colors hover:text-foreground"
              >
                hello@ozzios.com
              </a>
              <span className="h-3 w-px bg-border/60" />
              <Link to="/contact" className="transition-colors hover:text-foreground">
                Talk to sales
              </Link>
            </div>
          </div>
        </div>

        <nav
          className="relative mx-auto flex h-[60px] max-w-[1480px] items-center justify-between gap-6 px-4 sm:h-[64px] sm:px-6 lg:px-10"
          aria-label="Main"
        >
          {/* Left cluster: wordmark + primary nav */}
          <div className="flex min-w-0 items-center gap-7">
            <Link
              to="/"
              className="group inline-flex shrink-0 items-center gap-2 transition-opacity hover:opacity-80"
              aria-label="OzziOS home"
            >
              <img
                src="/images/ozzios-logo.svg"
                alt=""
                className="h-[18px] w-auto brightness-0 sm:h-5"
              />
              <span className="hidden h-4 w-px bg-border/70 sm:inline-block" />
              <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40 sm:inline">
                Operating System
              </span>
            </Link>

            {/* Desktop nav with sliding rail */}
            <div
              className="relative hidden items-center lg:flex"
              onMouseLeave={() => setHoveredKey(null)}
            >
              {navItems.map((item) => {
                const key = item.label;
                const isActive = item.href ? pathname === item.href : activeMenu === key;
                const isHot = hoveredKey === key || activeMenu === key;
                const isLink = !item.megaMenu && item.href;

                const sharedClasses = cn(
                  'relative z-10 inline-flex h-9 items-center gap-1.5 rounded-md px-3 text-[13px] font-medium transition-colors duration-200',
                  isActive
                    ? 'text-foreground'
                    : isHot
                      ? 'text-foreground'
                      : 'text-foreground/60 hover:text-foreground',
                );

                const inner = (
                  <>
                    {item.label}
                    {item.megaMenu ? (
                      <ChevronDown
                        className={cn(
                          'h-3 w-3 text-foreground/40 transition-transform duration-200',
                          activeMenu === key && 'rotate-180 text-foreground/70',
                        )}
                        aria-hidden
                      />
                    ) : null}
                  </>
                );

                return (
                  <div
                    key={key}
                    className="relative"
                    onMouseEnter={() => {
                      setHoveredKey(key);
                      if (item.megaMenu) openMenu(key);
                    }}
                    onMouseLeave={() => {
                      if (item.megaMenu) closeMenu();
                    }}
                  >
                    {/* Sliding hover rail */}
                    {isHot ? (
                      <motion.span
                        layoutId={`nav-rail-${railId}`}
                        className="absolute inset-x-1 inset-y-1 rounded-md bg-foreground/[0.055]"
                        transition={{ type: 'spring', stiffness: 460, damping: 36 }}
                        aria-hidden
                      />
                    ) : null}

                    {isLink ? (
                      <NavDestination
                        href={item.href!}
                        className={sharedClasses}
                        onFocus={() => setHoveredKey(key)}
                        ariaCurrent={isActive ? 'page' : undefined}
                      >
                        {inner}
                      </NavDestination>
                    ) : (
                      <button
                        type="button"
                        className={sharedClasses}
                        onClick={() => (activeMenu === key ? setActiveMenu(null) : openMenu(key))}
                        onFocus={() => setHoveredKey(key)}
                        aria-expanded={activeMenu === key}
                        aria-haspopup="true"
                      >
                        {inner}
                      </button>
                    )}

                    {/* Active page underline */}
                    {isActive && !item.megaMenu ? (
                      <motion.span
                        layoutId="nav-active-underline"
                        className="absolute inset-x-3 -bottom-[1px] h-[2px] rounded-full bg-signature"
                        transition={{ type: 'spring', stiffness: 520, damping: 38 }}
                        aria-hidden
                      />
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right cluster: status + sign-in + CTA */}
          <div className="flex items-center gap-2">
            <a
              href="https://app.ozzios.com/sign-in"
              className="hidden h-9 items-center rounded-md px-3 text-[13px] font-medium text-foreground/65 transition-colors hover:bg-foreground/[0.05] hover:text-foreground lg:inline-flex"
            >
              Sign in
            </a>

            <a
              href="https://app.ozzios.com/sign-up"
              className={cn(
                'group relative hidden h-9 items-center gap-2 overflow-hidden rounded-md bg-foreground pl-3.5 pr-2 text-[13px] font-medium text-background',
                'shadow-[0_1px_0_rgba(255,255,255,0.18)_inset,0_1px_2px_rgba(34,27,22,0.18),0_8px_22px_-8px_rgba(34,27,22,0.35)]',
                'transition-all duration-200 hover:bg-[#1a1410] active:translate-y-px lg:inline-flex',
              )}
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              Get started
              <Kbd tone="dark" className="h-[18px]">
                S
              </Kbd>
            </a>

            {/* Mobile cluster */}
            <a
              href="https://app.ozzios.com/sign-up"
              className="inline-flex h-9 items-center rounded-md bg-foreground px-3 text-[13px] font-medium text-background shadow-[0_8px_22px_-10px_rgba(34,27,22,0.4)] lg:hidden"
            >
              Start
            </a>
            <button
              type="button"
              onClick={() => setIsMobileOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/70 bg-background/80 text-foreground/70 transition-colors hover:bg-background hover:text-foreground lg:hidden"
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {/* Mega menu */}
        <AnimatePresence>
          {activeNavItem?.megaMenu ? (
            <motion.div
              key={activeNavItem.label}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="hidden border-t border-border/50 bg-background/96 backdrop-blur-2xl lg:block"
              onMouseEnter={() => openMenu(activeNavItem.label)}
              onMouseLeave={closeMenu}
            >
              <div className="mx-auto max-w-[1480px] px-4 py-7 sm:px-6 lg:px-10">
                <div
                  className={cn(
                    'grid gap-6',
                    activeNavItem.megaMenu.featured ? 'lg:grid-cols-[minmax(0,1fr)_300px]' : '',
                  )}
                >
                  {/* Section grid */}
                  <div
                    className={cn(
                      'grid gap-x-6 gap-y-7',
                      activeNavItem.megaMenu.sections.length >= 4
                        ? 'grid-cols-2 xl:grid-cols-4'
                        : activeNavItem.megaMenu.sections.length === 3
                          ? 'grid-cols-3'
                          : 'grid-cols-2',
                    )}
                    style={{ gridAutoFlow: 'dense' }}
                  >
                    {activeNavItem.megaMenu.sections.map((section) => (
                      <div key={section.title ?? 'links'} className="min-w-0">
                        {section.title ? (
                          <div className="mb-3 flex items-center gap-2">
                            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/38">
                              {section.title}
                            </span>
                            <span className="h-px flex-1 bg-border/50" />
                          </div>
                        ) : null}

                        <ul className="space-y-0.5">
                          {section.items.map((item) => {
                            const Icon = item.icon;
                            const isExternal = item.external || !item.href.startsWith('/');
                            return (
                              <li key={item.label}>
                                <NavDestination
                                  href={item.href}
                                  external={item.external}
                                  onClick={() => setActiveMenu(null)}
                                  className="group/link relative flex items-start gap-3 rounded-md px-2 py-2 transition-colors duration-150 hover:bg-foreground/[0.045]"
                                >
                                  {Icon ? (
                                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border/60 bg-background text-foreground/60 transition-colors duration-150 group-hover/link:border-foreground/20 group-hover/link:bg-foreground group-hover/link:text-background">
                                      <Icon className="h-3.5 w-3.5" />
                                    </span>
                                  ) : (
                                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/25 transition-colors duration-150 group-hover/link:bg-signature" />
                                  )}

                                  <span className="min-w-0 flex-1">
                                    <span className="flex items-center gap-1.5">
                                      <span className="text-[13px] font-medium text-foreground">
                                        {item.label}
                                      </span>
                                      {item.badge ? (
                                        <span
                                          className={cn(
                                            'inline-flex h-[18px] items-center rounded-[5px] border px-1.5 font-mono text-[9px] font-medium uppercase tracking-wider',
                                            item.badge === 'New'
                                              ? 'border-signature/30 bg-signature/10 text-signature'
                                              : item.badge === 'Core'
                                                ? 'border-foreground/15 bg-foreground/5 text-foreground/70'
                                                : 'border-border/70 bg-muted text-muted-foreground',
                                          )}
                                        >
                                          {item.badge}
                                        </span>
                                      ) : null}
                                      {isExternal ? (
                                        <ArrowUpRight className="ml-0.5 h-3 w-3 text-foreground/30 transition-all duration-150 group-hover/link:translate-x-px group-hover/link:-translate-y-px group-hover/link:text-foreground/70" />
                                      ) : null}
                                    </span>
                                    {item.description ? (
                                      <span className="mt-0.5 block text-[12px] leading-[1.45] text-muted-foreground">
                                        {item.description}
                                      </span>
                                    ) : null}
                                  </span>

                                  <CornerDownLeft
                                    className="mt-1 h-3 w-3 shrink-0 text-foreground/0 transition-colors duration-150 group-hover/link:text-foreground/40"
                                    aria-hidden
                                  />
                                </NavDestination>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Featured panel */}
                  {activeNavItem.megaMenu.featured ? (
                    <NavDestination
                      href={activeNavItem.megaMenu.featured.href}
                      onClick={() => setActiveMenu(null)}
                      className="group/feature relative flex flex-col justify-between overflow-hidden rounded-xl border border-border/70 bg-[radial-gradient(circle_at_18%_12%,rgba(196,88,63,0.12),transparent_42%),linear-gradient(180deg,rgba(255,253,250,1),rgba(247,240,232,1))] p-5 transition-all duration-200 hover:border-signature/35 hover:shadow-[0_18px_40px_-18px_rgba(196,88,63,0.32)]"
                    >
                      <div>
                        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-signature">
                          <span className="h-1 w-1 rounded-full bg-signature" />
                          {activeNavItem.megaMenu.featured.eyebrow}
                        </span>
                        <h3 className="mt-3 font-display text-[1.5rem] leading-[1.05] tracking-[-0.025em] text-foreground">
                          {activeNavItem.megaMenu.featured.title}
                        </h3>
                        <p className="mt-2 text-[12.5px] leading-[1.55] text-muted-foreground">
                          {activeNavItem.megaMenu.featured.description}
                        </p>
                      </div>
                      <div className="mt-6 inline-flex items-center gap-2 text-[12.5px] font-medium text-foreground">
                        {activeNavItem.megaMenu.featured.cta}
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/feature:translate-x-1" />
                      </div>
                      {/* corner accent */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-signature/15 blur-2xl transition-all duration-300 group-hover/feature:scale-110 group-hover/feature:bg-signature/25"
                      />
                    </NavDestination>
                  ) : null}
                </div>

                {/* Footer hint row */}
                <div className="mt-6 flex items-center justify-between gap-4 border-t border-border/50 pt-4">
                  <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Kbd>↑</Kbd>
                      <Kbd>↓</Kbd>
                      navigate
                    </span>
                    <span className="h-3 w-px bg-border/60" />
                    <span className="inline-flex items-center gap-1.5">
                      <Kbd>↵</Kbd>
                      open
                    </span>
                    <span className="h-3 w-px bg-border/60" />
                    <span className="inline-flex items-center gap-1.5">
                      <Kbd>esc</Kbd>
                      close
                    </span>
                  </div>
                  <Link
                    to="/pricing"
                    onClick={() => setActiveMenu(null)}
                    className="group/foot inline-flex items-center gap-1.5 text-[12px] font-medium text-foreground/70 transition-colors hover:text-foreground"
                  >
                    See pricing
                    <ArrowRight className="h-3 w-3 transition-transform duration-150 group-hover/foot:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[60] bg-foreground/35 backdrop-blur-[2px] lg:hidden"
            onClick={() => setIsMobileOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
              className="ml-auto flex h-full w-full max-w-[420px] flex-col border-l border-border/70 bg-background shadow-[-20px_0_60px_-20px_rgba(34,27,22,0.25)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer header */}
              <div className="flex h-[60px] shrink-0 items-center justify-between gap-3 border-b border-border/60 px-4 sm:px-5">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2"
                  onClick={() => setIsMobileOpen(false)}
                >
                  <img src="/images/ozzios-logo.svg" alt="OzziOS" className="h-[18px] w-auto brightness-0" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40">
                    Menu
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={() => setIsMobileOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/70 text-foreground/70 transition-colors hover:bg-foreground/[0.05] hover:text-foreground"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Drawer body */}
              <div className="flex-1 overflow-y-auto px-3 py-4 sm:px-4">
                <div className="space-y-1.5">
                  {navItems.map((item) => (
                    <MobileMenuRow
                      key={item.label}
                      item={item}
                      pathname={pathname}
                      onClose={() => setIsMobileOpen(false)}
                    />
                  ))}
                </div>
              </div>

              {/* Drawer footer */}
              <div className="shrink-0 space-y-2 border-t border-border/60 bg-background/70 px-4 py-4 sm:px-5">
                <a
                  href="https://app.ozzios.com/sign-up"
                  onClick={() => setIsMobileOpen(false)}
                  className="group/cta relative flex h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-md bg-foreground text-[13px] font-medium text-background shadow-[0_1px_0_rgba(255,255,255,0.18)_inset,0_10px_28px_-12px_rgba(34,27,22,0.4)]"
                >
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  Get started
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/cta:translate-x-0.5" />
                </a>
                <div className="flex items-center gap-2">
                  <a
                    href="https://app.ozzios.com/sign-in"
                    onClick={() => setIsMobileOpen(false)}
                    className="flex h-10 flex-1 items-center justify-center rounded-md border border-border/70 text-[12.5px] font-medium text-foreground/75 transition-colors hover:bg-foreground/[0.04] hover:text-foreground"
                  >
                    Sign in
                  </a>
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileOpen(false)}
                    className="flex h-10 flex-1 items-center justify-center rounded-md border border-border/70 text-[12.5px] font-medium text-foreground/75 transition-colors hover:bg-foreground/[0.04] hover:text-foreground"
                  >
                    Talk to sales
                  </Link>
                </div>
                <div className="flex items-center justify-between pt-1 text-[11px] text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                    All systems operational
                  </span>
                  <Link
                    to="/changelog"
                    onClick={() => setIsMobileOpen(false)}
                    className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
                  >
                    v2.4
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Spacer-aware sentinel for users that need fallback */}
      {/* Header is fixed; pages don't need extra padding because LandingLayout handles flow */}
    </>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Mobile menu row
// ────────────────────────────────────────────────────────────────────────────

function MobileMenuRow({
  item,
  pathname,
  onClose,
}: {
  item: NavItem;
  pathname: string;
  onClose: () => void;
}) {
  const [isOpen, setIsOpen] = useState(item.label === 'Product');

  if (!item.megaMenu) {
    const isActive = pathname === item.href;
    return (
      <NavDestination
        href={item.href ?? '/'}
        onClick={onClose}
        className={cn(
          'group/m flex h-12 items-center justify-between rounded-md border px-3 text-[14px] font-medium transition-colors',
          isActive
            ? 'border-foreground bg-foreground text-background'
            : 'border-border/60 bg-background text-foreground hover:border-border hover:bg-foreground/[0.04]',
        )}
      >
        {item.label}
        <ArrowUpRight className={cn('h-3.5 w-3.5', isActive ? 'text-background/70' : 'text-foreground/35 group-hover/m:text-foreground/70')} />
      </NavDestination>
    );
  }

  return (
    <div className="overflow-hidden rounded-md border border-border/60 bg-background">
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="flex h-12 w-full items-center justify-between px-3 text-left transition-colors hover:bg-foreground/[0.03]"
        aria-expanded={isOpen}
      >
        <span className="text-[14px] font-medium text-foreground">{item.label}</span>
        <ChevronDown
          className={cn(
            'h-4 w-4 text-foreground/40 transition-transform duration-200',
            isOpen && 'rotate-180 text-foreground/70',
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border/60"
          >
            <div className="space-y-4 px-2 py-3">
              {item.megaMenu!.sections.map((section) => (
                <div key={section.title ?? 'mobile-section'}>
                  {section.title ? (
                    <div className="mb-2 flex items-center gap-2 px-2">
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/40">
                        {section.title}
                      </span>
                      <span className="h-px flex-1 bg-border/50" />
                    </div>
                  ) : null}
                  <ul className="space-y-0.5">
                    {section.items.map((sub) => {
                      const Icon = sub.icon;
                      const isExternal = sub.external || !sub.href.startsWith('/');
                      return (
                        <li key={sub.label}>
                          <NavDestination
                            href={sub.href}
                            external={sub.external}
                            onClick={onClose}
                            className="group/sub flex items-start gap-2.5 rounded-md px-2 py-2 transition-colors hover:bg-foreground/[0.04]"
                          >
                            {Icon ? (
                              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border/60 bg-background text-foreground/60">
                                <Icon className="h-3.5 w-3.5" />
                              </span>
                            ) : (
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/25" />
                            )}
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-1.5">
                                <span className="text-[13px] font-medium text-foreground">{sub.label}</span>
                                {sub.badge ? (
                                  <span
                                    className={cn(
                                      'inline-flex h-[18px] items-center rounded-[5px] border px-1.5 font-mono text-[9px] font-medium uppercase tracking-wider',
                                      sub.badge === 'New'
                                        ? 'border-signature/30 bg-signature/10 text-signature'
                                        : sub.badge === 'Core'
                                          ? 'border-foreground/15 bg-foreground/5 text-foreground/70'
                                          : 'border-border/70 bg-muted text-muted-foreground',
                                    )}
                                  >
                                    {sub.badge}
                                  </span>
                                ) : null}
                                {isExternal ? (
                                  <ArrowUpRight className="h-3 w-3 text-foreground/30" />
                                ) : null}
                              </div>
                              {sub.description ? (
                                <p className="mt-0.5 text-[12px] leading-[1.45] text-muted-foreground">
                                  {sub.description}
                                </p>
                              ) : null}
                            </div>
                          </NavDestination>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
