import { Button, Paper } from '@mui/material';
import React from 'react';
import backgroundImg from '../Resources/vecteezy_abstract-waving-blue-color-gradient-for-banner-and-background_6543611-1.jpg';
import placeholder from '../Resources/image.png'
import Image from 'next/image';
export default function Page() {
  return (
    <div
      className='bg-aboutus h-screen pt-10'
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Paper
        sx={{
          width: '96vw',
          height: '90vh',
          marginLeft: '2vw',
          borderRadius: '50px',
          display: 'flex',
          flexDirection: 'row',
        }}
        elevation={10}
      >
        <div className='flex flex-row relative top-44 justify-between w-full'>
          <div className='relative left-44 w-2/5'>
            <p className='text-5xl font-semibold'>About us</p>
            <p className='mt-10' >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac interdum elit. Ut sed ex eget dolor auctor maximus. Morbi at nunc id lorem aliquet eleifend. Vivamus id ligula sollicitudin, eleifend mauris eget, consectetur elit. Nulla facilisi. Integer sed felis vitae sem volutpat lobortis. Sed commodo feugiat ipsum, ac feugiat enim tincidunt eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec orci sit amet mi rhoncus cursus. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam bibendum eros vitae maximus fringilla. Integer pharetra mi nec sapien aliquam, id tincidunt neque porttitor. Fusce luctus justo ac ex feugiat, sit amet tristique augue interdum. Donec auctor tincidunt mi, ut semper enim efficitur id. Sed bibendum vestibulum vestibulum. Quisque venenatis malesuada arcu, nec dignissim ex ullamcorper ac.
            </p>
          </div>
          <div>
          <Image
            src={placeholder}
            
            className="h-60 mr-44 mt-28 rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
          </div>
        </div>
      </Paper>
    </div>
  );
}