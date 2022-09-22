import React from 'react';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import './Cart.css'
import { Link } from 'react-router-dom';
import { db } from '../../utils/firebase';
import { collection, addDoc , Timestamp } from "firebase/firestore";

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
        <div className="carrito">
            <ul className='cartList'>
                {listaCarrito.length ?
                    <>
                        <button className='btn btn-danger' onClick={() => clear()}>Limpiar carrito</button>
                        {listaCarrito.map(item => (
                            <li key={item.id}>
                                <div className="card" >
                                    <img src={item.imgUrl} className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.titulo}</h5>
                                        <p className="card-text">Cantidad: {item.quantity}</p>
                                        <p className="card-text">Total: ${item.precio * item.quantity}</p>
                                        <button className='btn btn-danger' onClick={() => removeItem(item.id)}>Quitar del carrito</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                        {idOrder && <div className="card">
                            <div className="card-body">
                                Orden realizada! ID: {idOrder}
                            </div>
                        </div>}
                        <form onSubmit={sendOrder}>
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
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </>
                    :
                    <>
                        <p>El carrito se encuentra vacío</p>
                        <Link to='/'><button className='btn btn-dark'>Volver al inicio </button></Link>
                    </>

                }
            </ul>
        </div>
    )
}