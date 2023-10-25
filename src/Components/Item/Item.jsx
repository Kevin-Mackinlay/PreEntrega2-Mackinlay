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
  //   */
  // const { agregarProduct } = useContext(CartContext);

  // const handleAddToCart = (quantity) => {
  //   agregarProduct(product, quantity);
  // }

const onAdd = (cantidad) => {
  console.log('Compraste ${cantidad} productos')
}
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems:"center"}}>
     
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

          <ItemCount initial={1}  stock={product.stock} onAdd={onAdd} />
        </article>
       
      </div>
    </>
  );
};

export default Item;
