import '../styles/globals.css'
import Script from "next/script";
import { Analytics } from '@vercel/analytics/react';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script 
          id="Adsense-id" onError={(e) => { console.error("Script failed to load", e);}}
          data-ad-client={`${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}`} async strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" crossOrigin="anonymous"
      >
        <script type="module" src="https://embedding.tableauusercontent.com/tableau.embedding.3.1.0.min.js"></script>
      </Script>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
      <Analytics />
    </>
  );
}

export default MyApp
