import './CartWidget.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext, useState } from 'react';

function CartWidget() {
    const { listaCarrito } = useContext(CartContext)

    const getItemsTotal = () =>{
        let total = 0
        listaCarrito.map(item => total += item.quantity)
        return total
    }

    return (
        <>
        <Link to='/cart' className={`${getItemsTotal()? null : 'invisible'}`}><button id='botonCarrito'><i className="bi bi-cart"> ({getItemsTotal()})</i></button></Link>
        </>
    )

    }

export default CartWidget