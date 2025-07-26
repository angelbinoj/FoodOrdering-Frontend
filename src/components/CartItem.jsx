
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../redux/slices/cartSlice';

const CartItem = ({ product }) => {
 
const dispatch=useDispatch()

  return (
    <div className="flex items-center gap-4 border-b p-4">
      <img src={product.image} alt={product.fudname} className="w-20 h-20 object-cover rounded" />
      <div>
        <h4 className="text-lg p-2 font-bold">{product.fudname}</h4>
        <p className="text-sm text-gray-600 p-2">{product.fudDescription}</p>
        <button onClick={()=>dispatch(removeProduct(product.id))} className='mt-4 p-2 rounded bg-[#c81b1b] text-white font-bold'>Remove from cart</button>
      </div>
    </div>
  );
};

export default CartItem;