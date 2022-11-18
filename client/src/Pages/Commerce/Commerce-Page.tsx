
import { Drawer } from '@mui/material';
import { useContext, useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Nav from '../../Component/Commerce/Nav/Nav';
import Notification from '../../Component/Commerce/Notification/Notication';
import { TodoContext } from '../../Context/Context';
import { CommercePStyle } from './style';

import  io  from "socket.io-client";
import { CardNoti } from '../../Component/Commerce/Notification/NoficationAlert/CardNoti';
import axios from 'axios';
import { getOrders } from '../../service/order';

//const socket = io("ws://localhost:3001/socket")

const CommercePage = () => {
    const {todoState, setOrder, filterNotication} = useContext(TodoContext)
    const {widthPhone, currentUser, mycommerce} = todoState;
    //const [isConnected, setIsConnected] = useState(socket.connected);
    const [newNoti, setNewNoti] = useState('')
    const [arrivalNoti, setArrivalNoti] = useState('')
    const [state, setState] = useState<boolean>(false);
    const [showNoti, setShowNoti] = useState(false);
    const [alert, setAlert] = useState<boolean>(false)

    const socket = useRef<any>()

    const toggleDrawer =
        (open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState(open);
        };

        useEffect(() => {
            //Notification
            const _getOrder = async () => {
    
                if(mycommerce?.id !== undefined){
    
                    try {
                        const resp = await getOrders(mycommerce?.id, 'storeId')
                        setOrder(resp)
                        console.log("resp orders :",resp)
                    } catch (error) {
                        console.log(error)
                    }
                }
                
            }
            _getOrder()
        
        }, [mycommerce, alert])
        /*useEffect(() => {
            console.log(socket)
            socket.on('connection', () => {
                setIsConnected(true);
            });
        
            socket.on('disconnect', () => {
                setIsConnected(false);
            });
        
            return () => {
                socket.off('connect');
                socket.off('disconnect');
                socket.off('pong');
                };
            }, []);*/

            useEffect(() => {
                //console.log(socket.current.connected)
                        socket.current = io("http://localhost:3001");
                        console.log(socket)
                        
                        
                        socket.current.on("getNotification" ,  (data: any) => {
                            setArrivalNoti(data.infoNoti)
                            console.log('noti recibida')
                        });
                        
            }, [])

            useEffect(() => {
                
                if(arrivalNoti){
                    console.log('aqui se activa notialert')
                        setNewNoti(arrivalNoti)
                        setShowNoti(true)
                        setAlert(!alert)
                }
                
                
            const timer=setTimeout(() => {
                    setShowNoti(false)
                    setNewNoti('')
                    setArrivalNoti('')
                }, 3000)
                return () => clearTimeout(timer)
            }, [arrivalNoti])


            useEffect(() => {
                
                currentUser && socket.current.emit('addUser', currentUser?.id);
            }, [currentUser])

    return (
            <CommercePStyle>
                <Nav />
                    <Outlet />
                    {showNoti && <CardNoti state={newNoti}/>}
                    
                {!widthPhone ? <Notification /> : null}

                {widthPhone ? <button 
                className='btn-noti'
                onClick={toggleDrawer(true)}
                >N</button> : null}

                <Drawer
                    anchor='bottom'
                    open={state}
                    onClose={toggleDrawer( false)}
                >
                    <button onClick={toggleDrawer(false)}>x</button>
                    <Notification />
                </Drawer>
            </CommercePStyle>
    )
}

export default CommercePage;