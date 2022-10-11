import React from 'react';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import './Cart.css'
import { Link } from 'react-router-dom';
import { db } from '../../utils/firebase';
import { collection, addDoc, Timestamp } from "firebase/firestore";

export const Cart = () => {
    const { listaCarrito, removeItem, clear, getTotalPrice } = useContext(CartContext)
    const [idOrder, setIdOrder] = useState("")

    const sendOrder = (e) => {
        e.preventDefault();
        const order = {
            buyer: {
                name: e.target[0].value,
                phone: e.target[1].value,
                email: e.target[2].value
            },
            items: listaCarrito,
            date: Timestamp.fromDate(new Date()),
            total: getTotalPrice()
        }
        const queryRef = collection(db, "orders")
        addDoc(queryRef, order).then(respuesta => setIdOrder(respuesta.id))
        console.log(order)
    }

    return (
        <>
            {listaCarrito.length ?
                <div className="carrito">
                    <ul className='cartList'>
                        {listaCarrito.map(item => (
                            <li key={item.id}>
                                <div className="card cartCard mb-1">
                                    <div className="row g-0">
                                        <div className="col-md-6">
                                            <img src={item.imgUrl} className="img-fluid rounded-start" alt="..."></img>
                                        </div>
                                        <div className="col-md-6 cartCardBody">
                                            <div className="card-body">
                                                <h5 className="card-title">{item.titulo}</h5>
                                                <p className="card-text">Cantidad: {item.quantity}</p>
                                                <p className="card-text">Total: ${item.precio * item.quantity}</p>
                                            </div>
                                            <button className='borrar' onClick={() => removeItem(item.id)}><i className="bi bi-x"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                        <div>
                        <button className='limpiar' onClick={() => clear()}>Limpiar carrito</button>
                        </div>
                    </ul>
                    <div>
                        {idOrder && <div className="card text-light">
                            <div className="card-body confOrden">
                                Pedido realizado. ID: {idOrder}
                            </div>
                        </div>}
                        <form className='orden' onSubmit={sendOrder}>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="exampleInputName1" placeholder='Nombre' />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="exampleInputPhone1" placeholder='Telefono' />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                                <div id="emailHelp" className="form-text">No vamos a compartir tus datos con nadie.</div>
                            </div>
                            <button type="submit" className="btn btn-primary">Realizar pedido</button>
                        </form>
                    </div>
                </div>
                :
                <>
                    <p>El carrito se encuentra vacío</p>
                    <Link to='/'><button className='btn btn-dark'>Volver al inicio </button></Link>
                </>

            }

        </>
    )
}