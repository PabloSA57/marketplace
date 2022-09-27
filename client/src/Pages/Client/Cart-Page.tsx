import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { storeOrder } from '../../adapter/cart.adapter'
import Cart from '../../Component/Client/Cart/Cart'
import Header from '../../Component/Client/Incio/Component/Header/Header'
import Footer from '../../Component/General/Footer/Footer'
import { TodoContext } from '../../Context/Context'
import { useSesionStorage } from '../../hooks/useSesionStorage'

const CartPage = () => {
    const {todoState} = useContext(TodoContext);
    const {currentUser} = todoState;
    const {get} = useSesionStorage('productscart')

    const {addProductToCart, addProductToCartCopy, getStoreCart} = useContext(TodoContext);
    /*useEffect(() => {
        const getProductCart = async () => {
            const res = await axios.get(`http://localhost:3001/cart/getproductcart/${currentUser?.id}`)
                console.log(res.data)

                //let orderPro = res.data?.map(e:  => e.products)
                const resStoreOrder = storeOrder(res.data)
                getStoreCart(resStoreOrder);
                addProductToCart(res.data);
                addProductToCartCopy(res.data);
        } 

        getProductCart()
    }, [currentUser?.id])*/

    useEffect(() => {
        const res = get();
        const resStoreOrder = storeOrder(res)
                getStoreCart(resStoreOrder);
                addProductToCart(res);
                addProductToCartCopy(res);
    }, [])
    
    return (
        <div style={{height: '100vh'}}>
            <Header />
            <Cart />
            <Footer />
        </div>
    )
}

export default CartPage;