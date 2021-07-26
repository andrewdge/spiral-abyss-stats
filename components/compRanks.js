import React, { useState } from 'react'
import Image from 'next/image'
import TeamContainer from './teamContainer';
import CompFile from '../data/comp_usages.json'
import { Button } from '@material-ui/core';

const CompRanks = (props) => {
    let [numTeams, setNumTeams] = useState(10);
    return (
        <div className={"flex flex-col bg-menu-gray p-4 border-white border-opacity-50 border-4 rounded-lg" + props.className}>
                <div className='flex justify-center text-center text-white font-bold font-serif text-xl'>
                    FLOOR 12 POPULAR COMPS
                </div>
                <div className='flex justify-center text-center text-white font-serif text-sm'>
                    DISPLAYING USAGE RATE {'>'} 1%
                </div>

                {/** speeding up loadtime with filter */}
                {CompFile.filter(comp => comp.usage_rate > 1).map((comp, index) => 
                    (index < numTeams) ? <TeamContainer key={index} c1={comp.char_one} c2={comp.char_two} c3={comp.char_three} c4={comp.char_four} rank={index+1} usage={comp.usage_rate} /> : <></>
                )}
                <div className="flex items-center justify-center pt-2">
                    <button className="border-opacity-50 p-2 rounded-md text-white border-white border-2 text-opacity-50 hover:bg-black" onClick={()=>{setNumTeams(numTeams+10)}}>
                        Load More
                    </button>
                </div>
        </div>
    )
}

export default CompRanks