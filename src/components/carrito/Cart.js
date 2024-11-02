import React, { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';


function Cart() {

    useEffect(() => {
        window.scrollTo(0, 0); // Desplazar la página hacia arriba cuando se carga
    }, []);

    const { cart, removeFromCart, clearCart, calculateTotal, formatPrice  } = useContext(CartContext);

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
    };

    const handleClearCart = () => {
        clearCart();
    };

    

    return (
        <div className="container">
            <h2>Carrito de Compras</h2>
            {cart.length === 0 ? (
                <p>Tu carrito está vacío</p>
            ) : (
                <div>
                    <div className="row">
                        {cart.map((product) => (
                            <div key={product.id} className="col-md-3 mb-4">
                                <div className="card text-center h-100">
                                    <img src={product.imagen} className="card-img-top" alt={product.nombre} />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.nombre}</h5>
                                        <p className="card-text">Precio: ${formatPrice(product.precio)}</p>
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={() => handleRemoveFromCart(product.id)}
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="d-flex justify-content-end mb-4">
                        <button className="btn btn-danger me-3" onClick={handleClearCart}>
                            Vaciar carrito
                        </button>
                        <Link to="/pasarela"><button className="btn btn-success me-3">
                            PAGAR
                        </button></Link>
                        <h4>Total: ${formatPrice(calculateTotal())} COP</h4>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;