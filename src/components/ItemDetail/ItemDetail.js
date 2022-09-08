import { useEffect, useState } from "react"
import placeholder from '../Item/placeholder.jpg'
import './ItemDetail.css'
import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = (item) =>{
    const [producto, setProducto] = useState({imgUrl: placeholder, titulo: <span className="placeholder col-5"></span>, precio: <span className="placeholder col-2"></span>, developer: <span className="placeholder col-2"></span>, release: <span className="placeholder col-2"></span>}) // guarda un placeholder como estado inicial


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
        <div className="itemDetail">
            <div><img src={producto.imgUrl} className="card-img-top" alt="..."></img></div>
            <div className="detailText">
                <h5 className="card-title detailTitle placeholder-glow">{producto.titulo}</h5>
                <p className="detailDescription placeholder-glow">{producto.titulo} es un videojuego desarrollado por {producto.developer} lanzado en el año {producto.release}</p>
                <p className="card-text detailPrice placeholder-glow">${producto.precio}</p>
                <ItemCount stock={producto.stock} initial={1} />
            </div>

        </div>
    ) // renderiza la card del item


}