import { React, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../carrito/CartContext';
import Swal from 'sweetalert2/dist/sweetalert2.js';

function Celulares(props) {
  const { addToCart } = useContext(CartContext);

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
    Toast.fire({
      icon: "success",
      title: `${props.item.nombre} fue añadido a tu carrito`
    });
    addToCart(props.item);
  };

  const handleRedirect = () => {
    if (props.item.link) {
      // Usamos SweetAlert2 para mostrar la ventana de confirmación
      Swal.fire({
        title: `¿Estás seguro de que quieres ir a pagar ${props.item.nombre}?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, ir a pagar',
        cancelButtonText: 'No, regresar',
        reverseButtons: true, // Cambiar el orden de los botones
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = props.item.link; // Redirigir al enlace de pago
        } else {
          console.log('El usuario canceló la acción');
        }
      });
    } else {
      console.error("El enlace para el pago no está definido.");
    }
  };

  return (
    <div className="card mb-2 text-center">
      <img src={props.item.imagen} className="card-img-top" alt={props.item.nombre} />
      <div className="card-body">
        <h5 className="card-title">{props.item.nombre}</h5>
        <h5 className="card-title">{props.item.almacenamiento}</h5>
        <p className="card-text">Precio: ${props.item.precio.toLocaleString('es-CO')} COP</p>
        <Link to={`/celulares/${props.item.id}`} className="text-decoration-none">
          <button type="button" className="btn btn-secondary">
            Ver más
          </button>
        </Link>

        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={() => {
            handleAddToCart(); // Añadir al carrito
            handleRedirect(); // Llamar a la función de redirección
          }}
        >
          Pagar
        </button>
      </div>
    </div>
  );
}

export default Celulares;
