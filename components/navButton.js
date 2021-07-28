import React from 'react'
import Link from 'next/link'


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
    <Link href={''+ props.link} passHref>
        <button className='m-5 transition duration-100 transform hover:-translate-y-1 hover:scale-110'>
            <props.icon fontSize={props.fontSize} style={{ color: props.color}} />
        </button>
    </Link>;
    return (
        <>
            {link}
        </>
    )
    
}

export default NavButton