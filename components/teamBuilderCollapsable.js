import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/solid'
import TeamBuilder from './teamBuilder';
import dynamic from 'next/dynamic';

const DynamicTeamBuilder = dynamic(() => import('./teamBuilder'), {
})

const TeamBuilderCollapsable = (props) => {
    return (
        <div  className='p-4 flex flex-col bg-menu-gray border-white border-opacity-50 border-4 bg-opacity-50 rounded-lg w-full max-w-[30rem]'>
            <Disclosure>
                {({ open }) => (
                    <>
                    <Disclosure.Button className="flex flex-row justify-center items-center text-center text-white font-bold font-serif text-xl w-full px-4 py-2 bg-white bg-opacity-0 rounded-lg hover:bg-opacity-50">
                            <ChevronRightIcon
                            className={`${
                                open ? 'transform rotate-90' : ''
                            } w-5 h-5 text-white`}
                            />
                            <span>Filter Characters</span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-white p-3">
                        <TeamBuilder {...props}/>
                    </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    )
}

export default TeamBuilderCollapsable