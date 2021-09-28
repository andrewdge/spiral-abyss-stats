import React, { useState, useEffect } from 'react'
import TeamBuilderCollapsable from "./teamBuilderCollapsable"
import CompRanks from "./compRanks"
import { Switch } from '@headlessui/react';
import { useHeroes } from "../data/typedMock";

const PhaseDataContent = (props) => {

    const [firstHalf, switchHalves] = useState(false)

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
        <div className={'flex flex-col gap-2 lg:grid lg:grid-cols-3 lg:grid-row-1 ' + props.className}>
            <div className='lg:col-start-3 lg:col-span-1 z-20'>
                <div className='lg:fixed lg:w-1/3'>
                    {props.floor ?
                        <div className='flex items-center justify-center p-4 bg-menu-gray border-white border-opacity-50 border-4 bg-opacity-50 rounded-lg'>
                            <span className='text-white mr-4'>First Half</span>
                            <Switch
                                checked={firstHalf}
                                onChange={switchHalves}
                                className={`${
                                    firstHalf ? 'bg-blue-600' : 'bg-gray-200'
                                } relative inline-flex items-center h-6 rounded-full w-11`}
                            >
                                <span className="sr-only">Enable notifications</span>
                                <span
                                    className={`${
                                    firstHalf ? 'translate-x-6' : 'translate-x-1'
                                    } inline-block w-4 h-4 transform bg-white rounded-full`}
                                />
                            </Switch>
                            <span className='text-white ml-4'>Second Half</span>
                        </div>
                        :
                        <></>
                    }
                    
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
                <CompRanks firstHalf={firstHalf} data={props.file} chars={chars} filterComps={filterComps} checked={checked} phase={props.phase} floor={props.floor} className='lg:col-start-1'/>
            </div>
        </div>
    )
}

export default PhaseDataContent