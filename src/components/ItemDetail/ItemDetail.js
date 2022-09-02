import { useEffect, useState } from "react"
import placeholder from '../Item/placeholder.jpg'
import './ItemDetail.css'

export const ItemDetail = (item) =>{
    const [producto, setProducto] = useState("") 

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
        <div class="itemDetail">
            <div><img src={producto.imgUrl} class="card-img-top" alt="..."></img></div>
            <div class="detailText">
                <h5 class="card-title detailTitle">{producto.titulo}</h5>
                <p class="detailDescription">{producto.titulo} es un videojuego desarrollado por {producto.developer} lanzado en el año {producto.release}</p>
                <p class="card-text detailPrice">${producto.precio}</p>
            </div>
        </div>
    ) // renderiza la card del item


}