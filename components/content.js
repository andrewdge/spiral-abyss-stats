import React from 'react'
import Image from 'next/image'
import TeamContainer from './teamContainer';
import CompFile from '../data/comp_usages.json'
import CompRanks from './compRanks';

const Content = ({ children }) => {

    

    return (
        <>
            <CompRanks className="w-full h-1/2 lg:w-1/2"/>
        </>
    )
}

export default Content
