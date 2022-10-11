import { useEffect, useState } from "react"
import './Item.css'
import { Link } from 'react-router-dom'

export const Item = (item) => {
    const [producto, setProducto] = useState([])
    useEffect(() => {
        try {
            setProducto(item.producto)
        } catch (error) {
            console.log('error')
        }
    }, [])
    
    return (
        <div className="card" >               
                <>
                    <Link to={`/item/${producto.id}`}><img src={producto.imgUrl} className="card-img-top" alt="..."></img></Link>
                    <div className="card-body">
                        <Link className="alink" to={`/item/${producto.id}`}><h5 className="card-title">{producto.titulo}</h5></Link>
                        <p className="card-text">${producto.precio}</p>
                    </div>
                </>
            
        </div>
    ) // renderiza la card del item

}

