import React from 'react'
import Image from 'next/image'
import { useSpecificHero } from '../data/typedMock'

const TeamContainer = ({ c1, c2, c3, c4}) => {
    const o1 = useSpecificHero(c1);
    const o2 = useSpecificHero(c2);
    const o3 = useSpecificHero(c3);
    const o4 = useSpecificHero(c4);
    return (
        <div className='flex flex-row space-x-4 h-full w-full'>
            <Image src={o1.image} alt={o1.name + ' image'} width='30' height='30' />
            <Image src={o2.image} alt={o2.name + ' image'} width='30' height='30' />
            <Image src={o3.image} alt={o3.name + ' image'} width='30' height='30' />
            <Image src={o4.image} alt={o4.name + ' image'} width='30' height='30' />
        </div>
    )
}

export default TeamContainer
