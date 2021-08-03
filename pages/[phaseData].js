import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import CompRanks from '../components/compRanks'
import FileNames from '../data/fileNames.json'
import TeamBuilderCollapsable from '../components/teamBuilderCollapsable'
import { useHeroes } from '../data/typedMock'
import PhaseDataContent from '../components/phaseDataContent'

const PhaseData = (props) => {

    return (
        <>
            <Layout twitter={props.twitter} >
                <div className="flex items-center justify-center bg-fixed bg-center bg-no-repeat bg-cover bg-watatsumi -z-1 py-16 px-10  w-full min-h-screen h-full">
                    <PhaseDataContent file={props.file} className='w-full'/>
                </div>
            </Layout>
        </>
    )
}

/** phaseData is the slug, name comes from fileNames.json */
export async function getStaticPaths(){
    return {
        paths: FileNames.map(name => ( { params: { phaseData: name} } )),
        fallback: false
    }
}

/** file is passed into props into this component */
export async function getStaticProps(ctx) {
    const res = await fetch(`https://spiralabyss.s3.amazonaws.com/${ctx.params.phaseData}.json`)
    const file = await res.json()
    const twitterRes = await fetch('https://publish.twitter.com/oembed?url=https://twitter.com/GenshinImpact&&limit=1&&dnt=true')
    const twitter = await twitterRes.json()
    // console.log(twitter)
    return {
        props: { file: file, twitter: twitter.html }
    }
}

export default PhaseData
