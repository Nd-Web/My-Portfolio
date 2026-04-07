'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

// Vercel Analytics component
// To enable: npm install @vercel/analytics
// Then uncomment the import and component usage

// import { Analytics } from "@vercel/analytics/react"

function AnalyticsInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Page view tracking (for custom analytics)
    if (pathname) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      console.log('Page view:', url);

      // Google Analytics integration
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_ID || '', {
          page_path: pathname,
        });
      }

      // Vercel Analytics page view
      if (process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ID) {
        const endpoint = '/_vercel/insights/event';
        navigator.sendBeacon(endpoint, JSON.stringify({
          type: 'pageview',
          url,
        }));
      }
    }
  }, [pathname, searchParams]);

  return null;
}

export default function Analytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsInner />
      {/* Uncomment to enable Vercel Analytics */}
      {/* <Analytics /> */}
    </Suspense>
  );
}
