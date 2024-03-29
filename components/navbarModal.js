import React, { Suspense, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ReplyIcon from '@material-ui/icons/Reply.js';
import HomeIcon from '@material-ui/icons/Home.js';
import InfoIcon from '@material-ui/icons/Info.js';
import TimelineIcon from '@material-ui/icons/Timeline.js';
import KofiIcon from '../public/images/kofi_logo.png';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import NavButton from './navButton';
import LunarPhaseLinks from './lunarPhaseLinks';
import InnerHtml from 'dangerously-set-html-content'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional for styling
import useSWR from 'swr'
import { TwitterTimelineEmbed } from 'react-twitter-embed';


const NavbarModal = ({isOpen, setIsOpen}) => {

      let buttonRef = useRef(null)
        // <Transition show={isOpen} as={Fragment}
        //     appear
        //     enter="transition ease-in-out duration-150 transform"
        //     enterFrom="-translate-x-full"
        //     enterTo="translate-x-0"
        //     leave="transition ease-in-out duration-150 transform"
        //     leaveFrom="translate-x-0"
        //     leaveTo="-translate-x-full"
        // >
             {/* //TODO: revert to dialog (?) */}
                
        return (
        //      <Transition show={isOpen} as={Fragment}
        //     appear
        //     enter="transition ease-in-out duration-150 transform"
        //     enterFrom="-translate-x-full"
        //     enterTo="translate-x-0"
        //     leave="transition ease-in-out duration-150 transform"
        //     leaveFrom="translate-x-0"
        //     leaveTo="-translate-x-full"
        // >
                <div className={`fixed h-screen top-0 z-30  md:w-1/3 ${isOpen? "translate-x-0 opacity-100" :"translate-x-[-50%] opacity-0 pointer-events-none" } transition`}>
                    {/* Menu Contents */}
                    {/* Gradient background */}
                    <div className="bg-gradient-to-b from-menu-yellow h-screen">
                        <div className='flex flex-row'>
                            {/* Left Grey navbar */}
                            <div className='w-20 md:w-[80px] h-screen bg-menu-item grid grid-rows-2 justify-items-center' content=''>
                                <Tippy content='Close' placement='right' >
                                    <button ref={buttonRef} onClick={()=>{
                                    console.log(isOpen); setIsOpen(false)}} className="w-14 h-14 rounded-full bg-menu-yellow border-[#969696] border-4 mt-4 transition duration-100 transform hover:-translate-y-1 hover:scale-110">
                                        <ReplyIcon  className='cursor-pointer' fontSize='large' style={{ color: '#3A4154'}} />
                                    </button>
                                </Tippy>
                                {/** Main nav */}
                                <div className='flex flex-col content-between w-full'>
                                    <NavButton link="/" icon={HomeIcon} color='lightgray' fontSize='large' content='Home' />
                                    <NavButton link="/trends" icon={TimelineIcon} color='lightgray' fontSize='large' content='Trends' />
                                    <NavButton link="https://forms.gle/ksJ4pQfEKxNqDEk19" icon={CloudUploadIcon} color='lightgray' fontSize='large' content='Submit Data'/>
                                    <NavButton link="https://ko-fi.com/kubbi" customImage='true' additionalStyling='invert-81' icon={KofiIcon} fontSize='large' content='Donate!'/>
                                    <NavButton link="/about" icon={InfoIcon} color='lightgray' fontSize='large' content='About' />
                                </div>
                            </div>
                            <div className='grid grid-rows-2 grid-cols-1 h-screen w-full'>
                                {/* twitter embed */}
                                <div className="p-4 w-full h-full flex flex-col items-center justify-center">
                                
                                    <div className="w-full h-full overflow-y-scroll no-scrollbar">
                                        <TwitterTimelineEmbed tweetLimit={1} screenName="GenshinImpact"></TwitterTimelineEmbed>
                                    </div>
                                </div>
                                {/* data nav */}
                                <LunarPhaseLinks closeNav={()=>setIsOpen(false)}/>
                            </div>
                        </div>
                    </div>
             </div>
    )
}

export default NavbarModal
