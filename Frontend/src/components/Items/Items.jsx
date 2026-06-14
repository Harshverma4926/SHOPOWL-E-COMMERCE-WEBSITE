import React from 'react'
import { Link } from 'react-router-dom';

const Items = (props) => {
  return (
    <div className='active:scale-98 mt-[-75px] border-2 p-3 rounded-2xl cursor-pointer w-[250px] shadow-[0_8px_32px_rgba(31,38,135,0.37)]'>
      <div>
        <Link to={`/product/${props.id}`}><img className='w-60 h-80 rounded-2xl' onClick={window.scrollTo(0,0)} src={props.image} alt={props.name} /></Link>
        <p className='w-50 ml-2'>{props.name}</p>
      </div>
      <div className='flex flex-row gap-2 mt-1 ml-2 text-xs'>
        <div>
            ₹{props.new_price}
        </div>
        <div className='line-through text-gray-500'> 
            ₹{props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Items
