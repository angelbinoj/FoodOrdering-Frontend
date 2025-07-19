import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { TiSocialFacebook, TiSocialLinkedin } from 'react-icons/ti'

const Footer = () => {
    return (
        <div className=' m-0 p-5 h-fit'>
            <footer className='bg-[#fdf1ea] p-5 rounded-md flex flex-col gap-3 justify-center items-center'>
                <div class="py-3 pt-5 flex gap-6 font-semibold text-lg text-center">

                    <a className='hover:text-orange-600' href="https://www.evmwheels.com">Home</a>
                    <a className='hover:text-orange-600' href="https://www.evmwheels.com/about_us">About Us</a>
                    <a className='hover:text-orange-600' href="https://www.evmwheels.com/affliate_program">Affiliate</a>
                    <a className='hover:text-orange-600' href="https://www.evmwheels.com/contact">Contact Us</a>
                    <a className='hover:text-orange-600' href="https://www.evmwheels.com/customer_login">My Account</a>
                    <a className='hover:text-orange-600' href="https://www.evmwheels.com/userlogout">Log out</a>
                </div>
                <div class="footer-contact pb-3 flex gap-4">
                    <p className='pt-2 hover:text-orange-600'><span className='font-semibold'>Contact:</span> <a href="tel:+917902810000">+91 790 281 0000</a></p>
                    <a href="mailto:support@evmwheels.com">
                        <p className='pt-2 hover:text-orange-600'><span className='font-semibold'>Email:</span> support@FoodNest.com</p>
                    </a>
                    <div class="social-icons ms-3 flex gap-3">
                <a href="https://www.facebook.com/swiggy.in/">
                <TiSocialFacebook className='rounded-full'  style={{ background: 'black', color:'orange',padding:'8px',width:'40px',height:'40px' }}/>
                </a>
                <a href="https://www.instagram.com/swiggyindia/?hl=en" target="_blank">
                <FaInstagram className='rounded-full'  style={{ background: 'black', color:'orange',padding:'10px',width:'40px',height:'40px' }}/>
                </a>
                <a href="https://www.linkedin.com/company/swiggy-in/"><TiSocialLinkedin className='rounded-full'  style={{ background: 'black', color:'orange',padding:'8px',width:'40px',height:'40px' }}/>
                </a>
            </div>
                </div>

                    <div class="footer-privacy-links text-sm flex gap-3">
                        <a className='hover:text-orange-600' href="https://www.evmwheels.com/privacy">
                            <p>Privacy Policy</p>
                        </a> |
                        <a className='hover:text-orange-600' href="https://www.evmwheels.com/terms">
                            <p>Terms & Conditions</p>
                        </a> |
                        <a className='hover:text-orange-600' href="https://www.evmwheels.com/refundPolicy">
                            <p>Refund Policy</p>
                        </a> |
                        <a className='hover:text-orange-600' href="https://www.evmwheels.com/cancelPolicy">
                            <p>Cancellation Policy</p>
                        </a>
                        
                    </div><hr className='bg-slate-700 w-3/4 h-0.5 mx-auto'/>
                <div class="footer-policy text-xs px-5 hover:text-orange-600">
                    <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners
                        2008-2025 © FoodNest™ Ltd. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer