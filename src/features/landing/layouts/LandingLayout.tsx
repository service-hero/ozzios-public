import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { AudienceProvider } from '../contexts/AudienceContext';

interface LandingLayoutProps {
  children: React.ReactNode;
}

export function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <AudienceProvider>
      <div className="relative min-h-screen w-full flex flex-col bg-background overflow-x-hidden">
      {/* Premium noise texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle radial gradient for depth */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.03), transparent)',
        }}
      />

      {/* Content layer */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </div>
    </AudienceProvider>
  );
}
