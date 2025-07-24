import React from 'react'
import delivery from '../assets/delivery.png';
import signBg6 from '../assets/signBg6.png';
const About = () => {
    return (
        <div className='pt-20 w-full  flex flex-col items-center'>
            <div className='pt-20 bg-gradient-to-t from-[#fff7f4] to-[#fffefe] h-fit flex flex-col items-center text-center'>
                <h1 className=' uppercase font-bold text-4xl'>about us</h1>
                <p className='mt-4 px-60 text-slate-600 text-xl'>FoodNest is a new-age consumer-first organization offering an easy-to-use convenience platform, accessible through a unified app.</p>
                <iframe className='my-14 rounded-md' width="653" height="320" src="https://www.youtube.com/embed/dibap6rRVpk" title="Deliveroo Plus - Unlimited free delivery of anything!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop;" referrerpolicy="strict-origin-when-cross-origin" autoplay allowfullscreen></iframe>
            </div><hr className='bg-slate-400 w-5/6 h-0.5' />
            <div className='bg-[#fffefe] px-20 w-full h-fit flex flex-col'>
                <h1 className='pt-5 uppercase text-center font-bold text-3xl text-slate-700'>industry pioneer</h1>
                <div className='grid sm:grid-cols-1 lg:grid-cols-2 w-full h-full '>
                    <div className='px-auto pt-14 text-lg text-slate-600'><p>Being among the first few entrants, FoodNest has successfully pioneered the hyperlocal commerce industry in India, launching Food Delivery in 2014 and Quick Commerce in 2020. Due to the pioneering status of Swiggy, it is well-recognised as a leader in innovation in hyperlocal commerce and as a brand synonymous with the categories it is present in.</p></div>
                    <div className='ps-60'>
                    <img className='w-72 h-72' src={delivery} alt='food delivery' />
                    </div>
                </div>
                <div className=' grid grid-cols-4 h-24 mb-8 '>
                    <span className='border-r-2 text-center pt-4 border-slate-300'>
                        <h2 className='text-green-700 text-3xl font-bold'>3 Billion+</h2><p className='text-slate-600 text-lg'>orders delivered</p>
                    </span>
                    <span className='border-r-2 text-center pt-4 border-slate-300'>
                        <h2 className='text-green-700 text-3xl font-bold'>220k+</h2><p className='text-slate-600 text-lg'>restaurant partners</p>
                    </span>
                   <span className='border-r-2 text-center pt-4 border-slate-300'>
                        <h2 className='text-green-700 text-3xl font-bold'>520k+</h2><p className='text-slate-600 text-lg'>delivery partners</p>
                    </span>
                    <span className='border-r-2 text-center pt-4 border-slate-300'>
                        <h2 className='text-green-700 text-3xl font-bold'>680+</h2><p className='text-slate-600 text-lg'>cities in India</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default About