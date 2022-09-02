import './ItemListContainer.css'
import {ItemList} from '../ItemList/ItemList'
import {ItemDetailContainer} from '../ItemDetailContainer/ItemDetailContainer'

function ItemListContainer (props){
    const {greeting} = props
    const item1 = {id: 1, titulo: 'Dark Souls', developer: 'From Software', release: 2011, stock: 7, precio: 2000, imgUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1x78.jpg'}
    const item2 = {id: 2, titulo: 'Metroid Prime', developer: 'Retro Studios', release: 2002, stock: 5, precio: 5000, imgUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3w4w.jpg'}
    const item3 = {id: 3, titulo: 'Metal Gear Solid 2', developer: 'Konami', release: 2001, stock: 9, precio: 4000, imgUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co29pl.jpg'}

    const listaItems = [item1, item2, item3]
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList lista = {listaItems}></ItemList>
            <ItemDetailContainer item = {item1}></ItemDetailContainer> 
        </div>
    )
}

export default ItemListContainer