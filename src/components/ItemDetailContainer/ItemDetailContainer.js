import { ItemDetail } from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import { useParams } from "react-router-dom"
import {doc, getDoc, query} from 'firebase/firestore'
import {db} from '../../utils/firebase'
import { useEffect, useState } from 'react'

export const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const getDocItem = async () => {
            const query = doc(db, "items", id);
            const response = await getDoc(query)
            const producto = {...response.data(), id: response.id}
            setItem(producto)
        }
        getDocItem()
    }, [])

    return (
        <div className="card itemDetailContainer">
            <div className="card-body">
                <ItemDetail producto={item} />
            </div>
        </div >
    )
}