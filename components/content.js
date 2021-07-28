import React from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'
import TeamContainer from './teamContainer';
import CompFile from '../data/comp_usages.json'
import CompRanks from './compRanks';

const Content = ({ children, file }) => {

    return (
        <>
            <CompRanks className="w-full h-1/2 lg:w-1/2" file={file} />
        </>
    )
}

export default Content
