import React from 'react'
import Layout from '../components/layout'
import CompRanks from '../components/compRanks'

const floor9 = () => {
    return (
        <>
            <Layout>
                <div className="flex items-center justify-center bg-fixed bg-center bg-no-repeat bg-cover bg-watatsumi -z-1 py-16 px-10  w-full min-h-screen h-full">
                    <CompRanks/>
                </div>
            </Layout>
        </>
    )
}

export default floor9
