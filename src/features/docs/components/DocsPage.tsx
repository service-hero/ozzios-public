import * as React from 'react';
import { TableOfContents } from './TableOfContents';
import { Link } from '@tanstack/react-router';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TocItem {
  title: string;
  url: string;
  items?: TocItem[];
}

interface DocsPageProps {
  title: string;
  description?: string;
  breadcrumbs?: { title: string; href?: string }[];
  tableOfContents?: TocItem[];
  children: React.ReactNode;
}

export function DocsPage({
  title,
  description,
  breadcrumbs,
  tableOfContents,
  children,
}: DocsPageProps) {
  return (
    <div className="xl:grid xl:grid-cols-[1fr_240px] xl:gap-8">
      <div className="w-full min-w-0 px-6 py-8 md:px-8 lg:py-10">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <div className="mb-6 flex items-center gap-1.5 text-[12px] text-muted-foreground">
            {breadcrumbs.map((crumb, i) => (
              <React.Fragment key={i}>
                {i > 0 && <ChevronRight className="h-3 w-3 opacity-50" />}
                {crumb.href ? (
                  <Link 
                    to={crumb.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {crumb.title}
                  </Link>
                ) : (
                  <span className="font-medium text-foreground">
                    {crumb.title}
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
        
        {/* Page header */}
        <div className="mb-10 space-y-3">
          <h1 className="text-[28px] font-semibold tracking-tight text-foreground lg:text-[32px]">
            {title}
          </h1>
          {description && (
            <p className="text-[15px] leading-relaxed text-muted-foreground max-w-2xl">
              {description}
            </p>
          )}
        </div>

        {/* Content with custom prose styling */}
        <div className={cn(
          "docs-prose",
          // Headings
          "[&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-[20px] [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground",
          "[&_h2]:scroll-mt-20 [&_h2]:border-b [&_h2]:border-border/40 [&_h2]:pb-2",
          "[&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-[16px] [&_h3]:font-semibold [&_h3]:text-foreground",
          "[&_h4]:mt-6 [&_h4]:mb-2 [&_h4]:text-[14px] [&_h4]:font-medium [&_h4]:text-foreground",
          // Paragraphs
          "[&_p]:text-[14px] [&_p]:leading-[1.7] [&_p]:text-muted-foreground [&_p]:mb-4",
          // Links
          "[&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-border",
          "[&_a:hover]:decoration-foreground",
          // Lists
          "[&_ul]:my-4 [&_ul]:ml-6 [&_ul]:list-disc [&_ul]:text-[14px] [&_ul]:text-muted-foreground",
          "[&_ol]:my-4 [&_ol]:ml-6 [&_ol]:list-decimal [&_ol]:text-[14px] [&_ol]:text-muted-foreground",
          "[&_li]:mt-2 [&_li]:leading-[1.6]",
          // Code blocks
          "[&_pre]:my-6 [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-border/50 [&_pre]:bg-muted/30",
          "[&_pre]:px-4 [&_pre]:py-3.5 [&_pre]:overflow-x-auto",
          "[&_pre_code]:text-[13px] [&_pre_code]:leading-[1.6] [&_pre_code]:text-foreground",
          "[&_pre_code]:font-mono [&_pre_code]:bg-transparent [&_pre_code]:p-0",
          // Inline code
          "[&_code]:rounded [&_code]:bg-muted/50 [&_code]:px-1.5 [&_code]:py-0.5",
          "[&_code]:text-[13px] [&_code]:font-mono [&_code]:text-foreground",
          // Blockquotes
          "[&_blockquote]:my-6 [&_blockquote]:border-l-2 [&_blockquote]:border-border/60",
          "[&_blockquote]:pl-4 [&_blockquote]:text-[14px] [&_blockquote]:italic [&_blockquote]:text-muted-foreground",
          // Tables
          "[&_table]:my-6 [&_table]:w-full [&_table]:text-[13px]",
          "[&_th]:border [&_th]:border-border/40 [&_th]:bg-muted/30 [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:font-medium [&_th]:text-foreground",
          "[&_td]:border [&_td]:border-border/40 [&_td]:px-3 [&_td]:py-2 [&_td]:text-muted-foreground",
          // Horizontal rules
          "[&_hr]:my-8 [&_hr]:border-border/40",
          // Images
          "[&_img]:my-6 [&_img]:rounded-lg [&_img]:border [&_img]:border-border/40",
        )}>
          {children}
        </div>
      </div>
      
      {tableOfContents && (
        <TableOfContents items={tableOfContents} />
      )}
    </div>
  );
}
