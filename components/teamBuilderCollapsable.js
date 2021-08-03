import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/solid'
import TeamBuilder from "./teamBuilder";
import dynamic from 'next/dynamic';

const DynamicTeamBuilder = dynamic(() => import('./teamBuilder'), {
})

const TeamBuilderCollapsable = (props) => {
    return (
        <div  className='p-4 flex flex-col z-30 bg-menu-gray border-white border-opacity-50 border-4 bg-opacity-50 rounded-lg'>
            <Disclosure>
                {({ open }) => (
                    <>
                    <Disclosure.Button className="className='grid grid-cols-3 grid justify-center text-center text-white font-bold font-serif text-xl w-full px-4 py-2 bg-white bg-opacity-0 rounded-lg hover:bg-opacity-50">
                            <ChevronRightIcon
                                className={
                                    `${ open ? 'transform rotate-90' : ''}
                                    w-5 h-5 text-white justify-self-start`
                                }
                            />
                            <span className='place-self-center'>TEAM BUILDER</span>
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