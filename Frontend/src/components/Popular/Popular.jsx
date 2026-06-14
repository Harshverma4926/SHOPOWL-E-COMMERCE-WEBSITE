import React from 'react'
import products from '../../assets/WomensP'
import Items from '../Items/Items'

const Popular = () => {
  return (
    <div className='w-full h-screen'>
      <h1 className='w-full h-40 text-4xl pl-150 mt-8'>POPULAR IN WOMEN <hr className='h-1 w-35 ml-18 mt-1 border-none rounded-full bg-black'/></h1>
      
      <div className='flex flex-row gap-5 pl-45'>
        {products.map((product,idx) => {
           return <Items key={idx} id={product.id} image={product.image} name={product.name} new_price={product.new_price} old_price={product.old_price} />
})}
      </div>
    </div>
  )
}

export default Popular
