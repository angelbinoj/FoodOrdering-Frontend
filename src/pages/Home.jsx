import React, { useState } from 'react';
import Products from '../components/Products';
import { IoIosStar } from 'react-icons/io';
import background from '../assets/background.png';
import { Link } from 'react-router-dom';
import { IoSearchSharp } from 'react-icons/io5';
import { MdPhoneAndroid } from 'react-icons/md';
import { PiVan } from 'react-icons/pi';
import { AiOutlineShop } from 'react-icons/ai';
import { FaRegClock } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { clearFilters, filterByCategory, filterByPrice, filterByRatings, filterBySearch, sortByPrice, sortByTime } from '../redux/slices/productSlice';




const Home = () => {

    const filteredProducts = useSelector(state => state.product.value)
    const dispatch = useDispatch()

    const [selectedOption, setSelectedOption] = useState("");

    const handleSelect = (e) => {
        const selected = e.target.value;
        setSelectedOption(selected);

        if (selected !== "") {
            dispatch(sortByPrice(selected));
        }
    };


    return (
        <>
            <div className=" relative sm:h-[320px] md:h-[500px] w-full overflow-hidden">
                <img src={background} alt="Banner Background"
                    className="absolute inset-0 w-full h-full object-cover blur-none opacity-80 filter sepia-[0.2] contrast-[1.1] brightness-[0.6]" />
                <div className="relative z-10 flex flex-col mt-24 sm:mt-16 md:mt-10 items-center justify-center h-full text-white text-center px-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl  lg:text-5xl font-bold mb-4 drop-shadow-md">Delicious Deals, Delivered Daily</h1>
                    <p className="mb-6 text-base md:text-lg drop-shadow-md">Welcome to FoodyNest! Order now and enjoy seamless delivery.</p>
                    <a href="#restaurantList">
                        <button className="bg-white mb-10 md:mb-0 text-black font-semibold text-sm md:text-base px-6 py-2 rounded-full shadow-md hover:bg-gray-200 transition">
                            View restaurants near you
                        </button>
                    </a>
                </div>
                <div className='w-full absolute bottom-12 mx-auto hidden md:flex flex-wrap justify-center gap-10 text-white px-4 drop-shadow-md'>
                    <span className='text-xs font-semibold drop-shadow-md flex items-center gap-2 uppercase'>
                        <FaRegClock style={{ color: 'white', width: '17px', height: '17px' }} />24/7 delivery
                    </span>
                    <span className='text-xs font-semibold drop-shadow-md flex items-center gap-2 uppercase'>
                        <AiOutlineShop style={{ color: 'white', width: '17px', height: '17px' }} />2500 restaurants
                    </span>
                    <span className='text-xs font-semibold drop-shadow-md flex items-center gap-2 uppercase'>
                        <MdPhoneAndroid style={{ color: 'white', width: '17px', height: '17px' }} />order with app
                    </span>
                    <span className='text-xs font-semibold drop-shadow-md flex items-center gap-2 uppercase'>
                        <PiVan style={{ color: 'white', width: '17px', height: '17px' }} />fast delivery
                    </span>
                </div>
            </div>

            <div className='w-full h-full pt-8 dark:bg-slate-900'>
                <div id="restaurantList" className='px-4 md:px-10 lg:px-40'>
                    <div>
                        <h1 className='font-extrabold text-2xl text-slate-900 dark:text-slate-50'>Restaurants with online food delivery near you</h1>
                        <div className='border-2 mt-3 dark:bg-slate-100 rounded w-full md:w-2/3 flex justify-between'>
                            <input className='p-2 w-full pr-14 border-l-1 border-slate-500 rounded-md outline-none' type="text" placeholder='Search for restaurants and dishes...' onInput={(e) => dispatch(filterBySearch(e.target.value))} />
                            <IoSearchSharp className='pt-2 pr-1 w-8 h-8 text-slate-600' />
                        </div>
                    </div>
                    <div className='my-4 flex flex-wrap gap-3'>
                        <span className="capitalize cursor-pointer shadow-md py-2 px-3 font-semibold rounded-full border-2 text-sm text-slate-700 dark:bg-slate-200">
                            <select
                                value={selectedOption}
                                onChange={handleSelect}
                                className="outline-none p-0 bg-white dark:bg-slate-200">
                                <option className='w-fit' value="" disabled hidden>
                                    Sort by
                                </option>
                                <option className='w-fit rounded mb-1' value="asc">Cost: Low to High</option>
                                <option className='w-fit' value="dsc">Cost: High to Low</option>
                            </select>
                        </span>
                        <span className='rating capitalize cursor-pointer shadow-md py-2 px-3 font-semibold rounded-full border-2 text-sm text-slate-700 dark:bg-slate-200 dark:hover:bg-slate-300 hover:bg-slate-50' onClick={() => dispatch(filterByRatings('4'))}>Ratings 4.0+</span>
                        <span className='capitalize cursor-pointer shadow-md py-2 px-3 font-semibold rounded-full border-2 text-sm text-slate-700 dark:bg-slate-200 dark:hover:bg-slate-300 hover:bg-slate-50' onClick={() => dispatch(sortByTime())}>Fast-delivery</span>
                        <span className='capitalize cursor-pointer shadow-md py-2 px-3 font-semibold rounded-full border-2 text-sm text-slate-700 dark:bg-slate-200 dark:hover:bg-slate-300 hover:bg-slate-50' onClick={() => dispatch(filterByCategory('Pure-Veg'))}>pure-veg</span>
                        <span className='capitalize cursor-pointer shadow-md py-2 px-3 font-semibold rounded-full border-2 text-sm text-slate-700 dark:bg-slate-200 dark:hover:bg-slate-300 hover:bg-slate-50' onClick={() => dispatch(filterByCategory('Non-Veg'))}>non-veg</span>
                        <span className='capitalize cursor-pointer shadow-md py-2 px-3 font-semibold rounded-full border-2 text-sm text-slate-700 dark:bg-slate-200 dark:hover:bg-slate-300 hover:bg-slate-50' onClick={() => dispatch(filterByPrice("0-200"))} value="0-200">Less than ₹200</span>
                        <span className='capitalize cursor-pointer shadow-md py-2 px-3 font-semibold rounded-full border-2 text-sm text-slate-700 dark:bg-slate-200 dark:hover:bg-slate-300 hover:bg-slate-50' onClick={() => dispatch(filterByPrice("200-400"))} value="200-400">₹200 - ₹400</span>
                        <span className={`capitalize cursor-pointer shadow-md py-2 px-3 font-semibold rounded-full border-2 text-sm ${filteredProducts === Products ? "bg-white text-slate-400" : "bg-red-50 text-red-600"}`} onClick={() => dispatch(clearFilters())}>Clear Filters</span>
                    </div>
                </div>
                <div className="sm:px-12 md:px-10 lg:px-32 pb-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredProducts.map((product) => (
                        <Link key={product.id} to="productlist" className="flex flex-col dark:bg-slate-200 shadow-lg rounded-lg mt-4 z-10 w-full h-fit transition-all duration-300 hover:scale-95 hover:ease-in">
                            <div className="m-2 overflow-hidden border border-slate-100 shadow-sm rounded-md flex justify-center items-center">
                                <img className="w-full h-36 sm:h-44 object-cover" src={product.image} alt="" />
                            </div>
                            <div className="p-4">
                                <h4 className="text-lg font-bold text-slate-800">
                                    {product.hotelName}
                                </h4>
                                <div className='flex items-center gap-1 '>
                                    <IoIosStar className='rounded-full' style={{ background: 'green', color: 'white', padding: '2px', width: '18px', height: '18px' }} />{product.rating}
                                </div>
                                <p className="text-sm font-medium text-slate-600 capitalize mb-1">
                                    {product.description}
                                </p>
                                <div className='flex justify-between items-center text-slate-600 font-medium'>
                                    {product.location}<span className='text-slate-800 text-sm font-semiold'>{product.time} mins</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </>
    )
}



export default Home