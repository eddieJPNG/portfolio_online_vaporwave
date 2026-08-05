import { useEffect } from 'react';

const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID;

export const GoogleAnalytics = () => {
  useEffect(() => {
    if (!GA_TRACKING_ID) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.google-analytics.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};
