import './ItemCount.css';
import {useContext, useState} from 'react'
import {items} from '../../Helpers/Items'
import { useLocation } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import {ItemDetail} from '../ItemDetail/ItemDetail'

const ItemCount = ({stock, initial, onAdd}) => {
   const [count, setCount] = useState(initial)
  
   
  
   //funcion llamar al agregar producto y lo que agrega sea la variable producto y agrega cantidad
    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if(count > 1) {
            count(count - 1)
        }
    }

    return(
        <div className='contador'>
            <div className='controles'>
                <button className='button' onClick={decrement}>-</button>
                <h4 className='Number'>{count}</h4>
                 <button className='button' onClick={increment}>+</button>

            </div>
            <div className='buttonDos'>
                <button onClick={() => onAdd(count)} disabled={count === 0}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount;