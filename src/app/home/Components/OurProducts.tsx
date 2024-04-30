"use client"
import { ThreeDCardDemo } from '@/app/components/ui/card'
import React from 'react'
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import Spline from '@splinetool/react-spline';
function OurProducts() {
  return (
    <div className='mb-36   w-[100vw]' >
        <p className='font-semibold text-5xl w-[20vw] h-[10vh] relative left-[45vw] bottom-2 overflow-auto '>Our Products</p>
        <hr/>
        <div className='flex flex-rows justify-evenly w-[100vw]'>
        <CardContainer className="inter-var w-[30vw]">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-green-500/[0.1]  dark:border-white/[0.2] border-black/[0.1]  sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 "
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 "
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={0}
          rotateZ={0}
          className="w-full mt-4"
        >
          <div className='h-[30vh]'>
            <Spline scene="https://prod.spline.design/LijujIxzk-qv-W7o/scene.splinecode" />
            </div>
             
          
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal "
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black "
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
            {/*  */}
            <CardContainer className="inter-var w-[30vw]">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-green-500/[0.1]  dark:border-white/[0.2] border-black/[0.1]  sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 "
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 "
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={0}
          rotateZ={0}
          className="w-full mt-4"
        >
          <div className='h-[30vh]'>
            <Spline scene="https://prod.spline.design/LijujIxzk-qv-W7o/scene.splinecode" />
            </div>
             
          
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal "
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black "
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    {/*  */}
    <CardContainer className="inter-var w-[30vw]">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-green-500/[0.1]  dark:border-white/[0.2] border-black/[0.1]  sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 "
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 "
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={0}
          rotateZ={0}
          className="w-full mt-4"
        >
          <div className='h-[30vh]'>
            <Spline scene="https://prod.spline.design/LijujIxzk-qv-W7o/scene.splinecode" />
            </div>
             
          
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal "
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black "
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
        </div>
      
    </div>
  )
}

export default OurProducts
