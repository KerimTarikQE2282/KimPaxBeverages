import { ThreeDCardDemo } from '@/app/components/ui/card'
import React from 'react'

function OurProducts() {
  return (
    <div className='mb-36'>
        <p className='font-semibold text-5xl ml-96 relative left-96 bottom-2'>Our Products</p>
        <hr/>
        <div className='flex flex-rows justify-evenly'>
            <ThreeDCardDemo/>
            <ThreeDCardDemo/>
            <ThreeDCardDemo/>
        </div>
      
    </div>
  )
}

export default OurProducts
