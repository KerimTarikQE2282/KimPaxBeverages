"use client"
import Image from 'next/image'
import React from 'react'
import placeholder from '../../Resources/image.png'
import Healthy from '../../Resources/healthy.png'
import noFat from '../../Resources/no-fat.png'
import Tasty from '../../Resources/tasty.png'
import Spline from '@splinetool/react-spline'
function AreasOfFocus() {
  return (
    <section className="bg-gray-50 py-20">
  <div className="max-w-[80vw] mx-auto px-6 lg:px-8">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-extrabold text-gray-800">
        Why Choose Us
      </h2>
      <p className="mt-4 text-gray-600">
        Discover the reasons that make us the preferred choice for our customers.
      </p>
    </div>

    {/* Feature 1 */}
    <div className="flex flex-col md:flex-row items-center mb-20">
      <div className="md:w-1/2 flex justify-center md:justify-start">
      <Spline
        scene="https://prod.spline.design/uvezzjky0AxrUFRh/scene.splinecode" 
      />
      </div>
      <div className="md:w-1/2 md:pl-16 mt-8 md:mt-0 text-center md:text-left">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Health-Conscious Choices
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac interdum elit. Ut sed ex eget dolor auctor maximus. Morbi at nunc id lorem aliquet eleifend. Vivamus id ligula sollicitudin, eleifend mauris eget, consectetur elit.
        </p>
      </div>
    </div>

    {/* Feature 2 */}
    <div className="flex flex-col md:flex-row-reverse items-center mb-20">
      <div className="md:w-1/2 flex justify-center md:justify-end">
      <Spline
        scene="https://prod.spline.design/w6GuFkPNSHlTh5Iu/scene.splinecode" 
      />
      </div>
      <div className="md:w-1/2 md:pr-16 mt-8 md:mt-0 text-center md:text-left">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Delicious and Flavorful
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac interdum elit. Ut sed ex eget dolor auctor maximus. Morbi at nunc id lorem aliquet eleifend. Vivamus id ligula sollicitudin, eleifend mauris eget, consectetur elit.
        </p>
      </div>
    </div>

    {/* Feature 3 */}
    <div className="flex flex-col md:flex-row items-center mb-20">
      <div className="md:w-1/2 flex justify-center md:justify-start">
      <Spline
        scene="https://prod.spline.design/Ru7wz5oA5BwUTyJz/scene.splinecode" 
      />
      </div>
      <div className="md:w-1/2 md:pl-16 mt-8 md:mt-0 text-center md:text-left">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Low-Fat Options
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac interdum elit. Ut sed ex eget dolor auctor maximus. Morbi at nunc id lorem aliquet eleifend. Vivamus id ligula sollicitudin, eleifend mauris eget, consectetur elit.
        </p>
      </div>
    </div>
  </div>
</section>


  )
}

export default AreasOfFocus
