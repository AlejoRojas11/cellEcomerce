import React from 'react';
import Celulares from '../../products/Celulares';
import DataCelulares from '../../products/DataCelulares';
import './Destacado.css';

function Destacado() {
  // Obtener los productos
  const celularesDestacados = DataCelulares.slice(0, 4).map(item => (
    <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <Celulares item={item}/>
    </div>

  ));

  return (
    <div>
      <hr className='mb-4 container' />
      <div className='divSeccion'>
        <div className='container'>
          <h2 className='text-center' id='h2Destacado'>Destacado en xiaomi...</h2>
        </div>
        <div className='row'>
          {celularesDestacados}
        </div>
      </div>
      <hr className='mb-4 container' />
    </div>
  );
}

export default Destacado;
