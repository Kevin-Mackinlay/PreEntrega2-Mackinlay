import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Item from '../Item/Item'


const ItemDetail = ({product}) => {
    const [cantidadAgregada, setCantidadAgregada] = useState('')
    const onAdd = (cantidad) => {
        
        setCantidadAgregada(cantidad)
    }
   

    return (
         <>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems:"center"}}>
     
        <article className="e-card">
          {/* <header className=".e-card-header">
            <h2>{product.title}</h2>
          </header>
          <picture>
            <img src={product.img} className="ItemImg" />
          </picture>
          <section style={{ display: "flex", flexDirection: "column", justifyContent: "center" , alignItems:"center"}}>
            <p>Stock disponible: {product.stock}</p>
            <p>{product.descripcion}</p>
            <p>Precio: $ {product.precio}</p>
          </section> */}
          <Item/>

         { cantidadAgregada === '' ? <ItemCount initial={1}  stock={product.stock} onAdd={onAdd} />
         : <Link to='/cart' className='btn btn-dark'> Terminar Compra</Link>}
        </article>
       
      </div>
      </>
    )
}