import React, { useState } from 'react'
import Image from 'next/image'
import NavbarModal from './navbarModal';
import Paimon from '../public/paimon.png'

const Navbar = () => {
    let [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <NavbarModal isOpen={isOpen} setIsOpen={setIsOpen}/>
            <div className='p-3'>
                <button>
                    <Image className='cursor-pointer z-0' src={Paimon} alt="paimon" 
                        width={100} height={116} onMouseOver={() => setIsOpen(true) } onBlur={() => setIsOpen(false)}
                    />
                    
                </button>
            </div>
            
            
        </>
    );
}

export default Navbar
