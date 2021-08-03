import React from 'react'
import Link from 'next/link'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional for styling


/** props
 * 
 * - icon : Icon
 * - link : string
 * - color : string
 * - fontSize : string
 * 
 * 
 */
const NavButton = (props) => {
    const link = props.disabled ? 
        <div className='m-5' disabled>
            <props.icon fontSize={props.fontSize}/>
        </div>
        : 
        <Tippy content={props.content} placement='right'>
            <div>
                <Link href={''+ props.link} passHref>
                    <button className='m-5 transition duration-100 transform hover:-translate-y-1 hover:scale-110'>
                        <props.icon fontSize={props.fontSize} style={{ color: props.color}} />
                    </button>
                </Link>
            </div>
        </Tippy>
    ;

    return (
        <>
            {link}
        </>
    )
    
}

export default NavButton