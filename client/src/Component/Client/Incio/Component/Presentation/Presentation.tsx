
import { PresentationStyle } from "./style"
import carrito from '../../../../../media/carrito.png';

export default function Presentation() {
    return (
        <PresentationStyle>
            <div className='presentacion'>
            <div className='Eslogan'>
                <p>
                Todo lo que buscas en el dia.
                </p>
            </div>
            <div className='pngcarrito'>
                <div>
                <img src={carrito}  alt="" />
                </div>
            </div>
            </div>
        </PresentationStyle>
    )
}
