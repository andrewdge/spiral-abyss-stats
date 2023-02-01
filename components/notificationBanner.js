import Link from 'next/link'
import Image from 'next/image'
import Navbar from './navbar'
import { GoogleAd, AdType } from './googleAd'

const NotificationBanner = () => {
    return (
        <>
            <div className="text-center text-red-600 font-bold text-2xl py-3 bg-gray-800 mx-60 mb-3 rounded-md border-red-600 border-solid border-2">
                We are now looking for volunteer Next.js devs to help maintain the website. <br />
                Contact: spiralstatsgenshin@gmail.com
            </div>
        </>
    );  
}

export default NotificationBanner;