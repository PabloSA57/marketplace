import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { DetailOrder } from '../../Component/Commerce/DetailOrder/DetailOrder';
import Footer from '../../Component/General/Footer/Footer';
import { getOrders } from '../../service/order';

const DetailOrderPage = () => {
    const {id} = useParams()
    const [order, setOrder] = useState([])

    useEffect(() => {
        const getOrder = async () => {

            try {
                const res = await getOrders(1, 'id')
                setOrder(order)
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        } 

        getOrder()
    }, [id])

    console.log(id)
    return (
        <>

            <main><DetailOrder /></main>
            <Footer />
        </>
    )
}

export default DetailOrderPage;
