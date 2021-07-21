/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const DynamicNavbarModal = dynamic(() => import('./navbarModal'), {
    ssr: false,
})

const Navbar = () => {
    let [isOpen, setIsOpen] = useState(false);
    return (
        <div className="fixed w-14 h-16 md:w-24 md:h-28 z-10">
            <title>
                Spiral Stats
            </title>
            <DynamicNavbarModal isOpen={isOpen} setIsOpen={setIsOpen}/>
            {/* Paimon Nav */}
            <div className='p-3'>
                <button className="">
                    <Image className='cursor-pointer' src='/images/paimon.png' alt="paimon"
                        layout='fill'
                        onClick={() => setIsOpen(true)} onBlur={() => setIsOpen(false)}
                    />
                </button>
            </div>
        </div>
    );
}

export default Navbar
