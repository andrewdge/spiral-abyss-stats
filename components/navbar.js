import React, { useState } from 'react'
import Image from 'next/image'
import NavbarModal from './navbarModal';
import Paimon from '../public/images/paimon.png'

const Navbar = () => {
    let [isOpen, setIsOpen] = useState(false);
    return (
        <div className="fixed w-14 h-16 md:w-24 md:h-28 z-10">
            <title>
                Spiral Stats
            </title>
            <NavbarModal isOpen={isOpen} setIsOpen={setIsOpen}/>
            {/* Paimon Nav */}
            <div className='p-3'>
                <button className="">
                    <Image className='cursor-pointer' src={Paimon} alt="paimon"
                        layout='fill'
                        onClick={() => setIsOpen(true)} onBlur={() => setIsOpen(false)}
                    />
                </button>
            </div>
        </div>
    );
}

export default Navbar
