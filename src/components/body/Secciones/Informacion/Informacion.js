import {React, useEffect} from 'react';
import './Informacion.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import proteccion from './img/proteccion.png';
import nequi from './img/nequi-2.svg';
import paypal from './img/paypal-3.svg';
import master from './img/mastercard-4.svg';
import buenprecio from './img/mejor-precio.png';

function Informacion() {

    useEffect(() => {
        window.scrollTo(0, 0); // Desplazar la página hacia arriba cuando se carga
    }, []);


    return (
        <div>
            <div className='divSeccion'>
                <div className="container text-center">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 g-lg-3">
                        <div className="col">
                            <div className="p-3">
                                <div className='container'>
                                    <h1 className='text-center mb-4'>Seguro y rápido</h1>
                                    <p>Envíos a todo Colombia de manera segura</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img src={proteccion} alt="Protección"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3">
                                <div className='container'>
                                    <h1 className='text-center mb-4' >Métodos de pago</h1>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item" >
                                            <img id='nequi' src={nequi} alt="Nequi"></img>
                                        </li>
                                        <li className="list-group-item"><img id='paypal' src={paypal} alt="Nequi"></img></li>
                                        <li className="list-group-item"><img id='mastercard' src={master} alt="Nequi"></img></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3">
                                <div className='container'>
                                    <h1 className='text-center mb-4'>Mejores precios</h1>
                                    <p>Encuentra tu celular de preferencia con caracteristicas únicas a buen precio.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img src={buenprecio} alt="Buen precio"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Informacion;
