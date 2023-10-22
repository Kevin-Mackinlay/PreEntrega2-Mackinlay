import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useItems } from "../../Hooks/useItems";
import { items } from "../../Helpers/Items";
import ItemCount from "../../Components/ItemCount/ItemCount";
import Cart from "../Cart/Cart";
import { collection, doc, getDocs, getFirestore } from "firebase/firestore";

const Products = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "Items");
    getDocs(itemCollection).then((res) => setItems(res.docs.map((doc) => ({ id: doc.id, ...doc.data() }))));
  }, []);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <h2 style={{ color: "black" }}>Products</h2>
      </div>
      <div style={{ display: "flex" }}>
        {items.length > 0 ? (
          items.map((item) => {
            return (
              <Link style={styles.Products} key={item.id} state={{ item: item }} to={`/products/${item.id}`}>
                <h3>{item.title}</h3>
                <img src={item.img} alt={item.title} style={{ width: "120px", height: "120px", borderRadius: "8px" }} />
                <button style={{ backgroundColor: "orange" }}>ver más</button>
              </Link>
            );
          })
        ) : (
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <h2 style={{ color: "black", alignContent: "center" }}>Cargando...</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default Products;

const styles = {
  Products: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    height: "250px",
    width: "100%",
    borderRadius: "10px",
    border: "1px solid black",
    margin: "5px",
    padding: "5px",
    cursor: "pointer",
    color: "white",
    textDecoration: "none",
    backgroundColor: "rgba(6, 47, 212, 0.611)",

    gap: "10px",
  },
};
