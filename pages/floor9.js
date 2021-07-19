import React from 'react'
import Content from '../components/content'
import Layout from '../components/layout'
import Watatsumi from '../public/images/watatsumi.png'

const floor9 = () => {
    return (
        <>
            
            <Layout className="relative flex items-center justify-center h-full mb-12 overflow-hidden">
                <div className="object-cover bg-fixed bg-center bg-no-repeat bg-cover min-h-screen bg-watatsumi -z-1 px-20 py-36">
                    <Content>
                    </Content>
                </div>
                
            </Layout>
        </>
    )
}

export default floor9
