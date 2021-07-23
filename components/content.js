import React from 'react'
import Image from 'next/image'
import TeamContainer from './teamContainer';
import CompFile from '../data/comp_usages.json'

const Content = ({ children }) => {

    

    return (
        <>
            <div className="flex flex-col w-full h-full">
                <div className='flex justify-center text-white font-bold font-serif text-lg'>
                    FLOOR 12 POPULAR COMPS
                </div>
                <div className='flex justify-center text-white font-serif text-sm'>
                    DISPLAYING USAGE RATE {'>'} 1%
                </div>

                {/** speeding up loadtime with filter */}
                {CompFile.filter(comp => comp.usage_rate > 1).map((comp, index) => 
                    <TeamContainer key={index} c1={comp.char_one} c2={comp.char_two} c3={comp.char_three} c4={comp.char_four} rank={comp.rank} usage={comp.usage_rate} />
                )}

            </div>
        </>
    )
}

export default Content
