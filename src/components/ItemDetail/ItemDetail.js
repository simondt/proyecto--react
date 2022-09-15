import { useContext, useEffect, useState } from "react"
import placeholder from '../Item/placeholder.jpg'
import './ItemDetail.css'
import { ItemCount } from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"
import { Cart } from "../Cart/Cart"
import { Link } from "react-router-dom"

export const ItemDetail = (item) => {
    const [producto, setProducto] = useState([]) // guarda un placeholder como estado inicial
    const [loading, setLoading] = useState(true)
    const [promptCarrito, setPromptCarrito] = useState(false)

    const { addItem } = useContext(CartContext)

    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(item.producto)
                setLoading(false)
            }, 2000)
        })
    }

    const onAdd = (quantityToAdd) => {
        const newProduct = { ...item.producto, quantity: quantityToAdd }
        addItem(newProduct)
        setPromptCarrito(true)
    }


    useEffect(() => {
        const funcionAsincronica = async () => {
            try {
                const producto = await getItem()
                setProducto(producto)
            } catch (error) {
                console.log('error')
            }
        }
        funcionAsincronica()
    }, []) // ejecuta una funcion asincronica que verifica la promesa de un item



    return (
        <div className="itemDetail" >
            {loading ?
                <>
                    <div><img src={placeholder} className="card-img-top" alt="..."></img></div>
                    <div className="detailText">
                        <h5 className="card-title detailTitle placeholder-glow"><span className="placeholder col-5"></span></h5>
                        <p className="detailDescription placeholder-glow"><span className="placeholder col-6"></span></p>
                        <p className="card-text detailPrice placeholder-glow"><span className="placeholder col-5"></span></p>
                        <span className="placeholder col-5"></span>
                    </div>
                </>
                :
                <>
                    <div><img src={producto.imgUrl} className="card-img-top" alt="..."></img></div>
                    <div className="detailText">
                        <h5 className="card-title detailTitle ">{producto.titulo}</h5>
                        <p className="detailDescription">{producto.titulo} es un videojuego desarrollado por {producto.developer} lanzado en el año {producto.release}</p>
                        <p className="card-text detailPrice">${producto.precio}</p>
                        <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
                        <Link to='/cart' className={`${promptCarrito ? null : 'invisible'}`}><button className="btn btn-dark promptCarrito">Realizar Compra</button></Link>
                    </div>
                </>
            }
        </div>
    ) // renderiza la card del item


}