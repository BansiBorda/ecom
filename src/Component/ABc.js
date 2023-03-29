import React from 'react'
import Cart from './Cart';
import ProductsList from './ProductsList';
import { useState } from 'react';


const ABc = () => {
    const[cart,setcart]=useState([]);
  const addTocart = (product)=>{
    setcart((prevcart) => [...prevcart,product]);
  };

  const removeitem = (productid) =>
  {
    setcart((prevcart) => prevcart.filter((item)=> item.id !== productid))
  }
  return (
    <div className="">
    <ProductsList addTocart={addTocart}/>
    <Cart cart={cart} removeitem={removeitem}/>
    </div>
  )
}

export default ABc
