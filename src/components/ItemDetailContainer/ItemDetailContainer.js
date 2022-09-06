import { ItemDetail } from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import { useParams } from "react-router-dom"
import {listaItems} from '../DataBase/DataBase'

export const ItemDetailContainer = () => {
    const {id} = useParams()
    const itemResultado = listaItems.find(item => item.id == id) //busca el objeto item en la base de datos
    console.log(itemResultado)
    return (
        <div class="card itemDetailContainer">
            <div class="card-body">
                <ItemDetail producto = {itemResultado} />
            </div>
        </div >
    )
}