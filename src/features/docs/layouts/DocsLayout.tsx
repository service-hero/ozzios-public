import { DocsSidebar } from '../components/DocsSidebar';
import { DocsHeader } from '../components/DocsHeader';

interface DocsLayoutProps {
  children: React.ReactNode;
}

export function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background">
      {/* Ambient background - matches HomeView styling */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Primary glow - top right */}
        <div
          className="absolute -top-48 -right-48 h-[600px] w-[600px] rounded-full blur-[120px] opacity-[0.06]"
          style={{ background: 'var(--primary)' }}
        />
        
        {/* Secondary glow - bottom left */}
        <div
          className="absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full blur-[100px] opacity-[0.04]"
          style={{ background: 'var(--chart-2)' }}
        />
        
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px),
                              linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Content layer */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <DocsHeader />
        
        <div className="flex flex-1">
          {/* Sidebar */}
          <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-[260px] shrink-0 border-r border-border/40 bg-background/80 backdrop-blur-xl md:sticky md:block lg:w-[280px]">
            <div className="h-full py-6 overflow-y-auto overflow-x-hidden">
              <DocsSidebar />
            </div>
          </aside>
          
          {/* Main content */}
          <main className="relative min-w-0 flex-1">
            <div className="mx-auto max-w-5xl">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
