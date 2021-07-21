import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from './navbar'



const Layout = ({ children }) => {
    return (
        <div>
            <Navbar className="fixed" />
            {children}
        </div>
    );  
}

export default Layout;
