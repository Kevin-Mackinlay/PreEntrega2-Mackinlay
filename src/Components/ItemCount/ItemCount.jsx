import './ItemCount.css';
import {useContext, useState} from 'react'
import {items} from '../../Helpers/Items'
import { useLocation } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)
    const location = useLocation()
    const producto = location.state.item
   const {agregarProduct} = useContext(CartContext)
   //funcion llamar al agregar producto y lo que agrega sea la variable producto y agrega cantidad
    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleAddToCart = () => {
        agregarProduct(producto, quantity);
    };

    return(
        <div className='contador'>
            <div className='controles'>
                <button className='button' onClick={decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                 <button className='button' onClick={increment}>+</button>

            </div>
            <div className='buttonDos'>
                <button onClick={handleAddToCart} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount;