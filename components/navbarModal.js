import React, { useState, Fragment } from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import { Dialog, Transition } from '@headlessui/react'
import VersionButton from './versionButton'

const NavbarModal = (props) => {

    return (
        <Transition show={props.isOpen} as={Fragment}
            appear
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
        >
            <Dialog className="absolute h-screen top-0 z-10 w-full md:w-1/3" 
                open={props.isOpen} onClose={() => props.setIsOpen(false)} onMouseLeave={() =>props.setIsOpen(false)}>
                <Dialog.Overlay />
                <div className="pt-20 bg-gradient-to-b from-yellow-100 h-screen">
                    <Dialog.Title className="text-red w-100px">Title</Dialog.Title>
                    <Dialog.Description className="text-red w-100px">desc</Dialog.Description>
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
                                />
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap gap-2 justify-start justify-items-center p-4 pt-0">
                        <VersionButton version={"july waxing phase"} />
                        <VersionButton version={"july waning phase"} />
                        <VersionButton version={"august waxing phase"} />
                    </div>
                </div>
            </Dialog>
        </ Transition>
    )
}

export default NavbarModal
