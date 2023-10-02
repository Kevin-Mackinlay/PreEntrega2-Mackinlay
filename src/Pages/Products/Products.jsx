import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useItems } from "../../Hooks/useItems";
import { items } from "../../Helpers/Items";
import ItemCount from "../../Components/ItemCount/ItemCount";



const Products = () => {
  //EJEMPLO UTILIZANDO HOOK CON FETCH PARA TRAER LOS ITEMS

    // const items = useItems()
    // console.log(items)
  

  return (
    //listado de productos
    <>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <h2>Products</h2>
      </div>
      {items.map((item) => {
        return (
          <div key={item.id} style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <Link /* state={{item: item}} */ to={`/products/${item.id}`}>{item.title}</Link>
         
          </div>
        );
      })}
    </>
  );
};

export default Products;
