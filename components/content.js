import React from 'react'
import { useHeroes } from '../data/typedMock'
import Image from 'next/image'

const Content = ({ children }) => {
    const heroesList = useHeroes();
    return (
        <>
            <div className="flex flex-col w-full rounded-3xl h-full opacity-50 bg-white">
                <div className="">
                    Hey
                </div>

                <div className="flex flex-col h-full opacity-100">
                    { heroesList.map(hero => (
                        <div key={hero.name}>
                            { hero.name }, { hero.element }, <Image src={hero.image} alt={hero.name + ' image'} width='100' height='100'></Image>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Content
