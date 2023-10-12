import { collection, getFirestore } from "firebase/firestore";
import React from "react";
import { items } from "../../Helpers/Items";

const Cart = () => {
  const crearOrden = () => {
    const order = {
      buyer: {
        name: "Carlos",
        number: 15308455,
        email: "carlos@gmail.com",
      },
      items: [
        { name: "producto 1", price: 1000 },
        { name: "producto 2", price: 1000 },
      ],
      Total: 2000,
    };
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <h2>Cart</h2>
      </div>
      <div style={styles.buttonContainer}>
        <button style={styles.Products} onClick={crearOrden}>
          Comprar
        </button>
      </div>
    </>
  );
};

export default Cart;

const styles = {
  Products: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    width: "20%",
    borderRadius: "10px",
    border: "1px solid black",
    margin: "5px",
    padding: "5px",
    cursor: "pointer",
    color: "white",
    textDecoration: "none",
    backgroundColor: "blue",
  },
  buttonContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center"
  }
};
