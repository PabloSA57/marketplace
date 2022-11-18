import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Order } from '../../../Interface/Commerce'
import { Mapbox } from '../../../lib/mapbox/Mapbox'
import { DetailOrderStyle } from './style'

interface Prop {
    order: Order
}

export const DetailOrder = () => {
    const [lat, setLat] = useState<number | null>(null)
    const [lng, setLng] = useState<number | null>(null)

    return (
            <DetailOrderStyle>
                <h3>Los Sierras</h3>
                <div className='con-map'>
                    <Mapbox 
                    formLat={setLat}
                    formLng={setLng}
                    from='formcart'
                    />
                </div>

                <div>
                    <span></span>
                    <span></span>
                </div>

                <div>
                    <span></span>
                    <span></span>
                </div>
            </DetailOrderStyle>
    )
}
