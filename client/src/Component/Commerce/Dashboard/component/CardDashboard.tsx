import React from 'react'
import { CardDashboardStyle } from './style'

export const CardDashboard = ({count_amount, title, imgurl}: any) => {
    return (
            <CardDashboardStyle>
                <div className='c-icon'>
                    <img src={imgurl} alt="" />
                </div>

                <div className='datos-cd'>
                    <p className='title-card'>{title}</p>
                    <span className='valor-tve-ts'>{count_amount}</span>
                </div>
            </CardDashboardStyle>
    )
}
