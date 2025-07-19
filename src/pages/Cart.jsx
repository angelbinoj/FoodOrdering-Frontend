import React from 'react'
import emptyCart from '../assets/emptyCart.png';

const Cart=() =>{
  return (
    <div  className='flex flex-col justify-center items-center gap-1'>
        <img src={emptyCart} alt='Empty Cart'></img>
        <h2 className='font-bold text-lg mt-4'>Your cart is empty</h2>
            <p>You can go to home page to view more restaurants</p>
            <button className='mt-4 p-2 rounded bg-[#eb6420] text-white font-bold'>View Restaurants Near You</button>
    </div>
  )
}

export default Cart