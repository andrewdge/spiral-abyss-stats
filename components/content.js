import React from 'react'
import { useHeroes } from '../data/typedMock'
import Image from 'next/image'
import { useSpecificHero }  from '../data/typedMock'

const Content = ({ children }) => {
    const heroesList = useHeroes();
    const childe = useSpecificHero('childe');

    return (
        <>
            <div className="flex flex-col w-full rounded-3xl h-full bg-opacity-50 bg-white">
                <div className="">
                    Hey
                </div>

                {/* <div className="flex flex-col h-full opacity-100">
                    { heroesList.map(hero => (
                        <div key={hero.name}>
                            { hero.name }, { hero.element }, <Image src={hero.image} alt={hero.name + ' image'} width='100' height='100'></Image>
                        </div>
                    ))}
                </div> */}
                <div className="flex flex-col h-full">
                     { childe.name }, {childe.element}, <Image src={childe.image} alt={childe.name + ' image'} width='100' height='100' />
                </div>
            </div>
        </>
    )
}

export default Content
