import React, { useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getItemById } from "../../Helpers/Items";
import ItemCount from "../ItemCount/ItemCount";
import { Items } from "../../Helpers/Items";
import { CartContext } from "../Context/CartContext";
import "./Item.css";

const Item = () => {
  const { itemId } = useParams();
  const product = getItemById(itemId);
  //EJEMPLO UTILIZANDO HOOK CON FETCH PARA TRAER LOS ITEMS
  /*
        const location = useLocation()
        const product = location.state.item
    */
  const { agregarProducto } = useContext(CartContext);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems:"center"}}>
        {/* <img src={product.url} alt={product.title} /> */}
        <article className="e-card">
          <header className=".e-card-header">
            <h2>{product.title}</h2>
          </header>
          <picture>
            <img src={product.img} className="ItemImg" />
          </picture>
          <section style={{ display: "flex", flexDirection: "column", justifyContent: "center" , alignItems:"center"}}>
            <p>Stock disponible: {product.stock}</p>
            <p>{product.descripcion}</p>
            <p>Precio: $ {product.precio}</p>
          </section>

          <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("cantidad agregada", quantity)} />
        </article>
        {/* {/* <button style={{
          backgroundColor:"red",
          color:"white",
          borderRadius:"5px",
          padding:"10px",
          cursor:"pointer",
          border:"none",
          margin:"10px"
        }} onClick={() => agregarProducto(oldData => [...oldData, product ] )}>Agregar al Cart</button> */}
      </div>
    </>
  );
};

export default Item;
