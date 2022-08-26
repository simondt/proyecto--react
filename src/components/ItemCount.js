import { useState } from "react"

export const ItemCount = (props) => {
    const [cont, setCont] = useState(props.initial)

    const onAdd = ()=>{
        if(cont<props.stock){setCont(cont+1)}
    }
    const onRemove = ()=>{
        if(cont>props.initial){setCont(cont-1)}
    }

    return (
        <div>
            <div class="card container">
                <div class="card-header">
                    Producto
                </div>
                <div class="card-body">
                    <h5 class="card-title">Titulo</h5>
                    <p class="card-text">Descripcion</p>
                    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button onClick={onRemove} type="button" class="btn btn-danger">-</button>
                        <button type="button" class="btn btn-light" disabled>{cont}</button>
                        <button onClick={onAdd} type="button" class="btn btn-success">+</button>
                    </div>
                    <button class="btn btn-primary">Agregar</button>
                </div>
            </div>
        </div>
    )

}