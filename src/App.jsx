import { useState } from 'react'
import './App.css'
import Header from './components/Header'

import ProductList from './components/ProductList'
import Footer from './components/footer'
import Cart from './pages/Cart'
import Filter from './components/filter'

function App() {

 return (
    <>
      <Header />
      <ProductList/>
      <Cart/>
      <Footer />
      {/* <Filter/> */}
    </>
  )
}

export default App

