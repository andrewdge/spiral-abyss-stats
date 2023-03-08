import React, { useState, useEffect } from 'react'
import TeamBuilderCollapsable from "./teamBuilderCollapsable"
import CompRanks from "./compRanks"
import Image from 'next/image';
import Link from 'next/link'
import { useTheme } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'
import { Switch } from '@headlessui/react';
import { useHeroes } from "../data/typedMock";
import { ReactSVG } from 'react-svg'

const PhaseDataContent = ({floor, classNameProp}) => {

    const theme = useTheme();

    // powered by vercel banner for sponsorship munaeyz
    const banner =
        <div className='flex flex-row align-middle justify-center pt-2'>
            <Link href={"https://vercel.com/?utm_source=spiral-abyss-stats&utm_campaign=oss"} className="cursor-pointer" passHref >
                <ReactSVG src={"images/powered-by-vercel.svg"} alt={'thanks vercel <3'} layout='intrinsic' width={212} height={44} className="rounded-md cursor-pointer" />
            </Link>
        </div>;

    const [isFirstHalf, switchHalves] = useState(false)

    const heroList = useHeroes();

    const heroDict = heroList.reduce((builderDict, currItem) => ({ ...builderDict, [currItem.name]: true }), {})

    const [isFilterActive, setIsFilterActive] = useState(true)

    const [checked, setChecked] = React.useState(heroDict)

   
    // useEffect(() => {
    //     console.log(chars)
    // }, [firstHero, secondHero, thirdHero, fourthHero])

    return (
        <div className={'flex flex-col gap-2 lg:grid lg:grid-cols-3 lg:grid-row-1 ' + classNameProp}>
            <div className='lg:col-start-3 lg:col-span-1 z-20'>
                <div className='lg:sticky top-20 w-full'>
                    {floor ?
                        <div className='flex items-center justify-center p-4 bg-menu-gray border-white border-opacity-50 border-4 bg-opacity-50 rounded-lg'>
                            <span className='text-white mr-4'>First Half</span>
                            <Switch
                                checked={isFirstHalf}
                                onChange={()=>switchHalves(!isFirstHalf)}
                                className={`${isFirstHalf ? 'bg-blue-600' : 'bg-gray-200'
                                    } relative inline-flex items-center h-6 rounded-full w-11`}
                            >
                                <span className="sr-only">Enable notifications</span>
                                <span
                                    className={`${isFirstHalf ? 'translate-x-6' : 'translate-x-1'
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
                        checked={checked} setChecked={setChecked}
                        isFilterActive={isFilterActive} setIsFilterActive={setIsFilterActive}
                        className="z-20"
                    />
                    <div className='flex place-content-center w-full h-full bg-menu-gray mt-3 border-yellow-600 border-4 bg-opacity-50 rounded-lg'>
                        <Link href={'/trends'} passHref>
                            <button className={`m-4 py-2 px-4 w-full transition duration-100 hover:bg-yellow-200 rounded-lg`}>
                                <div className='text-center font-semibold text-yellow-500'>
                                    View Trends
                                </div>
                            </button>
                        </Link>
                    </div>

                    {/* {!largerThanPhone ? 
                    <></>
                    :
                    banner
                    } */}
                </div>
            </div>
            <div className='lg:col-start-1 lg:col-span-2 lg:row-start-1 z-20'>
                <CompRanks isFirstHalf={isFirstHalf} isFilterActive={isFilterActive} checked={checked}  floor={floor} className='lg:col-start-1' />
                {/* {!largerThanPhone ? 
                banner
                :
                <></>
                } */}
                {banner}
            </div>
        </div>
    )
}

export default PhaseDataContent