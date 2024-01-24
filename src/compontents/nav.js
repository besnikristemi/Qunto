'use client'
import Image from "next/image";
export default function Nav() {
    
    
    const navLink = [
        {href: '/', label: 'Home'},
        {href: '/about', label: 'About '},
        {href: '/contact', label: 'Contact'}
    ];

    
    return(

    <div>
        {/* LOGO */}
        <div>
        <Image src="/images/logo.png" width={200} height={200} alt="logo"/>
        </div>
        {/* NAV LINKS */}
        <div>

        </div>
    </div>
    )
    
}