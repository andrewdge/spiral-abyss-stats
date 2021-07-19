import React, { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

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
                    <Dialog.Description className="text-red w-100px">Desc</Dialog.Description>
                    <div className="flex flex-row flex-wrap">
                        <button className="w-100px" onClick={() => props.setIsOpen(false)}>Confirm</button>
                        <button className="w-100px" onClick={() => props.setIsOpen(false)}>Cancel</button>
                    </div>
                </div>
            </Dialog>
        </ Transition>
    )
}

export default NavbarModal
