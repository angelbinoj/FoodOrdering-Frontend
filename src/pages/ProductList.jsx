import React, { useState } from 'react'
import Products from '../components/Products';
import { IoIosStar } from 'react-icons/io';
import { IoSearchSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from '../redux/slices/cartSlice';
import { clearFilters, filterByCategory, filterByPrice, filterBySearch } from '../redux/slices/productSlice';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const filteredProducts = useSelector(state => state.product.value)
    const showCart = useSelector(state => state.cart.showCart)
    const dispatch = useDispatch()
    
    
    
    return (
        <div className='w-full relative h-full dark:bg-slate-800 lg:pt-20 pb-10 sm:pt-1 sm:pb-0'>
            {showCart && (
                <div className='mx-auto flex justify-center '>
                <div className="fixed z-20 top-20 mt-3 lg:w-2/4 sm:w-full flex justify-center bg-green-100 border text-xl italic border-green-400 text-green-700 px-4 py-2 rounded">
                    Item Added To Cart!<Link to="/cart" className='mx-5 hover:text-green-900 underline  rounded px-4'>View Cart</Link>
                </div>
                 </div>
            )}
            <div className='lg:w-2/4 sm:w-full h-fit mx-auto mt-32 lg:mt-20 border dark:bg-slate-950 dark:border-transparent rounded-lg shadow-2xl'>
                <h1 className='uppercase font-bold py-2 lg:py-1 text-2xl text-center rounded-t-lg bg-orange-500 text-white '>menu</h1>
                <div className=' flex bg-slate-50 border-2 border-slate-500 mx-auto text-center rounded-lg mt-5 w-2/3'>
                    <input className=' p-2 w-full pr-14 border-l-1 border-slate-500 rounded-md bg-slate-50 outline-none ' type="text" placeholder='Search for dishes...' onInput={(e) => dispatch(filterBySearch(e.target.value))}  ></input><IoSearchSharp className='pt-2 pr-1 w-8 h-8 text-slate-500' />
                </div>
                <div className='sm:mx-1 md:ms-6 mt-6 mb-2 flex  gap-2'>
                    <span className='capitalize  pt-2 px-2 text-center rounded-full border-2 text-xs md:text-sm text-black dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700' onClick={() => dispatch(filterByCategory('Pure-Veg'))}>Pure-Veg</span>
                    <span className='capitalize  pt-2 px-2 text-center rounded-full border-2 text-xs md:text-sm text-black dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700' onClick={() => dispatch(filterByCategory('Non-Veg'))}>Non-Veg</span>
                    <span className='capitalize  pt-2 px-2 text-center rounded-full border-2 text-xs md:text-sm text-black dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700' onClick={() => dispatch(filterByPrice("0-200"))} value="0-200">Under ₹200</span>
                    <span className='capitalize  pt-2 px-2 text-center rounded-full border-2 text-xs md:text-sm text-black dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700' onClick={() => dispatch(filterByPrice("200-400"))} value="200-400">₹200 - ₹400</span>
                    <span className={`capitalize cursor-pointer shadow-md p-2 md:p-3 font-semibold rounded-full border-2 text-sm ${filteredProducts === Products ? "bg-white text-slate-400" : "bg-red-50 text-red-600"}`} onClick={() => dispatch(clearFilters())}>Clear Filters</span>
                </div><hr className='mx-5 h-0.5 dark:bg-slate-800 ' />

                {filteredProducts.map((product) => (
                    <div key={product.id} className=" grid sm:grid-cols-[48%_50%]  lg:grid-cols-[68%_28%] xl:grid-cols-[78%_20%] gap-3 sm:p-2 lg:p-5 dark:text-slate-100 shadow-sm border-b-2 rounded-lg z-10 w-full h-fit">
                        <div>
                            <h4 className=" text-lg font-bold text-slate-800 dark:text-slate-100">
                                {product.fudname}
                            </h4>
                            <div className='flex items-center' >₹{product.price}</div>
                            <div className='flex items-center gap-1 my-2 '><IoIosStar className='rounded-full' style={{ background: 'green', color: 'white', padding: '2px', width: '16px', height: '16px' }} />{product.rating}</div>
                            <p className="text-sm font-medium text-slate-600 dark:text-slate-100 capitalize mb-1">
                                {product.fudDescription}</p>
                        </div>
                        <div className="flex justify-end relative shadow-sm w-full  h-fit">
                            <div className='w-fit relative'>

                                <img className="w-40 h-32 object-cover rounded-md" src={product.image} alt="" />
                                <button onClick={(e) => dispatch(addProductToCart(product))} className='text-green-500 bg-white absolute top-[85%] left-[25%] w-20 py-1 px-3 rounded-md  border border-green-500 hover:bg-green-100 hover:text-green-700'>ADD</button>
                            </div>

                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductList