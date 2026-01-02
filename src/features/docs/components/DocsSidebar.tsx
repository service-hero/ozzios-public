'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { BookOpen, Compass, Sparkles, Zap, Code2 } from 'lucide-react';

interface DocsNavItem {
  title: string;
  href?: string;
  items?: DocsNavItem[];
  icon?: React.ComponentType<{ className?: string }>;
}

const docsConfig: DocsNavItem[] = [
  {
    title: "Getting Started",
    icon: Zap,
    items: [
      { title: "Welcome", href: "/docs" },
      { title: "Setting Up", href: "/docs/installation" },
      { title: "How It Works", href: "/docs/architecture" },
    ]
  },
  {
    title: "Learn",
    icon: Compass,
    items: [
      { title: "AI Assistants", href: "/docs/concepts/agents" },
      { title: "Workspaces", href: "/docs/concepts/workspaces" },
      { title: "Automations", href: "/docs/concepts/workflows" },
    ]
  },
  {
    title: "How-To Guides",
    icon: BookOpen,
    items: [
      { title: "Add an AI Assistant", href: "/docs/guides/first-agent" },
      { title: "Create an Automation", href: "/docs/guides/workflows" },
    ]
  },
  {
    title: "Developer API",
    icon: Code2,
    items: [
      { title: "Agent Testing API", href: "/docs/api/agent-testing" },
    ]
  },
];

export function DocsSidebar() {
  const currentPath = usePathname();

  return (
    <nav className="w-full px-4">
      <div className="flex flex-col gap-6">
        {docsConfig.map((section, index) => {
          const IconComponent = section.icon;
          return (
            <div key={index} className="flex flex-col gap-1">
              {/* Section header */}
              <div className="flex items-center gap-2 px-2 py-1.5 mb-1">
                {IconComponent && (
                  <IconComponent className="h-3.5 w-3.5 text-muted-foreground/70" />
                )}
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {section.title}
                </span>
              </div>
              
              {/* Section items */}
              {section.items && section.items.length > 0 && (
                <div className="flex flex-col gap-0.5">
                  {section.items.map((item, itemIndex) => {
                    const isActive = item.href === currentPath;
                    return (
                      <Link
                        key={itemIndex}
                        href={item.href || '#'}
                        className={cn(
                          "group relative flex items-center gap-2 rounded-md px-2 py-1.5 text-[13px] transition-all duration-150",
                          isActive
                            ? "bg-primary/8 text-foreground font-medium"
                            : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                        )}
                      >
                        {/* Active indicator */}
                        {isActive && (
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-[2px] rounded-full bg-foreground" />
                        )}
                        <span className="pl-1">{item.title}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      {/* Footer badge */}
      <div className="mt-8 px-2">
        <div className="flex items-center gap-2 rounded-lg border border-border/40 bg-muted/30 px-3 py-2">
          <Sparkles className="h-3.5 w-3.5 text-amber-500" />
          <div className="min-w-0">
            <p className="text-[11px] font-medium text-foreground">Need help?</p>
            <p className="text-[10px] text-muted-foreground">Ask our AI assistant</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
