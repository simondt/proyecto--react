import { createContext, useState } from "react"

export const CartContext = createContext('jijo')

export const CartProvider = ({ children }) => {
    const [listaCarrito, setListaCarrito] = useState([])

    const isInCart = (itemID) => {
        return listaCarrito.some((elm) => elm.id === itemID)
    }

    const getTotalPrice = () =>{
        const total = listaCarrito.reduce((e,item)=>e + item.precio*item.quantity,0);
        return total;
    }

    const addItem = (item) => {
        if (!isInCart(item.id)) {
            const newList = [...listaCarrito, item]
            setListaCarrito(newList)
        } else {
            const newList = [...listaCarrito]
            const ind = newList.findIndex(elm => elm.id === item.id)
            newList[ind].quantity += item.quantity
            setListaCarrito(newList)
        } // si el item ya se encuentra en la lista, aumenta su cantidad segun el parametro recibido
    }

    const removeItem = (itemID) => {
        const newArray = listaCarrito.filter(elm => elm.id !== itemID);
        setListaCarrito(newArray);
    }

    const clear = () => {
        setListaCarrito([])
    }

    return (
        <CartContext.Provider value={{ listaCarrito, addItem, removeItem, clear, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    )
}