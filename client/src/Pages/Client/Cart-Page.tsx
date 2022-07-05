import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import Cart from '../../Component/Client/Cart/Cart'
import Header from '../../Component/Client/Incio/Component/Header/Header'
import { TodoContext } from '../../Context/Context'

export const CartPage = () => {
    const {addProductToCart, addProductToCartCopy} = useContext(TodoContext);
    useEffect(() => {
        const getProductCart = async () => {
            const res = await axios.get(`http://localhost:3001/cart/getproductcart/${"ff48f3fc-cf4e-4fc3-8b35-51cd7e860b8f"}`)
                console.log(res.data)
                addProductToCart(res.data)
                addProductToCartCopy(res.data)
        } 

        getProductCart()
    }, [])

    
    return (
        <div>
            <Header />
            <Cart />
            
        </div>
    )
}
