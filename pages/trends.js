import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'

import dynamic from 'next/dynamic'

// tableau is client side only, use dynamic import and turn off ssr
const Tableau = dynamic(
  () => import('../components/tableau'),
  { ssr: false }
)

const Trends = (props) => {
    return (
        <>
            <Layout twitter={props.twitter} >
                <div className="flex flex-col bg-fixed bg-center bg-no-repeat bg-cover bg-watatsumi -z-1 py-16 px-10  w-full min-h-screen h-full">
                    <Tableau />
                </div>
            </Layout>
        </>
    )
}

export async function getServerSideProps() {
    const twitterRes = await fetch('https://publish.twitter.com/oembed?url=https://twitter.com/GenshinImpact&&limit=1&&dnt=true')
    const twitter = await twitterRes.json()
    return {
        props: { twitter: twitter.html, }
    }
}

export default Trends
