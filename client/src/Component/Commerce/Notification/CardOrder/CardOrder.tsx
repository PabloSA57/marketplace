import React, { useCallback, useState } from 'react'
import { Order } from '../../../../Interface/Commerce'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import { FcApproval, FcClock, FcDisapprove } from "react-icons/fc";
import { CardOrderStyle } from './style';
import { BiTime } from 'react-icons/bi';
import { Mapbox } from '../../../../lib/mapbox/Mapbox';
import { Link } from 'react-router-dom';
interface Prop {
    orders: Order
}

export const CardOrder = ({orders}: Prop) => {
    const [lat, setLat] = useState<number | null>(null)
    const [lng, setLng] = useState<number | null>(null)

    return (
            <CardOrderStyle>
            <Accordion>
                <AccordionSummary
                    aria-controls='planella-content'
                    id='panelia-header'
                    className='head-card-noti'
                >
                    <div className='head-cont-noti'>
                        <div className='icon-state'>
                            <span>
                                {orders.state === 'Aprobada' && <FcApproval />}
                                {orders.state === 'Cancelada' && <FcDisapprove /> }
                                {orders.state === 'Pendiente' && <FcClock/> }
                            </span>
                            <p>Codigo: {orders.id.slice(9,13)}</p>
                        </div>

                        <div className='time-noti'>
                            <span><BiTime /></span>
                        </div>
                    </div>
                </AccordionSummary>
                    <AccordionDetails className='details'>
                        <div>
                            <h4>Informacion de la orden</h4>

                            <div className='info-order'>
                                <div>
                                    <p className='sub-title'>Estado</p>
                                    <p className='datos'>{orders.state}</p>
                                </div>

                                <div>
                                    <p className='sub-title'>Medio de pago</p>
                                    <p className='datos'>{orders.type_payment}</p>
                                </div>

                                <div>
                                    <p className='sub-title'>Entrega del producto</p>
                                    <p className='datos'>Delivery</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4>Productos</h4>
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
                                    <span className='sub-title'>Nombre</span>
                                </div>

                                <div className='table-row end'>
                                    <span className='sub-title'>Kg/Unidad</span>
                                </div>

                                <div className='table-row end'>
                                    <span className='sub-title'>Precio total</span>
                                </div>
                            </div>
                            <div className='con-cardproduct'>
                                
                                    {orders.detailorders.map(e => (
                                    <div className='card-product-order'>
                                        <div className='con-img'>
                                            <img className='img-product' src={e.product.imgurl} alt="" />

                                            <p className='datos'>{e.product.name}</p>
                                        </div>
                                        

                                        <div className='unid'>
                                            <p className='datos'>
                                                {e.quantity} /
                                                Unidades
                                            </p>
                                        </div>
                                        
                                        <div className='precio'>
                                            <p className='datos'>
                                                $ {e.precio}
                                            </p>
                                        </div>
                                        
                                    </div>
                                    
                                    ))}
                                    <div className='total'>
                                        <h4>Total</h4>
                                        <p>{orders?.amount}</p>
                                    </div>
                                
                            </div>
                            
                        </div>

                        
                        <div>
                            <h4>Info del cliente</h4>

                            <div className='info-table'>
                                <div className='table-row'>
                                    <span className='sub-title'>Nombre</span>
                                </div>

                                <div className='table-row end'>
                                    <span className='sub-title'>Direccion</span>
                                </div>

                                <div className='table-row end'>
                                    <span className='sub-title'>Telefono</span>
                                </div>

                            </div>

                            <div className='info-table'>
                                <div className='table-row'>
                                    <span className='datos'>{orders.user.name} {orders.user.lastname}</span>
                                </div>

                                <div className='table-row '>
                                    <span className='datos'>B san expedito m j l1</span>
                                </div>

                                <div className='table-row'>
                                    <span className='datos'>+5903816209629</span>
                                </div>

                            </div>
                            <div>
                                <Link to={`/commerce/detailorder/${orders.id}`}>
                                <span className='link-envio'>Informacion del envio</span>
                                
                                </Link>
                            </div>
                        </div>
                    </AccordionDetails>
            </Accordion>
            </CardOrderStyle>
    )
}
