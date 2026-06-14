import React from 'react'
import { ChevronRight } from 'lucide-react';

const BreadCrum = (props) => {
    const {product}=props;
  return (
    <div className='flex flex-row ml-44 mt-2 text-[14px]'>
      HOME<ChevronRight />SHOP<ChevronRight />{product.category}<ChevronRight />{product.name}
    </div>
  )
}

export default BreadCrum
