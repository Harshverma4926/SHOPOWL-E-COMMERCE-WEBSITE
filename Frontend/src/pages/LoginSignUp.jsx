import React from 'react'

const LoginSignUp = () => {
  return (
    <div className='border-2 rounded-2xl w-120 h-120 ml-130 mt-10 p-5 shadow-lg '>
      <div className='mt-5'>
        <h1 className='text-3xl'>Login In</h1>
        <div className='flex flex-col gap-3 mt-5 '>
            {/* <input className='border-1 rounded-2xl border-gray-400 p-2' type='text' placeholder='Your Name'></input> */}
          <input className='border-1 rounded-2xl border-gray-400 p-2' type='email' placeholder='Email Address'></input>
          <input className='border-1 rounded-2xl border-gray-400 p-2' type='password' placeholder='password'></input>
        </div>
        <button className='border-none rounded-2xl bg-red-500 active:bg-red-400 active:scale-95 cursor-pointer text-white text-xl w-full mt-3 p-2'>Continue</button>
        <p className='text-[14px] mt-2 ml-1'>Already have an Account? <span className='text-red-600 cursor-pointer select-none'>Login In</span></p>
        <div className='flex flex-row text-[14px] mt-4 gap-1'> 
          <input type='checkbox' name='' id=''></input>
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp
