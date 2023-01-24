import { useEffect } from 'react';

export enum AdType  {
    DEFAULT,
    ARTICLE,
    VERTICAL,
    HORIZONTAL,
}

const adUnitProps: Record<AdType, any> = {
    [AdType.DEFAULT]: {
        'data-ad-slot': '7181773959',
        'data-ad-format': 'auto',
        'data-full-width-responsive': 'true',
    },
    [AdType.ARTICLE]: {
        'data-ad-slot': '3197857275',
        'data-ad-format': 'fluid',
        'data-ad-layout': 'in-article',
    },
    [AdType.VERTICAL]: {
        'data-ad-slot': '8863578035',
        'data-ad-format': 'auto',
        'data-full-width-responsive': 'true',
    },
    [AdType.HORIZONTAL]: {
        'data-ad-slot': '5091859201',
        'data-ad-format': 'auto',
        'data-full-width-responsive': 'true',
    },
};

interface GoogleAdProps {
    variant?: AdType;
}

export function GoogleAd({variant = AdType.DEFAULT}: GoogleAdProps) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div 
        aria-hidden={true}
        style={{overflow: 'hidden', minWidth: '300px', minHeight: '250px'}}
    >
        <ins
            className="adsbygoogle"
            style={{display: 'block'}}
            data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}
            {...adUnitProps[variant]}
        />
    </div>
  );
}
