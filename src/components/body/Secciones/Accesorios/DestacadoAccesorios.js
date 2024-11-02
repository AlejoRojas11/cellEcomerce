import React from 'react';

import DatosAccesorios from '../../products/DataAccesorios';
import './DestacadoAccesorios.css';
import Accesorios from '../../products/Accesorios';

function DestacadoAccesorios() {
  // Obtener los productos
  const DataAccesorios = DatosAccesorios.slice(0, 4).map(item => (
    <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <Accesorios item={item}/>
    </div>

  ));

  return (
    <div>
      <div className='divSeccion'>
        <div className='container'>
          <h2 className='text-center' id='h2Destacado'>Accesorios Destacados</h2>
        </div>
        <div className='row'>
          {DataAccesorios}
        </div>
      </div>
      <hr className='mb-4 container' />
    </div>
  );
}

export default DestacadoAccesorios;
