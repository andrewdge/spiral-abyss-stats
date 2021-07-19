import React, { useState } from 'react'
import Image from 'next/image'
import NavbarModal from './navbarModal';

const Navbar = () => {
    let [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <NavbarModal isOpen={isOpen} setIsOpen={setIsOpen}/>
            <div className='p-3'>
                <button>
                    <Image className='cursor-pointer z-0' src="https://spiralabyss.s3.amazonaws.com/paimon.png" alt="paimon" 
                        width={100} height={116} onMouseOver={() => setIsOpen(true) } onBlur={() => setIsOpen(false)}
                    />
                    
                </button>
            </div>
            
            
        </>
    );
}

export default Navbar
