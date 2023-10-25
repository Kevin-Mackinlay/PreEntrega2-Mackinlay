import { createContext, useEffect, useState, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
 

  useEffect(() => {
    console.log("nuestro carrito");
    console.log(cart);
  }, [cart]);

    const agregarProduct = (product, quantity) => {
      const updatedCart = [...cart];
      const existingProductIndex = updatedCart.findIndex((item) => item.id === product.id);

      if (existingProductIndex !== -1) {
        // If the product is already in the cart, update the quantity
        updatedCart[existingProductIndex].quantity += quantity;
      } else {
        // If the product is not in the cart, add it with the given quantity
        updatedCart.push({ ...product, quantity });
      }

      setCart(updatedCart);
    };


  const eliminarProduct = (id) => {
    const productCart = cart.filter((product) => product.id !== id);
    setCart(productCart);
  };

  const clear = () => {
    setCart([]);
  };

  return <CartContext.Provider value={{ ProductsCart: cart, agregarProduct, eliminarProduct, vaciarCarrito:clear }}>{children}</CartContext.Provider>;
};
