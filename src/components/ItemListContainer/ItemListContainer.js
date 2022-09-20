import './ItemListContainer.css'
import {ItemList} from '../ItemList/ItemList'
import {collection, getDocs} from 'firebase/firestore'
import {db} from '../../utils/firebase'
import { useEffect, useState } from 'react'

function ItemListContainer (props){
    const[listaItems, setListaItems] = useState([])
    const {greeting} = props

    
    useEffect(() => {
        const getData = async () => {
            try {
                const query = collection(db,"items") 
                const response = await getDocs(query) // getDocs devuelve una promesa
                const docs = response.docs
                const data = docs.map(doc=>{return {...doc.data(), id:doc.id} })
                setListaItems(data)
            } catch (error) {
                console.log('error')
            }
        }
        getData()
    }, [])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList lista = {listaItems} />
        </div>
    )
}

export default ItemListContainer