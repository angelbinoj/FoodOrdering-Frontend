
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../redux/slices/cartSlice';
import { RiDeleteBinLine } from 'react-icons/ri';
import './loader.css';

const CartItem = ({ product, index, totalAmt }) => {
  const [count, setCount] = useState(1);
  const[loading,setLoading]=useState(false)
  const price = (product.price * count);


  useEffect(() => {
    totalAmt(price, index);
  }, [count])

  function increment() {
    setCount(count + 1);
    setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
  }
  function decrement() {
    if (count > 1) {
      setCount(count - 1)

      setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
    }
  }




  const dispatch = useDispatch()

  return (
    <div className="flex flex-cols-2 md:justify-center w-full  items-center gap-1 md:gap-8 p-3 border-b">
      <div className=' sm:w-full' >
        <img src={product.image} alt={product.fudname} className=" w-28 h-20 object-cover rounded" />
      </div>
      <div className='flex flex-col  md:flex-row justify-between'>

        <div className='  w-44 md:w-60'> <h4 className="text-base md:text-lg p-2 font-bold">{product.fudname}</h4></div>
        <div className=' flex justify-end xl:justify-between items-center'>
          <span className='p-3 text-green-700 dark:text-green-500 mr-5 xl:mr-12'>₹{price}</span>
          <span key={product.id} className='w-16 md:w-20 md:px-1 xl:mr-7 h-fit flex items-center gap-1 md:gap-2 rounded bg-[#ff9e53] shadow-sm'>
            <button onClick={() => decrement()} className='text-white mx-1 text-3xl font-semibold'>-</button>
            <span className='text-white text-sm md:text-lg'>{count}</span>
            <button onClick={() => increment()} className='text-white mx-1 text-xl duration-75 hover:scale-110 hover:ease-out font-semibold'>+</button>
          </span>
          <button onClick={() => dispatch(removeProduct(product.id))} className='flex items-center gap-1 shadow-md p-1 text-sm rounded text-[#ff473a] hover:bg-slate-50 ms-2'>Remove<RiDeleteBinLine /></button>
        </div>
      </div>
      {loading && (
        <div className='w-full z-30 h-full  absolute flex flex-col justify-center items-center bg-opacity-80 bg-white dark:bg-opacity-50 dark:bg-black'>
          <span className='load'></span>
          <h1 className='text-green-500 text-2xl '>Updating Cart...</h1>
        </div>
      )}
    </div>
  );
};

export default CartItem;