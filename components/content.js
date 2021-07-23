import React from 'react'
import Image from 'next/image'
import TeamContainer from './teamContainer';

const Content = ({ children }) => {

    return (
        <>
            <div className="flex flex-col w-full h-full bg-opacity-50 bg-white">
                <div className="">
                    Hey
                </div>
                <TeamContainer c1='childe' c2='xiangling' c3='bennett' c4='venti' />
            </div>
        </>
    )
}

export default Content
