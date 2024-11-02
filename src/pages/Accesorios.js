import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import ListaAccesorios from '../components/body/Secciones/ListaAccesorios/ListaAccesorios'
import Informacion from '../components/body/Secciones/Informacion/Informacion'

function Accesorios() {
  return (
    <div>
        <Header/>
            <ListaAccesorios/>
            <Informacion />
        <Footer/>
    </div>
  )
}

export default Accesorios