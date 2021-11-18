import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from './navbar'



const Layout = ({ children, twitter }) => {
    return (
        <>
            <div>
                <Navbar className="fixed" twitter={twitter} />
                {children}
            </div>
        </>
    );  
}

export default Layout;
