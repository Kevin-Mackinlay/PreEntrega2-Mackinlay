import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { getItemById } from "../../Helpers/Items";
import ItemCount from "../ItemCount/ItemCount";
import Items from "../../Helpers/Items"

const Item = () => {
  const { itemId } = useParams();
  const product = getItemById(itemId);
  //EJEMPLO UTILIZANDO HOOK CON FETCH PARA TRAER LOS ITEMS
  /*
        const location = useLocation()
        const product = location.state.item
    */

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        {/* <img src={product.url} alt={product.title} /> */}
        <article className="CardItem">
          <header>
            <h2 className="ItemHeader">{product.title}</h2>
          </header>
          <picture>
            <img style={{width:"200px", height:"200"}} src={product.img}  className="ItemImg" />
          </picture>
          <section>
            <p>Precio $ {product.precio}</p>
            <p>Stock disponible: {product.stock}</p>
          </section>
          <p>{product.descripcion}</p>
          <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("cantidad agregada", quantity)} />
        </article>
      </div>
    </>
  );
};

export default Item;
