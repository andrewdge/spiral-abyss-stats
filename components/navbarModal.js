import React, { Fragment } from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import { Dialog, Transition } from '@headlessui/react'
import ReplyIcon from '@material-ui/icons/Reply.js';
import HomeIcon from '@material-ui/icons/Home.js';
import BuildIcon from '@material-ui/icons/Build';
import NavButton from './navButton';
import LunarPhaseLinks from './lunarPhaseLinks';

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
                <div className="bg-gradient-to-b from-menu-yellow h-screen">
                    <div className='flex flex-row'>
                        {/* Left Grey navbar */}
                        <div className='w-20 md:w-[80px] h-screen bg-menu-item grid grid-rows-2 justify-items-center' content=''>
                            <div>
                                <button onClick={() => props.setIsOpen(false)} className="w-14 h-14 rounded-full bg-menu-yellow border-[#969696] border-4 mt-4 transition duration-100 transform hover:-translate-y-1 hover:scale-110">
                                    <ReplyIcon  className='cursor-pointer' fontSize='large' style={{ color: '#3A4154'}} />
                                </button>
                            </div>
                            {/** Main nav */}
                            <div className='flex flex-col content-between'>
                                <NavButton link="/" icon={HomeIcon} color='lightgray' fontSize='large' />
                                <NavButton link="/teambuilder" icon={BuildIcon} color='lightgray' fontSize='large' />
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
                                        options={{tweetLimit: 1, height:'300'}}
                                    />
                                </div>
                            </div>
                            {/* data nav */}
                            <LunarPhaseLinks />
                        </div>
                    </div>
                </div>
            </Dialog>
        </ Transition>
    )
}

export default NavbarModal
