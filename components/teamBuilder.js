import React from 'react'
import TeamSelection from './teamSelection'
import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/solid'
import FilterSwitch from './filterSwitch'
import dynamic from 'next/dynamic'
import { useRecoilState } from 'recoil'
import { includedCharactersState } from '../data/recoil/atoms'

const DynamicCharacterFilter = dynamic(() => import('./characterFilter'), {
    ssr: false,
})

//TODO: move heroes and heroDict to atoms, replace checked with excluded
const TeamBuilder = ({isFilterActive, setIsFilterActive}) => {
    const [includedCharacters, setIncludedCharacters] = useRecoilState(includedCharactersState);
    return (
        <div className=' flex flex-col gap-2 items-center'>
            <div className='w-full justify-center items-center grid grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-4 lg:grid-rows-2 lg:grid-cols-2'>
                <TeamSelection hero={includedCharacters.firstCharacter} 
                               setHero={char=>{
                                setIncludedCharacters({...includedCharacters, firstCharacter:char});
                                console.log(char);
                                }
                                }/>
                <TeamSelection hero={includedCharacters.secondCharacter} 
                               setHero={char=>setIncludedCharacters({...includedCharacters, secondCharacter:char})}/>
                <TeamSelection hero={includedCharacters.thirdCharacter}
                               setHero={char=>setIncludedCharacters({...includedCharacters, thirdCharacter:char})}/>
                <TeamSelection hero={includedCharacters.fourthCharacter} 
                               setHero={char=>setIncludedCharacters({...includedCharacters, fourthCharacter:char})}/>
            </div>
            <div className="flex flex-row items-center p-2 md:p-0">
                <FilterSwitch isFilterActive={isFilterActive} setIsFilterActive={setIsFilterActive} />
            </div>
            <div className="bg-white bg-opacity-40 rounded-lg w-full">
                <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-white bg-opacity-50 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <ChevronRightIcon
                            className={`${
                                open ? 'transform rotate-90' : ''
                            } w-5 h-5 text-purple-500`}
                            />
                            <span>Exclude Characters</span>
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-white px-2">
                            <DynamicCharacterFilter />
                        </Disclosure.Panel>
                      </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}

export default TeamBuilder
