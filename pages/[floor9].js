import React from 'react'
import Content from '../components/content'
import Layout from '../components/layout'

const Floor9 = (props) => {

    // console.log(process.env)

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
            {params: { floor9: 'comp_usages'}}
        ],
        fallback: false
    }
}

export async function getStaticProps(ctx) {
    const dev = process.env.NODE_ENV !== 'production';

    const server = dev ? 'http://localhost:3000' : 'https://spiralabyss.vercel.app';

    const res = await fetch(`${server}/${ctx.params.floor9}.json`,
    {
        method: 'GET',
        headers: {
        'Accept': 'application/json, text/plain, */*',
        'User-Agent': '*',
        },
    })
    const file = await res.json()
    return {
        props: {'file': file}
    }
}

export default Floor9
