import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from './navbar'



const Layout = ({ children, className }) => {
    return (
        <div className={className}>
            <Navbar className="fixed" />
            {children}
        </div>
    );  
}

export default Layout;
