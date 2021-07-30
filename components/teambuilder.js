import React from 'react'
import Layout from './layout'
import TeamSelection from './teamSelection'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import CharacterFilter from './characterFilter'
import FilterSwitch from './filterSwitch'

const TeamBuilder = (props) => {
    return (
        <div  className='p-4 flex flex-col bg-menu-gray border-white border-opacity-50 border-4 rounded-lg'>
            <div className='flex justify-center text-center text-white font-bold font-serif text-xl'>
                TEAM BUILDER
            </div>
            <div className='flex flex-row flex-wrap justify-center'>
                <TeamSelection hero={props.chars.first} setHero={props.setChars.first} heroList={props.heroList} />
                <TeamSelection hero={props.chars.second} setHero={props.setChars.second} heroList={props.heroList} />
                <TeamSelection hero={props.chars.third} setHero={props.setChars.third} heroList={props.heroList} />
                <TeamSelection hero={props.chars.fourth} setHero={props.setChars.fourth} heroList={props.heroList} />
                <div className="flex flex-row items-center p-2 md:p-0"><FilterSwitch filter={props.filterComps} setFilter={props.setFilterComps} /></div>
            </div>
            <div className="bg-white bg-opacity-40 rounded-lg">
                <Disclosure>
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-white bg-opacity-50 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span>Filter Characters</span>
                            <ChevronUpIcon
                            className={`${
                                open ? 'transform rotate-180' : ''
                            } w-5 h-5 text-purple-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-white p-3">
                            <CharacterFilter checked={props.checked} setChecked={props.setChecked} heroList={props.heroList} heroDict={props.heroDict} />
                        </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}

export default TeamBuilder
