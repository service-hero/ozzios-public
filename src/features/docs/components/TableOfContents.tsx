import * as React from 'react';
import { cn } from '@/lib/utils';
import { List } from 'lucide-react';

interface TocItem {
  title: string;
  url: string;
  items?: TocItem[];
}

interface TableOfContentsProps {
  items?: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!items?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.url.replace('#', ''));
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  if (!items?.length) return null;

  return (
    <div className="hidden xl:block">
      <div className="sticky top-20 py-8 pr-4">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/40">
          <List className="h-3.5 w-3.5 text-muted-foreground/70" />
          <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            On this page
          </span>
        </div>
        
        {/* TOC items */}
        <ul className="space-y-1">
          {items.map((item) => {
            const isActive = item.url.replace('#', '') === activeId;
            return (
              <li key={item.url}>
                <a
                  href={item.url}
                  className={cn(
                    "block py-1.5 text-[13px] leading-snug transition-colors",
                    isActive
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.title}
                </a>
                
                {/* Nested items */}
                {item.items?.length ? (
                  <ul className="ml-3 mt-1 space-y-1 border-l border-border/40 pl-3">
                    {item.items.map((subItem) => {
                      const isSubActive = subItem.url.replace('#', '') === activeId;
                      return (
                        <li key={subItem.url}>
                          <a
                            href={subItem.url}
                            className={cn(
                              "block py-1 text-[12px] leading-snug transition-colors",
                              isSubActive
                                ? "text-foreground font-medium"
                                : "text-muted-foreground hover:text-foreground"
                            )}
                          >
                            {subItem.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
