import React from 'react'
import Layout from './layout'
import TeamSelection from './teamSelection'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import CharacterFilter from './characterFilter'

const TeamBuilder = () => {
    return (
        <div  className='p-4 flex flex-col bg-menu-gray border-white border-opacity-50 border-4 rounded-lg'>
            <div className='flex justify-center text-center text-white font-bold font-serif text-xl'>
                TEAM BUILDER
            </div>
            <div className='flex flex-row flex-wrap justify-center'>
                <TeamSelection />
                <TeamSelection />
                <TeamSelection />
                <TeamSelection />
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
                            <CharacterFilter/>
                        </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}

export default TeamBuilder
