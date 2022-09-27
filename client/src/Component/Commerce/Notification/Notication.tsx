import React, {useContext, useEffect, useState} from 'react'
import { CardOrder } from './CardOrder/CardOrder';
import { NotiStyle } from './style';
import { TodoContext } from '../../../Context/Context';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



const Notification = () => {
    const {todoState, filterOrders} = useContext(TodoContext);
    const {orders} = todoState;
    const [age, setAge] = useState('')

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    console.log(orders)

    const handleFilter = (e: React.ChangeEvent<HTMLSelectElement> ) => {
        console.log(e.target.value)
        filterOrders(e.target.value)
    }
    return (
            <NotiStyle>
                <div>
                    <h3>Notificaciones</h3>

                    <div className='con-filter'>
                        <div className='filter'> 
                            <select
                            onChange={handleFilter}
                            className='select-input' 
                            placeholder='fechaaaaa'
                            >
                                <option value="All">All</option>
                                <option value="approved">Aprobadas</option>
                                <option value="pendientes">Pendientes</option>
                                <option value="cancelada">
                                    Cancelada
                                </option>
                            </select>

                            <label 
                            className='labelselect'>
                                State
                            </label>
                        </div>
                    </div>
                </div>
                {orders.length > 1 
                ? orders.map(order => <CardOrder orders={order}/>)
                :<div>No tiene ordenes</div>
            }
            </NotiStyle>
    )
}

export default Notification;
