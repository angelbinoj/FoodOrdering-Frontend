import React, { useState } from 'react'
import emptyCart from '../assets/emptyCart.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { clearCart } from '../redux/slices/cartSlice';

const Cart = () => {

  const cartItems = useSelector(state => state.cart.value)
 
  const [showAlert, setShowAlert] = useState(false);

const Navigate = useNavigate();


  const handlePlaceOrder = () => {
    
    const storedData = localStorage.getItem('checkoutData');
    
    if (storedData) {
      
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
      
      localStorage.removeItem('checkoutData');
    } else {
      
      Navigate('/signIn', { state: { fromCart: true } });
    }
     
  
  };

  const navigate = useNavigate();
  const goToProductList = () => {
    navigate('/productlist');
  };


  const [TotalPrice, setTotalPrice] = useState({});

  function updateTotal(price, index) {
    setTotalPrice((prev) => ({ ...prev, [index]: price }))
  }

 const totalPrice = Object.values(TotalPrice).reduce((total, productPrice) =>
    total + productPrice, 0)
const TotalAmt= totalPrice + 30;

  const dispatch = useDispatch()
  return (

    <div className='p-2 dark:bg-slate-950 dark:text-white'>
  {cartItems.length === 0 ? (
    <div className='flex flex-col text-center justify-center items-center pt-40 mb-20 gap-1'>
      <img className='w-1/3 ' src={emptyCart} alt='Empty Cart'></img>
      <h2 className='font-bold text-lg mt-4 '>Your cart is empty</h2>
      <p>You can go to home page to view more restaurants</p>
      <button className='mt-4 p-2 rounded bg-[#eb6420] text-white font-bold'>
        <Link to="/"> View Restaurants Near You </Link>
      </button>
    </div>
  ) : (
    <div className='flex w-full lg:w-3/4 xl:w-2/4 mx-auto flex-col justify-center items-center pt-36 mb-20 gap-1'>
      <div className='relative w-full '>
        <h1 className='text-3xl text-center font-bold mb-3'>Your <span className='text-orange-500'>Cart</span></h1>
        <button onClick={() => dispatch(clearCart())} className='absolute right-0 top-1 p-2 rounded bg-[#eb6420] hover:bg-[#ff7530] text-white font-bold'>
          Clear Cart
        </button>
      </div>
      <hr className='mx-4 sm:mx-20 w-full h-0 bg-slate-400' />
      <div className='shadow-lg rounded p-3 w-full'>
        {cartItems.map((product, index) => {
          return (
            <div key={index}>
              <CartItem product={product} index={index} price={product.price} totalAmt={updateTotal}/>
            </div>
          )
        })}
        <button onClick={goToProductList} className='w-full text-center text-green-500 dark:text-green-700 hover:bg-slate-50 py-1 border'>
          <span className='text-xl'>+</span> Add More Items
        </button>
      </div>
      <div className='mt-2 border border-slate-50 rounded shadow-xl px-4 w-full '>
        <h4 className='font-semibold text-lg m-3 pt-3'>Cart Total</h4>
        <div className='flex flex-col gap-2 m-3'>
          <div className='flex justify-between'>
            <span className='text-sm'>Item Total</span><span>₹{totalPrice}</span>
          </div>
          <hr className='w-full h-0 bg-slate-400' />
          <div className='flex justify-between'>
            <span className='text-sm'>Free Delivery</span><span>₹0.00</span>
          </div>
          <hr className='w-full h-0 bg-slate-400' />
          <div className='flex justify-between'>
            <span>GST & Other Charges</span><span>₹30.00</span>
          </div>
          <hr className='w-full h-0.5 bg-slate-500' />
          <div className='flex justify-between text-lg font-bold'>
            <span>To Pay</span><span>₹{TotalAmt}</span>
          </div>
        </div>
        
        <button onClick={handlePlaceOrder} className='w-full rounded my-1 uppercase bg-green-500 hover:bg-green-400 text-white text-center py-1 text-xl font-semibold'>
          Place Order
        </button>
        {showAlert && (
        <div className="my-2 bg-green-100 border text-center border-green-400 text-green-700 px-4 py-2 rounded">
          Order Placed Successfully!
        </div>
      )}
      </div>
    </div>
  )}
</div>



  )
}


export default Cart