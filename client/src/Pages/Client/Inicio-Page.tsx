import { useContext, useEffect, useState } from 'react';
import Inicio from '../../Component/Client/Incio/Inicio';

import axios from 'axios';
import { TodoContext } from '../../Context/Context';
import { getStoreAround } from '../../service/store';
//import { ICommerce } from '../../Interface/Commerce';
import { useSesionStorage } from '../../hooks/useSesionStorage';
import Presentation from '../../Component/Client/Incio/Component/Presentation/Presentation';
import Commerce from '../../Component/Client/Incio/Component/Commerce/Commerce';
import Products from '../../Component/Client/Incio/Component/Products/Products';
import Order from '../../Component/Client/Incio/Component/Order/Order';
import { API_BASE_URL } from '../../config/config';


export const InicioPage = () => {
    const {get} = useSesionStorage('productscart')

    const {getComercios, addProductToCart, addProductToCartCopy, todoState} = useContext(TodoContext);
    const {LatLng, currentUser} = todoState;

    useEffect(() => {
        const getComerciosApi = async () => {
            const res = await axios.get(`${API_BASE_URL}/store/getstore`)
                console.log(res.data)
                getComercios(res.data)
        } 

        getComerciosApi()
    }, [])

    useEffect(() => {
        const res = get()
        addProductToCart(res)
        addProductToCartCopy(res)
    }, [])
    /*useEffect(() => {
        const getProductCart = async () => {
            const res = await axios.get(`http://localhost/cart/getproductcart/${currentUser?.id}`)
                addProductToCart(res.data)
                addProductToCartCopy(res.data)
        } 

        getProductCart()
    }, [currentUser])*/

    /*const onSuccess = async (location: any) => {
        const res = await getStoreAround(location.coords.latitude, location.coords.longitude)
        getComercios(res.data)
    }

    const onError = (error: any) => {
        console.log(error)
    }


    useEffect(() => {
        if(LatLng?.lat === null || LatLng?.lng === null){
            console.log('geolocation')
            if (!("geolocation" in navigator)) {
                onError({
                code: 0,
                message: "Geolocation not supported",
                });
            }
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }else {
            const Func = async () => {
                const res = await getStoreAround(LatLng.lat as number, LatLng.lng as number);
                getComercios(res?.data )
            }

            Func()
        }
        
    }, [LatLng]);*/


    return (
        <>
            <Presentation />
            <Commerce />
            <Products />
            <Order />
        </>
    )
}

export default InicioPage;