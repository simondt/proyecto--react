import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './Cart.css'

export const Cart = () => {
    const { listaCarrito, removeItem, clear } = useContext(CartContext)
    return (
        <div className="carrito">
            <button className='btn btn-danger' onClick={()=>clear()}>Limpiar carrito</button>
            <ul className='cartList'>
                {
                    listaCarrito.map(item => (
                        <li key={item.id}>
                            <div className="card" >
                                <img src={item.imgUrl} className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">{item.titulo}</h5>
                                    <p className="card-text">Cantidad: {item.quantity}</p>
                                    <p className="card-text">Total: ${item.precio*item.quantity}</p>
                                    <button className='btn btn-danger' onClick={()=>removeItem(item.id)}>Quitar del carrito</button>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}