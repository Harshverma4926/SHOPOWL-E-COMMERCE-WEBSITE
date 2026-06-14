// import AllProducts from '@/assets/AllProducts'
import { ShopContext } from '@/context/ShopContext'
import React, { useContext } from 'react'
import x from '../../assets/x.png'

const CartItems = () => {
    const {getTotalCartAmount,AllProducts ,cartItems,removeFromCart}=useContext(ShopContext)
  return (
    <div className='flex flex-col gap-3'>
        <div className='flex flex-row gap-7 font-bold ml-45 mt-10'>
       <p>Products</p>
       <p className='ml-4'>Title</p>
       <p className='ml-50'>Price</p>
       <p className='ml-25'>Quantity</p>
       <p className='ml-30'>Total</p>
       <p className='ml-35'>Remove</p>
       </div>
       <hr className='h-0.5 w-255 ml-45 bg-gray-400'/>
       {AllProducts.map((e)=>{
        if(cartItems[e.id]>0)
        {
            return <div className='flex flex-wrap flex-row ml-45 gap-10 items-center'>
        <img className='w-15 h-15 rounded-2xl object-cover' src={e.image}></img>
        <p className='ml-2 w-50'>{e.name}</p>
        <p className='ml-8 w-10'>${e.new_price}</p>
        <button className='ml-27 border-1 border-b-gray-400 p-2'>{cartItems[e.id]}</button>
        <p className='ml-34 w-10'>{e.new_price*cartItems[e.id]}</p>
        <img className='w-3 h-3 ml-34 cursor-pointer active:scale-95 ' src={x} onClick={()=>{removeFromCart(e.id)}}></img>
        <hr className='h-1 bg-gray-400'></hr>
       </div>   
        }
        return null;
       })}
       <div className='flex flex-row gap-90 ml-45 mt-15'>
        <div className='flex flex-col'>
            <h1 className='text-2xl'>Cart Totals</h1>
            <div className='flex flex-col text-[14px] gap-3 mt-10'>
                <div className='flex flex-row gap-55'>
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr/>
                <div className='flex flex-row gap-45'>
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr/>
                <div className='flex flex-row gap-60'>
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button className='bg-red-500 p-2 mt-2 shadow-lg text-white rounded-2xl active:scale-95 cursor-pointer'>Proceed To CheckOut</button>
        </div>
        <div className='flex flex-col gap-2'>
            <p>If you have a promo code, Enter it here</p>
            <div>
                <input className='w-60 border-1 border-bg-gray bg-gray-300 p-2 rounded-2xl' type='text' placeholder='Promo Code'></input>
                <button className='border-none active:scale-95 active:bg-gray-600 cursor-pointer bg-black text-white p-2 rounded-2xl ml-[-25px]'>Submit</button>
            </div>
        </div>
       </div>
    </div>
  )
}

export default CartItems
