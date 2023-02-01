import '../styles/globals.css'
import Script from "next/script";
import Head from "next/head";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <Script 
            id="Adsense-id" onError={(e) => { console.error("Script failed to load", e);}}
            data-ad-client={`${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}`} async strategy="afterInteractive"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" crossOrigin="anonymous"
        >
        </Script>
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp
