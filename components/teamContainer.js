import React from 'react'
import Image from 'next/image'
import { useTheme } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'
import HeroesFile from '../data/heroes.json'

export const getHero = (hero) => {
    return HeroesFile.find(h => h?.name === hero);
}


const TeamContainer = ({ c1, c2, c3, c4, rank, usage }) => {
    const theme = useTheme();
    const o1 = getHero(c1);
    const o2 = getHero(c2);
    const o3 = getHero(c3);
    const o4 = getHero(c4);
    const dim = 100;

    if (o1 === undefined){
        console.log(c1);
    }
    if (o2 === undefined){
        console.log(c2);
    }
    if (o3 === undefined){
        console.log(c3);
    }
    if (o4 === undefined){
        console.log(c4);
    }

    return (
        <div className='mx-0.5 my-1.5 bg-opacity-50 bg-black rounded-md'>
            {
                // largerThanPhone ?
                //     desktopContent
                // :
                //     phoneContent
         <div className="flex flex-row flex-wrap md:px-3 p-2 h-auto gap-1 md:gap-0">
            <div className='flex md:flex-col text-white justify-start w-full md:w-1/5 gap-4 order-2 px-2 md:justify-center'>
                <div className='font-serif'>
                    Rank: {rank}
                </div>
                <div className='font-serif'>
                    Usage: {usage}% 
                </div>
            </div>    
            <div className="flex wrap justify-between min-w-[10rem] w-full md:w-4/5 gap-0.5"> 
                <div className="flex justify-center items-center w-full"><Image src={o1?.image} alt={o1.name + ' image'} width={dim} height={dim} className="rounded-md" /></div>
                <div className="flex justify-center items-center w-full"><Image src={o2?.image} alt={o2.name + ' image'} width={dim} height={dim} className="rounded-md" /></div>
                <div className="flex justify-center items-center w-full"><Image src={o3?.image} alt={o3.name + ' image'} width={dim} height={dim} className="rounded-md" /></div>
                <div className="flex justify-center items-center w-full"><Image src={o4?.image} alt={o4.name + ' image'} width={dim} height={dim} className="rounded-md" /></div>
            </div>
         </div>
            }
        </div>
    )
}

export default TeamContainer
