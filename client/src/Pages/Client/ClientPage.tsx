import React, { useContext, useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import { TodoContext } from '../../Context/Context';
import  io  from "socket.io-client";

export const ClientPage = () => {
    const {todoState, setSocket} = useContext(TodoContext)
    const {currentUser} = todoState;
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
    return (
        <>
            <Outlet />
        </>
    )
}
