/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Head from 'next/head'

const DynamicNavbarModal = dynamic(() => import('./navbarModal'), {
    ssr: false,
})

const Navbar = () => {
    let [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <Head>
                <link rel='favicon' href='./favico.ico' />
            </Head>
            <div className="fixed w-14 h-16 md:w-20 md:h-24 z-10">
                <title>
                    Spiral Stats
                </title>
                <DynamicNavbarModal isOpen={isOpen} setIsOpen={setIsOpen}/>
                {/* Paimon Nav */}
                <div className='p-3'>
                    <button>
                        <Image className='cursor-pointer transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110' src='/images/paimon.png' alt="paimon"
                            layout='fill'
                            onClick={() => setIsOpen(true)} onBlur={() => setIsOpen(false)}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar
