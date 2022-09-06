import { Item } from '../Item/Item'
import './ItemList.css'
import { Link } from 'react-router-dom'
export const ItemList = (items) => {
    return (
        <ul className='gameList'>
            {items.lista.map((item)=>{ 
                return(
                    <li className='game'><Item key={item.id} producto={item}/></li>
                )
            })
            }
        </ul>
    ) // renderiza una lista de los items
}