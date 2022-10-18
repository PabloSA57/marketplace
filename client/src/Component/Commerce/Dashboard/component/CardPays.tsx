import React from 'react'
import {CardDashboardStyle} from './style'
interface Prop {
    type: "mp" | "ef",
    state: string
    title: string
}

export const CardPays = ({type, state='efectivo', title} : Prop) => {
    return (
            <CardDashboardStyle>
                    <div className='c-icon'>
                        <img src="" alt="" />
                    </div>

                    <div className='datos-cd'>
                        <p className='title-card'>{title}</p>
                    </div>

                    <div className='state'>
                        {type === 'ef' && <span className='activado'>*Activado</span>}
                        {type === 'mp' && state=== 'Ambos' && <span className='activado'>*Activado</span>}
                        {type === 'mp' && state=== 'Ef' && <span className='desactivado'>Desactivado</span>}
                    </div>
            </CardDashboardStyle>
    )
}
