import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { getItemById } from "../../Helpers/Items";
import ItemCount from "../ItemCount/ItemCount";

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
        <div>
          <h2>
            <p>{product.title}</p>
          </h2>
          <h4>Precio $ {product.precio}</h4>
          {/* <img>Image {product.img}</img> */}
          <p>{product.descripcion}</p>
          <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("cantidad agregada", quantity)} />
        </div>
      </div>
    </>
  );
};

export default Item;
