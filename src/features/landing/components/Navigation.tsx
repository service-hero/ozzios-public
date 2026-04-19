import { Link, useRouterState } from '@tanstack/react-router';
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  Bot,
  Brain,
  CheckSquare,
  ChevronDown,
  ClipboardList,
  Code,
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
  Users,
  Workflow,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type NavLinkItem = {
  icon?: React.ElementType;
  label: string;
  description?: string;
  href: string;
  badge?: string;
};

type NavItem = {
  label: string;
  href?: string;
  megaMenu?: {
    sections: {
      title?: string;
      items: NavLinkItem[];
    }[];
    cta?: {
      title: string;
      description: string;
      href: string;
    };
  };
};

const navItems: NavItem[] = [
  {
    label: 'Product',
    megaMenu: {
      sections: [
        {
          title: 'Core platform',
          items: [
            { icon: Bot, label: 'AI Agents', description: 'Specialized operators that work around the clock', href: '/features/ai-agents', badge: 'Core' },
            { icon: Workflow, label: 'Workflows', description: 'Triggers, conditions, and durable execution', href: '/features/workflows' },
            { icon: Users, label: 'CRM & Contacts', description: 'Segmentation, scoring, and activity history', href: '/features/crm' },
            { icon: LayoutDashboard, label: 'Dashboard', description: 'Configurable reporting surfaces for every team', href: '/features/dashboard' },
          ],
        },
        {
          title: 'Communication',
          items: [
            { icon: MessageSquare, label: 'Channels', description: 'Private, public, and cross-team conversations', href: '/features/channels' },
            { icon: Mail, label: 'Email Campaigns', description: 'Batch sending with control and attribution', href: '/features/email-campaigns' },
            { icon: Smartphone, label: 'SMS Campaigns', description: 'Rate-aware messaging flows through Twilio', href: '/features/sms-campaigns' },
            { icon: Phone, label: 'Voice Agents', description: 'AI reception and outbound call orchestration', href: '/features/voice-agents', badge: 'New' },
            { icon: MessageSquareText, label: 'Chat Widget', description: 'Site chat tied to CRM and knowledge', href: '/features/chat-widget', badge: 'New' },
          ],
        },
        {
          title: 'Marketing & content',
          items: [
            { icon: Palette, label: 'Email Builder', description: 'Drag-and-drop editing with brand-safe blocks', href: '/features/email-builder' },
            { icon: Share2, label: 'Social Media', description: 'Scheduling, approvals, and multi-channel posting', href: '/features/social-media' },
            { icon: ClipboardList, label: 'Forms', description: 'Lead capture with native automation triggers', href: '/features/forms' },
          ],
        },
        {
          title: 'Operations',
          items: [
            { icon: CheckSquare, label: 'Task Management', description: 'Boards, owners, and execution visibility', href: '/features/tasks' },
            { icon: Code, label: 'Coding', description: 'Generated reports, apps, and shareable deliverables', href: '/features/coding' },
            { icon: Brain, label: 'Knowledge Base', description: 'Indexed documents and retrieval-backed answers', href: '/features/knowledge-base' },
          ],
        },
      ],
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
            { label: 'Content Marketing', description: 'Planning, production, and publishing in one flow', href: '/solutions/content-marketing' },
            { label: 'Customer Management', description: 'Lifecycle automation across every touchpoint', href: '/solutions/customer-management' },
          ],
        },
      ],
      cta: {
        title: 'See how service businesses deploy OzziOS',
        description: 'Use cases that tie marketing, follow-up, and execution into a single operating layer.',
        href: '/pricing',
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
            { icon: BookOpen, label: 'Documentation', description: 'Implementation guides and API references', href: 'https://app.ozzios.com/docs' },
            { icon: FileText, label: 'Changelog', description: 'Recent product releases and updates', href: '/changelog' },
          ],
        },
      ],
    },
  },
  { label: 'Pricing', href: '/pricing' },
];

