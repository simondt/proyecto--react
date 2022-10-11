import { useContext, useEffect, useState } from "react"
import './ItemDetail.css'
import { ItemCount } from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

export const ItemDetail = (item) => {
    const [producto, setProducto] = useState([])
    const [promptCarrito, setPromptCarrito] = useState(false)

    const { addItem } = useContext(CartContext)

    const onAdd = (quantityToAdd) => {
        const newProduct = { ...item.producto, quantity: quantityToAdd }
        addItem(newProduct)
        setPromptCarrito(true)
    }


    useEffect(() => {
        try {
            setProducto(item.producto)
        } catch (error) {
            console.log('error')
        }
    }, [item])



    return (
        <div className="itemDetail" >
            <>
                <div><img src={producto.imgUrl} className="card-img-top" alt="..."></img></div>
                <div className="detailText">
                    <h5 className="card-title detailTitle ">{producto.titulo}</h5>
                    <p className="detailDescription">{producto.developer}</p>
                    <p className="detailDescription"><i className="bi bi-calendar"></i> {producto.release}</p>
                    <p className="card-text detailPrice">${producto.precio}</p>
                    <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
                    <Link to='/cart' className={`${promptCarrito ? null : 'invisible'}`}><button className="promptCarrito">Comprar</button></Link>
                </div>
            </>
        </div>
    ) // renderiza la card del item


}