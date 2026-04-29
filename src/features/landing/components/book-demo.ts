// Why this module exists:
// OzziOS is no longer self-serve — every prospect goes through a guided demo
// before getting access. This is the single source of truth for the Cal.com
// embed configuration so that every "Setup a demo" CTA across the site
// behaves identically.

import { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

// Sentinel href used by PrimaryCTA / SecondaryCTA primitives to detect that a
// CTA should open the Cal.com embed instead of navigating to a URL.
export const DEMO_CTA_HREF = 'demo:book' as const;

export const CAL_NAMESPACE = 'secret';
export const CAL_LINK = 'ozzios/secret';

const CAL_CONFIG = JSON.stringify({
  layout: 'month_view',
  useSlotsViewOnSmallScreen: 'true',
});

// Props that turn any clickable element into a Cal.com trigger. Spread these
// onto a <button> to wire it up.
export const bookDemoTriggerProps = {
  'data-cal-namespace': CAL_NAMESPACE,
  'data-cal-link': CAL_LINK,
  'data-cal-config': CAL_CONFIG,
} as const;

// Returns true when a CTA should open the demo embed.
export function isDemoCta(href: string | undefined): boolean {
  return href === DEMO_CTA_HREF;
}

// Initializes the Cal.com embed namespace once per page. Safe to call from
// every CTA — getCalApi caches its initialization internally.
export function useCalDemoInit(): void {
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      if (cancelled) return;
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    })();
    return () => {
      cancelled = true;
    };
  }, []);
}