function NavDestination({
  href,
  className,
  children,
  onClick,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  if (href.startsWith('/')) {
    return (
      <Link to={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      {children}
    </a>
  );
}

export function Navigation() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeNavItem = activeMenu ? navItems.find((item) => item.label === activeMenu) : null;

  const openMenu = useCallback((label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setActiveMenu(label);
  }, []);

  const closeMenu = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 120);
  }, []);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  const headerChrome = hasScrolled
    ? 'border-border/80 bg-[rgba(252,248,244,0.86)] shadow-[0_18px_70px_rgba(67,46,33,0.08)]'
    : 'border-white/70 bg-[rgba(255,252,249,0.72)] shadow-[0_10px_40px_rgba(67,46,33,0.04)]';

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4 lg:px-8">
        <div
          className={cn(
            'mx-auto max-w-[1460px] rounded-[1.35rem] border backdrop-blur-xl transition-all duration-300 sm:rounded-[1.75rem]',
            headerChrome,
          )}
        >
          <nav className="flex h-[68px] items-center justify-between gap-3 px-4 sm:h-[76px] sm:px-6 lg:px-8">
            <div className="flex min-w-0 items-center gap-3 sm:gap-5">
              <Link to="/" className="min-w-0 shrink-0 transition-opacity hover:opacity-75">
                <img
                  src="/images/ozzios-logo.svg"
                  alt="OzziOS"
                  className="h-5 w-auto brightness-0 sm:h-6"
                />
              </Link>

              <div className="hidden items-center rounded-full border border-border/70 bg-background/70 p-1 lg:flex">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  if (item.megaMenu) {
                    return (
                      <div
                        key={item.label}
                        className="relative"
                        onMouseEnter={() => openMenu(item.label)}
                        onMouseLeave={closeMenu}
                      >
                        <button
                          className={cn(
                            'inline-flex h-11 items-center gap-1.5 rounded-full px-4 text-sm font-medium transition-all duration-300',
                            activeMenu === item.label || isActive
                              ? 'bg-foreground text-background'
                              : 'text-foreground/68 hover:text-foreground',
                          )}
                        >
                          {item.label}
                          <ChevronDown
                            className={cn(
                              'h-3.5 w-3.5 transition-transform duration-300',
                              activeMenu === item.label && 'rotate-180',
                            )}
                          />
                        </button>
                      </div>
                    );
                  }

                  return (
                    <NavDestination
                      key={item.label}
                      href={item.href ?? '/'}
                      className={cn(
                        'inline-flex h-11 items-center rounded-full px-4 text-sm font-medium transition-all duration-300',
                        isActive ? 'bg-foreground text-background' : 'text-foreground/68 hover:text-foreground',
                      )}
                    >
                      {item.label}
                    </NavDestination>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="https://app.ozzios.com/sign-up"
                className="inline-flex h-10 items-center justify-center rounded-full bg-foreground px-4 text-sm font-medium text-background shadow-[0_12px_28px_rgba(34,27,22,0.14)] transition-colors hover:bg-foreground/92"
              >
                Start
              </a>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((open) => !open)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/80 text-foreground transition-colors hover:bg-background"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
              </button>
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href="https://app.ozzios.com/sign-in"
                className="text-sm font-medium text-foreground/68 transition-colors hover:text-foreground"
              >
                Sign in
              </a>
              <Button
                size="sm"
                asChild
                className="h-11 rounded-full border-0 bg-foreground px-5 text-sm font-medium text-background shadow-[0_16px_40px_rgba(34,27,22,0.18)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-foreground/92"
              >
                <a href="https://app.ozzios.com/sign-up">
                  Start with OzziOS
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </a>
              </Button>
            </div>

          </nav>

          <AnimatePresence>
            {activeNavItem?.megaMenu ? (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="hidden px-5 pb-5 lg:block"
                onMouseEnter={() => openMenu(activeNavItem.label)}
                onMouseLeave={closeMenu}
              >
                <div className="overflow-hidden rounded-[1.75rem] border border-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(247,241,235,0.96))] shadow-[0_24px_80px_rgba(67,46,33,0.12)]">
                  <div className="grid gap-8 px-8 py-8 lg:grid-cols-[minmax(0,1fr)_320px]">
                    <div
                      className={cn(
                        'grid gap-6',
                        activeNavItem.megaMenu.sections.length >= 4
                          ? 'md:grid-cols-2 xl:grid-cols-4'
                          : activeNavItem.megaMenu.sections.length === 3
                            ? 'md:grid-cols-3'
                            : 'md:grid-cols-2',
                      )}
                    >
                      {activeNavItem.megaMenu.sections.map((section) => (
                        <div key={section.title ?? 'links'}>
                          {section.title ? (
                            <p className="mb-4 text-[0.68rem] font-semibold tracking-[0.22em] text-foreground/45">
                              {section.title}
                            </p>
                          ) : null}
                          <div className="space-y-2">
                            {section.items.map((item) => {
                              const Icon = item.icon;
                              return (
                                <NavDestination
                                  key={item.label}
                                  href={item.href}
                                  onClick={() => setActiveMenu(null)}
                                  className="group flex min-h-[92px] gap-4 rounded-[1.4rem] border border-transparent bg-white/55 px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-border/80 hover:bg-white"
                                >
                                  {Icon ? (
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-foreground/[0.045] text-foreground/70 transition-colors duration-300 group-hover:bg-foreground group-hover:text-background">
                                      <Icon className="h-4.5 w-4.5" />
                                    </div>
                                  ) : null}
                                  <div className="min-w-0">
                                    <div className="flex items-center gap-2">
                                      <p className="text-sm font-semibold text-foreground">{item.label}</p>
                                      {item.badge ? (
                                        <span className="rounded-full bg-foreground px-2 py-0.5 text-[0.6rem] font-semibold tracking-[0.18em] text-background">
                                          {item.badge}
                                        </span>
                                      ) : null}
                                    </div>
                                    {item.description ? (
                                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                                        {item.description}
                                      </p>
                                    ) : null}
                                  </div>
                                </NavDestination>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-[1.75rem] border border-border/70 bg-[radial-gradient(circle_at_top,rgba(196,88,63,0.18),transparent_34%),linear-gradient(180deg,rgba(36,28,22,0.98),rgba(74,52,39,0.94))] p-7 text-white">
                      <p className="max-w-[12ch] font-display text-[2rem] leading-[0.95] tracking-[-0.04em]">
                        {activeNavItem.megaMenu.cta?.title ?? 'A cleaner operating layer for service teams.'}
                      </p>
                      <p className="mt-4 text-sm leading-6 text-white/72">
                        {activeNavItem.megaMenu.cta?.description ??
                          'Explore the product surface and see how each part connects back to revenue, response time, and execution quality.'}
                      </p>
                      <a
                        href={activeNavItem.megaMenu.cta?.href ?? 'https://app.ozzios.com/sign-up'}
                        className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white transition-opacity hover:opacity-80"
                      >
                        Explore further
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[rgba(27,21,17,0.44)] backdrop-blur-sm lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="ml-auto flex h-full w-full max-w-md flex-col border-l border-border/70 bg-[linear-gradient(180deg,rgba(255,252,249,0.98),rgba(247,240,234,1))] px-4 pb-6 pt-5 shadow-[0_20px_80px_rgba(43,31,22,0.18)] sm:px-5"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <Link
                  to="/"
                  className="inline-flex items-center rounded-full border border-border/70 bg-white/80 px-4 py-2.5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <img
                    src="/images/ozzios-logo.svg"
                    alt="OzziOS"
                    className="h-5 w-auto brightness-0"
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-white/80 text-foreground"
                  aria-label="Close menu"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>

              <div className="space-y-2 overflow-y-auto pr-1">
                {navItems.map((item) => (
                  <MobileMenuSection
                    key={item.label}
                    item={item}
                    pathname={pathname}
                    onClose={() => setIsMobileMenuOpen(false)}
                  />
                ))}
              </div>

              <div className="mt-6 space-y-3 border-t border-border/60 pt-5">
                <a
                  href="https://app.ozzios.com/sign-in"
                  className="flex h-12 items-center justify-center rounded-full border border-border/70 bg-background/80 text-sm font-medium text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign in
                </a>
                <Button
                  size="lg"
                  asChild
                  className="h-12 w-full rounded-full border-0 bg-foreground text-sm font-medium text-background"
                >
                  <a href="https://app.ozzios.com/sign-up" onClick={() => setIsMobileMenuOpen(false)}>
                    Start with OzziOS
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <a
                  href="/pricing"
                  className="flex h-11 items-center justify-center rounded-full text-sm font-medium text-foreground/72 transition-colors hover:text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  View pricing
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function MobileMenuSection({
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
    return (
      <NavDestination
        href={item.href ?? '/'}
        onClick={onClose}
        className={cn(
          'flex min-h-[56px] items-center rounded-[1.4rem] border px-4 text-base font-medium transition-colors',
          pathname === item.href
            ? 'border-foreground bg-foreground text-background'
            : 'border-border/70 bg-white/70 text-foreground',
        )}
      >
        {item.label}
      </NavDestination>
    );
  }

  return (
    <div className="rounded-[1.5rem] border border-border/70 bg-white/70 px-4 py-2">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex min-h-[52px] w-full items-center justify-between text-left"
      >
        <span className="text-base font-medium text-foreground">{item.label}</span>
        <ChevronDown className={cn('h-4 w-4 text-foreground/45 transition-transform duration-300', isOpen && 'rotate-180')} />
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="space-y-5 pb-3 pt-2">
              {item.megaMenu.sections.map((section) => (
                <div key={section.title ?? 'mobile-links'}>
                  {section.title ? (
                    <p className="mb-3 text-[0.68rem] font-semibold tracking-[0.2em] text-foreground/45">
                      {section.title}
                    </p>
                  ) : null}
                  <div className="space-y-2">
                    {section.items.map((subItem) => {
                      const Icon = subItem.icon;
                      return (
                        <NavDestination
                          key={subItem.label}
                          href={subItem.href}
                          onClick={onClose}
                          className="flex items-start gap-3 rounded-[1.2rem] border border-transparent px-3 py-3 transition-colors hover:border-border/60 hover:bg-background/80"
                        >
                          {Icon ? <Icon className="mt-0.5 h-4 w-4 shrink-0 text-foreground/55" /> : null}
                          <div>
                            <p className="text-sm font-medium text-foreground">{subItem.label}</p>
                            {subItem.description ? (
                              <p className="mt-1 text-sm leading-5 text-muted-foreground">
                                {subItem.description}
                              </p>
                            ) : null}
                          </div>
                        </NavDestination>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
