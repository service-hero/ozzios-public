import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

interface LandingLayoutProps {
  children: React.ReactNode;
}

export function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="relative min-h-screen w-full flex flex-col bg-background">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Primary glow - top right */}
        <div
          className="absolute -top-48 -right-48 h-[600px] w-[600px] rounded-full blur-[120px] opacity-[0.04]"
          style={{ background: 'hsl(var(--primary))' }}
        />

        {/* Secondary glow - bottom left */}
        <div
          className="absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full blur-[100px] opacity-[0.03]"
          style={{ background: 'hsl(24 95% 53%)' }}
        />
      </div>

      {/* Content layer */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
