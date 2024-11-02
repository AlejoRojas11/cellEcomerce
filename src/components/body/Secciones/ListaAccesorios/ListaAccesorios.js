import React, { useEffect } from "react";
import Accesorios from '../../products/Accesorios'
import DatosAccesorios from '../../products/DataAccesorios'
import './ListaAccesorios.css'

function ListaAccesorios() {

  useEffect(() => {
    window.scrollTo(0, 0); // Desplazar la página hacia arriba cuando se carga
  }, []);

  const DataAccesorios = DatosAccesorios.map(item => (
    <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <Accesorios item={item}/>
    </div>
  ));
  


  return (
    <div>
      <div className='divSeccion'>
        <div className='container'>
          <h2 className='text-center' id='h2Destacado'>Accesorios</h2>
        </div>
        <div className='row'>
          {DataAccesorios}
        </div>
      </div>
      <hr className='mb-4 container' />
    </div>
  )
}

export default ListaAccesorios
