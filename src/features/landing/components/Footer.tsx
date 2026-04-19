import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Globe, Lock, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

// ────────────────────────────────────────────────────────────────────────────
// Data
// ────────────────────────────────────────────────────────────────────────────

type FooterLink = { label: string; href: string; badge?: 'New' | 'Beta' };

const footerColumns: Array<{ title: string; links: FooterLink[] }> = [
  {
    title: 'Product',
    links: [
      { label: 'AI Agents', href: '/features/ai-agents' },
      { label: 'Workflows', href: '/features/workflows' },
      { label: 'CRM & Contacts', href: '/features/crm' },
      { label: 'Channels', href: '/features/channels' },
      { label: 'Email Builder', href: '/features/email-builder' },
      { label: 'Voice Agents', href: '/features/voice-agents', badge: 'New' },
      { label: 'Chat Widget', href: '/features/chat-widget', badge: 'New' },
      { label: 'Task Management', href: '/features/tasks' },
      { label: 'Integrations', href: '/integrations' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Solo Operators', href: '/solutions/solo-operators' },
      { label: 'Teams', href: '/solutions/teams' },
      { label: 'Multi-Location', href: '/solutions/enterprise' },
      { label: 'Lead Generation', href: '/solutions/lead-generation' },
      { label: 'Content Marketing', href: '/solutions/content-marketing' },
      { label: 'Customer Management', href: '/solutions/customer-management' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: 'https://app.ozzios.com/docs' },
      { label: 'API Reference', href: 'https://app.ozzios.com/docs/api' },
      { label: 'Changelog', href: '/changelog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Security', href: '/security' },
      { label: 'Privacy', href: '/privacy-policy' },
      { label: 'Terms', href: '/tos' },
      { label: 'Data deletion', href: '/data-deletion' },
    ],
  },
];

type Social = { label: string; href: string; path: string };

const socialLinks: Social[] = [
  {
    label: 'Twitter',
    href: 'https://twitter.com/ozzios',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/ozzios',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ozzios',
    path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
  },
];

// ────────────────────────────────────────────────────────────────────────────
// Primitives
// ────────────────────────────────────────────────────────────────────────────

function FooterLinkRow({ link, onSurface }: { link: FooterLink; onSurface?: 'mark' | 'plain' }) {
  const isExternal = !link.href.startsWith('/');
  const baseClasses =
    'group/link inline-flex items-center gap-1.5 text-[13px] leading-snug text-foreground/65 transition-colors duration-150 hover:text-foreground';

  const inner = (
    <>
      <span className="relative">
        {link.label}
        <span className="absolute -bottom-[1px] left-0 h-px w-0 bg-foreground/40 transition-all duration-200 group-hover/link:w-full" />
      </span>
      {link.badge ? (
        <span
          className={cn(
            'inline-flex h-[16px] items-center rounded-[4px] border px-1 font-mono text-[8.5px] font-semibold uppercase tracking-wider',
            link.badge === 'New'
              ? 'border-signature/30 bg-signature/10 text-signature'
              : 'border-border/70 bg-muted text-muted-foreground',
          )}
        >
          {link.badge}
        </span>
      ) : null}
      {isExternal ? (
        <ArrowUpRight className="h-3 w-3 text-foreground/30 transition-all duration-150 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-foreground/70" />
      ) : null}
    </>
  );

  if (link.href.startsWith('/')) {
    return (
      <Link to={link.href} className={baseClasses}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
      {inner}
    </a>
  );
}

function ColumnHeading({ label }: { label: string }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/40">
        {label}
      </span>
      <span className="h-px flex-1 bg-border/50" />
    </div>
  );
}

function StatusChip() {
  return (
    <a
      href="https://status.ozzios.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group/s inline-flex h-7 items-center gap-2 rounded-full border border-border/60 bg-background/80 px-2.5 text-[11px] font-medium text-foreground/65 backdrop-blur transition-colors hover:border-border hover:text-foreground"
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint/60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint" />
      </span>
      All systems operational
      <ArrowUpRight className="h-3 w-3 text-foreground/35 transition-transform group-hover/s:-translate-y-0.5 group-hover/s:translate-x-0.5 group-hover/s:text-foreground/70" />
    </a>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Footer
// ────────────────────────────────────────────────────────────────────────────

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate mt-32 overflow-hidden border-t border-border/60 bg-background">
      {/* Background washes */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 z-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(196,88,63,0.08),transparent_60%)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.4] [mask-image:linear-gradient(180deg,black_25%,transparent_85%)]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(64, 45, 34, 0.10) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10">
        {/* ── Top band: brand + columns ──────────────────────────── */}
        <div className="grid gap-12 pt-16 lg:grid-cols-[1.6fr_repeat(4,minmax(0,1fr))] lg:gap-10 lg:pt-20">
          {/* Brand panel */}
          <div className="max-w-md">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 transition-opacity hover:opacity-80"
              aria-label="OzziOS home"
            >
              <img
                src="/images/ozzios-logo.svg"
                alt=""
                className="h-6 w-auto brightness-0"
              />
              <span className="hidden h-4 w-px bg-border/70 sm:inline-block" />
              <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40 sm:inline">
                Operating system for the trades
              </span>
            </Link>

            <p className="mt-6 max-w-[380px] text-[13.5px] leading-[1.6] text-muted-foreground">
              The first AI agent platform built for home services. Operations, marketing,
              and follow-up — without another layer of overhead.
            </p>

            {/* Status + version */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <StatusChip />
              <Link
                to="/changelog"
                className="inline-flex h-7 items-center gap-1.5 rounded-full border border-border/60 bg-background/80 px-2.5 font-mono text-[10.5px] uppercase tracking-wider text-foreground/55 backdrop-blur transition-colors hover:text-foreground"
              >
                <span className="text-foreground/35">v</span>
                2.4
              </Link>
            </div>

            {/* Socials */}
            <div className="mt-7 flex items-center gap-1.5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="group/soc inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/60 bg-background text-foreground/55 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/30 hover:bg-foreground hover:text-background"
                >
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
              <span className="ml-1 inline-flex h-9 items-center gap-1.5 rounded-md border border-border/60 bg-background px-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/45">
                <Lock className="h-3 w-3 text-foreground/40" />
                SOC 2 Type II — in progress
              </span>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <ColumnHeading label={col.title} />
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <FooterLinkRow link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bleed wordmark (Linear/Vercel signature) ───────────── */}
        <div className="relative mt-20 select-none lg:mt-28">
          <div className="pointer-events-none flex justify-center overflow-hidden">
            <img
              src="/images/ozzios-logo.svg"
              alt=""
              aria-hidden
              className={cn(
                'h-auto w-full max-w-[1280px]',
                // Brand mark — reads as a deliberate bleed, not a watermark
                '[filter:brightness(0)_invert(0)] opacity-[0.14]',
              )}
              style={{
                // Smooth full fade so the wordmark vanishes completely before
                // the bottom sliver overlaps it.
                maskImage:
                  'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 22%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.25) 75%, rgba(0,0,0,0) 92%)',
                WebkitMaskImage:
                  'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 22%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.25) 75%, rgba(0,0,0,0) 92%)',
              }}
            />
          </div>
        </div>

        {/* ── Bottom sliver ───────────────────────────────────────── */}
        <div className="relative -mt-6 flex flex-col gap-3 border-t border-border/50 pb-8 pt-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-muted-foreground">
            <span className="font-mono">© {year} OzziOS, Inc.</span>
            <span className="hidden h-3 w-px bg-border/60 sm:inline-block" />
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3 w-3 text-foreground/35" />
              Designed in Asheville, NC
            </span>
            <span className="hidden h-3 w-px bg-border/60 sm:inline-block" />
            <span className="inline-flex items-center gap-1.5">
              <Globe className="h-3 w-3 text-foreground/35" />
              English (US)
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-[11px] text-muted-foreground">
            <Link to="/privacy-policy" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
            <span className="h-3 w-px bg-border/60" />
            <Link to="/tos" className="transition-colors hover:text-foreground">
              Terms
            </Link>
            <span className="h-3 w-px bg-border/60" />
            <Link to="/data-deletion" className="transition-colors hover:text-foreground">
              Data deletion
            </Link>
            <span className="h-3 w-px bg-border/60" />
            <a
              href="mailto:hello@ozzios.com"
              className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
            >
              hello@ozzios.com
              <ArrowUpRight className="h-3 w-3 text-foreground/35" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
