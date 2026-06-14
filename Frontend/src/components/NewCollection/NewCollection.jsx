import React from 'react'
import NewItems from '../NewItems/NewItems'
import data from '../../assets/NewC'

const NewCollection = () => {
  return (
    <div className='w-full h-screen'>
      <h1 className='w-full h-40 text-4xl pl-150 mt-[-25px]'>NEW COLLECTION<hr className='h-1 w-35 ml-18 mt-1 border-none rounded-full bg-black'/></h1>
      
      <div className='flex flex-row flex-wrap gap-x-5 gap-y-28 pl-45'>
        {data.map((data,idx) => {
           return <NewItems key={idx} id={data.id} image={data.image} name={data.name} new_price={data.new_price} old_price={data.old_price} />
})}
      </div>
    </div>
  )
}

export default NewCollection
