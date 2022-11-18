import {useContext, useEffect, useState} from 'react'
import { TodoContext } from '../../../Context/Context';
import { ChipFilter } from '../../../styles/style.general';
import { CardOrder } from './CardOrder/CardOrder';
import { NotiStyle } from './style';




const stateNoti = ['Aprobada', 'Cancelada', 'Pendiente']
const fechaNoti = ['Hoy', 'Ayer', 'Mes']
const paymentNoti = ['Mercado Pago', 'Efectivo']

const Notification = () => {
    const {todoState, filterNotication} = useContext(TodoContext);
    const {orders} = todoState;
    const [filter, setFilter] = useState({
        state: 'Aprobada',
        fecha: 'Hoy',
        pay: 'Mercado Pago'
    })


    useEffect(() => {
        console.log(orders)
        console.log(filter)
        filterNotication(filter)
        console.log(orders)
    }, [filter])

    const handleFilter = (valor: string, type: string ) => setFilter({...filter, [type]: valor})
    

    return (
            <NotiStyle>
                <div>
                    <h3>Notificaciones</h3>
                    <div className='filter'>
                        <div className='cont-filter'>
                            {
                                stateNoti.map(e => 
                                <ChipFilter 
                                    onClick={() => handleFilter(e, "state")}
                                    backgroundcolor={filter.state === e ? 'orange' : null}
                                    color={filter.state === e ? 'white' : null}
                                >{e}</ChipFilter>)
                            }
                        </div>

                        <div className='cont-filter'>
                            {
                                fechaNoti.map(e => 
                                <ChipFilter 
                                    onClick={() => handleFilter(e, "fecha")}
                                    backgroundcolor={filter.fecha === e ? 'orange' : null}
                                    color={filter.fecha === e ? 'white' : null}
                                >{e}</ChipFilter>)
                            }
                        </div>
                        <div className='cont-filter'>
                            {
                                paymentNoti.map(e => 
                                <ChipFilter 
                                    onClick={() => handleFilter(e, "pay")}
                                    backgroundcolor={filter.pay === e ? 'orange' : null}
                                    color={filter.pay === e ? 'white' : null}
                                >{e}</ChipFilter>)
                            }
                        </div>
                    </div>
                    {/* <div className='con-filter'>
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
    </div> */}
                </div>
                {orders.length > 0 
                ? orders.map(order => <CardOrder orders={order}/>)
                :<div>No tiene ordenes</div>
            }
            </NotiStyle>
    )
}

export default Notification;
