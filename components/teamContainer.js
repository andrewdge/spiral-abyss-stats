import React from 'react'
import Image from 'next/image'
import { useTheme } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'
import HeroesFile from '../data/heroes.json'

export const useHero = (hero) => {
    return HeroesFile.find(h => h.name === hero);
}


const TeamContainer = ({ c1, c2, c3, c4, rank, usage }) => {
    const theme = useTheme();
    const largerThanPhone = useMediaQuery(theme.breakpoints.up('sm'));
    const o1 = useHero(c1);
    const o2 = useHero(c2);
    const o3 = useHero(c3);
    const o4 = useHero(c4);
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


    const phoneContent = 
    <>
        <div className='grid grid-cols-2 grid-rows-2 flex-wrap pt-4 justify-center content-center'> 
            <div className="flex justify-center items-center w-full mb-3"><Image src={o1.image} alt={o1.name + ' image'} width={dim} height={dim} className="rounded-md" /></div>
            <div className="flex justify-center items-center w-full mb-3"><Image src={o2.image} alt={o2.name + ' image'} width={dim} height={dim} className="rounded-md" /></div>
            <div className="flex justify-center items-center w-full"><Image src={o3.image} alt={o3.name + ' image'} width={dim} height={dim} className="rounded-md" /></div>
            <div className="flex justify-center items-center w-full"><Image src={o4.image} alt={o4.name + ' image'} width={dim} height={dim} className="rounded-md" /></div>
        </div>
        <div className='flex flex-col text-white justify-start p-4'>
            <div className='font-serif'>
                Rank: {rank}
            </div>
            <div className='font-serif'>
                Usage: {usage}% 
            </div>
        </div>
    </>;

    const desktopContent = 
    <div className='grid grid-cols-teamcontainer'>
        <div className='flex items-center justify-center text-white font-serif'>
            {rank}
        </div>
        <div className='grid grid-cols-4 flex-shrink flex-wrap gap-1 py-2 justify-center items-center'>
            <div><Image src={o1.image} alt={o1.name + ' image'} width={dim} height={dim} layout='intrinsic' className="rounded-md"/></div>
            <div><Image src={o2.image} alt={o2.name + ' image'} width={dim} height={dim} layout='intrinsic' className="rounded-md"/></div> 
            <div><Image src={o3.image} alt={o3.name + ' image'} width={dim} height={dim} layout='intrinsic' className="rounded-md"/></div> 
            <div><Image src={o4.image} alt={o4.name + ' image'} width={dim} height={dim} layout='intrinsic' className="rounded-md"/></div>  
        </div>
        <div className='flex items-center justify-center text-white font-serif text-center'>
            <div className="w-min">Usage: {usage}%</div>
        </div>
    </div>

    return (
        <div className='mx-0.5 my-1.5 bg-opacity-50 bg-black rounded-md'>
            {
                largerThanPhone ?
                    desktopContent
                :
                    phoneContent
            }
        </div>
    )
}

export default TeamContainer
