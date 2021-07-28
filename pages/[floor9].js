import React from 'react'
import { useRouter } from 'next/router'
import Content from '../components/content'
import Layout from '../components/layout'

const floor9 = (props) => {

    const router = useRouter()
    const { floor9 } = router.query
    console.log(floor9)
    console.log(props.file)

    return (
        <>
            
            <Layout>
                <div className="flex items-center justify-center bg-fixed bg-center bg-no-repeat bg-cover bg-watatsumi -z-1 py-16 px-10  w-full min-h-screen h-full">
                    <Content file={props.file} >
                    </Content>
                </div>
            </Layout>
        </>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            {params: { floor9: 'comp_usages_1_6'}}
        ],
        fallback: false
    }
}

export async function getStaticProps(ctx) {
    const res = await fetch("https://spiralabyss.s3.amazonaws.com/"+ctx.params.floor9+".json")
    const file = await res.json()
    return {
        props: {'file': file}
    }
}

export default floor9
