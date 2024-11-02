import React from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Index from './components/Index';
import Celulares from './pages/Celulares';
import Accesorios from './pages/Accesorios';
import Contacto from './pages/Contacto/Contacto'
import Login from './pages/LogIn/Login';
import DetalleCelular from './components/body/products/DetalleCelular/DetalleCelular';
import DetalleAccesorio from './components/body/products/DetalleAccesorio/DetalleAccesorio';
import Cart from './components/carrito/Cart';
import Carrito from './components/carrito/Carrito';
import Pasarela from './pages/Pasarela/Pasarela';
import Reporte from './components/reportes/Reporte'
import { useAuth0 } from "@auth0/auth0-react";


function Router() {
  const { user, isAuthenticated } = useAuth0();
  const email = user?.email;
  const adminEmails = ["tortugal2004@gmail.com"];
  const isAdmin = isAuthenticated && adminEmails.includes(email);


  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Index />}/>
        <Route exact path="/celulares" element={<Celulares />}/>
        <Route exact path="/accesorios" element={<Accesorios />}/>
        <Route exact path="/contacto" element={<Contacto/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/pasarela" element={<Pasarela/>}/>
        <Route exact path="/celulares/:id" element={<DetalleCelular/>} />
        <Route exact path="/accesorios/:id" element={<DetalleAccesorio/>} />
        <Route exact path="/cart" element={<Cart />}/>
        <Route exact path="/carrito" element={<Carrito />}/>
        <Route path='/reporte' element={isAdmin ? <Reporte/> : <Navigate to="/" />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;
