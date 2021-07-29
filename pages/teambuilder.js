import React from 'react'
import Layout from '../components/layout'
import TeamSelection from '../components/teamSelection'

const TeamBuilder = () => {
    return (
        <Layout>
            
            <div className="flex items-center justify-center bg-fixed bg-center bg-no-repeat bg-cover bg-watatsumi -z-1 py-16 px-10  w-full min-h-screen h-full">
                <div  className='flex flex-col bg-menu-gray p-4 border-white border-opacity-50 border-4 rounded-lg'>
                    <div className='flex justify-center text-center text-white font-bold font-serif text-xl'>
                        TEAM BUILDER
                    </div>
                    <div className='flex flex-row'>
                        <TeamSelection />
                        <TeamSelection />
                        <TeamSelection />
                        <TeamSelection />
                    </div>
                    
                </div>
                
            </div>
        </Layout>
    )
}

export default TeamBuilder
