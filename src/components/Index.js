import React, { useEffect } from "react";
import Header from './header/Header'
import Footer from './footer/Footer'
import Carousel from './carousel/Carousel'
import Destacado from './body/Secciones/Destacado/Destacado'
import Accesorios from './body/Secciones/Accesorios/DestacadoAccesorios'
import Informacion from './body/Secciones/Informacion/Informacion'


function Index() {
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazar la página hacia arriba cuando se carga
  }, []);

  return (
    <div>
        <Header/>
        <Carousel/>
        <Destacado/>
        <Accesorios/>
        <Informacion/>
        <Footer/>

    </div>
  )
}

export default Index