import React, { useContext } from 'react'
import star from '../../assets/star.png'
import star2 from '../../assets/star2.png'
import { ShopContext } from '@/context/ShopContext';

const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext)
  return (
    <div className='h-screen flex flex-col ml-10'>
      <div className='flex flex-row ml-35'>
        <div className='w-22 h-22 mt-2 flex flex-col gap-2'>
            <img src={product.image} alt=''></img>
            <img src={product.image} alt=''></img>
            <img src={product.image} alt=''></img>
            <img src={product.image} alt=''></img>
        </div>
        <div className='w-92 h-92 mt-2 ml-2.5'>
            <img src={product.image} alt=''></img>
        </div>
      </div>
      <div className='flex flex-col gap-5 ml-180 w-150 mt-[-340px]'>
        <h1 className='text-4xl'>{product.name}</h1>
        <div className='w-3 h-3 flex flex-row items-center gap-1'>
            <img src={star} alt=''></img>
            <img src={star} alt=''></img>
            <img src={star} alt=''></img>
            <img src={star} alt=''></img>
            <img src={star2} alt=''></img>
            <p className='text-[10px]'>(122)</p>
        </div>
        <div className='flex flex-row gap-5'>
            <div className='line-through text-gray-400'>
                ${product.old_price}
            </div>
            <div className='text-red-600'>
                ${product.new_price}
            </div>
        </div>
        <div>
            A lightweight, usually knitted, pullover shirt, close-fitting, and a round neck and short sleeves, worn as a undershirt
        </div>
        <div>
            <h1 className='font-bold'>Select Size</h1>
            <div className='flex flex-row gap-5'> 
            <div className='border-2 p-3 select-none cursor-pointer'>S</div>
            <div className='border-2 p-3 select-none cursor-pointer'>M</div>
            <div className='border-2 p-3 select-none cursor-pointer'>L</div>
            <div className='border-2 p-3 select-none cursor-pointer'>XL</div>
            <div className='border-2 p-3 select-none cursor-pointer'>XXL</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}} className='bg-red-500 border-none rounded-full active:scale-95 active:bg-red-400 cursor-pointer p-3 w-35 text-white'>ADD TO CART</button>
        <p><span className='font-bold'>Category :</span>Women, T-shirts, Crop Tops</p>
        <p><span className='font-bold'>Tag :</span>Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
