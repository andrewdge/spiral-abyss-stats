import React from 'react'
import Link from 'next/link'

const VersionButton = (props) => {
    return (
        <Link href={''+ props.link} passHref>
            <button className="flex flex-row items-center justify-center inline-block w-32 h-32 bg-menu-gray bg-opacity-1 transition duration-100 transform hover:-translate-y-1 hover:scale-110">
                <div className="flex flex-row items-center justify-center w-28 h-28 border-2 border-white border-opacity-10">
                    <div className="text-white">
                        {props.version}
                    </div>
                </div>
            </button>
        </Link>
    )
    
}

export default VersionButton