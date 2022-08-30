import { useState } from "react"

export const ItemCount = (props) => {
    const [cont, setCont] = useState(props.initial)

    const onAdd = ()=>{
        if(cont<props.stock){setCont(cont+1)}
    } // verifica si el conteo es menor al stock
    const onRemove = ()=>{
        if(cont>props.initial){setCont(cont-1)}
    } // verifica si el conteo es mayor al numero de inicio

    return (
        <div>
            <button onClick={onRemove} type="button" class="btn btn-danger">-</button>
            <button type="button" class="btn btn-light" disabled>{cont}</button>
            <button onClick={onAdd} type="button" class="btn btn-success">+</button>
            <button class="btn btn-primary">Agregar</button>
        </div>
    )

}