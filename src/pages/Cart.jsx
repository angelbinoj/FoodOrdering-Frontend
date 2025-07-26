import React, { useState } from 'react'
import emptyCart from '../assets/emptyCart.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { clearCart } from '../redux/slices/cartSlice';


const Cart = () => {

  const cartItems = useSelector(state => state.cart.value)

  const dispatch = useDispatch()
  return (

    <div className='p-2'>
      {cartItems.length ===0 ?(
        <div className='flex flex-col justify-center items-center pt-36 mb-20 gap-1'>
          <img className='w-1/4' src={emptyCart} alt='Empty Cart'></img>
        <h2 className='font-bold text-lg mt-4'>Your cart is empty</h2>
        <p>You can go to home page to view more restaurants</p>
        <button className='mt-4 p-2 rounded bg-[#eb6420] text-white font-bold'>
          <Link to="/"> View Restaurants Near You </Link>
        </button>
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center pt-36 mb-20 gap-1'>
       {cartItems.map((product,index)=>{
        return(
          <div>
            <CartItem  product={product} key={index} />
            </div>
        )
       })}

       <button onClick={()=>dispatch(clearCart())} className='mt-4 p-2 rounded bg-[#eb6420] text-white font-bold'
       >Clear Cart</button>
      </div>
      )}
      {/* <img className='w-1/4' src={emptyCart} alt='Empty Cart'></img>
        <h2 className='font-bold text-lg mt-4'>Your cart is empty</h2>
        <p>You can go to home page to view more restaurants</p>
        <button className='mt-4 p-2 rounded bg-[#eb6420] text-white font-bold'>
          <Link to="/"> View Restaurants Near You </Link>
        </button> */}
      {/* 11111111111

      <div className='p-5'>
       {cartItems.map((product,index)=>{
        return(
          <div>
            <CartItem  product={product} key={index} />
            </div>
        )
       })}
      </div>
      <button onClick={()=>dispatch(clearCart())} className='mt-4 p-2 rounded bg-[#eb6420] text-white font-bold'
      >Clear Cart</button> */}
    </div>


  )
}


export default Cart