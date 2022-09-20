import { useEffect, useState } from "react"
import './Item.css'
import placeholder from './placeholder.jpg'
import { Link } from 'react-router-dom'

export const Item = (item) => {
    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        try {
            setProducto(item.producto)
            setLoading(false)
        } catch (error) {
            console.log('error')
        }
    }, []) // ejecuta una funcion asincronica que verifica la promesa de un item



    return (
        <div className="card" >
            {loading ?
                <>
                    <img src={placeholder} className="card-img-top placeholder" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title placeholder-glow"><span className="placeholder col-5"></span></h5>
                        <p className="card-text placeholder-glow"><span className="placeholder col-2"></span></p>
                    </div>
                </>
                :
                <>
                    <Link to={`/item/${producto.id}`}><img src={producto.imgUrl} className="card-img-top" alt="..."></img></Link>
                    <div className="card-body">
                        <Link to={`/item/${producto.id}`}><h5 className="card-title">{producto.titulo}</h5></Link>
                        <p className="card-text">${producto.precio}</p>
                    </div>
                </>
            }
        </div>
    ) // renderiza la card del item

}

