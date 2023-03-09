import React from 'react'
import VersionButton from './versionButton'
import FileNames from '../data/fileNames.json'

/** nav for floors/phases */
const LunarPhaseLinks = ({closeNav}) => {
    return (
        <>
            <div className="flex flex-row flex-wrap gap-2 justify-start justify-items-center p-4 pt-0" onClick={closeNav}>
                {
                    FileNames.map((filename, index) => <VersionButton version={filename.replaceAll('_', ' ')} link={`/${filename}`} key={index} />)
             }
            </div>
        </>
    )
}

export default LunarPhaseLinks
