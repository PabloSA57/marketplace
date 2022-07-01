import { useContext, useEffect, useState } from 'react';
import Inicio from '../../Component/Client/Incio/Inicio';

import axios from 'axios';
import { TodoContext } from '../../Context/Context';

export const InicioPage = () => {
    const [width, setWidth] = useState<number>(
        window.innerWidth
    );

    const {getComercios, changeWidth, addProductToCart} = useContext(TodoContext);

    useEffect(() => {
        const getComerciosApi = async () => {
            const res = await axios.get('http://localhost:3001/getstore')
                console.log(res.data)
                getComercios(res.data)
        } 

        getComerciosApi()
    }, [])

    useEffect(() => {
        const getProductCart = async () => {
            const res = await axios.get(`http://localhost:3001/getproductcart/${"a97da9de-1baa-4c23-8fb0-811f70f07a25"}`)
                console.log(res.data)
                addProductToCart(res.data)
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