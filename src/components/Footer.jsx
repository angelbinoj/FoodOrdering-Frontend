import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { TiSocialFacebook, TiSocialLinkedin } from 'react-icons/ti'


const Footer = () => {
    return (
        <div className='m-0 p-5 h-fit dark:bg-[#d1c8c2]'>
    <footer className='bg-[#fdf1ea] dark:bg-slate-950 text-black dark:text-white sm:p-2 lg:p-5 rounded-md flex flex-col gap-3 justify-center items-center'>
        <div className="py-3 pt-5 flex flex-wrap gap-6 font-semibold lg:text-lg md:text-base text-center">
            <a className='hover:text-orange-600' href="/">Home</a>
            <a className='hover:text-orange-600' href="/about">About Us</a>
            <a className='hover:text-orange-600 hidden lg:block'>Affiliate</a>
            <a className='hover:text-orange-600' href="contact">Contact Us</a>
            <a className='hover:text-orange-600 hidden md:block' href="signIn">My Account</a>
            <a className='hover:text-orange-600 hidden lg:block' >Log out</a>
        </div>
        <div className="footer-contact pb-3 flex flex-wrap gap-4 justify-center">
            <p className='pt-2 hover:text-orange-600'><span className='font-semibold'>Contact:</span> <a href="tel:+917902810000">+91 790 281 0000</a></p>
            <a href="mailto:support@evmwheels.com">
                <p className='pt-2 hover:text-orange-600'><span className='font-semibold'>Email:</span> support@FoodNest.com</p>
            </a>
            <div className="social-icons flex gap-3">
                <a href="https://www.facebook.com/swiggy.in/">
                    <TiSocialFacebook className='rounded-full' style={{ background: 'black', color: 'orange', padding: '8px', width: '40px', height: '40px' }} />
                </a>
                <a href="https://www.instagram.com/swiggyindia/?hl=en" target="_blank">
                    <FaInstagram className='rounded-full' style={{ background: 'black', color: 'orange', padding: '10px', width: '40px', height: '40px' }} />
                </a>
                <a href="https://www.linkedin.com/company/swiggy-in/">
                    <TiSocialLinkedin className='rounded-full' style={{ background: 'black', color: 'orange', padding: '8px', width: '40px', height: '40px' }} />
                </a>
            </div>
        </div>

        <div className="footer-privacy-links text-sm flex flex-wrap gap-3 justify-center">
            <a className='hover:text-orange-600' >
                <p>Privacy Policy</p>
            </a> |
            <a className='hover:text-orange-600' >
                <p>Terms & Conditions</p>
            </a> |
            <a className='hover:text-orange-600' >
                <p>Refund Policy</p>
            </a> |
            <a className='hover:text-orange-600' >
                <p>Cancellation Policy</p>
            </a>
        </div>
        <hr className='bg-slate-700 dark:bg-white w-3/4 h-0.5 mx-auto' />
        <div className="footer-policy text-xs px-5 hover:text-orange-600 text-center">
            <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners
                2008-2025 © FoodNest™ Ltd. All rights reserved.</p>
        </div>
    </footer>
</div>

    )
}

export default Footer