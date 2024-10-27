import React from 'react'

export default function layout({children}) {
  return (
    <div>
         <nav className="relative top-10 h-16 w-[100vw] flex-col justify-between  max-w-full overflow-hidden mx-auto">
      <div className="absolute left-16">
        <p className="font-Inter font-bold text-2xl">KIM PAX</p>
      </div>
      <div className="flex items-center justify-end absolute right-24 space-x-10">
        <Link href={'/'} className="font-Inter font-semi-bold text-lg ">Home</Link>
        <Link href={'/order'} className="font-Inter font-semi-bold text-lg">Order</Link>
        <Link href={'/about'} className="font-Inter font-semi-bold text-lg">About us</Link>
      </div>
    </nav>
    {children}
      
    </div>
  )
}
