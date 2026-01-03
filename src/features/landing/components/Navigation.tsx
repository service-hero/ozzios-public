import { Link } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Bot, Workflow, MessageSquare, Users, BarChart3, Mail, BookOpen, FileText, Code, Sparkles, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

type NavItem = {
  label: string;
  href?: string;
  megaMenu?: {
    sections: {
      title?: string;
      items: {
        icon?: React.ElementType;
        label: string;
        description?: string;
        href: string;
        badge?: string;
      }[];
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
          title: 'Platform',
          items: [
            { icon: Bot, label: 'AI Agents', description: '14 specialized employees', href: '#agents', badge: 'Core' },
            { icon: Workflow, label: 'Workflows', description: 'Durable automation engine', href: '#workflows' },
            { icon: MessageSquare, label: 'Channels', description: 'Enterprise communication', href: '#channels' },
            { icon: Users, label: 'CRM', description: 'Full lead management', href: '#crm' },
          ],
        },
        {
          title: 'Capabilities',
          items: [
            { icon: BarChart3, label: 'Marketing Suite', description: 'Ads, email, social', href: '#marketing' },
            { icon: Mail, label: 'Gmail & Calendar', description: 'Two-way sync', href: '#integrations' },
            { icon: Sparkles, label: '77+ Tools', description: 'Built into every agent', href: '#tools', badge: 'New' },
          ],
        },
      ],
      cta: {
        title: 'See OzziOS in action',
        description: 'Watch a 2-minute demo of AI agents at work',
        href: '#demo',
      },
    },
  },
  {
    label: 'Solutions',
    megaMenu: {
      sections: [
        {
          title: 'By team size',
          items: [
            { label: 'Solo Agencies', description: 'Scale without hiring', href: '#solo' },
            { label: 'Teams', description: 'Collaborate with AI', href: '#teams' },
            { label: 'Enterprise', description: 'Unlimited sub-accounts', href: '#enterprise' },
          ],
        },
        {
          title: 'By use case',
          items: [
            { label: 'Lead Generation', description: 'Automate outreach', href: '#leads' },
            { label: 'Content Marketing', description: 'AI-powered creation', href: '#content' },
            { label: 'Client Management', description: 'Multi-tenant CRM', href: '#clients' },
          ],
        },
      ],
    },
  },
  {
    label: 'Resources',
    megaMenu: {
      sections: [
        {
          title: 'Learn',
          items: [
            { icon: BookOpen, label: 'Documentation', description: 'Guides and tutorials', href: '/docs' },
            { icon: FileText, label: 'Blog', description: 'Updates and insights', href: '/blog' },
            { icon: Code, label: 'API Reference', description: 'Build integrations', href: '/docs/api' },
          ],
        },
      ],
    },
  },
  { label: 'Pricing', href: '#pricing' },
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          hasScrolled && 'backdrop-blur-xl bg-[#0A0A0B]/80'
        )}
      >
        {/* Subtle border when scrolled */}
        <div
          className={cn(
            'absolute inset-x-0 bottom-0 h-px transition-opacity duration-300',
            hasScrolled ? 'opacity-100' : 'opacity-0'
          )}
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 50%, transparent)',
          }}
        />

        <nav className="relative mx-auto max-w-[1400px] h-[72px] flex items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <img
              src="/images/dark-theme-logo.svg"
              alt="OzziOS"
              className="h-6 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.megaMenu && setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                {item.megaMenu ? (
                  <button
                    className={cn(
                      'flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium transition-colors rounded-lg',
                      activeMenu === item.label
                        ? 'text-white'
                        : 'text-white/50 hover:text-white'
                    )}
                  >
                    {item.label}
                    <ChevronDown className={cn(
                      'h-3.5 w-3.5 transition-transform duration-200',
                      activeMenu === item.label && 'rotate-180'
                    )} />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="px-4 py-2 text-[13px] font-medium text-white/50 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://app.ozzios.com/sign-in"
              className="text-[13px] font-medium text-white/50 hover:text-white transition-colors"
            >
              Sign in
            </a>
            <Button
              size="sm"
              asChild
              className="h-9 px-5 text-[13px] font-medium bg-white text-[#0A0A0B] hover:bg-white/90 rounded-full"
            >
              <a href="https://app.ozzios.com/sign-up">
                Get started
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 -mr-2 text-white/70 hover:text-white transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mega Menu Dropdowns */}
        <AnimatePresence>
          {activeMenu && isMounted && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className="absolute top-[72px] left-0 right-0 hidden lg:flex justify-center pointer-events-none"
              onMouseEnter={() => setActiveMenu(activeMenu)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="pointer-events-auto mx-8 w-full max-w-[900px]">
                {navItems.map((item) => {
                  if (item.label !== activeMenu || !item.megaMenu) return null;

                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/[0.06] bg-[#111113]/95 backdrop-blur-xl p-6 shadow-2xl shadow-black/40"
                    >
                      <div className="grid grid-cols-12 gap-8">
                        {/* Sections */}
                        <div className={cn(
                          'col-span-12 grid gap-8',
                          item.megaMenu.cta ? 'lg:col-span-8' : 'lg:col-span-12',
                          item.megaMenu.sections.length > 1 ? 'sm:grid-cols-2' : 'sm:grid-cols-1'
                        )}>
                          {item.megaMenu.sections.map((section, idx) => (
                            <div key={idx}>
                              {section.title && (
                                <p className="text-[10px] font-semibold text-white/30 uppercase tracking-[0.15em] mb-4">
                                  {section.title}
                                </p>
                              )}
                              <div className="space-y-1">
                                {section.items.map((subItem) => {
                                  const Icon = subItem.icon;
                                  return (
                                    <a
                                      key={subItem.label}
                                      href={subItem.href}
                                      className="flex items-start gap-3 p-3 rounded-xl transition-colors hover:bg-white/[0.04] group"
                                    >
                                      {Icon && (
                                        <div className="h-9 w-9 rounded-lg bg-white/[0.04] flex items-center justify-center shrink-0 group-hover:bg-white/[0.06] transition-colors">
                                          <Icon className="h-4 w-4 text-white/40 group-hover:text-white/60 transition-colors" />
                                        </div>
                                      )}
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                          <p className="text-[13px] font-medium text-white/80 group-hover:text-white transition-colors">
                                            {subItem.label}
                                          </p>
                                          {subItem.badge && (
                                            <span className="px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 rounded">
                                              {subItem.badge}
                                            </span>
                                          )}
                                        </div>
                                        {subItem.description && (
                                          <p className="text-[12px] text-white/30 mt-0.5">
                                            {subItem.description}
                                          </p>
                                        )}
                                      </div>
                                    </a>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* CTA Section */}
                        {item.megaMenu.cta && (
                          <div className="col-span-12 lg:col-span-4">
                            <a
                              href={item.megaMenu.cta.href}
                              className="block h-full rounded-xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.06] p-5 transition-all hover:border-white/[0.1] hover:from-white/[0.06] group"
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                                  <Sparkles className="w-4 h-4 text-amber-400" />
                                </div>
                              </div>
                              <p className="text-[14px] font-medium text-white mb-1">
                                {item.megaMenu.cta.title}
                              </p>
                              <p className="text-[12px] text-white/40 leading-relaxed mb-3">
                                {item.megaMenu.cta.description}
                              </p>
                              <div className="flex items-center gap-1 text-[12px] font-medium text-amber-400">
                                Watch demo
                                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                              </div>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0A0A0B] lg:hidden"
          >
            <div className="h-full overflow-y-auto pt-[72px] pb-safe">
              <div className="px-6 py-8 space-y-2">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.megaMenu ? (
                      <MobileMenuSection item={item} onClose={() => setIsMobileMenuOpen(false)} />
                    ) : (
                      <a
                        href={item.href}
                        className="flex items-center h-12 text-[15px] font-medium text-white/80"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                ))}

                {/* CTA section */}
                <div className="pt-8 mt-6 border-t border-white/[0.06] space-y-3">
                  <a
                    href="https://app.ozzios.com/sign-in"
                    className="flex items-center justify-center h-12 text-[14px] font-medium text-white/60 rounded-xl border border-white/[0.08] hover:bg-white/[0.02] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign in
                  </a>
                  <Button
                    size="lg"
                    asChild
                    className="w-full h-12 text-[14px] font-medium bg-white text-[#0A0A0B] hover:bg-white/90 rounded-full"
                  >
                    <a href="https://app.ozzios.com/sign-up" onClick={() => setIsMobileMenuOpen(false)}>
                      Get started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileMenuSection({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.megaMenu) return null;

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center justify-between w-full h-12 text-[15px] font-medium transition-colors',
          isOpen ? 'text-white' : 'text-white/80'
        )}
      >
        {item.label}
        <ChevronDown className={cn(
          'h-4 w-4 text-white/30 transition-transform duration-200',
          isOpen && 'rotate-180'
        )} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="py-3 pl-4 space-y-6 border-l border-white/[0.06]">
              {item.megaMenu.sections.map((section, idx) => (
                <div key={idx}>
                  {section.title && (
                    <p className="text-[10px] font-semibold text-white/30 uppercase tracking-[0.15em] mb-3">
                      {section.title}
                    </p>
                  )}
                  <div className="space-y-1">
                    {section.items.map((subItem) => {
                      const Icon = subItem.icon;
                      return (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="flex items-center gap-3 py-2.5 text-white/50 hover:text-white transition-colors"
                          onClick={onClose}
                        >
                          {Icon && <Icon className="h-4 w-4" />}
                          <span className="text-[14px]">{subItem.label}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
