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
    return (
        <Link href={''+ props.link} passHref>
            <button className='transition duration-100 transform hover:-translate-y-1 hover:scale-110'>
                <props.icon fontSize={props.fontSize} style={{ color: props.color}} />
            </button>
        </Link>
    )
    
}

export default NavButton