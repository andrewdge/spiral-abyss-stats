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
    <div className='grid grid-cols-teamcontainer'>
        <div className='flex items-center justify-center text-white'>
            {rank}
        </div>
        <div className='grid grid-cols-4 flex-shrink flex-wrap gap-1 py-2 justify-center items-center'>
            <div><Image src={o1.image} alt={o1.name + ' image'} width={dim} height={dim} layout='intrinsic' className="rounded-md"/></div>
            <div><Image src={o2.image} alt={o2.name + ' image'} width={dim} height={dim} layout='intrinsic' className="rounded-md"/></div> 
            <div><Image src={o3.image} alt={o3.name + ' image'} width={dim} height={dim} layout='intrinsic' className="rounded-md"/></div> 
            <div><Image src={o4.image} alt={o4.name + ' image'} width={dim} height={dim} layout='intrinsic' className="rounded-md"/></div>  
        </div>
        <div className='flex items-center justify-center text-white'>
            <div className="w-min">Usage: {usage}%</div>
        </div>
    </div>

    return (
        <div className='m-0.5 bg-opacity-50 bg-black rounded-md'>
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
