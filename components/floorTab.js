import React, { useState } from 'react'
import { Tab } from '@headlessui/react'
import PhaseDataContent from './phaseDataContent'
import NotificationBanner from '../components/notificationBanner'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const FloorTab = () => {
    const [floors] = useState([0, 1, 2, 3])

    return (
        <div className="flex flex-col w-full px-2 py-12 sm:px-0">
            <NotificationBanner />
            <Tab.Group>
                <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl min-w-[50%] place-self-center">
                    {floors.map( floor => (
                        <Tab
                            key={floor}
                            className={({ selected }) =>
                            classNames(
                                'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                                selected
                                  ? 'bg-white shadow'
                                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                            )
                        }
                    >
                        {floor ? 'Chamber ' +floor : 'All Chambers'}
                    </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className='mt-2'>

                        {/* <Tab.Panel key={0}> <PhaseDataContent file={file} phase={phase} /> </Tab.Panel>
                        <Tab.Panel key={1}> <PhaseDataContent file={file} phase={phase} /> </Tab.Panel>
                        <Tab.Panel key={2}> <PhaseDataContent file={file} phase={phase} /> </Tab.Panel>
                        <Tab.Panel key={3}> <PhaseDataContent file={file} phase={phase} /> </Tab.Panel> */}

                        {floors.map( floor => (
                            <Tab.Panel
                                key={floor}
                            >
                            <PhaseDataContent  floor={floor}/>
                        {/** pass floor as props to PhaseDataContent */}
                        {/* {React.cloneElement(children, {floor: floor})} */}
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export default FloorTab
