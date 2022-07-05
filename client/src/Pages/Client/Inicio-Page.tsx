import { useContext, useEffect, useState } from 'react';
import Inicio from '../../Component/Client/Incio/Inicio';

import axios from 'axios';
import { TodoContext } from '../../Context/Context';

export const InicioPage = () => {
    const [width, setWidth] = useState<number>(
        window.innerWidth
    );

    const {getComercios, changeWidth, addProductToCart, addProductToCartCopy} = useContext(TodoContext);

    useEffect(() => {
        const getComerciosApi = async () => {
            const res = await axios.get('http://localhost:3001/store/getstore')
                console.log(res.data)
                getComercios(res.data)
        } 

        getComerciosApi()
    }, [])

    useEffect(() => {
        const getProductCart = async () => {
            const res = await axios.get(`http://localhost:3001/cart/getproductcart/${"ff48f3fc-cf4e-4fc3-8b35-51cd7e860b8f"}`)
                console.log(res.data)
                addProductToCart(res.data)
                addProductToCartCopy(res.data)
        } 

        getProductCart()
    }, [])

    

    useEffect(() => {
        function resizeListener() {
        setWidth(window.innerWidth)
    }
        window.addEventListener("resize", resizeListener);
    }, [window.innerWidth])

    useEffect(() => {
        if(width < 700 ){
            changeWidth(true)
        }else{
            changeWidth(false)
        }
    }, [width])

    return (
        <div><Inicio /></div>
    )
}

export default InicioPage;