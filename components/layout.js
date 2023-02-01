import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from './navbar'
import { GoogleAd, AdType } from './googleAd'

const Layout = ({ children, twitter }) => {
    return (
        <div>
            {/* analytics stuff, not included yet */}
            {/* <Script strategy={"afterInteractive"} src={`https://www.googletagmanager.com/gtag/js?id=G-MQMPTMDET6`}/>
            <Script id={"google-analytics"} strategy={"afterInteractive"} dangerouslySetInnerHTML={{
                __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                    
                        gtag('config', 'G-MQMPTMDET6');
                    `
            }}/> */}
            {/* adsense stuff */}
            <Head>
                <link rel="shortcut icon" href={"/public/favicon.ico"}/>
                <meta name="robots" content="index, follow"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
                <meta name="author" content="spiralstats"/>
                <title>Spiral Stats</title>
            </Head>
            <div>
                <Navbar className="fixed" twitter={twitter} />
                {children}
                <GoogleAd variant={AdType.HORIZONTAL} />
            </div>
        </div>
    );  
}

export default Layout;
