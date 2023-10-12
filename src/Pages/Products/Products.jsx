import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useItems } from "../../Hooks/useItems";
import { items } from "../../Helpers/Items";
import ItemCount from "../../Components/ItemCount/ItemCount";
import Cart from "../Cart/Cart";
import {collection,  doc, getDocs, getFirestore } from 'firebase/firestore';




const Products = () => {
  //EJEMPLO UTILIZANDO HOOK CON FETCH PARA TRAER LOS ITEMS

    // const items = useItems()
    // console.log(items)
  


//para un documento a la vez
// const ItemRef = doc(db , 'Items', )
// getDoc(ItemRef).then((documento) => {
// console.log(document.data())
// })

const [items, setItems] = useState()


useEffect(() => {
const db = getFirestore();
const itemCollection = collection(db, "Items")
getDocs(itemCollection).then(res => {
 setItems(res.docs.map((doc) => ({ id: doc.id, ...doc.data() } ))))

}, [])


  return (
    //listado de productos
    <>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <h2>Products</h2>
      </div>
      {items.map((item) => {
        return (
          //agregar mas divs para agregar mas estilos
          <div  key={item.id} style={{ display: "flex", flexDirection: "row", justifyContent: "center", }}>
            { <Link state={{item: item}}  to={`/products/${item.id}`}>{item.title}</Link> }
        
          </div>
        );
      })}
    
    </>
  );
};

export default Products;
