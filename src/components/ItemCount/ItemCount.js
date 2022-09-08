import { useState } from "react"
import { Link } from "react-router-dom"

export const ItemCount = ({stock,initial,onAdd}) => {
    const [cont, setCont] = useState(initial)

    const sumar = ()=>{
        if(cont<stock){setCont(cont+1)}
    } // verifica si el conteo es menor al stock
    const onRemove = ()=>{
        if(cont>initial){setCont(cont-1)}
    } // verifica si el conteo es mayor al numero de inicio

    return (
        <div>
            <button onClick={onRemove} type="button" className="btn btn-danger">-</button>
            <button type="button" className="btn btn-light" disabled>{cont}</button>
            <button onClick={sumar} type="button" className="btn btn-success">+</button>
            <button onClick={()=>onAdd(cont)} className="btn btn-primary">Agregar</button>
            <Link to='/cart'><button className="btn btn-dark">Ir al carrito</button></Link>
        </div>
    )

}