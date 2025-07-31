import React from 'react'
import foodmix from '../assets/foodmix.png';
import chicken from '../assets/chicken.png';
import { TiSocialFacebook, TiSocialLinkedin } from 'react-icons/ti';
import { FaInstagram } from 'react-icons/fa6';

const Contact = () => {
    return (
        <div className='pt-20 w-full bg-[#fff3f0] dark:bg-slate-950 dark:text-white grid sm:grid-cols-1 md:grid-cols:1 lg:grid-cols-[60%_40%]'>
            <div className='w-screen lg:w-full'>
                <div className='mx:5 md:mx-32 pt-20 px-5 md:px-0 pb-10 flex flex-col gap-5 '>
                    <h1 className=' sm:text-center md:text-start  text-4xl md:text-5xl font-bold mb-3'>Customer Support</h1>
                    <h4 className='text-xl font-semibold'>Email: <span className='text-[#eb6420]'>support@FoodNest.com</span></h4>
                    <h4 className='text-2xl font-bold'>Find us on</h4> <div class="social-icons ms-3 flex gap-3">
                        <a href="https://www.facebook.com/swiggy.in/">
                            <TiSocialFacebook className='rounded-full' style={{ background: 'black', color: 'orange', padding: '8px', width: '35px', height: '35px' }} />
                        </a>
                        <a href="https://www.instagram.com/swiggyindia/?hl=en" target="_blank">
                            <FaInstagram className='rounded-full' style={{ background: 'black', color: 'orange', padding: '10px', width: '35px', height: '35px' }} />
                        </a>
                        <a href="https://www.linkedin.com/company/swiggy-in/"><TiSocialLinkedin className='rounded-full' style={{ background: 'black', color: 'orange', padding: '8px', width: '35px', height: '35px' }} />
                        </a>
                    </div>
                    <h4 className='text-2xl font-bold'>Corporate Office</h4>
                    <p>No. 55, Sy No. 8-14, Ground Floor, I & J Block, Embassy TechVillage, Outer Ring Road, Devarbisanahalli, Bengaluru 560 103, Karnataka, India, Corporate Identity Number: L74110KA2013PLC096530 Registration Number: 096530</p>
                </div>


                <div><img className='lg:ms-5 sm:mx-auto lg:w-80 lg:h-56 sm:w-64 sm:h-36' src={foodmix} alt="foodmix"></img></div>
            </div>
            <div className='py-20 s flex lg:justify-between sm:justify-center w-screen lg:w-full'>
                <div className="p-8 w-2/3 h-fit border-2 border-white rounded-md shadow-2xl bg-[#fbf1f1]">
                    <h2 className='text-3xl font-bold  dark:text-slate-950 font-arialrounded mb-5'>Get in touch</h2>
                    <form action="" className='flex flex-col gap-5'>
                        <div>
                            <input className='p-3 w-full border rounded shadow-lg' id="username" type="text" placeholder="Enter your name" pattern="capital" required />
                        </div>
                        <div>
                            <input className='p-3 w-full border rounded shadow-lg' id="email" type="email" placeholder="Enter your email" required />
                        </div>
                        <div>
                            <textarea className='p-3 w-full border rounded shadow-lg' rows={5} placeholder="Type something" ></textarea>
                        </div>
                        <hr />
                        <div>
                            <button className="p-2 rounded bg-[#eb6420] text-white hover:bg-[#fa854b]" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                <div><img className=' w-32 h-32 hidden lg:block' src={chicken} alt="chicken"></img></div>
            </div>
        </div>
    )
}

export default Contact