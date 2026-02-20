import { Link } from '@tanstack/react-router';
import { useState, useEffect, useRef, useCallback } from 'react';
import {
  Menu, X, ChevronDown, ArrowRight,
  Bot, Workflow, Users, MessageSquare, Mail,
  BookOpen, FileText, Code,
  LayoutDashboard, Phone, Smartphone, Palette, PenLine,
  Share2, CheckSquare, FilePen, Monitor, Brain, ClipboardList,
  MessageSquareText,
} from 'lucide-react';
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
        iconSrc?: string;
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
          title: 'Core Platform',
          items: [
            { icon: Bot, label: 'AI Agents', description: 'Unlimited AI workforce', href: '/features/ai-agents', badge: 'Core' },
            { icon: Workflow, label: 'Workflows', description: 'Durable automation engine', href: '/features/workflows' },
            { icon: Users, label: 'CRM & Contacts', description: 'Scoring, enrichment & segmentation', href: '/features/crm' },
            { icon: LayoutDashboard, label: 'Dashboard', description: '18 customizable widget types', href: '/features/dashboard' },
          ],
        },
        {
          title: 'Communication',
          items: [
            { icon: MessageSquare, label: 'Channels', description: 'Public, private, voice & DMs', href: '/features/channels' },
            { icon: Mail, label: 'Email Campaigns', description: 'Broadcast, schedule & track', href: '/features/email-campaigns' },
            { icon: Smartphone, label: 'SMS Campaigns', description: 'Rate-limited Twilio messaging', href: '/features/sms-campaigns' },
            { icon: Phone, label: 'Voice Agents', description: 'AI call center with transcription', href: '/features/voice-agents', badge: 'New' },
            { icon: MessageSquareText, label: 'Chat Widget', description: 'AI-powered website chat', href: '/features/chat-widget', badge: 'New' },
          ],
        },
        {
          title: 'Marketing & Content',
          items: [
            { icon: Palette, label: 'Email Builder', description: 'Drag-and-drop with 16 block types', href: '/features/email-builder' },
            { icon: PenLine, label: 'Blog & SEO', description: 'Editorial suite with WordPress sync', href: '/features/blog-seo' },
            { icon: Share2, label: 'Social Media', description: 'Schedule across 5 platforms', href: '/features/social-media' },
            { icon: ClipboardList, label: 'Forms', description: 'Lead capture with conditional logic', href: '/features/forms' },
          ],
        },
        {
          title: 'Operations',
          items: [
            { icon: CheckSquare, label: 'Task Management', description: 'Kanban boards with dependencies', href: '/features/tasks' },
            { icon: FilePen, label: 'Documents & E-Sign', description: 'Templates, signing & audit trails', href: '/features/documents' },
            { icon: Monitor, label: 'Presentations', description: 'AI slides with PPTX export', href: '/features/presentations' },
            { icon: Code, label: 'Coding', description: 'AI-generated reports & dashboards', href: '/features/coding' },
            { icon: Brain, label: 'Knowledge Base', description: 'RAG-powered search & indexing', href: '/features/knowledge-base' },
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
          title: 'By team size',
          items: [
            { label: 'Solo Agencies', description: 'Scale without hiring', href: '/solutions/solo-agencies' },
            { label: 'Teams', description: 'Collaborate with AI', href: '/solutions/teams' },
            { label: 'Enterprise', description: 'Unlimited sub-accounts', href: '/solutions/enterprise' },
          ],
        },
        {
          title: 'By use case',
          items: [
            { label: 'Lead Generation', description: 'Automate outreach', href: '/solutions/lead-generation' },
            { label: 'Content Marketing', description: 'AI-powered creation', href: '/solutions/content-marketing' },
            { label: 'Client Management', description: 'Multi-tenant CRM', href: '/solutions/client-management' },
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
          ],
        },
        {
          title: 'Community',
          items: [
            { icon: MessageSquare, label: 'Support', description: 'Get help from our team', href: '/contact' },
            { iconSrc: '/images/facebook-icon.svg', label: 'Facebook Group', description: 'Join the OzziOS community', href: 'https://www.facebook.com/groups/1796376351052187' },
          ],
        },
      ],
      cta: {
        title: 'Start building today',
        description: 'Start your 7-day free trial today',
        href: 'https://app.ozzios.com/sign-up?plan=solo',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&auto=format',
      },
    },
  },
  {
    label: 'Integrations',
    megaMenu: {
      sections: [
        {
          title: 'Google Workspace',
          items: [
            { label: 'Gmail & Calendar', description: 'Two-way email and calendar sync', href: '/integrations#google' },
            { label: 'Google Ads', description: 'Campaign management and analytics', href: '/integrations#google' },
            { label: 'Google Business Profile', description: 'Local SEO and listing management', href: '/integrations#google' },
            { label: 'Search Console', description: 'Organic search data and insights', href: '/integrations#google' },
          ],
        },
        {
          title: 'Communication',
          items: [
            { label: 'Twilio', description: 'SMS, voice calls and WhatsApp', href: '/integrations#communication' },
            { label: 'Resend', description: 'Transactional email and domains', href: '/integrations#communication' },
            { label: 'Deepgram', description: 'Real-time speech-to-text', href: '/integrations#communication' },
            { label: 'ElevenLabs', description: 'AI voice synthesis', href: '/integrations#communication' },
          ],
        },
        {
          title: 'Advertising & Platforms',
          items: [
            { label: 'Meta Ads', description: 'Facebook and Instagram campaigns', href: '/integrations#advertising' },
            { label: 'Shopify', description: 'E-commerce store integration', href: '/integrations#platforms' },
            { label: 'WordPress', description: 'CMS publishing and sync', href: '/integrations#platforms' },
            { label: 'LinkedIn & TikTok', description: 'Social ad management', href: '/integrations#advertising' },
          ],
        },
      ],
      cta: {
        title: 'Explore all integrations',
        description: 'Connect with 30+ platforms and services',
        href: '/integrations',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&auto=format',
      },
    },
  },
  { label: 'Pricing', href: '#pricing' },
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeNavItem = activeMenu ? navItems.find(i => i.label === activeMenu) : null;
  const isWideMegaMenu = (activeNavItem?.megaMenu?.sections.length ?? 0) >= 4;

  const openMenu = useCallback((label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveMenu(label);
  }, []);

  const closeMenu = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  }, []);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
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
          hasScrolled ? 'bg-white shadow-sm border-b border-border/50 backdrop-blur-sm bg-white/95' : 'bg-transparent border-b border-transparent'
        )}
      >
        {/* Border when scrolled - removed because it's handled on the header class */}
        <div className="hidden" />

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
                onMouseEnter={() => item.megaMenu && openMenu(item.label)}
                onMouseLeave={closeMenu}
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
              className="h-9 px-5 text-[12px] font-bold tracking-wide bg-signature text-white hover:bg-signature/90 rounded-md shadow-sm"
            >
              <a href="https://app.ozzios.com/sign-up?plan=solo">
                Start free trial
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
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
              onMouseEnter={() => activeMenu && openMenu(activeMenu)}
              onMouseLeave={closeMenu}
            >
              <div className={cn("pointer-events-auto mx-8 w-full pt-[22px]", isWideMegaMenu ? "max-w-[1100px]" : "max-w-[900px]")}>
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
                          item.megaMenu.sections.length >= 4
                            ? 'sm:grid-cols-2 lg:grid-cols-4'
                            : item.megaMenu.sections.length === 3
                              ? 'sm:grid-cols-3'
                              : item.megaMenu.sections.length > 1
                                ? 'sm:grid-cols-2'
                                : 'sm:grid-cols-1'
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
                                  const LinkOrA = subItem.href.startsWith('/') ? Link : 'a';
                                  const linkProps = subItem.href.startsWith('/')
                                    ? { to: subItem.href, onClick: () => setActiveMenu(null) }
                                    : { href: subItem.href, target: '_blank', rel: 'noopener noreferrer' };
                                  return (
                                    <LinkOrA
                                      key={subItem.label}
                                      {...linkProps as any}
                                      className="flex items-start gap-3 p-3 rounded-xl transition-colors hover:bg-gray-50 group"
                                    >
                                      {subItem.iconSrc ? (
                                        <div className="h-9 w-9 rounded-xl bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-gray-200 transition-colors">
                                          <img src={subItem.iconSrc} alt="" className="h-4 w-4" />
                                        </div>
                                      ) : Icon ? (
                                        <div className="h-9 w-9 rounded-xl bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-gray-200 transition-colors">
                                          <Icon className="h-4 w-4 text-gray-600" />
                                        </div>
                                      ) : null}
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
                                    </LinkOrA>
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
                                  {item.label === 'Product' ? 'Watch demo' : item.label === 'Solutions' ? 'View case studies' : item.label === 'Integrations' ? 'View all' : 'Get started'}
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
                    className="flex items-center justify-center h-12 text-[14px] font-semibold text-gray-600 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign in
                  </a>
                  <Button
                    size="lg"
                    asChild
                    className="w-full h-12 text-[13px] font-bold tracking-wide bg-signature text-white hover:bg-signature/90 rounded-md shadow-sm"
                  >
                    <a href="https://app.ozzios.com/sign-up?plan=solo" onClick={() => setIsMobileMenuOpen(false)}>
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
                          {...(!subItem.href.startsWith('/') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        >
                          {subItem.iconSrc
                            ? <img src={subItem.iconSrc} alt="" className="h-4 w-4" />
                            : Icon && <Icon className="h-4 w-4" />
                          }
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
