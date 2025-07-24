import React from 'react'
import foodmix from '../assets/foodmix.png';
import chicken from '../assets/chicken.png';
import { TiSocialFacebook, TiSocialLinkedin } from 'react-icons/ti';
import { FaInstagram } from 'react-icons/fa6';

const Contact = () => {
    return (
        <div className='pt-20 w-full bg-gradient-to-l from-[#fffcfb] to-[#fff3f0] grid sm:grid-cols-1 md:grid-cols:1 lg:grid-cols-[60%_40%]'>
            <div>
                <div className='mx-32 pt-20 pb-10 flex flex-col gap-5'>
                    <h1 className='text-5xl font-bold mb-3'>Customer Support</h1>
                    <h4 className='text-xl font-semibold'>Email:<span className='text-[#eb6420]'>support@FoodNest.com</span></h4>
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


                <div><img className='bg-[#fff3f0] ps-5 w-80 h-56' src={foodmix} alt="foodmix"></img></div>
            </div>
            <div className='py-20 flex justify-between'>
                <div className="p-8 w-2/3 border-2 border-white rounded-md shadow-2xl bg-[#fbf1f1]">
                    <h2 className='text-3xl font-bold font-arialrounded mb-5'>Get in touch</h2>
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
                <div><img className='bg-[#fffcfb] w-32 h-32' src={chicken} alt="chicken"></img></div>
            </div>
        </div>
    )
}

export default Contact