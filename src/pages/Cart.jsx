import React, { useState } from 'react'
import emptyCart from '../assets/emptyCart.png';
import { Link } from 'react-router-dom';


const Cart = () => {


  return (
    
    <div className='flex flex-col justify-center items-center pt-36 mb-20 gap-1'>
           <img className='w-1/4' src={emptyCart} alt='Empty Cart'></img>
            <h2 className='font-bold text-lg mt-4'>Your cart is empty</h2>
            <p>You can go to home page to view more restaurants</p>
            <button className='mt-4 p-2 rounded bg-[#eb6420] text-white font-bold'>
              <Link to="/"> View Restaurants Near You </Link>
              </button>
          </div>
  )
}


export default Cart