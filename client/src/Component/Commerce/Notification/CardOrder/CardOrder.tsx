import React, { useCallback } from 'react'
import { Order } from '../../../../Interface/Commerce'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { CardOrderStyle } from './style';
interface Prop {
    orders: Order
}

export const CardOrder = ({orders}: Prop) => {

    useCallback(() => {
        stateOrderStyle()
    }, [orders])

    const stateOrderStyle = () => {
        if(orders.state === 'approved') return {background: '#5B84EE', }
        if(orders.state === 'pendiente') return {background: 'yellow'}
        if(orders.state === 'cancelada') return {background: 'red'}
    }
    return (
            <CardOrderStyle>
            <Accordion>
                <AccordionSummary
                    aria-controls='planella-content'
                    id='panelia-header'
                    style={stateOrderStyle()}
                    className='head-card-noti'
                >
                    <Typography>{orders.state}</Typography>
                </AccordionSummary>
                    <AccordionDetails className='details'>
                        <div>
                            <h3>Productos</h3>
                            {/*<table>
                                    <tr className='categoria-product'>
                                        <td>Nombre</td>
                                        <td>Unidad/kg</td>
                                        <td>Precio total</td>
                                    </tr>
                                
                                    {orders.detailorders.map(p => (
                                        <tr className='info-product'>
                                            <td className='img-name'>
                                                <img className='img-product' src={p.product.imgurl} alt="" />  
                                                <span>{p.product.name}</span>
                                            </td>
                                            <td>{p.quantity}</td>
                                            <td>{p.precio}</td>
                                            
                                        </tr>
                                    ))}
                                
                            </table>*/}

                            <div className='info-table'>
                                <div className='table-row'>
                                    <span>Nombre</span>
                                </div>

                                <div className='table-row end'>
                                    <span>Kg/Unidad</span>
                                </div>

                                <div className='table-row end'>
                                    <span>Precio total</span>
                                </div>
                            </div>
                            <div className='con-cardproduct'>
                                
                                    {orders.detailorders.map(e => (
                                    <div className='card-product-order'>
                                        <div className='con-img'>
                                            <img className='img-product' src={e.product.imgurl} alt="" />

                                            <h5>{e.product.name}</h5>
                                        </div>
                                        

                                        <div className='unid'>
                                            <span>
                                                {e.quantity} /
                                                Unidades
                                            </span>
                                        </div>
                                        
                                        <div className='precio'>
                                            <span>
                                                $ {e.precio}
                                            </span>
                                        </div>
                                        
                                    </div>
                                    
                                    ))}
                                    <div className='total'>
                                        <h3>Total</h3>
                                        <p>{orders?.amount}</p>
                                    </div>
                                
                            </div>
                            
                        </div>
                        
                        <div>
                        <h3>Info del cliente</h3>
                            <div className='info-table'>
                                <div className='table-row'>
                                    <span>Nombre</span>
                                </div>

                                <div className='table-row end'>
                                    <span>Direccion</span>
                                </div>

                                <div className='table-row end'>
                                    <span>Telefono</span>
                                </div>

                            </div>

                            <div className='info-table'>
                                <div className='table-row'>
                                    <span className='data-table'>{orders.user.name} {orders.user.lastname}</span>
                                </div>

                                <div className='table-row '>
                                    <span className='data-table'>B san expedito m j l1</span>
                                </div>

                                <div className='table-row'>
                                    <span className='data-table'>+5903816209629</span>
                                </div>

                            </div>
                        </div>
                    </AccordionDetails>
            </Accordion>
            </CardOrderStyle>
    )
}
