import React from 'react'
import VersionButton from './versionButton'
import FileNames from '../data/fileNames.json'

/** nav for floors/phases */
const LunarPhaseLinks = () => {
    return (
        <>
            <div className="flex flex-row flex-wrap gap-2 justify-start justify-items-center p-4 pt-0">
                {
                    FileNames.map((filename, index) => <VersionButton version={filename} link={`/${filename}`} key={index}/>)
                }
                <VersionButton version={"1.6_3 Floor 12"} link={"/1_6_3_floor12"} />
            </div>
        </>
    )
}

export default LunarPhaseLinks
