import React from 'react'
import Hero from './home/Components/Hero'
import Second from './home/Components/Second'
import OurProducts from './home/Components/OurProducts'
import AreasOfFocus from './home/Components/AreasOfFocus'
export default function page() {
  return (
    <div>
       <Hero/>
       <Second/>
       <OurProducts/>
       <AreasOfFocus/>
    </div>
  )
}
