import './ItemListContainer.css'
import {ItemCount} from './ItemCount'

function ItemListContainer (props){
    const {greeting} = props
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemCount stock={7} initial={1}></ItemCount>
        </div>
    )
}

export default ItemListContainer