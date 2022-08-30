import { useEffect, useState } from "react"
import {ItemCount} from '../ItemCount/ItemCount'
import './Item.css'

export const Item = (item) =>{
    const [producto, setProducto] = useState([])

    const obtenerItem = () =>{
        return new Promise((resolve, reject) =>{
            setTimeout(()=> {
                resolve(item.producto)
            },2000)
        })
    }
    

    useEffect(()=>{
        const funcionAsincronica = async()=>{
            try{
                const producto = await obtenerItem()
                setProducto(producto)
            }catch (error){
                console.log('error')
            }
        }
        funcionAsincronica()
    },[]) // ejecuta una funcion asincronica que verifica la promesa de un item



    return(
        <div class="card" >
            <img src={producto.imgUrl} class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">{producto.titulo}</h5>
                <p class="card-text">${producto.precio}</p>
                <ItemCount stock={producto.stock} initial={1}></ItemCount>
            </div>
        </div>
    ) // renderiza la card del item

}

