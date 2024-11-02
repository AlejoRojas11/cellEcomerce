import React, { useState, useEffect } from 'react';
import logogoogle from './img/logogoogle.svg';
import inicio from './img/datos-del-usuario.png';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './LoginStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import cookies from 'universal-cookie'
// Definir el esquema de validación con Yup
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Ingrese un email válido').required('El email es requerido'),
  password: Yup.string().required('La contraseña es requerida'),
});

function Login() {


  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  

  return (
    <div>
      <Header />
      <div className="container d-flex justify-content-center align-items-center min-vh-100 body" style={{ marginTop: '50px' }}>
        <div className="row border rounded-5 p-3 bg-white shadow box-area">
          {/* Left Box */}
          <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{ background: '#ff7d00' }}>
            <div className="featured-image mb-3">
              <img src={inicio} className="img-fluid" style={{ width: '250px' }} />
            </div>
            <p className="text-white fs-2 text-center" style={{ fontFamily: "'Courier New', Courier, monospace", fontWeight: 600 }}>
              Necesitas verificarte
            </p>
            <small className="text-white text-wrap text-center" style={{ width: '17rem', fontFamily: "'Courier New', Courier, monospace" }}>
              Inicia sesión para una mayor experiencia
            </small>
          </div>
          {/* Right Box */}
          <div className="col-md-6 right-box">
            <div className="row align-items-center">
              <div className="header-text mb-4">
                <h2>Hola, bienvenido</h2>
                <p>Nos alegramos de verte de nuevo.</p>
              </div>
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                }}
                validationSchema={LoginSchema}
                onSubmit={(values) => {
                  console.log(values);

                  fetch("http://localhost:3001/login", {
                    method: 'POST',
                    headers: { "Content-Type": "Application/json", "Acept": "application/json" },
                    body: JSON.stringify(values)
                  })
                    .then(response => {
                      if (response.status === 200) {
                        console.log(values.email)
                        window.location.hash = '/'
                      }
                      else if (response.status === 401) {
                        Swal.fire({
                          title: "Las credenciales ingresadas no son correctas",
                          icon: "error"
                        })
                        window.location.hash = '/login'
                      } else {
                        console.log("Error", response.status)
                      }
                    })
                    .catch(() => 
                    
                    Swal.fire({
                      title: "No se puede iniciar sesión por un problema en el servidor",
                      icon: "error"
                    }),
                      window.location.hash = '/login'
                    )

                }}
              >
                {() => (
                  <Form>
                    <div className='mb-3'>
                      <div className="input-group">
                        <span className="input-group-text">
                          <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        <Field type="email" name="email" className="form-control form-control-lg bg-light fs-6" placeholder="Correo electrónico" />
                      </div>
                      <ErrorMessage name="email" component="div" className="text-danger" />
                    </div>
                    <div className="input-group mb-1">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faLock} />
                      </span>
                      <Field
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        className="form-control form-control-lg bg-light fs-6"
                        placeholder="Contraseña"
                      />
                      <span className="input-group-text" onClick={togglePasswordVisibility}>
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                      </span>
                    </div>
                    <ErrorMessage name="password" component="div" className="text-danger" />
                    <div className="input-group mb-5 d-flex justify-content-between">
                      <div className="form-check">
                        <Field type="checkbox" className="form-check-input" id="formCheck" name="rememberMe" />
                        <label htmlFor="formCheck" className="form-check-label text-secondary">
                          <small>Recuérdame</small>
                        </label>
                      </div>
                      <div className="forgot">
                        <small>
                          <a href="#">¿Olvidaste tu contraseña?</a>
                        </small>
                      </div>
                    </div>
                    <div className="input-group mb-3">
                      <button type="submit" className="btn btn-lg btn-primary w-100 fs-6">
                        Iniciar sesión
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
              <div className="input-group mb-3">
                <button className="btn btn-lg btn-light w-100 fs-6">
                  <img src={logogoogle} style={{ width: '20px' }} className="me-2" />
                  <small>Inicia sesión con Google</small>
                </button>
              </div>
              <div className="row">
                <small>
                  ¿No tienes una cuenta?
                  <Link className="nav-link" to="/signup">
                    <a href="#">Regístrate aquí</a>
                  </Link>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;