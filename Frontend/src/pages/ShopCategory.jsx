import React,{useContext} from 'react'
import { ShopContext } from '@/context/ShopContext';
import Items from '../components/Items/Items';
import {ChevronDown} from 'lucide-react'

const ShopCategory = (props) => {
  const{AllProducts}=useContext(ShopContext);
  return (
    <div>
      <img className='' src={props.banner} alt=''></img>
      <div className='font-bold ml-28 mt-10'>
        <p>Showing 1-12 out of 36 products</p>
        <div className='flex flex-row'>
          Sort by<ChevronDown />
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-y-25   gap-4 items-center ml-25 mt-20">
  {AllProducts
    .filter((item) => item.category === props.category)
    .map((item) => (
      <Items
        key={item.id}
        id={item.id}
        image={item.image}
        name={item.name}
        new_price={item.new_price}
        old_price={item.old_price}
      />
    ))}
</div>
    </div>
  )
}

export default ShopCategory
