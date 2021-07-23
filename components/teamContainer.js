import React from 'react'
import Image from 'next/image'
import { useSpecificHero } from '../data/typedMock'
import { useTheme } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'


const TeamContainer = ({ c1, c2, c3, c4, rank, usage }) => {
    const theme = useTheme();
    const largerThanPhone = useMediaQuery(theme.breakpoints.up('sm'));
    const o1 = useSpecificHero(c1);
    const o2 = useSpecificHero(c2);
    const o3 = useSpecificHero(c3);
    const o4 = useSpecificHero(c4);
    const dim = 100;


    const phoneContent = 
    <>
        <div className='flex flex-row flex-wrap gap-4 pt-6 justify-center'> 
            <Image src={o1.image} alt={o1.name + ' image'} width={dim} height={dim} />
            <Image src={o2.image} alt={o2.name + ' image'} width={dim} height={dim} />
            <Image src={o3.image} alt={o3.name + ' image'} width={dim} height={dim} />
            <Image src={o4.image} alt={o4.name + ' image'} width={dim} height={dim} />
        </div>
        <div className='flex flex-col text-white justify-start p-4'>
            <div>
                Rank: {rank}
            </div>
            <div>
                Usage: {usage}% 
            </div>
        </div>
    </>;

    const desktopContent = 
    <div className='flex flex-row justify-evenly items-center'>
        <div className='text-white'>
            Rank: {rank}
        </div>
        <div className='flex flex-row flex-wrap gap-4 py-2 justify-center items-center'> 
            <Image src={o1.image} alt={o1.name + ' image'} width={dim} height={dim} />
            <Image src={o2.image} alt={o2.name + ' image'} width={dim} height={dim} />
            <Image src={o3.image} alt={o3.name + ' image'} width={dim} height={dim} />
            <Image src={o4.image} alt={o4.name + ' image'} width={dim} height={dim} />
        </div>
        <div className='text-white'>
            Usage: {usage}% 
        </div>
    </div>

    return (
        <div className='m-4 bg-opacity-50 bg-black'>
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
