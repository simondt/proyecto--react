import { useEffect, useState } from "react"
import {ItemCount} from '../ItemCount/ItemCount'
import './Item.css'
import placeholder from './placeholder.jpg'
import {Link} from 'react-router-dom'

export const Item = (item) =>{
    const [producto, setProducto] = useState({imgUrl: placeholder, titulo: <span className="placeholder col-5"></span>, precio: <span className="placeholder col-2"></span>}) // guarda un placeholder como estado inicial

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
        <div className="card" >
            <Link to={`/item/${producto.id}`}><img src={producto.imgUrl} className="card-img-top" alt="..."></img></Link>
            <div className="card-body">
                <Link to={`/item/${producto.id}`}><h5 className="card-title placeholder-glow">{producto.titulo}</h5></Link>
                <p className="card-text placeholder-glow">${producto.precio}</p>
            </div>
        </div>
    ) // renderiza la card del item

}

