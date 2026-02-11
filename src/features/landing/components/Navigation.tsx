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
      image?: string;
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
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format',
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
      cta: {
        title: 'See how agencies use OzziOS',
        description: 'Real examples from agencies scaling with AI agents',
        href: '#case-studies',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&auto=format',
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
            { icon: BookOpen, label: 'Documentation', description: 'Guides and tutorials', href: '/docs' },
            { icon: FileText, label: 'Blog', description: 'Updates and insights', href: '/blog' },
            { icon: Code, label: 'API Reference', description: 'Build integrations', href: '/docs/api' },
          ],
        },
        {
          title: 'Community',
          items: [
            { icon: Users, label: 'Discord', description: 'Join 2,000+ agency owners', href: '#discord' },
            { icon: MessageSquare, label: 'Support', description: 'Get help from our team', href: '#support' },
          ],
        },
      ],
      cta: {
        title: 'Start building today',
        description: 'Start your 7-day free trial today',
        href: 'https://app.ozzios.com/sign-up',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&auto=format',
      },
    },
  },
  { label: 'Integrations', href: '/integrations' },
  { label: 'Blog', href: '/blog' },
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
          'fixed top-0 left-0 right-0 z-50 transition-all duration-150',
          hasScrolled ? 'bg-white shadow-sm' : 'bg-white'
        )}
      >
        {/* Border when scrolled */}
        <div
          className={cn(
            'absolute inset-x-0 bottom-0 h-px bg-gray-200 transition-opacity duration-150',
            hasScrolled ? 'opacity-100' : 'opacity-0'
          )}
        />

        <nav className="relative mx-auto max-w-[1400px] h-[72px] flex items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-70">
            <img
              src="/images/ozzios-logo.svg"
              alt="OzziOS"
              className="h-6 w-auto brightness-0"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0">
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
                      'flex items-center gap-1.5 px-4 py-2 text-[13px] font-semibold transition-colors',
                      activeMenu === item.label
                        ? 'text-black'
                        : 'text-gray-500 hover:text-black'
                    )}
                  >
                    {item.label}
                    <ChevronDown className={cn(
                      'h-3.5 w-3.5 transition-transform duration-150',
                      activeMenu === item.label && 'rotate-180'
                    )} />
                  </button>
                ) : item.href?.startsWith('/') ? (
                  <Link
                    to={item.href}
                    className="px-4 py-2 text-[13px] font-semibold text-gray-500 hover:text-black transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="px-4 py-2 text-[13px] font-semibold text-gray-500 hover:text-black transition-colors"
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
              className="text-[13px] font-semibold text-gray-500 hover:text-black transition-colors"
            >
              Sign in
            </a>
            <Button
              size="sm"
              asChild
              className="h-9 px-5 text-[12px] font-bold uppercase tracking-wider bg-signature text-white hover:bg-signature/90 rounded-full"
            >
              <a href="https://app.ozzios.com/sign-up?plan=starter">
                Start free trial
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 -mr-2 text-gray-600 hover:text-black transition-colors"
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
              transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
              className="absolute top-[50px] left-0 right-0 hidden lg:flex justify-center pointer-events-none"
              onMouseEnter={() => setActiveMenu(activeMenu)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="pointer-events-auto mx-8 w-full max-w-[900px] pt-[22px]">
                {navItems.map((item) => {
                  if (item.label !== activeMenu || !item.megaMenu) return null;

                  return (
                    <div
                      key={item.label}
                      className="border border-gray-200 bg-white p-6 shadow-lg rounded-2xl"
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
                                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-4">
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
                                      className="flex items-start gap-3 p-3 rounded-xl transition-colors hover:bg-gray-50 group"
                                    >
                                      {Icon && (
                                        <div className="h-9 w-9 rounded-xl bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-gray-200 transition-colors">
                                          <Icon className="h-4 w-4 text-gray-600" />
                                        </div>
                                      )}
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                          <p className="text-[13px] font-semibold text-gray-700 group-hover:text-black transition-colors">
                                            {subItem.label}
                                          </p>
                                          {subItem.badge && (
                                            <span className="px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white bg-signature rounded">
                                              {subItem.badge}
                                            </span>
                                          )}
                                        </div>
                                        {subItem.description && (
                                          <p className="text-[12px] text-gray-400 mt-0.5">
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
                              className="block h-full border border-gray-200 rounded-xl overflow-hidden transition-all hover:border-gray-300 hover:shadow-sm group"
                            >
                              {item.megaMenu.cta.image && (
                                <div className="relative h-32 overflow-hidden">
                                  <img
                                    src={item.megaMenu.cta.image}
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-cover"
                                  />
                                </div>
                              )}
                              <div className="p-5 bg-gray-50">
                                <p className="text-[14px] font-semibold text-black mb-1">
                                  {item.megaMenu.cta.title}
                                </p>
                                <p className="text-[12px] text-gray-500 leading-relaxed mb-3">
                                  {item.megaMenu.cta.description}
                                </p>
                                <div className="flex items-center gap-1 text-[12px] font-semibold text-signature">
                                  {item.label === 'Product' ? 'Watch demo' : item.label === 'Solutions' ? 'View case studies' : 'Get started'}
                                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                                </div>
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
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <div className="h-full overflow-y-auto pt-[72px] pb-safe">
              <div className="px-6 py-8 space-y-2">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.megaMenu ? (
                      <MobileMenuSection item={item} onClose={() => setIsMobileMenuOpen(false)} />
                    ) : item.href?.startsWith('/') ? (
                      <Link
                        to={item.href}
                        className="flex items-center h-12 text-[15px] font-semibold text-gray-700"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="flex items-center h-12 text-[15px] font-semibold text-gray-700"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                ))}

                {/* CTA section */}
                <div className="pt-8 mt-6 border-t border-gray-200 space-y-3">
                  <a
                    href="https://app.ozzios.com/sign-in"
                    className="flex items-center justify-center h-12 text-[14px] font-semibold text-gray-600 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign in
                  </a>
                  <Button
                    size="lg"
                    asChild
                    className="w-full h-12 text-[12px] font-bold uppercase tracking-wider bg-signature text-white hover:bg-signature/90 rounded-full"
                  >
                    <a href="https://app.ozzios.com/sign-up?plan=starter" onClick={() => setIsMobileMenuOpen(false)}>
                      Start free trial
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
          'flex items-center justify-between w-full h-12 text-[15px] font-semibold transition-colors',
          isOpen ? 'text-black' : 'text-gray-700'
        )}
      >
        {item.label}
        <ChevronDown className={cn(
          'h-4 w-4 text-gray-400 transition-transform duration-150',
          isOpen && 'rotate-180'
        )} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="overflow-hidden"
          >
            <div className="py-3 pl-4 space-y-6 border-l border-gray-200">
              {item.megaMenu.sections.map((section, idx) => (
                <div key={idx}>
                  {section.title && (
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-3">
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
                          className="flex items-center gap-3 py-2.5 text-gray-600 hover:text-black transition-colors"
                          onClick={onClose}
                        >
                          {Icon && <Icon className="h-4 w-4" />}
                          <span className="text-[14px] font-medium">{subItem.label}</span>
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
