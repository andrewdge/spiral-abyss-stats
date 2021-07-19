import React from 'react'

const VersionButton = (props) => {
    return (
        <button className="flex flex-row items-center justify-center inline-block w-32 h-32 bg-menu-item bg-opacity-1 transition duration-100 transform hover:-translate-y-1 hover:scale-110">
            <div className="flex flex-row items-center justify-center w-28 h-28 border-2 border-white border-opacity-10">
                <div className="text-white">
                    {props.version}
                </div>
            </div>
            
        </button>
    )
    
}

export default VersionButton