import React from 'react'
import VersionButton from './versionButton'

/** nav for floors/phases */
const LunarPhaseLinks = () => {
    return (
        <>
            <div className="flex flex-row flex-wrap gap-2 justify-start justify-items-center p-4 pt-0">
                <VersionButton version={"1.6 Floor 12"} link={"/floor12"} />
            </div>
        </>
    )
}

export default LunarPhaseLinks
