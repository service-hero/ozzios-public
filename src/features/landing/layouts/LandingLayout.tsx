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
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.015] noise-texture"
      />

      {/* Subtle radial gradient for depth */}
      <div
        className="fixed inset-0 pointer-events-none z-0 glow-depth-violet"
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
