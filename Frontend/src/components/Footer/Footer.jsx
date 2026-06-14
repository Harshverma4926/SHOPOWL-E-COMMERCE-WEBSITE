import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-full flex items-center flex-col p-35 gap-4 '>
      <div className='flex flex-row gap-2 items-center'>
        <img className='w-12 h-12' src='https://imgs.search.brave.com/IZKh5rs0HBVT1Z3NsaiCJUh42cZxcaM5AlfLImY2iZo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjQv/MDk1LzQwMi9zbWFs/bC9zaG9wcGluZy1i/YWdzLWNvbW1lcmNl/LWZyZWUtcG5nLnBu/Zw' alt=''></img>
        <p className='text-3xl'>SHOPOWL</p>
      </div>
      <div>
        <ul className='flex flex-row gap-5 font-bold'>
            <li>Company</li>
            <li>Proucts</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </div>
      <div className='flex flex-row gap-4 mt-2'>
        <div>
            <img className='w-6'  src='https://imgs.search.brave.com/ztx-TS4dciAfmGSSSHG4Hb-pjBxJftuTBYHNsu6DndU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzUvSW5z/dGFncmFtLUJsYWNr/LVZlY3Rvci1Mb2dv/LVBORy5wbmc' alt=''></img>
        </div>
        <div>
            <img className='w-6' src='https://imgs.search.brave.com/YQksHZLFFcgbNno86S_3Ujo3AzbcNyDUAEjByTaorAU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzIwL2Q1/LzEyLzIwZDUxMjkw/YjhkNzZmNDllMGZl/NDljMDkyZDgwYmYy/LmpwZw' alt=''></img>
        </div>
        <div>
            <img className='w-6' src='https://imgs.search.brave.com/W4AGqx_ofHfC82OHwBV4eeXIMxqsoEXYTbwSH1wesig/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wNy5o/aWNsaXBhcnQuY29t/L3ByZXZpZXcvOTk5/LzQvOTkxL3doYXRz/YXBwLWNvbXB1dGVy/LWljb25zLW1lc3Nh/Z2UtcGhvbmUtaWNv/bi10ZW1wbGF0ZS1k/b3dubG9hZC10aHVt/Ym5haWwuanBn' alt=''></img>
        </div>
      </div>
      <div className='flex flex-col items-center gap-2 mt-2'>
        <hr className='h-0.5 bg-black w-270'/>
        <p className='mt-2'>Copyright © 2026 SHOPOWL. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
