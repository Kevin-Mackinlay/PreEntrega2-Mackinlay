import React from "react";

const CartWidget = ({ children }) => {
  // console.log(children);
  return (
    <>
      <div>{children}</div>
      <img src="https://img.freepik.com/vector-premium/icono-carrito-compra_609277-489.jpg?w=2000" alt="icono de carrito" width={100} height={100} />
    </>
  );
};

export default CartWidget;
