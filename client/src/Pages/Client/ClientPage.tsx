import React, { useContext, useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { TodoContext } from '../../Context/Context';
import  io  from "socket.io-client";
import { Drawer } from '@mui/material';
import { Order } from '../../Component/Client/Cart/Component/Order/Order';
import { getOrders } from '../../service/order';
import Header from '../../Component/Client/Incio/Component/Header/Header';
import Footer from '../../Component/General/Footer/Footer';

export const ClientPage = () => {
    const {todoState, setSocket, setOrder} = useContext(TodoContext)
    const {currentUser} = todoState;
    const [stateDrawer, setStateDrawer] = useState(false)

    const socket = useRef<any>()

    useEffect(() => {
        //console.log(socket.current.connected)
                socket.current = io("http://localhost:3001");
                //socket.current.on("getNotification" , (data: any) => console.log(data))
                console.log(socket)
                setSocket(socket)
    }, [])

    useEffect(() => {
        currentUser && socket.current.emit('addUser', currentUser?.id);
    }, [currentUser])

    useEffect(() => {
        if(currentUser !== null){

            (async () => {
                const res = await getOrders(currentUser?.id, 'userId')
                console.log(res)
                setOrder(res)
            })()
        }
    }, [currentUser])
    return (
        <>
            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    )
}
