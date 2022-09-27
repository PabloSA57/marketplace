import React from 'react'
import { SpinerStyle } from './style'
import logo from '../../../media/order-creada-pendiente.png'

export const Spiner = () => {
    return (
            <SpinerStyle>
                <img
                className='img'
                src={logo} 
                alt="" />
            </SpinerStyle>
    )
}
