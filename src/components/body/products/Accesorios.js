import { React, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../carrito/CartContext';
import { useAuth0 } from "@auth0/auth0-react";
import Swal from 'sweetalert2/dist/sweetalert2.js';

function Accesorios(props) {

    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

    useEffect(() => {
        window.scrollTo(0, 0); // Desplazar la página hacia arriba cuando se carga
    }, []);


    const { addToCart } = useContext(CartContext);

    const handleLogin = () => {
        loginWithRedirect();
      };


      const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
    
      const handleAddToCart = () => {
        if (isAuthenticated) {
            Toast.fire({
                icon: "success",
                title: `${props.item.nombre} fue añadido a tu carrito`
              });
          addToCart(props.item);
        } else {
          Swal.fire({
            title: "Inicia sesión para comprar",
            showDenyButton: true,
            showCancelButton: false,
            denyButtonColor: "#FF0000",
            confirmButtonColor: "#157347",
            confirmButtonText: "Iniciar Sesión",
            denyButtonText: "Seguir viendo"
          }).then((result) => {
            if (result.isConfirmed) {
              handleLogin();
            }
          });
        }
      };
    return (
        <div className="card mb-2 text-center h-100">
            <img
                src={props.item.imagen}
                className="card-img-top h-100 p-4"
                alt="accesorio"
            />
            <div className="card-body">
                <h5 className="card-title">{props.item.nombre}</h5>
                <p className="card-text">Precio: ${props.item.precio} COP</p>
                <Link to={`/accesorios/${props.item.id}`} className='text-decoration-none'><button type="button" className="btn btn-secondary">Ver más</button></Link>
                <Link className='text-decoration-none m-2'><button
                    type="button"
                    className="btn btn-success m-2"
                    onClick={handleAddToCart}
                >
                    Añadir al carrito
                </button></Link>
            </div>
        </div>
    )
}

export default Accesorios