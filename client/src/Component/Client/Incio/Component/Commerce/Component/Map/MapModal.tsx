import {useState} from 'react'
import { Mapbox } from '../../../../../../../lib/mapbox/Mapbox';
import { ModalUi } from '../../../../../../General/Modal';




const MapModal = ({open, handleClose}: any) => {
    const [lng, setLng] = useState<number | null>(null)
    const [lat, setLat] = useState<number | null>(null)

    const handleClick = () => {
        console.log(lng, lat)
        if(lng !== null && lat !== null){
            sessionStorage.setItem('lng', lng?.toString() as string)
            sessionStorage.setItem('lat', lat?.toString() as string)

            window.location.reload()
        }else {
            console.log('seleccione')
        }
    }

    
    return (    
                <ModalUi open={open} handleClose={handleClose}>
                        <Mapbox  formLat={setLat} formLng={setLng} from='searchstore'/>
                        <button onClick={handleClick}>Nueva Direccion</button>
                </ModalUi>
                        
    )
}

export default MapModal;
