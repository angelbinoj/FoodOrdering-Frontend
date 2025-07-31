import { useState } from 'react'
import './App.css'
 
import Home from './pages/Home'
import Cart from './pages/Cart'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Contact from './pages/Contact'
import About from './pages/About'
import SignIn from './pages/SignIn'
import ProductList from './pages/ProductList'

function App() {
 
 return (
   <Routes>
    <Route path='/' element={<MainLayout/>} >
    <Route index element={<Home />} />
    <Route path='about' element={<About/>} />
    <Route path='contact' element={<Contact/>} />
    <Route path='signIn' element={<SignIn/>} />
    <Route path='cart' element={<Cart />} />
    <Route path='productlist' element={<ProductList/>} />
    </Route>
   </Routes>

  )
}

export default App

