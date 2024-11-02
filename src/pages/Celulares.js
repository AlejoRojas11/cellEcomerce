import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer' 
import ListaCelulares from '../components/body/Secciones/ListaCelulares/ListaCelulares'
import Informacion from '../components/body/Secciones/Informacion/Informacion'

function Celulares() {
  return (
    <div>
        <Header/>
            <ListaCelulares/>
            <Informacion/>
        <Footer/>

    </div>
  )
}

export default Celulares