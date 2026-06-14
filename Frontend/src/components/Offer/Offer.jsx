import React from 'react'
import blueImg from '../../assets/Blue.png'
import { MoveRight } from 'lucide-react'


const Offer = () => {
  return (
    <div>
      <div>
        <img className='relative object-cover w-5xl ml-60 pb-20 mt-[-70px]' src={blueImg} alt='Offer'></img>
      </div>
    <div className='h-[500px] mt-[-450px] ml-150 flex flex-row'>
      <div className='flex flex-col gap-3 leading-tight absolute'>
        <h1 className='text-4xl'>Exclusive</h1>
        <h1 className='text-4xl'>Offers For You</h1>
        <p className='text-xl'>ONLY ON BEST SELLER PRODUCTS</p>
        <button className='border-none cursor-pointer items-center flex felx-row  gap-1 font-bold active:scale-95 bg-red-500 rounded-full p-2 text-white w-30'>Check Now<MoveRight size={20} /></button>
      </div>
    </div>
    </div>
  )
}

export default Offer
