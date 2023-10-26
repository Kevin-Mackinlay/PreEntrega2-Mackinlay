import React, { useContext, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getItemById } from "../../Helpers/Items";
import ItemCount from "../ItemCount/ItemCount";
import { Items } from "../../Helpers/Items";
import { CartContext } from "../Context/CartContext";
import "./Item.css";

const Item = () => {
  const { itemId } = useParams();
  const product = getItemById(itemId);
  const [cantidadAgregada, setCantidadAgregada] = useState("");
  const onAdd = (cantidad) => {
    setCantidadAgregada(cantidad);
  };

  return (
    <>
      <div style={styles.div}>
        <article className="e-card">
          <header className=".e-card-header">
            <h2>{product.title}</h2>
          </header>
          <picture>
            <img src={product.img} className="ItemImg" />
          </picture>
          <section style={styles.section}>
            <p>Stock disponible: {product.stock}</p>
            <p>{product.descripcion}</p>
            <p>Precio: $ {product.precio}</p>

            {/* {cantidadAgregada === "" ? (
              <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
            ) : (
              <Link to="/cart" style={styles.Link}>
                {" "}
                Terminar Compra
              </Link>
            )} */}
          </section>

          <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
        </article>
      </div>
    </>
  );
};

export default Item;

const styles = {
  div:{
     display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  Link: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "orange",
    width: "150px",
    textDecoration:"none",
    fontWeight:"500"
  },
};
