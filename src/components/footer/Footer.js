import React from 'react';
import logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './FooterStyle.css'


function Footer() {
  return (
    <footer  className='footer text-dark pt-5 pb-4'>
      <div className='container text-center text-md-start text-dark'> 
        <hr className='mb-4' />
        <div className='row justify-content-center text-md-start align-items-center'>
          <div className='col-md-2 mx-auto mt-6 justify-content-center text-center'>
            <img src={logo} alt="Logo de la empresa" className="img-fluid d-block mx-auto" />
          </div>
          <div className='col-md-5 mx-auto mt-3'>
            <h5 className='text-uppercase mb-4 font-weight-bold text-dark'>Nosotros</h5>
            <hr className='mb-4' />
            <p className='text-dark'>En SuperCell, estamos comprometidos con la excelencia en tecnología móvil.</p>
          </div>

          
          <div className='col-md-3 mx-auto mt-3 text-black'>
            <h5 className='text-uppercase mb-4 font-weight-bold'>Contacto</h5>
            <hr className='mb-4' />
            <p><a href='#' className='text-dark me-3 text-decoration-none text-black'><FontAwesomeIcon icon={faInstagram} />{" "} Instagram</a></p>
            <p><a href='#' className='text-dark me-3 text-decoration-none text-black'><FontAwesomeIcon icon={faEnvelope}/>{" "}Correo</a></p>
            <p className='text-decoration-none'><a href='#' className='text-dark text-decoration-none text-black'><FontAwesomeIcon icon={faWhatsapp} />{" "}Whatsapp</a></p>
          </div>
          <hr className='mb-4' />
          <p className='text-center'>Todos los derechos reservados a  {"SuperCell "}
            <a href='#'>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
