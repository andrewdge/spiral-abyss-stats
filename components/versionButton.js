import React from 'react'

const VersionButton = (props) => {
    return (
        <button className="flex flex-column content-around items-center justify-center inline-block w-32 h-32 bg-menuItem bg-opacity-1">
            <div className="w-11/12 h-11/12 border-2 border-gray-50 border-opacity-50">
                <div className="text-black">
                    {props.version}
                </div>
            </div>
            
        </button>
    )
    
}

export default VersionButton