import { Link } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Bot, Workflow, MessageSquare, Users, BarChart3, Mail, BookOpen, FileText, Code, Sparkles } from 'lucide-react';
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
            { icon: Bot, label: 'AI Agents', description: '14 specialized employees', href: '#agents' },
            { icon: Workflow, label: 'Workflows', description: 'Durable automation engine', href: '#workflows' },
            { icon: MessageSquare, label: 'Channels', description: 'Slack-class communication', href: '#channels' },
            { icon: Users, label: 'CRM', description: 'Full lead management', href: '#crm' },
          ],
        },
        {
          title: 'Capabilities',
          items: [
            { icon: BarChart3, label: 'Marketing Suite', description: 'Ads, email, social', href: '#marketing' },
            { icon: Mail, label: 'Gmail & Calendar', description: 'Two-way sync', href: '#integrations' },
            { icon: Sparkles, label: '77+ Tools', description: 'Built into every agent', href: '#tools' },
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
            { label: 'For Solo Agencies', description: 'Scale without hiring', href: '#solo' },
            { label: 'For Teams', description: 'Collaborate with AI', href: '#teams' },
            { label: 'For Enterprises', description: 'Unlimited sub-accounts', href: '#enterprise' },
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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Lock body scroll when mobile menu is open
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
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgb(23, 23, 23) 100%)',
          }}
        />

        <nav className="relative mx-auto max-w-[1200px] h-[60px] sm:h-[70px] flex items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <img
              src="/images/dark-theme-logo.svg"
              alt="OzziOS"
              className="h-5 sm:h-6 w-auto"
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
                      'flex items-center gap-1 px-4 py-2 text-[14px] font-medium transition-colors rounded-lg',
                      activeMenu === item.label
                        ? 'text-white bg-white/5'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
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
                    className="px-4 py-2 text-[14px] font-medium text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://app.ozzios.com/sign-in"
              className="px-4 py-2 text-[14px] font-medium text-white/70 hover:text-white transition-colors"
            >
              Sign in
            </a>
            <Button
              size="sm"
              asChild
              className="h-10 px-5 text-[13px] font-medium bg-white text-[rgb(23,23,23)] hover:bg-white/90 rounded-full"
            >
              <a href="https://app.ozzios.com/sign-up">Get started</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 -mr-2 text-white/70 hover:text-white transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mega Menu Dropdowns */}
        <AnimatePresence>
          {activeMenu && isMounted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="absolute top-[70px] left-0 right-0 hidden lg:flex justify-center pointer-events-none"
              onMouseEnter={() => setActiveMenu(activeMenu)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="pointer-events-auto mx-6 w-full max-w-[1000px]">
                {navItems.map((item) => {
                  if (item.label !== activeMenu || !item.megaMenu) return null;
                  
                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-[rgb(53,47,75)] bg-[rgb(23,23,23)] p-6 shadow-2xl"
                    >
                      <div className="grid grid-cols-12 gap-6">
                        {/* Sections */}
                        <div className={cn(
                          'col-span-12 grid gap-8',
                          item.megaMenu.cta ? 'lg:col-span-8' : 'lg:col-span-12',
                          item.megaMenu.sections.length > 1 ? 'sm:grid-cols-2' : 'sm:grid-cols-1'
                        )}>
                          {item.megaMenu.sections.map((section, idx) => (
                            <div key={idx}>
                              {section.title && (
                                <p className="text-[12px] font-medium text-white/40 uppercase tracking-wider mb-4">
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
                                      className="flex items-start gap-3 p-3 rounded-xl transition-colors hover:bg-white/5 group"
                                    >
                                      {Icon && (
                                        <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                                          <Icon className="h-5 w-5 text-orange-400" />
                                        </div>
                                      )}
                                      <div>
                                        <p className="text-[14px] font-medium text-white group-hover:text-orange-400 transition-colors">
                                          {subItem.label}
                                        </p>
                                        {subItem.description && (
                                          <p className="text-[13px] text-white/40 mt-0.5">
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
                              className="block h-full rounded-xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/20 p-6 transition-all hover:border-orange-500/40 hover:from-orange-500/15 hover:to-amber-500/15"
                            >
                              <p className="text-[15px] font-semibold text-white mb-2">
                                {item.megaMenu.cta.title}
                              </p>
                              <p className="text-[13px] text-white/50 leading-relaxed">
                                {item.megaMenu.cta.description}
                              </p>
                              <div className="mt-4 text-[13px] font-medium text-orange-400">
                                Watch demo →
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

      {/* Mobile Menu - Full screen overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[rgb(23,23,23)] lg:hidden"
          >
            {/* Safe area padding for notched devices */}
            <div className="h-full overflow-y-auto pt-[60px] pb-safe">
              <div className="px-4 py-6 space-y-2">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.megaMenu ? (
                      <MobileMenuSection item={item} onClose={() => setIsMobileMenuOpen(false)} />
                    ) : (
                      <a
                        href={item.href}
                        className="flex items-center h-12 px-4 text-[16px] font-medium text-white rounded-xl hover:bg-white/5 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                ))}

                {/* CTA section */}
                <div className="pt-6 mt-4 border-t border-white/10 space-y-3">
                  <a
                    href="https://app.ozzios.com/sign-in"
                    className="flex items-center justify-center h-12 text-[15px] font-medium text-white/70 rounded-xl border border-white/10 hover:bg-white/5 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign in
                  </a>
                  <Button
                    size="lg"
                    asChild
                    className="w-full h-12 text-[15px] font-medium bg-white text-[rgb(23,23,23)] hover:bg-white/90 rounded-full"
                  >
                    <a href="https://app.ozzios.com/sign-up" onClick={() => setIsMobileMenuOpen(false)}>
                      Get started
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
    <div className="rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center justify-between w-full h-12 px-4 text-[16px] font-medium text-white rounded-xl transition-colors',
          isOpen ? 'bg-white/5' : 'hover:bg-white/5'
        )}
      >
        {item.label}
        <ChevronDown className={cn(
          'h-5 w-5 text-white/40 transition-transform duration-200',
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
            <div className="px-4 py-3 space-y-4">
              {item.megaMenu.sections.map((section, idx) => (
                <div key={idx}>
                  {section.title && (
                    <p className="text-[11px] font-medium text-white/40 uppercase tracking-wider mb-2 px-2">
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
                          className="flex items-center gap-3 px-2 py-2.5 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                          onClick={onClose}
                        >
                          {Icon && <Icon className="h-4 w-4 text-orange-400" />}
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
