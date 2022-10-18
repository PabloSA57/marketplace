import React from 'react'
import { NotiAlertStyle } from './style'
import { MdOutlineNotificationsActive } from "react-icons/md";

interface Prop {
    state: string
}
export const CardNoti = ({state='aprovada'} : Prop) => {
    return (
            <NotiAlertStyle>
                <span className='state-order'>Aprovado</span>
                <p><span><MdOutlineNotificationsActive /></span> Nueva orden</p>
            </NotiAlertStyle>
    )
}
