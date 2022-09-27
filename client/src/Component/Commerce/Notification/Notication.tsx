import React, {useContext, useEffect, useState} from 'react'
import { CardOrder } from './CardOrder/CardOrder';
import { NotiStyle } from './style';
import { TodoContext } from '../../../Context/Context';




const Notification = () => {
    const {todoState} = useContext(TodoContext);
    const {orders} = todoState;

    console.log(orders)
    return (
            <NotiStyle>
                <div>
                    <h3>Notificaciones</h3>

                    <div>
                        filter
                    </div>
                </div>
                {orders.map(order => <CardOrder orders={order}/>)}
            </NotiStyle>
    )
}

export default Notification;
