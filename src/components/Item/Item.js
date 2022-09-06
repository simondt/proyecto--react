import { useEffect, useState } from "react"
import {ItemCount} from '../ItemCount/ItemCount'
import './Item.css'
import placeholder from './placeholder.jpg'

export const Item = (item) =>{
    const [producto, setProducto] = useState({imgUrl: placeholder, titulo: <span class="placeholder col-5"></span>, precio: <span class="placeholder col-2"></span>}) // guarda un placeholder como estado inicial

    const getItem = () =>{
        return new Promise((resolve, reject) =>{
            setTimeout(()=> {
                resolve(item.producto)
            },3000)
        })
    }
    

    useEffect(()=>{
        const funcionAsincronica = async()=>{
            try{
                const producto = await getItem()
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
                <h5 class="card-title placeholder-glow">{producto.titulo}</h5>
                <p class="card-text placeholder-glow">${producto.precio}</p>
                <ItemCount stock={producto.stock} initial={1} />
            </div>
        </div>
    ) // renderiza la card del item

}

