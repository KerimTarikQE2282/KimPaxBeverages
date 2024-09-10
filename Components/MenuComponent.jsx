'use client'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function MenuComponent() {
    const [displayMenu, setDisplayMenu] = React.useState(false)

    // Function to toggle the menu
    const toggleMenu = () => {
        setDisplayMenu(!displayMenu)
    }

    return (
        <div className="relative left-20 bottom-[15vh]">
        <button className={`relative flex gap-10 top-10 left-10 ${displayMenu ? 'hidden' : 'block'}`} onClick={toggleMenu}>
            <Menu />
        </button>
        
        {/* Menu links */}
        <div className={`flex flex-row justify-between bg-white p-4 shadow-lg ${displayMenu ? 'block' : 'hidden'}`}>
            <Link href={'/'} className="font-Inter font-semi-bold text-lg  ">Home</Link>
            <Link href={'/order'} className="font-Inter font-semi-bold text-lg  mb-2">Order</Link>
            <Link href={'/about'} className="font-Inter font-semi-bold text-lg ">About us</Link>
        </div>
    </div>
    
    )
}
