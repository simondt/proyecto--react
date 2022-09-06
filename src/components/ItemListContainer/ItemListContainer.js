import './ItemListContainer.css'
import {ItemList} from '../ItemList/ItemList'
import {listaItems} from '../DataBase/DataBase'

function ItemListContainer (props){
    const {greeting} = props
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList lista = {listaItems} />
        </div>
    )
}

export default ItemListContainer