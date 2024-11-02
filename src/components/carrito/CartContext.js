import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      return total + parseFloat(item.precio);
    }, 0);
  };

  const formatPrice = (price) => {
    return parseFloat(price).toLocaleString();
  };

  const cartProducts = cart.map((product) => product.nombre);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, calculateTotal, formatPrice, cartProducts  }}>
      {children}
    </CartContext.Provider>
  );
};