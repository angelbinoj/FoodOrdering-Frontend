import React from 'react'
import delivery from '../assets/delivery.png';
import gpsBackground from '../assets/gpsBackground.png';
const About = () => {
    return (
        <div className='pt-20 w-full h-full flex flex-col items-center'>
            <div className='pt-10 md:pt-16 relative h-fit flex flex-col items-center text-center dark:bg-slate-800'>
                <img src={gpsBackground} alt="Banner Background"
                    className="absolute inset-0 w-full h-full object-cover blur-none opacity-35 filter sepia-[0.2] contrast-[1.0] brightness-[0.7]" />
                <div className='relative z-10 flex flex-col items-center justify-center h-full text-center pt-5 px-4'>
                    <h1 className='uppercase font-bold text-slate-700 dark:text-slate-50 text-4xl'>About Us</h1>
                    <p className='mt-4 px-4 md:px-60 text-slate-600 dark:text-slate-50 text-sm md:text-lg'>FoodNest is a new-age consumer-first organization offering an easy-to-use convenience platform, accessible through a unified app.</p>
                    <iframe className='w-full h-80 md:w-2/4 my-8 md:h-96' src="https://www.youtube.com/embed/0MySl_pVGlw?loop=1&playlist=0MySl_pVGlw&mute=1" title="Fresh food in 10 mins" frameBorder="0" allow="autoplay" allowFullScreen loop></iframe>
                </div>
            </div>
            <div className='bg-[#fffefe] dark:bg-slate-800 px-4 md:px-20 w-full h-full flex flex-col'>
                <h1 className='pt-5 uppercase text-center font-bold text-3xl text-slate-700 dark:text-slate-50'>Industry Pioneer</h1>
                <div className='grid sm:grid-cols-1 lg:grid-cols-2 w-full h-full'>
                    <div className='text-center px-4 pt-14 text-sm md:text-lg text-slate-600 dark:text-slate-50'>
                        <p>Being among the first few entrants, FoodNest has successfully pioneered the hyperlocal commerce industry in India, launching Food Delivery in 2014 and Quick Commerce in 2020. Due to the pioneering status of Swiggy, it is well-recognised as a leader in innovation in hyperlocal commerce and as a brand synonymous with the categories it is present in.</p>
                    </div>
                    <div className='flex justify-center'>
                        <img className='w-72 h-72' src={delivery} alt='Food Delivery' />
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 h-fit mb-8'>
                    <span className='lg:border-r-2 md:border-r-2 text-center pt-4 border-slate-300'>
                        <h2 className='text-green-700 dark:text-green-500 lg:text-3xl sm:text-xl font-bold'>3 Billion+</h2>
                        <p className='text-slate-600 dark:text-slate-50 lg:text-lg sm:text-sm'>Orders Delivered</p>
                    </span>
                    <span className='lg:border-r-2  md:border-r-2 text-center pt-4 border-slate-300'>
                        <h2 className='text-green-700 dark:text-green-500 lg:text-3xl sm:text-xl font-bold'>220k+</h2>
                        <p className='text-slate-600 dark:text-slate-50 lg:text-lg sm:text-sm'>Restaurant Partners</p>
                    </span>
                    <span className='lg:border-r-2 md:border-r-2 text-center pt-4 border-slate-300'>
                        <h2 className='text-green-700 dark:text-green-500 lg:text-3xl sm:text-xl font-bold'>520k+</h2>
                        <p className='text-slate-600 dark:text-slate-50 lg:text-lg sm:text-sm'>Delivery Partners</p>
                    </span>
                    <span className='text-center pt-4'>
                        <h2 className='text-green-700 dark:text-green-500 lg:text-3xl sm:text-xl font-bold'>680+</h2>
                        <p className='text-slate-600 dark:text-slate-50 lg:text-lg sm:text-sm'>Cities in India</p>
                    </span>
                </div>
            </div>
        </div>

    )
}

export default About