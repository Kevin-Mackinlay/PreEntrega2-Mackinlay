import { createContext, useEffect } from "react";
import { useState} from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log("nuestro carrito");
    console.log(cart);
  }, [cart]);

  

  const eliminarProduct = (id) => {
    const productCart = cart.filter((product) => product.id !== id);
    setCart(productCart);
  };

  const clear = () => {
    setCart([]);
  };

  return <CartContext.Provider value={{ ProductsCart: cart, agregarProduct: setCart, eliminarProduct, vaciarCarrito:clear }}>{children}</CartContext.Provider>;
};
