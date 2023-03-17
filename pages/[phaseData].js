import React, { useEffect } from 'react'
import Layout from '../components/layout'
import FloorTab from '../components/floorTab'
import { useSetRecoilState } from 'recoil'
import { phaseNameState } from '../data/recoil/atoms'
import { useRouter } from 'next/router'
const PhaseData = () => {
    const {query:{phaseData}}=useRouter();
    const setPhaseName = useSetRecoilState(phaseNameState);
    useEffect(()=>{
        phaseData&&setPhaseName(phaseData)
    },[phaseData]);

    return (
        <>
            <Layout >
                <div className="flex flex-col bg-fixed bg-center bg-no-repeat bg-cover bg-watatsumi -z-1  w-full min-h-screen h-full">
                    <FloorTab className='w-full'/> 
                </div>
            </Layout>
        </>
    )
}

/** phaseData is the slug, name comes from fileNames.json */
// export async function getStaticPaths(){
//     return {
//         paths: FileNames.map(name => ( { params: { phaseData: name} } )),
//         fallback: false
//     }
// }


//TODO: fix (?)
/** file is passed into props into this component */
// export async function getServerSideProps(ctx) {
//     return {
//         props: {phaseData: ctx.params.phaseData }
//     }
// }

export default PhaseData
