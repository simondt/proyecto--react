import './ItemListContainer.css'
import {ItemList} from '../ItemList/ItemList'

function ItemListContainer (props){
    const {greeting} = props
    const item1 = {id: 1, titulo: 'Dark Souls', stock: 7, precio: 2000, imgUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1x78.jpg'}
    const item2 = {id: 2, titulo: 'Metroid Prime', stock: 5, precio: 5000, imgUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3w4w.jpg'}
    const listaItems = [item1, item2]
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList lista = {listaItems}></ItemList>
        </div>
    )
}

export default ItemListContainer