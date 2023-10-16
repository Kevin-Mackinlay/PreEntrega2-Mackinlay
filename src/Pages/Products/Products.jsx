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

const [items, setItems] = useState([])


useEffect(() => {
const db = getFirestore();
//PARA USAR EN CASO QUE NECESITE LLAMAR ALGO ESPECIFICO O0 
// const myquery = query(collection(db, 'items'), where("categoria", "==", "ropa"), limit(1))
const itemCollection = collection(db, "Items")
getDocs(itemCollection).then(res => 
 setItems(res.docs.map((doc) => ({ id: doc.id, ...doc.data() } ))))

}, [])


  return (
    //listado de productos
    <>
   
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <h2 style={{ color: "blue" }}>Products</h2>
      </div>
      <div style={{ display: "flex" }}>
        {items.length > 0 ? (
          items.map((item) => {
            return (
              <Link style={styles.Products} key={item.id} state={{ item: item }} to={`/products/${item.id}`}>
                {item.title}
                
                <button style={{backgroundColor:"orange"}}>ver más</button>
              </Link>
            );
          })
        ) : (
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <h2 style={{color:"blue"}} >Cargando...</h2>
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
    flexWrap:"nowrap",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    width: "80%",
    borderRadius: "10px",
    border: "1px solid black",
    margin: "5px",
    padding: "5px",
    cursor: "pointer",
    color: "white",
    textDecoration: "none",
    backgroundColor: "rgba(0, 136, 255 , 0.594)",
  },
 
};