/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import NavbarModal from './navbarModal'

// const DynamicNavbarModal = dynamic(() => import('./navbarModal'), {
//     ssr: false,
// })

const Navbar = () => {
   
    let [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <Head>
                <link rel='favicon' href='/favicon.ico' />
                <title> Spiral Stats </title>
            </Head>
            <div className="fixed w-14 h-16 md:w-20 md:h-24 z-30">
                <NavbarModal isOpen={isOpen} setIsOpen={setIsOpen} />
                {/* Paimon Nav */}
                <div className='w-auto h-min transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110 p-2'>
                        <Image className='cursor-pointer' src='/images/paimon.png' alt="paimon"
                            width={80}
                            height={96}
                            // layout='intrinsic'
                            onClick={() => setIsOpen(!isOpen)}
                        />
                </div>
            </div>
        </div>
    );
}

export default Navbar
