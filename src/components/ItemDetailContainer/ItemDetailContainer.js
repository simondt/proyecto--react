import { ItemDetail } from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'

export const ItemDetailContainer = (item) => {
    return (
        <div class="card itemDetailContainer">
            <div class="card-body">
                <ItemDetail producto = {item.item} />
            </div>
        </div >
    )
}