import Image from 'next/image'
import React from 'react'
import placeholder from '../../Resources/image.png'
import Healthy from '../../Resources/healthy.png'
import noFat from '../../Resources/no-fat.png'
import Tasty from '../../Resources/tasty.png'
function AreasOfFocus() {
  return (
    <div className=''>
      <p className='relative left-[40vw] font-semibold text-5xl w-[20vw]'>Why Choose us</p>
      <div className='flex flex-row-reverse mt-[15vh] overflow-auto '>
      
     <Image
                 src={Healthy}
                 
                 className="h-40 w-[10vw] ml-96 mt-24 rounded-xl group-hover/card:shadow-xl relative right-[10vw]  bottom-[10vh]"
                 alt="thumbnail"
               />
           <div className='flex-1 h-32'> <p className='w-4/5 ml-28'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac interdum elit. Ut sed ex eget dolor auctor maximus. Morbi at nunc id lorem aliquet eleifend. Vivamus id ligula sollicitudin, eleifend mauris eget, consectetur elit. Nulla facilisi. Integer sed felis vitae sem volutpat lobortis. Sed commodo feugiat ipsum, ac feugiat enim tincidunt eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec orci sit amet mi rhoncus cursus. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam bibendum eros vitae maximus fringilla. Integer pharetra mi nec sapien aliquam, id tincidunt neque porttitor. Fusce luctus justo ac ex feugiat, sit amet tristique augue interdum. Donec auctor tincidunt mi, ut semper enim efficitur id. Sed bibendum vestibulum vestibulum. Quisque venenatis malesuada arcu, nec dignissim ex ullamcorper ac.</p> 
           </div>
            
         </div>
     {/*     
         */}
         
         <div className='flex flex-row mt-[10vh]'>
          
     <Image
                 src={Tasty}
                 
                 className="h-40 w-[10vw] ml-96 mt-24 rounded-xl group-hover/card:shadow-xl relative right-[10vw]  bottom-[10vh]"
                 alt="thumbnail"
               />
           <div className='flex-1 h-32'> <p className='w-4/5 ml-28'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac interdum elit. Ut sed ex eget dolor auctor maximus. Morbi at nunc id lorem aliquet eleifend. Vivamus id ligula sollicitudin, eleifend mauris eget, consectetur elit. Nulla facilisi. Integer sed felis vitae sem volutpat lobortis. Sed commodo feugiat ipsum, ac feugiat enim tincidunt eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec orci sit amet mi rhoncus cursus. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam bibendum eros vitae maximus fringilla. Integer pharetra mi nec sapien aliquam, id tincidunt neque porttitor. Fusce luctus justo ac ex feugiat, sit amet tristique augue interdum. Donec auctor tincidunt mi, ut semper enim efficitur id. Sed bibendum vestibulum vestibulum. Quisque venenatis malesuada arcu, nec dignissim ex ullamcorper ac.</p> 
           </div>
            
         </div>
         <div className='flex flex-row-reverse mt-[15vh] overflow-auto  grayscale'>
      
      <Image
                  src={noFat}
                  
                  className="h-40 w-[10vw] ml-96 mt-24 rounded-xl group-hover/card:shadow-xl relative right-[10vw]  bottom-[10vh] "
                  alt="thumbnail"
                />
            <div className='flex-1 h-32'> <p className='w-4/5 ml-28'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac interdum elit. Ut sed ex eget dolor auctor maximus. Morbi at nunc id lorem aliquet eleifend. Vivamus id ligula sollicitudin, eleifend mauris eget, consectetur elit. Nulla facilisi. Integer sed felis vitae sem volutpat lobortis. Sed commodo feugiat ipsum, ac feugiat enim tincidunt eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec orci sit amet mi rhoncus cursus. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam bibendum eros vitae maximus fringilla. Integer pharetra mi nec sapien aliquam, id tincidunt neque porttitor. Fusce luctus justo ac ex feugiat, sit amet tristique augue interdum. Donec auctor tincidunt mi, ut semper enim efficitur id. Sed bibendum vestibulum vestibulum. Quisque venenatis malesuada arcu, nec dignissim ex ullamcorper ac.</p> 
            </div>
             
          </div>
    </div>
  )
}

export default AreasOfFocus
