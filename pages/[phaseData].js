import React from 'react'
import Layout from '../components/layout'
import CompRanks from '../components/compRanks'
import FileNames from '../data/fileNames.json'

const PhaseData = (props) => {
    return (
        <>
            <Layout>
                <div className="flex items-center justify-center bg-fixed bg-center bg-no-repeat bg-cover bg-watatsumi -z-1 py-16 px-10  w-full min-h-screen h-full">
                    <CompRanks data={props.file}/>
                </div>
            </Layout>
        </>
    )
}

export async function getStaticPaths(){
    return {
        paths: FileNames.map(name => ( { params: { phaseData: name} } )),
        fallback: false
    }
}

export async function getStaticProps(ctx) {
    const res = await fetch(`https://spiralabyss.s3.amazonaws.com/${ctx.params.phaseData}.json`)
    const file = await res.json()
    return {
        props: {'file': file}
    }
}

export default PhaseData
