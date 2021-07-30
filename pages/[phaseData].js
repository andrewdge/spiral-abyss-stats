import React from 'react'
import Layout from '../components/layout'
import CompRanks from '../components/compRanks'
import FileNames from '../data/fileNames.json'
import TeamBuilder from '../components/teambuilder'

const PhaseData = (props) => {
    return (
        <>
            <Layout>
                <div className="flex items-center justify-center bg-fixed bg-center bg-no-repeat bg-cover bg-watatsumi -z-1 py-16 px-10  w-full min-h-screen h-full">
                    <div className='flex flex-col gap-2 w-full lg:w-1/2'>
                        <TeamBuilder/>
                        <CompRanks data={props.file}/>
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
    return {
        props: {'file': file}
    }
}

export default PhaseData