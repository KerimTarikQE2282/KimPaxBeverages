"use client"
import { Button, Paper } from '@mui/material';
import React from 'react';
 // Import the Paper component from the correct library

export default function Page() {
  const [firstcolor,setFirstcolor] = React.useState(false)
  const [secondcolor,setsecondcolor] = React.useState(false)
  const [thirdcolor,setFthirdcolor] = React.useState(false)
  const [counter, setCounter] = React.useState(1);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  const changeFirstRing=()=>{
    setFirstcolor(!firstcolor)
    setsecondcolor(false)
    setFthirdcolor(false)
  }
  const changesecondRing=()=>{
    setsecondcolor(!secondcolor)
    setFirstcolor(false)
    setFthirdcolor(false)
  }
  const changethirdRing=()=>{
    setFthirdcolor(!thirdcolor)
    setsecondcolor(false)
    setFirstcolor(false)
  }
  return (
    <div>
      <Paper
        sx={{
          width: '96vw',
          height: '90vh',
          marginLeft: '2vw',
          marginTop: '4vh',
          borderRadius: '50px',
          display: 'flex',
          flexDirection: 'row',
        }}
        elevation={10}
      >
        <div className='w-1/2 h-full bg-slate-700 relative left-10 top-20 h-5/6'>
          yo
        </div>
        <div className='relative ml-52 top-32'>
          <p className='text-4xl font-semibold'>KIM PAX Drinking Bottles</p>
          <br />
          <p className='text-2xl'>15.00$</p>
          <br />
          <div className='flex flex-row'>
            <div>
              <p className='text-lg font-semibold'>Colors:</p>
            </div>
            <div className='flex flex-row ml-5 relative bottom-1'>
              {firstcolor ?<div className='ring-2  ring-grey rounded-full ring-offset-4'>  <div className='rounded-full w-10 h-10 bg-blue-500 cursor-pointer' onClick={changeFirstRing}></div> </div> : <div className='rounded-full w-10 h-10 bg-blue-500 cursor-pointer' onClick={changeFirstRing}></div>}
              {secondcolor ?<div className='ring-2  ring-grey rounded-full ring-offset-4  relative left-10'>  <div className='rounded-full w-10 h-10 bg-orange-500 cursor-pointer' onClick={changesecondRing}></div> </div> : <div className='rounded-full w-10 h-10 bg-orange-500 cursor-pointer  relative left-10' onClick={changesecondRing}></div>}
              {thirdcolor ?<div className='ring-2  ring-grey rounded-full ring-offset-4  relative left-20'>  <div className='rounded-full w-10 h-10 bg-green-500 cursor-pointer' onClick={changethirdRing}></div> </div> : <div className='rounded-full w-10 h-10 bg-green-500 cursor-pointer  relative left-10 relative left-20' onClick={changethirdRing}></div>}
              
            </div>
           <div></div>


           <div className="grid grid-cols-3 divide-x border w-44 relative top-28 right-48">
  <div className="pl-6 pt-2 bg-black"><button onClick={handleDecrement}><p className='text-white'>-</p></button></div>
  <div className="pl-6 pt-2">{counter}</div>

  <div className="pl-6 pt-2 bg-black"><button onClick={handleIncrement}><p className='text-white'>+</p></button></div>
</div>
<Button
  sx={{
    position: 'relative',
    top: '20vh',
    right: '19vw',
    color: 'black',
    width: '200px',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
    },
  }}
  variant="contained"
>
  Add to cart
</Button>          </div>
        </div>
      </Paper>
    </div>
  );
}