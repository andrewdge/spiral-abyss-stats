import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import CompRanks from '../components/compRanks'
import FileNames from '../data/fileNames.json'
import TeamBuilder from '../components/teamBuilder'
import { useHeroes } from '../data/typedMock'

const PhaseData = (props) => {

    const heroList = useHeroes();

    const heroDict = heroList.reduce((builderDict, currItem) => ({...builderDict, [currItem.name]: true}), {})

    const [filterComps, setFilterComps] = useState(false)

    const [checked, setChecked] = React.useState(heroDict)

    const [firstHero, setFirstHero] = useState({name: "None"});
    const [secondHero, setSecondHero] = useState({name: "None"});
    const [thirdHero, setThirdHero] = useState({name: "None"});
    const [fourthHero, setFourthHero] = useState({name: "None"});

    let chars = {
        first: firstHero,
        second: secondHero,
        third: thirdHero,
        fourth: fourthHero
    }

    let setChars = {
        first: setFirstHero,
        second: setSecondHero,
        third: setThirdHero,
        fourth: setFourthHero
    }

    useEffect(() => {
        console.log(chars)
    }, [firstHero, secondHero, thirdHero, fourthHero])

    return (
        <>
            <Layout twitter={props.twitter} >
                <div className="flex items-center justify-center bg-fixed bg-center bg-no-repeat bg-cover bg-watatsumi -z-1 py-16 px-10  w-full min-h-screen h-full">
                    <div className='flex flex-col gap-2 w-full lg:w-1/2'>
                        <TeamBuilderCollapsable 
                            heroList={heroList} heroDict={heroDict}
                            chars={chars} setChars={setChars}
                            checked={checked} setChecked={setChecked}
                            filterComps={filterComps} setFilterComps={setFilterComps}
                        />
                        <CompRanks data={props.file} chars={chars} filterComps={filterComps} checked={checked} />
                    </div>
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
    console.log(twitter)
    return {
        props: { file: file, twitter: twitter.html }
    }
}

export default PhaseData
