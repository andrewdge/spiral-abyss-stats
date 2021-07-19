import React, { useState } from 'react'
import Image from 'next/image'
import NavbarModal from './navbarModal';
import Paimon from '../public/images/paimon.png'

const Navbar = () => {
    let [isOpen, setIsOpen] = useState(false);
    return (
        <div className="fixed">
            <title>
                Spiral Stats
            </title>
            <NavbarModal isOpen={isOpen} setIsOpen={setIsOpen}/>
            <div className='p-3'>
                <button>
                    
                    <Image className='cursor-pointer z-0' src={Paimon} alt="paimon" 
                        width={100} height={116} 
                        onClick={() => setIsOpen(true)} onBlur={() => setIsOpen(false)} onMouseOver={() => setIsOpen(true)}
                    />
                </button>
            </div>
        </div>
    );
}

export default Navbar
