import React, { useState } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function MainLayout() {
   const [darkMode, setDarkMode] = useState(false);
  return (
   <>
   <div className='h-screen w-full'>

   <Header/>
<div className={darkMode ? 'dark' : ''}>
   <main>
    <Outlet/>
   </main>
   <Footer/>
</div>
   </div>
   </>
  )
}

export default MainLayout