import { Drawer } from '@mui/material';

import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { TodoContext } from '../../../../../Context/Context';
import { ChipFilter } from '../../../../../styles/style.general';
import Card from './Card/Card';
import { OrderStyle } from './style';

const stateOrder = ['Aprobada', 'Pendiente']

const Order = () => {
    const {todoState, setStateDrawer, filterNotication} = useContext(TodoContext)
    const {stateDrawer, orders, allorders} = todoState;
    const [filter, setFilter] = useState({state:'Aprobada'})

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

    setStateDrawer({noti: false, order: false});
    };

    useEffect(() => {
        filterNotication(filter)
    }, [filter])

    return (
        <>
            <Drawer
                anchor='right'
                open={stateDrawer.noti}
                onClose={toggleDrawer( false)}
            >
                <OrderStyle>
                        <button 
                        className='btn-close'
                        onClick={() => setStateDrawer({noti: false, order: false})}
                        ><AiOutlineClose /></button>
                            
                    <div>
                        <h4>
                            Tus Ordenes
                        </h4>
                    </div>

                    <div className='con-filter'>
                        {stateOrder.map(e => 
                        <ChipFilter 
                            onClick={() => setFilter({state: e})}
                            backgroundcolor={filter.state === e ? "orange" : null}
                            color={filter.state ===  e ? 'white' : null}
                        > {e}</ChipFilter>)
                        }
                    </div>
                    <div className='con-order'>
                        {orders.map(order => <Card order={order}/>) }
                    </div>

                    {orders.length === 0  && <div>No hay ordenes</div>} 
                </OrderStyle>
            </Drawer>
        </>
    )
}

export default Order;
