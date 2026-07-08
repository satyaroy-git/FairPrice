'use client';

import { useEffect, useRef } from 'react';

interface AdSenseProps {
  adSlot: string;
  adFormat?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  fullWidth?: boolean;
  className?: string;
}

/**
 * Google AdSense Display Ad Component
 * 
 * Replace the `data-ad-client` value with your actual AdSense publisher ID
 * (format: ca-pub-XXXXXXXXXXXXXXXX) once approved.
 * 
 * Ad Slots:
 * - Homepage top banner: slot ID from AdSense dashboard
 * - Lookup results sidebar: slot ID from AdSense dashboard
 * - Between content: slot ID from AdSense dashboard
 * - Footer banner: slot ID from AdSense dashboard
 */
export default function AdSense({ 
  adSlot, 
  adFormat = 'auto', 
  fullWidth = true,
  className = '' 
}: AdSenseProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const isAdLoaded = useRef(false);

  useEffect(() => {
    // Only push ad once per component mount
    if (isAdLoaded.current) return;
    
    try {
      const adsbygoogle = (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle;
      if (adsbygoogle) {
        adsbygoogle.push({});
        isAdLoaded.current = true;
      }
    } catch (err) {
      // AdSense not loaded (e.g., ad blocker active or script not yet loaded)
      console.debug('AdSense not available:', err);
    }
  }, []);

  return (
    <div className={`ad-container my-4 ${className}`} ref={adRef}>
      <div className="text-center">
        <span className="text-xs text-gray-400 uppercase tracking-wide">Advertisement</span>
      </div>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-4341893599860053"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidth ? 'true' : 'false'}
      />
    </div>
  );
}

/**
 * In-article ad - designed to blend within content
 */
export function InArticleAd({ adSlot, className = '' }: { adSlot: string; className?: string }) {
  const isAdLoaded = useRef(false);

  useEffect(() => {
    if (isAdLoaded.current) return;
    try {
      const adsbygoogle = (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle;
      if (adsbygoogle) {
        adsbygoogle.push({});
        isAdLoaded.current = true;
      }
    } catch (err) {
      console.debug('AdSense not available:', err);
    }
  }, []);

  return (
    <div className={`ad-container my-6 ${className}`}>
      <div className="text-center mb-1">
        <span className="text-xs text-gray-400 uppercase tracking-wide">Sponsored</span>
      </div>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-client="ca-pub-4341893599860053"
        data-ad-slot={adSlot}
        data-ad-layout="in-article"
        data-ad-format="fluid"
      />
    </div>
  );
}

/**
 * Multiplex ad - shows grid of recommended content ads
 */
export function MultiplexAd({ adSlot, className = '' }: { adSlot: string; className?: string }) {
  const isAdLoaded = useRef(false);

  useEffect(() => {
    if (isAdLoaded.current) return;
    try {
      const adsbygoogle = (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle;
      if (adsbygoogle) {
        adsbygoogle.push({});
        isAdLoaded.current = true;
      }
    } catch (err) {
      console.debug('AdSense not available:', err);
    }
  }, []);

  return (
    <div className={`ad-container my-8 ${className}`}>
      <div className="text-center mb-1">
        <span className="text-xs text-gray-400 uppercase tracking-wide">You may also like</span>
      </div>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-4341893599860053"
        data-ad-slot={adSlot}
        data-ad-format="autorelaxed"
      />
    </div>
  );
}
