import React, { createContext, useState } from "react";
import AllProducts from "../assets/AllProducts";


export const ShopContext = createContext(null);

const getDefaultCart=()=>{
    let cart={};
    for(let index=0;index<AllProducts.length+1;index++){
      cart[index]=0;
    }
    return cart;
  }

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

  
  const addToCart = (itemId) => {
  console.log("Adding item:", itemId);

  setCartItems((prev) => ({
    ...prev,
    [itemId]: prev[itemId] + 1,
  }));
};
  const removeFromCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }

  const getTotalCartAmount=()=>{
    let totalAmount=0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        let itemInfo=AllProducts.find((product)=>product.id===Number(item))
        totalAmount+=itemInfo.new_price*cartItems[item];
      }
    }
          return totalAmount

  }

  const getTotalCartItems=()=>{
    let totalItem=0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        totalItem+=cartItems[item];
      }
    }
    return totalItem  
  }

  
   const contextValue = {
    getTotalCartItems,getTotalCartAmount,AllProducts,cartItems,addToCart,removeFromCart
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;