import React from 'react'
import Cart from './Cart'
import Navbar from '../header/Header'
import Footer from '../footer/Footer'

function Carrito() {
  return (
    <div>
        <Navbar/>
        <div style={{ padding: '5rem' }}><Cart/></div>
        <Footer/>
        </div>
  )
}

export default Carrito