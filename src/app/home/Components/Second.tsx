"use client"
import React from 'react'
import Spline from '@splinetool/react-spline';
import { Button } from '@mui/material';

function Second() {
  return (
    <div className='flex flex-row-reverse h-3/5 mt-[10vh] mb-96'>
      <div className='flex-1  w-64 h-32'>    
</div>
      <div className='flex-1 h-32'> <p className='w-4/5 ml-28'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac interdum elit. Ut sed ex eget dolor auctor maximus. Morbi at nunc id lorem aliquet eleifend. Vivamus id ligula sollicitudin, eleifend mauris eget, consectetur elit. Nulla facilisi. Integer sed felis vitae sem volutpat lobortis. Sed commodo feugiat ipsum, ac feugiat enim tincidunt eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec orci sit amet mi rhoncus cursus. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam bibendum eros vitae maximus fringilla. Integer pharetra mi nec sapien aliquam, id tincidunt neque porttitor. Fusce luctus justo ac ex feugiat, sit amet tristique augue interdum. Donec auctor tincidunt mi, ut semper enim efficitur id. Sed bibendum vestibulum vestibulum. Quisque venenatis malesuada arcu, nec dignissim ex ullamcorper ac.</p> 
      <br/><Button
  variant='contained'
  sx={{
    position: 'relative',
    left: '20vw',
    top: '5vh',
    width: '10vw',
    color: '#000000', 
    backgroundColor: '#FFFFFF',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#000000', 
      color: '#FFFFFF', 
    },
  }}
>
  Order now
</Button><br/></div>
       
    </div>
  )
}

export default Second



