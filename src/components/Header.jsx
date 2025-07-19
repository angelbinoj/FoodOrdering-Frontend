import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { IoPersonOutline, IoSearchSharp } from 'react-icons/io5'
import { MdContactSupport } from 'react-icons/md'
import { RiInformation2Line } from 'react-icons/ri'

const navLink = [
    {
        url: "",
        text: <div className='flex gap-1 items-center'><RiInformation2Line className='pt-1 w-6 h-6'/>About FoodNest</div>
    },
    {
        url: "",
        text:<div className='flex gap-2 items-center'><IoSearchSharp className='pt-1 w-6 h-6'/>Search</div>
    },
    {
        url: "",
        text: <div className='flex gap-1 items-center'><MdContactSupport className='pt-1 w-6 h-6'/>Contact Us</div>
    },
    {
        url: "",
        text: <div className='flex gap-1 items-center'><IoPersonOutline className=' w-6 h-6'/>Sign In</div>
    },
    {
        url: "",
        text: <div className='flex gap-1 items-center'><FaCartShopping className='w-6 h-6'/>Cart</div>
    }
]

const Header = () => {

    return (
        <header>
            <div className='header bg-[#ffe9d6] w-full pb-2 px-20 grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-[35%_65%] gap-4 border-b-2 shadow-xl z-50'>
                <div className='h-full flex justify-center pr-14 bg-[#fef5ed] border border-transparent rounded shadow-lg'>
                    <div className="relative w-fit">
                        <img className='w-30 h-20' src="src\assets\logo.png" alt="Food Logo" />
                        <h1 className="absolute top-[40%] left-[83%]  text-[#ff8828] text-3xl font-arialrounded font-semibold">
                            Nest
                        </h1>
                    </div>
                </div>
                <div className='h-full text-center flex justify-around items-center ps-8'>
                    {navLink.map((item) => (
                        <a key={item.text} className='font-semibold hover:text-orange-600 px-4 rounded' href={item.url}>{item.text}</a>
                    ))}
                </div>
            </div>
        </header>
    )
}

export default Header