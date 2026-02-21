import { Link } from '@tanstack/react-router';
import { Search, Menu, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export function DocsHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="flex h-14 items-center px-4 md:px-6">
        {/* Logo & Title */}
        <div className="flex items-center gap-4">
          {/* Mobile menu toggle */}
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
          
          <Link to="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
            {/* Ozzios Logo - matches TopNav */}
            <img
              src="/images/dark-theme-logo.svg"
              alt="Ozzios"
              className="h-6 w-auto dark:invert-0 invert"
            />
            <div className="hidden sm:block">
              <span className="text-[12px] text-muted-foreground">
                Docs
              </span>
            </div>
          </Link>
          
          {/* Version badge */}
          <span className="hidden rounded-md bg-muted/60 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground md:inline-block">
            v1.0
          </span>
        </div>
        
        {/* Search */}
        <div className="ml-auto flex items-center gap-3">
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            <Input
              placeholder="Search docs..."
              className={cn(
                "h-8 w-[200px] pl-8 pr-12 text-[13px] lg:w-[280px]",
                "bg-muted/30 border-border/50",
                "placeholder:text-muted-foreground/60",
                "focus:bg-background focus:border-border"
              )}
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 hidden items-center gap-0.5 sm:flex">
              <kbd className="flex h-5 items-center rounded border border-border/60 bg-muted/50 px-1.5 text-[10px] font-medium text-muted-foreground">
                ⌘K
              </kbd>
            </div>
          </div>
          
          {/* Mobile search */}
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 md:hidden">
            <Search className="h-4 w-4" />
          </Button>
          
          {/* Nav links */}
          <nav className="flex items-center gap-1">
            <Button 
              variant="ghost" 
              size="sm" 
              asChild 
              className="h-8 px-3 text-[13px] text-muted-foreground hover:text-foreground"
            >
              <a href="https://app.ozzios.com/sign-in">Sign In</a>
            </Button>
            
            <Button 
              size="sm" 
              asChild 
              className="h-8 px-3 text-[13px]"
            >
              <a href="https://app.ozzios.com/sign-up">Get Started</a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
