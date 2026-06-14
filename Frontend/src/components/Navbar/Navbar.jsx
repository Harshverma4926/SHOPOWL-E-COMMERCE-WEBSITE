import React, { useContext, useState } from 'react'
import {ShoppingCart} from 'lucide-react'
import { Link } from 'react-router-dom'
import { ShopContext } from '@/context/ShopContext'




const Navbar = () => {
    const [menu, setmenu] = useState("shop")
    const {getTotalCartItems}=useContext(ShopContext)
  return (
    <div className='flex flex-row gap-50 shadow-[0_4px_6px_rgba(0,0,0,0.1)] h-20 position-fixed'>
      <div className='flex flex-row gap-5 ml-50 mt-5 items-center mb-4'>
        <img className='h-12 w-12' src='https://imgs.search.brave.com/IZKh5rs0HBVT1Z3NsaiCJUh42cZxcaM5AlfLImY2iZo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjQv/MDk1LzQwMi9zbWFs/bC9zaG9wcGluZy1i/YWdzLWNvbW1lcmNl/LWZyZWUtcG5nLnBu/Zw' alt=''></img>
        <p className='font-(family-name:Iosevka Charon Mono) text-2xl font-[Iosevka Charon] cursor-pointer'>SHOPOWL</p>
      </div>
      <div className='flex flex-row items-center ml-20 mb-4'>
        <ul className='flex flex-row gap-10 mt-4'>
            <li className='cursor-pointer flex flex-col active:scale-85 select-none' onClick={() => setmenu("shop")}><Link to='/' >Shop</Link>{menu === "shop"?<hr className='bg-red-500 h-[3px] border-none rounded-full'/>:<></>}</li>  
            <li className='cursor-pointer active:scale-85 select-none' onClick={() => setmenu("men")}><Link to='/Mens'>Men</Link>{menu === "men"?<hr className='bg-red-500 h-[3px] border-none rounded-full'/>:<></>}</li>
            <li className='cursor-pointer active:scale-85 select-none' onClick={() => setmenu("women")}><Link to='/Womens'>Women</Link>{menu === "women"?<hr className='bg-red-500 h-[3px] border-none rounded-full'/>:<></>}</li>
            <li className='cursor-pointer active:scale-85 select-none' onClick={() => setmenu("kids")}><Link to='/Kids'>Kids</Link>{menu === "kids"?<hr className='bg-red-500 h-[3px] border-none rounded-full'/>:<></>}</li>
        </ul>
      </div>
      <div className='flex flex-row mt-4 items-center ml-25 gap-5 mb-4'>
        <Link to='/login'>
          <button className='border-1 select-none rounded-full p-1.5 w-18 active:scale-95 shadow-[0_8px_32px_rgba(31,38,135,0.37)] border-2 cursor-pointer active:bg-gray-200'>Login</button>
        </Link>
       <Link to='/cart'>
          <div className='cursor-pointer select-none active:scale-85'><ShoppingCart size={35} strokeWidth={1} /></div>
        </Link>
        <div className='mt-[-25px] ml-[-30px] border-none rounded-full flex items-center bg-red-500 justify-center  text-white w-4 h-4'>{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
