import React, { useState, useEffect } from 'react'
import TeamBuilderCollapsable from "./teamBuilderCollapsable"
import CompRanks from "./compRanks"
import { useHeroes } from "../data/typedMock";

const PhaseDataContent = (props) => {

    const heroList = useHeroes();

    const heroDict = heroList.reduce((builderDict, currItem) => ({...builderDict, [currItem.name]: true}), {})

    const [filterComps, setFilterComps] = useState(true)

    const [checked, setChecked] = React.useState(heroDict)

    const [firstHero, setFirstHero] = useState(heroList[0]);
    const [secondHero, setSecondHero] = useState(heroList[0]);
    const [thirdHero, setThirdHero] = useState(heroList[0]);
    const [fourthHero, setFourthHero] = useState(heroList[0]);

    let chars = {
        first: firstHero,
        second: secondHero,
        third: thirdHero,
        fourth: fourthHero
    }

    let setChars = {
        first: setFirstHero,
        second: setSecondHero,
        third: setThirdHero,
        fourth: setFourthHero
    }

    // useEffect(() => {
    //     console.log(chars)
    // }, [firstHero, secondHero, thirdHero, fourthHero])

    return (
        <div className={'flex flex-col gap-2 lg:grid lg:grid-cols-3 lg:grid-row-1 '+props.className}>
            <div className='lg:col-start-3 lg:col-span-1 z-20'>
                <div className='lg:fixed lg:w-1/3'>
                    <TeamBuilderCollapsable 
                        heroList={heroList} heroDict={heroDict}
                        chars={chars} setChars={setChars}
                        checked={checked} setChecked={setChecked}
                        filterComps={filterComps} setFilterComps={setFilterComps}
                        className="z-20"
                    />
                </div>
            </div>
            <div className='lg:col-start-1 lg:col-span-2 lg:row-start-1 z-20'>
                <CompRanks data={props.file} chars={chars} filterComps={filterComps} checked={checked} phase={props.phase} className='lg:col-start-1'/>
            </div>
        </div>
    )
}

export default PhaseDataContent