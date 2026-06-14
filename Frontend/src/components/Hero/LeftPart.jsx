import React from 'react'
import { MoveRight } from 'lucide-react'

const LeftPart = () => {
  return (
    <div className='flex flex-col absolute top-1/4 ml-65  text-white gap-5'>
      <div>
        <h1 className='text-2xl ml-1'>NEW ARRIVALS ONLY</h1>
      </div>
      <div className='flex flex-col leading-tight'>
       <span className='flex flex-row text-7xl'>New Best</span><p className='text-7xl'>Collections</p><p className='text-7xl'>for everyone</p>
      </div>
      <div>
        <button className='border-none rounded-full font-bold flex flex-row items-center gap-2 p-3 bg-red-500 active:scale-85 cursor-pointer select-none active:bg-red-400'>Latest Collection<MoveRight size={20} /></button>
      </div>
    </div>
  )
}

export default LeftPart
