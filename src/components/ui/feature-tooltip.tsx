import { useState, useRef, useEffect } from 'react';

interface FeatureTooltipProps {
  description: string;
}

export function FeatureTooltip({ description }: FeatureTooltipProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  return (
    <div ref={ref} className="relative inline-flex items-center shrink-0">
      <button
        type="button"
        className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center opacity-30 hover:opacity-60 transition-opacity focus:outline-none"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen((v) => !v)}
        aria-label="Feature info"
      >
        <span className="text-[8px] font-semibold leading-none">i</span>
      </button>

      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-52 bg-popover border border-border rounded-lg px-3 py-2.5 shadow-lg z-50 pointer-events-none">
          <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
          {/* Arrow */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-border" />
        </div>
      )}
    </div>
  );
}
