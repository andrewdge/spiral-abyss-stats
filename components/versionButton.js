import React from 'react'
import Link from 'next/link'

/** props
 * 
 * - link : string
 * - version : string
 * 
 * 
 * 
 */
const VersionButton = (props) => {
    return (
        <Link href={''+ props.link} passHref>
            <button className="flex flex-row items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-menu-gray bg-opacity-1 transition duration-100 transform hover:-translate-y-1 hover:scale-110">
                <div className="flex flex-row items-center justify-center w-20 h-20 md:w-28 md:h-28 border-2 border-white border-opacity-10">
                    <div className="text-white">
                        {props.version}
                    </div>
                </div>
            </button>
        </Link>
    )
    
}

export default VersionButton