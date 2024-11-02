import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Router from './Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Auth0Provider } from '@auth0/auth0-react';
import { CartProvider } from './components/carrito/CartContext';


  const domain= process.env.REACT_APP_AUTH0_DOMAIN
  const clienteId= process.env.REACT_APP_AUTH0_CLIENT_ID

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
    <Auth0Provider domain={domain} clientId={clienteId} redirectUri={window.location.origin}>
      <Router />
    </Auth0Provider>
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
