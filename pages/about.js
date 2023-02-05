import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Layout from '../components/layout'
import Link from 'next/link'

const About = ({ twitter }) => {
  
  return (
    <>
        <Layout twitter={twitter}>
            <section className="section">
                <div className="flex flex-col bg-fixed bg-center bg-no-repeat bg-cover bg-watatsumi -z-1 py-24 px-10  w-full min-h-screen h-full">
                    <div className='flex flex-col items-center justify-center p-4 bg-white border-menu-gray border-opacity-50 border-4 bg-opacity-50 rounded-lg'>
                        <div className='font-bold text-3xl'>About</div>
                        <div className='mb-5'/>
                        <div className='px-20'>
                            This site was made by two college students in their junior year over the course of 3 months, with the assistance of a third student for visual design.
                            Feel free to contact us for information regarding how we built the site and to submit bug reports.

                        </div>
                        <div className='mb-5'/>
                        <div className=''>
                            Contact us for info/bug reports here: 
                        </div>
                        <div className='font-semibold'>spiralstatsgenshin@gmail.com</div>
                    </div>
                </div>
            </section>
        </Layout>
    </>
  )
}


export async function getServerSideProps(ctx) {
    // const res = await fetch(`https://spiralabyss.s3.amazonaws.com/${ctx.params.phaseData}.json`)
    // const file = await res.json()
    const twitterRes = await fetch('https://publish.twitter.com/oembed?url=https://twitter.com/GenshinImpact&&limit=1&&dnt=true')
    const twitter = await twitterRes.json()
    // console.log(twitter)
    return {
        props: { twitter: twitter.html }
    }
}

export default About