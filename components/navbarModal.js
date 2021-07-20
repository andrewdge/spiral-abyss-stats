import React, { useState, Fragment } from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import { Dialog, Transition } from '@headlessui/react'
import VersionButton from './versionButton'
import ReplyIcon from '@material-ui/icons/Reply.js';
import HomeIcon from '@material-ui/icons/Home.js';
import Link from 'next/link'

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
            <Dialog className="fixed h-screen top-0 z-10 w-full md:w-1/3" 
                open={props.isOpen} onClose={() => props.setIsOpen(false)} >
                <Dialog.Overlay />
                {/* Menu Contents */}
                {/* Gradient background */}
                <div className="fixed bg-gradient-to-b from-menu-yellow h-screen">
                    <div className='flex flex-row'>
                        {/* Left Grey navbar */}
                        <div className='w-20 md:w-[80px] h-screen bg-menu-item flex flex-col justify-between items-center' content=''>
                            <div>
                                <button onClick={() => props.setIsOpen(false)} className="w-14 h-14 rounded-full bg-menu-yellow border-[#969696] border-4 mt-4">
                                    <ReplyIcon  className='cursor-pointer' fontSize='large' style={{ color: '#3A4154'}} />
                                </button>
                            </div>
                            <div>
                                <Link href="/" passHref>
                                    <HomeIcon className='cursor-pointer' fontSize='large' style={{ color: 'white'}}/>
                                </Link>
                            </div>
                            <div>
                                
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            {/* twitter embed */}
                            <div className="p-4 w-full h-1/2">
                                <div className="w-full h-full overflow-y-scroll no-scrollbar">
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
                            {/* data nav */}
                            <div className="flex flex-row flex-wrap gap-2 justify-start justify-items-center p-4 pt-0">
                                <VersionButton version={"floor9"} link={"/floor9"} />
                                <VersionButton version={"july waxing phase"} link={''}/>
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
