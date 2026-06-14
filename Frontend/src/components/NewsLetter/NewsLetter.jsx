import React from 'react'

const NewLetter = () => {
  return (
    <div className='w-full h-[200px] bg-[linear-gradient(180deg,#fde1ff_0%,#e1ffea22_60%)] mt-75'>
      <div className=' pt-30 mt-60 p-10 flex flex-col gap-4 items-center'>
      <h1 className='text-4xl'>Get Exclusive Offers! On Your Email</h1>
      <p className='text-lg '>Subscribe To Our Newsletter and Stay Updated</p>
      <div className='flex flex-row gap-2 mt-2'>
        <input className='border-2 p-3.5 w-90  rounded-full' type="email" placeholder="Enter your email" />
        <button className='bg-black active:bg-gray-600 select-none text-white p-3.5 rounded-full w-35 ml-[-80px] cursor-pointer active:scale-95 '>Subscribe</button>
      </div>
      </div>
    </div>
  )
}

export default NewLetter
