import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { items } from "../../Helpers/Items";
import { CartContext } from "../../Components/Context/CartContext";

const Cart = () => {
  const { productsCarrito, eliminarProduct } = useContext(CartContext);
  const [nombre, setNombre] = useState('kevin')
  const [email, setEmail] = useState('kevin@gmail.com')
  const [numero, setNumero] = useState(15409387)
  const dataBase = getFirestore();
  const ordersCollection = collection(dataBase, "orders");

  const nuevaOrden = () => {
    const total = productsCarrito.reduce((acum, item) => acum + item.precio, 0);
    const orderData = {
      buyer: {
        name: "Carlos",
        number: 15308455,
        email: "carlos@gmail.com",
      },
      items: [...productsCarrito],
      Total: total,
    };

    addDoc(ordersCollection, orderData).then(({ id }) => console.log(id));
  };

  const actualizarOrden = () => {
    const orderDocument = doc(ordersCollection, "3Okqf7N6nrnrEpkqYx6a");
    updateDoc(orderDocument, { total: 3000 });
    console.log("orden actualizada");
  };

  const actualizarOrdenPorLotes = () => {
    const Documento1 = doc(ordersCollection, "3Okqf7N6nrnrEpkqYx6a");
    const Documento2 = doc(ordersCollection, "G5XuXtLjZdqPaOzpRrPv");
    const batch = writeBatch(dataBase);

    batch.update(Documento1, { total: 2000 });
    batch.set(Documento2, {
      buyer: {
        name: "Jose",
        number: 15443335,
        email: "Joses@gmail.com",
      },
    });
    batch.commit();
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <h2>Cart</h2>
      </div>

      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <input type={"text"} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre"></input>
        <input type={Number} onChange={(e) => setNumero(e.target.value)} placeholder="Numero"></input>
        <input type={"text"} onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
      </div>
      <div style={styles.buttonContainer}>
        <button style={styles.Products} onClick={nuevaOrden}>
          Comprar
        </button>
        <button style={styles.Products} onClick={actualizarOrden}>
          Actualizar
        </button>
        <button style={styles.Products} onClick={actualizarOrdenPorLotes}>
          Actualizar
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
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
};
