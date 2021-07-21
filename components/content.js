import React from 'react'
import { useHeroes } from '../data/typedMock';

const Content = ({ children }) => {
    const heroesList = useHeroes();
    return (
        <>
            <div className="w-full rounded-3xl h-screen opacity-50 bg-white ">
                <div className="">
                    Hey
                </div>

                <div className="flex flex-col overflow-y-scroll" style={{ maxHeight: 200 }}>
                    { heroesList.map(hero => (
                        <div key={hero.name}>
                            { hero.name }, { hero.element }
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Content
