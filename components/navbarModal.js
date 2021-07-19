import React, { useState, Fragment } from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import { Dialog, Transition } from '@headlessui/react'
import VersionButton from './versionButton'

const NavbarModal = (props) => {

    return (
        <Transition show={props.isOpen} as={Fragment}
            appear
            enter="transition ease-in-out duration-150 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-150 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
        >
            {/* TODO: onMouseLeave={() =>props.setIsOpen(false)} */}
            <Dialog className="absolute h-screen top-0 z-10 w-full md:w-1/3" 
                open={props.isOpen} onClose={() => props.setIsOpen(false)} >
                <Dialog.Overlay />
                <div className="bg-gradient-to-b from-yellow-100 h-screen">
                    <div className='flex flex-row'>
                        <div className='w-1/5 md:w-2/12 h-screen bg-gray-800' content=''>
                            
                        </div>
                        <div className='flex flex-col'>
                            <div className="p-4 w-full h-1/2">
                                <div className="w-full h-full">
                                    <TwitterTimelineEmbed
                                        sourceType="profile"
                                        screenName="GenshinImpact"
                                        theme="dark"
                                        noHeader
                                        noFooter
                                        autoHeight
                                        noScrollbar
                                        options={{tweetLimit: 1, height:'300'}}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row flex-wrap gap-2 justify-start justify-items-center p-4 pt-0">
                                <VersionButton version={"july waxing phase"} />
                                <VersionButton version={"july waning phase"} />
                                <VersionButton version={"august waxing phase"} />
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </ Transition>
    )
}

export default NavbarModal
