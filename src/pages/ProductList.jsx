import React, { useState } from 'react'
import Products from '../components/Products';
import { IoIosStar } from 'react-icons/io';
import { IoSearchSharp } from 'react-icons/io5';

const ProductList = () => {
          const [filteredProducts, setFilteredProducts] = useState(Products);
          const [searchTerm, setSearchTerm] = useState("");
          const[cartItem,setcartItem]=useState("");

          function searchProducts(value) {
        setSearchTerm(value);
        const filtered = Products.filter((product) =>
          product.fudname.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredProducts(filtered);
      }
 
  function handleAddToCart(product) {
    setcartItem([...cartItem,product]);
    const Items=[...cartItem,product]
    console.log("updated cart",[...cartItem,product]);
    
  }

    return (
        <div className='w-full h-full pt-20'>

            <div className='w-2/4 h-fit mx-auto mt-20 border rounded-lg shadow-2xl mb-10'>
                <h1 className='uppercase font-bold py-1 text-2xl text-center rounded-t-lg bg-orange-500 text-white '>menu</h1>
               <div className=' flex bg-slate-50 border-2 border-slate-500 mx-auto text-center rounded-lg mt-5 w-2/3'> <input className=' p-2 w-full pr-14 border-l-1 border-slate-500 rounded-md bg-slate-50 outline-none ' type="text" placeholder='Search for dishes...' value={searchTerm} onInput={(e) => searchProducts(e.target.value)}  ></input><IoSearchSharp className='pt-2 pr-1 w-8 h-8 text-slate-500'/></div>


                {filteredProducts.map((product) => (
                    <div key={product.id} className="flex gap-3 p-5 shadow-sm border-b-2 rounded-lg z-10 w-full h-fit">
                        <div>
                            <h4 className=" text-lg font-bold text-slate-800">
                                {product.fudname}
                            </h4>
                            <div className='flex items-center gap-1 '><IoIosStar className='rounded-full' style={{ background: 'green', color: 'white', padding: '2px', width: '18px', height: '18px' }} />{product.rating}</div>
                            <p className="text-sm font-medium text-slate-600 capitalize mb-1">
                                {product.fudDescription}</p>
                        </div>
                        <div className=" relative shadow-sm w-fit h-fit">
                            <img className="w-40 h-32 object-cover rounded-md" src={product.image} alt="" />
                                <button onClick={(e)=>handleAddToCart(product)} className='text-green-500 bg-white absolute top-[85%] left-[25%] w-20 py-1 px-3 rounded-md  border border-green-500 hover:bg-green-100 hover:text-green-700'>ADD</button>
                            
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default ProductList