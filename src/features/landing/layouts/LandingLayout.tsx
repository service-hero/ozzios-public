import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { AudienceProvider } from '../contexts/AudienceContext';

interface LandingLayoutProps {
  children: React.ReactNode;
}

export function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <AudienceProvider>
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-background"
        >
          Skip to content
        </a>

        <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(196,88,63,0.16),transparent_32%),radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.9),transparent_30%),linear-gradient(180deg,rgba(255,247,242,0.98),rgba(248,243,236,0.92)_58%,rgba(244,239,233,1))]" />
        <div className="pointer-events-none fixed inset-0 z-0 noise-texture opacity-[0.035]" />
        <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[28rem] bg-[radial-gradient(circle_at_top,rgba(122,85,53,0.12),transparent_70%)] blur-3xl" />

        <div className="relative z-10 flex min-h-screen flex-col">
          <Navigation />
          <main id="main-content" className="flex-1 overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </AudienceProvider>
  );
}
