import React, { useEffect, useState } from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { IoPersonOutline, IoSearchSharp } from 'react-icons/io5'
import { MdContactSupport, MdOutlineHome } from 'react-icons/md'
import { RiInformation2Line } from 'react-icons/ri'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom'
import { FaEllipsisV } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi'

const navLink = [
    {
        url: "/",
        text: <div className='flex items-center'><MdOutlineHome className='w-6 h-6' />Home</div>
    },
    {
        url: "about",
        text: <div className='flex gap-1 items-center'><RiInformation2Line className='pt-1 w-6 h-6' />About FoodNest</div>
    },
    {
        url: "contact",
        text: <div className='flex items-center'><MdContactSupport className='pt-1 w-6 h-6' />Contact Us</div>
    },
    {
        url: "signIn",
        text: <div className='flex gap-1 items-center'><IoPersonOutline className=' w-6 h-6' />Sign In</div>
    },
    {
        url: "cart",
        text: <div className='flex gap-1 items-center'><FaCartShopping className='w-5 h-5  lg:w-6 lg:h-6' />Cart</div>
    }
]

const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    const [isDropdown, setDropdown] = useState(false);
    const toggleDrop = () => {
        setDropdown(!isDropdown);
    };

    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    return (
        <div className='header relative bg-[#ffe9d6] w-full pb-2 md:ps-4 sm:pr-28 md:px-20 grid sm:grid-cols-[80%_20%] md:grid-cols-[50%_50%] lg:grid-cols-[30%_70%] xl:grid-cols-[40%_60%] gap-2 shadow-xl z-50'>
            <div className='h-full  flex justify-center pr-14 bg-[#fef5ed] border border-transparent rounded shadow-lg'>
                <div className="relative w-fit">
                    <img className='w-28 h-20   md:w-30 md:h-20 ' src={logo} alt="Food Logo" />
                    <h1 className="absolute top-[44%] md:top-[40%] left-[83%] text-[#ff8828] text-2xl md:text-3xl font-arialrounded font-semibold">
                        Nest
                    </h1>
                </div>
            </div>
            <div className='h-full text-center flex flex-col  lg:flex-row lg:justify-around sm:justify-between items-center lg:ps-8'>
                <div className='lg:hidden absolute top-8 right-4 md:right-5'>
                    <button onClick={toggleDropdown} className='font-semibold hover:text-orange-600 '>
                        <GiHamburgerMenu className='text-lg lg:text-xl' />
                    </button>
                    {isDropdownOpen && (
                        <div className='absolute h-screen bg-slate-800 text-slate-50 dark:bg-slate-50 dark:text-slate-800 shadow-lg rounded px-5 mt-7 w-80 right-[-600%] z-10'>
                            {navLink.map((item) => (
                                <Link key={item.text} className='block ps-4 py-4 border-b-2 border-slate-600 hover:text-orange-600' to={item.url}>
                                    {item.text}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
                <div className='hidden lg:flex gap-5 '>
                    {navLink.map((item) => (
                        <Link key={item.text} className='font-semibold hover:text-orange-600 xl:px-4 lg:px-1 lg:text-sm xl:text-base rounded' to={item.url}>
                            {item.text}
                        </Link>
                    ))}
                </div>
                <div className='lg:hidden absolute top-8 sm:right-20 md:right-36 lg:right-16'>
                    <Link key={navLink[4].text} className='font-semibold hover:text-orange-600 xl:px-4 lg:px-1 text-xs md:text-sm lg:text-lg rounded' to={navLink[4].url}>
                        {navLink[4].text}
                    </Link>
                </div>
                <div className='absolute right-12 md:right-20 lg:right-7 top-8'>
                    <button onClick={toggleDrop} className='font-semibold hover:text-orange-600'>
                        <FaEllipsisV className='sm:text-base md:text-lg lg:text-xl' />
                    </button>
                    {isDropdown && (
                        <div className='absolute bg-slate-100 shadow-lg rounded  right-1 z-10'>
                            <button onClick={toggleTheme} className="block w-24 text-center m-2 py-1 rounded text-xs bg-gray-700 text-slate-200 hover:bg-gray-600">
                                {theme === 'light' ? '☀️ Light Mode' : '🌙 Dark Mode'}
                            </button>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Header;
