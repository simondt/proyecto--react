import { Item } from '../Item/Item'
import './ItemList.css'
export const ItemList = (items) => {
    return (
        <ul className='gameList'>
            {items.lista.map((item)=>{ 
                return(
                    <li key={item.id} className='game'><Item producto={item}/></li>
                )
            })
            }
        </ul>
    ) // renderiza una lista de los items
}