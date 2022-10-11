import { useState } from "react"
import { Link } from "react-router-dom"
import './ItemCount.css'

export const ItemCount = ({ stock, initial, onAdd }) => {
    const [cont, setCont] = useState(initial)

    const sumar = () => {
        if (cont < stock) { setCont(cont + 1) }
    } // verifica si el conteo es menor al stock
    const onRemove = () => {
        if (cont > initial) { setCont(cont - 1) }
    } // verifica si el conteo es mayor al numero de inicio

    return (
        <div className="opciones">
            <div>
                <button onClick={() => onAdd(cont)} type="button" className="agregar"> Agregar <i className="bi bi-cart"></i> <span className="badge text-bg-secondary">{cont}</span></button>
            </div>
            <div className="modCantidad">
                <button onClick={sumar} type="button" className="btnMod"><i className="bi bi-caret-up-fill"></i></button>
                <button onClick={onRemove} type="button" className="btnMod"><i className="bi bi-caret-down-fill"></i></button>
            </div>
        </div>
    )

}