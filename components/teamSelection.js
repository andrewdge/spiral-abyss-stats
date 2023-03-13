import React, { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import heroes from "../data/heroes.json"

const TeamSelection = ({hero, setHero}) => {    
    return (
        <div className={'m-1 md:m-3'}>
            <Listbox value={hero} onChange={setHero}>
                <Listbox.Button className="relative z-10 w-full py-2 pl-3 pr-10 text-left hover:bg-indigo-100 cursor-pointer bg-white rounded-md shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                    <span className="block truncate text-black">{hero?.name}</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                    />
                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute z-20 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {heroes.map((hero, index) => (
                            <Listbox.Option
                                key={index}
                                value={hero}
                                className={({ active }) =>
                                    `${active ? 'text-indigo-900 bg-indigo-100' : 'text-gray-900'}
                                        cursor-pointer select-none relative py-2 pl-10 pr-4`
                                }
                            >
                                {({ selected, active }) => (
                                    <>
                                        <span className={`${ selected ? 'font-medium' : 'font-normal'} block truncate`}>
                                            {hero.name}
                                        </span>
                                        {selected ? (
                                            <span className={`${ active ? 'text-indigo-600' : 'text-indigo-600'} absolute inset-y-0 left-0 flex items-center pl-3`}>
                                                <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                            </span>
                                        ) : null}
                                    </>
                                )}
                            </Listbox.Option>
                        ))} 
                    </Listbox.Options>
                </Transition>
            </Listbox>
        </div>
    )
}

export default TeamSelection
